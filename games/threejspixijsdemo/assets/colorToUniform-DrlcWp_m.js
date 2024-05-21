import{D as wt,j as P,b as q,i as At,f as St,T as Tt,n as Z,w as Bt}from"./index-BCL5MsWR.js";const M=Object.create(null),J=Object.create(null);function Q(i,t){let e=J[i];return e===void 0&&(M[t]===void 0&&(M[t]=1),J[i]=e=M[t]++),e}let w;function Et(){return(!w||w!=null&&w.isContextLost())&&(w=wt.get().createCanvas().getContext("webgl",{})),w}let I;function It(){if(!I){I="mediump";const i=Et();i&&i.getShaderPrecisionFormat&&(I=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision?"highp":"mediump")}return I}function zt(i,t,e){return t?i:e?(i=i.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${i}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${i}
        `}function Mt(i,t,e){const r=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(i.substring(0,9)!=="precision"){let s=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return s==="highp"&&r!=="highp"&&(s="mediump"),`precision ${s} float;
${i}`}else if(r!=="highp"&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}function Ct(i,t){return t?`#version 300 es
${i}`:i}const Rt={},Gt={};function Dt(i,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const r=e?Rt:Gt;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,i.indexOf("#define SHADER_NAME")!==-1?i:`${`#define SHADER_NAME ${t}`}
${i}`}function Vt(i,t){return t?i.replace("#version 300 es",""):i}const C={stripVersion:Vt,ensurePrecision:Mt,addProgramDefines:zt,setProgramName:Dt,insertVersion:Ct},R=Object.create(null),ft=class X{constructor(t){t={...X.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:It()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let s=t.fragment,n=t.vertex;Object.keys(C).forEach(a=>{const o=r[a];s=C[a](s,o,!0),n=C[a](n,o,!1)}),this.fragment=s,this.vertex=n,this._key=Q(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return R[e]||(R[e]=new X(t)),R[e]}};ft.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let dt=ft;const tt={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Ft(i){return tt[i]??tt.float32}const $t={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Ut({source:i,entryPoint:t}){const e={},r=i.indexOf(`fn ${t}`);if(r!==-1){const s=i.indexOf("->",r);if(s!==-1){const n=i.substring(r,s),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let o;for(;(o=a.exec(n))!==null;){const u=$t[o[3]]??"float32";e[o[2]]={location:parseInt(o[1],10),format:u,stride:Ft(u).stride,offset:0,instance:!1,start:0}}}}return e}function G(i){var m,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,s=/var(<[^>]+>)? (\w+)/,n=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,o=/(\w+)\s*:\s*([\w\<\>]+)/g,u=/struct\s+(\w+)/,l=(m=i.match(t))==null?void 0:m.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(s)[2],isUniform:d.match(s)[1]==="<uniform>",type:d.match(n)[1]}));if(!l)return{groups:[],structs:[]};const c=((f=i.match(a))==null?void 0:f.map(d=>{const h=d.match(u)[1],_=d.match(o).reduce((p,b)=>{const[v,x]=b.split(":");return p[v.trim()]=x.trim(),p},{});return _?{name:h,members:_}:null}).filter(({name:d})=>l.some(h=>h.type===d)))??[];return{groups:l,structs:c}}var S=(i=>(i[i.VERTEX=1]="VERTEX",i[i.FRAGMENT=2]="FRAGMENT",i[i.COMPUTE=4]="COMPUTE",i))(S||{});function kt({groups:i}){const t=[];for(let e=0;e<i.length;e++){const r=i[e];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:S.VERTEX|S.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:S.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:S.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Ot({groups:i}){const t=[];for(let e=0;e<i.length;e++){const r=i[e];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function Nt(i,t){const e=new Set,r=new Set,s=[...i.structs,...t.structs].filter(a=>e.has(a.name)?!1:(e.add(a.name),!0)),n=[...i.groups,...t.groups].filter(a=>{const o=`${a.name}-${a.binding}`;return r.has(o)?!1:(r.add(o),!0)});return{structs:s,groups:n}}const D=Object.create(null);class z{constructor(t){var o,u;this._layoutKey=0;const{fragment:e,vertex:r,layout:s,gpuLayout:n,name:a}=t;if(this.name=a,this.fragment=e,this.vertex=r,e.source===r.source){const l=G(e.source);this.structsAndGroups=l}else{const l=G(r.source),c=G(e.source);this.structsAndGroups=Nt(l,c)}this.layout=s??Ot(this.structsAndGroups),this.gpuLayout=n??kt(this.structsAndGroups),this.autoAssignGlobalUniforms=((o=this.layout[0])==null?void 0:o.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((u=this.layout[1])==null?void 0:u.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,r=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=Q(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Ut(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return D[e]||(D[e]=new z(t)),D[e]}}function Lt(i,t){switch(i){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const mt=class pt{constructor(t,e){this._touched=0,this.uid=P("uniform"),this._resourceType="uniformGroup",this._resourceId=P("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...pt.defaultOptions,...e},this.uniformStructures=t;const r={};for(const s in t){const n=t[s];n.name=s,n.size=n.size??1,n.value??(n.value=Lt(n.type,n.size)),r[s]=n.value}this.uniforms=r,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=Q(Object.keys(r).map(s=>`${s}-${t[s].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};mt.defaultOptions={ubo:!1,isStatic:!1};let jt=mt;class V{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const r in t){const s=t[r];this.setResource(s,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const r in this.resources)t[e++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,e){var s,n;const r=this.resources[e];t!==r&&(r&&((s=t.off)==null||s.call(t,"change",this.onResourceChange,this)),(n=t.on)==null||n.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const r in e)e[r]._touched=t}destroy(){var e;const t=this.resources;for(const r in t){const s=t[r];(e=s.off)==null||e.call(s,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const r in e)e[r]===t&&(e[r]=null)}else this._updateKey()}}var Y=(i=>(i[i.WEBGL=1]="WEBGL",i[i.WEBGPU=2]="WEBGPU",i[i.BOTH=3]="BOTH",i))(Y||{});class gt extends q{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:r,groups:s,resources:n,compatibleRenderers:a,groupMap:o}=t;this.gpuProgram=e,this.glProgram=r,a===void 0&&(a=0,e&&(a|=Y.WEBGPU),r&&(a|=Y.WEBGL)),this.compatibleRenderers=a;const u={};if(!n&&!s&&(n={}),n&&s)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&s&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&s&&o)for(const l in o)for(const c in o[l]){const m=o[l][c];u[m]={group:l,binding:c,name:m}}else if(e&&s&&!o){const l=e.structsAndGroups.groups;o={},l.forEach(c=>{o[c.group]=o[c.group]||{},o[c.group][c.binding]=c.name,u[c.name]=c})}else if(n){if(e){const l=e.structsAndGroups.groups;o={},l.forEach(c=>{o[c.group]=o[c.group]||{},o[c.group][c.binding]=c.name,u[c.name]=c})}else{o={},s={99:new V},this._ownedBindGroups.push(s[99]);let l=0;for(const c in n)u[c]={group:99,binding:l,name:c},o[99]=o[99]||{},o[99][l]=c,l++}s={};for(const l in n){const c=l;let m=n[l];!m.source&&!m._resourceType&&(m=new jt(m));const f=u[c];f&&(s[f.group]||(s[f.group]=new V,this._ownedBindGroups.push(s[f.group])),s[f.group].setResource(m,f.binding))}}this.groups=s,this._uniformBindMap=o,this.resources=this._buildResourceAccessor(s,u)}addResource(t,e,r){var s,n;(s=this._uniformBindMap)[e]||(s[e]={}),(n=this._uniformBindMap[e])[r]||(n[r]=t),this.groups[e]||(this.groups[e]=new V,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const r={};for(const s in e){const n=e[s];Object.defineProperty(r,n.name,{get(){return t[n.group].getResource(n.binding)},set(a){t[n.group].setResource(a,n.binding)}})}return r}destroy(t=!1){var e,r;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(s=>{s.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:r,...s}=t;let n,a;return e&&(n=z.from(e)),r&&(a=dt.from(r)),new gt({gpuProgram:n,glProgram:a,...s})}}const Ht={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},F=0,$=1,U=2,k=3,O=4,N=5,K=class xt{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<F)}set blend(t){!!(this.data&1<<F)!==t&&(this.data^=1<<F)}get offsets(){return!!(this.data&1<<$)}set offsets(t){!!(this.data&1<<$)!==t&&(this.data^=1<<$)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<U)}set culling(t){!!(this.data&1<<U)!==t&&(this.data^=1<<U)}get depthTest(){return!!(this.data&1<<k)}set depthTest(t){!!(this.data&1<<k)!==t&&(this.data^=1<<k)}get depthMask(){return!!(this.data&1<<N)}set depthMask(t){!!(this.data&1<<N)!==t&&(this.data^=1<<N)}get clockwiseFrontFace(){return!!(this.data&1<<O)}set clockwiseFrontFace(t){!!(this.data&1<<O)!==t&&(this.data^=1<<O)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=Ht[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new xt;return t.depthTest=!1,t.blend=!0,t}};K.default2d=K.for2d();let _e=K;var g=(i=>(i[i.MAP_READ=1]="MAP_READ",i[i.MAP_WRITE=2]="MAP_WRITE",i[i.COPY_SRC=4]="COPY_SRC",i[i.COPY_DST=8]="COPY_DST",i[i.INDEX=16]="INDEX",i[i.VERTEX=32]="VERTEX",i[i.UNIFORM=64]="UNIFORM",i[i.STORAGE=128]="STORAGE",i[i.INDIRECT=256]="INDIRECT",i[i.QUERY_RESOLVE=512]="QUERY_RESOLVE",i[i.STATIC=1024]="STATIC",i))(g||{});class T extends q{constructor(t){let{data:e,size:r}=t;const{usage:s,label:n,shrinkToFit:a}=t;super(),this.uid=P("buffer"),this._resourceType="buffer",this._resourceId=P("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,r=r??(e==null?void 0:e.byteLength);const o=!!e;this.descriptor={size:r,usage:s,mappedAtCreation:o,label:n},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&g.STATIC)}set static(t){t?this.descriptor.usage|=g.STATIC:this.descriptor.usage&=~g.STATIC}setDataWithSize(t,e,r){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const s=this._data;if(this._data=t,s.length!==t.length){!this.shrinkToFit&&t.byteLength<s.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=P("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function bt(i,t){if(!(i instanceof T)){let e=t?g.INDEX:g.VERTEX;i instanceof Array&&(t?(i=new Uint32Array(i),e=g.INDEX|g.COPY_DST):(i=new Float32Array(i),e=g.VERTEX|g.COPY_DST)),i=new T({data:i,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return i}function Wt(i,t,e){const r=i.getAttribute(t);if(!r)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const s=r.buffer.data;let n=1/0,a=1/0,o=-1/0,u=-1/0;const l=s.BYTES_PER_ELEMENT,c=(r.offset||0)/l,m=(r.stride||2*4)/l;for(let f=c;f<s.length;f+=m){const d=s[f],h=s[f+1];d>o&&(o=d),h>u&&(u=h),d<n&&(n=d),h<a&&(a=h)}return e.minX=n,e.minY=a,e.maxX=o,e.maxY=u,e}function Xt(i){return(i instanceof T||Array.isArray(i)||i.BYTES_PER_ELEMENT)&&(i={buffer:i}),i.buffer=bt(i.buffer,!1),i}class Yt extends q{constructor(t){const{attributes:e,indexBuffer:r,topology:s}=t;super(),this.uid=P("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new At,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const n in e){const a=e[n]=Xt(e[n]);this.buffers.indexOf(a.buffer)===-1&&(this.buffers.push(a.buffer),a.buffer.on("update",this.onBufferUpdate,this),a.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=bt(r,!0),this.buffers.push(this.indexBuffer)),this.topology=s||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Wt(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Kt=new Float32Array(1),qt=new Uint32Array(1);class ye extends Yt{constructor(){const e=new T({data:Kt,label:"attribute-batch-buffer",usage:g.VERTEX|g.COPY_DST,shrinkToFit:!1}),r=new T({data:qt,label:"index-batch-buffer",usage:g.INDEX|g.COPY_DST,shrinkToFit:!1}),s=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:s,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:s,offset:2*4,location:3},aColor:{buffer:e,format:"unorm8x4",stride:s,offset:4*4,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:s,offset:5*4,location:2}},indexBuffer:r})}}const Qt=16;class et{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function rt(i,t){const e=i.byteLength/8|0,r=new Float64Array(i,0,e);new Float64Array(t,0,e).set(r);const n=i.byteLength-e*8;if(n>0){const a=new Uint8Array(i,e*8,n);new Uint8Array(t,e*8,n).set(a)}}const Zt={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Jt=(i=>(i[i.DISABLED=0]="DISABLED",i[i.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",i[i.MASK_ACTIVE=2]="MASK_ACTIVE",i[i.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",i[i.NONE=4]="NONE",i))(Jt||{});function it(i,t){return t.alphaMode==="no-premultiply-alpha"&&Zt[i]||i}class st{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class nt{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let A=0;const vt=class _t{constructor(t={}){this.uid=P("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={..._t.defaultOptions,...t};const{vertexSize:e,indexSize:r}=t;this.attributeBuffer=new et(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(r)}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,e){const r=t.batch.textures.ids[e._source.uid];return!r&&r!==0?!1:(t.textureId=r,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const e=this._elements;let r=this._textureBatchPool[this._textureBatchPoolIndex++]||new st;if(r.clear(),!e[this.elementStart])return;const s=e[this.elementStart];let n=it(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const a=this.attributeBuffer.float32View,o=this.attributeBuffer.uint32View,u=this.indexBuffer;let l=this._batchIndexSize,c=this._batchIndexStart,m="startBatch",f=this._batchPool[this._batchPoolIndex++]||new nt;for(let d=this.elementStart;d<this.elementSize;++d){const h=e[d];e[d]=null;const p=h.texture._source,b=it(h.blendMode,p),v=n!==b;if(p._batchTick===A&&!v){h.textureId=p._textureBindLocation,l+=h.indexSize,h.packAttributes(a,o,h.location,h.textureId),h.packIndex(u,h.indexStart,h.location/this._vertexSize),h.batch=f;continue}p._batchTick=A,(r.count>=Qt||v)&&(this._finishBatch(f,c,l-c,r,n,t,m),m="renderBatch",c=l,n=b,r=this._textureBatchPool[this._textureBatchPoolIndex++]||new st,r.clear(),f=this._batchPool[this._batchPoolIndex++]||new nt,++A),h.textureId=p._textureBindLocation=r.count,r.ids[p.uid]=r.count,r.textures[r.count++]=p,h.batch=f,l+=h.indexSize,h.packAttributes(a,o,h.location,h.textureId),h.packIndex(u,h.indexStart,h.location/this._vertexSize)}r.count>0&&(this._finishBatch(f,c,l-c,r,n,t,m),c=l,++A),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=l}_finishBatch(t,e,r,s,n,a,o){t.gpuBindGroup=null,t.action=o,t.batcher=this,t.textures=s,t.blendMode=n,t.start=e,t.size=r,++A,a.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),r=new et(e);rt(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(t){const e=this.indexBuffer;let r=Math.max(t,e.length*1.5);r+=r%2;const s=r>65535?new Uint32Array(r):new Uint16Array(r);if(s.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let n=0;n<e.length;n++)s[n]=e[n];else rt(e.buffer,s.buffer);this.indexBuffer=s}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};vt.defaultOptions={vertexSize:4,indexSize:6};let Pe=vt,te=0;class ee{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,r){const s=new St({...this.textureOptions,width:t,height:e,resolution:1,antialias:r,autoGarbageCollect:!0});return new Tt({source:s,label:`texturePool_${te++}`})}getOptimalTexture(t,e,r=1,s){let n=Math.ceil(t*r-1e-6),a=Math.ceil(e*r-1e-6);n=Z(n),a=Z(a);const o=(n<<17)+(a<<1)+(s?1:0);this._texturePool[o]||(this._texturePool[o]=[]);let u=this._texturePool[o].pop();return u||(u=this.createTexture(n,a,s)),u.source._resolution=r,u.source.width=n/r,u.source.height=a/r,u.source.pixelWidth=n,u.source.pixelHeight=a,u.frame.x=0,u.frame.y=0,u.frame.width=t,u.frame.height=e,u.updateUvs(),this._poolKeyHash[u.uid]=o,u}getSameSizeTexture(t,e=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const r=this._texturePool[e];if(r)for(let s=0;s<r.length;s++)r[s].destroy(!0)}this._texturePool={}}}const we=new ee;function ot(i,t,e){if(i)for(const r in i){const s=r.toLocaleLowerCase(),n=t[s];if(n){let a=i[r];r==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&n.push(`//----${e}----//`),n.push(a)}else Bt(`${r} placement hook does not exist in shader`)}}const re=/\{\{(.*?)\}\}/g;function at(i){var r;const t={};return(((r=i.match(re))==null?void 0:r.map(s=>s.replace(/[{()}]/g,"")))??[]).forEach(s=>{t[s]=[]}),t}function ut(i,t){let e;const r=/@in\s+([^;]+);/g;for(;(e=r.exec(i))!==null;)t.push(e[1])}function ct(i,t,e=!1){const r=[];ut(t,r),i.forEach(o=>{o.header&&ut(o.header,r)});const s=r;e&&s.sort();const n=s.map((o,u)=>`       @location(${u}) ${o},`).join(`
`);let a=t.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${n}
`),a}function lt(i,t){let e;const r=/@out\s+([^;]+);/g;for(;(e=r.exec(i))!==null;)t.push(e[1])}function ie(i){const e=/\b(\w+)\s*:/g.exec(i);return e?e[1]:""}function se(i){const t=/@.*?\s+/g;return i.replace(t,"")}function ne(i,t){const e=[];lt(t,e),i.forEach(u=>{u.header&&lt(u.header,e)});let r=0;const s=e.sort().map(u=>u.indexOf("builtin")>-1?u:`@location(${r++}) ${u}`).join(`,
`),n=e.sort().map(u=>`       var ${se(u)};`).join(`
`),a=`return VSOutput(
                ${e.sort().map(u=>` ${ie(u)}`).join(`,
`)});`;let o=t.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${s}
`),o=o.replace("{{start}}",`
${n}
`),o=o.replace("{{return}}",`
${a}
`),o}function ht(i,t){let e=i;for(const r in t){const s=t[r];s.join(`
`).length?e=e.replace(`{{${r}}}`,`//-----${r} START-----//
${s.join(`
`)}
//----${r} FINISH----//`):e=e.replace(`{{${r}}}`,"")}return e}const y=Object.create(null),L=new Map;let oe=0;function ae({template:i,bits:t}){const e=yt(i,t);if(y[e])return y[e];const{vertex:r,fragment:s}=ce(i,t);return y[e]=Pt(r,s,t),y[e]}function ue({template:i,bits:t}){const e=yt(i,t);return y[e]||(y[e]=Pt(i.vertex,i.fragment,t)),y[e]}function ce(i,t){const e=t.map(a=>a.vertex).filter(a=>!!a),r=t.map(a=>a.fragment).filter(a=>!!a);let s=ct(e,i.vertex,!0);s=ne(e,s);const n=ct(r,i.fragment,!0);return{vertex:s,fragment:n}}function yt(i,t){return t.map(e=>(L.has(e)||L.set(e,oe++),L.get(e))).sort((e,r)=>e-r).join("-")+i.vertex+i.fragment}function Pt(i,t,e){const r=at(i),s=at(t);return e.forEach(n=>{ot(n.vertex,r,n.name),ot(n.fragment,s,n.name)}),{vertex:ht(i,r),fragment:ht(t,s)}}const le=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,he=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,fe=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,de=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`,me={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},pe={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function Ae({bits:i,name:t}){const e=ae({template:{fragment:he,vertex:le},bits:[me,...i]});return z.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function Se({bits:i,name:t}){return new dt({name:t,...ue({template:{vertex:fe,fragment:de},bits:[pe,...i]})})}const Te={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Be={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},j={};function ge(i){const t=[];{let e=0;for(let r=0;r<i;r++)t.push(`@group(1) @binding(${e++}) var textureSource${r+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${r+1}: sampler;`)}return t.join(`
`)}function xe(i){const t=[];{t.push("switch vTextureId {");for(let e=0;e<i;e++)e===i-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function Ee(i){return j[i]||(j[i]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;
    
                ${ge(16)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${xe(16)}
            `}}),j[i]}const H={};function be(i){const t=[];for(let e=0;e<i;e++)e>0&&t.push("else"),e<i-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function Ie(i){return H[i]||(H[i]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;
    
                uniform sampler2D uTextures[${i}];
              
            `,main:`
    
                ${be(16)}
            `}}),H[i]}const ze={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Me={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},W={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},Ce={...W,vertex:{...W.vertex,header:W.vertex.header.replace("group(1)","group(2)")}},Re={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class Ge{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.groupBlendMode}packAttributes(t,e,r,s){const n=this.renderable,a=this.texture,o=n.groupTransform,u=o.a,l=o.b,c=o.c,m=o.d,f=o.tx,d=o.ty,h=this.bounds,_=h.maxX,p=h.minX,b=h.maxY,v=h.minY,x=a.uvs,B=n.groupColorAlpha,E=s<<16|this.roundPixels&65535;t[r+0]=u*p+c*v+f,t[r+1]=m*v+l*p+d,t[r+2]=x.x0,t[r+3]=x.y0,e[r+4]=B,e[r+5]=E,t[r+6]=u*_+c*v+f,t[r+7]=m*v+l*_+d,t[r+8]=x.x1,t[r+9]=x.y1,e[r+10]=B,e[r+11]=E,t[r+12]=u*_+c*b+f,t[r+13]=m*b+l*_+d,t[r+14]=x.x2,t[r+15]=x.y2,e[r+16]=B,e[r+17]=E,t[r+18]=u*p+c*b+f,t[r+19]=m*b+l*p+d,t[r+20]=x.x3,t[r+21]=x.y3,e[r+22]=B,e[r+23]=E}packIndex(t,e,r){t[e]=r+0,t[e+1]=r+1,t[e+2]=r+2,t[e+3]=r+0,t[e+4]=r+2,t[e+5]=r+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}}function De(i,t,e){const r=(i>>24&255)/255;t[e++]=(i&255)/255*r,t[e++]=(i>>8&255)/255*r,t[e++]=(i>>16&255)/255*r,t[e++]=r}export{V as B,z as G,Qt as M,Y as R,_e as S,we as T,jt as U,Te as a,gt as b,Ae as c,Jt as d,g as e,rt as f,Ee as g,T as h,Q as i,W as j,dt as k,Ce as l,Pe as m,ye as n,Ft as o,Ge as p,De as q,ze as r,Se as s,Be as t,Ie as u,Me as v,Yt as w,Re as x};
