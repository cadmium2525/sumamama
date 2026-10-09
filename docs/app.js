var We=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Cf=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function Lf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function id(){let n=la("canvas");return n.style.display="block",n}function ca(...n){let t="THREE."+n.shift();fr?fr("log",t,...n):console.log(t,...n)}function nd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function re(...n){n=nd(n);let t="THREE."+n.shift();if(fr)fr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function oe(...n){n=nd(n);let t="THREE."+n.shift();if(fr)fr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ws(...n){let t=n.join(" ");t in Gu||(Gu[t]=!0,re(...n))}function sd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function kn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ti[n&255]+Ti[n>>8&255]+Ti[n>>16&255]+Ti[n>>24&255]+"-"+Ti[t&255]+Ti[t>>8&255]+"-"+Ti[t>>16&15|64]+Ti[t>>24&255]+"-"+Ti[e&63|128]+Ti[e>>8&255]+"-"+Ti[e>>16&255]+Ti[e>>24&255]+Ti[i&255]+Ti[i>>8&255]+Ti[i>>16&255]+Ti[i>>24&255]).toLowerCase()}function ye(n,t,e){return Math.max(t,Math.min(e,n))}function If(n,t){return(n%t+t)%t}function Gc(n,t,e){return(1-e)*n+e*t}function yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Df(){let n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ne&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:t,whitePoint:i,transfer:oa,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:i,transfer:Ne,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),n}function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}function Zc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function ih(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ms.fromArray(n,r);let o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=t.dot(Ms),c=e.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function fo(n,t,e,i,s,r){sr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(jr.x=r*sr.x-s*sr.y,jr.y=s*sr.x+r*sr.y):jr.copy(sr),n.copy(t),n.x+=jr.x,n.y+=jr.y,n.applyMatrix4(od)}function Jf(n,t,e,i,s,r,a,o){let l;if(t.side===Ye?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;bo.copy(o),bo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(bo);return c<e.near||c>e.far?null:{distance:c,point:bo.clone(),object:n}}function Mo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,xo),n.getVertexPosition(l,yo),n.getVertexPosition(c,vo);let h=Jf(n,t,e,i,xo,yo,vo,s0);if(h){let d=new P;On.getBarycoord(s0,xo,yo,vo,d),s&&(h.uv=On.getInterpolatedAttribute(s,o,l,c,d,new mt)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,l,c,d,new mt)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};On.getNormal(xo,yo,vo,u.normal),h.face=u,h.barycoord=d}return h}function To(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Zo.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),e.distanceSqToSegment(Zo,Jo,ch,l0)>i)return;ch.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ch);if(!(c<t.near||c>t.far))return{distance:c,point:l0.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}function h0(n,t,e,i,s,r,a){let o=vh.distanceSqToPoint(n);if(o<e){let l=new P;vh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}function Yh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}function f0(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Kf(n,t){let e=1-n;return e*e*t}function Qf(n,t){return 2*(1-n)*n*t}function tp(n,t){return n*n*t}function na(n,t,e,i){return Kf(n,t)+Qf(n,e)+tp(n,i)}function ep(n,t){let e=1-n;return e*e*e*t}function ip(n,t){let e=1-n;return 3*e*e*n*t}function np(n,t){return 3*(1-n)*n*n*t}function sp(n,t){return n*n*n*t}function sa(n,t,e,i,s){return ep(n,t)+ip(n,e)+np(n,i)+sp(n,s)}function rp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ld(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=hp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ea(r,a,e,o,l,c,0),a}function ld(n,t,e,i,s){let r;if(s===bp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=p0(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=p0(a/i|0,n[a],n[a+1],r);return r&&Er(r,r.next)&&(Ta(r),r=r.next),r}function Rs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Er(e,e.next)||ti(e.prev,e,e.next)===0)){if(Ta(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ea(n,t,e,i,s,r,a){if(!n)return;!a&&r&&mp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?op(n,i,s,r):ap(n)){t.push(l.i,n.i,c.i),Ta(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=lp(Rs(n),t),Ea(n,t,e,i,s,r,2)):a===2&&cp(n,t,e,i,s,r):Ea(Rs(n),t,e,i,s,r,1);break}}}function ap(n){let t=n.prev,e=n,i=n.next;if(ti(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ia(s,o,r,l,a,c,g.x,g.y)&&ti(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function op(n,t,e,i){let s=n.prev,r=n,a=n.next;if(ti(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),p=_h(f,g,t,e,i),b=_h(y,m,t,e,i),w=n.prevZ,_=n.nextZ;for(;w&&w.z>=p&&_&&_.z<=b;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ia(o,h,l,d,c,u,w.x,w.y)&&ti(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ia(o,h,l,d,c,u,_.x,_.y)&&ti(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ia(o,h,l,d,c,u,w.x,w.y)&&ti(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ia(o,h,l,d,c,u,_.x,_.y)&&ti(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function lp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Er(i,s)&&hd(i,e,e.next,s)&&wa(i,s)&&wa(s,i)&&(t.push(i.i,e.i,s.i),Ta(e),Ta(e.next),e=n=s),e=e.next}while(e!==n);return Rs(e)}function cp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yp(a,o)){let l=ud(a,o);a=Rs(a,a.next),l=Rs(l,l.next),Ea(a,t,e,i,s,r,0),Ea(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function hp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=ld(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(xp(c))}s.sort(up);for(let r=0;r<s.length;r++)e=dp(s[r],e);return e}function up(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function dp(n,t){let e=fp(n,t);if(!e)return t;let i=ud(e,n);return Rs(i,i.next),Rs(e,e.next)}function fp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Er(n,e))return e;do{if(Er(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&cd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);wa(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&pp(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function pp(n,t){return ti(n.prev,n,t.prev)<0&&ti(t.next,n,n.next)<0}function mp(n,t,e,i){let s=n;do s.z===0&&(s.z=_h(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gp(s)}function gp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function _h(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function xp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function cd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function ia(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&cd(n,t,e,i,s,r,a,o)}function yp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!vp(n,t)&&(wa(n,t)&&wa(t,n)&&_p(n,t)&&(ti(n.prev,n,t.prev)||ti(n,t.prev,t))||Er(n,t)&&ti(n.prev,n,n.next)>0&&ti(t.prev,t,t.next)>0)}function ti(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Er(n,t){return n.x===t.x&&n.y===t.y}function hd(n,t,e,i){let s=Lo(ti(n,t,e)),r=Lo(ti(n,t,i)),a=Lo(ti(e,i,n)),o=Lo(ti(e,i,t));return!!(s!==r&&a!==o||s===0&&Co(n,e,t)||r===0&&Co(n,i,t)||a===0&&Co(e,n,i)||o===0&&Co(e,t,i))}function Co(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Lo(n){return n>0?1:n<0?-1:0}function vp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&hd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function wa(n,t){return ti(n.prev,n,n.next)<0?ti(n,t,n.next)>=0&&ti(n,n.prev,t)>=0:ti(n,t,n.prev)<0||ti(n,n.next,t)<0}function _p(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ud(n,t){let e=bh(n.i,n.x,n.y),i=bh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function p0(n,t,e,i){let s=bh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function m0(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function g0(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function Sp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Ep(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}function Fs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(x0(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(x0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ai(n){let t={};for(let e=0;e<n.length;e++){let i=Fs(n[e]);for(let s in i)t[s]=i[s]}return t}function x0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}function ar(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function fh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function fd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ap(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Cp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=fd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Ap(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function y0(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function jh(n,t,e,i){let s=Op(i);switch(e){case Vh:return n*t;case Lr:return n*t/s.components*s.byteLength;case wl:return n*t/s.components*s.byteLength;case ps:return n*t*2/s.components*s.byteLength;case Tl:return n*t*2/s.components*s.byteLength;case Wh:return n*t*3/s.components*s.byteLength;case tn:return n*t*4/s.components*s.byteLength;case Rl:return n*t*4/s.components*s.byteLength;case Ba:case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Pl:return Math.max(n,16)*Math.max(t,8)/4;case Al:case Ll:return Math.max(n,8)*Math.max(t,8)/2;case Il:case Dl:case Nl:case Fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ul:case za:case Bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Ql:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ec:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ga:case nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Op(n){switch(n){case Ni:case kh:return{byteLength:1,components:1};case Ar:case Hh:case hn:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case cn:case Ml:case Qi:return{byteLength:4,components:1};case zh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var S0,Rh,E0,Da,w0,Rr,Ki,Ye,ke,An,hs,Fe,Ah,Ch,T0,Us,R0,A0,C0,L0,P0,I0,D0,U0,Lh,Ph,N0,F0,B0,O0,k0,H0,z0,G0,V0,No,Fo,Bo,hr,Oo,ko,Ho,zo,yl,W0,X0,ln,Ih,Dh,Uh,Nh,Fh,Bh,Ua,Oh,us,Ns,vl,_l,Na,ur,vn,Go,oi,q0,Fa,bi,bl,ds,Ni,kh,Hh,Ar,Ml,cn,Qi,hn,Sl,El,Cr,zh,Gh,Vh,Wh,tn,bn,fs,Lr,wl,ps,Tl,Rl,Ba,Oa,ka,Ha,Al,Cl,Ll,Pl,Il,Dl,Ul,Nl,Fl,za,Bl,Ol,kl,Hl,zl,Gl,Vl,Wl,Xl,ql,Yl,Zl,Jl,$l,jl,Kl,Ql,tc,ec,ic,Ga,nc,ra,Vo,Do,mh,gh,xh,yh,Y0,Pr,Z0,Xn,_i,aa,oa,Ne,Uo,J0,$0,j0,K0,sc,Q0,td,rc,ed,Xh,Va,qh,on,dr,Gu,fr,rd,Mn,Ti,zc,Wo,mt,Sn,P,Vc,Vu,ue,Wc,Wu,Xu,be,Xs,Xo,Uf,pr,Nf,qc,Di,Xe,qo,Ui,ha,Yo,Ae,qs,nn,Ff,Bf,Kn,no,ki,qu,Yu,En,ua,Of,Zu,Ys,Dn,so,qr,kf,Hf,Ju,$u,ju,Ku,zf,Zs,Yc,ce,Zt,Gf,mr,ad,Qn,ro,gt,Ri,zn,sn,Un,Jc,Nn,Js,$s,Qu,$c,jc,Kc,Qc,th,eh,On,wn,Fn,rn,ao,js,Ks,Qs,ts,es,bs,Yr,oo,lo,Ms,ai,co,Vf,Pe,da,fa,ne,Wf,Zr,nh,Tn,Xf,ji,sh,tr,Hi,Jr,mi,me,pa,Ii,gr,rh,qf,Yf,an,Zf,zi,ci,er,$r,ir,nr,sr,jr,od,ho,Kr,uo,t0,ah,e0,gi,Bn,oh,po,mo,xr,Me,i0,Ss,go,n0,xo,yo,vo,lh,_o,s0,bo,Ft,Ts,yr,rr,r0,So,a0,$f,Qr,ta,ma,Es,jf,Eo,vr,_r,Zo,Jo,o0,ea,wo,ch,l0,ga,br,c0,vh,Ro,Ao,Mr,xa,Gn,ns,$o,ya,ei,ss,Rn,qe,_e,jo,Gi,Sr,Ko,u0,d0,hh,uh,dh,Vn,va,Qo,_a,tl,ba,Ma,rs,el,il,Sa,Mi,Mh,_n,Vi,Mp,As,as,Cs,Ra,Ls,Yt,Si,Ps,dd,Tp,Rp,Qe,nl,ni,Is,Aa,sl,rl,os,al,ol,ll,cl,Wi,ls,hl,ul,dl,Ca,cs,fl,pl,pd,ml,wr,Ds,ph,v0,_0,La,Po,Io,xn,Pa,is,b0,M0,li,Sh,Ia,Tr,Eh,Wn,or,lr,gl,xl,Jh,Lp,$h,Pp,Ip,Dp,Up,Np,Fp,Bp,wh,Ke,Yy,Th,Kh=We(()=>{S0=0,Rh=1,E0=2,Da=1,w0=2,Rr=3,Ki=0,Ye=1,ke=2,An=0,hs=1,Fe=2,Ah=3,Ch=4,T0=5,Us=100,R0=101,A0=102,C0=103,L0=104,P0=200,I0=201,D0=202,U0=203,Lh=204,Ph=205,N0=206,F0=207,B0=208,O0=209,k0=210,H0=211,z0=212,G0=213,V0=214,No=0,Fo=1,Bo=2,hr=3,Oo=4,ko=5,Ho=6,zo=7,yl=0,W0=1,X0=2,ln=0,Ih=1,Dh=2,Uh=3,Nh=4,Fh=5,Bh=6,Ua=7,Oh=300,us=301,Ns=302,vl=303,_l=304,Na=306,ur=1e3,vn=1001,Go=1002,oi=1003,q0=1004,Fa=1005,bi=1006,bl=1007,ds=1008,Ni=1009,kh=1010,Hh=1011,Ar=1012,Ml=1013,cn=1014,Qi=1015,hn=1016,Sl=1017,El=1018,Cr=1020,zh=35902,Gh=35899,Vh=1021,Wh=1022,tn=1023,bn=1026,fs=1027,Lr=1028,wl=1029,ps=1030,Tl=1031,Rl=1033,Ba=33776,Oa=33777,ka=33778,Ha=33779,Al=35840,Cl=35841,Ll=35842,Pl=35843,Il=36196,Dl=37492,Ul=37496,Nl=37488,Fl=37489,za=37490,Bl=37491,Ol=37808,kl=37809,Hl=37810,zl=37811,Gl=37812,Vl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,Jl=37819,$l=37820,jl=37821,Kl=36492,Ql=36494,tc=36495,ec=36283,ic=36284,Ga=36285,nc=36286,ra=2300,Vo=2301,Do=2302,mh=2303,gh=2400,xh=2401,yh=2402,Y0=3200,Pr=0,Z0=1,Xn="",_i="srgb",aa="srgb-linear",oa="linear",Ne="srgb",Uo=7680,J0=519,$0=512,j0=513,K0=514,sc=515,Q0=516,td=517,rc=518,ed=519,Xh=35044,Va=35048,qh="300 es",on=2e3,dr=2001;Gu={},fr=null;rd={[No]:Fo,[Bo]:Ho,[Oo]:zo,[hr]:ko,[Fo]:No,[Ho]:Bo,[zo]:Oo,[ko]:hr},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=Math.PI/180,Wo=180/Math.PI;mt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Sn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vc.copy(this).projectOnVector(t),this.sub(Vc)}reflect(t){return this.sub(Vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vc=new P,Vu=new Sn,ue=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],b=s[1],w=s[4],_=s[7],E=s[2],S=s[5],A=s[8];return r[0]=a*y+o*b+l*E,r[3]=a*m+o*w+l*S,r[6]=a*p+o*_+l*A,r[1]=c*y+h*b+d*E,r[4]=c*m+h*w+d*S,r[7]=c*p+h*_+d*A,r[2]=u*y+f*b+g*E,r[5]=u*m+f*w+g*S,r[8]=u*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(t,e)),this}rotate(t){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-t)),this}translate(t,e){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new ue,Wu=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);be=Df();Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xs===void 0&&(Xs=la("canvas")),Xs.width=t.width,Xs.height=t.height;let s=Xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uf=0,pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xc(s[a].image)):r.push(Xc(s[a]))}else r=Xc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};Nf=0,qc=new P,Di=class n extends Mn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vn,s=vn,r=bi,a=ds,o=tn,l=Ni,c=n.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=kn(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Di.DEFAULT_IMAGE=null;Di.DEFAULT_MAPPING=Oh;Di.DEFAULT_ANISOTROPY=1;Xe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(f+1)/2,E=(p+1)/2,S=(h+u)/4,A=(d+y)/4,v=(g+m)/4;return w>_&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=A/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=v/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends Mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Di(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends qo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ha=class extends Di{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Yo=class extends Di{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Ae=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),a=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Bf)}lookAt(t,e,i){let s=this.elements;return ki.subVectors(t,e),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),Kn.crossVectors(i,ki),Kn.lengthSq()===0&&(Math.abs(i.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),Kn.crossVectors(i,ki)),Kn.normalize(),no.crossVectors(ki,Kn),s[0]=Kn.x,s[4]=no.x,s[8]=ki.x,s[1]=Kn.y,s[5]=no.y,s[9]=ki.y,s[2]=Kn.z,s[6]=no.z,s[10]=ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],w=i[7],_=i[11],E=i[15],S=s[0],A=s[4],v=s[8],T=s[12],C=s[1],N=s[5],k=s[9],z=s[13],I=s[2],G=s[6],J=s[10],K=s[14],ft=s[3],Q=s[7],ct=s[11],ot=s[15];return r[0]=a*S+o*C+l*I+c*ft,r[4]=a*A+o*N+l*G+c*Q,r[8]=a*v+o*k+l*J+c*ct,r[12]=a*T+o*z+l*K+c*ot,r[1]=h*S+d*C+u*I+f*ft,r[5]=h*A+d*N+u*G+f*Q,r[9]=h*v+d*k+u*J+f*ct,r[13]=h*T+d*z+u*K+f*ot,r[2]=g*S+y*C+m*I+p*ft,r[6]=g*A+y*N+m*G+p*Q,r[10]=g*v+y*k+m*J+p*ct,r[14]=g*T+y*z+m*K+p*ot,r[3]=b*S+w*C+_*I+E*ft,r[7]=b*A+w*N+_*G+E*Q,r[11]=b*v+w*k+_*J+E*ct,r[15]=b*T+w*z+_*K+E*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],b=l*f-c*u,w=o*f-c*d,_=o*u-l*d,E=a*f-c*h,S=a*u-l*h,A=a*d-o*h;return e*(y*b-m*w+p*_)-i*(g*b-m*E+p*S)+s*(g*w-y*E+p*A)-r*(g*_-y*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],b=e*o-i*a,w=e*l-s*a,_=e*c-r*a,E=i*l-s*o,S=i*c-r*o,A=s*c-r*l,v=h*y-d*g,T=h*m-u*g,C=h*p-f*g,N=d*m-u*y,k=d*p-f*y,z=u*p-f*m,I=b*z-w*k+_*N+E*C-S*T+A*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*z-l*k+c*N)*G,t[1]=(s*k-i*z-r*N)*G,t[2]=(y*A-m*S+p*E)*G,t[3]=(u*S-d*A-f*E)*G,t[4]=(l*C-a*z-c*T)*G,t[5]=(e*z-s*C+r*T)*G,t[6]=(m*_-g*A-p*w)*G,t[7]=(h*A-u*_+f*w)*G,t[8]=(a*k-o*C+c*v)*G,t[9]=(i*C-e*k-r*v)*G,t[10]=(g*S-y*_+p*b)*G,t[11]=(d*_-h*S-f*b)*G,t[12]=(o*T-a*N-l*v)*G,t[13]=(e*N-i*T+s*v)*G,t[14]=(y*w-g*E-m*b)*G,t[15]=(h*E-d*w+u*b)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,b=l*c,w=l*h,_=l*d,E=i.x,S=i.y,A=i.z;return s[0]=(1-(y+p))*E,s[1]=(f+_)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+p))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+w)*A,s[9]=(m-b)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);let c=1/a,h=1/o,d=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=on,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===dr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=on,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===on)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===dr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qs=new P,nn=new Ae,Ff=new P(0,0,0),Bf=new P(1,1,1),Kn=new P,no=new P,ki=new P,qu=new Ae,Yu=new Sn,En=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,Zu=new P,Ys=new Sn,Dn=new Ae,so=new P,qr=new P,kf=new P,Hf=new Sn,Ju=new P(1,0,0),$u=new P(0,1,0),ju=new P(0,0,1),Ku={type:"added"},zf={type:"removed"},Zs={type:"childadded",child:null},Yc={type:"childremoved",child:null},ce=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new En,i=new Sn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ue}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis($u,t)}rotateZ(t){return this.rotateOnAxis(ju,t)}translateOnAxis(t,e){return Zu.copy(t).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis($u,t)}translateZ(t){return this.translateOnAxis(ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?so.copy(t):so.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(qr,so,this.up):Dn.lookAt(so,qr,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ku),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf),Yc.child=t,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ku),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ce.DEFAULT_UP=new P(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Zt=class extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gf={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},ro={h:0,s:0,l:0};gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=If(t,1),e=ye(e,0,1),i=ye(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Zc(a,r,t+1/3),this.g=Zc(a,r,t),this.b=Zc(a,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=_i){function i(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_i){let i=ad[t.toLowerCase()];return i!==void 0?this.setHex(i,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return be.workingToColorSpace(Ri.copy(this),t),Math.round(ye(Ri.r*255,0,255))*65536+Math.round(ye(Ri.g*255,0,255))*256+Math.round(ye(Ri.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(Ri.copy(this),e);let i=Ri.r,s=Ri.g,r=Ri.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(Ri.copy(this),e),t.r=Ri.r,t.g=Ri.g,t.b=Ri.b,t}getStyle(t=_i){be.workingToColorSpace(Ri.copy(this),t);let e=Ri.r,i=Ri.g,s=Ri.b;return t!==_i?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(ro);let i=Gc(Qn.h,ro.h,e),s=Gc(Qn.s,ro.s,e),r=Gc(Qn.l,ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ri=new gt;gt.NAMES=ad;zn=class extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},sn=new P,Un=new P,Jc=new P,Nn=new P,Js=new P,$s=new P,Qu=new P,$c=new P,jc=new P,Kc=new P,Qc=new Xe,th=new Xe,eh=new Xe,On=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){sn.subVectors(s,e),Un.subVectors(i,e),Jc.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(Un),l=sn.dot(Jc),c=Un.dot(Un),h=Un.dot(Jc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Qc.setScalar(0),th.setScalar(0),eh.setScalar(0),Qc.fromBufferAttribute(t,e),th.fromBufferAttribute(t,i),eh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qc,r.x),a.addScaledVector(th,r.y),a.addScaledVector(eh,r.z),a}static isFrontFacing(t,e,i,s){return sn.subVectors(i,e),Un.subVectors(t,e),sn.cross(Un).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),sn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Js.subVectors(s,i),$s.subVectors(r,i),$c.subVectors(t,i);let l=Js.dot($c),c=$s.dot($c);if(l<=0&&c<=0)return e.copy(i);jc.subVectors(t,s);let h=Js.dot(jc),d=$s.dot(jc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Js,a);Kc.subVectors(t,r);let f=Js.dot(Kc),g=$s.dot(Kc);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector($s,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Qu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Qu,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(Js,a).addScaledVector($s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),oo.subVectors(this.max,Yr),js.subVectors(t.a,Yr),Ks.subVectors(t.b,Yr),Qs.subVectors(t.c,Yr),ts.subVectors(Ks,js),es.subVectors(Qs,Ks),bs.subVectors(js,Qs);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-bs.z,bs.y,ts.z,0,-ts.x,es.z,0,-es.x,bs.z,0,-bs.x,-ts.y,ts.x,0,-es.y,es.x,0,-bs.y,bs.x,0];return!ih(e,js,Ks,Qs,oo)||(e=[1,0,0,0,1,0,0,0,1],!ih(e,js,Ks,Qs,oo))?!1:(lo.crossVectors(ts,es),e=[lo.x,lo.y,lo.z],ih(e,js,Ks,Qs,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,ao=new wn,js=new P,Ks=new P,Qs=new P,ts=new P,es=new P,bs=new P,Yr=new P,oo=new P,lo=new P,Ms=new P;ai=new P,co=new mt,Vf=0,Pe=class extends Mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xh,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix3(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},da=class extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}},fa=class extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}},ne=class extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Wf=new wn,Zr=new P,nh=new P,Tn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);let e=Zr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(nh)),this.expandByPoint(Zr.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xf=0,ji=new Ae,sh=new ce,tr=new P,Hi=new wn,Jr=new wn,mi=new P,me=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lf(t)?fa:da)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ue().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ji.makeRotationFromQuaternion(t),this.applyMatrix4(ji),this}rotateX(t){return ji.makeRotationX(t),this.applyMatrix4(ji),this}rotateY(t){return ji.makeRotationY(t),this.applyMatrix4(ji),this}rotateZ(t){return ji.makeRotationZ(t),this.applyMatrix4(ji),this}translate(t,e,i){return ji.makeTranslation(t,e,i),this.applyMatrix4(ji),this}scale(t,e,i){return ji.makeScale(t,e,i),this.applyMatrix4(ji),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Hi.setFromBufferAttribute(r),this.morphTargetsRelative?(mi.addVectors(this.boundingBox.min,Hi.min),this.boundingBox.expandByPoint(mi),mi.addVectors(this.boundingBox.max,Hi.max),this.boundingBox.expandByPoint(mi)):(this.boundingBox.expandByPoint(Hi.min),this.boundingBox.expandByPoint(Hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Hi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(mi.addVectors(Hi.min,Jr.min),Hi.expandByPoint(mi),mi.addVectors(Hi.max,Jr.max),Hi.expandByPoint(mi)):(Hi.expandByPoint(Jr.min),Hi.expandByPoint(Jr.max))}Hi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)mi.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(mi));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mi.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),mi.add(tr)),s=Math.max(s,i.distanceToSquared(mi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new P,l[v]=new P;let c=new P,h=new P,d=new P,u=new mt,f=new mt,g=new mt,y=new P,m=new P;function p(v,T,C){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[v].add(y),o[T].add(y),o[C].add(y),l[v].add(m),l[T].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,T=b.length;v<T;++v){let C=b[v],N=C.start,k=C.count;for(let z=N,I=N+k;z<I;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new P,_=new P,E=new P,S=new P;function A(v){E.fromBufferAttribute(s,v),S.copy(E);let T=o[v];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),_.crossVectors(S,T);let N=_.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,N)}for(let v=0,T=b.length;v<T;++v){let C=b[v],N=C.start,k=C.count;for(let z=N,I=N+k;z<I;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)mi.fromBufferAttribute(t,e),mi.normalize(),t.setXYZ(e,mi.x,mi.y,mi.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Pe(u,h,d)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xh,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ii=new P,gr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ii.fromBufferAttribute(this,e),Ii.applyMatrix4(t),this.setXYZ(e,Ii.x,Ii.y,Ii.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ii.fromBufferAttribute(this,e),Ii.applyNormalMatrix(t),this.setXYZ(e,Ii.x,Ii.y,Ii.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ii.fromBufferAttribute(this,e),Ii.transformDirection(t),this.setXYZ(e,Ii.x,Ii.y,Ii.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rh=new P,qf=new P,Yf=new ue,an=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=rh.subVectors(i,e).cross(qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yf.getNormalMatrix(t),s=this.coplanarPoint(rh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zf=0,zi=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=hs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Ph,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new an().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$r=new P,ir=new P,nr=new P,sr=new mt,jr=new mt,od=new Ae,ho=new P,Kr=new P,uo=new P,t0=new mt,ah=new mt,e0=new mt,gi=class extends ce{constructor(t=new ci){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pa(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new gr(i,3,0,!1)),er.setAttribute("uv",new gr(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;fo(ho.set(-.5,-.5,0),nr,a,ir,s,r),fo(Kr.set(.5,-.5,0),nr,a,ir,s,r),fo(uo.set(.5,.5,0),nr,a,ir,s,r),t0.set(0,0),ah.set(1,0),e0.set(1,1);let o=t.ray.intersectTriangle(ho,Kr,uo,!1,$r);if(o===null&&(fo(Kr.set(-.5,.5,0),nr,a,ir,s,r),ah.set(0,1),o=t.ray.intersectTriangle(ho,uo,Kr,!1,$r),o===null))return;let l=t.ray.origin.distanceTo($r);l<t.near||l>t.far||e.push({distance:l,point:$r.clone(),uv:On.getInterpolation($r,ho,Kr,uo,t0,ah,e0,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Bn=new P,oh=new P,po=new P,mo=new P,xr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){oh.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),mo.copy(this.origin).sub(oh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(po),o=mo.dot(this.direction),l=-mo.dot(po),c=mo.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oh).addScaledVector(po,u),f}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);let i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,b=i.y-a.y,w=i.z-a.z,_=Math.abs(l),E=Math.abs(c),S=Math.abs(h),A,v,T,C,N,k,z,I,G,J,K,ft;if(_>=E&&_>=S?(T=l,k=d,G=g,ft=p,l>=0?(A=c,v=h,C=u,N=f,z=y,I=m,J=b,K=w):(A=h,v=c,C=f,N=u,z=m,I=y,J=w,K=b)):E>=S?(T=c,k=u,G=y,ft=b,c>=0?(A=h,v=l,C=f,N=d,z=m,I=g,J=w,K=p):(A=l,v=h,C=d,N=f,z=g,I=m,J=p,K=w)):(T=h,k=f,G=m,ft=w,h>=0?(A=l,v=c,C=d,N=u,z=g,I=y,J=p,K=b):(A=c,v=l,C=u,N=d,z=y,I=g,J=b,K=p)),T===0)return null;let Q=A/T,ct=v/T,ot=1/T,Ht=C-Q*k,It=N-ct*k,ie=z-Q*G,ee=I-ct*G,fe=J-Q*ft,it=K-ct*ft,at=fe*ee-it*ie,wt=Ht*it-It*fe,Gt=ie*It-ee*Ht;if(s){if(at<0||wt<0||Gt<0)return null}else if((at<0||wt<0||Gt<0)&&(at>0||wt>0||Gt>0))return null;let At=at+wt+Gt;if(At===0)return null;let j=ot*(at*k+wt*G+Gt*ft);return(At>0?j<0:j>0)?null:this.at(j/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},i0=new Ae,Ss=new xr,go=new Tn,n0=new P,xo=new P,yo=new P,vo=new P,lh=new P,_o=new P,s0=new P,bo=new P,Ft=class extends ce{constructor(t=new me,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(lh.fromBufferAttribute(d,t),a?_o.addScaledVector(lh,h):_o.addScaledVector(lh.sub(e),h))}e.add(_o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(go.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(go,n0)===null||Ss.origin.distanceToSquared(n0)>(t.far-t.near)**2))&&(i0.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(i0),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,E=w;_<E;_+=3){let S=o.getX(_),A=o.getX(_+1),v=o.getX(_+2);s=Mo(this,p,t,i,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);s=Mo(this,a,t,i,c,h,d,b,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,E=w;_<E;_+=3){let S=_,A=_+1,v=_+2;s=Mo(this,p,t,i,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,w=m+1,_=m+2;s=Mo(this,a,t,i,c,h,d,b,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};Ts=class extends Di{constructor(t=null,e=1,i=1,s,r,a,o,l,c=oi,h=oi,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yr=class extends Pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new Ae,r0=new Ae,So=[],a0=new wn,$f=new Ae,Qr=new Ft,ta=new Tn,ma=class extends Ft{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$f)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),a0.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(a0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),ta.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),t.ray.intersectsSphere(ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),r0.multiplyMatrices(i,rr),Qr.matrixWorld=r0,Qr.raycast(t,So);for(let a=0,o=So.length;a<o;a++){let l=So[a];l.instanceId=r,l.object=this,e.push(l)}So.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(s*this.count),s,this.count,Lr,Qi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new Tn,jf=new mt(.5,.5),Eo=new P,vr=class{constructor(t=new an,e=new an,i=new an,s=new an,r=new an,a=new an){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=on,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],b=r[12],w=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-g,E-b).normalize(),s[1].setComponents(c+a,f+h,p+g,E+b).normalize(),s[2].setComponents(c+o,f+d,p+y,E+w).normalize(),s[3].setComponents(c-o,f-d,p-y,E-w).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,E-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,E-_).normalize(),e===on)s[5].setComponents(c+l,f+u,p+m,E+_).normalize();else if(e===dr)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);let e=jf.distanceTo(t.center);return Es.radius=.7071067811865476+e,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Eo.x=s.normal.x>0?t.max.x:t.min.x,Eo.y=s.normal.y>0?t.max.y:t.min.y,Eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_r=class extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zo=new P,Jo=new P,o0=new Ae,ea=new xr,wo=new Tn,ch=new P,l0=new P,ga=class extends ce{constructor(t=new me,e=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Zo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Zo.distanceTo(Jo);t.setAttribute("lineDistance",new ne(i,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;o0.copy(s).invert(),ea.copy(t.ray).applyMatrix4(o0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),b=h.getX(y+1),w=To(this,t,ea,l,p,b,y);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=To(this,t,ea,l,y,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=To(this,t,ea,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=To(this,t,ea,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};br=class extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},c0=new Ae,vh=new xr,Ro=new Tn,Ao=new P,Mr=class extends ce{constructor(t=new me,e=new br){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;c0.copy(s).invert(),vh.copy(t.ray).applyMatrix4(c0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);Ao.fromBufferAttribute(d,m),h0(Ao,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Ao.fromBufferAttribute(d,g),h0(Ao,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};xa=class extends Di{constructor(t=[],e=us,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gn=class extends Di{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ns=class extends Di{constructor(t,e,i=cn,s,r,a,o=oi,l=oi,c,h=bn,d=1){if(h!==bn&&h!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$o=class extends ns{constructor(t,e=cn,i=us,s,r,a=oi,o=oi,l,c=bn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ya=class extends Di{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ei=class n extends me{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function g(y,m,p,b,w,_,E,S,A,v,T){let C=_/A,N=E/v,k=_/2,z=E/2,I=S/2,G=A+1,J=v+1,K=0,ft=0,Q=new P;for(let ct=0;ct<J;ct++){let ot=ct*N-z;for(let Ht=0;Ht<G;Ht++){let It=Ht*C-k;Q[y]=It*b,Q[m]=ot*w,Q[p]=I,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[p]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Ht/A),d.push(1-ct/v),K+=1}}for(let ct=0;ct<v;ct++)for(let ot=0;ot<A;ot++){let Ht=u+ot+G*ct,It=u+ot+G*(ct+1),ie=u+(ot+1)+G*(ct+1),ee=u+(ot+1)+G*ct;l.push(Ht,It,ee),l.push(It,ie,ee),ft+=6}o.addGroup(f,ft,T),f+=ft,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ss=class n extends me{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=i*2+r,y=s+1,m=new P,p=new P;for(let b=0;b<=g;b++){let w=0,_=0,E=0,S=0;if(b<=i){let T=b/i,C=T*Math.PI/2;_=-h-t*Math.cos(C),E=t*Math.sin(C),S=-t*Math.cos(C),w=T*d}else if(b<=i+r){let T=(b-i)/r;_=-h+T*e,E=t,S=0,w=d+T*u}else{let T=(b-i-r)/i,C=T*Math.PI/2;_=h+t*Math.sin(C),E=t*Math.cos(C),S=t*Math.sin(C),w=d+u+T*d}let A=Math.max(0,Math.min(1,w/f)),v=0;b===0?v=.5/s:b===g&&(v=-.5/s);for(let T=0;T<=s;T++){let C=T/s,N=C*Math.PI*2,k=Math.sin(N),z=Math.cos(N);p.x=-E*z,p.y=_,p.z=E*k,o.push(p.x,p.y,p.z),m.set(-E*z,S,E*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+v,A)}if(b>0){let T=(b-1)*y;for(let C=0;C<s;C++){let N=T+C,k=T+C+1,z=b*y+C,I=b*y+C+1;a.push(N,k,z),a.push(k,I,z)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Rn=class n extends me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class n extends me{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function b(){let _=new P,E=new P,S=0,A=(e-t)/i;for(let v=0;v<=r;v++){let T=[],C=v/r,N=C*(e-t)+t;for(let k=0;k<=s;k++){let z=k/s,I=z*l+o,G=Math.sin(I),J=Math.cos(I);E.x=N*G,E.y=-C*i+m,E.z=N*J,d.push(E.x,E.y,E.z),_.set(G,A,J).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-C),T.push(g++)}y.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let C=y[T][v],N=y[T+1][v],k=y[T+1][v+1],z=y[T][v+1];(t>0||T!==0)&&(h.push(C,N,z),S+=3),(e>0||T!==r-1)&&(h.push(N,k,z),S+=3)}c.addGroup(p,S,0),p+=S}function w(_){let E=g,S=new mt,A=new P,v=0,T=_===!0?t:e,C=_===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;let N=g;for(let k=0;k<=s;k++){let I=k/s*l+o,G=Math.cos(I),J=Math.sin(I);A.x=T*J,A.y=m*C,A.z=T*G,d.push(A.x,A.y,A.z),u.push(0,C,0),S.x=G*.5+.5,S.y=J*.5*C+.5,f.push(S.x,S.y),g++}for(let k=0;k<s;k++){let z=E+k,I=N+k;_===!0?h.push(I,I+1,z):h.push(I+1,I,z),v+=3}c.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_e=class n extends qe{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jo=class n extends me{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new P,_=new P,E=new P;for(let S=0;S<e.length;S+=3)f(e[S+0],w),f(e[S+1],_),f(e[S+2],E),l(w,_,E,b)}function l(b,w,_,E){let S=E+1,A=[];for(let v=0;v<=S;v++){A[v]=[];let T=b.clone().lerp(_,v/S),C=w.clone().lerp(_,v/S),N=S-v;for(let k=0;k<=N;k++)k===0&&v===S?A[v][k]=T:A[v][k]=T.clone().lerp(C,k/N)}for(let v=0;v<S;v++)for(let T=0;T<2*(S-v)-1;T++){let C=Math.floor(T/2);T%2===0?(u(A[v][C+1]),u(A[v+1][C]),u(A[v][C])):(u(A[v][C+1]),u(A[v+1][C+1]),u(A[v+1][C]))}}function c(b){let w=new P;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(b),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let b=new P;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let _=m(b)/2/Math.PI+.5,E=p(b)/Math.PI+.5;a.push(_,1-E)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let w=a[b+0],_=a[b+2],E=a[b+4],S=Math.max(w,_,E),A=Math.min(w,_,E);S>.9&&A<.1&&(w<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),E<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,w){let _=b*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){let b=new P,w=new P,_=new P,E=new P,S=new mt,A=new mt,v=new mt;for(let T=0,C=0;T<r.length;T+=9,C+=6){b.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),E.copy(b).add(w).add(_).divideScalar(3);let N=m(E);y(S,C+0,b,N),y(A,C+2,w,N),y(v,C+4,_,N)}}function y(b,w,_,E){E<0&&b.x===1&&(a[w]=b.x-1),_.x===0&&_.z===0&&(a[w]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new mt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new Ae;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends Gi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new mt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ko=class extends Sr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};u0=new P,d0=new P,hh=new Yh,uh=new Yh,dh=new Yh,Vn=class extends Gi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(d0.subVectors(s[0],s[1]).add(s[0]),c=d0);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(u0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=u0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),hh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),uh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),dh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(hh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),uh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),dh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(hh.calc(l),uh.calc(l),dh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};va=class extends Gi{constructor(t=new mt,e=new mt,i=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new mt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sa(t,s.x,r.x,a.x,o.x),sa(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends Gi{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sa(t,s.x,r.x,a.x,o.x),sa(t,s.y,r.y,a.y,o.y),sa(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_a=class extends Gi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends Gi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends Gi{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(na(t,s.x,r.x,a.x),na(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends Gi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(na(t,s.x,r.x,a.x),na(t,s.y,r.y,a.y),na(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rs=class extends Gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(f0(o,l.x,c.x,h.x,d.x),f0(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},el=Object.freeze({__proto__:null,ArcCurve:Ko,CatmullRomCurve3:Vn,CubicBezierCurve:va,CubicBezierCurve3:Qo,EllipseCurve:Sr,LineCurve:_a,LineCurve3:tl,QuadraticBezierCurve:ba,QuadraticBezierCurve3:Ma,SplineCurve:rs}),il=class extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new el[s.type]().fromJSON(s))}return this}},Sa=class extends il{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new _a(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ba(this.currentPoint.clone(),new mt(t,e),new mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new va(this.currentPoint.clone(),new mt(t,e),new mt(i,s),new mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new rs(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Sr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Mi=class extends Sa{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Sa().fromJSON(s))}return this}};Mh=class{static triangulate(t,e,i=2){return rp(t,e,i)}},_n=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];m0(t),g0(i,t);let a=t.length;e.forEach(m0);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,g0(i,e[l]);let o=Mh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};Vi=class n extends me{constructor(t=new Mi([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Mp,w,_=!1,E,S,A,v;if(p){w=p.getSpacedPoints(h),_=!0,u=!1;let $=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,$),S=new P,A=new P,v=new P}u||(m=0,f=0,g=0,y=0);let T=o.extractPoints(c),C=T.shape,N=T.holes;if(!_n.isClockWise(C)){C=C.reverse();for(let $=0,Z=N.length;$<Z;$++){let dt=N[$];_n.isClockWise(dt)&&(N[$]=dt.reverse())}}function z($){let dt=10000000000000001e-36,ut=$[0];for(let xt=1;xt<=$.length;xt++){let Ct=xt%$.length,Lt=$[Ct],Bt=Lt.x-ut.x,jt=Lt.y-ut.y,D=Bt*Bt+jt*jt,de=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(ut.x),Math.abs(ut.y)),se=dt*de*de;if(D<=se){$.splice(Ct,1),xt--;continue}ut=Lt}}z(C),N.forEach(z);let I=N.length,G=C;for(let $=0;$<I;$++){let Z=N[$];C=C.concat(Z)}function J($,Z,dt){return Z||oe("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(Z,dt)}let K=C.length;function ft($,Z,dt){let ut,xt,Ct,Lt=$.x-Z.x,Bt=$.y-Z.y,jt=dt.x-$.x,D=dt.y-$.y,de=Lt*Lt+Bt*Bt,se=Lt*D-Bt*jt;if(Math.abs(se)>Number.EPSILON){let R=Math.sqrt(de),x=Math.sqrt(jt*jt+D*D),H=Z.x-Bt/R,W=Z.y+Lt/R,U=dt.x-D/x,nt=dt.y+jt/x,pt=((U-H)*D-(nt-W)*jt)/(Lt*D-Bt*jt);ut=H+Lt*pt-$.x,xt=W+Bt*pt-$.y;let V=ut*ut+xt*xt;if(V<=2)return new mt(ut,xt);Ct=Math.sqrt(V/2)}else{let R=!1;Lt>Number.EPSILON?jt>Number.EPSILON&&(R=!0):Lt<-Number.EPSILON?jt<-Number.EPSILON&&(R=!0):Math.sign(Bt)===Math.sign(D)&&(R=!0),R?(ut=-Bt,xt=Lt,Ct=Math.sqrt(de)):(ut=Lt,xt=Bt,Ct=Math.sqrt(de/2))}return new mt(ut/Ct,xt/Ct)}let Q=[];for(let $=0,Z=G.length,dt=Z-1,ut=$+1;$<Z;$++,dt++,ut++)dt===Z&&(dt=0),ut===Z&&(ut=0),Q[$]=ft(G[$],G[dt],G[ut]);let ct=[],ot,Ht=Q.concat();for(let $=0,Z=I;$<Z;$++){let dt=N[$];ot=[];for(let ut=0,xt=dt.length,Ct=xt-1,Lt=ut+1;ut<xt;ut++,Ct++,Lt++)Ct===xt&&(Ct=0),Lt===xt&&(Lt=0),ot[ut]=ft(dt[ut],dt[Ct],dt[Lt]);ct.push(ot),Ht=Ht.concat(ot)}let It;if(m===0)It=_n.triangulateShape(G,N);else{let $=[],Z=[];for(let dt=0;dt<m;dt++){let ut=dt/m,xt=f*Math.cos(ut*Math.PI/2),Ct=g*Math.sin(ut*Math.PI/2)+y;for(let Lt=0,Bt=G.length;Lt<Bt;Lt++){let jt=J(G[Lt],Q[Lt],Ct);wt(jt.x,jt.y,-xt),ut===0&&$.push(jt)}for(let Lt=0,Bt=I;Lt<Bt;Lt++){let jt=N[Lt];ot=ct[Lt];let D=[];for(let de=0,se=jt.length;de<se;de++){let R=J(jt[de],ot[de],Ct);wt(R.x,R.y,-xt),ut===0&&D.push(R)}ut===0&&Z.push(D)}}It=_n.triangulateShape($,Z)}let ie=It.length,ee=g+y;for(let $=0;$<K;$++){let Z=u?J(C[$],Ht[$],ee):C[$];_?(A.copy(E.normals[0]).multiplyScalar(Z.x),S.copy(E.binormals[0]).multiplyScalar(Z.y),v.copy(w[0]).add(A).add(S),wt(v.x,v.y,v.z)):wt(Z.x,Z.y,0)}for(let $=1;$<=h;$++)for(let Z=0;Z<K;Z++){let dt=u?J(C[Z],Ht[Z],ee):C[Z];_?(A.copy(E.normals[$]).multiplyScalar(dt.x),S.copy(E.binormals[$]).multiplyScalar(dt.y),v.copy(w[$]).add(A).add(S),wt(v.x,v.y,v.z)):wt(dt.x,dt.y,d/h*$)}for(let $=m-1;$>=0;$--){let Z=$/m,dt=f*Math.cos(Z*Math.PI/2),ut=g*Math.sin(Z*Math.PI/2)+y;for(let xt=0,Ct=G.length;xt<Ct;xt++){let Lt=J(G[xt],Q[xt],ut);wt(Lt.x,Lt.y,d+dt)}for(let xt=0,Ct=N.length;xt<Ct;xt++){let Lt=N[xt];ot=ct[xt];for(let Bt=0,jt=Lt.length;Bt<jt;Bt++){let D=J(Lt[Bt],ot[Bt],ut);_?wt(D.x,D.y+w[h-1].y,w[h-1].x+dt):wt(D.x,D.y,d+dt)}}}fe(),it();function fe(){let $=s.length/3;if(u){let Z=0,dt=K*Z;for(let ut=0;ut<ie;ut++){let xt=It[ut];Gt(xt[2]+dt,xt[1]+dt,xt[0]+dt)}Z=h+m*2,dt=K*Z;for(let ut=0;ut<ie;ut++){let xt=It[ut];Gt(xt[0]+dt,xt[1]+dt,xt[2]+dt)}}else{for(let Z=0;Z<ie;Z++){let dt=It[Z];Gt(dt[2],dt[1],dt[0])}for(let Z=0;Z<ie;Z++){let dt=It[Z];Gt(dt[0]+K*h,dt[1]+K*h,dt[2]+K*h)}}i.addGroup($,s.length/3-$,0)}function it(){let $=s.length/3,Z=0;at(G,Z),Z+=G.length;for(let dt=0,ut=N.length;dt<ut;dt++){let xt=N[dt];at(xt,Z),Z+=xt.length}i.addGroup($,s.length/3-$,1)}function at($,Z){let dt=$.length;for(;--dt>=0;){let ut=dt,xt=dt-1;xt<0&&(xt=$.length-1);for(let Ct=0,Lt=h+m*2;Ct<Lt;Ct++){let Bt=K*Ct,jt=K*(Ct+1),D=Z+ut+Bt,de=Z+xt+Bt,se=Z+xt+jt,R=Z+ut+jt;At(D,de,se,R)}}}function wt($,Z,dt){l.push($),l.push(Z),l.push(dt)}function Gt($,Z,dt){j($),j(Z),j(dt);let ut=s.length/3,xt=b.generateTopUV(i,s,ut-3,ut-2,ut-1);bt(xt[0]),bt(xt[1]),bt(xt[2])}function At($,Z,dt,ut){j($),j(Z),j(ut),j(Z),j(dt),j(ut);let xt=s.length/3,Ct=b.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);bt(Ct[0]),bt(Ct[1]),bt(Ct[3]),bt(Ct[1]),bt(Ct[2]),bt(Ct[3])}function j($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function bt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Sp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new el[s.type]().fromJSON(s)),new n(i,t.options)}},Mp={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,a),new mt(o,l),new mt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new mt(a,1-l),new mt(c,1-d),new mt(u,1-g),new mt(y,1-p)]:[new mt(o,1-l),new mt(h,1-d),new mt(f,1-g),new mt(m,1-p)]}};As=class n extends me{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new P,u=new mt,f=new P,g=new P,y=new P,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=e;b++){let w=i+b*h*s,_=Math.sin(w),E=Math.cos(w);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*E,a.push(d.x,d.y,d.z),u.x=b/e,u.y=S/(t.length-1),o.push(u.x,u.y);let A=l[3*S+0]*_,v=l[3*S+1],T=l[3*S+0]*E;c.push(A,v,T)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let _=w+b*t.length,E=_,S=_+t.length,A=_+t.length+1,v=_+1;r.push(E,S,v),r.push(A,v,S)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},as=class n extends jo{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Cs=class n extends me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let w=0;w<c;w++){let _=w*d-r;g.push(_,-b,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let w=b+c*p,_=b+c*(p+1),E=b+1+c*(p+1),S=b+1+c*p;f.push(w,_,S),f.push(_,E,S)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ra=class n extends me{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,g=new mt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let b=p+m,w=b,_=b+i+1,E=b+i+2,S=b+1;o.push(w,_,S),o.push(_,E,S)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ls=class n extends me{constructor(t=new Mi([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;_n.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];_n.isClockWise(b)===!0&&(g[m]=b.reverse())}let y=_n.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=y.length;m<p;m++){let b=y[m],w=b[0]+d,_=b[1]+d,E=b[2]+d;i.push(w,_,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ep(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};Yt=class n extends me{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let b=[],w=p/i,_=a+w*o,E=t*Math.cos(_),S=Math.sqrt(t*t-E*E),A=0;p===0&&a===0?A=.5/e:p===i&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let T=v/e,C=s+T*r;d.x=-S*Math.cos(C),d.y=E,d.z=S*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+A,1-w),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let w=h[p][b+1],_=h[p][b],E=h[p+1][b],S=h[p+1][b+1];(p!==0||a>0)&&f.push(w,_,S),(p!==i-1||l<Math.PI)&&f.push(_,E,S)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Si=class n extends me{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,b=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,_=(s+1)*y+m;l.push(p,b,_),l.push(b,w,_)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ps=class n extends me{constructor(t=new Ma(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new mt,h=new P,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function y(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),b(),p()}function m(w){h=t.getPointAt(w/e,h);let _=a.normals[w],E=a.binormals[w];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,v=Math.sin(A),T=-Math.cos(A);l.x=T*_.x+v*E.x,l.y=T*_.y+v*E.y,l.z=T*_.z+v*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){let E=(s+1)*(w-1)+(_-1),S=(s+1)*w+(_-1),A=(s+1)*w+_,v=(s+1)*(w-1)+_;g.push(E,S,v),g.push(S,A,v)}}function b(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new el[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};dd={clone:Fs,merge:Ai},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},nl=class extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ni=class extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Is=class extends zi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Aa=class extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sl=class extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};os=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends os{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xh:r=t,o=2*e-i;break;case yh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:a=t,l=2*i-e;break;case yh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,b=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,_=f*m-f*y;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+b*a[c+E]+w*a[l+E]+_*a[d+E];return r}},ol=class extends os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ll=class extends os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cl=class extends os{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,b=d[p],w=d[p+1],_=t*u+g*2,E=h[_],S=h[_+1],A=Cp(i,e,b,E,s);r[g]=fd(A,y,w,S,m)}return r}};Wi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),fh(t.settings)&&(i.settings={inTangents:ar(t.settings.inTangents,Array),outTangents:ar(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break;case mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return re("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;fh(this.settings)&&(y0(this.settings.inTangents,t),y0(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){oe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){oe("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Pf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){oe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Do,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,fh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Wi.prototype.ValueTypeName="";Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=Vo;ls=class extends Wi{constructor(t,e,i){super(t,e,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ra;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;hl=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}};hl.prototype.ValueTypeName="color";ul=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}};ul.prototype.ValueTypeName="number";dl=class extends os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Sn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ca=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;cs=class extends Wi{constructor(t,e,i){super(t,e,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ra;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;fl=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}};fl.prototype.ValueTypeName="vector";pl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pd=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";wr=class extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ds=class extends wr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ph=new Ae,v0=new P,_0=new P,La=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;v0.setFromMatrixPosition(t.matrixWorld),e.position.copy(v0),_0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ph,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===dr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new P,Io=new Sn,xn=new P,Pa=class extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Po,Io,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new P,b0=new mt,M0=new mt,li=class extends Pa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,b0,M0),e.subVectors(M0,b0)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Sh=class extends La{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}},Ia=class extends wr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Tr=class extends Pa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eh=class extends La{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wn=class extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},or=-90,lr=1,gl=class extends ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new li(or,lr,t,e);s.layers=this.layers,this.add(s);let r=new li(or,lr,t,e);r.layers=this.layers,this.add(r);let a=new li(or,lr,t,e);a.layers=this.layers,this.add(a);let o=new li(or,lr,t,e);o.layers=this.layers,this.add(o);let l=new li(or,lr,t,e);l.layers=this.layers,this.add(l);let c=new li(or,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===on)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xl=class extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Jh="\\[\\]\\.:\\/",Lp=new RegExp("["+Jh+"]","g"),$h="[^"+Jh+"]",Pp="[^"+Jh.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",$h),Dp=/(WCOD+)?/.source.replace("WCOD",Pp),Up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),Fp=new RegExp("^"+Ip+Dp+Up+Np+"$"),Bp=["material","materials","bones","map"],wh=class{constructor(t,e,i){let s=i||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ke=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(t){let e=Fp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Bp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=wh;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Yy=new Float32Array(1),Th=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Fd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Vp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function wx(n,t,e,i,s,r){let a=new gt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let _=b.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(b){let w=!1,_=f(b);_===null?m(a,o):_&&_.isColor&&(m(_,1),w=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===Na)?(c===void 0&&(c=new Ft(new ei(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Fs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bd),c.material.toneMapped=be.getTransfer(_.colorSpace)!==Ne,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ft(new Cs(2,2),new Qe({name:"BackgroundMaterial",uniforms:Fs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=be.getTransfer(_.colorSpace)!==Ne,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(ac,Zh(n)),e.buffers.color.setClear(ac.r,ac.g,ac.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Tx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,k,z,I,G){let J=!1,K=d(N,I,z,k);r!==K&&(r=K,c(r.object)),J=f(N,I,z,G),J&&g(N,I,z,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(N,k,z,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,k,z,I){let G=I.wireframe===!0,J=i[k.id];J===void 0&&(J={},i[k.id]=J);let K=N.isInstancedMesh===!0?N.id:0,ft=J[K];ft===void 0&&(ft={},J[K]=ft);let Q=ft[z.id];Q===void 0&&(Q={},ft[z.id]=Q);let ct=Q[G];return ct===void 0&&(ct=u(l()),Q[G]=ct),ct}function u(N){let k=[],z=[],I=[];for(let G=0;G<e;G++)k[G]=0,z[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,k,z,I){let G=r.attributes,J=k.attributes,K=0,ft=z.getAttributes();for(let Q in ft)if(ft[Q].location>=0){let ot=G[Q],Ht=J[Q];if(Ht===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(Ht=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(Ht=N.instanceColor)),ot===void 0||ot.attribute!==Ht||Ht&&ot.data!==Ht.data)return!0;K++}return r.attributesNum!==K||r.index!==I}function g(N,k,z,I){let G={},J=k.attributes,K=0,ft=z.getAttributes();for(let Q in ft)if(ft[Q].location>=0){let ot=J[Q];ot===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor));let Ht={};Ht.attribute=ot,ot&&ot.data&&(Ht.data=ot.data),G[Q]=Ht,K++}r.attributes=G,r.attributesNum=K,r.index=I}function y(){let N=r.newAttributes;for(let k=0,z=N.length;k<z;k++)N[k]=0}function m(N){p(N,0)}function p(N,k){let z=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;z[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),G[N]!==k&&(n.vertexAttribDivisor(N,k),G[N]=k)}function b(){let N=r.newAttributes,k=r.enabledAttributes;for(let z=0,I=k.length;z<I;z++)k[z]!==N[z]&&(n.disableVertexAttribArray(z),k[z]=0)}function w(N,k,z,I,G,J,K){K===!0?n.vertexAttribIPointer(N,k,z,G,J):n.vertexAttribPointer(N,k,z,I,G,J)}function _(N,k,z,I){y();let G=I.attributes,J=z.getAttributes(),K=k.defaultAttributeValues;for(let ft in J){let Q=J[ft];if(Q.location>=0){let ct=G[ft];if(ct===void 0&&(ft==="instanceMatrix"&&N.instanceMatrix&&(ct=N.instanceMatrix),ft==="instanceColor"&&N.instanceColor&&(ct=N.instanceColor)),ct!==void 0){let ot=ct.normalized,Ht=ct.itemSize,It=t.get(ct);if(It===void 0)continue;let ie=It.buffer,ee=It.type,fe=It.bytesPerElement,it=ee===n.INT||ee===n.UNSIGNED_INT||ct.gpuType===Ml;if(ct.isInterleavedBufferAttribute){let at=ct.data,wt=at.stride,Gt=ct.offset;if(at.isInstancedInterleavedBuffer){for(let At=0;At<Q.locationSize;At++)p(Q.location+At,at.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let At=0;At<Q.locationSize;At++)m(Q.location+At);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let At=0;At<Q.locationSize;At++)w(Q.location+At,Ht/Q.locationSize,ee,ot,wt*fe,(Gt+Ht/Q.locationSize*At)*fe,it)}else{if(ct.isInstancedBufferAttribute){for(let at=0;at<Q.locationSize;at++)p(Q.location+at,ct.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let at=0;at<Q.locationSize;at++)m(Q.location+at);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let at=0;at<Q.locationSize;at++)w(Q.location+at,Ht/Q.locationSize,ee,ot,Ht*fe,Ht/Q.locationSize*at*fe,it)}}else if(K!==void 0){let ot=K[ft];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(Q.location,ot);break;case 3:n.vertexAttrib3fv(Q.location,ot);break;case 4:n.vertexAttrib4fv(Q.location,ot);break;default:n.vertexAttrib1fv(Q.location,ot)}}}}b()}function E(){T();for(let N in i){let k=i[N];for(let z in k){let I=k[z];for(let G in I){let J=I[G];for(let K in J)h(J[K].object),delete J[K];delete I[G]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let k=i[N.id];for(let z in k){let I=k[z];for(let G in I){let J=I[G];for(let K in J)h(J[K].object),delete J[K];delete I[G]}}delete i[N.id]}function A(N){for(let k in i){let z=i[k];for(let I in z){let G=z[I];if(G[N.id]===void 0)continue;let J=G[N.id];for(let K in J)h(J[K].object),delete J[K];delete G[N.id]}}}function v(N){for(let k in i){let z=i[k],I=N.isInstancedMesh===!0?N.id:0,G=z[I];if(G!==void 0){for(let J in G){let K=G[J];for(let ft in K)h(K[ft].object),delete K[ft];delete G[J]}delete z[I],Object.keys(z).length===0&&delete i[k]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Rx(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ax(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==tn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ni&&A!==Qi&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,maxSamples:E,samples:S}}function Cx(n){let t=this,e=null,i=0,s=!1,r=!1,a=new an,o=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,w=b*4,_=p.clippingState||null;l.value=_,_=h(g,u,w,f);for(let E=0;E!==w;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==y;++w,_+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Ux(n){let t=[],e=[],i=n,s=n-Dr+1+Lx;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,_=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(_,f*u*p);for(let E=0;E<u;E++){let S=h[E*2]*2-1,A=h[E*2+1]*2-1;p===0?Bs.set(1,A,S):p===1?Bs.set(-S,1,-A):p===2?Bs.set(-S,A,1):p===3?Bs.set(-1,A,-S):p===4?Bs.set(-S,-1,A):Bs.set(S,A,-1),Bs.toArray(y,(p*u+E)*f)}}let m=new me;m.setAttribute("position",new Pe(g,f)),m.setAttribute("outputDirection",new Pe(y,f)),e.push(new Ft(m,null)),i>Dr&&i--}return{lodMeshes:e,sizeLods:t}}function gd(n,t,e){let i=new Ui(n,t,e);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Nx(n,t,e){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Fx(n,t,e){return new Qe({name:"SphericalGaussianBlur",defines:{SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function xd(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function yd(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===vl||f===_l)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new lc(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===vl||f===_l,y=f===us||f===Ns;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Nr(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||y&&b&&l(b)?(i===null&&(i=new Nr(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===vl?u.mapping=us:f===_l&&(u.mapping=Ns),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Ox(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ws("WebGLRenderer: "+i+" extension not supported."),s}}}function kx(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,_=b.length;w<_;w+=3){let E=b[w+0],S=b[w+1],A=b[w+2];u.push(E,S,S,A,A,E)}}else{let b=g.array;y=g.version;for(let w=0,_=b.length/3-1;w<_;w+=3){let E=w+0,S=w+1,A=w+2;u.push(E,S,S,A,A,E)}}let m=new(g.count>=65535?fa:da)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Hx(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gx(n,t,e){let i=new WeakMap,s=new Xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let _=o.attributes.position.count*w,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*E*4*d),A=new ha(S,_,E,d);A.type=Qi,A.needsUpdate=!0;let v=w*4;for(let C=0;C<d;C++){let N=m[C],k=p[C],z=b[C],I=_*E*4*C;for(let G=0;G<N.count;G++){let J=G*v;f===!0&&(s.fromBufferAttribute(N,G),S[I+J+0]=s.x,S[I+J+1]=s.y,S[I+J+2]=s.z,S[I+J+3]=0),g===!0&&(s.fromBufferAttribute(k,G),S[I+J+4]=s.x,S[I+J+5]=s.y,S[I+J+6]=s.z,S[I+J+7]=0),y===!0&&(s.fromBufferAttribute(z,G),S[I+J+8]=s.x,S[I+J+9]=s.y,S[I+J+10]=s.z,S[I+J+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new mt(_,E)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Vx(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function Xx(n,t,e,i,s,r){let a=new Ui(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new me;c.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ne([0,2,0,0,2,0],2));let h=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(c,h),u=new Tr(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,b=[],w=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let S=0;S<b.length;S++){let A=b[S];A.setSize&&A.setSize(_,E)}},this.setEffects=function(_){b=_,w=b.length>0&&b[0].isRenderPass===!0;let E=a.width,S=a.height;b.length>0&&o===null&&(o=new Ui(E,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Ui(E,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let v=b[A];v.setSize&&v.setSize(E,S)}},this.begin=function(_,E){if(y||_.toneMapping===ln&&b.length===0)return!1;if(p=E,E!==null){let S=E.width,A=E.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=ln,!0},this.hasRenderPass=function(){return w},this.end=function(_,E){_.toneMapping=m,y=!0;let S=a,A=o;for(let v=0;v<b.length;v++){let T=b[v];T.enabled!==!1&&(T.render(_,A,S,E),T.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},be.getTransfer(f)===Ne&&(h.defines.SRGB_TRANSFER="");let v=Wx[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function hi(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ui(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function uc(n,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function qx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hi(e,t))return;n.uniform2fv(this.addr,t),ui(e,t)}}function Zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hi(e,t))return;n.uniform3fv(this.addr,t),ui(e,t)}}function Jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hi(e,t))return;n.uniform4fv(this.addr,t),ui(e,t)}}function $x(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hi(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ui(e,t)}else{if(hi(e,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),ui(e,i)}}function jx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hi(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ui(e,t)}else{if(hi(e,i))return;Md.set(i),n.uniformMatrix3fv(this.addr,!1,Md),ui(e,i)}}function Kx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hi(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ui(e,t)}else{if(hi(e,i))return;bd.set(i),n.uniformMatrix4fv(this.addr,!1,bd),ui(e,i)}}function Qx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function t1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hi(e,t))return;n.uniform2iv(this.addr,t),ui(e,t)}}function e1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hi(e,t))return;n.uniform3iv(this.addr,t),ui(e,t)}}function i1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hi(e,t))return;n.uniform4iv(this.addr,t),ui(e,t)}}function n1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function s1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hi(e,t))return;n.uniform2uiv(this.addr,t),ui(e,t)}}function r1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hi(e,t))return;n.uniform3uiv(this.addr,t),ui(e,t)}}function a1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hi(e,t))return;n.uniform4uiv(this.addr,t),ui(e,t)}}function o1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ru.compareFunction=e.isReversedDepthBuffer()?rc:sc,r=ru):r=Od,e.setTexture2D(t||r,s)}function l1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hd,s)}function c1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||zd,s)}function h1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kd,s)}function u1(n){switch(n){case 5126:return qx;case 35664:return Yx;case 35665:return Zx;case 35666:return Jx;case 35674:return $x;case 35675:return jx;case 35676:return Kx;case 5124:case 35670:return Qx;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return i1;case 5125:return n1;case 36294:return s1;case 36295:return r1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return h1}}function d1(n,t){n.uniform1fv(this.addr,t)}function f1(n,t){let e=Fr(t,this.size,2);n.uniform2fv(this.addr,e)}function p1(n,t){let e=Fr(t,this.size,3);n.uniform3fv(this.addr,e)}function m1(n,t){let e=Fr(t,this.size,4);n.uniform4fv(this.addr,e)}function g1(n,t){let e=Fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function x1(n,t){let e=Fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function y1(n,t){let e=Fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function v1(n,t){n.uniform1iv(this.addr,t)}function _1(n,t){n.uniform2iv(this.addr,t)}function b1(n,t){n.uniform3iv(this.addr,t)}function M1(n,t){n.uniform4iv(this.addr,t)}function S1(n,t){n.uniform1uiv(this.addr,t)}function E1(n,t){n.uniform2uiv(this.addr,t)}function w1(n,t){n.uniform3uiv(this.addr,t)}function T1(n,t){n.uniform4uiv(this.addr,t)}function R1(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);hi(i,r)||(n.uniform1iv(this.addr,r),ui(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ru:a=Od;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function A1(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);hi(i,r)||(n.uniform1iv(this.addr,r),ui(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hd,r[a])}function C1(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);hi(i,r)||(n.uniform1iv(this.addr,r),ui(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zd,r[a])}function L1(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);hi(i,r)||(n.uniform1iv(this.addr,r),ui(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kd,r[a])}function P1(n){switch(n){case 5126:return d1;case 35664:return f1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return x1;case 35676:return y1;case 5124:case 35670:return v1;case 35667:case 35671:return _1;case 35668:case 35672:return b1;case 35669:case 35673:return M1;case 5125:return S1;case 36294:return E1;case 36295:return w1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return L1}}function Ed(n,t){n.seq.push(t),n.map[t.id]=t}function I1(n,t,e){let i=n.name,s=i.length;for(nu.lastIndex=0;;){let r=nu.exec(i),a=nu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ed(e,c===void 0?new au(o,n,t):new ou(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new lu(o),Ed(e,d)),e=d}}}function wd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function N1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function F1(n){be._getMatrix(Td,be.workingColorSpace,n);let t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(n)){case oa:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Rd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+N1(n.getShaderSource(t),o)}else return r}function B1(n,t){let e=F1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function k1(n,t){let e=O1[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function H1(){be.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function G1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function V1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function qa(n){return n!==""}function Ad(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function cu(n){return n.replace(W1,q1)}function q1(n,t){let e=ge[t];if(e===void 0){let i=X1.get(t);if(i!==void 0)e=ge[i],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cu(e)}function Ld(n){return n.replace(Y1,Z1)}function Z1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function $1(n){return J1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function K1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":j1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function ty(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Q1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function iy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ey[n.combine]||"ENVMAP_BLENDING_NONE"}function ny(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function sy(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$1(e),c=K1(e),h=ty(e),d=iy(e),u=ny(e),f=z1(e),g=G1(r),y=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?ge.tonemapping_pars_fragment:"",e.toneMapping!==ln?k1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,B1("linearToOutputTexel",e.outputColorSpace),H1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qa).join(`
`)),a=cu(a),a=Ad(a,e),a=Cd(a,e),o=cu(o),o=Ad(o,e),o=Cd(o,e),a=Ld(a),o=Ld(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+m+a,_=b+p+o,E=wd(s,s.VERTEX_SHADER,w),S=wd(s,s.FRAGMENT_SHADER,_);s.attachShader(y,E),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(N){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(S)||"",G=k.trim(),J=z.trim(),K=I.trim(),ft=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ft=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,E,S);else{let ct=Rd(s,E,"vertex"),ot=Rd(s,S,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+ct+`
`+ot)}else G!==""?re("WebGLProgram: Program Info Log:",G):(J===""||K==="")&&(Q=!1);Q&&(N.diagnostics={runnable:ft,programLog:G,vertexShader:{log:J,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(S),v=new Ur(s,y),T=V1(s,y)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,D1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=S,this}function ay(n){return n===ps||n===za||n===Ga}function oy(n,t,e,i,s,r){let a=new ua,o=new hu,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,T,C,N,k,z){let I=N.fog,G=k.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ft=t.get(v.envMap||J,K),Q=ft&&ft.mapping===Na?ft.image.height:null,ct=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&re("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ht=ot!==void 0?ot.length:0,It=0;G.morphAttributes.position!==void 0&&(It=1),G.morphAttributes.normal!==void 0&&(It=2),G.morphAttributes.color!==void 0&&(It=3);let ie,ee,fe,it;if(ct){let ht=Ln[ct];ie=ht.vertexShader,ee=ht.fragmentShader}else{ie=v.vertexShader,ee=v.fragmentShader;let ht=o.getVertexShaderStage(v),Rt=o.getFragmentShaderStage(v);o.update(v,ht,Rt),fe=ht.id,it=Rt.id}let at=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Gt=k.isInstancedMesh===!0,At=k.isBatchedMesh===!0,j=!!v.map,bt=!!v.matcap,$=!!ft,Z=!!v.aoMap,dt=!!v.lightMap,ut=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,Ct=!!v.displacementMap,Lt=!!v.emissiveMap,Bt=!!v.metalnessMap,jt=!!v.roughnessMap,D=v.anisotropy>0,de=v.clearcoat>0,se=v.dispersion>0,R=v.retroreflectivity>0,x=v.iridescence>0,H=v.sheen>0,W=v.transmission>0,U=D&&!!v.anisotropyMap,nt=de&&!!v.clearcoatMap,pt=de&&!!v.clearcoatNormalMap,V=de&&!!v.clearcoatRoughnessMap,tt=x&&!!v.iridescenceMap,yt=x&&!!v.iridescenceThicknessMap,zt=H&&!!v.sheenColorMap,_t=H&&!!v.sheenRoughnessMap,St=!!v.specularMap,Ot=!!v.specularColorMap,Kt=!!v.specularIntensityMap,le=W&&!!v.transmissionMap,O=W&&!!v.thicknessMap,Tt=!!v.gradientMap,lt=!!v.alphaMap,Et=v.alphaTest>0,Pt=!!v.alphaHash,L=!!v.extensions,F=ln;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(F=n.toneMapping);let st={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:ie,fragmentShader:ee,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:it,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:At,batchingColor:At&&k._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&k.instanceColor!==null,instancingMorph:Gt&&k.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:j,matcap:bt,envMap:$,envMapMode:$&&ft.mapping,envMapCubeUVHeight:Q,aoMap:Z,lightMap:dt,bumpMap:ut,normalMap:xt,displacementMap:Ct,emissiveMap:Lt,normalMapObjectSpace:xt&&v.normalMapType===Z0,normalMapTangentSpace:xt&&v.normalMapType===Pr,packedNormalMap:xt&&v.normalMapType===Pr&&ay(v.normalMap.format),metalnessMap:Bt,roughnessMap:jt,anisotropy:D,anisotropyMap:U,clearcoat:de,clearcoatMap:nt,clearcoatNormalMap:pt,clearcoatRoughnessMap:V,dispersion:se,retroreflection:R,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:yt,sheen:H,sheenColorMap:zt,sheenRoughnessMap:_t,specularMap:St,specularColorMap:Ot,specularIntensityMap:Kt,transmission:W,transmissionMap:le,thicknessMap:O,gradientMap:Tt,opaque:v.transparent===!1&&v.blending===hs&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:Et,alphaHash:Pt,combine:v.combine,mapUv:j&&g(v.map.channel),aoMapUv:Z&&g(v.aoMap.channel),lightMapUv:dt&&g(v.lightMap.channel),bumpMapUv:ut&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:Ct&&g(v.displacementMap.channel),emissiveMapUv:Lt&&g(v.emissiveMap.channel),metalnessMapUv:Bt&&g(v.metalnessMap.channel),roughnessMapUv:jt&&g(v.roughnessMap.channel),anisotropyMapUv:U&&g(v.anisotropyMap.channel),clearcoatMapUv:nt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(v.sheenRoughnessMap.channel),specularMapUv:St&&g(v.specularMap.channel),specularColorMapUv:Ot&&g(v.specularColorMap.channel),specularIntensityMapUv:Kt&&g(v.specularIntensityMap.channel),transmissionMapUv:le&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:lt&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||D),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(j||lt),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:It,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:F,decodeVideoTexture:j&&v.map.isVideoTexture===!0&&be.getTransfer(v.map.colorSpace)===Ne,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&be.getTransfer(v.emissiveMap.colorSpace)===Ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ke,flipSided:v.side===Ye,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:L&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(L&&v.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(T,v),b(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){let T=f[v.type],C;if(T){let N=Ln[T];C=dd.clone(N.uniforms)}else C=v.uniforms;return C}function _(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new sy(n,T,v,s),c.push(C),h.set(T,C)),C}function E(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:A}}function ly(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Id(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,g,y,m,p,b){b.reversedDepth===!0&&(m=-m);let w=o(u,f,g,y,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,y,m,p){let b=o(u,f,g,y,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||cy),i.length>1&&i.sort(f||Id),s.length>1&&s.sort(f||Id)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function hy(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Dd,n.set(i,[a])):s>=r.length?(a=new Dd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function uy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new gt};break;case"SpotLight":e={position:new P,direction:new P,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function dy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function py(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function my(n){let t=new uy,e=dy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Ae,a=new Ae;function o(c){let h=0,d=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,w=0,_=0,E=0,S=0,A=0,v=0,T=0,C=0;c.sort(py);for(let k=0,z=c.length;k<z;k++){let I=c[k],G=I.color,J=I.intensity,K=I.distance,ft=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ps?ft=I.shadow.map.texture:ft=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*J,d+=G.g*J,u+=G.b*J;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(I.sh.coefficients[Q],J);C++}else if(I.isSunLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ct=I.shadow,ot=e.get(I);ot.shadowIntensity=ct.intensity,ot.shadowBias=ct.bias,ot.shadowNormalBias=ct.normalBias,ot.shadowRadius=ct.radius,ot.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),i.sunShadow[g]=ot,i.sunShadowMap[g]=ft;let Ht=ct.getViewportCount();for(let It=0;It<Ht;It++)i.sunShadowMatrix[y+It]=ct.getMatrix(It),i.sunShadowCascade[y+It]=ct._cascadeData[It];y+=Ht,g++}i.sun[f]=Q,f++}else if(I.isDirectionalLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ct=I.shadow,ot=e.get(I);ot.shadowIntensity=ct.intensity,ot.shadowBias=ct.bias,ot.shadowNormalBias=ct.normalBias,ot.shadowRadius=ct.radius,ot.shadowMapSize=ct.mapSize,i.directionalShadow[m]=ot,i.directionalShadowMap[m]=ft,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=Q,m++}else if(I.isSpotLight){let Q=t.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(G).multiplyScalar(J),Q.distance=K,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,i.spot[b]=Q;let ct=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,ct.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[b]=ct.matrix,I.castShadow){let ot=e.get(I);ot.shadowIntensity=ct.intensity,ot.shadowBias=ct.bias,ot.shadowNormalBias=ct.normalBias,ot.shadowRadius=ct.radius,ot.shadowMapSize=ct.mapSize,i.spotShadow[b]=ot,i.spotShadowMap[b]=ft,A++}b++}else if(I.isRectAreaLight){let Q=t.get(I);Q.color.copy(G).multiplyScalar(J),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=Q,w++}else if(I.isPointLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){let ct=I.shadow,ot=e.get(I);ot.shadowIntensity=ct.intensity,ot.shadowBias=ct.bias,ot.shadowNormalBias=ct.normalBias,ot.shadowRadius=ct.radius,ot.shadowMapSize=ct.mapSize,ot.shadowCameraNear=ct.camera.near,ot.shadowCameraFar=ct.camera.far,i.pointShadow[p]=ot,i.pointShadowMap[p]=ft,i.pointShadowMatrix[p]=I.shadow.matrix,S++}i.point[p]=Q,p++}else if(I.isHemisphereLight){let Q=t.get(I);Q.skyColor.copy(I.color).multiplyScalar(J),Q.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[_]=Q,_++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==b||N.rectAreaLength!==w||N.hemiLength!==_||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==S||N.numSpotShadows!==A||N.numSpotMaps!==v||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=w,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=b,N.rectAreaLength=w,N.hemiLength=_,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=S,N.numSpotShadows=A,N.numSpotMaps=v,N.numLightProbes=C,i.version=fy++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let _=c[b];if(_.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(_.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Ud(n){let t=new my(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function gy(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ud(n),t.set(s,[o])):r>=a.length?(o=new Ud(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}function by(n,t,e){let i=new vr,s=new mt,r=new mt,a=new Xe,o=new sl,l=new rl,c={},h=e.maxTextureSize,d={[Ki]:Ye,[Ye]:Ki,[ke]:ke},u=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:xy,fragmentShader:yy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let p=this.type;this.render=function(S,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===w0&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Da);let T=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),k=n.state;k.setBlending(An),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=p!==this.type;z&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=S.length;I<G;I++){let J=S[I],K=J.shadow;if(K===void 0){re("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ft=K.getFrameExtents();s.multiply(ft),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,K.mapSize.y=r.y));let Q=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Q,K.map===null||z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Rr){if(J.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ui(s.x,s.y,{format:ps,type:hn,minFilter:bi,magFilter:bi,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new ns(s.x,s.y,Qi),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=bn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=oi,K.map.depthTexture.magFilter=oi}else J.isPointLight?(K.map=new lc(s.x),K.map.depthTexture=new $o(s.x,cn)):(K.map=new Ui(s.x,s.y),K.map.depthTexture=new ns(s.x,s.y,cn)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=bn,this.type===Da?(K.map.depthTexture.compareFunction=Q?rc:sc,K.map.depthTexture.minFilter=bi,K.map.depthTexture.magFilter=bi):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=oi,K.map.depthTexture.magFilter=oi);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ct=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();J.isPointLight!==!0&&K.updateMatrices(J,v);for(let ot=0;ot<ct;ot++){let Ht=K.getCamera(ot);if(J.isPointLight){let It=K.camera,ie=K.matrix,ee=J.distance||It.far;ee!==It.far&&(It.far=ee,It.updateProjectionMatrix()),Xa.setFromMatrixPosition(J.matrixWorld),It.position.copy(Xa),su.copy(It.position),su.add(vy[ot]),It.up.copy(_y[ot]),It.lookAt(su),It.updateMatrixWorld(),ie.makeTranslation(-Xa.x,-Xa.y,-Xa.z),Nd.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Nd,It.coordinateSystem,It.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,ot),n.clear();else{ot===0&&(n.setRenderTarget(K.map),n.clear());let It=K.getViewport(ot);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),k.viewport(a)}i=K.getFrustum(ot),_(A,v,Ht,J,this.type)}K.isPointLightShadow!==!0&&this.type===Rr&&b(K,v),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,N)};function b(S,A){let v=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ui(s.x,s.y,{format:ps,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,v,u,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,v,f,y,null)}function w(S,A,v,T){let C=null,N=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)C=N;else if(C=v.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let k=C.uuid,z=A.uuid,I=c[k];I===void 0&&(I={},c[k]=I);let G=I[z];G===void 0&&(G=C.clone(),I[z]=G,A.addEventListener("dispose",E)),C=G}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Rr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=n.properties.get(C);k.light=v}return C}function _(S,A,v,T,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Rr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let z=t.update(S),I=S.material;if(Array.isArray(I)){let G=z.groups;for(let J=0,K=G.length;J<K;J++){let ft=G[J],Q=I[ft.materialIndex];if(Q&&Q.visible){let ct=w(S,Q,T,C);S.onBeforeShadow(n,S,A,v,z,ct,ft),n.renderBufferDirect(v,null,z,ct,S,ft),S.onAfterShadow(n,S,A,v,z,ct,ft)}}}else if(I.visible){let G=w(S,I,T,C);S.onBeforeShadow(n,S,A,v,z,G,null),n.renderBufferDirect(v,null,z,G,S,null),S.onAfterShadow(n,S,A,v,z,G,null)}}let k=S.children;for(let z=0,I=k.length;z<I;z++)_(k[z],A,v,T,C)}function E(S){S.target.removeEventListener("dispose",E);for(let v in c){let T=c[v],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function My(n,t){function e(){let O=!1,Tt=new Xe,lt=null,Et=new Xe(0,0,0,0);return{setMask:function(Pt){lt!==Pt&&!O&&(n.colorMask(Pt,Pt,Pt,Pt),lt=Pt)},setLocked:function(Pt){O=Pt},setClear:function(Pt,L,F,st,ht){ht===!0&&(Pt*=st,L*=st,F*=st),Tt.set(Pt,L,F,st),Et.equals(Tt)===!1&&(n.clearColor(Pt,L,F,st),Et.copy(Tt))},reset:function(){O=!1,lt=null,Et.set(-1,0,0,0)}}}function i(){let O=!1,Tt=!1,lt=null,Et=null,Pt=null;return{setReversed:function(L){if(Tt!==L){let F=t.get("EXT_clip_control");L?F.clipControlEXT(F.LOWER_LEFT_EXT,F.ZERO_TO_ONE_EXT):F.clipControlEXT(F.LOWER_LEFT_EXT,F.NEGATIVE_ONE_TO_ONE_EXT),Tt=L;let st=Pt;Pt=null,this.setClear(st)}},getReversed:function(){return Tt},setTest:function(L){L?at(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(L){lt!==L&&!O&&(n.depthMask(L),lt=L)},setFunc:function(L){if(Tt&&(L=rd[L]),Et!==L){switch(L){case No:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case Bo:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case Oo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Ho:n.depthFunc(n.GREATER);break;case zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=L}},setLocked:function(L){O=L},setClear:function(L){Pt!==L&&(Pt=L,Tt&&(L=1-L),n.clearDepth(L))},reset:function(){O=!1,lt=null,Et=null,Pt=null,Tt=!1}}}function s(){let O=!1,Tt=null,lt=null,Et=null,Pt=null,L=null,F=null,st=null,ht=null;return{setTest:function(Rt){O||(Rt?at(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(Rt){Tt!==Rt&&!O&&(n.stencilMask(Rt),Tt=Rt)},setFunc:function(Rt,Vt,ae){(lt!==Rt||Et!==Vt||Pt!==ae)&&(n.stencilFunc(Rt,Vt,ae),lt=Rt,Et=Vt,Pt=ae)},setOp:function(Rt,Vt,ae){(L!==Rt||F!==Vt||st!==ae)&&(n.stencilOp(Rt,Vt,ae),L=Rt,F=Vt,st=ae)},setLocked:function(Rt){O=Rt},setClear:function(Rt){ht!==Rt&&(n.clearStencil(Rt),ht=Rt)},reset:function(){O=!1,Tt=null,lt=null,Et=null,Pt=null,L=null,F=null,st=null,ht=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,_=null,E=null,S=null,A=null,v=new gt(0,0,0),T=0,C=!1,N=null,k=null,z=null,I=null,G=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ft=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=ft>=1):Q.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=ft>=2);let ct=null,ot={},Ht=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),ie=new Xe().fromArray(Ht),ee=new Xe().fromArray(It);function fe(O,Tt,lt,Et){let Pt=new Uint8Array(4),L=n.createTexture();n.bindTexture(O,L),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let F=0;F<lt;F++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(Tt+F,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return L}let it={};it[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(hr),ut(!1),xt(Rh),at(n.CULL_FACE),Z(An);function at(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function wt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Gt(O,Tt){return u[O]!==Tt?(n.bindFramebuffer(O,Tt),u[O]=Tt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Tt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function At(O,Tt){let lt=g,Et=!1;if(O){lt=f.get(Tt),lt===void 0&&(lt=[],f.set(Tt,lt));let Pt=O.textures;if(lt.length!==Pt.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let L=0,F=Pt.length;L<F;L++)lt[L]=n.COLOR_ATTACHMENT0+L;lt.length=Pt.length,Et=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,Et=!0);Et&&n.drawBuffers(lt)}function j(O){return y!==O?(n.useProgram(O),y=O,!0):!1}let bt={[Us]:n.FUNC_ADD,[R0]:n.FUNC_SUBTRACT,[A0]:n.FUNC_REVERSE_SUBTRACT};bt[C0]=n.MIN,bt[L0]=n.MAX;let $={[P0]:n.ZERO,[I0]:n.ONE,[D0]:n.SRC_COLOR,[Lh]:n.SRC_ALPHA,[k0]:n.SRC_ALPHA_SATURATE,[B0]:n.DST_COLOR,[N0]:n.DST_ALPHA,[U0]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[O0]:n.ONE_MINUS_DST_COLOR,[F0]:n.ONE_MINUS_DST_ALPHA,[H0]:n.CONSTANT_COLOR,[z0]:n.ONE_MINUS_CONSTANT_COLOR,[G0]:n.CONSTANT_ALPHA,[V0]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(O,Tt,lt,Et,Pt,L,F,st,ht,Rt){if(O===An){m===!0&&(wt(n.BLEND),m=!1);return}if(m===!1&&(at(n.BLEND),m=!0),O!==T0){if(O!==p||Rt!==C){if((b!==Us||E!==Us)&&(n.blendEquation(n.FUNC_ADD),b=Us,E=Us),Rt)switch(O){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fe:n.blendFunc(n.ONE,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:oe("WebGLState: Invalid blending: ",O);break}else switch(O){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fe:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ah:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",O);break}w=null,_=null,S=null,A=null,v.set(0,0,0),T=0,p=O,C=Rt}return}Pt=Pt||Tt,L=L||lt,F=F||Et,(Tt!==b||Pt!==E)&&(n.blendEquationSeparate(bt[Tt],bt[Pt]),b=Tt,E=Pt),(lt!==w||Et!==_||L!==S||F!==A)&&(n.blendFuncSeparate($[lt],$[Et],$[L],$[F]),w=lt,_=Et,S=L,A=F),(st.equals(v)===!1||ht!==T)&&(n.blendColor(st.r,st.g,st.b,ht),v.copy(st),T=ht),p=O,C=!1}function dt(O,Tt){O.side===ke?wt(n.CULL_FACE):at(n.CULL_FACE);let lt=O.side===Ye;Tt&&(lt=!lt),ut(lt),O.blending===hs&&O.transparent===!1?Z(An):Z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Et=O.stencilWrite;o.setTest(Et),Et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function xt(O){O!==S0?(at(n.CULL_FACE),O!==k&&(O===Rh?n.cullFace(n.BACK):O===E0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),k=O}function Ct(O){O!==z&&(K&&n.lineWidth(O),z=O)}function Lt(O,Tt,lt){O?(at(n.POLYGON_OFFSET_FILL),(I!==Tt||G!==lt)&&(I=Tt,G=lt,a.getReversed()&&(Tt=-Tt),n.polygonOffset(Tt,lt))):wt(n.POLYGON_OFFSET_FILL)}function Bt(O){O?at(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function jt(O){O===void 0&&(O=n.TEXTURE0+J-1),ct!==O&&(n.activeTexture(O),ct=O)}function D(O,Tt,lt){lt===void 0&&(ct===null?lt=n.TEXTURE0+J-1:lt=ct);let Et=ot[lt];Et===void 0&&(Et={type:void 0,texture:void 0},ot[lt]=Et),(Et.type!==O||Et.texture!==Tt)&&(ct!==lt&&(n.activeTexture(lt),ct=lt),n.bindTexture(O,Tt||it[O]),Et.type=O,Et.texture=Tt)}function de(){let O=ot[ct];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{n.compressedTexImage2D(...arguments)}catch(O){oe("WebGLState:",O)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(O){oe("WebGLState:",O)}}function x(){try{n.texSubImage2D(...arguments)}catch(O){oe("WebGLState:",O)}}function H(){try{n.texSubImage3D(...arguments)}catch(O){oe("WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(O){oe("WebGLState:",O)}}function U(){try{n.compressedTexSubImage3D(...arguments)}catch(O){oe("WebGLState:",O)}}function nt(){try{n.texStorage2D(...arguments)}catch(O){oe("WebGLState:",O)}}function pt(){try{n.texStorage3D(...arguments)}catch(O){oe("WebGLState:",O)}}function V(){try{n.texImage2D(...arguments)}catch(O){oe("WebGLState:",O)}}function tt(){try{n.texImage3D(...arguments)}catch(O){oe("WebGLState:",O)}}function yt(O){return d[O]!==void 0?d[O]:n.getParameter(O)}function zt(O,Tt){d[O]!==Tt&&(n.pixelStorei(O,Tt),d[O]=Tt)}function _t(O){ie.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ie.copy(O))}function St(O){ee.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Ot(O,Tt){let lt=c.get(Tt);lt===void 0&&(lt=new WeakMap,c.set(Tt,lt));let Et=lt.get(O);Et===void 0&&(Et=n.getUniformBlockIndex(Tt,O.name),lt.set(O,Et))}function Kt(O,Tt){let Et=c.get(Tt).get(O);l.get(Tt)!==Et&&(n.uniformBlockBinding(Tt,Et,O.__bindingPointIndex),l.set(Tt,Et))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ct=null,ot={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,_=null,E=null,S=null,A=null,v=new gt(0,0,0),T=0,C=!1,N=null,k=null,z=null,I=null,G=null,ie.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:wt,bindFramebuffer:Gt,drawBuffers:At,useProgram:j,setBlending:Z,setMaterial:dt,setFlipSided:ut,setCullFace:xt,setLineWidth:Ct,setPolygonOffset:Lt,setScissorTest:Bt,activeTexture:jt,bindTexture:D,unbindTexture:de,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:V,texImage3D:tt,pixelStorei:zt,getParameter:yt,updateUBOMapping:Ot,uniformBlockBinding:Kt,texStorage2D:nt,texStorage3D:pt,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:U,scissor:_t,viewport:St,reset:le}}function Sy(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,x){return g?new OffscreenCanvas(R,x):la("canvas")}function m(R,x,H){let W=1,U=se(R);if((U.width>H||U.height>H)&&(W=H/Math.max(U.width,U.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let nt=Math.floor(W*U.width),pt=Math.floor(W*U.height);u===void 0&&(u=y(nt,pt));let V=x?y(nt,pt):u;return V.width=nt,V.height=pt,V.getContext("2d").drawImage(R,0,0,nt,pt),re("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+nt+"x"+pt+")."),V}else return"data"in R&&re("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,x,H,W,U,nt=!1){if(R!==null){if(n[R]!==void 0)return n[R];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pt;W&&(pt=t.get("EXT_texture_norm16"),pt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=x;if(x===n.RED&&(H===n.FLOAT&&(V=n.R32F),H===n.HALF_FLOAT&&(V=n.R16F),H===n.UNSIGNED_BYTE&&(V=n.R8),H===n.UNSIGNED_SHORT&&pt&&(V=pt.R16_EXT),H===n.SHORT&&pt&&(V=pt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.R8UI),H===n.UNSIGNED_SHORT&&(V=n.R16UI),H===n.UNSIGNED_INT&&(V=n.R32UI),H===n.BYTE&&(V=n.R8I),H===n.SHORT&&(V=n.R16I),H===n.INT&&(V=n.R32I)),x===n.RG&&(H===n.FLOAT&&(V=n.RG32F),H===n.HALF_FLOAT&&(V=n.RG16F),H===n.UNSIGNED_BYTE&&(V=n.RG8),H===n.UNSIGNED_SHORT&&pt&&(V=pt.RG16_EXT),H===n.SHORT&&pt&&(V=pt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.RG8UI),H===n.UNSIGNED_SHORT&&(V=n.RG16UI),H===n.UNSIGNED_INT&&(V=n.RG32UI),H===n.BYTE&&(V=n.RG8I),H===n.SHORT&&(V=n.RG16I),H===n.INT&&(V=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.RGB8UI),H===n.UNSIGNED_SHORT&&(V=n.RGB16UI),H===n.UNSIGNED_INT&&(V=n.RGB32UI),H===n.BYTE&&(V=n.RGB8I),H===n.SHORT&&(V=n.RGB16I),H===n.INT&&(V=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),H===n.UNSIGNED_INT&&(V=n.RGBA32UI),H===n.BYTE&&(V=n.RGBA8I),H===n.SHORT&&(V=n.RGBA16I),H===n.INT&&(V=n.RGBA32I)),x===n.RGB&&(H===n.UNSIGNED_SHORT&&pt&&(V=pt.RGB16_EXT),H===n.SHORT&&pt&&(V=pt.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),x===n.RGBA){let tt=nt?oa:be.getTransfer(U);H===n.FLOAT&&(V=n.RGBA32F),H===n.HALF_FLOAT&&(V=n.RGBA16F),H===n.UNSIGNED_BYTE&&(V=tt===Ne?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&pt&&(V=pt.RGBA16_EXT),H===n.SHORT&&pt&&(V=pt.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function E(R,x){let H;return R?x===null||x===cn||x===Cr?H=n.DEPTH24_STENCIL8:x===Qi?H=n.DEPTH32F_STENCIL8:x===Ar&&(H=n.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===cn||x===Cr?H=n.DEPTH_COMPONENT24:x===Qi?H=n.DEPTH_COMPONENT32F:x===Ar&&(H=n.DEPTH_COMPONENT16),H}function S(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==oi&&R.minFilter!==bi?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){let x=R.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(R){let x=R.target;x.removeEventListener("dispose",v),N(x)}function T(R){let x=i.get(R);if(x.__webglInit===void 0)return;let H=R.source,W=f.get(H);if(W){let U=W[x.__cacheKey];U.usedTimes--,U.usedTimes===0&&C(R),Object.keys(W).length===0&&f.delete(H)}i.remove(R)}function C(R){let x=i.get(R);n.deleteTexture(x.__webglTexture);let H=R.source,W=f.get(H);delete W[x.__cacheKey],a.memory.textures--}function N(R){let x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let U=0;U<x.__webglFramebuffer[W].length;U++)n.deleteFramebuffer(x.__webglFramebuffer[W][U]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=R.textures;for(let W=0,U=H.length;W<U;W++){let nt=i.get(H[W]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),a.memory.textures--),i.remove(H[W])}i.remove(R)}let k=0;function z(){k=0}function I(){return k}function G(R){k=R}function J(){let R=k;return R>=s.maxTextures&&re("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function K(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function ft(R,x){let H=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let W=R.image;if(W===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(H,R,x);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function Q(R,x){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){wt(H,R,x);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function ct(R,x){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){wt(H,R,x);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function ot(R,x){let H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Gt(H,R,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}let Ht={[ur]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},It={[oi]:n.NEAREST,[q0]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[bl]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},ie={[$0]:n.NEVER,[ed]:n.ALWAYS,[j0]:n.LESS,[sc]:n.LEQUAL,[K0]:n.EQUAL,[rc]:n.GEQUAL,[Q0]:n.GREATER,[td]:n.NOTEQUAL};function ee(R,x){if(x.type===Qi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===bi||x.magFilter===bl||x.magFilter===Fa||x.magFilter===ds||x.minFilter===bi||x.minFilter===bl||x.minFilter===Fa||x.minFilter===ds)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ht[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ht[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ht[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,It[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,It[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===oi||x.minFilter!==Fa&&x.minFilter!==ds||x.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function fe(R,x){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));let W=x.source,U=f.get(W);U===void 0&&(U={},f.set(W,U));let nt=K(x);if(nt!==R.__cacheKey){U[nt]===void 0&&(U[nt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),U[nt].usedTimes++;let pt=U[R.__cacheKey];pt!==void 0&&(U[R.__cacheKey].usedTimes--,pt.usedTimes===0&&C(x)),R.__cacheKey=nt,R.__webglTexture=U[nt].texture}return H}function it(R,x,H){return Math.floor(Math.floor(R/H)/x)}function at(R,x,H,W){let nt=R.updateRanges;if(nt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,W,x.data);else{nt.sort((zt,_t)=>zt.start-_t.start);let pt=0;for(let zt=1;zt<nt.length;zt++){let _t=nt[pt],St=nt[zt],Ot=_t.start+_t.count,Kt=it(St.start,x.width,4),le=it(_t.start,x.width,4);St.start<=Ot+1&&Kt===le&&it(St.start+St.count-1,x.width,4)===Kt?_t.count=Math.max(_t.count,St.start+St.count-_t.start):(++pt,nt[pt]=St)}nt.length=pt+1;let V=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let zt=0,_t=nt.length;zt<_t;zt++){let St=nt[zt],Ot=Math.floor(St.start/4),Kt=Math.ceil(St.count/4),le=Ot%x.width,O=Math.floor(Ot/x.width),Tt=Kt,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,le),e.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,le,O,Tt,lt,H,W,x.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,V),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function wt(R,x,H){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);let U=fe(R,x),nt=x.source;e.bindTexture(W,R.__webglTexture,n.TEXTURE0+H);let pt=i.get(nt);if(nt.version!==pt.__version||U===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let lt=be.getPrimaries(be.workingColorSpace),Et=x.colorSpace===Xn?null:be.getPrimaries(x.colorSpace),Pt=x.colorSpace===Xn||lt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=m(x.image,!1,s.maxTextureSize);tt=de(x,tt);let yt=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),_t=_(x.internalFormat,yt,zt,x.normalized,x.colorSpace,x.isVideoTexture);ee(W,x);let St,Ot=x.mipmaps,Kt=x.isVideoTexture!==!0,le=pt.__version===void 0||U===!0,O=nt.dataReady,Tt=S(x,tt);if(x.isDepthTexture)_t=E(x.format===fs,x.type),le&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,_t,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,_t,tt.width,tt.height,0,yt,zt,null));else if(x.isDataTexture)if(Ot.length>0){Kt&&le&&e.texStorage2D(n.TEXTURE_2D,Tt,_t,Ot[0].width,Ot[0].height);for(let lt=0,Et=Ot.length;lt<Et;lt++)St=Ot[lt],Kt?O&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,St.width,St.height,yt,zt,St.data):e.texImage2D(n.TEXTURE_2D,lt,_t,St.width,St.height,0,yt,zt,St.data);x.generateMipmaps=!1}else Kt?(le&&e.texStorage2D(n.TEXTURE_2D,Tt,_t,tt.width,tt.height),O&&at(x,tt,yt,zt)):e.texImage2D(n.TEXTURE_2D,0,_t,tt.width,tt.height,0,yt,zt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,_t,Ot[0].width,Ot[0].height,tt.depth);for(let lt=0,Et=Ot.length;lt<Et;lt++)if(St=Ot[lt],x.format!==tn)if(yt!==null)if(Kt){if(O)if(x.layerUpdates.size>0){let Pt=jh(St.width,St.height,x.format,x.type);for(let L of x.layerUpdates){let F=St.data.subarray(L*Pt/St.data.BYTES_PER_ELEMENT,(L+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,L,St.width,St.height,1,yt,F)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,St.width,St.height,tt.depth,yt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,_t,St.width,St.height,tt.depth,0,St.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,St.width,St.height,tt.depth,yt,zt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,_t,St.width,St.height,tt.depth,0,yt,zt,St.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Kt&&le&&e.texStorage2D(n.TEXTURE_2D,Tt,_t,Ot[0].width,Ot[0].height);for(let lt=0,Et=Ot.length;lt<Et;lt++)St=Ot[lt],x.format!==tn?yt!==null?Kt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,_t,St.width,St.height,0,St.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?O&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,St.width,St.height,yt,zt,St.data):e.texImage2D(n.TEXTURE_2D,lt,_t,St.width,St.height,0,yt,zt,St.data)}else if(x.isDataArrayTexture)if(Kt){if(le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,_t,tt.width,tt.height,tt.depth),O)if(x.layerUpdates.size>0){let lt=jh(tt.width,tt.height,x.format,x.type);for(let Et of x.layerUpdates){let Pt=tt.data.subarray(Et*lt/tt.data.BYTES_PER_ELEMENT,(Et+1)*lt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,tt.width,tt.height,1,yt,zt,Pt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,yt,zt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,tt.width,tt.height,tt.depth,0,yt,zt,tt.data);else if(x.isData3DTexture)Kt?(le&&e.texStorage3D(n.TEXTURE_3D,Tt,_t,tt.width,tt.height,tt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,yt,zt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,_t,tt.width,tt.height,tt.depth,0,yt,zt,tt.data);else if(x.isFramebufferTexture){if(le)if(Kt)e.texStorage2D(n.TEXTURE_2D,Tt,_t,tt.width,tt.height);else{let lt=tt.width,Et=tt.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,_t,lt,Et,0,yt,zt,null),lt>>=1,Et>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),tt.parentNode!==lt){lt.appendChild(tt),d.add(x),lt.onpaint=Et=>{let Pt=Et.changedElements;for(let L of d)Pt.includes(L.image)&&(L.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{let Pt=n.RGBA,L=n.RGBA,F=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pt,L,F,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Kt&&le){let lt=se(Ot[0]);e.texStorage2D(n.TEXTURE_2D,Tt,_t,lt.width,lt.height)}for(let lt=0,Et=Ot.length;lt<Et;lt++)St=Ot[lt],Kt?O&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,yt,zt,St):e.texImage2D(n.TEXTURE_2D,lt,_t,yt,zt,St);x.generateMipmaps=!1}else if(Kt){if(le){let lt=se(tt);e.texStorage2D(n.TEXTURE_2D,Tt,_t,lt.width,lt.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,zt,tt)}else e.texImage2D(n.TEXTURE_2D,0,_t,yt,zt,tt);p(x)&&b(W),pt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Gt(R,x,H){if(x.image.length!==6)return;let W=fe(R,x),U=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let nt=i.get(U);if(U.version!==nt.__version||W===!0){e.activeTexture(n.TEXTURE0+H);let pt=be.getPrimaries(be.workingColorSpace),V=x.colorSpace===Xn?null:be.getPrimaries(x.colorSpace),tt=x.colorSpace===Xn||pt===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let yt=x.isCompressedTexture||x.image[0].isCompressedTexture,zt=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let L=0;L<6;L++)!yt&&!zt?_t[L]=m(x.image[L],!0,s.maxCubemapSize):_t[L]=zt?x.image[L].image:x.image[L],_t[L]=de(x,_t[L]);let St=_t[0],Ot=r.convert(x.format,x.colorSpace),Kt=r.convert(x.type),le=_(x.internalFormat,Ot,Kt,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,Tt=nt.__version===void 0||W===!0,lt=U.dataReady,Et=S(x,St);ee(n.TEXTURE_CUBE_MAP,x);let Pt;if(yt){O&&Tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,le,St.width,St.height);for(let L=0;L<6;L++){Pt=_t[L].mipmaps;for(let F=0;F<Pt.length;F++){let st=Pt[F];x.format!==tn?Ot!==null?O?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F,0,0,st.width,st.height,Ot,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F,le,st.width,st.height,0,st.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F,0,0,st.width,st.height,Ot,Kt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F,le,st.width,st.height,0,Ot,Kt,st.data)}}}else{if(Pt=x.mipmaps,O&&Tt){Pt.length>0&&Et++;let L=se(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,le,L.width,L.height)}for(let L=0;L<6;L++)if(zt){O?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,_t[L].width,_t[L].height,Ot,Kt,_t[L].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,le,_t[L].width,_t[L].height,0,Ot,Kt,_t[L].data);for(let F=0;F<Pt.length;F++){let ht=Pt[F].image[L].image;O?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F+1,0,0,ht.width,ht.height,Ot,Kt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F+1,le,ht.width,ht.height,0,Ot,Kt,ht.data)}}else{O?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Ot,Kt,_t[L]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,le,Ot,Kt,_t[L]);for(let F=0;F<Pt.length;F++){let st=Pt[F];O?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F+1,0,0,Ot,Kt,st.image[L]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F+1,le,Ot,Kt,st.image[L])}}}p(x)&&b(n.TEXTURE_CUBE_MAP),nt.__version=U.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function At(R,x,H,W,U,nt){let pt=r.convert(H.format,H.colorSpace),V=r.convert(H.type),tt=_(H.internalFormat,pt,V,H.normalized,H.colorSpace),yt=i.get(x),zt=i.get(H);if(zt.__renderTarget=x,!yt.__hasExternalTextures){let _t=Math.max(1,x.width>>nt),St=Math.max(1,x.height>>nt);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?e.texImage3D(U,nt,tt,_t,St,x.depth,0,pt,V,null):e.texImage2D(U,nt,tt,_t,St,0,pt,V,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),jt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,U,zt.__webglTexture,0,Bt(x)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,U,zt.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(R,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){let W=x.depthTexture,U=W&&W.isDepthTexture?W.type:null,nt=E(x.stencilBuffer,U),pt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(x),nt,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(x),nt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,nt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,R)}else{let W=x.textures;for(let U=0;U<W.length;U++){let nt=W[U],pt=r.convert(nt.format,nt.colorSpace),V=r.convert(nt.type),tt=_(nt.internalFormat,pt,V,nt.normalized,nt.colorSpace);jt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(x),tt,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(x),tt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,tt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(R,x,H){let W=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let U=i.get(x.depthTexture);if(U.__renderTarget=x,(!U.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(U.__webglInit===void 0&&(U.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),U.__webglTexture===void 0){U.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x.depthTexture);let yt=r.convert(x.depthTexture.format),zt=r.convert(x.depthTexture.type),_t;x.depthTexture.format===bn?_t=n.DEPTH_COMPONENT24:x.depthTexture.format===fs&&(_t=n.DEPTH24_STENCIL8);for(let St=0;St<6;St++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_t,x.width,x.height,0,yt,zt,null)}}else ft(x.depthTexture,0);let nt=U.__webglTexture,pt=Bt(x),V=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,tt=x.depthTexture.format===fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===bn)jt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,V,nt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,V,nt,0);else if(x.depthTexture.format===fs)jt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,V,nt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,V,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(R){let x=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let U=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",U)};W.addEventListener("dispose",U),x.__depthDisposeCallback=U}x.__boundDepthTexture=W}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)bt(x.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?bt(x.__webglFramebuffer[0],R,0):bt(x.__webglFramebuffer,R,0)}else if(H){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),j(x.__webglDepthbuffer[W],R,!1);else{let U=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,nt)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),j(x.__webglDepthbuffer,R,!1);else{let U=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,nt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(R,x,H){let W=i.get(R);x!==void 0&&At(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&$(R)}function dt(R){let x=R.texture,H=i.get(R),W=i.get(x);R.addEventListener("dispose",v);let U=R.textures,nt=R.isWebGLCubeRenderTarget===!0,pt=U.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,a.memory.textures++),nt){H.__webglFramebuffer=[];for(let V=0;V<6;V++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[V]=[];for(let tt=0;tt<x.mipmaps.length;tt++)H.__webglFramebuffer[V][tt]=n.createFramebuffer()}else H.__webglFramebuffer[V]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let V=0;V<x.mipmaps.length;V++)H.__webglFramebuffer[V]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(pt)for(let V=0,tt=U.length;V<tt;V++){let yt=i.get(U[V]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&jt(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let V=0;V<U.length;V++){let tt=U[V];H.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[V]);let yt=r.convert(tt.format,tt.colorSpace),zt=r.convert(tt.type),_t=_(tt.internalFormat,yt,zt,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),St=Bt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,_t,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,H.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),j(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x);for(let V=0;V<6;V++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)At(H.__webglFramebuffer[V][tt],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,tt);else At(H.__webglFramebuffer[V],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);p(x)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let V=0,tt=U.length;V<tt;V++){let yt=U[V],zt=i.get(yt),_t=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,zt.__webglTexture),ee(_t,yt),At(H.__webglFramebuffer,R,yt,n.COLOR_ATTACHMENT0+V,_t,0),p(yt)&&b(_t)}e.unbindTexture()}else{let V=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(V=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(V,W.__webglTexture),ee(V,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)At(H.__webglFramebuffer[tt],R,x,n.COLOR_ATTACHMENT0,V,tt);else At(H.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,V,0);p(x)&&b(V),e.unbindTexture()}R.depthBuffer&&$(R)}function ut(R){let x=R.textures;for(let H=0,W=x.length;H<W;H++){let U=x[H];if(p(U)){let nt=w(R),pt=i.get(U).__webglTexture;e.bindTexture(nt,pt),b(nt),e.unbindTexture()}}}let xt=[],Ct=[];function Lt(R){if(R.samples>0){if(jt(R)===!1){let x=R.textures,H=R.width,W=R.height,U=n.COLOR_BUFFER_BIT,nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(R),V=x.length>1;if(V)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let tt=R.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),V){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[yt]);let zt=i.get(x[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,H,W,0,0,H,W,U,n.NEAREST),l===!0&&(xt.length=0,Ct.length=0,xt.push(n.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(xt.push(nt),Ct.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[yt]);let zt=i.get(x[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Bt(R){return Math.min(s.maxSamples,R.samples)}function jt(R){let x=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function de(R,x){let H=R.colorSpace,W=R.format,U=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==aa&&H!==Xn&&(be.getTransfer(H)===Ne?(W!==tn||U!==Ni)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",H)),x}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=z,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=ft,this.setTexture2DArray=Q,this.setTexture3D=ct,this.setTextureCube=ot,this.rebindTextures=Z,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=At,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ey(n,t){function e(i,s=Xn){let r,a=be.getTransfer(s);if(i===Ni)return n.UNSIGNED_BYTE;if(i===Sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===El)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Ml)return n.INT;if(i===cn)return n.UNSIGNED_INT;if(i===Qi)return n.FLOAT;if(i===hn)return n.HALF_FLOAT;if(i===Vh)return n.ALPHA;if(i===Wh)return n.RGB;if(i===tn)return n.RGBA;if(i===bn)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===Lr)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===ps)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Ba||i===Oa||i===ka||i===Ha)if(a===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===Cl||i===Ll||i===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Dl||i===Ul||i===Nl||i===Fl||i===za||i===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Dl)return a===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===za)return r.COMPRESSED_RG11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===kl||i===Hl||i===zl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===$l||i===jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Ql||i===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return a===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ec||i===ic||i===Ga||i===nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function Ay(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),w=b.envMap,_=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cy(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let S=E.program;i.uniformBlockBinding(_,S)}function c(_,E){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",b));let A=E.program;i.updateUBOMapping(_,A);let v=t.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){let E=d();_.__bindingPointIndex=E;let S=n.createBuffer(),A=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let E=s[_.id],S=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,T=S.length;v<T;v++){let C=S[v];if(Array.isArray(C))for(let N=0,k=C.length;N<k;N++)f(C[N],v,N,A);else f(C,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,E,S,A){if(y(_,E,S,A)===!0){let v=_.__offset,T=_.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){let k=T[N],z=p(k);g(k,_.__data,C),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function g(_,E,S){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,S)}function y(_,E,S,A){let v=_.value,T=E+"_"+S;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let C=A[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(_){let E=_.uniforms,S=0,A=16;for(let T=0,C=E.length;T<C;T++){let N=Array.isArray(E[T])?E[T]:[E[T]];for(let k=0,z=N.length;k<z;k++){let I=N[k],G=Array.isArray(I.value)?I.value:[I.value];for(let J=0,K=G.length;J<K;J++){let ft=G[J],Q=p(ft),ct=S%A,ot=ct%Q.boundary,Ht=ct+ot;S+=ot,Ht!==0&&A-Ht<Q.storage&&(S+=A-Ht),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Q.storage}}}let v=S%A;return v>0&&(S+=A-v),_.__size=S,_.__cache={},this}function p(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):re("WebGLRenderer: Unsupported uniform value type.",_),E}function b(_){let E=_.target;E.removeEventListener("dispose",b);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}function Py(){return Cn===null&&(Cn=new Ts(Ly,16,16,ps,hn),Cn.name="DFG_LUT",Cn.minFilter=bi,Cn.magFilter=bi,Cn.wrapS=vn,Cn.wrapT=vn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var Wp,Xp,qp,Yp,Zp,Jp,$p,jp,Kp,Qp,tm,em,im,nm,sm,rm,am,om,lm,cm,hm,um,dm,fm,pm,mm,gm,xm,ym,vm,_m,bm,Mm,Sm,Em,wm,Tm,Rm,Am,Cm,Lm,Pm,Im,Dm,Um,Nm,Fm,Bm,Om,km,Hm,zm,Gm,Vm,Wm,Xm,qm,Ym,Zm,Jm,$m,jm,Km,Qm,tg,eg,ig,ng,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,yg,vg,_g,bg,Mg,Sg,Eg,wg,Tg,Rg,Ag,Cg,Lg,Pg,Ig,Dg,Ug,Ng,Fg,Bg,Og,kg,Hg,zg,Gg,Vg,Wg,Xg,qg,Yg,Zg,Jg,$g,jg,Kg,Qg,tx,ex,ix,nx,sx,rx,ax,ox,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,yx,vx,_x,bx,Mx,Sx,ge,Dt,Ln,ac,Ex,Bd,Dr,Lx,Px,Ix,Wa,md,Qh,tu,eu,iu,Dx,Bs,Nr,lc,Wx,Od,ru,kd,Hd,zd,vd,_d,bd,Md,Sd,au,ou,lu,nu,Ur,D1,U1,Td,O1,oc,W1,X1,Y1,J1,j1,Q1,ey,ry,hu,uu,fy,xy,yy,vy,_y,Nd,Xa,su,wy,Ty,du,fu,Ry,Gd,Ly,Cn,cc,Ci=We(()=>{Kh();Kh();Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Gm=`uniform sampler2D dfgLUT;
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
}`,Vm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tg=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,jg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 diffuse;
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
}`,ax=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,cx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,px=`#define STANDARD
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
}`,mx=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,xx=`#define TOON
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
}`,yx=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,bx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:$p,aomap_pars_fragment:jp,batching_pars_vertex:Kp,batching_vertex:Qp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:im,iridescence_fragment:nm,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,colorspace_fragment:_m,colorspace_pars_fragment:bm,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:Em,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Fm,envmap_vertex:Tm,fog_vertex:Rm,fog_pars_vertex:Am,fog_fragment:Cm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Bm,lights_toon_pars_fragment:Om,lights_phong_fragment:km,lights_phong_pars_fragment:Hm,lights_physical_fragment:zm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:$m,map_fragment:jm,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ig,morphinstance_vertex:ng,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:ag,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:vg,premultiplied_alpha_fragment:_g,project_vertex:bg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Cg,skinbase_vertex:Lg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Dg,specularmap_fragment:Ug,specularmap_pars_fragment:Ng,tonemapping_fragment:Fg,tonemapping_pars_fragment:Bg,transmission_fragment:Og,transmission_pars_fragment:kg,uv_pars_fragment:Hg,uv_pars_vertex:zg,uv_vertex:Gg,worldpos_vertex:Vg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:qg,backgroundCube_frag:Yg,cube_vert:Zg,cube_frag:Jg,depth_vert:$g,depth_frag:jg,distance_vert:Kg,distance_frag:Qg,equirect_vert:tx,equirect_frag:ex,linedashed_vert:ix,linedashed_frag:nx,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ax,meshlambert_frag:ox,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:xx,points_vert:yx,points_frag:vx,shadow_vert:_x,shadow_frag:bx,sprite_vert:Mx,sprite_frag:Sx},Dt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ln={basic:{uniforms:Ai([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Ai([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Ai([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Ai([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Ai([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Ai([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Ai([Dt.points,Dt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Ai([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Ai([Dt.common,Dt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Ai([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Ai([Dt.sprite,Dt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Ai([Dt.common,Dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Ai([Dt.lights,Dt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ln.physical={uniforms:Ai([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};ac={r:0,b:0,g:0},Ex=new Ae,Bd=new ue;Bd.set(-1,0,0,0,1,0,0,0,1);Dr=4,Lx=6,Px=20,Ix=256,Wa=new Tr,md=new gt,Qh=null,tu=0,eu=0,iu=!1,Dx=new P,Bs=new P,Nr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Dx}=r;Qh=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qh,tu,eu),this._renderer.xr.enabled=iu,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qh=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:hn,format:tn,colorSpace:aa,depthBuffer:!1},s=gd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ux(r)),this._blurMaterial=Fx(r,t,e),this._ggxMaterial=Nx(r,t,e)}return s}_compileMaterial(t){let e=new Ft(new me,t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,i,s,r){let l=new li(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(md),d.toneMapping=ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new ei,new Me({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(md),p=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;Ir(s,_*E,w>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Wa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Dr?i-g+Dr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ir(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Ir(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Wa)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Dr?s-this._lodMax+Dr:0),u=4*(this._cubeSize-h);Ir(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Wa)}};lc=class extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new xa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:An});r.uniforms.tEquirect.value=e;let a=new Ft(s,r),o=e.minFilter;return e.minFilter===ds&&(e.minFilter=bi),new gl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};Wx={[Ih]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Nh]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[Ua]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};Od=new Di,ru=new ns(1,1),kd=new ha,Hd=new Yo,zd=new xa,vd=[],_d=[],bd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);au=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=u1(e.type)}},ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P1(e.type)}},lu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},nu=/(\w+)(\])?(\[|\.)?/g;Ur=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);I1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};D1=37297,U1=0;Td=new ue;O1={[Ih]:"Linear",[Dh]:"Reinhard",[Uh]:"Cineon",[Nh]:"ACESFilmic",[Bh]:"AgX",[Ua]:"Neutral",[Fh]:"Custom"};oc=new P;W1=/^[ \t]*#include +<([\w\d./]+)>/gm;X1=new Map;Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;J1={[Da]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};j1={[us]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};Q1={[Ns]:"ENVMAP_MODE_REFRACTION"};ey={[yl]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};ry=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new uu(t),e.set(t,i)),i}},uu=class{constructor(t){this.id=ry++,this.code=t,this.usedTimes=0}};fy=0;xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
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
}`,vy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],_y=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Nd=new Ae,Xa=new P,su=new P;wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qe({vertexShader:wy,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Mn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new du,p={},b=e.getContextAttributes(),w=null,_=null,E=[],S=[],A=new mt,v=null,T=null,C=new li;C.viewport=new Xe;let N=new li;N.viewport=new Xe;let k=[C,N],z=new xl,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let at=E[it];return at===void 0&&(at=new mr,E[it]=at),at.getTargetRaySpace()},this.getControllerGrip=function(it){let at=E[it];return at===void 0&&(at=new mr,E[it]=at),at.getGripSpace()},this.getHand=function(it){let at=E[it];return at===void 0&&(at=new mr,E[it]=at),at.getHandSpace()};function J(it){let at=S.indexOf(it.inputSource);if(at===-1)return;let wt=E[at];wt!==void 0&&(wt.update(it.inputSource,it.frame,c||a),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function K(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ft);for(let it=0;it<E.length;it++){let at=S[it];at!==null&&(S[it]=null,E[it].disconnect(at))}I=null,G=null,m.reset();for(let it in p)delete p[it];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,fe.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),T!==null){let it=T.camera;it.fov=T.fov,it.zoom=T.zoom,it.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,i.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ft),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Gt=null,At=null;b.depth&&(At=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=b.stencil?fs:bn,Gt=b.stencil?Cr:cn);let j={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(j),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Ui(u.textureWidth,u.textureHeight,{format:tn,type:Ni,depthTexture:new ns(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let wt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ui(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft(it){for(let at=0;at<it.removed.length;at++){let wt=it.removed[at],Gt=S.indexOf(wt);Gt>=0&&(S[Gt]=null,E[Gt].disconnect(wt))}for(let at=0;at<it.added.length;at++){let wt=it.added[at],Gt=S.indexOf(wt);if(Gt===-1){for(let j=0;j<E.length;j++)if(j>=S.length){S.push(wt),Gt=j;break}else if(S[j]===null){S[j]=wt,Gt=j;break}if(Gt===-1)break}let At=E[Gt];At&&At.connect(wt)}}let Q=new P,ct=new P;function ot(it,at,wt){Q.setFromMatrixPosition(at.matrixWorld),ct.setFromMatrixPosition(wt.matrixWorld);let Gt=Q.distanceTo(ct),At=at.projectionMatrix.elements,j=wt.projectionMatrix.elements,bt=At[14]/(At[10]-1),$=At[14]/(At[10]+1),Z=(At[9]+1)/At[5],dt=(At[9]-1)/At[5],ut=(At[8]-1)/At[0],xt=(j[8]+1)/j[0],Ct=bt*ut,Lt=bt*xt,Bt=Gt/(-ut+xt),jt=Bt*-ut;if(at.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(jt),it.translateZ(Bt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),At[10]===-1)it.projectionMatrix.copy(at.projectionMatrix),it.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let D=bt+Bt,de=$+Bt,se=Ct-jt,R=Lt+(Gt-jt),x=Z*$/de*D,H=dt*$/de*D;it.projectionMatrix.makePerspective(se,R,x,H,D,de),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Ht(it,at){at===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(at.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let at=it.near,wt=it.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),z.near=N.near=C.near=at,z.far=N.far=C.far=wt,(I!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,G=z.far),z.layers.mask=it.layers.mask|6,C.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Gt=it.parent,At=z.cameras;Ht(z,Gt);for(let j=0;j<At.length;j++)Ht(At[j],Gt);At.length===2?ot(z,C,N):z.projectionMatrix.copy(C.projectionMatrix),T===null&&it.isPerspectiveCamera&&(T={camera:it,fov:it.fov,zoom:it.zoom}),It(it,z,Gt)};function It(it,at,wt){wt===null?it.matrix.copy(at.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(at.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(at.projectionMatrix),it.projectionMatrixInverse.copy(at.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Wo*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(it){return p[it]};let ie=null;function ee(it,at){if(h=at.getViewerPose(c||a),g=at,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Gt=!1;wt.length!==z.cameras.length&&(z.cameras.length=0,Gt=!0);for(let $=0;$<wt.length;$++){let Z=wt[$],dt=null;if(f!==null)dt=f.getViewport(Z);else{let xt=d.getViewSubImage(u,Z);dt=xt.viewport,$===0&&(t.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(_))}let ut=k[$];ut===void 0&&(ut=new li,ut.layers.enable($),ut.viewport=new Xe,k[$]=ut),ut.matrix.fromArray(Z.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Z.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(dt.x,dt.y,dt.width,dt.height),$===0&&(z.matrix.copy(ut.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Gt===!0&&z.cameras.push(ut)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let $=d.getDepthInformation(wt[0]);$&&$.isValid&&$.texture&&m.init($,s.renderState)}if(At&&At.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let $=0;$<wt.length;$++){let Z=wt[$].camera;if(Z){let dt=p[Z];dt||(dt=new ya,p[Z]=dt);let ut=d.getCameraImage(Z);dt.sourceTexture=ut}}}}for(let wt=0;wt<E.length;wt++){let Gt=S[wt],At=E[wt];Gt!==null&&At!==void 0&&At.update(Gt,at,c||a)}ie&&ie(it,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}let fe=new Fd;fe.setAnimationLoop(ee),this.setAnimationLoop=function(it){ie=it},this.dispose=function(){}}},Ry=new Ae,Gd=new ue;Gd.set(-1,0,0,0,1,0,0,0,1);Ly=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;cc=class{constructor(t={}){let{canvas:e=id(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ni}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Rl,Tl,wl]),p=new Set([Ni,cn,Ar,Cr,Sl,El]),b=new Uint32Array(4),w=new Int32Array(4),_=new P,E=null,S=null,A=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,k=null,z=null,I=null,G=null;this._outputColorSpace=_i;let J=0,K=0,ft=null,Q=-1,ct=null,ot=new Xe,Ht=new Xe,It=null,ie=new gt(0),ee=0,fe=e.width,it=e.height,at=1,wt=null,Gt=null,At=new Xe(0,0,fe,it),j=new Xe(0,0,fe,it),bt=!1,$=new vr,Z=!1,dt=!1,ut=new Ae,xt=new P,Ct=new Xe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function jt(){return ft===null?at:1}let D=i;function de(M,B){return e.getContext(M,B)}let se,R,x,H,W,U,nt,pt,V,tt,yt,zt,_t,St,Ot,Kt,le,O,Tt,lt,Et,Pt,L;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),D===null){let B="webgl2";if(D=de(B,M),D===null)throw de(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}F()}catch(M){throw e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),oe("WebGLRenderer: "+M.message),M}function F(){se=new Ox(D),se.init(),Et=new Ey(D,se),R=new Ax(D,se,t,Et),x=new My(D,se),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),z=D.createFramebuffer(),I=D.createFramebuffer(),G=D.createFramebuffer(),H=new zx(D),W=new ly,U=new Sy(D,se,x,W,R,Et,H),nt=new Bx(C),pt=new Vp(D),Pt=new Tx(D,pt),V=new kx(D,pt,H,Pt),tt=new Vx(D,V,pt,Pt,H),O=new Gx(D,R,U),Ot=new Cx(W),yt=new oy(C,nt,se,R,Pt,Ot),zt=new Ay(C,W),_t=new hy,St=new gy(se),le=new wx(C,nt,x,tt,g,l),Kt=new by(C,tt,R),L=new Cy(D,H,R,x),Tt=new Rx(D,se,H),lt=new Hx(D,se,H),H.programs=yt.programs,C.capabilities=R,C.extensions=se,C.properties=W,C.renderLists=_t,C.shadowMap=Kt,C.state=x,C.info=H}y!==Ni&&(T=new Xx(y,e.width,e.height,o,s,r));let st=new fu(C,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(M){M!==void 0&&(at=M,this.setSize(fe,it,!1))},this.getSize=function(M){return M.set(fe,it)},this.setSize=function(M,B,et=!0){if(st.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=M,it=B,e.width=Math.floor(M*at),e.height=Math.floor(B*at),et===!0&&(e.style.width=M+"px",e.style.height=B+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(fe*at,it*at).floor()},this.setDrawingBufferSize=function(M,B,et){fe=M,it=B,at=et,e.width=Math.floor(M*et),e.height=Math.floor(B*et),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(y===Ni){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ot)},this.getViewport=function(M){return M.copy(At)},this.setViewport=function(M,B,et,X){M.isVector4?At.set(M.x,M.y,M.z,M.w):At.set(M,B,et,X),x.viewport(ot.copy(At).multiplyScalar(at).round())},this.getScissor=function(M){return M.copy(j)},this.setScissor=function(M,B,et,X){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,B,et,X),x.scissor(Ht.copy(j).multiplyScalar(at).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(M){x.setScissorTest(bt=M)},this.setOpaqueSort=function(M){wt=M},this.setTransparentSort=function(M){Gt=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,et=!0){let X=0;if(M){let q=!1;if(ft!==null){let Nt=ft.texture.format;q=m.has(Nt)}if(q){let Nt=ft.texture.type,Xt=p.has(Nt),Ut=le.getClearColor(),Jt=le.getClearAlpha(),Qt=Ut.r,pe=Ut.g,ve=Ut.b;Xt?(b[0]=Qt,b[1]=pe,b[2]=ve,b[3]=Jt,D.clearBufferuiv(D.COLOR,0,b)):(w[0]=Qt,w[1]=pe,w[2]=ve,w[3]=Jt,D.clearBufferiv(D.COLOR,0,w))}else X|=D.COLOR_BUFFER_BIT}B&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),le.dispose(),_t.dispose(),St.dispose(),W.dispose(),nt.dispose(),tt.dispose(),Pt.dispose(),L.dispose(),yt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Zn),st.removeEventListener("sessionend",xi),yi.stop()};function ht(M){M.preventDefault(),ca("WebGLRenderer: Context Lost."),N=!0}function Rt(){ca("WebGLRenderer: Context Restored."),N=!1;let M=H.autoReset,B=Kt.enabled,et=Kt.autoUpdate,X=Kt.needsUpdate,q=Kt.type;F(),H.autoReset=M,Kt.enabled=B,Kt.autoUpdate=et,Kt.needsUpdate=X,Kt.type=q}function Vt(M){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ae(M){let B=M.target;B.removeEventListener("dispose",ae),De(B)}function De(M){Oe(M),W.remove(M)}function Oe(M){let B=W.get(M).programs;B!==void 0&&(B.forEach(function(et){yt.releaseProgram(et)}),M.isShaderMaterial&&yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,et,X,q,Nt){B===null&&(B=Lt);let Xt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ut=Xr(M,B,et,X,q);x.setMaterial(X,Xt);let Jt=et.index,Qt=1;if(X.wireframe===!0){if(Jt=V.getWireframeAttribute(et),Jt===void 0)return;Qt=2}let pe=et.drawRange,ve=et.attributes.position,$t=pe.start*Qt,Ue=(pe.start+pe.count)*Qt;Nt!==null&&($t=Math.max($t,Nt.start*Qt),Ue=Math.min(Ue,(Nt.start+Nt.count)*Qt)),Jt!==null?($t=Math.max($t,0),Ue=Math.min(Ue,Jt.count)):ve!=null&&($t=Math.max($t,0),Ue=Math.min(Ue,ve.count));let ri=Ue-$t;if(ri<0||ri===1/0)return;Pt.setup(q,X,Ut,et,Jt);let je,Ve=Tt;if(Jt!==null&&(je=pt.get(Jt),Ve=lt,Ve.setIndex(je)),q.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*jt()),Ve.setMode(D.LINES)):Ve.setMode(D.TRIANGLES);else if(q.isLine){let wi=X.linewidth;wi===void 0&&(wi=1),x.setLineWidth(wi*jt()),q.isLineSegments?Ve.setMode(D.LINES):q.isLineLoop?Ve.setMode(D.LINE_LOOP):Ve.setMode(D.LINE_STRIP)}else q.isPoints?Ve.setMode(D.POINTS):q.isSprite&&Ve.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Ve.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let wi=q._multiDrawStarts,Wt=q._multiDrawCounts,Pi=q._multiDrawCount,Le=Jt?pt.get(Jt).bytesPerElement:1,$i=W.get(X).currentProgram.getUniforms();for(let gn=0;gn<Pi;gn++)$i.setValue(D,"_gl_DrawID",gn),Ve.render(wi[gn]/Le,Wt[gn])}else if(q.isInstancedMesh)Ve.renderInstances($t,ri,q.count);else if(et.isInstancedBufferGeometry){let wi=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Wt=Math.min(et.instanceCount,wi);Ve.renderInstances($t,ri,Wt)}else Ve.render($t,ri)};function Ge(M,B,et,X){k!==null&&M.isNodeMaterial&&k.setObject(X,M),Z===!0&&Ot.setState(M,et,!1),M.transparent===!0&&M.side===ke&&M.forceSinglePass===!1?(M.side=Ye,M.needsUpdate=!0,vi(M,B,X),M.side=Ki,M.needsUpdate=!0,vi(M,B,X),M.side=ke):vi(M,B,X)}this.compile=function(M,B,et=null){et===null&&(et=M),k!==null&&k.renderStart(M,B,et),S=St.get(et),S.init(B),v.push(S),et.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),M!==et&&M.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),dt=this.localClippingEnabled,Z=Ot.init(this.clippingPlanes,dt),Z===!0&&Ot.setGlobalState(this.clippingPlanes,B),k!==null&&Kt.render(S.state.shadowsArray,et,B);let X=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Nt=q.material;if(Nt)if(Array.isArray(Nt))for(let Xt=0;Xt<Nt.length;Xt++){let Ut=Nt[Xt];Ge(Ut,et,B,q),X.add(Ut)}else Ge(Nt,et,B,q),X.add(Nt)}),S=v.pop(),k!==null&&k.renderEnd(),X},this.compileAsync=function(M,B,et=null){let X=this.compile(M,B,et);return new Promise(q=>{function Nt(){if(X.forEach(function(Xt){let Jt=W.get(Xt).currentProgram;(Jt===void 0||Jt.isReady())&&X.delete(Xt)}),X.size===0){q(M);return}setTimeout(Nt,10)}se.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ze=null;function mn(M){Ze&&Ze(M)}function Zn(){yi.stop()}function xi(){yi.start()}let yi=new Fd;yi.setAnimationLoop(mn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(M){Ze=M,st.setAnimationLoop(M),M===null?yi.stop():yi.start()},st.addEventListener("sessionstart",Zn),st.addEventListener("sessionend",xi),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(M,B);let et=st.enabled===!0&&st.isPresenting===!0,X=T!==null&&(ft===null||et)&&T.begin(C,ft);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(B),B=st.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,B,ft),S=St.get(M,v.length),S.init(B),S.state.textureUnits=U.getTextureUnits(),v.push(S),ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(ut,on,B.reversedDepth),dt=this.localClippingEnabled,Z=Ot.init(this.clippingPlanes,dt),E=_t.get(M,A.length),E.init(),A.push(E),st.enabled===!0&&st.isPresenting===!0){let Xt=C.xr.getDepthSensingMesh();Xt!==null&&Oi(Xt,B,-1/0,C.sortObjects)}Oi(M,B,0,C.sortObjects),E.finish(),k!==null&&k.updateLights(S.state.lightsArray),C.sortObjects===!0&&E.sort(wt,Gt),Bt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Bt&&le.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Z===!0&&Ot.beginShadows();let q=S.state.shadowsArray;if(Kt.render(q,M,B),Z===!0&&Ot.endShadows(),(X&&T.hasRenderPass())===!1){let Xt=E.opaque,Ut=E.transmissive;if(S.setupLights(),B.isArrayCamera){let Jt=B.cameras;if(Ut.length>0)for(let Qt=0,pe=Jt.length;Qt<pe;Qt++){let ve=Jt[Qt];Gs(Xt,Ut,M,ve)}Bt&&le.render(M);for(let Qt=0,pe=Jt.length;Qt<pe;Qt++){let ve=Jt[Qt];vs(E,M,ve,ve.viewport)}}else Ut.length>0&&Gs(Xt,Ut,M,B),Bt&&le.render(M),vs(E,M,B)}ft!==null&&K===0&&(U.updateMultisampleRenderTarget(ft),U.updateRenderTargetMipmap(ft)),X&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,B),Pt.resetDefaultState(),Q=-1,ct=null,v.pop(),v.length>0?(S=v[v.length-1],U.setTextureUnits(S.state.textureUnits),Z===!0&&Ot.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,k!==null&&k.renderEnd()};function Oi(M,B,et,X){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)et=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($)){X&&Ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);let Xt=tt.update(M),Ut=M.material;Ut.visible&&E.push(M,Xt,Ut,et,Ct.z,null,B)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($))){let Xt=tt.update(M),Ut=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ct.copy(M.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Ct.copy(Xt.boundingSphere.center)),Ct.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(Ut)){let Jt=Xt.groups;for(let Qt=0,pe=Jt.length;Qt<pe;Qt++){let ve=Jt[Qt],$t=Ut[ve.materialIndex];$t&&$t.visible&&E.push(M,Xt,$t,et,Ct.z,ve,B)}}else Ut.visible&&E.push(M,Xt,Ut,et,Ct.z,null,B)}}let Nt=M.children;for(let Xt=0,Ut=Nt.length;Xt<Ut;Xt++)Oi(Nt[Xt],B,et,X)}function vs(M,B,et,X){let{opaque:q,transmissive:Nt,transparent:Xt}=M;S.setupLightsView(et),Z===!0&&Ot.setGlobalState(C.clippingPlanes,et),X&&x.viewport(ot.copy(X)),q.length>0&&Te(q,B,et),Nt.length>0&&Te(Nt,B,et),Xt.length>0&&Te(Xt,B,et),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Gs(M,B,et,X){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let $t=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new Ui(1,1,{generateMipmaps:!0,type:$t?hn:Ni,minFilter:ds,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let Nt=S.state.transmissionRenderTarget[X.id],Xt=X.viewport||ot;Nt.setSize(Xt.z*C.transmissionResolutionScale,Xt.w*C.transmissionResolutionScale);let Ut=C.getRenderTarget(),Jt=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(Nt),C.getClearColor(ie),ee=C.getClearAlpha(),ee<1&&C.setClearColor(16777215,.5),C.clear(),Bt&&le.render(et);let pe=C.toneMapping;C.toneMapping=ln;let ve=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),Z===!0&&Ot.setGlobalState(C.clippingPlanes,X),Te(M,et,X),U.updateMultisampleRenderTarget(Nt),U.updateRenderTargetMipmap(Nt),se.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ue=0,ri=B.length;Ue<ri;Ue++){let je=B[Ue],{object:Ve,geometry:wi,material:Wt,group:Pi}=je;if(Wt.side===ke&&Ve.layers.test(X.layers)){let Le=Wt.side;Wt.side=Ye,Wt.needsUpdate=!0,Re(Ve,et,X,wi,Wt,Pi),Wt.side=Le,Wt.needsUpdate=!0,$t=!0}}$t===!0&&(U.updateMultisampleRenderTarget(Nt),U.updateRenderTargetMipmap(Nt))}C.setRenderTarget(Ut,Jt,Qt),C.setClearColor(ie,ee),ve!==void 0&&(X.viewport=ve),C.toneMapping=pe}function Te(M,B,et){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Nt=M.length;q<Nt;q++){let Xt=M[q],{object:Ut,geometry:Jt,group:Qt}=Xt,pe=Xt.material;pe.allowOverride===!0&&X!==null&&(pe=X),Ut.layers.test(et.layers)&&Re(Ut,B,et,Jt,pe,Qt)}}function Re(M,B,et,X,q,Nt){k!==null&&q.isNodeMaterial&&k.setObject(M,q),M.onBeforeRender(C,B,et,X,q,Nt),M.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(C,B,et,X,M,Nt),q.transparent===!0&&q.side===ke&&q.forceSinglePass===!1?(q.side=Ye,q.needsUpdate=!0,C.renderBufferDirect(et,B,X,q,M,Nt),q.side=Ki,q.needsUpdate=!0,C.renderBufferDirect(et,B,X,q,M,Nt),q.side=ke):C.renderBufferDirect(et,B,X,q,M,Nt),M.onAfterRender(C,B,et,X,q,Nt)}function vi(M,B,et){B.isScene!==!0&&(B=Lt);let X=W.get(M),q=S.state.lights,Nt=S.state.shadowsArray,Xt=q.state.version,Ut=yt.getParameters(M,q.state,Nt,B,et,S.state.lightProbeGridArray),Jt=yt.getProgramCacheKey(Ut),Qt=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let pe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=nt.get(M.envMap||X.environment,pe),X.envMapRotation=X.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Qt===void 0&&(M.addEventListener("dispose",ae),Qt=new Map,X.programs=Qt);let ve=Qt.get(Jt);if(ve!==void 0){if(X.currentProgram===ve&&X.lightsStateVersion===Xt)return In(M,Ut),ve}else Ut.uniforms=yt.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,et,Ut),M.onBeforeCompile(Ut,C),ve=yt.acquireProgram(Ut,Jt),Qt.set(Jt,ve),X.uniforms=Ut.uniforms;let $t=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&($t.clippingPlanes=Ot.uniform),In(M,Ut),X.needsLights=Af(M),X.lightsStateVersion=Xt,X.needsLights&&($t.ambientLightColor.value=q.state.ambient,$t.lightProbe.value=q.state.probe,$t.sunLights.value=q.state.sun,$t.sunLightShadows.value=q.state.sunShadow,$t.directionalLights.value=q.state.directional,$t.directionalLightShadows.value=q.state.directionalShadow,$t.spotLights.value=q.state.spot,$t.spotLightShadows.value=q.state.spotShadow,$t.rectAreaLights.value=q.state.rectArea,$t.ltc_1.value=q.state.rectAreaLTC1,$t.ltc_2.value=q.state.rectAreaLTC2,$t.pointLights.value=q.state.point,$t.pointLightShadows.value=q.state.pointShadow,$t.hemisphereLights.value=q.state.hemi,$t.sunShadowMatrix.value=q.state.sunShadowMatrix,$t.sunShadowCascade.value=q.state.sunShadowCascade,$t.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$t.spotLightMatrix.value=q.state.spotLightMatrix,$t.spotLightMap.value=q.state.spotLightMap,$t.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=ve,X.uniformsList=null,ve}function Ei(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Ur.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function In(M,B){let et=W.get(M);et.outputColorSpace=B.outputColorSpace,et.batching=B.batching,et.batchingColor=B.batchingColor,et.instancing=B.instancing,et.instancingColor=B.instancingColor,et.instancingMorph=B.instancingMorph,et.skinning=B.skinning,et.morphTargets=B.morphTargets,et.morphNormals=B.morphNormals,et.morphColors=B.morphColors,et.morphTargetsCount=B.morphTargetsCount,et.numClippingPlanes=B.numClippingPlanes,et.numIntersection=B.numClipIntersection,et.vertexAlphas=B.vertexAlphas,et.vertexTangents=B.vertexTangents,et.toneMapping=B.toneMapping}function _s(M,B){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let et=0,X=M.length;et<X;et++){let q=M[et];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function Xr(M,B,et,X,q){B.isScene!==!0&&(B=Lt),U.resetTextureUnits();let Nt=B.fog,Xt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Ut=ft===null?C.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:be.workingColorSpace,Jt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Qt=nt.get(X.envMap||Xt,Jt),pe=X.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ve=!!et.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),$t=!!et.morphAttributes.position,Ue=!!et.morphAttributes.normal,ri=!!et.morphAttributes.color,je=ln;X.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(je=C.toneMapping);let Ve=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,wi=Ve!==void 0?Ve.length:0,Wt=W.get(X),Pi=S.state.lights;if(Z===!0&&(dt===!0||M!==ct)){let Je=M===ct&&X.id===Q;Ot.setState(X,M,Je)}let Le=!1;X.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Pi.state.version||Wt.outputColorSpace!==Ut||q.isBatchedMesh&&Wt.batching===!1||!q.isBatchedMesh&&Wt.batching===!0||q.isBatchedMesh&&Wt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Wt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Wt.instancing===!1||!q.isInstancedMesh&&Wt.instancing===!0||q.isSkinnedMesh&&Wt.skinning===!1||!q.isSkinnedMesh&&Wt.skinning===!0||q.isInstancedMesh&&Wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Wt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Wt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Wt.instancingMorph===!1&&q.morphTexture!==null||Wt.envMap!==Qt||X.fog===!0&&Wt.fog!==Nt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ot.numPlanes||Wt.numIntersection!==Ot.numIntersection)||Wt.vertexAlphas!==pe||Wt.vertexTangents!==ve||Wt.morphTargets!==$t||Wt.morphNormals!==Ue||Wt.morphColors!==ri||Wt.toneMapping!==je||Wt.morphTargetsCount!==wi||!!Wt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Le=!0):(Le=!0,Wt.__version=X.version);let $i=Wt.currentProgram;Le===!0&&($i=vi(X,B,q),k&&X.isNodeMaterial&&k.onUpdateProgram(X,$i,Wt));let gn=!1,Jn=!1,Vs=!1,He=$i.getUniforms(),ii=Wt.uniforms;if(x.useProgram($i.program)&&(gn=!0,Jn=!0,Vs=!0),X.id!==Q&&(Q=X.id,Jn=!0),Wt.needsLights){let Je=_s(S.state.lightProbeGridArray,q);Wt.lightProbeGrid!==Je&&(Wt.lightProbeGrid=Je,Jn=!0)}if(gn||ct!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),He.setValue(D,"projectionMatrix",M.projectionMatrix),He.setValue(D,"viewMatrix",M.matrixWorldInverse);let jn=He.map.cameraPosition;jn!==void 0&&jn.setValue(D,xt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&He.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&He.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),ct!==M&&(ct=M,Jn=!0,Vs=!0)}if(Wt.needsLights&&(Pi.state.sunShadowMap.length>0&&He.setValue(D,"sunShadowMap",Pi.state.sunShadowMap,U),Pi.state.directionalShadowMap.length>0&&He.setValue(D,"directionalShadowMap",Pi.state.directionalShadowMap,U),Pi.state.spotShadowMap.length>0&&He.setValue(D,"spotShadowMap",Pi.state.spotShadowMap,U),Pi.state.pointShadowMap.length>0&&He.setValue(D,"pointShadowMap",Pi.state.pointShadowMap,U)),q.isSkinnedMesh){He.setOptional(D,q,"bindMatrix"),He.setOptional(D,q,"bindMatrixInverse");let Je=q.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),He.setValue(D,"boneTexture",Je.boneTexture,U))}q.isBatchedMesh&&(He.setOptional(D,q,"batchingTexture"),He.setValue(D,"batchingTexture",q._matricesTexture,U),He.setOptional(D,q,"batchingIdTexture"),He.setValue(D,"batchingIdTexture",q._indirectTexture,U),He.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&He.setValue(D,"batchingColorTexture",q._colorsTexture,U));let $n=et.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&O.update(q,et,$i),(Jn||Wt.receiveShadow!==q.receiveShadow)&&(Wt.receiveShadow=q.receiveShadow,He.setValue(D,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(ii.envMapIntensity.value=B.environmentIntensity),ii.dfgLUT!==void 0&&(ii.dfgLUT.value=Py()),Jn){if(He.setValue(D,"toneMappingExposure",C.toneMappingExposure),Wt.needsLights&&Rf(ii,Vs),Nt&&X.fog===!0&&zt.refreshFogUniforms(ii,Nt),zt.refreshMaterialUniforms(ii,X,at,it,S.state.transmissionRenderTarget[M.id]),Wt.needsLights&&Wt.lightProbeGrid){let Je=Wt.lightProbeGrid;ii.probesSH.value=Je.texture,ii.probesMin.value.copy(Je.boundingBox.min),ii.probesMax.value.copy(Je.boundingBox.max),ii.probesResolution.value.copy(Je.resolution)}Ur.upload(D,Ei(Wt),ii,U)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ur.upload(D,Ei(Wt),ii,U),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&He.setValue(D,"center",q.center),He.setValue(D,"modelViewMatrix",q.modelViewMatrix),He.setValue(D,"normalMatrix",q.normalMatrix),He.setValue(D,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Je=X.uniformsGroups;for(let jn=0,Ws=Je.length;jn<Ws;jn++){let zu=Je[jn];L.update(zu,$i),L.bind(zu,$i)}}return $i}function Rf(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Af(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(M,B,et){let X=W.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=B,W.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:et,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let et=W.get(M);et.__webglFramebuffer=B,et.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,et=0){ft=M,J=B,K=et;let X=null,q=!1,Nt=!1;if(M){let Ut=W.get(M);if(Ut.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,Ut.__webglFramebuffer),ot.copy(M.viewport),Ht.copy(M.scissor),It=M.scissorTest,x.viewport(ot),x.scissor(Ht),x.setScissorTest(It),Q=-1;return}else if(Ut.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(Ut.__hasExternalTextures)U.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let pe=M.depthTexture;if(Ut.__boundDepthTexture!==pe){if(pe!==null&&W.has(pe)&&(M.width!==pe.image.width||M.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}let Jt=M.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Nt=!0);let Qt=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Qt[B])?X=Qt[B][et]:X=Qt[B],q=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?X=W.get(M).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[et]:X=Qt,ot.copy(M.viewport),Ht.copy(M.scissor),It=M.scissorTest}else ot.copy(At).multiplyScalar(at).floor(),Ht.copy(j).multiplyScalar(at).floor(),It=bt;if(et!==0&&(X=z),x.bindFramebuffer(D.FRAMEBUFFER,X)&&x.drawBuffers(M,X),x.viewport(ot),x.scissor(Ht),x.setScissorTest(It),q){let Ut=W.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,et)}else if(Nt){let Ut=B;for(let Jt=0;Jt<M.textures.length;Jt++){let Qt=W.get(M.textures[Jt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Jt,Qt.__webglTexture,et,Ut)}}else if(M!==null&&et!==0){let Ut=W.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,et)}Q=-1};function Hu(M){let B=W.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=R.textureFormatReadable(M.format),B.__typeReadable=R.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,et,X,q,Nt,Xt,Ut=0){if(!(M&&M.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Xt!==void 0&&(Jt=Jt[Xt]),Jt){x.bindFramebuffer(D.FRAMEBUFFER,Jt);try{let Qt=M.textures[Ut],pe=Qt.format,ve=Qt.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ut);let $t=Hu(Qt);if($t.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($t.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-X&&et>=0&&et<=M.height-q&&D.readPixels(B,et,X,q,Et.convert(pe),Et.convert(ve),Nt)}finally{let Qt=ft!==null?W.get(ft).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(M,B,et,X,q,Nt,Xt,Ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Xt!==void 0&&(Jt=Jt[Xt]),Jt)if(B>=0&&B<=M.width-X&&et>=0&&et<=M.height-q){x.bindFramebuffer(D.FRAMEBUFFER,Jt);let Qt=M.textures[Ut],pe=Qt.format,ve=Qt.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ut);let $t=Hu(Qt);if($t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.bufferData(D.PIXEL_PACK_BUFFER,Nt.byteLength,D.STREAM_READ),D.readPixels(B,et,X,q,Et.convert(pe),Et.convert(ve),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let ri=ft!==null?W.get(ft).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,ri);let je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sd(D,je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Nt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ue),D.deleteSync(je),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,et=0){let X=Math.pow(2,-et),q=Math.floor(M.image.width*X),Nt=Math.floor(M.image.height*X),Xt=B!==null?B.x:0,Ut=B!==null?B.y:0;U.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,et,0,0,Xt,Ut,q,Nt),x.unbindTexture()},this.copyTextureToTexture=function(M,B,et=null,X=null,q=0,Nt=0){let Xt,Ut,Jt,Qt,pe,ve,$t,Ue,ri,je=M.isCompressedTexture?M.mipmaps[Nt]:M.image;if(et!==null)Xt=et.max.x-et.min.x,Ut=et.max.y-et.min.y,Jt=et.isBox3?et.max.z-et.min.z:1,Qt=et.min.x,pe=et.min.y,ve=et.isBox3?et.min.z:0;else{let ii=Math.pow(2,-q);Xt=Math.floor(je.width*ii),Ut=Math.floor(je.height*ii),M.isDataArrayTexture?Jt=je.depth:M.isData3DTexture?Jt=Math.floor(je.depth*ii):Jt=1,Qt=0,pe=0,ve=0}X!==null?($t=X.x,Ue=X.y,ri=X.z):($t=0,Ue=0,ri=0);let Ve=Et.convert(B.format),wi=Et.convert(B.type),Wt;B.isData3DTexture?(U.setTexture3D(B,0),Wt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Wt=D.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Wt=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Pi=x.getParameter(D.UNPACK_ROW_LENGTH),Le=x.getParameter(D.UNPACK_IMAGE_HEIGHT),$i=x.getParameter(D.UNPACK_SKIP_PIXELS),gn=x.getParameter(D.UNPACK_SKIP_ROWS),Jn=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,je.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),x.pixelStorei(D.UNPACK_SKIP_ROWS,pe),x.pixelStorei(D.UNPACK_SKIP_IMAGES,ve);let Vs=M.isDataArrayTexture||M.isData3DTexture,He=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let ii=W.get(M),$n=W.get(B),Je=W.get(ii.__renderTarget),jn=W.get($n.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,Je.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Ws=0;Ws<Jt;Ws++)Vs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(M).__webglTexture,q,ve+Ws),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(B).__webglTexture,Nt,ri+Ws)),D.blitFramebuffer(Qt,pe,Xt,Ut,$t,Ue,Xt,Ut,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||W.has(M)){let ii=W.get(M),$n=W.get(B);x.bindFramebuffer(D.READ_FRAMEBUFFER,I),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let Je=0;Je<Jt;Je++)Vs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ii.__webglTexture,q,ve+Je):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ii.__webglTexture,q),He?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$n.__webglTexture,Nt,ri+Je):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$n.__webglTexture,Nt),q!==0?D.blitFramebuffer(Qt,pe,Xt,Ut,$t,Ue,Xt,Ut,D.COLOR_BUFFER_BIT,D.NEAREST):He?D.copyTexSubImage3D(Wt,Nt,$t,Ue,ri+Je,Qt,pe,Xt,Ut):D.copyTexSubImage2D(Wt,Nt,$t,Ue,Qt,pe,Xt,Ut);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else He?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Wt,Nt,$t,Ue,ri,Xt,Ut,Jt,Ve,wi,je.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Wt,Nt,$t,Ue,ri,Xt,Ut,Jt,Ve,je.data):D.texSubImage3D(Wt,Nt,$t,Ue,ri,Xt,Ut,Jt,Ve,wi,je):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Nt,$t,Ue,Xt,Ut,Ve,wi,je.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Nt,$t,Ue,je.width,je.height,Ve,je.data):D.texSubImage2D(D.TEXTURE_2D,Nt,$t,Ue,Xt,Ut,Ve,wi,je);x.pixelStorei(D.UNPACK_ROW_LENGTH,Pi),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le),x.pixelStorei(D.UNPACK_SKIP_PIXELS,$i),x.pixelStorei(D.UNPACK_SKIP_ROWS,gn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Jn),Nt===0&&B.generateMipmaps&&D.generateMipmap(Wt),x.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){J=0,K=0,ft=null,x.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}}});function Br(n){return new Aa({color:0,emissive:16777215,emissiveIntensity:n})}var dc,Vd=We(()=>{Ci();dc=class extends zn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ei;t.deleteAttribute("uv");let e=new ni({side:Ye}),i=new ni,s=new Ia(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ft(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ma(t,i,6),o=new ce;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ft(t,Br(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ft(t,Br(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ft(t,Br(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ft(t,Br(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ft(t,Br(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ft(t,Br(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}}});function Iy(){try{let n=localStorage.getItem("sumamama.quality");if(n==="high"||n==="low")return n}catch{}return fc?"low":"high"}function Wd(n){let t=new cc({canvas:n,antialias:!0,powerPreference:"high-performance"});t.shadowMap.enabled=!1,t.toneMapping=Ua,t.toneMappingExposure=1,t.outputColorSpace=_i;let e=new zn,i=new Nr(t);e.environment=i.fromScene(new dc,.04).texture,e.environmentIntensity=.65,i.dispose();let s=new li(38,window.innerWidth/window.innerHeight,.1,400);s.position.set(0,4,24),e.add(new Ds(13222655,2758712,1.05));let r=new Wn(16773600,1.75);r.position.set(-8,16,12),e.add(r);let a=new Wn(11832575,1.6);a.position.set(6,6,-12),e.add(a);let o={renderer:t,scene:e,camera:s,sun:r,quality:Iy(),resize(){let l=window.innerWidth,c=window.innerHeight,h=o.quality==="high"?2:1.25;t.setPixelRatio(Math.min(window.devicePixelRatio||1,h)),t.setSize(l,c,!1),s.aspect=l/c,s.updateProjectionMatrix()},setQuality(l){o.quality=l;try{localStorage.setItem("sumamama.quality",l)}catch{}o.resize()},render(){t.render(e,s)}};return o.resize(),window.addEventListener("resize",o.resize),window.addEventListener("orientationchange",()=>setTimeout(o.resize,200)),o}var fc,Xd=We(()=>{Ci();Vd();fc=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches});var Dy,pc,qd=We(()=>{Dy=[{b:"attack",label:"\u653B\u6483",cls:"a"},{b:"special",label:"\u5FC5\u6BBA",cls:"b"},{b:"jump",label:"\u30B8\u30E3\u30F3\u30D7",cls:"y"},{b:"smash",label:"\u30B9\u30DE\u30C3\u30B7\u30E5",cls:"s"},{b:"shield",label:"\u30AC\u30FC\u30C9",cls:"r"},{b:"grab",label:"\u3064\u304B\u307F",cls:"z"}],pc=class{constructor(t,e){this.state={x:0,y:0,jump:!1,attack:!1,special:!1,shield:!1,smash:!1,grab:!1},this.enabled=!1;let i=document.createElement("div");i.id="touch",i.className="hidden",i.innerHTML=`
      <div id="stickZone"></div>
      <div id="stickBase"><div id="stickKnob"></div></div>
      <div id="tbtns">${Dy.map(o=>`<div class="tb ${o.cls}" data-b="${o.b}"><span>${o.label}</span></div>`).join("")}</div>
      <div id="tpause">II</div>`,t.appendChild(i),this.el=i,this.base=i.querySelector("#stickBase"),this.knob=i.querySelector("#stickKnob"),this.stickId=null,this.origin={x:0,y:0},this.radius=56;let s=i.querySelector("#stickZone");this.zone=s,s.addEventListener("pointerdown",o=>{this.stickId!==null&&this.releaseStick(),this.stickId=o.pointerId;try{s.setPointerCapture(o.pointerId)}catch{}this.origin={x:o.clientX,y:o.clientY},this.base.style.left=o.clientX+"px",this.base.style.top=o.clientY+"px",this.base.classList.add("on"),this.moveStick(o.clientX,o.clientY),o.preventDefault()}),window.addEventListener("pointermove",o=>{o.pointerId===this.stickId&&this.moveStick(o.clientX,o.clientY)},!0);let r=o=>{o.pointerId===this.stickId&&this.releaseStick(),this.releaseButtonPointer(o.pointerId)};for(let o of["pointerup","pointercancel"])window.addEventListener(o,r,!0);s.addEventListener("lostpointercapture",o=>{o.pointerId===this.stickId&&this.releaseStick()});let a=o=>this.reconcile(o.touches);window.addEventListener("touchend",a,!0),window.addEventListener("touchcancel",a,!0),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("blur",()=>this.reset()),window.addEventListener("pagehide",()=>this.reset()),this.btnPointers=new Map,this.btnEls={};for(let o of i.querySelectorAll(".tb")){let l=o.dataset.b;this.btnEls[l]=o,o.addEventListener("pointerdown",c=>{try{o.setPointerCapture(c.pointerId)}catch{}this.btnPointers.set(c.pointerId,l),this.state[l]=!0,o.classList.add("on"),navigator.vibrate&&navigator.vibrate(8),c.preventDefault()}),o.addEventListener("lostpointercapture",c=>this.releaseButtonPointer(c.pointerId))}i.querySelector("#tpause").addEventListener("pointerdown",o=>{o.preventDefault(),e()}),i.addEventListener("contextmenu",o=>o.preventDefault())}releaseStick(){this.stickId=null,this.state.x=0,this.state.y=0,this.base.classList.remove("on"),this.knob.style.transform="translate(-50%,-50%)"}releaseButtonPointer(t){let e=this.btnPointers.get(t);e&&(this.btnPointers.delete(t),[...this.btnPointers.values()].includes(e)||(this.state[e]=!1,this.btnEls[e].classList.remove("on")))}reconcile(t){if(!t||t.length===0){this.reset();return}let e=i=>{let s=i.getBoundingClientRect();for(let r of t)if(r.clientX>=s.left-30&&r.clientX<=s.right+30&&r.clientY>=s.top-30&&r.clientY<=s.bottom+30)return!0;return!1};if(this.stickId!==null){let i=this.zone.getBoundingClientRect(),s=!1;for(let r of t)r.clientX<=i.right+80&&(s=!0);s||this.releaseStick()}for(let[i,s]of[...this.btnPointers])e(this.btnEls[s])||this.releaseButtonPointer(i)}moveStick(t,e){let i=t-this.origin.x,s=e-this.origin.y,r=Math.hypot(i,s),a=this.radius;if(r>a*1.6){let u=(r-a*1.6)/r;this.origin.x+=i*u,this.origin.y+=s*u,this.base.style.left=this.origin.x+"px",this.base.style.top=this.origin.y+"px",i=t-this.origin.x,s=e-this.origin.y}let o=Math.min(1,Math.hypot(i,s)/a),l=Math.atan2(s,i),c=Math.cos(l)*o,h=Math.sin(l)*o,d=o<.18?0:1;this.state.x=c*d,this.state.y=-h*d,this.knob.style.transform=`translate(calc(-50% + ${c*a}px), calc(-50% + ${h*a}px))`}show(t){this.enabled=t,this.el.classList.toggle("hidden",!t),t||this.reset()}reset(){for(let t of Object.keys(this.state))this.state[t]=t==="x"||t==="y"?0:!1;this.releaseStick(),this.btnPointers.clear();for(let t of this.el.querySelectorAll(".tb"))t.classList.remove("on")}read(t){if(!this.enabled)return t;let e=this.state;Math.abs(e.x)>Math.abs(t.x)&&(t.x=e.x),Math.abs(e.y)>Math.abs(t.y)&&(t.y=e.y);for(let i of["jump","attack","special","shield","smash","grab"])e[i]&&(t[i]=!0);return t}}});function Uy(){return Os||(Os=new Ts(new Uint8Array([70,150,235,255]),4,1,Lr),Os.minFilter=Os.magFilter=oi,Os.generateMipmaps=!1,Os.needsUpdate=!0),Os}function un(n,t={}){return new Is({color:n,gradientMap:Uy(),...t})}function Ya(n,t=1){let e=new gt(n).multiplyScalar(t);return new Me({color:e})}function Ny(n=656912,t=.018){let e=n+":"+t;if(pu.has(e))return pu.get(e);let i=new Qe({uniforms:{color:{value:new gt(n)},thickness:{value:t}},vertexShader:`
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
      }`,side:Ye});return i.userData.shared=!0,pu.set(e,i),i}function Fy(n,t,e){let i=new Ft(n.geometry,Ny(t,e));return i.name="outline",i.castShadow=!1,i.receiveShadow=!1,i.userData.isOutline=!0,n.add(i),n}function ms(n,t,{outline:e=656912,thick:i=.018,shadow:s=!0}={}){let r=new Ft(n,t);return r.castShadow=s,r.receiveShadow=!1,e!==null&&e!==!1&&Fy(r,e,i),r}function Fi(){if(mc)return mc;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),mc=new Gn(n),mc}function yc(){if(gc)return gc;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.translate(32,32);let e=t.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath();for(let i=0;i<8;i++){let s=i/8*Math.PI*2,r=i%2===0?31:7;t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t.fill(),gc=new Gn(n),gc}function Yd(){if(xc)return xc;let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d"),e=t.createRadialGradient(64,64,40,64,64,63);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),xc=new Gn(n),xc}var Os,pu,mc,gc,xc,Za=We(()=>{Ci();Os=null;pu=new Map;mc=null,gc=null,xc=null});function mu(n,t,e,i,s,r){let a=s-e,o=r-i,l=a*a+o*o,c=l>0?((n-e)*a+(t-i)*o)/l:0;c=Se(c,0,1);let h=e+a*c,d=i+o*c;return Math.hypot(n-h,t-d)}var ks,Yb,Se,di,qt,qi,Ee,te,Zd,dn=We(()=>{ks=Math.PI/180,Yb=Math.PI*2,Se=(n,t,e)=>n<t?t:n>e?e:n,di=(n,t,e)=>n<t?Math.min(n+e,t):Math.max(n-e,t),qt=(n,t)=>n+Math.random()*(t-n),qi=(n,t)=>Math.floor(qt(n,t+1)),Ee=n=>Math.random()<n,te=n=>n>0?1:n<0?-1:0,Zd=n=>1-(1-n)*(1-n)});var By,vc,_c,gu=We(()=>{Ci();Za();dn();By=500,vc=class{constructor(t){this.scene=t,this.group=new Zt,t.add(this.group),this.free=[],this.live=[];for(let e=0;e<By;e++){let i=new gi(new ci({map:Fi(),transparent:!0,depthWrite:!1,blending:Fe}));i.visible=!1,i.renderOrder=10,this.group.add(i),this.free.push(i)}this.meshFx=[]}spawn({x:t,y:e,z:i=.3,vx:s=0,vy:r=0,vz:a=0,life:o=20,size:l=.5,size1:c=null,color:h=16777215,tex:d="soft",additive:u=!0,gravity:f=0,drag:g=1,opacity:y=1,rot:m=0,spin:p=0}){let b=this.free.pop();if(!b)return null;let w=b.material;return w.map=d==="star"?yc():d==="ring"?Yd():Fi(),w.color.set(h),w.blending=u?Fe:hs,w.opacity=y,w.rotation=m,b.position.set(t,e,i),b.scale.set(l,l,1),b.visible=!0,b.userData={vx:s,vy:r,vz:a,life:o,max:o,size:l,size1:c===null?l:c,gravity:f,drag:g,opacity:y,spin:p},this.live.push(b),b}hitSpark(t,e,i,s=.5,r=1){let a=Math.min(1.5,s),o=new gt(i);this.spawn({x:t,y:e,z:.6,life:8,size:1.2+a*1.8,size1:.3,color:16777215,tex:"star",rot:qt(0,3)}),this.spawn({x:t,y:e,z:.5,life:14,size:.4,size1:2.2+a*2.2,color:o,tex:"ring"});let l=6+Math.floor(a*10);for(let c=0;c<l;c++){let h=qt(0,Math.PI*2),d=qt(.08,.2)*(.7+a);this.spawn({x:t,y:e,z:.5,vx:Math.cos(h)*d+r*.05*a,vy:Math.sin(h)*d,life:qt(10,20),size:qt(.15,.35)*(1+a*.5),size1:.02,color:c%2?16777215:o,tex:c%3?"soft":"star",drag:.9})}}shieldSpark(t,e,i){this.spawn({x:t,y:e,z:.6,life:10,size:1.3,size1:.2,color:16777215,tex:"star"});for(let s=0;s<6;s++){let r=qt(0,Math.PI*2);this.spawn({x:t,y:e,z:.5,vx:Math.cos(r)*.12,vy:Math.sin(r)*.12,life:12,size:.25,size1:.02,color:i,drag:.88})}}dust(t,e,i=4,s=0){for(let r=0;r<i;r++)this.spawn({x:t+qt(-.2,.2),y:e+.1,z:qt(-.3,.5),vx:s*qt(.01,.05)+qt(-.03,.03),vy:qt(.005,.03),life:qt(18,30),size:qt(.3,.5),size1:qt(.8,1.2),color:13156584,additive:!1,opacity:.55,drag:.94})}smoke(t,e,i=14209264){this.spawn({x:t+qt(-.1,.1),y:e+qt(-.1,.1),z:.2,vx:qt(-.01,.01),vy:qt(0,.01),life:26,size:.45,size1:.9,color:i,additive:!1,opacity:.45,drag:.95})}sparkle(t,e,i=16777215,s=1,r=.4){for(let a=0;a<s;a++)this.spawn({x:t+qt(-r,r),y:e+qt(-r,r),z:qt(0,.6),vy:qt(.005,.02),life:qt(14,26),size:qt(.15,.32),size1:.02,color:i,tex:"star",rot:qt(0,3)})}ring(t,e,i,s=2,r=16){this.spawn({x:t,y:e,z:.5,life:r,size:.3,size1:s,color:i,tex:"ring"})}koBlast(t,e,i){let s=new gt(i),r=new mt(-t,-e*.6+2).normalize(),a=new _e(2.4,18,24,1,!0);a.translate(0,-9,0);let o=new Me({color:s.clone().multiplyScalar(1.6),transparent:!0,opacity:.95,blending:Fe,depthWrite:!1,side:ke}),l=new Ft(a,o);l.position.set(t,e,0),l.rotation.z=Math.atan2(r.y,r.x)+Math.PI/2,this.group.add(l);let c=new Ft(new _e(.9,16,16,1,!0),new Me({color:16777215,transparent:!0,blending:Fe,depthWrite:!1}));c.geometry.translate(0,-8,0),c.position.copy(l.position),c.rotation.copy(l.rotation),this.group.add(c),this.meshFx.push({mesh:l,life:50,max:50,kind:"blast"},{mesh:c,life:40,max:40,kind:"blast"});for(let h=0;h<40;h++){let d=Math.atan2(r.y,r.x)+qt(-.6,.6),u=qt(.15,.6);this.spawn({x:t,y:e,z:qt(-1,1),vx:Math.cos(d)*u,vy:Math.sin(d)*u,life:qt(25,50),size:qt(.4,1),size1:.05,color:h%3?s:16777215,tex:h%2?"star":"soft",drag:.94})}this.spawn({x:t,y:e,z:1,life:30,size:2,size1:14,color:s,tex:"ring"}),this.spawn({x:t,y:e,z:1,life:18,size:10,size1:2,color:16777215})}update(){for(let t=this.live.length-1;t>=0;t--){let e=this.live[t],i=e.userData;if(i.life--,i.life<=0){e.visible=!1,this.live.splice(t,1),this.free.push(e);continue}i.vx*=i.drag,i.vy*=i.drag,i.vz*=i.drag,i.vy-=i.gravity,e.position.x+=i.vx,e.position.y+=i.vy,e.position.z+=i.vz;let s=1-i.life/i.max,r=i.size+(i.size1-i.size)*s;e.scale.set(r,r,1),e.material.opacity=i.opacity*(1-s*s),e.material.rotation+=i.spin}for(let t=this.meshFx.length-1;t>=0;t--){let e=this.meshFx[t];e.life--;let i=1-e.life/e.max;e.kind==="blast"&&(e.mesh.scale.set(1-i*.7,.6+i*.6,1-i*.7),e.mesh.material.opacity=1-i),e.life<=0&&(this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.meshFx.splice(t,1))}}clear(){for(let t of this.live)t.visible=!1,this.free.push(t);this.live.length=0;for(let t of this.meshFx)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.meshFx.length=0}},_c=class{constructor(t,e,i=14){this.max=i,this.samples=[];let s=new me;this.pos=new Float32Array(i*2*3),this.alpha=new Float32Array(i*2),this.posAttr=new Pe(this.pos,3),this.aAttr=new Pe(this.alpha,1),s.setAttribute("position",this.posAttr),s.setAttribute("alpha",this.aAttr);let r=[];for(let a=0;a<i-1;a++){let o=a*2,l=o+1,c=o+2,h=o+3;r.push(o,l,c,l,h,c)}s.setIndex(r),this.mat=new Qe({transparent:!0,depthWrite:!1,blending:Fe,side:ke,uniforms:{color:{value:new gt(e).multiplyScalar(1.4)}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color*vA, vA); }"}),this.mesh=new Ft(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=9,t.add(this.mesh),this.a=new P,this.b=new P}update(t,e){e&&t&&(t[0].getWorldPosition(this.a),t[1].getWorldPosition(this.b),this.samples.unshift({a:this.a.clone(),b:this.b.clone(),life:1}));for(let s of this.samples)s.life-=.14;for(;this.samples.length>this.max||this.samples.length&&this.samples[this.samples.length-1].life<=0;)this.samples.pop();let i=this.samples.length;for(let s=0;s<this.max;s++){let r=this.samples[Math.min(s,i-1)],a=s*6;if(!r){this.alpha[s*2]=this.alpha[s*2+1]=0;continue}this.pos[a]=r.a.x,this.pos[a+1]=r.a.y,this.pos[a+2]=r.a.z,this.pos[a+3]=r.b.x,this.pos[a+4]=r.b.y,this.pos[a+5]=r.b.z;let o=s<i?Math.max(0,r.life)*(1-s/this.max):0;this.alpha[s*2]=o*.25,this.alpha[s*2+1]=o*.9}this.posAttr.needsUpdate=!0,this.aAttr.needsUpdate=!0,this.mesh.visible=i>1}dispose(){this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh.geometry.dispose(),this.mat.dispose()}}});function $d(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Jd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);let g=Jd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Jd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Pe(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var jd=We(()=>{Ci()});function Or(n,{rough:t=.25,metal:e=.9,env:i=1,emissive:s=0,map:r=null}={}){return new ni({color:n,roughness:t,metalness:e,envMapIntensity:i,emissive:s,map:r})}function Bi(n,{rough:t=.35,metal:e=.1,env:i=.9,emissive:s=0,side:r=Ki}={}){return new ni({color:n,roughness:t,metalness:e,envMapIntensity:i,emissive:s,side:r})}function Li(n,t=1,e={}){return new Me({color:new gt(n).multiplyScalar(t),...e})}function qn(n,t,e){let i=[],s=[],r=[],a=new P;for(let l=0;l<=t;l++)for(let c=0;c<=n;c++){let h=c/n,d=l/t;e(h,d,a),i.push(a.x,a.y,a.z),s.push(h,d)}for(let l=0;l<t;l++)for(let c=0;c<n;c++){let h=l*(n+1)+c,d=h+1,u=h+n+1,f=u+1;r.push(h,u,d,d,u,f)}let o=new me;return o.setAttribute("position",new ne(i,3)),o.setAttribute("uv",new ne(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function fi(n,t,e){let i=new Zt,s=new Ft(n,t);if(i.add(s),e){let r=new Ft(n,e);r.userData.inner=!0,i.add(r)}return i}function si(n,t=24,e=0,i=Math.PI*2){let s=n[0][1]>n[n.length-1][1]?[...n].reverse():n;return new As(s.map(([r,a])=>Oy(Math.max(5e-4,r),a)),t,e,i)}function Y(n,t,e=0,i=0,s=0,r=0,a=0,o=0,l=null){return n.position.set(e,i,s),n.rotation.set(r,a,o),l&&(Array.isArray(l)?n.scale.set(...l):n.scale.setScalar(l)),t.add(n),n}function rt(n,t){return new Ft(n,t)}function gs(n){let t=[];n.traverse(e=>{e.isObject3D&&!e.isMesh&&t.push(e)});for(let e of t){let i=[],s=(l,c)=>{for(let h of l.children){if(h.userData.joint||h.userData.keep)continue;let d=new Ae().multiplyMatrices(c,h.matrix);if(h.isMesh){if(h.children.every(u=>u.isMesh&&u.children.length===0)){i.push({mesh:h,m:d});for(let u of h.children)u.updateMatrix(),i.push({mesh:u,m:new Ae().multiplyMatrices(d,u.matrix)})}}else h.type==="Group"&&!h.userData.joint&&s(h,d)}};e.updateMatrix();for(let l of e.children)l.updateMatrix();let r=l=>{l.updateMatrix(),l.children.forEach(r)};if(e.children.forEach(r),s(e,new Ae),i.length<2)continue;let a=new Map;for(let l of i){let c=l.mesh.material.uuid+(l.mesh.geometry.index?"i":"n");a.has(c)||a.set(c,[]),a.get(c).push(l)}for(let l of a.values()){if(l.length<2&&!l[0].mesh.parent.isMesh)continue;let c=l.map(({mesh:f,m:g})=>{let y=f.geometry.clone();for(let m of Object.keys(y.attributes))["position","normal","uv","color"].includes(m)||y.deleteAttribute(m);return y.attributes.uv||y.setAttribute("uv",new ne(new Float32Array(y.attributes.position.count*2),2)),y.attributes.normal||y.computeVertexNormals(),y.applyMatrix4(g),y});if(c.some(f=>f.attributes.color)&&!c.every(f=>f.attributes.color))continue;let d=$d(c,!1);if(!d)continue;let u=new Ft(d,l[0].mesh.material);u.userData.inner=l[0].mesh.userData.inner;for(let{mesh:f}of l)f.parent&&f.parent.remove(f);e.add(u)}let o=l=>{for(let c of[...l.children])c.userData.joint||c.userData.keep||c.isMesh||(o(c),c.type==="Group"&&c.children.length===0&&l.remove(c))};o(e)}}function xu({c1:n=5983743,c2:t=12606719,c3:e=16743128,line:i=16049407,scale:s=5,bright:r=1}={}){return new Qe({side:Ye,uniforms:{time:{value:0},c1:{value:new gt(n)},c2:{value:new gt(t)},c3:{value:new gt(e)},line:{value:new gt(i)},scale:{value:s},bright:{value:r},flash:{value:new Xe(1,1,1,0)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`})}function Yn(n,t,e,{repeat:i=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=n,r.height=t,e(r.getContext("2d"),n,t);let a=new Gn(r);return s&&(a.colorSpace=_i),a.anisotropy=4,i&&(a.wrapS=a.wrapT=ur,a.repeat.set(...i)),a}function Kd(n="#f0c450",t="#a8741c"){return Yn(512,256,(e,i,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#fff0b0"),r.addColorStop(.5,n),r.addColorStop(1,"#c8902c"),e.fillStyle=r,e.fillRect(0,0,i,s),e.strokeStyle=t,e.lineWidth=7,e.lineCap="round",e.strokeRect(14,14,i-28,s-28),e.lineWidth=6;let a=(l,c,h,d)=>{e.beginPath(),e.moveTo(l,c),e.bezierCurveTo(l+40*h*d,c-60*h,l+110*h*d,c-20*h,l+90*h*d,c+25*h),e.bezierCurveTo(l+75*h*d,c+55*h,l+40*h*d,c+30*h,l+55*h*d,c+10*h),e.stroke()};e.beginPath(),e.moveTo(30,s/2),e.bezierCurveTo(160,40,300,220,490,s/2),e.stroke();for(let l=0;l<4;l++)a(60+l*110,s/2+(l%2?30:-30),.9,1);e.fillStyle=t;for(let l=0;l<6;l++)e.beginPath(),e.arc(50+l*85,l%2?60:s-60,9,0,Math.PI*2),e.fill();let o=e.createLinearGradient(0,0,i,s);o.addColorStop(.3,"rgba(255,255,255,0)"),o.addColorStop(.45,"rgba(255,255,240,0.35)"),o.addColorStop(.6,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,i,s)})}function Qd(n="#f2c44c",t="#b07a18"){return Yn(512,512,(e,i,s)=>{let r=i/2,a=s/2,o=e.createRadialGradient(r-60,a-70,20,r,a,256);o.addColorStop(0,"#fff4c0"),o.addColorStop(.45,n),o.addColorStop(1,"#b8841f"),e.fillStyle=o,e.fillRect(0,0,i,s),e.strokeStyle=t,e.lineWidth=6,e.beginPath(),e.arc(r,a,238,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(r,a,168,0,Math.PI*2),e.stroke(),e.fillStyle=t,e.font="bold 42px serif",e.textAlign="center",e.textBaseline="middle";let l="\u16A0\u16A2\u16A6\u16A8\u16B1\u16B2\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16C9\u16CA\u16CF\u16D2\u16D6\u16D7\u16DA\u16DC\u16DE\u16DF",c=26;for(let d=0;d<c;d++){let u=d/c*Math.PI*2;e.save(),e.translate(r+Math.cos(u)*203,a+Math.sin(u)*203),e.rotate(u+Math.PI/2),e.fillText(l[d%l.length],0,0),e.restore()}let h=e.createRadialGradient(r-50,a-60,0,r-50,a-60,150);h.addColorStop(0,"rgba(255,255,230,0.55)"),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.fillRect(0,0,i,s)})}function tf(n="#e5431a",t="#9c1e08",e="#ff8a3a"){return Yn(256,256,(i,s,r)=>{i.fillStyle=n,i.fillRect(0,0,s,r);let a=s/2,o=r/2;for(let l=0;l<120;l++){let c=Math.random()*Math.PI*2;i.strokeStyle=Math.random()<.5?t:e,i.globalAlpha=.35+Math.random()*.4,i.lineWidth=1+Math.random()*2.5,i.beginPath(),i.moveTo(a+Math.cos(c)*30,o+Math.sin(c)*30),i.lineTo(a+Math.cos(c)*128,o+Math.sin(c)*128),i.stroke()}i.globalAlpha=1})}function Be(n,t,e=0,i=0,s=0){let r=new Zt;return r.name=n,r.userData.joint=!0,r.position.set(e,i,s),t.add(r),r}function kr(n=0,t=null,e=1){let i=Yn(128,128,(a,o,l)=>{let c=a.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,0.95)"),c.addColorStop(.55,"rgba(255,255,255,0.8)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,o,l)},{srgb:!1}),s=new Ft(new Cs(1,1),new Me({color:n,map:i,transparent:!0,opacity:.75,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.scale.set(e,e*.62,1),s.renderOrder=2;let r=new Zt;if(r.add(s),t){let a=new Ft(new Ra(.42,.5,40),new Me({color:new gt(t).multiplyScalar(1.3),transparent:!0,opacity:.45,depthWrite:!1,blending:Fe}));a.rotation.x=-Math.PI/2,a.scale.set(e,e*.62,1),a.position.y=.002,r.add(a)}return r}var Oy,Hr=We(()=>{Ci();jd();Oy=(n,t)=>new mt(n,t)});function yu(n){let t=Ie.main;if(n>t.top||n<t.bottom)return-1;if(n>=t.lip)return t.half;let e=(t.lip-n)/(t.lip-t.bottom);return t.half+(t.bottomHalf-t.half)*e}function $a(n,t){let e=yu(t);return e>0&&Math.abs(n)<e}var Ie,Ja,bc,ja=We(()=>{Ci();Za();Hr();Ie={main:{half:8,top:0,lip:-1,bottom:-5,bottomHalf:3.4},platforms:[{x1:-6.2,x2:-2.6,y:2.7},{x1:2.6,x2:6.2,y:2.7},{x1:-1.8,x2:1.8,y:5.3}],ledges:[{x:-8,y:0,side:-1},{x:8,y:0,side:1}],blast:{left:-21,right:21,top:16.5,bottom:-11},spawns:[{x:-4.4,y:0},{x:4.4,y:0}],respawn:{x:0,y:8.2}},Ja={x1:-Ie.main.half,x2:Ie.main.half,y:0,main:!0};bc=class{constructor(t){this.scene=t,this.group=new Zt,t.add(this.group),this.time=0,this.type="battlefield",this.activePlatforms=Ie.platforms,this.buildSky(),this.buildMain(),this.buildPlatforms(),this.buildScenery(),gs(this.group)}setType(t){this.type=t;let e=t==="battlefield";this.activePlatforms=e?Ie.platforms:[],this.platGroup.visible=e}buildSky(){let t=new Yt(180,32,16),e=new Qe({side:Ye,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
        }`});this.sky=new Ft(t,e),this.scene.add(this.sky);let i=900,s=new Float32Array(i*3),r=new Float32Array(i);for(let c=0;c<i;c++){let h=Math.random()*2-1,d=Math.random()*Math.PI*2,u=Math.abs(h)*.95+.05,f=Math.sqrt(1-u*u);s[c*3]=Math.cos(d)*f*170,s[c*3+1]=u*170-10,s[c*3+2]=Math.sin(d)*f*170,r[c]=Math.random()*2.2+.6}let a=new me;a.setAttribute("position",new Pe(s,3)),a.setAttribute("size",new Pe(r,1)),this.starMat=new Qe({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{time:{value:0}},vertexShader:`attribute float size; uniform float time; varying float vA;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*(1.0+0.4*sin(time*2.0+position.x)); vA = 0.6+0.4*sin(time*3.0+position.z*0.3);
        gl_Position = projectionMatrix*mv; }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d)); gl_FragColor = vec4(vec3(1.0,0.92,1.0)*1.4, a*vA); }"}),this.scene.add(new Mr(a,this.starMat));let o=new Ft(new Rn(9,48),new Me({color:new gt(16773846).multiplyScalar(1.25),fog:!1}));o.position.set(-38,34,-120),o.lookAt(0,0,0),this.scene.add(o);let l=new gi(new ci({map:Fi(),color:16759016,transparent:!0,opacity:.35,depthWrite:!1,blending:Fe}));l.scale.set(60,60,1),l.position.copy(o.position).multiplyScalar(1.03),this.scene.add(l)}buildMain(){let t=Ie.main,e=new Zt;e.position.z=-2.65,this.group.add(e);let i=new Mi;i.moveTo(-t.half,t.top),i.lineTo(t.half,t.top),i.lineTo(t.half,t.lip),i.lineTo(t.bottomHalf,t.bottom),i.lineTo(-t.bottomHalf,t.bottom),i.lineTo(-t.half,t.lip),i.lineTo(-t.half,t.top);let s=6,r=new Vi(i,{depth:s,bevelEnabled:!0,bevelSize:.15,bevelThickness:.2,bevelSegments:2});r.translate(0,0,-s/2);let a=ms(r,un(3813212),{outline:788248,thick:.05});a.receiveShadow=!0,e.add(a);let o=new Ft(new ei(t.half*2+.4,.22,s+.5),un(9143992));o.position.y=-.09,o.receiveShadow=!0,e.add(o);let l=new Ft(new ei(t.half*2-.6,.02,s-1.2),un(7301792));l.position.y=.025,l.receiveShadow=!0,e.add(l);let c=un(15777856,{emissive:new gt(3811840)}),h=ms(new ei(t.half*2+.5,.14,.14),c,{outline:2101248,thick:.02});h.position.set(0,-.2,s/2+.26),e.add(h);for(let g of[-1,1]){let y=ms(new ei(.14,.14,s+.5),c,{outline:2101248,thick:.02});y.position.set(g*(t.half+.2),-.2,0),e.add(y);let m=ms(new qe(.22,.26,1.1,12),un(13617390),{outline:788248,thick:.03});m.position.set(g*(t.half-.6),.55,.2),m.castShadow=!0,e.add(m);let p=new Ft(new Yt(.2,16,12),Ya(16759039,1.6));p.position.set(g*(t.half-.6),1.3,.2),p.userData.keep=!0,e.add(p),this.orbs=this.orbs||[],this.orbs.push(p)}let d=Ya(10120191,1.3);for(let g=-3;g<=3;g++){let y=new Ft(new Si(.28,.035,6,16),d);y.position.set(g*2.1,-.65,s/2+.21),e.add(y);let m=new Ft(new as(.12,0),d);m.position.set(g*2.1,-.65,s/2+.22),e.add(m)}this.crystals=[];let u=new Is({color:11898111,emissive:new gt(5909696),gradientMap:null}),f=[[-2.6,-5,1.2],[.4,-5,1.9],[2.4,-5,1],[-1.2,-5,1.4],[-5.2,-2.6,.8],[5.4,-2.4,.9]];for(let[g,y,m]of f){let p=ms(new _e(.35*m,1.8*m,5),u,{outline:1706032,thick:.03});p.rotation.x=Math.PI,p.position.set(g,y-.9*m+.1,(Math.random()-.5)*2),e.add(p)}}buildPlatforms(){this.platGroup=new Zt,this.platGroup.userData.keep=!0,this.group.add(this.platGroup);let t=un(11117272),e=un(15777856,{emissive:new gt(3811840)}),i=new Me({color:new gt(12946687).multiplyScalar(1.2),transparent:!0,opacity:.7});this.platMeshes=[];for(let s of Ie.platforms){let r=s.x2-s.x1,a=new Zt;a.position.set((s.x1+s.x2)/2,s.y,0);let o=ms(new ei(r,.22,3.2),t,{outline:788248,thick:.03});o.position.y=-.11,o.receiveShadow=!0,o.castShadow=!0,a.add(o);let l=ms(new ei(r+.1,.08,.1),e,{outline:null});l.position.set(0,-.2,1.62),a.add(l);let c=new Ft(new ei(r*.85,.06,2.6),i);c.position.y=-.26,a.add(c);let h=new Ft(new as(.22,0),Ya(16751856,1.3));h.position.y=-.62,h.userData.keep=!0,a.add(h),this.platMeshes.push({grp:a,gem:h}),this.platGroup.add(a)}}buildScenery(){let t=un(2366014),e=un(5128058);this.isles=[];let i=[[-34,-6,-45,5],[30,-2,-55,6],[-12,8,-80,4],[48,10,-90,7],[-55,4,-70,6],[12,-14,-40,3]];for(let[o,l,c,h]of i){let d=new Zt,u=new Ft(new _e(h,h*2.2,7),t);u.rotation.x=Math.PI,u.position.y=-h*1.1;let f=new Ft(new qe(h*1.02,h,h*.3,7),e);d.add(u,f);let g=new Ft(new qe(h*.12,h*.15,h*1.2,8),un(7234216));g.position.set(h*.3,h*.6,0);let y=new Ft(new Yt(h*.1,8,6),Ya(16766090,1.5));y.position.set(h*.3,h*1.25,0),d.add(g,y),d.position.set(o,l,c),d.userData.baseY=l,d.userData.phase=Math.random()*6,this.scene.add(d),this.isles.push(d)}let s=140,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=(Math.random()-.5)*60,r[o*3+1]=Math.random()*30-8,r[o*3+2]=-Math.random()*30-4;let a=new me;a.setAttribute("position",new Pe(r,3)),this.motes=new Mr(a,new br({map:Fi(),size:.5,color:14264575,transparent:!0,opacity:.8,depthWrite:!1,blending:Fe})),this.scene.add(this.motes)}update(t){this.time+=t;let e=this.time;this.starMat.uniforms.time.value=e;for(let s of this.isles)s.position.y=s.userData.baseY+Math.sin(e*.4+s.userData.phase)*.6;for(let{gem:s}of this.platMeshes)s.rotation.y=e*1.5,s.position.y=-.62+Math.sin(e*2)*.06;this.orbs&&this.orbs.forEach((s,r)=>{s.position.y=1.3+Math.sin(e*1.8+r)*.08});let i=this.motes.geometry.attributes.position;for(let s=0;s<i.count;s++){let r=i.getY(s)+.012;r>22&&(r=-8),i.setY(s,r),i.setX(s,i.getX(s)+Math.sin(e+s)*.004)}i.needsUpdate=!0}}});function fn(){return{x:0,y:0,cx:0,cy:0,jump:!1,attack:!1,special:!1,shield:!1,smash:!1,grab:!1,start:!1,any:!1}}function wc(n,t){let e=navigator.getGamepads?navigator.getGamepads():[],i=e&&e[n];if(!i)return t;let s=h=>Math.abs(h)<.22?0:h,r=h=>i.buttons[h]&&i.buttons[h].pressed,a=s(i.axes[0]||0),o=-s(i.axes[1]||0);r(14)&&(a=-1),r(15)&&(a=1),r(12)&&(o=1),r(13)&&(o=-1),Math.abs(a)>Math.abs(t.x)&&(t.x=a),Math.abs(o)>Math.abs(t.y)&&(t.y=o);let l=s(i.axes[2]||0),c=-s(i.axes[3]||0);return Math.hypot(l,c)>.6&&(t.cx=l,t.cy=c),r(0)&&(t.attack=!0),r(1)&&(t.special=!0),(r(2)||r(3))&&(t.jump=!0),(r(4)||r(5))&&(t.grab=!0),(r(6)||r(7))&&(t.shield=!0),r(9)&&(t.start=!0),t}var Mc,vu,Sc,Ec,Tc=We(()=>{Mc=["jump","attack","special","shield","smash","grab"],vu=[{left:["KeyA"],right:["KeyD"],up:["KeyW"],down:["KeyS"],jump:["Space"],attack:["KeyJ","KeyF"],special:["KeyK","KeyG"],shield:["KeyL","KeyH"],smash:["KeyI","KeyR"],grab:["KeyU","KeyT"]},{left:["ArrowLeft"],right:["ArrowRight"],up:["ArrowUp"],down:["ArrowDown"],jump:["Numpad0","ShiftRight"],attack:["Numpad1","Comma"],special:["Numpad2","Period"],shield:["Numpad3","Slash"],smash:["Numpad5","Semicolon"],grab:["Numpad4","KeyM"]}];Sc=class{constructor(){this.down=new Set,this.pressedOnce=new Set,window.addEventListener("keydown",t=>{this.down.has(t.code)||this.pressedOnce.add(t.code),this.down.add(t.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Slash","Tab"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}take(t){return this.pressedOnce.has(t)?(this.pressedOnce.delete(t),!0):!1}clearOnce(){this.pressedOnce.clear()}any(t){return t.some(e=>this.down.has(e))}read(t,e){for(let i of t){let s=this.any(i.right),r=this.any(i.left),a=this.any(i.up),o=this.any(i.down);s&&!r?e.x=1:r&&!s&&(e.x=-1),a&&!o?e.y=1:o&&!a&&(e.y=-1);for(let l of Mc)this.any(i[l])&&(e[l]=!0)}return e}};Ec=class{constructor(){this.raw=fn(),this.prev=fn(),this.pressed={},this.buf={},this.stick={x:0,y:0},this.dirBuf={up:0,down:0,left:0,right:0},this.dirPressed={up:!1,down:!1,left:!1,right:!1},this.cBuf=0,this.cDir={x:0,y:0},this.mash=0,this.tapJump=!0;for(let t of Mc)this.pressed[t]=!1,this.buf[t]=0}latch(t){this.prev=this.raw,this.raw=t,this.mash=0;for(let a of Mc)this.pressed[a]=t[a]&&!this.prev[a],this.pressed[a]?(this.buf[a]=7,this.mash++):this.buf[a]>0&&this.buf[a]--;this.stick.x=t.x,this.stick.y=t.y;let e=.6,i=this.dirPressed;i.up=t.y>e&&!(this.prev.y>e),i.down=t.y<-e&&!(this.prev.y<-e),i.right=t.x>e&&!(this.prev.x>e),i.left=t.x<-e&&!(this.prev.x<-e);for(let a of["up","down","left","right"])i[a]?(this.dirBuf[a]=7,this.mash++):this.dirBuf[a]>0&&this.dirBuf[a]--;let s=Math.hypot(t.cx,t.cy)>.6,r=Math.hypot(this.prev.cx,this.prev.cy)>.6;s&&!r?(this.cBuf=7,this.cDir={x:t.cx,y:t.cy}):this.cBuf>0&&this.cBuf--}consume(t){this.buf[t]=0}consumeDir(t){this.dirBuf[t]=0}clearAll(){for(let t of Mc)this.buf[t]=0;for(let t in this.dirBuf)this.dirBuf[t]=0;this.cBuf=0}sidePressed(){return this.dirBuf.left>0?-1:this.dirBuf.right>0?1:0}}});function Hy(n,t,e){let i={};for(let s of nf){let r=n[s],a=t[s];if(!r&&!a)continue;let o=r||Rc,l=a||Rc;i[s]=[o[0]+(l[0]-o[0])*e,o[1]+(l[1]-o[1])*e,o[2]+(l[2]-o[2])*e]}for(let s of ky){let r=n[s]||0,a=t[s]||0;(r||a)&&(i[s]=r+(a-r)*e)}return i}function sf(n,t){if(t<=n[0][0])return n[0][1];for(let e=0;e<n.length-1;e++){let[i,s]=n[e],[r,a]=n[e+1];if(t<r)return Hy(s,a,Zd((t-i)/(r-i)))}return n[n.length-1][1]}function Ka(n,t,e){for(let s of nf){let r=n.j[s];if(!r)continue;let a=t[s]||Rc,o=n.base[s]||Rc,l=o[0]+a[0],c=o[1]+a[1],h=o[2]+a[2];s==="body"&&(r.rotation.x=_u(r.rotation.x,l),r.rotation.y=_u(r.rotation.y,c),r.rotation.z=_u(r.rotation.z,h)),r.rotation.x+=(l-r.rotation.x)*e,r.rotation.y+=(c-r.rotation.y)*e,r.rotation.z+=(h-r.rotation.z)*e}let i=n.j.body;i.position.y+=(n.hipY+(t.by||0)-i.position.y)*e,i.position.z+=((t.bz||0)-i.position.z)*e,n.flare+=((t.flare||0)-n.flare)*e}function _u(n,t){for(;n-t>Math.PI;)n-=ef;for(;t-n>Math.PI;)n+=ef;return n}function Ac(n){for(let t of["body","hips","torso"]){let e=n.j[t];if(e)for(let i of["x","y","z"]){let s=e.rotation[i];s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,e.rotation[i]=s}}}var nf,ky,Rc,ef,bu=We(()=>{dn();nf=["body","hips","torso","head","armL","foreL","armR","foreR","legL","shinL","legR","shinR","wep","earL","earR","wisp"],ky=["by","bz","flare"],Rc=[0,0,0];ef=Math.PI*2});var Mu,vt,xs=We(()=>{Mu=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.bgm=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.55;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.28,this.musicBus.connect(this.master);let s=e.sampleRate*1.5;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1}get ok(){return this.ctx&&!this.muted}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}tone(t,e,{type:i="sine",vol:s=.3,slide:r=null,delay:a=0,attack:o=.005,bus:l=null}={}){if(!this.ok)return;let c=this.ctx,h=c.currentTime+a,d=c.createOscillator(),u=c.createGain();d.type=i,d.frequency.setValueAtTime(t,h),r&&d.frequency.exponentialRampToValueAtTime(Math.max(20,r),h+e),u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(s,h+o),u.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(u).connect(l||this.sfxBus),d.start(h),d.stop(h+e+.05)}noise(t,{vol:e=.3,freq:i=2e3,type:s="bandpass",q:r=1,slide:a=null,delay:o=0,bus:l=null}={}){if(!this.ok)return;let c=this.ctx,h=c.currentTime+o,d=c.createBufferSource();d.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(i,h),a&&u.frequency.exponentialRampToValueAtTime(Math.max(40,a),h+t),u.Q.value=r;let f=c.createGain();f.gain.setValueAtTime(e,h),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u).connect(f).connect(l||this.sfxBus),d.start(h,Math.random()*.5),d.stop(h+t+.05)}hit(t=.5){let e=Math.min(1.4,t);this.tone(160-e*40,.12+e*.12,{type:"sine",vol:.5+e*.3,slide:40}),this.noise(.06+e*.1,{vol:.35+e*.25,freq:2400-e*900,q:.8,slide:500}),e>.7&&(this.noise(.35,{vol:.25,freq:900,type:"lowpass",slide:120}),this.tone(90,.3,{type:"triangle",vol:.35,slide:30}))}slash(t=.5){this.noise(.12+t*.1,{vol:.16,freq:4e3,q:2,slide:900})}whoosh(t=.5){this.noise(.14+t*.08,{vol:.08+t*.05,freq:700,q:1.2,slide:2200})}jump(){this.tone(300,.1,{type:"triangle",vol:.12,slide:620})}djump(){this.tone(420,.14,{type:"triangle",vol:.12,slide:900}),this.noise(.1,{vol:.05,freq:3e3})}land(){this.noise(.07,{vol:.1,freq:500,type:"lowpass"})}dash(){this.noise(.09,{vol:.07,freq:900,type:"lowpass"})}shieldHit(){this.tone(900,.12,{type:"square",vol:.07,slide:500}),this.noise(.08,{vol:.12,freq:3500,q:3})}shieldBreak(){this.tone(700,.5,{type:"sawtooth",vol:.15,slide:80}),this.noise(.5,{vol:.3,freq:3e3,slide:200})}grab(){this.tone(220,.06,{type:"square",vol:.08})}throwS(){this.noise(.2,{vol:.15,freq:900,slide:2500})}ledge(){this.tone(500,.05,{type:"triangle",vol:.1})}dodge(){this.noise(.12,{vol:.08,freq:5e3,q:2,slide:2e3})}charge(){this.tone(300,.08,{type:"sine",vol:.05,slide:360})}orb(){this.tone(520,.25,{type:"sine",vol:.18,slide:180}),this.tone(780,.2,{type:"triangle",vol:.08,slide:300})}warp(){this.tone(200,.3,{type:"sine",vol:.18,slide:1400}),this.noise(.3,{vol:.08,freq:6e3,q:4,slide:1500})}reflect(){this.tone(1200,.2,{type:"triangle",vol:.14,slide:2400})}counter(){this.tone(1500,.12,{type:"square",vol:.1}),this.tone(2200,.3,{type:"triangle",vol:.12,delay:.05})}armor(){this.tone(180,.1,{type:"square",vol:.1})}tech(){this.noise(.08,{vol:.12,freq:4e3,q:3})}star(){this.tone(1800,.15,{type:"triangle",vol:.06})}ko(){this.tone(120,1.1,{type:"sawtooth",vol:.3,slide:30}),this.noise(1.2,{vol:.5,freq:1800,type:"lowpass",slide:80}),this.tone(60,1,{type:"sine",vol:.6,slide:25})}fire(){this.noise(.45,{vol:.22,freq:700,type:"lowpass",slide:250}),this.noise(.3,{vol:.1,freq:2600,q:.6,slide:900})}fsReady(){[660,880,1100,1320,1760].forEach((t,e)=>this.tone(t,.3,{type:"triangle",vol:.1,delay:e*.06})),this.noise(.6,{vol:.2,freq:5e3,q:2,slide:1500})}fsStart(){this.tone(110,1.2,{type:"sawtooth",vol:.18,slide:440}),this.noise(1,{vol:.25,freq:400,slide:4e3,q:1}),[523,659,784].forEach((t,e)=>this.tone(t,.8,{type:"square",vol:.06,delay:.3+e*.1}))}fsBoom(){this.tone(70,1.4,{type:"sine",vol:.7,slide:25}),this.noise(1.3,{vol:.55,freq:2500,type:"lowpass",slide:100}),this.tone(200,.8,{type:"sawtooth",vol:.2,slide:40})}countdown(){this.tone(660,.18,{type:"square",vol:.12})}go(){this.tone(990,.5,{type:"square",vol:.14}),this.tone(1320,.5,{type:"triangle",vol:.1})}game(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.5,{type:"square",vol:.09,delay:e*.09}))}menuMove(){this.tone(880,.05,{type:"square",vol:.05})}menuOk(){this.tone(660,.08,{type:"square",vol:.08}),this.tone(990,.12,{type:"square",vol:.08,delay:.07})}menuBack(){this.tone(500,.1,{type:"square",vol:.07,slide:300})}playMusic(t="battle"){if(!this.ctx||(this.stopMusic(),!this.musicOn))return;let e=this.ctx,s=60/(t==="battle"?148:104)/4,r=t==="battle"?[[57,60,64],[53,57,60],[48,52,55],[55,59,62],[50,53,57],[53,57,60],[52,56,59],[52,56,59]]:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],a=t==="battle"?[76,-1,74,72,74,-1,76,-1,79,-1,76,74,72,-1,69,-1]:[],o=h=>440*Math.pow(2,(h-69)/12),l={stepIdx:0,next:e.currentTime+.1,timer:0},c=()=>{for(;l.next<e.currentTime+.12;){let h=l.stepIdx,d=Math.floor(h/16)%r.length,u=h%16,f=r[d],y=l.next-e.currentTime;if(!this.muted){u%2===0&&this.tone(o(f[0]-24),s*1.8,{type:"sawtooth",vol:u%4===0?.22:.14,delay:y,bus:this.musicBus});let m=f[[0,1,2,1][u%4]]+(u>=8?12:0);if(this.tone(o(m),s*.9,{type:"square",vol:.045,delay:y,bus:this.musicBus}),t==="battle"){u%4===0&&this.tone(140,.14,{type:"sine",vol:.5,slide:40,delay:y,bus:this.musicBus}),u%8===4&&this.noise(.14,{vol:.28,freq:1800,q:.7,delay:y,bus:this.musicBus}),u%2===1&&this.noise(.03,{vol:.08,freq:8e3,type:"highpass",delay:y,bus:this.musicBus});let p=a[u];d%2===1&&p>0&&this.tone(o(p+(d>=4?-2:0)),s*1.9,{type:"triangle",vol:.12,delay:y,bus:this.musicBus})}else u===0&&f.forEach(p=>this.tone(o(p+12),s*14,{type:"triangle",vol:.05,delay:y,attack:.3,bus:this.musicBus}))}l.stepIdx++,l.next+=s}};l.timer=setInterval(c,30),this.bgm=l}stopMusic(){this.bgm&&clearInterval(this.bgm.timer),this.bgm=null}},vt=new Mu});function af(n,t,e,i,s){return((n/10+n*t/20)*(200/(e+100))*1.4+18)*(i/100)+s}function Qa(n,t){return t&&n>=t[0]&&n<=t[1]}var to,Cc,Su,Eu,rf,zy,Lc,of=We(()=>{Ci();ja();dn();bu();gu();xs();to=.0027,Cc=.0046,Su=.26,Eu=50,rf=Math.PI/2-.42;zy=new Set(["idle","walk","dash","run","skid","turn","crouch","hitstun","jumpsquat","land","knockdown","tumble"]),Lc=class{constructor(t,e,i,{input:s,variant:r=0,color:a,stocks:o=3,cpu:l=!1,label:c}){this.battle=t,this.slot=e,this.def=i,this.s=i.stats,this.input=s,this.cpu=l,this.color=new gt(a),this.label=c,this.model=i.buildModel(r),t.scene.add(this.model.root);for(let h of this.model.worldObjects)t.scene.add(h);this.model.shadow&&t.scene.add(this.model.shadow),this.trail=new _c(t.scene,this.model.trailColor),this.shieldMesh=new Ft(new Yt(1,24,16),new Me({color:this.color.clone().multiplyScalar(.9),transparent:!0,opacity:.4,depthWrite:!1,blending:Fe})),this.shieldMesh.visible=!1,t.scene.add(this.shieldMesh),this.platMesh=new Ft(new qe(.9,.5,.18,24),new Me({color:this.color.clone().multiplyScalar(1.3),transparent:!0,opacity:.85})),this.platMesh.visible=!1,t.scene.add(this.platMesh),this.stocks=o,this.stats={kos:0,falls:0,dealt:0,taken:0,sds:0},this.damage=0,this.animT=0,this.phase=0,this.flashT=0,this.fsReady=!1,this.visYaw=rf,this.shake=0,this.reset(Ie.spawns[e%2].x,Ie.spawns[e%2].y,e%2===0?1:-1)}reset(t,e,i){this.x=t,this.y=e,this.prevX=t,this.prevY=e,this.vx=0,this.vy=0,this.kx=0,this.ky=0,this.facing=i,this.grounded=!0,this.surface=Ja;for(let s of Ie.platforms)Math.abs(s.y-e)<.01&&t>=s.x1&&t<=s.x2&&(this.surface=s);this.jumpsLeft=this.s.airJumps,this.fastfall=!1,this.state="idle",this.sf=0,this.move=null,this.moveName="",this.mf=0,this.hitIds=new Set,this.hitlag=0,this.hitstun=0,this.tumble=!1,this.pendingLaunch=null,this.invuln=0,this.shieldHP=Eu,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.dropTimer=0,this.ledgeRegrab=0,this.ledge=null,this.ledgeIntangUsed=!1,this.grabbing=null,this.grabbedBy=null,this.grabTimer=0,this.tapTimer=0,this.jsTap=!1,this.techWindow=0,this.techCool=0,this.landLag=0,this.helplessLag=20,this.charge=0,this.charging=!1,this.chargeDone=!1,this.chargeBtn="attack",this.counterDmg=0,this.djTimer=0,this.lastHitBy=null,this.lastHitTimer=0,this.noGrav=!1,this.gravMult=1,this.vars={},this.hidden=!1}get height(){return this.s.height}get alive(){return this.state!=="dead"&&this.stocks>0}endHook(){let t=this.move;t&&t.onEnd&&!this.ending&&(this.ending=!0,t.onEnd(this),this.ending=!1)}setState(t){this.state==="attack"&&t!=="attack"&&(this.endHook(),this.move=null,Ac(this.model.rig)),this.state=t,this.sf=0,this.tapTimer=0,this.hidden=!1}update(){if(this.prevX=this.x,this.prevY=this.y,this.flashT>0&&this.flashT--,this.state==="dead"){--this.deadTimer<=0&&this.stocks>0&&this.respawn();return}if(this.hitlag>0){if(this.hitlag--,this.pendingLaunch&&this.input.dirPressed){let t=this.input.dirPressed;t.left&&(this.x-=.06),t.right&&(this.x+=.06),t.up&&(this.y+=.06),t.down&&!this.grounded&&(this.y-=.06)}this.hitlag===0&&this.pendingLaunch&&this.launch();return}this.invuln>0&&this.invuln--,this.dropTimer>0&&this.dropTimer--,this.ledgeRegrab>0&&this.ledgeRegrab--,this.techWindow>0&&this.techWindow--,this.techCool>0&&this.techCool--,this.djTimer>0&&this.djTimer--,this.lastHitTimer>0?this.lastHitTimer--:this.lastHitBy=null,this.state!=="shield"&&this.state!=="shieldstun"&&(this.shieldHP=Math.min(Eu,this.shieldHP+.09)),this.sf++,this.animT++,this.fsReady&&this.animT%4===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.5,[16740464,16769136,7405456,7385343,13660415][this.animT/4%5],1,.7),this.noGrav=!1,this.gravMult=1,this.stateStep(),this.physics(),this.collide(),this.checkLedge()}stateStep(){switch(this.state){case"idle":return this.stIdle();case"walk":return this.stWalk();case"dash":return this.stDash();case"run":return this.stRun();case"skid":return this.stSkid();case"turn":return this.stTurn();case"crouch":return this.stCrouch();case"jumpsquat":return this.stJumpsquat();case"land":return this.stLand();case"air":return this.stAir();case"tumble":return this.stAir(!0);case"helpless":return this.stHelpless();case"airdodge":return this.stAirdodge();case"shield":return this.stShield();case"shieldstun":return this.stShieldstun();case"shieldoff":return this.stTimed(7,"idle");case"roll":return this.stRoll();case"spotdodge":return this.stTimed(22,"idle",!0);case"hitstun":return this.stHitstun();case"knockdown":return this.stKnockdown();case"getup":return this.stTimed(26,"idle",!0);case"tech":return this.stTimed(22,"idle",!0);case"ledge":return this.stLedge();case"ledgeclimb":return this.stLedgeClimb();case"grabbing":return this.stGrabbing();case"grabbed":return this.stGrabbed();case"shieldbreak":this.friction();return;case"dizzy":return this.stDizzy();case"respawn":return this.stRespawn();case"attack":return this.updateMove();case"victory":case"frozen":this.friction();return;case"trapped":return this.stTrapped()}}friction(t=1){this.vx=di(this.vx,0,this.s.traction*t)}drift(t=1){let e=this.s,i=this.input.stick.x;Math.abs(i)>.2?this.vx=di(this.vx,i*e.airSpeed*t,e.airAccel*Math.max(.3,t)):this.vx=di(this.vx,0,e.airFriction)}stTimed(t,e,i=!0){i&&this.friction(1.2),this.sf>=t&&this.setState(this.grounded?e:"air")}onPlatform(){return this.grounded&&this.surface&&!this.surface.main}dropCheck(){return this.input.dirPressed.down&&this.onPlatform()?(this.grounded=!1,this.surface=null,this.y-=.04,this.vy=-.02,this.dropTimer=12,this.setState("air"),!0):!1}waitDir(t,e){let i=this.input;return i.buf[t]>7-e&&Math.hypot(i.stick.x,i.stick.y)<.3}groundActions(){let t=this.input;if(t.buf.special&&!this.waitDir("special",2))return t.consume("special"),this.special(),!0;if(t.buf.grab||t.buf.attack&&t.raw.shield)return t.consume("grab"),t.consume("attack"),this.turnToStick(),this.startMove(this.state==="dash"||this.state==="run"?"dashgrab":"grab"),!0;if(t.cBuf||t.buf.smash&&!this.waitDir("smash",3)){let e=t.cBuf?t.cDir:t.stick;return this.chargeBtn=t.cBuf?null:"smash",t.cBuf=0,t.consume("smash"),this.smashAttack(e),!0}if(t.buf.attack&&!this.waitDir("attack",1))return t.consume("attack"),this.chargeBtn="attack",this.groundAttack(),!0;if(t.buf.jump||t.tapJump&&t.dirBuf.up){let e=!t.buf.jump;return t.consume("jump"),t.consumeDir("up"),this.setState("jumpsquat"),this.jsTap=e,!0}return t.raw.shield?(this.setState("shield"),!0):!1}turnToStick(){let t=this.input.stick.x;Math.abs(t)>.5&&(this.facing=te(t))}groundAttack(){let{x:t,y:e}=this.input.stick;return this.state==="dash"||this.state==="run"?this.startMove("dashattack"):e>.5&&e>=Math.abs(t)*.8?this.startMove("utilt"):e<-.5&&-e>=Math.abs(t)*.8?this.startMove("dtilt"):Math.abs(t)>.4?(this.facing=te(t),this.startMove("ftilt")):this.startMove("jab1")}smashAttack(t){return t.y>.5&&t.y>=Math.abs(t.x)?this.startMove("usmash"):t.y<-.5&&-t.y>=Math.abs(t.x)?this.startMove("dsmash"):(Math.abs(t.x)>.3&&(this.facing=te(t.x)),this.startMove("fsmash"))}aerial(t){return t.y>.5&&t.y>=Math.abs(t.x)?this.startMove("uair"):t.y<-.5&&-t.y>=Math.abs(t.x)?this.startMove("dair"):Math.abs(t.x)>.4?this.startMove(te(t.x)===this.facing?"fair":"bair"):this.startMove("nair")}special(){let{x:t,y:e}=this.input.stick;return this.chargeBtn="special",this.fsReady&&this.def.moves.final?(this.fsReady=!1,Math.abs(t)>.4&&(this.facing=te(t)),this.startMove("final")):e>.5&&e>=Math.abs(t)*.7?this.startMove("upb"):e<-.5&&-e>=Math.abs(t)?this.startMove("downb"):Math.abs(t)>.4?this.sideBUsed&&!this.grounded?!1:(this.facing=te(t),this.startMove("sideb")):this.startMove("neutralb")}stIdle(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(Math.abs(t)>.25){Math.abs(t)>.75?this.startDash(te(t)):(this.facing=te(t),this.setState("walk"));return}if(this.input.stick.y<-.6)return this.setState("crouch");this.friction()}startDash(t){this.facing=t,this.setState("dash"),this.vx=t*this.s.dashSpeed,vt.dash(),this.battle.effects.dust(this.x-t*.3,this.y,3,-t)}stWalk(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(Math.abs(t)<.25)return this.setState("idle");if(this.input.stick.y<-.6)return this.setState("crouch");if(Math.abs(t)>.75&&(this.input.dirPressed.left||this.input.dirPressed.right))return this.startDash(te(t));this.facing=te(t),this.vx=di(this.vx,t*this.s.walkSpeed*1.3,.012)}stDash(){if(!this.grounded)return this.setState("air");if(this.groundActions())return;let t=this.input.stick.x;if(te(t)===-this.facing&&Math.abs(t)>.6)return this.startDash(-this.facing);this.vx=di(this.vx,this.facing*this.s.dashSpeed,.05),this.sf>=this.s.dashFrames&&(te(t)===this.facing&&Math.abs(t)>.5?this.setState("run"):this.setState("skid"))}stRun(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(this.input.stick.y<-.6)return this.setState("crouch");if(Math.abs(t)<.3)return this.setState("skid");if(te(t)===-this.facing)return this.setState("turn");this.vx=di(this.vx,this.facing*this.s.runSpeed,.02),this.animT%16===0&&this.battle.effects.dust(this.x-this.facing*.2,this.y,1,-this.facing)}stSkid(){if(!this.grounded)return this.setState("air");if(this.groundActions())return;let t=this.input.stick.x;if(Math.abs(t)>.75&&(this.input.dirPressed.left||this.input.dirPressed.right))return this.startDash(te(t));this.friction(1.6),this.sf>=8&&this.setState("idle")}stTurn(){if(!this.grounded)return this.setState("air");if(!this.groundActions()&&(this.friction(2.2),this.sf===1&&this.battle.effects.dust(this.x,this.y,3,this.facing),this.sf===5&&(this.facing=-this.facing),this.sf>=10)){let t=this.input.stick.x;te(t)===this.facing&&Math.abs(t)>.5?this.setState("run"):this.setState("idle")}}stCrouch(){if(!this.grounded)return this.setState("air");if(!this.groundActions()&&!this.dropCheck()){if(this.input.stick.y>-.5)return this.setState("idle");this.friction(1.5)}}stJumpsquat(){let t=this.input,e=this.s;if(this.friction(.6),!this.grounded)return this.setState("air");if(this.jsTap){if(t.buf.attack&&this.sf<=2)return t.consume("attack"),this.chargeBtn="attack",this.startMove("utilt");if(t.buf.smash)return t.consume("smash"),this.chargeBtn="smash",this.startMove("usmash");if(t.buf.special)return t.consume("special"),this.special();if(t.buf.grab)return t.consume("grab"),this.startMove("grab")}else if(t.buf.special&&t.stick.y>.5)return t.consume("special"),this.special();if(this.sf>=e.jumpsquat){let i=this.jsTap?t.raw.y>.5:t.raw.jump;this.vy=i?e.jumpV:e.hopV;let s=Se(this.vx*.85,-e.airSpeed*1.2,e.airSpeed*1.2);this.vx=s+t.stick.x*e.airSpeed*.35,this.grounded=!1,this.surface=null,this.fastfall=!1,this.setState("air"),vt.jump(),this.battle.effects.dust(this.x,this.y,4,0)}}stLand(){if(this.friction(1.4),!this.grounded)return this.setState("air");this.sf>=this.landLag&&this.setState("idle")}landing(t){this.setState("land"),this.landLag=t}airActions(){let t=this.input;if(t.buf.special&&!this.waitDir("special",2)&&(t.consume("special"),this.special()!==!1))return!0;if(t.cBuf||t.buf.smash&&!this.waitDir("smash",2)){let e=t.cBuf?t.cDir:t.stick;return t.cBuf=0,t.consume("smash"),this.aerial(e),!0}return t.buf.attack||t.buf.grab?(t.consume("attack"),t.consume("grab"),this.aerial(t.stick),!0):t.buf.shield&&!this.airdodgeUsed?(t.consume("shield"),this.startAirdodge(),!0):t.buf.jump&&this.jumpsLeft>0?(t.consume("jump"),this.doubleJump(),!0):(t.tapJump&&t.dirBuf.up&&this.jumpsLeft>0&&this.tapTimer===0&&(t.consumeDir("up"),this.tapTimer=3),this.tapTimer>0&&(this.tapTimer--,this.tapTimer===0)?(this.doubleJump(),!0):!1)}doubleJump(){let t=this.s;this.jumpsLeft--,this.vy=t.djV,this.ky=Math.max(0,this.ky),this.kx*=.5,this.vx=this.input.stick.x*t.airSpeed,this.fastfall=!1,this.djTimer=24,this.setState("air"),vt.djump(),this.battle.effects.ring(this.x,this.y+.1,this.def.color,1.8,14)}fastfallCheck(){this.input.dirPressed.down&&!this.fastfall&&this.vy<=.03&&!this.grounded&&(this.fastfall=!0,this.vy=-this.s.fastFall,this.battle.effects.sparkle(this.x,this.y+this.height*.5,16777215,2,.3))}stAir(t=!1){if(this.grounded)return this.setState("idle");t&&this.updateTech(),!this.airActions()&&(this.drift(),this.fastfallCheck())}stHelpless(){if(this.grounded)return this.landing(this.helplessLag);this.drift(.65),this.fastfallCheck()}startAirdodge(){this.setState("airdodge"),this.airdodgeUsed=!0;let{x:t,y:e}=this.input.stick,i=Math.hypot(t,e);this.fastfall=!1,i>.5?(this.adDir=!0,this.vx=t/i*.3,this.vy=e/i*.3,this.kx=0,this.ky=0):this.adDir=!1,vt.dodge()}stAirdodge(){this.adDir?(this.sf<14&&(this.noGrav=!0,this.vx*=.88,this.vy*=.88),this.sf>=38&&this.setState("air")):(this.drift(.8),this.sf>=30&&this.setState("air")),this.sf%3===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.5,16777215,1,.4)}stShield(){let t=this.input;if(!this.grounded)return this.setState("air");if(this.friction(1.5),this.shieldHP-=.13,this.shieldHP<=0)return this.shieldBreak();if(t.buf.jump||t.tapJump&&t.dirBuf.up){t.consume("jump"),t.consumeDir("up"),this.setState("jumpsquat"),this.jsTap=!1;return}if(t.buf.attack||t.buf.grab)return t.consume("attack"),t.consume("grab"),this.startMove("grab");if(t.buf.special&&t.stick.y>.5)return t.consume("special"),this.special();let e=t.sidePressed();if(e)return t.consumeDir(e<0?"left":"right"),this.startRoll(e);if(t.dirBuf.down){t.consumeDir("down"),this.setState("spotdodge"),vt.dodge();return}!t.raw.shield&&this.sf>=4&&this.setState("shieldoff")}stShieldstun(){this.friction(.8),--this.shieldstun<=0&&this.setState(this.input.raw.shield?"shield":"shieldoff")}shieldBreak(){vt.shieldBreak(),this.battle.effects.hitSpark(this.x,this.y+1,this.color,1.2),this.shieldHP=30,this.setState("shieldbreak"),this.grounded=!1,this.surface=null,this.vy=.24,this.vx=0,this.battle.shakeCam(.4)}stDizzy(){this.friction(),this.dizzyT-=1+this.input.mash*4,this.animT%20===0&&this.battle.effects.sparkle(this.x,this.y+this.height+.2,16772744,1,.3),this.dizzyT<=0&&this.setState("idle")}startRoll(t){this.setState("roll"),this.rollDir=t,vt.dodge()}stRoll(){let t=this.sf;t>=3&&t<=20?this.vx=this.rollDir*this.s.rollSpeed*(t<16?1:.5):this.friction(2),t>=27&&(this.facing=-this.rollDir,this.setState(this.grounded?"idle":"air"))}updateTech(){this.input.pressed.shield&&this.techCool===0&&(this.techWindow=11,this.techCool=40)}stHitstun(){this.updateTech(),this.hitstun--,this.grounded?this.friction(.6):this.hitstun<6&&this.drift(.4),this.hitstun<=0&&(this.grounded?this.setState("idle"):this.setState(this.tumble?"tumble":"air")),!this.grounded&&Math.hypot(this.kx,this.ky)>.18&&this.animT%2===0&&this.battle.effects.smoke(this.x,this.y+this.height*.5)}stKnockdown(){let t=this.input;if(this.friction(2),this.sf>14){if(t.buf.attack)return t.consume("attack"),this.startMove("getupattack");let e=t.sidePressed();if(e)return t.consumeDir(e<0?"left":"right"),this.startRoll(e);(t.dirBuf.up||t.buf.jump||t.buf.shield||this.sf>80)&&(t.consume("jump"),t.consume("shield"),this.setState("getup"))}}checkLedge(){if(this.grounded||this.ledgeRegrab>0)return;let t=this.state,e=t==="air"||t==="helpless"||t==="tumble"||t==="airdodge"&&this.sf>14;if(t==="attack"&&this.move&&this.move.ledgeGrab!==void 0&&this.mf>=this.move.ledgeGrab&&(e=!0),!!e&&!(this.vy+this.ky>.05&&t!=="attack")&&!(this.input.stick.y<-.6))for(let i of Ie.ledges){let s=(this.x-i.x)*i.side,r=i.y-this.y;if(s<-.4||s>1.15||r<.45||r>this.height*1.25)continue;let a=this.battle.fighters.find(o=>o!==this&&o.state==="ledge"&&o.ledge===i);if(a){if(a.sf<8)continue;a.setState("air"),a.ledge=null,a.vx=i.side*.08,a.vy=.05,a.ledgeRegrab=40}this.grabLedge(i);return}}grabLedge(t){this.move=null,this.setState("ledge"),this.ledge=t,this.x=t.x+t.side*.32,this.y=t.y-this.height*.84,this.vx=this.vy=this.kx=this.ky=0,this.facing=-t.side,this.jumpsLeft=this.s.airJumps,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.fastfall=!1,this.ledgeIntangUsed||(this.invuln=36,this.ledgeIntangUsed=!0),this.input.clearAll(),vt.ledge()}stLedge(){let t=this.input,e=this.ledge;if(this.x=e.x+e.side*.32,this.y=e.y-this.height*.84,this.sf<7)return;let i=-e.side,s=t.stick.x;if(t.buf.jump||t.dirBuf.up){t.consume("jump"),t.consumeDir("up"),this.setState("air"),this.ledge=null,this.y=e.y-this.height*.5,this.vy=this.s.jumpV*1.02,this.vx=i*.07,this.ledgeRegrab=20,vt.jump();return}if(t.buf.attack||t.buf.special)return t.consume("attack"),t.consume("special"),this.startClimb("attack");if(t.buf.shield)return t.consume("shield"),this.startClimb("roll");if(te(s)===i&&Math.abs(s)>.6)return this.startClimb("climb");if(t.dirBuf.down||te(s)===-i&&Math.abs(s)>.6||this.sf>330){t.consumeDir("down"),this.setState("air"),this.ledge=null,this.x+=e.side*.15,this.ledgeRegrab=24;return}}startClimb(t){this.climbAction=t,this.climbFrom={x:this.x,y:this.y},this.setState("ledgeclimb")}stLedgeClimb(){let t=this.ledge,e=16,i=Math.min(1,this.sf/e),s=t.x-t.side*.55;this.x=this.climbFrom.x+(s-this.climbFrom.x)*i,this.y=this.climbFrom.y+(t.y-this.climbFrom.y)*Math.min(1,i*1.6),this.sf>=e&&(this.x=s,this.y=t.y,this.grounded=!0,this.surface=Ja,this.ledge=null,this.vx=0,this.vy=0,this.climbAction==="attack"?this.startMove("ledgeattack"):this.climbAction==="roll"?this.startRoll(-t.side):this.setState("idle"))}grabOpponent(t){this.state==="attack"&&(this.move=null,this.setState("grabbing"),this.grabbing=t,this.grabTimer=Math.min(240,80+t.damage*.9),t.move=null,t.setState("grabbed"),t.grabbedBy=this,t.vx=t.vy=t.kx=t.ky=0,t.pendingLaunch=null,t.facing=-this.facing,this.vx=0,vt.grab())}holdVictim(t){let e=this.grabbing;if(!e)return;let i=t||this.def.grabHold;e.x=this.x+this.facing*i[0],e.y=this.y+i[1],e.facing=-this.facing,e.grounded=!1}stGrabbing(){let t=this.grabbing,e=this.input;if(!t||t.state!=="grabbed")return this.grabbing=null,this.setState("idle");if(this.friction(2),this.holdVictim(),this.grabTimer-=1+t.input.mash*5,this.grabTimer<=0)return this.releaseGrab();if(this.sf<6)return;if(e.buf.attack)return e.consume("attack"),this.startMove("pummel",!0);let{x:i,y:s}=e.stick;if(s>.6)return this.startMove("uthrow",!0);if(s<-.6)return this.startMove("dthrow",!0);if(Math.abs(i)>.6)return this.startMove(te(i)===this.facing?"fthrow":"bthrow",!0);if(e.cBuf){let r=e.cDir;return e.cBuf=0,r.y>.6?this.startMove("uthrow",!0):r.y<-.6?this.startMove("dthrow",!0):this.startMove(te(r.x)===this.facing?"fthrow":"bthrow",!0)}}releaseGrab(){let t=this.grabbing;this.grabbing=null,t&&t.state==="grabbed"&&(t.grabbedBy=null,t.setState("hitstun"),t.hitstun=18,t.tumble=!1,t.y=this.y,t.grounded=this.grounded,t.surface=this.surface,t.kx=this.facing*.14,t.ky=0,t.grounded||(t.vy=.1)),this.landing(14),this.vx=-this.facing*.08}stGrabbed(){let t=this.grabbedBy;(!t||t.state!=="grabbing"&&!(t.state==="attack"&&t.grabbing===this))&&(this.grabbedBy=null,this.setState("air"))}doThrow(t){let e=this.grabbing;e&&(this.grabbing=null,e.grabbedBy=null,e.setState("hitstun"),this.battle.applyHit(this,e,{dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,sfx:"hit",throwHit:!0},e.x,e.y+e.height*.5,this.facing),vt.throwS())}startMove(t,e=!1){let i=this.def.moves[t];return i?(e||this.grabbing&&t!=="pummel"&&(this.grabbing=null),this.state==="attack"&&(this.endHook(),Ac(this.model.rig)),this.state="attack",this.sf=0,this.tapTimer=0,this.move=i,this.moveName=t,this.mf=-1,this.hitIds=new Set,this.charge=0,this.charging=!1,this.chargeDone=!1,this.vars={},this.hidden=!1,i.onStart&&i.onStart(this),this.updateMove(),!0):!1}chargeHeld(){let t=this.chargeBtn;return t?this.input.raw[t]:!1}get chargeRatio(){return this.move&&this.move.charge?this.charge/this.move.charge.max:0}updateMove(){let t=this.move;if(!t)return this.setState(this.grounded?"idle":"air");if(this.charging){if(this.chargeHeld()&&this.charge<t.charge.max){this.charge++,this.moveGravity(t),this.grounded?this.friction():this.drift(.4),this.charge%6===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.6,this.def.color,1,.5),this.charge%12===0&&vt.charge(),t.onCharge&&t.onCharge(this);return}this.charging=!1}this.mf++;let e=this.mf;if(t.charge&&e===t.charge.f&&!this.chargeDone&&(this.chargeDone=!0,this.chargeHeld()&&(this.charging=!0,this.charge=0)),this.moveGravity(t),this.grounded?t.keepVel||this.friction(t.friction??1):t.noDrift||this.drift(t.drift??(t.aerial?1:.6)),t.aerial&&this.fastfallCheck(),t.sfx&&t.sfx[0]===e&&vt[t.sfx[1]]&&vt[t.sfx[1]](t.sfx[2]??.5),t.hold&&this.grabbing?this.holdVictim(t.hold(e,this)):this.grabbing&&(this.moveName==="pummel"||t.throwHit)&&this.holdVictim(),t.pummelAt===e&&this.grabbing){let i=this.grabbing;i.damage=Math.min(999,i.damage+t.pummelDmg),this.stats.dealt+=t.pummelDmg,i.stats.taken+=t.pummelDmg,i.flashT=6,this.battle.effects.hitSpark(i.x,i.y+i.height*.6,this.color,.2),vt.hit(.2),this.hitlag=4,i.hitlag=0}if(t.throwHit&&e===t.throwAt&&this.doThrow(t.throwHit),t.onFrame&&t.onFrame(this,e),!(this.state!=="attack"||this.move!==t)){if(t.next&&Qa(e,t.nextWin)&&this.input.buf.attack){this.input.consume("attack"),this.startMove(t.next);return}t.iasa&&e>=t.iasa&&this.grounded&&this.groundActionsLite()||e>=t.total&&this.endMove()}}groundActionsLite(){let t=this.input;return t.buf.attack||t.buf.special||t.buf.jump||t.buf.smash||t.raw.shield||Math.abs(t.stick.x)>.7?(this.move=null,this.setState("idle"),this.stIdle(),!0):!1}moveGravity(t){t.noGravity&&Qa(this.mf,t.noGravity)&&(this.noGrav=!0),t.fall!==void 0&&(this.gravMult=t.fall)}endMove(){let t=this.move;if(this.endHook(),this.moveName==="pummel"&&this.grabbing){this.move=null,this.state="grabbing",this.sf=10,Ac(this.model.rig);return}this.move=null,this.grounded?this.setState(t.endState||"idle"):(this.setState(t.helpless?"helpless":"air"),t.helpless&&(this.helplessLag=t.helplessLag||20))}landDuringMove(t){let e=this.move;if(e.onLand&&e.onLand(this)==="continue"||e.landContinue)return;let i;if(e.aerial){let s=e.acBefore!==void 0&&this.mf<e.acBefore||e.acAfter!==void 0&&this.mf>=e.acAfter;if(i=s?4:e.landLag||8,!s&&e.landHit){this.startMove(e.landHit);return}}else e.helpless?i=e.helplessLag||20:i=e.landLag||10;this.endHook(),this.move=null,this.landing(i),vt.land()}activeHitboxes(){let t=[],e=this.move;if(this.state!=="attack"||!e||!e.hit||this.charging)return t;let i=this.mf;for(let s of e.hit){if(i<s.f[0]||i>s.f[1])continue;let r=s.x,a=s.y;if(s.path){let o=s.f[1]>s.f[0]?(i-s.f[0])/(s.f[1]-s.f[0]):0;r=s.path[0][0]+(s.path[1][0]-s.path[0][0])*o,a=s.path[0][1]+(s.path[1][1]-s.path[0][1])*o}t.push({h:s,x:this.x+r*this.facing,y:this.y+a,r:s.r})}return t}hurtbox(){let t=this.s,e=t.height,i=t.radius;return(this.state==="crouch"||this.state==="attack"&&this.moveName==="dtilt")&&(e*=.65),this.state==="knockdown"&&(e*=.4),{ax:this.x,ay:this.y+i,bx:this.x,by:this.y+e-i,r:i}}isIntangible(){if(this.invuln>0)return!0;let t=this.sf;switch(this.state){case"roll":return t>=3&&t<=18;case"spotdodge":return t>=3&&t<=16;case"airdodge":return t>=2&&t<=(this.adDir?20:24);case"getup":return t<=20;case"tech":return t<=18;case"ledgeclimb":return!0;case"respawn":case"dead":return!0;case"attack":{let e=this.move;return!!(e&&e.intang&&Qa(this.mf,e.intang))}}return!1}inWindow(t){return this.state==="attack"&&this.move&&this.move[t]&&Qa(this.mf,this.move[t])}receiveKnockback(t,e,i,s,r){let a=Math.min(20,Math.floor(s*.45+4));if(this.grabbing&&this.releaseGrabQuiet(),this.grabbedBy){let o=this.grabbedBy;this.grabbedBy=null,o.grabbing===this&&(o.grabbing=null)}return this.endHook(),this.move=null,this.setState("hitstun"),this.pendingLaunch={kb:t,ang:e,dir:i},this.hitlag=a,this.hitstun=Math.floor(t*.4),this.tumble=t>=80,this.vx=0,this.vy=0,this.kx=0,this.ky=0,this.fastfall=!1,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.charging=!1,this.flashT=8,this.lastHitBy=r,this.lastHitTimer=600,a}releaseGrabQuiet(){let t=this.grabbing;this.grabbing=null,t&&t.state==="grabbed"&&(t.grabbedBy=null,t.setState("air"),t.vy=.12)}launch(){let{kb:t,ang:e,dir:i,link:s}=this.pendingLaunch;if(this.pendingLaunch=null,s){this.kx=s.vx+(s.x+s.facing*.35-this.x)*.12,this.ky=Math.max(0,s.vy)+(s.y+1.3-this.y)*.12,this.vy=0,this.ky>.01&&(this.grounded=!1,this.surface=null,this.y+=.02);return}let r=e*ks,a=Math.cos(r)*i,o=Math.sin(r);if(t>30){let h=this.input.stick.x,d=this.input.stick.y,f=Se(h*-o+d*a,-1,1)*15*ks,g=Math.cos(f),y=Math.sin(f),m=a*g-o*y,p=a*y+o*g;a=m,o=p}let l=a*t*to,c=o*t*to;this.grounded&&(c<0&&(t>70?c=-c*.75:c=0),c>.03||this.tumble?(this.grounded=!1,this.surface=null,this.y+=.02):c=0),this.kx=l,this.ky=c}physics(){let t=this.s,e=this.state;if(!(e==="ledge"||e==="grabbed"||e==="ledgeclimb"||e==="respawn"||e==="dead"||e==="trapped")){if(this.grounded)this.vy=0,this.kx&&(this.kx=di(this.kx,0,Cc+t.traction*.8)),this.ky=0;else{this.noGrav?this.noGrav:this.fastfall&&this.vy<=0?this.vy=-t.fastFall:this.vy=Math.max(this.vy-t.gravity*this.gravMult,-t.fallSpeed);let i=Math.hypot(this.kx,this.ky);if(i>0){let s=Math.max(0,i-Cc);this.kx*=s/i,this.ky*=s/i}}this.px=this.x,this.py=this.y,this.x+=this.vx+this.kx,this.y+=this.vy+this.ky}}collide(){let t=this.state;if(t==="ledge"||t==="grabbed"||t==="ledgeclimb"||t==="respawn"||t==="dead"||t==="trapped")return;let e=this.px,i=this.py,s=this.battle.stage.activePlatforms;if(this.grounded){let r=this.surface||Ja;this.y=r.y,(this.x<r.x1||this.x>r.x2)&&(zy.has(t)||t==="attack"&&this.move&&this.move.canLeaveGround?(this.grounded=!1,this.surface=null,t==="attack"||t==="hitstun"||t==="tumble"||(t==="knockdown"?this.setState("air"):t!=="jumpsquat"&&this.setState("air"))):(this.x=Se(this.x,r.x1,r.x2),this.vx=0,this.kx=0))}else{let r=this.y-i;if(r<=0){let a=Ie.main;if(i>=a.top-1e-6&&this.y<a.top&&Math.abs(this.x)<=a.half+.08){this.x=Se(this.x,-a.half,a.half),this.land(Ja,r);return}if(this.dropTimer<=0&&!(this.input.stick.y<-.6&&(t==="air"||t==="tumble")&&this.fastfall)){for(let o of s)if(i>=o.y-1e-6&&this.y<o.y&&this.x>=o.x1-.05&&this.x<=o.x2+.05){this.x=Se(this.x,o.x1,o.x2),this.land(o,r);return}}}this.resolveSolid(e,i)}}resolveSolid(t,e){let i=this.height,s=Ie.main;for(let r=0;r<2;r++){let a=!1;for(let o of[.05,.5,.95]){let l=this.y+i*o,c=yu(l);if(c<0||c+Su-Math.abs(this.x)<=0)continue;let d=e+i;if(Math.abs(this.x)<s.bottomHalf+Su&&d<=s.bottom+.25&&o>.5)this.y=s.bottom-i-.01,this.vy>0&&(this.vy=0),this.ky>0&&(this.ky=this.state==="hitstun"?-this.ky*.4:0);else{let u=te(this.x)||te(t)||1;this.x=u*(c+Su+.002),te(this.vx)===-u&&(this.vx=0),te(this.kx)===-u&&(this.kx=this.state==="hitstun"?-this.kx*.4:0)}a=!0;break}if(!a)break}}land(t,e){let i=this.s;this.grounded=!0,this.surface=t,this.y=t.y,this.vy=0,this.jumpsLeft=i.airJumps,this.fastfall=!1,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.ledgeIntangUsed=!1,this.djTimer=0;let s=this.state;if(s==="hitstun"||s==="tumble"){if(s==="tumble"||this.tumble){if(this.ky=0,this.techWindow>0){this.techWindow=0,this.kx=0,vt.tech(),this.battle.effects.sparkle(this.x,this.y+.5,16777215,6,.6);let a=this.input.stick.x;Math.abs(a)>.5?this.startRoll(te(a)):this.setState("tech");return}this.kx*=.5,this.setState("knockdown"),this.battle.effects.dust(this.x,this.y,6,0),vt.land(),this.battle.shakeCam(.08);return}this.ky=0;return}if(this.ky=0,this.kx*=.5,s==="attack")return this.landDuringMove(e);if(s==="shieldbreak"){this.setState("dizzy"),this.dizzyT=200;return}if(s==="helpless"){this.landing(this.helplessLag),vt.land();return}if(s==="airdodge"){this.landing(this.adDir?10:3);return}s!=="grabbed"&&(this.landing(3),vt.land(),e<-.12&&this.battle.effects.dust(this.x,this.y,4,0))}stTrapped(){let t=this.trap;if(!t||!t.by||t.by.state!=="attack"||!t.by.move||!t.by.move.fs)return this.trap=null,this.setState("air");this.x+=(t.x-this.x)*.08,this.y+=(t.y-this.height*.5-this.y)*.08}die(){this.endHook(),this.state="dead",this.move=null,this.deadTimer=80,this.stocks--,this.stats.falls++,this.fsReady&&(this.fsReady=!1,this.battle.app.hud.setFs(this.slot,!1)),this.model.root.visible=!1,this.shieldMesh.visible=!1,this.grabbing=null,this.grabbedBy&&(this.grabbedBy.grabbing=null,this.grabbedBy=null)}respawn(){let t=Ie.respawn;this.reset(t.x,t.y,this.slot%2===0?1:-1),this.damage=0,this.state="respawn",this.grounded=!1,this.surface=null,this.model.root.visible=!0,this.model.update(1/60,{vx:0,vy:0,snap:!0})}stRespawn(){let t=this.input,e=Ie.respawn;this.x=e.x,this.y=e.y;let i=t.buf.jump||t.buf.attack||t.buf.special||t.buf.shield||Math.abs(t.stick.x)>.5||t.stick.y<-.5;(this.sf>40&&i||this.sf>300)&&(this.setState("air"),this.invuln=120,this.vy=0,this.jumpsLeft=this.s.airJumps)}animate(){let t=this.def.anims,e=this.state,i,s=.3,r=this.sf;switch(e){case"idle":case"respawn":i=t.idle(this.animT),s=.22;break;case"walk":this.phase+=Math.abs(this.vx)*4.2,i=t.walk(this.phase);break;case"dash":case"run":this.phase+=Math.abs(this.vx)*3.2,i=t.run(this.phase),s=.4;break;case"skid":case"turn":i=t.skid(),s=.4;break;case"crouch":i=t.crouch(this.animT),s=.4;break;case"jumpsquat":case"land":i=t.squat(),s=.55;break;case"air":case"tumble":if(e==="tumble"){i=t.tumbleIdle(this.animT),s=.2;break}this.djTimer>0?(i=t.djump(24-this.djTimer),s=.45):i=this.vy>.02?t.jump():t.fall(this.animT),s=this.djTimer>0?.45:.15;break;case"helpless":i=t.helpless(this.animT),s=.2;break;case"hitstun":i=this.tumble?t.tumble(this.animT):t.hurt(),s=this.tumble?.5:.6;break;case"shield":case"shieldstun":case"shieldoff":i=t.shield(),s=.5;break;case"roll":i=t.roll(r,this.rollDir===this.facing),s=.6;break;case"spotdodge":i=t.spotdodge(r),s=.5;break;case"airdodge":i=t.airdodge(r),s=.4;break;case"ledge":i=t.ledge(this.animT),s=.4;break;case"ledgeclimb":i=t.climb(r),s=.5;break;case"knockdown":i=t.knockdown(),s=.4;break;case"getup":case"tech":i=t.getup(r),s=.4;break;case"grabbing":i=t.hold(),s=.4;break;case"grabbed":case"trapped":i=t.grabbed(this.animT),s=.4;break;case"shieldbreak":case"dizzy":i=t.dizzy(this.animT),s=.3;break;case"victory":i=t.victory(r),s=.3;break;case"frozen":i=t.idle(this.animT),s=.2;break;case"attack":{let a=this.move;i=a&&a.anim?sf(a.anim,Math.max(0,this.mf)):t.idle(this.animT),s=a&&a.alpha!==void 0?a.alpha:.55;break}default:i=t.idle(this.animT)}Ka(this.model.rig,i,s)}render(t,e){let i=this.model;if(this.state==="dead"){i.root.visible=!1,i.shadow&&(i.shadow.visible=!1),this.shieldMesh.visible=!1,this.platMesh.visible=!1,this.trail.update(null,!1);return}i.root.visible=!this.hidden;let s=this.prevX+(this.x-this.prevX)*t,r=this.prevY+(this.y-this.prevY)*t,a=0,o=0;this.hitlag>0&&this.pendingLaunch&&(a=qt(-.07,.07),o=qt(-.04,.04)),i.root.position.set(s+a,r+o,0),this.updateShadow(s,r);let l=this.facing*rf;this.visYaw+=(l-this.visYaw)*.35,i.root.rotation.y=this.visYaw;let c=0,h=new gt(1,1,1);this.flashT>0?(c=.7*(this.flashT/8),h.set(16777215)):this.fsReady?(c=.3+.2*Math.sin(this.animT*.3),h.setHSL(this.animT*.01%1,1,.6)):this.state==="attack"&&this.move&&this.move.fs?(c=.25,h.set(this.def.color)):this.charging&&!(this.move&&this.move.noChargeFlash)?(c=.25+.25*Math.sin(this.animT*.6),h.set(16777130)):this.invuln>0&&this.state!=="respawn"&&this.state!=="ledge"?(c=Math.floor(this.animT/3)%2*.5,h.set(16777215)):this.state==="respawn"?(c=.25+.15*Math.sin(this.animT*.2),h.copy(this.color)):this.state==="helpless"?(c=.35,h.set(0)):this.inWindow("counter")||this.inWindow("reflect")?(c=.35,h.set(10479871)):this.inWindow("armor")&&(c=.3,h.set(16765024)),i.setFlash(h,c),i.update(e,{vx:this.vx+this.kx,vy:this.vy+this.ky,air:!this.grounded});let d=this.move,u=d&&d.trail&&this.state==="attack"&&Qa(this.mf,d.trailF||[0,999])&&!this.charging;if(this.trail.update(u?i.trails[d.trail]:null,u),this.state==="shield"||this.state==="shieldstun"){let f=.35+.75*(this.shieldHP/Eu);this.shieldMesh.visible=!0,this.shieldMesh.position.set(s,r+this.height*.52,0),this.shieldMesh.scale.setScalar(f*(this.height/1.8)),this.shieldMesh.material.opacity=.28+.2*(this.state==="shieldstun"?1:0)}else this.shieldMesh.visible=!1;this.state==="respawn"?(this.platMesh.visible=!0,this.platMesh.position.set(s,r-.09,0),this.platMesh.rotation.y+=.05):this.platMesh.visible=!1}updateShadow(t,e){let i=this.model.shadow;if(!i)return;let s=null;Math.abs(t)<=Ie.main.half+.1&&e>=-.05&&(s=0);for(let l of this.battle.stage.activePlatforms)t>=l.x1-.1&&t<=l.x2+.1&&e>=l.y-.05&&(s===null||l.y>s)&&(s=l.y);let r=this.state==="dead"||s===null||this.hidden;if(i.visible=!r,r)return;let a=Math.max(0,e-s),o=Math.max(.25,1-a/6);i.position.set(t,s+.012,.05),i.scale.setScalar(o),i.children[0].material.opacity=.75*o}dispose(){let t=this.battle.scene;t.remove(this.model.root);for(let e of this.model.worldObjects)t.remove(e);this.model.shadow&&t.remove(this.model.shadow),this.model.dispose(),this.trail.dispose(),t.remove(this.shieldMesh),t.remove(this.platMesh);for(let e of[this.shieldMesh,this.platMesh])e.geometry.dispose(),e.material.dispose()}}});var lf,Pc,cf=We(()=>{Tc();ja();dn();lf=["jump","attack","special","shield","smash","grab"],Pc=class{constructor(t,e,i=5){this.b=t,this.f=e,this.level=Se(i,1,9);let s=this.level;this.react=Math.max(2,Math.round(26-s*2.7)),this.defendP=.04+s*.075,this.techP=s*.1,this.diP=s*.1,this.aggro=.35+s*.06,this.q={},this.last=fn(),this.sx=0,this.sy=0,this.flickQ=null,this.timer=qi(10,30),this.busy=0,this.ledgeWait=-1,this.techTried=!1,this.jumpCd=0,this.aimAfter=null,this.diSet=!1,this.wander=0}press(t,e=1){this.q[t]={n:e,gap:this.last[t]?1:0}}flick(t,e,i=3){this.flickQ={x:t,y:e,n:i,gap:1}}holding(t){return!!this.q[t]}update(){let t=fn();this.think();for(let s of lf){let r=this.q[s];if(r){if(r.gap>0){r.gap--;continue}t[s]=!0,--r.n<=0&&delete this.q[s]}}let e=this.sx,i=this.sy;if(this.flickQ){let s=this.flickQ;s.gap>0?(s.gap--,e=0,i=0):(e=s.x,i=s.y,--s.n<=0&&(this.flickQ=null))}return t.x=Se(e,-1,1),t.y=Se(i,-1,1),this.last=t,t}opponent(){let t=null,e=1e9;for(let i of this.b.fighters){if(i===this.f||i.state==="dead"||i.stocks<=0)continue;let s=Math.abs(i.x-this.f.x)+Math.abs(i.y-this.f.y);s<e&&(e=s,t=i)}return t}think(){let t=this.f;if(this.jumpCd>0&&this.jumpCd--,this.b.phase!=="fight"){this.sx=0,this.sy=0;return}let e=t.state,i=this.opponent();if(this.aimAfter){--this.aimAfter.n<=0&&(this.sx=this.aimAfter.x,this.sy=this.aimAfter.y,this.aimAfter=null);return}switch(e!=="hitstun"&&(this.diSet=!1),e!=="hitstun"&&e!=="tumble"&&(this.techTried=!1),e){case"dead":this.sx=0,this.sy=0;return;case"respawn":this.sx=0,this.sy=0,t.sf>50+qi(0,60)-this.level*5&&this.flick(0,-1,2);return;case"grabbed":case"dizzy":Ee(.1+this.level*.04)&&this.press(lf[qi(1,2)]),Ee(.15)&&this.flick(Ee(.5)?1:-1,0,1);return;case"grabbing":return this.doThrow(i);case"ledge":return this.doLedge();case"knockdown":if(t.sf>16&&Ee(.1+this.level*.02)){let r=Math.random();r<.35?this.press("attack"):r<.65?this.flick(-te(t.x)||1,0,2):this.flick(0,1,2)}return;case"hitstun":case"tumble":return this.doHitstun()}if(this.ledgeWait=-1,e==="attack"||e==="airdodge"||e==="roll"||e==="spotdodge"||e==="ledgeclimb"){let r=t.def.id==="illumine"&&t.moveName==="upb"&&t.mf<=7;!t.grounded&&this.offstage()&&!r&&this.steerToLedge();return}if(!t.grounded&&this.offstage())return this.recover();if(e==="helpless"){this.offstage()?this.steerToLedge():this.sx=0;return}if(e==="shield"&&this.holding("shield")){i&&i.state!=="attack"&&Math.abs(i.x-t.x)<1.4&&Ee(.25+this.level*.05)&&(this.q={},this.press("attack"));return}if(this.busy>0){this.busy--,this.edgeSafety();return}if(--this.timer>0){this.edgeSafety();return}if(this.timer=this.react+qi(0,Math.max(1,10-this.level)),!i){this.sx=Math.abs(t.x)>1.5?-te(t.x):0;return}if(i.state==="respawn"||i.invuln>30){this.neutralWait(i);return}if(this.defend(i)||t.fsReady&&this.tryFinal(i))return;let s=this.b.ball;if(!(s&&s.life>0&&!t.fsReady&&Math.abs(s.x)<Ie.main.half+.5&&this.chaseBall(s,i))){if(this.opOffstage(i))return this.edgeguard(i);t.grounded?this.groundPlay(i):this.airPlay(i),this.edgeSafety()}}tryFinal(t){let e=this.f;if(t.state==="dead"||t.state==="respawn"||t.invuln>0)return!1;let i=t.x-e.x,s=t.y-e.y;return!(e.def.id==="illumine"?Math.hypot(i,s)<4.8:Math.abs(s)<1.8&&Math.abs(i)<14)||!Ee(.5)?!1:(this.sx=te(i)*.6,this.sy=0,this.press("special"),this.busy=20,!0)}chaseBall(t,e){let i=this.f,s=t.x-i.x,r=t.y-(i.y+i.height*.5),a=Math.abs(e.x-i.x)+Math.abs(e.y-i.y);if(Math.abs(s)+Math.abs(r)>a+3&&!Ee(.3))return!1;let l=te(s)||i.facing;return this.sy=0,Math.abs(s)<1.5&&Math.abs(r)<1.4?(i.grounded&&r>.7?(this.sx=0,this.sy=1,this.press("attack")):i.grounded?(this.sx=l,this.press("attack")):(this.sx=(l===i.facing,l),this.sy=r>.8?1:r<-.8?-1:0,this.press("attack")),this.after(()=>{this.sy=0},3),this.busy=12,!0):(this.sx=l,r>1.3&&(i.grounded||i.jumpsLeft>0&&i.vy<.02)&&this.jumpCd<=0&&(this.press("jump",i.grounded?8:1),this.jumpCd=16),this.edgeSafety(),this.busy=3,!0)}steerToLedge(){let t=this.f,e=te(t.x)||1,r=(t.y<-.3?e*(Ie.main.half+.45):e*(Ie.main.half-1))-t.x;this.sx=Math.abs(r)<.15?0:Math.max(-1,Math.min(1,r*2)),this.sy=0}offstage(){let t=this.f;return Math.abs(t.x)>Ie.main.half+.1||t.y<-.4}opOffstage(t){return!t.grounded&&(Math.abs(t.x)>Ie.main.half+.4||t.y<-.8)||t.state==="ledge"}edgeSafety(){let t=this.f;t.grounded&&Math.abs(t.x)>Ie.main.half-1.1&&te(this.sx)===te(t.x)&&(this.sx=0)}neutralWait(t){let e=this.f,i=t.x-e.x;this.sx=Math.abs(i)>4?te(i)*.5:0,this.sy=0,e.grounded&&Ee(.02)&&this.press("jump")}defend(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y;for(let o of this.b.projectiles){if(o.owner===e)continue;let l=e.x-o.x;if(Math.abs(l)<3.2&&te(o.vx)===te(l)&&Math.abs(o.y-(e.y+.9))<1.2&&Ee(this.defendP))return e.def.id==="illumine"&&Ee(.5)?(this.sx=0,this.sy=-1,this.press("special"),this.aimAfter={n:3,x:0,y:0},!0):e.grounded&&Ee(.5)?(this.press("shield",16),!0):(this.press("jump"),!0)}if(t.state!=="attack"||!t.move||!t.move.hit||s>2.8||Math.abs(r)>2.2)return!1;let a=Math.min(...t.move.hit.map(o=>o.f[0]));if(t.mf>a+2||t.move.hit.every(o=>o.type==="grab")||!Ee(this.defendP))return!1;if(e.grounded){let o=Math.random();e.def.counterMove&&o<.15&&this.level>=4?(this.sx=0,this.sy=-1,this.press("special"),this.aimAfter={n:3,x:0,y:0}):o<.65?this.press("shield",qi(12,24)):o<.8?(this.press("shield",3),this.flick(0,-1,2)):o<.92?(this.press("shield",3),this.flick(-te(i)||1,0,2)):this.press("jump")}else Ee(.5)&&this.press("shield");return this.busy=6,!0}groundPlay(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y,a=te(i)||e.facing,o=e.def.id==="illumine",l=o?1.35:1.9,c=t.damage>(o?105:85)-this.level*2;if(this.sy=0,r>1.6&&s<1.4){Ee(.5)?(this.sx=0,this.sy=0,this.press("smash"),this.sy=1,this.busy=20):(this.sx=a*.4,this.press("jump",r>2.5?8:1),this.busy=4);return}if(r>2&&s<4&&Ee(.6)){this.sx=a,this.press("jump",10),this.busy=8;return}if(r<-1.5&&e.onPlatform()&&s<4){this.sx=0,this.flick(0,-1,2),this.busy=4;return}if(s<l&&Math.abs(r)<1.3){this.sx=0;let h=Math.random();if(t.state==="shield"&&h<.5){this.press("grab"),this.busy=20;return}if(c&&h<.55){this.sx=a,this.sy=0,this.press("smash",qi(1,12)),this.busy=30;return}if(h<.2){this.sx=0,this.press("attack"),this.after(()=>this.press("attack"),7),this.after(()=>this.press("attack"),14),this.busy=22;return}if(h<.45){this.sx=a,this.press("attack"),this.busy=18;return}if(h<.6){this.sx=0,this.sy=-1,this.press("attack"),this.busy=14,this.after(()=>{this.sy=0},3);return}if(h<.72){this.press("grab"),this.busy=20;return}if(h<.85&&r>.3){this.sy=1,this.sx=0,this.press("attack"),this.busy=16,this.after(()=>{this.sy=0},3);return}this.sx=a,this.press("smash",qi(1,20)),this.busy=30;return}if(o&&s>5&&Ee(.18)&&Math.abs(r)<1.5){e.facing===a?this.sx=0:this.sx=a*.3,this.press("special",Ee(.4)?qi(10,50):1),this.busy=30;return}if(e.def.id==="dragon"&&s>1.2&&s<3.4&&Math.abs(r)<1&&Ee(.22)){this.sx=e.facing===a?0:a*.3,this.sy=0,this.press("special",qi(15,45)),this.busy=40;return}if(!o&&s>3.2&&s<6.5&&Ee(.08)&&Math.abs(r)<1){this.sx=a,this.press("special"),this.busy=40;return}if(s<4.2&&s>1.6&&Ee(.28*this.aggro)){this.sx=a,this.press("jump"),this.busy=3,this.after(()=>{this.sx=a,this.press("attack")},o?6:8);return}if(s<3.2&&s>1.8&&Ee(.12)){this.sx=a,this.after(()=>this.press("attack"),4),this.busy=20;return}this.sx=s>2.2?a:a*.5,Ee(.03*(10-this.level))&&(this.sx=0)}airPlay(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y,a=te(i)||e.facing;if(this.sx=a,this.sy=0,s<1.9&&Math.abs(r)<1.8){r<-.8&&s<.9?(this.sx=0,this.sy=-1):r>.8&&s<1?(this.sx=0,this.sy=1):a!==e.facing?this.sx=a:s<.9?this.sx=0:this.sx=a,this.press("attack"),this.after(()=>{this.sy=0},3),this.busy=10;return}r>1.5&&e.jumpsLeft>0&&Ee(.2)&&this.jumpCd<=0&&(this.press("jump"),this.jumpCd=20),r<-1&&e.vy<0&&Ee(.3)&&this.flick(a*.3,-1,2)}edgeguard(t){let e=this.f,i=te(t.x)||1,s=i*(Ie.main.half-1.3);if(!e.grounded){this.sx=te(s-e.x);return}if(Math.abs(e.x-s)>.5){this.sx=te(s-e.x);return}if(this.sx=0,t.state==="ledgeclimb"||t.state==="getup"||t.state==="attack"&&t.moveName==="ledgeattack"){Ee(.3+this.level*.05)&&(this.press("shield",10),this.busy=10);return}let r=Math.abs(t.x-e.x),a=t.y-e.y;if(t.state!=="ledge"&&r<2.2&&a>-1.5&&a<1.5&&Ee(.3+this.level*.05)){this.sx=i,this.press("smash",qi(1,6)),this.busy=30;return}if(e.def.id==="illumine"&&t.state!=="ledge"&&r>3&&Ee(.1)){this.sx=e.facing===i?0:i*.3,this.press("special"),this.busy=30;return}this.level>=6&&t.state!=="ledge"&&t.y>-3&&r<4&&Ee(.05*(this.level-5))&&(this.sx=i,this.press("jump"),this.after(()=>{this.sx=i,this.press("attack")},8),this.busy=30)}recover(){let t=this.f,e=te(t.x)||1,i=Ie.ledges.find(o=>o.side===e);this.sx=-e,this.sy=0;let s=t.vy+t.ky,r=Math.abs(t.x)-Ie.main.half;if(s>.04&&t.y>-1)return;let a=t.def.id==="illumine";if(t.jumpsLeft>0&&this.jumpCd<=0&&(t.y<.8||r>2.5)&&(t.y>-4.5||t.upBUsed||a)){this.press("jump"),this.jumpCd=a?16:22;return}if(!t.upBUsed&&(t.y<-1.4||r>3.2)){if(r>(a?5:4.2)&&!t.sideBUsed&&t.y>(a?-2.6:-4.2)&&t.y<1.5){this.sx=-e,this.sy=0,this.press("special");return}if(t.y<-.9||r>4)if(this.sx=-e*.3,this.sy=1,this.press("special"),a){let o=i.x-e*.2,l=i.y+.4,c=o-t.x,h=l-t.y,d=Math.hypot(c,h)||1;if(c/=d,h/=d,d>5.4){h=Math.max(h,.55);let u=Math.hypot(c,h);c/=u,h/=u}this.aimAfter={n:2,x:c,y:h}}else this.after(()=>{this.sx=-e*.8,this.sy=0},3)}}doLedge(){let t=this.f;if(this.sx=0,this.sy=0,this.ledgeWait<0&&(this.ledgeWait=qi(6,50-this.level*3)),--this.ledgeWait>0)return;let e=-t.ledge.side,i=Math.random();i<.4?this.flick(e,0,3):i<.65?this.press("jump"):i<.85?this.press("attack"):this.press("shield"),this.ledgeWait=60}doHitstun(){let t=this.f;if(t.pendingLaunch&&!this.diSet)if(this.diSet=!0,Ee(this.diP)){let s=-te(t.x)||1;this.sx=s*.8,this.sy=.6}else this.sx=qt(-1,1)*.3,this.sy=0;let e=t.vy+t.ky,i=Math.abs(t.x)<=Ie.main.half?0:-99;if(!this.techTried&&(t.tumble||t.state==="tumble")&&e<0&&t.y-i<1.2+Math.abs(e)*4&&(this.techTried=!0,Ee(this.techP)&&(this.press("shield"),this.sx=Ee(.5)?qt(-1,1):0)),t.state==="tumble"){if(this.offstage())return this.recover();Ee(.05)&&this.press("jump")}}doThrow(t){let e=this.f;if(e.sf<8+qi(0,10))return;let i=te(e.x)||e.facing,s;t&&t.damage>90&&Math.abs(e.x)>4?s=i===e.facing?[e.facing,0]:[-e.facing,0]:Ee(.3)?s=[0,-1]:Ee(.3)?s=[0,1]:Ee(.3)?this.press("attack"):s=[e.facing,0],s&&this.flick(s[0],s[1],3)}after(t,e){this.b.later(e,t)}}});function Pn(n,t,e,i=12){let s=[];for(let a=0;a<=6;a++){let o=-Math.PI/2+a/6*(Math.PI/2);s.push(new mt(Math.max(1e-4,e*Math.cos(o)),-n+e*Math.sin(o)))}for(let a=1;a<=6;a++){let o=a/6*(Math.PI/2);s.push(new mt(Math.max(1e-4,t*Math.cos(o)),t*Math.sin(o)))}return new As(s,i)}function Hs(n){let t=new Set;n.traverse(e=>{e.geometry&&!t.has(e.geometry)&&(t.add(e.geometry),e.geometry.dispose());let i=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let s of i)t.has(s)||s.userData.shared||(t.add(s),s.dispose())})}var Ic,Dc=We(()=>{Ci();Ic=class{constructor({segments:t=16,radial:e=6,segLen:i=.12,radius:s=o=>.05,colors:r,flat:a=.55}){this.n=t+1,this.radial=e,this.segLen=i,this.radius=s,this.flat=a,this.p=[],this.o=[];for(let u=0;u<this.n;u++)this.p.push(new P),this.o.push(new P);let o=this.n*e;this.posArr=new Float32Array(o*3);let l=new Float32Array(o*3),c=new gt;for(let u=0;u<this.n;u++){let f=u/(this.n-1);r(f,c);for(let g=0;g<e;g++){let y=(u*e+g)*3;l[y]=c.r,l[y+1]=c.g,l[y+2]=c.b}}let h=[];for(let u=0;u<this.n-1;u++)for(let f=0;f<e;f++){let g=u*e+f,y=u*e+(f+1)%e,m=g+e,p=y+e;h.push(g,m,y,y,m,p)}let d=new me;this.attr=new Pe(this.posArr,3),this.attr.setUsage(Va),d.setAttribute("position",this.attr),d.setAttribute("color",new Pe(l,3)),d.setIndex(h),this.mesh=new Ft(d,new Me({vertexColors:!0,side:ke})),this.mesh.frustumCulled=!1,this.inited=!1,this._t=new P,this._n=new P,this._b=new P}reset(t,e){for(let i=0;i<this.n;i++)this.p[i].copy(t).addScaledVector(e,i*this.segLen),this.o[i].copy(this.p[i]);this.inited=!0}simulate(t,e,i=.9){let{p:s,o:r,n:a}=this;this.inited||this.reset(t,new P(0,-1,0)),s[0].copy(t),r[0].copy(t);let o=new P;for(let l=1;l<a;l++){let c=s[l],h=(c.x-r[l].x)*i,d=(c.y-r[l].y)*i,u=(c.z-r[l].z)*i;r[l].copy(c),o.set(0,0,0),e(l,l/(a-1),o),c.x+=h+o.x,c.y+=d+o.y,c.z+=u+o.z}for(let l=0;l<3;l++)for(let c=1;c<a;c++){let h=s[c-1],d=s[c],u=d.x-h.x,f=d.y-h.y,g=d.z-h.z,y=Math.hypot(u,f,g)||1e-6,m=this.segLen/y;d.x=h.x+u*m,d.y=h.y+f*m,d.z=h.z+g*m}this.rebuild()}rebuild(){let{p:t,n:e,radial:i,posArr:s}=this,r=this._t,a=this._n,o=this._b;for(let l=0;l<e;l++){let c=t[Math.max(0,l-1)],h=t[Math.min(e-1,l+1)];r.subVectors(h,c).normalize(),a.set(0,0,1).cross(r),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),o.crossVectors(r,a).normalize();let d=l/(e-1),u=this.radius(d),f=(this.waveAmp||0)*d*Math.sin(d*(this.waveFreq||10)-(this.waveT||0)),g=(this.twist||0)*d,y=Math.cos(g),m=Math.sin(g);for(let p=0;p<i;p++){let b=p/i*Math.PI*2,w=Math.cos(b)*u,_=Math.sin(b)*u*this.flat,E=w*y-_*m+f,S=w*m+_*y,A=(l*i+p)*3;s[A]=t[l].x+a.x*E+o.x*S,s[A+1]=t[l].y+a.y*E+o.y*S,s[A+2]=t[l].z+a.z*E+o.z*S}}this.attr.needsUpdate=!0}}});function uf(n=0){let t=hf[n%hf.length],e=new Zt,i={},s={},r=Bi(t.skin,{rough:.78,metal:.04,env:.4,emissive:new gt(t.skin).multiplyScalar(.16)}),a=new gt(t.skin).multiplyScalar(2.2),o=Bi(a,{rough:.88,metal:.02,env:.3,emissive:a.clone().multiplyScalar(.16)});o.map=Yn(512,8,(L,F,st)=>{L.fillStyle="#b4b4b4",L.fillRect(0,0,F,st);let ht=7,Rt=()=>(ht=ht*16807%2147483647)/2147483647;for(let Vt=0;Vt<46;Vt++){let ae=40+Rt()*(F-80),De=4+Rt()*16,Oe=Rt()<.55,Ge=L.createLinearGradient(ae-De,0,ae+De,0),Ze=Oe?"255,255,255":"40,30,50";Ge.addColorStop(0,`rgba(${Ze},0)`),Ge.addColorStop(.5,`rgba(${Ze},${Oe?.52:.36})`),Ge.addColorStop(1,`rgba(${Ze},0)`),L.fillStyle=Ge,L.fillRect(ae-De,0,De*2,st)}},{repeat:[1,1]});let l=xu(t.glow),c=(L,F)=>new gt(L).lerp(new gt(16777215),F).getHex(),h=xu({...t.glow,c1:c(t.glow.c1,.55),c2:c(t.glow.c2,.3),c3:t.glow.c3}),d=Li(t.mark,1.25),u=Li(t.eye,1.7),f=Li(t.curl,1.1),g=[r,o],y=g.map(L=>L.emissive.clone()),m=Be("body",e,0,Uc,0);i.body=m;let p=Be("hips",m);i.hips=p;let b=Be("torso",p);i.torso=b,Y(rt(si([[.001,-.02],[.08,0],[.07,.1],[.05,.22],[.056,.3],[.08,.37],[.098,.42],[.088,.455],[.045,.49],[.023,.515],[.02,.6],[.001,.62]],20),r),b,0,0,0,0,0,0,[1,1,.78]);for(let L of[-1,1])Y(rt(new Yt(1,12,8),d),b,L*.038,.43,.064,0,L*.35,L*-.55,[.024,.012,.007]);for(let L of[-1,1])Y(rt(new Yt(1,10,8),d),b,L*.03,.365,.05,0,L*.4,0,[.008,.009,.005]);let w=Be("head",b,0,.55,0);i.head=w,w.scale.setScalar(.84);let _=[[5e-4,0],[.05,.003],[.09,.024],[.112,.058],[.118,.098],[.119,.135],[.116,.185],[.104,.23],[.076,.264],[5e-4,.28]],E=new rs(_.map(([L,F])=>new mt(L,F))).getPoints(40),S=.94,A=L=>{if(L<=0)return 5e-4;for(let F=1;F<E.length;F++){let st=E[F-1],ht=E[F];if(L<=ht.y)return st.x+(ht.x-st.x)*((L-st.y)/Math.max(1e-6,ht.y-st.y))}return 5e-4};Y(rt(si(E.map(L=>[L.x,L.y]),40),r),w,0,0,0,0,0,0,[1,1,S]);let v=1.2,T=.27,C=Yn(1024,512,(L,F,st)=>{L.clearRect(0,0,F,st);let ht=F/(2*v*.117),Rt=st/T,Vt=new gt(t.eye),ae=(Ge,Ze,mn=1)=>`rgba(${Math.round(Math.min(1,Ge.r*Ze)*255)},${Math.round(Math.min(1,Ge.g*Ze)*255)},${Math.round(Math.min(1,Ge.b*Ze)*255)},${mn})`,De=Vt.clone().lerp(new gt(16777215),.74),Oe=Vt.clone().lerp(new gt(16179455),.62);for(let Ge of[-1,1]){let Ze=Ge*.75,mn=.104;L.save(),L.translate((Ze+v)/(2*v)*F,(1-mn/T)*st),L.scale(ht*Ge,Rt),L.rotate(-.28);let Zn=L.createRadialGradient(0,0,.01,0,0,.06);Zn.addColorStop(0,"rgba(12,4,20,0.4)"),Zn.addColorStop(1,"rgba(12,4,20,0)"),L.fillStyle=Zn,L.beginPath(),L.arc(0,0,.06,0,Math.PI*2),L.fill();let xi=.047;L.beginPath(),L.moveTo(-xi,.014),L.bezierCurveTo(-xi*.7,-.016,xi*.45,-.05,xi*.9,-.026),L.bezierCurveTo(xi*1.35,0,xi*.5,.042,-xi,.014),L.closePath();let yi=L.createLinearGradient(-xi*.6,.024,xi*.7,-.026);yi.addColorStop(0,ae(Oe,.96)),yi.addColorStop(.5,ae(De,.97)),yi.addColorStop(1,ae(De,1.06)),L.fillStyle=yi,L.fill(),L.lineWidth=.0012,L.strokeStyle=ae(Oe,.8,.6),L.stroke();let Oi=L.createRadialGradient(-xi*.25,-.012,0,-xi*.25,-.012,.012);Oi.addColorStop(0,"rgba(255,255,255,0.8)"),Oi.addColorStop(.5,"rgba(255,255,255,0.35)"),Oi.addColorStop(1,"rgba(255,255,255,0)"),L.save(),L.clip(),L.fillStyle=Oi,L.beginPath(),L.arc(-xi*.25,-.012,.012,0,Math.PI*2),L.fill(),L.restore(),L.restore()}});C.flipY=!1;let N=qn(28,16,(L,F,st)=>{let ht=-v+L*2*v,Rt=T*(1-F),Vt=A(Rt)*1.012+8e-4;st.set(Math.sin(ht)*Vt,Rt,Math.cos(ht)*Vt*S)}),k=new Me({map:C,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});Y(rt(N,k),w,0,0,0),Y(rt(new Yt(1,10,6),f),b,0,.548,.026,0,0,0,[.014,.002,.005]);let z=new Zt;z.userData.keep=!0,Y(z,w,0,0,0);let I=(L,F,st)=>{let ht=Math.max(0,Math.min(1,(st-L)/(F-L)));return ht*ht*(3-2*ht)},G=.68,J=1.2,K=.115,ft=L=>L<G?0:Math.pow(Math.sin(Math.min(1,(L-G)/.13)*Math.PI/2),.3),Q=(L,F,st)=>{let ht=F*J,Rt=Math.sin(ht)/Math.sin(J),Vt=ft(F)*Math.asin(Math.min(.95,K/Math.max(.14,.245*Rt))),ae=Vt+L*(Math.PI*2-2*Vt),De=Math.pow(Math.sin(ae),2),Oe=Math.cos(ae*6)*F*F*F,Ge=.435-(.33+.03*De)*(1-Math.cos(ht))/(1-Math.cos(J)),Ze=(.245+.195*De+.34*Math.pow(Math.max(0,-Math.cos(ae)),1.5))*Rt+.04*Oe+.024*Math.cos(ae*14)*Math.pow(F,1.3);st.set(Math.sin(ae)*Ze,Ge+.035*(Oe-F*F*F)-.07*Math.max(0,-Math.cos(ae))*F*F,Math.cos(ae)*Ze*.95-.07)};Y(rt(new Yt(1,20,14),Li(new gt(t.skin).multiplyScalar(.45))),z,0,.21,-.08,0,0,0,[.19,.12,.14]);let ct=qn(72,24,Q);{let L=ct.attributes.position,F=ct.attributes.normal;for(let st=0;st<=24;st++){let ht=st*73,Rt=ht+72;if(Math.abs(L.getX(ht)-L.getX(Rt))+Math.abs(L.getZ(ht)-L.getZ(Rt))>1e-4)continue;let Vt=new P(F.getX(ht)+F.getX(Rt),F.getY(ht)+F.getY(Rt),F.getZ(ht)+F.getZ(Rt)).normalize();F.setXYZ(ht,Vt.x,Vt.y,Vt.z),F.setXYZ(Rt,Vt.x,Vt.y,Vt.z)}}Y(fi(ct,o,h),z,0,0,0);let ot=(L,F,st)=>{let ht=.2-.3*F,Rt=.19+.07*Math.sin(F*Math.PI/2)+.08*Math.pow(F,2.6),Vt=Math.asin(Math.min(.95,(K*1.03+Math.max(0,.03-ht)*.55)/Rt)),ae=Vt+L*(Math.PI*2-2*Vt),De=Math.pow(Math.sin(ae),2),Oe=Math.cos(ae*8),Ge=.2-(.3+.12*De)*F+.045*(Oe-1)*F*F*F,Ze=.19+.07*Math.sin(F*Math.PI/2)+(.08+.2*De+.36*Math.pow(Math.max(0,-Math.cos(ae)),1.5))*Math.pow(F,2.2)+.04*Oe*F*F+.012*Math.cos(ae*16)*F;st.set(Math.sin(ae)*Ze,Ge-.05*Math.max(0,-Math.cos(ae))*F,Math.cos(ae)*Ze*.9-.05)};Y(fi(qn(64,16,ot),o,h),z,0,0,0);let Ht=Li(15260872,1),It=(L,F,st=!1)=>Y(rt(new Ps(new Vn(L,st),L.length*2,F,5,st),Ht),z,0,0,0),ie=new P,ee=(L,F,st,ht=1.012)=>(L(F,st,ie),new P(ie.x*ht,ie.y,ie.z*ht+.002));{let L=[];for(let ht=0;ht<=24;ht++)L.push(ee(Q,1,1-(1-G)*ht/24));for(let ht=1;ht<=24;ht++)L.push(ee(Q,0,G+(1-G)*ht/24));It(L,.0026);for(let ht of[0,1]){let Rt=[];for(let Vt=0;Vt<=16;Vt++)Rt.push(ee(ot,ht,.4+.6*Vt/16));It(Rt,.0026)}let F=[],st=[];for(let ht=0;ht<=96;ht++)F.push(ee(Q,.06+.88*ht/96,1,1.003)),st.push(ee(ot,ht/96,1,1.003));It(F,.0025),It(st,.0025)}{let L=[];for(let Te=0;Te<=160;Te++)for(let Re=0;Re<=50;Re++)Q(Te/160,Re/50,ie),ie.z>-.05&&L.push(ie.x,ie.y,ie.z);let F=(Te,Re)=>{let vi=A(Re)*S*Math.sqrt(Math.max(0,1-Math.pow(Te/Math.max(.001,A(Re)),2)));for(let Ei=0;Ei<L.length;Ei+=3)Math.abs(L[Ei]-Te)<.014&&Math.abs(L[Ei+1]-Re)<.014&&L[Ei+2]>vi&&(vi=L[Ei+2]);return vi},st=[[0,.272],[-.06,.272],[-.12,.258],[-.175,.228],[-.212,.19],[-.22,.155],[-.205,.125],[-.178,.113],[-.152,.126],[-.145,.15],[-.156,.17],[-.172,.166]].map(([Te,Re])=>[Te*.86,.262+(Re-.272)*.97]),ht=st.map(([Te,Re])=>F(Te,Re));for(let Te=0;Te<3;Te++)for(let Re=0;Re<ht.length;Re++)ht[Re]=Math.max(ht[Re],((ht[Re-1]??ht[Re])+(ht[Re+1]??ht[Re]))/2);let Rt=st.map(([Te,Re],vi)=>new P(Te,Re,ht[vi]+.012)),Vt=new Vn(Rt),ae=80,De=8,Oe=Vt.computeFrenetFrames(ae,!1),Ge=[],Ze=[],mn=[],Zn=new gt(t.skin).lerp(new gt(t.glow.c2),.45).lerp(new gt(16777215),.08),xi=new gt(t.curl),yi=new gt,Oi=new P;for(let Te=0;Te<=ae;Te++){let Re=Te/ae;Vt.getPointAt(Re,Oi);let vi=.0065+.0055*Math.sin(Math.min(1,Re*4)*Math.PI/2)-.0055*Re;yi.copy(Zn).lerp(xi,I(.02,.45,Re));for(let Ei=0;Ei<=De;Ei++){let In=Ei/De*Math.PI*2,_s=Math.cos(In)*vi,Xr=Math.sin(In)*vi*.7;Ge.push(Oi.x+Oe.normals[Te].x*_s+Oe.binormals[Te].x*Xr,Oi.y+Oe.normals[Te].y*_s+Oe.binormals[Te].y*Xr,Oi.z+Oe.normals[Te].z*_s+Oe.binormals[Te].z*Xr),Ze.push(yi.r,yi.g,yi.b)}}for(let Te=0;Te<ae;Te++)for(let Re=0;Re<De;Re++){let vi=Te*(De+1)+Re,Ei=vi+1,In=vi+De+1,_s=In+1;mn.push(vi,In,Ei,Ei,In,_s)}let vs=new me;vs.setAttribute("position",new ne(Ge,3)),vs.setAttribute("color",new ne(Ze,3)),vs.setIndex(mn),Y(rt(vs,new Me({vertexColors:!0,side:ke})),z,0,0,0);let Gs=Rt[Rt.length-1];Y(rt(new Yt(.02,12,10),f),z,Gs.x,Gs.y,Gs.z+.002)}let fe=[[.001,0],[.03,.012],[.052,.07],[.062,.13],[.056,.19],[.034,.25],[.012,.295],[.001,.315]],it=new rs(fe.map(([L,F])=>new mt(L,F))).getPoints(24),at=si(it.map(L=>[L.x,L.y]),18),wt=L=>{for(let F=1;F<it.length;F++)if(L<=it[F].y)return it[F].x;return .001},Gt=t.ear.map(L=>new gt(L)),At=new gt(t.skin).lerp(new gt(t.ear[0]),.12),j=new Float32Array(at.attributes.position.count*3),bt=new gt;for(let L=0;L<at.attributes.position.count;L++){let F=at.attributes.position.getY(L)/.315;F<.3?bt.copy(At).lerp(Gt[0],I(.2,.3,F)):F<.58?bt.copy(Gt[0]).lerp(Gt[1],(F-.3)/.28):bt.copy(Gt[1]).lerp(Gt[2],Math.min(1,(F-.58)/.3)),j[L*3]=bt.r,j[L*3+1]=bt.g,j[L*3+2]=bt.b}at.setAttribute("color",new Pe(j,3));let $=new ni({vertexColors:!0,roughness:.6,metalness:0,emissive:2758688}),Z=Li(t.dots,1.1),dt=.55,ut=.06,xt=.92;for(let L of[-1,1]){let F=L<0?"earR":"earL",st=Be(F,w,L*.066,.325,.085);s[F]=[.06,0,L*-.37],st.rotation.set(...s[F]),Y(rt(new qe(.014,.026,.08,12),r),st,0,.025,0);let ht=new Zt;Y(ht,st,0,ut,0,0,0,0,xt),Y(rt(at,$),ht,0,0,0,0,0,0,[1.1,1,dt]),[[-.5,.5],[-1,0,1],[-1.5,-.5,.5,1.5]].forEach((Vt,ae)=>{for(let De of Vt){let Oe=De*.025,Ge=.018+ae*.03+Math.abs(De)*.003,Ze=wt(Ge);if(Math.abs(Oe)>Ze*.86)continue;let mn=dt*Math.sqrt(Ze*Ze-Oe*Oe)+.001;Y(rt(new Yt(1,8,6),Z),ht,Oe,Ge,mn,0,0,De*-.12,[.009,.013,.004])}})}let Ct=qn(40,12,(L,F,st)=>{let ht=L*Math.PI*2,Rt=.05+.205*Math.pow(Math.sin(F*2.1),.85)+.035*Math.cos(ht*5)*F*F,Vt=.03-.5*F+.045*Math.cos(ht*5)*F*F*F;st.set(Math.sin(ht)*Rt,Vt,Math.cos(ht)*Rt)}),Lt={},Bt=[];for(let L of[-1,1]){let F=L<0,st=Be(F?"armR":"armL",b,L*.092,.445,0);i[F?"armR":"armL"]=st,Y(rt(Pn(.22,.026,.021,10),r),st,0,0,0);let ht=Be(F?"foreR":"foreL",st,0,-.22,0);i[F?"foreR":"foreL"]=ht,Y(rt(Pn(.18,.021,.019,10),r),ht,0,0,0),Y(rt(new qe(.023,.054,.17,14,1,!0),o),ht,0,-.085,0);let Rt=new Zt;Rt.userData.keep=!0,Y(Rt,ht,0,-.16,0,.3,0,L*.5),Y(fi(Ct,o,l),Rt,0,0,0),Y(rt(new Rn(.06,16),Li(t.glow.c2,.9,{side:ke})),Rt,0,-.06,0,Math.PI/2,0,0),Bt.push(Rt);let Vt=new ce;Vt.position.set(0,-.05,0),ht.add(Vt);let ae=new ce;ae.position.set(0,-.6,0),ht.add(ae),Lt[F?"handR":"handL"]=[Vt,ae]}let jt=new Zt;jt.userData.keep=!0,p.add(jt);let D=(L,F,st)=>{let ht=L*Math.PI*2,Rt=.055+.35*Math.pow(Math.sin(F*Math.PI/2),.72);Rt*=1+.1*Math.cos(ht*5)*F*F;let Vt=.3-.36*Math.pow(F,1.1)+.055*Math.cos(ht*5)*F*F;st.set(Math.sin(ht)*Rt,Vt,Math.cos(ht)*Rt*.9)};Y(fi(qn(60,12,D),o,l),jt,0,0,0);let de=[],se=new P;for(let L=-36;L<=36;L++)D((L+120)%120/120,.985,se),de.push(se.clone().multiplyScalar(1.004));Y(rt(new Ps(new Vn(de,!1),120,.003,5,!1),Ht),jt,0,0,0);for(let L of[-1,1]){let F=L<0?.93:.07;D(F,.5,se);let st=F*Math.PI*2;Y(rt(new Yt(1,12,8),d),jt,se.x*1.02,se.y+.01,se.z*1.02,-.9,st,0,[.03,.017,.008])}let R=1.05,x=qn(64,18,(L,F,st)=>{let ht=R+L*(Math.PI*2-2*R),Rt=Math.min(L,1-L)*(Math.PI*2-2*R),Vt=1-I(0,1.1,Rt),ae=.12+.39*Math.pow(Math.sin(F*2.05),.9)+.03*Math.cos(ht*7)*F*F,De=.14-(.82-.34*Vt)*F+.045*Math.cos(ht*7)*F*F*F;st.set(Math.sin(ht)*ae*1.02,De,Math.cos(ht)*ae*.9-.03-.02*F)});Y(fi(x,o,l),jt,0,0,0);for(let L of[-1,1]){let F=L<0,st=Be(F?"legR":"legL",p,L*.08,.02,0);i[F?"legR":"legL"]=st,Y(rt(si([[.001,.06],[.05,.04],[.074,-.02],[.079,-.1],[.068,-.24],[.045,-.37],[.034,-.44],[.001,-.47]],16),r),st,0,0,0,0,0,0,[1.3,1,1.2]);let ht=Be(F?"shinR":"shinL",st,0,-.44,0);i[F?"shinR":"shinL"]=ht,Y(rt(si([[.001,.03],[.033,.01],[.038,-.1],[.032,-.22],[.02,-.34],[.012,-.42],[.001,-.48]],14),r),ht,0,0,0,0,0,0,[1.4,1,1.5]);let Rt=new ce;ht.add(Rt);let Vt=new ce;Vt.position.set(0,-.48,.02),ht.add(Vt),Lt[F?"footR":"footL"]=[Rt,Vt]}let H=new Zt;H.userData.keep=!0,H.visible=!1,i.foreL.add(H),H.position.set(0,-.36,0);let W=Bi(656656,{rough:.2,metal:.6,env:1.2,emissive:new gt(1705520)}),U=Li(t.glow.c2,1.4),nt=[];for(let L=0;L<=16;L++){let F=L/16*2-1,st=F*.52,ht=-.13*(1-F*F)+.05*Math.pow(Math.abs(F),6);nt.push(new P(0,ht,st))}H.add(new Ft(new Ps(new Vn(nt),40,.02,6),W)),H.add(Y(rt(new qe(.03,.03,.14,8),W),new Zt,0,-.13,0,Math.PI/2,0,0));for(let L of[-.52,.52]){let F=rt(new _e(.028,.12,6),U);F.position.set(0,.05,L+Math.sign(L)*.05),F.rotation.x=Math.sign(L)*Math.PI/2,H.add(F)}H.add(Y(rt(new as(.035,0),U),new Zt,0,-.15,0));let pt=new Float32Array(9),V=new me;V.setAttribute("position",new Pe(pt,3));let tt=new ga(V,new _r({color:new gt(t.glow.line).multiplyScalar(1.3)}));tt.frustumCulled=!1,H.add(tt);let yt=new Zt;yt.add(Y(rt(new qe(.012,.012,.6,5),Li(1312796)),new Zt,0,-.3,0)),yt.add(Y(rt(new _e(.04,.12,6),U),new Zt,0,-.62,0,Math.PI,0,0)),H.add(yt);let zt=L=>{let F=.05+L*.32;pt.set([0,.05,-.52,0,F,0,0,.05,.52]),V.attributes.position.needsUpdate=!0,yt.position.y=F};zt(0),gs(e);let _t=t.wisp.map(L=>new gt(L)),St=(L,F)=>{L<.14?F.copy(_t[0]):L<.3?F.copy(_t[0]).lerp(_t[1],(L-.14)/.16):L<.5?F.copy(_t[1]):L<.64?F.copy(_t[1]).lerp(_t[2],(L-.5)/.14):F.copy(_t[2]).lerp(_t[3],Math.min(1,(L-.64)/.12)),F.multiplyScalar(1.05)},Ot=new Zt,Kt=[-1,1].map(L=>{let F=new Ic({segments:24,radial:6,segLen:.06,flat:.3,colors:St,radius:ht=>.008+.048*I(.14,.5,ht)*(ht<.92?1:1-(ht-.92)/.08*.6)});F.waveAmp=.09,F.waveFreq=16,F.twist=2.2,F.mesh.material=new Me({vertexColors:!0,side:ke}),Ot.add(F.mesh);let st=new ce;return st.position.set(L*.3,.1,-.05),w.add(st),{tube:F,anchor:st,s:L}}),le=new ce;le.position.set(0,.25,.55),m.add(le);let O=kr(t.shadow,t.ring,1.25),Tt={j:i,base:s,hipY:Uc,flare:0},lt=new P,Et=new P,Pt=0;return{root:e,rig:Tt,trails:Lt,worldObjects:[Ot],orbPoint:le,shadow:O,height:1.75,headY:2.2,trailColor:n?7334143:16743136,update(L,F){Pt+=L,l.uniforms.time.value=Pt,h.uniforms.time.value=Pt;let st=Tt.flare;jt.scale.set(1+st*.3,1-st*.18,1+st*.3);let ht=e.rotation.y,Rt=F.vx*Math.sin(ht);jt.rotation.x+=(Math.max(-.35,Math.min(.35,-Rt*1.6))+Math.max(-.15,Math.min(.2,F.vy*.8))-jt.rotation.x)*.15,z.rotation.x+=(Math.max(-.07,Math.min(.07,-Rt*.4))-z.rotation.x)*.12;for(let Vt of Bt)Vt.scale.setScalar(1+st*.2);e.updateMatrixWorld(!0);for(let Vt of Kt)Vt.anchor.getWorldPosition(lt),Vt.tube.waveT=Pt*5+Vt.s,(!Vt.tube.inited||F.snap)&&(Et.set(Vt.s*.7,-.7,-.1).applyQuaternion(e.quaternion).normalize(),Vt.tube.reset(lt,Et)),Et.set(Vt.s,-.25,-.2).applyQuaternion(e.quaternion).normalize(),Vt.tube.simulate(lt,(ae,De,Oe)=>{let Ge=.0021*(1-De*.2);Oe.x=Et.x*Ge,Oe.y=-.0027+Math.sin(Pt*2.3-De*6)*9e-4+De*.0016,Oe.z=Et.z*Ge},.84);Ot.visible=e.visible},setBow(L,F=0,st=!0){H.visible=L,yt.visible=L&&st,zt(F)},setFlash(L,F){g.forEach((st,ht)=>{st.emissive.copy(y[ht]),F>0&&st.emissive.lerp(L,F*.8)}),l.uniforms.flash.value.set(L.r,L.g,L.b,F*.6),h.uniforms.flash.value.copy(l.uniforms.flash.value)},dispose(){Ot.parent&&Ot.parent.remove(Ot),Hs(e),Hs(Ot)}}}var hf,Uc,df=We(()=>{Ci();Hr();Dc();hf=[{skin:2890806,eye:16754402,mark:16746188,curl:16770802,glow:{c1:11575551,c2:10910975,c3:14965992,line:15255807,bright:1,scale:8},ear:[15235228,16765108,16774360],dots:16757988,wisp:[10112511,16744358,16760992,16773836],shadow:1311775,ring:10112511},{skin:1189426,eye:9434111,mark:6284543,curl:14482431,glow:{c1:1731839,c2:2283728,c3:9075711,line:14745593},ear:[6281471,12124144,16056310],dots:4507903,wisp:[3832831,4187856,12124128,16777215],shadow:200728,ring:4184319}],Uc=.9});function zr(n){let t=n.idle,e=n.hipY;return{...{idle:s=>{let r=Math.sin(s*.055);return{...t,by:(t.by||0)+r*.018*(n.bob||1),torso:wu(t.torso,[r*.03,0,0]),armR:wu(t.armR,[0,0,-r*.04]),armL:wu(t.armL,[0,0,r*.04])}},walk:s=>{let r=Math.sin(s),a=Math.cos(s);return{legR:[-.55*r,0,-.04],legL:[.55*r,0,.04],shinR:[.1+.7*Math.max(0,a),0,0],shinL:[.1+.7*Math.max(0,-a),0,0],armR:[.4*r,0,-.18],armL:[-.4*r,0,.18],foreR:[-.3,0,0],foreL:[-.3,0,0],torso:[.08,.12*r,0],by:-.03+.03*Math.abs(a),...n.walkExtra||{}}},run:s=>{let r=Math.sin(s),a=Math.cos(s);return{legR:[-.95*r-.2,0,-.04],legL:[.95*r-.2,0,.04],shinR:[.3+1.3*Math.max(0,a),0,0],shinL:[.3+1.3*Math.max(0,-a),0,0],armR:[.8*r,0,-.25],armL:[-.8*r,0,.25],foreR:[-1.2,0,0],foreL:[-1.2,0,0],torso:[.35,.2*r,0],head:[-.2,0,0],by:-.06+.06*Math.abs(a),...n.runExtra?n.runExtra(s):{}}},skid:()=>({torso:[-.3,0,0],legR:[-.8,0,-.1],shinR:[.2,0,0],legL:[.3,0,.1],shinL:[1,0,0],armR:[-.5,0,-.8],armL:[-.5,0,.8],by:-.14}),crouch:s=>({by:-e*.4,torso:[.4,0,0],head:[-.25,0,0],legR:[-1.25,0,-.18],shinR:[2.1,0,0],legL:[-1.25,0,.18],shinL:[2.1,0,0],armR:[-.4,0,-.35],armL:[-.4,0,.35],foreR:[-.6,0,0],foreL:[-.6,0,0]}),squat:()=>({by:-e*.22,torso:[.3,0,0],legR:[-.8,0,-.1],shinR:[1.3,0,0],legL:[-.8,0,.1],shinL:[1.3,0,0],armR:[.3,0,-.4],armL:[.3,0,.4]}),jump:()=>({legR:[-.9,0,-.05],shinR:[1.3,0,0],legL:[.15,0,.05],shinL:[.6,0,0],armR:[-.6,0,-.5],armL:[-.4,0,.6],torso:[-.1,0,0],head:[-.15,0,0]}),fall:s=>({legR:[-.35,0,-.1],shinR:[.5,0,0],legL:[.15,0,.1],shinL:[.35,0,0],armR:[-.3,0,-1+Math.sin(s*.2)*.1],armL:[-.3,0,1-Math.sin(s*.2)*.1],torso:[.05,0,0]}),djump:s=>({body:[Math.min(1,s/20)*Math.PI*2,0,0],legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[-1.4,0,.1],shinL:[2,0,0],armR:[-1.2,0,-.4],armL:[-1.2,0,.4],foreR:[-1,0,0],foreL:[-1,0,0]}),helpless:s=>({body:[.15,0,Math.sin(s*.15)*.15],armR:[-2.6,0,-.5+Math.sin(s*.3)*.3],armL:[-2.6,0,.5-Math.sin(s*.3)*.3],legR:[-.2,0,-.1],shinR:[.6,0,0],legL:[.2,0,.1],shinL:[.3,0,0],head:[-.3,0,0]}),hurt:()=>({torso:[-.45,0,0],head:[-.5,0,0],armR:[-.9,0,-1],armL:[-.9,0,1],legR:[-.5,0,-.1],shinR:[.9,0,0],legL:[.3,0,.1],shinL:[.4,0,0]}),tumble:s=>({body:[-s*.32,0,.3],torso:[-.3,0,0],armR:[-1,0,-1.3],armL:[-1,0,1.3],legR:[-.6,0,-.3],shinR:[.8,0,0],legL:[.3,0,.3],shinL:[.8,0,0]}),tumbleIdle:s=>({body:[-.35,0,Math.sin(s*.1)*.2],torso:[-.2,0,0],armR:[-1.4,0,-1],armL:[-1.4,0,1],legR:[-.4,0,-.2],shinR:[.9,0,0],legL:[.2,0,.2],shinL:[.6,0,0]}),shield:()=>({...t,by:(t.by||0)-.12,torso:[.3,0,0],armR:[-1.1,0,.3],foreR:[-1.3,0,0],armL:[-1.1,0,-.3],foreL:[-1.3,0,0],...n.shieldExtra||{}}),roll:(s,r)=>{let a=Math.min(1,Math.max(0,(s-2)/22));return{body:[(r?1:-1)*a*Math.PI*2,0,0],by:-e*.35*Math.sin(a*Math.PI),legR:[-1.5,0,-.1],shinR:[2.2,0,0],legL:[-1.5,0,.1],shinL:[2.2,0,0],armR:[-1.4,0,.2],armL:[-1.4,0,-.2],foreR:[-1.3,0,0],foreL:[-1.3,0,0],torso:[.8,0,0]}},spotdodge:s=>({by:-.25,torso:[.2,0,.3],head:[.3,0,0],legR:[-.9,0,-.2],shinR:[1.5,0,0],legL:[-.4,0,.2],shinL:[1.2,0,0],armR:[.4,0,-.9],armL:[.4,0,.9]}),airdodge:s=>({body:[.3,Math.min(1,s/18)*Math.PI*2,0],legR:[-1.3,0,-.1],shinR:[1.9,0,0],legL:[-1.3,0,.1],shinL:[1.9,0,0],armR:[-1.3,0,.3],armL:[-1.3,0,-.3],foreR:[-1.4,0,0],foreL:[-1.4,0,0]}),ledge:s=>({bz:.12,armR:[-2.95,0,-.2],armL:[-2.95,0,.2],foreR:[0,0,0],foreL:[0,0,0],torso:[.1,0,0],head:[-.4,0,0],legR:[-.2+Math.sin(s*.08)*.1,0,-.1],shinR:[.4,0,0],legL:[.1-Math.sin(s*.08)*.1,0,.1],shinL:[.3,0,0]}),climb:s=>({by:-e*.25,torso:[.6,0,0],legR:[-1.5,0,-.1],shinR:[1.8,0,0],legL:[-.4,0,.1],shinL:[1.5,0,0],armR:[-1.6,0,-.2],armL:[-1.6,0,.2]}),knockdown:()=>({body:[-1.5,0,0],by:-e+.18,armR:[-2.4,0,-.5],armL:[-2.4,0,.5],legR:[-.1,0,-.1],legL:[.1,0,.1],shinR:[.3,0,0],head:[.3,0,0]}),getup:s=>({by:-e*.3,torso:[.5,0,0],legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[.2,0,.1],shinL:[1.9,0,0],armR:[-.4,0,-.5],armL:[-.4,0,.5]}),hold:()=>({...t,armR:[-1.35,0,.05],foreR:[-.3,0,0],armL:[-1.35,0,-.05],foreL:[-.3,0,0],torso:[.15,0,0],...n.holdExtra||{}}),grabbed:s=>({torso:[-.3,0,Math.sin(s*.5)*.1],head:[-.3,0,0],armR:[-.7,0,-.9+Math.sin(s*.7)*.3],armL:[-.7,0,.9-Math.sin(s*.7)*.3],legR:[-.4,0,-.1],shinR:[.8,0,0],legL:[.2,0,.1],shinL:[.5,0,0]}),dizzy:s=>({torso:[.25,0,Math.sin(s*.08)*.25],head:[.35,Math.sin(s*.12)*.4,0],armR:[.2,0,-.15],armL:[.2,0,.15],legR:[-.1,0,-.1],shinR:[.4,0,0],legL:[.1,0,.1],shinL:[.4,0,0],by:-.08}),victory:s=>t},...n.override||{}}}var wu,Nc=We(()=>{wu=(n=[0,0,0],t=[0,0,0])=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]]});function ff(n=16766048,t=16777215){let e=new Zt,i=new Me({color:new gt(n).multiplyScalar(1.6),transparent:!0,opacity:.9,blending:Fe,depthWrite:!1,side:ke}),s=new Ft(new Si(1.9,.32,10,40,Math.PI),i);s.rotation.z=-Math.PI/2;let r=new Ft(new Si(1.9,.12,8,40,Math.PI),new Me({color:t,transparent:!0,blending:Fe,depthWrite:!1}));r.rotation.z=-Math.PI/2;let a=new gi(new ci({map:Fi(),color:n,transparent:!0,opacity:.8,blending:Fe,depthWrite:!1}));return a.scale.set(6,6,1),e.add(a,s,r),e}function pf(n){return{illumine:"\u30A8\u30BF\u30FC\u30CA\u30EB\u30FB\u30A8\u30AF\u30EA\u30D7\u30B9",dullahan:"\u30BD\u30FC\u30E9\u30FC\u30FB\u30B8\u30E3\u30C3\u30B8\u30E1\u30F3\u30C8",dragon:"\u30C9\u30E9\u30B4\u30F3\u30FB\u30A4\u30F3\u30D5\u30A7\u30EB\u30CE"}[n.id]||"\u6700\u5F8C\u306E\u5207\u308A\u3075\u3060"}var Fc,Bc,Tu=We(()=>{Ci();Za();dn();xs();Fc=class{constructor(t){this.b=t,this.x=qt(-5,5),this.y=15,this.vx=0,this.vy=-.05,this.r=.55,this.hp=40,this.life=1320,this.t=0,this.flash=0,this.target={x:qt(-7,7),y:qt(2,7)},this.dead=!1;let e=new Zt;this.mat=new Qe({uniforms:{time:{value:0},flash:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
        }`}),this.core=new Ft(new Yt(this.r,28,20),this.mat);let i=new gi(new ci({map:Fi(),color:16771488,transparent:!0,opacity:.8,blending:Fe,depthWrite:!1}));i.scale.setScalar(3.2);let s=new gi(new ci({map:yc(),color:16777215,transparent:!0,opacity:.7,blending:Fe,depthWrite:!1}));s.scale.setScalar(2.4),this.star=s,e.add(i,s,this.core),this.mesh=e,t.scene.add(e),this.px=this.x,this.py=this.y}update(){if(this.t++,this.px=this.x,this.py=this.y,this.life--,this.flash>0&&(this.flash-=.1),this.life<0)this.vy=Math.min(.2,this.vy+.008),this.vx*=.97,this.y>20&&this.remove();else{(this.t%100===0||Math.hypot(this.target.x-this.x,this.target.y-this.y)<.6)&&(this.target={x:qt(-8,8),y:qt(1.8,8.5)});let t=Se(this.target.x-this.x,-1,1)*.003,e=Se(this.target.y-this.y,-1,1)*.003;this.vx=Se((this.vx+t)*.985,-.08,.08),this.vy=Se((this.vy+e)*.985,-.08,.08)}this.x+=this.vx,this.y+=this.vy+Math.sin(this.t*.07)*.01,this.x=Se(this.x,-14,14),this.t%3===0&&this.b.effects.sparkle(this.x,this.y,[16740464,16769136,7405456,7385343,13660415][this.t%5],1,.6)}hit(t,e){return this.hp-=t,this.flash=1,this.vx=e*.12,this.vy=.05,this.target={x:this.x+e*3,y:Se(this.y+1,2,8)},this.b.effects.hitSpark(this.x,this.y,16769136,.4,e),vt.hit(.3),vt.star(),this.hp<=0}render(t){let e=this.px+(this.x-this.px)*t,i=this.py+(this.y-this.py)*t;this.mesh.position.set(e,i,.4),this.mat.uniforms.time.value=this.t/60,this.mat.uniforms.flash.value=Math.max(0,this.flash),this.core.rotation.y=this.t*.03,this.star.material.rotation=this.t*.02}remove(){this.dead||(this.dead=!0,this.b.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}},Bc=class{constructor(t,e,i){this.b=t;let s=new Qe({transparent:!0,depthWrite:!1,side:ke,uniforms:{time:{value:0},fade:{value:1}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }",fragmentShader:`
        varying vec3 vN; varying vec3 vV; uniform float time; uniform float fade;
        void main(){
          float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
          vec3 core = vec3(0.04,0.0,0.09);
          vec3 rim = mix(vec3(0.6,0.2,1.0), vec3(1.0,0.4,0.85), 0.5+0.5*sin(time*3.0));
          vec3 c = mix(core, rim*1.6, pow(f, 2.2));
          gl_FragColor = vec4(c, (0.72 + 0.28*f) * fade);
          #include <colorspace_fragment>
        }`});this.mat=s,this.mesh=new Ft(new Yt(1,40,28),s),this.mesh.position.set(e,i,0),this.mesh.renderOrder=8,this.mesh.scale.setScalar(.1),t.scene.add(this.mesh),this.t=0}setRadius(t){this.mesh.scale.setScalar(t)}update(){this.t++,this.mat.uniforms.time.value=this.t/60}remove(){this.b.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mat.dispose()}}});var we,he,Yi,eo,Gy,Ru,mf=We(()=>{df();Nc();dn();xs();Tu();we=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),he={armR:[.18,0,-.74],foreR:[-.1,0,.1],armL:[.18,0,.74],foreL:[-.1,0,-.1],legR:[.02,0,-.04],legL:[-.6,0,-.1],shinL:[1.1,0,-.2],torso:[.12,0,.03],head:[-.03,0,.1],by:.02},Yi={legR:[-.35,0,-.1],shinR:[.6,0,0],legL:[.15,0,.1],shinL:[.4,0,0],armR:[-.3,0,-.9],armL:[-.3,0,.9],torso:[.05,0,0]},eo={legR:[-1.2,0,-.1],shinR:[1.8,0,0],legL:[-1,0,.1],shinL:[1.6,0,0]},Gy={jab1:{total:18,next:"jab2",nextWin:[5,17],trail:"handR",trailF:[2,6],sfx:[2,"whoosh",.2],hit:[we(3,4,.75,1.1,.42,2.5,75,6,22)],anim:[[0,he],[2,{...he,armR:[-.6,0,-.6],foreR:[-1.4,0,0],torso:[.1,-.3,0]}],[4,{...he,armR:[-1.55,0,-.1],foreR:[-.05,0,0],torso:[.15,.35,0]}],[12,{...he,armR:[-1.4,0,-.1],foreR:[-.2,0,0],torso:[.12,.3,0]}],[18,he]]},jab2:{total:18,next:"jab3",nextWin:[5,17],trail:"handL",trailF:[2,6],sfx:[2,"whoosh",.2],hit:[we(3,4,.8,1,.42,2.5,75,6,22)],anim:[[0,{...he,armR:[-1.4,0,-.1],torso:[.12,.3,0]}],[4,{...he,armL:[-1.55,0,.1],foreL:[-.05,0,0],torso:[.15,-.35,0]}],[12,{...he,armL:[-1.4,0,.1],torso:[.12,-.3,0]}],[18,he]]},jab3:{total:30,trail:"handR",trailF:[3,9],sfx:[4,"whoosh",.5],hit:[we(5,7,.95,1.05,.62,4.5,40,45,70)],onFrame(n,t){t===5&&n.battle.effects.ring(n.x+n.facing*1,n.y+1.05,13660415,1.6)},anim:[[0,he],[3,{...he,armR:[-.5,0,-.4],armL:[-.5,0,.4],foreR:[-1.5,0,0],foreL:[-1.5,0,0],torso:[-.1,0,0],flare:.2}],[6,{...he,armR:[-1.5,0,.15],armL:[-1.5,0,-.15],foreR:[0,0,0],foreL:[0,0,0],torso:[.25,0,0],bz:.12,flare:.5}],[18,{...he,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.2,0,0]}],[30,he]]},ftilt:{total:27,trail:"footR",trailF:[5,10],sfx:[5,"whoosh",.4],hit:[we(6,8,1.05,.9,.48,8,36,28,100),we(6,8,.5,.9,.4,8,36,28,100)],anim:[[0,he],[4,{...he,legR:[.4,0,-.1],shinR:[1.2,0,0],torso:[.1,-.3,0],armR:[.2,0,-.8],armL:[.2,0,.8]}],[7,{legR:[-1.55,0,-.1],shinR:[.05,0,0],torso:[-.35,.25,0],legL:[.15,0,.05],shinL:[.25,0,0],armR:[.4,0,-1.1],armL:[.3,0,1.1],head:[-.1,0,0],flare:.3}],[14,{legR:[-1.45,0,-.1],shinR:[.2,0,0],torso:[-.3,.2,0],armR:[.4,0,-1],armL:[.3,0,1]}],[27,he]]},utilt:{total:28,trail:"handR",trailF:[5,12],sfx:[5,"whoosh",.4],hit:[we(6,10,0,0,.55,7,96,38,100,{path:[[.75,1.55],[-.6,1.7]]}),we(6,10,0,0,.5,7,96,38,100,{path:[[.5,2.25],[-.4,2.35]]})],anim:[[0,he],[4,{...he,torso:[.35,0,0],head:[.4,0,0],armR:[.4,0,-.4],armL:[.4,0,.4],by:-.1,earR:[.8,0,0],earL:[.8,0,0]}],[8,{torso:[-.3,0,0],head:[-.5,0,0],armR:[-2.9,0,-.2],foreR:[0,0,0],armL:[-2.9,0,.2],foreL:[0,0,0],earR:[-1.2,0,0],earL:[-1.2,0,0],by:.05}],[14,{torso:[-.25,0,0],head:[-.4,0,0],armR:[-2.8,0,-.3],armL:[-2.8,0,.3],earR:[-1,0,0],earL:[-1,0,0]}],[28,he]]},dtilt:{total:20,trail:"footR",trailF:[4,8],sfx:[4,"whoosh",.3],hit:[we(5,7,1.05,.25,.45,6,78,45,45),we(5,7,.5,.25,.4,6,78,45,45)],anim:[[0,{by:-.3,torso:[.4,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}],[4,{by:-.33,torso:[.5,0,0],legR:[-1.45,0,-.2],shinR:[.2,0,0],legL:[-.9,0,.15],shinL:[2,0,0],armR:[-.3,0,-.6],armL:[-.3,0,.6]}],[12,{by:-.33,torso:[.5,0,0],legR:[-1.4,0,-.2],shinR:[.3,0,0],legL:[-.9,0,.15],shinL:[2,0,0]}],[20,{by:-.3,torso:[.4,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}]]},dashattack:{total:34,keepVel:!0,trail:"handR",trailF:[3,16],sfx:[3,"whoosh",.6],hit:[we(5,8,.7,.85,.62,9,55,55,70),we(9,16,.7,.85,.55,6,60,40,50)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=15?n.vx=di(n.vx,n.facing*.15,.01):n.friction(2.2),t%3===0&&t<16&&n.battle.effects.sparkle(n.x-n.facing*.3,n.y+.6,13929727,1,.3)},anim:[[0,he],[3,{body:[.45,0,0],armR:[-1.5,0,-.7],armL:[-1.5,0,.7],foreR:[0,0,0],foreL:[0,0,0],legR:[.4,0,-.05],shinR:[.9,0,0],legL:[.25,0,.05],shinL:[.5,0,0],flare:.5,head:[-.3,0,0]}],[16,{body:[.4,0,0],armR:[-1.4,0,-.6],armL:[-1.4,0,.6],legR:[.3,0,0],shinR:[.8,0,0],legL:[.2,0,0],shinL:[.5,0,0],flare:.4}],[34,he]]},fsmash:{total:50,smash:!0,charge:{f:6,max:60},trail:"handR",trailF:[12,17],sfx:[12,"whoosh",.8],hit:[we(13,16,1.4,1,.72,15,38,34,102),we(13,16,.7,1,.5,13,38,34,100)],onFrame(n,t){if(t===13){let e=n.battle.effects;e.ring(n.x+n.facing*1.4,n.y+1,11820287,2.6,18),e.sparkle(n.x+n.facing*1.5,n.y+1,16751856,6,.6)}},anim:[[0,he],[5,{torso:[-.2,-.7,0],armR:[.9,0,-.6],foreR:[-1.2,0,0],armL:[-.9,0,.5],foreL:[-.3,0,0],legR:[.5,0,-.1],shinR:[.5,0,0],legL:[-.5,0,.1],shinL:[.4,0,0],by:-.1,flare:.2}],[11,{torso:[-.25,-.8,0],armR:[1,0,-.6],foreR:[-1.3,0,0],armL:[-1,0,.5],legR:[.55,0,-.1],shinR:[.5,0,0],legL:[-.55,0,.1],shinL:[.45,0,0],by:-.12}],[13,{torso:[.35,.6,0],armR:[-1.6,0,-.05],foreR:[0,0,0],armL:[.7,0,.5],foreL:[-.2,0,0],legR:[.6,0,-.1],shinR:[.4,0,0],legL:[-.7,0,.1],shinL:[.2,0,0],by:-.12,bz:.25,flare:.45}],[26,{torso:[.3,.5,0],armR:[-1.5,0,-.05],armL:[.6,0,.5],legR:[.5,0,-.1],legL:[-.6,0,.1],by:-.1,bz:.2}],[50,he]]},usmash:{total:46,smash:!0,charge:{f:5,max:60},trail:"handR",trailF:[10,16],sfx:[10,"whoosh",.8],hit:[we(11,16,.2,2.15,.8,14,88,38,100),we(11,16,.3,1.25,.55,12,85,38,100)],onFrame(n,t){t>=11&&t<=16&&n.battle.effects.sparkle(n.x,n.y+1.2+(t-11)*.3,t%2?16751856:16773296,2,.4)},anim:[[0,he],[4,{by:-.3,torso:[.35,0,0],armR:[.5,0,-.3],armL:[.5,0,.3],legR:[-.7,0,-.1],shinR:[1.3,0,0],legL:[-.7,0,.1],shinL:[1.3,0,0],earR:[.6,0,0],earL:[.6,0,0]}],[11,{by:.12,torso:[-.25,0,0],head:[-.4,0,0],armR:[-3,0,-.15],foreR:[0,0,0],armL:[-3,0,.15],foreL:[0,0,0],legR:[.1,0,-.05],legL:[.1,0,.05],earR:[-.9,0,0],earL:[-.9,0,0],flare:.35}],[22,{by:.08,torso:[-.2,0,0],armR:[-2.9,0,-.2],armL:[-2.9,0,.2],earR:[-.7,0,0],earL:[-.7,0,0]}],[46,he]]},dsmash:{total:44,smash:!0,charge:{f:5,max:60},alpha:.85,sfx:[8,"whoosh",.8],hit:[we(9,11,1.1,.35,.55,12,32,34,96,{away:!0}),we(9,11,-1.1,.35,.55,12,32,34,96,{away:!0}),we(12,13,.6,.35,.5,10,32,30,90,{away:!0}),we(12,13,-.6,.35,.5,10,32,30,90,{away:!0})],onFrame(n,t){t===9&&n.battle.effects.ring(n.x,n.y+.3,11820287,3,16)},anim:(()=>{let n={by:-.28,torso:[.3,0,0],armR:[.2,0,-1.2],armL:[.2,0,1.2],legR:[-.8,0,-.3],shinR:[1.4,0,0],legL:[-.8,0,.3],shinL:[1.4,0,0],flare:.3},t={...n,armR:[0,0,-1.5],armL:[0,0,1.5],flare:1.1};return[[0,he],[5,n],[9,{...t,body:[0,0,0]}],[13,{...t,body:[0,Math.PI*2,0]}],[22,{...n,body:[0,Math.PI*2,0],flare:.6}],[44,{...he,body:[0,Math.PI*2,0]}]]})()},nair:{total:36,aerial:!0,landLag:7,acBefore:3,acAfter:26,alpha:.85,sfx:[4,"whoosh",.5],hit:[we(4,7,0,.85,1,9,45,28,88,{away:!0}),we(8,18,0,.85,.95,5,45,20,70,{away:!0})],anim:(()=>{let n={armR:[0,0,-1.4],armL:[0,0,1.4],legR:[-.5,0,-.3],shinR:[.8,0,0],legL:[-.5,0,.3],shinL:[.8,0,0],flare:1};return[[0,Yi],[3,{...n,body:[0,0,0]}],[11,{...n,body:[0,Math.PI*2,0]}],[18,{...n,body:[0,Math.PI*4,0],flare:.7}],[36,{...Yi,body:[0,Math.PI*4,0]}]]})()},fair:{total:34,aerial:!0,landLag:10,acBefore:4,acAfter:24,trail:"handR",trailF:[7,12],sfx:[7,"whoosh",.6],hit:[we(8,11,0,0,.62,11,40,30,96,{path:[[.9,1.75],[1.15,.45]]})],anim:[[0,Yi],[5,{...eo,armR:[-2.9,0,-.3],foreR:[-.2,0,0],torso:[-.3,.35,0],armL:[.3,0,.8]}],[8,{...eo,armR:[-2.7,0,-.3],torso:[-.3,.35,0],armL:[.3,0,.8]}],[11,{legR:[-.8,0,0],shinR:[1.2,0,0],legL:[.3,0,0],shinL:[.8,0,0],armR:[-.5,0,-.1],foreR:[0,0,0],torso:[.45,.35,0],armL:[.5,0,.8]}],[20,{legR:[-.7,0,0],shinR:[1.1,0,0],armR:[-.6,0,-.1],torso:[.4,.3,0],armL:[.5,0,.8]}],[34,Yi]]},bair:{total:36,aerial:!0,landLag:11,acBefore:4,acAfter:26,trail:"footL",trailF:[6,11],sfx:[6,"whoosh",.6],hit:[we(7,9,-1.05,.85,.62,13,145,32,100),we(10,14,-.9,.85,.5,8,145,20,80)],anim:[[0,Yi],[5,{legL:[-.6,0,.1],shinL:[1.6,0,0],legR:[-.6,0,-.1],shinR:[1.3,0,0],torso:[.2,-.3,0],head:[.2,-.4,0],armR:[-.4,0,-.8],armL:[-.4,0,.8]}],[8,{legL:[1.45,0,.05],shinL:[.05,0,0],legR:[-.8,0,-.1],shinR:[1.3,0,0],torso:[.45,-.35,0],head:[-.1,-.6,0],armR:[-.8,0,-.6],armL:[-.8,0,.6]}],[16,{legL:[1.3,0,.05],shinL:[.2,0,0],legR:[-.7,0,-.1],shinR:[1.2,0,0],torso:[.4,-.3,0],armR:[-.7,0,-.6],armL:[-.7,0,.6]}],[36,Yi]]},uair:{total:30,aerial:!0,landLag:8,acBefore:3,acAfter:22,trail:"handR",trailF:[5,11],sfx:[5,"whoosh",.5],hit:[we(6,10,0,0,.6,9,85,32,96,{path:[[.75,1.75],[-.7,1.85]]}),we(6,10,0,0,.55,9,85,32,96,{path:[[.45,2.35],[-.45,2.35]]})],anim:[[0,Yi],[4,{...eo,torso:[.3,0,0],armR:[.4,0,-.5],armL:[.4,0,.5],earR:[.8,0,0],earL:[.8,0,0]}],[8,{...eo,body:[-.4,0,0],torso:[-.3,0,0],head:[-.5,0,0],armR:[-3,0,-.2],foreR:[0,0,0],armL:[-3,0,.2],foreL:[0,0,0],earR:[-1.3,0,0],earL:[-1.3,0,0]}],[16,{...eo,body:[-.3,0,0],armR:[-2.8,0,-.3],armL:[-2.8,0,.3],earR:[-1,0,0],earL:[-1,0,0]}],[30,Yi]]},dair:{total:44,aerial:!0,landLag:16,acBefore:3,acAfter:34,trail:"footR",trailF:[11,16],sfx:[11,"whoosh",.7],hit:[we(12,15,.05,-.1,.55,12,270,28,82),we(16,22,0,.05,.5,7,60,20,70)],onFrame(n,t){t<11&&(n.gravMult=.35)},anim:[[0,Yi],[8,{legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[-1.4,0,.1],shinL:[2,0,0],armR:[-2.6,0,-.4],armL:[-2.6,0,.4],torso:[-.1,0,0],by:.15}],[12,{legR:[.15,0,-.03],shinR:[0,0,0],legL:[.15,0,.03],shinL:[0,0,0],armR:[-2.8,0,-.6],armL:[-2.8,0,.6],torso:[-.2,0,0],by:-.1,flare:.5}],[22,{legR:[.1,0,-.03],legL:[.1,0,.03],armR:[-2.7,0,-.6],armL:[-2.7,0,.6],flare:.4}],[44,Yi]]},neutralb:{total:34,charge:{f:8,max:70},fall:.5,landContinue:!0,onStart(n){n.model.setBow(!0,.15)},onCharge(n){let t=n.charge/70;if(n.model.setBow(!0,.35+t*.65),n.charge%5===0){let e=n.model.orbPoint.getWorldPosition(n.battle.tmpV);n.battle.effects.sparkle(e.x,e.y,t>.95?16777215:11820287,1,.25)}},onFrame(n,t){if(t<8&&n.model.setBow(!0,.15+t*.03),t===10){let e=n.charge/70;n.battle.spawnProjectile(n,{x:n.x+n.facing*.8,y:n.y+1.12,vx:n.facing*(.32+.16*e),vy:0,r:.16+.14*e,dmg:5+11*e,ang:38,bkb:22+28*e,kbg:62,life:60,color:11820287,kind:"arrow"}),n.model.setBow(!0,0,!1),vt.whoosh(.4+e*.6),vt.orb()}t===28&&n.model.setBow(!1)},onEnd(n){n.model.setBow(!1)},anim:[[0,he],[6,{armL:[-1.5,0,.05],foreL:[0,0,0],armR:[-1.45,0,.3],foreR:[-1.5,0,0],torso:[.08,-.55,0],head:[0,.4,0],legR:[-.3,0,-.1],legL:[.3,0,.1],shinL:[.3,0,0]}],[9,{armL:[-1.5,0,.05],foreL:[0,0,0],armR:[-1.4,0,.45],foreR:[-2.1,0,0],torso:[.08,-.6,0],head:[0,.45,0],legR:[-.3,0,-.1],legL:[.3,0,.1],shinL:[.3,0,0]}],[11,{armL:[-1.55,0,.05],foreL:[0,0,0],armR:[-1.1,0,-.7],foreR:[-.3,0,0],torso:[.12,-.5,0],head:[0,.4,0],legR:[-.3,0,-.1],legL:[.3,0,.1],flare:.3}],[22,{armL:[-1.45,0,.1],armR:[-.9,0,-.7],torso:[.1,-.4,0]}],[34,he]]},sideb:{total:40,keepVel:!0,noDrift:!0,noGravity:[0,22],canLeaveGround:!0,ledgeGrab:8,landContinue:!0,trail:"handR",trailF:[7,20],hit:[we(7,18,.5,.85,.62,9,42,50,62)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){t<7?(n.vx=di(n.vx,0,.02),n.grounded||(n.vy=.005)):t<=20?(n.vx=n.facing*.34,n.vy=0,t===7&&vt.whoosh(.9),n.battle.effects.sparkle(n.x-n.facing*.4,n.y+.8,t%2?16751856:16773296,1,.3)):n.vx*=.86},anim:[[0,he],[4,{body:[-.3,0,0],armR:[.6,0,-.4],armL:[.6,0,.4],legR:[-.8,0,0],shinR:[1.3,0,0],legL:[-.6,0,0],shinL:[1.2,0,0]}],[7,{body:[1.25,0,0],armR:[-2.9,0,-.15],foreR:[0,0,0],armL:[-2.9,0,.15],foreL:[0,0,0],legR:[.2,0,-.05],legL:[.2,0,.05],flare:.2,head:[-.9,0,0]}],[20,{body:[1.2,0,0],armR:[-2.9,0,-.15],armL:[-2.9,0,.15],legR:[.2,0,-.05],legL:[.2,0,.05],head:[-.9,0,0]}],[32,Yi]]},upb:{total:38,helpless:!0,helplessLag:22,intang:[6,16],noGravity:[0,24],noDrift:!0,keepVel:!0,ledgeGrab:16,hit:[we(16,17,0,.9,.95,7,80,55,60,{away:!0})],onStart(n){n.upBUsed=!0,n.vx*=.3,n.vy=0},onFrame(n,t){let e=n.battle.effects;if(t<6&&(n.vx*=.8,n.vy=.01),t===6){let{x:i,y:s}=n.input.stick,r=Math.hypot(i,s),a=0,o=1;r>.3&&(a=i/r,o=s/r),n.grounded&&o<0&&(o=0,a=a?te(a):n.facing),n.vars.dir=[a,o],Math.abs(a)>.2&&(n.facing=te(a)),n.hidden=!0,vt.warp(),e.ring(n.x,n.y+.9,13660415,2.2,14),e.sparkle(n.x,n.y+.9,16751856,8,.6)}if(t>=7&&t<=14){let[i,s]=n.vars.dir;n.vx=i*.7,n.vy=s*.7,s>.1&&n.grounded&&(n.grounded=!1,n.surface=null,n.y+=.02),n.hidden=!0,e.spawn({x:n.x,y:n.y+.9,life:14,size:.7,size1:.1,color:11820287})}if(t===15){let[i]=n.vars.dir;n.vx=i*.06,n.vy=.02,n.hidden=!1,e.ring(n.x,n.y+.9,16751856,2.4,14),e.sparkle(n.x,n.y+.9,16773296,8,.7)}t>15&&(n.vx*=.95)},anim:[[0,he],[5,{armR:[-1.2,0,.6],foreR:[-1.5,0,0],armL:[-1.2,0,-.6],foreL:[-1.5,0,0],legR:[-.6,0,0],shinR:[1.2,0,0],legL:[-.6,0,0],shinL:[1.2,0,0],body:[0,0,0]}],[14,{armR:[-1.2,0,.6],armL:[-1.2,0,-.6],body:[0,0,0]}],[16,{armR:[-.5,0,-1.3],armL:[-.5,0,1.3],foreR:[0,0,0],foreL:[0,0,0],flare:.9,body:[0,0,0]}],[38,Yi]]},downb:{total:32,reflect:[3,22],fall:.35,landContinue:!0,alpha:.7,hit:[we(3,4,0,.85,1,5,80,55,35,{away:!0})],onStart(n){n.grounded||(n.vy=Math.max(n.vy,0))},onFrame(n,t){t>=3&&t<=22&&t%3===0&&n.battle.effects.ring(n.x,n.y+.9,10479871,2.3,10),t===3&&vt.reflect()},anim:[[0,he],[3,{armR:[0,0,-1.6],armL:[0,0,1.6],foreR:[0,0,0],foreL:[0,0,0],flare:.9,head:[-.2,0,0],torso:[-.1,0,0]}],[22,{armR:[0,0,-1.5],armL:[0,0,1.5],flare:.7}],[32,he]]},final:{total:150,fs:!0,intang:[0,150],noGravity:[0,150],noDrift:!0,keepVel:!0,alpha:.35,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,48)},onFrame(n,t){let e=n.battle,i=e.effects;n.vx=0,t<48?(n.vy=t<30?.03:0,n.grounded&&(n.grounded=!1,n.surface=null,n.y+=.03),t%2===0&&i.sparkle(n.x,n.y+.9,t%4?13660415:16773296,2,1.2)):n.vy=0;let s=n.x,r=n.y+.9;t===48&&(n.vars.sphere=e.addFx(new Bc(e,s,r)),vt.warp(),e.shakeCam(.3));let a=n.vars.sphere;if(a){if(t>=48&&t<=66){let o=.5+(t-48)/18*6;a.setRadius(o),e.fsTrap(n,s,r,o)}t>66&&t<130&&t%7===0&&(e.fsDamage(n,3),i.ring(s,r,16751856,5,12)),t===130&&(e.fsLaunch(n,{dmg:10,ang:55,bkb:110,kbg:105}),i.koBlast(s,r,13660415),i.ring(s,r,16777215,12,30),e.shakeCam(.7),vt.fsBoom()),t>130&&a.setRadius(Math.max(.01,a.mesh.scale.x*.7)),t===140&&(e.removeFx(a),n.vars.sphere=null)}},onEnd(n){n.vars.sphere&&(n.battle.removeFx(n.vars.sphere),n.vars.sphere=null),n.battle.fsRelease(n)},anim:[[0,he],[20,{body:[-.2,0,0],armR:[-2.8,0,-.5],armL:[-2.8,0,.5],foreR:[0,0,0],foreL:[0,0,0],legR:[.1,0,-.05],legL:[.1,0,.05],head:[-.4,0,0],earR:[-.6,0,0],earL:[-.6,0,0],flare:1.2}],[48,{armR:[0,0,-1.6],armL:[0,0,1.6],foreR:[0,0,0],foreL:[0,0,0],legR:[-.3,0,-.1],legL:[-.3,0,.1],shinR:[.5,0,0],shinL:[.5,0,0],head:[-.2,0,0],flare:1.4}],[130,{armR:[0,0,-1.5],armL:[0,0,1.5],flare:1.3}],[150,Yi]]},grab:{total:30,hit:[we(6,7,.75,1,.45,0,0,0,0,{type:"grab"})],anim:[[0,he],[6,{armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.25,0,0],bz:.1}],[14,{armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.2,0,0]}],[30,he]]},dashgrab:{total:36,keepVel:!0,hit:[we(8,9,.95,1,.5,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,he],[8,{armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,0,0],bz:.15}],[20,{armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.3,0,0]}],[36,he]]},pummel:{total:16,pummelAt:5,pummelDmg:1.5,anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.15,0,0]}],[5,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.3,0,0],head:[.4,0,0],earR:[1,0,0],earL:[1,0,0]}],[16,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.15,0,0]}]]},fthrow:{total:30,throwAt:10,throwHit:{dmg:8,ang:40,bkb:65,kbg:65},hold:n=>[.75+Math.max(0,n-6)*.08,.15],anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[6,{armR:[-.8,0,.1],foreR:[-1.4,0,0],armL:[-.8,0,-.1],foreL:[-1.4,0,0],torso:[-.1,0,0]}],[10,{armR:[-1.6,0,-.1],foreR:[0,0,0],armL:[-1.6,0,.1],foreL:[0,0,0],torso:[.3,0,0],bz:.15,flare:.4}],[30,he]]},bthrow:{total:34,throwAt:14,throwHit:{dmg:10,ang:140,bkb:55,kbg:85},hold:n=>{let t=Math.min(1,n/14);return[.8*Math.cos(Math.PI*t),.25+.6*Math.sin(Math.PI*t)]},anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[14,{body:[0,Math.PI,0],armR:[-2.2,0,-.3],armL:[-2.2,0,.3],flare:.8}],[22,{body:[0,Math.PI*2,0],armR:[-1.4,0,-.3],armL:[-1.4,0,.3]}],[34,{...he,body:[0,Math.PI*2,0]}]]},uthrow:{total:36,throwAt:12,throwHit:{dmg:8,ang:90,bkb:75,kbg:72},hold:n=>[.5-n*.03,.2+n*.13],anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[12,{armR:[-3,0,-.1],foreR:[0,0,0],armL:[-3,0,.1],foreL:[0,0,0],by:.1,earR:[-1,0,0],earL:[-1,0,0]}],[36,he]]},dthrow:{total:36,throwAt:14,throwHit:{dmg:6,ang:75,bkb:55,kbg:45},hold:n=>[.75,Math.max(0,.15-n*.02)],onFrame(n,t){t===14&&n.battle.effects.dust(n.x+n.facing*.7,n.y,6,0)},anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[8,{by:.2,legR:[-1.2,0,-.1],shinR:[1.6,0,0],armR:[-2.5,0,-.5],armL:[-2.5,0,.5]}],[14,{by:-.1,legR:[-.6,0,-.1],shinR:[.2,0,0],torso:[.3,0,0],armR:[-.5,0,-.8],armL:[-.5,0,.8]}],[36,he]]},getupattack:{total:30,intang:[0,9],alpha:.8,hit:[we(8,10,1,.4,.6,7,40,60,50,{away:!0}),we(8,10,-1,.4,.6,7,40,60,50,{away:!0})],anim:[[0,{by:-.5,torso:[.4,0,0]}],[8,{by:-.3,body:[0,0,0],legR:[-1.4,0,-.5],armR:[0,0,-1.4],armL:[0,0,1.4],flare:1}],[14,{by:-.3,body:[0,Math.PI*2,0],legR:[-1.4,0,-.5],flare:.8}],[30,{...he,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:34,intang:[0,10],trail:"footR",trailF:[8,14],hit:[we(10,13,1,.5,.65,8,40,60,50)],anim:[[0,{by:-.3,torso:[.5,0,0]}],[10,{legR:[-1.55,0,-.1],shinR:[.1,0,0],torso:[-.3,.2,0],armR:[.4,0,-1.1],armL:[.3,0,1.1]}],[18,{legR:[-1.4,0,-.1],torso:[-.2,0,0]}],[34,he]]}},Ru={id:"illumine",name:"\u30A4\u30EB\u30DF\u30CD",en:"ILLUMINE",title:"\u5BB5\u95C7\u306E\u86FE\u59EB",color:12938239,css:"#c56bff",desc:"\u5149\u308B\u88CF\u5730\u306E\u8863\u3092\u307E\u3068\u3044\u3001\u7A7A\u4E2D\u30B8\u30E3\u30F3\u30D72\u56DE\u3068\u30EF\u30FC\u30D7\u3067\u81EA\u5728\u306B\u821E\u3046\u8EFD\u91CF\u7D1A\u306E\u9B54\u6CD5\u30D5\u30A1\u30A4\u30BF\u30FC\u3002",specials:["\u30B7\u30E3\u30C9\u30A6\u30A2\u30ED\u30FC\uFF08\u6F06\u9ED2\u306E\u5F13\u30FB\u305F\u3081\u6483\u3061\uFF09","\u30A6\u30A3\u30B9\u30D7\u30C0\u30C3\u30B7\u30E5\uFF08\u7A81\u9032\uFF09","\u30E0\u30FC\u30F3\u30EF\u30FC\u30D7\uFF08\u77AC\u9593\u79FB\u52D5\uFF09","\u30A8\u30AF\u30EA\u30D7\u30B9\u30F4\u30A7\u30FC\u30EB\uFF08\u53CD\u5C04\uFF09"],stats:{weight:82,height:1.75,radius:.36,walkSpeed:.085,dashSpeed:.175,dashFrames:10,runSpeed:.16,traction:.009,airSpeed:.105,airAccel:.009,airFriction:.0025,gravity:.0078,fallSpeed:.145,fastFall:.23,jumpV:.216,hopV:.136,djV:.2,airJumps:2,jumpsquat:3,rollSpeed:.14},grabHold:[.75,.15],buildModel:uf,anims:zr({idle:he,hipY:Uc,bob:1.6,runExtra:n=>({armR:[.9,0,-.35],armL:[.9,0,.35],foreR:[-.3,0,0],foreL:[-.3,0,0],torso:[.45,0,0],flare:.25}),override:{victory:n=>{let t=n*.05;return{body:[0,Math.min(1,n/40)*Math.PI*2,0],armR:[-2.6,0,-.6+Math.sin(t)*.1],armL:[.2,0,.5],foreR:[-.3,0,0],legR:[-.2,0,-.1],legL:[.3,0,.2],shinL:[.8,0,0],torso:[-.1,0,.1],head:[-.2,0,.15],flare:.3+Math.sin(t*2)*.1,by:.12+Math.sin(t)*.05}}}}),moves:Gy}});function xf(n=0){let t=gf[n%gf.length],e=new Zt,i={},s={},r=Or(t.silver,{rough:.33,metal:.8,env:1}),a=Or(t.gold,{rough:.34,metal:.78,env:1}),o=a.clone();o.side=ke;let l=Bi(t.navy,{rough:.7,metal:.2,env:.4,side:Ye}),c=Bi(t.navy,{rough:.7,metal:.2,env:.4}),h=Or(t.blade,{rough:.12,metal:1,env:1.3}),d=new ni({color:1316638,roughness:.3,metalness:.6,envMapIntensity:.6,side:ke}),u=new ni({map:tf(...t.plume),roughness:.8,metalness:0,envMapIntensity:.25,side:ke,color:10132122}),f=Kd(t.goldHex,t.ink),g=new ni({map:f,metalness:.6,roughness:.45,envMapIntensity:.45,emissive:2892806}),y=new ni({map:Qd(t.goldHex,t.ink),metalness:.6,roughness:.4,envMapIntensity:.9,emissive:3813384}),m=Li(t.eye,1.15),p=Or(t.gem,{rough:.1,metal:.3,env:1.4,emissive:new gt(t.gem).multiplyScalar(.25)}),b=[r,a,o,g,y,h],w=b.map(U=>U.emissive.clone()),_=Be("body",e,0,Oc,0);i.body=_;let E=Be("hips",_);i.hips=E;let S=Be("torso",E);i.torso=S;let A=new Zt;A.scale.set(.74,1,.76),E.add(A),Y(rt(new Yt(.15,20,14),c),A,0,.12,0,0,0,0,[1,.6,.8]),Y(fi(si([[.215,.18],[.225,.2],[.225,.27],[.215,.29]],28),r,l),A,0,0,0,0,0,0,[1,1,.82]),Y(rt(new Si(.222,.016,8,32),a),A,0,.29,0,Math.PI/2,0,0,[1,.82,1]);let v=(U,nt,pt,V)=>{let tt=fi(si([[.22,.18],[.255,.1],[.31,-.03],[.345,-.1-pt]],20,U,nt),r,l);tt.scale.set(1,1,.84),V.add(tt);let yt=rt(new Si(.345,.015,6,20,nt),a);yt.rotation.set(Math.PI/2,0,-U+Math.PI/2-nt),yt.position.y=-.1-pt,yt.scale.set(1,.84,1),V.add(yt)};v(Math.PI*.2,Math.PI*.55,.12,A),v(Math.PI*.78,Math.PI*.44,.08,A),v(Math.PI*1.25,Math.PI*.42,.04,A),v(Math.PI*1.7,Math.PI*.46,-.13,A);let T=new Zt;Y(T,A,-.09,.14,.215,.12,-.3,0,1.45);let C=new Mi;C.moveTo(0,.1),C.lineTo(.065,.06),C.lineTo(.06,-.05),C.lineTo(0,-.13),C.lineTo(-.06,-.05),C.lineTo(-.065,.06),C.lineTo(0,.1),Y(rt(new Vi(C,{depth:.02,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),a),T,0,-.02,.012),Y(rt(new Yt(.03,14,10),p),T,0,0,.045,0,0,0,[1,.8,.6]),Y(rt(new qe(.13,.14,.14,20,1,!0),c),S,0,.3,0),Y(fi(si([[.12,.35],[.18,.39],[.275,.47],[.32,.56],[.295,.635],[.2,.685],[.14,.7]],32),r,l),S,0,0,.02,0,0,0,[1,1,.78]);for(let U of[-1,1])Y(rt(new ss(.022,.2,4,8),a),S,U*.085,.6,.235,.35,0,U*1.05);for(let U=0;U<4;U++){let nt=.64-U*.075,pt=[.25,.3,.29,.25][U],V=rt(new _e(.036,.11,4),a);Y(V,S,0,nt,.02+pt*.78+.01,.35,0,0,[1,1,.6])}Y(rt(new ei(.045,.3,.03),a),S,0,.5,.02+.3*.78-.005,-.05),Y(rt(new qe(.07,.08,.1,12),c),S,0,.72,0);for(let U of[-1,1]){let nt=new Zt;Y(nt,S,U*.345,.63,0,0,0,U*-.3,1.04),Y(fi(new Yt(.2,24,16,0,Math.PI*2,0,Math.PI*.6),r,l),nt,0,0,0,0,0,0,[1.12,.88,1.08]),Y(rt(new Si(.2*Math.sin(Math.PI*.6)*1.12,.03,8,28),a),nt,0,.2*Math.cos(Math.PI*.6)*.88,0,Math.PI/2,0,0,[1,.98,1.1]);let pt=rt(new _e(.075,.32,10),a);Y(pt,nt,U*.17,.15,.02,0,0,U*-.7);let V=rt(new _e(.06,.24,10),a);Y(V,nt,U*.22,.03,-.09,-.5,0,U*-1.15),Y(rt(new _e(.058,.22,10),a),nt,U*.2,.05,.11,.6,0,U*-1.05)}let k=new Zt;Y(k,S,0,.31,-.27,-.08,Math.PI,0,.92);let z=new Rn(.36,48),I=z.attributes.position;for(let U=0;U<I.count;U++){let nt=Math.hypot(I.getX(U),I.getY(U))/.36;I.setZ(U,.07*(1-nt*nt))}z.computeVertexNormals(),Y(rt(z,y),k,0,0,0),Y(rt(new Yt(.5,32,10,0,Math.PI*2,0,.37),a),k,0,0,-.43,Math.PI/2,0,0),Y(rt(new Si(.385,.055,12,48),r),k,0,0,0,0,0,0,[1,1,.45]),Y(rt(new Rn(.39,32),c),k,0,0,-.03,0,Math.PI,0);let G=Be("head",S,0,.7,0);i.head=G;let J=new Zt;Y(J,G,0,.02,.02,0,0,0,[.84,.74,.84]),Y(fi(si([[.155,.18],[.152,.23],[.135,.29],[.095,.335],[.045,.358],[0,.364]],28),r,l),J,0,0,0,0,0,0,[.96,1,1.05]),Y(fi(si([[.13,-.02],[.152,.05],[.16,.13],[.155,.185]],28,Math.PI*.24,Math.PI*1.52),r,l),J,0,0,0,0,0,0,[.96,1,1.05]),Y(rt(new Yt(.128,18,14),Li(656904)),J,0,.11,0),Y(rt(new Yt(.03,14,10),m),J,0,.14,.112,0,0,0,[1.7,.9,.5]),Y(rt(new Yt(.016,10,8),Li(16764992,1.3)),J,0,.133,.126,0,0,0,[1.3,.55,.5]);let K=Yn(64,64,U=>{let nt=U.createRadialGradient(32,32,0,32,32,32);nt.addColorStop(0,"rgba(255,255,255,1)"),nt.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=nt,U.fillRect(0,0,64,64)}),ft=new gi(new ci({map:K,color:t.eye,transparent:!0,opacity:.55,blending:Fe,depthWrite:!1}));ft.scale.setScalar(.16),ft.position.set(0,.138,.14),ft.userData.keep=!0,J.add(ft);let Q=qn(96,10,(U,nt,pt)=>{let V=(U-.5)*2,tt=Math.pow(Math.abs(Math.cos((U-.5)*Math.PI*8)),.6),yt=.035+nt*(.16-.03*Math.abs(V)+.014*tt),zt=Math.sin(V)*yt*1.1,_t=.155+Math.cos(V)*yt,St=zt/.165,Ot=Math.max(0,(_t-.17)/.19),Kt=.178-.05*Ot*Ot+.02*tt*(.4+.6*nt);pt.set(Math.sin(St)*Kt*.96,_t,Math.cos(St)*Kt*1.05)});Y(rt(Q,o),J,0,0,0);let ct=[[-.1,.1,.112,.5],[-.054,.15,.142,.25],[0,.2,.152,0],[.054,.15,.142,-.25],[.1,.1,.112,-.5]];for(let[U,nt,pt,V]of ct){let tt=rt(new _e(.04,nt,4),a);Y(tt,J,U,.112-nt/2,pt,Math.PI+.1,V+Math.PI/4,U*1.6,[1,1,.45])}for(let U of[-1,1])Y(rt(new Yt(.048,16,12),a),J,U*.152,.15,-.005,0,0,0,[.6,1,1]);let ot=new Mi,Ht=.13,It=.4,ie=26,ee=.45,fe=Math.PI-.1;ot.moveTo(Ht*Math.cos(ee),Ht*Math.sin(ee));for(let U=0;U<=ie;U++){let nt=ee+U/ie*(fe-ee),pt=It*(U%2?.95:1)*(.72+.28*Math.sin(U/ie*Math.PI*.75+.5));ot.lineTo(pt*Math.cos(nt),pt*Math.sin(nt))}for(let U=ie;U>=0;U--){let nt=ee+U/ie*(fe-ee);ot.lineTo(Ht*Math.cos(nt),Ht*Math.sin(nt))}let it=new Vi(ot,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.016,bevelSegments:2,curveSegments:4});it.translate(0,0,-.02);let at=it.attributes.uv;for(let U=0;U<at.count;U++)at.setXY(U,at.getX(U)/.84+.5,at.getY(U)/.84+.5);let wt=rt(it,u);Y(wt,J,0,.2,-.02,0,-Math.PI/2,0);let Gt={},At={};for(let U of[-1,1]){let nt=U<0,pt=Be(nt?"armR":"armL",S,U*.36,.57,0);i[nt?"armR":"armL"]=pt,Y(rt(new Yt(.075,14,10),c),pt,0,-.02,0),Y(fi(si([[.095,-.05],[.112,-.11],[.112,-.18],[.098,-.25],[.082,-.3]],20),r,l),pt,0,0,0),Y(rt(new Yt(.06,12,10),c),pt,0,-.35,0);let V=Be(nt?"foreR":"foreL",pt,0,-.35,0);i[nt?"foreR":"foreL"]=V,Y(fi(si([[.128,.01],[.116,-.06],[.09,-.17],[.086,-.27],[.094,-.3]],20),r,l),V,0,0,0),Y(rt(new Si(.126,.013,8,22),a),V,0,.005,0,Math.PI/2,0,0,[1,1,1.4]);let tt=new Zt;tt.userData.joint=!0,Y(tt,V,0,-.42,0,0,0,0,1.55),At[U]=tt;let yt=nt;Y(rt(new Yt(.06,14,10),r),tt,0,0,0,0,0,0,[1,1.15,.7]),Y(rt(new qe(.058,.062,.05,12),r),tt,0,.055,0),Y(rt(new Si(.058,.01,6,16),a),tt,0,.08,0,Math.PI/2,0,0);for(let _t=0;_t<4;_t++){let St=(_t-1.5)*.028,Ot=new Zt;Y(Ot,tt,St*U,-.07,.01,yt?-1.2:-.35,0,0),Y(rt(new ss(.014,.035,3,6),r),Ot,0,-.025,0);let Kt=new Zt;Y(Kt,Ot,0,-.055,0,yt?-1.3:-.5,0,0),Y(rt(new ss(.013,.03,3,6),r),Kt,0,-.02,0)}let zt=new Zt;Y(zt,tt,U*-.055,-.02,.03,-.6,0,U*.7),Y(rt(new ss(.015,.05,3,6),r),zt,0,-.03,0),Gt[nt?"handR":"handL"]=null}let j=Be("wep",At[-1],0,-.02,0);j.scale.setScalar(.76),i.wep=j,Y(rt(new qe(.024,.026,.26,12),a),j,0,0,-.01,Math.PI/2,0,0);for(let U of[-.09,0,.08])Y(rt(new Si(.027,.007,6,14),a),j,0,0,U);Y(rt(new qe(.04,.045,.05,8),a),j,0,0,-.16,Math.PI/2,0,0),Y(rt(new Yt(.03,10,8),a),j,0,0,-.195);let bt=new Mi;bt.moveTo(0,.05),bt.quadraticCurveTo(.09,.32,-.26,.42),bt.quadraticCurveTo(-.03,.25,-.1,.05),bt.lineTo(0,.05);let $=new Vi(bt,{depth:.07,bevelEnabled:!0,bevelSize:.016,bevelThickness:.014,bevelSegments:2,curveSegments:10});$.translate(0,0,-.035),Y(rt($,a),j,0,0,.15,0,-Math.PI/2,0),Y(rt(new ei(.06,.34,.05),a),j,0,0,.15);let Z=new Mi;Z.moveTo(.14,-.095),Z.lineTo(1.2,-.08),Z.lineTo(1.46,0),Z.lineTo(1.2,.08),Z.lineTo(.14,.095),Z.lineTo(.14,-.095);let dt=new Vi(Z,{depth:.012,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:2});dt.translate(0,0,-.006),Y(rt(dt,h),j,0,0,0,0,-Math.PI/2,0);let ut=new Mi;ut.moveTo(.45,-.035),ut.lineTo(1.2,-.025),ut.lineTo(1.36,0),ut.lineTo(1.2,.025),ut.lineTo(.45,.035),ut.lineTo(.45,-.035);let xt=new Ls(ut);for(let U of[-1,1])Y(rt(xt,d),j,U*.0195,0,0,0,-Math.PI/2,0);let Ct=new Mi;Ct.moveTo(.13,-.11),Ct.lineTo(.44,-.098),Ct.lineTo(.56,0),Ct.lineTo(.44,.098),Ct.lineTo(.13,.11),Ct.lineTo(.13,-.11);let Lt=new Vi(Ct,{depth:.03,bevelEnabled:!0,bevelSize:.01,bevelThickness:.008,bevelSegments:2});Lt.translate(0,0,-.015);let Bt=Lt.attributes.uv;for(let U=0;U<Bt.count;U++)Bt.setXY(U,(Bt.getX(U)-.13)/.43,(Bt.getY(U)+.11)/.22);Y(rt(Lt,g),j,0,0,0,0,-Math.PI/2,0);let jt=new ce;jt.position.set(0,0,.45),j.add(jt);let D=new ce;D.position.set(0,0,1.45),j.add(D),Gt.sword=[jt,D],Gt.handR=Gt.sword;let de=new ce;de.position.set(0,-.05,0),At[1].add(de);let se=new ce;se.position.set(.1,-.35,.2),At[1].add(se),Gt.handL=[de,se];for(let U of[-1,1]){let nt=U<0,pt=Be(nt?"legR":"legL",E,U*.17,-.02,0);i[nt?"legR":"legL"]=pt,Y(rt(new Yt(.055,12,10),c),pt,0,-.05,0),Y(fi(si([[.172,-0],[.176,-.07],[.15,-.3],[.118,-.45]],24),r,l),pt,0,0,0,0,0,0,[1,1,.84]),Y(rt(new Yt(.058,12,10),c),pt,0,-.49,0);let V=Be(nt?"shinR":"shinL",pt,0,-.5,0);i[nt?"shinR":"shinL"]=V,Y(rt(new Yt(.06,12,8,0,Math.PI*2,0,Math.PI/2),a),V,0,0,.07,Math.PI/2,0,0,[1,1,.6]),Y(rt(new _e(.07,.36,6),a),V,0,.17,.105,-.12,0,0,[1,1,.5]),Y(fi(si([[.118,0],[.116,-.1],[.112,-.23],[.078,-.42],[.07,-.52],[.074,-.57]],24),r,l),V,0,0,-.015,0,0,0,[1,1,1.22]),Y(rt(new _e(.04,.12,4),r),V,0,-.02,.095,Math.PI,0,0,[1,1,.4]);let tt=new Zt;Y(tt,V,0,-.64,.03,0,0,0,[1.3,1.3,1.45]),Y(rt(new ei(.09,.012,.22),Or(10122288,{rough:.5,metal:.5,env:.7})),tt,0,-.055,.035),Y(rt(new Yt(1,16,12),r),tt,0,-.005,.05,0,0,0,[.066,.058,.15]),Y(rt(new _e(.045,.1,8),r),tt,0,-.02,.2,Math.PI/2,0,0,[1,1,.6]);for(let _t=0;_t<3;_t++){let St=rt(new qe(.06,.065,.13,14,1,!1,-Math.PI/2,Math.PI),r);Y(St,tt,0,0,-.03+_t*.065,Math.PI/2,0,Math.PI/2,[1,1,.75-_t*.12])}Y(rt(new Yt(.06,12,8),r),tt,0,-.005,.14,0,0,0,[1,.55,1.1]),Y(rt(new Si(.063,.01,6,16,Math.PI),a),tt,0,0,.06,0,Math.PI/2,0,[1,1,1]);let yt=new ce;yt.position.set(0,-.35,.05),V.add(yt);let zt=new ce;zt.position.set(0,-.7,.18),V.add(zt),Gt[nt?"footR":"footL"]=[yt,zt]}gs(e),e.traverse(U=>{U.isMesh&&(U.castShadow=!1,U.receiveShadow=!1)});let R={j:i,base:s,hipY:Oc,flare:0},x=new ce;x.position.set(0,.3,.9),_.add(x);let H=kr(0,null,1.1),W=0;return{root:e,rig:R,trails:Gt,worldObjects:[],orbPoint:x,shadow:H,height:2.1,headY:2.55,trailColor:n?9425151:16769930,update(U){W+=U,ft.material.opacity=.45+.2*Math.sin(W*9)*Math.sin(W*3.1)},setFlash(U,nt){b.forEach((pt,V)=>{pt.emissive.copy(w[V]),nt>0&&pt.emissive.lerp(U,nt*.8)})},dispose(){Hs(e)}}}var gf,Oc,yf=We(()=>{Ci();Hr();Dc();gf=[{silver:13684944,gold:15776812,navy:1448747,plume:["#d2330c","#8a1604","#ff6a24"],eye:16747038,blade:16119802,gem:10473727,goldHex:"#f0c04a",ink:"#a8741c"},{silver:4870244,gold:13161188,navy:724504,plume:["#2d7bff","#0c3aa0","#7ac4ff"],eye:5236479,blade:15265528,gem:16738954,goldHex:"#c8d2e4",ink:"#6a7890"}],Oc=1.2});var xe,kt,pn,Zi,Ji,Vy,Au,vf=We(()=>{yf();Nc();dn();xs();xe=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),kt={legR:[-.12,0,-.1],shinR:[.08,0,0],legL:[.12,0,.12],shinL:[.24,0,0],by:-.03,hips:[0,.12,.04],torso:[.06,.06,-.05],head:[.08,-.12,.04],armR:[-.95,-.46,-.87],foreR:[-2.3,0,0],wep:[.37,-.2,-.43],armL:[.05,0,.2],foreL:[-.3,0,0]},pn={legR:[-.5,0,-.1],shinR:[.8,0,0],legL:[.2,0,.1],shinL:[.5,0,0],armR:[-.5,0,-.5],foreR:[-.6,0,0],wep:[1.2,0,0],armL:[-.6,0,.5],foreL:[-1,0,0],torso:[.1,0,0]},Zi={legR:[-1.1,0,-.1],shinR:[1.6,0,0],legL:[-.8,0,.1],shinL:[1.4,0,0]},Ji={legR:[-.9,0,-.1],shinR:[.8,0,0],legL:[.7,0,.1],shinL:[.15,0,0],by:-.22},Vy={jab1:{total:20,next:"jab2",nextWin:[7,19],trail:"sword",trailF:[3,8],sfx:[3,"slash",.3],hit:[xe(5,6,1.2,1.15,.5,4,72,8,25),xe(5,6,.6,1.1,.45,4,72,8,25)],anim:[[0,kt],[3,{...kt,armR:[-1.3,0,-.9],foreR:[-.3,0,0],wep:[1.4,0,0],torso:[.1,-.35,0]}],[6,{...kt,armR:[-1.45,0,.25],foreR:[-.1,0,0],wep:[1.5,0,0],torso:[.15,.45,0]}],[14,{...kt,armR:[-1.3,0,.1],foreR:[-.2,0,0],wep:[1.4,0,0],torso:[.12,.35,0]}],[20,kt]]},jab2:{total:28,trail:"handL",trailF:[3,8],sfx:[3,"whoosh",.5],hit:[xe(5,7,.95,1.1,.62,5,40,45,72)],anim:[[0,{...kt,armR:[-1.3,0,.1],torso:[.12,.35,0]}],[5,{...kt,armL:[-1.45,0,.1],foreL:[-.3,0,0],torso:[.25,-.6,0],armR:[.3,0,-.5],bz:.18}],[16,{...kt,armL:[-1.35,0,.1],foreL:[-.4,0,0],torso:[.2,-.5,0],bz:.12}],[28,kt]]},ftilt:{total:34,trail:"sword",trailF:[8,13],sfx:[8,"slash",.6],hit:[xe(9,11,1.8,1.1,.45,11,35,34,96),xe(9,11,1.05,1.1,.5,10,35,34,96)],anim:[[0,kt],[6,{...kt,armR:[.2,0,-.3],foreR:[-1.6,0,0],wep:[1.4,0,0],torso:[-.1,-.4,0]}],[9,{...Ji,armR:[-1.5,0,-.1],foreR:[0,0,0],wep:[1.25,0,0],torso:[.25,.5,0],armL:[-.3,0,.5],foreL:[-1,0,0],bz:.25}],[18,{...Ji,armR:[-1.45,0,-.1],foreR:[0,0,0],wep:[1.25,0,0],torso:[.2,.45,0],armL:[-.3,0,.5],bz:.2}],[34,kt]]},utilt:{total:34,trail:"sword",trailF:[7,14],sfx:[7,"slash",.6],hit:[xe(8,13,0,0,.6,10,92,40,95,{path:[[1.1,1.7],[-.9,1.6]]}),xe(8,13,0,0,.62,10,92,40,95,{path:[[.9,2.6],[-.6,2.6]]})],anim:[[0,kt],[5,{...kt,armR:[-.9,0,-.6],foreR:[-.2,0,0],wep:[.8,0,0],torso:[.2,0,0]}],[8,{...kt,armR:[-1.85,0,-.4],foreR:[-.1,0,0],wep:[1,0,0],torso:[-.05,.1,0],head:[-.3,0,0]}],[13,{...kt,armR:[-2.9,0,-.2],foreR:[-.1,0,0],wep:[.6,0,0],torso:[-.2,.1,0],head:[-.3,0,0]}],[20,{...kt,armR:[-2.85,0,-.2],foreR:[-.1,0,0],wep:[.6,0,0],torso:[-.15,0,0]}],[34,kt]]},dtilt:{total:26,trail:"sword",trailF:[6,10],sfx:[6,"slash",.4],hit:[xe(7,9,1.65,.35,.45,8,30,40,60),xe(7,9,.9,.35,.45,8,30,40,60)],anim:[[0,{by:-.36,torso:[.45,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0],armR:[-.4,0,-.3],foreR:[-.6,0,0],wep:[1.3,0,0],armL:[-.6,0,.3],foreL:[-1,0,0]}],[7,{by:-.38,torso:[.6,.3,0],legR:[-1.3,0,-.1],shinR:[1.7,0,0],legL:[-.3,0,.1],shinL:[1.9,0,0],armR:[-1,0,-.2],foreR:[0,0,0],wep:[.55,0,0],armL:[-.4,0,.4],foreL:[-1,0,0]}],[16,{by:-.38,torso:[.55,.25,0],legR:[-1.3,0,-.1],shinR:[1.7,0,0],legL:[-.3,0,.1],shinL:[1.9,0,0],armR:[-.95,0,-.2],wep:[.6,0,0]}],[26,{by:-.36,torso:[.45,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}]]},dashattack:{total:42,keepVel:!0,trail:"handL",trailF:[7,18],sfx:[7,"whoosh",.7],hit:[xe(8,14,.85,1,.7,12,45,55,72),xe(15,20,.8,1,.6,8,45,40,60)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=18?n.vx=di(n.vx,n.facing*.16,.01):n.friction(2.2),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,kt],[6,{...kt,armL:[-.4,0,.6],foreL:[-1.4,0,0],torso:[.1,-.3,0]}],[9,{legR:[.5,0,-.1],shinR:[.6,0,0],legL:[-.7,0,.1],shinL:[.5,0,0],armL:[-1.5,0,.1],foreL:[-.2,0,0],torso:[.35,-.6,0],armR:[.3,0,-.5],foreR:[-.6,0,0],wep:[1.2,0,0],bz:.2,by:-.1}],[22,{legR:[.4,0,-.1],legL:[-.5,0,.1],armL:[-1.4,0,.1],torso:[.3,-.5,0],armR:[.3,0,-.5],wep:[1.2,0,0],bz:.15}],[42,kt]]},fsmash:{total:58,smash:!0,charge:{f:7,max:60},trail:"sword",trailF:[14,20],sfx:[14,"slash",1],hit:[xe(16,18,1.85,.75,.72,19,36,40,100),xe(16,18,1,1.25,.62,16,36,38,98)],onFrame(n,t){t===17&&(n.battle.effects.ring(n.x+n.facing*1.9,n.y+.2,16765024,2.6,16),n.battle.effects.dust(n.x+n.facing*1.9,n.y,6,n.facing),n.battle.shakeCam(.08))},anim:[[0,kt],[6,{...kt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,-.3,0],head:[-.2,0,0],legR:[-.2,0,-.1],legL:[.4,0,.1]}],[14,{...kt,armR:[-3,0,-.3],foreR:[-.5,0,0],wep:[.2,0,0],torso:[-.35,-.35,0],legR:[-.2,0,-.1],legL:[.45,0,.1]}],[17,{...Ji,armR:[-1.7,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.5,.3,0],armL:[-.2,0,.6],foreL:[-1,0,0],by:-.28,bz:.3}],[30,{...Ji,armR:[-1.6,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.45,.3,0],by:-.26,bz:.25}],[58,kt]]},usmash:{total:54,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[11,18],sfx:[11,"slash",1],hit:[xe(13,17,.3,2.8,.75,17,88,40,98),xe(13,17,.3,1.75,.6,15,85,40,96)],onFrame(n,t){t===13&&n.battle.effects.sparkle(n.x+n.facing*.3,n.y+2.8,16773296,6,.4)},anim:[[0,kt],[6,{by:-.3,torso:[.3,0,0],legR:[-.8,0,-.15],shinR:[1.4,0,0],legL:[-.8,0,.15],shinL:[1.4,0,0],armR:[-.3,0,-.3],foreR:[-1.3,0,0],wep:[.5,0,0],armL:[-.6,0,.3],foreL:[-1.2,0,0]}],[13,{by:.06,torso:[-.15,0,0],head:[-.3,0,0],legR:[.05,0,-.1],legL:[.05,0,.1],armR:[-3.05,0,-.1],foreR:[0,0,0],wep:[1.45,0,0],armL:[-.4,0,.5],foreL:[-1.2,0,0]}],[26,{by:.04,torso:[-.1,0,0],armR:[-3,0,-.1],foreR:[0,0,0],wep:[1.4,0,0],armL:[-.4,0,.5]}],[54,kt]]},dsmash:{total:58,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[8,22],sfx:[8,"slash",.9],hit:[xe(10,11,1.55,.3,.6,15,30,36,98),xe(10,11,.8,.3,.5,13,30,36,96),xe(19,20,-1.55,.3,.6,16,150,38,98),xe(19,20,-.8,.3,.5,14,150,36,96)],anim:[[0,kt],[6,{by:-.35,torso:[.5,-.5,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0],armR:[-1,0,-1],foreR:[0,0,0],wep:[.8,0,0]}],[10,{by:-.38,torso:[.5,.6,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0],armR:[-1.1,0,.4],foreR:[0,0,0],wep:[.8,0,0]}],[15,{by:-.38,body:[0,0,0],torso:[.5,.6,0],armR:[-1.1,0,.4],wep:[1.9,0,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0]}],[19,{by:-.38,body:[0,Math.PI,0],torso:[.5,.6,0],armR:[-1.1,0,.4],wep:[1.9,0,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0]}],[32,{by:-.3,body:[0,Math.PI,0],torso:[.4,.4,0],armR:[-1,0,.3],wep:[1.8,0,0]}],[58,{...kt,body:[0,Math.PI*2,0]}]]},nair:{total:40,aerial:!0,landLag:10,acBefore:5,acAfter:30,alpha:.85,trail:"sword",trailF:[6,13],sfx:[6,"slash",.7],hit:[xe(7,12,0,.95,1.35,10,45,30,90,{away:!0})],anim:(()=>{let n={...Zi,armR:[-1.5,0,-1.1],foreR:[0,0,0],wep:[1.5,0,0],armL:[-.8,0,.8],foreL:[-1.2,0,0]};return[[0,pn],[6,{...n,body:[0,0,0]}],[13,{...n,body:[0,Math.PI*2,0]}],[20,{...n,body:[0,Math.PI*2,0]}],[40,{...pn,body:[0,Math.PI*2,0]}]]})()},fair:{total:42,aerial:!0,landLag:14,acBefore:4,acAfter:32,trail:"sword",trailF:[8,15],sfx:[9,"slash",.7],hit:[xe(10,13,0,0,.7,13,40,32,95,{path:[[1.1,2.2],[1.45,.3]]}),xe(10,13,.6,1.2,.5,10,40,30,90)],anim:[[0,pn],[6,{...Zi,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,.2,0],armL:[-.6,0,.5],foreL:[-1.2,0,0]}],[10,{...Zi,armR:[-2.6,0,-.3],foreR:[-.3,0,0],wep:[.4,0,0],torso:[-.3,.2,0]}],[13,{...Zi,armR:[-.6,0,-.1],foreR:[-.1,0,0],wep:[1.3,0,0],torso:[.5,.25,0],armL:[-.3,0,.6]}],[24,{...Zi,armR:[-.5,0,-.1],wep:[1.3,0,0],torso:[.45,.2,0]}],[42,pn]]},bair:{total:38,aerial:!0,landLag:12,acBefore:4,acAfter:28,trail:"handL",trailF:[6,12],sfx:[7,"whoosh",.7],hit:[xe(8,11,-1.15,1,.72,12,145,38,95)],anim:[[0,pn],[5,{...Zi,torso:[.1,.5,0],armL:[-1.2,0,.3],foreL:[-.8,0,0],head:[0,.3,0]}],[9,{...Zi,torso:[.2,-1.1,0],head:[0,-.8,0],armL:[1.3,0,.5],foreL:[-.3,0,0],armR:[-.8,0,-.6],wep:[1.2,0,0]}],[18,{...Zi,torso:[.2,-1,0],head:[0,-.7,0],armL:[1.2,0,.5],foreL:[-.3,0,0]}],[38,pn]]},uair:{total:38,aerial:!0,landLag:10,acBefore:3,acAfter:28,trail:"sword",trailF:[6,12],sfx:[6,"slash",.6],hit:[xe(7,11,0,0,.7,11,85,32,95,{path:[[1,2.1],[-.9,2.1]]})],anim:[[0,pn],[5,{...Zi,armR:[-1.2,0,-.3],foreR:[-.2,0,0],wep:[.8,0,0],torso:[.1,0,0]}],[8,{...Zi,body:[-.3,0,0],armR:[-2,0,-.2],foreR:[0,0,0],wep:[.7,0,0],head:[-.4,0,0]}],[12,{...Zi,body:[-.35,0,0],armR:[-2.9,0,-.2],foreR:[0,0,0],wep:[.8,0,0],head:[-.4,0,0]}],[22,{...Zi,body:[-.2,0,0],armR:[-2.8,0,-.2],wep:[.8,0,0]}],[38,pn]]},dair:{total:52,aerial:!0,landLag:22,acBefore:3,acAfter:42,trail:"sword",trailF:[12,22],sfx:[13,"slash",.8],hit:[xe(14,18,.1,-.4,.58,15,270,30,88),xe(19,30,.1,-.3,.5,10,70,25,70)],onFrame(n,t){t<13&&(n.gravMult=.25),t===14&&!n.grounded&&(n.vy=Math.min(n.vy,-.26))},anim:[[0,pn],[8,{...Zi,armR:[-2.6,0,-.3],foreR:[-.4,0,0],wep:[2,0,0],torso:[-.1,0,0],by:.1}],[14,{legR:[-.3,0,-.1],shinR:[.5,0,0],legL:[-.1,0,.1],shinL:[.4,0,0],armR:[-.3,0,-.1],foreR:[-.6,0,0],wep:[2.4,0,0],torso:[.2,0,0],armL:[-.6,0,.5],foreL:[-1,0,0]}],[30,{legR:[-.3,0,-.1],shinR:[.5,0,0],armR:[-.3,0,-.1],foreR:[-.6,0,0],wep:[2.4,0,0],torso:[.2,0,0]}],[52,pn]]},neutralb:{total:44,charge:{f:6,max:60},chargeScale:1.2,keepVel:!0,fall:.45,landContinue:!0,trail:"sword",trailF:[13,18],sfx:[13,"slash",.9],hit:[xe(14,17,1.95,1.1,.55,9,38,36,86,{shield:20}),xe(14,17,1.15,1.1,.5,8,38,34,84,{shield:18})],onFrame(n,t){if(t===13?n.vx=n.facing*.2:n.grounded?n.friction(1.2):n.vx*=.94,t===14){let e=n.chargeRatio;n.battle.effects.sparkle(n.x+n.facing*2,n.y+1.1,16773296,4+Math.floor(e*8),.4),e>.7&&n.battle.effects.ring(n.x+n.facing*2,n.y+1.1,16765024,3,16)}},onCharge(n){if(n.charge%4===0){let t=n.model.trails.sword[1].getWorldPosition(n.battle.tmpV);n.battle.effects.sparkle(t.x,t.y,16769930,1,.15)}},anim:[[0,kt],[6,{armR:[.6,0,-.3],foreR:[-1.8,0,0],wep:[1.2,0,0],torso:[-.2,-.6,0],by:-.15,legR:[-.5,0,-.1],shinR:[.6,0,0],legL:[.5,0,.1],shinL:[.4,0,0],armL:[-.6,0,.4],foreL:[-1.3,0,0]}],[14,{...Ji,armR:[-1.55,0,-.05],foreR:[0,0,0],wep:[1.3,0,0],torso:[.3,.6,0],by:-.25,bz:.35,armL:[-.2,0,.6]}],[26,{...Ji,armR:[-1.5,0,-.05],foreR:[0,0,0],wep:[1.28,0,0],torso:[.25,.5,0],bz:.25}],[44,kt]]},sideb:{total:48,armor:[8,30],noGravity:[0,30],keepVel:!0,noDrift:!0,canLeaveGround:!0,ledgeGrab:10,landContinue:!0,hit:[xe(8,30,.85,1,.72,10,42,60,65)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){t<8?(n.vx=di(n.vx,0,.02),n.grounded||(n.vy=.004)):t<=30?(n.vx=n.facing*.28,n.vy=n.grounded?0:.025,t===8&&vt.whoosh(1),t%3===0&&(n.grounded&&n.battle.effects.dust(n.x-n.facing*.4,n.y,1,-n.facing),n.battle.effects.sparkle(n.x+n.facing*.9,n.y+1,16769930,1,.4))):n.vx*=.85},anim:[[0,kt],[6,{...kt,armL:[-.3,0,.6],foreL:[-1.5,0,0],torso:[-.1,-.4,0],by:-.2,legR:[-.6,0,-.1],shinR:[.9,0,0],legL:[.4,0,.1],shinL:[.6,0,0]}],[9,{armL:[-1.5,0,.15],foreL:[-.3,0,0],torso:[.4,-.7,0],armR:[.4,0,-.4],foreR:[-.8,0,0],wep:[1,0,0],legR:[.6,0,-.1],shinR:[.4,0,0],legL:[-.7,0,.1],shinL:[.6,0,0],by:-.12,bz:.2}],[30,{armL:[-1.5,0,.15],foreL:[-.3,0,0],torso:[.4,-.7,0],armR:[.4,0,-.4],wep:[1,0,0],legR:[-.6,0,-.1],shinR:[.4,0,0],legL:[.6,0,.1],shinL:[.6,0,0],by:-.12,bz:.2}],[48,kt]]},upb:{total:42,helpless:!0,helplessLag:24,ledgeGrab:14,noDrift:!0,keepVel:!0,noGravity:[4,24],alpha:.9,trail:"sword",trailF:[4,24],hit:[xe(5,7,.3,1.2,.95,3,88,40,8,{group:1,link:!0}),xe(9,11,.3,1.3,.95,3,88,40,8,{group:2,link:!0}),xe(13,15,.3,1.4,.95,3,88,40,8,{group:3,link:!0}),xe(19,22,.3,1.9,1.05,6,75,60,90,{group:4})],onStart(n){n.upBUsed=!0,n.vx*=.4},onFrame(n,t){t<4&&(n.vy=n.grounded?0:Math.max(n.vy,0)*.5),t===4&&(n.grounded=!1,n.surface=null,n.y+=.02,vt.whoosh(1),n.battle.effects.ring(n.x,n.y+.2,16765024,2,14)),t>=4&&t<=24&&(n.vy=.36*(1-(t-4)/21)+.015,n.vx=di(n.vx,n.input.stick.x*.12,.014),t%2===0&&n.battle.effects.sparkle(n.x,n.y+1,16769930,1,.5)),t>24&&n.drift(.6),t%4===1&&t<22&&vt.slash(.3)},anim:(()=>{let n={armR:[-2.2,0,-.9],foreR:[0,0,0],wep:[1.2,0,0],armL:[-.5,0,.8],foreL:[-1.2,0,0],legR:[-.3,0,-.1],shinR:[.6,0,0],legL:[.1,0,.1],shinL:[.3,0,0],head:[-.3,0,0]};return[[0,{...kt,by:-.25,legR:[-.8,0,-.15],shinR:[1.4,0,0],legL:[-.8,0,.15],shinL:[1.4,0,0]}],[4,{...n,body:[0,0,0]}],[12,{...n,body:[0,Math.PI*3,0]}],[22,{...n,body:[0,Math.PI*6,0]}],[42,{...pn,body:[0,Math.PI*6,0]}]]})()},downb:{total:50,counter:[5,28],fall:.3,landContinue:!0,onFrame(n,t){t===5&&vt.counter()},anim:[[0,kt],[5,{armL:[-1.5,0,.35],foreL:[-.6,0,0],torso:[.1,-.7,0],armR:[.3,0,-.5],foreR:[-.8,0,0],wep:[.9,0,0],by:-.14,legR:[-.5,0,-.1],shinR:[.7,0,0],legL:[.5,0,.1],shinL:[.4,0,0]}],[28,{armL:[-1.45,0,.35],foreL:[-.6,0,0],torso:[.1,-.6,0],armR:[.3,0,-.5],wep:[.9,0,0],by:-.12}],[50,kt]]},counterhit:{total:36,intang:[0,14],trail:"sword",trailF:[4,10],sfx:[5,"slash",1],alpha:.7,hit:[xe(6,9,1.5,1.1,.85,n=>Se(n.counterDmg*1.3,8,35),38,60,88)],onFrame(n,t){t===6&&n.battle.effects.ring(n.x+n.facing*1.4,n.y+1.1,16773296,3,14)},anim:[[0,{...kt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,-.3,0]}],[6,{...Ji,armR:[-1.6,0,.2],foreR:[0,0,0],wep:[1.3,0,0],torso:[.5,.5,0],bz:.3}],[20,{...Ji,armR:[-1.5,0,.2],wep:[1.3,0,0],torso:[.4,.4,0],bz:.25}],[36,kt]]},final:{total:100,fs:!0,intang:[0,100],noGravity:[0,100],noDrift:!0,keepVel:!0,trail:"sword",trailF:[50,60],onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,45)},onFrame(n,t){let e=n.battle,i=e.effects;if(n.vx=0,n.grounded||(n.vy=0),t<45&&t%2===0){let s=n.model.trails.sword[1].getWorldPosition(e.tmpV);i.sparkle(s.x,s.y,t%4?16765024:16777215,2,.4)}t===54&&(e.spawnProjectile(n,{x:n.x+n.facing*1.6,y:n.y+1.2,vx:n.facing*.42,vy:0,r:1.9,dmg:32,ang:38,bkb:110,kbg:92,life:90,color:16765024,kind:"fswave",fs:!0}),e.shakeCam(.5),vt.fsBoom())},anim:[[0,kt],[20,{...kt,armR:[-3,0,-.2],foreR:[0,0,0],wep:[1.5,0,0],torso:[-.2,0,0],head:[-.4,0,0],armL:[-.4,0,.6],legR:[-.2,0,-.15],legL:[.2,0,.15]}],[45,{...kt,armR:[-3,0,-.2],foreR:[0,0,0],wep:[1.5,0,0],torso:[-.25,0,0],head:[-.4,0,0]}],[50,{...kt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.35,-.3,0]}],[55,{...Ji,armR:[-1.7,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.5,.3,0],by:-.28,bz:.3}],[80,{...Ji,armR:[-1.6,0,-.1],wep:[1.6,0,0],torso:[.45,.3,0],by:-.26,bz:.25}],[100,kt]]},grab:{total:34,hit:[xe(7,8,.85,1.05,.5,0,0,0,0,{type:"grab"})],anim:[[0,kt],[7,{...kt,armL:[-1.5,0,-.1],foreL:[0,0,0],armR:[-1,0,-.3],torso:[.25,-.3,0],bz:.12}],[16,{...kt,armL:[-1.4,0,-.1],foreL:[-.1,0,0],torso:[.2,-.2,0]}],[34,kt]]},dashgrab:{total:40,keepVel:!0,hit:[xe(9,10,1.05,1.05,.55,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,kt],[9,{...kt,armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,-.3,0],bz:.15}],[22,{...kt,armL:[-1.4,0,-.1],torso:[.3,-.2,0]}],[40,kt]]},pummel:{total:18,pummelAt:6,pummelDmg:2,anim:[[0,{...kt,armL:[-1.35,0,-.05]}],[6,{...kt,armL:[-1.35,0,-.05],armR:[-1.2,0,.3],foreR:[-.9,0,0],torso:[.2,.4,0]}],[18,{...kt,armL:[-1.35,0,-.05]}]]},fthrow:{total:34,throwAt:12,throwHit:{dmg:9,ang:40,bkb:70,kbg:68},hold:n=>[.85,.2],anim:[[0,{...kt,armL:[-1.35,0,-.05]}],[8,{...kt,armL:[-.4,0,.5],foreL:[-1.5,0,0],torso:[-.1,-.5,0]}],[12,{...Ji,armL:[-1.5,0,.1],foreL:[-.2,0,0],torso:[.35,-.6,0],bz:.25}],[34,kt]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:11,ang:140,bkb:60,kbg:88},hold:n=>{let t=Math.min(1,n/16);return[.85*Math.cos(Math.PI*t),.3+.5*Math.sin(Math.PI*t)]},anim:[[0,{...kt,armL:[-1.35,0,-.05]}],[16,{...kt,body:[0,Math.PI,0],armL:[-2,0,.3],torso:[.2,0,0]}],[24,{...kt,body:[0,Math.PI*2,0]}],[40,{...kt,body:[0,Math.PI*2,0]}]]},uthrow:{total:40,throwAt:14,throwHit:{dmg:9,ang:90,bkb:75,kbg:75},hold:n=>[.6-n*.03,.2+n*.13],anim:[[0,{...kt,armL:[-1.35,0,-.05]}],[14,{...kt,armL:[-3,0,.1],foreL:[0,0,0],by:.05,head:[-.4,0,0]}],[40,kt]]},dthrow:{total:40,throwAt:16,throwHit:{dmg:7,ang:80,bkb:60,kbg:40},hold:n=>[.85,Math.max(0,.2-n*.02)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.8,n.y,8,0),n.battle.shakeCam(.06))},anim:[[0,{...kt,armL:[-1.35,0,-.05]}],[10,{...kt,armL:[-2.6,0,.3],armR:[-2.4,0,-.3],wep:[.4,0,0],by:.05}],[16,{...kt,armL:[-.8,0,.3],armR:[-.8,0,-.3],wep:[1.8,0,0],torso:[.5,0,0],by:-.25}],[40,kt]]},getupattack:{total:32,intang:[0,9],alpha:.8,trail:"sword",trailF:[7,12],hit:[xe(8,10,1.2,.4,.62,7,40,60,50,{away:!0}),xe(8,10,-1.2,.4,.62,7,40,60,50,{away:!0})],anim:[[0,{by:-.5,torso:[.4,0,0]}],[8,{by:-.3,body:[0,0,0],armR:[-1.4,0,-1.2],wep:[1.5,0,0]}],[14,{by:-.3,body:[0,Math.PI*2,0],armR:[-1.4,0,-1.2],wep:[1.5,0,0]}],[32,{...kt,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:36,intang:[0,10],trail:"sword",trailF:[8,14],sfx:[9,"slash",.6],hit:[xe(10,13,1.2,.5,.7,8,40,60,50)],anim:[[0,{by:-.3,torso:[.5,0,0]}],[10,{...Ji,armR:[-1,0,.3],foreR:[0,0,0],wep:[1,0,0],torso:[.4,.4,0]}],[20,{...Ji,armR:[-.9,0,.3],wep:[1,0,0],torso:[.3,.3,0]}],[36,kt]]}},Au={id:"dullahan",name:"\u30C7\u30E5\u30E9\u30CF\u30F3",en:"DULLAHAN",title:"\u9EC4\u91D1\u306E\u9996\u306A\u3057\u9A0E\u58EB",color:16762938,css:"#ffc83a",desc:"\u515C\u306E\u5965\u306B\u708E\u3060\u3051\u304C\u706F\u308B\u3001\u4E2D\u8EAB\u306E\u306A\u3044\u751F\u3051\u308B\u7532\u5191\u3002\u5927\u5263\u306E\u30EA\u30FC\u30C1\u3068\u4E00\u6483\u306E\u91CD\u3055\u3001\u30A2\u30FC\u30DE\u30FC\u7A81\u9032\u3068\u30AB\u30A6\u30F3\u30BF\u30FC\u304C\u6B66\u5668\u306E\u91CD\u91CF\u7D1A\u3002",specials:["\u30B5\u30F3\u30E9\u30F3\u30B9\uFF08\u305F\u3081\u7A81\u304D\uFF09","\u30B4\u30FC\u30EB\u30C7\u30F3\u30E9\u30C3\u30B7\u30E5\uFF08\u30A2\u30FC\u30DE\u30FC\u4F53\u5F53\u305F\u308A\uFF09","\u30E9\u30A4\u30B8\u30F3\u30B0\u30AF\u30EC\u30B9\u30C8\uFF08\u4E0A\u6607\u65AC\u308A\uFF09","\u30D6\u30EB\u30EF\u30FC\u30AF\uFF08\u30AB\u30A6\u30F3\u30BF\u30FC\uFF09"],stats:{weight:116,height:2.05,radius:.46,walkSpeed:.075,dashSpeed:.15,dashFrames:12,runSpeed:.135,traction:.011,airSpeed:.088,airAccel:.0065,airFriction:.003,gravity:.0095,fallSpeed:.18,fastFall:.28,jumpV:.25,hopV:.16,djV:.235,airJumps:1,jumpsquat:4,rollSpeed:.125},grabHold:[.85,.2],counterMove:"counterhit",buildModel:xf,anims:zr({idle:kt,hipY:Oc,bob:.8,shieldExtra:{armL:[-1.4,0,.2],foreL:[-.5,0,0],armR:[.2,0,-.4],foreR:[-.8,0,0],wep:[1.2,0,0]},holdExtra:{armR:[-.35,0,-.3],foreR:[-.8,0,0],wep:[1.6,0,0],armL:[-1.4,0,-.05],foreL:[-.2,0,0]},runExtra:()=>({armR:[-.3,0,-.3],foreR:[-.9,0,0],wep:[1.9,0,0]}),override:{victory:n=>({armR:[-3*Math.min(1,n/30),0,-.25],foreR:[0,0,0],wep:[1.55,0,0],armL:[-.4,0,.3],foreL:[-1.2,0,0],legR:[-.2,0,-.15],legL:[.2,0,.15],torso:[-.1,.1,0],head:[-.25,0,0]})}}),moves:Vy}});function bf(n=0){let t=_f[n%_f.length],e=new Zt,i={},s={},r=Bi(t.red,{rough:.6,metal:.02,env:.45,emissive:new gt(t.dark).multiplyScalar(.1)});r.flatShading=!0;let a=Bi(t.belly,{rough:.55,metal:.03,env:.5}),o=Bi(t.claw,{rough:.3,metal:.05,env:.8}),l=Bi(t.frill,{rough:.5,metal:.1,env:.6,emissive:new gt(t.frill).multiplyScalar(.06),side:ke}),c=Bi(5900296,{rough:.6}),h=Bi(14701594,{rough:.6}),d=Li(t.eye,1),u=new ni({color:t.membrane,roughness:.75,metalness:0,envMapIntensity:.5,side:Ki}),f=new ni({color:t.red,roughness:.95,metalness:0,envMapIntensity:.15,side:Ye}),g=[r,a,l],y=g.map(j=>j.emissive.clone()),m=Be("body",e,0,kc,0);i.body=m;let p=Be("hips",m);i.hips=p;let b=Be("torso",p);i.torso=b,Y(rt(new Yt(.25,10,7),r),p,0,.02,-.02,0,0,0,[1,.8,.95]);let w=new Cu(t),_=new Zt;_.userData.keep=!0,w.mesh.userData.keep=!0,w.tip.userData.keep=!0,_.add(w.mesh,w.tip),_.position.set(0,.02,-.08),p.add(_);let E=new ce;i.wisp=E,e.add(E),Y(rt(si([[.15,0],[.16,.12],[.22,.3],[.35,.48],[.4,.6],[.33,.71],[.18,.78],[.12,.8]],10),r),b,0,0,0,0,0,0,[1,1,.74]);for(let j of[-1,1])Y(rt(new Yt(1,7,5),r),b,j*.16,.57,.17,0,0,j*-.2,[.19,.13,.11]),Y(rt(new Yt(1,7,5),r),b,j*.3,.68,-.02,0,0,j*.4,[.17,.13,.16]),Y(rt(new Yt(1,6,5),r),b,j*.2,.3,.12,0,0,0,[.09,.15,.085]);for(let j=0;j<9;j++){let bt=.72-j*.082,$=.2-j*.008,Z=[.2,.28,.35,.35,.3,.25,.23,.2,.19][j];Y(rt(new Yt(1,14,6),a),b,0,bt,Z*.74+(j<4?.035:0),-.12,0,0,[$*1.15,.05,.07])}for(let j=0;j<4;j++){let bt=rt(new _e(.1,.16,4),r);Y(bt,b,0,.3+j*.12,-.24-(j===2?.02:0),-1.9,0,0,[1,1,.45])}let S=Be("head",b,0,.74,.04);i.head=S,Y(rt(Pn(.22,.13,.16,8),r),S,0,.2,.03,-.35,0,0);for(let j=0;j<3;j++)Y(rt(new Yt(1,8,5),a),S,0,.04+j*.075,.14+j*.03,-.3,0,0,[.12,.04,.05]);let A=new Zt;Y(A,S,0,.32,.1,.05,0,0,1);let v=(j,bt,$,Z,dt,ut,xt,Ct,Lt=r)=>{let Bt=si(j,4);return Bt.rotateY(Math.PI/4),Y(rt(Bt,Lt),bt,$,Z,dt,ut,0,0,[xt,1,Ct])};Y(rt(new Yt(.15,10,8),r),A,0,0,.02,0,0,0,[1.05,.8,1.25]);{let j=si([[.125,0],[.105,.12],[.078,.25],[.045,.33],[0,.35]],6);Y(rt(j,r),A,0,0,.1,Math.PI/2-.08,0,0,[.72,1,.6])}let T=new Zt;Y(T,A,0,-.06,.06,.68,0,0);{let j=si([[.1,0],[.08,.12],[.05,.24],[.015,.3],[0,.31]],6);Y(rt(j,r),T,0,-.02,0,Math.PI/2,0,0,[.75,1,.4])}Y(rt(new ei(.1,.06,.17),c),A,0,-.065,.12,.25,0,0),Y(rt(new Yt(1,8,6),h),T,0,.02,.1,0,0,0,[.05,.02,.095]);for(let j of[-1,1]){for(let Z=0;Z<6;Z++){let dt=.15+Z*.038,ut=j*(.085-Z*.011);Y(rt(new _e(.005,.018,4),o),A,ut*.82,-.058-Z*.003,dt,Math.PI,0,0),Y(rt(new _e(.0045,.016,4),o),T,j*(.048-Z*.006),.022,.05+Z*.04,0,0,0)}Y(rt(new ei(.1,.035,.12),r),A,j*.085,.085,.12,.35,j*-.25,j*.5),Y(rt(new Yt(.03,8,6),c),A,j*.083,.05,.148,0,0,0,[1.3,.8,.8]),Y(rt(new Yt(.014,8,6),d),A,j*.085,.05,.168,0,0,j*.4,[1.5,.38,.7]);let bt=new Mi;bt.moveTo(0,.02),bt.lineTo(.11,.07),bt.lineTo(.085,.015),bt.lineTo(.125,-.02),bt.lineTo(.08,-.035),bt.lineTo(.1,-.085),bt.lineTo(0,-.05);let $=new Vi(bt,{depth:.014,bevelEnabled:!1});Y(rt($,l),A,j*.12,-.01,0,0,j<0?Math.PI+.75:-.75,j*.1,1.2),Y(rt(new _e(.07,.3,5),r),A,j*.12,.15,-.05,-.3,0,j*-.9,[1,1,.5]),Y(rt(new _e(.045,.14,5),r),A,j*.14,.04,-.06,-.3,0,j*-1.25,[1,1,.5])}Y(rt(new _e(.085,.3,5),r),A,0,.21,-.05,-.3,0,0,[1,1,.5]),Y(rt(new Yt(1,8,5),r),A,0,.09,-.07,-.3,0,0,[.17,.09,.04]),Y(rt(new _e(.03,.1,4),r),A,0,.07,.36,.5,0,0);let C={};for(let j of[-1,1]){let bt=j<0,$=Be(bt?"armR":"armL",b,j*.4,.6,0);i[bt?"armR":"armL"]=$,Y(rt(new Yt(.14,8,6),r),$,0,0,0),Y(rt(Pn(.3,.11,.09,8),r),$,0,0,0),Y(rt(new Yt(1,7,5),r),$,0,-.14,.05,0,0,0,[.125,.15,.125]);let Z=Be(bt?"foreR":"foreL",$,0,-.3,0);i[bt?"foreR":"foreL"]=Z,Y(rt(Pn(.3,.1,.07,10),r),Z,0,0,0),Y(rt(new Yt(1,7,5),r),Z,0,-.08,-.02,0,0,0,[.11,.12,.1]);let dt=new Zt;Y(dt,Z,0,-.3,.02),Y(rt(new Yt(1,12,10),r),dt,0,0,0,0,0,0,[.075,.065,.085]);for(let Ct=0;Ct<4;Ct++){let Lt=new Zt;Y(Lt,dt,(Ct-1.5)*.045*j,-.04,.04,-.3,0,(Ct-1.5)*.22*j),Y(rt(Pn(.06,.022,.018,8),r),Lt,0,0,0);let Bt=new Zt;Y(Bt,Lt,0,-.06,0,-.5,0,0),Y(rt(Pn(.04,.018,.014,8),r),Bt,0,0,0),Y(rt(new _e(.017,.1,5),o),Bt,0,-.075,0,Math.PI,0,0)}let ut=new ce;Z.add(ut);let xt=new ce;xt.position.set(0,-.45,.05),Z.add(xt),C[bt?"handR":"handL"]=[ut,xt]}for(let j of[-1,1]){let bt=j<0,$=Be(bt?"legR":"legL",p,j*.2,-.02,0);i[bt?"legR":"legL"]=$,Y(rt(Pn(.42,.22,.13,12),r),$,0,0,0,0,0,0,[1,1,1.25]),Y(rt(new Yt(1,10,8),r),$,j*.07,-.17,.06,0,0,0,[.17,.24,.21]);let Z=Be(bt?"shinR":"shinL",$,0,-.43,0);Z.scale.setScalar(1.3),i[bt?"shinR":"shinL"]=Z;let dt=(Lt,Bt,jt,D)=>{let de=new P(...Lt),se=new P(...Bt),R=de.distanceTo(se),x=new qe(D,jt,R,10);x.translate(0,R/2,0);let H=rt(x,r);H.position.copy(de),H.quaternion.setFromUnitVectors(new P(0,1,0),se.clone().sub(de).normalize()),Z.add(H)};Y(rt(new Yt(.13,10,8),r),Z,0,0,0),dt([0,0,0],[0,-.27,-.15],.125,.085),Y(rt(new Yt(.09,10,8),r),Z,0,-.27,-.15),dt([0,-.27,-.15],[0,-.46,.03],.085,.075),Y(rt(new Yt(1,8,6),r),Z,0,-.13,-.11,0,0,0,[.1,.13,.09]),Y(rt(new _e(.035,.16,6),o),Z,0,-.27,-.24,-2,0,0);let ut=new Zt;Y(ut,Z,0,-.47,.05,-.45,0,0),Y(rt(new Yt(1,10,6),r),ut,0,0,.08,0,0,0,[.16,.075,.23]);for(let Lt=0;Lt<4;Lt++){let Bt=(Lt-1.5)*.075;Y(rt(new Yt(1,10,8),r),ut,Bt,-.01,.27,0,0,0,[.04,.04,.08]),Y(rt(new _e(.036,.15,5),o),ut,Bt,-.025,.37,Math.PI/2+.3,0,0)}let xt=new ce;Z.add(xt);let Ct=new ce;Ct.position.set(0,-.5,.2),Z.add(Ct),C[bt?"footR":"footL"]=[xt,Ct]}C.tail=[new ce,new ce],p.add(C.tail[0]),p.add(C.tail[1]),C.tail[0].position.set(0,0,-.5),C.tail[1].position.set(0,-.3,-1.6);let N=new Mi,k=[0,0],z=[.34,.4],I=[.72,.74],G=[1.5,.42],J=[2.05,-.42],K=[1.5,-.34],ft=[1.02,-.24],Q=[.56,-.14],ct=[.15,-.12],ot=(j,bt)=>[(j[0]+bt[0])/2*.62+I[0]*.38,(j[1]+bt[1])/2*.62+I[1]*.38];N.moveTo(...k),N.lineTo(...z),N.lineTo(...I),N.quadraticCurveTo(...G,...J);for(let[j,bt]of[[J,K],[K,ft],[ft,Q],[Q,ct]])N.quadraticCurveTo(...ot(j,bt),...bt);N.lineTo(...k);let Ht=new Ls(N,10),It=Ht.attributes.position;for(let j=0;j<It.count;j++){let bt=It.getX(j),$=It.getY(j);It.setZ(j,-.08*Math.sin(Math.min(1,Math.hypot(bt-I[0],$-I[1])/1.2)*Math.PI))}Ht.computeVertexNormals();let ie=(j,bt,$,Z,dt)=>{let ut=new P(j[0],j[1],0),xt=new P(bt[0],bt[1],0),Ct=ut.distanceTo(xt),Lt=new qe(Z,$,Ct,7);Lt.translate(0,Ct/2,0);let Bt=new Ft(Lt,r);Bt.position.copy(ut),Bt.quaternion.setFromUnitVectors(new P(0,1,0),xt.clone().sub(ut).normalize()),dt.add(Bt)},ee=[];for(let j of[-1,1]){let bt=j<0?"earR":"earL",$=Be(bt,b,j*.14,.64,-.2);s[bt]=[.1,j*-.15,j*-.05],$.rotation.set(...s[bt]),i[bt]=$;let Z=new Zt;Z.userData.keep=!0,Z.scale.set(j*1.18,1.18,1.18),$.add(Z),Z.add(fi(Ht,u,f)),ie(k,z,.055,.045,Z),ie(z,I,.045,.035,Z);let dt=[(I[0]+2*G[0]+J[0])/4,(I[1]+2*G[1]+J[1])/4];ie(I,dt,.032,.022,Z),ie(dt,J,.022,.01,Z);for(let ut of[K,ft,Q])ie(I,ut,.028,.01,Z);Y(rt(new _e(.035,.14,6),o),Z,I[0],I[1]+.06,0,0,0,0),ee.push(Z)}gs(e);let fe={j:i,base:s,hipY:kc,flare:0},it=new ce;it.position.set(0,-.06,.34),A.add(it);let at=it,wt=kr(0,null,1.5),Gt=0,At=0;return{root:e,rig:fe,trails:C,worldObjects:[],orbPoint:at,mouth:it,shadow:wt,height:2.25,headY:2.7,trailColor:n?7330047:16752704,update(j,bt){Gt+=j;let $=E.rotation.x,Z=E.rotation.y,dt=e.rotation.y,ut=(bt.vx||0)*Math.sin(dt);w.update($+Math.min(.4,Math.abs(ut)*2),Z,Gt);let xt=bt.air?bt.vy>.02?1:.4:0;At+=(xt-At)*.1;let Ct=Math.sin(Gt*14)*.45*At;ee[0].rotation.z=-Ct,ee[1].rotation.z=Ct},setFlash(j,bt){g.forEach(($,Z)=>{$.emissive.copy(y[Z]),bt>0&&$.emissive.lerp(j,bt*.8)}),w.mat.emissive.setRGB(0,0,0),bt>0&&w.mat.emissive.copy(j).multiplyScalar(bt*.8)},dispose(){Hs(e)}}}var _f,kc,Cu,Mf=We(()=>{Ci();Hr();Dc();Hr();_f=[{red:10230286,dark:5638662,belly:12622416,membrane:10254914,claw:16051440,spike:16753686,frill:10123828,eye:8038458},{red:2375818,dark:1320534,belly:13030630,membrane:5933752,claw:15791359,spike:6285055,frill:9427199,eye:16765514}],kc=1.18,Cu=class{constructor(t,e=20,i=12){this.n=e,this.radial=i;let s=(e+1)*i;this.pos=new Float32Array(s*3);let r=new Float32Array(s*3),a=new gt(t.red),o=new gt(t.belly),l=new gt(t.dark),c=new gt;for(let f=0;f<=e;f++)for(let g=0;g<i;g++){let y=g/i*Math.PI*2,m=Math.cos(y)<-.35;c.copy(m?o:a),f%2===0&&c.lerp(l,m?.18:.25);let p=(f*i+g)*3;r[p]=c.r,r[p+1]=c.g,r[p+2]=c.b}let h=[];for(let f=0;f<e;f++)for(let g=0;g<i;g++){let y=f*i+g,m=f*i+(g+1)%i,p=y+i,b=m+i;h.push(y,m,p,m,b,p)}let d=new me;this.attr=new Pe(this.pos,3),this.attr.setUsage(Va),d.setAttribute("position",this.attr),d.setAttribute("color",new Pe(r,3)),d.setIndex(h),this.geo=d,this.mat=new ni({vertexColors:!0,roughness:.45,metalness:.05,envMapIntensity:.7}),this.mesh=new Ft(d,this.mat),this.mesh.frustumCulled=!1,this.pts=Array.from({length:e+1},()=>new P),this.tip=new Zt;let u=new ni({color:t.spike,emissive:new gt(t.spike).multiplyScalar(.35),roughness:.3,metalness:.2});for(let[f,g,y]of[[0,0,.42],[.55,.35,.34],[-.55,.35,.34],[.3,-.5,.28],[-.3,-.5,.28]]){let m=new Ft(new _e(.035,y,5),u);m.geometry.translate(0,y/2,0),m.rotation.set(Math.PI/2+g*.6,f,0),this.tip.add(m)}this.tip.scale.setScalar(1.7),this._t=new P,this._n=new P,this._b=new P}update(t,e,i){let{n:s,pts:r}=this;for(let u=0;u<=s;u++){let f=u/s,g=Math.sin(i*2.2-f*4)*.08*f,y=e*f*1.6+g,m=1.95*f,p=.02-2.3*f+1.3*f*f+t*f*f*1.2;r[u].set(Math.sin(y)*m,p,-Math.cos(y)*m-.12)}let a=this._t,o=this._n,l=this._b,c=new P(0,1,0);for(let u=0;u<=s;u++){let f=u/s,g=r[Math.max(0,u-1)],y=r[Math.min(s,u+1)];a.subVectors(y,g).normalize(),o.crossVectors(a,c).normalize(),l.crossVectors(o,a).normalize();let m=.24*Math.pow(1-f,.9)+.018;u%2===1&&(m*=1.16);for(let p=0;p<this.radial;p++){let b=p/this.radial*Math.PI*2,w=Math.sin(b)*m,_=Math.cos(b)*m*.9,E=(u*this.radial+p)*3;this.pos[E]=r[u].x+o.x*w+l.x*_,this.pos[E+1]=r[u].y+o.y*w+l.y*_,this.pos[E+2]=r[u].z+o.z*w+l.z*_}}this.attr.needsUpdate=!0,this.geo.computeVertexNormals();let h=r[s],d=r[s-1];this.tip.position.copy(h),a.subVectors(h,d).normalize(),this.tip.quaternion.setFromUnitVectors(new P(0,0,1),a)}}});function Sf(n,t=1.1,e=.02){let i=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.spawnProjectile(n,{x:i.x+n.facing*.15,y:i.y,vx:n.facing*(.24+qt(0,.04)),vy:-.025+qt(-e,e),r:.18,rMax:.72,dmg:t,ang:35,bkb:10,kbg:22,life:22,color:16738842,kind:"flame"})}var Ce,Mt,pi,en,ys,Lu,Pu,Iu,Du,Gr,Wy,Uu,Ef=We(()=>{Mf();Nc();dn();xs();Ce=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),Mt={by:-.05,legR:[-.85,0,-.45],shinR:[1.3,0,0],legL:[-.8,0,.45],shinL:[1.25,0,0],torso:[.36,0,0],head:[-.3,0,0],armR:[-.25,0,-.75],foreR:[-.75,0,.5],armL:[-.25,0,.75],foreL:[-.75,0,-.5],wisp:[0,.12,0]},pi={legR:[-.8,0,-.2],shinR:[1.2,0,0],legL:[-.5,0,.2],shinL:[1,0,0],armR:[-.6,0,-.8],foreR:[-.8,0,0],armL:[-.6,0,.8],foreL:[-.8,0,0],torso:[.15,0,0],head:[-.2,0,0]},en={legR:[-1.3,0,-.2],shinR:[1.8,0,0],legL:[-1.2,0,.2],shinL:[1.7,0,0]},ys={...Mt,armR:[-1.55,0,-.05],foreR:[0,0,0],torso:[.28,.45,0],bz:.15},Lu={...Mt,armL:[-1.55,0,.05],foreL:[0,0,0],torso:[.28,-.45,0],bz:.15},Pu={...Mt,armR:[.4,0,-.6],foreR:[-1.6,0,0],torso:[.1,-.4,0]},Iu={...Mt,armR:[-2.9,0,-.25],foreR:[-.6,0,0],armL:[-2.9,0,.25],foreL:[-.6,0,0],torso:[-.2,0,0],head:[-.4,0,0],by:0},Du={...Mt,armR:[-1,0,.25],foreR:[-.1,0,0],armL:[-1,0,-.25],foreL:[-.1,0,0],torso:[.6,0,0],head:[-.4,0,0],by:-.22,bz:.25},Gr={...Mt,torso:[-.15,0,0],head:[-.6,0,0],armR:[-.6,0,-1.1],armL:[-.6,0,1.1],earL:[0,0,.55],earR:[0,0,-.55]};Wy={jab1:{total:20,next:"jab2",nextWin:[6,19],trail:"handR",trailF:[3,7],sfx:[3,"whoosh",.3],hit:[Ce(4,5,.95,1.3,.5,3,70,8,25)],anim:[[0,Mt],[2,Pu],[5,ys],[13,ys],[20,Mt]]},jab2:{total:20,next:"jab3",nextWin:[6,19],trail:"handL",trailF:[3,7],sfx:[3,"whoosh",.3],hit:[Ce(4,5,.95,1.3,.5,4,70,8,25)],anim:[[0,ys],[5,Lu],[13,Lu],[20,Mt]]},jab3:{total:32,trail:"handR",trailF:[4,10],sfx:[4,"whoosh",.6],hit:[Ce(6,8,.9,1.55,.62,6,50,50,80)],anim:[[0,Lu],[4,{...Mt,armR:[.2,0,-.4],foreR:[-1.2,0,0],torso:[.3,-.3,0],by:-.18}],[7,{...Mt,armR:[-2.5,0,-.2],foreR:[-.4,0,0],torso:[-.1,.4,0],by:.02}],[18,{...Mt,armR:[-2.3,0,-.2],torso:[-.05,.3,0]}],[32,Mt]]},ftilt:{total:34,trail:"handR",trailF:[7,12],sfx:[7,"whoosh",.7],hit:[Ce(9,11,1.3,1.25,.55,11,36,34,96),Ce(9,11,.7,1.25,.5,10,36,34,96)],anim:[[0,Mt],[6,Pu],[10,{...ys,legR:[-.8,0,-.18],shinR:[.8,0,0],legL:[.2,0,.18],by:-.18,bz:.3}],[20,{...ys,bz:.25}],[34,Mt]]},utilt:{total:32,trail:"handR",trailF:[6,12],sfx:[6,"whoosh",.6],hit:[Ce(7,12,0,0,.62,10,88,40,95,{path:[[.95,1.9],[-.6,2.2]]})],anim:[[0,Mt],[5,{...Mt,armR:[-.8,0,-.5],foreR:[-.3,0,0],torso:[.3,0,0]}],[9,{...Mt,armR:[-2.6,0,-.3],foreR:[-.2,0,0],torso:[-.1,.2,0],head:[-.5,0,0],by:0}],[13,{...Mt,armR:[-3.1,0,-.1],foreR:[-.3,0,0],torso:[-.25,.2,0],head:[-.5,0,0],by:0}],[32,Mt]]},dtilt:{total:30,alpha:.8,trail:"tail",trailF:[3,12],sfx:[4,"whoosh",.6],hit:[Ce(6,9,1.35,.25,.62,8,72,45,55),Ce(6,9,.6,.25,.5,8,72,45,55)],anim:[[0,{...Mt,by:-.25}],[3,{...Mt,by:-.3,body:[0,0,0],wisp:[-.4,0,0]}],[7,{...Mt,by:-.3,body:[0,Math.PI,0],wisp:[-.6,0,0],torso:[.5,0,0]}],[14,{...Mt,by:-.28,body:[0,Math.PI*2,0],wisp:[-.3,0,0]}],[30,{...Mt,body:[0,Math.PI*2,0]}]]},dashattack:{total:44,keepVel:!0,sfx:[7,"whoosh",.8],hit:[Ce(8,14,.9,1.1,.75,12,45,55,72),Ce(15,20,.85,1.1,.65,8,45,40,60)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=18?n.vx=di(n.vx,n.facing*.16,.01):n.friction(2.2),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,Mt],[8,{...Mt,torso:[.6,-.5,0],armL:[-1.2,0,.3],armR:[.3,0,-.6],legR:[.4,0,-.1],legL:[-.8,0,.1],shinL:[.8,0,0],bz:.25,head:[-.5,0,0]}],[24,{...Mt,torso:[.5,-.4,0],bz:.2}],[44,Mt]]},fsmash:{total:58,smash:!0,charge:{f:8,max:60},trail:"handR",trailF:[14,20],sfx:[15,"whoosh",1],hit:[Ce(17,19,1.35,.8,.8,19,36,40,100),Ce(17,19,.7,1.4,.6,16,36,38,98)],onFrame(n,t){t===18&&(n.battle.effects.ring(n.x+n.facing*1.4,n.y+.1,16752704,2.8,16),n.battle.effects.dust(n.x+n.facing*1.4,n.y,8,n.facing),n.battle.shakeCam(.12))},anim:[[0,Mt],[7,Iu],[15,{...Iu,torso:[-.3,0,0]}],[18,Du],[32,Du],[58,Mt]]},usmash:{total:54,smash:!0,charge:{f:7,max:60},sfx:[12,"whoosh",1],hit:[Ce(13,17,.25,2.35,.8,17,88,40,98),Ce(13,17,.3,1.7,.6,15,85,40,96)],onFrame(n,t){t===13&&n.battle.effects.sparkle(n.x+n.facing*.3,n.y+2.5,16760928,6,.4)},anim:[[0,Mt],[7,{...Mt,by:-.3,torso:[.7,0,0],head:[.5,0,0],legR:[-.8,0,-.2],shinR:[1.3,0,0],legL:[-.8,0,.2],shinL:[1.3,0,0]}],[13,{...Gr,by:.1,torso:[-.25,0,0],head:[-.9,0,0],legR:[0,0,-.1],shinR:[.1,0,0],legL:[0,0,.1],shinL:[.1,0,0]}],[26,{...Gr,torso:[-.2,0,0],head:[-.8,0,0]}],[54,Mt]]},dsmash:{total:56,smash:!0,charge:{f:7,max:60},alpha:.85,trail:"tail",trailF:[9,20],sfx:[10,"whoosh",1],hit:[Ce(11,14,1.5,.35,.72,15,32,38,98,{away:!0}),Ce(11,14,-1.5,.35,.72,15,32,38,98,{away:!0}),Ce(15,17,.9,.35,.6,12,32,34,92,{away:!0})],anim:[[0,Mt],[7,{...Mt,by:-.3,torso:[.4,0,0],wisp:[-.5,0,0]}],[11,{...Mt,by:-.3,body:[0,0,0],wisp:[-.6,0,0],torso:[.4,0,0]}],[17,{...Mt,by:-.3,body:[0,Math.PI*2,0],wisp:[-.6,0,0],torso:[.4,0,0]}],[30,{...Mt,body:[0,Math.PI*2,0]}],[56,{...Mt,body:[0,Math.PI*2,0]}]]},nair:{total:42,aerial:!0,landLag:10,acBefore:5,acAfter:32,alpha:.85,trail:"tail",trailF:[6,14],sfx:[6,"whoosh",.8],hit:[Ce(7,13,0,.9,1.4,11,45,30,90,{away:!0})],anim:[[0,pi],[6,{...en,armR:[-.4,0,-1.2],armL:[-.4,0,1.2],body:[0,0,0],wisp:[.3,0,0]}],[14,{...en,armR:[-.4,0,-1.2],armL:[-.4,0,1.2],body:[0,Math.PI*2,0],wisp:[.3,0,0]}],[42,{...pi,body:[0,Math.PI*2,0]}]]},fair:{total:40,aerial:!0,landLag:13,acBefore:4,acAfter:30,trail:"handR",trailF:[8,14],sfx:[9,"whoosh",.8],hit:[Ce(10,13,0,0,.7,13,40,32,95,{path:[[1,2],[1.25,.6]]})],anim:[[0,pi],[7,{...en,armR:[-2.9,0,-.3],foreR:[-.3,0,0],torso:[-.2,.3,0]}],[12,{...en,armR:[-.7,0,-.1],foreR:[-.1,0,0],torso:[.5,.3,0]}],[24,{...en,armR:[-.6,0,-.1],torso:[.4,.2,0]}],[40,pi]]},bair:{total:40,aerial:!0,landLag:12,acBefore:4,acAfter:30,trail:"tail",trailF:[6,13],sfx:[7,"whoosh",.9],hit:[Ce(8,11,-1.55,.9,.72,14,145,38,98),Ce(8,11,-.8,.9,.6,12,145,34,92)],anim:[[0,pi],[5,{...en,wisp:[-.6,.5,0],torso:[.2,.3,0]}],[9,{...en,wisp:[1.1,-.2,0],torso:[.45,-.4,0],head:[0,-.6,0]}],[18,{...en,wisp:[.9,0,0],torso:[.4,-.3,0]}],[40,pi]]},uair:{total:38,aerial:!0,landLag:10,acBefore:3,acAfter:28,trail:"handR",trailF:[6,12],sfx:[6,"whoosh",.7],hit:[Ce(7,11,0,0,.72,11,85,32,95,{path:[[.85,2.2],[-.85,2.2]]})],anim:[[0,pi],[5,{...en,armR:[-1.4,0,-.4],armL:[-1.4,0,.4]}],[9,{...en,armR:[-3,0,-.3],armL:[-3,0,.3],foreR:[-.3,0,0],foreL:[-.3,0,0],head:[-.6,0,0],body:[-.2,0,0]}],[20,{...en,armR:[-2.8,0,-.3],armL:[-2.8,0,.3]}],[38,pi]]},dair:{total:50,aerial:!0,landLag:22,acBefore:3,acAfter:40,trail:"footR",trailF:[10,18],sfx:[11,"whoosh",.9],hit:[Ce(12,16,.05,-.15,.62,15,270,30,90),Ce(17,26,.05,0,.55,9,65,25,70)],onFrame(n,t){t<11&&(n.gravMult=.3),t===12&&!n.grounded&&(n.vy=Math.min(n.vy,-.3))},onLand(n){n.battle.effects.ring(n.x,n.y+.1,16752704,2.2,14),n.battle.effects.dust(n.x,n.y,8,0),n.battle.shakeCam(.1)},anim:[[0,pi],[8,{...en,legR:[-1.6,0,-.1],shinR:[2.2,0,0],legL:[-1.6,0,.1],shinL:[2.2,0,0],armR:[-2.6,0,-.5],armL:[-2.6,0,.5],earL:[0,0,.5],earR:[0,0,-.5],by:.15}],[12,{legR:[.1,0,-.08],shinR:[.05,0,0],legL:[.1,0,.08],shinL:[.05,0,0],armR:[-2.8,0,-.6],armL:[-2.8,0,.6],torso:[-.1,0,0],head:[.2,0,0],earL:[0,0,.7],earR:[0,0,-.7],by:-.1}],[26,{legR:[.05,0,-.08],legL:[.05,0,.08],armR:[-2.6,0,-.6],armL:[-2.6,0,.6],earL:[0,0,.5],earR:[0,0,-.5]}],[50,pi]]},neutralb:{total:30,charge:{f:8,max:80},fall:.45,landContinue:!0,alpha:.5,noChargeFlash:!0,onCharge(n){let t=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.effects.spawn({x:t.x,y:t.y,z:.35,vx:n.facing*qt(.18,.26),vy:qt(-.035,0),life:12,size:.25,size1:.9,color:n.charge%2?16742938:16765008}),n.charge%4===0&&Sf(n),n.charge%12===0&&vt.fire()},onFrame(n,t){t===8&&vt.fire(),t>=8&&t<=16&&t%3===2&&Sf(n)},anim:[[0,Mt],[6,{...Mt,torso:[.05,0,0],head:[-.5,0,0],armR:[-.3,0,-.8],armL:[-.3,0,.8]}],[8,{...Mt,torso:[.3,0,0],head:[.05,0,0],bz:.12,armR:[-.4,0,-.9],armL:[-.4,0,.9]}],[18,{...Mt,torso:[.28,0,0],head:[0,0,0],bz:.1}],[30,Mt]]},sideb:{total:48,noGravity:[0,32],keepVel:!0,noDrift:!0,canLeaveGround:!0,ledgeGrab:10,landContinue:!0,hit:[Ce(9,30,.8,1.1,.82,13,40,55,75)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){let e=n.battle.effects;if(t<9)n.vx=di(n.vx,0,.02),n.grounded||(n.vy=.004),t===4&&vt.fire();else if(t<=30){n.vx=n.facing*.3,n.vy=n.grounded?0:.02,t===9&&vt.whoosh(1);for(let i=0;i<2;i++)e.spawn({x:n.x+n.facing*qt(0,.9),y:n.y+qt(.5,1.7),z:.4,vx:-n.facing*.05,vy:.02,life:16,size:qt(.4,.8),size1:.1,color:i?16734740:16765024})}else n.vx*=.85},anim:[[0,Mt],[8,{...Mt,torso:[.2,-.5,0],by:-.2,armL:[-.4,0,.6],foreL:[-1.4,0,0]}],[10,{...Mt,torso:[.7,-.5,0],head:[-.6,0,0],armL:[-1.4,0,.3],foreL:[-.4,0,0],armR:[.4,0,-.5],legR:[.5,0,-.1],legL:[-.9,0,.1],shinL:[.8,0,0],earL:[0,0,-.3],earR:[0,0,.3],bz:.25}],[30,{...Mt,torso:[.7,-.5,0],head:[-.6,0,0],armL:[-1.4,0,.3],armR:[.4,0,-.5],earL:[0,0,-.3],earR:[0,0,.3],bz:.25}],[48,Mt]]},upb:{total:44,helpless:!0,helplessLag:24,ledgeGrab:14,noDrift:!0,keepVel:!0,noGravity:[4,26],hit:[Ce(5,10,0,1.2,1.15,8,80,60,70,{away:!0})],onStart(n){n.upBUsed=!0,n.vx*=.5},onFrame(n,t){t<4&&(n.vy=n.grounded?0:Math.max(n.vy,0)*.5),t===4&&(n.grounded=!1,n.surface=null,n.y+=.02,vt.whoosh(1),n.battle.effects.dust(n.x,n.y,8,0),n.battle.effects.ring(n.x,n.y+.4,16752704,2.4,14)),t>=4&&t<=26&&(n.vy=.34*(1-(t-4)/23)+.012,n.vx=di(n.vx,n.input.stick.x*.11,.012),t%6===4&&vt.whoosh(.5)),t>26&&n.drift(.6)},anim:[[0,{...Mt,by:-.25}],[4,{...pi,earL:[0,0,.8],earR:[0,0,-.8],head:[-.5,0,0]}],[8,{...pi,earL:[0,0,-.6],earR:[0,0,.6],head:[-.5,0,0]}],[12,{...pi,earL:[0,0,.8],earR:[0,0,-.8]}],[16,{...pi,earL:[0,0,-.6],earR:[0,0,.6]}],[20,{...pi,earL:[0,0,.8],earR:[0,0,-.8]}],[24,{...pi,earL:[0,0,-.5],earR:[0,0,.5]}],[44,pi]]},downb:{total:48,landContinue:!0,alpha:.75,trail:"tail",trailF:[10,16],sfx:[11,"whoosh",1],hit:[Ce(14,16,1.3,.3,.8,13,80,60,70,{away:!0}),Ce(14,16,-1.3,.3,.8,13,80,60,70,{away:!0}),Ce(14,16,0,.5,.95,13,80,60,70,{away:!0})],onFrame(n,t){if(t===2&&n.grounded&&(n.vy=.13,n.grounded=!1,n.surface=null,n.y+=.02),t===12&&!n.grounded&&(n.vy=Math.min(n.vy,-.2)),t===14){let e=n.battle.effects;e.ring(n.x,n.y+.1,16752704,3.4,16),e.dust(n.x-1,n.y,6,-1),e.dust(n.x+1,n.y,6,1),n.battle.shakeCam(.18),vt.hit(.8)}},anim:[[0,{...Mt,by:-.25}],[5,{...pi,wisp:[1.3,0,0],body:[0,0,0]}],[12,{...pi,wisp:[1.3,0,0],body:[0,Math.PI,0]}],[15,{...Mt,wisp:[-.7,0,0],body:[0,Math.PI*2,0],by:-.3,torso:[.5,0,0]}],[30,{...Mt,body:[0,Math.PI*2,0]}],[48,{...Mt,body:[0,Math.PI*2,0]}]]},final:{total:110,fs:!0,intang:[0,110],noGravity:[0,110],noDrift:!0,keepVel:!0,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,45)},onFrame(n,t){let e=n.battle;if(n.vx=0,n.grounded||(n.vy=0),t<45&&t%3===0){let i=n.model.mouth.getWorldPosition(e.tmpV);e.effects.sparkle(i.x,i.y,t%6?16744496:16769136,2,.4)}if(t===55&&(e.spawnProjectile(n,{x:n.x+n.facing*1.6,y:n.y+1.3,vx:n.facing*.42,vy:0,r:1.9,dmg:32,ang:38,bkb:110,kbg:92,life:90,color:16732176,core:16769136,kind:"fswave",fs:!0}),e.shakeCam(.5),vt.fsBoom(),vt.fire()),t>=50&&t<=80){let i=n.model.mouth.getWorldPosition(e.tmpV);e.effects.spawn({x:i.x+n.facing*.3,y:i.y,z:.4,vx:n.facing*qt(.2,.35),vy:qt(-.04,.04),life:22,size:qt(.6,1.2),size1:2,color:t%2?16734740:16765024})}},anim:[[0,Mt],[25,Gr],[45,Gr],[52,{...Mt,torso:[.4,0,0],head:[.1,0,0],bz:.2,earL:[0,0,.3],earR:[0,0,-.3]}],[85,{...Mt,torso:[.35,0,0],bz:.15}],[110,Mt]]},grab:{total:34,hit:[Ce(7,8,.95,1.1,.55,0,0,0,0,{type:"grab"})],anim:[[0,Mt],[7,{...Mt,armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,0,0],bz:.15}],[16,{...Mt,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.3,0,0]}],[34,Mt]]},dashgrab:{total:40,keepVel:!0,hit:[Ce(9,10,1.1,1.1,.6,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,Mt],[9,{...Mt,armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.45,0,0],bz:.2}],[22,{...Mt,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.4,0,0]}],[40,Mt]]},pummel:{total:18,pummelAt:6,pummelDmg:2,anim:[[0,{...Mt,armL:[-1.4,0,-.1],armR:[-1.4,0,.1]}],[6,{...Mt,armL:[-1.4,0,-.1],armR:[-1.4,0,.1],head:[.5,0,0],torso:[.4,0,0]}],[18,{...Mt,armL:[-1.4,0,-.1],armR:[-1.4,0,.1]}]]},fthrow:{total:34,throwAt:12,throwHit:{dmg:9,ang:40,bkb:70,kbg:70},hold:()=>[.95,.25],anim:[[0,{...Mt,armL:[-1.4,0,-.1]}],[8,Pu],[12,{...ys,bz:.3}],[34,Mt]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:12,ang:140,bkb:60,kbg:90},hold:n=>{let t=Math.min(1,n/16);return[.95*Math.cos(Math.PI*t),.3+.7*Math.sin(Math.PI*t)]},anim:[[0,{...Mt,armL:[-1.4,0,-.1]}],[16,{...Mt,body:[0,Math.PI,0],armL:[-2.4,0,.3],armR:[-2.4,0,-.3],wisp:[.6,0,0]}],[24,{...Mt,body:[0,Math.PI*2,0]}],[40,{...Mt,body:[0,Math.PI*2,0]}]]},uthrow:{total:40,throwAt:14,throwHit:{dmg:10,ang:90,bkb:75,kbg:76},hold:n=>[.6-n*.03,.25+n*.14],onFrame(n,t){if(t>=15&&t<=26){let e=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.effects.spawn({x:e.x,y:e.y+.1,z:.4,vy:.2,vx:qt(-.03,.03),life:16,size:.5,size1:1.2,color:t%2?16734740:16765024})}},anim:[[0,{...Mt,armL:[-1.4,0,-.1]}],[14,{...Gr,armR:[-3,0,-.2],armL:[-3,0,.2]}],[40,Mt]]},dthrow:{total:40,throwAt:16,throwHit:{dmg:8,ang:80,bkb:60,kbg:42},hold:n=>[.95,Math.max(0,.25-n*.02)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.9,n.y,8,0),n.battle.shakeCam(.08))},anim:[[0,{...Mt,armL:[-1.4,0,-.1]}],[10,Iu],[16,Du],[40,Mt]]},getupattack:{total:32,intang:[0,9],alpha:.8,trail:"tail",trailF:[6,12],hit:[Ce(8,10,1.3,.35,.65,7,40,60,50,{away:!0}),Ce(8,10,-1.3,.35,.65,7,40,60,50,{away:!0})],anim:[[0,{...Mt,by:-.5}],[8,{...Mt,by:-.35,body:[0,0,0]}],[14,{...Mt,by:-.35,body:[0,Math.PI*2,0]}],[32,{...Mt,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:36,intang:[0,10],trail:"handR",trailF:[8,14],sfx:[9,"whoosh",.6],hit:[Ce(10,13,1.2,.6,.7,8,40,60,50)],anim:[[0,{...Mt,by:-.35}],[10,{...ys,bz:.3}],[20,ys],[36,Mt]]}},Uu={id:"dragon",name:"\u30C9\u30E9\u30B4\u30F3",en:"DRAGON",title:"\u7D05\u84EE\u306E\u7FFC\u7ADC",color:16734762,css:"#ff5a2a",desc:"\u92FC\u306E\u7B4B\u8089\u3068\u5DE8\u5927\u306A\u7FFC\u3092\u6301\u3064\u91CD\u91CF\u7D1A\u3002\u62F3\u3068\u5C3B\u5C3E\u306E\u91CD\u3044\u4E00\u6483\u3001\u706B\u708E\u30D6\u30EC\u30B9\u3067\u62BC\u3057\u5207\u308B\u3002",specials:["\u30D5\u30A1\u30A4\u30A2\u30D6\u30EC\u30B9\uFF08\u62BC\u3057\u3063\u3071\u306A\u3057\u3067\u5410\u304D\u7D9A\u3051\u308B\uFF09","\u30D5\u30EC\u30A4\u30E0\u30BF\u30C3\u30AF\u30EB\uFF08\u708E\u306E\u4F53\u5F53\u305F\u308A\uFF09","\u30A6\u30A3\u30F3\u30B0\u30E9\u30A4\u30BA\uFF08\u7FBD\u3070\u305F\u304D\u4E0A\u6607\uFF09","\u30C6\u30A4\u30EB\u30B9\u30E9\u30E0\uFF08\u5C3B\u5C3E\u306E\u53E9\u304D\u3064\u3051\uFF09"],stats:{weight:128,height:2.05,radius:.52,walkSpeed:.07,dashSpeed:.145,dashFrames:12,runSpeed:.128,traction:.012,airSpeed:.086,airAccel:.006,airFriction:.003,gravity:.0098,fallSpeed:.19,fastFall:.29,jumpV:.255,hopV:.16,djV:.24,airJumps:1,jumpsquat:5,rollSpeed:.12},grabHold:[.95,.25],buildModel:bf,anims:zr({idle:Mt,hipY:kc,bob:.9,runExtra:()=>({armR:[.6,0,-.5],armL:[.6,0,.5],foreR:[-1.2,0,0],foreL:[-1.2,0,0],torso:[.5,0,0],head:[-.4,0,0],earL:[0,0,-.25],earR:[0,0,.25]}),override:{victory:n=>{let t=Math.min(1,n/30);return{...Gr,earL:[0,0,.55+Math.sin(n*.25)*.2*t],earR:[0,0,-.55-Math.sin(n*.25)*.2*t],armR:[-1.2*t,0,-1.2],armL:[-1.2*t,0,1.2]}}}}),moves:Wy}});var io,Vr,Nu=We(()=>{mf();vf();Ef();io={illumine:Ru,dullahan:Au,dragon:Uu},Vr=[Ru,Au,Uu]});var wf,zs,Fu,Hc,Tf=We(()=>{Ci();of();cf();Tc();ja();Nu();xs();dn();Za();Tu();wf=[16730714,4164863,16765498,4185194],zs=["#ff4a5a","#3f8cff","#ffd23a","#3fdc6a"],Fu=class{constructor(t,e,i){if(this.b=t,this.owner=e,Object.assign(this,i),this.hitIds=new Set,this.dead=!1,this.age=0,i.kind==="arrow"){let l=new Zt,c=.75+i.r,h=new Ft(new qe(.018,.018,c,6),new Me({color:1312796}));h.rotation.z=Math.PI/2;let d=new Ft(new _e(.06+i.r*.12,.22,6),new Me({color:new gt(i.color).multiplyScalar(1.5)}));d.rotation.z=-Math.PI/2,d.position.x=c/2+.08;let u=new Ft(new _e(.07,.16,3),new Me({color:2756672}));u.rotation.z=-Math.PI/2,u.position.x=-c/2+.05,u.scale.set(1,1,.2);let f=new gi(new ci({map:Fi(),color:i.color,transparent:!0,blending:Fe,depthWrite:!1}));f.scale.setScalar(.5+i.r*2),f.position.x=c/2,l.add(h,d,u,f),l.position.set(i.x,i.y,.25),l.rotation.z=Math.atan2(i.vy,i.vx),this.mesh=l,t.scene.add(l);return}if(i.kind==="flame"){let l=new Zt,c=new gi(new ci({map:Fi(),color:16730634,transparent:!0,depthWrite:!1})),h=new gi(new ci({map:Fi(),color:new gt(16760880),transparent:!0,blending:Fe,depthWrite:!1}));l.add(c,h),l.position.set(i.x,i.y,.3),this.outer=c,this.inner=h,this.maxLife=i.life,this.mesh=l,t.scene.add(l);return}if(i.kind==="fswave"){this.mesh=ff(i.color,i.core),this.mesh.position.set(i.x,i.y,.3),i.vx<0&&(this.mesh.rotation.y=Math.PI),t.scene.add(this.mesh);return}let s=new Zt,r=new Ft(new Yt(1,16,12),new Me({color:new gt(i.core||16777215).multiplyScalar(1.4)}));r.scale.setScalar(i.r*.55);let a=new gi(new ci({map:Fi(),color:i.color,transparent:!0,blending:Fe,depthWrite:!1}));a.scale.setScalar(i.r*4);let o=new Ft(new Yt(1,16,12),new Me({color:new gt(i.color).multiplyScalar(1.1),transparent:!0,opacity:.55,blending:Fe,depthWrite:!1}));o.scale.setScalar(i.r),s.add(o,r,a),s.position.set(i.x,i.y,.2),this.mesh=s,this.shell=o,t.scene.add(s)}update(){if(this.age++,this.px=this.x,this.py=this.y,this.x+=this.vx,this.y+=this.vy,this.life--,this.kind==="flame"){this.vx*=.94,this.vy*=.94,this.r=Math.min(this.rMax||.7,this.r+.03),this.age%3===0&&this.b.effects.spawn({x:this.x,y:this.y+.1,z:.2,vy:.015,life:18,size:this.r*.8,size1:.1,color:3811882,additive:!1,opacity:.35}),(this.life<=0||$a(this.x,this.y))&&this.kill(!1);return}if(this.kind==="arrow"){this.age%2===0&&this.b.effects.spawn({x:this.x-this.vx*1.5,y:this.y,z:.2,life:12,size:.25+this.r,size1:.02,color:this.color}),(this.life<=0||$a(this.x,this.y)||Math.abs(this.x)>30)&&this.kill(!0);return}if(this.kind==="fswave"){for(let t=0;t<3;t++)this.b.effects.sparkle(this.x-this.vx*2,this.y+qt(-1.8,1.8),t?this.color||16765024:16777215,1,.3);(this.life<=0||Math.abs(this.x)>26)&&this.kill(!1);return}this.age%2===0&&this.b.effects.spawn({x:this.x-this.vx*2,y:this.y+qt(-.1,.1),z:.2,life:14,size:this.r*1.6,size1:.05,color:this.color}),(this.life<=0||$a(this.x,this.y)||Math.abs(this.x)>30)&&this.kill(!0)}kill(t){this.dead||(this.dead=!0,t&&this.b.effects.ring(this.x,this.y,this.color,1.5,12),this.b.scene.remove(this.mesh),this.mesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}render(t){let e=this.px===void 0?this.x:this.px+(this.x-this.px)*t,i=this.py===void 0?this.y:this.py+(this.y-this.py)*t;if(this.mesh.position.set(e,i,this.kind==="fswave"?.3:.2),this.kind==="flame"){let s=this.age/this.maxLife;this.outer.scale.setScalar(this.r*2.6),this.inner.scale.setScalar(this.r*1.3*(1-s*.6)),this.outer.material.opacity=.9*Math.max(0,1-s*s),this.inner.material.opacity=.8*Math.max(0,1-s),this.outer.material.color.setRGB(1,.2+.35*(1-s),.03);return}this.kind!=="arrow"&&(this.shell?this.shell.scale.setScalar(this.r*(1+Math.sin(this.age*.6)*.08)):this.mesh.scale.set(1,1+Math.sin(this.age*.5)*.05,1))}},Hc=class{constructor(t,e){this.app=t,this.scene=t.scene,this.stage=t.stage,this.effects=t.effects,this.camera=t.camera,this.cfg=e,this.stage.setType(e.stage),this.effects.clear(),this.tmpV=new P,this.projectiles=[],this.timers=[],this.frame=0,this.phase="countdown",this.phaseT=0,this.shake=0,this.slowmo=0,this.finalFocus=null,this.winner=null,this.hitboxDebug=!1,this.ballOn=e.ball!==!1,this.ball=null,this.ballTimer=60*qt(16,26),this.cine=null,this.fsFx=[];let i=e.players.filter(r=>r.type==="human").length,s=e.players.map((r,a)=>e.players.slice(0,a).filter(o=>o.char===r.char).length);this.fighters=e.players.map((r,a)=>{let o=new Ec,l=new Lc(this,a,io[r.char],{input:o,variant:s[a],color:wf[a],stocks:e.stocks,cpu:r.type==="cpu",label:r.type==="cpu"?"CPU":`P${a+1}`});return r.type==="cpu"&&(l.ai=new Pc(this,l,r.level)),l.keymaps=r.type==="human"?i===1?vu:[vu[a]]:[],l.padIndex=r.type==="human"?e.players.slice(0,a).filter(c=>c.type==="human").length:-1,l}),this.cam={x:0,y:2,d:22},this.updateCamera(1),this.dbg=new Zt,this.scene.add(this.dbg),vt.playMusic("battle")}later(t,e){this.timers.push({t,fn:e})}shakeCam(t){this.shake=Math.max(this.shake,t)}tick(){this.frame++,this.phaseT++,this.phase==="fight"&&(this.fightFrames=(this.fightFrames||0)+1);for(let t=this.timers.length-1;t>=0;t--){let e=this.timers[t];--e.t<=0&&(this.timers.splice(t,1),e.fn())}for(let t of this.fighters){let e;t.ai?e=t.ai.update():(e=fn(),this.app.kb.read(t.keymaps,e),t.padIndex>=0&&wc(t.padIndex,e),t.padIndex===0&&this.app.touch.read(e)),(this.phase==="countdown"||this.phase==="gameover")&&(e=fn()),t.input.latch(e)}if(this.phase==="countdown"){let t=3-Math.floor(this.phaseT/50);this.phaseT%50===1&&t>0&&(this.app.bigText(String(t),"count"),vt.countdown()),this.phaseT===150&&(this.phase="fight",this.app.bigText("GO!","go"),vt.go());for(let e of this.fighters)e.animT++,e.prevX=e.x,e.prevY=e.y,e.animate();this.effects.update();return}if(this.phase==="gameover"&&this.phaseT>50){for(let t of this.fighters)t.prevX=t.x,t.prevY=t.y,t.animT++,t.animate();this.effects.update(),this.phaseT===170&&this.app.showResults(this);return}if(this.cine){let t=this.cine;t.t++;for(let e of this.fighters)e!==t.user&&(e.prevX=e.x,e.prevY=e.y);t.user.update();for(let e of this.fighters)e.animate();for(let e of this.fsFx)e.update&&e.update();this.effects.update(),t.t>=t.len&&(this.cine=null,this.app.setCine(!1));return}for(let t of this.fighters)t.update();for(let t of this.projectiles)t.update();for(let t of this.fsFx)t.update&&t.update();this.updateBall(),this.resolveHits(),this.resolveProjectiles(),this.projectiles=this.projectiles.filter(t=>!t.dead),this.pushApart();for(let t of this.fighters)this.checkBlast(t);for(let t of this.fighters)t.animate();this.effects.update(),this.phase==="gameover"&&this.phaseT===170&&this.app.showResults(this)}resolveHits(){let t=[];for(let i of this.fighters){if(i.state!=="attack"||i.hitlag>0)continue;let s=i.activeHitboxes();if(s.length)for(let r of this.fighters){if(r===i||r.state==="dead"||r.state==="respawn")continue;let a=r.hurtbox();for(let o of s){let l=(o.h.group||0)+":"+r.slot;if(!i.hitIds.has(l)&&!(mu(o.x,o.y,a.ax,a.ay,a.bx,a.by)>o.r+a.r)&&!r.isIntangible()&&!(o.h.type==="grab"&&(r.state==="grabbed"||r.state==="ledge"||r.grabbing||i.grabbing))){i.hitIds.add(l),t.push({a:i,d:r,box:o});break}}}}for(let{a:i,d:s,box:r}of t)this.processHit(i,s,r);let e=this.ball;if(e&&!e.dead&&e.life>0){for(let i of this.fighters)if(!(i.state!=="attack"||i.hitlag>0||i.hitIds.has("ball")||i.fsReady)){for(let s of i.activeHitboxes())if(s.h.type!=="grab"&&!(Math.hypot(s.x-e.x,s.y-e.y)>s.r+e.r)){i.hitIds.add("ball"),i.hitlag=5,e.hit(this.calcDmg(i,s.h),te(e.x-i.x)||i.facing)&&this.breakBall(i);break}if(!this.ball)break}}}updateBall(){if(!(!this.ballOn||this.phase!=="fight")){if(this.ball){this.ball.update(),this.ball.dead&&(this.ball=null,this.ballTimer=60*qt(20,32));return}this.fighters.some(t=>t.fsReady||t.move&&t.move.fs)||--this.ballTimer<=0&&(this.ball=new Fc(this),vt.star())}}breakBall(t){let e=this.ball;this.effects.koBlast(e.x,e.y,16769136),this.effects.ring(e.x,e.y,16777215,5,24),this.shakeCam(.25),vt.fsReady(),e.remove(),this.ball=null,this.ballTimer=60*qt(22,34),t.fsReady=!0,this.app.hud.setFs(t.slot,!0)}startCine(t,e){this.cine={user:t,t:0,len:e},this.app.setCine(!0,`${t.def.name}\u300C${pf(t.def)}\u300D`,t.def.css),vt.fsStart(),this.app.hud.setFs(t.slot,!1)}fsTrap(t,e,i,s){for(let r of this.fighters)r===t||r.state==="dead"||r.state==="respawn"||r.state==="trapped"||r.invuln>0||r.state==="ledgeclimb"||Math.hypot(r.x-e,r.y+r.height*.5-i)>s+.4||(r.move=null,r.grabbing&&r.releaseGrabQuiet(),r.grabbedBy&&(r.grabbedBy.grabbing=null,r.grabbedBy=null),r.setState("trapped"),r.trap={by:t,x:e,y:i},r.vx=r.vy=r.kx=r.ky=0,r.grounded=!1,r.surface=null,r.pendingLaunch=null)}fsTrapped(t){return this.fighters.filter(e=>e.state==="trapped"&&e.trap&&e.trap.by===t)}fsDamage(t,e){for(let i of this.fsTrapped(t))i.damage=Math.min(999,i.damage+e),t.stats.dealt+=e,i.stats.taken+=e,i.flashT=5,this.app.hud.bump(i.slot),this.effects.hitSpark(i.x+qt(-.4,.4),i.y+i.height*.5+qt(-.4,.4),t.def.color,.35),vt.hit(.35)}fsLaunch(t,e){for(let i of this.fsTrapped(t)){i.trap=null,i.setState("hitstun");let s=te(i.x-t.x)||t.facing;this.applyHit(t,i,e,i.x,i.y+i.height*.5,s,e.dmg),i.hitlag=12}}fsRelease(t){for(let e of this.fsTrapped(t))e.trap=null,e.setState("air")}addFx(t){return this.fsFx.push(t),t}removeFx(t){let e=this.fsFx.indexOf(t);e>=0&&this.fsFx.splice(e,1),t.remove()}calcDmg(t,e){let i=typeof e.dmg=="function"?e.dmg(t):e.dmg,s=t.move;return s&&s.smash&&(i*=1+.4*t.chargeRatio),s&&s.chargeScale&&(i*=1+s.chargeScale*t.chargeRatio),Math.round(i*10)/10}processHit(t,e,i){let s=i.h;if(s.type==="grab"){t.state==="attack"&&e.state!=="grabbed"&&t.state!=="grabbed"&&t.grabOpponent(e);return}let r=this.calcDmg(t,s);if(e.inWindow("counter"))return this.triggerCounter(e,t,r);let a=s.away&&te(e.x-t.x)||t.facing;if(e.state==="shield"||e.state==="shieldstun")return this.shieldHit(t,e,s,r,i.x,i.y,a);this.applyHit(t,e,s,i.x,i.y,a,r)}applyHit(t,e,i,s,r,a,o){let l=o??i.dmg;if(e.damage=Math.min(999,e.damage+l),t.stats.dealt+=l,e.stats.taken+=l,e.lastHitInfo={move:i.throwHit?"throw":i.projectile?"projectile":t.moveName,frame:this.frame,dmg:e.damage},this.app.hud.bump(e.slot),e.inWindow("armor")&&!i.throwHit){let g=Math.floor(l*.35+3);i.projectile||(t.hitlag=g),e.hitlag=g,e.flashT=6,this.effects.hitSpark(s,r,16765024,.3,a),vt.armor();return}let c=af(e.damage,l,e.s.weight,i.kbg,i.bkb),h=i.ang;h===361&&(h=e.grounded&&c<60?0:40);let d=e.receiveKnockback(c,h,a,l,t);i.link&&e.pendingLaunch&&(e.pendingLaunch.link=t,e.hitstun=16,e.tumble=!1),!i.throwHit&&!i.projectile&&(t.hitlag=d);let u=c/140;this.effects.hitSpark(s,r,t.def.color,u,a),i.throwHit?vt.hit(u*.8):t.def.id==="dullahan"&&!i.projectile&&t.move&&t.move.trail==="sword"?(vt.slash(u),vt.hit(u*.9)):vt.hit(u),c>90&&this.shakeCam(Math.min(.5,c/500));let f=this.fighters.filter(g=>g.stocks>0&&g.state!=="dead");e.stocks===1&&f.length===2&&this.predictKO(e,c,h,a)&&(this.slowmo=50,this.finalFocus=e,this.effects.ring(e.x,e.y+1,16777215,6,30))}predictKO(t,e,i,s){let r=t.x,a=t.y,o=Math.cos(i*ks)*s*e*to,l=Math.sin(i*ks)*e*to,c=0,h=Ie.blast;for(let d=0;d<240;d++){let u=Math.hypot(o,l);if(u>0){let f=Math.max(0,u-Cc);o*=f/u,l*=f/u}if(c=Math.max(c-t.s.gravity,-t.s.fallSpeed),r+=o,a+=l+c,r<h.left||r>h.right||a>h.top||a<h.bottom)return!0;if($a(r,a)||u<.02&&d>10)return!1}return!1}shieldHit(t,e,i,s,r,a,o){e.shieldHP-=s+(i.shield||0),e.setState("shieldstun"),e.shieldstun=Math.floor(s*.75+2),e.vx=o*Math.min(.18,.03+s*.008),!i.projectile&&t.grounded&&(t.vx=-o*Math.min(.12,.01+s*.005));let l=Math.floor(s*.35+3);i.projectile||(t.hitlag=l),e.hitlag=l,this.effects.shieldSpark(r,a,e.color),vt.shieldHit(),e.shieldHP<=0&&e.shieldBreak()}triggerCounter(t,e,i){t.counterDmg=i,t.facing=te(e.x-t.x)||t.facing,t.startMove(t.def.counterMove),t.invuln=Math.max(t.invuln,14),e.hitlag=14,this.effects.ring(t.x,t.y+1,10479871,3.5,18),this.effects.sparkle(t.x,t.y+1,16777215,8,.8),vt.counter(),this.shakeCam(.1)}resolveProjectiles(){for(let t of this.projectiles){if(t.dead)continue;let e=this.ball;if(e&&!e.dead&&e.life>0&&!t.fs&&!t.owner.fsReady&&Math.hypot(t.x-e.x,t.y-e.y)<t.r+e.r){e.hit(t.dmg,te(t.vx)||1)&&this.breakBall(t.owner),t.kill(!0);continue}for(let i of this.fighters){if(i===t.owner||i.state==="dead"||i.state==="respawn"||t.hitIds.has(i.slot))continue;let s=i.hurtbox();if(mu(t.x,t.y,s.ax,s.ay,s.bx,s.by)>t.r+s.r)continue;if(t.fs){if(i.invuln>0)continue;t.hitIds.add(i.slot),i.grabbing&&i.releaseGrabQuiet(),i.move=null,this.applyHit(t.owner,i,{dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,projectile:!0},i.x,i.y+i.height*.5,te(t.vx)||1,t.dmg),i.hitlag=26,this.effects.koBlast(i.x,i.y+1,16765024),this.shakeCam(.5);continue}if(i.inWindow("reflect")){t.owner=i,t.vx=-t.vx*1.2,t.dmg*=1.4,t.life=90,t.hitIds.clear(),this.effects.ring(t.x,t.y,10479871,2,12),vt.reflect();continue}if(i.isIntangible())continue;t.hitIds.add(i.slot);let r={dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,projectile:!0};if(i.inWindow("counter")){this.triggerCounter(i,t.owner,t.dmg),t.kill(!0);break}let a=te(t.vx)||1;i.state==="shield"||i.state==="shieldstun"?this.shieldHit(t.owner,i,r,t.dmg,t.x,t.y,a):this.applyHit(t.owner,i,r,t.x,t.y,a,t.dmg),t.kill(!1);break}}}spawnProjectile(t,e){this.projectiles.push(new Fu(this,t,e))}pushApart(){let t=this.fighters;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let s=t[e],r=t[i];if(!s.grounded||!r.grounded||s.surface!==r.surface||s.state==="grabbed"||r.state==="grabbed"||s.state==="dead"||r.state==="dead")continue;let a=r.x-s.x,o=(s.s.radius+r.s.radius)*.9;if(Math.abs(a)<o){let l=Math.min(.04,(o-Math.abs(a))*.25),c=te(a)||(s.slot<r.slot?1:-1),h=s.surface||{x1:-99,x2:99};s.x=Se(s.x-c*l,h.x1,h.x2),r.x=Se(r.x+c*l,h.x1,h.x2)}}}checkBlast(t){if(t.state==="dead"||t.state==="respawn"||this.phase==="gameover")return;let e=Ie.blast;if(t.x>e.left&&t.x<e.right&&t.y>e.bottom&&t.y<e.top)return;let i=Se(t.x,e.left+1,e.right-1),s=Se(t.y,e.bottom+1,e.top-1);this.effects.koBlast(i,s,wf[t.slot]),vt.ko(),this.shakeCam(.7),t.lastHitBy&&t.lastHitBy!==t?t.lastHitBy.stats.kos++:t.stats.sds++,t.die(),this.app.hud.bump(t.slot),this.finalFocus===t&&(this.finalFocus=null);let r=this.fighters.filter(a=>a.stocks>0);r.length<=1&&this.phase==="fight"&&(this.phase="gameover",this.phaseT=0,this.winner=r[0]||null,this.slowmo=60,this.app.bigText("GAME!","game"),vt.game(),vt.stopMusic())}render(t,e){for(let i of this.fighters)i.render(t,e);for(let i of this.projectiles)i.render(t);this.ball&&this.ball.render(t),this.updateCamera(e),this.hitboxDebug?this.drawDebug():this.dbg.children.length&&this.dbg.clear()}updateCamera(t){let e=Ie.blast,i=1e9,s=-1e9,r=1e9,a=-1e9,o=0;for(let _ of this.fighters){if(_.state==="dead")continue;let E=Se(_.x,e.left+3,e.right-3),S=Se(_.y,e.bottom+2,e.top-2);i=Math.min(i,E),s=Math.max(s,E),r=Math.min(r,S),a=Math.max(a,S+_.height),o++}o||(i=-4,s=4,r=0,a=2);let l=(i+s)/2,c=(r+a)/2,h=this.camera.aspect,d=Math.tan(this.camera.fov*ks/2),u=s-i+9,f=a-r+6,g=Math.max(u/(2*d*h),f/(2*d));g=Se(g,15,34),l=Se(l,-11,11),c=Se(c,-2.5,9)+.6;let y=Math.min(1,t*4);if(this.cine){let _=this.cine.user;l=_.x,c=_.y+1.1,g=7.5,y=Math.min(1,t*5)}else this.finalFocus&&this.slowmo>0&&(l=this.finalFocus.x,c=this.finalFocus.y+1,g=9,y=Math.min(1,t*6));let m=this.cam;m.x+=(l-m.x)*y,m.y+=(c-m.y)*y,m.d+=(g-m.d)*y;let p=this.shake,b=p?qt(-p,p):0,w=p?qt(-p,p):0;this.shake=Math.max(0,this.shake-t*1.6),this.camera.position.set(m.x+b,m.y+m.d*.12+w,m.d),this.camera.lookAt(m.x+b*.5,m.y+w*.5,0)}drawDebug(){this.dbg.children.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.dbg.clear();let t=(e,i,s,r,a=!1)=>{let o=new Ft(new Yt(s,12,8),new Me({color:r,transparent:!0,opacity:a?.9:.18,wireframe:a,depthTest:!1}));o.position.set(e,i,.5),this.dbg.add(o)};for(let e of this.fighters){if(e.state==="dead")continue;let i=e.hurtbox(),s=e.isIntangible()?4491519:16772659;for(let r=0;r<=1.001;r+=.25)t(i.ax,i.ay+(i.by-i.ay)*r,i.r,s);for(let r of e.activeHitboxes())t(r.x,r.y,r.r,r.h.type==="grab"?8930559:16720418,!0)}for(let e of this.projectiles)t(e.x,e.y,e.r,16720418,!0)}dispose(){for(let t of this.fighters)t.dispose();for(let t of this.projectiles)t.kill(!1);this.projectiles=[],this.ball&&this.ball.remove();for(let t of this.fsFx)t.remove();this.fsFx=[],this.app.setCine(!1),this.scene.remove(this.dbg),this.effects.clear(),vt.stopMusic()}}});var Xy=Cf(()=>{Ci();Xd();qd();gu();ja();Tc();Tf();Nu();bu();xs();dn();var Wr=1/60,$e=n=>document.querySelector(n),Bu=class{constructor(t){this.app=t,this.el=$e("#cards"),this.tagsEl=$e("#tags"),this.cards=[],this.tags=[],this.v=new P}setup(t){this.el.innerHTML="",this.tagsEl.innerHTML="",this.cards=t.fighters.map((e,i)=>{let s=document.createElement("div");return s.className="card",s.style.setProperty("--pc",zs[i]),s.style.setProperty("--cc",e.def.css),s.innerHTML=`<div class="bg"></div><img src="${this.app.portrait(e.def.id,t.cfg.players.slice(0,i).filter(r=>r.char===e.def.id).length)}"><div class="ptag">${e.label}</div><div class="nm">${e.def.name}</div><div class="stocks"></div><div class="pct">0<small>%</small></div>`,this.el.appendChild(s),{el:s,pct:s.querySelector(".pct"),stocks:s.querySelector(".stocks"),last:-1,lastS:-1}}),this.tags=t.fighters.map((e,i)=>{let s=document.createElement("div");return s.className="ntag",s.textContent=e.label,s.style.background=zs[i],s.style.borderTopColor=zs[i],s.style.color="#fff",this.tagsEl.appendChild(s),s})}setFs(t,e){let i=this.cards[t];i&&i.el.classList.toggle("fs",e)}bump(t){let e=this.cards[t];e&&(e.el.classList.remove("bump"),e.el.offsetWidth,e.el.classList.add("bump"))}pctColor(t){let e=[[0,[255,255,255]],[50,[255,230,90]],[100,[255,150,50]],[150,[255,55,50]],[230,[170,0,20]]],i=e[0],s=e[e.length-1];for(let o=0;o<e.length-1;o++)if(t>=e[o][0]&&t<=e[o+1][0]){i=e[o],s=e[o+1];break}t>230&&(i=s);let r=s[0]===i[0]?0:(t-i[0])/(s[0]-i[0]),a=i[1].map((o,l)=>Math.round(o+(s[1][l]-o)*r));return`rgb(${a[0]},${a[1]},${a[2]})`}update(t){t.fighters.forEach((i,s)=>{let r=this.cards[s],a=Math.floor(i.damage),o=i.state==="dead";(a!==r.last||o!==r.dead)&&(r.pct.innerHTML=o?"":`${a}<small>%</small>`,r.pct.style.color=this.pctColor(a),r.last=a,r.dead=o),i.stocks!==r.lastS&&(r.stocks.innerHTML="<i></i>".repeat(Math.max(0,i.stocks)),r.lastS=i.stocks,r.el.classList.toggle("out",i.stocks<=0));let l=this.tags[s];if(o||i.stocks<=0){l.style.display="none";return}l.style.display="";let c=i.prevX+(i.x-i.prevX),h=i.y+i.model.headY+.15;this.v.set(c,h,0).project(this.app.camera);let d=window.innerWidth,u=window.innerHeight,f=(this.v.x*.5+.5)*d,g=(-this.v.y*.5+.5)*u,y=f<20||f>d-20||g<40||g>u-10;f=Se(f,30,d-30),g=Se(g,40,u-140),l.style.left=f+"px",l.style.top=g+"px",l.textContent=y?`${i.label} ${Math.floor(i.damage)}%`:i.label,l.classList.toggle("off",y)});let e=Math.floor((t.fightFrames||0)/60);$e("#timer").textContent=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}},Ou=class{constructor(){this.R=Wd($e("#gl")),this.scene=this.R.scene,this.camera=this.R.camera,this.stage=new bc(this.scene),this.effects=new vc(this.scene),this.kb=new Sc,this.hud=new Bu(this),this.isTouch=fc,this.touch=new pc($e("#app"),()=>this.togglePause()),this.setTouchMode(fc),this.mode="title",this.paused=!1,this.battle=null,this.acc=0,this.time=0,this.last=performance.now(),this.sel={players:[{char:"illumine",type:"human",level:5},{char:"dullahan",type:"cpu",level:5}],stocks:3,stage:"battlefield",ball:!0},this.previews=[],this.portraits={},this.padPrev=fn(),this.makePortraits(),this.bindUI(),this.renderSelectPanels(),this.showScreen("title"),this.setPreviews([{char:"illumine",v:0},{char:"dullahan",v:0}]),this.layoutPreviews(),$e("#loading").classList.add("hidden"),requestAnimationFrame(t=>this.loop(t))}makePortraits(){let t=this.R.renderer,e=new zn;e.environment=this.scene.environment,e.environmentIntensity=.8,e.add(new Ds(14209279,3153984,1.3));let i=new Wn(16777215,2.2);i.position.set(-2,3,4),e.add(i);let s=new Wn(12620031,2);s.position.set(3,2,-3),e.add(s);let r=new li(30,1,.1,50),a=256,o=t.getSize(new mt),l=t.getPixelRatio(),c=t.toneMapping;t.setPixelRatio(1),t.setSize(a,a,!1);for(let h of Vr)for(let d of[0,1]){let u=h.buildModel(d);Ka(u.rig,h.anims.idle(0),1),u.root.rotation.y=.45,e.add(u.root),u.root.updateMatrixWorld(!0);let f={illumine:1.62,dullahan:1.92,dragon:2.14}[h.id]||1.8;r.position.set(.1,f+.1,{illumine:2.6,dullahan:2.2,dragon:2.6}[h.id]||2.4),r.lookAt(0,f-.05,0),e.background=new gt(h.color).multiplyScalar(.25),t.render(e,r);let g=document.createElement("canvas");g.width=g.height=a,g.getContext("2d").drawImage(t.domElement,0,0,a,a,0,0,a,a),this.portraits[`${h.id}:${d}`]=g.toDataURL(),e.remove(u.root)}t.toneMapping=c,t.setPixelRatio(l),t.setSize(o.x,o.y,!1),this.R.resize()}portrait(t,e=0){return this.portraits[`${t}:${e%2}`]}setPreviews(t){for(let e of this.previews)this.scene.remove(e.model.root),e.model.worldObjects.forEach(i=>this.scene.remove(i)),e.model.shadow&&this.scene.remove(e.model.shadow),e.model.dispose();this.previews=t.map(e=>{let i=io[e.char],s=i.buildModel(e.v||0);return this.scene.add(s.root),s.worldObjects.forEach(r=>this.scene.add(r)),s.shadow&&this.scene.add(s.shadow),{def:i,model:s,t:Math.random()*100,victory:!!e.victory,x:0,yaw:0}})}layoutPreviews(){let t=this.previews.length;this.previews.forEach((e,i)=>{this.mode==="results"?(e.x=1.4,e.yaw=-.35):this.mode==="select"?(e.x=i===0?-2:2,e.yaw=i===0?.55:-.55):(e.x=i===0?-2.3:2.3,e.yaw=i===0?.5:-.5)})}animatePreviews(t){for(let e of this.previews){e.t+=1;let i=e.victory?e.def.anims.victory(e.t):e.def.anims.idle(e.t);Ka(e.model.rig,i,e.victory?.2:.25),e.model.root.position.set(e.x,0,0),e.model.shadow&&e.model.shadow.position.set(e.x,.01,0),e.model.root.rotation.y=e.yaw,e.model.setFlash(new gt,0),e.model.update(t,{vx:0,vy:0})}}setTouchMode(t){this.isTouch=t,document.body.classList.toggle("touch",t)}enterFullscreen(){if(!this.isTouch||document.fullscreenElement||matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches)return;let t=document.documentElement,e=t.requestFullscreen||t.webkitRequestFullscreen;if(e)try{let i=e.call(t,{navigationUI:"hide"});i&&i.then&&i.then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})).catch(()=>{})}catch{}}showScreen(t){for(let i of["title","select","pause","results","howto"])$e("#"+i).classList.toggle("hidden",i!==t);let e=this.battle?this.battle.fighters.some(i=>!i.ai):!1;this.touch.show(t==="battle"&&this.isTouch&&e),$e("#hud").classList.toggle("hidden",t!=="battle"&&t!=="pause"),$e("#tags").classList.toggle("hidden",t!=="battle"&&t!=="pause")}go(t){this.mode=t,t==="title"?(this.endBattle(),this.setPreviews([{char:"illumine",v:0},{char:"dullahan",v:0}]),this.showScreen("title"),this.stage.setType("battlefield"),vt.ctx&&vt.playMusic("menu")):t==="select"&&(this.endBattle(),this.refreshSelectPreviews(),this.renderSelectPanels(),this.showScreen("select"),this.stage.setType(this.sel.stage),vt.ctx&&(!vt.bgm||this.musicKind!=="menu")&&vt.playMusic("menu"),this.musicKind="menu"),this.layoutPreviews()}refreshSelectPreviews(){let t=this.sel.players,e=t[1].char===t[0].char?1:0;this.setPreviews([{char:t[0].char,v:0},{char:t[1].char,v:e}]),this.layoutPreviews()}startBattle(){vt.init(),this.endBattle(),this.setPreviews([]),this.mode="battle",this.paused=!1,this.acc=0,this.battle=new Hc(this,JSON.parse(JSON.stringify(this.sel))),this.battle.hitboxDebug=$e("#dbgChk").checked,this.musicKind="battle",this.hud.setup(this.battle),this.showScreen("battle"),window.battle=this.battle}endBattle(){this.battle&&(this.battle.dispose(),this.battle=null),this.paused=!1;let t=$e("#bigtext");t.className="",t.textContent=""}togglePause(){this.mode!=="battle"||!this.battle||this.battle.phase==="gameover"||(this.paused=!this.paused,this.showScreen(this.paused?"pause":"battle"),$e("#hud").classList.remove("hidden"),vt.menuOk())}showResults(t){let e=t.fighters,i=t.winner,s=[...e].sort((o,l)=>(l===i)-(o===i)||l.stocks-o.stocks||o.damage-l.damage);$e("#resWinner").innerHTML=i?`<span style="color:${zs[i.slot]}">${i.label}</span> ${i.def.name}`:"DRAW",$e("#resTable").innerHTML=s.map((o,l)=>`
      <div class="rcard" style="--pc:${zs[o.slot]}">
        <span class="rank">${l+1}</span><h3>${o.label} ${o.def.name}</h3>
        <table>
          <tr><td>\u6483\u589C\u6570</td><td>${o.stats.kos}</td></tr>
          <tr><td>\u843D\u4E0B\u6570</td><td>${o.stats.falls-o.stats.sds}</td></tr>
          <tr><td>\u81EA\u6EC5\u6570</td><td>${o.stats.sds}</td></tr>
          <tr><td>\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8</td><td>${Math.round(o.stats.dealt)}%</td></tr>
          <tr><td>\u53D7\u3051\u305F\u30C0\u30E1\u30FC\u30B8</td><td>${Math.round(o.stats.taken)}%</td></tr>
        </table>
      </div>`).join("");let r=i?i.def.id:e[0].def.id,a=i?t.cfg.players.slice(0,i.slot).filter(o=>o.char===r).length:0;this.endBattle(),this.mode="results",this.setPreviews([{char:r,v:a,victory:!0}]),this.layoutPreviews(),this.showScreen("results"),vt.playMusic("menu"),this.musicKind="menu"}setCine(t,e="",i="#fff"){if($e("#cine").classList.toggle("on",t),t){let r=$e("#cineLabel");r.textContent=e,r.style.color=i,r.classList.remove("show"),r.offsetWidth,r.classList.add("show")}}bigText(t,e){let i=$e("#bigtext");i.className="",i.offsetWidth,i.textContent=t,i.className=e}bindUI(){document.addEventListener("click",e=>{vt.init();let i=e.target.closest("[data-act]");i&&this.action(i.dataset.act,i)});let t=()=>{vt.init(),!vt.bgm&&this.mode!=="battle"&&vt.playMusic("menu")};window.addEventListener("keydown",t,{once:!1}),window.addEventListener("pointerdown",t),$e("#dbgChk").addEventListener("change",e=>{this.battle&&(this.battle.hitboxDebug=e.target.checked)})}action(t,e){let i=this.sel.players;switch(t){case"start":vt.menuOk(),this.enterFullscreen(),this.go("select");break;case"howto":vt.menuOk(),this.howtoFrom=this.paused?"pause":this.mode,this.showScreen("howto");break;case"closehowto":vt.menuBack(),this.showScreen(this.howtoFrom==="pause"?"pause":this.howtoFrom==="battle"?"battle":this.howtoFrom),this.howtoFrom==="pause"&&$e("#hud").classList.remove("hidden");break;case"back":vt.menuBack(),this.go("title");break;case"stock-":this.sel.stocks=Se(this.sel.stocks-1,1,9),vt.menuMove(),this.renderSelectPanels();break;case"stock+":this.sel.stocks=Se(this.sel.stocks+1,1,9),vt.menuMove(),this.renderSelectPanels();break;case"stage":this.sel.stage=this.sel.stage==="battlefield"?"omega":"battlefield",this.stage.setType(this.sel.stage),vt.menuMove(),this.renderSelectPanels();break;case"ball":this.sel.ball=!this.sel.ball,vt.menuMove(),this.renderSelectPanels();break;case"quality":this.R.setQuality(this.R.quality==="high"?"low":"high"),vt.menuMove(),this.renderSelectPanels();break;case"fight":vt.menuOk(),this.startBattle();break;case"resume":this.togglePause();break;case"quit":vt.menuBack(),this.go("select");break;case"title":vt.menuBack(),this.go("title");break;case"rematch":vt.menuOk(),this.startBattle();break;case"char":{let s=+e.dataset.slot,r=+e.dataset.d;this.cycleChar(s,r);break}case"type":{let s=+e.dataset.slot;i[s].type=i[s].type==="human"?"cpu":"human",vt.menuMove(),this.renderSelectPanels();break}case"lv":{let s=+e.dataset.slot;i[s].level=Se(i[s].level+ +e.dataset.d,1,9),vt.menuMove(),this.renderSelectPanels();break}}}cycleChar(t,e){let i=this.sel.players,s=Vr.findIndex(r=>r.id===i[t].char);i[t].char=Vr[(s+e+Vr.length)%Vr.length].id,vt.menuMove(),this.renderSelectPanels(),this.refreshSelectPreviews()}renderSelectPanels(){let t=this.sel.players;$e("#stockVal").textContent=this.sel.stocks,$e("#stageBtn").textContent=this.sel.stage==="battlefield"?"\u6708\u591C\u306E\u8056\u57DF":"\u6708\u591C\u306E\u8056\u57DF\u30FB\u7D42\u70B9",$e("#ballBtn").textContent=this.sel.ball?"\u3042\u308A":"\u306A\u3057",$e("#qualityBtn").textContent=this.R.quality==="high"?"\u9AD8":"\u8EFD\u91CF",document.querySelectorAll(".panel").forEach(e=>{let i=+e.dataset.slot,s=t[i],r=io[s.char],a=i===1&&t[0].char===t[1].char?1:0;e.style.setProperty("--pc",zs[i]),e.style.setProperty("--cc",r.css),e.innerHTML=`
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
        <div class="sp">\u5FC5\u6BBA\u30EF\u30B6: ${r.specials.join(" / ")}</div>`})}menuKeys(){let t=this.kb,e=wc(0,fn()),i=e.attack&&!this.padPrev.attack,s=e.start&&!this.padPrev.start,r=e.special&&!this.padPrev.special,a=e.x<-.6&&!(this.padPrev.x<-.6),o=e.x>.6&&!(this.padPrev.x>.6);this.padPrev=e;let l=t.take("Enter")||t.take("NumpadEnter")||i||s,c=t.take("Escape")||r;switch(this.mode){case"title":if(!$e("#howto").classList.contains("hidden")){(l||c)&&this.action("closehowto");break}(l||t.take("Space"))&&this.action("start");break;case"select":(t.take("KeyA")||a)&&this.cycleChar(0,-1),(t.take("KeyD")||o)&&this.cycleChar(0,1),t.take("ArrowLeft")&&this.cycleChar(1,-1),t.take("ArrowRight")&&this.cycleChar(1,1),l?this.action("fight"):c&&this.action("back");break;case"results":l?this.action("rematch"):c&&this.action("quit");break;case"battle":if(!$e("#howto").classList.contains("hidden")){(l||c)&&this.action("closehowto");break}if((l||c||s)&&this.togglePause(),t.take("Backquote")||t.take("F2")){let h=$e("#dbgChk");h.checked=!h.checked,this.battle&&(this.battle.hitboxDebug=h.checked)}break}t.clearOnce()}loop(t){requestAnimationFrame(i=>this.loop(i));let e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,this.time+=e,this.menuKeys(),this.mode==="battle"&&this.battle){let i=this.battle;if(!this.paused){let s=i.slowmo>0?.3:1;this.acc+=e*s;let r=0;for(;this.acc>=Wr&&r<6&&(i.tick(),i.slowmo>0&&i.slowmo--,this.acc-=Wr,r++,this.mode==="battle"););r>=6&&(this.acc=0)}this.battle&&(this.battle.render(this.paused?1:this.acc/Wr,this.paused?0:e),this.hud.update(this.battle))}else for(this.menuCamera(e),this.acc+=e;this.acc>=Wr;)this.acc-=Wr,this.effects.update(),this.animatePreviews(Wr);this.stage.update(e),this.R.render()}menuCamera(t){let e=this.camera,i=this.time;this.mode==="title"?(e.position.set(Math.sin(i*.15)*1.2,1.25+Math.sin(i*.2)*.1,6.4),e.lookAt(0,1.3,0)):this.mode==="select"?(e.position.set(0,1.9,7.4),e.lookAt(0,.6,0)):this.mode==="results"&&(e.position.set(.2,1.5,5.6),e.lookAt(.3,1.05,0))}},ku=new Ou;window.app=ku;window.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&!ku.isTouch&&ku.setTouchMode(!0)},{capture:!0});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))});export default Xy();
