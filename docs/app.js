var Ye=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var jf=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function Kf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){let n=fa("canvas");return n.style.display="block",n}function pa(...n){let t="THREE."+n.shift();Mr?Mr("log",t,...n):console.log(t,...n)}function gd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function he(...n){n=gd(n);let t="THREE."+n.shift();if(Mr)Mr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function fe(...n){n=gd(n);let t="THREE."+n.shift();if(Mr)Mr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fs(...n){let t=n.join(" ");t in eu||(eu[t]=!0,he(...n))}function xd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function jn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Di[n&255]+Di[n>>8&255]+Di[n>>16&255]+Di[n>>24&255]+"-"+Di[t&255]+Di[t>>8&255]+"-"+Di[t>>16&15|64]+Di[t>>24&255]+"-"+Di[e&63|128]+Di[e>>8&255]+"-"+Di[e>>16&255]+Di[e>>24&255]+Di[i&255]+Di[i>>8&255]+Di[i>>16&255]+Di[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function tp(n,t){return(n%t+t)%t}function Jc(n,t,e){return(1-e)*n+e*t}function Cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ep(){let n={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===We&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===We&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ua]:{primaries:t,whitePoint:i,transfer:da,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:i,transfer:We,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),n}function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}function eh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function ch(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ds.fromArray(n,r);let o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=t.dot(Ds),c=e.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function bo(n,t,e,i,s,r){fr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ia.x=r*fr.x-s*fr.y,ia.y=s*fr.x+r*fr.y):ia.copy(fr),n.copy(t),n.x+=ia.x,n.y+=ia.y,n.applyMatrix4(_d)}function xp(n,t,e,i,s,r,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Vi,o),l===null)return null;Co.copy(o),Co.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:n}}function Lo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,wo),n.getVertexPosition(l,To),n.getVertexPosition(c,Ro);let h=xp(n,t,e,i,wo,To,Ro,xu);if(h){let d=new P;$n.getBarycoord(xu,wo,To,Ro,d),s&&(h.uv=$n.getInterpolatedAttribute(s,o,l,c,d,new bt)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,d,new bt)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};$n.getNormal(wo,To,Ro,u.normal),h.face=u,h.barycoord=d}return h}function Uo(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(il.fromBufferAttribute(o,s),nl.fromBufferAttribute(o,r),e.distanceSqToSegment(il,nl,gh,bu)>i)return;gh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(gh);if(!(c<t.near||c>t.far))return{distance:c,point:bu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}function Su(n,t,e,i,s,r,a){let o=Th.distanceSqToPoint(n);if(o<e){let l=new P;Th.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}function t0(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}function Tu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function _p(n,t){let e=1-n;return e*e*t}function bp(n,t){return 2*(1-n)*n*t}function Mp(n,t){return n*n*t}function la(n,t,e,i){return _p(n,t)+bp(n,e)+Mp(n,i)}function Sp(n,t){let e=1-n;return e*e*e*t}function Ep(n,t){let e=1-n;return 3*e*e*n*t}function wp(n,t){return 3*(1-n)*n*n*t}function Tp(n,t){return n*n*n*t}function ca(n,t,e,i,s){return Sp(n,t)+Ep(n,e)+wp(n,i)+Tp(n,s)}function Rp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=bd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Ip(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ca(r,a,e,o,l,c,0),a}function bd(n,t,e,i,s){let r;if(s===Vp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Ru(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Ru(a/i|0,n[a],n[a+1],r);return r&&Dr(r,r.next)&&(Pa(r),r=r.next),r}function Os(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Dr(e,e.next)||li(e.prev,e,e.next)===0)){if(Pa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ca(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Bp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Cp(n,i,s,r):Ap(n)){t.push(l.i,n.i,c.i),Pa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Lp(Os(n),t),Ca(n,t,e,i,s,r,2)):a===2&&Pp(n,t,e,i,s,r):Ca(Os(n),t,e,i,s,r,1);break}}}function Ap(n){let t=n.prev,e=n,i=n.next;if(li(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&oa(s,o,r,l,a,c,g.x,g.y)&&li(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(li(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=Rh(f,g,t,e,i),b=Rh(v,m,t,e,i),T=n.prevZ,_=n.nextZ;for(;T&&T.z>=p&&_&&_.z<=b;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&oa(o,h,l,d,c,u,T.x,T.y)&&li(T.prev,T,T.next)>=0||(T=T.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&oa(o,h,l,d,c,u,_.x,_.y)&&li(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&oa(o,h,l,d,c,u,T.x,T.y)&&li(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&oa(o,h,l,d,c,u,_.x,_.y)&&li(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Lp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Dr(i,s)&&Sd(i,e,e.next,s)&&La(i,s)&&La(s,i)&&(t.push(i.i,e.i,s.i),Pa(e),Pa(e.next),e=n=s),e=e.next}while(e!==n);return Os(e)}function Pp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hp(a,o)){let l=Ed(a,o);a=Os(a,a.next),l=Os(l,l.next),Ca(a,t,e,i,s,r,0),Ca(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Ip(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=bd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Op(c))}s.sort(Dp);for(let r=0;r<s.length;r++)e=Up(s[r],e);return e}function Dp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Up(n,t){let e=Np(n,t);if(!e)return t;let i=Ed(e,n);return Os(i,i.next),Os(e,e.next)}function Np(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Dr(n,e))return e;do{if(Dr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Md(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);La(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Fp(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Fp(n,t){return li(n.prev,n,t.prev)<0&&li(t.next,n,n.next)<0}function Bp(n,t,e,i){let s=n;do s.z===0&&(s.z=Rh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,kp(s)}function kp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Rh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Op(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Md(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function oa(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Md(n,t,e,i,s,r,a,o)}function Hp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!zp(n,t)&&(La(n,t)&&La(t,n)&&Gp(n,t)&&(li(n.prev,n,t.prev)||li(n,t.prev,t))||Dr(n,t)&&li(n.prev,n,n.next)>0&&li(t.prev,t,t.next)>0)}function li(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Dr(n,t){return n.x===t.x&&n.y===t.y}function Sd(n,t,e,i){let s=ko(li(n,t,e)),r=ko(li(n,t,i)),a=ko(li(e,i,n)),o=ko(li(e,i,t));return!!(s!==r&&a!==o||s===0&&Bo(n,e,t)||r===0&&Bo(n,i,t)||a===0&&Bo(e,n,i)||o===0&&Bo(e,t,i))}function Bo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ko(n){return n>0?1:n<0?-1:0}function zp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function La(n,t){return li(n.prev,n,n.next)<0?li(n,t,n.next)>=0&&li(n,n.prev,t)>=0:li(n,t,n.prev)<0||li(n,n.next,t)<0}function Gp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ed(n,t){let e=Ah(n.i,n.x,n.y),i=Ah(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ru(n,t,e,i){let s=Ah(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ah(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function Au(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Cu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function Xp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function qp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}function Xs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Lu(s))s.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Lu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ni(n){let t={};for(let e=0;e<n.length;e++){let i=Xs(n[e]);for(let s in i)t[s]=i[s]}return t}function Lu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function e0(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}function mr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function _h(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Td(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function $p(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function jp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Td(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=$p(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Pu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function s0(n,t,e,i){let s=am(i);switch(e){case $h:return n*t;case Or:return n*t/s.components*s.byteLength;case Dl:return n*t/s.components*s.byteLength;case ws:return n*t*2/s.components*s.byteLength;case Ul:return n*t*2/s.components*s.byteLength;case jh:return n*t*3/s.components*s.byteLength;case cn:return n*t*4/s.components*s.byteLength;case Nl:return n*t*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Ol:return Math.max(n,16)*Math.max(t,8)/4;case Fl:case kl:return Math.max(n,8)*Math.max(t,8)/2;case Hl:case zl:case Vl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gl:case qa:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ac:case oc:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ya:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function am(n){switch(n){case Wi:case qh:return{byteLength:1,components:1};case Br:case Yh:case bn:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case _n:case Ll:case ln:return{byteLength:4,components:1};case Zh:case Jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Fu,Uh,Bu,ka,ku,Fr,Vi,Ze,ke,Hn,bs,Xe,Nh,Fh,Ou,Vs,Hu,zu,Gu,Vu,Wu,Xu,qu,Yu,Bh,kh,Zu,Ju,$u,ju,Ku,Qu,td,ed,id,Vo,Wo,Xo,vr,qo,Yo,Zo,Jo,Tl,nd,sd,vn,Oh,Hh,zh,Gh,Vh,Wh,Oa,Xh,Ms,Ws,Rl,Al,Ha,_r,Ln,$o,pi,rd,za,Ci,Cl,Ss,Wi,qh,Yh,Br,Ll,_n,ln,bn,Pl,Il,kr,Zh,Jh,$h,jh,cn,In,Es,Or,Dl,ws,Ul,Nl,Ga,Va,Wa,Xa,Fl,Bl,kl,Ol,Hl,zl,Gl,Vl,Wl,qa,Xl,ql,Yl,Zl,Jl,$l,jl,Kl,Ql,tc,ec,ic,nc,sc,rc,ac,oc,lc,cc,hc,Ya,uc,ha,jo,zo,Mh,Sh,Eh,wh,ad,Hr,od,ss,Ai,ua,da,We,Go,ld,cd,hd,ud,dc,dd,fd,fc,pd,Kh,Za,Qh,xn,br,eu,Mr,yd,Dn,Di,Zc,Ko,bt,Un,P,$c,iu,me,jc,nu,su,Te,tr,Qo,ip,Sr,np,Qc,Oi,Qe,tl,zi,ma,el,De,er,fn,sp,rp,us,uo,Ji,ru,au,Nn,ga,ap,ou,ir,Xn,fo,jr,op,lp,lu,cu,hu,uu,cp,nr,th,se,Ht,hp,Er,vd,ds,po,xt,Ui,Qn,pn,qn,ih,Yn,sr,rr,du,nh,sh,rh,ah,oh,lh,$n,Fn,Zn,mn,mo,ar,or,lr,fs,ps,Is,Kr,go,xo,Ds,fi,yo,up,He,xa,ya,le,dp,Qr,hh,Bn,fp,on,uh,cr,$i,ta,bi,ye,va,ki,wr,dh,pp,mp,gn,gp,ji,xi,hr,ea,ur,dr,fr,ia,_d,vo,na,_o,fu,fh,pu,Mi,Jn,ph,Mo,So,Tr,Se,mu,Us,Eo,gu,wo,To,Ro,mh,Ao,xu,Co,At,Bs,Rr,pr,yu,Po,vu,yp,sa,ra,_a,Ns,vp,Io,Ar,Cr,il,nl,_u,aa,Do,gh,bu,ba,Lr,Mu,Th,No,Fo,Pr,Ma,ts,gs,sl,Sa,Fe,ks,kn,Be,ce,rl,Ki,Ir,al,Eu,wu,xh,yh,vh,yn,Ea,ol,wa,ll,Ta,Ra,xs,cl,hl,Aa,ci,Ch,Pn,Gi,Wp,Hs,Li,es,Ia,On,Dt,ii,is,wd,Zp,Jp,ai,ul,Le,zs,Da,dl,fl,ys,pl,ml,gl,xl,Qi,vs,yl,vl,_l,Ua,_s,bl,Ml,Rd,Sl,Ur,Gs,bh,Iu,Du,Na,Oo,Ho,An,Fa,ms,Uu,Nu,gi,Lh,Ba,Nr,Ph,ns,gr,xr,El,wl,i0,Kp,n0,Qp,tm,em,im,nm,sm,rm,Ih,ri,yv,Dh,r0=Ye(()=>{Fu=0,Uh=1,Bu=2,ka=1,ku=2,Fr=3,Vi=0,Ze=1,ke=2,Hn=0,bs=1,Xe=2,Nh=3,Fh=4,Ou=5,Vs=100,Hu=101,zu=102,Gu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,Bh=204,kh=205,Zu=206,Ju=207,$u=208,ju=209,Ku=210,Qu=211,td=212,ed=213,id=214,Vo=0,Wo=1,Xo=2,vr=3,qo=4,Yo=5,Zo=6,Jo=7,Tl=0,nd=1,sd=2,vn=0,Oh=1,Hh=2,zh=3,Gh=4,Vh=5,Wh=6,Oa=7,Xh=300,Ms=301,Ws=302,Rl=303,Al=304,Ha=306,_r=1e3,Ln=1001,$o=1002,pi=1003,rd=1004,za=1005,Ci=1006,Cl=1007,Ss=1008,Wi=1009,qh=1010,Yh=1011,Br=1012,Ll=1013,_n=1014,ln=1015,bn=1016,Pl=1017,Il=1018,kr=1020,Zh=35902,Jh=35899,$h=1021,jh=1022,cn=1023,In=1026,Es=1027,Or=1028,Dl=1029,ws=1030,Ul=1031,Nl=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,Fl=35840,Bl=35841,kl=35842,Ol=35843,Hl=36196,zl=37492,Gl=37496,Vl=37488,Wl=37489,qa=37490,Xl=37491,ql=37808,Yl=37809,Zl=37810,Jl=37811,$l=37812,jl=37813,Kl=37814,Ql=37815,tc=37816,ec=37817,ic=37818,nc=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,hc=36284,Ya=36285,uc=36286,ha=2300,jo=2301,zo=2302,Mh=2303,Sh=2400,Eh=2401,wh=2402,ad=3200,Hr=0,od=1,ss="",Ai="srgb",ua="srgb-linear",da="linear",We="srgb",Go=7680,ld=519,cd=512,hd=513,ud=514,dc=515,dd=516,fd=517,fc=518,pd=519,Kh=35044,Za=35048,Qh="300 es",xn=2e3,br=2001;eu={},Mr=null;yd={[Vo]:Wo,[Xo]:Zo,[qo]:Jo,[vr]:Yo,[Wo]:Vo,[Zo]:Xo,[Jo]:qo,[Yo]:vr},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,Ko=180/Math.PI;bt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new P,iu=new Un,me=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],b=s[1],T=s[4],_=s[7],w=s[2],E=s[5],C=s[8];return r[0]=a*v+o*b+l*w,r[3]=a*m+o*T+l*E,r[6]=a*p+o*_+l*C,r[1]=c*v+h*b+d*w,r[4]=c*m+h*T+d*E,r[7]=c*p+h*_+d*C,r[2]=u*v+f*b+g*w,r[5]=u*m+f*T+g*E,r[8]=u*p+f*_+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jc=new me,nu=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te=ep();Qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tr===void 0&&(tr=fa("canvas")),tr.width=t.width,tr.height=t.height;let s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Kn(e[i]/255)*255):e[i]=Kn(e[i]);return{data:e,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ip=0,Sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kc(s[a].image)):r.push(Kc(s[a]))}else r=Kc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};np=0,Qc=new P,Oi=class n extends Dn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ln,s=Ln,r=Ci,a=Ss,o=cn,l=Wi,c=n.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=jn(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){he(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oi.DEFAULT_IMAGE=null;Oi.DEFAULT_MAPPING=Xh;Oi.DEFAULT_ANISOTROPY=1;Qe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,_=(f+1)/2,w=(p+1)/2,E=(h+u)/4,C=(d+v)/4,y=(g+m)/4;return T>_&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=C/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=y/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=y/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Dn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Qe(0,0,t,e),this.scissorTest=!1,this.viewport=new Qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Oi(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends tl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ma=class extends Oi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},el=class extends Oi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},De=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),a=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sp,t,rp)}lookAt(t,e,i){let s=this.elements;return Ji.subVectors(t,e),Ji.lengthSq()===0&&(Ji.z=1),Ji.normalize(),us.crossVectors(i,Ji),us.lengthSq()===0&&(Math.abs(i.z)===1?Ji.x+=1e-4:Ji.z+=1e-4,Ji.normalize(),us.crossVectors(i,Ji)),us.normalize(),uo.crossVectors(Ji,us),s[0]=us.x,s[4]=uo.x,s[8]=Ji.x,s[1]=us.y,s[5]=uo.y,s[9]=Ji.y,s[2]=us.z,s[6]=uo.z,s[10]=Ji.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],T=i[7],_=i[11],w=i[15],E=s[0],C=s[4],y=s[8],R=s[12],D=s[1],F=s[5],V=s[9],Y=s[13],k=s[2],W=s[6],K=s[10],et=s[14],gt=s[3],rt=s[7],ot=s[11],ut=s[15];return r[0]=a*E+o*D+l*k+c*gt,r[4]=a*C+o*F+l*W+c*rt,r[8]=a*y+o*V+l*K+c*ot,r[12]=a*R+o*Y+l*et+c*ut,r[1]=h*E+d*D+u*k+f*gt,r[5]=h*C+d*F+u*W+f*rt,r[9]=h*y+d*V+u*K+f*ot,r[13]=h*R+d*Y+u*et+f*ut,r[2]=g*E+v*D+m*k+p*gt,r[6]=g*C+v*F+m*W+p*rt,r[10]=g*y+v*V+m*K+p*ot,r[14]=g*R+v*Y+m*et+p*ut,r[3]=b*E+T*D+_*k+w*gt,r[7]=b*C+T*F+_*W+w*rt,r[11]=b*y+T*V+_*K+w*ot,r[15]=b*R+T*Y+_*et+w*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],b=l*f-c*u,T=o*f-c*d,_=o*u-l*d,w=a*f-c*h,E=a*u-l*h,C=a*d-o*h;return e*(v*b-m*T+p*_)-i*(g*b-m*w+p*E)+s*(g*T-v*w+p*C)-r*(g*_-v*E+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=e*o-i*a,T=e*l-s*a,_=e*c-r*a,w=i*l-s*o,E=i*c-r*o,C=s*c-r*l,y=h*v-d*g,R=h*m-u*g,D=h*p-f*g,F=d*m-u*v,V=d*p-f*v,Y=u*p-f*m,k=b*Y-T*V+_*F+w*D-E*R+C*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/k;return t[0]=(o*Y-l*V+c*F)*W,t[1]=(s*V-i*Y-r*F)*W,t[2]=(v*C-m*E+p*w)*W,t[3]=(u*E-d*C-f*w)*W,t[4]=(l*D-a*Y-c*R)*W,t[5]=(e*Y-s*D+r*R)*W,t[6]=(m*_-g*C-p*T)*W,t[7]=(h*C-u*_+f*T)*W,t[8]=(a*V-o*D+c*y)*W,t[9]=(i*D-e*V-r*y)*W,t[10]=(g*E-v*_+p*b)*W,t[11]=(d*_-h*E-f*b)*W,t[12]=(o*R-a*F-l*y)*W,t[13]=(e*F-i*R+s*y)*W,t[14]=(v*T-g*w-m*b)*W,t[15]=(h*w-d*T+u*b)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,b=l*c,T=l*h,_=l*d,w=i.x,E=i.y,C=i.z;return s[0]=(1-(v+p))*w,s[1]=(f+_)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(u+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+T)*C,s[9]=(m-b)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),l=er.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let c=1/a,h=1/o,d=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=xn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===xn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===br)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=xn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===xn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===br)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},er=new P,fn=new De,sp=new P(0,0,0),rp=new P(1,1,1),us=new P,uo=new P,Ji=new P,ru=new De,au=new Un,Nn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ap=0,ou=new P,ir=new Un,Xn=new De,fo=new P,jr=new P,op=new P,lp=new Un,lu=new P(1,0,0),cu=new P(0,1,0),hu=new P(0,0,1),uu={type:"added"},cp={type:"removed"},nr={type:"childadded",child:null},th={type:"childremoved",child:null},se=class n extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new Nn,i=new Un,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new me}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fo.copy(t):fo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(jr,fo,this.up):Xn.lookAt(fo,jr,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Xn),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),nr.child=t,this.dispatchEvent(nr),nr.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};se.DEFAULT_UP=new P(0,1,0);se.DEFAULT_MATRIX_AUTO_UPDATE=!0;se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ht=class extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}},hp={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},po={h:0,s:0,l:0};xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=tp(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=eh(a,r,t+1/3),this.g=eh(a,r,t),this.b=eh(a,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ai){function i(r){r!==void 0&&parseFloat(r)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:he("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ai){let i=vd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Te.workingToColorSpace(Ui.copy(this),t),Math.round(Me(Ui.r*255,0,255))*65536+Math.round(Me(Ui.g*255,0,255))*256+Math.round(Me(Ui.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(Ui.copy(this),e);let i=Ui.r,s=Ui.g,r=Ui.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(Ui.copy(this),e),t.r=Ui.r,t.g=Ui.g,t.b=Ui.b,t}getStyle(t=Ai){Te.workingToColorSpace(Ui.copy(this),t);let e=Ui.r,i=Ui.g,s=Ui.b;return t!==Ai?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+e,ds.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ds),t.getHSL(po);let i=Jc(ds.h,po.h,e),s=Jc(ds.s,po.s,e),r=Jc(ds.l,po.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ui=new xt;xt.NAMES=vd;Qn=class extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},pn=new P,qn=new P,ih=new P,Yn=new P,sr=new P,rr=new P,du=new P,nh=new P,sh=new P,rh=new P,ah=new Qe,oh=new Qe,lh=new Qe,$n=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),qn.subVectors(i,e),ih.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(qn),l=pn.dot(ih),c=qn.dot(qn),h=qn.dot(ih),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ah.setScalar(0),oh.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(t,e),oh.fromBufferAttribute(t,i),lh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ah,r.x),a.addScaledVector(oh,r.y),a.addScaledVector(lh,r.z),a}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),qn.subVectors(t,e),pn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),pn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,i),rr.subVectors(r,i),nh.subVectors(t,i);let l=sr.dot(nh),c=rr.dot(nh);if(l<=0&&c<=0)return e.copy(i);sh.subVectors(t,s);let h=sr.dot(sh),d=rr.dot(sh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(sr,a);rh.subVectors(t,r);let f=sr.dot(rh),g=rr.dot(rh);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(rr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return du.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(du,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(sr,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),go.subVectors(this.max,Kr),ar.subVectors(t.a,Kr),or.subVectors(t.b,Kr),lr.subVectors(t.c,Kr),fs.subVectors(or,ar),ps.subVectors(lr,or),Is.subVectors(ar,lr);let e=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Is.z,Is.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Is.z,0,-Is.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Is.y,Is.x,0];return!ch(e,ar,or,lr,go)||(e=[1,0,0,0,1,0,0,0,1],!ch(e,ar,or,lr,go))?!1:(xo.crossVectors(fs,ps),e=[xo.x,xo.y,xo.z],ch(e,ar,or,lr,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,mo=new Fn,ar=new P,or=new P,lr=new P,fs=new P,ps=new P,Is=new P,Kr=new P,go=new P,xo=new P,Ds=new P;fi=new P,yo=new bt,up=0,He=class extends Dn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:up++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix3(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix4(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyNormalMatrix(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.transformDirection(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},xa=class extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}},ya=class extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}},le=class extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}},dp=new Fn,Qr=new P,hh=new P,Bn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):dp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(hh)),this.expandByPoint(Qr.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fp=0,on=new De,uh=new se,cr=new P,$i=new Fn,ta=new Fn,bi=new P,ye=class n extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kf(t)?ya:xa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];$i.setFromBufferAttribute(r),this.morphTargetsRelative?(bi.addVectors(this.boundingBox.min,$i.min),this.boundingBox.expandByPoint(bi),bi.addVectors(this.boundingBox.max,$i.max),this.boundingBox.expandByPoint(bi)):(this.boundingBox.expandByPoint($i.min),this.boundingBox.expandByPoint($i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if($i.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(bi.addVectors($i.min,ta.min),$i.expandByPoint(bi),bi.addVectors($i.max,ta.max),$i.expandByPoint(bi)):($i.expandByPoint(ta.min),$i.expandByPoint(ta.max))}$i.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)bi.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(bi));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bi.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(t,c),bi.add(cr)),s=Math.max(s,i.distanceToSquared(bi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,d=new P,u=new bt,f=new bt,g=new bt,v=new P,m=new P;function p(y,R,D){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,D),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,D),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),o[y].add(v),o[R].add(v),o[D].add(v),l[y].add(m),l[R].add(m),l[D].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,R=b.length;y<R;++y){let D=b[y],F=D.start,V=D.count;for(let Y=F,k=F+V;Y<k;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let T=new P,_=new P,w=new P,E=new P;function C(y){w.fromBufferAttribute(s,y),E.copy(w);let R=o[y];T.copy(R),T.sub(w.multiplyScalar(w.dot(R))).normalize(),_.crossVectors(E,R);let F=_.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,F)}for(let y=0,R=b.length;y<R;++y){let D=b[y],F=D.start,V=D.count;for(let Y=F,k=F+V;Y<k;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)bi.fromBufferAttribute(t,e),bi.normalize(),t.setXYZ(e,bi.x,bi.y,bi.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new He(u,h,d)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ki=new P,wr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ki.fromBufferAttribute(this,e),ki.applyMatrix4(t),this.setXYZ(e,ki.x,ki.y,ki.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ki.fromBufferAttribute(this,e),ki.applyNormalMatrix(t),this.setXYZ(e,ki.x,ki.y,ki.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ki.fromBufferAttribute(this,e),ki.transformDirection(t),this.setXYZ(e,ki.x,ki.y,ki.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dh=new P,pp=new P,mp=new me,gn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=dh.subVectors(i,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||mp.getNormalMatrix(t),s=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gp=0,ji=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=bs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=kh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){he(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new bt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ea=new P,ur=new P,dr=new P,fr=new bt,ia=new bt,_d=new De,vo=new P,na=new P,_o=new P,fu=new bt,fh=new bt,pu=new bt,Mi=class extends se{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new va(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new wr(i,3,0,!1)),hr.setAttribute("uv",new wr(i,2,3,!1))}this.geometry=hr,this.material=t,this.center=new bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),_d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;bo(vo.set(-.5,-.5,0),dr,a,ur,s,r),bo(na.set(.5,-.5,0),dr,a,ur,s,r),bo(_o.set(.5,.5,0),dr,a,ur,s,r),fu.set(0,0),fh.set(1,0),pu.set(1,1);let o=t.ray.intersectTriangle(vo,na,_o,!1,ea);if(o===null&&(bo(na.set(-.5,.5,0),dr,a,ur,s,r),fh.set(0,1),o=t.ray.intersectTriangle(vo,_o,na,!1,ea),o===null))return;let l=t.ray.origin.distanceTo(ea);l<t.near||l>t.far||e.push({distance:l,point:ea.clone(),uv:$n.getInterpolation(ea,vo,na,_o,fu,fh,pu,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Jn=new P,ph=new P,Mo=new P,So=new P,Tr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ph.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),So.copy(this.origin).sub(ph);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Mo),o=So.dot(this.direction),l=-So.dot(Mo),c=So.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ph).addScaledVector(Mo,u),f}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,b=i.y-a.y,T=i.z-a.z,_=Math.abs(l),w=Math.abs(c),E=Math.abs(h),C,y,R,D,F,V,Y,k,W,K,et,gt;if(_>=w&&_>=E?(R=l,V=d,W=g,gt=p,l>=0?(C=c,y=h,D=u,F=f,Y=v,k=m,K=b,et=T):(C=h,y=c,D=f,F=u,Y=m,k=v,K=T,et=b)):w>=E?(R=c,V=u,W=v,gt=b,c>=0?(C=h,y=l,D=f,F=d,Y=m,k=g,K=T,et=p):(C=l,y=h,D=d,F=f,Y=g,k=m,K=p,et=T)):(R=h,V=f,W=m,gt=T,h>=0?(C=l,y=c,D=d,F=u,Y=g,k=v,K=p,et=b):(C=c,y=l,D=u,F=d,Y=v,k=g,K=b,et=p)),R===0)return null;let rt=C/R,ot=y/R,ut=1/R,Ut=D-rt*V,Nt=F-ot*V,re=Y-rt*W,ne=k-ot*W,ae=K-rt*gt,st=et-ot*gt,ht=ae*ne-st*re,Tt=Ut*st-Nt*ae,jt=re*Nt-ne*Ut;if(s){if(ht<0||Tt<0||jt<0)return null}else if((ht<0||Tt<0||jt<0)&&(ht>0||Tt>0||jt>0))return null;let kt=ht+Tt+jt;if(kt===0)return null;let Yt=ut*(ht*V+Tt*W+jt*gt);return(kt>0?Yt<0:Yt>0)?null:this.at(Yt/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mu=new De,Us=new Tr,Eo=new Bn,gu=new P,wo=new P,To=new P,Ro=new P,mh=new P,Ao=new P,xu=new P,Co=new P,At=class extends se{constructor(t=new ye,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(mh.fromBufferAttribute(d,t),a?Ao.addScaledVector(mh,h):Ao.addScaledVector(mh.sub(e),h))}e.add(Ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(Eo.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Eo,gu)===null||Us.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),Us.copy(t.ray).applyMatrix4(mu),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,w=T;_<w;_+=3){let E=o.getX(_),C=o.getX(_+1),y=o.getX(_+2);s=Lo(this,p,t,i,c,h,d,E,C,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=o.getX(m),T=o.getX(m+1),_=o.getX(m+2);s=Lo(this,a,t,i,c,h,d,b,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,w=T;_<w;_+=3){let E=_,C=_+1,y=_+2;s=Lo(this,p,t,i,c,h,d,E,C,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=m,T=m+1,_=m+2;s=Lo(this,a,t,i,c,h,d,b,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};Bs=class extends Oi{constructor(t=null,e=1,i=1,s,r,a,o,l,c=pi,h=pi,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rr=class extends He{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},pr=new De,yu=new De,Po=[],vu=new Fn,yp=new De,sa=new At,ra=new Bn,_a=class extends At{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),vu.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(vu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),ra.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ra)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),t.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),yu.multiplyMatrices(i,pr),sa.matrixWorld=yu,sa.raycast(t,Po);for(let a=0,o=Po.length;a<o;a++){let l=Po[a];l.instanceId=r,l.object=this,e.push(l)}Po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(s*this.count),s,this.count,Or,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new Bn,vp=new bt(.5,.5),Io=new P,Ar=class{constructor(t=new gn,e=new gn,i=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],T=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-b).normalize(),s[1].setComponents(c+a,f+h,p+g,w+b).normalize(),s[2].setComponents(c+o,f+d,p+v,w+T).normalize(),s[3].setComponents(c-o,f-d,p-v,w-T).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,w-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,w-_).normalize(),e===xn)s[5].setComponents(c+l,f+u,p+m,w+_).normalize();else if(e===br)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);let e=vp.distanceTo(t.center);return Ns.radius=.7071067811865476+e,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cr=class extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},il=new P,nl=new P,_u=new De,aa=new Tr,Do=new Bn,gh=new P,bu=new P,ba=class extends se{constructor(t=new ye,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)il.fromBufferAttribute(e,s-1),nl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=il.distanceTo(nl);t.setAttribute("lineDistance",new le(i,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,t.ray.intersectsSphere(Do)===!1)return;_u.copy(s).invert(),aa.copy(t.ray).applyMatrix4(_u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),b=h.getX(v+1),T=Uo(this,t,aa,l,p,b,v);T&&e.push(T)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=Uo(this,t,aa,l,v,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=Uo(this,t,aa,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Uo(this,t,aa,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Lr=class extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mu=new De,Th=new Tr,No=new Bn,Fo=new P,Pr=class extends se{constructor(t=new ye,e=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Mu.copy(s).invert(),Th.copy(t.ray).applyMatrix4(Mu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=c.getX(g);Fo.fromBufferAttribute(d,m),Su(Fo,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Fo.fromBufferAttribute(d,g),Su(Fo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ma=class extends Oi{constructor(t=[],e=Ms,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ts=class extends Oi{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gs=class extends Oi{constructor(t,e,i=_n,s,r,a,o=pi,l=pi,c,h=In,d=1){if(h!==In&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sl=class extends gs{constructor(t,e=_n,i=Ms,s,r,a=pi,o=pi,l,c=In){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sa=class extends Oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class n extends ye{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(v,m,p,b,T,_,w,E,C,y,R){let D=_/C,F=w/y,V=_/2,Y=w/2,k=E/2,W=C+1,K=y+1,et=0,gt=0,rt=new P;for(let ot=0;ot<K;ot++){let ut=ot*F-Y;for(let Ut=0;Ut<W;Ut++){let Nt=Ut*D-V;rt[v]=Nt*b,rt[m]=ut*T,rt[p]=k,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[p]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Ut/C),d.push(1-ot/y),et+=1}}for(let ot=0;ot<y;ot++)for(let ut=0;ut<C;ut++){let Ut=u+ut+W*ot,Nt=u+ut+W*(ot+1),re=u+(ut+1)+W*(ot+1),ne=u+(ut+1)+W*ot;l.push(Ut,Nt,ne),l.push(Nt,re,ne),gt+=6}o.addGroup(f,gt,R),f+=gt,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ks=class n extends ye{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=i*2+r,v=s+1,m=new P,p=new P;for(let b=0;b<=g;b++){let T=0,_=0,w=0,E=0;if(b<=i){let R=b/i,D=R*Math.PI/2;_=-h-t*Math.cos(D),w=t*Math.sin(D),E=-t*Math.cos(D),T=R*d}else if(b<=i+r){let R=(b-i)/r;_=-h+R*e,w=t,E=0,T=d+R*u}else{let R=(b-i-r)/i,D=R*Math.PI/2;_=h+t*Math.sin(D),w=t*Math.cos(D),E=t*Math.sin(D),T=d+u+R*d}let C=Math.max(0,Math.min(1,T/f)),y=0;b===0?y=.5/s:b===g&&(y=-.5/s);for(let R=0;R<=s;R++){let D=R/s,F=D*Math.PI*2,V=Math.sin(F),Y=Math.cos(F);p.x=-w*Y,p.y=_,p.z=w*V,o.push(p.x,p.y,p.z),m.set(-w*Y,E,w*V),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+y,C)}if(b>0){let R=(b-1)*v;for(let D=0;D<s;D++){let F=R+D,V=R+D+1,Y=b*v+D,k=b*v+D+1;a.push(F,V,Y),a.push(V,k,Y)}}}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},kn=class n extends ye{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Be=class n extends ye{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=i/2,p=0;b(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function b(){let _=new P,w=new P,E=0,C=(e-t)/i;for(let y=0;y<=r;y++){let R=[],D=y/r,F=D*(e-t)+t;for(let V=0;V<=s;V++){let Y=V/s,k=Y*l+o,W=Math.sin(k),K=Math.cos(k);w.x=F*W,w.y=-D*i+m,w.z=F*K,d.push(w.x,w.y,w.z),_.set(W,C,K).normalize(),u.push(_.x,_.y,_.z),f.push(Y,1-D),R.push(g++)}v.push(R)}for(let y=0;y<s;y++)for(let R=0;R<r;R++){let D=v[R][y],F=v[R+1][y],V=v[R+1][y+1],Y=v[R][y+1];(t>0||R!==0)&&(h.push(D,F,Y),E+=3),(e>0||R!==r-1)&&(h.push(F,V,Y),E+=3)}c.addGroup(p,E,0),p+=E}function T(_){let w=g,E=new bt,C=new P,y=0,R=_===!0?t:e,D=_===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*D,0),u.push(0,D,0),f.push(.5,.5),g++;let F=g;for(let V=0;V<=s;V++){let k=V/s*l+o,W=Math.cos(k),K=Math.sin(k);C.x=R*K,C.y=m*D,C.z=R*W,d.push(C.x,C.y,C.z),u.push(0,D,0),E.x=W*.5+.5,E.y=K*.5*D+.5,f.push(E.x,E.y),g++}for(let V=0;V<s;V++){let Y=w+V,k=F+V;_===!0?h.push(k,k+1,Y):h.push(k+1,k,Y),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ce=class n extends Be{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rl=class n extends ye{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let T=new P,_=new P,w=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],T),f(e[E+1],_),f(e[E+2],w),l(T,_,w,b)}function l(b,T,_,w){let E=w+1,C=[];for(let y=0;y<=E;y++){C[y]=[];let R=b.clone().lerp(_,y/E),D=T.clone().lerp(_,y/E),F=E-y;for(let V=0;V<=F;V++)V===0&&y===E?C[y][V]=R:C[y][V]=R.clone().lerp(D,V/F)}for(let y=0;y<E;y++)for(let R=0;R<2*(E-y)-1;R++){let D=Math.floor(R/2);R%2===0?(u(C[y][D+1]),u(C[y+1][D]),u(C[y][D])):(u(C[y][D+1]),u(C[y+1][D+1]),u(C[y+1][D]))}}function c(b){let T=new P;for(let _=0;_<r.length;_+=3)T.x=r[_+0],T.y=r[_+1],T.z=r[_+2],T.normalize().multiplyScalar(b),r[_+0]=T.x,r[_+1]=T.y,r[_+2]=T.z}function h(){let b=new P;for(let T=0;T<r.length;T+=3){b.x=r[T+0],b.y=r[T+1],b.z=r[T+2];let _=m(b)/2/Math.PI+.5,w=p(b)/Math.PI+.5;a.push(_,1-w)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let T=a[b+0],_=a[b+2],w=a[b+4],E=Math.max(T,_,w),C=Math.min(T,_,w);E>.9&&C<.1&&(T<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,T){let _=b*3;T.x=t[_+0],T.y=t[_+1],T.z=t[_+2]}function g(){let b=new P,T=new P,_=new P,w=new P,E=new bt,C=new bt,y=new bt;for(let R=0,D=0;R<r.length;R+=9,D+=6){b.set(r[R+0],r[R+1],r[R+2]),T.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),E.set(a[D+0],a[D+1]),C.set(a[D+2],a[D+3]),y.set(a[D+4],a[D+5]),w.copy(b).add(T).add(_).divideScalar(3);let F=m(w);v(E,D+0,b,F),v(C,D+2,T,F),v(y,D+4,_,F)}}function v(b,T,_,w){w<0&&b.x===1&&(a[T]=b.x-1),_.x===0&&_.z===0&&(a[T]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Ki=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new bt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new De;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Me(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Me(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ir=class extends Ki{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new bt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},al=class extends Ir{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Eu=new P,wu=new P,xh=new t0,yh=new t0,vh=new t0,yn=class extends Ki{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(wu.subVectors(s[0],s[1]).add(s[0]),c=wu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Eu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Eu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),xh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),yh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),vh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),yh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),vh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(xh.calc(l),yh.calc(l),vh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Ea=class extends Ki{constructor(t=new bt,e=new bt,i=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new bt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ca(t,s.x,r.x,a.x,o.x),ca(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends Ki{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ca(t,s.x,r.x,a.x,o.x),ca(t,s.y,r.y,a.y,o.y),ca(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends Ki{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Ki{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Ki{constructor(t=new bt,e=new bt,i=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new bt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(la(t,s.x,r.x,a.x),la(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Ki{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(la(t,s.x,r.x,a.x),la(t,s.y,r.y,a.y),la(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xs=class extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Tu(o,l.x,c.x,h.x,d.x),Tu(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new bt().fromArray(s))}return this}},cl=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:yn,CubicBezierCurve:Ea,CubicBezierCurve3:ol,EllipseCurve:Ir,LineCurve:wa,LineCurve3:ll,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Ra,SplineCurve:xs}),hl=class extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new cl[s.type]().fromJSON(s))}return this}},Aa=class extends hl{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new wa(this.currentPoint.clone(),new bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ta(this.currentPoint.clone(),new bt(t,e),new bt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Ea(this.currentPoint.clone(),new bt(t,e),new bt(i,s),new bt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new xs(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ir(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ci=class extends Aa{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Aa().fromJSON(s))}return this}};Ch=class{static triangulate(t,e,i=2){return Rp(t,e,i)}},Pn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Au(t),Cu(i,t);let a=t.length;e.forEach(Au);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Cu(i,e[l]);let o=Ch.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};Gi=class n extends ye{constructor(t=new ci([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Wp,T,_=!1,w,E,C,y;if(p){T=p.getSpacedPoints(h),_=!0,u=!1;let U=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,U),E=new P,C=new P,y=new P}u||(m=0,f=0,g=0,v=0);let R=o.extractPoints(c),D=R.shape,F=R.holes;if(!Pn.isClockWise(D)){D=D.reverse();for(let U=0,j=F.length;U<j;U++){let lt=F[U];Pn.isClockWise(lt)&&(F[U]=lt.reverse())}}function Y(U){let lt=10000000000000001e-36,nt=U[0];for(let Mt=1;Mt<=U.length;Mt++){let Lt=Mt%U.length,zt=U[Lt],I=zt.x-nt.x,J=zt.y-nt.y,A=I*I+J*J,dt=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(nt.x),Math.abs(nt.y)),vt=lt*dt*dt;if(A<=vt){U.splice(Lt,1),Mt--;continue}nt=zt}}Y(D),F.forEach(Y);let k=F.length,W=D;for(let U=0;U<k;U++){let j=F[U];D=D.concat(j)}function K(U,j,lt){return j||fe("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(j,lt)}let et=D.length;function gt(U,j,lt){let nt,Mt,Lt,zt=U.x-j.x,I=U.y-j.y,J=lt.x-U.x,A=lt.y-U.y,dt=zt*zt+I*I,vt=zt*A-I*J;if(Math.abs(vt)>Number.EPSILON){let S=Math.sqrt(dt),x=Math.sqrt(J*J+A*A),B=j.x-I/S,Z=j.y+zt/S,z=lt.x-A/x,_t=lt.y+J/x,$=((z-B)*A-(_t-Z)*J)/(zt*A-I*J);nt=B+zt*$-U.x,Mt=Z+I*$-U.y;let X=nt*nt+Mt*Mt;if(X<=2)return new bt(nt,Mt);Lt=Math.sqrt(X/2)}else{let S=!1;zt>Number.EPSILON?J>Number.EPSILON&&(S=!0):zt<-Number.EPSILON?J<-Number.EPSILON&&(S=!0):Math.sign(I)===Math.sign(A)&&(S=!0),S?(nt=-I,Mt=zt,Lt=Math.sqrt(dt)):(nt=zt,Mt=I,Lt=Math.sqrt(dt/2))}return new bt(nt/Lt,Mt/Lt)}let rt=[];for(let U=0,j=W.length,lt=j-1,nt=U+1;U<j;U++,lt++,nt++)lt===j&&(lt=0),nt===j&&(nt=0),rt[U]=gt(W[U],W[lt],W[nt]);let ot=[],ut,Ut=rt.concat();for(let U=0,j=k;U<j;U++){let lt=F[U];ut=[];for(let nt=0,Mt=lt.length,Lt=Mt-1,zt=nt+1;nt<Mt;nt++,Lt++,zt++)Lt===Mt&&(Lt=0),zt===Mt&&(zt=0),ut[nt]=gt(lt[nt],lt[Lt],lt[zt]);ot.push(ut),Ut=Ut.concat(ut)}let Nt;if(m===0)Nt=Pn.triangulateShape(W,F);else{let U=[],j=[];for(let lt=0;lt<m;lt++){let nt=lt/m,Mt=f*Math.cos(nt*Math.PI/2),Lt=g*Math.sin(nt*Math.PI/2)+v;for(let zt=0,I=W.length;zt<I;zt++){let J=K(W[zt],rt[zt],Lt);Tt(J.x,J.y,-Mt),nt===0&&U.push(J)}for(let zt=0,I=k;zt<I;zt++){let J=F[zt];ut=ot[zt];let A=[];for(let dt=0,vt=J.length;dt<vt;dt++){let S=K(J[dt],ut[dt],Lt);Tt(S.x,S.y,-Mt),nt===0&&A.push(S)}nt===0&&j.push(A)}}Nt=Pn.triangulateShape(U,j)}let re=Nt.length,ne=g+v;for(let U=0;U<et;U++){let j=u?K(D[U],Ut[U],ne):D[U];_?(C.copy(w.normals[0]).multiplyScalar(j.x),E.copy(w.binormals[0]).multiplyScalar(j.y),y.copy(T[0]).add(C).add(E),Tt(y.x,y.y,y.z)):Tt(j.x,j.y,0)}for(let U=1;U<=h;U++)for(let j=0;j<et;j++){let lt=u?K(D[j],Ut[j],ne):D[j];_?(C.copy(w.normals[U]).multiplyScalar(lt.x),E.copy(w.binormals[U]).multiplyScalar(lt.y),y.copy(T[U]).add(C).add(E),Tt(y.x,y.y,y.z)):Tt(lt.x,lt.y,d/h*U)}for(let U=m-1;U>=0;U--){let j=U/m,lt=f*Math.cos(j*Math.PI/2),nt=g*Math.sin(j*Math.PI/2)+v;for(let Mt=0,Lt=W.length;Mt<Lt;Mt++){let zt=K(W[Mt],rt[Mt],nt);Tt(zt.x,zt.y,d+lt)}for(let Mt=0,Lt=F.length;Mt<Lt;Mt++){let zt=F[Mt];ut=ot[Mt];for(let I=0,J=zt.length;I<J;I++){let A=K(zt[I],ut[I],nt);_?Tt(A.x,A.y+T[h-1].y,T[h-1].x+lt):Tt(A.x,A.y,d+lt)}}}ae(),st();function ae(){let U=s.length/3;if(u){let j=0,lt=et*j;for(let nt=0;nt<re;nt++){let Mt=Nt[nt];jt(Mt[2]+lt,Mt[1]+lt,Mt[0]+lt)}j=h+m*2,lt=et*j;for(let nt=0;nt<re;nt++){let Mt=Nt[nt];jt(Mt[0]+lt,Mt[1]+lt,Mt[2]+lt)}}else{for(let j=0;j<re;j++){let lt=Nt[j];jt(lt[2],lt[1],lt[0])}for(let j=0;j<re;j++){let lt=Nt[j];jt(lt[0]+et*h,lt[1]+et*h,lt[2]+et*h)}}i.addGroup(U,s.length/3-U,0)}function st(){let U=s.length/3,j=0;ht(W,j),j+=W.length;for(let lt=0,nt=F.length;lt<nt;lt++){let Mt=F[lt];ht(Mt,j),j+=Mt.length}i.addGroup(U,s.length/3-U,1)}function ht(U,j){let lt=U.length;for(;--lt>=0;){let nt=lt,Mt=lt-1;Mt<0&&(Mt=U.length-1);for(let Lt=0,zt=h+m*2;Lt<zt;Lt++){let I=et*Lt,J=et*(Lt+1),A=j+nt+I,dt=j+Mt+I,vt=j+Mt+J,S=j+nt+J;kt(A,dt,vt,S)}}}function Tt(U,j,lt){l.push(U),l.push(j),l.push(lt)}function jt(U,j,lt){Yt(U),Yt(j),Yt(lt);let nt=s.length/3,Mt=b.generateTopUV(i,s,nt-3,nt-2,nt-1);ue(Mt[0]),ue(Mt[1]),ue(Mt[2])}function kt(U,j,lt,nt){Yt(U),Yt(j),Yt(nt),Yt(j),Yt(lt),Yt(nt);let Mt=s.length/3,Lt=b.generateSideWallUV(i,s,Mt-6,Mt-3,Mt-2,Mt-1);ue(Lt[0]),ue(Lt[1]),ue(Lt[3]),ue(Lt[1]),ue(Lt[2]),ue(Lt[3])}function Yt(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function ue(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Xp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new cl[s.type]().fromJSON(s)),new n(i,t.options)}},Wp={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new bt(r,a),new bt(o,l),new bt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new bt(a,1-l),new bt(c,1-d),new bt(u,1-g),new bt(v,1-p)]:[new bt(o,1-l),new bt(h,1-d),new bt(f,1-g),new bt(m,1-p)]}};Hs=class n extends ye{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Me(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new P,u=new bt,f=new P,g=new P,v=new P,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let b=0;b<=e;b++){let T=i+b*h*s,_=Math.sin(T),w=Math.cos(T);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*w,a.push(d.x,d.y,d.z),u.x=b/e,u.y=E/(t.length-1),o.push(u.x,u.y);let C=l[3*E+0]*_,y=l[3*E+1],R=l[3*E+0]*w;c.push(C,y,R)}}for(let b=0;b<e;b++)for(let T=0;T<t.length-1;T++){let _=T+b*t.length,w=_,E=_+t.length,C=_+t.length+1,y=_+1;r.push(w,E,y),r.push(C,y,E)}this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("uv",new le(o,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Li=class n extends rl{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},es=class n extends ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let T=0;T<c;T++){let _=T*d-r;g.push(_,-b,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let T=b+c*p,_=b+c*(p+1),w=b+1+c*(p+1),E=b+1+c*p;f.push(T,_,E),f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ia=class n extends ye{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,g=new bt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let b=p+m,T=b,_=b+i+1,w=b+i+2,E=b+1;o.push(T,_,E),o.push(_,w,E)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},On=class n extends ye{constructor(t=new ci([new bt(0,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;Pn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Pn.isClockWise(b)===!0&&(g[m]=b.reverse())}let v=Pn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=v.length;m<p;m++){let b=v[m],T=b[0]+d,_=b[1]+d,w=b[2]+d;i.push(T,_,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return qp(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};Dt=class n extends ye{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let b=[],T=p/i,_=a+T*o,w=t*Math.cos(_),E=Math.sqrt(t*t-w*w),C=0;p===0&&a===0?C=.5/e:p===i&&l===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let R=y/e,D=s+R*r;d.x=-E*Math.cos(D),d.y=w,d.z=E*Math.sin(D),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(R+C,1-T),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let T=h[p][b+1],_=h[p][b],w=h[p+1][b],E=h[p+1][b+1];(p!==0||a>0)&&f.push(T,_,E),(p!==i-1||l<Math.PI)&&f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ii=class n extends ye{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let v=0;v<=i;v++){let m=a+v/i*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,b=(s+1)*(v-1)+m-1,T=(s+1)*(v-1)+m,_=(s+1)*v+m;l.push(p,b,_),l.push(b,T,_)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},is=class n extends ye{constructor(t=new Ra(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new bt,h=new P,d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function v(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),b(),p()}function m(T){h=t.getPointAt(T/e,h);let _=a.normals[T],w=a.binormals[T];for(let E=0;E<=s;E++){let C=E/s*Math.PI*2,y=Math.sin(C),R=-Math.cos(C);l.x=R*_.x+y*w.x,l.y=R*_.y+y*w.y,l.z=R*_.z+y*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let _=1;_<=s;_++){let w=(s+1)*(T-1)+(_-1),E=(s+1)*T+(_-1),C=(s+1)*T+_,y=(s+1)*(T-1)+_;g.push(w,E,y),g.push(E,C,y)}}function b(){for(let T=0;T<=e;T++)for(let _=0;_<=s;_++)c.x=T/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new cl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};wd={clone:Xs,merge:Ni},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new xt().setHex(s.value);break;case"v2":this.uniforms[i].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new me().fromArray(s.value);break;case"m4":this.uniforms[i].value=new De().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ul=class extends ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Le=class extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zs=class extends ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Da=class extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dl=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};ys=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends ys{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eh:r=t,o=2*e-i;break;case wh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:a=t,l=2*i-e;break;case wh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,b=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+b*a[c+w]+T*a[l+w]+_*a[d+w];return r}},ml=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},gl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xl=class extends ys{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*u+g*2,b=d[p],T=d[p+1],_=t*u+g*2,w=h[_],E=h[_+1],C=jp(i,e,b,w,s);r[g]=Td(C,v,T,E,m)}return r}};Qi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),_h(t.settings)&&(i.settings={inTangents:mr(t.settings.inTangents,Array),outTangents:mr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ha:e=this.InterpolantFactoryMethodDiscrete;break;case jo:e=this.InterpolantFactoryMethodLinear;break;case zo:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return he("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return zo;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;_h(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(fe("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(fe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){fe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){fe("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Qf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){fe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,_h(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Qi.prototype.ValueTypeName="";Qi.prototype.TimeBufferType=Float32Array;Qi.prototype.ValueBufferType=Float32Array;Qi.prototype.DefaultInterpolation=jo;vs=class extends Qi{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ha;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;yl=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}};yl.prototype.ValueTypeName="color";vl=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}};vl.prototype.ValueTypeName="number";_l=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ua=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;_s=class extends Qi{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ha;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;bl=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}};bl.prototype.ValueTypeName="vector";Ml=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rd=new Ml,Sl=class{constructor(t){this.manager=t!==void 0?t:Rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";Ur=class extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Gs=class extends Ur{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bh=new De,Iu=new P,Du=new P,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Du),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===br||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oo=new P,Ho=new Un,An=new P,Fa=class extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oo,Ho,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Ho,An.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Oo,Ho,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Ho,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new P,Uu=new bt,Nu=new bt,gi=class extends Fa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,e){return this.getViewBounds(t,Uu,Nu),e.subVectors(Nu,Uu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Lh=class extends Na{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}},Ba=class extends Ur{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Nr=class extends Fa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ph=class extends Na{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},gr=-90,xr=1,El=class extends se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gi(gr,xr,t,e);s.layers=this.layers,this.add(s);let r=new gi(gr,xr,t,e);r.layers=this.layers,this.add(r);let a=new gi(gr,xr,t,e);a.layers=this.layers,this.add(a);let o=new gi(gr,xr,t,e);o.layers=this.layers,this.add(o);let l=new gi(gr,xr,t,e);l.layers=this.layers,this.add(l);let c=new gi(gr,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},wl=class extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},i0="\\[\\]\\.:\\/",Kp=new RegExp("["+i0+"]","g"),n0="[^"+i0+"]",Qp="[^"+i0.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",n0),em=/(WCOD+)?/.source.replace("WCOD",Qp),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",n0),nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",n0),sm=new RegExp("^"+tm+em+im+nm+"$"),rm=["material","materials","bones","map"],Ih=class{constructor(t,e,i){let s=i||ri.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ri=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kp,"")}static parseTrackName(t){let e=sm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ri.Composite=Ih;ri.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ri.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ri.prototype.GetterByBindingType=[ri.prototype._getValue_direct,ri.prototype._getValue_array,ri.prototype._getValue_arrayElement,ri.prototype._getValue_toArray];ri.prototype.SetterByBindingTypeAndVersioning=[[ri.prototype._setValue_direct,ri.prototype._setValue_direct_setNeedsUpdate,ri.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_array,ri.prototype._setValue_array_setNeedsUpdate,ri.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_arrayElement,ri.prototype._setValue_arrayElement_setNeedsUpdate,ri.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_fromArray,ri.prototype._setValue_fromArray_setNeedsUpdate,ri.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];yv=new Float32Array(1),Dh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Jd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function um(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function Y1(n,t,e,i,s,r){let a=new xt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let _=b.backgroundBlurriness>0;T=t.get(T,_)}return T}function g(b){let T=!1,_=f(b);_===null?m(a,o):_&&_.isColor&&(m(_,1),T=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,T){let _=f(T);_&&(_.isCubeTexture||_.mapping===Ha)?(c===void 0&&(c=new At(new Fe(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Xs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($d),c.material.toneMapped=Te.getTransfer(_.colorSpace)!==We,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new At(new es(2,2),new ai({name:"BackgroundMaterial",uniforms:Xs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Te.getTransfer(_.colorSpace)!==We,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,T){b.getRGB(pc,e0(n)),e.buffers.color.setClear(pc.r,pc.g,pc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Z1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(F,V,Y,k,W){let K=!1,et=d(F,k,Y,V);r!==et&&(r=et,c(r.object)),K=f(F,k,Y,W),K&&g(F,k,Y,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(F,V,Y,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function d(F,V,Y,k){let W=k.wireframe===!0,K=i[V.id];K===void 0&&(K={},i[V.id]=K);let et=F.isInstancedMesh===!0?F.id:0,gt=K[et];gt===void 0&&(gt={},K[et]=gt);let rt=gt[Y.id];rt===void 0&&(rt={},gt[Y.id]=rt);let ot=rt[W];return ot===void 0&&(ot=u(l()),rt[W]=ot),ot}function u(F){let V=[],Y=[],k=[];for(let W=0;W<e;W++)V[W]=0,Y[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:k,object:F,attributes:{},index:null}}function f(F,V,Y,k){let W=r.attributes,K=V.attributes,et=0,gt=Y.getAttributes();for(let rt in gt)if(gt[rt].location>=0){let ut=W[rt],Ut=K[rt];if(Ut===void 0&&(rt==="instanceMatrix"&&F.instanceMatrix&&(Ut=F.instanceMatrix),rt==="instanceColor"&&F.instanceColor&&(Ut=F.instanceColor)),ut===void 0||ut.attribute!==Ut||Ut&&ut.data!==Ut.data)return!0;et++}return r.attributesNum!==et||r.index!==k}function g(F,V,Y,k){let W={},K=V.attributes,et=0,gt=Y.getAttributes();for(let rt in gt)if(gt[rt].location>=0){let ut=K[rt];ut===void 0&&(rt==="instanceMatrix"&&F.instanceMatrix&&(ut=F.instanceMatrix),rt==="instanceColor"&&F.instanceColor&&(ut=F.instanceColor));let Ut={};Ut.attribute=ut,ut&&ut.data&&(Ut.data=ut.data),W[rt]=Ut,et++}r.attributes=W,r.attributesNum=et,r.index=k}function v(){let F=r.newAttributes;for(let V=0,Y=F.length;V<Y;V++)F[V]=0}function m(F){p(F,0)}function p(F,V){let Y=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;Y[F]=1,k[F]===0&&(n.enableVertexAttribArray(F),k[F]=1),W[F]!==V&&(n.vertexAttribDivisor(F,V),W[F]=V)}function b(){let F=r.newAttributes,V=r.enabledAttributes;for(let Y=0,k=V.length;Y<k;Y++)V[Y]!==F[Y]&&(n.disableVertexAttribArray(Y),V[Y]=0)}function T(F,V,Y,k,W,K,et){et===!0?n.vertexAttribIPointer(F,V,Y,W,K):n.vertexAttribPointer(F,V,Y,k,W,K)}function _(F,V,Y,k){v();let W=k.attributes,K=Y.getAttributes(),et=V.defaultAttributeValues;for(let gt in K){let rt=K[gt];if(rt.location>=0){let ot=W[gt];if(ot===void 0&&(gt==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),gt==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor)),ot!==void 0){let ut=ot.normalized,Ut=ot.itemSize,Nt=t.get(ot);if(Nt===void 0)continue;let re=Nt.buffer,ne=Nt.type,ae=Nt.bytesPerElement,st=ne===n.INT||ne===n.UNSIGNED_INT||ot.gpuType===Ll;if(ot.isInterleavedBufferAttribute){let ht=ot.data,Tt=ht.stride,jt=ot.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<rt.locationSize;kt++)p(rt.location+kt,ht.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<rt.locationSize;kt++)m(rt.location+kt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let kt=0;kt<rt.locationSize;kt++)T(rt.location+kt,Ut/rt.locationSize,ne,ut,Tt*ae,(jt+Ut/rt.locationSize*kt)*ae,st)}else{if(ot.isInstancedBufferAttribute){for(let ht=0;ht<rt.locationSize;ht++)p(rt.location+ht,ot.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ht=0;ht<rt.locationSize;ht++)m(rt.location+ht);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ht=0;ht<rt.locationSize;ht++)T(rt.location+ht,Ut/rt.locationSize,ne,ut,Ut*ae,Ut/rt.locationSize*ht*ae,st)}}else if(et!==void 0){let ut=et[gt];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(rt.location,ut);break;case 3:n.vertexAttrib3fv(rt.location,ut);break;case 4:n.vertexAttrib4fv(rt.location,ut);break;default:n.vertexAttrib1fv(rt.location,ut)}}}}b()}function w(){R();for(let F in i){let V=i[F];for(let Y in V){let k=V[Y];for(let W in k){let K=k[W];for(let et in K)h(K[et].object),delete K[et];delete k[W]}}delete i[F]}}function E(F){if(i[F.id]===void 0)return;let V=i[F.id];for(let Y in V){let k=V[Y];for(let W in k){let K=k[W];for(let et in K)h(K[et].object),delete K[et];delete k[W]}}delete i[F.id]}function C(F){for(let V in i){let Y=i[V];for(let k in Y){let W=Y[k];if(W[F.id]===void 0)continue;let K=W[F.id];for(let et in K)h(K[et].object),delete K[et];delete W[F.id]}}}function y(F){for(let V in i){let Y=i[V],k=F.isInstancedMesh===!0?F.id:0,W=Y[k];if(W!==void 0){for(let K in W){let et=W[K];for(let gt in et)h(et[gt].object),delete et[gt];delete W[K]}delete Y[k],Object.keys(Y).length===0&&delete i[V]}}}function R(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function J1(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==cn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Wi&&C!==ln&&!y&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(he("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:_,maxSamples:w,samples:E}}function j1(n){let t=this,e=null,i=0,s=!1,r=!1,a=new gn,o=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,T=b*4,_=p.clippingState||null;l.value=_,_=h(g,u,T,f);for(let w=0;w!==T;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,_=f;T!==v;++T,_+=4)a.copy(d[T]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ix(n){let t=[],e=[],i=n,s=n-Gr+1+K1;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,T=p>2?0:-1,_=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];g.set(_,f*u*p);for(let w=0;w<u;w++){let E=h[w*2]*2-1,C=h[w*2+1]*2-1;p===0?qs.set(1,C,E):p===1?qs.set(-E,1,-C):p===2?qs.set(-E,C,1):p===3?qs.set(-1,C,-E):p===4?qs.set(-E,-1,C):qs.set(E,C,-1),qs.toArray(v,(p*u+w)*f)}}let m=new ye;m.setAttribute("position",new He(g,f)),m.setAttribute("outputDirection",new He(v,f)),e.push(new At(m,null)),i>Gr&&i--}return{lodMeshes:e,sizeLods:t}}function Cd(n,t,e){let i=new zi(n,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function nx(n,t,e){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function sx(n,t,e){return new ai({name:"SphericalGaussianBlur",defines:{SAMPLES:Q1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ld(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Pd(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function rx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Rl||f===Al)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new gc(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Rl||f===Al,v=f===Ms||f===Ws;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Wr(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Wr(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Rl?u.mapping=Ms:f===Al&&(u.mapping=Ws),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function ax(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Fs("WebGLRenderer: "+i+" extension not supported."),s}}}function ox(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let b=f.array;v=f.version;for(let T=0,_=b.length;T<_;T+=3){let w=b[T+0],E=b[T+1],C=b[T+2];u.push(w,E,E,C,C,w)}}else{let b=g.array;v=g.version;for(let T=0,_=b.length/3-1;T<_;T+=3){let w=T+0,E=T+1,C=T+2;u.push(w,E,E,C,C,w)}}let m=new(g.count>=65535?ya:xa)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function lx(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hx(n,t,e){let i=new WeakMap,s=new Qe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let R=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let _=o.attributes.position.count*T,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*w*4*d),C=new ma(E,_,w,d);C.type=ln,C.needsUpdate=!0;let y=T*4;for(let D=0;D<d;D++){let F=m[D],V=p[D],Y=b[D],k=_*w*4*D;for(let W=0;W<F.count;W++){let K=W*y;f===!0&&(s.fromBufferAttribute(F,W),E[k+K+0]=s.x,E[k+K+1]=s.y,E[k+K+2]=s.z,E[k+K+3]=0),g===!0&&(s.fromBufferAttribute(V,W),E[k+K+4]=s.x,E[k+K+5]=s.y,E[k+K+6]=s.z,E[k+K+7]=0),v===!0&&(s.fromBufferAttribute(Y,W),E[k+K+8]=s.x,E[k+K+9]=s.y,E[k+K+10]=s.z,E[k+K+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new bt(_,w)},i.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function ux(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function fx(n,t,e,i,s,r){let a=new zi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ye;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));let h=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new At(c,h),u=new Nr(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,b=[],T=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let E=0;E<b.length;E++){let C=b[E];C.setSize&&C.setSize(_,w)}},this.setEffects=function(_){b=_,T=b.length>0&&b[0].isRenderPass===!0;let w=a.width,E=a.height;b.length>0&&o===null&&(o=new zi(w,E,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new zi(w,E,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let y=b[C];y.setSize&&y.setSize(w,E)}},this.begin=function(_,w){if(v||_.toneMapping===vn&&b.length===0)return!1;if(p=w,w!==null){let E=w.width,C=w.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return T===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=vn,!0},this.hasRenderPass=function(){return T},this.end=function(_,w){_.toneMapping=m,v=!0;let E=a,C=o;for(let y=0;y<b.length;y++){let R=b[y];R.enabled!==!1&&(R.render(_,C,E,w),R.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},Te.getTransfer(f)===We&&(h.defines.SRGB_TRANSFER="");let y=dx[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Xr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function yi(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function vi(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vc(n,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function px(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yi(e,t))return;n.uniform2fv(this.addr,t),vi(e,t)}}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(yi(e,t))return;n.uniform3fv(this.addr,t),vi(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yi(e,t))return;n.uniform4fv(this.addr,t),vi(e,t)}}function yx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(yi(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),vi(e,t)}else{if(yi(e,i))return;Fd.set(i),n.uniformMatrix2fv(this.addr,!1,Fd),vi(e,i)}}function vx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(yi(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),vi(e,t)}else{if(yi(e,i))return;Nd.set(i),n.uniformMatrix3fv(this.addr,!1,Nd),vi(e,i)}}function _x(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(yi(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),vi(e,t)}else{if(yi(e,i))return;Ud.set(i),n.uniformMatrix4fv(this.addr,!1,Ud),vi(e,i)}}function bx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yi(e,t))return;n.uniform2iv(this.addr,t),vi(e,t)}}function Sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yi(e,t))return;n.uniform3iv(this.addr,t),vi(e,t)}}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yi(e,t))return;n.uniform4iv(this.addr,t),vi(e,t)}}function wx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yi(e,t))return;n.uniform2uiv(this.addr,t),vi(e,t)}}function Rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yi(e,t))return;n.uniform3uiv(this.addr,t),vi(e,t)}}function Ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yi(e,t))return;n.uniform4uiv(this.addr,t),vi(e,t)}}function Cx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(d0.compareFunction=e.isReversedDepthBuffer()?fc:dc,r=d0):r=jd,e.setTexture2D(t||r,s)}function Lx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Qd,s)}function Px(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||tf,s)}function Ix(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kd,s)}function Dx(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return xx;case 35674:return yx;case 35675:return vx;case 35676:return _x;case 5124:case 35670:return bx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return Ex;case 5125:return wx;case 36294:return Tx;case 36295:return Rx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Ix}}function Ux(n,t){n.uniform1fv(this.addr,t)}function Nx(n,t){let e=Xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Fx(n,t){let e=Xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Bx(n,t){let e=Xr(t,this.size,4);n.uniform4fv(this.addr,e)}function kx(n,t){let e=Xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ox(n,t){let e=Xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Hx(n,t){let e=Xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zx(n,t){n.uniform1iv(this.addr,t)}function Gx(n,t){n.uniform2iv(this.addr,t)}function Vx(n,t){n.uniform3iv(this.addr,t)}function Wx(n,t){n.uniform4iv(this.addr,t)}function Xx(n,t){n.uniform1uiv(this.addr,t)}function qx(n,t){n.uniform2uiv(this.addr,t)}function Yx(n,t){n.uniform3uiv(this.addr,t)}function Zx(n,t){n.uniform4uiv(this.addr,t)}function Jx(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);yi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=d0:a=jd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function $x(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);yi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qd,r[a])}function jx(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);yi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tf,r[a])}function Kx(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);yi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kd,r[a])}function Qx(n){switch(n){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Bx;case 35674:return kx;case 35675:return Ox;case 35676:return Hx;case 5124:case 35670:return zx;case 35667:case 35671:return Gx;case 35668:case 35672:return Vx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Kx}}function Bd(n,t){n.seq.push(t),n.map[t.id]=t}function ty(n,t,e){let i=n.name,s=i.length;for(h0.lastIndex=0;;){let r=h0.exec(i),a=h0.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bd(e,c===void 0?new f0(o,n,t):new p0(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new m0(o),Bd(e,d)),e=d}}}function kd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function ny(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function sy(n){Te._getMatrix(Od,Te.workingColorSpace,n);let t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case da:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ny(n.getShaderSource(t),o)}else return r}function ry(n,t){let e=sy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oy(n,t){let e=ay[t];return e===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ly(){Te.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function hy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ja(n){return n!==""}function zd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function g0(n){return n.replace(dy,py)}function py(n,t){let e=ve[t];if(e===void 0){let i=fy.get(t);if(i!==void 0)e=ve[i],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return g0(e)}function Vd(n){return n.replace(my,gy)}function gy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function yy(n){return xy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function _y(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function My(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":by[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Ey(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sy[n.combine]||"ENVMAP_BLENDING_NONE"}function wy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ty(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=yy(e),c=_y(e),h=My(e),d=Ey(e),u=wy(e),f=cy(e),g=hy(r),v=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?ve.tonemapping_pars_fragment:"",e.toneMapping!==vn?oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,ry("linearToOutputTexel",e.outputColorSpace),ly(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ja).join(`
`)),a=g0(a),a=zd(a,e),a=Gd(a,e),o=g0(o),o=zd(o,e),o=Gd(o,e),a=Vd(a),o=Vd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=b+m+a,_=b+p+o,w=kd(s,s.VERTEX_SHADER,T),E=kd(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(F){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(v)||"",Y=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(E)||"",W=V.trim(),K=Y.trim(),et=k.trim(),gt=!0,rt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(gt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,E);else{let ot=Hd(s,w,"vertex"),ut=Hd(s,E,"fragment");fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+ot+`
`+ut)}else W!==""?he("WebGLProgram: Program Info Log:",W):(K===""||et==="")&&(rt=!1);rt&&(F.diagnostics={runnable:gt,programLog:W,vertexShader:{log:K,prefix:m},fragmentShader:{log:et,prefix:p}})}s.deleteShader(w),s.deleteShader(E),y=new Vr(s,v),R=uy(s,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,ey)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}function Ay(n){return n===ws||n===qa||n===Ya}function Cy(n,t,e,i,s,r){let a=new ga,o=new x0,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,R,D,F,V,Y){let k=F.fog,W=V.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,et=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,gt=t.get(y.envMap||K,et),rt=gt&&gt.mapping===Ha?gt.image.height:null,ot=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&he("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ut=ut!==void 0?ut.length:0,Nt=0;W.morphAttributes.position!==void 0&&(Nt=1),W.morphAttributes.normal!==void 0&&(Nt=2),W.morphAttributes.color!==void 0&&(Nt=3);let re,ne,ae,st;if(ot){let pt=Gn[ot];re=pt.vertexShader,ne=pt.fragmentShader}else{re=y.vertexShader,ne=y.fragmentShader;let pt=o.getVertexShaderStage(y),Bt=o.getFragmentShaderStage(y);o.update(y,pt,Bt),ae=pt.id,st=Bt.id}let ht=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),jt=V.isInstancedMesh===!0,kt=V.isBatchedMesh===!0,Yt=!!y.map,ue=!!y.matcap,U=!!gt,j=!!y.aoMap,lt=!!y.lightMap,nt=!!y.bumpMap&&y.wireframe===!1,Mt=!!y.normalMap,Lt=!!y.displacementMap,zt=!!y.emissiveMap,I=!!y.metalnessMap,J=!!y.roughnessMap,A=y.anisotropy>0,dt=y.clearcoat>0,vt=y.dispersion>0,S=y.retroreflectivity>0,x=y.iridescence>0,B=y.sheen>0,Z=y.transmission>0,z=A&&!!y.anisotropyMap,_t=dt&&!!y.clearcoatMap,$=dt&&!!y.clearcoatNormalMap,X=dt&&!!y.clearcoatRoughnessMap,it=x&&!!y.iridescenceMap,yt=x&&!!y.iridescenceThicknessMap,Rt=B&&!!y.sheenColorMap,Et=B&&!!y.sheenRoughnessMap,wt=!!y.specularMap,Pt=!!y.specularColorMap,te=!!y.specularIntensityMap,oe=Z&&!!y.transmissionMap,H=Z&&!!y.thicknessMap,Ft=!!y.gradientMap,ft=!!y.alphaMap,It=y.alphaTest>0,Gt=!!y.alphaHash,L=!!y.extensions,O=vn;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(O=n.toneMapping);let ct={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:ne,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:st,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:kt,batchingColor:kt&&V._colorsTexture!==null,instancing:jt,instancingColor:jt&&V.instanceColor!==null,instancingMorph:jt&&V.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:ue,envMap:U,envMapMode:U&&gt.mapping,envMapCubeUVHeight:rt,aoMap:j,lightMap:lt,bumpMap:nt,normalMap:Mt,displacementMap:Lt,emissiveMap:zt,normalMapObjectSpace:Mt&&y.normalMapType===od,normalMapTangentSpace:Mt&&y.normalMapType===Hr,packedNormalMap:Mt&&y.normalMapType===Hr&&Ay(y.normalMap.format),metalnessMap:I,roughnessMap:J,anisotropy:A,anisotropyMap:z,clearcoat:dt,clearcoatMap:_t,clearcoatNormalMap:$,clearcoatRoughnessMap:X,dispersion:vt,retroreflection:S,iridescence:x,iridescenceMap:it,iridescenceThicknessMap:yt,sheen:B,sheenColorMap:Rt,sheenRoughnessMap:Et,specularMap:wt,specularColorMap:Pt,specularIntensityMap:te,transmission:Z,transmissionMap:oe,thicknessMap:H,gradientMap:Ft,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:It,alphaHash:Gt,combine:y.combine,mapUv:Yt&&g(y.map.channel),aoMapUv:j&&g(y.aoMap.channel),lightMapUv:lt&&g(y.lightMap.channel),bumpMapUv:nt&&g(y.bumpMap.channel),normalMapUv:Mt&&g(y.normalMap.channel),displacementMapUv:Lt&&g(y.displacementMap.channel),emissiveMapUv:zt&&g(y.emissiveMap.channel),metalnessMapUv:I&&g(y.metalnessMap.channel),roughnessMapUv:J&&g(y.roughnessMap.channel),anisotropyMapUv:z&&g(y.anisotropyMap.channel),clearcoatMapUv:_t&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:$&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(y.sheenRoughnessMap.channel),specularMapUv:wt&&g(y.specularMap.channel),specularColorMapUv:Pt&&g(y.specularColorMap.channel),specularIntensityMapUv:te&&g(y.specularIntensityMap.channel),transmissionMapUv:oe&&g(y.transmissionMap.channel),thicknessMapUv:H&&g(y.thicknessMap.channel),alphaMapUv:ft&&g(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Mt||A),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Yt||ft),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&Mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Tt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Nt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:O,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&Te.getTransfer(y.map.colorSpace)===We,decodeVideoTextureEmissive:zt&&y.emissiveMap.isVideoTexture===!0&&Te.getTransfer(y.emissiveMap.colorSpace)===We,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ke,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:L&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(L&&y.extensions.multiDraw===!0||kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function m(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)R.push(D),R.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(R,y),b(R,y),R.push(n.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function p(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function b(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let R=f[y.type],D;if(R){let F=Gn[R];D=wd.clone(F.uniforms)}else D=y.uniforms;return D}function _(y,R){let D=h.get(R);return D!==void 0?++D.usedTimes:(D=new Ty(n,R,y,s),c.push(D),h.set(R,D)),D}function w(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function Ly(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Py(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Xd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,g,v,m,p,b){b.reversedDepth===!0&&(m=-m);let T=o(u,f,g,v,m,p);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(u,f,g,v,m,p){let b=o(u,f,g,v,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Py),i.length>1&&i.sort(f||Xd),s.length>1&&s.sort(f||Xd)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Iy(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new qd,n.set(i,[a])):s>=r.length?(a=new qd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Dy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new xt};break;case"SpotLight":e={position:new P,direction:new P,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Uy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Fy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function By(n){let t=new Dy,e=Uy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new De,a=new De;function o(c){let h=0,d=0,u=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,T=0,_=0,w=0,E=0,C=0,y=0,R=0,D=0;c.sort(Fy);for(let V=0,Y=c.length;V<Y;V++){let k=c[V],W=k.color,K=k.intensity,et=k.distance,gt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ws?gt=k.shadow.map.texture:gt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=W.r*K,d+=W.g*K,u+=W.b*K;else if(k.isLightProbe){for(let rt=0;rt<9;rt++)i.probe[rt].addScaledVector(k.sh.coefficients[rt],K);D++}else if(k.isSunLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ot=k.shadow,ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[g]=ut,i.sunShadowMap[g]=gt;let Ut=ot.getViewportCount();for(let Nt=0;Nt<Ut;Nt++)i.sunShadowMatrix[v+Nt]=ot.getMatrix(Nt),i.sunShadowCascade[v+Nt]=ot._cascadeData[Nt];v+=Ut,g++}i.sun[f]=rt,f++}else if(k.isDirectionalLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ot=k.shadow,ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.directionalShadow[m]=ut,i.directionalShadowMap[m]=gt,i.directionalShadowMatrix[m]=k.shadow.matrix,w++}i.directional[m]=rt,m++}else if(k.isSpotLight){let rt=t.get(k);rt.position.setFromMatrixPosition(k.matrixWorld),rt.color.copy(W).multiplyScalar(K),rt.distance=et,rt.coneCos=Math.cos(k.angle),rt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),rt.decay=k.decay,i.spot[b]=rt;let ot=k.shadow;if(k.map&&(i.spotLightMap[y]=k.map,y++,ot.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[b]=ot.matrix,k.castShadow){let ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.spotShadow[b]=ut,i.spotShadowMap[b]=gt,C++}b++}else if(k.isRectAreaLight){let rt=t.get(k);rt.color.copy(W).multiplyScalar(K),rt.halfWidth.set(k.width*.5,0,0),rt.halfHeight.set(0,k.height*.5,0),i.rectArea[T]=rt,T++}else if(k.isPointLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),rt.distance=k.distance,rt.decay=k.decay,k.castShadow){let ot=k.shadow,ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,ut.shadowCameraNear=ot.camera.near,ut.shadowCameraFar=ot.camera.far,i.pointShadow[p]=ut,i.pointShadowMap[p]=gt,i.pointShadowMatrix[p]=k.shadow.matrix,E++}i.point[p]=rt,p++}else if(k.isHemisphereLight){let rt=t.get(k);rt.skyColor.copy(k.color).multiplyScalar(K),rt.groundColor.copy(k.groundColor).multiplyScalar(K),i.hemi[_]=rt,_++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Vt.LTC_FLOAT_1,i.rectAreaLTC2=Vt.LTC_FLOAT_2):(i.rectAreaLTC1=Vt.LTC_HALF_1,i.rectAreaLTC2=Vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==b||F.rectAreaLength!==T||F.hemiLength!==_||F.numSunShadows!==g||F.numDirectionalShadows!==w||F.numPointShadows!==E||F.numSpotShadows!==C||F.numSpotMaps!==y||F.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=T,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=b,F.rectAreaLength=T,F.hemiLength=_,F.numSunShadows=g,F.numDirectionalShadows=w,F.numPointShadows=E,F.numSpotShadows=C,F.numSpotMaps=y,F.numLightProbes=D,i.version=Ny++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let _=c[b];if(_.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(_.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Yd(n){let t=new By(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ky(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yd(n),t.set(s,[o])):r>=a.length?(o=new Yd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}function Vy(n,t,e){let i=new Ar,s=new bt,r=new bt,a=new Qe,o=new dl,l=new fl,c={},h=e.maxTextureSize,d={[Vi]:Ze,[Ze]:Vi,[ke]:ke},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Oy,fragmentShader:Hy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new At(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let p=this.type;this.render=function(E,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ku&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ka);let R=n.getRenderTarget(),D=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Hn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Y=p!==this.type;Y&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(W=>W.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,W=E.length;k<W;k++){let K=E[k],et=K.shadow;if(et===void 0){he("WebGLShadowMap:",K,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let gt=et.getFrameExtents();s.multiply(gt),r.copy(et.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,et.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,et.mapSize.y=r.y));let rt=n.state.buffers.depth.getReversed();if(et.camera._reversedDepth=rt,et.map===null||Y===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===Fr){if(K.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new zi(s.x,s.y,{format:ws,type:bn,minFilter:Ci,magFilter:Ci,generateMipmaps:!1}),et.map.texture.name=K.name+".shadowMap",et.map.depthTexture=new gs(s.x,s.y,ln),et.map.depthTexture.name=K.name+".shadowMapDepth",et.map.depthTexture.format=In,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=pi,et.map.depthTexture.magFilter=pi}else K.isPointLight?(et.map=new gc(s.x),et.map.depthTexture=new sl(s.x,_n)):(et.map=new zi(s.x,s.y),et.map.depthTexture=new gs(s.x,s.y,_n)),et.map.depthTexture.name=K.name+".shadowMap",et.map.depthTexture.format=In,this.type===ka?(et.map.depthTexture.compareFunction=rt?fc:dc,et.map.depthTexture.minFilter=Ci,et.map.depthTexture.magFilter=Ci):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=pi,et.map.depthTexture.magFilter=pi);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let ot=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();K.isPointLight!==!0&&et.updateMatrices(K,y);for(let ut=0;ut<ot;ut++){let Ut=et.getCamera(ut);if(K.isPointLight){let Nt=et.camera,re=et.matrix,ne=K.distance||Nt.far;ne!==Nt.far&&(Nt.far=ne,Nt.updateProjectionMatrix()),$a.setFromMatrixPosition(K.matrixWorld),Nt.position.copy($a),u0.copy(Nt.position),u0.add(zy[ut]),Nt.up.copy(Gy[ut]),Nt.lookAt(u0),Nt.updateMatrixWorld(),re.makeTranslation(-$a.x,-$a.y,-$a.z),Zd.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(Zd,Nt.coordinateSystem,Nt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)n.setRenderTarget(et.map,ut),n.clear();else{ut===0&&(n.setRenderTarget(et.map),n.clear());let Nt=et.getViewport(ut);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),V.viewport(a)}i=et.getFrustum(ut),_(C,y,Ut,K,this.type)}et.isPointLightShadow!==!0&&this.type===Fr&&b(et,y),et.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,D,F)};function b(E,C){let y=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new zi(s.x,s.y,{format:ws,type:bn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,y,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,y,f,v,null)}function T(E,C,y,R){let D=null,F=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)D=F;else if(D=y.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let V=D.uuid,Y=C.uuid,k=c[V];k===void 0&&(k={},c[V]=k);let W=k[Y];W===void 0&&(W=D.clone(),k[Y]=W,C.addEventListener("dispose",w)),D=W}if(D.visible=C.visible,D.wireframe=C.wireframe,R===Fr?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let V=n.properties.get(D);V.light=y}return D}function _(E,C,y,R,D){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Fr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),k=E.material;if(Array.isArray(k)){let W=Y.groups;for(let K=0,et=W.length;K<et;K++){let gt=W[K],rt=k[gt.materialIndex];if(rt&&rt.visible){let ot=T(E,rt,R,D);E.onBeforeShadow(n,E,C,y,Y,ot,gt),n.renderBufferDirect(y,null,Y,ot,E,gt),E.onAfterShadow(n,E,C,y,Y,ot,gt)}}}else if(k.visible){let W=T(E,k,R,D);E.onBeforeShadow(n,E,C,y,Y,W,null),n.renderBufferDirect(y,null,Y,W,E,null),E.onAfterShadow(n,E,C,y,Y,W,null)}}let V=E.children;for(let Y=0,k=V.length;Y<k;Y++)_(V[Y],C,y,R,D)}function w(E){E.target.removeEventListener("dispose",w);for(let y in c){let R=c[y],D=E.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function Wy(n,t){function e(){let H=!1,Ft=new Qe,ft=null,It=new Qe(0,0,0,0);return{setMask:function(Gt){ft!==Gt&&!H&&(n.colorMask(Gt,Gt,Gt,Gt),ft=Gt)},setLocked:function(Gt){H=Gt},setClear:function(Gt,L,O,ct,pt){pt===!0&&(Gt*=ct,L*=ct,O*=ct),Ft.set(Gt,L,O,ct),It.equals(Ft)===!1&&(n.clearColor(Gt,L,O,ct),It.copy(Ft))},reset:function(){H=!1,ft=null,It.set(-1,0,0,0)}}}function i(){let H=!1,Ft=!1,ft=null,It=null,Gt=null;return{setReversed:function(L){if(Ft!==L){let O=t.get("EXT_clip_control");L?O.clipControlEXT(O.LOWER_LEFT_EXT,O.ZERO_TO_ONE_EXT):O.clipControlEXT(O.LOWER_LEFT_EXT,O.NEGATIVE_ONE_TO_ONE_EXT),Ft=L;let ct=Gt;Gt=null,this.setClear(ct)}},getReversed:function(){return Ft},setTest:function(L){L?ht(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(L){ft!==L&&!H&&(n.depthMask(L),ft=L)},setFunc:function(L){if(Ft&&(L=yd[L]),It!==L){switch(L){case Vo:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case Xo:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case qo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case Zo:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}It=L}},setLocked:function(L){H=L},setClear:function(L){Gt!==L&&(Gt=L,Ft&&(L=1-L),n.clearDepth(L))},reset:function(){H=!1,ft=null,It=null,Gt=null,Ft=!1}}}function s(){let H=!1,Ft=null,ft=null,It=null,Gt=null,L=null,O=null,ct=null,pt=null;return{setTest:function(Bt){H||(Bt?ht(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(Bt){Ft!==Bt&&!H&&(n.stencilMask(Bt),Ft=Bt)},setFunc:function(Bt,Zt,de){(ft!==Bt||It!==Zt||Gt!==de)&&(n.stencilFunc(Bt,Zt,de),ft=Bt,It=Zt,Gt=de)},setOp:function(Bt,Zt,de){(L!==Bt||O!==Zt||ct!==de)&&(n.stencilOp(Bt,Zt,de),L=Bt,O=Zt,ct=de)},setLocked:function(Bt){H=Bt},setClear:function(Bt){pt!==Bt&&(n.clearStencil(Bt),pt=Bt)},reset:function(){H=!1,Ft=null,ft=null,It=null,Gt=null,L=null,O=null,ct=null,pt=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,T=null,_=null,w=null,E=null,C=null,y=new xt(0,0,0),R=0,D=!1,F=null,V=null,Y=null,k=null,W=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,gt=0,rt=n.getParameter(n.VERSION);rt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),et=gt>=1):rt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),et=gt>=2);let ot=null,ut={},Ut=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),re=new Qe().fromArray(Ut),ne=new Qe().fromArray(Nt);function ae(H,Ft,ft,It){let Gt=new Uint8Array(4),L=n.createTexture();n.bindTexture(H,L),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let O=0;O<ft;O++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ft,0,n.RGBA,1,1,It,0,n.RGBA,n.UNSIGNED_BYTE,Gt):n.texImage2D(Ft+O,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Gt);return L}let st={};st[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),a.setFunc(vr),nt(!1),Mt(Uh),ht(n.CULL_FACE),j(Hn);function ht(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function Tt(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function jt(H,Ft){return u[H]!==Ft?(n.bindFramebuffer(H,Ft),u[H]=Ft,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ft),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ft),!0):!1}function kt(H,Ft){let ft=g,It=!1;if(H){ft=f.get(Ft),ft===void 0&&(ft=[],f.set(Ft,ft));let Gt=H.textures;if(ft.length!==Gt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let L=0,O=Gt.length;L<O;L++)ft[L]=n.COLOR_ATTACHMENT0+L;ft.length=Gt.length,It=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,It=!0);It&&n.drawBuffers(ft)}function Yt(H){return v!==H?(n.useProgram(H),v=H,!0):!1}let ue={[Vs]:n.FUNC_ADD,[Hu]:n.FUNC_SUBTRACT,[zu]:n.FUNC_REVERSE_SUBTRACT};ue[Gu]=n.MIN,ue[Vu]=n.MAX;let U={[Wu]:n.ZERO,[Xu]:n.ONE,[qu]:n.SRC_COLOR,[Bh]:n.SRC_ALPHA,[Ku]:n.SRC_ALPHA_SATURATE,[$u]:n.DST_COLOR,[Zu]:n.DST_ALPHA,[Yu]:n.ONE_MINUS_SRC_COLOR,[kh]:n.ONE_MINUS_SRC_ALPHA,[ju]:n.ONE_MINUS_DST_COLOR,[Ju]:n.ONE_MINUS_DST_ALPHA,[Qu]:n.CONSTANT_COLOR,[td]:n.ONE_MINUS_CONSTANT_COLOR,[ed]:n.CONSTANT_ALPHA,[id]:n.ONE_MINUS_CONSTANT_ALPHA};function j(H,Ft,ft,It,Gt,L,O,ct,pt,Bt){if(H===Hn){m===!0&&(Tt(n.BLEND),m=!1);return}if(m===!1&&(ht(n.BLEND),m=!0),H!==Ou){if(H!==p||Bt!==D){if((b!==Vs||w!==Vs)&&(n.blendEquation(n.FUNC_ADD),b=Vs,w=Vs),Bt)switch(H){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xe:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:fe("WebGLState: Invalid blending: ",H);break}else switch(H){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xe:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",H);break}T=null,_=null,E=null,C=null,y.set(0,0,0),R=0,p=H,D=Bt}return}Gt=Gt||Ft,L=L||ft,O=O||It,(Ft!==b||Gt!==w)&&(n.blendEquationSeparate(ue[Ft],ue[Gt]),b=Ft,w=Gt),(ft!==T||It!==_||L!==E||O!==C)&&(n.blendFuncSeparate(U[ft],U[It],U[L],U[O]),T=ft,_=It,E=L,C=O),(ct.equals(y)===!1||pt!==R)&&(n.blendColor(ct.r,ct.g,ct.b,pt),y.copy(ct),R=pt),p=H,D=!1}function lt(H,Ft){H.side===ke?Tt(n.CULL_FACE):ht(n.CULL_FACE);let ft=H.side===Ze;Ft&&(ft=!ft),nt(ft),H.blending===bs&&H.transparent===!1?j(Hn):j(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let It=H.stencilWrite;o.setTest(It),It&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),zt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(H){F!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),F=H)}function Mt(H){H!==Fu?(ht(n.CULL_FACE),H!==V&&(H===Uh?n.cullFace(n.BACK):H===Bu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),V=H}function Lt(H){H!==Y&&(et&&n.lineWidth(H),Y=H)}function zt(H,Ft,ft){H?(ht(n.POLYGON_OFFSET_FILL),(k!==Ft||W!==ft)&&(k=Ft,W=ft,a.getReversed()&&(Ft=-Ft),n.polygonOffset(Ft,ft))):Tt(n.POLYGON_OFFSET_FILL)}function I(H){H?ht(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function J(H){H===void 0&&(H=n.TEXTURE0+K-1),ot!==H&&(n.activeTexture(H),ot=H)}function A(H,Ft,ft){ft===void 0&&(ot===null?ft=n.TEXTURE0+K-1:ft=ot);let It=ut[ft];It===void 0&&(It={type:void 0,texture:void 0},ut[ft]=It),(It.type!==H||It.texture!==Ft)&&(ot!==ft&&(n.activeTexture(ft),ot=ft),n.bindTexture(H,Ft||st[H]),It.type=H,It.texture=Ft)}function dt(){let H=ut[ot];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function vt(){try{n.compressedTexImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function x(){try{n.texSubImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function B(){try{n.texSubImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function z(){try{n.compressedTexSubImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function _t(){try{n.texStorage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function $(){try{n.texStorage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function X(){try{n.texImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function it(){try{n.texImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function yt(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function Rt(H,Ft){d[H]!==Ft&&(n.pixelStorei(H,Ft),d[H]=Ft)}function Et(H){re.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function wt(H){ne.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ne.copy(H))}function Pt(H,Ft){let ft=c.get(Ft);ft===void 0&&(ft=new WeakMap,c.set(Ft,ft));let It=ft.get(H);It===void 0&&(It=n.getUniformBlockIndex(Ft,H.name),ft.set(H,It))}function te(H,Ft){let It=c.get(Ft).get(H);l.get(Ft)!==It&&(n.uniformBlockBinding(Ft,It,H.__bindingPointIndex),l.set(Ft,It))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ot=null,ut={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,T=null,_=null,w=null,E=null,C=null,y=new xt(0,0,0),R=0,D=!1,F=null,V=null,Y=null,k=null,W=null,re.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Tt,bindFramebuffer:jt,drawBuffers:kt,useProgram:Yt,setBlending:j,setMaterial:lt,setFlipSided:nt,setCullFace:Mt,setLineWidth:Lt,setPolygonOffset:zt,setScissorTest:I,activeTexture:J,bindTexture:A,unbindTexture:dt,compressedTexImage2D:vt,compressedTexImage3D:S,texImage2D:X,texImage3D:it,pixelStorei:Rt,getParameter:yt,updateUBOMapping:Pt,uniformBlockBinding:te,texStorage2D:_t,texStorage3D:$,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:Z,compressedTexSubImage3D:z,scissor:Et,viewport:wt,reset:oe}}function Xy(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return g?new OffscreenCanvas(S,x):fa("canvas")}function m(S,x,B){let Z=1,z=vt(S);if((z.width>B||z.height>B)&&(Z=B/Math.max(z.width,z.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let _t=Math.floor(Z*z.width),$=Math.floor(Z*z.height);u===void 0&&(u=v(_t,$));let X=x?v(_t,$):u;return X.width=_t,X.height=$,X.getContext("2d").drawImage(S,0,0,_t,$),he("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+_t+"x"+$+")."),X}else return"data"in S&&he("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),S;return S}function p(S){return S.generateMipmaps}function b(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(S,x,B,Z,z,_t=!1){if(S!==null){if(n[S]!==void 0)return n[S];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let $;Z&&($=t.get("EXT_texture_norm16"),$||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=x;if(x===n.RED&&(B===n.FLOAT&&(X=n.R32F),B===n.HALF_FLOAT&&(X=n.R16F),B===n.UNSIGNED_BYTE&&(X=n.R8),B===n.UNSIGNED_SHORT&&$&&(X=$.R16_EXT),B===n.SHORT&&$&&(X=$.R16_SNORM_EXT)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.R8UI),B===n.UNSIGNED_SHORT&&(X=n.R16UI),B===n.UNSIGNED_INT&&(X=n.R32UI),B===n.BYTE&&(X=n.R8I),B===n.SHORT&&(X=n.R16I),B===n.INT&&(X=n.R32I)),x===n.RG&&(B===n.FLOAT&&(X=n.RG32F),B===n.HALF_FLOAT&&(X=n.RG16F),B===n.UNSIGNED_BYTE&&(X=n.RG8),B===n.UNSIGNED_SHORT&&$&&(X=$.RG16_EXT),B===n.SHORT&&$&&(X=$.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RG8UI),B===n.UNSIGNED_SHORT&&(X=n.RG16UI),B===n.UNSIGNED_INT&&(X=n.RG32UI),B===n.BYTE&&(X=n.RG8I),B===n.SHORT&&(X=n.RG16I),B===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGB8UI),B===n.UNSIGNED_SHORT&&(X=n.RGB16UI),B===n.UNSIGNED_INT&&(X=n.RGB32UI),B===n.BYTE&&(X=n.RGB8I),B===n.SHORT&&(X=n.RGB16I),B===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),B===n.UNSIGNED_INT&&(X=n.RGBA32UI),B===n.BYTE&&(X=n.RGBA8I),B===n.SHORT&&(X=n.RGBA16I),B===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_SHORT&&$&&(X=$.RGB16_EXT),B===n.SHORT&&$&&(X=$.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){let it=_t?da:Te.getTransfer(z);B===n.FLOAT&&(X=n.RGBA32F),B===n.HALF_FLOAT&&(X=n.RGBA16F),B===n.UNSIGNED_BYTE&&(X=it===We?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&$&&(X=$.RGBA16_EXT),B===n.SHORT&&$&&(X=$.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function w(S,x){let B;return S?x===null||x===_n||x===kr?B=n.DEPTH24_STENCIL8:x===ln?B=n.DEPTH32F_STENCIL8:x===Br&&(B=n.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_n||x===kr?B=n.DEPTH_COMPONENT24:x===ln?B=n.DEPTH_COMPONENT32F:x===Br&&(B=n.DEPTH_COMPONENT16),B}function E(S,x){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==pi&&S.minFilter!==Ci?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function C(S){let x=S.target;x.removeEventListener("dispose",C),R(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(S){let x=S.target;x.removeEventListener("dispose",y),F(x)}function R(S){let x=i.get(S);if(x.__webglInit===void 0)return;let B=S.source,Z=f.get(B);if(Z){let z=Z[x.__cacheKey];z.usedTimes--,z.usedTimes===0&&D(S),Object.keys(Z).length===0&&f.delete(B)}i.remove(S)}function D(S){let x=i.get(S);n.deleteTexture(x.__webglTexture);let B=S.source,Z=f.get(B);delete Z[x.__cacheKey],a.memory.textures--}function F(S){let x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let z=0;z<x.__webglFramebuffer[Z].length;z++)n.deleteFramebuffer(x.__webglFramebuffer[Z][z]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=S.textures;for(let Z=0,z=B.length;Z<z;Z++){let _t=i.get(B[Z]);_t.__webglTexture&&(n.deleteTexture(_t.__webglTexture),a.memory.textures--),i.remove(B[Z])}i.remove(S)}let V=0;function Y(){V=0}function k(){return V}function W(S){V=S}function K(){let S=V;return S>=s.maxTextures&&he("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,S}function et(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function gt(S,x){let B=i.get(S);if(S.isVideoTexture&&A(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let Z=S.image;if(Z===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(B,S,x);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function rt(S,x){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){Tt(B,S,x);return}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function ot(S,x){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){Tt(B,S,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function ut(S,x){let B=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version){jt(B,S,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}let Ut={[_r]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},Nt={[pi]:n.NEAREST,[rd]:n.NEAREST_MIPMAP_NEAREST,[za]:n.NEAREST_MIPMAP_LINEAR,[Ci]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},re={[cd]:n.NEVER,[pd]:n.ALWAYS,[hd]:n.LESS,[dc]:n.LEQUAL,[ud]:n.EQUAL,[fc]:n.GEQUAL,[dd]:n.GREATER,[fd]:n.NOTEQUAL};function ne(S,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ci||x.magFilter===Cl||x.magFilter===za||x.magFilter===Ss||x.minFilter===Ci||x.minFilter===Cl||x.minFilter===za||x.minFilter===Ss)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Ut[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Ut[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Ut[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Nt[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Nt[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,re[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pi||x.minFilter!==za&&x.minFilter!==Ss||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ae(S,x){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",C));let Z=x.source,z=f.get(Z);z===void 0&&(z={},f.set(Z,z));let _t=et(x);if(_t!==S.__cacheKey){z[_t]===void 0&&(z[_t]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),z[_t].usedTimes++;let $=z[S.__cacheKey];$!==void 0&&(z[S.__cacheKey].usedTimes--,$.usedTimes===0&&D(x)),S.__cacheKey=_t,S.__webglTexture=z[_t].texture}return B}function st(S,x,B){return Math.floor(Math.floor(S/B)/x)}function ht(S,x,B,Z){let _t=S.updateRanges;if(_t.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,Z,x.data);else{_t.sort((Rt,Et)=>Rt.start-Et.start);let $=0;for(let Rt=1;Rt<_t.length;Rt++){let Et=_t[$],wt=_t[Rt],Pt=Et.start+Et.count,te=st(wt.start,x.width,4),oe=st(Et.start,x.width,4);wt.start<=Pt+1&&te===oe&&st(wt.start+wt.count-1,x.width,4)===te?Et.count=Math.max(Et.count,wt.start+wt.count-Et.start):(++$,_t[$]=wt)}_t.length=$+1;let X=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Rt=0,Et=_t.length;Rt<Et;Rt++){let wt=_t[Rt],Pt=Math.floor(wt.start/4),te=Math.ceil(wt.count/4),oe=Pt%x.width,H=Math.floor(Pt/x.width),Ft=te,ft=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,oe,H,Ft,ft,B,Z,x.data)}S.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,X),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function Tt(S,x,B){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);let z=ae(S,x),_t=x.source;e.bindTexture(Z,S.__webglTexture,n.TEXTURE0+B);let $=i.get(_t);if(_t.version!==$.__version||z===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ft=Te.getPrimaries(Te.workingColorSpace),It=x.colorSpace===ss?null:Te.getPrimaries(x.colorSpace),Gt=x.colorSpace===ss||ft===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let it=m(x.image,!1,s.maxTextureSize);it=dt(x,it);let yt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),Et=_(x.internalFormat,yt,Rt,x.normalized,x.colorSpace,x.isVideoTexture);ne(Z,x);let wt,Pt=x.mipmaps,te=x.isVideoTexture!==!0,oe=$.__version===void 0||z===!0,H=_t.dataReady,Ft=E(x,it);if(x.isDepthTexture)Et=w(x.format===Es,x.type),oe&&(te?e.texStorage2D(n.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Et,it.width,it.height,0,yt,Rt,null));else if(x.isDataTexture)if(Pt.length>0){te&&oe&&e.texStorage2D(n.TEXTURE_2D,Ft,Et,Pt[0].width,Pt[0].height);for(let ft=0,It=Pt.length;ft<It;ft++)wt=Pt[ft],te?H&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,wt.width,wt.height,yt,Rt,wt.data):e.texImage2D(n.TEXTURE_2D,ft,Et,wt.width,wt.height,0,yt,Rt,wt.data);x.generateMipmaps=!1}else te?(oe&&e.texStorage2D(n.TEXTURE_2D,Ft,Et,it.width,it.height),H&&ht(x,it,yt,Rt)):e.texImage2D(n.TEXTURE_2D,0,Et,it.width,it.height,0,yt,Rt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){te&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Et,Pt[0].width,Pt[0].height,it.depth);for(let ft=0,It=Pt.length;ft<It;ft++)if(wt=Pt[ft],x.format!==cn)if(yt!==null)if(te){if(H)if(x.layerUpdates.size>0){let Gt=s0(wt.width,wt.height,x.format,x.type);for(let L of x.layerUpdates){let O=wt.data.subarray(L*Gt/wt.data.BYTES_PER_ELEMENT,(L+1)*Gt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,L,wt.width,wt.height,1,yt,O)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,it.depth,yt,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Et,wt.width,wt.height,it.depth,0,wt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,it.depth,yt,Rt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Et,wt.width,wt.height,it.depth,0,yt,Rt,wt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{te&&oe&&e.texStorage2D(n.TEXTURE_2D,Ft,Et,Pt[0].width,Pt[0].height);for(let ft=0,It=Pt.length;ft<It;ft++)wt=Pt[ft],x.format!==cn?yt!==null?te?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,wt.width,wt.height,yt,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Et,wt.width,wt.height,0,wt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?H&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,wt.width,wt.height,yt,Rt,wt.data):e.texImage2D(n.TEXTURE_2D,ft,Et,wt.width,wt.height,0,yt,Rt,wt.data)}else if(x.isDataArrayTexture)if(te){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Et,it.width,it.height,it.depth),H)if(x.layerUpdates.size>0){let ft=s0(it.width,it.height,x.format,x.type);for(let It of x.layerUpdates){let Gt=it.data.subarray(It*ft/it.data.BYTES_PER_ELEMENT,(It+1)*ft/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,it.width,it.height,1,yt,Rt,Gt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Rt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,yt,Rt,it.data);else if(x.isData3DTexture)te?(oe&&e.texStorage3D(n.TEXTURE_3D,Ft,Et,it.width,it.height,it.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Rt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,yt,Rt,it.data);else if(x.isFramebufferTexture){if(oe)if(te)e.texStorage2D(n.TEXTURE_2D,Ft,Et,it.width,it.height);else{let ft=it.width,It=it.height;for(let Gt=0;Gt<Ft;Gt++)e.texImage2D(n.TEXTURE_2D,Gt,Et,ft,It,0,yt,Rt,null),ft>>=1,It>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let ft=n.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),it.parentNode!==ft){ft.appendChild(it),d.add(x),ft.onpaint=It=>{let Gt=It.changedElements;for(let L of d)Gt.includes(L.image)&&(L.needsUpdate=!0)},ft.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Gt=n.RGBA,L=n.RGBA,O=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Gt,L,O,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(te&&oe){let ft=vt(Pt[0]);e.texStorage2D(n.TEXTURE_2D,Ft,Et,ft.width,ft.height)}for(let ft=0,It=Pt.length;ft<It;ft++)wt=Pt[ft],te?H&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,yt,Rt,wt):e.texImage2D(n.TEXTURE_2D,ft,Et,yt,Rt,wt);x.generateMipmaps=!1}else if(te){if(oe){let ft=vt(it);e.texStorage2D(n.TEXTURE_2D,Ft,Et,ft.width,ft.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Rt,it)}else e.texImage2D(n.TEXTURE_2D,0,Et,yt,Rt,it);p(x)&&b(Z),$.__version=_t.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function jt(S,x,B){if(x.image.length!==6)return;let Z=ae(S,x),z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+B);let _t=i.get(z);if(z.version!==_t.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);let $=Te.getPrimaries(Te.workingColorSpace),X=x.colorSpace===ss?null:Te.getPrimaries(x.colorSpace),it=x.colorSpace===ss||$===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=x.isCompressedTexture||x.image[0].isCompressedTexture,Rt=x.image[0]&&x.image[0].isDataTexture,Et=[];for(let L=0;L<6;L++)!yt&&!Rt?Et[L]=m(x.image[L],!0,s.maxCubemapSize):Et[L]=Rt?x.image[L].image:x.image[L],Et[L]=dt(x,Et[L]);let wt=Et[0],Pt=r.convert(x.format,x.colorSpace),te=r.convert(x.type),oe=_(x.internalFormat,Pt,te,x.normalized,x.colorSpace),H=x.isVideoTexture!==!0,Ft=_t.__version===void 0||Z===!0,ft=z.dataReady,It=E(x,wt);ne(n.TEXTURE_CUBE_MAP,x);let Gt;if(yt){H&&Ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,oe,wt.width,wt.height);for(let L=0;L<6;L++){Gt=Et[L].mipmaps;for(let O=0;O<Gt.length;O++){let ct=Gt[O];x.format!==cn?Pt!==null?H?ft&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O,oe,ct.width,ct.height,0,ct.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O,0,0,ct.width,ct.height,Pt,te,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O,oe,ct.width,ct.height,0,Pt,te,ct.data)}}}else{if(Gt=x.mipmaps,H&&Ft){Gt.length>0&&It++;let L=vt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,oe,L.width,L.height)}for(let L=0;L<6;L++)if(Rt){H?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Et[L].width,Et[L].height,Pt,te,Et[L].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,oe,Et[L].width,Et[L].height,0,Pt,te,Et[L].data);for(let O=0;O<Gt.length;O++){let pt=Gt[O].image[L].image;H?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O+1,0,0,pt.width,pt.height,Pt,te,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O+1,oe,pt.width,pt.height,0,Pt,te,pt.data)}}else{H?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Pt,te,Et[L]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,oe,Pt,te,Et[L]);for(let O=0;O<Gt.length;O++){let ct=Gt[O];H?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O+1,0,0,Pt,te,ct.image[L]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,O+1,oe,Pt,te,ct.image[L])}}}p(x)&&b(n.TEXTURE_CUBE_MAP),_t.__version=z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function kt(S,x,B,Z,z,_t){let $=r.convert(B.format,B.colorSpace),X=r.convert(B.type),it=_(B.internalFormat,$,X,B.normalized,B.colorSpace),yt=i.get(x),Rt=i.get(B);if(Rt.__renderTarget=x,!yt.__hasExternalTextures){let Et=Math.max(1,x.width>>_t),wt=Math.max(1,x.height>>_t);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,_t,it,Et,wt,x.depth,0,$,X,null):e.texImage2D(z,_t,it,Et,wt,0,$,X,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),J(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,z,Rt.__webglTexture,0,I(x)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,z,Rt.__webglTexture,_t),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(S,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){let Z=x.depthTexture,z=Z&&Z.isDepthTexture?Z.type:null,_t=w(x.stencilBuffer,z),$=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;J(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(x),_t,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(x),_t,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_t,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,S)}else{let Z=x.textures;for(let z=0;z<Z.length;z++){let _t=Z[z],$=r.convert(_t.format,_t.colorSpace),X=r.convert(_t.type),it=_(_t.internalFormat,$,X,_t.normalized,_t.colorSpace);J(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(x),it,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(x),it,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,it,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(S,x,B){let Z=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=i.get(x.depthTexture);if(z.__renderTarget=x,(!z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(z.__webglInit===void 0&&(z.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),z.__webglTexture===void 0){z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),ne(n.TEXTURE_CUBE_MAP,x.depthTexture);let yt=r.convert(x.depthTexture.format),Rt=r.convert(x.depthTexture.type),Et;x.depthTexture.format===In?Et=n.DEPTH_COMPONENT24:x.depthTexture.format===Es&&(Et=n.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Et,x.width,x.height,0,yt,Rt,null)}}else gt(x.depthTexture,0);let _t=z.__webglTexture,$=I(x),X=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,it=x.depthTexture.format===Es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===In)J(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,X,_t,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,it,X,_t,0);else if(x.depthTexture.format===Es)J(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,X,_t,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,it,X,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(S){let x=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let Z=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",z)};Z.addEventListener("dispose",z),x.__depthDisposeCallback=z}x.__boundDepthTexture=Z}if(S.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)ue(x.__webglFramebuffer[Z],S,Z);else{let Z=S.texture.mipmaps;Z&&Z.length>0?ue(x.__webglFramebuffer[0],S,0):ue(x.__webglFramebuffer,S,0)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),Yt(x.__webglDepthbuffer[Z],S,!1);else{let z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,_t)}}else{let Z=S.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Yt(x.__webglDepthbuffer,S,!1);else{let z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,_t)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(S,x,B){let Z=i.get(S);x!==void 0&&kt(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&U(S)}function lt(S){let x=S.texture,B=i.get(S),Z=i.get(x);S.addEventListener("dispose",y);let z=S.textures,_t=S.isWebGLCubeRenderTarget===!0,$=z.length>1;if($||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,a.memory.textures++),_t){B.__webglFramebuffer=[];for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[X]=[];for(let it=0;it<x.mipmaps.length;it++)B.__webglFramebuffer[X][it]=n.createFramebuffer()}else B.__webglFramebuffer[X]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let X=0;X<x.mipmaps.length;X++)B.__webglFramebuffer[X]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if($)for(let X=0,it=z.length;X<it;X++){let yt=i.get(z[X]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&J(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let X=0;X<z.length;X++){let it=z[X];B.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[X]);let yt=r.convert(it.format,it.colorSpace),Rt=r.convert(it.type),Et=_(it.internalFormat,yt,Rt,it.normalized,it.colorSpace,S.isXRRenderTarget===!0),wt=I(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,Et,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,B.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Yt(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_t){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ne(n.TEXTURE_CUBE_MAP,x);for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0)for(let it=0;it<x.mipmaps.length;it++)kt(B.__webglFramebuffer[X][it],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,it);else kt(B.__webglFramebuffer[X],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(x)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($){for(let X=0,it=z.length;X<it;X++){let yt=z[X],Rt=i.get(yt),Et=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Et=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,Rt.__webglTexture),ne(Et,yt),kt(B.__webglFramebuffer,S,yt,n.COLOR_ATTACHMENT0+X,Et,0),p(yt)&&b(Et)}e.unbindTexture()}else{let X=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(X=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(X,Z.__webglTexture),ne(X,x),x.mipmaps&&x.mipmaps.length>0)for(let it=0;it<x.mipmaps.length;it++)kt(B.__webglFramebuffer[it],S,x,n.COLOR_ATTACHMENT0,X,it);else kt(B.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,X,0);p(x)&&b(X),e.unbindTexture()}S.depthBuffer&&U(S)}function nt(S){let x=S.textures;for(let B=0,Z=x.length;B<Z;B++){let z=x[B];if(p(z)){let _t=T(S),$=i.get(z).__webglTexture;e.bindTexture(_t,$),b(_t),e.unbindTexture()}}}let Mt=[],Lt=[];function zt(S){if(S.samples>0){if(J(S)===!1){let x=S.textures,B=S.width,Z=S.height,z=n.COLOR_BUFFER_BIT,_t=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(S),X=x.length>1;if(X)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);let it=S.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[yt]);let Rt=i.get(x[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,z,n.NEAREST),l===!0&&(Mt.length=0,Lt.length=0,Mt.push(n.COLOR_ATTACHMENT0+yt),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(Mt.push(_t),Lt.push(_t),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,$.__webglColorRenderbuffer[yt]);let Rt=i.get(x[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function I(S){return Math.min(s.maxSamples,S.samples)}function J(S){let x=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function A(S){let x=a.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function dt(S,x){let B=S.colorSpace,Z=S.format,z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==ua&&B!==ss&&(Te.getTransfer(B)===We?(Z!==cn||z!==Wi)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",B)),x}function vt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.getTextureUnits=k,this.setTextureUnits=W,this.setTexture2D=gt,this.setTexture2DArray=rt,this.setTexture3D=ot,this.setTextureCube=ut,this.rebindTextures=j,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=J,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qy(n,t){function e(i,s=ss){let r,a=Te.getTransfer(s);if(i===Wi)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===Br)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===_n)return n.UNSIGNED_INT;if(i===ln)return n.FLOAT;if(i===bn)return n.HALF_FLOAT;if(i===$h)return n.ALPHA;if(i===jh)return n.RGB;if(i===cn)return n.RGBA;if(i===In)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===Or)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===ws)return n.RG;if(i===Ul)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===Ga||i===Va||i===Wa||i===Xa)if(a===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Bl||i===kl||i===Ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===zl||i===Gl||i===Vl||i===Wl||i===qa||i===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===zl)return a===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return r.COMPRESSED_R11_EAC;if(i===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qa)return r.COMPRESSED_RG11_EAC;if(i===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ql||i===Yl||i===Zl||i===Jl||i===$l||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===ic||i===nc||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ql)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===oc||i===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return a===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===hc||i===Ya||i===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function $y(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,e0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),T=b.envMap,_=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ef),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jy(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let E=w.program;i.uniformBlockBinding(_,E)}function c(_,w){let E=s[_.id];E===void 0&&(m(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",b));let C=w.program;i.updateUBOMapping(_,C);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let w=d();_.__bindingPointIndex=w;let E=n.createBuffer(),C=_.__size,y=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let w=s[_.id],E=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let y=0,R=E.length;y<R;y++){let D=E[y];if(Array.isArray(D))for(let F=0,V=D.length;F<V;F++)f(D[F],y,F,C);else f(D,y,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,w,E,C){if(v(_,w,E,C)===!0){let y=_.__offset,R=_.value;if(Array.isArray(R)){let D=0;for(let F=0;F<R.length;F++){let V=R[F],Y=p(V);g(V,_.__data,D),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,_.__data)}}function g(_,w,E){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,E)}function v(_,w,E,C){let y=_.value,R=w+"_"+E;if(C[R]===void 0)return typeof y=="number"||typeof y=="boolean"?C[R]=y:ArrayBuffer.isView(y)?C[R]=y.slice():C[R]=y.clone(),!0;{let D=C[R];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return C[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(_){let w=_.uniforms,E=0,C=16;for(let R=0,D=w.length;R<D;R++){let F=Array.isArray(w[R])?w[R]:[w[R]];for(let V=0,Y=F.length;V<Y;V++){let k=F[V],W=Array.isArray(k.value)?k.value:[k.value];for(let K=0,et=W.length;K<et;K++){let gt=W[K],rt=p(gt),ot=E%C,ut=ot%rt.boundary,Ut=ot+ut;E+=ut,Ut!==0&&C-Ut<rt.storage&&(E+=C-Ut),k.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=rt.storage}}}let y=E%C;return y>0&&(E+=C-y),_.__size=E,_.__cache={},this}function p(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):he("WebGLRenderer: Unsupported uniform value type.",_),w}function b(_){let w=_.target;w.removeEventListener("dispose",b);let E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}function Qy(){return zn===null&&(zn=new Bs(Ky,16,16,ws,bn),zn.name="DFG_LUT",zn.minFilter=Ci,zn.magFilter=Ci,zn.wrapS=Ln,zn.wrapT=Ln,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var dm,fm,pm,mm,gm,xm,ym,vm,_m,bm,Mm,Sm,Em,wm,Tm,Rm,Am,Cm,Lm,Pm,Im,Dm,Um,Nm,Fm,Bm,km,Om,Hm,zm,Gm,Vm,Wm,Xm,qm,Ym,Zm,Jm,$m,jm,Km,Qm,tg,eg,ig,ng,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,yg,vg,_g,bg,Mg,Sg,Eg,wg,Tg,Rg,Ag,Cg,Lg,Pg,Ig,Dg,Ug,Ng,Fg,Bg,kg,Og,Hg,zg,Gg,Vg,Wg,Xg,qg,Yg,Zg,Jg,$g,jg,Kg,Qg,t1,e1,i1,n1,s1,r1,a1,o1,l1,c1,h1,u1,d1,f1,p1,m1,g1,x1,y1,v1,_1,b1,M1,S1,E1,w1,T1,R1,A1,C1,L1,P1,I1,D1,U1,N1,F1,B1,k1,O1,H1,z1,G1,V1,W1,X1,ve,Vt,Gn,pc,q1,$d,Gr,K1,Q1,tx,Ja,Ad,a0,o0,l0,c0,ex,qs,Wr,gc,dx,jd,d0,Kd,Qd,tf,Id,Dd,Ud,Nd,Fd,f0,p0,m0,h0,Vr,ey,iy,Od,ay,mc,dy,fy,my,xy,vy,by,Sy,Ry,x0,y0,Ny,Oy,Hy,zy,Gy,Zd,$a,u0,Yy,Zy,v0,_0,Jy,ef,Ky,zn,xc,Si=Ye(()=>{r0();r0();dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
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
#endif`,hg=`uniform sampler2D dfgLUT;
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
}`,ug=`
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jg=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,i1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,b1=`#define DISTANCE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
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
}`,w1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,L1=`#define MATCAP
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
}`,P1=`#define MATCAP
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
}`,I1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,N1=`#define PHONG
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
}`,F1=`#define STANDARD
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
}`,B1=`#define STANDARD
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
}`,k1=`#define TOON
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
}`,O1=`#define TOON
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
}`,H1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,V1=`uniform vec3 color;
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
}`,W1=`uniform float rotation;
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
}`,X1=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:xm,aomap_fragment:ym,aomap_pars_fragment:vm,batching_pars_vertex:_m,batching_vertex:bm,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:Em,iridescence_fragment:wm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Lm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Dm,color_vertex:Um,common:Nm,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:km,displacementmap_vertex:Om,emissivemap_fragment:Hm,emissivemap_pars_fragment:zm,colorspace_fragment:Gm,colorspace_pars_fragment:Vm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:qm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:sg,envmap_vertex:Zm,fog_vertex:Jm,fog_pars_vertex:$m,fog_fragment:jm,fog_pars_fragment:Km,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:tg,lights_lambert_fragment:eg,lights_lambert_pars_fragment:ig,lights_pars_begin:ng,lights_toon_fragment:rg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:dg,lights_fragment_end:fg,lightprobes_pars_fragment:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:yg,map_fragment:vg,map_pars_fragment:_g,map_particle_fragment:bg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:wg,morphcolor_vertex:Tg,morphnormal_vertex:Rg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Cg,normal_fragment_begin:Lg,normal_fragment_maps:Pg,normal_pars_fragment:Ig,normal_pars_vertex:Dg,normal_vertex:Ug,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Og,opaque_fragment:Hg,packing:zg,premultiplied_alpha_fragment:Gg,project_vertex:Vg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:Jg,shadowmap_vertex:$g,shadowmask_pars_fragment:jg,skinbase_vertex:Kg,skinning_pars_vertex:Qg,skinning_vertex:t1,skinnormal_vertex:e1,specularmap_fragment:i1,specularmap_pars_fragment:n1,tonemapping_fragment:s1,tonemapping_pars_fragment:r1,transmission_fragment:a1,transmission_pars_fragment:o1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:h1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:x1,depth_vert:y1,depth_frag:v1,distance_vert:_1,distance_frag:b1,equirect_vert:M1,equirect_frag:S1,linedashed_vert:E1,linedashed_frag:w1,meshbasic_vert:T1,meshbasic_frag:R1,meshlambert_vert:A1,meshlambert_frag:C1,meshmatcap_vert:L1,meshmatcap_frag:P1,meshnormal_vert:I1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:N1,meshphysical_vert:F1,meshphysical_frag:B1,meshtoon_vert:k1,meshtoon_frag:O1,points_vert:H1,points_frag:z1,shadow_vert:G1,shadow_frag:V1,sprite_vert:W1,sprite_frag:X1},Vt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Gn={basic:{uniforms:Ni([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Ni([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Ni([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Ni([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Ni([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new xt(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Ni([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Ni([Vt.points,Vt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Ni([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Ni([Vt.common,Vt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Ni([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Ni([Vt.sprite,Vt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Ni([Vt.common,Vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Ni([Vt.lights,Vt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Gn.physical={uniforms:Ni([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};pc={r:0,b:0,g:0},q1=new De,$d=new me;$d.set(-1,0,0,0,1,0,0,0,1);Gr=4,K1=6,Q1=20,tx=256,Ja=new Nr,Ad=new xt,a0=null,o0=0,l0=0,c0=!1,ex=new P,qs=new P,Wr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=ex}=r;a0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(a0,o0,l0),this._renderer.xr.enabled=c0,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),a0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:bn,format:cn,colorSpace:ua,depthBuffer:!1},s=Cd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ix(r)),this._blurMaterial=sx(r,t,e),this._ggxMaterial=nx(r,t,e)}return s}_compileMaterial(t){let e=new At(new ye,t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,i,s,r){let l=new gi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ad),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Fe,new Se({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(Ad),p=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):_===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;zr(s,_*w,T>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ms||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ja)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Gr?i-g+Gr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,zr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,zr(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Ja)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Gr?s-this._lodMax+Gr:0),u=4*(this._cubeSize-h);zr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ja)}};gc=class extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Hn});r.uniforms.tEquirect.value=e;let a=new At(s,r),o=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Ci),new El(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};dx={[Oh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Gh]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[Oa]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};jd=new Oi,d0=new gs(1,1),Kd=new ma,Qd=new el,tf=new Ma,Id=[],Dd=[],Ud=new Float32Array(16),Nd=new Float32Array(9),Fd=new Float32Array(4);f0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dx(e.type)}},p0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qx(e.type)}},m0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},h0=/(\w+)(\])?(\[|\.)?/g;Vr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ty(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};ey=37297,iy=0;Od=new me;ay={[Oh]:"Linear",[Hh]:"Reinhard",[zh]:"Cineon",[Gh]:"ACESFilmic",[Wh]:"AgX",[Oa]:"Neutral",[Vh]:"Custom"};mc=new P;dy=/^[ \t]*#include +<([\w\d./]+)>/gm;fy=new Map;my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;xy={[ka]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};vy={[Ms]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};by={[Ws]:"ENVMAP_MODE_REFRACTION"};Sy={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};Ry=0,x0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new y0(t),e.set(t,i)),i}},y0=class{constructor(t){this.id=Ry++,this.code=t,this.usedTimes=0}};Ny=0;Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
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
}`,zy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Gy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Zd=new De,$a=new P,u0=new P;Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
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

}`,v0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Sa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ai({vertexShader:Yy,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_0=class extends Dn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new v0,p={},b=e.getContextAttributes(),T=null,_=null,w=[],E=[],C=new bt,y=null,R=null,D=new gi;D.viewport=new Qe;let F=new gi;F.viewport=new Qe;let V=[D,F],Y=new wl,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ht=w[st];return ht===void 0&&(ht=new Er,w[st]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(st){let ht=w[st];return ht===void 0&&(ht=new Er,w[st]=ht),ht.getGripSpace()},this.getHand=function(st){let ht=w[st];return ht===void 0&&(ht=new Er,w[st]=ht),ht.getHandSpace()};function K(st){let ht=E.indexOf(st.inputSource);if(ht===-1)return;let Tt=w[ht];Tt!==void 0&&(Tt.update(st.inputSource,st.frame,c||a),Tt.dispatchEvent({type:st.type,data:st.inputSource}))}function et(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",gt);for(let st=0;st<w.length;st++){let ht=E[st];ht!==null&&(E[st]=null,w[st].disconnect(ht))}k=null,W=null,m.reset();for(let st in p)delete p[st];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,_=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),R!==null){let st=R.camera;st.fov=R.fov,st.zoom=R.zoom,st.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,i.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",et),s.addEventListener("inputsourceschange",gt),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,jt=null,kt=null;b.depth&&(kt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=b.stencil?Es:In,jt=b.stencil?kr:_n);let Yt={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new zi(u.textureWidth,u.textureHeight,{format:cn,type:Wi,depthTexture:new gs(u.textureWidth,u.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new zi(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function gt(st){for(let ht=0;ht<st.removed.length;ht++){let Tt=st.removed[ht],jt=E.indexOf(Tt);jt>=0&&(E[jt]=null,w[jt].disconnect(Tt))}for(let ht=0;ht<st.added.length;ht++){let Tt=st.added[ht],jt=E.indexOf(Tt);if(jt===-1){for(let Yt=0;Yt<w.length;Yt++)if(Yt>=E.length){E.push(Tt),jt=Yt;break}else if(E[Yt]===null){E[Yt]=Tt,jt=Yt;break}if(jt===-1)break}let kt=w[jt];kt&&kt.connect(Tt)}}let rt=new P,ot=new P;function ut(st,ht,Tt){rt.setFromMatrixPosition(ht.matrixWorld),ot.setFromMatrixPosition(Tt.matrixWorld);let jt=rt.distanceTo(ot),kt=ht.projectionMatrix.elements,Yt=Tt.projectionMatrix.elements,ue=kt[14]/(kt[10]-1),U=kt[14]/(kt[10]+1),j=(kt[9]+1)/kt[5],lt=(kt[9]-1)/kt[5],nt=(kt[8]-1)/kt[0],Mt=(Yt[8]+1)/Yt[0],Lt=ue*nt,zt=ue*Mt,I=jt/(-nt+Mt),J=I*-nt;if(ht.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(J),st.translateZ(I),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),kt[10]===-1)st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let A=ue+I,dt=U+I,vt=Lt-J,S=zt+(jt-J),x=j*U/dt*A,B=lt*U/dt*A;st.projectionMatrix.makePerspective(vt,S,x,B,A,dt),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Ut(st,ht){ht===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ht.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ht=st.near,Tt=st.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),Y.near=F.near=D.near=ht,Y.far=F.far=D.far=Tt,(k!==Y.near||W!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),k=Y.near,W=Y.far),Y.layers.mask=st.layers.mask|6,D.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;let jt=st.parent,kt=Y.cameras;Ut(Y,jt);for(let Yt=0;Yt<kt.length;Yt++)Ut(kt[Yt],jt);kt.length===2?ut(Y,D,F):Y.projectionMatrix.copy(D.projectionMatrix),R===null&&st.isPerspectiveCamera&&(R={camera:st,fov:st.fov,zoom:st.zoom}),Nt(st,Y,jt)};function Nt(st,ht,Tt){Tt===null?st.matrix.copy(ht.matrixWorld):(st.matrix.copy(Tt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ht.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Ko*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(st){l=st,u!==null&&(u.fixedFoveation=st),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(st){return p[st]};let re=null;function ne(st,ht){if(h=ht.getViewerPose(c||a),g=ht,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let jt=!1;Tt.length!==Y.cameras.length&&(Y.cameras.length=0,jt=!0);for(let U=0;U<Tt.length;U++){let j=Tt[U],lt=null;if(f!==null)lt=f.getViewport(j);else{let Mt=d.getViewSubImage(u,j);lt=Mt.viewport,U===0&&(t.setRenderTargetTextures(_,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(_))}let nt=V[U];nt===void 0&&(nt=new gi,nt.layers.enable(U),nt.viewport=new Qe,V[U]=nt),nt.matrix.fromArray(j.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(j.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(lt.x,lt.y,lt.width,lt.height),U===0&&(Y.matrix.copy(nt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),jt===!0&&Y.cameras.push(nt)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let U=d.getDepthInformation(Tt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(kt&&kt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let U=0;U<Tt.length;U++){let j=Tt[U].camera;if(j){let lt=p[j];lt||(lt=new Sa,p[j]=lt);let nt=d.getCameraImage(j);lt.sourceTexture=nt}}}}for(let Tt=0;Tt<w.length;Tt++){let jt=E[Tt],kt=w[Tt];jt!==null&&kt!==void 0&&kt.update(jt,ht,c||a)}re&&re(st,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}let ae=new Jd;ae.setAnimationLoop(ne),this.setAnimationLoop=function(st){re=st},this.dispose=function(){}}},Jy=new De,ef=new me;ef.set(-1,0,0,0,1,0,0,0,1);Ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;xc=class{constructor(t={}){let{canvas:e=md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Wi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Nl,Ul,Dl]),p=new Set([Wi,_n,Br,kr,Pl,Il]),b=new Uint32Array(4),T=new Int32Array(4),_=new P,w=null,E=null,C=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,F=!1,V=null,Y=null,k=null,W=null;this._outputColorSpace=Ai;let K=0,et=0,gt=null,rt=-1,ot=null,ut=new Qe,Ut=new Qe,Nt=null,re=new xt(0),ne=0,ae=e.width,st=e.height,ht=1,Tt=null,jt=null,kt=new Qe(0,0,ae,st),Yt=new Qe(0,0,ae,st),ue=!1,U=new Ar,j=!1,lt=!1,nt=new De,Mt=new P,Lt=new Qe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},I=!1;function J(){return gt===null?ht:1}let A=i;function dt(M,G){return e.getContext(M,G)}let vt,S,x,B,Z,z,_t,$,X,it,yt,Rt,Et,wt,Pt,te,oe,H,Ft,ft,It,Gt,L;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Zt,!1),A===null){let G="webgl2";if(A=dt(G,M),A===null)throw dt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}O()}catch(M){throw e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),fe("WebGLRenderer: "+M.message),M}function O(){vt=new ax(A),vt.init(),It=new qy(A,vt),S=new $1(A,vt,t,It),x=new Wy(A,vt),S.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),Y=A.createFramebuffer(),k=A.createFramebuffer(),W=A.createFramebuffer(),B=new cx(A),Z=new Ly,z=new Xy(A,vt,x,Z,S,It,B),_t=new rx(D),$=new um(A),Gt=new Z1(A,$),X=new ox(A,$,B,Gt),it=new ux(A,X,$,Gt,B),H=new hx(A,S,z),Pt=new j1(Z),yt=new Cy(D,_t,vt,S,Gt,Pt),Rt=new $y(D,Z),Et=new Iy,wt=new ky(vt),oe=new Y1(D,_t,x,it,g,l),te=new Vy(D,it,S),L=new jy(A,B,S,x),Ft=new J1(A,vt,B),ft=new lx(A,vt,B),B.programs=yt.programs,D.capabilities=S,D.extensions=vt,D.properties=Z,D.renderLists=Et,D.shadowMap=te,D.state=x,D.info=B}v!==Wi&&(R=new fx(v,e.width,e.height,o,s,r));let ct=new _0(D,A);this.xr=ct,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let M=vt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=vt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(M){M!==void 0&&(ht=M,this.setSize(ae,st,!1))},this.getSize=function(M){return M.set(ae,st)},this.setSize=function(M,G,at=!0){if(ct.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=M,st=G,e.width=Math.floor(M*ht),e.height=Math.floor(G*ht),at===!0&&(e.style.width=M+"px",e.style.height=G+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(ae*ht,st*ht).floor()},this.setDrawingBufferSize=function(M,G,at){ae=M,st=G,ht=at,e.width=Math.floor(M*at),e.height=Math.floor(G*at),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(v===Wi){fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ut)},this.getViewport=function(M){return M.copy(kt)},this.setViewport=function(M,G,at,Q){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,G,at,Q),x.viewport(ut.copy(kt).multiplyScalar(ht).round())},this.getScissor=function(M){return M.copy(Yt)},this.setScissor=function(M,G,at,Q){M.isVector4?Yt.set(M.x,M.y,M.z,M.w):Yt.set(M,G,at,Q),x.scissor(Ut.copy(Yt).multiplyScalar(ht).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){x.setScissorTest(ue=M)},this.setOpaqueSort=function(M){Tt=M},this.setTransparentSort=function(M){jt=M},this.getClearColor=function(M){return M.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,at=!0){let Q=0;if(M){let tt=!1;if(gt!==null){let Xt=gt.texture.format;tt=m.has(Xt)}if(tt){let Xt=gt.texture.type,$t=p.has(Xt),Wt=oe.getClearColor(),Kt=oe.getClearAlpha(),ee=Wt.r,xe=Wt.g,we=Wt.b;$t?(b[0]=ee,b[1]=xe,b[2]=we,b[3]=Kt,A.clearBufferuiv(A.COLOR,0,b)):(T[0]=ee,T[1]=xe,T[2]=we,T[3]=Kt,A.clearBufferiv(A.COLOR,0,T))}else Q|=A.COLOR_BUFFER_BIT}G&&(Q|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(Q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&A.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),oe.dispose(),Et.dispose(),wt.dispose(),Z.dispose(),_t.dispose(),it.dispose(),Gt.dispose(),L.dispose(),yt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",os),ct.removeEventListener("sessionend",wi),Ti.stop()};function pt(M){M.preventDefault(),pa("WebGLRenderer: Context Lost."),F=!0}function Bt(){pa("WebGLRenderer: Context Restored."),F=!1;let M=B.autoReset,G=te.enabled,at=te.autoUpdate,Q=te.needsUpdate,tt=te.type;O(),B.autoReset=M,te.enabled=G,te.autoUpdate=at,te.needsUpdate=Q,te.type=tt}function Zt(M){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function de(M){let G=M.target;G.removeEventListener("dispose",de),Ge(G)}function Ge(M){qe(M),Z.remove(M)}function qe(M){let G=Z.get(M).programs;G!==void 0&&(G.forEach(function(at){yt.releaseProgram(at)}),M.isShaderMaterial&&yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,at,Q,tt,Xt){G===null&&(G=zt);let $t=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Wt=$r(M,G,at,Q,tt);x.setMaterial(Q,$t);let Kt=at.index,ee=1;if(Q.wireframe===!0){if(Kt=X.getWireframeAttribute(at),Kt===void 0)return;ee=2}let xe=at.drawRange,we=at.attributes.position,Qt=xe.start*ee,Ve=(xe.start+xe.count)*ee;Xt!==null&&(Qt=Math.max(Qt,Xt.start*ee),Ve=Math.min(Ve,(Xt.start+Xt.count)*ee)),Kt!==null?(Qt=Math.max(Qt,0),Ve=Math.min(Ve,Kt.count)):we!=null&&(Qt=Math.max(Qt,0),Ve=Math.min(Ve,we.count));let di=Ve-Qt;if(di<0||di===1/0)return;Gt.setup(tt,Q,Wt,at,Kt);let si,Ke=Ft;if(Kt!==null&&(si=$.get(Kt),Ke=ft,Ke.setIndex(si)),tt.isMesh)Q.wireframe===!0?(x.setLineWidth(Q.wireframeLinewidth*J()),Ke.setMode(A.LINES)):Ke.setMode(A.TRIANGLES);else if(tt.isLine){let Ii=Q.linewidth;Ii===void 0&&(Ii=1),x.setLineWidth(Ii*J()),tt.isLineSegments?Ke.setMode(A.LINES):tt.isLineLoop?Ke.setMode(A.LINE_LOOP):Ke.setMode(A.LINE_STRIP)}else tt.isPoints?Ke.setMode(A.POINTS):tt.isSprite&&Ke.setMode(A.TRIANGLES);if(tt.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Ke.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Ii=tt._multiDrawStarts,Jt=tt._multiDrawCounts,Bi=tt._multiDrawCount,Ne=Kt?$.get(Kt).bytesPerElement:1,an=Z.get(Q).currentProgram.getUniforms();for(let Rn=0;Rn<Bi;Rn++)an.setValue(A,"_gl_DrawID",Rn),Ke.render(Ii[Rn]/Ne,Jt[Rn])}else if(tt.isInstancedMesh)Ke.renderInstances(Qt,di,tt.count);else if(at.isInstancedBufferGeometry){let Ii=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Jt=Math.min(at.instanceCount,Ii);Ke.renderInstances(Qt,di,Jt)}else Ke.render(Qt,di)};function je(M,G,at,Q){V!==null&&M.isNodeMaterial&&V.setObject(Q,M),j===!0&&Pt.setState(M,at,!1),M.transparent===!0&&M.side===ke&&M.forceSinglePass===!1?(M.side=Ze,M.needsUpdate=!0,Ri(M,G,Q),M.side=Vi,M.needsUpdate=!0,Ri(M,G,Q),M.side=ke):Ri(M,G,Q)}this.compile=function(M,G,at=null){at===null&&(at=M),V!==null&&V.renderStart(M,G,at),E=wt.get(at),E.init(G),y.push(E),at.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),M!==at&&M.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),E.setupLights(),V!==null&&V.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,j=Pt.init(this.clippingPlanes,lt),j===!0&&Pt.setGlobalState(this.clippingPlanes,G),V!==null&&te.render(E.state.shadowsArray,at,G);let Q=new Set;return M.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Xt=tt.material;if(Xt)if(Array.isArray(Xt))for(let $t=0;$t<Xt.length;$t++){let Wt=Xt[$t];je(Wt,at,G,tt),Q.add(Wt)}else je(Xt,at,G,tt),Q.add(Xt)}),E=y.pop(),V!==null&&V.renderEnd(),Q},this.compileAsync=function(M,G,at=null){let Q=this.compile(M,G,at);return new Promise(tt=>{function Xt(){if(Q.forEach(function($t){let Kt=Z.get($t).currentProgram;(Kt===void 0||Kt.isReady())&&Q.delete($t)}),Q.size===0){tt(M);return}setTimeout(Xt,10)}vt.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let ti=null;function Tn(M){ti&&ti(M)}function os(){Ti.stop()}function wi(){Ti.start()}let Ti=new Jd;Ti.setAnimationLoop(Tn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){ti=M,ct.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},ct.addEventListener("sessionstart",os),ct.addEventListener("sessionend",wi),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(M,G);let at=ct.enabled===!0&&ct.isPresenting===!0,Q=R!==null&&(gt===null||at)&&R.begin(D,gt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(G),G=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,G,gt),E=wt.get(M,y.length),E.init(G),E.state.textureUnits=z.getTextureUnits(),y.push(E),nt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),U.setFromProjectionMatrix(nt,xn,G.reversedDepth),lt=this.localClippingEnabled,j=Pt.init(this.clippingPlanes,lt),w=Et.get(M,C.length),w.init(),C.push(w),ct.enabled===!0&&ct.isPresenting===!0){let $t=D.xr.getDepthSensingMesh();$t!==null&&Zi($t,G,-1/0,D.sortObjects)}Zi(M,G,0,D.sortObjects),w.finish(),V!==null&&V.updateLights(E.state.lightsArray),D.sortObjects===!0&&w.sort(Tt,jt),I=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,I&&oe.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&Pt.beginShadows();let tt=E.state.shadowsArray;if(te.render(tt,M,G),j===!0&&Pt.endShadows(),(Q&&R.hasRenderPass())===!1){let $t=w.opaque,Wt=w.transmissive;if(E.setupLights(),G.isArrayCamera){let Kt=G.cameras;if(Wt.length>0)for(let ee=0,xe=Kt.length;ee<xe;ee++){let we=Kt[ee];js($t,Wt,M,we)}I&&oe.render(M);for(let ee=0,xe=Kt.length;ee<xe;ee++){let we=Kt[ee];Ls(w,M,we,we.viewport)}}else Wt.length>0&&js($t,Wt,M,G),I&&oe.render(M),Ls(w,M,G)}gt!==null&&et===0&&(z.updateMultisampleRenderTarget(gt),z.updateRenderTargetMipmap(gt)),Q&&R.end(D),M.isScene===!0&&M.onAfterRender(D,M,G),Gt.resetDefaultState(),rt=-1,ot=null,y.pop(),y.length>0?(E=y[y.length-1],z.setTextureUnits(E.state.textureUnits),j===!0&&Pt.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,V!==null&&V.renderEnd()};function Zi(M,G,at,Q){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)at=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(U)){Q&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(nt);let $t=it.update(M),Wt=M.material;Wt.visible&&w.push(M,$t,Wt,at,Lt.z,null,G)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(U))){let $t=it.update(M),Wt=M.material;if(Q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),Lt.copy($t.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(nt)),Array.isArray(Wt)){let Kt=$t.groups;for(let ee=0,xe=Kt.length;ee<xe;ee++){let we=Kt[ee],Qt=Wt[we.materialIndex];Qt&&Qt.visible&&w.push(M,$t,Qt,at,Lt.z,we,G)}}else Wt.visible&&w.push(M,$t,Wt,at,Lt.z,null,G)}}let Xt=M.children;for(let $t=0,Wt=Xt.length;$t<Wt;$t++)Zi(Xt[$t],G,at,Q)}function Ls(M,G,at,Q){let{opaque:tt,transmissive:Xt,transparent:$t}=M;E.setupLightsView(at),j===!0&&Pt.setGlobalState(D.clippingPlanes,at),Q&&x.viewport(ut.copy(Q)),tt.length>0&&Pe(tt,G,at),Xt.length>0&&Pe(Xt,G,at),$t.length>0&&Pe($t,G,at),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function js(M,G,at,Q){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let Qt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new zi(1,1,{generateMipmaps:!0,type:Qt?bn:Wi,minFilter:Ss,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let Xt=E.state.transmissionRenderTarget[Q.id],$t=Q.viewport||ut;Xt.setSize($t.z*D.transmissionResolutionScale,$t.w*D.transmissionResolutionScale);let Wt=D.getRenderTarget(),Kt=D.getActiveCubeFace(),ee=D.getActiveMipmapLevel();D.setRenderTarget(Xt),D.getClearColor(re),ne=D.getClearAlpha(),ne<1&&D.setClearColor(16777215,.5),D.clear(),I&&oe.render(at);let xe=D.toneMapping;D.toneMapping=vn;let we=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),j===!0&&Pt.setGlobalState(D.clippingPlanes,Q),Pe(M,at,Q),z.updateMultisampleRenderTarget(Xt),z.updateRenderTargetMipmap(Xt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ve=0,di=G.length;Ve<di;Ve++){let si=G[Ve],{object:Ke,geometry:Ii,material:Jt,group:Bi}=si;if(Jt.side===ke&&Ke.layers.test(Q.layers)){let Ne=Jt.side;Jt.side=Ze,Jt.needsUpdate=!0,Ie(Ke,at,Q,Ii,Jt,Bi),Jt.side=Ne,Jt.needsUpdate=!0,Qt=!0}}Qt===!0&&(z.updateMultisampleRenderTarget(Xt),z.updateRenderTargetMipmap(Xt))}D.setRenderTarget(Wt,Kt,ee),D.setClearColor(re,ne),we!==void 0&&(Q.viewport=we),D.toneMapping=xe}function Pe(M,G,at){let Q=G.isScene===!0?G.overrideMaterial:null;for(let tt=0,Xt=M.length;tt<Xt;tt++){let $t=M[tt],{object:Wt,geometry:Kt,group:ee}=$t,xe=$t.material;xe.allowOverride===!0&&Q!==null&&(xe=Q),Wt.layers.test(at.layers)&&Ie(Wt,G,at,Kt,xe,ee)}}function Ie(M,G,at,Q,tt,Xt){V!==null&&tt.isNodeMaterial&&V.setObject(M,tt),M.onBeforeRender(D,G,at,Q,tt,Xt),M.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),tt.onBeforeRender(D,G,at,Q,M,Xt),tt.transparent===!0&&tt.side===ke&&tt.forceSinglePass===!1?(tt.side=Ze,tt.needsUpdate=!0,D.renderBufferDirect(at,G,Q,tt,M,Xt),tt.side=Vi,tt.needsUpdate=!0,D.renderBufferDirect(at,G,Q,tt,M,Xt),tt.side=ke):D.renderBufferDirect(at,G,Q,tt,M,Xt),M.onAfterRender(D,G,at,Q,tt,Xt)}function Ri(M,G,at){G.isScene!==!0&&(G=zt);let Q=Z.get(M),tt=E.state.lights,Xt=E.state.shadowsArray,$t=tt.state.version,Wt=yt.getParameters(M,tt.state,Xt,G,at,E.state.lightProbeGridArray),Kt=yt.getProgramCacheKey(Wt),ee=Q.programs;Q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;let xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Q.envMap=_t.get(M.envMap||Q.environment,xe),Q.envMapRotation=Q.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,ee===void 0&&(M.addEventListener("dispose",de),ee=new Map,Q.programs=ee);let we=ee.get(Kt);if(we!==void 0){if(Q.currentProgram===we&&Q.lightsStateVersion===$t)return Wn(M,Wt),we}else Wt.uniforms=yt.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,at,Wt),M.onBeforeCompile(Wt,D),we=yt.acquireProgram(Wt,Kt),ee.set(Kt,we),Q.uniforms=Wt.uniforms;let Qt=Q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Qt.clippingPlanes=Pt.uniform),Wn(M,Wt),Q.needsLights=$f(M),Q.lightsStateVersion=$t,Q.needsLights&&(Qt.ambientLightColor.value=tt.state.ambient,Qt.lightProbe.value=tt.state.probe,Qt.sunLights.value=tt.state.sun,Qt.sunLightShadows.value=tt.state.sunShadow,Qt.directionalLights.value=tt.state.directional,Qt.directionalLightShadows.value=tt.state.directionalShadow,Qt.spotLights.value=tt.state.spot,Qt.spotLightShadows.value=tt.state.spotShadow,Qt.rectAreaLights.value=tt.state.rectArea,Qt.ltc_1.value=tt.state.rectAreaLTC1,Qt.ltc_2.value=tt.state.rectAreaLTC2,Qt.pointLights.value=tt.state.point,Qt.pointLightShadows.value=tt.state.pointShadow,Qt.hemisphereLights.value=tt.state.hemi,Qt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Qt.sunShadowCascade.value=tt.state.sunShadowCascade,Qt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Qt.spotLightMatrix.value=tt.state.spotLightMatrix,Qt.spotLightMap.value=tt.state.spotLightMap,Qt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.lightProbeGrid=E.state.lightProbeGridArray.length>0,Q.currentProgram=we,Q.uniformsList=null,we}function Pi(M){if(M.uniformsList===null){let G=M.currentProgram.getUniforms();M.uniformsList=Vr.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function Wn(M,G){let at=Z.get(M);at.outputColorSpace=G.outputColorSpace,at.batching=G.batching,at.batchingColor=G.batchingColor,at.instancing=G.instancing,at.instancingColor=G.instancingColor,at.instancingMorph=G.instancingMorph,at.skinning=G.skinning,at.morphTargets=G.morphTargets,at.morphNormals=G.morphNormals,at.morphColors=G.morphColors,at.morphTargetsCount=G.morphTargetsCount,at.numClippingPlanes=G.numClippingPlanes,at.numIntersection=G.numClipIntersection,at.vertexAlphas=G.vertexAlphas,at.vertexTangents=G.vertexTangents,at.toneMapping=G.toneMapping}function Ps(M,G){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let at=0,Q=M.length;at<Q;at++){let tt=M[at];if(tt.texture!==null&&tt.boundingBox.containsPoint(_))return tt}return null}function $r(M,G,at,Q,tt){G.isScene!==!0&&(G=zt),z.resetTextureUnits();let Xt=G.fog,$t=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,Wt=gt===null?D.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Te.workingColorSpace,Kt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ee=_t.get(Q.envMap||$t,Kt),xe=Q.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,we=!!at.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Qt=!!at.morphAttributes.position,Ve=!!at.morphAttributes.normal,di=!!at.morphAttributes.color,si=vn;Q.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(si=D.toneMapping);let Ke=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ii=Ke!==void 0?Ke.length:0,Jt=Z.get(Q),Bi=E.state.lights;if(j===!0&&(lt===!0||M!==ot)){let ei=M===ot&&Q.id===rt;Pt.setState(Q,M,ei)}let Ne=!1;Q.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Bi.state.version||Jt.outputColorSpace!==Wt||tt.isBatchedMesh&&Jt.batching===!1||!tt.isBatchedMesh&&Jt.batching===!0||tt.isBatchedMesh&&Jt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Jt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Jt.instancing===!1||!tt.isInstancedMesh&&Jt.instancing===!0||tt.isSkinnedMesh&&Jt.skinning===!1||!tt.isSkinnedMesh&&Jt.skinning===!0||tt.isInstancedMesh&&Jt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Jt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Jt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Jt.instancingMorph===!1&&tt.morphTexture!==null||Jt.envMap!==ee||Q.fog===!0&&Jt.fog!==Xt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Pt.numPlanes||Jt.numIntersection!==Pt.numIntersection)||Jt.vertexAlphas!==xe||Jt.vertexTangents!==we||Jt.morphTargets!==Qt||Jt.morphNormals!==Ve||Jt.morphColors!==di||Jt.toneMapping!==si||Jt.morphTargetsCount!==Ii||!!Jt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ne=!0):(Ne=!0,Jt.__version=Q.version);let an=Jt.currentProgram;Ne===!0&&(an=Ri(Q,G,tt),V&&Q.isNodeMaterial&&V.onUpdateProgram(Q,an,Jt));let Rn=!1,ls=!1,Ks=!1,Je=an.getUniforms(),ui=Jt.uniforms;if(x.useProgram(an.program)&&(Rn=!0,ls=!0,Ks=!0),Q.id!==rt&&(rt=Q.id,ls=!0),Jt.needsLights){let ei=Ps(E.state.lightProbeGridArray,tt);Jt.lightProbeGrid!==ei&&(Jt.lightProbeGrid=ei,ls=!0)}if(Rn||ot!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Je.setValue(A,"projectionMatrix",M.projectionMatrix),Je.setValue(A,"viewMatrix",M.matrixWorldInverse);let hs=Je.map.cameraPosition;hs!==void 0&&hs.setValue(A,Mt.setFromMatrixPosition(M.matrixWorld)),S.logarithmicDepthBuffer&&Je.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Je.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),ot!==M&&(ot=M,ls=!0,Ks=!0)}if(Jt.needsLights&&(Bi.state.sunShadowMap.length>0&&Je.setValue(A,"sunShadowMap",Bi.state.sunShadowMap,z),Bi.state.directionalShadowMap.length>0&&Je.setValue(A,"directionalShadowMap",Bi.state.directionalShadowMap,z),Bi.state.spotShadowMap.length>0&&Je.setValue(A,"spotShadowMap",Bi.state.spotShadowMap,z),Bi.state.pointShadowMap.length>0&&Je.setValue(A,"pointShadowMap",Bi.state.pointShadowMap,z)),tt.isSkinnedMesh){Je.setOptional(A,tt,"bindMatrix"),Je.setOptional(A,tt,"bindMatrixInverse");let ei=tt.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Je.setValue(A,"boneTexture",ei.boneTexture,z))}tt.isBatchedMesh&&(Je.setOptional(A,tt,"batchingTexture"),Je.setValue(A,"batchingTexture",tt._matricesTexture,z),Je.setOptional(A,tt,"batchingIdTexture"),Je.setValue(A,"batchingIdTexture",tt._indirectTexture,z),Je.setOptional(A,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Je.setValue(A,"batchingColorTexture",tt._colorsTexture,z));let cs=at.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&H.update(tt,at,an),(ls||Jt.receiveShadow!==tt.receiveShadow)&&(Jt.receiveShadow=tt.receiveShadow,Je.setValue(A,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(ui.envMapIntensity.value=G.environmentIntensity),ui.dfgLUT!==void 0&&(ui.dfgLUT.value=Qy()),ls){if(Je.setValue(A,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&Jf(ui,Ks),Xt&&Q.fog===!0&&Rt.refreshFogUniforms(ui,Xt),Rt.refreshMaterialUniforms(ui,Q,ht,st,E.state.transmissionRenderTarget[M.id]),Jt.needsLights&&Jt.lightProbeGrid){let ei=Jt.lightProbeGrid;ui.probesSH.value=ei.texture,ui.probesMin.value.copy(ei.boundingBox.min),ui.probesMax.value.copy(ei.boundingBox.max),ui.probesResolution.value.copy(ei.resolution)}Vr.upload(A,Pi(Jt),ui,z)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Vr.upload(A,Pi(Jt),ui,z),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Je.setValue(A,"center",tt.center),Je.setValue(A,"modelViewMatrix",tt.modelViewMatrix),Je.setValue(A,"normalMatrix",tt.normalMatrix),Je.setValue(A,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let ei=Q.uniformsGroups;for(let hs=0,Qs=ei.length;hs<Qs;hs++){let tu=ei[hs];L.update(tu,an),L.bind(tu,an)}}return an}function Jf(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.sunLights.needsUpdate=G,M.sunLightShadows.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function $f(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(M,G,at){let Q=Z.get(M);Q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Z.get(M.texture).__webglTexture=G,Z.get(M.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:at,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){let at=Z.get(M);at.__webglFramebuffer=G,at.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(M,G=0,at=0){gt=M,K=G,et=at;let Q=null,tt=!1,Xt=!1;if(M){let Wt=Z.get(M);if(Wt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(A.FRAMEBUFFER,Wt.__webglFramebuffer),ut.copy(M.viewport),Ut.copy(M.scissor),Nt=M.scissorTest,x.viewport(ut),x.scissor(Ut),x.setScissorTest(Nt),rt=-1;return}else if(Wt.__webglFramebuffer===void 0)z.setupRenderTarget(M);else if(Wt.__hasExternalTextures)z.rebindTextures(M,Z.get(M.texture).__webglTexture,Z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let xe=M.depthTexture;if(Wt.__boundDepthTexture!==xe){if(xe!==null&&Z.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(M)}}let Kt=M.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Xt=!0);let ee=Z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ee[G])?Q=ee[G][at]:Q=ee[G],tt=!0):M.samples>0&&z.useMultisampledRTT(M)===!1?Q=Z.get(M).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[at]:Q=ee,ut.copy(M.viewport),Ut.copy(M.scissor),Nt=M.scissorTest}else ut.copy(kt).multiplyScalar(ht).floor(),Ut.copy(Yt).multiplyScalar(ht).floor(),Nt=ue;if(at!==0&&(Q=Y),x.bindFramebuffer(A.FRAMEBUFFER,Q)&&x.drawBuffers(M,Q),x.viewport(ut),x.scissor(Ut),x.setScissorTest(Nt),tt){let Wt=Z.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+G,Wt.__webglTexture,at)}else if(Xt){let Wt=G;for(let Kt=0;Kt<M.textures.length;Kt++){let ee=Z.get(M.textures[Kt]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,at,Wt)}}else if(M!==null&&at!==0){let Wt=Z.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Wt.__webglTexture,at)}rt=-1};function Q0(M){let G=Z.get(M);return(G.__readFormat!==M.format||G.__readType!==M.type)&&(G.__readFormat=M.format,G.__readType=M.type,G.__formatReadable=S.textureFormatReadable(M.format),G.__typeReadable=S.textureTypeReadable(M.type)),G}this.readRenderTargetPixels=function(M,G,at,Q,tt,Xt,$t,Wt=0){if(!(M&&M.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(Kt=Kt[$t]),Kt){x.bindFramebuffer(A.FRAMEBUFFER,Kt);try{let ee=M.textures[Wt],xe=ee.format,we=ee.type;M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Wt);let Qt=Q0(ee);if(Qt.__formatReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-Q&&at>=0&&at<=M.height-tt&&A.readPixels(G,at,Q,tt,It.convert(xe),It.convert(we),Xt)}finally{let ee=gt!==null?Z.get(gt).__webglFramebuffer:null;x.bindFramebuffer(A.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(M,G,at,Q,tt,Xt,$t,Wt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(Kt=Kt[$t]),Kt)if(G>=0&&G<=M.width-Q&&at>=0&&at<=M.height-tt){x.bindFramebuffer(A.FRAMEBUFFER,Kt);let ee=M.textures[Wt],xe=ee.format,we=ee.type;M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Wt);let Qt=Q0(ee);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.bufferData(A.PIXEL_PACK_BUFFER,Xt.byteLength,A.STREAM_READ),A.readPixels(G,at,Q,tt,It.convert(xe),It.convert(we),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let di=gt!==null?Z.get(gt).__webglFramebuffer:null;x.bindFramebuffer(A.FRAMEBUFFER,di);let si=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await xd(A,si,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Xt),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(Ve),A.deleteSync(si),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,at=0){let Q=Math.pow(2,-at),tt=Math.floor(M.image.width*Q),Xt=Math.floor(M.image.height*Q),$t=G!==null?G.x:0,Wt=G!==null?G.y:0;z.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,at,0,0,$t,Wt,tt,Xt),x.unbindTexture()},this.copyTextureToTexture=function(M,G,at=null,Q=null,tt=0,Xt=0){let $t,Wt,Kt,ee,xe,we,Qt,Ve,di,si=M.isCompressedTexture?M.mipmaps[Xt]:M.image;if(at!==null)$t=at.max.x-at.min.x,Wt=at.max.y-at.min.y,Kt=at.isBox3?at.max.z-at.min.z:1,ee=at.min.x,xe=at.min.y,we=at.isBox3?at.min.z:0;else{let ui=Math.pow(2,-tt);$t=Math.floor(si.width*ui),Wt=Math.floor(si.height*ui),M.isDataArrayTexture?Kt=si.depth:M.isData3DTexture?Kt=Math.floor(si.depth*ui):Kt=1,ee=0,xe=0,we=0}Q!==null?(Qt=Q.x,Ve=Q.y,di=Q.z):(Qt=0,Ve=0,di=0);let Ke=It.convert(G.format),Ii=It.convert(G.type),Jt;G.isData3DTexture?(z.setTexture3D(G,0),Jt=A.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(z.setTexture2DArray(G,0),Jt=A.TEXTURE_2D_ARRAY):(z.setTexture2D(G,0),Jt=A.TEXTURE_2D),x.activeTexture(A.TEXTURE0),x.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,G.flipY),x.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),x.pixelStorei(A.UNPACK_ALIGNMENT,G.unpackAlignment);let Bi=x.getParameter(A.UNPACK_ROW_LENGTH),Ne=x.getParameter(A.UNPACK_IMAGE_HEIGHT),an=x.getParameter(A.UNPACK_SKIP_PIXELS),Rn=x.getParameter(A.UNPACK_SKIP_ROWS),ls=x.getParameter(A.UNPACK_SKIP_IMAGES);x.pixelStorei(A.UNPACK_ROW_LENGTH,si.width),x.pixelStorei(A.UNPACK_IMAGE_HEIGHT,si.height),x.pixelStorei(A.UNPACK_SKIP_PIXELS,ee),x.pixelStorei(A.UNPACK_SKIP_ROWS,xe),x.pixelStorei(A.UNPACK_SKIP_IMAGES,we);let Ks=M.isDataArrayTexture||M.isData3DTexture,Je=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){let ui=Z.get(M),cs=Z.get(G),ei=Z.get(ui.__renderTarget),hs=Z.get(cs.__renderTarget);x.bindFramebuffer(A.READ_FRAMEBUFFER,ei.__webglFramebuffer),x.bindFramebuffer(A.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Qs=0;Qs<Kt;Qs++)Ks&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Z.get(M).__webglTexture,tt,we+Qs),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Z.get(G).__webglTexture,Xt,di+Qs)),A.blitFramebuffer(ee,xe,$t,Wt,Qt,Ve,$t,Wt,A.DEPTH_BUFFER_BIT,A.NEAREST);x.bindFramebuffer(A.READ_FRAMEBUFFER,null),x.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(tt!==0||M.isRenderTargetTexture||Z.has(M)){let ui=Z.get(M),cs=Z.get(G);x.bindFramebuffer(A.READ_FRAMEBUFFER,k),x.bindFramebuffer(A.DRAW_FRAMEBUFFER,W);for(let ei=0;ei<Kt;ei++)Ks?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ui.__webglTexture,tt,we+ei):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ui.__webglTexture,tt),Je?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,cs.__webglTexture,Xt,di+ei):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,cs.__webglTexture,Xt),tt!==0?A.blitFramebuffer(ee,xe,$t,Wt,Qt,Ve,$t,Wt,A.COLOR_BUFFER_BIT,A.NEAREST):Je?A.copyTexSubImage3D(Jt,Xt,Qt,Ve,di+ei,ee,xe,$t,Wt):A.copyTexSubImage2D(Jt,Xt,Qt,Ve,ee,xe,$t,Wt);x.bindFramebuffer(A.READ_FRAMEBUFFER,null),x.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Je?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Jt,Xt,Qt,Ve,di,$t,Wt,Kt,Ke,Ii,si.data):G.isCompressedArrayTexture?A.compressedTexSubImage3D(Jt,Xt,Qt,Ve,di,$t,Wt,Kt,Ke,si.data):A.texSubImage3D(Jt,Xt,Qt,Ve,di,$t,Wt,Kt,Ke,Ii,si):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Xt,Qt,Ve,$t,Wt,Ke,Ii,si.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Xt,Qt,Ve,si.width,si.height,Ke,si.data):A.texSubImage2D(A.TEXTURE_2D,Xt,Qt,Ve,$t,Wt,Ke,Ii,si);x.pixelStorei(A.UNPACK_ROW_LENGTH,Bi),x.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ne),x.pixelStorei(A.UNPACK_SKIP_PIXELS,an),x.pixelStorei(A.UNPACK_SKIP_ROWS,Rn),x.pixelStorei(A.UNPACK_SKIP_IMAGES,ls),Xt===0&&G.generateMipmaps&&A.generateMipmap(Jt),x.unbindTexture()},this.initRenderTarget=function(M){Z.get(M).__webglFramebuffer===void 0&&z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?z.setTextureCube(M,0):M.isData3DTexture?z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?z.setTexture2DArray(M,0):z.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){K=0,et=0,gt=null,x.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}});function qr(n){return new Da({color:0,emissive:16777215,emissiveIntensity:n})}var _c,nf=Ye(()=>{Si();_c=class extends Qn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Fe;t.deleteAttribute("uv");let e=new Le({side:Ze}),i=new Le,s=new Ba(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new At(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new _a(t,i,6),o=new se;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new At(t,qr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new At(t,qr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new At(t,qr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new At(t,qr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new At(t,qr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new At(t,qr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}}});function tv(){try{let n=localStorage.getItem("sumamama.quality");if(n==="high"||n==="low")return n}catch{}return bc?"low":"high"}function sf(n){let t=new xc({canvas:n,antialias:!0,powerPreference:"high-performance"});t.shadowMap.enabled=!1,t.toneMapping=Oa,t.toneMappingExposure=1,t.outputColorSpace=Ai;let e=new Qn,i=new Wr(t);e.environment=i.fromScene(new _c,.04).texture,e.environmentIntensity=.65,i.dispose();let s=new gi(38,window.innerWidth/window.innerHeight,.1,400);s.position.set(0,4,24),e.add(new Gs(13222655,2758712,1.05));let r=new ns(16773600,1.75);r.position.set(-8,16,12),e.add(r);let a=new ns(11832575,1.6);a.position.set(6,6,-12),e.add(a);let o={renderer:t,scene:e,camera:s,sun:r,quality:tv(),resize(){let l=window.innerWidth,c=window.innerHeight,h=o.quality==="high"?2:1.25;t.setPixelRatio(Math.min(window.devicePixelRatio||1,h)),t.setSize(l,c,!1),s.aspect=l/c,s.updateProjectionMatrix()},setQuality(l){o.quality=l;try{localStorage.setItem("sumamama.quality",l)}catch{}o.resize()},render(){t.render(e,s)}};return o.resize(),window.addEventListener("resize",o.resize),window.addEventListener("orientationchange",()=>setTimeout(o.resize,200)),o}var bc,rf=Ye(()=>{Si();nf();bc=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches});var ev,Mc,af=Ye(()=>{ev=[{b:"attack",label:"\u653B\u6483",cls:"a"},{b:"special",label:"\u5FC5\u6BBA",cls:"b"},{b:"jump",label:"\u30B8\u30E3\u30F3\u30D7",cls:"y"},{b:"smash",label:"\u30B9\u30DE\u30C3\u30B7\u30E5",cls:"s"},{b:"shield",label:"\u30AC\u30FC\u30C9",cls:"r"},{b:"grab",label:"\u3064\u304B\u307F",cls:"z"}],Mc=class{constructor(t,e){this.state={x:0,y:0,jump:!1,attack:!1,special:!1,shield:!1,smash:!1,grab:!1},this.enabled=!1;let i=document.createElement("div");i.id="touch",i.className="hidden",i.innerHTML=`
      <div id="stickZone"></div>
      <div id="stickBase"><div id="stickKnob"></div></div>
      <div id="tbtns">${ev.map(o=>`<div class="tb ${o.cls}" data-b="${o.b}"><span>${o.label}</span></div>`).join("")}</div>
      <div id="tpause">II</div>`,t.appendChild(i),this.el=i,this.base=i.querySelector("#stickBase"),this.knob=i.querySelector("#stickKnob"),this.stickId=null,this.origin={x:0,y:0},this.radius=56;let s=i.querySelector("#stickZone");this.zone=s,s.addEventListener("pointerdown",o=>{this.stickId!==null&&this.releaseStick(),this.stickId=o.pointerId;try{s.setPointerCapture(o.pointerId)}catch{}this.origin={x:o.clientX,y:o.clientY},this.base.style.left=o.clientX+"px",this.base.style.top=o.clientY+"px",this.base.classList.add("on"),this.moveStick(o.clientX,o.clientY),o.preventDefault()}),window.addEventListener("pointermove",o=>{o.pointerId===this.stickId&&this.moveStick(o.clientX,o.clientY)},!0);let r=o=>{o.pointerId===this.stickId&&this.releaseStick(),this.releaseButtonPointer(o.pointerId)};for(let o of["pointerup","pointercancel"])window.addEventListener(o,r,!0);s.addEventListener("lostpointercapture",o=>{o.pointerId===this.stickId&&this.releaseStick()});let a=o=>this.reconcile(o.touches);window.addEventListener("touchend",a,!0),window.addEventListener("touchcancel",a,!0),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("blur",()=>this.reset()),window.addEventListener("pagehide",()=>this.reset()),this.btnPointers=new Map,this.btnEls={};for(let o of i.querySelectorAll(".tb")){let l=o.dataset.b;this.btnEls[l]=o,o.addEventListener("pointerdown",c=>{try{o.setPointerCapture(c.pointerId)}catch{}this.btnPointers.set(c.pointerId,l),this.state[l]=!0,o.classList.add("on"),navigator.vibrate&&navigator.vibrate(8),c.preventDefault()}),o.addEventListener("lostpointercapture",c=>this.releaseButtonPointer(c.pointerId))}i.querySelector("#tpause").addEventListener("pointerdown",o=>{o.preventDefault(),e()}),i.addEventListener("contextmenu",o=>o.preventDefault())}releaseStick(){this.stickId=null,this.state.x=0,this.state.y=0,this.base.classList.remove("on"),this.knob.style.transform="translate(-50%,-50%)"}releaseButtonPointer(t){let e=this.btnPointers.get(t);e&&(this.btnPointers.delete(t),[...this.btnPointers.values()].includes(e)||(this.state[e]=!1,this.btnEls[e].classList.remove("on")))}reconcile(t){if(!t||t.length===0){this.reset();return}let e=i=>{let s=i.getBoundingClientRect();for(let r of t)if(r.clientX>=s.left-30&&r.clientX<=s.right+30&&r.clientY>=s.top-30&&r.clientY<=s.bottom+30)return!0;return!1};if(this.stickId!==null){let i=this.zone.getBoundingClientRect(),s=!1;for(let r of t)r.clientX<=i.right+80&&(s=!0);s||this.releaseStick()}for(let[i,s]of[...this.btnPointers])e(this.btnEls[s])||this.releaseButtonPointer(i)}moveStick(t,e){let i=t-this.origin.x,s=e-this.origin.y,r=Math.hypot(i,s),a=this.radius;if(r>a*1.6){let u=(r-a*1.6)/r;this.origin.x+=i*u,this.origin.y+=s*u,this.base.style.left=this.origin.x+"px",this.base.style.top=this.origin.y+"px",i=t-this.origin.x,s=e-this.origin.y}let o=Math.min(1,Math.hypot(i,s)/a),l=Math.atan2(s,i),c=Math.cos(l)*o,h=Math.sin(l)*o,d=o<.18?0:1;this.state.x=c*d,this.state.y=-h*d,this.knob.style.transform=`translate(calc(-50% + ${c*a}px), calc(-50% + ${h*a}px))`}show(t){this.enabled=t,this.el.classList.toggle("hidden",!t),t||this.reset()}reset(){for(let t of Object.keys(this.state))this.state[t]=t==="x"||t==="y"?0:!1;this.releaseStick(),this.btnPointers.clear();for(let t of this.el.querySelectorAll(".tb"))t.classList.remove("on")}read(t){if(!this.enabled)return t;let e=this.state;Math.abs(e.x)>Math.abs(t.x)&&(t.x=e.x),Math.abs(e.y)>Math.abs(t.y)&&(t.y=e.y);for(let i of["jump","attack","special","shield","smash","grab"])e[i]&&(t[i]=!0);return t}}});function iv(){return Ys||(Ys=new Bs(new Uint8Array([70,150,235,255]),4,1,Or),Ys.minFilter=Ys.magFilter=pi,Ys.generateMipmaps=!1,Ys.needsUpdate=!0),Ys}function Mn(n,t={}){return new zs({color:n,gradientMap:iv(),...t})}function Ka(n,t=1){let e=new xt(n).multiplyScalar(t);return new Se({color:e})}function nv(n=656912,t=.018){let e=n+":"+t;if(b0.has(e))return b0.get(e);let i=new ai({uniforms:{color:{value:new xt(n)},thickness:{value:t}},vertexShader:`
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
      }`,side:Ze});return i.userData.shared=!0,b0.set(e,i),i}function sv(n,t,e){let i=new At(n.geometry,nv(t,e));return i.name="outline",i.castShadow=!1,i.receiveShadow=!1,i.userData.isOutline=!0,n.add(i),n}function Ts(n,t,{outline:e=656912,thick:i=.018,shadow:s=!0}={}){let r=new At(n,t);return r.castShadow=s,r.receiveShadow=!1,e!==null&&e!==!1&&sv(r,e,i),r}function Xi(){if(Sc)return Sc;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Sc=new ts(n),Sc}function Tc(){if(Ec)return Ec;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.translate(32,32);let e=t.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath();for(let i=0;i<8;i++){let s=i/8*Math.PI*2,r=i%2===0?31:7;t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t.fill(),Ec=new ts(n),Ec}function of(){if(wc)return wc;let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d"),e=t.createRadialGradient(64,64,40,64,64,63);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),wc=new ts(n),wc}var Ys,b0,Sc,Ec,wc,Qa=Ye(()=>{Si();Ys=null;b0=new Map;Sc=null,Ec=null,wc=null});function M0(n,t,e,i,s,r){let a=s-e,o=r-i,l=a*a+o*o,c=l>0?((n-e)*a+(t-i)*o)/l:0;c=Re(c,0,1);let h=e+a*c,d=i+o*c;return Math.hypot(n-h,t-d)}var Zs,yM,Re,oi,Ot,tn,Ee,ie,lf,hn=Ye(()=>{Zs=Math.PI/180,yM=Math.PI*2,Re=(n,t,e)=>n<t?t:n>e?e:n,oi=(n,t,e)=>n<t?Math.min(n+e,t):Math.max(n-e,t),Ot=(n,t)=>n+Math.random()*(t-n),tn=(n,t)=>Math.floor(Ot(n,t+1)),Ee=n=>Math.random()<n,ie=n=>n>0?1:n<0?-1:0,lf=n=>1-(1-n)*(1-n)});var rv,Rc,Ac,S0=Ye(()=>{Si();Qa();hn();rv=500,Rc=class{constructor(t){this.scene=t,this.group=new Ht,t.add(this.group),this.free=[],this.live=[];for(let e=0;e<rv;e++){let i=new Mi(new xi({map:Xi(),transparent:!0,depthWrite:!1,blending:Xe}));i.visible=!1,i.renderOrder=10,this.group.add(i),this.free.push(i)}this.meshFx=[]}spawn({x:t,y:e,z:i=.3,vx:s=0,vy:r=0,vz:a=0,life:o=20,size:l=.5,size1:c=null,color:h=16777215,tex:d="soft",additive:u=!0,gravity:f=0,drag:g=1,opacity:v=1,rot:m=0,spin:p=0}){let b=this.free.pop();if(!b)return null;let T=b.material;return T.map=d==="star"?Tc():d==="ring"?of():Xi(),T.color.set(h),T.blending=u?Xe:bs,T.opacity=v,T.rotation=m,b.position.set(t,e,i),b.scale.set(l,l,1),b.visible=!0,b.userData={vx:s,vy:r,vz:a,life:o,max:o,size:l,size1:c===null?l:c,gravity:f,drag:g,opacity:v,spin:p},this.live.push(b),b}hitSpark(t,e,i,s=.5,r=1){let a=Math.min(1.5,s),o=new xt(i);this.spawn({x:t,y:e,z:.6,life:8,size:1.2+a*1.8,size1:.3,color:16777215,tex:"star",rot:Ot(0,3)}),this.spawn({x:t,y:e,z:.5,life:14,size:.4,size1:2.2+a*2.2,color:o,tex:"ring"});let l=6+Math.floor(a*10);for(let c=0;c<l;c++){let h=Ot(0,Math.PI*2),d=Ot(.08,.2)*(.7+a);this.spawn({x:t,y:e,z:.5,vx:Math.cos(h)*d+r*.05*a,vy:Math.sin(h)*d,life:Ot(10,20),size:Ot(.15,.35)*(1+a*.5),size1:.02,color:c%2?16777215:o,tex:c%3?"soft":"star",drag:.9})}}shieldSpark(t,e,i){this.spawn({x:t,y:e,z:.6,life:10,size:1.3,size1:.2,color:16777215,tex:"star"});for(let s=0;s<6;s++){let r=Ot(0,Math.PI*2);this.spawn({x:t,y:e,z:.5,vx:Math.cos(r)*.12,vy:Math.sin(r)*.12,life:12,size:.25,size1:.02,color:i,drag:.88})}}dust(t,e,i=4,s=0){for(let r=0;r<i;r++)this.spawn({x:t+Ot(-.2,.2),y:e+.1,z:Ot(-.3,.5),vx:s*Ot(.01,.05)+Ot(-.03,.03),vy:Ot(.005,.03),life:Ot(18,30),size:Ot(.3,.5),size1:Ot(.8,1.2),color:13156584,additive:!1,opacity:.55,drag:.94})}smoke(t,e,i=14209264){this.spawn({x:t+Ot(-.1,.1),y:e+Ot(-.1,.1),z:.2,vx:Ot(-.01,.01),vy:Ot(0,.01),life:26,size:.45,size1:.9,color:i,additive:!1,opacity:.45,drag:.95})}sparkle(t,e,i=16777215,s=1,r=.4){for(let a=0;a<s;a++)this.spawn({x:t+Ot(-r,r),y:e+Ot(-r,r),z:Ot(0,.6),vy:Ot(.005,.02),life:Ot(14,26),size:Ot(.15,.32),size1:.02,color:i,tex:"star",rot:Ot(0,3)})}ring(t,e,i,s=2,r=16){this.spawn({x:t,y:e,z:.5,life:r,size:.3,size1:s,color:i,tex:"ring"})}koBlast(t,e,i){let s=new xt(i),r=new bt(-t,-e*.6+2).normalize(),a=new ce(2.4,18,24,1,!0);a.translate(0,-9,0);let o=new Se({color:s.clone().multiplyScalar(1.6),transparent:!0,opacity:.95,blending:Xe,depthWrite:!1,side:ke}),l=new At(a,o);l.position.set(t,e,0),l.rotation.z=Math.atan2(r.y,r.x)+Math.PI/2,this.group.add(l);let c=new At(new ce(.9,16,16,1,!0),new Se({color:16777215,transparent:!0,blending:Xe,depthWrite:!1}));c.geometry.translate(0,-8,0),c.position.copy(l.position),c.rotation.copy(l.rotation),this.group.add(c),this.meshFx.push({mesh:l,life:50,max:50,kind:"blast"},{mesh:c,life:40,max:40,kind:"blast"});for(let h=0;h<40;h++){let d=Math.atan2(r.y,r.x)+Ot(-.6,.6),u=Ot(.15,.6);this.spawn({x:t,y:e,z:Ot(-1,1),vx:Math.cos(d)*u,vy:Math.sin(d)*u,life:Ot(25,50),size:Ot(.4,1),size1:.05,color:h%3?s:16777215,tex:h%2?"star":"soft",drag:.94})}this.spawn({x:t,y:e,z:1,life:30,size:2,size1:14,color:s,tex:"ring"}),this.spawn({x:t,y:e,z:1,life:18,size:10,size1:2,color:16777215})}update(){for(let t=this.live.length-1;t>=0;t--){let e=this.live[t],i=e.userData;if(i.life--,i.life<=0){e.visible=!1,this.live.splice(t,1),this.free.push(e);continue}i.vx*=i.drag,i.vy*=i.drag,i.vz*=i.drag,i.vy-=i.gravity,e.position.x+=i.vx,e.position.y+=i.vy,e.position.z+=i.vz;let s=1-i.life/i.max,r=i.size+(i.size1-i.size)*s;e.scale.set(r,r,1),e.material.opacity=i.opacity*(1-s*s),e.material.rotation+=i.spin}for(let t=this.meshFx.length-1;t>=0;t--){let e=this.meshFx[t];e.life--;let i=1-e.life/e.max;e.kind==="blast"&&(e.mesh.scale.set(1-i*.7,.6+i*.6,1-i*.7),e.mesh.material.opacity=1-i),e.life<=0&&(this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.meshFx.splice(t,1))}}clear(){for(let t of this.live)t.visible=!1,this.free.push(t);this.live.length=0;for(let t of this.meshFx)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.meshFx.length=0}},Ac=class{constructor(t,e,i=14){this.max=i,this.samples=[];let s=new ye;this.pos=new Float32Array(i*2*3),this.alpha=new Float32Array(i*2),this.posAttr=new He(this.pos,3),this.aAttr=new He(this.alpha,1),s.setAttribute("position",this.posAttr),s.setAttribute("alpha",this.aAttr);let r=[];for(let a=0;a<i-1;a++){let o=a*2,l=o+1,c=o+2,h=o+3;r.push(o,l,c,l,h,c)}s.setIndex(r),this.mat=new ai({transparent:!0,depthWrite:!1,blending:Xe,side:ke,uniforms:{color:{value:new xt(e).multiplyScalar(1.4)}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color*vA, vA); }"}),this.mesh=new At(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=9,t.add(this.mesh),this.a=new P,this.b=new P}update(t,e){e&&t&&(t[0].getWorldPosition(this.a),t[1].getWorldPosition(this.b),this.samples.unshift({a:this.a.clone(),b:this.b.clone(),life:1}));for(let s of this.samples)s.life-=.14;for(;this.samples.length>this.max||this.samples.length&&this.samples[this.samples.length-1].life<=0;)this.samples.pop();let i=this.samples.length;for(let s=0;s<this.max;s++){let r=this.samples[Math.min(s,i-1)],a=s*6;if(!r){this.alpha[s*2]=this.alpha[s*2+1]=0;continue}this.pos[a]=r.a.x,this.pos[a+1]=r.a.y,this.pos[a+2]=r.a.z,this.pos[a+3]=r.b.x,this.pos[a+4]=r.b.y,this.pos[a+5]=r.b.z;let o=s<i?Math.max(0,r.life)*(1-s/this.max):0;this.alpha[s*2]=o*.25,this.alpha[s*2+1]=o*.9}this.posAttr.needsUpdate=!0,this.aAttr.needsUpdate=!0,this.mesh.visible=i>1}dispose(){this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh.geometry.dispose(),this.mat.dispose()}}});function hf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new ye,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=cf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let g=cf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function cf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new He(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var uf=Ye(()=>{Si()});function Sn(n,{rough:t=.25,metal:e=.9,env:i=1,emissive:s=0,map:r=null}={}){return new Le({color:n,roughness:t,metalness:e,envMapIntensity:i,emissive:s,map:r})}function hi(n,{rough:t=.35,metal:e=.1,env:i=.9,emissive:s=0,side:r=Vi}={}){return new Le({color:n,roughness:t,metalness:e,envMapIntensity:i,emissive:s,side:r})}function Ei(n,t=1,e={}){return new Se({color:new xt(n).multiplyScalar(t),...e})}function en(n,t,e){let i=[],s=[],r=[],a=new P;for(let l=0;l<=t;l++)for(let c=0;c<=n;c++){let h=c/n,d=l/t;e(h,d,a),i.push(a.x,a.y,a.z),s.push(h,d)}for(let l=0;l<t;l++)for(let c=0;c<n;c++){let h=l*(n+1)+c,d=h+1,u=h+n+1,f=u+1;r.push(h,u,d,d,u,f)}let o=new ye;return o.setAttribute("position",new le(i,3)),o.setAttribute("uv",new le(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function mi(n,t,e){let i=new Ht,s=new At(n,t);if(i.add(s),e){let r=new At(n,e);r.userData.inner=!0,i.add(r)}return i}function Ae(n,t=24,e=0,i=Math.PI*2){let s=n[0][1]>n[n.length-1][1]?[...n].reverse():n;return new Hs(s.map(([r,a])=>av(Math.max(5e-4,r),a)),t,e,i)}function N(n,t,e=0,i=0,s=0,r=0,a=0,o=0,l=null){return n.position.set(e,i,s),n.rotation.set(r,a,o),l&&(Array.isArray(l)?n.scale.set(...l):n.scale.setScalar(l)),t.add(n),n}function q(n,t){return new At(n,t)}function Vn(n){let t=[];n.traverse(e=>{e.isObject3D&&!e.isMesh&&t.push(e)});for(let e of t){let i=[],s=(l,c)=>{for(let h of l.children){if(h.userData.joint||h.userData.keep)continue;let d=new De().multiplyMatrices(c,h.matrix);if(h.isMesh){if(h.children.every(u=>u.isMesh&&u.children.length===0)){i.push({mesh:h,m:d});for(let u of h.children)u.updateMatrix(),i.push({mesh:u,m:new De().multiplyMatrices(d,u.matrix)})}}else h.type==="Group"&&!h.userData.joint&&s(h,d)}};e.updateMatrix();for(let l of e.children)l.updateMatrix();let r=l=>{l.updateMatrix(),l.children.forEach(r)};if(e.children.forEach(r),s(e,new De),i.length<2)continue;let a=new Map;for(let l of i){let c=l.mesh.material.uuid+(l.mesh.geometry.index?"i":"n");a.has(c)||a.set(c,[]),a.get(c).push(l)}for(let l of a.values()){if(l.length<2&&!l[0].mesh.parent.isMesh)continue;let c=l.map(({mesh:f,m:g})=>{let v=f.geometry.clone();for(let m of Object.keys(v.attributes))["position","normal","uv","color"].includes(m)||v.deleteAttribute(m);return v.attributes.uv||v.setAttribute("uv",new le(new Float32Array(v.attributes.position.count*2),2)),v.attributes.normal||v.computeVertexNormals(),v.applyMatrix4(g),v});if(c.some(f=>f.attributes.color)&&!c.every(f=>f.attributes.color))continue;let d=hf(c,!1);if(!d)continue;let u=new At(d,l[0].mesh.material);u.userData.inner=l[0].mesh.userData.inner;for(let{mesh:f}of l)f.parent&&f.parent.remove(f);e.add(u)}let o=l=>{for(let c of[...l.children])c.userData.joint||c.userData.keep||c.isMesh||(o(c),c.type==="Group"&&c.children.length===0&&l.remove(c))};o(e)}}function E0({c1:n=5983743,c2:t=12606719,c3:e=16743128,line:i=16049407,scale:s=5,bright:r=1}={}){return new ai({side:Ze,uniforms:{time:{value:0},c1:{value:new xt(n)},c2:{value:new xt(t)},c3:{value:new xt(e)},line:{value:new xt(i)},scale:{value:s},bright:{value:r},flash:{value:new Qe(1,1,1,0)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`})}function qi(n,t,e,{repeat:i=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=n,r.height=t,e(r.getContext("2d"),n,t);let a=new ts(r);return s&&(a.colorSpace=Ai),a.anisotropy=4,i&&(a.wrapS=a.wrapT=_r,a.repeat.set(...i)),a}function df(n="#f0c450",t="#a8741c"){return qi(512,256,(e,i,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#fff0b0"),r.addColorStop(.5,n),r.addColorStop(1,"#c8902c"),e.fillStyle=r,e.fillRect(0,0,i,s),e.strokeStyle=t,e.lineWidth=7,e.lineCap="round",e.strokeRect(14,14,i-28,s-28),e.lineWidth=6;let a=(l,c,h,d)=>{e.beginPath(),e.moveTo(l,c),e.bezierCurveTo(l+40*h*d,c-60*h,l+110*h*d,c-20*h,l+90*h*d,c+25*h),e.bezierCurveTo(l+75*h*d,c+55*h,l+40*h*d,c+30*h,l+55*h*d,c+10*h),e.stroke()};e.beginPath(),e.moveTo(30,s/2),e.bezierCurveTo(160,40,300,220,490,s/2),e.stroke();for(let l=0;l<4;l++)a(60+l*110,s/2+(l%2?30:-30),.9,1);e.fillStyle=t;for(let l=0;l<6;l++)e.beginPath(),e.arc(50+l*85,l%2?60:s-60,9,0,Math.PI*2),e.fill();let o=e.createLinearGradient(0,0,i,s);o.addColorStop(.3,"rgba(255,255,255,0)"),o.addColorStop(.45,"rgba(255,255,240,0.35)"),o.addColorStop(.6,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,i,s)})}function ff(n="#f2c44c",t="#b07a18"){return qi(512,512,(e,i,s)=>{let r=i/2,a=s/2,o=e.createRadialGradient(r-60,a-70,20,r,a,256);o.addColorStop(0,"#fff4c0"),o.addColorStop(.45,n),o.addColorStop(1,"#b8841f"),e.fillStyle=o,e.fillRect(0,0,i,s),e.strokeStyle=t,e.lineWidth=6,e.beginPath(),e.arc(r,a,238,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(r,a,168,0,Math.PI*2),e.stroke(),e.fillStyle=t,e.font="bold 42px serif",e.textAlign="center",e.textBaseline="middle";let l="\u16A0\u16A2\u16A6\u16A8\u16B1\u16B2\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16C9\u16CA\u16CF\u16D2\u16D6\u16D7\u16DA\u16DC\u16DE\u16DF",c=26;for(let d=0;d<c;d++){let u=d/c*Math.PI*2;e.save(),e.translate(r+Math.cos(u)*203,a+Math.sin(u)*203),e.rotate(u+Math.PI/2),e.fillText(l[d%l.length],0,0),e.restore()}let h=e.createRadialGradient(r-50,a-60,0,r-50,a-60,150);h.addColorStop(0,"rgba(255,255,230,0.55)"),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.fillRect(0,0,i,s)})}function pf(n="#e5431a",t="#9c1e08",e="#ff8a3a"){return qi(256,256,(i,s,r)=>{i.fillStyle=n,i.fillRect(0,0,s,r);let a=s/2,o=r/2;for(let l=0;l<120;l++){let c=Math.random()*Math.PI*2;i.strokeStyle=Math.random()<.5?t:e,i.globalAlpha=.35+Math.random()*.4,i.lineWidth=1+Math.random()*2.5,i.beginPath(),i.moveTo(a+Math.cos(c)*30,o+Math.sin(c)*30),i.lineTo(a+Math.cos(c)*128,o+Math.sin(c)*128),i.stroke()}i.globalAlpha=1})}function _e(n,t,e=0,i=0,s=0){let r=new Ht;return r.name=n,r.userData.joint=!0,r.position.set(e,i,s),t.add(r),r}function Rs(n=0,t=null,e=1){let i=qi(128,128,(a,o,l)=>{let c=a.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,0.95)"),c.addColorStop(.55,"rgba(255,255,255,0.8)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,o,l)},{srgb:!1}),s=new At(new es(1,1),new Se({color:n,map:i,transparent:!0,opacity:.75,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.scale.set(e,e*.62,1),s.renderOrder=2;let r=new Ht;if(r.add(s),t){let a=new At(new Ia(.42,.5,40),new Se({color:new xt(t).multiplyScalar(1.3),transparent:!0,opacity:.45,depthWrite:!1,blending:Xe}));a.rotation.x=-Math.PI/2,a.scale.set(e,e*.62,1),a.position.y=.002,r.add(a)}return r}var av,Js=Ye(()=>{Si();uf();av=(n,t)=>new bt(n,t)});function w0(n){let t=ze.main;if(n>t.top||n<t.bottom)return-1;if(n>=t.lip)return t.half;let e=(t.lip-n)/(t.lip-t.bottom);return t.half+(t.bottomHalf-t.half)*e}function eo(n,t){let e=w0(t);return e>0&&Math.abs(n)<e}var ze,to,Cc,io=Ye(()=>{Si();Qa();Js();ze={main:{half:8,top:0,lip:-1,bottom:-5,bottomHalf:3.4},platforms:[{x1:-6.2,x2:-2.6,y:2.7},{x1:2.6,x2:6.2,y:2.7},{x1:-1.8,x2:1.8,y:5.3}],ledges:[{x:-8,y:0,side:-1},{x:8,y:0,side:1}],blast:{left:-21,right:21,top:16.5,bottom:-11},spawns:[{x:-4.4,y:0},{x:4.4,y:0}],respawn:{x:0,y:8.2}},to={x1:-ze.main.half,x2:ze.main.half,y:0,main:!0};Cc=class{constructor(t){this.scene=t,this.group=new Ht,t.add(this.group),this.time=0,this.type="battlefield",this.activePlatforms=ze.platforms,this.buildSky(),this.buildMain(),this.buildPlatforms(),this.buildScenery(),Vn(this.group)}setType(t){this.type=t;let e=t==="battlefield";this.activePlatforms=e?ze.platforms:[],this.platGroup.visible=e}buildSky(){let t=new Dt(180,32,16),e=new ai({side:Ze,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
        }`});this.sky=new At(t,e),this.scene.add(this.sky);let i=900,s=new Float32Array(i*3),r=new Float32Array(i);for(let c=0;c<i;c++){let h=Math.random()*2-1,d=Math.random()*Math.PI*2,u=Math.abs(h)*.95+.05,f=Math.sqrt(1-u*u);s[c*3]=Math.cos(d)*f*170,s[c*3+1]=u*170-10,s[c*3+2]=Math.sin(d)*f*170,r[c]=Math.random()*2.2+.6}let a=new ye;a.setAttribute("position",new He(s,3)),a.setAttribute("size",new He(r,1)),this.starMat=new ai({transparent:!0,depthWrite:!1,blending:Xe,uniforms:{time:{value:0}},vertexShader:`attribute float size; uniform float time; varying float vA;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*(1.0+0.4*sin(time*2.0+position.x)); vA = 0.6+0.4*sin(time*3.0+position.z*0.3);
        gl_Position = projectionMatrix*mv; }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d)); gl_FragColor = vec4(vec3(1.0,0.92,1.0)*1.4, a*vA); }"}),this.scene.add(new Pr(a,this.starMat));let o=new At(new kn(9,48),new Se({color:new xt(16773846).multiplyScalar(1.25),fog:!1}));o.position.set(-38,34,-120),o.lookAt(0,0,0),this.scene.add(o);let l=new Mi(new xi({map:Xi(),color:16759016,transparent:!0,opacity:.35,depthWrite:!1,blending:Xe}));l.scale.set(60,60,1),l.position.copy(o.position).multiplyScalar(1.03),this.scene.add(l)}buildMain(){let t=ze.main,e=new Ht;e.position.z=-2.65,this.group.add(e);let i=new ci;i.moveTo(-t.half,t.top),i.lineTo(t.half,t.top),i.lineTo(t.half,t.lip),i.lineTo(t.bottomHalf,t.bottom),i.lineTo(-t.bottomHalf,t.bottom),i.lineTo(-t.half,t.lip),i.lineTo(-t.half,t.top);let s=6,r=new Gi(i,{depth:s,bevelEnabled:!0,bevelSize:.15,bevelThickness:.2,bevelSegments:2});r.translate(0,0,-s/2);let a=Ts(r,Mn(3813212),{outline:788248,thick:.05});a.receiveShadow=!0,e.add(a);let o=new At(new Fe(t.half*2+.4,.22,s+.5),Mn(9143992));o.position.y=-.09,o.receiveShadow=!0,e.add(o);let l=new At(new Fe(t.half*2-.6,.02,s-1.2),Mn(7301792));l.position.y=.025,l.receiveShadow=!0,e.add(l);let c=Mn(15777856,{emissive:new xt(3811840)}),h=Ts(new Fe(t.half*2+.5,.14,.14),c,{outline:2101248,thick:.02});h.position.set(0,-.2,s/2+.26),e.add(h);for(let g of[-1,1]){let v=Ts(new Fe(.14,.14,s+.5),c,{outline:2101248,thick:.02});v.position.set(g*(t.half+.2),-.2,0),e.add(v);let m=Ts(new Be(.22,.26,1.1,12),Mn(13617390),{outline:788248,thick:.03});m.position.set(g*(t.half-.6),.55,.2),m.castShadow=!0,e.add(m);let p=new At(new Dt(.2,16,12),Ka(16759039,1.6));p.position.set(g*(t.half-.6),1.3,.2),p.userData.keep=!0,e.add(p),this.orbs=this.orbs||[],this.orbs.push(p)}let d=Ka(10120191,1.3);for(let g=-3;g<=3;g++){let v=new At(new ii(.28,.035,6,16),d);v.position.set(g*2.1,-.65,s/2+.21),e.add(v);let m=new At(new Li(.12,0),d);m.position.set(g*2.1,-.65,s/2+.22),e.add(m)}this.crystals=[];let u=new zs({color:11898111,emissive:new xt(5909696),gradientMap:null}),f=[[-2.6,-5,1.2],[.4,-5,1.9],[2.4,-5,1],[-1.2,-5,1.4],[-5.2,-2.6,.8],[5.4,-2.4,.9]];for(let[g,v,m]of f){let p=Ts(new ce(.35*m,1.8*m,5),u,{outline:1706032,thick:.03});p.rotation.x=Math.PI,p.position.set(g,v-.9*m+.1,(Math.random()-.5)*2),e.add(p)}}buildPlatforms(){this.platGroup=new Ht,this.platGroup.userData.keep=!0,this.group.add(this.platGroup);let t=Mn(11117272),e=Mn(15777856,{emissive:new xt(3811840)}),i=new Se({color:new xt(12946687).multiplyScalar(1.2),transparent:!0,opacity:.7});this.platMeshes=[];for(let s of ze.platforms){let r=s.x2-s.x1,a=new Ht;a.position.set((s.x1+s.x2)/2,s.y,0);let o=Ts(new Fe(r,.22,3.2),t,{outline:788248,thick:.03});o.position.y=-.11,o.receiveShadow=!0,o.castShadow=!0,a.add(o);let l=Ts(new Fe(r+.1,.08,.1),e,{outline:null});l.position.set(0,-.2,1.62),a.add(l);let c=new At(new Fe(r*.85,.06,2.6),i);c.position.y=-.26,a.add(c);let h=new At(new Li(.22,0),Ka(16751856,1.3));h.position.y=-.62,h.userData.keep=!0,a.add(h),this.platMeshes.push({grp:a,gem:h}),this.platGroup.add(a)}}buildScenery(){let t=Mn(2366014),e=Mn(5128058);this.isles=[];let i=[[-34,-6,-45,5],[30,-2,-55,6],[-12,8,-80,4],[48,10,-90,7],[-55,4,-70,6],[12,-14,-40,3]];for(let[o,l,c,h]of i){let d=new Ht,u=new At(new ce(h,h*2.2,7),t);u.rotation.x=Math.PI,u.position.y=-h*1.1;let f=new At(new Be(h*1.02,h,h*.3,7),e);d.add(u,f);let g=new At(new Be(h*.12,h*.15,h*1.2,8),Mn(7234216));g.position.set(h*.3,h*.6,0);let v=new At(new Dt(h*.1,8,6),Ka(16766090,1.5));v.position.set(h*.3,h*1.25,0),d.add(g,v),d.position.set(o,l,c),d.userData.baseY=l,d.userData.phase=Math.random()*6,this.scene.add(d),this.isles.push(d)}let s=140,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=(Math.random()-.5)*60,r[o*3+1]=Math.random()*30-8,r[o*3+2]=-Math.random()*30-4;let a=new ye;a.setAttribute("position",new He(r,3)),this.motes=new Pr(a,new Lr({map:Xi(),size:.5,color:14264575,transparent:!0,opacity:.8,depthWrite:!1,blending:Xe})),this.scene.add(this.motes)}update(t){this.time+=t;let e=this.time;this.starMat.uniforms.time.value=e;for(let s of this.isles)s.position.y=s.userData.baseY+Math.sin(e*.4+s.userData.phase)*.6;for(let{gem:s}of this.platMeshes)s.rotation.y=e*1.5,s.position.y=-.62+Math.sin(e*2)*.06;this.orbs&&this.orbs.forEach((s,r)=>{s.position.y=1.3+Math.sin(e*1.8+r)*.08});let i=this.motes.geometry.attributes.position;for(let s=0;s<i.count;s++){let r=i.getY(s)+.012;r>22&&(r=-8),i.setY(s,r),i.setX(s,i.getX(s)+Math.sin(e+s)*.004)}i.needsUpdate=!0}}});function En(){return{x:0,y:0,cx:0,cy:0,jump:!1,attack:!1,special:!1,shield:!1,smash:!1,grab:!1,start:!1,any:!1}}function Dc(n,t){let e=navigator.getGamepads?navigator.getGamepads():[],i=e&&e[n];if(!i)return t;let s=h=>Math.abs(h)<.22?0:h,r=h=>i.buttons[h]&&i.buttons[h].pressed,a=s(i.axes[0]||0),o=-s(i.axes[1]||0);r(14)&&(a=-1),r(15)&&(a=1),r(12)&&(o=1),r(13)&&(o=-1),Math.abs(a)>Math.abs(t.x)&&(t.x=a),Math.abs(o)>Math.abs(t.y)&&(t.y=o);let l=s(i.axes[2]||0),c=-s(i.axes[3]||0);return Math.hypot(l,c)>.6&&(t.cx=l,t.cy=c),r(0)&&(t.attack=!0),r(1)&&(t.special=!0),(r(2)||r(3))&&(t.jump=!0),(r(4)||r(5))&&(t.grab=!0),(r(6)||r(7))&&(t.shield=!0),r(9)&&(t.start=!0),t}var Lc,T0,Pc,Ic,Uc=Ye(()=>{Lc=["jump","attack","special","shield","smash","grab"],T0=[{left:["KeyA"],right:["KeyD"],up:["KeyW"],down:["KeyS"],jump:["Space"],attack:["KeyJ","KeyF"],special:["KeyK","KeyG"],shield:["KeyL","KeyH"],smash:["KeyI","KeyR"],grab:["KeyU","KeyT"]},{left:["ArrowLeft"],right:["ArrowRight"],up:["ArrowUp"],down:["ArrowDown"],jump:["Numpad0","ShiftRight"],attack:["Numpad1","Comma"],special:["Numpad2","Period"],shield:["Numpad3","Slash"],smash:["Numpad5","Semicolon"],grab:["Numpad4","KeyM"]}];Pc=class{constructor(){this.down=new Set,this.pressedOnce=new Set,window.addEventListener("keydown",t=>{this.down.has(t.code)||this.pressedOnce.add(t.code),this.down.add(t.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Slash","Tab"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}take(t){return this.pressedOnce.has(t)?(this.pressedOnce.delete(t),!0):!1}clearOnce(){this.pressedOnce.clear()}any(t){return t.some(e=>this.down.has(e))}read(t,e){for(let i of t){let s=this.any(i.right),r=this.any(i.left),a=this.any(i.up),o=this.any(i.down);s&&!r?e.x=1:r&&!s&&(e.x=-1),a&&!o?e.y=1:o&&!a&&(e.y=-1);for(let l of Lc)this.any(i[l])&&(e[l]=!0)}return e}};Ic=class{constructor(){this.raw=En(),this.prev=En(),this.pressed={},this.buf={},this.stick={x:0,y:0},this.dirBuf={up:0,down:0,left:0,right:0},this.dirPressed={up:!1,down:!1,left:!1,right:!1},this.cBuf=0,this.cDir={x:0,y:0},this.mash=0,this.tapJump=!0;for(let t of Lc)this.pressed[t]=!1,this.buf[t]=0}latch(t){this.prev=this.raw,this.raw=t,this.mash=0;for(let a of Lc)this.pressed[a]=t[a]&&!this.prev[a],this.pressed[a]?(this.buf[a]=7,this.mash++):this.buf[a]>0&&this.buf[a]--;this.stick.x=t.x,this.stick.y=t.y;let e=.6,i=this.dirPressed;i.up=t.y>e&&!(this.prev.y>e),i.down=t.y<-e&&!(this.prev.y<-e),i.right=t.x>e&&!(this.prev.x>e),i.left=t.x<-e&&!(this.prev.x<-e);for(let a of["up","down","left","right"])i[a]?(this.dirBuf[a]=7,this.mash++):this.dirBuf[a]>0&&this.dirBuf[a]--;let s=Math.hypot(t.cx,t.cy)>.6,r=Math.hypot(this.prev.cx,this.prev.cy)>.6;s&&!r?(this.cBuf=7,this.cDir={x:t.cx,y:t.cy}):this.cBuf>0&&this.cBuf--}consume(t){this.buf[t]=0}consumeDir(t){this.dirBuf[t]=0}clearAll(){for(let t of Lc)this.buf[t]=0;for(let t in this.dirBuf)this.dirBuf[t]=0;this.cBuf=0}sidePressed(){return this.dirBuf.left>0?-1:this.dirBuf.right>0?1:0}}});function lv(n,t,e){let i={};for(let s of gf){let r=n[s],a=t[s];if(!r&&!a)continue;let o=r||Nc,l=a||Nc;i[s]=[o[0]+(l[0]-o[0])*e,o[1]+(l[1]-o[1])*e,o[2]+(l[2]-o[2])*e]}for(let s of ov){let r=n[s]||0,a=t[s]||0;(r||a)&&(i[s]=r+(a-r)*e)}return i}function xf(n,t){if(t<=n[0][0])return n[0][1];for(let e=0;e<n.length-1;e++){let[i,s]=n[e],[r,a]=n[e+1];if(t<r)return lv(s,a,lf((t-i)/(r-i)))}return n[n.length-1][1]}function no(n,t,e){for(let s of gf){let r=n.j[s];if(!r)continue;let a=t[s]||Nc,o=n.base[s]||Nc,l=o[0]+a[0],c=o[1]+a[1],h=o[2]+a[2];s==="body"&&(r.rotation.x=R0(r.rotation.x,l),r.rotation.y=R0(r.rotation.y,c),r.rotation.z=R0(r.rotation.z,h)),r.rotation.x+=(l-r.rotation.x)*e,r.rotation.y+=(c-r.rotation.y)*e,r.rotation.z+=(h-r.rotation.z)*e}let i=n.j.body;i.position.y+=(n.hipY+(t.by||0)-i.position.y)*e,i.position.z+=((t.bz||0)-i.position.z)*e,n.flare+=((t.flare||0)-n.flare)*e}function R0(n,t){for(;n-t>Math.PI;)n-=mf;for(;t-n>Math.PI;)n+=mf;return n}function Fc(n){for(let t of["body","hips","torso"]){let e=n.j[t];if(e)for(let i of["x","y","z"]){let s=e.rotation[i];s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,e.rotation[i]=s}}}var gf,ov,Nc,mf,A0=Ye(()=>{hn();gf=["body","hips","torso","head","armL","foreL","armR","foreR","legL","shinL","legR","shinR","wep","earL","earR","wisp"],ov=["by","bz","flare"],Nc=[0,0,0];mf=Math.PI*2});var C0,mt,rs=Ye(()=>{C0=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.bgm=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.55;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.28,this.musicBus.connect(this.master);let s=e.sampleRate*1.5;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1}get ok(){return this.ctx&&!this.muted}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}tone(t,e,{type:i="sine",vol:s=.3,slide:r=null,delay:a=0,attack:o=.005,bus:l=null}={}){if(!this.ok)return;let c=this.ctx,h=c.currentTime+a,d=c.createOscillator(),u=c.createGain();d.type=i,d.frequency.setValueAtTime(t,h),r&&d.frequency.exponentialRampToValueAtTime(Math.max(20,r),h+e),u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(s,h+o),u.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(u).connect(l||this.sfxBus),d.start(h),d.stop(h+e+.05)}noise(t,{vol:e=.3,freq:i=2e3,type:s="bandpass",q:r=1,slide:a=null,delay:o=0,bus:l=null}={}){if(!this.ok)return;let c=this.ctx,h=c.currentTime+o,d=c.createBufferSource();d.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(i,h),a&&u.frequency.exponentialRampToValueAtTime(Math.max(40,a),h+t),u.Q.value=r;let f=c.createGain();f.gain.setValueAtTime(e,h),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u).connect(f).connect(l||this.sfxBus),d.start(h,Math.random()*.5),d.stop(h+t+.05)}hit(t=.5){let e=Math.min(1.4,t);this.tone(160-e*40,.12+e*.12,{type:"sine",vol:.5+e*.3,slide:40}),this.noise(.06+e*.1,{vol:.35+e*.25,freq:2400-e*900,q:.8,slide:500}),e>.7&&(this.noise(.35,{vol:.25,freq:900,type:"lowpass",slide:120}),this.tone(90,.3,{type:"triangle",vol:.35,slide:30}))}slash(t=.5){this.noise(.12+t*.1,{vol:.16,freq:4e3,q:2,slide:900})}whoosh(t=.5){this.noise(.14+t*.08,{vol:.08+t*.05,freq:700,q:1.2,slide:2200})}jump(){this.tone(300,.1,{type:"triangle",vol:.12,slide:620})}djump(){this.tone(420,.14,{type:"triangle",vol:.12,slide:900}),this.noise(.1,{vol:.05,freq:3e3})}land(){this.noise(.07,{vol:.1,freq:500,type:"lowpass"})}dash(){this.noise(.09,{vol:.07,freq:900,type:"lowpass"})}shieldHit(){this.tone(900,.12,{type:"square",vol:.07,slide:500}),this.noise(.08,{vol:.12,freq:3500,q:3})}shieldBreak(){this.tone(700,.5,{type:"sawtooth",vol:.15,slide:80}),this.noise(.5,{vol:.3,freq:3e3,slide:200})}grab(){this.tone(220,.06,{type:"square",vol:.08})}throwS(){this.noise(.2,{vol:.15,freq:900,slide:2500})}ledge(){this.tone(500,.05,{type:"triangle",vol:.1})}dodge(){this.noise(.12,{vol:.08,freq:5e3,q:2,slide:2e3})}charge(){this.tone(300,.08,{type:"sine",vol:.05,slide:360})}orb(){this.tone(520,.25,{type:"sine",vol:.18,slide:180}),this.tone(780,.2,{type:"triangle",vol:.08,slide:300})}warp(){this.tone(200,.3,{type:"sine",vol:.18,slide:1400}),this.noise(.3,{vol:.08,freq:6e3,q:4,slide:1500})}reflect(){this.tone(1200,.2,{type:"triangle",vol:.14,slide:2400})}counter(){this.tone(1500,.12,{type:"square",vol:.1}),this.tone(2200,.3,{type:"triangle",vol:.12,delay:.05})}armor(){this.tone(180,.1,{type:"square",vol:.1})}tech(){this.noise(.08,{vol:.12,freq:4e3,q:3})}star(){this.tone(1800,.15,{type:"triangle",vol:.06})}ko(){this.tone(120,1.1,{type:"sawtooth",vol:.3,slide:30}),this.noise(1.2,{vol:.5,freq:1800,type:"lowpass",slide:80}),this.tone(60,1,{type:"sine",vol:.6,slide:25})}fire(){this.noise(.45,{vol:.22,freq:700,type:"lowpass",slide:250}),this.noise(.3,{vol:.1,freq:2600,q:.6,slide:900})}fsReady(){[660,880,1100,1320,1760].forEach((t,e)=>this.tone(t,.3,{type:"triangle",vol:.1,delay:e*.06})),this.noise(.6,{vol:.2,freq:5e3,q:2,slide:1500})}fsStart(){this.tone(110,1.2,{type:"sawtooth",vol:.18,slide:440}),this.noise(1,{vol:.25,freq:400,slide:4e3,q:1}),[523,659,784].forEach((t,e)=>this.tone(t,.8,{type:"square",vol:.06,delay:.3+e*.1}))}fsBoom(){this.tone(70,1.4,{type:"sine",vol:.7,slide:25}),this.noise(1.3,{vol:.55,freq:2500,type:"lowpass",slide:100}),this.tone(200,.8,{type:"sawtooth",vol:.2,slide:40})}countdown(){this.tone(660,.18,{type:"square",vol:.12})}go(){this.tone(990,.5,{type:"square",vol:.14}),this.tone(1320,.5,{type:"triangle",vol:.1})}game(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.5,{type:"square",vol:.09,delay:e*.09}))}menuMove(){this.tone(880,.05,{type:"square",vol:.05})}menuOk(){this.tone(660,.08,{type:"square",vol:.08}),this.tone(990,.12,{type:"square",vol:.08,delay:.07})}menuBack(){this.tone(500,.1,{type:"square",vol:.07,slide:300})}playMusic(t="battle"){if(!this.ctx||(this.stopMusic(),!this.musicOn))return;let e=this.ctx,s=60/(t==="battle"?148:104)/4,r=t==="battle"?[[57,60,64],[53,57,60],[48,52,55],[55,59,62],[50,53,57],[53,57,60],[52,56,59],[52,56,59]]:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],a=t==="battle"?[76,-1,74,72,74,-1,76,-1,79,-1,76,74,72,-1,69,-1]:[],o=h=>440*Math.pow(2,(h-69)/12),l={stepIdx:0,next:e.currentTime+.1,timer:0},c=()=>{for(;l.next<e.currentTime+.12;){let h=l.stepIdx,d=Math.floor(h/16)%r.length,u=h%16,f=r[d],v=l.next-e.currentTime;if(!this.muted){u%2===0&&this.tone(o(f[0]-24),s*1.8,{type:"sawtooth",vol:u%4===0?.22:.14,delay:v,bus:this.musicBus});let m=f[[0,1,2,1][u%4]]+(u>=8?12:0);if(this.tone(o(m),s*.9,{type:"square",vol:.045,delay:v,bus:this.musicBus}),t==="battle"){u%4===0&&this.tone(140,.14,{type:"sine",vol:.5,slide:40,delay:v,bus:this.musicBus}),u%8===4&&this.noise(.14,{vol:.28,freq:1800,q:.7,delay:v,bus:this.musicBus}),u%2===1&&this.noise(.03,{vol:.08,freq:8e3,type:"highpass",delay:v,bus:this.musicBus});let p=a[u];d%2===1&&p>0&&this.tone(o(p+(d>=4?-2:0)),s*1.9,{type:"triangle",vol:.12,delay:v,bus:this.musicBus})}else u===0&&f.forEach(p=>this.tone(o(p+12),s*14,{type:"triangle",vol:.05,delay:v,attack:.3,bus:this.musicBus}))}l.stepIdx++,l.next+=s}};l.timer=setInterval(c,30),this.bgm=l}stopMusic(){this.bgm&&clearInterval(this.bgm.timer),this.bgm=null}},mt=new C0});function vf(n,t,e,i,s){return((n/10+n*t/20)*(200/(e+100))*1.4+18)*(i/100)+s}function so(n,t){return t&&n>=t[0]&&n<=t[1]}var ro,Bc,L0,P0,yf,cv,kc,_f=Ye(()=>{Si();io();hn();A0();S0();rs();ro=.0027,Bc=.0046,L0=.26,P0=50,yf=Math.PI/2-.42;cv=new Set(["idle","walk","dash","run","skid","turn","crouch","hitstun","jumpsquat","land","knockdown","tumble"]),kc=class{constructor(t,e,i,{input:s,variant:r=0,color:a,stocks:o=3,cpu:l=!1,label:c}){this.battle=t,this.slot=e,this.def=i,this.s=i.stats,this.input=s,this.cpu=l,this.color=new xt(a),this.label=c,this.model=i.buildModel(r),t.scene.add(this.model.root);for(let h of this.model.worldObjects)t.scene.add(h);this.model.shadow&&t.scene.add(this.model.shadow),this.trail=new Ac(t.scene,this.model.trailColor),this.shieldMesh=new At(new Dt(1,24,16),new Se({color:this.color.clone().multiplyScalar(.9),transparent:!0,opacity:.4,depthWrite:!1,blending:Xe})),this.shieldMesh.visible=!1,t.scene.add(this.shieldMesh),this.platMesh=new At(new Be(.9,.5,.18,24),new Se({color:this.color.clone().multiplyScalar(1.3),transparent:!0,opacity:.85})),this.platMesh.visible=!1,t.scene.add(this.platMesh),this.stocks=o,this.stats={kos:0,falls:0,dealt:0,taken:0,sds:0},this.damage=0,this.animT=0,this.phase=0,this.flashT=0,this.fsReady=!1,this.visYaw=yf,this.shake=0,this.reset(ze.spawns[e%2].x,ze.spawns[e%2].y,e%2===0?1:-1)}reset(t,e,i){this.x=t,this.y=e,this.prevX=t,this.prevY=e,this.vx=0,this.vy=0,this.kx=0,this.ky=0,this.facing=i,this.grounded=!0,this.surface=to;for(let s of ze.platforms)Math.abs(s.y-e)<.01&&t>=s.x1&&t<=s.x2&&(this.surface=s);this.jumpsLeft=this.s.airJumps,this.fastfall=!1,this.state="idle",this.sf=0,this.move=null,this.moveName="",this.mf=0,this.hitIds=new Set,this.hitlag=0,this.hitstun=0,this.tumble=!1,this.pendingLaunch=null,this.invuln=0,this.shieldHP=P0,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.dropTimer=0,this.ledgeRegrab=0,this.ledge=null,this.ledgeIntangUsed=!1,this.grabbing=null,this.grabbedBy=null,this.grabTimer=0,this.tapTimer=0,this.jsTap=!1,this.techWindow=0,this.techCool=0,this.landLag=0,this.helplessLag=20,this.charge=0,this.charging=!1,this.chargeDone=!1,this.chargeBtn="attack",this.counterDmg=0,this.djTimer=0,this.lastHitBy=null,this.lastHitTimer=0,this.noGrav=!1,this.gravMult=1,this.vars={},this.hidden=!1}get height(){return this.s.height}get alive(){return this.state!=="dead"&&this.stocks>0}endHook(){let t=this.move;t&&t.onEnd&&!this.ending&&(this.ending=!0,t.onEnd(this),this.ending=!1)}setState(t){this.state==="attack"&&t!=="attack"&&(this.endHook(),this.move=null,Fc(this.model.rig)),this.state=t,this.sf=0,this.tapTimer=0,this.hidden=!1}update(){if(this.prevX=this.x,this.prevY=this.y,this.flashT>0&&this.flashT--,this.state==="dead"){--this.deadTimer<=0&&this.stocks>0&&this.respawn();return}if(this.hitlag>0){if(this.hitlag--,this.pendingLaunch&&this.input.dirPressed){let t=this.input.dirPressed;t.left&&(this.x-=.06),t.right&&(this.x+=.06),t.up&&(this.y+=.06),t.down&&!this.grounded&&(this.y-=.06)}this.hitlag===0&&this.pendingLaunch&&this.launch();return}this.invuln>0&&this.invuln--,this.dropTimer>0&&this.dropTimer--,this.ledgeRegrab>0&&this.ledgeRegrab--,this.techWindow>0&&this.techWindow--,this.techCool>0&&this.techCool--,this.djTimer>0&&this.djTimer--,this.lastHitTimer>0?this.lastHitTimer--:this.lastHitBy=null,this.state!=="shield"&&this.state!=="shieldstun"&&(this.shieldHP=Math.min(P0,this.shieldHP+.09)),this.sf++,this.animT++,this.fsReady&&this.animT%4===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.5,[16740464,16769136,7405456,7385343,13660415][this.animT/4%5],1,.7),this.noGrav=!1,this.gravMult=1,this.stateStep(),this.physics(),this.collide(),this.checkLedge()}stateStep(){switch(this.state){case"idle":return this.stIdle();case"walk":return this.stWalk();case"dash":return this.stDash();case"run":return this.stRun();case"skid":return this.stSkid();case"turn":return this.stTurn();case"crouch":return this.stCrouch();case"jumpsquat":return this.stJumpsquat();case"land":return this.stLand();case"air":return this.stAir();case"tumble":return this.stAir(!0);case"helpless":return this.stHelpless();case"airdodge":return this.stAirdodge();case"shield":return this.stShield();case"shieldstun":return this.stShieldstun();case"shieldoff":return this.stTimed(7,"idle");case"roll":return this.stRoll();case"spotdodge":return this.stTimed(22,"idle",!0);case"hitstun":return this.stHitstun();case"knockdown":return this.stKnockdown();case"getup":return this.stTimed(26,"idle",!0);case"tech":return this.stTimed(22,"idle",!0);case"ledge":return this.stLedge();case"ledgeclimb":return this.stLedgeClimb();case"grabbing":return this.stGrabbing();case"grabbed":return this.stGrabbed();case"shieldbreak":this.friction();return;case"dizzy":return this.stDizzy();case"respawn":return this.stRespawn();case"attack":return this.updateMove();case"victory":case"frozen":this.friction();return;case"trapped":return this.stTrapped()}}friction(t=1){this.vx=oi(this.vx,0,this.s.traction*t)}drift(t=1){let e=this.s,i=this.input.stick.x;Math.abs(i)>.2?this.vx=oi(this.vx,i*e.airSpeed*t,e.airAccel*Math.max(.3,t)):this.vx=oi(this.vx,0,e.airFriction)}stTimed(t,e,i=!0){i&&this.friction(1.2),this.sf>=t&&this.setState(this.grounded?e:"air")}onPlatform(){return this.grounded&&this.surface&&!this.surface.main}dropCheck(){return this.input.dirPressed.down&&this.onPlatform()?(this.grounded=!1,this.surface=null,this.y-=.04,this.vy=-.02,this.dropTimer=12,this.setState("air"),!0):!1}waitDir(t,e){let i=this.input;return i.buf[t]>7-e&&Math.hypot(i.stick.x,i.stick.y)<.3}groundActions(){let t=this.input;if(t.buf.special&&!this.waitDir("special",2))return t.consume("special"),this.special(),!0;if(t.buf.grab||t.buf.attack&&t.raw.shield)return t.consume("grab"),t.consume("attack"),this.turnToStick(),this.startMove(this.state==="dash"||this.state==="run"?"dashgrab":"grab"),!0;if(t.cBuf||t.buf.smash&&!this.waitDir("smash",3)){let e=t.cBuf?t.cDir:t.stick;return this.chargeBtn=t.cBuf?null:"smash",t.cBuf=0,t.consume("smash"),this.smashAttack(e),!0}if(t.buf.attack&&!this.waitDir("attack",1))return t.consume("attack"),this.chargeBtn="attack",this.groundAttack(),!0;if(t.buf.jump||t.tapJump&&t.dirBuf.up){let e=!t.buf.jump;return t.consume("jump"),t.consumeDir("up"),this.setState("jumpsquat"),this.jsTap=e,!0}return t.raw.shield?(this.setState("shield"),!0):!1}turnToStick(){let t=this.input.stick.x;Math.abs(t)>.5&&(this.facing=ie(t))}groundAttack(){let{x:t,y:e}=this.input.stick;return this.state==="dash"||this.state==="run"?this.startMove("dashattack"):e>.5&&e>=Math.abs(t)*.8?this.startMove("utilt"):e<-.5&&-e>=Math.abs(t)*.8?this.startMove("dtilt"):Math.abs(t)>.4?(this.facing=ie(t),this.startMove("ftilt")):this.startMove("jab1")}smashAttack(t){return t.y>.5&&t.y>=Math.abs(t.x)?this.startMove("usmash"):t.y<-.5&&-t.y>=Math.abs(t.x)?this.startMove("dsmash"):(Math.abs(t.x)>.3&&(this.facing=ie(t.x)),this.startMove("fsmash"))}aerial(t){return t.y>.5&&t.y>=Math.abs(t.x)?this.startMove("uair"):t.y<-.5&&-t.y>=Math.abs(t.x)?this.startMove("dair"):Math.abs(t.x)>.4?this.startMove(ie(t.x)===this.facing?"fair":"bair"):this.startMove("nair")}special(){let{x:t,y:e}=this.input.stick;return this.chargeBtn="special",this.fsReady&&this.def.moves.final?(this.fsReady=!1,Math.abs(t)>.4&&(this.facing=ie(t)),this.startMove("final")):e>.5&&e>=Math.abs(t)*.7?this.startMove("upb"):e<-.5&&-e>=Math.abs(t)?this.startMove("downb"):Math.abs(t)>.4?this.sideBUsed&&!this.grounded?!1:(this.facing=ie(t),this.startMove("sideb")):this.startMove("neutralb")}stIdle(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(Math.abs(t)>.25){Math.abs(t)>.75?this.startDash(ie(t)):(this.facing=ie(t),this.setState("walk"));return}if(this.input.stick.y<-.6)return this.setState("crouch");this.friction()}startDash(t){this.facing=t,this.setState("dash"),this.vx=t*this.s.dashSpeed,mt.dash(),this.battle.effects.dust(this.x-t*.3,this.y,3,-t)}stWalk(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(Math.abs(t)<.25)return this.setState("idle");if(this.input.stick.y<-.6)return this.setState("crouch");if(Math.abs(t)>.75&&(this.input.dirPressed.left||this.input.dirPressed.right))return this.startDash(ie(t));this.facing=ie(t),this.vx=oi(this.vx,t*this.s.walkSpeed*1.3,.012)}stDash(){if(!this.grounded)return this.setState("air");if(this.groundActions())return;let t=this.input.stick.x;if(ie(t)===-this.facing&&Math.abs(t)>.6)return this.startDash(-this.facing);this.vx=oi(this.vx,this.facing*this.s.dashSpeed,.05),this.sf>=this.s.dashFrames&&(ie(t)===this.facing&&Math.abs(t)>.5?this.setState("run"):this.setState("skid"))}stRun(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(this.input.stick.y<-.6)return this.setState("crouch");if(Math.abs(t)<.3)return this.setState("skid");if(ie(t)===-this.facing)return this.setState("turn");this.vx=oi(this.vx,this.facing*this.s.runSpeed,.02),this.animT%16===0&&this.battle.effects.dust(this.x-this.facing*.2,this.y,1,-this.facing)}stSkid(){if(!this.grounded)return this.setState("air");if(this.groundActions())return;let t=this.input.stick.x;if(Math.abs(t)>.75&&(this.input.dirPressed.left||this.input.dirPressed.right))return this.startDash(ie(t));this.friction(1.6),this.sf>=8&&this.setState("idle")}stTurn(){if(!this.grounded)return this.setState("air");if(!this.groundActions()&&(this.friction(2.2),this.sf===1&&this.battle.effects.dust(this.x,this.y,3,this.facing),this.sf===5&&(this.facing=-this.facing),this.sf>=10)){let t=this.input.stick.x;ie(t)===this.facing&&Math.abs(t)>.5?this.setState("run"):this.setState("idle")}}stCrouch(){if(!this.grounded)return this.setState("air");if(!this.groundActions()&&!this.dropCheck()){if(this.input.stick.y>-.5)return this.setState("idle");this.friction(1.5)}}stJumpsquat(){let t=this.input,e=this.s;if(this.friction(.6),!this.grounded)return this.setState("air");if(this.jsTap){if(t.buf.attack&&this.sf<=2)return t.consume("attack"),this.chargeBtn="attack",this.startMove("utilt");if(t.buf.smash)return t.consume("smash"),this.chargeBtn="smash",this.startMove("usmash");if(t.buf.special)return t.consume("special"),this.special();if(t.buf.grab)return t.consume("grab"),this.startMove("grab")}else if(t.buf.special&&t.stick.y>.5)return t.consume("special"),this.special();if(this.sf>=e.jumpsquat){let i=this.jsTap?t.raw.y>.5:t.raw.jump;this.vy=i?e.jumpV:e.hopV;let s=Re(this.vx*.85,-e.airSpeed*1.2,e.airSpeed*1.2);this.vx=s+t.stick.x*e.airSpeed*.35,this.grounded=!1,this.surface=null,this.fastfall=!1,this.setState("air"),mt.jump(),this.battle.effects.dust(this.x,this.y,4,0)}}stLand(){if(this.friction(1.4),!this.grounded)return this.setState("air");this.sf>=this.landLag&&this.setState("idle")}landing(t){this.setState("land"),this.landLag=t}airActions(){let t=this.input;if(t.buf.special&&!this.waitDir("special",2)&&(t.consume("special"),this.special()!==!1))return!0;if(t.cBuf||t.buf.smash&&!this.waitDir("smash",2)){let e=t.cBuf?t.cDir:t.stick;return t.cBuf=0,t.consume("smash"),this.aerial(e),!0}return t.buf.attack||t.buf.grab?(t.consume("attack"),t.consume("grab"),this.aerial(t.stick),!0):t.buf.shield&&!this.airdodgeUsed?(t.consume("shield"),this.startAirdodge(),!0):t.buf.jump&&this.jumpsLeft>0?(t.consume("jump"),this.doubleJump(),!0):(t.tapJump&&t.dirBuf.up&&this.jumpsLeft>0&&this.tapTimer===0&&(t.consumeDir("up"),this.tapTimer=3),this.tapTimer>0&&(this.tapTimer--,this.tapTimer===0)?(this.doubleJump(),!0):!1)}doubleJump(){let t=this.s;this.jumpsLeft--,this.vy=t.djV,this.ky=Math.max(0,this.ky),this.kx*=.5,this.vx=this.input.stick.x*t.airSpeed,this.fastfall=!1,this.djTimer=24,this.setState("air"),mt.djump(),this.battle.effects.ring(this.x,this.y+.1,this.def.color,1.8,14)}fastfallCheck(){this.input.dirPressed.down&&!this.fastfall&&this.vy<=.03&&!this.grounded&&(this.fastfall=!0,this.vy=-this.s.fastFall,this.battle.effects.sparkle(this.x,this.y+this.height*.5,16777215,2,.3))}stAir(t=!1){if(this.grounded)return this.setState("idle");t&&this.updateTech(),!this.airActions()&&(this.drift(),this.fastfallCheck())}stHelpless(){if(this.grounded)return this.landing(this.helplessLag);this.drift(.65),this.fastfallCheck()}startAirdodge(){this.setState("airdodge"),this.airdodgeUsed=!0;let{x:t,y:e}=this.input.stick,i=Math.hypot(t,e);this.fastfall=!1,i>.5?(this.adDir=!0,this.vx=t/i*.3,this.vy=e/i*.3,this.kx=0,this.ky=0):this.adDir=!1,mt.dodge()}stAirdodge(){this.adDir?(this.sf<14&&(this.noGrav=!0,this.vx*=.88,this.vy*=.88),this.sf>=38&&this.setState("air")):(this.drift(.8),this.sf>=30&&this.setState("air")),this.sf%3===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.5,16777215,1,.4)}stShield(){let t=this.input;if(!this.grounded)return this.setState("air");if(this.friction(1.5),this.shieldHP-=.13,this.shieldHP<=0)return this.shieldBreak();if(t.buf.jump||t.tapJump&&t.dirBuf.up){t.consume("jump"),t.consumeDir("up"),this.setState("jumpsquat"),this.jsTap=!1;return}if(t.buf.attack||t.buf.grab)return t.consume("attack"),t.consume("grab"),this.startMove("grab");if(t.buf.special&&t.stick.y>.5)return t.consume("special"),this.special();let e=t.sidePressed();if(e)return t.consumeDir(e<0?"left":"right"),this.startRoll(e);if(t.dirBuf.down){t.consumeDir("down"),this.setState("spotdodge"),mt.dodge();return}!t.raw.shield&&this.sf>=4&&this.setState("shieldoff")}stShieldstun(){this.friction(.8),--this.shieldstun<=0&&this.setState(this.input.raw.shield?"shield":"shieldoff")}shieldBreak(){mt.shieldBreak(),this.battle.effects.hitSpark(this.x,this.y+1,this.color,1.2),this.shieldHP=30,this.setState("shieldbreak"),this.grounded=!1,this.surface=null,this.vy=.24,this.vx=0,this.battle.shakeCam(.4)}stDizzy(){this.friction(),this.dizzyT-=1+this.input.mash*4,this.animT%20===0&&this.battle.effects.sparkle(this.x,this.y+this.height+.2,16772744,1,.3),this.dizzyT<=0&&this.setState("idle")}startRoll(t){this.setState("roll"),this.rollDir=t,mt.dodge()}stRoll(){let t=this.sf;t>=3&&t<=20?this.vx=this.rollDir*this.s.rollSpeed*(t<16?1:.5):this.friction(2),t>=27&&(this.facing=-this.rollDir,this.setState(this.grounded?"idle":"air"))}updateTech(){this.input.pressed.shield&&this.techCool===0&&(this.techWindow=11,this.techCool=40)}stHitstun(){this.updateTech(),this.hitstun--,this.grounded?this.friction(.6):this.hitstun<6&&this.drift(.4),this.hitstun<=0&&(this.grounded?this.setState("idle"):this.setState(this.tumble?"tumble":"air")),!this.grounded&&Math.hypot(this.kx,this.ky)>.18&&this.animT%2===0&&this.battle.effects.smoke(this.x,this.y+this.height*.5)}stKnockdown(){let t=this.input;if(this.friction(2),this.sf>14){if(t.buf.attack)return t.consume("attack"),this.startMove("getupattack");let e=t.sidePressed();if(e)return t.consumeDir(e<0?"left":"right"),this.startRoll(e);(t.dirBuf.up||t.buf.jump||t.buf.shield||this.sf>80)&&(t.consume("jump"),t.consume("shield"),this.setState("getup"))}}checkLedge(){if(this.grounded||this.ledgeRegrab>0)return;let t=this.state,e=t==="air"||t==="helpless"||t==="tumble"||t==="airdodge"&&this.sf>14;if(t==="attack"&&this.move&&this.move.ledgeGrab!==void 0&&this.mf>=this.move.ledgeGrab&&(e=!0),!!e&&!(this.vy+this.ky>.05&&t!=="attack")&&!(this.input.stick.y<-.6))for(let i of ze.ledges){let s=(this.x-i.x)*i.side,r=i.y-this.y;if(s<-.4||s>1.15||r<.45||r>this.height*1.25)continue;let a=this.battle.fighters.find(o=>o!==this&&o.state==="ledge"&&o.ledge===i);if(a){if(a.sf<8)continue;a.setState("air"),a.ledge=null,a.vx=i.side*.08,a.vy=.05,a.ledgeRegrab=40}this.grabLedge(i);return}}grabLedge(t){this.move=null,this.setState("ledge"),this.ledge=t,this.x=t.x+t.side*.32,this.y=t.y-this.height*.84,this.vx=this.vy=this.kx=this.ky=0,this.facing=-t.side,this.jumpsLeft=this.s.airJumps,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.fastfall=!1,this.ledgeIntangUsed||(this.invuln=36,this.ledgeIntangUsed=!0),this.input.clearAll(),mt.ledge()}stLedge(){let t=this.input,e=this.ledge;if(this.x=e.x+e.side*.32,this.y=e.y-this.height*.84,this.sf<7)return;let i=-e.side,s=t.stick.x;if(t.buf.jump||t.dirBuf.up){t.consume("jump"),t.consumeDir("up"),this.setState("air"),this.ledge=null,this.y=e.y-this.height*.5,this.vy=this.s.jumpV*1.02,this.vx=i*.07,this.ledgeRegrab=20,mt.jump();return}if(t.buf.attack||t.buf.special)return t.consume("attack"),t.consume("special"),this.startClimb("attack");if(t.buf.shield)return t.consume("shield"),this.startClimb("roll");if(ie(s)===i&&Math.abs(s)>.6)return this.startClimb("climb");if(t.dirBuf.down||ie(s)===-i&&Math.abs(s)>.6||this.sf>330){t.consumeDir("down"),this.setState("air"),this.ledge=null,this.x+=e.side*.15,this.ledgeRegrab=24;return}}startClimb(t){this.climbAction=t,this.climbFrom={x:this.x,y:this.y},this.setState("ledgeclimb")}stLedgeClimb(){let t=this.ledge,e=16,i=Math.min(1,this.sf/e),s=t.x-t.side*.55;this.x=this.climbFrom.x+(s-this.climbFrom.x)*i,this.y=this.climbFrom.y+(t.y-this.climbFrom.y)*Math.min(1,i*1.6),this.sf>=e&&(this.x=s,this.y=t.y,this.grounded=!0,this.surface=to,this.ledge=null,this.vx=0,this.vy=0,this.climbAction==="attack"?this.startMove("ledgeattack"):this.climbAction==="roll"?this.startRoll(-t.side):this.setState("idle"))}grabOpponent(t){this.state==="attack"&&(this.move=null,this.setState("grabbing"),this.grabbing=t,this.grabTimer=Math.min(240,80+t.damage*.9),t.move=null,t.setState("grabbed"),t.grabbedBy=this,t.vx=t.vy=t.kx=t.ky=0,t.pendingLaunch=null,t.facing=-this.facing,this.vx=0,mt.grab())}commandGrab(t,e){this.state==="attack"&&(t.grabbing&&t.releaseGrabQuiet(),t.move=null,t.setState("grabbed"),t.grabbedBy=this,t.vx=t.vy=t.kx=t.ky=0,t.pendingLaunch=null,t.facing=-this.facing,this.grabbing=t,mt.grab(),this.startMove(e,!0))}holdVictim(t){let e=this.grabbing;if(!e)return;let i=t||this.def.grabHold;e.x=this.x+this.facing*i[0],e.y=this.y+i[1],e.facing=-this.facing,e.grounded=!1}stGrabbing(){let t=this.grabbing,e=this.input;if(!t||t.state!=="grabbed")return this.grabbing=null,this.setState("idle");if(this.friction(2),this.holdVictim(),this.grabTimer-=1+t.input.mash*5,this.grabTimer<=0)return this.releaseGrab();if(this.sf<6)return;if(e.buf.attack)return e.consume("attack"),this.startMove("pummel",!0);let{x:i,y:s}=e.stick;if(s>.6)return this.startMove("uthrow",!0);if(s<-.6)return this.startMove("dthrow",!0);if(Math.abs(i)>.6)return this.startMove(ie(i)===this.facing?"fthrow":"bthrow",!0);if(e.cBuf){let r=e.cDir;return e.cBuf=0,r.y>.6?this.startMove("uthrow",!0):r.y<-.6?this.startMove("dthrow",!0):this.startMove(ie(r.x)===this.facing?"fthrow":"bthrow",!0)}}releaseGrab(){let t=this.grabbing;this.grabbing=null,t&&t.state==="grabbed"&&(t.grabbedBy=null,t.setState("hitstun"),t.hitstun=18,t.tumble=!1,t.y=this.y,t.grounded=this.grounded,t.surface=this.surface,t.kx=this.facing*.14,t.ky=0,t.grounded||(t.vy=.1)),this.landing(14),this.vx=-this.facing*.08}stGrabbed(){this.input.pressed.shield&&this.techCool===0&&(this.techWindow=11,this.techCool=40);let t=this.grabbedBy;(!t||t.state!=="grabbing"&&!(t.state==="attack"&&t.grabbing===this))&&(this.grabbedBy=null,this.setState("air"))}doThrow(t){let e=this.grabbing;e&&(this.grabbing=null,e.grabbedBy=null,e.setState("hitstun"),this.battle.applyHit(this,e,{dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,sfx:"hit",throwHit:!0},e.x,e.y+e.height*.5,this.facing),mt.throwS())}startMove(t,e=!1){let i=this.def.moves[t];return i?(e||this.grabbing&&t!=="pummel"&&(this.grabbing=null),this.state==="attack"&&(this.endHook(),Fc(this.model.rig)),this.state="attack",this.sf=0,this.tapTimer=0,this.move=i,this.moveName=t,this.mf=-1,this.hitIds=new Set,this.charge=0,this.charging=!1,this.chargeDone=!1,this.vars={},this.hidden=!1,i.onStart&&i.onStart(this),this.updateMove(),!0):!1}chargeHeld(){let t=this.chargeBtn;return t?this.input.raw[t]:!1}get chargeRatio(){return this.move&&this.move.charge?this.charge/this.move.charge.max:0}updateMove(){let t=this.move;if(!t)return this.setState(this.grounded?"idle":"air");if(this.charging){if(this.chargeHeld()&&this.charge<t.charge.max){this.charge++,this.moveGravity(t),this.grounded?this.friction():this.drift(.4),this.charge%6===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.6,this.def.color,1,.5),this.charge%12===0&&mt.charge(),t.onCharge&&t.onCharge(this);return}this.charging=!1}this.mf++;let e=this.mf;if(t.charge&&e===t.charge.f&&!this.chargeDone&&(this.chargeDone=!0,this.chargeHeld()&&(this.charging=!0,this.charge=0)),this.moveGravity(t),this.grounded?t.keepVel||this.friction(t.friction??1):t.noDrift||this.drift(t.drift??(t.aerial?1:.6)),t.aerial&&this.fastfallCheck(),t.sfx&&t.sfx[0]===e&&mt[t.sfx[1]]&&mt[t.sfx[1]](t.sfx[2]??.5),t.hold&&this.grabbing?this.holdVictim(t.hold(e,this)):this.grabbing&&(this.moveName==="pummel"||t.throwHit)&&this.holdVictim(),t.pummelAt===e&&this.grabbing){let i=this.grabbing;i.damage=Math.min(999,i.damage+t.pummelDmg),this.stats.dealt+=t.pummelDmg,i.stats.taken+=t.pummelDmg,i.flashT=6,this.battle.effects.hitSpark(i.x,i.y+i.height*.6,this.color,.2),mt.hit(.2),this.hitlag=4,i.hitlag=0}if(t.throwHit&&e===t.throwAt&&this.doThrow(t.throwHit),t.onFrame&&t.onFrame(this,e),!(this.state!=="attack"||this.move!==t)){if(t.next&&so(e,t.nextWin)&&this.input.buf.attack){this.input.consume("attack"),this.startMove(t.next);return}t.iasa&&e>=t.iasa&&this.grounded&&this.groundActionsLite()||e>=t.total&&this.endMove()}}groundActionsLite(){let t=this.input;return t.buf.attack||t.buf.special||t.buf.jump||t.buf.smash||t.raw.shield||Math.abs(t.stick.x)>.7?(this.move=null,this.setState("idle"),this.stIdle(),!0):!1}moveGravity(t){t.noGravity&&so(this.mf,t.noGravity)&&(this.noGrav=!0),t.fall!==void 0&&(this.gravMult=t.fall)}endMove(){let t=this.move;if(this.endHook(),this.moveName==="pummel"&&this.grabbing){this.move=null,this.state="grabbing",this.sf=10,Fc(this.model.rig);return}this.move=null,this.grounded?this.setState(t.endState||"idle"):(this.setState(t.helpless?"helpless":"air"),t.helpless&&(this.helplessLag=t.helplessLag||20))}landDuringMove(t){let e=this.move;if(e.onLand&&e.onLand(this)==="continue"||e.landContinue)return;let i;if(e.aerial){let s=e.acBefore!==void 0&&this.mf<e.acBefore||e.acAfter!==void 0&&this.mf>=e.acAfter;if(i=s?4:e.landLag||8,!s&&e.landHit){this.startMove(e.landHit);return}}else e.helpless?i=e.helplessLag||20:i=e.landLag||10;this.endHook(),this.move=null,this.landing(i),mt.land()}activeHitboxes(){let t=[],e=this.move;if(this.state!=="attack"||!e||!e.hit||this.charging)return t;let i=this.mf;for(let s of e.hit){if(i<s.f[0]||i>s.f[1])continue;let r=s.x,a=s.y;if(s.path){let o=s.f[1]>s.f[0]?(i-s.f[0])/(s.f[1]-s.f[0]):0;r=s.path[0][0]+(s.path[1][0]-s.path[0][0])*o,a=s.path[0][1]+(s.path[1][1]-s.path[0][1])*o}t.push({h:s,x:this.x+r*this.facing,y:this.y+a,r:s.r})}return t}hurtbox(){let t=this.s,e=t.height,i=t.radius;return(this.state==="crouch"||this.state==="attack"&&this.moveName==="dtilt")&&(e*=.65),this.state==="knockdown"&&(e*=.4),{ax:this.x,ay:this.y+i,bx:this.x,by:this.y+e-i,r:i}}isIntangible(){if(this.invuln>0)return!0;let t=this.sf;switch(this.state){case"roll":return t>=3&&t<=18;case"spotdodge":return t>=3&&t<=16;case"airdodge":return t>=2&&t<=(this.adDir?20:24);case"getup":return t<=20;case"tech":return t<=18;case"ledgeclimb":return!0;case"respawn":case"dead":return!0;case"attack":{let e=this.move;return!!(e&&e.intang&&so(this.mf,e.intang))}}return!1}inWindow(t){return this.state==="attack"&&this.move&&this.move[t]&&so(this.mf,this.move[t])}receiveKnockback(t,e,i,s,r){let a=Math.min(20,Math.floor(s*.45+4));if(this.grabbing&&this.releaseGrabQuiet(),this.grabbedBy){let o=this.grabbedBy;this.grabbedBy=null,o.grabbing===this&&(o.grabbing=null)}return this.endHook(),this.move=null,this.setState("hitstun"),this.pendingLaunch={kb:t,ang:e,dir:i},this.hitlag=a,this.hitstun=Math.floor(t*.4),this.tumble=t>=80,this.vx=0,this.vy=0,this.kx=0,this.ky=0,this.fastfall=!1,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.charging=!1,this.flashT=8,this.lastHitBy=r,this.lastHitTimer=600,a}releaseGrabQuiet(){let t=this.grabbing;this.grabbing=null,t&&t.state==="grabbed"&&(t.grabbedBy=null,t.setState("air"),t.vy=.12)}launch(){let{kb:t,ang:e,dir:i,link:s}=this.pendingLaunch;if(this.pendingLaunch=null,s){this.kx=s.vx+(s.x+s.facing*.35-this.x)*.12,this.ky=Math.max(0,s.vy)+(s.y+1.3-this.y)*.12,this.vy=0,this.ky>.01&&(this.grounded=!1,this.surface=null,this.y+=.02);return}let r=e*Zs,a=Math.cos(r)*i,o=Math.sin(r);if(t>30){let h=this.input.stick.x,d=this.input.stick.y,f=Re(h*-o+d*a,-1,1)*15*Zs,g=Math.cos(f),v=Math.sin(f),m=a*g-o*v,p=a*v+o*g;a=m,o=p}let l=a*t*ro,c=o*t*ro;this.grounded&&(c<0&&(t>70?c=-c*.75:c=0),c>.03||this.tumble?(this.grounded=!1,this.surface=null,this.y+=.02):c=0),this.kx=l,this.ky=c}physics(){let t=this.s,e=this.state;if(!(e==="ledge"||e==="grabbed"||e==="ledgeclimb"||e==="respawn"||e==="dead"||e==="trapped")){if(this.grounded)this.vy=0,this.kx&&(this.kx=oi(this.kx,0,Bc+t.traction*.8)),this.ky=0;else{this.noGrav?this.noGrav:this.fastfall&&this.vy<=0?this.vy=-t.fastFall:this.vy=Math.max(this.vy-t.gravity*this.gravMult,-t.fallSpeed);let i=Math.hypot(this.kx,this.ky);if(i>0){let s=Math.max(0,i-Bc);this.kx*=s/i,this.ky*=s/i}}this.px=this.x,this.py=this.y,this.x+=this.vx+this.kx,this.y+=this.vy+this.ky}}collide(){let t=this.state;if(t==="ledge"||t==="grabbed"||t==="ledgeclimb"||t==="respawn"||t==="dead"||t==="trapped")return;let e=this.px,i=this.py,s=this.battle.stage.activePlatforms;if(this.grounded){let r=this.surface||to;this.y=r.y,(this.x<r.x1||this.x>r.x2)&&(cv.has(t)||t==="attack"&&this.move&&this.move.canLeaveGround?(this.grounded=!1,this.surface=null,t==="attack"||t==="hitstun"||t==="tumble"||(t==="knockdown"?this.setState("air"):t!=="jumpsquat"&&this.setState("air"))):(this.x=Re(this.x,r.x1,r.x2),this.vx=0,this.kx=0))}else{let r=this.y-i;if(r<=0){let a=ze.main;if(i>=a.top-1e-6&&this.y<a.top&&Math.abs(this.x)<=a.half+.08){this.x=Re(this.x,-a.half,a.half),this.land(to,r);return}if(this.dropTimer<=0&&!(this.input.stick.y<-.6&&(t==="air"||t==="tumble")&&this.fastfall)){for(let o of s)if(i>=o.y-1e-6&&this.y<o.y&&this.x>=o.x1-.05&&this.x<=o.x2+.05){this.x=Re(this.x,o.x1,o.x2),this.land(o,r);return}}}this.resolveSolid(e,i)}}resolveSolid(t,e){let i=this.height,s=ze.main;for(let r=0;r<2;r++){let a=!1;for(let o of[.05,.5,.95]){let l=this.y+i*o,c=w0(l);if(c<0||c+L0-Math.abs(this.x)<=0)continue;let d=e+i;if(Math.abs(this.x)<s.bottomHalf+L0&&d<=s.bottom+.25&&o>.5)this.y=s.bottom-i-.01,this.vy>0&&(this.vy=0),this.ky>0&&(this.ky=this.state==="hitstun"?-this.ky*.4:0);else{let u=ie(this.x)||ie(t)||1;this.x=u*(c+L0+.002),ie(this.vx)===-u&&(this.vx=0),ie(this.kx)===-u&&(this.kx=this.state==="hitstun"?-this.kx*.4:0)}a=!0;break}if(!a)break}}land(t,e){let i=this.s;this.grounded=!0,this.surface=t,this.y=t.y,this.vy=0,this.jumpsLeft=i.airJumps,this.fastfall=!1,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.ledgeIntangUsed=!1,this.djTimer=0;let s=this.state;if(s==="hitstun"||s==="tumble"){if(s==="tumble"||this.tumble){if(this.ky=0,this.techWindow>0){this.techWindow=0,this.kx=0,mt.tech(),this.battle.effects.sparkle(this.x,this.y+.5,16777215,6,.6);let a=this.input.stick.x;Math.abs(a)>.5?this.startRoll(ie(a)):this.setState("tech");return}this.kx*=.5,this.setState("knockdown"),this.battle.effects.dust(this.x,this.y,6,0),mt.land(),this.battle.shakeCam(.08);return}this.ky=0;return}if(this.ky=0,this.kx*=.5,s==="attack")return this.landDuringMove(e);if(s==="shieldbreak"){this.setState("dizzy"),this.dizzyT=200;return}if(s==="helpless"){this.landing(this.helplessLag),mt.land();return}if(s==="airdodge"){this.landing(this.adDir?10:3);return}s!=="grabbed"&&(this.landing(3),mt.land(),e<-.12&&this.battle.effects.dust(this.x,this.y,4,0))}stTrapped(){let t=this.trap;if(!t||!t.by||t.by.state!=="attack"||!t.by.move||!t.by.move.fs)return this.trap=null,this.setState("air");this.x+=(t.x-this.x)*.08,this.y+=(t.y-this.height*.5-this.y)*.08}die(){this.endHook(),this.state="dead",this.move=null,this.deadTimer=80,this.stocks--,this.stats.falls++,this.fsReady&&(this.fsReady=!1,this.battle.app.hud.setFs(this.slot,!1)),this.model.root.visible=!1,this.shieldMesh.visible=!1,this.grabbing=null,this.grabbedBy&&(this.grabbedBy.grabbing=null,this.grabbedBy=null)}respawn(){let t=ze.respawn;this.reset(t.x,t.y,this.slot%2===0?1:-1),this.damage=0,this.state="respawn",this.grounded=!1,this.surface=null,this.model.root.visible=!0,this.model.update(1/60,{vx:0,vy:0,snap:!0})}stRespawn(){let t=this.input,e=ze.respawn;this.x=e.x,this.y=e.y;let i=t.buf.jump||t.buf.attack||t.buf.special||t.buf.shield||Math.abs(t.stick.x)>.5||t.stick.y<-.5;(this.sf>40&&i||this.sf>300)&&(this.setState("air"),this.invuln=120,this.vy=0,this.jumpsLeft=this.s.airJumps)}animate(){let t=this.def.anims,e=this.state,i,s=.3,r=this.sf;switch(e){case"idle":case"respawn":i=t.idle(this.animT),s=.22;break;case"walk":this.phase+=Math.abs(this.vx)*4.2,i=t.walk(this.phase);break;case"dash":case"run":this.phase+=Math.abs(this.vx)*3.2,i=t.run(this.phase),s=.4;break;case"skid":case"turn":i=t.skid(),s=.4;break;case"crouch":i=t.crouch(this.animT),s=.4;break;case"jumpsquat":case"land":i=t.squat(),s=.55;break;case"air":case"tumble":if(e==="tumble"){i=t.tumbleIdle(this.animT),s=.2;break}this.djTimer>0?(i=t.djump(24-this.djTimer),s=.45):i=this.vy>.02?t.jump():t.fall(this.animT),s=this.djTimer>0?.45:.15;break;case"helpless":i=t.helpless(this.animT),s=.2;break;case"hitstun":i=this.tumble?t.tumble(this.animT):t.hurt(),s=this.tumble?.5:.6;break;case"shield":case"shieldstun":case"shieldoff":i=t.shield(),s=.5;break;case"roll":i=t.roll(r,this.rollDir===this.facing),s=.6;break;case"spotdodge":i=t.spotdodge(r),s=.5;break;case"airdodge":i=t.airdodge(r),s=.4;break;case"ledge":i=t.ledge(this.animT),s=.4;break;case"ledgeclimb":i=t.climb(r),s=.5;break;case"knockdown":i=t.knockdown(),s=.4;break;case"getup":case"tech":i=t.getup(r),s=.4;break;case"grabbing":i=t.hold(),s=.4;break;case"grabbed":case"trapped":i=t.grabbed(this.animT),s=.4;break;case"shieldbreak":case"dizzy":i=t.dizzy(this.animT),s=.3;break;case"victory":i=t.victory(r),s=.3;break;case"frozen":i=t.idle(this.animT),s=.2;break;case"attack":{let a=this.move;i=a&&a.anim?xf(a.anim,Math.max(0,this.mf)):t.idle(this.animT),s=a&&a.alpha!==void 0?a.alpha:.55;break}default:i=t.idle(this.animT)}no(this.model.rig,i,s)}render(t,e){let i=this.model;if(this.state==="dead"){i.root.visible=!1,i.shadow&&(i.shadow.visible=!1),this.shieldMesh.visible=!1,this.platMesh.visible=!1,this.trail.update(null,!1);return}i.root.visible=!this.hidden;let s=this.prevX+(this.x-this.prevX)*t,r=this.prevY+(this.y-this.prevY)*t,a=0,o=0;this.hitlag>0&&this.pendingLaunch&&(a=Ot(-.07,.07),o=Ot(-.04,.04)),i.root.position.set(s+a,r+o,0),this.updateShadow(s,r);let l=this.facing*yf;this.visYaw+=(l-this.visYaw)*.35,i.root.rotation.y=this.visYaw;let c=0,h=new xt(1,1,1);this.flashT>0?(c=.7*(this.flashT/8),h.set(16777215)):this.fsReady?(c=.3+.2*Math.sin(this.animT*.3),h.setHSL(this.animT*.01%1,1,.6)):this.state==="attack"&&this.move&&this.move.fs?(c=.25,h.set(this.def.color)):this.charging&&!(this.move&&this.move.noChargeFlash)?(c=.25+.25*Math.sin(this.animT*.6),h.set(16777130)):this.invuln>0&&this.state!=="respawn"&&this.state!=="ledge"?(c=Math.floor(this.animT/3)%2*.5,h.set(16777215)):this.state==="respawn"?(c=.25+.15*Math.sin(this.animT*.2),h.copy(this.color)):this.state==="helpless"?(c=.35,h.set(0)):this.inWindow("counter")||this.inWindow("reflect")?(c=.35,h.set(10479871)):this.inWindow("armor")&&(c=.3,h.set(16765024)),i.setFlash(h,c),i.update(e,{vx:this.vx+this.kx,vy:this.vy+this.ky,air:!this.grounded});let d=this.move,u=d&&d.trail&&this.state==="attack"&&so(this.mf,d.trailF||[0,999])&&!this.charging;if(this.trail.update(u?i.trails[d.trail]:null,u),this.state==="shield"||this.state==="shieldstun"){let f=.35+.75*(this.shieldHP/P0);this.shieldMesh.visible=!0,this.shieldMesh.position.set(s,r+this.height*.52,0),this.shieldMesh.scale.setScalar(f*(this.height/1.8)),this.shieldMesh.material.opacity=.28+.2*(this.state==="shieldstun"?1:0)}else this.shieldMesh.visible=!1;this.state==="respawn"?(this.platMesh.visible=!0,this.platMesh.position.set(s,r-.09,0),this.platMesh.rotation.y+=.05):this.platMesh.visible=!1}updateShadow(t,e){let i=this.model.shadow;if(!i)return;let s=null;Math.abs(t)<=ze.main.half+.1&&e>=-.05&&(s=0);for(let l of this.battle.stage.activePlatforms)t>=l.x1-.1&&t<=l.x2+.1&&e>=l.y-.05&&(s===null||l.y>s)&&(s=l.y);let r=this.state==="dead"||s===null||this.hidden;if(i.visible=!r,r)return;let a=Math.max(0,e-s),o=Math.max(.25,1-a/6);i.position.set(t,s+.012,.05),i.scale.setScalar(o),i.children[0].material.opacity=.75*o}dispose(){let t=this.battle.scene;t.remove(this.model.root);for(let e of this.model.worldObjects)t.remove(e);this.model.shadow&&t.remove(this.model.shadow),this.model.dispose(),this.trail.dispose(),t.remove(this.shieldMesh),t.remove(this.platMesh);for(let e of[this.shieldMesh,this.platMesh])e.geometry.dispose(),e.material.dispose()}}});var bf,Oc,Mf=Ye(()=>{Uc();io();hn();bf=["jump","attack","special","shield","smash","grab"],Oc=class{constructor(t,e,i=5){this.b=t,this.f=e,this.level=Re(i,1,9);let s=this.level;this.react=Math.max(2,Math.round(26-s*2.7)),this.defendP=.04+s*.075,this.techP=s*.1,this.diP=s*.1,this.aggro=.35+s*.06,this.q={},this.last=En(),this.sx=0,this.sy=0,this.flickQ=null,this.timer=tn(10,30),this.busy=0,this.ledgeWait=-1,this.techTried=!1,this.jumpCd=0,this.aimAfter=null,this.diSet=!1,this.wander=0}press(t,e=1){this.q[t]={n:e,gap:this.last[t]?1:0}}flick(t,e,i=3){this.flickQ={x:t,y:e,n:i,gap:1}}holding(t){return!!this.q[t]}update(){let t=En();this.think();for(let s of bf){let r=this.q[s];if(r){if(r.gap>0){r.gap--;continue}t[s]=!0,--r.n<=0&&delete this.q[s]}}let e=this.sx,i=this.sy;if(this.flickQ){let s=this.flickQ;s.gap>0?(s.gap--,e=0,i=0):(e=s.x,i=s.y,--s.n<=0&&(this.flickQ=null))}return t.x=Re(e,-1,1),t.y=Re(i,-1,1),this.last=t,t}opponent(){let t=null,e=1e9;for(let i of this.b.fighters){if(i===this.f||i.state==="dead"||i.stocks<=0)continue;let s=Math.abs(i.x-this.f.x)+Math.abs(i.y-this.f.y);s<e&&(e=s,t=i)}return t}think(){let t=this.f;if(this.jumpCd>0&&this.jumpCd--,this.b.phase!=="fight"){this.sx=0,this.sy=0;return}let e=t.state,i=this.opponent();if(this.aimAfter){--this.aimAfter.n<=0&&(this.sx=this.aimAfter.x,this.sy=this.aimAfter.y,this.aimAfter=null);return}switch(e!=="hitstun"&&(this.diSet=!1),e!=="hitstun"&&e!=="tumble"&&(this.techTried=!1),e){case"dead":this.sx=0,this.sy=0;return;case"respawn":this.sx=0,this.sy=0,t.sf>50+tn(0,60)-this.level*5&&this.flick(0,-1,2);return;case"grabbed":case"dizzy":Ee(.1+this.level*.04)&&this.press(bf[tn(1,2)]),Ee(.15)&&this.flick(Ee(.5)?1:-1,0,1);return;case"grabbing":return this.doThrow(i);case"ledge":return this.doLedge();case"knockdown":if(t.sf>16&&Ee(.1+this.level*.02)){let r=Math.random();r<.35?this.press("attack"):r<.65?this.flick(-ie(t.x)||1,0,2):this.flick(0,1,2)}return;case"hitstun":case"tumble":return this.doHitstun()}if(this.ledgeWait=-1,e==="attack"||e==="airdodge"||e==="roll"||e==="spotdodge"||e==="ledgeclimb"){let r=t.def.id==="illumine"&&t.moveName==="upb"&&t.mf<=7;!t.grounded&&this.offstage()&&!r&&this.steerToLedge();return}if(!t.grounded&&this.offstage())return this.recover();if(e==="helpless"){this.offstage()?this.steerToLedge():this.sx=0;return}if(e==="shield"&&this.holding("shield")){i&&i.state!=="attack"&&Math.abs(i.x-t.x)<1.4&&Ee(.25+this.level*.05)&&(this.q={},this.press("attack"));return}if(this.busy>0){this.busy--,this.edgeSafety();return}if(--this.timer>0){this.edgeSafety();return}if(this.timer=this.react+tn(0,Math.max(1,10-this.level)),!i){this.sx=Math.abs(t.x)>1.5?-ie(t.x):0;return}if(i.state==="respawn"||i.invuln>30){this.neutralWait(i);return}if(this.defend(i)||t.fsReady&&this.tryFinal(i))return;let s=this.b.ball;if(!(s&&s.life>0&&!t.fsReady&&Math.abs(s.x)<ze.main.half+.5&&this.chaseBall(s,i))){if(this.opOffstage(i))return this.edgeguard(i);t.grounded?this.groundPlay(i):this.airPlay(i),this.edgeSafety()}}tryFinal(t){let e=this.f;if(t.state==="dead"||t.state==="respawn"||t.invuln>0)return!1;let i=t.x-e.x,s=t.y-e.y;return!(e.def.id==="illumine"?Math.hypot(i,s)<4.8:Math.abs(s)<1.8&&Math.abs(i)<14)||!Ee(.5)?!1:(this.sx=ie(i)*.6,this.sy=0,this.press("special"),this.busy=20,!0)}chaseBall(t,e){let i=this.f,s=t.x-i.x,r=t.y-(i.y+i.height*.5),a=Math.abs(e.x-i.x)+Math.abs(e.y-i.y);if(Math.abs(s)+Math.abs(r)>a+3&&!Ee(.3))return!1;let l=ie(s)||i.facing;return this.sy=0,Math.abs(s)<1.5&&Math.abs(r)<1.4?(i.grounded&&r>.7?(this.sx=0,this.sy=1,this.press("attack")):i.grounded?(this.sx=l,this.press("attack")):(this.sx=(l===i.facing,l),this.sy=r>.8?1:r<-.8?-1:0,this.press("attack")),this.after(()=>{this.sy=0},3),this.busy=12,!0):(this.sx=l,r>1.3&&(i.grounded||i.jumpsLeft>0&&i.vy<.02)&&this.jumpCd<=0&&(this.press("jump",i.grounded?8:1),this.jumpCd=16),this.edgeSafety(),this.busy=3,!0)}steerToLedge(){let t=this.f,e=ie(t.x)||1,r=(t.y<-.3?e*(ze.main.half+.45):e*(ze.main.half-1))-t.x;this.sx=Math.abs(r)<.15?0:Math.max(-1,Math.min(1,r*2)),this.sy=0}offstage(){let t=this.f;return Math.abs(t.x)>ze.main.half+.1||t.y<-.4}opOffstage(t){return!t.grounded&&(Math.abs(t.x)>ze.main.half+.4||t.y<-.8)||t.state==="ledge"}edgeSafety(){let t=this.f;t.grounded&&Math.abs(t.x)>ze.main.half-1.1&&ie(this.sx)===ie(t.x)&&(this.sx=0)}neutralWait(t){let e=this.f,i=t.x-e.x;this.sx=Math.abs(i)>4?ie(i)*.5:0,this.sy=0,e.grounded&&Ee(.02)&&this.press("jump")}defend(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y;for(let o of this.b.projectiles){if(o.owner===e)continue;let l=e.x-o.x;if(Math.abs(l)<3.2&&ie(o.vx)===ie(l)&&Math.abs(o.y-(e.y+.9))<1.2&&Ee(this.defendP))return e.def.id==="illumine"&&Ee(.5)?(this.sx=0,this.sy=-1,this.press("special"),this.aimAfter={n:3,x:0,y:0},!0):e.grounded&&Ee(.5)?(this.press("shield",16),!0):(this.press("jump"),!0)}if(t.state!=="attack"||!t.move||!t.move.hit||s>2.8||Math.abs(r)>2.2)return!1;let a=Math.min(...t.move.hit.map(o=>o.f[0]));if(t.mf>a+2||t.move.hit.every(o=>o.type==="grab")||!Ee(this.defendP))return!1;if(e.grounded){let o=Math.random();e.def.counterMove&&o<.15&&this.level>=4?(this.sx=0,this.sy=-1,this.press("special"),this.aimAfter={n:3,x:0,y:0}):o<.65?this.press("shield",tn(12,24)):o<.8?(this.press("shield",3),this.flick(0,-1,2)):o<.92?(this.press("shield",3),this.flick(-ie(i)||1,0,2)):this.press("jump")}else Ee(.5)&&this.press("shield");return this.busy=6,!0}groundPlay(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y,a=ie(i)||e.facing,o=e.def.id==="illumine",l=o?1.35:1.9,c=t.damage>(o?105:85)-this.level*2;if(this.sy=0,r>1.6&&s<1.4){Ee(.5)?(this.sx=0,this.sy=0,this.press("smash"),this.sy=1,this.busy=20):(this.sx=a*.4,this.press("jump",r>2.5?8:1),this.busy=4);return}if(r>2&&s<4&&Ee(.6)){this.sx=a,this.press("jump",10),this.busy=8;return}if(r<-1.5&&e.onPlatform()&&s<4){this.sx=0,this.flick(0,-1,2),this.busy=4;return}if(s<l&&Math.abs(r)<1.3){this.sx=0;let h=Math.random();if(t.state==="shield"&&h<.5){this.press("grab"),this.busy=20;return}if(c&&h<.55){this.sx=a,this.sy=0,this.press("smash",tn(1,12)),this.busy=30;return}if(h<.2){this.sx=0,this.press("attack"),this.after(()=>this.press("attack"),7),this.after(()=>this.press("attack"),14),this.busy=22;return}if(h<.45){this.sx=a,this.press("attack"),this.busy=18;return}if(h<.6){this.sx=0,this.sy=-1,this.press("attack"),this.busy=14,this.after(()=>{this.sy=0},3);return}if(h<.72){this.press("grab"),this.busy=20;return}if(h<.85&&r>.3){this.sy=1,this.sx=0,this.press("attack"),this.busy=16,this.after(()=>{this.sy=0},3);return}this.sx=a,this.press("smash",tn(1,20)),this.busy=30;return}if(o&&e.def.id!=="doros"&&s>5&&Ee(.18)&&Math.abs(r)<1.5){e.facing===a?this.sx=0:this.sx=a*.3,this.press("special",Ee(.4)?tn(10,50):1),this.busy=30;return}if(e.def.id==="doros"&&e.grounded&&Math.abs(r)<1){if((t.state==="dizzy"||t.state==="shieldbreak"||t.state==="knockdown"&&t.sf<20)&&s<2.2&&s>.8){this.sx=e.facing===a?0:a*.3,this.sy=0,this.press("special"),this.busy=110;return}if(s>2&&s<4.6&&Ee(.2)){this.sx=a,this.sy=0,this.press("special"),this.busy=45;return}if(s>1.6&&s<4&&Ee(.1)){this.sx=0,this.sy=-1,this.press("special"),this.busy=50,this.after(()=>{this.sy=0},3);return}}if(e.def.id==="dragon"&&s>1.2&&s<3.4&&Math.abs(r)<1&&Ee(.22)){this.sx=e.facing===a?0:a*.3,this.sy=0,this.press("special",tn(15,45)),this.busy=40;return}if(!o&&s>3.2&&s<6.5&&Ee(.08)&&Math.abs(r)<1){this.sx=a,this.press("special"),this.busy=40;return}if(s<4.2&&s>1.6&&Ee(.28*this.aggro)){this.sx=a,this.press("jump"),this.busy=3,this.after(()=>{this.sx=a,this.press("attack")},o?6:8);return}if(s<3.2&&s>1.8&&Ee(.12)){this.sx=a,this.after(()=>this.press("attack"),4),this.busy=20;return}this.sx=s>2.2?a:a*.5,Ee(.03*(10-this.level))&&(this.sx=0)}airPlay(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y,a=ie(i)||e.facing;if(this.sx=a,this.sy=0,s<1.9&&Math.abs(r)<1.8){r<-.8&&s<.9?(this.sx=0,this.sy=-1):r>.8&&s<1?(this.sx=0,this.sy=1):a!==e.facing?this.sx=a:s<.9?this.sx=0:this.sx=a,this.press("attack"),this.after(()=>{this.sy=0},3),this.busy=10;return}r>1.5&&e.jumpsLeft>0&&Ee(.2)&&this.jumpCd<=0&&(this.press("jump"),this.jumpCd=20),r<-1&&e.vy<0&&Ee(.3)&&this.flick(a*.3,-1,2)}edgeguard(t){let e=this.f,i=ie(t.x)||1,s=i*(ze.main.half-1.3);if(!e.grounded){this.sx=ie(s-e.x);return}if(Math.abs(e.x-s)>.5){this.sx=ie(s-e.x);return}if(this.sx=0,t.state==="ledgeclimb"||t.state==="getup"||t.state==="attack"&&t.moveName==="ledgeattack"){Ee(.3+this.level*.05)&&(this.press("shield",10),this.busy=10);return}let r=Math.abs(t.x-e.x),a=t.y-e.y;if(t.state!=="ledge"&&r<2.2&&a>-1.5&&a<1.5&&Ee(.3+this.level*.05)){this.sx=i,this.press("smash",tn(1,6)),this.busy=30;return}if(e.def.id==="illumine"&&t.state!=="ledge"&&r>3&&Ee(.1)){this.sx=e.facing===i?0:i*.3,this.press("special"),this.busy=30;return}this.level>=6&&t.state!=="ledge"&&t.y>-3&&r<4&&Ee(.05*(this.level-5))&&(this.sx=i,this.press("jump"),this.after(()=>{this.sx=i,this.press("attack")},8),this.busy=30)}recover(){let t=this.f,e=ie(t.x)||1,i=ze.ledges.find(o=>o.side===e);this.sx=-e,this.sy=0;let s=t.vy+t.ky,r=Math.abs(t.x)-ze.main.half;if(s>.04&&t.y>-1)return;let a=t.def.id==="illumine";if(t.jumpsLeft>0&&this.jumpCd<=0&&(t.y<.8||r>2.5)&&(t.y>-4.5||t.upBUsed||a)){this.press("jump"),this.jumpCd=a?16:22;return}if(!t.upBUsed&&(t.y<-1.4||r>3.2)){if(r>(a?5:4.2)&&!t.sideBUsed&&t.y>(a?-2.6:-4.2)&&t.y<1.5){this.sx=-e,this.sy=0,this.press("special");return}if(t.y<-.9||r>4)if(this.sx=-e*.3,this.sy=1,this.press("special"),a){let o=i.x-e*.2,l=i.y+.4,c=o-t.x,h=l-t.y,d=Math.hypot(c,h)||1;if(c/=d,h/=d,d>5.4){h=Math.max(h,.55);let u=Math.hypot(c,h);c/=u,h/=u}this.aimAfter={n:2,x:c,y:h}}else this.after(()=>{this.sx=-e*.8,this.sy=0},3)}}doLedge(){let t=this.f;if(this.sx=0,this.sy=0,this.ledgeWait<0&&(this.ledgeWait=tn(6,50-this.level*3)),--this.ledgeWait>0)return;let e=-t.ledge.side,i=Math.random();i<.4?this.flick(e,0,3):i<.65?this.press("jump"):i<.85?this.press("attack"):this.press("shield"),this.ledgeWait=60}doHitstun(){let t=this.f;if(t.pendingLaunch&&!this.diSet)if(this.diSet=!0,Ee(this.diP)){let s=-ie(t.x)||1;this.sx=s*.8,this.sy=.6}else this.sx=Ot(-1,1)*.3,this.sy=0;let e=t.vy+t.ky,i=Math.abs(t.x)<=ze.main.half?0:-99;if(!this.techTried&&(t.tumble||t.state==="tumble")&&e<0&&t.y-i<1.2+Math.abs(e)*4&&(this.techTried=!0,Ee(this.techP)&&(this.press("shield"),this.sx=Ee(.5)?Ot(-1,1):0)),t.state==="tumble"){if(this.offstage())return this.recover();Ee(.05)&&this.press("jump")}}doThrow(t){let e=this.f;if(e.sf<8+tn(0,10))return;let i=ie(e.x)||e.facing,s;t&&t.damage>90&&Math.abs(e.x)>4?s=i===e.facing?[e.facing,0]:[-e.facing,0]:Ee(.3)?s=[0,-1]:Ee(.3)?s=[0,1]:Ee(.3)?this.press("attack"):s=[e.facing,0],s&&this.flick(s[0],s[1],3)}after(t,e){this.b.later(e,t)}}});function Yi(n,t,e,i=12){let s=[];for(let a=0;a<=6;a++){let o=-Math.PI/2+a/6*(Math.PI/2);s.push(new bt(Math.max(1e-4,e*Math.cos(o)),-n+e*Math.sin(o)))}for(let a=1;a<=6;a++){let o=a/6*(Math.PI/2);s.push(new bt(Math.max(1e-4,t*Math.cos(o)),t*Math.sin(o)))}return new Hs(s,i)}function as(n){let t=new Set;n.traverse(e=>{e.geometry&&!t.has(e.geometry)&&(t.add(e.geometry),e.geometry.dispose());let i=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let s of i)t.has(s)||s.userData.shared||(t.add(s),s.dispose())})}var Hc,ao=Ye(()=>{Si();Hc=class{constructor({segments:t=16,radial:e=6,segLen:i=.12,radius:s=o=>.05,colors:r,flat:a=.55}){this.n=t+1,this.radial=e,this.segLen=i,this.radius=s,this.flat=a,this.p=[],this.o=[];for(let u=0;u<this.n;u++)this.p.push(new P),this.o.push(new P);let o=this.n*e;this.posArr=new Float32Array(o*3);let l=new Float32Array(o*3),c=new xt;for(let u=0;u<this.n;u++){let f=u/(this.n-1);r(f,c);for(let g=0;g<e;g++){let v=(u*e+g)*3;l[v]=c.r,l[v+1]=c.g,l[v+2]=c.b}}let h=[];for(let u=0;u<this.n-1;u++)for(let f=0;f<e;f++){let g=u*e+f,v=u*e+(f+1)%e,m=g+e,p=v+e;h.push(g,m,v,v,m,p)}let d=new ye;this.attr=new He(this.posArr,3),this.attr.setUsage(Za),d.setAttribute("position",this.attr),d.setAttribute("color",new He(l,3)),d.setIndex(h),this.mesh=new At(d,new Se({vertexColors:!0,side:ke})),this.mesh.frustumCulled=!1,this.inited=!1,this._t=new P,this._n=new P,this._b=new P}reset(t,e){for(let i=0;i<this.n;i++)this.p[i].copy(t).addScaledVector(e,i*this.segLen),this.o[i].copy(this.p[i]);this.inited=!0}simulate(t,e,i=.9){let{p:s,o:r,n:a}=this;this.inited||this.reset(t,new P(0,-1,0)),s[0].copy(t),r[0].copy(t);let o=new P;for(let l=1;l<a;l++){let c=s[l],h=(c.x-r[l].x)*i,d=(c.y-r[l].y)*i,u=(c.z-r[l].z)*i;r[l].copy(c),o.set(0,0,0),e(l,l/(a-1),o),c.x+=h+o.x,c.y+=d+o.y,c.z+=u+o.z}for(let l=0;l<3;l++)for(let c=1;c<a;c++){let h=s[c-1],d=s[c],u=d.x-h.x,f=d.y-h.y,g=d.z-h.z,v=Math.hypot(u,f,g)||1e-6,m=this.segLen/v;d.x=h.x+u*m,d.y=h.y+f*m,d.z=h.z+g*m}this.rebuild()}rebuild(){let{p:t,n:e,radial:i,posArr:s}=this,r=this._t,a=this._n,o=this._b;for(let l=0;l<e;l++){let c=t[Math.max(0,l-1)],h=t[Math.min(e-1,l+1)];r.subVectors(h,c).normalize(),a.set(0,0,1).cross(r),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),o.crossVectors(r,a).normalize();let d=l/(e-1),u=this.radius(d),f=(this.waveAmp||0)*d*Math.sin(d*(this.waveFreq||10)-(this.waveT||0)),g=(this.twist||0)*d,v=Math.cos(g),m=Math.sin(g);for(let p=0;p<i;p++){let b=p/i*Math.PI*2,T=Math.cos(b)*u,_=Math.sin(b)*u*this.flat,w=T*v-_*m+f,E=T*m+_*v,C=(l*i+p)*3;s[C]=t[l].x+a.x*w+o.x*E,s[C+1]=t[l].y+a.y*w+o.y*E,s[C+2]=t[l].z+a.z*w+o.z*E}}this.attr.needsUpdate=!0}}});function Ef(n=0){let t=Sf[n%Sf.length],e=new Ht,i={},s={},r=hi(t.skin,{rough:.78,metal:.04,env:.4,emissive:new xt(t.skin).multiplyScalar(.16)}),a=new xt(t.skin).multiplyScalar(2.2),o=hi(a,{rough:.88,metal:.02,env:.3,emissive:a.clone().multiplyScalar(.16)});o.map=qi(512,8,(L,O,ct)=>{L.fillStyle="#b4b4b4",L.fillRect(0,0,O,ct);let pt=7,Bt=()=>(pt=pt*16807%2147483647)/2147483647;for(let Zt=0;Zt<46;Zt++){let de=40+Bt()*(O-80),Ge=4+Bt()*16,qe=Bt()<.55,je=L.createLinearGradient(de-Ge,0,de+Ge,0),ti=qe?"255,255,255":"40,30,50";je.addColorStop(0,`rgba(${ti},0)`),je.addColorStop(.5,`rgba(${ti},${qe?.52:.36})`),je.addColorStop(1,`rgba(${ti},0)`),L.fillStyle=je,L.fillRect(de-Ge,0,Ge*2,ct)}},{repeat:[1,1]});let l=E0(t.glow),c=(L,O)=>new xt(L).lerp(new xt(16777215),O).getHex(),h=E0({...t.glow,c1:c(t.glow.c1,.55),c2:c(t.glow.c2,.3),c3:t.glow.c3}),d=Ei(t.mark,1.25),u=Ei(t.eye,1.7),f=Ei(t.curl,1.1),g=[r,o],v=g.map(L=>L.emissive.clone()),m=_e("body",e,0,zc,0);i.body=m;let p=_e("hips",m);i.hips=p;let b=_e("torso",p);i.torso=b,N(q(Ae([[.001,-.02],[.08,0],[.07,.1],[.05,.22],[.056,.3],[.08,.37],[.098,.42],[.088,.455],[.045,.49],[.023,.515],[.02,.6],[.001,.62]],20),r),b,0,0,0,0,0,0,[1,1,.78]);for(let L of[-1,1])N(q(new Dt(1,12,8),d),b,L*.038,.43,.064,0,L*.35,L*-.55,[.024,.012,.007]);for(let L of[-1,1])N(q(new Dt(1,10,8),d),b,L*.03,.365,.05,0,L*.4,0,[.008,.009,.005]);let T=_e("head",b,0,.55,0);i.head=T,T.scale.setScalar(.84);let _=[[5e-4,0],[.05,.003],[.09,.024],[.112,.058],[.118,.098],[.119,.135],[.116,.185],[.104,.23],[.076,.264],[5e-4,.28]],w=new xs(_.map(([L,O])=>new bt(L,O))).getPoints(40),E=.94,C=L=>{if(L<=0)return 5e-4;for(let O=1;O<w.length;O++){let ct=w[O-1],pt=w[O];if(L<=pt.y)return ct.x+(pt.x-ct.x)*((L-ct.y)/Math.max(1e-6,pt.y-ct.y))}return 5e-4};N(q(Ae(w.map(L=>[L.x,L.y]),40),r),T,0,0,0,0,0,0,[1,1,E]);let y=1.2,R=.27,D=qi(1024,512,(L,O,ct)=>{L.clearRect(0,0,O,ct);let pt=O/(2*y*.117),Bt=ct/R,Zt=new xt(t.eye),de=(je,ti,Tn=1)=>`rgba(${Math.round(Math.min(1,je.r*ti)*255)},${Math.round(Math.min(1,je.g*ti)*255)},${Math.round(Math.min(1,je.b*ti)*255)},${Tn})`,Ge=Zt.clone().lerp(new xt(16777215),.74),qe=Zt.clone().lerp(new xt(16179455),.62);for(let je of[-1,1]){let ti=je*.75,Tn=.104;L.save(),L.translate((ti+y)/(2*y)*O,(1-Tn/R)*ct),L.scale(pt*je,Bt),L.rotate(-.28);let os=L.createRadialGradient(0,0,.01,0,0,.06);os.addColorStop(0,"rgba(12,4,20,0.4)"),os.addColorStop(1,"rgba(12,4,20,0)"),L.fillStyle=os,L.beginPath(),L.arc(0,0,.06,0,Math.PI*2),L.fill();let wi=.047;L.beginPath(),L.moveTo(-wi,.014),L.bezierCurveTo(-wi*.7,-.016,wi*.45,-.05,wi*.9,-.026),L.bezierCurveTo(wi*1.35,0,wi*.5,.042,-wi,.014),L.closePath();let Ti=L.createLinearGradient(-wi*.6,.024,wi*.7,-.026);Ti.addColorStop(0,de(qe,.96)),Ti.addColorStop(.5,de(Ge,.97)),Ti.addColorStop(1,de(Ge,1.06)),L.fillStyle=Ti,L.fill(),L.lineWidth=.0012,L.strokeStyle=de(qe,.8,.6),L.stroke();let Zi=L.createRadialGradient(-wi*.25,-.012,0,-wi*.25,-.012,.012);Zi.addColorStop(0,"rgba(255,255,255,0.8)"),Zi.addColorStop(.5,"rgba(255,255,255,0.35)"),Zi.addColorStop(1,"rgba(255,255,255,0)"),L.save(),L.clip(),L.fillStyle=Zi,L.beginPath(),L.arc(-wi*.25,-.012,.012,0,Math.PI*2),L.fill(),L.restore(),L.restore()}});D.flipY=!1;let F=en(28,16,(L,O,ct)=>{let pt=-y+L*2*y,Bt=R*(1-O),Zt=C(Bt)*1.012+8e-4;ct.set(Math.sin(pt)*Zt,Bt,Math.cos(pt)*Zt*E)}),V=new Se({map:D,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});N(q(F,V),T,0,0,0),N(q(new Dt(1,10,6),f),b,0,.548,.026,0,0,0,[.014,.002,.005]);let Y=new Ht;Y.userData.keep=!0,N(Y,T,0,0,0);let k=(L,O,ct)=>{let pt=Math.max(0,Math.min(1,(ct-L)/(O-L)));return pt*pt*(3-2*pt)},W=.68,K=1.2,et=.115,gt=L=>L<W?0:Math.pow(Math.sin(Math.min(1,(L-W)/.13)*Math.PI/2),.3),rt=(L,O,ct)=>{let pt=O*K,Bt=Math.sin(pt)/Math.sin(K),Zt=gt(O)*Math.asin(Math.min(.95,et/Math.max(.14,.245*Bt))),de=Zt+L*(Math.PI*2-2*Zt),Ge=Math.pow(Math.sin(de),2),qe=Math.cos(de*6)*O*O*O,je=.435-(.33+.03*Ge)*(1-Math.cos(pt))/(1-Math.cos(K)),ti=(.245+.195*Ge+.34*Math.pow(Math.max(0,-Math.cos(de)),1.5))*Bt+.04*qe+.024*Math.cos(de*14)*Math.pow(O,1.3);ct.set(Math.sin(de)*ti,je+.035*(qe-O*O*O)-.07*Math.max(0,-Math.cos(de))*O*O,Math.cos(de)*ti*.95-.07)};N(q(new Dt(1,20,14),Ei(new xt(t.skin).multiplyScalar(.45))),Y,0,.21,-.08,0,0,0,[.19,.12,.14]);let ot=en(72,24,rt);{let L=ot.attributes.position,O=ot.attributes.normal;for(let ct=0;ct<=24;ct++){let pt=ct*73,Bt=pt+72;if(Math.abs(L.getX(pt)-L.getX(Bt))+Math.abs(L.getZ(pt)-L.getZ(Bt))>1e-4)continue;let Zt=new P(O.getX(pt)+O.getX(Bt),O.getY(pt)+O.getY(Bt),O.getZ(pt)+O.getZ(Bt)).normalize();O.setXYZ(pt,Zt.x,Zt.y,Zt.z),O.setXYZ(Bt,Zt.x,Zt.y,Zt.z)}}N(mi(ot,o,h),Y,0,0,0);let ut=(L,O,ct)=>{let pt=.2-.3*O,Bt=.19+.07*Math.sin(O*Math.PI/2)+.08*Math.pow(O,2.6),Zt=Math.asin(Math.min(.95,(et*1.03+Math.max(0,.03-pt)*.55)/Bt)),de=Zt+L*(Math.PI*2-2*Zt),Ge=Math.pow(Math.sin(de),2),qe=Math.cos(de*8),je=.2-(.3+.12*Ge)*O+.045*(qe-1)*O*O*O,ti=.19+.07*Math.sin(O*Math.PI/2)+(.08+.2*Ge+.36*Math.pow(Math.max(0,-Math.cos(de)),1.5))*Math.pow(O,2.2)+.04*qe*O*O+.012*Math.cos(de*16)*O;ct.set(Math.sin(de)*ti,je-.05*Math.max(0,-Math.cos(de))*O,Math.cos(de)*ti*.9-.05)};N(mi(en(64,16,ut),o,h),Y,0,0,0);let Ut=Ei(15260872,1),Nt=(L,O,ct=!1)=>N(q(new is(new yn(L,ct),L.length*2,O,5,ct),Ut),Y,0,0,0),re=new P,ne=(L,O,ct,pt=1.012)=>(L(O,ct,re),new P(re.x*pt,re.y,re.z*pt+.002));{let L=[];for(let pt=0;pt<=24;pt++)L.push(ne(rt,1,1-(1-W)*pt/24));for(let pt=1;pt<=24;pt++)L.push(ne(rt,0,W+(1-W)*pt/24));Nt(L,.0026);for(let pt of[0,1]){let Bt=[];for(let Zt=0;Zt<=16;Zt++)Bt.push(ne(ut,pt,.4+.6*Zt/16));Nt(Bt,.0026)}let O=[],ct=[];for(let pt=0;pt<=96;pt++)O.push(ne(rt,.06+.88*pt/96,1,1.003)),ct.push(ne(ut,pt/96,1,1.003));Nt(O,.0025),Nt(ct,.0025)}{let L=[];for(let Pe=0;Pe<=160;Pe++)for(let Ie=0;Ie<=50;Ie++)rt(Pe/160,Ie/50,re),re.z>-.05&&L.push(re.x,re.y,re.z);let O=(Pe,Ie)=>{let Ri=C(Ie)*E*Math.sqrt(Math.max(0,1-Math.pow(Pe/Math.max(.001,C(Ie)),2)));for(let Pi=0;Pi<L.length;Pi+=3)Math.abs(L[Pi]-Pe)<.014&&Math.abs(L[Pi+1]-Ie)<.014&&L[Pi+2]>Ri&&(Ri=L[Pi+2]);return Ri},ct=[[0,.272],[-.06,.272],[-.12,.258],[-.175,.228],[-.212,.19],[-.22,.155],[-.205,.125],[-.178,.113],[-.152,.126],[-.145,.15],[-.156,.17],[-.172,.166]].map(([Pe,Ie])=>[Pe*.86,.262+(Ie-.272)*.97]),pt=ct.map(([Pe,Ie])=>O(Pe,Ie));for(let Pe=0;Pe<3;Pe++)for(let Ie=0;Ie<pt.length;Ie++)pt[Ie]=Math.max(pt[Ie],((pt[Ie-1]??pt[Ie])+(pt[Ie+1]??pt[Ie]))/2);let Bt=ct.map(([Pe,Ie],Ri)=>new P(Pe,Ie,pt[Ri]+.012)),Zt=new yn(Bt),de=80,Ge=8,qe=Zt.computeFrenetFrames(de,!1),je=[],ti=[],Tn=[],os=new xt(t.skin).lerp(new xt(t.glow.c2),.45).lerp(new xt(16777215),.08),wi=new xt(t.curl),Ti=new xt,Zi=new P;for(let Pe=0;Pe<=de;Pe++){let Ie=Pe/de;Zt.getPointAt(Ie,Zi);let Ri=.0065+.0055*Math.sin(Math.min(1,Ie*4)*Math.PI/2)-.0055*Ie;Ti.copy(os).lerp(wi,k(.02,.45,Ie));for(let Pi=0;Pi<=Ge;Pi++){let Wn=Pi/Ge*Math.PI*2,Ps=Math.cos(Wn)*Ri,$r=Math.sin(Wn)*Ri*.7;je.push(Zi.x+qe.normals[Pe].x*Ps+qe.binormals[Pe].x*$r,Zi.y+qe.normals[Pe].y*Ps+qe.binormals[Pe].y*$r,Zi.z+qe.normals[Pe].z*Ps+qe.binormals[Pe].z*$r),ti.push(Ti.r,Ti.g,Ti.b)}}for(let Pe=0;Pe<de;Pe++)for(let Ie=0;Ie<Ge;Ie++){let Ri=Pe*(Ge+1)+Ie,Pi=Ri+1,Wn=Ri+Ge+1,Ps=Wn+1;Tn.push(Ri,Wn,Pi,Pi,Wn,Ps)}let Ls=new ye;Ls.setAttribute("position",new le(je,3)),Ls.setAttribute("color",new le(ti,3)),Ls.setIndex(Tn),N(q(Ls,new Se({vertexColors:!0,side:ke})),Y,0,0,0);let js=Bt[Bt.length-1];N(q(new Dt(.02,12,10),f),Y,js.x,js.y,js.z+.002)}let ae=[[.001,0],[.03,.012],[.052,.07],[.062,.13],[.056,.19],[.034,.25],[.012,.295],[.001,.315]],st=new xs(ae.map(([L,O])=>new bt(L,O))).getPoints(24),ht=Ae(st.map(L=>[L.x,L.y]),18),Tt=L=>{for(let O=1;O<st.length;O++)if(L<=st[O].y)return st[O].x;return .001},jt=t.ear.map(L=>new xt(L)),kt=new xt(t.skin).lerp(new xt(t.ear[0]),.12),Yt=new Float32Array(ht.attributes.position.count*3),ue=new xt;for(let L=0;L<ht.attributes.position.count;L++){let O=ht.attributes.position.getY(L)/.315;O<.3?ue.copy(kt).lerp(jt[0],k(.2,.3,O)):O<.58?ue.copy(jt[0]).lerp(jt[1],(O-.3)/.28):ue.copy(jt[1]).lerp(jt[2],Math.min(1,(O-.58)/.3)),Yt[L*3]=ue.r,Yt[L*3+1]=ue.g,Yt[L*3+2]=ue.b}ht.setAttribute("color",new He(Yt,3));let U=new Le({vertexColors:!0,roughness:.6,metalness:0,emissive:2758688}),j=Ei(t.dots,1.1),lt=.55,nt=.06,Mt=.92;for(let L of[-1,1]){let O=L<0?"earR":"earL",ct=_e(O,T,L*.066,.325,.085);s[O]=[.06,0,L*-.37],ct.rotation.set(...s[O]),N(q(new Be(.014,.026,.08,12),r),ct,0,.025,0);let pt=new Ht;N(pt,ct,0,nt,0,0,0,0,Mt),N(q(ht,U),pt,0,0,0,0,0,0,[1.1,1,lt]),[[-.5,.5],[-1,0,1],[-1.5,-.5,.5,1.5]].forEach((Zt,de)=>{for(let Ge of Zt){let qe=Ge*.025,je=.018+de*.03+Math.abs(Ge)*.003,ti=Tt(je);if(Math.abs(qe)>ti*.86)continue;let Tn=lt*Math.sqrt(ti*ti-qe*qe)+.001;N(q(new Dt(1,8,6),j),pt,qe,je,Tn,0,0,Ge*-.12,[.009,.013,.004])}})}let Lt=en(40,12,(L,O,ct)=>{let pt=L*Math.PI*2,Bt=.05+.205*Math.pow(Math.sin(O*2.1),.85)+.035*Math.cos(pt*5)*O*O,Zt=.03-.5*O+.045*Math.cos(pt*5)*O*O*O;ct.set(Math.sin(pt)*Bt,Zt,Math.cos(pt)*Bt)}),zt={},I=[];for(let L of[-1,1]){let O=L<0,ct=_e(O?"armR":"armL",b,L*.092,.445,0);i[O?"armR":"armL"]=ct,N(q(Yi(.22,.026,.021,10),r),ct,0,0,0);let pt=_e(O?"foreR":"foreL",ct,0,-.22,0);i[O?"foreR":"foreL"]=pt,N(q(Yi(.18,.021,.019,10),r),pt,0,0,0),N(q(new Be(.023,.054,.17,14,1,!0),o),pt,0,-.085,0);let Bt=new Ht;Bt.userData.keep=!0,N(Bt,pt,0,-.16,0,.3,0,L*.5),N(mi(Lt,o,l),Bt,0,0,0),N(q(new kn(.06,16),Ei(t.glow.c2,.9,{side:ke})),Bt,0,-.06,0,Math.PI/2,0,0),I.push(Bt);let Zt=new se;Zt.position.set(0,-.05,0),pt.add(Zt);let de=new se;de.position.set(0,-.6,0),pt.add(de),zt[O?"handR":"handL"]=[Zt,de]}let J=new Ht;J.userData.keep=!0,p.add(J);let A=(L,O,ct)=>{let pt=L*Math.PI*2,Bt=.055+.35*Math.pow(Math.sin(O*Math.PI/2),.72);Bt*=1+.1*Math.cos(pt*5)*O*O;let Zt=.3-.36*Math.pow(O,1.1)+.055*Math.cos(pt*5)*O*O;ct.set(Math.sin(pt)*Bt,Zt,Math.cos(pt)*Bt*.9)};N(mi(en(60,12,A),o,l),J,0,0,0);let dt=[],vt=new P;for(let L=-36;L<=36;L++)A((L+120)%120/120,.985,vt),dt.push(vt.clone().multiplyScalar(1.004));N(q(new is(new yn(dt,!1),120,.003,5,!1),Ut),J,0,0,0);for(let L of[-1,1]){let O=L<0?.93:.07;A(O,.5,vt);let ct=O*Math.PI*2;N(q(new Dt(1,12,8),d),J,vt.x*1.02,vt.y+.01,vt.z*1.02,-.9,ct,0,[.03,.017,.008])}let S=1.05,x=en(64,18,(L,O,ct)=>{let pt=S+L*(Math.PI*2-2*S),Bt=Math.min(L,1-L)*(Math.PI*2-2*S),Zt=1-k(0,1.1,Bt),de=.12+.39*Math.pow(Math.sin(O*2.05),.9)+.03*Math.cos(pt*7)*O*O,Ge=.14-(.82-.34*Zt)*O+.045*Math.cos(pt*7)*O*O*O;ct.set(Math.sin(pt)*de*1.02,Ge,Math.cos(pt)*de*.9-.03-.02*O)});N(mi(x,o,l),J,0,0,0);for(let L of[-1,1]){let O=L<0,ct=_e(O?"legR":"legL",p,L*.08,.02,0);i[O?"legR":"legL"]=ct,N(q(Ae([[.001,.06],[.05,.04],[.074,-.02],[.079,-.1],[.068,-.24],[.045,-.37],[.034,-.44],[.001,-.47]],16),r),ct,0,0,0,0,0,0,[1.3,1,1.2]);let pt=_e(O?"shinR":"shinL",ct,0,-.44,0);i[O?"shinR":"shinL"]=pt,N(q(Ae([[.001,.03],[.033,.01],[.038,-.1],[.032,-.22],[.02,-.34],[.012,-.42],[.001,-.48]],14),r),pt,0,0,0,0,0,0,[1.4,1,1.5]);let Bt=new se;pt.add(Bt);let Zt=new se;Zt.position.set(0,-.48,.02),pt.add(Zt),zt[O?"footR":"footL"]=[Bt,Zt]}let B=new Ht;B.userData.keep=!0,B.visible=!1,i.foreL.add(B),B.position.set(0,-.36,0);let Z=hi(656656,{rough:.2,metal:.6,env:1.2,emissive:new xt(1705520)}),z=Ei(t.glow.c2,1.4),_t=[];for(let L=0;L<=16;L++){let O=L/16*2-1,ct=O*.52,pt=-.13*(1-O*O)+.05*Math.pow(Math.abs(O),6);_t.push(new P(0,pt,ct))}B.add(new At(new is(new yn(_t),40,.02,6),Z)),B.add(N(q(new Be(.03,.03,.14,8),Z),new Ht,0,-.13,0,Math.PI/2,0,0));for(let L of[-.52,.52]){let O=q(new ce(.028,.12,6),z);O.position.set(0,.05,L+Math.sign(L)*.05),O.rotation.x=Math.sign(L)*Math.PI/2,B.add(O)}B.add(N(q(new Li(.035,0),z),new Ht,0,-.15,0));let $=new Float32Array(9),X=new ye;X.setAttribute("position",new He($,3));let it=new ba(X,new Cr({color:new xt(t.glow.line).multiplyScalar(1.3)}));it.frustumCulled=!1,B.add(it);let yt=new Ht;yt.add(N(q(new Be(.012,.012,.6,5),Ei(1312796)),new Ht,0,-.3,0)),yt.add(N(q(new ce(.04,.12,6),z),new Ht,0,-.62,0,Math.PI,0,0)),B.add(yt);let Rt=L=>{let O=.05+L*.32;$.set([0,.05,-.52,0,O,0,0,.05,.52]),X.attributes.position.needsUpdate=!0,yt.position.y=O};Rt(0),Vn(e);let Et=t.wisp.map(L=>new xt(L)),wt=(L,O)=>{L<.14?O.copy(Et[0]):L<.3?O.copy(Et[0]).lerp(Et[1],(L-.14)/.16):L<.5?O.copy(Et[1]):L<.64?O.copy(Et[1]).lerp(Et[2],(L-.5)/.14):O.copy(Et[2]).lerp(Et[3],Math.min(1,(L-.64)/.12)),O.multiplyScalar(1.05)},Pt=new Ht,te=[-1,1].map(L=>{let O=new Hc({segments:24,radial:6,segLen:.06,flat:.3,colors:wt,radius:pt=>.008+.048*k(.14,.5,pt)*(pt<.92?1:1-(pt-.92)/.08*.6)});O.waveAmp=.09,O.waveFreq=16,O.twist=2.2,O.mesh.material=new Se({vertexColors:!0,side:ke}),Pt.add(O.mesh);let ct=new se;return ct.position.set(L*.3,.1,-.05),T.add(ct),{tube:O,anchor:ct,s:L}}),oe=new se;oe.position.set(0,.25,.55),m.add(oe);let H=Rs(t.shadow,t.ring,1.25),Ft={j:i,base:s,hipY:zc,flare:0},ft=new P,It=new P,Gt=0;return{root:e,rig:Ft,trails:zt,worldObjects:[Pt],orbPoint:oe,shadow:H,height:1.75,headY:2.2,trailColor:n?7334143:16743136,update(L,O){Gt+=L,l.uniforms.time.value=Gt,h.uniforms.time.value=Gt;let ct=Ft.flare;J.scale.set(1+ct*.3,1-ct*.18,1+ct*.3);let pt=e.rotation.y,Bt=O.vx*Math.sin(pt);J.rotation.x+=(Math.max(-.35,Math.min(.35,-Bt*1.6))+Math.max(-.15,Math.min(.2,O.vy*.8))-J.rotation.x)*.15,Y.rotation.x+=(Math.max(-.07,Math.min(.07,-Bt*.4))-Y.rotation.x)*.12;for(let Zt of I)Zt.scale.setScalar(1+ct*.2);e.updateMatrixWorld(!0);for(let Zt of te)Zt.anchor.getWorldPosition(ft),Zt.tube.waveT=Gt*5+Zt.s,(!Zt.tube.inited||O.snap)&&(It.set(Zt.s*.7,-.7,-.1).applyQuaternion(e.quaternion).normalize(),Zt.tube.reset(ft,It)),It.set(Zt.s,-.25,-.2).applyQuaternion(e.quaternion).normalize(),Zt.tube.simulate(ft,(de,Ge,qe)=>{let je=.0021*(1-Ge*.2);qe.x=It.x*je,qe.y=-.0027+Math.sin(Gt*2.3-Ge*6)*9e-4+Ge*.0016,qe.z=It.z*je},.84);Pt.visible=e.visible},setBow(L,O=0,ct=!0){B.visible=L,yt.visible=L&&ct,Rt(O)},setFlash(L,O){g.forEach((ct,pt)=>{ct.emissive.copy(v[pt]),O>0&&ct.emissive.lerp(L,O*.8)}),l.uniforms.flash.value.set(L.r,L.g,L.b,O*.6),h.uniforms.flash.value.copy(l.uniforms.flash.value)},dispose(){Pt.parent&&Pt.parent.remove(Pt),as(e),as(Pt)}}}var Sf,zc,wf=Ye(()=>{Si();Js();ao();Sf=[{skin:2890806,eye:16754402,mark:16746188,curl:16770802,glow:{c1:11575551,c2:10910975,c3:14965992,line:15255807,bright:1,scale:8},ear:[15235228,16765108,16774360],dots:16757988,wisp:[10112511,16744358,16760992,16773836],shadow:1311775,ring:10112511},{skin:1189426,eye:9434111,mark:6284543,curl:14482431,glow:{c1:1731839,c2:2283728,c3:9075711,line:14745593},ear:[6281471,12124144,16056310],dots:4507903,wisp:[3832831,4187856,12124128,16777215],shadow:200728,ring:4184319}],zc=.9});function As(n){let t=n.idle,e=n.hipY;return{...{idle:s=>{let r=Math.sin(s*.055);return{...t,by:(t.by||0)+r*.018*(n.bob||1),torso:I0(t.torso,[r*.03,0,0]),armR:I0(t.armR,[0,0,-r*.04]),armL:I0(t.armL,[0,0,r*.04])}},walk:s=>{let r=Math.sin(s),a=Math.cos(s);return{legR:[-.55*r,0,-.04],legL:[.55*r,0,.04],shinR:[.1+.7*Math.max(0,a),0,0],shinL:[.1+.7*Math.max(0,-a),0,0],armR:[.4*r,0,-.18],armL:[-.4*r,0,.18],foreR:[-.3,0,0],foreL:[-.3,0,0],torso:[.08,.12*r,0],by:-.03+.03*Math.abs(a),...n.walkExtra||{}}},run:s=>{let r=Math.sin(s),a=Math.cos(s);return{legR:[-.95*r-.2,0,-.04],legL:[.95*r-.2,0,.04],shinR:[.3+1.3*Math.max(0,a),0,0],shinL:[.3+1.3*Math.max(0,-a),0,0],armR:[.8*r,0,-.25],armL:[-.8*r,0,.25],foreR:[-1.2,0,0],foreL:[-1.2,0,0],torso:[.35,.2*r,0],head:[-.2,0,0],by:-.06+.06*Math.abs(a),...n.runExtra?n.runExtra(s):{}}},skid:()=>({torso:[-.3,0,0],legR:[-.8,0,-.1],shinR:[.2,0,0],legL:[.3,0,.1],shinL:[1,0,0],armR:[-.5,0,-.8],armL:[-.5,0,.8],by:-.14}),crouch:s=>({by:-e*.4,torso:[.4,0,0],head:[-.25,0,0],legR:[-1.25,0,-.18],shinR:[2.1,0,0],legL:[-1.25,0,.18],shinL:[2.1,0,0],armR:[-.4,0,-.35],armL:[-.4,0,.35],foreR:[-.6,0,0],foreL:[-.6,0,0]}),squat:()=>({by:-e*.22,torso:[.3,0,0],legR:[-.8,0,-.1],shinR:[1.3,0,0],legL:[-.8,0,.1],shinL:[1.3,0,0],armR:[.3,0,-.4],armL:[.3,0,.4]}),jump:()=>({legR:[-.9,0,-.05],shinR:[1.3,0,0],legL:[.15,0,.05],shinL:[.6,0,0],armR:[-.6,0,-.5],armL:[-.4,0,.6],torso:[-.1,0,0],head:[-.15,0,0]}),fall:s=>({legR:[-.35,0,-.1],shinR:[.5,0,0],legL:[.15,0,.1],shinL:[.35,0,0],armR:[-.3,0,-1+Math.sin(s*.2)*.1],armL:[-.3,0,1-Math.sin(s*.2)*.1],torso:[.05,0,0]}),djump:s=>({body:[Math.min(1,s/20)*Math.PI*2,0,0],legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[-1.4,0,.1],shinL:[2,0,0],armR:[-1.2,0,-.4],armL:[-1.2,0,.4],foreR:[-1,0,0],foreL:[-1,0,0]}),helpless:s=>({body:[.15,0,Math.sin(s*.15)*.15],armR:[-2.6,0,-.5+Math.sin(s*.3)*.3],armL:[-2.6,0,.5-Math.sin(s*.3)*.3],legR:[-.2,0,-.1],shinR:[.6,0,0],legL:[.2,0,.1],shinL:[.3,0,0],head:[-.3,0,0]}),hurt:()=>({torso:[-.45,0,0],head:[-.5,0,0],armR:[-.9,0,-1],armL:[-.9,0,1],legR:[-.5,0,-.1],shinR:[.9,0,0],legL:[.3,0,.1],shinL:[.4,0,0]}),tumble:s=>({body:[-s*.32,0,.3],torso:[-.3,0,0],armR:[-1,0,-1.3],armL:[-1,0,1.3],legR:[-.6,0,-.3],shinR:[.8,0,0],legL:[.3,0,.3],shinL:[.8,0,0]}),tumbleIdle:s=>({body:[-.35,0,Math.sin(s*.1)*.2],torso:[-.2,0,0],armR:[-1.4,0,-1],armL:[-1.4,0,1],legR:[-.4,0,-.2],shinR:[.9,0,0],legL:[.2,0,.2],shinL:[.6,0,0]}),shield:()=>({...t,by:(t.by||0)-.12,torso:[.3,0,0],armR:[-1.1,0,.3],foreR:[-1.3,0,0],armL:[-1.1,0,-.3],foreL:[-1.3,0,0],...n.shieldExtra||{}}),roll:(s,r)=>{let a=Math.min(1,Math.max(0,(s-2)/22));return{body:[(r?1:-1)*a*Math.PI*2,0,0],by:-e*.35*Math.sin(a*Math.PI),legR:[-1.5,0,-.1],shinR:[2.2,0,0],legL:[-1.5,0,.1],shinL:[2.2,0,0],armR:[-1.4,0,.2],armL:[-1.4,0,-.2],foreR:[-1.3,0,0],foreL:[-1.3,0,0],torso:[.8,0,0]}},spotdodge:s=>({by:-.25,torso:[.2,0,.3],head:[.3,0,0],legR:[-.9,0,-.2],shinR:[1.5,0,0],legL:[-.4,0,.2],shinL:[1.2,0,0],armR:[.4,0,-.9],armL:[.4,0,.9]}),airdodge:s=>({body:[.3,Math.min(1,s/18)*Math.PI*2,0],legR:[-1.3,0,-.1],shinR:[1.9,0,0],legL:[-1.3,0,.1],shinL:[1.9,0,0],armR:[-1.3,0,.3],armL:[-1.3,0,-.3],foreR:[-1.4,0,0],foreL:[-1.4,0,0]}),ledge:s=>({bz:.12,armR:[-2.95,0,-.2],armL:[-2.95,0,.2],foreR:[0,0,0],foreL:[0,0,0],torso:[.1,0,0],head:[-.4,0,0],legR:[-.2+Math.sin(s*.08)*.1,0,-.1],shinR:[.4,0,0],legL:[.1-Math.sin(s*.08)*.1,0,.1],shinL:[.3,0,0]}),climb:s=>({by:-e*.25,torso:[.6,0,0],legR:[-1.5,0,-.1],shinR:[1.8,0,0],legL:[-.4,0,.1],shinL:[1.5,0,0],armR:[-1.6,0,-.2],armL:[-1.6,0,.2]}),knockdown:()=>({body:[-1.5,0,0],by:-e+.18,armR:[-2.4,0,-.5],armL:[-2.4,0,.5],legR:[-.1,0,-.1],legL:[.1,0,.1],shinR:[.3,0,0],head:[.3,0,0]}),getup:s=>({by:-e*.3,torso:[.5,0,0],legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[.2,0,.1],shinL:[1.9,0,0],armR:[-.4,0,-.5],armL:[-.4,0,.5]}),hold:()=>({...t,armR:[-1.35,0,.05],foreR:[-.3,0,0],armL:[-1.35,0,-.05],foreL:[-.3,0,0],torso:[.15,0,0],...n.holdExtra||{}}),grabbed:s=>({torso:[-.3,0,Math.sin(s*.5)*.1],head:[-.3,0,0],armR:[-.7,0,-.9+Math.sin(s*.7)*.3],armL:[-.7,0,.9-Math.sin(s*.7)*.3],legR:[-.4,0,-.1],shinR:[.8,0,0],legL:[.2,0,.1],shinL:[.5,0,0]}),dizzy:s=>({torso:[.25,0,Math.sin(s*.08)*.25],head:[.35,Math.sin(s*.12)*.4,0],armR:[.2,0,-.15],armL:[.2,0,.15],legR:[-.1,0,-.1],shinR:[.4,0,0],legL:[.1,0,.1],shinL:[.4,0,0],by:-.08}),victory:s=>t},...n.override||{}}}var I0,oo=Ye(()=>{I0=(n=[0,0,0],t=[0,0,0])=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]]});function Tf(n=16766048,t=16777215){let e=new Ht,i=new Se({color:new xt(n).multiplyScalar(1.6),transparent:!0,opacity:.9,blending:Xe,depthWrite:!1,side:ke}),s=new At(new ii(1.9,.32,10,40,Math.PI),i);s.rotation.z=-Math.PI/2;let r=new At(new ii(1.9,.12,8,40,Math.PI),new Se({color:t,transparent:!0,blending:Xe,depthWrite:!1}));r.rotation.z=-Math.PI/2;let a=new Mi(new xi({map:Xi(),color:n,transparent:!0,opacity:.8,blending:Xe,depthWrite:!1}));return a.scale.set(6,6,1),e.add(a,s,r),e}function Rf(n){return{illumine:"\u30A8\u30BF\u30FC\u30CA\u30EB\u30FB\u30A8\u30AF\u30EA\u30D7\u30B9",dullahan:"\u30BD\u30FC\u30E9\u30FC\u30FB\u30B8\u30E3\u30C3\u30B8\u30E1\u30F3\u30C8",dragon:"\u30C9\u30E9\u30B4\u30F3\u30FB\u30A4\u30F3\u30D5\u30A7\u30EB\u30CE",doros:"\u9B54\u7363\u30C9\u30ED\u30B9"}[n.id]||"\u6700\u5F8C\u306E\u5207\u308A\u3075\u3060"}var Gc,Vc,D0=Ye(()=>{Si();Qa();hn();rs();Gc=class{constructor(t){this.b=t,this.x=Ot(-5,5),this.y=15,this.vx=0,this.vy=-.05,this.r=.55,this.hp=40,this.life=1320,this.t=0,this.flash=0,this.target={x:Ot(-7,7),y:Ot(2,7)},this.dead=!1;let e=new Ht;this.mat=new ai({uniforms:{time:{value:0},flash:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
        }`}),this.core=new At(new Dt(this.r,28,20),this.mat);let i=new Mi(new xi({map:Xi(),color:16771488,transparent:!0,opacity:.8,blending:Xe,depthWrite:!1}));i.scale.setScalar(3.2);let s=new Mi(new xi({map:Tc(),color:16777215,transparent:!0,opacity:.7,blending:Xe,depthWrite:!1}));s.scale.setScalar(2.4),this.star=s,e.add(i,s,this.core),this.mesh=e,t.scene.add(e),this.px=this.x,this.py=this.y}update(){if(this.t++,this.px=this.x,this.py=this.y,this.life--,this.flash>0&&(this.flash-=.1),this.life<0)this.vy=Math.min(.2,this.vy+.008),this.vx*=.97,this.y>20&&this.remove();else{(this.t%100===0||Math.hypot(this.target.x-this.x,this.target.y-this.y)<.6)&&(this.target={x:Ot(-8,8),y:Ot(1.8,8.5)});let t=Re(this.target.x-this.x,-1,1)*.003,e=Re(this.target.y-this.y,-1,1)*.003;this.vx=Re((this.vx+t)*.985,-.08,.08),this.vy=Re((this.vy+e)*.985,-.08,.08)}this.x+=this.vx,this.y+=this.vy+Math.sin(this.t*.07)*.01,this.x=Re(this.x,-14,14),this.t%3===0&&this.b.effects.sparkle(this.x,this.y,[16740464,16769136,7405456,7385343,13660415][this.t%5],1,.6)}hit(t,e){return this.hp-=t,this.flash=1,this.vx=e*.12,this.vy=.05,this.target={x:this.x+e*3,y:Re(this.y+1,2,8)},this.b.effects.hitSpark(this.x,this.y,16769136,.4,e),mt.hit(.3),mt.star(),this.hp<=0}render(t){let e=this.px+(this.x-this.px)*t,i=this.py+(this.y-this.py)*t;this.mesh.position.set(e,i,.4),this.mat.uniforms.time.value=this.t/60,this.mat.uniforms.flash.value=Math.max(0,this.flash),this.core.rotation.y=this.t*.03,this.star.material.rotation=this.t*.02}remove(){this.dead||(this.dead=!0,this.b.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}},Vc=class{constructor(t,e,i){this.b=t;let s=new ai({transparent:!0,depthWrite:!1,side:ke,uniforms:{time:{value:0},fade:{value:1}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }",fragmentShader:`
        varying vec3 vN; varying vec3 vV; uniform float time; uniform float fade;
        void main(){
          float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
          vec3 core = vec3(0.04,0.0,0.09);
          vec3 rim = mix(vec3(0.6,0.2,1.0), vec3(1.0,0.4,0.85), 0.5+0.5*sin(time*3.0));
          vec3 c = mix(core, rim*1.6, pow(f, 2.2));
          gl_FragColor = vec4(c, (0.72 + 0.28*f) * fade);
          #include <colorspace_fragment>
        }`});this.mat=s,this.mesh=new At(new Dt(1,40,28),s),this.mesh.position.set(e,i,0),this.mesh.renderOrder=8,this.mesh.scale.setScalar(.1),t.scene.add(this.mesh),this.t=0}setRadius(t){this.mesh.scale.setScalar(t)}update(){this.t++,this.mat.uniforms.time.value=this.t/60}remove(){this.b.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mat.dispose()}}});var Ce,pe,nn,lo,hv,U0,Af=Ye(()=>{wf();oo();hn();rs();D0();Ce=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),pe={armR:[.18,0,-.74],foreR:[-.1,0,.1],armL:[.18,0,.74],foreL:[-.1,0,-.1],legR:[.02,0,-.04],legL:[-.6,0,-.1],shinL:[1.1,0,-.2],torso:[.12,0,.03],head:[-.03,0,.1],by:.02},nn={legR:[-.35,0,-.1],shinR:[.6,0,0],legL:[.15,0,.1],shinL:[.4,0,0],armR:[-.3,0,-.9],armL:[-.3,0,.9],torso:[.05,0,0]},lo={legR:[-1.2,0,-.1],shinR:[1.8,0,0],legL:[-1,0,.1],shinL:[1.6,0,0]},hv={jab1:{total:18,next:"jab2",nextWin:[5,17],trail:"handR",trailF:[2,6],sfx:[2,"whoosh",.2],hit:[Ce(3,4,.75,1.1,.42,2.5,75,6,22)],anim:[[0,pe],[2,{...pe,armR:[-.6,0,-.6],foreR:[-1.4,0,0],torso:[.1,-.3,0]}],[4,{...pe,armR:[-1.55,0,-.1],foreR:[-.05,0,0],torso:[.15,.35,0]}],[12,{...pe,armR:[-1.4,0,-.1],foreR:[-.2,0,0],torso:[.12,.3,0]}],[18,pe]]},jab2:{total:18,next:"jab3",nextWin:[5,17],trail:"handL",trailF:[2,6],sfx:[2,"whoosh",.2],hit:[Ce(3,4,.8,1,.42,2.5,75,6,22)],anim:[[0,{...pe,armR:[-1.4,0,-.1],torso:[.12,.3,0]}],[4,{...pe,armL:[-1.55,0,.1],foreL:[-.05,0,0],torso:[.15,-.35,0]}],[12,{...pe,armL:[-1.4,0,.1],torso:[.12,-.3,0]}],[18,pe]]},jab3:{total:30,trail:"handR",trailF:[3,9],sfx:[4,"whoosh",.5],hit:[Ce(5,7,.95,1.05,.62,4.5,40,45,70)],onFrame(n,t){t===5&&n.battle.effects.ring(n.x+n.facing*1,n.y+1.05,13660415,1.6)},anim:[[0,pe],[3,{...pe,armR:[-.5,0,-.4],armL:[-.5,0,.4],foreR:[-1.5,0,0],foreL:[-1.5,0,0],torso:[-.1,0,0],flare:.2}],[6,{...pe,armR:[-1.5,0,.15],armL:[-1.5,0,-.15],foreR:[0,0,0],foreL:[0,0,0],torso:[.25,0,0],bz:.12,flare:.5}],[18,{...pe,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.2,0,0]}],[30,pe]]},ftilt:{total:27,trail:"footR",trailF:[5,10],sfx:[5,"whoosh",.4],hit:[Ce(6,8,1.05,.9,.48,8,36,28,100),Ce(6,8,.5,.9,.4,8,36,28,100)],anim:[[0,pe],[4,{...pe,legR:[.4,0,-.1],shinR:[1.2,0,0],torso:[.1,-.3,0],armR:[.2,0,-.8],armL:[.2,0,.8]}],[7,{legR:[-1.55,0,-.1],shinR:[.05,0,0],torso:[-.35,.25,0],legL:[.15,0,.05],shinL:[.25,0,0],armR:[.4,0,-1.1],armL:[.3,0,1.1],head:[-.1,0,0],flare:.3}],[14,{legR:[-1.45,0,-.1],shinR:[.2,0,0],torso:[-.3,.2,0],armR:[.4,0,-1],armL:[.3,0,1]}],[27,pe]]},utilt:{total:28,trail:"handR",trailF:[5,12],sfx:[5,"whoosh",.4],hit:[Ce(6,10,0,0,.55,7,96,38,100,{path:[[.75,1.55],[-.6,1.7]]}),Ce(6,10,0,0,.5,7,96,38,100,{path:[[.5,2.25],[-.4,2.35]]})],anim:[[0,pe],[4,{...pe,torso:[.35,0,0],head:[.4,0,0],armR:[.4,0,-.4],armL:[.4,0,.4],by:-.1,earR:[.8,0,0],earL:[.8,0,0]}],[8,{torso:[-.3,0,0],head:[-.5,0,0],armR:[-2.9,0,-.2],foreR:[0,0,0],armL:[-2.9,0,.2],foreL:[0,0,0],earR:[-1.2,0,0],earL:[-1.2,0,0],by:.05}],[14,{torso:[-.25,0,0],head:[-.4,0,0],armR:[-2.8,0,-.3],armL:[-2.8,0,.3],earR:[-1,0,0],earL:[-1,0,0]}],[28,pe]]},dtilt:{total:20,trail:"footR",trailF:[4,8],sfx:[4,"whoosh",.3],hit:[Ce(5,7,1.05,.25,.45,6,78,45,45),Ce(5,7,.5,.25,.4,6,78,45,45)],anim:[[0,{by:-.3,torso:[.4,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}],[4,{by:-.33,torso:[.5,0,0],legR:[-1.45,0,-.2],shinR:[.2,0,0],legL:[-.9,0,.15],shinL:[2,0,0],armR:[-.3,0,-.6],armL:[-.3,0,.6]}],[12,{by:-.33,torso:[.5,0,0],legR:[-1.4,0,-.2],shinR:[.3,0,0],legL:[-.9,0,.15],shinL:[2,0,0]}],[20,{by:-.3,torso:[.4,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}]]},dashattack:{total:34,keepVel:!0,trail:"handR",trailF:[3,16],sfx:[3,"whoosh",.6],hit:[Ce(5,8,.7,.85,.62,9,55,55,70),Ce(9,16,.7,.85,.55,6,60,40,50)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=15?n.vx=oi(n.vx,n.facing*.15,.01):n.friction(2.2),t%3===0&&t<16&&n.battle.effects.sparkle(n.x-n.facing*.3,n.y+.6,13929727,1,.3)},anim:[[0,pe],[3,{body:[.45,0,0],armR:[-1.5,0,-.7],armL:[-1.5,0,.7],foreR:[0,0,0],foreL:[0,0,0],legR:[.4,0,-.05],shinR:[.9,0,0],legL:[.25,0,.05],shinL:[.5,0,0],flare:.5,head:[-.3,0,0]}],[16,{body:[.4,0,0],armR:[-1.4,0,-.6],armL:[-1.4,0,.6],legR:[.3,0,0],shinR:[.8,0,0],legL:[.2,0,0],shinL:[.5,0,0],flare:.4}],[34,pe]]},fsmash:{total:50,smash:!0,charge:{f:6,max:60},trail:"handR",trailF:[12,17],sfx:[12,"whoosh",.8],hit:[Ce(13,16,1.4,1,.72,15,38,34,102),Ce(13,16,.7,1,.5,13,38,34,100)],onFrame(n,t){if(t===13){let e=n.battle.effects;e.ring(n.x+n.facing*1.4,n.y+1,11820287,2.6,18),e.sparkle(n.x+n.facing*1.5,n.y+1,16751856,6,.6)}},anim:[[0,pe],[5,{torso:[-.2,-.7,0],armR:[.9,0,-.6],foreR:[-1.2,0,0],armL:[-.9,0,.5],foreL:[-.3,0,0],legR:[.5,0,-.1],shinR:[.5,0,0],legL:[-.5,0,.1],shinL:[.4,0,0],by:-.1,flare:.2}],[11,{torso:[-.25,-.8,0],armR:[1,0,-.6],foreR:[-1.3,0,0],armL:[-1,0,.5],legR:[.55,0,-.1],shinR:[.5,0,0],legL:[-.55,0,.1],shinL:[.45,0,0],by:-.12}],[13,{torso:[.35,.6,0],armR:[-1.6,0,-.05],foreR:[0,0,0],armL:[.7,0,.5],foreL:[-.2,0,0],legR:[.6,0,-.1],shinR:[.4,0,0],legL:[-.7,0,.1],shinL:[.2,0,0],by:-.12,bz:.25,flare:.45}],[26,{torso:[.3,.5,0],armR:[-1.5,0,-.05],armL:[.6,0,.5],legR:[.5,0,-.1],legL:[-.6,0,.1],by:-.1,bz:.2}],[50,pe]]},usmash:{total:46,smash:!0,charge:{f:5,max:60},trail:"handR",trailF:[10,16],sfx:[10,"whoosh",.8],hit:[Ce(11,16,.2,2.15,.8,14,88,38,100),Ce(11,16,.3,1.25,.55,12,85,38,100)],onFrame(n,t){t>=11&&t<=16&&n.battle.effects.sparkle(n.x,n.y+1.2+(t-11)*.3,t%2?16751856:16773296,2,.4)},anim:[[0,pe],[4,{by:-.3,torso:[.35,0,0],armR:[.5,0,-.3],armL:[.5,0,.3],legR:[-.7,0,-.1],shinR:[1.3,0,0],legL:[-.7,0,.1],shinL:[1.3,0,0],earR:[.6,0,0],earL:[.6,0,0]}],[11,{by:.12,torso:[-.25,0,0],head:[-.4,0,0],armR:[-3,0,-.15],foreR:[0,0,0],armL:[-3,0,.15],foreL:[0,0,0],legR:[.1,0,-.05],legL:[.1,0,.05],earR:[-.9,0,0],earL:[-.9,0,0],flare:.35}],[22,{by:.08,torso:[-.2,0,0],armR:[-2.9,0,-.2],armL:[-2.9,0,.2],earR:[-.7,0,0],earL:[-.7,0,0]}],[46,pe]]},dsmash:{total:44,smash:!0,charge:{f:5,max:60},alpha:.85,sfx:[8,"whoosh",.8],hit:[Ce(9,11,1.1,.35,.55,12,32,34,96,{away:!0}),Ce(9,11,-1.1,.35,.55,12,32,34,96,{away:!0}),Ce(12,13,.6,.35,.5,10,32,30,90,{away:!0}),Ce(12,13,-.6,.35,.5,10,32,30,90,{away:!0})],onFrame(n,t){t===9&&n.battle.effects.ring(n.x,n.y+.3,11820287,3,16)},anim:(()=>{let n={by:-.28,torso:[.3,0,0],armR:[.2,0,-1.2],armL:[.2,0,1.2],legR:[-.8,0,-.3],shinR:[1.4,0,0],legL:[-.8,0,.3],shinL:[1.4,0,0],flare:.3},t={...n,armR:[0,0,-1.5],armL:[0,0,1.5],flare:1.1};return[[0,pe],[5,n],[9,{...t,body:[0,0,0]}],[13,{...t,body:[0,Math.PI*2,0]}],[22,{...n,body:[0,Math.PI*2,0],flare:.6}],[44,{...pe,body:[0,Math.PI*2,0]}]]})()},nair:{total:36,aerial:!0,landLag:7,acBefore:3,acAfter:26,alpha:.85,sfx:[4,"whoosh",.5],hit:[Ce(4,7,0,.85,1,9,45,28,88,{away:!0}),Ce(8,18,0,.85,.95,5,45,20,70,{away:!0})],anim:(()=>{let n={armR:[0,0,-1.4],armL:[0,0,1.4],legR:[-.5,0,-.3],shinR:[.8,0,0],legL:[-.5,0,.3],shinL:[.8,0,0],flare:1};return[[0,nn],[3,{...n,body:[0,0,0]}],[11,{...n,body:[0,Math.PI*2,0]}],[18,{...n,body:[0,Math.PI*4,0],flare:.7}],[36,{...nn,body:[0,Math.PI*4,0]}]]})()},fair:{total:34,aerial:!0,landLag:10,acBefore:4,acAfter:24,trail:"handR",trailF:[7,12],sfx:[7,"whoosh",.6],hit:[Ce(8,11,0,0,.62,11,40,30,96,{path:[[.9,1.75],[1.15,.45]]})],anim:[[0,nn],[5,{...lo,armR:[-2.9,0,-.3],foreR:[-.2,0,0],torso:[-.3,.35,0],armL:[.3,0,.8]}],[8,{...lo,armR:[-2.7,0,-.3],torso:[-.3,.35,0],armL:[.3,0,.8]}],[11,{legR:[-.8,0,0],shinR:[1.2,0,0],legL:[.3,0,0],shinL:[.8,0,0],armR:[-.5,0,-.1],foreR:[0,0,0],torso:[.45,.35,0],armL:[.5,0,.8]}],[20,{legR:[-.7,0,0],shinR:[1.1,0,0],armR:[-.6,0,-.1],torso:[.4,.3,0],armL:[.5,0,.8]}],[34,nn]]},bair:{total:36,aerial:!0,landLag:11,acBefore:4,acAfter:26,trail:"footL",trailF:[6,11],sfx:[6,"whoosh",.6],hit:[Ce(7,9,-1.05,.85,.62,13,145,32,100),Ce(10,14,-.9,.85,.5,8,145,20,80)],anim:[[0,nn],[5,{legL:[-.6,0,.1],shinL:[1.6,0,0],legR:[-.6,0,-.1],shinR:[1.3,0,0],torso:[.2,-.3,0],head:[.2,-.4,0],armR:[-.4,0,-.8],armL:[-.4,0,.8]}],[8,{legL:[1.45,0,.05],shinL:[.05,0,0],legR:[-.8,0,-.1],shinR:[1.3,0,0],torso:[.45,-.35,0],head:[-.1,-.6,0],armR:[-.8,0,-.6],armL:[-.8,0,.6]}],[16,{legL:[1.3,0,.05],shinL:[.2,0,0],legR:[-.7,0,-.1],shinR:[1.2,0,0],torso:[.4,-.3,0],armR:[-.7,0,-.6],armL:[-.7,0,.6]}],[36,nn]]},uair:{total:30,aerial:!0,landLag:8,acBefore:3,acAfter:22,trail:"handR",trailF:[5,11],sfx:[5,"whoosh",.5],hit:[Ce(6,10,0,0,.6,9,85,32,96,{path:[[.75,1.75],[-.7,1.85]]}),Ce(6,10,0,0,.55,9,85,32,96,{path:[[.45,2.35],[-.45,2.35]]})],anim:[[0,nn],[4,{...lo,torso:[.3,0,0],armR:[.4,0,-.5],armL:[.4,0,.5],earR:[.8,0,0],earL:[.8,0,0]}],[8,{...lo,body:[-.4,0,0],torso:[-.3,0,0],head:[-.5,0,0],armR:[-3,0,-.2],foreR:[0,0,0],armL:[-3,0,.2],foreL:[0,0,0],earR:[-1.3,0,0],earL:[-1.3,0,0]}],[16,{...lo,body:[-.3,0,0],armR:[-2.8,0,-.3],armL:[-2.8,0,.3],earR:[-1,0,0],earL:[-1,0,0]}],[30,nn]]},dair:{total:44,aerial:!0,landLag:16,acBefore:3,acAfter:34,trail:"footR",trailF:[11,16],sfx:[11,"whoosh",.7],hit:[Ce(12,15,.05,-.1,.55,12,270,28,82),Ce(16,22,0,.05,.5,7,60,20,70)],onFrame(n,t){t<11&&(n.gravMult=.35)},anim:[[0,nn],[8,{legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[-1.4,0,.1],shinL:[2,0,0],armR:[-2.6,0,-.4],armL:[-2.6,0,.4],torso:[-.1,0,0],by:.15}],[12,{legR:[.15,0,-.03],shinR:[0,0,0],legL:[.15,0,.03],shinL:[0,0,0],armR:[-2.8,0,-.6],armL:[-2.8,0,.6],torso:[-.2,0,0],by:-.1,flare:.5}],[22,{legR:[.1,0,-.03],legL:[.1,0,.03],armR:[-2.7,0,-.6],armL:[-2.7,0,.6],flare:.4}],[44,nn]]},neutralb:{total:34,charge:{f:8,max:70},fall:.5,landContinue:!0,onStart(n){n.model.setBow(!0,.15)},onCharge(n){let t=n.charge/70;if(n.model.setBow(!0,.35+t*.65),n.charge%5===0){let e=n.model.orbPoint.getWorldPosition(n.battle.tmpV);n.battle.effects.sparkle(e.x,e.y,t>.95?16777215:11820287,1,.25)}},onFrame(n,t){if(t<8&&n.model.setBow(!0,.15+t*.03),t===10){let e=n.charge/70;n.battle.spawnProjectile(n,{x:n.x+n.facing*.8,y:n.y+1.12,vx:n.facing*(.32+.16*e),vy:0,r:.16+.14*e,dmg:5+11*e,ang:38,bkb:22+28*e,kbg:62,life:60,color:11820287,kind:"arrow"}),n.model.setBow(!0,0,!1),mt.whoosh(.4+e*.6),mt.orb()}t===28&&n.model.setBow(!1)},onEnd(n){n.model.setBow(!1)},anim:[[0,pe],[6,{armL:[-1.5,0,.05],foreL:[0,0,0],armR:[-1.45,0,.3],foreR:[-1.5,0,0],torso:[.08,-.55,0],head:[0,.4,0],legR:[-.3,0,-.1],legL:[.3,0,.1],shinL:[.3,0,0]}],[9,{armL:[-1.5,0,.05],foreL:[0,0,0],armR:[-1.4,0,.45],foreR:[-2.1,0,0],torso:[.08,-.6,0],head:[0,.45,0],legR:[-.3,0,-.1],legL:[.3,0,.1],shinL:[.3,0,0]}],[11,{armL:[-1.55,0,.05],foreL:[0,0,0],armR:[-1.1,0,-.7],foreR:[-.3,0,0],torso:[.12,-.5,0],head:[0,.4,0],legR:[-.3,0,-.1],legL:[.3,0,.1],flare:.3}],[22,{armL:[-1.45,0,.1],armR:[-.9,0,-.7],torso:[.1,-.4,0]}],[34,pe]]},sideb:{total:40,keepVel:!0,noDrift:!0,noGravity:[0,22],canLeaveGround:!0,ledgeGrab:8,landContinue:!0,trail:"handR",trailF:[7,20],hit:[Ce(7,18,.5,.85,.62,9,42,50,62)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){t<7?(n.vx=oi(n.vx,0,.02),n.grounded||(n.vy=.005)):t<=20?(n.vx=n.facing*.34,n.vy=0,t===7&&mt.whoosh(.9),n.battle.effects.sparkle(n.x-n.facing*.4,n.y+.8,t%2?16751856:16773296,1,.3)):n.vx*=.86},anim:[[0,pe],[4,{body:[-.3,0,0],armR:[.6,0,-.4],armL:[.6,0,.4],legR:[-.8,0,0],shinR:[1.3,0,0],legL:[-.6,0,0],shinL:[1.2,0,0]}],[7,{body:[1.25,0,0],armR:[-2.9,0,-.15],foreR:[0,0,0],armL:[-2.9,0,.15],foreL:[0,0,0],legR:[.2,0,-.05],legL:[.2,0,.05],flare:.2,head:[-.9,0,0]}],[20,{body:[1.2,0,0],armR:[-2.9,0,-.15],armL:[-2.9,0,.15],legR:[.2,0,-.05],legL:[.2,0,.05],head:[-.9,0,0]}],[32,nn]]},upb:{total:38,helpless:!0,helplessLag:22,intang:[6,16],noGravity:[0,24],noDrift:!0,keepVel:!0,ledgeGrab:16,hit:[Ce(16,17,0,.9,.95,7,80,55,60,{away:!0})],onStart(n){n.upBUsed=!0,n.vx*=.3,n.vy=0},onFrame(n,t){let e=n.battle.effects;if(t<6&&(n.vx*=.8,n.vy=.01),t===6){let{x:i,y:s}=n.input.stick,r=Math.hypot(i,s),a=0,o=1;r>.3&&(a=i/r,o=s/r),n.grounded&&o<0&&(o=0,a=a?ie(a):n.facing),n.vars.dir=[a,o],Math.abs(a)>.2&&(n.facing=ie(a)),n.hidden=!0,mt.warp(),e.ring(n.x,n.y+.9,13660415,2.2,14),e.sparkle(n.x,n.y+.9,16751856,8,.6)}if(t>=7&&t<=14){let[i,s]=n.vars.dir;n.vx=i*.7,n.vy=s*.7,s>.1&&n.grounded&&(n.grounded=!1,n.surface=null,n.y+=.02),n.hidden=!0,e.spawn({x:n.x,y:n.y+.9,life:14,size:.7,size1:.1,color:11820287})}if(t===15){let[i]=n.vars.dir;n.vx=i*.06,n.vy=.02,n.hidden=!1,e.ring(n.x,n.y+.9,16751856,2.4,14),e.sparkle(n.x,n.y+.9,16773296,8,.7)}t>15&&(n.vx*=.95)},anim:[[0,pe],[5,{armR:[-1.2,0,.6],foreR:[-1.5,0,0],armL:[-1.2,0,-.6],foreL:[-1.5,0,0],legR:[-.6,0,0],shinR:[1.2,0,0],legL:[-.6,0,0],shinL:[1.2,0,0],body:[0,0,0]}],[14,{armR:[-1.2,0,.6],armL:[-1.2,0,-.6],body:[0,0,0]}],[16,{armR:[-.5,0,-1.3],armL:[-.5,0,1.3],foreR:[0,0,0],foreL:[0,0,0],flare:.9,body:[0,0,0]}],[38,nn]]},downb:{total:32,reflect:[3,22],fall:.35,landContinue:!0,alpha:.7,hit:[Ce(3,4,0,.85,1,5,80,55,35,{away:!0})],onStart(n){n.grounded||(n.vy=Math.max(n.vy,0))},onFrame(n,t){t>=3&&t<=22&&t%3===0&&n.battle.effects.ring(n.x,n.y+.9,10479871,2.3,10),t===3&&mt.reflect()},anim:[[0,pe],[3,{armR:[0,0,-1.6],armL:[0,0,1.6],foreR:[0,0,0],foreL:[0,0,0],flare:.9,head:[-.2,0,0],torso:[-.1,0,0]}],[22,{armR:[0,0,-1.5],armL:[0,0,1.5],flare:.7}],[32,pe]]},final:{total:150,fs:!0,intang:[0,150],noGravity:[0,150],noDrift:!0,keepVel:!0,alpha:.35,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,48)},onFrame(n,t){let e=n.battle,i=e.effects;n.vx=0,t<48?(n.vy=t<30?.03:0,n.grounded&&(n.grounded=!1,n.surface=null,n.y+=.03),t%2===0&&i.sparkle(n.x,n.y+.9,t%4?13660415:16773296,2,1.2)):n.vy=0;let s=n.x,r=n.y+.9;t===48&&(n.vars.sphere=e.addFx(new Vc(e,s,r)),mt.warp(),e.shakeCam(.3));let a=n.vars.sphere;if(a){if(t>=48&&t<=66){let o=.5+(t-48)/18*6;a.setRadius(o),e.fsTrap(n,s,r,o)}t>66&&t<130&&t%7===0&&(e.fsDamage(n,3),i.ring(s,r,16751856,5,12)),t===130&&(e.fsLaunch(n,{dmg:10,ang:55,bkb:110,kbg:105}),i.koBlast(s,r,13660415),i.ring(s,r,16777215,12,30),e.shakeCam(.7),mt.fsBoom()),t>130&&a.setRadius(Math.max(.01,a.mesh.scale.x*.7)),t===140&&(e.removeFx(a),n.vars.sphere=null)}},onEnd(n){n.vars.sphere&&(n.battle.removeFx(n.vars.sphere),n.vars.sphere=null),n.battle.fsRelease(n)},anim:[[0,pe],[20,{body:[-.2,0,0],armR:[-2.8,0,-.5],armL:[-2.8,0,.5],foreR:[0,0,0],foreL:[0,0,0],legR:[.1,0,-.05],legL:[.1,0,.05],head:[-.4,0,0],earR:[-.6,0,0],earL:[-.6,0,0],flare:1.2}],[48,{armR:[0,0,-1.6],armL:[0,0,1.6],foreR:[0,0,0],foreL:[0,0,0],legR:[-.3,0,-.1],legL:[-.3,0,.1],shinR:[.5,0,0],shinL:[.5,0,0],head:[-.2,0,0],flare:1.4}],[130,{armR:[0,0,-1.5],armL:[0,0,1.5],flare:1.3}],[150,nn]]},grab:{total:30,hit:[Ce(6,7,.75,1,.45,0,0,0,0,{type:"grab"})],anim:[[0,pe],[6,{armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.25,0,0],bz:.1}],[14,{armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.2,0,0]}],[30,pe]]},dashgrab:{total:36,keepVel:!0,hit:[Ce(8,9,.95,1,.5,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,pe],[8,{armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,0,0],bz:.15}],[20,{armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.3,0,0]}],[36,pe]]},pummel:{total:16,pummelAt:5,pummelDmg:1.5,anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.15,0,0]}],[5,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.3,0,0],head:[.4,0,0],earR:[1,0,0],earL:[1,0,0]}],[16,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.15,0,0]}]]},fthrow:{total:30,throwAt:10,throwHit:{dmg:8,ang:40,bkb:65,kbg:65},hold:n=>[.75+Math.max(0,n-6)*.08,.15],anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[6,{armR:[-.8,0,.1],foreR:[-1.4,0,0],armL:[-.8,0,-.1],foreL:[-1.4,0,0],torso:[-.1,0,0]}],[10,{armR:[-1.6,0,-.1],foreR:[0,0,0],armL:[-1.6,0,.1],foreL:[0,0,0],torso:[.3,0,0],bz:.15,flare:.4}],[30,pe]]},bthrow:{total:34,throwAt:14,throwHit:{dmg:10,ang:140,bkb:55,kbg:85},hold:n=>{let t=Math.min(1,n/14);return[.8*Math.cos(Math.PI*t),.25+.6*Math.sin(Math.PI*t)]},anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[14,{body:[0,Math.PI,0],armR:[-2.2,0,-.3],armL:[-2.2,0,.3],flare:.8}],[22,{body:[0,Math.PI*2,0],armR:[-1.4,0,-.3],armL:[-1.4,0,.3]}],[34,{...pe,body:[0,Math.PI*2,0]}]]},uthrow:{total:36,throwAt:12,throwHit:{dmg:8,ang:90,bkb:75,kbg:72},hold:n=>[.5-n*.03,.2+n*.13],anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[12,{armR:[-3,0,-.1],foreR:[0,0,0],armL:[-3,0,.1],foreL:[0,0,0],by:.1,earR:[-1,0,0],earL:[-1,0,0]}],[36,pe]]},dthrow:{total:36,throwAt:14,throwHit:{dmg:6,ang:75,bkb:55,kbg:45},hold:n=>[.75,Math.max(0,.15-n*.02)],onFrame(n,t){t===14&&n.battle.effects.dust(n.x+n.facing*.7,n.y,6,0)},anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[8,{by:.2,legR:[-1.2,0,-.1],shinR:[1.6,0,0],armR:[-2.5,0,-.5],armL:[-2.5,0,.5]}],[14,{by:-.1,legR:[-.6,0,-.1],shinR:[.2,0,0],torso:[.3,0,0],armR:[-.5,0,-.8],armL:[-.5,0,.8]}],[36,pe]]},getupattack:{total:30,intang:[0,9],alpha:.8,hit:[Ce(8,10,1,.4,.6,7,40,60,50,{away:!0}),Ce(8,10,-1,.4,.6,7,40,60,50,{away:!0})],anim:[[0,{by:-.5,torso:[.4,0,0]}],[8,{by:-.3,body:[0,0,0],legR:[-1.4,0,-.5],armR:[0,0,-1.4],armL:[0,0,1.4],flare:1}],[14,{by:-.3,body:[0,Math.PI*2,0],legR:[-1.4,0,-.5],flare:.8}],[30,{...pe,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:34,intang:[0,10],trail:"footR",trailF:[8,14],hit:[Ce(10,13,1,.5,.65,8,40,60,50)],anim:[[0,{by:-.3,torso:[.5,0,0]}],[10,{legR:[-1.55,0,-.1],shinR:[.1,0,0],torso:[-.3,.2,0],armR:[.4,0,-1.1],armL:[.3,0,1.1]}],[18,{legR:[-1.4,0,-.1],torso:[-.2,0,0]}],[34,pe]]}},U0={id:"illumine",name:"\u30A4\u30EB\u30DF\u30CD",en:"ILLUMINE",title:"\u5BB5\u95C7\u306E\u86FE\u59EB",color:12938239,css:"#c56bff",desc:"\u5149\u308B\u88CF\u5730\u306E\u8863\u3092\u307E\u3068\u3044\u3001\u7A7A\u4E2D\u30B8\u30E3\u30F3\u30D72\u56DE\u3068\u30EF\u30FC\u30D7\u3067\u81EA\u5728\u306B\u821E\u3046\u8EFD\u91CF\u7D1A\u306E\u9B54\u6CD5\u30D5\u30A1\u30A4\u30BF\u30FC\u3002",specials:["\u30B7\u30E3\u30C9\u30A6\u30A2\u30ED\u30FC\uFF08\u6F06\u9ED2\u306E\u5F13\u30FB\u305F\u3081\u6483\u3061\uFF09","\u30A6\u30A3\u30B9\u30D7\u30C0\u30C3\u30B7\u30E5\uFF08\u7A81\u9032\uFF09","\u30E0\u30FC\u30F3\u30EF\u30FC\u30D7\uFF08\u77AC\u9593\u79FB\u52D5\uFF09","\u30A8\u30AF\u30EA\u30D7\u30B9\u30F4\u30A7\u30FC\u30EB\uFF08\u53CD\u5C04\uFF09"],stats:{weight:82,height:1.75,radius:.36,walkSpeed:.085,dashSpeed:.175,dashFrames:10,runSpeed:.16,traction:.009,airSpeed:.105,airAccel:.009,airFriction:.0025,gravity:.0078,fallSpeed:.145,fastFall:.23,jumpV:.216,hopV:.136,djV:.2,airJumps:2,jumpsquat:3,rollSpeed:.14},grabHold:[.75,.15],buildModel:Ef,anims:As({idle:pe,hipY:zc,bob:1.6,runExtra:n=>({armR:[.9,0,-.35],armL:[.9,0,.35],foreR:[-.3,0,0],foreL:[-.3,0,0],torso:[.45,0,0],flare:.25}),override:{victory:n=>{let t=n*.05;return{body:[0,Math.min(1,n/40)*Math.PI*2,0],armR:[-2.6,0,-.6+Math.sin(t)*.1],armL:[.2,0,.5],foreR:[-.3,0,0],legR:[-.2,0,-.1],legL:[.3,0,.2],shinL:[.8,0,0],torso:[-.1,0,.1],head:[-.2,0,.15],flare:.3+Math.sin(t*2)*.1,by:.12+Math.sin(t)*.05}}}}),moves:hv}});function Lf(n=0){let t=Cf[n%Cf.length],e=new Ht,i={},s={},r=Sn(t.silver,{rough:.33,metal:.8,env:1}),a=Sn(t.gold,{rough:.34,metal:.78,env:1}),o=a.clone();o.side=ke;let l=hi(t.navy,{rough:.7,metal:.2,env:.4,side:Ze}),c=hi(t.navy,{rough:.7,metal:.2,env:.4}),h=Sn(t.blade,{rough:.12,metal:1,env:1.3}),d=new Le({color:1316638,roughness:.3,metalness:.6,envMapIntensity:.6,side:ke}),u=new Le({map:pf(...t.plume),roughness:.8,metalness:0,envMapIntensity:.25,side:ke,color:10132122}),f=df(t.goldHex,t.ink),g=new Le({map:f,metalness:.6,roughness:.45,envMapIntensity:.45,emissive:2892806}),v=new Le({map:ff(t.goldHex,t.ink),metalness:.6,roughness:.4,envMapIntensity:.9,emissive:3813384}),m=Ei(t.eye,1.15),p=Sn(t.gem,{rough:.1,metal:.3,env:1.4,emissive:new xt(t.gem).multiplyScalar(.25)}),b=r.clone();b.flatShading=!0;let T=[b,r,a,o,g,v,h],_=T.map($=>$.emissive.clone()),w=_e("body",e,0,Wc,0);i.body=w;let E=_e("hips",w);i.hips=E;let C=_e("torso",E);i.torso=C;let y=new Ht;y.scale.set(.74,1,.76),E.add(y),N(q(new Dt(.15,20,14),c),y,0,.14,0,0,0,0,[.9,.5,.75]),N(mi(Ae([[.215,.18],[.225,.2],[.225,.27],[.215,.29]],28),r,l),y,0,0,0,0,0,0,[1,1,.82]),N(q(new ii(.222,.016,8,32),a),y,0,.29,0,Math.PI/2,0,0,[1,.82,1]);let R=($,X,it,yt)=>{let Rt=mi(Ae([[.22,.18],[.255,.1],[.3,.02],[.33,-.03-it]],20,$,X),r,l);Rt.scale.set(1,1,.84),yt.add(Rt);let Et=q(new ii(.33,.015,6,20,X),a);Et.rotation.set(Math.PI/2,0,-$+Math.PI/2-X),Et.position.y=-.03-it,Et.scale.set(1,.84,1),yt.add(Et)};R(Math.PI*.2,Math.PI*.55,.12,y),R(Math.PI*.78,Math.PI*.44,.08,y),R(Math.PI*1.25,Math.PI*.42,.04,y),R(Math.PI*1.7,Math.PI*.46,-.13,y);let D=new Ht;N(D,y,-.09,.14,.215,.12,-.3,0,1.05);let F=new ci;F.moveTo(0,.1),F.lineTo(.065,.06),F.lineTo(.06,-.05),F.lineTo(0,-.13),F.lineTo(-.06,-.05),F.lineTo(-.065,.06),F.lineTo(0,.1),N(q(new Gi(F,{depth:.02,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),a),D,0,-.02,.012),N(q(new Dt(.03,14,10),p),D,0,0,.045,0,0,0,[1,.8,.6]),N(q(new Be(.13,.14,.14,20,1,!0),c),C,0,.3,0),N(mi(Ae([[.165,.27],[.15,.32],[.162,.385]],24),r,l),C,0,0,.01,0,0,0,[1,1,.8]),N(mi(Ae([[.12,.35],[.18,.39],[.275,.47],[.32,.56],[.295,.635],[.2,.685],[.14,.7]],32),r,l),C,0,0,.02,0,0,0,[.84,1,.72]),N(q(new ii(.152,.024,8,28),a),C,0,.69,.03,Math.PI/2+.22,0,0,[1,.8,1]);for(let $=0;$<4;$++){let X=.64-$*.075,it=[.25,.3,.29,.25][$],yt=q(new ce(.036,.11,4),a);N(yt,C,0,X,.02+it*.78+.01,.35,0,0,[1,1,.6])}N(q(new Fe(.045,.3,.03),a),C,0,.5,.02+.3*.78-.005,-.05),N(q(new Be(.07,.08,.1,12),c),C,0,.72,0);for(let $ of[-1,1]){let X=new Ht;N(X,C,$*.315,.63,0,0,0,$*-.3,.9),N(mi(new Dt(.2,24,16,0,Math.PI*2,0,Math.PI*.6),r,l),X,0,0,0,0,0,0,[1.12,.88,1.08]),N(q(new ii(.2*Math.sin(Math.PI*.6)*1.12,.034,8,28,Math.PI*1.3),a),X,0,.2*Math.cos(Math.PI*.6)*.88,0,Math.PI/2,0,$>0?-Math.PI*.65:Math.PI*.35,[1,.98,1.1]);let it=q(new ce(.075,.4,10),a);N(it,X,$*.15,.2,.02,0,0,$*-.5);let yt=q(new ce(.06,.24,10),a);N(yt,X,$*.22,.03,-.09,-.5,0,$*-1.15),N(q(new ce(.058,.22,10),a),X,$*.2,.05,.11,.6,0,$*-1.05)}let Y=new Ht;N(Y,C,0,.31,-.27,-.08,Math.PI,0,.92);let k=new kn(.36,48),W=k.attributes.position;for(let $=0;$<W.count;$++){let X=Math.hypot(W.getX($),W.getY($))/.36;W.setZ($,.07*(1-X*X))}k.computeVertexNormals(),N(q(k,v),Y,0,0,0),N(q(new Dt(.5,32,10,0,Math.PI*2,0,.37),a),Y,0,0,-.43,Math.PI/2,0,0),N(q(new ii(.385,.055,12,48),r),Y,0,0,0,0,0,0,[1,1,.45]),N(q(new kn(.39,32),c),Y,0,0,-.03,0,Math.PI,0);let K=_e("head",C,0,.7,0);i.head=K;let et=new Ht;N(et,K,0,.02,.02,0,0,0,[.84,.74,.84]),N(mi(Ae([[.155,.18],[.152,.23],[.135,.29],[.095,.335],[.045,.358],[0,.364]],28),r,l),et,0,0,0,0,0,0,[.96,1,1.05]);let gt=en(40,8,($,X,it)=>{let yt=-.03+.215*X,Rt=Math.PI*(.05+.2*Math.pow(X,.8)),Et=Rt+$*(Math.PI*2-2*Rt),wt=.158-.03*Math.pow(1-X,2)+.03*Math.pow(1-X,5);it.set(-Math.sin(Et)*wt,yt,Math.cos(Et)*wt)});N(mi(gt,r,l),et,0,0,0,0,0,0,[.96,1,1.05]),N(q(new ii(.16,.014,6,30,Math.PI*1.86),a),et,0,-.03,0,Math.PI/2,0,Math.PI*.57,[.96,1.05,1]),N(q(new Dt(.128,18,14),Ei(656904)),et,0,.11,0),N(q(new Dt(.03,14,10),m),et,0,.138,.112,0,0,0,[1.9,.8,.5]),N(q(new Dt(.016,10,8),Ei(16764992,1.3)),et,0,.133,.126,0,0,0,[1.3,.5,.5]);let rt=qi(64,64,$=>{let X=$.createRadialGradient(32,32,0,32,32,32);X.addColorStop(0,"rgba(255,255,255,1)"),X.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=X,$.fillRect(0,0,64,64)}),ot=new Mi(new xi({map:rt,color:t.eye,transparent:!0,opacity:.55,blending:Xe,depthWrite:!1}));ot.scale.setScalar(.16),ot.position.set(0,.136,.14),ot.userData.keep=!0,et.add(ot);let ut=en(96,10,($,X,it)=>{let yt=($-.5)*2.2,Rt=Math.pow(Math.abs(Math.cos(($-.5)*Math.PI*9)),.6),Et=.045+X*(.15+.007*Rt),wt=Math.sin(yt)*Et,Pt=.165+Math.cos(yt)*Et,te=wt/.165,oe=Math.max(0,(Pt-.17)/.19),H=.18-.05*oe*oe+.016*Rt*(.4+.6*X)+.022*Math.sin(Math.PI*X);it.set(Math.sin(te)*H*.96,Pt,Math.cos(te)*H*1.05)});N(q(ut,o),et,0,0,0);let Ut=[[-.105,.15,.108,.5,.15],[-.058,.18,.142,.25,.135],[0,.19,.154,0,.105],[.058,.18,.142,-.25,.135],[.105,.15,.108,-.5,.15]];for(let[$,X,it,yt,Rt]of Ut){let Et=new ce(.026,X,4);Et.rotateY(Math.PI/4),Et.scale(1,1,.5),N(q(Et,a),et,$*(1-.12),Rt-X/2,it,Math.PI+.1,-yt,$*-1.8)}for(let $ of[-1,1])N(q(new Dt(.048,16,12),a),et,$*.152,.15,-.005,0,0,0,[.6,1,1]);let Nt=new ci,re=.13,ne=.4,ae=26,st=.45,ht=Math.PI-.1;Nt.moveTo(re*Math.cos(st),re*Math.sin(st));for(let $=0;$<=ae;$++){let X=st+$/ae*(ht-st),it=ne*($%2?.95:1)*(.72+.28*Math.sin($/ae*Math.PI*.75+.5));Nt.lineTo(it*Math.cos(X),it*Math.sin(X))}for(let $=ae;$>=0;$--){let X=st+$/ae*(ht-st);Nt.lineTo(re*Math.cos(X),re*Math.sin(X))}let Tt=new Gi(Nt,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.016,bevelSegments:2,curveSegments:4});Tt.translate(0,0,-.02);let jt=Tt.attributes.uv;for(let $=0;$<jt.count;$++)jt.setXY($,jt.getX($)/.84+.5,jt.getY($)/.84+.5);let kt=q(Tt,u);N(kt,et,0,.2,-.02,0,-Math.PI/2,0);let Yt={},ue={};for(let $ of[-1,1]){let X=$<0,it=_e(X?"armR":"armL",C,$*.325,.57,0);i[X?"armR":"armL"]=it,N(q(new Dt(.075,14,10),c),it,0,-.02,0),N(mi(Ae([[.095,-.05],[.112,-.11],[.112,-.18],[.098,-.25],[.082,-.3]],20),r,l),it,0,0,0,0,0,0,[.84,1,.84]),N(q(new Dt(.06,12,10),c),it,0,-.35,0);let yt=_e(X?"foreR":"foreL",it,0,-.35,0);i[X?"foreR":"foreL"]=yt,N(mi(Ae([[.128,.01],[.116,-.06],[.09,-.17],[.086,-.27],[.094,-.3]],20),r,l),yt,0,0,0,0,0,0,[.86,1,.86]),N(q(new ii(.126,.013,8,22),a),yt,0,.005,0,Math.PI/2,0,0,[1,1,1.4]);let Rt=new Ht;Rt.userData.joint=!0,N(Rt,yt,0,-.42,0,0,0,0,1.55),ue[$]=Rt;let Et=X;N(q(new Dt(.06,14,10),r),Rt,0,0,0,0,0,0,[1,1.15,.7]),N(q(new Be(.058,.062,.05,12),r),Rt,0,.055,0),N(q(new ii(.058,.01,6,16),a),Rt,0,.08,0,Math.PI/2,0,0);for(let Pt=0;Pt<4;Pt++){let te=(Pt-1.5)*.028,oe=new Ht;N(oe,Rt,te*$,-.07,.01,Et?-1.2:-.35,0,0),N(q(new ks(.014,.035,3,6),r),oe,0,-.025,0);let H=new Ht;N(H,oe,0,-.055,0,Et?-1.3:-.5,0,0),N(q(new ks(.013,.03,3,6),r),H,0,-.02,0)}let wt=new Ht;N(wt,Rt,$*-.055,-.02,.03,-.6,0,$*.7),N(q(new ks(.015,.05,3,6),r),wt,0,-.03,0),Yt[X?"handR":"handL"]=null}let U=_e("wep",ue[-1],0,-.02,0);U.scale.setScalar(.76),i.wep=U,N(q(new Be(.024,.026,.26,12),a),U,0,0,-.01,Math.PI/2,0,0);for(let $ of[-.09,0,.08])N(q(new ii(.027,.007,6,14),a),U,0,0,$);N(q(new Be(.04,.045,.05,8),a),U,0,0,-.16,Math.PI/2,0,0),N(q(new Dt(.03,10,8),a),U,0,0,-.195);let j=new ci;j.moveTo(0,.05),j.quadraticCurveTo(.09,.32,-.26,.42),j.quadraticCurveTo(-.03,.25,-.1,.05),j.lineTo(0,.05);let lt=new Gi(j,{depth:.07,bevelEnabled:!0,bevelSize:.016,bevelThickness:.014,bevelSegments:2,curveSegments:10});lt.translate(0,0,-.035),N(q(lt,o),U,0,0,.15,0,-Math.PI/2,0,[.75,-.75,1.2]),N(q(new Fe(.07,.2,.06),a),U,0,0,.15);let nt=new ci;nt.moveTo(.14,-.095),nt.lineTo(1.2,-.08),nt.lineTo(1.46,0),nt.lineTo(1.2,.08),nt.lineTo(.14,.095),nt.lineTo(.14,-.095);let Mt=new Gi(nt,{depth:.012,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:2});Mt.translate(0,0,-.006),N(q(Mt,h),U,0,0,0,0,-Math.PI/2,0);let Lt=new ci;Lt.moveTo(.45,-.035),Lt.lineTo(1.2,-.025),Lt.lineTo(1.36,0),Lt.lineTo(1.2,.025),Lt.lineTo(.45,.035),Lt.lineTo(.45,-.035);let zt=new On(Lt);for(let $ of[-1,1])N(q(zt,d),U,$*.0195,0,0,0,-Math.PI/2,0);let I=new ci;I.moveTo(.13,-.11),I.lineTo(.44,-.098),I.lineTo(.56,0),I.lineTo(.44,.098),I.lineTo(.13,.11),I.lineTo(.13,-.11);let J=new Gi(I,{depth:.03,bevelEnabled:!0,bevelSize:.01,bevelThickness:.008,bevelSegments:2});J.translate(0,0,-.015);let A=J.attributes.uv;for(let $=0;$<A.count;$++)A.setXY($,(A.getX($)-.13)/.43,(A.getY($)+.11)/.22);N(q(J,g),U,0,0,0,0,-Math.PI/2,0);let dt=new se;dt.position.set(0,0,.45),U.add(dt);let vt=new se;vt.position.set(0,0,1.45),U.add(vt),Yt.sword=[dt,vt],Yt.handR=Yt.sword;let S=new se;S.position.set(0,-.05,0),ue[1].add(S);let x=new se;x.position.set(.1,-.35,.2),ue[1].add(x),Yt.handL=[S,x];for(let $ of[-1,1]){let X=$<0,it=_e(X?"legR":"legL",E,$*.17,-.02,0);i[X?"legR":"legL"]=it,N(q(new Dt(.05,12,10),c),it,0,-.1,0);{let Pt=Ae([[.165,-.1],[.172,-.16],[.146,-.32],[.11,-.46]],6);Pt.rotateY(Math.PI/6),N(mi(Pt,r,l),it,0,0,0,0,0,0,[.86,1,.68])}N(q(new Dt(.058,12,10),c),it,0,-.49,0);let yt=_e(X?"shinR":"shinL",it,0,-.5,0);i[X?"shinR":"shinL"]=yt,N(q(new Dt(.06,12,8,0,Math.PI*2,0,Math.PI/2),a),yt,0,0,.07,Math.PI/2,0,0,[1,1,.6]),N(q(new ce(.065,.22,6),a),yt,0,.1,.105,-.12,0,0,[1,1,.5]);for(let Pt of[-1,1])N(q(new ce(.04,.12,5),a),yt,Pt*.055,.05,.1,-.2,0,Pt*-.5,[1,1,.5]);N(mi(Ae([[.136,.02],[.122,-.08],[.114,-.23],[.078,-.42],[.07,-.52],[.074,-.57]],24),r,l),yt,0,0,-.015,0,0,0,[.86,1,1.05]),N(q(new ce(.04,.12,4),r),yt,0,-.02,.095,Math.PI,0,0,[1,1,.4]);let Rt=new Ht;N(Rt,yt,0,-.62,.03,0,0,0,[1.08,1.08,1.2]),N(q(new Fe(.09,.012,.22),Sn(10122288,{rough:.5,metal:.5,env:.7})),Rt,0,-.055,.035),N(q(new Dt(1,16,12),r),Rt,0,-.005,.05,0,0,0,[.066,.058,.15]),N(q(new ce(.045,.1,8),r),Rt,0,-.02,.2,Math.PI/2,0,0,[1,1,.6]);for(let Pt=0;Pt<3;Pt++){let te=q(new Be(.06,.065,.13,14,1,!1,-Math.PI/2,Math.PI),r);N(te,Rt,0,0,-.03+Pt*.065,Math.PI/2,0,Math.PI/2,[1,1,.75-Pt*.12])}N(q(new Dt(.06,12,8),r),Rt,0,-.005,.14,0,0,0,[1,.55,1.1]),N(q(new ii(.063,.01,6,16,Math.PI),a),Rt,0,0,.06,0,Math.PI/2,0,[1,1,1]);let Et=new se;Et.position.set(0,-.35,.05),yt.add(Et);let wt=new se;wt.position.set(0,-.7,.18),yt.add(wt),Yt[X?"footR":"footL"]=[Et,wt]}Vn(e),e.traverse($=>{$.isMesh&&($.castShadow=!1,$.receiveShadow=!1)});let B={j:i,base:s,hipY:Wc,flare:0},Z=new se;Z.position.set(0,.3,.9),w.add(Z);let z=Rs(0,null,1.1),_t=0;return{root:e,rig:B,trails:Yt,worldObjects:[],orbPoint:Z,shadow:z,height:2.1,headY:2.55,trailColor:n?9425151:16769930,update($){_t+=$,ot.material.opacity=.45+.2*Math.sin(_t*9)*Math.sin(_t*3.1)},setFlash($,X){T.forEach((it,yt)=>{it.emissive.copy(_[yt]),X>0&&it.emissive.lerp($,X*.8)})},dispose(){as(e)}}}var Cf,Wc,Pf=Ye(()=>{Si();Js();ao();Cf=[{silver:13684944,gold:15910990,navy:1448747,plume:["#d2330c","#8a1604","#ff6a24"],eye:16747038,blade:16119802,gem:10473727,goldHex:"#f0c04a",ink:"#a8741c"},{silver:4870244,gold:13161188,navy:724504,plume:["#2d7bff","#0c3aa0","#7ac4ff"],eye:5236479,blade:15265528,gem:16738954,goldHex:"#c8d2e4",ink:"#6a7890"}],Wc=1.2});var be,qt,wn,sn,rn,uv,N0,If=Ye(()=>{Pf();oo();hn();rs();be=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),qt={legR:[-.34,0,-.08],shinR:[.5,0,0],legL:[.14,0,.1],shinL:[.4,0,0],by:-.03,hips:[0,.12,.04],torso:[.06,.06,-.05],head:[.08,-.12,.04],armR:[-.95,-.46,-.87],foreR:[-2.3,0,0],wep:[.37,-.2,-.43],armL:[.05,0,.28],foreL:[-.55,0,0]},wn={legR:[-.5,0,-.1],shinR:[.8,0,0],legL:[.2,0,.1],shinL:[.5,0,0],armR:[-.5,0,-.5],foreR:[-.6,0,0],wep:[1.2,0,0],armL:[-.6,0,.5],foreL:[-1,0,0],torso:[.1,0,0]},sn={legR:[-1.1,0,-.1],shinR:[1.6,0,0],legL:[-.8,0,.1],shinL:[1.4,0,0]},rn={legR:[-.9,0,-.1],shinR:[.8,0,0],legL:[.7,0,.1],shinL:[.15,0,0],by:-.22},uv={jab1:{total:20,next:"jab2",nextWin:[7,19],trail:"sword",trailF:[3,8],sfx:[3,"slash",.3],hit:[be(5,6,1.2,1.15,.5,4,72,8,25),be(5,6,.6,1.1,.45,4,72,8,25)],anim:[[0,qt],[3,{...qt,armR:[-1.3,0,-.9],foreR:[-.3,0,0],wep:[1.4,0,0],torso:[.1,-.35,0]}],[6,{...qt,armR:[-1.45,0,.25],foreR:[-.1,0,0],wep:[1.5,0,0],torso:[.15,.45,0]}],[14,{...qt,armR:[-1.3,0,.1],foreR:[-.2,0,0],wep:[1.4,0,0],torso:[.12,.35,0]}],[20,qt]]},jab2:{total:28,trail:"handL",trailF:[3,8],sfx:[3,"whoosh",.5],hit:[be(5,7,.95,1.1,.62,5,40,45,72)],anim:[[0,{...qt,armR:[-1.3,0,.1],torso:[.12,.35,0]}],[5,{...qt,armL:[-1.45,0,.1],foreL:[-.3,0,0],torso:[.25,-.6,0],armR:[.3,0,-.5],bz:.18}],[16,{...qt,armL:[-1.35,0,.1],foreL:[-.4,0,0],torso:[.2,-.5,0],bz:.12}],[28,qt]]},ftilt:{total:34,trail:"sword",trailF:[8,13],sfx:[8,"slash",.6],hit:[be(9,11,1.8,1.1,.45,11,35,34,96),be(9,11,1.05,1.1,.5,10,35,34,96)],anim:[[0,qt],[6,{...qt,armR:[.2,0,-.3],foreR:[-1.6,0,0],wep:[1.4,0,0],torso:[-.1,-.4,0]}],[9,{...rn,armR:[-1.5,0,-.1],foreR:[0,0,0],wep:[1.25,0,0],torso:[.25,.5,0],armL:[-.3,0,.5],foreL:[-1,0,0],bz:.25}],[18,{...rn,armR:[-1.45,0,-.1],foreR:[0,0,0],wep:[1.25,0,0],torso:[.2,.45,0],armL:[-.3,0,.5],bz:.2}],[34,qt]]},utilt:{total:34,trail:"sword",trailF:[7,14],sfx:[7,"slash",.6],hit:[be(8,13,0,0,.6,10,92,40,95,{path:[[1.1,1.7],[-.9,1.6]]}),be(8,13,0,0,.62,10,92,40,95,{path:[[.9,2.6],[-.6,2.6]]})],anim:[[0,qt],[5,{...qt,armR:[-.9,0,-.6],foreR:[-.2,0,0],wep:[.8,0,0],torso:[.2,0,0]}],[8,{...qt,armR:[-1.85,0,-.4],foreR:[-.1,0,0],wep:[1,0,0],torso:[-.05,.1,0],head:[-.3,0,0]}],[13,{...qt,armR:[-2.9,0,-.2],foreR:[-.1,0,0],wep:[.6,0,0],torso:[-.2,.1,0],head:[-.3,0,0]}],[20,{...qt,armR:[-2.85,0,-.2],foreR:[-.1,0,0],wep:[.6,0,0],torso:[-.15,0,0]}],[34,qt]]},dtilt:{total:26,trail:"sword",trailF:[6,10],sfx:[6,"slash",.4],hit:[be(7,9,1.65,.35,.45,8,30,40,60),be(7,9,.9,.35,.45,8,30,40,60)],anim:[[0,{by:-.36,torso:[.45,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0],armR:[-.4,0,-.3],foreR:[-.6,0,0],wep:[1.3,0,0],armL:[-.6,0,.3],foreL:[-1,0,0]}],[7,{by:-.38,torso:[.6,.3,0],legR:[-1.3,0,-.1],shinR:[1.7,0,0],legL:[-.3,0,.1],shinL:[1.9,0,0],armR:[-1,0,-.2],foreR:[0,0,0],wep:[.55,0,0],armL:[-.4,0,.4],foreL:[-1,0,0]}],[16,{by:-.38,torso:[.55,.25,0],legR:[-1.3,0,-.1],shinR:[1.7,0,0],legL:[-.3,0,.1],shinL:[1.9,0,0],armR:[-.95,0,-.2],wep:[.6,0,0]}],[26,{by:-.36,torso:[.45,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}]]},dashattack:{total:42,keepVel:!0,trail:"handL",trailF:[7,18],sfx:[7,"whoosh",.7],hit:[be(8,14,.85,1,.7,12,45,55,72),be(15,20,.8,1,.6,8,45,40,60)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=18?n.vx=oi(n.vx,n.facing*.16,.01):n.friction(2.2),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,qt],[6,{...qt,armL:[-.4,0,.6],foreL:[-1.4,0,0],torso:[.1,-.3,0]}],[9,{legR:[.5,0,-.1],shinR:[.6,0,0],legL:[-.7,0,.1],shinL:[.5,0,0],armL:[-1.5,0,.1],foreL:[-.2,0,0],torso:[.35,-.6,0],armR:[.3,0,-.5],foreR:[-.6,0,0],wep:[1.2,0,0],bz:.2,by:-.1}],[22,{legR:[.4,0,-.1],legL:[-.5,0,.1],armL:[-1.4,0,.1],torso:[.3,-.5,0],armR:[.3,0,-.5],wep:[1.2,0,0],bz:.15}],[42,qt]]},fsmash:{total:58,smash:!0,charge:{f:7,max:60},trail:"sword",trailF:[14,20],sfx:[14,"slash",1],hit:[be(16,18,1.85,.75,.72,19,36,40,100),be(16,18,1,1.25,.62,16,36,38,98)],onFrame(n,t){t===17&&(n.battle.effects.ring(n.x+n.facing*1.9,n.y+.2,16765024,2.6,16),n.battle.effects.dust(n.x+n.facing*1.9,n.y,6,n.facing),n.battle.shakeCam(.08))},anim:[[0,qt],[6,{...qt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,-.3,0],head:[-.2,0,0],legR:[-.2,0,-.1],legL:[.4,0,.1]}],[14,{...qt,armR:[-3,0,-.3],foreR:[-.5,0,0],wep:[.2,0,0],torso:[-.35,-.35,0],legR:[-.2,0,-.1],legL:[.45,0,.1]}],[17,{...rn,armR:[-1.7,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.5,.3,0],armL:[-.2,0,.6],foreL:[-1,0,0],by:-.28,bz:.3}],[30,{...rn,armR:[-1.6,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.45,.3,0],by:-.26,bz:.25}],[58,qt]]},usmash:{total:54,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[11,18],sfx:[11,"slash",1],hit:[be(13,17,.3,2.8,.75,17,88,40,98),be(13,17,.3,1.75,.6,15,85,40,96)],onFrame(n,t){t===13&&n.battle.effects.sparkle(n.x+n.facing*.3,n.y+2.8,16773296,6,.4)},anim:[[0,qt],[6,{by:-.3,torso:[.3,0,0],legR:[-.8,0,-.15],shinR:[1.4,0,0],legL:[-.8,0,.15],shinL:[1.4,0,0],armR:[-.3,0,-.3],foreR:[-1.3,0,0],wep:[.5,0,0],armL:[-.6,0,.3],foreL:[-1.2,0,0]}],[13,{by:.06,torso:[-.15,0,0],head:[-.3,0,0],legR:[.05,0,-.1],legL:[.05,0,.1],armR:[-3.05,0,-.1],foreR:[0,0,0],wep:[1.45,0,0],armL:[-.4,0,.5],foreL:[-1.2,0,0]}],[26,{by:.04,torso:[-.1,0,0],armR:[-3,0,-.1],foreR:[0,0,0],wep:[1.4,0,0],armL:[-.4,0,.5]}],[54,qt]]},dsmash:{total:58,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[8,22],sfx:[8,"slash",.9],hit:[be(10,11,1.55,.3,.6,15,30,36,98),be(10,11,.8,.3,.5,13,30,36,96),be(19,20,-1.55,.3,.6,16,150,38,98),be(19,20,-.8,.3,.5,14,150,36,96)],anim:[[0,qt],[6,{by:-.35,torso:[.5,-.5,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0],armR:[-1,0,-1],foreR:[0,0,0],wep:[.8,0,0]}],[10,{by:-.38,torso:[.5,.6,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0],armR:[-1.1,0,.4],foreR:[0,0,0],wep:[.8,0,0]}],[15,{by:-.38,body:[0,0,0],torso:[.5,.6,0],armR:[-1.1,0,.4],wep:[1.9,0,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0]}],[19,{by:-.38,body:[0,Math.PI,0],torso:[.5,.6,0],armR:[-1.1,0,.4],wep:[1.9,0,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0]}],[32,{by:-.3,body:[0,Math.PI,0],torso:[.4,.4,0],armR:[-1,0,.3],wep:[1.8,0,0]}],[58,{...qt,body:[0,Math.PI*2,0]}]]},nair:{total:40,aerial:!0,landLag:10,acBefore:5,acAfter:30,alpha:.85,trail:"sword",trailF:[6,13],sfx:[6,"slash",.7],hit:[be(7,12,0,.95,1.35,10,45,30,90,{away:!0})],anim:(()=>{let n={...sn,armR:[-1.5,0,-1.1],foreR:[0,0,0],wep:[1.5,0,0],armL:[-.8,0,.8],foreL:[-1.2,0,0]};return[[0,wn],[6,{...n,body:[0,0,0]}],[13,{...n,body:[0,Math.PI*2,0]}],[20,{...n,body:[0,Math.PI*2,0]}],[40,{...wn,body:[0,Math.PI*2,0]}]]})()},fair:{total:42,aerial:!0,landLag:14,acBefore:4,acAfter:32,trail:"sword",trailF:[8,15],sfx:[9,"slash",.7],hit:[be(10,13,0,0,.7,13,40,32,95,{path:[[1.1,2.2],[1.45,.3]]}),be(10,13,.6,1.2,.5,10,40,30,90)],anim:[[0,wn],[6,{...sn,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,.2,0],armL:[-.6,0,.5],foreL:[-1.2,0,0]}],[10,{...sn,armR:[-2.6,0,-.3],foreR:[-.3,0,0],wep:[.4,0,0],torso:[-.3,.2,0]}],[13,{...sn,armR:[-.6,0,-.1],foreR:[-.1,0,0],wep:[1.3,0,0],torso:[.5,.25,0],armL:[-.3,0,.6]}],[24,{...sn,armR:[-.5,0,-.1],wep:[1.3,0,0],torso:[.45,.2,0]}],[42,wn]]},bair:{total:38,aerial:!0,landLag:12,acBefore:4,acAfter:28,trail:"handL",trailF:[6,12],sfx:[7,"whoosh",.7],hit:[be(8,11,-1.15,1,.72,12,145,38,95)],anim:[[0,wn],[5,{...sn,torso:[.1,.5,0],armL:[-1.2,0,.3],foreL:[-.8,0,0],head:[0,.3,0]}],[9,{...sn,torso:[.2,-1.1,0],head:[0,-.8,0],armL:[1.3,0,.5],foreL:[-.3,0,0],armR:[-.8,0,-.6],wep:[1.2,0,0]}],[18,{...sn,torso:[.2,-1,0],head:[0,-.7,0],armL:[1.2,0,.5],foreL:[-.3,0,0]}],[38,wn]]},uair:{total:38,aerial:!0,landLag:10,acBefore:3,acAfter:28,trail:"sword",trailF:[6,12],sfx:[6,"slash",.6],hit:[be(7,11,0,0,.7,11,85,32,95,{path:[[1,2.1],[-.9,2.1]]})],anim:[[0,wn],[5,{...sn,armR:[-1.2,0,-.3],foreR:[-.2,0,0],wep:[.8,0,0],torso:[.1,0,0]}],[8,{...sn,body:[-.3,0,0],armR:[-2,0,-.2],foreR:[0,0,0],wep:[.7,0,0],head:[-.4,0,0]}],[12,{...sn,body:[-.35,0,0],armR:[-2.9,0,-.2],foreR:[0,0,0],wep:[.8,0,0],head:[-.4,0,0]}],[22,{...sn,body:[-.2,0,0],armR:[-2.8,0,-.2],wep:[.8,0,0]}],[38,wn]]},dair:{total:52,aerial:!0,landLag:22,acBefore:3,acAfter:42,trail:"sword",trailF:[12,22],sfx:[13,"slash",.8],hit:[be(14,18,.1,-.4,.58,15,270,30,88),be(19,30,.1,-.3,.5,10,70,25,70)],onFrame(n,t){t<13&&(n.gravMult=.25),t===14&&!n.grounded&&(n.vy=Math.min(n.vy,-.26))},anim:[[0,wn],[8,{...sn,armR:[-2.6,0,-.3],foreR:[-.4,0,0],wep:[2,0,0],torso:[-.1,0,0],by:.1}],[14,{legR:[-.3,0,-.1],shinR:[.5,0,0],legL:[-.1,0,.1],shinL:[.4,0,0],armR:[-.3,0,-.1],foreR:[-.6,0,0],wep:[2.4,0,0],torso:[.2,0,0],armL:[-.6,0,.5],foreL:[-1,0,0]}],[30,{legR:[-.3,0,-.1],shinR:[.5,0,0],armR:[-.3,0,-.1],foreR:[-.6,0,0],wep:[2.4,0,0],torso:[.2,0,0]}],[52,wn]]},neutralb:{total:44,charge:{f:6,max:60},chargeScale:1.2,keepVel:!0,fall:.45,landContinue:!0,trail:"sword",trailF:[13,18],sfx:[13,"slash",.9],hit:[be(14,17,1.95,1.1,.55,9,38,36,86,{shield:20}),be(14,17,1.15,1.1,.5,8,38,34,84,{shield:18})],onFrame(n,t){if(t===13?n.vx=n.facing*.2:n.grounded?n.friction(1.2):n.vx*=.94,t===14){let e=n.chargeRatio;n.battle.effects.sparkle(n.x+n.facing*2,n.y+1.1,16773296,4+Math.floor(e*8),.4),e>.7&&n.battle.effects.ring(n.x+n.facing*2,n.y+1.1,16765024,3,16)}},onCharge(n){if(n.charge%4===0){let t=n.model.trails.sword[1].getWorldPosition(n.battle.tmpV);n.battle.effects.sparkle(t.x,t.y,16769930,1,.15)}},anim:[[0,qt],[6,{armR:[.6,0,-.3],foreR:[-1.8,0,0],wep:[1.2,0,0],torso:[-.2,-.6,0],by:-.15,legR:[-.5,0,-.1],shinR:[.6,0,0],legL:[.5,0,.1],shinL:[.4,0,0],armL:[-.6,0,.4],foreL:[-1.3,0,0]}],[14,{...rn,armR:[-1.55,0,-.05],foreR:[0,0,0],wep:[1.3,0,0],torso:[.3,.6,0],by:-.25,bz:.35,armL:[-.2,0,.6]}],[26,{...rn,armR:[-1.5,0,-.05],foreR:[0,0,0],wep:[1.28,0,0],torso:[.25,.5,0],bz:.25}],[44,qt]]},sideb:{total:48,armor:[8,30],noGravity:[0,30],keepVel:!0,noDrift:!0,canLeaveGround:!0,ledgeGrab:10,landContinue:!0,hit:[be(8,30,.85,1,.72,10,42,60,65)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){t<8?(n.vx=oi(n.vx,0,.02),n.grounded||(n.vy=.004)):t<=30?(n.vx=n.facing*.28,n.vy=n.grounded?0:.025,t===8&&mt.whoosh(1),t%3===0&&(n.grounded&&n.battle.effects.dust(n.x-n.facing*.4,n.y,1,-n.facing),n.battle.effects.sparkle(n.x+n.facing*.9,n.y+1,16769930,1,.4))):n.vx*=.85},anim:[[0,qt],[6,{...qt,armL:[-.3,0,.6],foreL:[-1.5,0,0],torso:[-.1,-.4,0],by:-.2,legR:[-.6,0,-.1],shinR:[.9,0,0],legL:[.4,0,.1],shinL:[.6,0,0]}],[9,{armL:[-1.5,0,.15],foreL:[-.3,0,0],torso:[.4,-.7,0],armR:[.4,0,-.4],foreR:[-.8,0,0],wep:[1,0,0],legR:[.6,0,-.1],shinR:[.4,0,0],legL:[-.7,0,.1],shinL:[.6,0,0],by:-.12,bz:.2}],[30,{armL:[-1.5,0,.15],foreL:[-.3,0,0],torso:[.4,-.7,0],armR:[.4,0,-.4],wep:[1,0,0],legR:[-.6,0,-.1],shinR:[.4,0,0],legL:[.6,0,.1],shinL:[.6,0,0],by:-.12,bz:.2}],[48,qt]]},upb:{total:42,helpless:!0,helplessLag:24,ledgeGrab:14,noDrift:!0,keepVel:!0,noGravity:[4,24],alpha:.9,trail:"sword",trailF:[4,24],hit:[be(5,7,.3,1.2,.95,3,88,40,8,{group:1,link:!0}),be(9,11,.3,1.3,.95,3,88,40,8,{group:2,link:!0}),be(13,15,.3,1.4,.95,3,88,40,8,{group:3,link:!0}),be(19,22,.3,1.9,1.05,6,75,60,90,{group:4})],onStart(n){n.upBUsed=!0,n.vx*=.4},onFrame(n,t){t<4&&(n.vy=n.grounded?0:Math.max(n.vy,0)*.5),t===4&&(n.grounded=!1,n.surface=null,n.y+=.02,mt.whoosh(1),n.battle.effects.ring(n.x,n.y+.2,16765024,2,14)),t>=4&&t<=24&&(n.vy=.36*(1-(t-4)/21)+.015,n.vx=oi(n.vx,n.input.stick.x*.12,.014),t%2===0&&n.battle.effects.sparkle(n.x,n.y+1,16769930,1,.5)),t>24&&n.drift(.6),t%4===1&&t<22&&mt.slash(.3)},anim:(()=>{let n={armR:[-2.2,0,-.9],foreR:[0,0,0],wep:[1.2,0,0],armL:[-.5,0,.8],foreL:[-1.2,0,0],legR:[-.3,0,-.1],shinR:[.6,0,0],legL:[.1,0,.1],shinL:[.3,0,0],head:[-.3,0,0]};return[[0,{...qt,by:-.25,legR:[-.8,0,-.15],shinR:[1.4,0,0],legL:[-.8,0,.15],shinL:[1.4,0,0]}],[4,{...n,body:[0,0,0]}],[12,{...n,body:[0,Math.PI*3,0]}],[22,{...n,body:[0,Math.PI*6,0]}],[42,{...wn,body:[0,Math.PI*6,0]}]]})()},downb:{total:50,counter:[5,28],fall:.3,landContinue:!0,onFrame(n,t){t===5&&mt.counter()},anim:[[0,qt],[5,{armL:[-1.5,0,.35],foreL:[-.6,0,0],torso:[.1,-.7,0],armR:[.3,0,-.5],foreR:[-.8,0,0],wep:[.9,0,0],by:-.14,legR:[-.5,0,-.1],shinR:[.7,0,0],legL:[.5,0,.1],shinL:[.4,0,0]}],[28,{armL:[-1.45,0,.35],foreL:[-.6,0,0],torso:[.1,-.6,0],armR:[.3,0,-.5],wep:[.9,0,0],by:-.12}],[50,qt]]},counterhit:{total:36,intang:[0,14],trail:"sword",trailF:[4,10],sfx:[5,"slash",1],alpha:.7,hit:[be(6,9,1.5,1.1,.85,n=>Re(n.counterDmg*1.3,8,35),38,60,88)],onFrame(n,t){t===6&&n.battle.effects.ring(n.x+n.facing*1.4,n.y+1.1,16773296,3,14)},anim:[[0,{...qt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,-.3,0]}],[6,{...rn,armR:[-1.6,0,.2],foreR:[0,0,0],wep:[1.3,0,0],torso:[.5,.5,0],bz:.3}],[20,{...rn,armR:[-1.5,0,.2],wep:[1.3,0,0],torso:[.4,.4,0],bz:.25}],[36,qt]]},final:{total:100,fs:!0,intang:[0,100],noGravity:[0,100],noDrift:!0,keepVel:!0,trail:"sword",trailF:[50,60],onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,45)},onFrame(n,t){let e=n.battle,i=e.effects;if(n.vx=0,n.grounded||(n.vy=0),t<45&&t%2===0){let s=n.model.trails.sword[1].getWorldPosition(e.tmpV);i.sparkle(s.x,s.y,t%4?16765024:16777215,2,.4)}t===54&&(e.spawnProjectile(n,{x:n.x+n.facing*1.6,y:n.y+1.2,vx:n.facing*.42,vy:0,r:1.9,dmg:32,ang:38,bkb:110,kbg:92,life:90,color:16765024,kind:"fswave",fs:!0}),e.shakeCam(.5),mt.fsBoom())},anim:[[0,qt],[20,{...qt,armR:[-3,0,-.2],foreR:[0,0,0],wep:[1.5,0,0],torso:[-.2,0,0],head:[-.4,0,0],armL:[-.4,0,.6],legR:[-.2,0,-.15],legL:[.2,0,.15]}],[45,{...qt,armR:[-3,0,-.2],foreR:[0,0,0],wep:[1.5,0,0],torso:[-.25,0,0],head:[-.4,0,0]}],[50,{...qt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.35,-.3,0]}],[55,{...rn,armR:[-1.7,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.5,.3,0],by:-.28,bz:.3}],[80,{...rn,armR:[-1.6,0,-.1],wep:[1.6,0,0],torso:[.45,.3,0],by:-.26,bz:.25}],[100,qt]]},grab:{total:34,hit:[be(7,8,.85,1.05,.5,0,0,0,0,{type:"grab"})],anim:[[0,qt],[7,{...qt,armL:[-1.5,0,-.1],foreL:[0,0,0],armR:[-1,0,-.3],torso:[.25,-.3,0],bz:.12}],[16,{...qt,armL:[-1.4,0,-.1],foreL:[-.1,0,0],torso:[.2,-.2,0]}],[34,qt]]},dashgrab:{total:40,keepVel:!0,hit:[be(9,10,1.05,1.05,.55,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,qt],[9,{...qt,armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,-.3,0],bz:.15}],[22,{...qt,armL:[-1.4,0,-.1],torso:[.3,-.2,0]}],[40,qt]]},pummel:{total:18,pummelAt:6,pummelDmg:2,anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[6,{...qt,armL:[-1.35,0,-.05],armR:[-1.2,0,.3],foreR:[-.9,0,0],torso:[.2,.4,0]}],[18,{...qt,armL:[-1.35,0,-.05]}]]},fthrow:{total:34,throwAt:12,throwHit:{dmg:9,ang:40,bkb:70,kbg:68},hold:n=>[.85,.2],anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[8,{...qt,armL:[-.4,0,.5],foreL:[-1.5,0,0],torso:[-.1,-.5,0]}],[12,{...rn,armL:[-1.5,0,.1],foreL:[-.2,0,0],torso:[.35,-.6,0],bz:.25}],[34,qt]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:11,ang:140,bkb:60,kbg:88},hold:n=>{let t=Math.min(1,n/16);return[.85*Math.cos(Math.PI*t),.3+.5*Math.sin(Math.PI*t)]},anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[16,{...qt,body:[0,Math.PI,0],armL:[-2,0,.3],torso:[.2,0,0]}],[24,{...qt,body:[0,Math.PI*2,0]}],[40,{...qt,body:[0,Math.PI*2,0]}]]},uthrow:{total:40,throwAt:14,throwHit:{dmg:9,ang:90,bkb:75,kbg:75},hold:n=>[.6-n*.03,.2+n*.13],anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[14,{...qt,armL:[-3,0,.1],foreL:[0,0,0],by:.05,head:[-.4,0,0]}],[40,qt]]},dthrow:{total:40,throwAt:16,throwHit:{dmg:7,ang:80,bkb:60,kbg:40},hold:n=>[.85,Math.max(0,.2-n*.02)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.8,n.y,8,0),n.battle.shakeCam(.06))},anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[10,{...qt,armL:[-2.6,0,.3],armR:[-2.4,0,-.3],wep:[.4,0,0],by:.05}],[16,{...qt,armL:[-.8,0,.3],armR:[-.8,0,-.3],wep:[1.8,0,0],torso:[.5,0,0],by:-.25}],[40,qt]]},getupattack:{total:32,intang:[0,9],alpha:.8,trail:"sword",trailF:[7,12],hit:[be(8,10,1.2,.4,.62,7,40,60,50,{away:!0}),be(8,10,-1.2,.4,.62,7,40,60,50,{away:!0})],anim:[[0,{by:-.5,torso:[.4,0,0]}],[8,{by:-.3,body:[0,0,0],armR:[-1.4,0,-1.2],wep:[1.5,0,0]}],[14,{by:-.3,body:[0,Math.PI*2,0],armR:[-1.4,0,-1.2],wep:[1.5,0,0]}],[32,{...qt,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:36,intang:[0,10],trail:"sword",trailF:[8,14],sfx:[9,"slash",.6],hit:[be(10,13,1.2,.5,.7,8,40,60,50)],anim:[[0,{by:-.3,torso:[.5,0,0]}],[10,{...rn,armR:[-1,0,.3],foreR:[0,0,0],wep:[1,0,0],torso:[.4,.4,0]}],[20,{...rn,armR:[-.9,0,.3],wep:[1,0,0],torso:[.3,.3,0]}],[36,qt]]}},N0={id:"dullahan",name:"\u30C7\u30E5\u30E9\u30CF\u30F3",en:"DULLAHAN",title:"\u9EC4\u91D1\u306E\u9996\u306A\u3057\u9A0E\u58EB",color:16762938,css:"#ffc83a",desc:"\u515C\u306E\u5965\u306B\u708E\u3060\u3051\u304C\u706F\u308B\u3001\u4E2D\u8EAB\u306E\u306A\u3044\u751F\u3051\u308B\u7532\u5191\u3002\u5927\u5263\u306E\u30EA\u30FC\u30C1\u3068\u4E00\u6483\u306E\u91CD\u3055\u3001\u30A2\u30FC\u30DE\u30FC\u7A81\u9032\u3068\u30AB\u30A6\u30F3\u30BF\u30FC\u304C\u6B66\u5668\u306E\u91CD\u91CF\u7D1A\u3002",specials:["\u30B5\u30F3\u30E9\u30F3\u30B9\uFF08\u305F\u3081\u7A81\u304D\uFF09","\u30B4\u30FC\u30EB\u30C7\u30F3\u30E9\u30C3\u30B7\u30E5\uFF08\u30A2\u30FC\u30DE\u30FC\u4F53\u5F53\u305F\u308A\uFF09","\u30E9\u30A4\u30B8\u30F3\u30B0\u30AF\u30EC\u30B9\u30C8\uFF08\u4E0A\u6607\u65AC\u308A\uFF09","\u30D6\u30EB\u30EF\u30FC\u30AF\uFF08\u30AB\u30A6\u30F3\u30BF\u30FC\uFF09"],stats:{weight:116,height:2.05,radius:.46,walkSpeed:.075,dashSpeed:.15,dashFrames:12,runSpeed:.135,traction:.011,airSpeed:.088,airAccel:.0065,airFriction:.003,gravity:.0095,fallSpeed:.18,fastFall:.28,jumpV:.25,hopV:.16,djV:.235,airJumps:1,jumpsquat:4,rollSpeed:.125},grabHold:[.85,.2],counterMove:"counterhit",buildModel:Lf,anims:As({idle:qt,hipY:Wc,bob:.8,shieldExtra:{armL:[-1.4,0,.2],foreL:[-.5,0,0],armR:[.2,0,-.4],foreR:[-.8,0,0],wep:[1.2,0,0]},holdExtra:{armR:[-.35,0,-.3],foreR:[-.8,0,0],wep:[1.6,0,0],armL:[-1.4,0,-.05],foreL:[-.2,0,0]},runExtra:()=>({armR:[-.3,0,-.3],foreR:[-.9,0,0],wep:[1.9,0,0]}),override:{victory:n=>({armR:[-3*Math.min(1,n/30),0,-.25],foreR:[0,0,0],wep:[1.55,0,0],armL:[-.4,0,.3],foreL:[-1.2,0,0],legR:[-.2,0,-.15],legL:[.2,0,.15],torso:[-.1,.1,0],head:[-.25,0,0]})}}),moves:uv}});function Uf(n=0){let t=Df[n%Df.length],e=new Ht,i={},s={},r=hi(t.red,{rough:.6,metal:.02,env:.45,emissive:new xt(t.dark).multiplyScalar(.1)});r.flatShading=!0;let a=hi(t.belly,{rough:.55,metal:.03,env:.5}),o=hi(t.claw,{rough:.3,metal:.05,env:.8}),l=hi(t.frill,{rough:.5,metal:.1,env:.6,emissive:new xt(t.frill).multiplyScalar(.06),side:ke}),c=hi(5900296,{rough:.6}),h=hi(14173966,{rough:.7,env:.3}),d=Ei(t.eye,1),u=new Le({color:t.membrane,roughness:.75,metalness:0,envMapIntensity:.5,side:Vi}),f=new Le({color:new xt(t.red).multiplyScalar(.82),roughness:.95,metalness:0,envMapIntensity:.15,side:Ze}),g=[r,a,l],v=g.map(U=>U.emissive.clone()),m=_e("body",e,0,Xc,0);i.body=m;let p=_e("hips",m);i.hips=p;let b=_e("torso",p);i.torso=b,N(q(new Dt(.25,10,7),r),p,0,.02,-.02,0,0,0,[1,.8,.95]);let T=new F0(t),_=new Ht;_.userData.keep=!0,T.mesh.userData.keep=!0,T.tip.userData.keep=!0,_.add(T.mesh,T.tip),_.position.set(0,.02,-.08),p.add(_);let w=new se;i.wisp=w,e.add(w),N(q(Ae([[.15,0],[.16,.12],[.22,.3],[.35,.48],[.4,.6],[.33,.71],[.18,.78],[.12,.8]],10),r),b,0,0,0,0,0,0,[.82,1,.74]);for(let U of[-1,1])N(q(new Dt(1,7,5),r),b,U*.13,.57,.17,0,0,U*-.2,[.16,.13,.11]),N(q(new Dt(1,7,5),r),b,U*.24,.68,-.02,0,0,U*.4,[.15,.12,.15]),N(q(new Dt(1,6,5),r),b,U*.16,.3,.12,0,0,0,[.08,.15,.085]);for(let U=0;U<9;U++){let j=.72-U*.082,lt=.2-U*.008,nt=[.2,.28,.35,.35,.3,.25,.23,.2,.19][U];N(q(new Dt(1,14,6),a),b,0,j,nt*.74+(U<4?.035:0),-.12,0,0,[lt*1.2,.058,.07])}for(let U=0;U<3;U++)N(q(new Dt(1,12,6),a),p,0,0-U*.075,.2-U*.03,.25+U*.25,0,0,[.15-U*.02,.05,.06]);let E=r.clone();E.color=new xt(t.red).lerp(new xt(t.dark),.55);for(let U=0;U<5;U++){let j=q(new ce(.2-U*.012,.2,4),E);N(j,b,0,.2+U*.125,-[.17,.21,.27,.32,.28][U],Math.PI-.15,0,0,[1,1,.22])}for(let U=0;U<4;U++){let j=q(new ce(.1,.16,4),r);N(j,b,0,.3+U*.12,-.24-(U===2?.02:0),-1.9,0,0,[1,1,.45])}let C=_e("head",b,0,.74,.04);i.head=C,N(q(Yi(.3,.13,.17,8),r),C,0,.28,.06,-.35,0,0);for(let U=0;U<4;U++)N(q(new Dt(1,8,5),a),C,0,.04+U*.075,.125+U*.035,-.3,0,0,[.085,.04,.045]);let y=new Ht;N(y,C,0,.4,.13,.05,0,0,1.08);let R=(U,j,lt,nt,Mt,Lt,zt,I,J=r)=>{let A=Ae(U,4);return A.rotateY(Math.PI/4),N(q(A,J),j,lt,nt,Mt,Lt,0,0,[zt,1,I])};N(q(new Dt(.15,10,8),r),y,0,0,.02,0,0,0,[1.05,.8,1.25]);{let U=Ae([[.125,0],[.105,.12],[.078,.25],[.045,.33],[0,.35]],6);N(q(U,r),y,0,0,.1,Math.PI/2-.08,0,0,[.72,1,.6])}let D=new Ht;N(D,y,0,-.06,.06,.68,0,0);{let U=Ae([[.1,0],[.08,.12],[.05,.24],[.015,.3],[0,.31]],6);N(q(U,r),D,0,-.02,0,Math.PI/2,0,0,[.95,1,.4])}{let U=Ae([[.11,0],[.092,.12],[.066,.25],[.03,.32]],6);N(q(U,c),y,0,-.03,.1,Math.PI/2-.08,0,0,[.66,1,.3])}{let U=Ae([[.09,0],[.07,.12],[.042,.24],[.01,.29]],6);N(q(U,c),D,0,-.002,0,Math.PI/2,0,0,[.9,1,.3])}N(q(new Dt(.075,8,6),c),y,0,-.05,.08,0,0,0,[1,.8,1]),N(q(new Dt(1,8,6),h),D,0,.02,.11,0,0,0,[.046,.02,.11]);for(let U of[-1,1]){for(let nt=0;nt<6;nt++){let Mt=.15+nt*.038,Lt=U*(.085-nt*.011);N(q(new ce(.005,.018,4),o),y,Lt*.82,-.058-nt*.003,Mt,Math.PI,0,0),N(q(new ce(.0045,.016,4),o),D,U*(.048-nt*.006),.022,.05+nt*.04,0,0,0)}N(q(new Fe(.1,.035,.12),r),y,U*.085,.085,.12,.35,U*-.25,U*.5),N(q(new Dt(.03,8,6),c),y,U*.083,.05,.148,0,0,0,[1.3,.8,.8]),N(q(new Dt(.014,8,6),d),y,U*.085,.05,.168,0,0,U*.4,[1.5,.38,.7]);let j=new ci;j.moveTo(0,.02),j.lineTo(.11,.07),j.lineTo(.085,.015),j.lineTo(.125,-.02),j.lineTo(.08,-.035),j.lineTo(.1,-.085),j.lineTo(0,-.05);let lt=new On(j);N(q(lt,l),y,U*.12,-.01,0,0,U<0?Math.PI+.75:-.75,U*.1,1.1),N(q(new ce(.07,.22,5),r),y,U*.11,.13,-.05,-.3,0,U*-.9,[1,1,.5]),N(q(new ce(.045,.14,5),r),y,U*.14,.04,-.06,-.3,0,U*-1.25,[1,1,.5])}N(q(new ce(.085,.3,5),r),y,0,.21,-.05,-.3,0,0,[1,1,.5]),N(q(new Dt(1,8,5),r),y,0,.09,-.07,-.3,0,0,[.17,.09,.04]),N(q(new ce(.03,.1,4),r),y,0,.07,.36,.5,0,0);let F={};for(let U of[-1,1]){let j=U<0,lt=_e(j?"armR":"armL",b,U*.33,.6,0);i[j?"armR":"armL"]=lt,lt.scale.setScalar(1.15),N(q(new Dt(.12,8,6),r),lt,0,0,0),N(q(Yi(.3,.095,.078,8),r),lt,0,0,0),N(q(new Dt(1,7,5),r),lt,0,-.14,.05,0,0,0,[.105,.14,.105]);let nt=_e(j?"foreR":"foreL",lt,0,-.3,0);i[j?"foreR":"foreL"]=nt,N(q(Yi(.3,.085,.062,10),r),nt,0,0,0),N(q(new Dt(1,7,5),r),nt,0,-.08,-.02,0,0,0,[.095,.11,.09]);let Mt=new Ht;N(Mt,nt,0,-.3,.02,0,0,0,1.3),N(q(new Dt(1,12,10),r),Mt,0,0,0,0,0,0,[.075,.065,.085]);for(let I=0;I<4;I++){let J=new Ht;N(J,Mt,(I-1.5)*.045*U,-.04,.04,-.3,0,(I-1.5)*.22*U),N(q(Yi(.06,.022,.018,8),r),J,0,0,0);let A=new Ht;N(A,J,0,-.06,0,-.5,0,0),N(q(Yi(.04,.018,.014,8),r),A,0,0,0),N(q(new ce(.017,.1,5),o),A,0,-.075,0,Math.PI,0,0)}let Lt=new se;nt.add(Lt);let zt=new se;zt.position.set(0,-.45,.05),nt.add(zt),F[j?"handR":"handL"]=[Lt,zt]}for(let U of[-1,1]){let j=U<0,lt=_e(j?"legR":"legL",p,U*.17,-.02,0);i[j?"legR":"legL"]=lt,N(q(Yi(.52,.19,.13,12),r),lt,0,0,0,0,0,0,[1,1,1.3]),N(q(new Dt(1,10,8),r),lt,U*.07,-.17,.06,0,0,0,[.15,.26,.2]);let nt=_e(j?"shinR":"shinL",lt,0,-.53,0);nt.scale.setScalar(1.3),i[j?"shinR":"shinL"]=nt;let Mt=(J,A,dt,vt)=>{let S=new P(...J),x=new P(...A),B=S.distanceTo(x),Z=new Be(vt,dt,B,10);Z.translate(0,B/2,0);let z=q(Z,r);z.position.copy(S),z.quaternion.setFromUnitVectors(new P(0,1,0),x.clone().sub(S).normalize()),nt.add(z)};N(q(new Dt(.13,10,8),r),nt,0,0,0),Mt([0,0,0],[0,-.27,-.15],.125,.085),N(q(new Dt(.09,10,8),r),nt,0,-.27,-.15),Mt([0,-.27,-.15],[0,-.46,.03],.085,.075),N(q(new Dt(1,8,6),r),nt,0,-.13,-.11,0,0,0,[.1,.13,.09]),N(q(new ce(.035,.16,6),o),nt,0,-.27,-.24,-2,0,0);let Lt=new Ht;N(Lt,nt,0,-.47,.05,-.45,0,U*-.42),N(q(new Dt(1,10,6),r),Lt,0,0,.08,0,0,0,[.16,.075,.23]);for(let J=0;J<4;J++){let A=(J-1.5)*.075;N(q(new Dt(1,10,8),r),Lt,A,-.01,.27,0,0,0,[.04,.04,.08]),N(q(new ce(.036,.15,5),o),Lt,A,-.025,.37,Math.PI/2+.3,0,0)}let zt=new se;nt.add(zt);let I=new se;I.position.set(0,-.5,.2),nt.add(I),F[j?"footR":"footL"]=[zt,I]}F.tail=[new se,new se],p.add(F.tail[0]),p.add(F.tail[1]),F.tail[0].position.set(0,0,-.5),F.tail[1].position.set(0,-.3,-1.6);let V=U=>.16*U*U,Y=new ci,k=[0,0],W=[.3,.36],K=[.62,.58],et=[1.45,.56],gt=[2.1,-.2],rt=[1.4,-.48],ot=[.9,-.2],ut=[.58,-.06],Ut=[.2,-.06],Nt=(U,j)=>[(U[0]+j[0])/2*.55+K[0]*.45,(U[1]+j[1])/2*.55+K[1]*.45];Y.moveTo(...k),Y.lineTo(...W),Y.lineTo(...K),Y.quadraticCurveTo(...et,...gt);for(let[U,j]of[[gt,rt],[rt,ot],[ot,ut],[ut,Ut]])Y.quadraticCurveTo(...Nt(U,j),...j);Y.lineTo(...k);let re=new On(Y,10),ne=re.attributes.position;for(let U=0;U<ne.count;U++){let j=ne.getX(U),lt=ne.getY(U);ne.setZ(U,V(j)-.08*Math.sin(Math.min(1,Math.hypot(j-K[0],lt-K[1])/1.2)*Math.PI))}re.computeVertexNormals();let ae=(U,j,lt,nt,Mt)=>{let Lt=new P(U[0],U[1],V(U[0])),zt=new P(j[0],j[1],V(j[0])),I=Lt.distanceTo(zt),J=new Be(nt,lt,I,7);J.translate(0,I/2,0);let A=new At(J,r);A.position.copy(Lt),A.quaternion.setFromUnitVectors(new P(0,1,0),zt.clone().sub(Lt).normalize()),Mt.add(A)},st=[];for(let U of[-1,1]){let j=U<0?"earR":"earL",lt=_e(j,b,U*.14,.64,-.2);s[j]=[-.3,U*-.3,U*-.05],lt.rotation.set(...s[j]),i[j]=lt;let nt=new Ht;nt.userData.keep=!0,nt.scale.set(U*1.35,1.3,1.3),lt.add(nt),nt.add(mi(re,u,f)),ae(k,W,.055,.045,nt),ae(W,K,.045,.035,nt);let Mt=[(K[0]+2*et[0]+gt[0])/4,(K[1]+2*et[1]+gt[1])/4];ae(K,Mt,.032,.022,nt),ae(Mt,gt,.022,.01,nt);for(let Lt of[rt,ot,ut])ae(K,Lt,.028,.01,nt);N(q(new ce(.035,.14,6),o),nt,K[0],K[1]+.06,V(K[0]),0,0,0),st.push(nt)}Vn(e);let ht={j:i,base:s,hipY:Xc,flare:0},Tt=new se;Tt.position.set(0,-.06,.34),y.add(Tt);let jt=Tt,kt=Rs(0,null,1.5),Yt=0,ue=0;return{root:e,rig:ht,trails:F,worldObjects:[],orbPoint:jt,mouth:Tt,shadow:kt,height:2.25,headY:2.7,trailColor:n?7330047:16752704,update(U,j){Yt+=U;let lt=w.rotation.x,nt=w.rotation.y,Mt=e.rotation.y,Lt=(j.vx||0)*Math.sin(Mt);T.update(lt+Math.min(.4,Math.abs(Lt)*2),nt,Yt);let zt=j.air?j.vy>.02?1:.4:0;ue+=(zt-ue)*.1;let I=Math.sin(Yt*14)*.45*ue;st[0].rotation.z=-I,st[1].rotation.z=I},setFlash(U,j){g.forEach((lt,nt)=>{lt.emissive.copy(v[nt]),j>0&&lt.emissive.lerp(U,j*.8)}),T.mat.emissive.setRGB(0,0,0),j>0&&T.mat.emissive.copy(U).multiplyScalar(j*.8)},dispose(){as(e)}}}var Df,Xc,F0,Nf=Ye(()=>{Si();Js();ao();Js();Df=[{red:9311500,dark:5638662,belly:12622416,membrane:10254914,claw:16051440,spike:16765482,frill:11042860,eye:6195758},{red:2375818,dark:1320534,belly:13030630,membrane:5933752,claw:15791359,spike:6285055,frill:9427199,eye:16765514}],Xc=1.26,F0=class{constructor(t,e=20,i=12){this.n=e,this.radial=i;let s=(e+1)*i;this.pos=new Float32Array(s*3);let r=new Float32Array(s*3),a=new xt(t.red),o=new xt(t.belly),l=new xt(t.dark),c=new xt;for(let f=0;f<=e;f++)for(let g=0;g<i;g++){let v=g/i*Math.PI*2,m=Math.cos(v)<-.35;c.copy(m?o:a),f%2===0&&c.lerp(l,m?.18:.25);let p=(f*i+g)*3;r[p]=c.r,r[p+1]=c.g,r[p+2]=c.b}let h=[];for(let f=0;f<e;f++)for(let g=0;g<i;g++){let v=f*i+g,m=f*i+(g+1)%i,p=v+i,b=m+i;h.push(v,m,p,m,b,p)}let d=new ye;this.attr=new He(this.pos,3),this.attr.setUsage(Za),d.setAttribute("position",this.attr),d.setAttribute("color",new He(r,3)),d.setIndex(h),this.geo=d,this.mat=new Le({vertexColors:!0,roughness:.6,metalness:.02,envMapIntensity:.45,flatShading:!0}),this.mesh=new At(d,this.mat),this.mesh.frustumCulled=!1,this.pts=Array.from({length:e+1},()=>new P),this.tip=new Ht;let u=new Le({color:t.spike,emissive:new xt(t.spike).multiplyScalar(.35),roughness:.3,metalness:.2});for(let[f,g,v]of[[0,0,.42],[.55,.35,.34],[-.55,.35,.34],[.3,-.5,.28],[-.3,-.5,.28]]){let m=new At(new ce(.035,v,5),u);m.geometry.translate(0,v/2,0),m.rotation.set(Math.PI/2+g*.6,f,0),this.tip.add(m)}this.tip.scale.setScalar(2),this._t=new P,this._n=new P,this._b=new P}update(t,e,i){let{n:s,pts:r}=this;for(let u=0;u<=s;u++){let f=u/s,g=Math.sin(i*2.2-f*4)*.08*f,v=e*f*1.6+g,m=1.95*f,p=.02-2.3*f+1.3*f*f+t*f*f*1.2;r[u].set(Math.sin(v)*m,p,-Math.cos(v)*m-.12)}let a=this._t,o=this._n,l=this._b,c=new P(0,1,0);for(let u=0;u<=s;u++){let f=u/s,g=r[Math.max(0,u-1)],v=r[Math.min(s,u+1)];a.subVectors(v,g).normalize(),o.crossVectors(a,c).normalize(),l.crossVectors(o,a).normalize();let m=.2*Math.pow(1-f,.9)+.018;u%2===1&&(m*=1.16);for(let p=0;p<this.radial;p++){let b=p/this.radial*Math.PI*2,T=Math.sin(b)*m,_=Math.cos(b)*m*.9,w=(u*this.radial+p)*3;this.pos[w]=r[u].x+o.x*T+l.x*_,this.pos[w+1]=r[u].y+o.y*T+l.y*_,this.pos[w+2]=r[u].z+o.z*T+l.z*_}}this.attr.needsUpdate=!0,this.geo.computeVertexNormals();let h=r[s],d=r[s-1];this.tip.position.copy(h),a.subVectors(h,d).normalize(),this.tip.quaternion.setFromUnitVectors(new P(0,0,1),a)}}});function Ff(n,t=1.1,e=.02){let i=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.spawnProjectile(n,{x:i.x+n.facing*.15,y:i.y,vx:n.facing*(.24+Ot(0,.04)),vy:-.025+Ot(-e,e),r:.18,rMax:.72,dmg:t,ang:35,bkb:10,kbg:22,life:22,color:16738842,kind:"flame"})}var Ue,Ct,_i,un,Cs,B0,k0,O0,H0,Yr,dv,z0,Bf=Ye(()=>{Nf();oo();hn();rs();Ue=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),Ct={by:-.05,legR:[-.85,0,-.45],shinR:[1.3,0,0],legL:[-.8,0,.45],shinL:[1.25,0,0],torso:[.36,0,0],head:[-.3,0,0],armR:[-.25,0,-.95],foreR:[-.75,0,.55],armL:[-.25,0,.95],foreL:[-.75,0,-.55],wisp:[0,.36,0]},_i={legR:[-.8,0,-.2],shinR:[1.2,0,0],legL:[-.5,0,.2],shinL:[1,0,0],armR:[-.6,0,-.8],foreR:[-.8,0,0],armL:[-.6,0,.8],foreL:[-.8,0,0],torso:[.15,0,0],head:[-.2,0,0]},un={legR:[-1.3,0,-.2],shinR:[1.8,0,0],legL:[-1.2,0,.2],shinL:[1.7,0,0]},Cs={...Ct,armR:[-1.55,0,-.05],foreR:[0,0,0],torso:[.28,.45,0],bz:.15},B0={...Ct,armL:[-1.55,0,.05],foreL:[0,0,0],torso:[.28,-.45,0],bz:.15},k0={...Ct,armR:[.4,0,-.6],foreR:[-1.6,0,0],torso:[.1,-.4,0]},O0={...Ct,armR:[-2.9,0,-.25],foreR:[-.6,0,0],armL:[-2.9,0,.25],foreL:[-.6,0,0],torso:[-.2,0,0],head:[-.4,0,0],by:.21},H0={...Ct,armR:[-1,0,.25],foreR:[-.1,0,0],armL:[-1,0,-.25],foreL:[-.1,0,0],torso:[.6,0,0],head:[-.4,0,0],by:-.01,bz:.25},Yr={...Ct,torso:[-.15,0,0],head:[-.6,0,0],armR:[-.6,0,-1.1],armL:[-.6,0,1.1],earL:[0,0,.55],earR:[0,0,-.55]};dv={jab1:{total:20,next:"jab2",nextWin:[6,19],trail:"handR",trailF:[3,7],sfx:[3,"whoosh",.3],hit:[Ue(4,5,.95,1.3,.5,3,70,8,25)],anim:[[0,Ct],[2,k0],[5,Cs],[13,Cs],[20,Ct]]},jab2:{total:20,next:"jab3",nextWin:[6,19],trail:"handL",trailF:[3,7],sfx:[3,"whoosh",.3],hit:[Ue(4,5,.95,1.3,.5,4,70,8,25)],anim:[[0,Cs],[5,B0],[13,B0],[20,Ct]]},jab3:{total:32,trail:"handR",trailF:[4,10],sfx:[4,"whoosh",.6],hit:[Ue(6,8,.9,1.55,.62,6,50,50,80)],anim:[[0,B0],[4,{...Ct,armR:[.2,0,-.4],foreR:[-1.2,0,0],torso:[.3,-.3,0],by:.03}],[7,{...Ct,armR:[-2.5,0,-.2],foreR:[-.4,0,0],torso:[-.1,.4,0],by:.23}],[18,{...Ct,armR:[-2.3,0,-.2],torso:[-.05,.3,0]}],[32,Ct]]},ftilt:{total:34,trail:"handR",trailF:[7,12],sfx:[7,"whoosh",.7],hit:[Ue(9,11,1.3,1.25,.55,11,36,34,96),Ue(9,11,.7,1.25,.5,10,36,34,96)],anim:[[0,Ct],[6,k0],[10,{...Cs,legR:[-.8,0,-.18],shinR:[.8,0,0],legL:[.2,0,.18],by:.03,bz:.3}],[20,{...Cs,bz:.25}],[34,Ct]]},utilt:{total:32,trail:"handR",trailF:[6,12],sfx:[6,"whoosh",.6],hit:[Ue(7,12,0,0,.62,10,88,40,95,{path:[[.95,1.9],[-.6,2.2]]})],anim:[[0,Ct],[5,{...Ct,armR:[-.8,0,-.5],foreR:[-.3,0,0],torso:[.3,0,0]}],[9,{...Ct,armR:[-2.6,0,-.3],foreR:[-.2,0,0],torso:[-.1,.2,0],head:[-.5,0,0],by:.21}],[13,{...Ct,armR:[-3.1,0,-.1],foreR:[-.3,0,0],torso:[-.25,.2,0],head:[-.5,0,0],by:.21}],[32,Ct]]},dtilt:{total:30,alpha:.8,trail:"tail",trailF:[3,12],sfx:[4,"whoosh",.6],hit:[Ue(6,9,1.35,.25,.62,8,72,45,55),Ue(6,9,.6,.25,.5,8,72,45,55)],anim:[[0,{...Ct,by:-.04}],[3,{...Ct,by:-.09,body:[0,0,0],wisp:[-.4,0,0]}],[7,{...Ct,by:-.09,body:[0,Math.PI,0],wisp:[-.6,0,0],torso:[.5,0,0]}],[14,{...Ct,by:-.07,body:[0,Math.PI*2,0],wisp:[-.3,0,0]}],[30,{...Ct,body:[0,Math.PI*2,0]}]]},dashattack:{total:44,keepVel:!0,sfx:[7,"whoosh",.8],hit:[Ue(8,14,.9,1.1,.75,12,45,55,72),Ue(15,20,.85,1.1,.65,8,45,40,60)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=18?n.vx=oi(n.vx,n.facing*.16,.01):n.friction(2.2),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,Ct],[8,{...Ct,torso:[.6,-.5,0],armL:[-1.2,0,.3],armR:[.3,0,-.6],legR:[.4,0,-.1],legL:[-.8,0,.1],shinL:[.8,0,0],bz:.25,head:[-.5,0,0]}],[24,{...Ct,torso:[.5,-.4,0],bz:.2}],[44,Ct]]},fsmash:{total:58,smash:!0,charge:{f:8,max:60},trail:"handR",trailF:[14,20],sfx:[15,"whoosh",1],hit:[Ue(17,19,1.35,.8,.8,19,36,40,100),Ue(17,19,.7,1.4,.6,16,36,38,98)],onFrame(n,t){t===18&&(n.battle.effects.ring(n.x+n.facing*1.4,n.y+.1,16752704,2.8,16),n.battle.effects.dust(n.x+n.facing*1.4,n.y,8,n.facing),n.battle.shakeCam(.12))},anim:[[0,Ct],[7,O0],[15,{...O0,torso:[-.3,0,0]}],[18,H0],[32,H0],[58,Ct]]},usmash:{total:54,smash:!0,charge:{f:7,max:60},sfx:[12,"whoosh",1],hit:[Ue(13,17,.25,2.35,.8,17,88,40,98),Ue(13,17,.3,1.7,.6,15,85,40,96)],onFrame(n,t){t===13&&n.battle.effects.sparkle(n.x+n.facing*.3,n.y+2.5,16760928,6,.4)},anim:[[0,Ct],[7,{...Ct,by:-.09,torso:[.7,0,0],head:[.5,0,0],legR:[-.8,0,-.2],shinR:[1.3,0,0],legL:[-.8,0,.2],shinL:[1.3,0,0]}],[13,{...Yr,by:.31,torso:[-.25,0,0],head:[-.9,0,0],legR:[0,0,-.1],shinR:[.1,0,0],legL:[0,0,.1],shinL:[.1,0,0]}],[26,{...Yr,torso:[-.2,0,0],head:[-.8,0,0]}],[54,Ct]]},dsmash:{total:56,smash:!0,charge:{f:7,max:60},alpha:.85,trail:"tail",trailF:[9,20],sfx:[10,"whoosh",1],hit:[Ue(11,14,1.5,.35,.72,15,32,38,98,{away:!0}),Ue(11,14,-1.5,.35,.72,15,32,38,98,{away:!0}),Ue(15,17,.9,.35,.6,12,32,34,92,{away:!0})],anim:[[0,Ct],[7,{...Ct,by:-.09,torso:[.4,0,0],wisp:[-.5,0,0]}],[11,{...Ct,by:-.09,body:[0,0,0],wisp:[-.6,0,0],torso:[.4,0,0]}],[17,{...Ct,by:-.09,body:[0,Math.PI*2,0],wisp:[-.6,0,0],torso:[.4,0,0]}],[30,{...Ct,body:[0,Math.PI*2,0]}],[56,{...Ct,body:[0,Math.PI*2,0]}]]},nair:{total:42,aerial:!0,landLag:10,acBefore:5,acAfter:32,alpha:.85,trail:"tail",trailF:[6,14],sfx:[6,"whoosh",.8],hit:[Ue(7,13,0,.9,1.4,11,45,30,90,{away:!0})],anim:[[0,_i],[6,{...un,armR:[-.4,0,-1.2],armL:[-.4,0,1.2],body:[0,0,0],wisp:[.3,0,0]}],[14,{...un,armR:[-.4,0,-1.2],armL:[-.4,0,1.2],body:[0,Math.PI*2,0],wisp:[.3,0,0]}],[42,{..._i,body:[0,Math.PI*2,0]}]]},fair:{total:40,aerial:!0,landLag:13,acBefore:4,acAfter:30,trail:"handR",trailF:[8,14],sfx:[9,"whoosh",.8],hit:[Ue(10,13,0,0,.7,13,40,32,95,{path:[[1,2],[1.25,.6]]})],anim:[[0,_i],[7,{...un,armR:[-2.9,0,-.3],foreR:[-.3,0,0],torso:[-.2,.3,0]}],[12,{...un,armR:[-.7,0,-.1],foreR:[-.1,0,0],torso:[.5,.3,0]}],[24,{...un,armR:[-.6,0,-.1],torso:[.4,.2,0]}],[40,_i]]},bair:{total:40,aerial:!0,landLag:12,acBefore:4,acAfter:30,trail:"tail",trailF:[6,13],sfx:[7,"whoosh",.9],hit:[Ue(8,11,-1.55,.9,.72,14,145,38,98),Ue(8,11,-.8,.9,.6,12,145,34,92)],anim:[[0,_i],[5,{...un,wisp:[-.6,.5,0],torso:[.2,.3,0]}],[9,{...un,wisp:[1.1,-.2,0],torso:[.45,-.4,0],head:[0,-.6,0]}],[18,{...un,wisp:[.9,0,0],torso:[.4,-.3,0]}],[40,_i]]},uair:{total:38,aerial:!0,landLag:10,acBefore:3,acAfter:28,trail:"handR",trailF:[6,12],sfx:[6,"whoosh",.7],hit:[Ue(7,11,0,0,.72,11,85,32,95,{path:[[.85,2.2],[-.85,2.2]]})],anim:[[0,_i],[5,{...un,armR:[-1.4,0,-.4],armL:[-1.4,0,.4]}],[9,{...un,armR:[-3,0,-.3],armL:[-3,0,.3],foreR:[-.3,0,0],foreL:[-.3,0,0],head:[-.6,0,0],body:[-.2,0,0]}],[20,{...un,armR:[-2.8,0,-.3],armL:[-2.8,0,.3]}],[38,_i]]},dair:{total:50,aerial:!0,landLag:22,acBefore:3,acAfter:40,trail:"footR",trailF:[10,18],sfx:[11,"whoosh",.9],hit:[Ue(12,16,.05,-.15,.62,15,270,30,90),Ue(17,26,.05,0,.55,9,65,25,70)],onFrame(n,t){t<11&&(n.gravMult=.3),t===12&&!n.grounded&&(n.vy=Math.min(n.vy,-.3))},onLand(n){n.battle.effects.ring(n.x,n.y+.1,16752704,2.2,14),n.battle.effects.dust(n.x,n.y,8,0),n.battle.shakeCam(.1)},anim:[[0,_i],[8,{...un,legR:[-1.6,0,-.1],shinR:[2.2,0,0],legL:[-1.6,0,.1],shinL:[2.2,0,0],armR:[-2.6,0,-.5],armL:[-2.6,0,.5],earL:[0,0,.5],earR:[0,0,-.5],by:.36}],[12,{legR:[.1,0,-.08],shinR:[.05,0,0],legL:[.1,0,.08],shinL:[.05,0,0],armR:[-2.8,0,-.6],armL:[-2.8,0,.6],torso:[-.1,0,0],head:[.2,0,0],earL:[0,0,.7],earR:[0,0,-.7],by:.11}],[26,{legR:[.05,0,-.08],legL:[.05,0,.08],armR:[-2.6,0,-.6],armL:[-2.6,0,.6],earL:[0,0,.5],earR:[0,0,-.5]}],[50,_i]]},neutralb:{total:30,charge:{f:8,max:80},fall:.45,landContinue:!0,alpha:.5,noChargeFlash:!0,onCharge(n){let t=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.effects.spawn({x:t.x,y:t.y,z:.35,vx:n.facing*Ot(.18,.26),vy:Ot(-.035,0),life:12,size:.25,size1:.9,color:n.charge%2?16742938:16765008}),n.charge%4===0&&Ff(n),n.charge%12===0&&mt.fire()},onFrame(n,t){t===8&&mt.fire(),t>=8&&t<=16&&t%3===2&&Ff(n)},anim:[[0,Ct],[6,{...Ct,torso:[.05,0,0],head:[-.5,0,0],armR:[-.3,0,-.8],armL:[-.3,0,.8]}],[8,{...Ct,torso:[.3,0,0],head:[.05,0,0],bz:.12,armR:[-.4,0,-.9],armL:[-.4,0,.9]}],[18,{...Ct,torso:[.28,0,0],head:[0,0,0],bz:.1}],[30,Ct]]},sideb:{total:48,noGravity:[0,32],keepVel:!0,noDrift:!0,canLeaveGround:!0,ledgeGrab:10,landContinue:!0,hit:[Ue(9,30,.8,1.1,.82,13,40,55,75)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){let e=n.battle.effects;if(t<9)n.vx=oi(n.vx,0,.02),n.grounded||(n.vy=.004),t===4&&mt.fire();else if(t<=30){n.vx=n.facing*.3,n.vy=n.grounded?0:.02,t===9&&mt.whoosh(1);for(let i=0;i<2;i++)e.spawn({x:n.x+n.facing*Ot(0,.9),y:n.y+Ot(.5,1.7),z:.4,vx:-n.facing*.05,vy:.02,life:16,size:Ot(.4,.8),size1:.1,color:i?16734740:16765024})}else n.vx*=.85},anim:[[0,Ct],[8,{...Ct,torso:[.2,-.5,0],by:.01,armL:[-.4,0,.6],foreL:[-1.4,0,0]}],[10,{...Ct,torso:[.7,-.5,0],head:[-.6,0,0],armL:[-1.4,0,.3],foreL:[-.4,0,0],armR:[.4,0,-.5],legR:[.5,0,-.1],legL:[-.9,0,.1],shinL:[.8,0,0],earL:[0,0,-.3],earR:[0,0,.3],bz:.25}],[30,{...Ct,torso:[.7,-.5,0],head:[-.6,0,0],armL:[-1.4,0,.3],armR:[.4,0,-.5],earL:[0,0,-.3],earR:[0,0,.3],bz:.25}],[48,Ct]]},upb:{total:44,helpless:!0,helplessLag:24,ledgeGrab:14,noDrift:!0,keepVel:!0,noGravity:[4,26],hit:[Ue(5,10,0,1.2,1.15,8,80,60,70,{away:!0})],onStart(n){n.upBUsed=!0,n.vx*=.5},onFrame(n,t){t<4&&(n.vy=n.grounded?0:Math.max(n.vy,0)*.5),t===4&&(n.grounded=!1,n.surface=null,n.y+=.02,mt.whoosh(1),n.battle.effects.dust(n.x,n.y,8,0),n.battle.effects.ring(n.x,n.y+.4,16752704,2.4,14)),t>=4&&t<=26&&(n.vy=.34*(1-(t-4)/23)+.012,n.vx=oi(n.vx,n.input.stick.x*.11,.012),t%6===4&&mt.whoosh(.5)),t>26&&n.drift(.6)},anim:[[0,{...Ct,by:-.04}],[4,{..._i,earL:[0,0,.8],earR:[0,0,-.8],head:[-.5,0,0]}],[8,{..._i,earL:[0,0,-.6],earR:[0,0,.6],head:[-.5,0,0]}],[12,{..._i,earL:[0,0,.8],earR:[0,0,-.8]}],[16,{..._i,earL:[0,0,-.6],earR:[0,0,.6]}],[20,{..._i,earL:[0,0,.8],earR:[0,0,-.8]}],[24,{..._i,earL:[0,0,-.5],earR:[0,0,.5]}],[44,_i]]},downb:{total:48,landContinue:!0,alpha:.75,trail:"tail",trailF:[10,16],sfx:[11,"whoosh",1],hit:[Ue(14,16,1.3,.3,.8,13,80,60,70,{away:!0}),Ue(14,16,-1.3,.3,.8,13,80,60,70,{away:!0}),Ue(14,16,0,.5,.95,13,80,60,70,{away:!0})],onFrame(n,t){if(t===2&&n.grounded&&(n.vy=.13,n.grounded=!1,n.surface=null,n.y+=.02),t===12&&!n.grounded&&(n.vy=Math.min(n.vy,-.2)),t===14){let e=n.battle.effects;e.ring(n.x,n.y+.1,16752704,3.4,16),e.dust(n.x-1,n.y,6,-1),e.dust(n.x+1,n.y,6,1),n.battle.shakeCam(.18),mt.hit(.8)}},anim:[[0,{...Ct,by:-.04}],[5,{..._i,wisp:[1.3,0,0],body:[0,0,0]}],[12,{..._i,wisp:[1.3,0,0],body:[0,Math.PI,0]}],[15,{...Ct,wisp:[-.7,0,0],body:[0,Math.PI*2,0],by:-.09,torso:[.5,0,0]}],[30,{...Ct,body:[0,Math.PI*2,0]}],[48,{...Ct,body:[0,Math.PI*2,0]}]]},final:{total:110,fs:!0,intang:[0,110],noGravity:[0,110],noDrift:!0,keepVel:!0,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,45)},onFrame(n,t){let e=n.battle;if(n.vx=0,n.grounded||(n.vy=0),t<45&&t%3===0){let i=n.model.mouth.getWorldPosition(e.tmpV);e.effects.sparkle(i.x,i.y,t%6?16744496:16769136,2,.4)}if(t===55&&(e.spawnProjectile(n,{x:n.x+n.facing*1.6,y:n.y+1.3,vx:n.facing*.42,vy:0,r:1.9,dmg:32,ang:38,bkb:110,kbg:92,life:90,color:16732176,core:16769136,kind:"fswave",fs:!0}),e.shakeCam(.5),mt.fsBoom(),mt.fire()),t>=50&&t<=80){let i=n.model.mouth.getWorldPosition(e.tmpV);e.effects.spawn({x:i.x+n.facing*.3,y:i.y,z:.4,vx:n.facing*Ot(.2,.35),vy:Ot(-.04,.04),life:22,size:Ot(.6,1.2),size1:2,color:t%2?16734740:16765024})}},anim:[[0,Ct],[25,Yr],[45,Yr],[52,{...Ct,torso:[.4,0,0],head:[.1,0,0],bz:.2,earL:[0,0,.3],earR:[0,0,-.3]}],[85,{...Ct,torso:[.35,0,0],bz:.15}],[110,Ct]]},grab:{total:34,hit:[Ue(7,8,.95,1.1,.55,0,0,0,0,{type:"grab"})],anim:[[0,Ct],[7,{...Ct,armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,0,0],bz:.15}],[16,{...Ct,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.3,0,0]}],[34,Ct]]},dashgrab:{total:40,keepVel:!0,hit:[Ue(9,10,1.1,1.1,.6,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,Ct],[9,{...Ct,armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.45,0,0],bz:.2}],[22,{...Ct,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.4,0,0]}],[40,Ct]]},pummel:{total:18,pummelAt:6,pummelDmg:2,anim:[[0,{...Ct,armL:[-1.4,0,-.1],armR:[-1.4,0,.1]}],[6,{...Ct,armL:[-1.4,0,-.1],armR:[-1.4,0,.1],head:[.5,0,0],torso:[.4,0,0]}],[18,{...Ct,armL:[-1.4,0,-.1],armR:[-1.4,0,.1]}]]},fthrow:{total:34,throwAt:12,throwHit:{dmg:9,ang:40,bkb:70,kbg:70},hold:()=>[.95,.25],anim:[[0,{...Ct,armL:[-1.4,0,-.1]}],[8,k0],[12,{...Cs,bz:.3}],[34,Ct]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:12,ang:140,bkb:60,kbg:90},hold:n=>{let t=Math.min(1,n/16);return[.95*Math.cos(Math.PI*t),.3+.7*Math.sin(Math.PI*t)]},anim:[[0,{...Ct,armL:[-1.4,0,-.1]}],[16,{...Ct,body:[0,Math.PI,0],armL:[-2.4,0,.3],armR:[-2.4,0,-.3],wisp:[.6,0,0]}],[24,{...Ct,body:[0,Math.PI*2,0]}],[40,{...Ct,body:[0,Math.PI*2,0]}]]},uthrow:{total:40,throwAt:14,throwHit:{dmg:10,ang:90,bkb:75,kbg:76},hold:n=>[.6-n*.03,.25+n*.14],onFrame(n,t){if(t>=15&&t<=26){let e=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.effects.spawn({x:e.x,y:e.y+.1,z:.4,vy:.2,vx:Ot(-.03,.03),life:16,size:.5,size1:1.2,color:t%2?16734740:16765024})}},anim:[[0,{...Ct,armL:[-1.4,0,-.1]}],[14,{...Yr,armR:[-3,0,-.2],armL:[-3,0,.2]}],[40,Ct]]},dthrow:{total:40,throwAt:16,throwHit:{dmg:8,ang:80,bkb:60,kbg:42},hold:n=>[.95,Math.max(0,.25-n*.02)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.9,n.y,8,0),n.battle.shakeCam(.08))},anim:[[0,{...Ct,armL:[-1.4,0,-.1]}],[10,O0],[16,H0],[40,Ct]]},getupattack:{total:32,intang:[0,9],alpha:.8,trail:"tail",trailF:[6,12],hit:[Ue(8,10,1.3,.35,.65,7,40,60,50,{away:!0}),Ue(8,10,-1.3,.35,.65,7,40,60,50,{away:!0})],anim:[[0,{...Ct,by:-.29}],[8,{...Ct,by:-.14,body:[0,0,0]}],[14,{...Ct,by:-.14,body:[0,Math.PI*2,0]}],[32,{...Ct,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:36,intang:[0,10],trail:"handR",trailF:[8,14],sfx:[9,"whoosh",.6],hit:[Ue(10,13,1.2,.6,.7,8,40,60,50)],anim:[[0,{...Ct,by:-.14}],[10,{...Cs,bz:.3}],[20,Cs],[36,Ct]]}},z0={id:"dragon",name:"\u30C9\u30E9\u30B4\u30F3",en:"DRAGON",title:"\u7D05\u84EE\u306E\u7FFC\u7ADC",color:16734762,css:"#ff5a2a",desc:"\u92FC\u306E\u7B4B\u8089\u3068\u5DE8\u5927\u306A\u7FFC\u3092\u6301\u3064\u91CD\u91CF\u7D1A\u3002\u62F3\u3068\u5C3B\u5C3E\u306E\u91CD\u3044\u4E00\u6483\u3001\u706B\u708E\u30D6\u30EC\u30B9\u3067\u62BC\u3057\u5207\u308B\u3002",specials:["\u30D5\u30A1\u30A4\u30A2\u30D6\u30EC\u30B9\uFF08\u62BC\u3057\u3063\u3071\u306A\u3057\u3067\u5410\u304D\u7D9A\u3051\u308B\uFF09","\u30D5\u30EC\u30A4\u30E0\u30BF\u30C3\u30AF\u30EB\uFF08\u708E\u306E\u4F53\u5F53\u305F\u308A\uFF09","\u30A6\u30A3\u30F3\u30B0\u30E9\u30A4\u30BA\uFF08\u7FBD\u3070\u305F\u304D\u4E0A\u6607\uFF09","\u30C6\u30A4\u30EB\u30B9\u30E9\u30E0\uFF08\u5C3B\u5C3E\u306E\u53E9\u304D\u3064\u3051\uFF09"],stats:{weight:128,height:2.05,radius:.52,walkSpeed:.07,dashSpeed:.145,dashFrames:12,runSpeed:.128,traction:.012,airSpeed:.086,airAccel:.006,airFriction:.003,gravity:.0098,fallSpeed:.19,fastFall:.29,jumpV:.255,hopV:.16,djV:.24,airJumps:1,jumpsquat:5,rollSpeed:.12},grabHold:[.95,.25],buildModel:Uf,anims:As({idle:Ct,hipY:Xc,bob:.9,runExtra:()=>({armR:[.6,0,-.5],armL:[.6,0,.5],foreR:[-1.2,0,0],foreL:[-1.2,0,0],torso:[.5,0,0],head:[-.4,0,0],earL:[0,0,-.25],earR:[0,0,.25]}),override:{victory:n=>{let t=Math.min(1,n/30);return{...Yr,earL:[0,0,.55+Math.sin(n*.25)*.2*t],earR:[0,0,-.55-Math.sin(n*.25)*.2*t],armR:[-1.2*t,0,-1.2],armL:[-1.2*t,0,1.2]}}}}),moves:dv}});function Of(n){return qi(256,512,(t,e,i)=>{t.fillStyle=n.redCss,t.fillRect(0,0,e,i);let s=11,r=()=>(s=s*16807%2147483647)/2147483647;for(let o=0;o<260;o++)t.fillStyle=`rgba(${r()<.5?"0,0,0":"255,140,110"},${.03+r()*.05})`,t.fillRect(r()*e,r()*i,2+r()*10,1+r()*3);t.strokeStyle=n.printCss,t.fillStyle=n.printCss,t.lineJoin="miter",t.lineCap="butt",t.miterLimit=8;let a=(o,l,c=.04)=>{t.beginPath(),o.forEach(([h,d],u)=>u?t.lineTo(h*e,d*i):t.moveTo(h*e,d*i)),t.closePath(),t.lineWidth=e*c,l?t.fill():t.stroke()};a([[.5,.3],[.61,.4],[.5,.5],[.39,.4]],!1,.045),a([[.5,.36],[.54,.4],[.5,.44],[.46,.4]],!0),a([[.5,.5],[.57,.57],[.5,.64],[.43,.57]],!1,.04),a([[.5,.62],[.545,.7],[.5,.88],[.455,.7]],!0);for(let o of[-1,1]){let l=c=>.5+o*c;a([[l(.09),.5],[l(.2),.44],[l(.16),.56],[l(.22),.66],[l(.1),.6]],!0),a([[l(.08),.68],[l(.17),.72],[l(.11),.8]],!0),t.lineWidth=e*.022,t.beginPath(),t.moveTo(l(.36)*e,i*.04),t.lineTo(l(.4)*e,i*.5),t.stroke(),t.lineWidth=e*.05,t.lineCap="round",t.beginPath(),t.moveTo(l(.42)*e,i*.96),t.bezierCurveTo(l(.2)*e,i*.92,l(.24)*e,i*.78,l(.38)*e,i*.76),t.bezierCurveTo(l(.46)*e,i*.74,l(.44)*e,i*.66,l(.34)*e,i*.68),t.stroke(),t.beginPath(),t.moveTo(l(.3)*e,i*.84),t.bezierCurveTo(l(.22)*e,i*.74,l(.3)*e,i*.62,l(.4)*e,i*.58),t.bezierCurveTo(l(.47)*e,i*.55,l(.44)*e,i*.5,l(.38)*e,i*.52),t.stroke(),t.lineCap="butt",a([[l(.28),.6],[l(.33),.5],[l(.31),.63]],!0),a([[l(.2),.9],[l(.14),.8],[l(.24),.86]],!0)}})}function fv(n){return qi(256,256,(t,e,i)=>{t.fillStyle=n.ironCss,t.fillRect(0,0,e,i),t.strokeStyle=n.goldCss,t.fillStyle=n.goldCss,t.lineJoin="miter",t.fillRect(0,0,e,i*.09),t.fillRect(0,i*.91,e,i*.09),t.lineWidth=e*.05;for(let s of[0,e/2,e])t.beginPath(),t.moveTo(s,i*.2),t.lineTo(s+e*.15,i*.5),t.lineTo(s,i*.8),t.lineTo(s-e*.15,i*.5),t.closePath(),t.stroke();t.lineWidth=e*.035;for(let s of[e/4,e*3/4])t.beginPath(),t.moveTo(s-e*.09,i*.14),t.lineTo(s,i*.34),t.lineTo(s+e*.09,i*.14),t.stroke(),t.beginPath(),t.moveTo(s-e*.09,i*.86),t.lineTo(s,i*.66),t.lineTo(s+e*.09,i*.86),t.stroke(),t.beginPath(),t.moveTo(s,i*.42),t.lineTo(s+e*.03,i*.5),t.lineTo(s,i*.58),t.lineTo(s-e*.03,i*.5),t.closePath(),t.fill()},{repeat:[2,1]})}function pv(){return qi(128,128,(n,t,e)=>{n.fillStyle="#c4c4c8",n.fillRect(0,0,t,e),n.strokeStyle="rgba(16,16,20,0.8)",n.lineWidth=2.5;for(let i=0;i<9;i++)for(let s=-1;s<9;s++){let r=s*16+(i%2?8:0),a=i*16;n.beginPath(),n.arc(r+8,a,9,.15,Math.PI-.15),n.stroke(),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(r+4,a+10,8,2)}},{repeat:[3,3]})}function Hf(n=0){let t=kf[n%kf.length],e=new Ht,i={},s={},r=hi(t.skin,{rough:.7,metal:.02,env:.35}),a=hi(t.hair,{rough:.75,metal:.02,env:.25});a.flatShading=!0;let o=Sn(t.iron,{rough:.6,metal:.55,env:.6}),l=new Le({color:new xt(t.iron).multiplyScalar(1.7),map:pv(),roughness:.65,metalness:.5,envMapIntensity:.5}),c=Sn(t.gold,{rough:.5,metal:.65,env:.7}),h=hi(t.cloth,{rough:.9,metal:.02,env:.2}),d=hi(t.fur,{rough:1,metal:0,env:.15});d.flatShading=!0;let u=new Le({color:t.gem,roughness:.2,metalness:.2,envMapIntensity:1.2,emissive:new xt(t.gem).multiplyScalar(.35)}),f=Ei(16734768,1.1),g=hi(t.red,{rough:.9,metal:0,env:.2,side:ke}),v=new Le({map:fv(t),roughness:.55,metalness:.45,envMapIntensity:.6}),m=hi(new xt(t.hair).multiplyScalar(.72),{rough:.8,metal:.02,env:.2});m.flatShading=!0;let p=Of(t);p.flipY=!1;let b=new Le({map:p,roughness:.9,metalness:0,envMapIntensity:.2,side:Ze}),T=new Le({color:t.redIn,roughness:.95,metalness:0,envMapIntensity:.1,side:Vi}),_=new Le({map:Of(t),roughness:.9,metalness:0,envMapIntensity:.2,side:ke}),w=Sn(12106952,{rough:.2,metal:1,env:1.2}),E=[r,o,l,h,b,g,v],C=E.map(I=>I.emissive.clone()),y=Sn(new xt(t.gold).multiplyScalar(.7),{rough:.75,metal:.3,env:.3}),R=(I,J,A,dt,vt=.04,S=0,x=0)=>{let B=new Ht;N(B,I,J,A,dt,S,x,0),N(q(new Be(vt*1.4,vt*1.4,vt*.4,8),y),B,0,0,0,Math.PI/2,0,0),N(q(new Li(vt,0),u),B,0,0,vt*.35,0,0,0,[1,1,.6])},D=(I,J,A,dt,vt=.022)=>N(q(new Li(vt,0),c),I,J,A,dt),F=(I,J,A,dt=.045)=>N(q(new ii(A,dt,5,12),d),I,0,J,0,Math.PI/2,0,0),V=new Ht;V.userData.keep=!0,V.scale.setScalar(G0),e.add(V);let Y=_e("body",V,0,qc,0);i.body=Y;let k=_e("hips",Y);i.hips=k;let W=_e("torso",k);i.torso=W,W.scale.setScalar(.88),N(q(new Dt(.3,16,12),h),k,0,.02,0,0,0,0,[.9,.8,.8]);let K=new Ht;N(K,k,0,0,0,0,0,0,[.84,1,.86]),N(q(Ae([[.31,.22],[.325,.16],[.325,.08],[.31,.04]],24),o),K,0,0,0,0,0,0,[1,1,.88]);for(let I of[.22,.04])N(q(new ii(.32,.012,5,28),c),K,0,I,0,Math.PI/2,0,0,[1,.88,1]);for(let I=0;I<10;I++){let J=(I+.5)/10*Math.PI*2;Math.abs(Math.sin(J))<.25&&Math.cos(J)>0||D(K,Math.sin(J)*.33,.13,Math.cos(J)*.29)}R(K,0,.13,.295,.06);for(let I of[-1,1])N(q(new ce(.04,.12,4),c),K,I*.11,.13,.29,0,0,I*1.57,[1,1,.4]);let et=(I,J,A,dt)=>{let vt=new es(dt,A,1,4);vt.translate(0,-A/2,0);let S=new Ht;N(S,k,0,.06,I,J?.08:-.08,J,0),S.add(new At(vt,_)),N(q(new Fe(dt*1.04,.05,.02),c),S,0,-A-.02,0);for(let x of[-1,1])N(q(new Fe(.018,A,.012),c),S,x*dt/2,-A/2,.002)};et(.26,0,.78,.27),et(-.235,Math.PI,.5,.27);for(let I of[-1,1]){let J=new Ht;N(J,k,I*.245,.05,.14,-.06,I*.8,I*.1,.92);let A=new ci;A.moveTo(-.14,0),A.lineTo(.14,0),A.lineTo(.16,-.36),A.lineTo(0,-.52),A.lineTo(-.16,-.36),A.lineTo(-.14,0),N(q(new Gi(A,{depth:.03,bevelEnabled:!1}),o),J,0,0,0);let dt=new ci;dt.moveTo(-.1,-.06),dt.lineTo(.1,-.06),dt.lineTo(.115,-.33),dt.lineTo(0,-.44),dt.lineTo(-.115,-.33),dt.lineTo(-.1,-.06);let vt=dt.getPoints().map(S=>new P(S.x,S.y,.036));N(q(new is(new yn(vt,!0,"catmullrom",0),24,.012,4,!0),c),J,0,0,0),R(J,0,-.2,.034,.035)}N(q(Ae([[.255,0],[.265,.14],[.31,.34],[.395,.54],[.42,.66],[.36,.77],[.22,.85],[.15,.88]],24),l),W,0,0,0,0,0,0,[.92,1,.8]),N(q(new Dt(1,16,10),l),W,0,.56,.2,-.1,0,0,[.34,.2,.14]);for(let I=-2;I<=2;I++){let J=I*.36;R(W,Math.sin(J)*.36,.71-Math.cos(J)*.1-(I===0?.02:0),.14+Math.cos(J)*.19,I===0||Math.abs(I)===2?.066:.04,-.25,J)}N(q(new ii(.34,.014,5,20,Math.PI*.6),c),W,0,.66,.05,Math.PI/2+.28,0,Math.PI*.2,[1,.95,1]),N(q(Yi(.17,.135,.14,12),r),W,0,.86,0);for(let I of[-1,1]){let J=new Ht;N(J,W,I*.47,.76,0,0,0,I*-.26,.98);let A=Ae([[.02,.1],[.2,.04],[.3,-.1]],4);A.rotateY(Math.PI/4),N(q(A,o),J,0,0,0,0,0,0,[1.05,1,1.15]);let dt=Ae([[.285,-.08],[.3,-.1],[.32,-.14]],4);dt.rotateY(Math.PI/4),N(q(dt,c),J,0,.004,0,0,0,0,[1.06,1,1.16]);let vt=Ae([[.27,-.22],[.285,-.27]],4);vt.rotateY(Math.PI/4),N(q(vt,c),J,I*.04,0,0,0,0,0,[1.01,1,1.11]);let S=Ae([[.18,-.1],[.27,-.22],[.28,-.26]],4);S.rotateY(Math.PI/4),N(q(S,o),J,I*.04,0,0,0,0,0,[1,1,1.1]);for(let[x,B]of[[.1,.12],[-.1,.12],[.1,-.12],[-.1,-.12],[.17,0]]){let Z=Math.max(Math.abs(x)/1.05,Math.abs(B)/1.15)/.707;D(J,I*x,(Z<.2?.1-(Z-.02)/.18*.06:.04-(Z-.2)*1.4)+.012,B,.036)}}let gt=new Ht;gt.userData.keep=!0,N(gt,W,0,.78,-.2);let rt=en(24,14,(I,J,A)=>{let dt=(I-.5)*2.2,vt=Math.min(1,J*9),S=.25+.21*vt+.62*J,x=J>.82?(.2+.1*Math.sin(I*23))*Math.abs(Math.sin(I*Math.PI*10.5+Math.sin(I*9)))*(J-.82)/.18:0;A.set(Math.sin(dt)*S,.13*(1-vt)-2.1*J+x+.04*Math.cos(dt)*(1-J),-Math.cos(dt)*.1-.26*Math.min(1,J*3)-.08*J+.05*Math.sin(I*Math.PI*5)*J)});gt.add(new At(rt,b));let ot=new At(rt,T);ot.userData.inner=!0,gt.add(ot),N(q(Ae([[.2,.8],[.25,.96],[.31,1.14]],20,Math.PI*.45,Math.PI*1.1),g),W,0,0,-.03,0,0,0,[1.1,1,.85]),N(q(Ae([[.306,1.132],[.326,1.16]],20,Math.PI*.45,Math.PI*1.1),c),W,0,0,-.03,0,0,0,[1.1,1,.85]),N(q(new Dt(1,14,8,0,Math.PI*2,0,Math.PI/2),g),W,0,.76,-.2,0,0,0,[.44,.1,.2]),N(q(new Dt(1,12,8),g),W,0,.6,-.27,0,0,0,[.36,.2,.08]);for(let[I,J]of[[-.3,.07],[0,.08],[.3,.07]])R(W,I,.66-(I===0?.06:0),-.36,J,0,Math.PI);let ut=_e("head",W,0,.96,.03);i.head=ut;let Ut=new Ht;N(Ut,ut,0,0,0,0,0,0,.98);let Nt=.34,re=1.1,ne=I=>{let J=Math.max(0,Math.min(1,I/Nt));if(J<.36)return .114+.024*Math.sin(J/.36*Math.PI/2);if(J<.6)return .138+.004*(J-.36)/.24;let A=(J-.6)/.4;return .142*Math.sqrt(Math.max(0,1-A*A))},ae=(I,J,A=0)=>{let dt=ne(J)+A;return[Math.sin(I)*dt,J,Math.cos(I)*dt*re]},st=(I,J=1)=>"#"+new xt(I).multiplyScalar(J).getHexString(),ht=qi(1024,512,(I,J,A)=>{let dt=J/(Math.PI*2*.138),vt=z=>J/2+z*dt,S=z=>(1-z/Nt)*.94*A,x=z=>(z/(Math.PI*2)+.5)*J;I.fillStyle=st(t.skin),I.fillRect(0,0,J,A);let B=(z,_t,$,X,it)=>{let yt=I.createRadialGradient(0,0,0,0,0,1);yt.addColorStop(0,it),yt.addColorStop(1,it.replace(/[\d.]+\)$/,"0)")),I.save(),I.translate(vt(z),S(_t)),I.scale($*dt,X*dt),I.fillStyle=yt,I.beginPath(),I.arc(0,0,1,0,7),I.fill(),I.restore()},Z=z=>{I.beginPath(),z.forEach(([_t,$],X)=>X?I.lineTo(vt(_t),S($)):I.moveTo(vt(_t),S($)))};B(0,.235,.075,.035,"rgba(255,250,200,0.13)"),B(0,.03,.06,.03,"rgba(255,250,200,0.1)");for(let z of[-1,1])B(z*.075,.135,.035,.022,"rgba(255,250,200,0.14)"),B(z*.085,.08,.035,.05,"rgba(0,0,0,0.3)"),B(z*.052,.178,.045,.028,"rgba(8,6,0,0.75)"),B(z*.03,.14,.018,.05,"rgba(0,0,0,0.3)");for(let z of[-1,1])Z([[z*.024,.166],[z*.05,.184],[z*.084,.186],[z*.056,.168]]),I.closePath(),I.fillStyle="#e6dcb8",I.fill(),I.fillStyle="#b02a10",I.beginPath(),I.arc(vt(z*.05),S(.177),.0095*dt,0,7),I.fill(),I.fillStyle="#120404",I.beginPath(),I.arc(vt(z*.05),S(.177),.005*dt,0,7),I.fill(),I.strokeStyle="#0c0a06",I.lineWidth=.009*dt,I.lineCap="round",Z([[z*.02,.166],[z*.05,.187],[z*.09,.189]]),I.stroke(),I.strokeStyle="rgba(12,10,6,0.6)",I.lineWidth=.004*dt,Z([[z*.024,.165],[z*.056,.166],[z*.086,.184]]),I.stroke(),I.strokeStyle="rgba(10,10,4,0.5)",I.lineWidth=.005*dt,Z([[z*.012,.225],[z*.008,.198]]),I.stroke(),I.beginPath(),I.moveTo(vt(z*.036),S(.112)),I.quadraticCurveTo(vt(z*.062),S(.09),vt(z*.064),S(.045)),I.stroke(),I.strokeStyle="rgba(10,10,4,0.3)",I.beginPath(),I.moveTo(vt(z*.085),S(.15)),I.quadraticCurveTo(vt(z*.1),S(.11),vt(z*.088),S(.06)),I.stroke(),I.fillStyle="rgba(8,8,2,0.7)",I.beginPath(),I.ellipse(vt(z*.02),S(.098),.009*dt,.005*dt,0,0,7),I.fill();I.strokeStyle="#14140c",I.lineWidth=.008*dt,I.lineCap="round",I.beginPath(),I.moveTo(vt(-.046),S(.055)),I.quadraticCurveTo(vt(-.025),S(.066),vt(0),S(.065)),I.quadraticCurveTo(vt(.025),S(.066),vt(.046),S(.055)),I.stroke(),I.strokeStyle="rgba(0,0,0,0.35)",I.lineWidth=.006*dt,I.beginPath(),I.moveTo(vt(-.03),S(.046)),I.quadraticCurveTo(vt(0),S(.04),vt(.03),S(.046)),I.stroke(),Z([[0,.028],[0,.008]]),I.stroke(),B(0,.082,.04,.012,"rgba(0,0,0,0.22)"),I.fillStyle=st(t.hair,.8),I.beginPath(),I.moveTo(0,0),I.lineTo(J,0),I.lineTo(J,S(.03)),I.lineTo(x(1.3),S(.03)),I.lineTo(x(1),S(.045)),I.lineTo(x(.84),S(.1)),I.lineTo(x(.9),S(.17)),I.lineTo(x(.8),S(.235));for(let z=8;z>=-8;z--)I.lineTo(x(z*.085),S(.272-(z&1?.012:0)));I.lineTo(x(-.8),S(.235)),I.lineTo(x(-.9),S(.17)),I.lineTo(x(-.84),S(.1)),I.lineTo(x(-1),S(.045)),I.lineTo(x(-1.3),S(.03)),I.lineTo(0,S(.03)),I.closePath(),I.fill(),I.strokeStyle=st(t.hair,.55),I.lineWidth=3;for(let z=0;z<70;z++){let _t=(z+.5)/70*J;Math.abs(_t-J/2)<J*.13||(I.beginPath(),I.moveTo(_t,S(.24)),I.lineTo(_t+(_t<J/2?14:-14),S(.04)),I.stroke())}});ht.flipY=!1;let Tt=new Le({map:ht,roughness:.7,metalness:.02,envMapIntensity:.35});E.push(Tt),C.push(Tt.emissive.clone());let jt=en(40,20,(I,J,A)=>{let dt=(I-.5)*Math.PI*2,vt=Nt*(1-Math.min(1,J/.94)),S=J>.94?ne(0)*(1-(J-.94)/.06):ne(vt),x=vt/Nt,B=Math.max(0,Math.cos(dt))*(.016*Math.max(0,1-x/.35)+.008*Math.exp(-((x-.6)**2)/.004));A.set(Math.sin(dt)*S,vt,Math.cos(dt)*S*re+B)});N(q(jt,Tt),Ut,0,0,0),N(q(new ce(.03,.115,4),r),Ut,0,.142,.158,-.3,Math.PI/4,0,[.95,1,1.25]);for(let I of[-1,1]){N(q(new Fe(.11,.03,.04),r),Ut,I*.058,.203,.14,.35,I*.42,I*.2),N(q(new Fe(.085,.02,.026),m),Ut,I*.058,.208,.153,.35,I*.42,I*.32),N(q(new ce(.03,.09,5),r),Ut,...ae(I*1.5,.185,.012),-.5,0,I*-.75,[1,1,.4]);for(let[J,A,dt,vt]of[[.93,.15,.16,.12],[1.06,.11,.15,.05],[.86,.2,.1,.25]])N(q(new ce(.05,dt*1.15,5),a),Ut,...ae(I*J,A,.008),Math.PI,I*J,I*vt,[1.1,1,.6])}N(q(new Li(.042,0),c),Ut,0,.248,.156,-.18,0,0,[1,1.2,.22]),N(q(new Li(.024,0),u),Ut,0,.248,.165,-.18,0,0,[1,1.2,.5]),N(q(new ce(.014,.05,4),c),Ut,0,.202,.166,Math.PI,0,0,[1,1,.4]),N(q(new ce(.016,.05,4),c),Ut,0,.3,.136,-.45,0,0,[1,1,.4]);for(let I of[-1,1])N(q(new Fe(.06,.02,.012),c),Ut,...ae(I*.42,.252,.006),-.15,I*.42,I*.2),N(q(new Fe(.06,.016,.012),c),Ut,...ae(I*.8,.266,.006),-.15,I*.8,I*.25),N(q(new Li(.016,0),c),Ut,...ae(I*.6,.26,.012));N(q(new Dt(1,12,10),m),Ut,0,.215,-.035,0,0,0,[.172,.17,.18]);{let I=5,J=()=>(I=I*16807%2147483647)/2147483647,A=new P(0,1,0),dt=new P,vt=new P,S=(x,B,Z)=>{dt.set(Math.sin(x)*Math.cos(B),Math.sin(B),Math.cos(x)*Math.cos(B)),vt.copy(dt).add(new P(0,.45,-.4)).normalize();let z=(.075+J()*.04)*Z,_t=q(new ce(.052+J()*.012,z,4),J()<.4?m:a);N(_t,Ut,dt.x*.17+vt.x*z*.3,.21+dt.y*.155+vt.y*z*.3,-.035+dt.z*.17+vt.z*z*.3),_t.quaternion.setFromUnitVectors(A,vt),_t.rotateY(J()*3)};for(let x=0;x<7;x++){let B=-.3+x*.3,Z=Math.max(3,Math.round(13*Math.cos(B)));for(let z=0;z<Z;z++){let _t=(z+x%2*.5)/Z*Math.PI*2-Math.PI+(J()-.5)*.2;Math.abs(_t)<1.15&&B<.72||Math.abs(_t)<1.6&&B<.1||S(_t,B,B>.7?1.15:1)}}for(let x=-3;x<=3;x++)S(x*.27,.56+(x&1?.07:0),1.1)}let kt={},Yt={};for(let I of[-1,1]){let J=I<0,A=_e(J?"armR":"armL",W,I*.445,.62,0);i[J?"armR":"armL"]=A,N(q(new Dt(.16,12,10),r),A,0,0,0),F(A,-.07,.15,.04),N(q(Yi(.34,.185,.15,12),r),A,0,0,0),N(q(new Dt(1,10,8),r),A,0,-.15,.05,0,0,0,[.17,.18,.15]);let dt=_e(J?"foreR":"foreL",A,0,-.36,0);i[J?"foreR":"foreL"]=dt,N(q(Ae([[.14,0],[.15,-.08],[.135,-.22],[.11,-.32]],14),v),dt,0,0,0),F(dt,.02,.135,.05),N(q(new ii(.148,.012,5,18),c),dt,0,-.07,0,Math.PI/2,0,0),N(q(new ii(.114,.014,5,18),c),dt,0,-.31,0,Math.PI/2,0,0),R(dt,I*.142,-.17,0,.04,0,I*Math.PI/2),R(dt,0,-.17,.142,.032);let vt=new Ht;vt.userData.joint=!0,N(vt,dt,0,-.41,0),Yt[I]=vt,N(q(new Dt(.112,12,10),r),vt,0,0,.01,0,0,0,[1,1,.9]);for(let B=0;B<4;B++)N(q(new Dt(.038,6,5),r),vt,(B-1.5)*.05,-.08,.045);let S=new se;S.position.set(0,-.1,0),dt.add(S);let x=new se;x.position.set(0,-.55,0),dt.add(x),kt[J?"handR":"handL"]=[S,x]}let ue=_e("wep",Yt[-1],0,0,0);i.wep=ue;let U=new Ht;U.userData.keep=!0,U.visible=!1,ue.add(U);{let I=(S,x,B,Z,z=0,_t=0,$=0)=>(N(S,U,x,B,Z,z,_t,$),S);I(new At(new Be(.03,.032,.36,8),o),0,0,-.04,Math.PI/2,0,0),I(new At(new Li(.055,0),u),0,0,-.25),I(new At(new Fe(.08,.66,.1),c),0,0,.15);for(let S of[-1,1])I(new At(new ce(.055,.2,4),c),0,S*.38,.21,S>0?.6:Math.PI-.6,0,0);I(new At(new Li(.05,0),u),.045,0,.15),I(new At(new Li(.05,0),u),-.045,0,.15);let J=new ci;J.moveTo(.18,-.2),J.lineTo(1.5,-.17),J.lineTo(1.9,0),J.lineTo(1.5,.17),J.lineTo(.18,.2),J.lineTo(.18,-.2);let A=new Gi(J,{depth:.012,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:1});A.translate(0,0,-.006),I(new At(A,w),0,0,0,0,-Math.PI/2,0);let dt=new ci;dt.moveTo(.2,-.06),dt.lineTo(1.4,-.045),dt.lineTo(1.55,0),dt.lineTo(1.4,.045),dt.lineTo(.2,.06),dt.lineTo(.2,-.06);let vt=new Le({color:2762288,roughness:.35,metalness:.8,side:ke});for(let S of[-1,1])I(new At(new On(dt),vt),S*.0195,0,0,0,-Math.PI/2,0)}let j=new se;j.position.set(0,0,.4),ue.add(j);let lt=new se;lt.position.set(0,0,1.85),ue.add(lt),kt.sword=[j,lt];for(let I of[-1,1]){let J=I<0,A=_e(J?"legR":"legL",k,I*.17,-.02,0);i[J?"legR":"legL"]=A,N(q(Yi(.64,.17,.135,12),hi(t.cloth2,{rough:.9,metal:.02,env:.2})),A,0,0,0);let dt=_e(J?"shinR":"shinL",A,0,-.68,0);i[J?"shinR":"shinL"]=dt;let vt=Ae([[.02,.2],[.15,.02],[.02,-.16]],4);vt.rotateY(Math.PI/4),N(q(vt,o),dt,0,.02,.105,0,0,0,[1,1,.45]);let S=Ae([[.15,.02],[.17,.02]],4);S.rotateY(Math.PI/4),N(q(S,c),dt,0,.02,.105,0,0,0,[1,6,.45]),R(dt,0,.03,.178,.04),F(dt,-.02,.145,.048),N(q(Ae([[.145,-.02],[.155,-.16],[.125,-.48],[.12,-.66]],14),v),dt,0,0,0),F(dt,-.64,.12,.04);let x=new Ht;N(x,dt,0,-.73,.03,0,0,0,.88),N(q(new Dt(1,12,8),o),x,0,.01,.08,0,0,0,[.165,.1,.27]),N(q(new Dt(1,10,6,0,Math.PI*2,0,Math.PI/2),c),x,0,-.04,.31,Math.PI/2-.5,0,0,[.1,.05,.045]),N(q(new ii(.15,.018,5,16,Math.PI),c),x,0,-.01,.1,0,0,0,[1.1,.75,1]),N(q(new Fe(.3,.035,.5),o),x,0,-.085,.1);let B=new se;dt.add(B);let Z=new se;Z.position.set(0,-.8,.22),dt.add(Z),kt[J?"footR":"footL"]=[B,Z]}Vn(e);let nt={j:i,base:s,hipY:qc,flare:0},Mt=new se;Mt.position.set(0,.5,.9),Y.add(Mt);let Lt=Rs(0,null,1.4),zt=0;return{root:e,rig:nt,trails:kt,worldObjects:[],orbPoint:Mt,shadow:Lt,hands:Yt,height:2.3,headY:2.7,trailColor:n?6336767:11550975,update(I,J){zt+=I;let A=e.rotation.y,dt=(J.vx||0)*Math.sin(A),vt=Math.max(-.1,Math.min(.9,dt*4+(J.vy<0?-J.vy*2.2:0)))+Math.sin(zt*2.4)*.02;gt.rotation.x+=(vt-gt.rotation.x)*.12},setSword(I){U.visible=I},setFlash(I,J){E.forEach((A,dt)=>{A.emissive.copy(C[dt]),J>0&&A.emissive.lerp(I,J*.8)})},dispose(){as(e)}}}var kf,qc,G0,zf=Ye(()=>{Si();Js();ao();kf=[{skin:5527103,hair:9053200,iron:3421242,gold:10122272,red:5378066,redIn:3541516,gem:13637672,fur:8156264,cloth:2763308,goldCss:"#b08a3a",redCss:"#5a1214",ironCss:"#48484e",printCss:"#6e5424",cloth2:3158067},{skin:5659238,hair:14211300,iron:2107452,gold:11844808,red:1846374,redIn:923192,gem:4247807,fur:10133680,cloth:1843248,goldCss:"#c0c8d8",redCss:"#1c2c66",ironCss:"#3a4460",printCss:"#70788c",cloth2:2369592}],qc=1.6,G0=.88});function Fi(n,t,e,i=1,s=.6){for(let r=0;r<i;r++)n.battle.effects.spawn({x:t+Ot(-.25,.25),y:e+Ot(-.25,.25),z:.4,vx:Ot(-.03,.03),vy:Ot(.01,.06),life:18,size:Ot(s*.6,s),size1:.1,color:r%2?dn:q0})}function co(n,t=-1){return n.model.hands[t].getWorldPosition(n.battle.tmpV)}function Wf(n,t){let e=n.grabbing;e&&(e.damage=Math.min(999,e.damage+t),n.stats.dealt+=t,e.stats.taken+=t,e.flashT=6,n.battle.app.hud.bump(e.slot),n.battle.effects.hitSpark(e.x,e.y+e.height*.6,dn,.3),mt.hit(.3))}var V0,ge,dn,q0,St,Oe,Gf,Vf,Xf,W0,X0,mv,Y0,qf=Ye(()=>{Si();zf();oo();hn();rs();V0=G0*1.07,ge=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e*V0,y:i*V0,r:s*V0,dmg:r,ang:a,bkb:o,kbg:l,...c}),dn=11550975,q0=5905050,St={by:-.05,legR:[-.1,0,-.17],shinR:[.18,0,.05],legL:[.04,0,.17],shinL:[.14,0,-.05],torso:[.12,0,0],head:[-.06,0,0],armR:[.05,0,-.32],foreR:[-.35,0,.1],armL:[.05,0,.32],foreL:[-.35,0,-.1]},Oe={legR:[-.5,0,-.12],shinR:[.8,0,0],legL:[.15,0,.12],shinL:[.5,0,0],armR:[-.3,0,-.6],foreR:[-.7,0,0],armL:[-.3,0,.6],foreL:[-.7,0,0],torso:[.1,0,0]},Gf={...St,armR:[-3.3,0,-.15],foreR:[-.2,0,0],wep:[1.3,0,0],torso:[-.25,.2,0],armL:[-.5,0,.5],legR:[.2,0,-.15],legL:[-.3,0,.15],shinL:[.3,0,0]},Vf={...St,armR:[-.95,0,-.05],foreR:[-.1,0,0],wep:[1.57,0,0],torso:[.55,.3,0],armL:[.3,0,.5],legR:[.4,0,-.15],shinR:[.3,0,0],legL:[-.8,0,.15],shinL:[.9,0,0],by:-.08,bz:.25};Xf=n=>n.vars.air?n.vars.rev?40:38:n.vars.rev?37:30,W0={onStart(n){n.model.setSword(!0)},onEnd(n){n.model.setSword(!1)}},X0=class{constructor(t,e,i,s){this.b=t,this.x=e,this.y=i,this.dir=s,this.t=0,this.vx=0;let r=new Ht,a=new Le({color:1841706,roughness:.7,metalness:.2,emissive:2099256}),o=new Le({color:13783068,roughness:.6,emissive:4198400}),l=new Le({color:15788240,roughness:.4}),c=new Se({color:16764992}),h=(d,u,f,g,v,m=0,p=0,b=0,T=null)=>{let _=new At(d,u);return _.position.set(f,g,v),_.rotation.set(m,p,b),T&&_.scale.set(...T),r.add(_),_};h(new Dt(1,16,12),a,0,2.4,0,0,0,0,[2,1.9,1.6]),h(new Dt(1,14,10),a,1.9,2.9,0,0,0,0,[1.1,1,1]),h(new Dt(1,12,8),a,2.9,2.5,0,0,0,0,[.8,.6,.7]);for(let d of[-1,1])h(new ce(.22,1.3,6),l,2.9,2.7,d*.6,0,0,-.9),h(new ce(.3,1.6,6),l,1.6,4,d*.7,d*.5,0,-.5),h(new Dt(.14,8,6),c,2.55,3.2,d*.55),h(new Be(.5,.42,2.2,8),a,.9,1,d*.9),h(new Be(.55,.45,2,8),a,-1.1,.9,d*.9),h(new Fe(.16,3.6,.5),new Le({color:12106952,metalness:1,roughness:.2}),2.4,3.6,d*1.7,0,0,-.7);for(let d=0;d<7;d++)h(new ce(.4,1.4,5),o,1.2-d*.45,4.1-d*.12,0,0,0,.5+d*.1);r.scale.set(.01,.01,.01),this.mesh=r,t.scene.add(r)}update(){this.t++,this.x+=this.vx;let t=Math.min(1,this.t/14);this.mesh.scale.set(this.dir*t,t,t),this.mesh.position.set(this.x,this.y+(this.vx?Math.abs(Math.sin(this.t*.6))*.3:0),0),this.t%2===0&&this.b.effects.spawn({x:this.x+Ot(-2,2),y:this.y+Ot(.5,4.5),z:.8,vy:.05,life:20,size:Ot(.8,1.6),size1:.2,color:this.t%4?dn:q0})}remove(){this.dead||(this.dead=!0,this.b.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}},mv={jab1:{total:34,trail:"handR",trailF:[5,10],sfx:[6,"whoosh",.5],hit:[ge(8,10,1.15,1.45,.5,11,361,30,100),ge(8,10,.6,1.45,.45,8,361,30,90)],onFrame(n,t){if(t>=7&&t<=11){let e=co(n);Fi(n,e.x,e.y,1,.4),n.battle.effects.sparkle(e.x,e.y,13676799,1,.3)}},anim:[[0,St],[5,{...St,armR:[.3,0,-.5],foreR:[-1.6,0,0],torso:[.05,-.4,0]}],[8,{...St,armR:[-1.55,0,-.05],foreR:[0,0,0],torso:[.15,.45,0],bz:.12,legL:[-.3,0,.14],shinL:[.3,0,0]}],[18,{...St,armR:[-1.5,0,-.05],torso:[.12,.4,0],bz:.1}],[34,St]]},ftilt:{total:39,trail:"footR",trailF:[8,13],sfx:[9,"whoosh",.7],hit:[ge(10,12,1.45,1.15,.5,14,30,30,96),ge(10,12,.8,1.15,.5,13,30,28,94)],anim:[[0,St],[6,{...St,legR:[-1.2,0,-.1],shinR:[1.8,0,0],torso:[-.15,0,0],armR:[.3,0,-.5],armL:[-.4,0,.6]}],[10,{...St,legR:[-1.5,0,-.05],shinR:[.05,0,0],torso:[-.3,0,0],armR:[.5,0,-.6],armL:[-.3,0,.7],bz:.1}],[20,{...St,legR:[-1.4,0,-.05],shinR:[.2,0,0],torso:[-.25,0,0]}],[39,St]]},utilt:{total:112,trail:"footR",trailF:[56,64],hit:[ge(60,62,1.1,.5,1.15,24,70,40,92,{shield:40}),ge(60,62,1,1.6,.8,24,70,40,92,{shield:40})],onFrame(n,t){let e=n.battle.effects;if(t>=12&&t<58){t%4===0&&e.spawn({x:n.x+n.facing*Ot(1.5,3.5),y:n.y+Ot(.2,1.6),z:.3,vx:-n.facing*.1,vy:.01,life:14,size:.3,size1:.05,color:13680895});for(let i of n.battle.fighters){if(i===n||!i.alive||i.state==="grabbed"||i.state==="ledge")continue;let s=(i.x-n.x)*n.facing;s>.3&&s<4&&Math.abs(i.y-n.y)<1.5&&(i.x-=n.facing*.012)}}if(t===56&&mt.whoosh(1),t===60){let i=n.x+n.facing*1.15;e.ring(i,n.y+.1,dn,4.2,18),e.dust(i,n.y,10,0),Fi(n,i,n.y+.6,10,1.4),n.battle.shakeCam(.3),mt.fsBoom&&mt.hit(1)}},anim:[[0,St],[14,{...St,legR:[-2.2,0,-.1],shinR:[.6,0,0],torso:[-.2,0,0],armR:[.4,0,-.6],armL:[.3,0,.7],legL:[.1,0,.14]}],[55,{...St,legR:[-2.75,0,-.1],shinR:[.1,0,0],torso:[-.3,0,0],armR:[.5,0,-.7],armL:[.3,0,.8],legL:[.12,0,.14]}],[60,{...St,legR:[-.9,0,-.05],shinR:[.1,0,0],torso:[.35,0,0],legL:[.1,0,.14],shinL:[.5,0,0],by:-.05}],[84,{...St,legR:[-.8,0,-.05],shinR:[.3,0,0],torso:[.3,0,0],by:-.05}],[112,St]]},dtilt:{total:35,trail:"footR",trailF:[8,13],sfx:[9,"whoosh",.6],hit:[ge(10,12,1.5,.3,.5,14,80,50,60),ge(10,12,.8,.3,.48,14,80,50,60)],anim:[[0,{...St,by:-.18,legL:[-1.2,0,.2],shinL:[2,0,0],legR:[-1.2,0,-.2],shinR:[2,0,0],torso:[.4,0,0]}],[10,{...St,by:-.23,legL:[-1.3,0,.2],shinL:[2.2,0,0],legR:[-1.5,0,-.05],shinR:[.05,0,0],torso:[.1,0,0],armL:[.6,0,.5],armR:[.4,0,-.6]}],[20,{...St,by:-.23,legL:[-1.3,0,.2],shinL:[2.2,0,0],legR:[-1.45,0,-.05],shinR:[.2,0,0],torso:[.15,0,0]}],[35,St]]},dashattack:{total:39,keepVel:!0,sfx:[9,"whoosh",.8],hit:[ge(10,13,.9,1.2,.72,15,60,70,60),ge(14,19,.85,1.2,.62,11,60,55,55)],onStart(n){n.vx=n.facing*.19},onFrame(n,t){t<=18?n.vx=oi(n.vx,n.facing*.15,.01):n.friction(2.4),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,St],[9,{...St,torso:[.5,-.6,0],armL:[-.6,0,.2],foreL:[-1.6,0,0],armR:[.5,0,-.5],legR:[.5,0,-.1],legL:[-.9,0,.1],shinL:[.9,0,0],bz:.25,by:-.05,head:[-.3,.5,0]}],[22,{...St,torso:[.45,-.5,0],armL:[-.6,0,.2],foreL:[-1.6,0,0],bz:.2,by:-.05}],[39,St]]},fsmash:{total:78,smash:!0,charge:{f:12,max:60},trail:"sword",trailF:[26,36],sfx:[28,"whoosh",1],...W0,hit:[ge(31,34,0,0,.75,24,45,30,100,{path:[[.6,3],[2.1,.5]]}),ge(31,34,0,0,.6,24,45,30,100,{path:[[.3,2],[1.2,.6]]})],onFrame(n,t){t===34&&(n.battle.effects.dust(n.x+n.facing*2,n.y,8,n.facing),n.battle.shakeCam(.18))},anim:[[0,{...St,wep:[1.3,0,0]}],[12,Gf],[28,{...Gf,torso:[-.35,.25,0]}],[34,Vf],[52,Vf],[78,St]]},usmash:{total:59,smash:!0,charge:{f:9,max:60},trail:"sword",trailF:[17,30],sfx:[19,"whoosh",1],...W0,hit:[ge(20,28,0,0,.75,24,80,30,96,{path:[[2,1],[-1.6,2.6]]}),ge(20,28,0,0,.7,21,80,30,94,{path:[[1,1.4],[-.6,2.4]]}),ge(22,26,.2,3.3,.8,24,85,30,96)],anim:[[0,{...St,wep:[1.57,0,0]}],[9,{...St,armR:[-.5,0,-.2],foreR:[-.3,0,0],wep:[1.57,0,0],torso:[.35,.3,0],by:-.07}],[19,{...St,armR:[-1.2,0,-.1],foreR:[0,0,0],wep:[1.57,0,0],torso:[.2,.2,0]}],[24,{...St,armR:[-2.9,0,-.1],foreR:[0,0,0],wep:[1.57,0,0],torso:[-.4,0,0],head:[-.5,0,0],legL:[-.4,0,.1],shinL:[.4,0,0]}],[29,{...St,armR:[-4.3,0,-.1],foreR:[0,0,0],wep:[1.57,0,0],torso:[-.3,-.2,0]}],[42,{...St,armR:[-4.2,0,-.1],wep:[1.57,0,0],torso:[-.25,-.2,0]}],[59,St]]},dsmash:{total:62,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[12,40],...W0,hit:[ge(15,17,1.7,.6,.6,5,150,60,20,{group:0}),ge(15,17,.9,.7,.55,5,150,60,20,{group:0}),ge(35,38,-1.8,.7,.7,15,140,40,96,{group:1}),ge(35,38,-.9,.8,.6,15,140,40,96,{group:1})],onFrame(n,t){(t===14||t===33)&&mt.whoosh(.9)},anim:[[0,{...St,wep:[1.57,0,0]}],[8,{...St,armR:[.3,0,-.3],foreR:[-1.3,0,0],wep:[1.57,0,0],torso:[.3,-.3,0],by:-.09}],[15,{...St,armR:[-1.15,0,-.05],foreR:[0,0,0],wep:[1.57,0,0],torso:[.5,.3,0],by:-.14,bz:.2,legL:[-.9,0,.14],shinL:[1.2,0,0],legR:[.4,0,-.14]}],[26,{...St,armR:[-.9,0,-.4],foreR:[-.6,0,0],wep:[1.57,0,0],torso:[.3,-.2,0],by:-.11}],[35,{...St,armR:[1.25,0,-.25],foreR:[0,0,0],wep:[1.57,0,0],torso:[.25,-.9,0],head:[0,-.7,0],by:-.14,legR:[-.8,0,-.14],shinR:[1.1,0,0],legL:[.4,0,.14]}],[46,{...St,armR:[1.15,0,-.25],wep:[1.57,0,0],torso:[.25,-.8,0],by:-.13}],[62,St]]},nair:{total:43,aerial:!0,landLag:11,acBefore:4,acAfter:36,trail:"footR",trailF:[5,24],hit:[ge(7,9,.95,.9,.55,7,70,30,30,{group:0}),ge(20,23,1.05,.95,.62,12,45,40,90,{group:1})],onFrame(n,t){(t===6||t===19)&&mt.whoosh(.6)},anim:[[0,Oe],[7,{...Oe,legR:[-1.4,0,-.05],shinR:[.1,0,0],torso:[-.2,0,0]}],[14,{...Oe,legR:[-.2,0,-.1],shinR:[1,0,0],legL:[-1,0,.1],shinL:[1.6,0,0]}],[20,{...Oe,legL:[-1.45,0,.05],shinL:[.1,0,0],legR:[.3,0,-.1],torso:[-.25,0,0]}],[30,{...Oe,legL:[-1.3,0,.05],shinL:[.3,0,0]}],[43,Oe]]},fair:{total:44,aerial:!0,landLag:16,acBefore:4,acAfter:37,trail:"handR",trailF:[11,18],sfx:[13,"whoosh",.9],hit:[ge(14,17,0,0,.72,18,45,35,96,{path:[[.9,2.3],[1.3,.8]]})],anim:[[0,Oe],[10,{...Oe,armR:[-3.2,0,-.2],foreR:[-.5,0,0],torso:[-.25,.3,0]}],[15,{...Oe,armR:[-1,0,-.05],foreR:[0,0,0],torso:[.45,.35,0]}],[26,{...Oe,armR:[-.8,0,-.05],torso:[.4,.3,0]}],[44,Oe]]},bair:{total:34,aerial:!0,landLag:11,acBefore:4,acAfter:26,trail:"handR",trailF:[7,13],sfx:[9,"whoosh",.8],hit:[ge(10,13,-1.25,1.45,.6,18.5,140,35,96),ge(10,13,-.6,1.45,.5,17,140,35,94)],anim:[[0,Oe],[6,{...Oe,armR:[-1.3,0,.6],foreR:[-1.4,0,0],torso:[.1,.4,0]}],[10,{...Oe,armR:[1.5,0,-.2],foreR:[0,0,0],torso:[0,-1,0],head:[0,-.7,0]}],[18,{...Oe,armR:[1.4,0,-.2],torso:[0,-.9,0]}],[34,Oe]]},uair:{total:31,aerial:!0,landLag:10,acBefore:3,acAfter:26,trail:"footR",trailF:[4,16],sfx:[5,"whoosh",.7],hit:[ge(6,9,0,0,.7,13,70,30,96,{path:[[1.1,1.6],[.2,2.9]]}),ge(10,16,0,0,.65,8,172,30,55,{path:[[.1,2.9],[-1.1,1.5]]})],anim:[[0,Oe],[5,{body:[.5,0,0],legR:[-1.5,0,-.05],shinR:[.1,0,0],legL:[-.2,0,.1],shinL:[.8,0,0],armR:[.3,0,-.8],armL:[.3,0,.8]}],[16,{body:[-2.6,0,0],legR:[-1.5,0,-.05],shinR:[.1,0,0],legL:[-.2,0,.1],shinL:[.8,0,0],armR:[.3,0,-.8],armL:[.3,0,.8]}],[31,{...Oe,body:[-Math.PI*2,0,0]}]]},dair:{total:47,aerial:!0,landLag:17,acBefore:3,acAfter:38,trail:"footR",trailF:[13,20],sfx:[15,"whoosh",1],hit:[ge(16,19,.05,-.1,.72,19,270,30,96)],onFrame(n,t){t>=16&&t<=19&&(Fi(n,n.x,n.y,2,.5),n.battle.effects.sparkle(n.x,n.y,13676799,1,.4))},anim:[[0,Oe],[12,{legR:[-1.7,0,-.08],shinR:[2.3,0,0],legL:[-1.7,0,.08],shinL:[2.3,0,0],armR:[-.4,0,-1],armL:[-.4,0,1],torso:[.3,0,0],by:.2}],[16,{legR:[-.25,0,-.04],shinR:[.3,0,0],legL:[-.25,0,.04],shinL:[.3,0,0],armR:[-.2,0,-1.5],armL:[-.2,0,1.5],foreR:[0,0,0],foreL:[0,0,0],torso:[.25,0,0],head:[.3,0,0]}],[28,{legR:[.05,0,-.06],legL:[.05,0,.06],armR:[-.5,0,-1.1],armL:[-.5,0,1.1]}],[47,Oe]]},neutralb:{total:118,armor:[11,68],landContinue:!0,fall:.6,drift:.3,hit:[ge(70,73,1.25,1.35,.85,Xf,40,30,96),ge(70,73,.5,1.35,.6,Xf,40,30,96)],onStart(n){n.vars.air=!n.grounded},onFrame(n,t){let e=n.battle.effects;if(t===2&&mt.charge(),t===22&&!n.vars.rev&&n.input.stick.x*n.facing<-.5&&(n.vars.rev=!0,n.facing=-n.facing,n.mf-=10),t>=8&&t<68){let i=co(n);t%2===0&&e.spawn({x:i.x+Ot(-.8,.8),y:i.y+Ot(-.8,.8),z:.4,vx:0,vy:0,life:10,size:.15,size1:.5,color:t%4?dn:14729471}),Fi(n,i.x,i.y,1,.4+t*.01),t%16===0&&mt.charge()}if(t===68&&mt.whoosh(1),t===70){let i=co(n);e.ring(i.x,i.y,dn,4.5,18),Fi(n,i.x,i.y,14,1.6),n.battle.shakeCam(.25),mt.fire(),n.grounded&&(n.vx=n.facing*.12)}},anim:[[0,St],[10,{...St,armR:[.9,0,-.6],foreR:[-1.9,0,0],armL:[-1.2,0,.3],foreL:[-.4,0,0],torso:[.1,-1.2,0],head:[0,1,0],legR:[.3,0,-.14],legL:[-.5,0,.14],shinL:[.5,0,0],by:-.05}],[66,{...St,armR:[1.1,0,-.6],foreR:[-2,0,0],armL:[-1.2,0,.3],foreL:[-.4,0,0],torso:[.05,-1.4,0],head:[0,1.1,0],legR:[.3,0,-.14],legL:[-.5,0,.14],shinL:[.5,0,0],by:-.06}],[70,{...St,armR:[-1.55,0,-.02],foreR:[0,0,0],armL:[.5,0,.5],torso:[.3,.75,0],legR:[.5,0,-.14],legL:[-.9,0,.14],shinL:[.9,0,0],by:-.09,bz:.35}],[92,{...St,armR:[-1.5,0,-.02],armL:[.5,0,.5],torso:[.28,.7,0],by:-.08,bz:.3}],[118,St]]},sideb:{total:60,keepVel:!0,noDrift:!0,canLeaveGround:!0,noGravity:[10,32],landContinue:!0,helpless:!0,helplessLag:22,hit:[ge(16,30,.85,1.25,.55,0,0,0,0,{type:"grab",then:n=>n.grounded?"sidebchoke":"sidebdive"})],onStart(n){n.grounded||(n.sideBUsed=!0)},onFrame(n,t){if(t<16)n.vx=oi(n.vx,0,.02);else if(t<=30){n.vx=n.facing*(n.grounded?.27:.21),n.grounded||(n.vy=-.015),t===16&&mt.whoosh(.9);let e=co(n,1);Fi(n,e.x,e.y,1,.5)}else n.vx*=.8},anim:[[0,St],[12,{...St,armL:[.6,0,.5],foreL:[-1.5,0,0],torso:[.2,.5,0],by:-.05}],[16,{...St,armL:[-1.5,0,.05],foreL:[-.2,0,0],armR:[.6,0,-.5],torso:[.5,-.5,0],legR:[.6,0,-.14],legL:[-.9,0,.14],shinL:[.8,0,0],by:-.07,bz:.3}],[32,{...St,armL:[-1.45,0,.05],armR:[.6,0,-.5],torso:[.45,-.5,0],by:-.05,bz:.25}],[60,St]]},sidebchoke:{total:58,hold:n=>[.8,n<18?Math.min(.9,n*.07):Math.max(0,.9-(n-18)*.3)],onStart(n){n.vx=0},onFrame(n,t){if(n.vx=0,t<22&&Fi(n,n.x+n.facing*.8,n.y+1.6,2,.6),t===22){let e=n.grabbing;e&&(Wf(n,12),n.grabbing=null,e.grabbedBy=null,e.x=n.x+n.facing*.85,e.y=n.y,e.vx=e.vy=e.kx=e.ky=0,e.grounded=!0,e.surface=n.surface,e.techWindow>0?(e.techWindow=0,mt.tech(),e.setState("tech")):e.setState("knockdown"));let i=n.x+n.facing*.8;n.battle.effects.ring(i,n.y+.2,dn,3.2,16),Fi(n,i,n.y+.5,12,1.4),n.battle.shakeCam(.2),mt.fire()}},anim:[[0,{...St,armL:[-1.5,0,.05],foreL:[-.2,0,0],torso:[.3,-.4,0]}],[16,{...St,armL:[-2.2,0,.05],foreL:[-.2,0,0],torso:[0,-.3,0]}],[22,{...St,armL:[-.9,0,.05],foreL:[0,0,0],torso:[.6,-.3,0],by:-.14,legL:[-.9,0,.14],shinL:[1.2,0,0]}],[40,{...St,armL:[-.9,0,.05],torso:[.55,-.3,0],by:-.13}],[58,St]]},sidebdive:{total:400,noGravity:[0,400],keepVel:!0,noDrift:!0,hold:()=>[.7,.5],onFrame(n,t){if(n.vars.endAt){n.vx=0,t>=n.vars.endAt&&n.endMove();return}n.vx=0,n.vy=t<8?.02:-.36,Fi(n,n.x+n.facing*.7,n.y+1.4,1,.6)},onLand(n){if(!n.vars.endAt){n.vars.endAt=n.mf+30;let t=n.x+n.facing*.7;n.doThrow({dmg:15,ang:70,bkb:60,kbg:50}),n.battle.effects.ring(t,n.y+.2,dn,3.6,16),Fi(n,t,n.y+.5,12,1.4),n.battle.shakeCam(.25),mt.fire()}return"continue"},anim:[[0,{...Oe,armL:[-1.5,0,.05],foreL:[-.2,0,0]}],[8,{...Oe,armL:[-.7,0,.05],foreL:[0,0,0],torso:[.5,-.3,0]}],[400,{...Oe,armL:[-.7,0,.05],foreL:[0,0,0],torso:[.5,-.3,0]}]]},upb:{total:62,helpless:!0,helplessLag:26,ledgeGrab:20,noDrift:!0,keepVel:!0,noGravity:[14,40],hit:[ge(14,30,.45,1.7,.6,0,0,0,0,{type:"grab",then:"upbshock"}),ge(34,37,.5,2.3,.6,7,70,60,70)],onStart(n){n.upBUsed=!0,n.vx*=.4},onFrame(n,t){if(t<14&&(n.grounded||(n.vy=Math.max(n.vy,-.02)),Math.abs(n.input.stick.x)>.4&&t<6&&(n.facing=Math.sign(n.input.stick.x))),t===14&&(n.grounded=!1,n.surface=null,n.y+=.02,mt.whoosh(1)),t>=14&&t<=40){n.vy=.33*(1-(t-14)/30)+.01,n.vx=oi(n.vx,n.facing*.07+n.input.stick.x*.04,.012);let e=co(n,1);Fi(n,e.x,e.y,1,.45)}t>40&&n.drift(.5)},anim:[[0,{...St,by:-.09,legR:[-.8,0,-.14],shinR:[1.3,0,0],legL:[-.8,0,.14],shinL:[1.3,0,0],armL:[.4,0,.4]}],[14,{...Oe,armL:[-2.6,0,.1],foreL:[-.2,0,0],armR:[.3,0,-.5],torso:[-.1,0,0],head:[-.3,0,0]}],[32,{...Oe,armL:[-2.5,0,.1],foreL:[-.3,0,0],armR:[.4,0,-.5],foreR:[-1.4,0,0]}],[36,{...Oe,armR:[-2.9,0,-.1],foreR:[-.2,0,0],armL:[.3,0,.5],torso:[-.2,.3,0]}],[62,Oe]]},upbshock:{total:50,noGravity:[0,34],keepVel:!0,noDrift:!0,throwAt:30,throwHit:{dmg:9,ang:55,bkb:70,kbg:78},hold:()=>[.45,.75],onFrame(n,t){t<30&&(n.vx=0,n.vy=0),t<24&&t%6===5&&(Wf(n,1.5),n.battle.effects.sparkle(n.x+n.facing*.5,n.y+1.8,14729471,4,.6),Fi(n,n.x+n.facing*.5,n.y+1.8,3,.7)),t===30&&(n.battle.effects.ring(n.x+n.facing*.5,n.y+1.8,dn,3.4,16),Fi(n,n.x+n.facing*.5,n.y+1.8,12,1.4),mt.fire(),n.battle.shakeCam(.2),n.vy=.22,n.vx=-n.facing*.07,n.upBUsed=!1)},anim:[[0,{...Oe,armL:[-2.3,0,.1],foreL:[-.6,0,0],armR:[-2,0,-.1],foreR:[-.8,0,0]}],[28,{...Oe,armL:[-2.3,0,.1],foreL:[-.7,0,0],armR:[-2,0,-.1],foreR:[-.9,0,0],torso:[.15,0,0]}],[31,{...Oe,armL:[-2.6,0,.8],foreL:[0,0,0],armR:[-2.6,0,-.8],foreR:[0,0,0],torso:[-.3,0,0]}],[50,Oe]]},downb:{total:62,keepVel:!0,noDrift:!0,canLeaveGround:!0,landContinue:!0,noGravity:[16,36],hit:[ge(16,22,.95,.75,.6,14,44,50,80),ge(23,36,.9,.75,.55,12,44,40,70)],onStart(n){n.grounded||n.startMove("downbair")},onFrame(n,t){t<16?n.vx=oi(n.vx,0,.02):t<=36?(n.vx=n.facing*.27,n.grounded||(n.vy=0),t===16&&mt.whoosh(1),Fi(n,n.x+n.facing*.9,n.y+.7,2,.6),t%4===0&&n.grounded&&n.battle.effects.dust(n.x,n.y,1,-n.facing)):n.friction(2.5)},anim:[[0,St],[12,{...St,legR:[-1,0,-.1],shinR:[1.7,0,0],torso:[-.1,0,0],armR:[.3,0,-.6],armL:[-.5,0,.5],by:-.05}],[16,{...St,legR:[-1.45,0,-.03],shinR:[0,0,0],legL:[.5,0,.14],shinL:[.9,0,0],torso:[-.5,0,0],armR:[.6,0,-.7],armL:[.4,0,.7],by:-.11,bz:.2}],[36,{...St,legR:[-1.45,0,-.03],shinR:[0,0,0],legL:[.5,0,.14],shinL:[.9,0,0],torso:[-.5,0,0],armR:[.6,0,-.7],armL:[.4,0,.7],by:-.11,bz:.2}],[62,St]]},downbair:{total:600,keepVel:!0,noDrift:!0,noGravity:[0,600],hit:[ge(16,19,.7,.1,.62,15,270,30,90),ge(20,600,.7,.15,.55,14,55,45,75)],onStart(n){n.jumpsLeft=n.s.airJumps},onFrame(n,t){t<16?(n.vx*=.85,n.vy=Math.max(n.vy-.004,-.03)):(n.vx=n.facing*.2,n.vy=-.32,t===16&&mt.whoosh(1),Fi(n,n.x+n.facing*.6,n.y+.2,2,.6))},onLand(n){if(n.mf>=16)return n.startMove("downbland"),"continue"},anim:[[0,Oe],[12,{...Oe,legR:[-1.2,0,-.1],shinR:[1.8,0,0],armR:[.3,0,-.7],armL:[.3,0,.7]}],[16,{body:[.55,0,0],legR:[-.9,0,-.03],shinR:[0,0,0],legL:[-.2,0,.14],shinL:[1.6,0,0],armR:[.5,0,-.8],armL:[.5,0,.8],torso:[-.3,0,0]}],[600,{body:[.55,0,0],legR:[-.9,0,-.03],shinR:[0,0,0],legL:[-.2,0,.14],shinL:[1.6,0,0],armR:[.5,0,-.8],armL:[.5,0,.8],torso:[-.3,0,0]}]]},downbland:{total:34,hit:[ge(1,3,.6,.3,.9,8,70,60,60,{away:!0}),ge(1,3,-.6,.3,.8,8,70,60,60,{away:!0})],onStart(n){n.vx=0,n.battle.effects.ring(n.x,n.y+.1,dn,3,14),n.battle.effects.dust(n.x,n.y,8,0),n.battle.shakeCam(.15),mt.hit(.7)},anim:[[0,{...St,by:-.2,legR:[-1.3,0,-.2],shinR:[1.9,0,0],legL:[-.6,0,.2],shinL:[1.8,0,0],torso:[.4,0,0]}],[20,{...St,by:-.18,legR:[-1.2,0,-.2],shinR:[1.8,0,0],legL:[-.6,0,.2],shinL:[1.7,0,0],torso:[.35,0,0]}],[34,St]]},final:{total:150,fs:!0,intang:[0,150],noGravity:[0,150],noDrift:!0,keepVel:!0,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,40)},onFrame(n,t){let e=n.battle;if(n.vx=0,n.grounded||(n.vy=0),t<40&&Fi(n,n.x,n.y+1.2,3,1+t*.03),t===40&&(n.hidden=!0,n.vars.beast=e.addFx(new X0(e,n.x-n.facing*1.5,n.y,n.facing)),mt.fsBoom(),e.shakeCam(.4)),t>40&&(n.hidden=!0),t===62){let i=n.x+n.facing*3.2;e.effects.ring(i,n.y+.2,dn,7,22),e.effects.dust(i,n.y,12,0),e.shakeCam(.6),mt.hit(1),e.fsTrap(n,i,n.y+1.2,3.2),e.fsDamage(n,10)}t===84&&(n.vars.beast.vx=n.facing*.75,e.fsLaunch(n,{dmg:40,ang:38,bkb:110,kbg:95}),e.spawnProjectile(n,{x:n.x+n.facing*2,y:n.y+1.8,vx:n.facing*.75,vy:0,r:2.4,dmg:40,ang:38,bkb:110,kbg:95,life:60,color:q0,core:dn,kind:"fswave",fs:!0}),e.shakeCam(.7),mt.fsBoom()),t>84&&t%6===0&&e.shakeCam(.2)},onEnd(n){n.hidden=!1,n.vars.beast&&(n.battle.removeFx(n.vars.beast),n.vars.beast=null),n.battle.fsRelease(n)},anim:[[0,St],[30,{...St,armR:[-.6,0,-1.2],armL:[-.6,0,1.2],foreR:[-1,0,0],foreL:[-1,0,0],torso:[-.25,0,0],head:[-.4,0,0]}],[150,St]]},grab:{total:37,hit:[ge(7,8,.95,1.4,.5,0,0,0,0,{type:"grab"})],anim:[[0,St],[7,{...St,armL:[-1.5,0,.05],foreL:[-.1,0,0],torso:[.25,-.4,0],bz:.12}],[18,{...St,armL:[-1.4,0,.05],torso:[.2,-.35,0]}],[37,St]]},dashgrab:{total:44,keepVel:!0,hit:[ge(10,11,1.1,1.4,.55,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,St],[10,{...St,armL:[-1.5,0,.05],foreL:[-.1,0,0],torso:[.4,-.4,0],bz:.2}],[24,{...St,armL:[-1.4,0,.05],torso:[.35,-.35,0]}],[44,St]]},pummel:{total:20,pummelAt:6,pummelDmg:1.6,anim:[[0,{...St,armL:[-1.4,0,.05]}],[6,{...St,armL:[-1.4,0,.05],legR:[-1.3,0,-.05],shinR:[1.7,0,0],torso:[.2,0,0]}],[20,{...St,armL:[-1.4,0,.05]}]]},fthrow:{total:36,throwAt:12,throwHit:{dmg:13,ang:40,bkb:60,kbg:70},hold:()=>[.9,.3],anim:[[0,{...St,armL:[-1.4,0,.05]}],[8,{...St,armL:[-1.4,0,.05],armR:[.5,0,-.5],foreR:[-1.6,0,0],torso:[.05,-.4,0]}],[12,{...St,armR:[-1.4,0,-.05],foreR:[0,0,0],torso:[.25,.5,0],bz:.2}],[36,St]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:10,ang:140,bkb:60,kbg:100},hold:n=>{let t=Math.min(1,n/14);return[.9*Math.cos(Math.PI*t),.3+.5*Math.sin(Math.PI*t)]},anim:[[0,{...St,armL:[-1.4,0,.05]}],[12,{...St,torso:[0,-1.2,0],armL:[1,0,.3]}],[16,{...St,torso:[-.2,-.6,0],legR:[1.3,0,-.05],shinR:[0,0,0]}],[40,St]]},uthrow:{total:38,throwAt:14,throwHit:{dmg:13,ang:88,bkb:70,kbg:70},hold:n=>[.7-n*.02,.3+n*.05],anim:[[0,{...St,armL:[-1.4,0,.05]}],[9,{...St,armL:[-1.8,0,.05],armR:[.4,0,-.4],foreR:[-1.6,0,0],by:-.07}],[14,{...St,armR:[-2.9,0,-.1],foreR:[0,0,0],torso:[-.15,.3,0],by:.05}],[38,St]]},dthrow:{total:38,throwAt:16,throwHit:{dmg:7,ang:70,bkb:70,kbg:45},hold:n=>[.85,n<10?.3+n*.09:Math.max(0,1.2-(n-10)*.2)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.85,n.y,8,0),n.battle.shakeCam(.1))},anim:[[0,{...St,armL:[-1.4,0,.05]}],[10,{...St,armL:[-2.6,0,.05],torso:[-.1,0,0]}],[16,{...St,armL:[-.8,0,.05],foreL:[0,0,0],torso:[.6,-.2,0],by:-.14}],[38,St]]},getupattack:{total:40,intang:[0,14],trail:"footR",trailF:[12,22],hit:[ge(15,17,1.2,.5,.65,7,48,60,50),ge(20,22,-1.2,.5,.65,7,132,60,50,{group:1})],anim:[[0,{...St,by:-.32,torso:[.6,0,0]}],[15,{...St,by:-.18,legR:[-1.45,0,-.05],shinR:[0,0,0],torso:[-.2,0,0]}],[21,{...St,by:-.18,legR:[1.3,0,-.05],shinR:[0,0,0],torso:[.4,0,0]}],[40,St]]},ledgeattack:{total:40,intang:[0,12],trail:"handR",trailF:[10,16],sfx:[11,"whoosh",.6],hit:[ge(12,15,1.1,.9,.7,10,45,60,50)],anim:[[0,{...St,by:-.14}],[12,{...St,armR:[-1.5,0,-.05],foreR:[0,0,0],torso:[.3,.45,0],bz:.25}],[24,{...St,armR:[-1.4,0,-.05],torso:[.25,.4,0]}],[40,St]]}},Y0={id:"doros",name:"\u30C9\u30ED\u30B9",en:"DOROS",title:"\u9B54\u738B",color:10502399,css:"#a040ff",desc:"\u52D5\u304D\u306F\u91CD\u304F\u9045\u3044\u304C\u3001\u3069\u306E\u30EF\u30B6\u3082\u4E00\u6483\u5FC5\u6BBA\u7D1A\u3002\u95C7\u306E\u62F3\u3068\u5927\u5263\u3067\u76F8\u624B\u3092\u306D\u3058\u4F0F\u305B\u308B\u3002",specials:["\u6EC5\u7815\u62F3\uFF08\u9577\u3044\u6E9C\u3081\u30FB\u6E9C\u3081\u4E2D\u306F\u3075\u3063\u3068\u3070\u306A\u3044\u30FB\u632F\u308A\u5411\u304D\u3067\u5A01\u529B\u5897\uFF09","\u7344\u708E\u638C\uFF08\u7A81\u9032\u3064\u304B\u307F\u30FB\u7A7A\u4E2D\u3067\u306F\u9053\u9023\u308C\u6025\u964D\u4E0B\uFF09","\u96F7\u9583\u638C\uFF08\u4E0A\u6607\u3064\u304B\u307F\u2192\u7206\u767A\uFF09","\u70C8\u9707\u811A\uFF08\u5730\u4E0A\u306F\u7A81\u9032\u8E74\u308A\u30FB\u7A7A\u4E2D\u306F\u6025\u964D\u4E0B\u30E1\u30C6\u30AA\uFF09"],stats:{weight:118,height:2.3,radius:.46,walkSpeed:.055,dashSpeed:.125,dashFrames:13,runSpeed:.102,traction:.011,airSpeed:.066,airAccel:.005,airFriction:.003,gravity:.0108,fallSpeed:.195,fastFall:.31,jumpV:.25,hopV:.155,djV:.225,airJumps:1,jumpsquat:6,rollSpeed:.11},grabHold:[.9,.35],buildModel:Hf,anims:As({idle:St,hipY:qc,bob:.7,override:{victory:n=>({...St,armR:[.1,0,-.5],foreR:[-2,0,.6],armL:[.1,0,.5],foreL:[-2,0,-.6],torso:[-.12,0,0],head:[-.2+Math.sin(n*.25)*.05,0,0]})}}),moves:mv}});var ho,Zr,Z0=Ye(()=>{Af();If();Bf();qf();ho={illumine:U0,dullahan:N0,dragon:z0,doros:Y0},Zr=[U0,N0,z0,Y0]});var Yf,$s,J0,Yc,Zf=Ye(()=>{Si();_f();Mf();Uc();io();Z0();rs();hn();Qa();D0();Yf=[16730714,4164863,16765498,4185194],$s=["#ff4a5a","#3f8cff","#ffd23a","#3fdc6a"],J0=class{constructor(t,e,i){if(this.b=t,this.owner=e,Object.assign(this,i),this.hitIds=new Set,this.dead=!1,this.age=0,i.kind==="arrow"){let l=new Ht,c=.75+i.r,h=new At(new Be(.018,.018,c,6),new Se({color:1312796}));h.rotation.z=Math.PI/2;let d=new At(new ce(.06+i.r*.12,.22,6),new Se({color:new xt(i.color).multiplyScalar(1.5)}));d.rotation.z=-Math.PI/2,d.position.x=c/2+.08;let u=new At(new ce(.07,.16,3),new Se({color:2756672}));u.rotation.z=-Math.PI/2,u.position.x=-c/2+.05,u.scale.set(1,1,.2);let f=new Mi(new xi({map:Xi(),color:i.color,transparent:!0,blending:Xe,depthWrite:!1}));f.scale.setScalar(.5+i.r*2),f.position.x=c/2,l.add(h,d,u,f),l.position.set(i.x,i.y,.25),l.rotation.z=Math.atan2(i.vy,i.vx),this.mesh=l,t.scene.add(l);return}if(i.kind==="flame"){let l=new Ht,c=new Mi(new xi({map:Xi(),color:16730634,transparent:!0,depthWrite:!1})),h=new Mi(new xi({map:Xi(),color:new xt(16760880),transparent:!0,blending:Xe,depthWrite:!1}));l.add(c,h),l.position.set(i.x,i.y,.3),this.outer=c,this.inner=h,this.maxLife=i.life,this.mesh=l,t.scene.add(l);return}if(i.kind==="fswave"){this.mesh=Tf(i.color,i.core),this.mesh.position.set(i.x,i.y,.3),i.vx<0&&(this.mesh.rotation.y=Math.PI),t.scene.add(this.mesh);return}let s=new Ht,r=new At(new Dt(1,16,12),new Se({color:new xt(i.core||16777215).multiplyScalar(1.4)}));r.scale.setScalar(i.r*.55);let a=new Mi(new xi({map:Xi(),color:i.color,transparent:!0,blending:Xe,depthWrite:!1}));a.scale.setScalar(i.r*4);let o=new At(new Dt(1,16,12),new Se({color:new xt(i.color).multiplyScalar(1.1),transparent:!0,opacity:.55,blending:Xe,depthWrite:!1}));o.scale.setScalar(i.r),s.add(o,r,a),s.position.set(i.x,i.y,.2),this.mesh=s,this.shell=o,t.scene.add(s)}update(){if(this.age++,this.px=this.x,this.py=this.y,this.x+=this.vx,this.y+=this.vy,this.life--,this.kind==="flame"){this.vx*=.94,this.vy*=.94,this.r=Math.min(this.rMax||.7,this.r+.03),this.age%3===0&&this.b.effects.spawn({x:this.x,y:this.y+.1,z:.2,vy:.015,life:18,size:this.r*.8,size1:.1,color:3811882,additive:!1,opacity:.35}),(this.life<=0||eo(this.x,this.y))&&this.kill(!1);return}if(this.kind==="arrow"){this.age%2===0&&this.b.effects.spawn({x:this.x-this.vx*1.5,y:this.y,z:.2,life:12,size:.25+this.r,size1:.02,color:this.color}),(this.life<=0||eo(this.x,this.y)||Math.abs(this.x)>30)&&this.kill(!0);return}if(this.kind==="fswave"){for(let t=0;t<3;t++)this.b.effects.sparkle(this.x-this.vx*2,this.y+Ot(-1.8,1.8),t?this.color||16765024:16777215,1,.3);(this.life<=0||Math.abs(this.x)>26)&&this.kill(!1);return}this.age%2===0&&this.b.effects.spawn({x:this.x-this.vx*2,y:this.y+Ot(-.1,.1),z:.2,life:14,size:this.r*1.6,size1:.05,color:this.color}),(this.life<=0||eo(this.x,this.y)||Math.abs(this.x)>30)&&this.kill(!0)}kill(t){this.dead||(this.dead=!0,t&&this.b.effects.ring(this.x,this.y,this.color,1.5,12),this.b.scene.remove(this.mesh),this.mesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}render(t){let e=this.px===void 0?this.x:this.px+(this.x-this.px)*t,i=this.py===void 0?this.y:this.py+(this.y-this.py)*t;if(this.mesh.position.set(e,i,this.kind==="fswave"?.3:.2),this.kind==="flame"){let s=this.age/this.maxLife;this.outer.scale.setScalar(this.r*2.6),this.inner.scale.setScalar(this.r*1.3*(1-s*.6)),this.outer.material.opacity=.9*Math.max(0,1-s*s),this.inner.material.opacity=.8*Math.max(0,1-s),this.outer.material.color.setRGB(1,.2+.35*(1-s),.03);return}this.kind!=="arrow"&&(this.shell?this.shell.scale.setScalar(this.r*(1+Math.sin(this.age*.6)*.08)):this.mesh.scale.set(1,1+Math.sin(this.age*.5)*.05,1))}},Yc=class{constructor(t,e){this.app=t,this.scene=t.scene,this.stage=t.stage,this.effects=t.effects,this.camera=t.camera,this.cfg=e,this.stage.setType(e.stage),this.effects.clear(),this.tmpV=new P,this.projectiles=[],this.timers=[],this.frame=0,this.phase="countdown",this.phaseT=0,this.shake=0,this.slowmo=0,this.finalFocus=null,this.winner=null,this.hitboxDebug=!1,this.ballOn=e.ball!==!1,this.ball=null,this.ballTimer=60*Ot(16,26),this.cine=null,this.fsFx=[];let i=e.players.filter(r=>r.type==="human").length,s=e.players.map((r,a)=>e.players.slice(0,a).filter(o=>o.char===r.char).length);this.fighters=e.players.map((r,a)=>{let o=new Ic,l=new kc(this,a,ho[r.char],{input:o,variant:s[a],color:Yf[a],stocks:e.stocks,cpu:r.type==="cpu",label:r.type==="cpu"?"CPU":`P${a+1}`});return r.type==="cpu"&&(l.ai=new Oc(this,l,r.level)),l.keymaps=r.type==="human"?i===1?T0:[T0[a]]:[],l.padIndex=r.type==="human"?e.players.slice(0,a).filter(c=>c.type==="human").length:-1,l}),this.cam={x:0,y:2,d:22},this.updateCamera(1),this.dbg=new Ht,this.scene.add(this.dbg),mt.playMusic("battle")}later(t,e){this.timers.push({t,fn:e})}shakeCam(t){this.shake=Math.max(this.shake,t)}tick(){this.frame++,this.phaseT++,this.phase==="fight"&&(this.fightFrames=(this.fightFrames||0)+1);for(let t=this.timers.length-1;t>=0;t--){let e=this.timers[t];--e.t<=0&&(this.timers.splice(t,1),e.fn())}for(let t of this.fighters){let e;t.ai?e=t.ai.update():(e=En(),this.app.kb.read(t.keymaps,e),t.padIndex>=0&&Dc(t.padIndex,e),t.padIndex===0&&this.app.touch.read(e)),(this.phase==="countdown"||this.phase==="gameover")&&(e=En()),t.input.latch(e)}if(this.phase==="countdown"){let t=3-Math.floor(this.phaseT/50);this.phaseT%50===1&&t>0&&(this.app.bigText(String(t),"count"),mt.countdown()),this.phaseT===150&&(this.phase="fight",this.app.bigText("GO!","go"),mt.go());for(let e of this.fighters)e.animT++,e.prevX=e.x,e.prevY=e.y,e.animate();this.effects.update();return}if(this.phase==="gameover"&&this.phaseT>50){for(let t of this.fighters)t.prevX=t.x,t.prevY=t.y,t.animT++,t.animate();this.effects.update(),this.phaseT===170&&this.app.showResults(this);return}if(this.cine){let t=this.cine;t.t++;for(let e of this.fighters)e!==t.user&&(e.prevX=e.x,e.prevY=e.y);t.user.update();for(let e of this.fighters)e.animate();for(let e of this.fsFx)e.update&&e.update();this.effects.update(),t.t>=t.len&&(this.cine=null,this.app.setCine(!1));return}for(let t of this.fighters)t.update();for(let t of this.projectiles)t.update();for(let t of this.fsFx)t.update&&t.update();this.updateBall(),this.resolveHits(),this.resolveProjectiles(),this.projectiles=this.projectiles.filter(t=>!t.dead),this.pushApart();for(let t of this.fighters)this.checkBlast(t);for(let t of this.fighters)t.animate();this.effects.update(),this.phase==="gameover"&&this.phaseT===170&&this.app.showResults(this)}resolveHits(){let t=[];for(let i of this.fighters){if(i.state!=="attack"||i.hitlag>0)continue;let s=i.activeHitboxes();if(s.length)for(let r of this.fighters){if(r===i||r.state==="dead"||r.state==="respawn")continue;let a=r.hurtbox();for(let o of s){let l=(o.h.group||0)+":"+r.slot;if(!i.hitIds.has(l)&&!(M0(o.x,o.y,a.ax,a.ay,a.bx,a.by)>o.r+a.r)&&!r.isIntangible()&&!(o.h.type==="grab"&&(r.state==="grabbed"||r.state==="ledge"||r.grabbing||i.grabbing))){i.hitIds.add(l),t.push({a:i,d:r,box:o});break}}}}for(let{a:i,d:s,box:r}of t)this.processHit(i,s,r);let e=this.ball;if(e&&!e.dead&&e.life>0){for(let i of this.fighters)if(!(i.state!=="attack"||i.hitlag>0||i.hitIds.has("ball")||i.fsReady)){for(let s of i.activeHitboxes())if(s.h.type!=="grab"&&!(Math.hypot(s.x-e.x,s.y-e.y)>s.r+e.r)){i.hitIds.add("ball"),i.hitlag=5,e.hit(this.calcDmg(i,s.h),ie(e.x-i.x)||i.facing)&&this.breakBall(i);break}if(!this.ball)break}}}updateBall(){if(!(!this.ballOn||this.phase!=="fight")){if(this.ball){this.ball.update(),this.ball.dead&&(this.ball=null,this.ballTimer=60*Ot(20,32));return}this.fighters.some(t=>t.fsReady||t.move&&t.move.fs)||--this.ballTimer<=0&&(this.ball=new Gc(this),mt.star())}}breakBall(t){let e=this.ball;this.effects.koBlast(e.x,e.y,16769136),this.effects.ring(e.x,e.y,16777215,5,24),this.shakeCam(.25),mt.fsReady(),e.remove(),this.ball=null,this.ballTimer=60*Ot(22,34),t.fsReady=!0,this.app.hud.setFs(t.slot,!0)}startCine(t,e){this.cine={user:t,t:0,len:e},this.app.setCine(!0,`${t.def.name}\u300C${Rf(t.def)}\u300D`,t.def.css),mt.fsStart(),this.app.hud.setFs(t.slot,!1)}fsTrap(t,e,i,s){for(let r of this.fighters)r===t||r.state==="dead"||r.state==="respawn"||r.state==="trapped"||r.invuln>0||r.state==="ledgeclimb"||Math.hypot(r.x-e,r.y+r.height*.5-i)>s+.4||(r.move=null,r.grabbing&&r.releaseGrabQuiet(),r.grabbedBy&&(r.grabbedBy.grabbing=null,r.grabbedBy=null),r.setState("trapped"),r.trap={by:t,x:e,y:i},r.vx=r.vy=r.kx=r.ky=0,r.grounded=!1,r.surface=null,r.pendingLaunch=null)}fsTrapped(t){return this.fighters.filter(e=>e.state==="trapped"&&e.trap&&e.trap.by===t)}fsDamage(t,e){for(let i of this.fsTrapped(t))i.damage=Math.min(999,i.damage+e),t.stats.dealt+=e,i.stats.taken+=e,i.flashT=5,this.app.hud.bump(i.slot),this.effects.hitSpark(i.x+Ot(-.4,.4),i.y+i.height*.5+Ot(-.4,.4),t.def.color,.35),mt.hit(.35)}fsLaunch(t,e){for(let i of this.fsTrapped(t)){i.trap=null,i.setState("hitstun");let s=ie(i.x-t.x)||t.facing;this.applyHit(t,i,e,i.x,i.y+i.height*.5,s,e.dmg),i.hitlag=12}}fsRelease(t){for(let e of this.fsTrapped(t))e.trap=null,e.setState("air")}addFx(t){return this.fsFx.push(t),t}removeFx(t){let e=this.fsFx.indexOf(t);e>=0&&this.fsFx.splice(e,1),t.remove()}calcDmg(t,e){let i=typeof e.dmg=="function"?e.dmg(t):e.dmg,s=t.move;return s&&s.smash&&(i*=1+.4*t.chargeRatio),s&&s.chargeScale&&(i*=1+s.chargeScale*t.chargeRatio),Math.round(i*10)/10}processHit(t,e,i){let s=i.h;if(s.type==="grab"){t.state==="attack"&&e.state!=="grabbed"&&t.state!=="grabbed"&&(s.then?t.commandGrab(e,typeof s.then=="function"?s.then(t):s.then):t.grabOpponent(e));return}let r=this.calcDmg(t,s);if(e.inWindow("counter"))return this.triggerCounter(e,t,r);let a=s.away&&ie(e.x-t.x)||t.facing;if(e.state==="shield"||e.state==="shieldstun")return this.shieldHit(t,e,s,r,i.x,i.y,a);this.applyHit(t,e,s,i.x,i.y,a,r)}applyHit(t,e,i,s,r,a,o){let l=o??i.dmg;if(e.damage=Math.min(999,e.damage+l),t.stats.dealt+=l,e.stats.taken+=l,e.lastHitInfo={move:i.throwHit?"throw":i.projectile?"projectile":t.moveName,frame:this.frame,dmg:e.damage},this.app.hud.bump(e.slot),e.inWindow("armor")&&!i.throwHit){let g=Math.floor(l*.35+3);i.projectile||(t.hitlag=g),e.hitlag=g,e.flashT=6,this.effects.hitSpark(s,r,16765024,.3,a),mt.armor();return}let c=vf(e.damage,l,e.s.weight,i.kbg,i.bkb),h=i.ang;h===361&&(h=e.grounded&&c<60?0:40);let d=e.receiveKnockback(c,h,a,l,t);i.link&&e.pendingLaunch&&(e.pendingLaunch.link=t,e.hitstun=16,e.tumble=!1),!i.throwHit&&!i.projectile&&(t.hitlag=d);let u=c/140;this.effects.hitSpark(s,r,t.def.color,u,a),i.throwHit?mt.hit(u*.8):t.def.id==="dullahan"&&!i.projectile&&t.move&&t.move.trail==="sword"?(mt.slash(u),mt.hit(u*.9)):mt.hit(u),c>90&&this.shakeCam(Math.min(.5,c/500));let f=this.fighters.filter(g=>g.stocks>0&&g.state!=="dead");e.stocks===1&&f.length===2&&this.predictKO(e,c,h,a)&&(this.slowmo=50,this.finalFocus=e,this.effects.ring(e.x,e.y+1,16777215,6,30))}predictKO(t,e,i,s){let r=t.x,a=t.y,o=Math.cos(i*Zs)*s*e*ro,l=Math.sin(i*Zs)*e*ro,c=0,h=ze.blast;for(let d=0;d<240;d++){let u=Math.hypot(o,l);if(u>0){let f=Math.max(0,u-Bc);o*=f/u,l*=f/u}if(c=Math.max(c-t.s.gravity,-t.s.fallSpeed),r+=o,a+=l+c,r<h.left||r>h.right||a>h.top||a<h.bottom)return!0;if(eo(r,a)||u<.02&&d>10)return!1}return!1}shieldHit(t,e,i,s,r,a,o){e.shieldHP-=s+(i.shield||0),e.setState("shieldstun"),e.shieldstun=Math.floor(s*.75+2),e.vx=o*Math.min(.18,.03+s*.008),!i.projectile&&t.grounded&&(t.vx=-o*Math.min(.12,.01+s*.005));let l=Math.floor(s*.35+3);i.projectile||(t.hitlag=l),e.hitlag=l,this.effects.shieldSpark(r,a,e.color),mt.shieldHit(),e.shieldHP<=0&&e.shieldBreak()}triggerCounter(t,e,i){t.counterDmg=i,t.facing=ie(e.x-t.x)||t.facing,t.startMove(t.def.counterMove),t.invuln=Math.max(t.invuln,14),e.hitlag=14,this.effects.ring(t.x,t.y+1,10479871,3.5,18),this.effects.sparkle(t.x,t.y+1,16777215,8,.8),mt.counter(),this.shakeCam(.1)}resolveProjectiles(){for(let t of this.projectiles){if(t.dead)continue;let e=this.ball;if(e&&!e.dead&&e.life>0&&!t.fs&&!t.owner.fsReady&&Math.hypot(t.x-e.x,t.y-e.y)<t.r+e.r){e.hit(t.dmg,ie(t.vx)||1)&&this.breakBall(t.owner),t.kill(!0);continue}for(let i of this.fighters){if(i===t.owner||i.state==="dead"||i.state==="respawn"||t.hitIds.has(i.slot))continue;let s=i.hurtbox();if(M0(t.x,t.y,s.ax,s.ay,s.bx,s.by)>t.r+s.r)continue;if(t.fs){if(i.invuln>0)continue;t.hitIds.add(i.slot),i.grabbing&&i.releaseGrabQuiet(),i.move=null,this.applyHit(t.owner,i,{dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,projectile:!0},i.x,i.y+i.height*.5,ie(t.vx)||1,t.dmg),i.hitlag=26,this.effects.koBlast(i.x,i.y+1,16765024),this.shakeCam(.5);continue}if(i.inWindow("reflect")){t.owner=i,t.vx=-t.vx*1.2,t.dmg*=1.4,t.life=90,t.hitIds.clear(),this.effects.ring(t.x,t.y,10479871,2,12),mt.reflect();continue}if(i.isIntangible())continue;t.hitIds.add(i.slot);let r={dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,projectile:!0};if(i.inWindow("counter")){this.triggerCounter(i,t.owner,t.dmg),t.kill(!0);break}let a=ie(t.vx)||1;i.state==="shield"||i.state==="shieldstun"?this.shieldHit(t.owner,i,r,t.dmg,t.x,t.y,a):this.applyHit(t.owner,i,r,t.x,t.y,a,t.dmg),t.kill(!1);break}}}spawnProjectile(t,e){this.projectiles.push(new J0(this,t,e))}pushApart(){let t=this.fighters;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let s=t[e],r=t[i];if(!s.grounded||!r.grounded||s.surface!==r.surface||s.state==="grabbed"||r.state==="grabbed"||s.state==="dead"||r.state==="dead")continue;let a=r.x-s.x,o=(s.s.radius+r.s.radius)*.9;if(Math.abs(a)<o){let l=Math.min(.04,(o-Math.abs(a))*.25),c=ie(a)||(s.slot<r.slot?1:-1),h=s.surface||{x1:-99,x2:99};s.x=Re(s.x-c*l,h.x1,h.x2),r.x=Re(r.x+c*l,h.x1,h.x2)}}}checkBlast(t){if(t.state==="dead"||t.state==="respawn"||this.phase==="gameover")return;let e=ze.blast;if(t.x>e.left&&t.x<e.right&&t.y>e.bottom&&t.y<e.top)return;let i=Re(t.x,e.left+1,e.right-1),s=Re(t.y,e.bottom+1,e.top-1);this.effects.koBlast(i,s,Yf[t.slot]),mt.ko(),this.shakeCam(.7),t.lastHitBy&&t.lastHitBy!==t?t.lastHitBy.stats.kos++:t.stats.sds++,t.die(),this.app.hud.bump(t.slot),this.finalFocus===t&&(this.finalFocus=null);let r=this.fighters.filter(a=>a.stocks>0);r.length<=1&&this.phase==="fight"&&(this.phase="gameover",this.phaseT=0,this.winner=r[0]||null,this.slowmo=60,this.app.bigText("GAME!","game"),mt.game(),mt.stopMusic())}render(t,e){for(let i of this.fighters)i.render(t,e);for(let i of this.projectiles)i.render(t);this.ball&&this.ball.render(t),this.updateCamera(e),this.hitboxDebug?this.drawDebug():this.dbg.children.length&&this.dbg.clear()}updateCamera(t){let e=ze.blast,i=1e9,s=-1e9,r=1e9,a=-1e9,o=0;for(let _ of this.fighters){if(_.state==="dead")continue;let w=Re(_.x,e.left+3,e.right-3),E=Re(_.y,e.bottom+2,e.top-2);i=Math.min(i,w),s=Math.max(s,w),r=Math.min(r,E),a=Math.max(a,E+_.height),o++}o||(i=-4,s=4,r=0,a=2);let l=(i+s)/2,c=(r+a)/2,h=this.camera.aspect,d=Math.tan(this.camera.fov*Zs/2),u=s-i+9,f=a-r+6,g=Math.max(u/(2*d*h),f/(2*d));g=Re(g,15,34),l=Re(l,-11,11),c=Re(c,-2.5,9)+.6;let v=Math.min(1,t*4);if(this.cine){let _=this.cine.user;l=_.x,c=_.y+1.1,g=7.5,v=Math.min(1,t*5)}else this.finalFocus&&this.slowmo>0&&(l=this.finalFocus.x,c=this.finalFocus.y+1,g=9,v=Math.min(1,t*6));let m=this.cam;m.x+=(l-m.x)*v,m.y+=(c-m.y)*v,m.d+=(g-m.d)*v;let p=this.shake,b=p?Ot(-p,p):0,T=p?Ot(-p,p):0;this.shake=Math.max(0,this.shake-t*1.6),this.camera.position.set(m.x+b,m.y+m.d*.12+T,m.d),this.camera.lookAt(m.x+b*.5,m.y+T*.5,0)}drawDebug(){this.dbg.children.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.dbg.clear();let t=(e,i,s,r,a=!1)=>{let o=new At(new Dt(s,12,8),new Se({color:r,transparent:!0,opacity:a?.9:.18,wireframe:a,depthTest:!1}));o.position.set(e,i,.5),this.dbg.add(o)};for(let e of this.fighters){if(e.state==="dead")continue;let i=e.hurtbox(),s=e.isIntangible()?4491519:16772659;for(let r=0;r<=1.001;r+=.25)t(i.ax,i.ay+(i.by-i.ay)*r,i.r,s);for(let r of e.activeHitboxes())t(r.x,r.y,r.r,r.h.type==="grab"?8930559:16720418,!0)}for(let e of this.projectiles)t(e.x,e.y,e.r,16720418,!0)}dispose(){for(let t of this.fighters)t.dispose();for(let t of this.projectiles)t.kill(!1);this.projectiles=[],this.ball&&this.ball.remove();for(let t of this.fsFx)t.remove();this.fsFx=[],this.app.setCine(!1),this.scene.remove(this.dbg),this.effects.clear(),mt.stopMusic()}}});var gv=jf(()=>{Si();rf();af();S0();io();Uc();Zf();Z0();A0();rs();hn();var Jr=1/60,ni=n=>document.querySelector(n),$0=class{constructor(t){this.app=t,this.el=ni("#cards"),this.tagsEl=ni("#tags"),this.cards=[],this.tags=[],this.v=new P}setup(t){this.el.innerHTML="",this.tagsEl.innerHTML="",this.cards=t.fighters.map((e,i)=>{let s=document.createElement("div");return s.className="card",s.style.setProperty("--pc",$s[i]),s.style.setProperty("--cc",e.def.css),s.innerHTML=`<div class="bg"></div><img src="${this.app.portrait(e.def.id,t.cfg.players.slice(0,i).filter(r=>r.char===e.def.id).length)}"><div class="ptag">${e.label}</div><div class="nm">${e.def.name}</div><div class="stocks"></div><div class="pct">0<small>%</small></div>`,this.el.appendChild(s),{el:s,pct:s.querySelector(".pct"),stocks:s.querySelector(".stocks"),last:-1,lastS:-1}}),this.tags=t.fighters.map((e,i)=>{let s=document.createElement("div");return s.className="ntag",s.textContent=e.label,s.style.background=$s[i],s.style.borderTopColor=$s[i],s.style.color="#fff",this.tagsEl.appendChild(s),s})}setFs(t,e){let i=this.cards[t];i&&i.el.classList.toggle("fs",e)}bump(t){let e=this.cards[t];e&&(e.el.classList.remove("bump"),e.el.offsetWidth,e.el.classList.add("bump"))}pctColor(t){let e=[[0,[255,255,255]],[50,[255,230,90]],[100,[255,150,50]],[150,[255,55,50]],[230,[170,0,20]]],i=e[0],s=e[e.length-1];for(let o=0;o<e.length-1;o++)if(t>=e[o][0]&&t<=e[o+1][0]){i=e[o],s=e[o+1];break}t>230&&(i=s);let r=s[0]===i[0]?0:(t-i[0])/(s[0]-i[0]),a=i[1].map((o,l)=>Math.round(o+(s[1][l]-o)*r));return`rgb(${a[0]},${a[1]},${a[2]})`}update(t){t.fighters.forEach((i,s)=>{let r=this.cards[s],a=Math.floor(i.damage),o=i.state==="dead";(a!==r.last||o!==r.dead)&&(r.pct.innerHTML=o?"":`${a}<small>%</small>`,r.pct.style.color=this.pctColor(a),r.last=a,r.dead=o),i.stocks!==r.lastS&&(r.stocks.innerHTML="<i></i>".repeat(Math.max(0,i.stocks)),r.lastS=i.stocks,r.el.classList.toggle("out",i.stocks<=0));let l=this.tags[s];if(o||i.stocks<=0){l.style.display="none";return}l.style.display="";let c=i.prevX+(i.x-i.prevX),h=i.y+i.model.headY+.15;this.v.set(c,h,0).project(this.app.camera);let d=window.innerWidth,u=window.innerHeight,f=(this.v.x*.5+.5)*d,g=(-this.v.y*.5+.5)*u,v=f<20||f>d-20||g<40||g>u-10;f=Re(f,30,d-30),g=Re(g,40,u-140),l.style.left=f+"px",l.style.top=g+"px",l.textContent=v?`${i.label} ${Math.floor(i.damage)}%`:i.label,l.classList.toggle("off",v)});let e=Math.floor((t.fightFrames||0)/60);ni("#timer").textContent=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}},j0=class{constructor(){this.R=sf(ni("#gl")),this.scene=this.R.scene,this.camera=this.R.camera,this.stage=new Cc(this.scene),this.effects=new Rc(this.scene),this.kb=new Pc,this.hud=new $0(this),this.isTouch=bc,this.touch=new Mc(ni("#app"),()=>this.togglePause()),this.setTouchMode(bc),this.mode="title",this.paused=!1,this.battle=null,this.acc=0,this.time=0,this.last=performance.now(),this.sel={players:[{char:"illumine",type:"human",level:5},{char:"dullahan",type:"cpu",level:5}],stocks:3,stage:"battlefield",ball:!0},this.previews=[],this.portraits={},this.padPrev=En(),this.makePortraits(),this.bindUI(),this.renderSelectPanels(),this.showScreen("title"),this.setPreviews([{char:"illumine",v:0},{char:"dullahan",v:0}]),this.layoutPreviews(),ni("#loading").classList.add("hidden"),requestAnimationFrame(t=>this.loop(t))}makePortraits(){let t=this.R.renderer,e=new Qn;e.environment=this.scene.environment,e.environmentIntensity=.8,e.add(new Gs(14209279,3153984,1.3));let i=new ns(16777215,2.2);i.position.set(-2,3,4),e.add(i);let s=new ns(12620031,2);s.position.set(3,2,-3),e.add(s);let r=new gi(30,1,.1,50),a=256,o=t.getSize(new bt),l=t.getPixelRatio(),c=t.toneMapping;t.setPixelRatio(1),t.setSize(a,a,!1);for(let h of Zr)for(let d of[0,1]){let u=h.buildModel(d);no(u.rig,h.anims.idle(0),1),u.root.rotation.y=.45,e.add(u.root),u.root.updateMatrixWorld(!0);let f={illumine:1.62,dullahan:1.92,dragon:2.3,doros:2.29}[h.id]||1.8;r.position.set(.1,f+.1,{illumine:2.6,dullahan:2.2,dragon:2.6,doros:2.1}[h.id]||2.4),r.lookAt(0,f-.05,0),e.background=new xt(h.color).multiplyScalar(.25),t.render(e,r);let g=document.createElement("canvas");g.width=g.height=a,g.getContext("2d").drawImage(t.domElement,0,0,a,a,0,0,a,a),this.portraits[`${h.id}:${d}`]=g.toDataURL(),e.remove(u.root)}t.toneMapping=c,t.setPixelRatio(l),t.setSize(o.x,o.y,!1),this.R.resize()}portrait(t,e=0){return this.portraits[`${t}:${e%2}`]}setPreviews(t){for(let e of this.previews)this.scene.remove(e.model.root),e.model.worldObjects.forEach(i=>this.scene.remove(i)),e.model.shadow&&this.scene.remove(e.model.shadow),e.model.dispose();this.previews=t.map(e=>{let i=ho[e.char],s=i.buildModel(e.v||0);return this.scene.add(s.root),s.worldObjects.forEach(r=>this.scene.add(r)),s.shadow&&this.scene.add(s.shadow),{def:i,model:s,t:Math.random()*100,victory:!!e.victory,x:0,yaw:0}})}layoutPreviews(){let t=this.previews.length;this.previews.forEach((e,i)=>{this.mode==="results"?(e.x=1.4,e.yaw=-.35):this.mode==="select"?(e.x=i===0?-2:2,e.yaw=i===0?.55:-.55):(e.x=i===0?-2.3:2.3,e.yaw=i===0?.5:-.5)})}animatePreviews(t){for(let e of this.previews){e.t+=1;let i=e.victory?e.def.anims.victory(e.t):e.def.anims.idle(e.t);no(e.model.rig,i,e.victory?.2:.25),e.model.root.position.set(e.x,0,0),e.model.shadow&&e.model.shadow.position.set(e.x,.01,0),e.model.root.rotation.y=e.yaw,e.model.setFlash(new xt,0),e.model.update(t,{vx:0,vy:0})}}setTouchMode(t){this.isTouch=t,document.body.classList.toggle("touch",t)}enterFullscreen(){if(!this.isTouch||document.fullscreenElement||matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches)return;let t=document.documentElement,e=t.requestFullscreen||t.webkitRequestFullscreen;if(e)try{let i=e.call(t,{navigationUI:"hide"});i&&i.then&&i.then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})).catch(()=>{})}catch{}}showScreen(t){for(let i of["title","select","pause","results","howto"])ni("#"+i).classList.toggle("hidden",i!==t);let e=this.battle?this.battle.fighters.some(i=>!i.ai):!1;this.touch.show(t==="battle"&&this.isTouch&&e),ni("#hud").classList.toggle("hidden",t!=="battle"&&t!=="pause"),ni("#tags").classList.toggle("hidden",t!=="battle"&&t!=="pause")}go(t){this.mode=t,t==="title"?(this.endBattle(),this.setPreviews([{char:"illumine",v:0},{char:"dullahan",v:0}]),this.showScreen("title"),this.stage.setType("battlefield"),mt.ctx&&mt.playMusic("menu")):t==="select"&&(this.endBattle(),this.refreshSelectPreviews(),this.renderSelectPanels(),this.showScreen("select"),this.stage.setType(this.sel.stage),mt.ctx&&(!mt.bgm||this.musicKind!=="menu")&&mt.playMusic("menu"),this.musicKind="menu"),this.layoutPreviews()}refreshSelectPreviews(){let t=this.sel.players,e=t[1].char===t[0].char?1:0;this.setPreviews([{char:t[0].char,v:0},{char:t[1].char,v:e}]),this.layoutPreviews()}startBattle(){mt.init(),this.endBattle(),this.setPreviews([]),this.mode="battle",this.paused=!1,this.acc=0,this.battle=new Yc(this,JSON.parse(JSON.stringify(this.sel))),this.battle.hitboxDebug=ni("#dbgChk").checked,this.musicKind="battle",this.hud.setup(this.battle),this.showScreen("battle"),window.battle=this.battle}endBattle(){this.battle&&(this.battle.dispose(),this.battle=null),this.paused=!1;let t=ni("#bigtext");t.className="",t.textContent=""}togglePause(){this.mode!=="battle"||!this.battle||this.battle.phase==="gameover"||(this.paused=!this.paused,this.showScreen(this.paused?"pause":"battle"),ni("#hud").classList.remove("hidden"),mt.menuOk())}showResults(t){let e=t.fighters,i=t.winner,s=[...e].sort((o,l)=>(l===i)-(o===i)||l.stocks-o.stocks||o.damage-l.damage);ni("#resWinner").innerHTML=i?`<span style="color:${$s[i.slot]}">${i.label}</span> ${i.def.name}`:"DRAW",ni("#resTable").innerHTML=s.map((o,l)=>`
      <div class="rcard" style="--pc:${$s[o.slot]}">
        <span class="rank">${l+1}</span><h3>${o.label} ${o.def.name}</h3>
        <table>
          <tr><td>\u6483\u589C\u6570</td><td>${o.stats.kos}</td></tr>
          <tr><td>\u843D\u4E0B\u6570</td><td>${o.stats.falls-o.stats.sds}</td></tr>
          <tr><td>\u81EA\u6EC5\u6570</td><td>${o.stats.sds}</td></tr>
          <tr><td>\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8</td><td>${Math.round(o.stats.dealt)}%</td></tr>
          <tr><td>\u53D7\u3051\u305F\u30C0\u30E1\u30FC\u30B8</td><td>${Math.round(o.stats.taken)}%</td></tr>
        </table>
      </div>`).join("");let r=i?i.def.id:e[0].def.id,a=i?t.cfg.players.slice(0,i.slot).filter(o=>o.char===r).length:0;this.endBattle(),this.mode="results",this.setPreviews([{char:r,v:a,victory:!0}]),this.layoutPreviews(),this.showScreen("results"),mt.playMusic("menu"),this.musicKind="menu"}setCine(t,e="",i="#fff"){if(ni("#cine").classList.toggle("on",t),t){let r=ni("#cineLabel");r.textContent=e,r.style.color=i,r.classList.remove("show"),r.offsetWidth,r.classList.add("show")}}bigText(t,e){let i=ni("#bigtext");i.className="",i.offsetWidth,i.textContent=t,i.className=e}bindUI(){document.addEventListener("click",e=>{mt.init();let i=e.target.closest("[data-act]");i&&this.action(i.dataset.act,i)});let t=()=>{mt.init(),!mt.bgm&&this.mode!=="battle"&&mt.playMusic("menu")};window.addEventListener("keydown",t,{once:!1}),window.addEventListener("pointerdown",t),ni("#dbgChk").addEventListener("change",e=>{this.battle&&(this.battle.hitboxDebug=e.target.checked)})}action(t,e){let i=this.sel.players;switch(t){case"start":mt.menuOk(),this.enterFullscreen(),this.go("select");break;case"howto":mt.menuOk(),this.howtoFrom=this.paused?"pause":this.mode,this.showScreen("howto");break;case"closehowto":mt.menuBack(),this.showScreen(this.howtoFrom==="pause"?"pause":this.howtoFrom==="battle"?"battle":this.howtoFrom),this.howtoFrom==="pause"&&ni("#hud").classList.remove("hidden");break;case"back":mt.menuBack(),this.go("title");break;case"stock-":this.sel.stocks=Re(this.sel.stocks-1,1,9),mt.menuMove(),this.renderSelectPanels();break;case"stock+":this.sel.stocks=Re(this.sel.stocks+1,1,9),mt.menuMove(),this.renderSelectPanels();break;case"stage":this.sel.stage=this.sel.stage==="battlefield"?"omega":"battlefield",this.stage.setType(this.sel.stage),mt.menuMove(),this.renderSelectPanels();break;case"ball":this.sel.ball=!this.sel.ball,mt.menuMove(),this.renderSelectPanels();break;case"quality":this.R.setQuality(this.R.quality==="high"?"low":"high"),mt.menuMove(),this.renderSelectPanels();break;case"fight":mt.menuOk(),this.startBattle();break;case"resume":this.togglePause();break;case"quit":mt.menuBack(),this.go("select");break;case"title":mt.menuBack(),this.go("title");break;case"rematch":mt.menuOk(),this.startBattle();break;case"char":{let s=+e.dataset.slot,r=+e.dataset.d;this.cycleChar(s,r);break}case"type":{let s=+e.dataset.slot;i[s].type=i[s].type==="human"?"cpu":"human",mt.menuMove(),this.renderSelectPanels();break}case"lv":{let s=+e.dataset.slot;i[s].level=Re(i[s].level+ +e.dataset.d,1,9),mt.menuMove(),this.renderSelectPanels();break}}}cycleChar(t,e){let i=this.sel.players,s=Zr.findIndex(r=>r.id===i[t].char);i[t].char=Zr[(s+e+Zr.length)%Zr.length].id,mt.menuMove(),this.renderSelectPanels(),this.refreshSelectPreviews()}renderSelectPanels(){let t=this.sel.players;ni("#stockVal").textContent=this.sel.stocks,ni("#stageBtn").textContent=this.sel.stage==="battlefield"?"\u6708\u591C\u306E\u8056\u57DF":"\u6708\u591C\u306E\u8056\u57DF\u30FB\u7D42\u70B9",ni("#ballBtn").textContent=this.sel.ball?"\u3042\u308A":"\u306A\u3057",ni("#qualityBtn").textContent=this.R.quality==="high"?"\u9AD8":"\u8EFD\u91CF",document.querySelectorAll(".panel").forEach(e=>{let i=+e.dataset.slot,s=t[i],r=ho[s.char],a=i===1&&t[0].char===t[1].char?1:0;e.style.setProperty("--pc",$s[i]),e.style.setProperty("--cc",r.css),e.innerHTML=`
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
        <div class="sp">\u5FC5\u6BBA\u30EF\u30B6: ${r.specials.join(" / ")}</div>`})}menuKeys(){let t=this.kb,e=Dc(0,En()),i=e.attack&&!this.padPrev.attack,s=e.start&&!this.padPrev.start,r=e.special&&!this.padPrev.special,a=e.x<-.6&&!(this.padPrev.x<-.6),o=e.x>.6&&!(this.padPrev.x>.6);this.padPrev=e;let l=t.take("Enter")||t.take("NumpadEnter")||i||s,c=t.take("Escape")||r;switch(this.mode){case"title":if(!ni("#howto").classList.contains("hidden")){(l||c)&&this.action("closehowto");break}(l||t.take("Space"))&&this.action("start");break;case"select":(t.take("KeyA")||a)&&this.cycleChar(0,-1),(t.take("KeyD")||o)&&this.cycleChar(0,1),t.take("ArrowLeft")&&this.cycleChar(1,-1),t.take("ArrowRight")&&this.cycleChar(1,1),l?this.action("fight"):c&&this.action("back");break;case"results":l?this.action("rematch"):c&&this.action("quit");break;case"battle":if(!ni("#howto").classList.contains("hidden")){(l||c)&&this.action("closehowto");break}if((l||c||s)&&this.togglePause(),t.take("Backquote")||t.take("F2")){let h=ni("#dbgChk");h.checked=!h.checked,this.battle&&(this.battle.hitboxDebug=h.checked)}break}t.clearOnce()}loop(t){requestAnimationFrame(i=>this.loop(i));let e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,this.time+=e,this.menuKeys(),this.mode==="battle"&&this.battle){let i=this.battle;if(!this.paused){let s=i.slowmo>0?.3:1;this.acc+=e*s;let r=0;for(;this.acc>=Jr&&r<6&&(i.tick(),i.slowmo>0&&i.slowmo--,this.acc-=Jr,r++,this.mode==="battle"););r>=6&&(this.acc=0)}this.battle&&(this.battle.render(this.paused?1:this.acc/Jr,this.paused?0:e),this.hud.update(this.battle))}else for(this.menuCamera(e),this.acc+=e;this.acc>=Jr;)this.acc-=Jr,this.effects.update(),this.animatePreviews(Jr);this.stage.update(e),this.R.render()}menuCamera(t){let e=this.camera,i=this.time;this.mode==="title"?(e.position.set(Math.sin(i*.15)*1.2,1.25+Math.sin(i*.2)*.1,6.4),e.lookAt(0,1.3,0)):this.mode==="select"?(e.position.set(0,1.9,7.4),e.lookAt(0,.6,0)):this.mode==="results"&&(e.position.set(.2,1.5,5.6),e.lookAt(.3,1.05,0))}},K0=new j0;window.app=K0;window.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&!K0.isTouch&&K0.setTouchMode(!0)},{capture:!0});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))});export default gv();
