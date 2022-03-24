"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=!1,t=!1,n="${JSCORE_VERSION}",i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+n+") INTERNAL ASSERT FAILED: "+e)},r=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,h=a?e[t+2]:0,l=s>>2,c=(3&s)<<4|o>>4;let u=(15&o)<<2|h>>6,d=63&h;a||(d=64,r||(u=64)),i.push(n[l],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const h=s<<2|r>>4;if(i.push(h),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=r(e);return o.encodeByteArray(t,!0)},h=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(e){return u(void 0,e)}function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=u(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function f(){return!0===e||!0===t}class g extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(y,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new g(i,o,n)}}const y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){return JSON.parse(e)}function C(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=v(l(r[0])||""),n=v(l(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function b(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function I(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function E(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function S(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(k(n)&&k(r)){if(!S(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function k(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=h^o&(a^h),s=1518500249):(i=o^a^h,s=1859775393):e<60?(i=o&a|h&(o|a),s=2400959708):(i=o^a^h,s=3395469782);const t=(r<<5|r>>>27)+i+l+s+n[e]&4294967295;l=h,h=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function P(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return new Promise(((n,i)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class A{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new M(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new O(this._db.createObjectStore(e,t))}close(){this._db.close()}}class M{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new O(this._transaction.objectStore(e))}}class O{constructor(e){this._store=e}index(e){return new L(this._store.index(e))}createIndex(e,t,n){return new L(this._store.createIndex(e,t,n))}get(e){return D(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return D(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return D(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return D(this._store.clear(),"Error clearing IndexedDB object store")}}class L{constructor(e){this._index=e}get(e){return D(this._index.get(e),"Error reading from IndexedDB")}}class F{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new d;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class W{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new q(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=[];var j;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(j||(j={}));const H={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},B=j.INFO,z={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},V=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=z[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class ${constructor(e){this.name=e,this._logLevel=B,this._logHandler=V,this._userLogHandler=null,U.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?H[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const G=new $("@firebase/app"),K={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Q=new Map,X=new Map;function J(e,t){try{e.container.addComponent(t)}catch(n){G.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Z(e){const t=e.name;if(X.has(t))return G.debug(`There were multiple attempts to register component ${t}.`),!1;X.set(t,e);for(const t of Q.values())J(t,e);return!0}function ee(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te=new m("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new F("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t,n){var i;let s=null!==(i=K[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void G.warn(e.join(" "))}Z(new F(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let se=null;function re(){var e,t,n;return se||(se=(e="firebase-heartbeat-database",t=1,n=(e,t)=>{0===t&&e.createObjectStore("firebase-heartbeat-store")},new Promise(((i,s)=>{try{const r=indexedDB.open(e,t);r.onsuccess=e=>{i(new A(e.target.result))},r.onerror=e=>{var t;s(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},r.onupgradeneeded=e=>{n(new A(r.result),e.oldVersion,e.newVersion,new M(r.transaction))}}catch(e){s(`Error opening indexedDB: ${e.message}`)}}))).catch((e=>{throw te.create("storage-open",{originalErrorMessage:e.message})}))),se}async function oe(e,t){try{const n=(await re()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,ae(e)),n.complete}catch(e){throw te.create("storage-set",{originalErrorMessage:e.message})}}function ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ce(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=le();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=le(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),ue(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ue(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=h(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function le(){return(new Date).toISOString().substring(0,10)}class ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await re()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ae(e))}catch(e){throw te.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ue(e){return h(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;de="",Z(new F("platform-logger",(e=>new Y(e)),"PRIVATE")),Z(new F("heartbeat",(e=>new he(e)),"PRIVATE")),ie("@firebase/app","0.7.19",de),ie("@firebase/app","0.7.19","esm2017"),ie("fire-js","");var pe,_e,fe,ge=pe={};function me(){throw new Error("setTimeout has not been defined")}function ye(){throw new Error("clearTimeout has not been defined")}function ve(e){if(_e===setTimeout)return setTimeout(e,0);if((_e===me||!_e)&&setTimeout)return _e=setTimeout,setTimeout(e,0);try{return _e(e,0)}catch(t){try{return _e.call(null,e,0)}catch(t){return _e.call(this,e,0)}}}!function(){try{_e="function"==typeof setTimeout?setTimeout:me}catch(e){_e=me}try{fe="function"==typeof clearTimeout?clearTimeout:ye}catch(e){fe=ye}}();var Ce,we=[],be=!1,Te=-1;function Ie(){be&&Ce&&(be=!1,Ce.length?we=Ce.concat(we):Te=-1,we.length&&Ee())}function Ee(){if(!be){var e=ve(Ie);be=!0;for(var t=we.length;t;){for(Ce=we,we=[];++Te<t;)Ce&&Ce[Te].run();Te=-1,t=we.length}Ce=null,be=!1,function(e){if(fe===clearTimeout)return clearTimeout(e);if((fe===ye||!fe)&&clearTimeout)return fe=clearTimeout,clearTimeout(e);try{fe(e)}catch(t){try{return fe.call(null,e)}catch(t){return fe.call(this,e)}}}(e)}}function Se(e,t){this.fun=e,this.array=t}function ke(){}ge.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];we.push(new Se(e,t)),1!==we.length||be||ve(Ee)},Se.prototype.run=function(){this.fun.apply(null,this.array)},ge.title="browser",ge.browser=!0,ge.env={},ge.argv=[],ge.version="",ge.versions={},ge.on=ke,ge.addListener=ke,ge.once=ke,ge.off=ke,ge.removeListener=ke,ge.removeAllListeners=ke,ge.emit=ke,ge.prependListener=ke,ge.prependOnceListener=ke,ge.listeners=function(e){return[]},ge.binding=function(e){throw new Error("process.binding is not supported")},ge.cwd=function(){return"/"},ge.chdir=function(e){throw new Error("process.chdir is not supported")},ge.umask=function(){return 0};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),C(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:v(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return b(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Pe(t)}}catch(e){}return new xe},De=Re("localStorage"),Ae=Re("sessionStorage"),Me=new $("@firebase/database"),Oe=function(){let e=1;return function(){return e++}}(),Le=function(e){const t=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);if(r>=55296&&r<=56319){const t=r-55296;s++,i(s<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(s)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),n=new N;n.update(t);const s=n.digest();return o.encodeByteArray(s)},Fe=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Fe.apply(null,i):t+="object"==typeof i?C(i):i,t+=" "}return t};let qe=null,We=!0;const Ue=function(e,t){i(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Me.logLevel=j.VERBOSE,qe=Me.log.bind(Me),t&&Ae.set("logging_enabled",!0)):"function"==typeof e?qe=e:(qe=null,Ae.remove("logging_enabled"))},je=function(...e){if(!0===We&&(We=!1,null===qe&&!0===Ae.get("logging_enabled")&&Ue(!0)),qe){const t=Fe.apply(null,e);qe(t)}},He=function(e){return function(...t){je(e,...t)}},Be=function(...e){const t="FIREBASE INTERNAL ERROR: "+Fe(...e);Me.error(t)},ze=function(...e){const t=`FIREBASE FATAL ERROR: ${Fe(...e)}`;throw Me.error(t),new Error(t)},Ve=function(...e){const t="FIREBASE WARNING: "+Fe(...e);Me.warn(t)},$e=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ye=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=tt(e),i=tt(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Ge=function(e,t){return e===t?0:e<t?-1:1},Ke=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+C(t))},Qe=function(e){if("object"!=typeof e||null===e)return C(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=C(t[i]),n+=":",n+=Qe(e[t[i]]);return n+="}",n},Xe=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function Je(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ze=function(e){i(!$e(e),"Invalid JSON number");const t=1023;let n,s,r,o,a;0===e?(s=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),s=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(s=0,r=Math.round(e/Math.pow(2,-1074))));const h=[];for(a=52;a;a-=1)h.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(n?1:0),h.reverse();const l=h.join("");let c="";for(a=0;a<64;a+=8){let e=parseInt(l.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const et=new RegExp("^-?(0*)\\d{1,10}$"),tt=function(e){if(et.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},nt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ve("Exception was thrown by user callback.",t),e}),Math.floor(0))}},it=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class ot{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ot.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=De.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&De.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function lt(e,t,n){let s;if(i("string"==typeof t,"typeof type must == string"),i("object"==typeof n,"typeof params must == object"),"websocket"===t)s=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);s=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Je(n,((e,t)=>{r.push(e+"="+t)})),s+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.counters_={}}incrementCounter(e,t=1){b(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return c(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut={},dt={};function pt(e){const t=e.toString();return ut[t]||(ut[t]=new ct),ut[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&nt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=He(e),this.stats_=pt(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),lt(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _t(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(f()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new gt(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&at.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ft.forceAllow_=!0}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){return!f()&&(!!ft.forceAllow_||!(ft.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=C(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=a(t),i=Xe(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(f())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=C(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gt{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,f())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Oe(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=gt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){je("frame writing exception"),e.stack&&je(e.stack),je(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){f()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mt=null;"undefined"!=typeof MozWebSocket?mt=MozWebSocket:"undefined"!=typeof WebSocket&&(mt=WebSocket);class yt{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=He(this.connId),this.stats_=pt(t),this.connURL=yt.connectionURL_(t,r,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const s={v:"5"};return!f()&&"undefined"!=typeof location&&location.hostname&&at.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),lt(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,De.set("previous_websocket_failure",!0);try{if(f()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/5/${Ne}/${pe.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(t.proxy={origin:i}),this.mySock=new mt(this.connURL,[],t)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new mt(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==mt&&!yt.forceDisallow_}static previouslyFailed(){return De.isInMemoryStorage||!0===De.get("previous_websocket_failure")}markConnectionHealthy(){De.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=v(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(i(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=C(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Xe(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yt.responsesRequiredToBeHealthy=2,yt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ft,yt]}initTransports_(e){const t=yt&&yt.isAvailable();let n=t&&!yt.previouslyFailed();if(e.webSocketOnly&&(t||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[yt];else{const e=this.transports_=[];for(const t of vt.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,n,i,s,r,o,a,h,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=He("c:"+this.id+":"),this.transportManager_=new vt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=it((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ke("t",e),n=Ke("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ke("t",e),n=Ke("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ke("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Be("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Be("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),it((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):it((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(De.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.allowedEvents_=e,this.listeners_={},i(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){i(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends bt{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||_()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Tt}getInitialEvent(e){return i("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Et(){return new It("")}function St(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function kt(e){return e.pieces_.length-e.pieceNum_}function Nt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new It(e.pieces_,t)}function Pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function xt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Rt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new It(t,0)}function Dt(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof It)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new It(n,0)}function At(e){return e.pieceNum_>=e.pieces_.length}function Mt(e,t){const n=St(e),i=St(t);if(null===n)return t;if(n===i)return Mt(Nt(e),Nt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ot(e,t){const n=xt(e,0),i=xt(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=Ye(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function Lt(e,t){if(kt(e)!==kt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ft(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(kt(e)>kt(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class qt{constructor(e,t){this.errorPrefix_=t,this.parts_=xt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=x(this.parts_[e]);Wt(this)}}function Wt(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ut(e))}function Ut(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends bt{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new jt}getInitialEvent(e){return i("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends wt{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ht.nextPersistentConnectionId_++,this.log_=He("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!f())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Tt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(C(r)),i(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new d,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),i(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),i(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Ht.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&b(e,"w")){const n=T(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=w(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=w(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),i(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+C(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Be("Unrecognized action received from server: "+C(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){i(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ht.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const h=function(){a?a.close():(o=!0,n())},l=function(e){i(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:h,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[i,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=i&&i.accessToken,this.appCheckToken_=h&&h.token,a=new Ct(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ve(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Ve(e),h())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],I(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Qe(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new It(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){je("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){je("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";f()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ne.replace(/\./g,"-")]=1,_()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tt.getInstance().currentlyOnline();return I(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0,Ht.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Bt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Bt("[MIN_NAME]",e),i=new Bt("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Bt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class $t extends zt{static get __EMPTY_NODE(){return Vt}static set __EMPTY_NODE(e){Vt=e}compare(e,t){return Ye(e.name,t.name)}isDefinedOn(e){throw s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Bt.MIN}maxPost(){return new Bt("[MAX_NAME]",Vt)}makePost(e,t){return i("string"==typeof e,"KeyIndex indexValue must always be a string."),new Bt(e,Vt)}toString(){return".key"}}const Yt=new $t;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Kt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Kt.RED,this.left=null!=i?i:Qt.EMPTY_NODE,this.right=null!=s?s:Qt.EMPTY_NODE}copy(e,t,n,i,s){return new Kt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Qt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Kt.RED=!0,Kt.BLACK=!1;class Qt{constructor(e,t=Qt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Qt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Kt.BLACK,null,null))}remove(e){return new Qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Kt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e,t){return Ye(e.name,t.name)}function Jt(e,t){return Ye(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt;Qt.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Kt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const en=function(e){return"number"==typeof e?"number:"+Ze(e):"string:"+e},tn=function(e){if(e.isLeafNode()){const t=e.val();i("string"==typeof t||"number"==typeof t||"object"==typeof t&&b(t,".sv"),"Priority must be a string or number.")}else i(e===Zt||e.isEmpty(),"priority of unexpected type.");i(e===Zt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let nn,sn,rn;class on{constructor(e,t=on.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,i(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),tn(this.priorityNode_)}static set __childrenNodeConstructor(e){nn=e}static get __childrenNodeConstructor(){return nn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new on(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:on.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return At(e)?this:".priority"===St(e)?this.priorityNode_:on.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:on.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=St(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(i(".priority"!==n||1===kt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,on.__childrenNodeConstructor.EMPTY_NODE.updateChild(Nt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+en(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ze(this.value_):this.value_,this.lazyHash_=Le(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===on.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof on.__childrenNodeConstructor?-1:(i(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=on.VALUE_TYPE_ORDER.indexOf(t),r=on.VALUE_TYPE_ORDER.indexOf(n);return i(s>=0,"Unknown leaf type: "+t),i(r>=0,"Unknown leaf type: "+n),s===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}on.VALUE_TYPE_ORDER=["object","boolean","number","string"];const an=new class extends zt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Ye(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Bt.MIN}maxPost(){return new Bt("[MAX_NAME]",new on("[PRIORITY-POST]",rn))}makePost(e,t){const n=sn(e);return new Bt(t,new on("[PRIORITY-POST]",n))}toString(){return".priority"}},hn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/hn,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Kt(a,o.node,Kt.BLACK,null,null);{const h=parseInt(r/2,10)+t,l=s(t,h),c=s(h+1,i);return o=e[h],a=n?n(o):o,new Kt(a,o.node,Kt.BLACK,l,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),c=e[r],u=n?n(c):c;h(new Kt(u,c.node,i,null,l))},h=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Kt.BLACK):(a(i,Kt.BLACK),a(i,Kt.RED))}return r}(new ln(e.length));return new Qt(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const dn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return i(dn&&an,"ChildrenNode.ts has not been loaded"),un=un||new pn({".priority":dn},{".priority":an}),un}get(e){const t=T(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Qt?t:null}hasIndex(e){return b(this.indexSet_,e.toString())}addIndex(e,t){i(e!==Yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const r=t.getIterator(Bt.Wrap);let o,a=r.getNext();for(;a;)s=s||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=s?cn(n,e.getCompare()):dn;const h=e.toString(),l=Object.assign({},this.indexSet_);l[h]=e;const c=Object.assign({},this.indexes_);return c[h]=o,new pn(c,l)}addToIndexes(e,t){const n=E(this.indexes_,((n,s)=>{const r=T(this.indexSet_,s);if(i(r,"Missing index implementation for "+s),n===dn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Bt.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),cn(n,r.getCompare())}return dn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Bt(e.name,i))),s.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=E(this.indexes_,(n=>{if(n===dn)return n;{const i=t.get(e.name);return i?n.remove(new Bt(e.name,i)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n;class fn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&tn(this.priorityNode_),this.children_.isEmpty()&&i(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _n||(_n=new fn(new Qt(Jt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_n}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?_n:t}}getChild(e){const t=St(e);return null===t?this:this.getImmediateChild(t).getChild(Nt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(i(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Bt(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?_n:this.priorityNode_;return new fn(i,r,s)}}updateChild(e,t){const n=St(e);if(null===n)return t;{i(".priority"!==St(e)||1===kt(e),".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(Nt(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(an,((r,o)=>{t[r]=o.val(e),n++,s&&fn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+en(this.getPriority().val())+":"),this.forEachChild(an,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Le(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Bt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Bt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Bt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Bt.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Bt.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===Yt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Yt?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const gn=new class extends fn{constructor(){super(new Qt(Jt),fn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Bt,{MIN:{value:new Bt("[MIN_NAME]",fn.EMPTY_NODE)},MAX:{value:new Bt("[MAX_NAME]",gn)}}),$t.__EMPTY_NODE=fn.EMPTY_NODE,on.__childrenNodeConstructor=fn,Zt=gn,function(e){rn=e}(gn);function mn(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),i(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new on(e,mn(t))}if(e instanceof Array){let n=fn.EMPTY_NODE;return Je(e,((t,i)=>{if(b(e,t)&&"."!==t.substring(0,1)){const e=mn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(mn(t))}{const n=[];let i=!1;if(Je(e,((e,t)=>{if("."!==e.substring(0,1)){const s=mn(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Bt(e,s)))}})),0===n.length)return fn.EMPTY_NODE;const s=cn(n,Xt,(e=>e.name),Jt);if(i){const e=cn(n,an.getCompare());return new fn(s,mn(t),new pn({".priority":e},{".priority":an}))}return new fn(s,mn(t),pn.Default)}}!function(e){sn=e}(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends zt{constructor(e){super(),this.indexPath_=e,i(!At(e)&&".priority"!==St(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Ye(e.name,t.name):s}makePost(e,t){const n=mn(e),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Bt(t,i)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Bt("[MAX_NAME]",e)}toString(){return xt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new class extends zt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Ye(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Bt.MIN}maxPost(){return Bt.MAX}makePost(e,t){const n=mn(e);return new Bt(t,n)}toString(){return".value"}},Cn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wn=function(){let e=0;const t=[];return function(n){const s=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=Cn.charAt(n%64),n=Math.floor(n/64);i(0===n,"Cannot push at time == 0");let a=o.join("");if(s){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=Cn.charAt(t[r]);return i(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bn(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function In(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function En(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{constructor(e){this.index_=e}updateChild(e,t,n,s,r,o){i(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(In(t,a)):i(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(En(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,((e,i)=>{t.hasChild(e)||n.trackChildChange(In(e,i))})),t.isLeafNode()||t.forEachChild(an,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(En(t,i,s))}else n.trackChildChange(Tn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?fn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.indexedFilter_=new Sn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=kn.getStartPost_(e),this.endPost_=kn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new Bt(t,n))||(n=fn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=fn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(fn.EMPTY_NODE);const s=this;return t.forEachChild(an,((e,t)=>{s.matches(new Bt(e,t))||(i=i.updateImmediateChild(e,fn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.rangedFilter_=new kn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Bt(t,n))||(n=fn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=fn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=fn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(fn.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;for(;r.hasNext();){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);a&&o<this.limit_&&s(t,n)<=0?o++:i=i.updateImmediateChild(t.name,fn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;i(a.numChildren()===this.limit_,"");const h=new Bt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(h);if(a.hasChild(t)){const e=a.getImmediateChild(t);let i=s.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=i&&(i.name===t||a.hasChild(i.name));)i=s.getChildAfterChild(this.index_,i,this.reverse_);const u=null==i?1:o(i,h);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(En(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(In(t,e));const n=a.updateImmediateChild(t,fn.EMPTY_NODE);return null!=i&&this.rangedFilter_.matches(i)?(null!=r&&r.trackChildChange(Tn(i.name,i.node)),n.updateImmediateChild(i.name,i.node)):n}}return n.isEmpty()?e:c&&o(l,h)>=0?(null!=r&&(r.trackChildChange(In(l.name,l.node)),r.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,fn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return i(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return i(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return i(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return i(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return i(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Pn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xn(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===vn?n="$value":e.index_===Yt?n="$key":(i(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=C(n),e.startSet_&&(t.startAt=C(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+C(e.indexStartName_))),e.endSet_&&(t.endAt=C(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+C(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Rn(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==an&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends wt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=He("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(i(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Dn.getListenId_(e,n),o={};this.listens_[r]=o;const a=xn(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),T(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Dn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=xn(e._queryParams),n=e._path.toString(),i=new d;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=v(o.responseText)}catch(e){Ve("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Ve("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return{value:null,children:new Map}}function On(e,t,n){if(At(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=St(t);e.children.has(i)||e.children.set(i,Mn());On(e.children.get(i),t=Nt(t),n)}}function Ln(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ln(i,new It(t.toString()+"/"+e),n)}))}class Fn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Je(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fn(e);const n=1e4+2e4*Math.random();it(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Je(e,((e,i)=>{i>0&&b(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),it(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn,Un;function jn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Un=Wn||(Wn={}))[Un.OVERWRITE=0]="OVERWRITE",Un[Un.MERGE=1]="MERGE",Un[Un.ACK_USER_WRITE=2]="ACK_USER_WRITE",Un[Un.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Hn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Wn.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(At(this.path)){if(null!=this.affectedTree.value)return i(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new It(e));return new Hn(Et(),t,this.revert)}}return i(St(this.path)===e,"operationForChild called for unrelated child."),new Hn(Nt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.source=e,this.path=t,this.type=Wn.LISTEN_COMPLETE}operationForChild(e){return At(this.path)?new Bn(this.source,Et()):new Bn(this.source,Nt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Wn.OVERWRITE}operationForChild(e){return At(this.path)?new zn(this.source,Et(),this.snap.getImmediateChild(e)):new zn(this.source,Nt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Wn.MERGE}operationForChild(e){if(At(this.path)){const t=this.children.subtree(new It(e));return t.isEmpty()?null:t.value?new zn(this.source,Et(),t.value):new Vn(this.source,Et(),t)}return i(St(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vn(this.source,Nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(At(e))return this.isFullyInitialized()&&!this.filtered_;const t=St(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gn(e,t,n,i,r,o){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw s("Should only compare child_ events.");const i=new Bt(t.childName,t.snapshotNode),r=new Bt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Kn(e,t){return{eventCache:e,serverCache:t}}function Qn(e,t,n,i){return Kn(new $n(t,n,i),e.serverCache)}function Xn(e,t,n,i){return Kn(e.eventCache,new $n(t,n,i))}function Jn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Zn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;class ti{constructor(e,t=(()=>(ei||(ei=new Qt(Ge)),ei))()){this.value=e,this.children=t}static fromObject(e){let t=new ti(null);return Je(e,((e,n)=>{t=t.set(new It(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Et(),value:this.value};if(At(e))return null;{const n=St(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Nt(e),t);if(null!=s){return{path:Dt(new It(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(At(e))return this;{const t=St(e),n=this.children.get(t);return null!==n?n.subtree(Nt(e)):new ti(null)}}set(e,t){if(At(e))return new ti(t,this.children);{const n=St(e),i=(this.children.get(n)||new ti(null)).set(Nt(e),t),s=this.children.insert(n,i);return new ti(this.value,s)}}remove(e){if(At(e))return this.children.isEmpty()?new ti(null):new ti(null,this.children);{const t=St(e),n=this.children.get(t);if(n){const i=n.remove(Nt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new ti(null):new ti(this.value,s)}return this}}get(e){if(At(e))return this.value;{const t=St(e),n=this.children.get(t);return n?n.get(Nt(e)):null}}setTree(e,t){if(At(e))return t;{const n=St(e),i=(this.children.get(n)||new ti(null)).setTree(Nt(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new ti(this.value,s)}}fold(e){return this.fold_(Et(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Dt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Et(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(At(e))return null;{const i=St(e),s=this.children.get(i);return s?s.findOnPath_(Nt(e),Dt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Et(),t)}foreachOnPath_(e,t,n){if(At(e))return this;{this.value&&n(t,this.value);const i=St(e),s=this.children.get(i);return s?s.foreachOnPath_(Nt(e),Dt(t,i),n):new ti(null)}}foreach(e){this.foreach_(Et(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Dt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.writeTree_=e}static empty(){return new ni(new ti(null))}}function ii(e,t,n){if(At(t))return new ni(new ti(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Mt(s,t);return r=r.updateChild(o,n),new ni(e.writeTree_.set(s,r))}{const i=new ti(n),s=e.writeTree_.setTree(t,i);return new ni(s)}}}function si(e,t,n){let i=e;return Je(n,((e,n)=>{i=ii(i,Dt(t,e),n)})),i}function ri(e,t){if(At(t))return ni.empty();{const n=e.writeTree_.setTree(t,new ti(null));return new ni(n)}}function oi(e,t){return null!=ai(e,t)}function ai(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Mt(n.path,t)):null}function hi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,((e,n)=>{t.push(new Bt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Bt(e,n.value))})),t}function li(e,t){if(At(t))return e;{const n=ai(e,t);return new ni(null!=n?new ti(n):e.writeTree_.subtree(t))}}function ci(e){return e.writeTree_.isEmpty()}function ui(e,t){return di(Et(),e.writeTree_,t)}function di(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let s=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(i(null!==r.value,"Priority writes must always be leaf nodes"),s=r.value):n=di(Dt(e,t),r,n)})),n.getChild(e).isEmpty()||null===s||(n=n.updateChild(Dt(e,".priority"),s)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e,t){return Si(t,e)}function _i(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));i(n>=0,"removeWrite called with nonexistent writeId.");const s=e.allWrites[n];e.allWrites.splice(n,1);let r=s.visible,o=!1,a=e.allWrites.length-1;for(;r&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&fi(t,s.path)?r=!1:Ft(s.path,t.path)&&(o=!0)),a--}if(r){if(o)return function(e){e.visibleWrites=mi(e.allWrites,gi,Et()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(s.snap)e.visibleWrites=ri(e.visibleWrites,s.path);else{Je(s.children,(t=>{e.visibleWrites=ri(e.visibleWrites,Dt(s.path,t))}))}return!0}return!1}function fi(e,t){if(e.snap)return Ft(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ft(Dt(e.path,n),t))return!0;return!1}function gi(e){return e.visible}function mi(e,t,n){let i=ni.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Ft(n,e)?(t=Mt(n,e),i=ii(i,t,o.snap)):Ft(e,n)&&(t=Mt(e,n),i=ii(i,Et(),o.snap.getChild(t)));else{if(!o.children)throw s("WriteRecord should have .snap or .children");if(Ft(n,e))t=Mt(n,e),i=si(i,t,o.children);else if(Ft(e,n))if(t=Mt(e,n),At(t))i=si(i,Et(),o.children);else{const e=T(o.children,St(t));if(e){const n=e.getChild(Nt(t));i=ii(i,Et(),n)}}}}}return i}function yi(e,t,n,i,s){if(i||s){const r=li(e.visibleWrites,t);if(!s&&ci(r))return n;if(s||null!=n||oi(r,Et())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ft(e.path,t)||Ft(t,e.path))};return ui(mi(e.allWrites,r,t),n||fn.EMPTY_NODE)}return null}{const i=ai(e.visibleWrites,t);if(null!=i)return i;{const i=li(e.visibleWrites,t);if(ci(i))return n;if(null!=n||oi(i,Et())){return ui(i,n||fn.EMPTY_NODE)}return null}}}function vi(e,t,n,i){return yi(e.writeTree,e.treePath,t,n,i)}function Ci(e,t){return function(e,t,n){let i=fn.EMPTY_NODE;const s=ai(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(an,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=li(e.visibleWrites,t);return n.forEachChild(an,((e,t)=>{const n=ui(li(s,new It(e)),t);i=i.updateImmediateChild(e,n)})),hi(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return hi(li(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function wi(e,t,n,s){return function(e,t,n,s,r){i(s||r,"Either existingEventSnap or existingServerSnap must exist");const o=Dt(t,n);if(oi(e.visibleWrites,o))return null;{const t=li(e.visibleWrites,o);return ci(t)?r.getChild(n):ui(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,s)}function bi(e,t){return function(e,t){return ai(e.visibleWrites,t)}(e.writeTree,Dt(e.treePath,t))}function Ti(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const h=li(e.visibleWrites,t),l=ai(h,Et());if(null!=l)a=l;else{if(null==n)return[];a=ui(h,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let h=n.getNext();for(;h&&e.length<s;)0!==t(h,i)&&e.push(h),h=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function Ii(e,t,n){return function(e,t,n,i){const s=Dt(t,n),r=ai(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return ui(li(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ei(e,t){return Si(Dt(e.treePath,t),e.writeTree)}function Si(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;i("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),i(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,En(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,In(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw s("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,En(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Pi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ii(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Zn(this.viewCache_),s=Ti(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e,t,n,r,o){const a=new ki;let h,l;if(n.type===Wn.OVERWRITE){const s=n;s.source.fromUser?h=Ai(e,t,s.path,s.snap,r,o,a):(i(s.source.fromServer,"Unknown source."),l=s.source.tagged||t.serverCache.isFiltered()&&!At(s.path),h=Di(e,t,s.path,s.snap,r,o,l,a))}else if(n.type===Wn.MERGE){const s=n;s.source.fromUser?h=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,h)=>{const l=Dt(n,i);Mi(t,St(l))&&(a=Ai(e,a,l,h,s,r,o))})),i.foreach(((i,h)=>{const l=Dt(n,i);Mi(t,St(l))||(a=Ai(e,a,l,h,s,r,o))})),a}(e,t,s.path,s.children,r,o,a):(i(s.source.fromServer,"Unknown source."),l=s.source.tagged||t.serverCache.isFiltered(),h=Li(e,t,s.path,s.children,r,o,l,a))}else if(n.type===Wn.ACK_USER_WRITE){const s=n;h=s.revert?function(e,t,n,s,r,o){let a;if(null!=bi(s,n))return t;{const h=new Pi(s,t,r),l=t.eventCache.getNode();let c;if(At(n)||".priority"===St(n)){let n;if(t.serverCache.isFullyInitialized())n=vi(s,Zn(t));else{const e=t.serverCache.getNode();i(e instanceof fn,"serverChildren would be complete if leaf node"),n=Ci(s,e)}c=e.filter.updateFullNode(l,n,o)}else{const i=St(n);let r=Ii(s,i,t.serverCache);null==r&&t.serverCache.isCompleteForChild(i)&&(r=l.getImmediateChild(i)),c=null!=r?e.filter.updateChild(l,i,r,Nt(n),h,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,fn.EMPTY_NODE,Nt(n),h,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=vi(s,Zn(t)),a.isLeafNode()&&(c=e.filter.updateFullNode(c,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=bi(s,Et()),Qn(t,c,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,s.path,r,o,a):function(e,t,n,i,s,r,o){if(null!=bi(s,n))return t;const a=t.serverCache.isFiltered(),h=t.serverCache;if(null!=i.value){if(At(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return Di(e,t,n,h.getNode().getChild(n),s,r,a,o);if(At(n)){let i=new ti(null);return h.getNode().forEachChild(Yt,((e,t)=>{i=i.set(new It(e),t)})),Li(e,t,n,i,s,r,a,o)}return t}{let l=new ti(null);return i.foreach(((e,t)=>{const i=Dt(n,e);h.isCompleteForPath(i)&&(l=l.set(e,h.getNode().getChild(i)))})),Li(e,t,n,l,s,r,a,o)}}(e,t,s.path,s.affectedTree,r,o,a)}else{if(n.type!==Wn.LISTEN_COMPLETE)throw s("Unknown operation type: "+n.type);h=function(e,t,n,i,s){const r=t.serverCache,o=Xn(t,r.getNode(),r.isFullyInitialized()||At(n),r.isFiltered());return Ri(e,o,n,i,Ni,s)}(e,t,n.path,r,a)}const c=a.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Jn(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(bn(Jn(t)))}}(t,h,c),{viewCache:h,changes:c}}function Ri(e,t,n,s,r,o){const a=t.eventCache;if(null!=bi(s,n))return t;{let h,l;if(At(n))if(i(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Zn(t),i=Ci(s,n instanceof fn?n:fn.EMPTY_NODE);h=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=vi(s,Zn(t));h=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=St(n);if(".priority"===c){i(1===kt(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=wi(s,n,r,l);h=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const i=Nt(n);let u;if(a.isCompleteForChild(c)){l=t.serverCache.getNode();const e=wi(s,n,a.getNode(),l);u=null!=e?a.getNode().getImmediateChild(c).updateChild(i,e):a.getNode().getImmediateChild(c)}else u=Ii(s,c,t.serverCache);h=null!=u?e.filter.updateChild(a.getNode(),c,u,i,r,o):a.getNode()}}return Qn(t,h,a.isFullyInitialized()||At(n),e.filter.filtersNodes())}}function Di(e,t,n,i,s,r,o,a){const h=t.serverCache;let l;const c=o?e.filter:e.filter.getIndexedFilter();if(At(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){const e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{const e=St(n);if(!h.isCompleteForPath(n)&&kt(n)>1)return t;const s=Nt(n),r=h.getNode().getImmediateChild(e).updateChild(s,i);l=".priority"===e?c.updatePriority(h.getNode(),r):c.updateChild(h.getNode(),e,r,s,Ni,null)}const u=Xn(t,l,h.isFullyInitialized()||At(n),c.filtersNodes());return Ri(e,u,n,s,new Pi(s,u,r),a)}function Ai(e,t,n,i,s,r,o){const a=t.eventCache;let h,l;const c=new Pi(s,t,r);if(At(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),h=Qn(t,l,!0,e.filter.filtersNodes());else{const s=St(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),h=Qn(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=Nt(n),l=a.getNode().getImmediateChild(s);let u;if(At(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===Pt(r)&&e.getChild(Rt(r)).isEmpty()?e:e.updateChild(r,i):fn.EMPTY_NODE}if(l.equals(u))h=t;else{h=Qn(t,e.filter.updateChild(a.getNode(),s,u,r,c,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function Mi(e,t){return e.eventCache.isCompleteForChild(t)}function Oi(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Li(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h,l=t;h=At(n)?i:new ti(null).setTree(n,i);const c=t.serverCache.getNode();return h.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const h=Oi(0,t.serverCache.getNode().getImmediateChild(n),i);l=Di(e,l,new It(n),h,s,r,o,a)}})),h.children.inorderTraversal(((n,i)=>{const h=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!c.hasChild(n)&&!h){const h=Oi(0,t.serverCache.getNode().getImmediateChild(n),i);l=Di(e,l,new It(n),h,s,r,o,a)}})),l}class Fi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Sn(n.getIndex()),s=(r=n).loadsAllData()?new Sn(r.getIndex()):r.hasLimit()?new Nn(r):new kn(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,h=i.updateFullNode(fn.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(fn.EMPTY_NODE,a.getNode(),null),c=new $n(h,o.isFullyInitialized(),i.filtersNodes()),u=new $n(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Kn(u,c),this.eventGenerator_=new Yn(this.query_)}get query(){return this.query_}}function qi(e,t){const n=Zn(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!At(t)&&!n.getImmediateChild(St(t)).isEmpty())?n.getChild(t):null}function Wi(e){return 0===e.eventRegistrations_.length}function Ui(e,t,n){const s=[];if(n){i(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&s.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return s}function ji(e,t,n,s){t.type===Wn.MERGE&&null!==t.source.queryId&&(i(Zn(e.viewCache_),"We should always have a full cache before handling merges"),i(Jn(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=xi(e.processor_,r,t,n,s);var a,h;return a=e.processor_,h=o.viewCache,i(h.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),i(h.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),i(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Hi(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Hi(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Gn(e,s,"child_removed",t,i,n),Gn(e,s,"child_added",t,i,n),Gn(e,s,"child_moved",r,i,n),Gn(e,s,"child_changed",t,i,n),Gn(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi,zi;class Vi{constructor(){this.views=new Map}}function $i(e,t,n,s){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return i(null!=o,"SyncTree gave us an op for an invalid query."),ji(o,t,n,s)}{let i=[];for(const r of e.views.values())i=i.concat(ji(r,t,n,s));return i}}function Yi(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=vi(n,s?i:null),r=!1;e?r=!0:i instanceof fn?(e=Ci(n,i),r=!1):(e=fn.EMPTY_NODE,r=!1);const o=Kn(new $n(e,r,!1),new $n(i,s,!1));return new Fi(t,o)}return o}function Gi(e,t,n,i,s,r){const o=Yi(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(an,((e,t)=>{i.push(Tn(e,t))}));return n.isFullyInitialized()&&i.push(bn(n.getNode())),Hi(e,i,n.getNode(),t)}(o,n)}function Ki(e,t,n,s){const r=t._queryIdentifier,o=[];let a=[];const h=es(e);if("default"===r)for(const[t,i]of e.views.entries())a=a.concat(Ui(i,n,s)),Wi(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||o.push(i.query));else{const t=e.views.get(r);t&&(a=a.concat(Ui(t,n,s)),Wi(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||o.push(t.query)))}return h&&!es(e)&&o.push(new(i(Bi,"Reference.ts has not been loaded"),Bi)(t._repo,t._path)),{removed:o,events:a}}function Qi(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Xi(e,t){let n=null;for(const i of e.views.values())n=n||qi(i,t);return n}function Ji(e,t){if(t._queryParams.loadsAllData())return ts(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Zi(e,t){return null!=Ji(e,t)}function es(e){return null!=ts(e)}function ts(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns=1;class is{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ti(null),this.pendingWriteTree_={visibleWrites:ni.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ss(e,t,n,s,r){return function(e,t,n,s,r){i(s>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:s,visible:r}),r&&(e.visibleWrites=ii(e.visibleWrites,t,n)),e.lastWriteId=s}(e.pendingWriteTree_,t,n,s,r),r?us(e,new zn({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function rs(e,t,n,s){!function(e,t,n,s){i(s>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:s,visible:!0}),e.visibleWrites=si(e.visibleWrites,t,n),e.lastWriteId=s}(e.pendingWriteTree_,t,n,s);const r=ti.fromObject(n);return us(e,new Vn({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function os(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(_i(e.pendingWriteTree_,t)){let t=new ti(null);return null!=i.snap?t=t.set(Et(),!0):Je(i.children,(e=>{t=t.set(new It(e),!0)})),us(e,new Hn(i.path,t,n))}return[]}function as(e,t,n){return us(e,new zn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function hs(e,t,n,i){const s=t._path,r=e.syncPointTree_.get(s);let o=[];if(r&&("default"===t._queryIdentifier||Zi(r,t))){const a=Ki(r,t,n,i);0===r.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const h=a.removed;o=a.events;const l=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),c=e.syncPointTree_.findOnPath(s,((e,t)=>es(t)));if(l&&!c){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&es(t)){return[ts(t)]}{let e=[];return t&&(e=Qi(t)),Je(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=_s(e,i);e.listenProvider_.startListening(Cs(s),fs(e,s),r.hashFn,r.onComplete)}}}if(!c&&h.length>0&&!i)if(l){const n=null;e.listenProvider_.stopListening(Cs(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(gs(t));e.listenProvider_.stopListening(Cs(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=gs(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return o}function ls(e,t,n){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Mt(e,s);r=r||Xi(t,n),o=o||es(t)}));let a,h=e.syncPointTree_.get(s);if(h?(o=o||es(h),r=r||Xi(h,Et())):(h=new Vi,e.syncPointTree_=e.syncPointTree_.set(s,h)),null!=r)a=!0;else{a=!1,r=fn.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Xi(t,Et());n&&(r=r.updateImmediateChild(e,n))}))}const l=Zi(h,t);if(!l&&!t._queryParams.loadsAllData()){const n=gs(t);i(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const s=ns++;e.queryToTagMap.set(n,s),e.tagToQueryMap.set(s,n)}let c=Gi(h,t,n,pi(e.pendingWriteTree_,s),r,a);if(!l&&!o){const n=Ji(h,t);c=c.concat(function(e,t,n){const s=t._path,r=fs(e,t),o=_s(e,n),a=e.listenProvider_.startListening(Cs(t),r,o.hashFn,o.onComplete),h=e.syncPointTree_.subtree(s);if(r)i(!es(h.value),"If we're adding a query, it shouldn't be shadowed");else{const t=h.fold(((e,t,n)=>{if(!At(e)&&t&&es(t))return[ts(t).query];{let e=[];return t&&(e=e.concat(Qi(t).map((e=>e.query)))),Je(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Cs(i),fs(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return c}function cs(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Xi(n,Mt(e,t));if(i)return i}));return yi(i,t,s,n,!0)}function us(e,t){return ds(t,e.syncPointTree_,null,pi(e.pendingWriteTree_,Et()))}function ds(e,t,n,i){if(At(e.path))return ps(e,t,n,i);{const s=t.get(Et());null==n&&null!=s&&(n=Xi(s,Et()));let r=[];const o=St(e.path),a=e.operationForChild(o),h=t.children.get(o);if(h&&a){const e=n?n.getImmediateChild(o):null,t=Ei(i,o);r=r.concat(ds(a,h,e,t))}return s&&(r=r.concat($i(s,e,i,n))),r}}function ps(e,t,n,i){const s=t.get(Et());null==n&&null!=s&&(n=Xi(s,Et()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Ei(i,t),h=e.operationForChild(t);h&&(r=r.concat(ps(h,s,o,a)))})),s&&(r=r.concat($i(s,e,i,n))),r}function _s(e,t){const n=t.query,i=fs(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||fn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ms(e,n);if(i){const n=ys(i),s=n.path,r=n.queryId,o=Mt(s,t);return vs(e,s,new Bn(jn(r),o))}return[]}(e,n._path,i):function(e,t){return us(e,new Bn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return hs(e,n,null,i)}}}}function fs(e,t){const n=gs(t);return e.queryToTagMap.get(n)}function gs(e){return e._path.toString()+"$"+e._queryIdentifier}function ms(e,t){return e.tagToQueryMap.get(t)}function ys(e){const t=e.indexOf("$");return i(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new It(e.substr(0,t))}}function vs(e,t,n){const s=e.syncPointTree_.get(t);i(s,"Missing sync point for query tag that we're tracking");return $i(s,n,pi(e.pendingWriteTree_,t),null)}function Cs(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(i(zi,"Reference.ts has not been loaded"),zi)(e._repo,e._path):e}class ws{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ws(t)}node(){return this.node_}}class bs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Dt(this.path_,e);return new bs(this.syncTree_,t)}node(){return cs(this.syncTree_,this.path_)}}const Ts=function(e,t,n){return e&&"object"==typeof e?(i(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Is(e[".sv"],t,n):"object"==typeof e[".sv"]?Es(e[".sv"],t):void i(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Is=function(e,t,n){if("timestamp"===e)return n.timestamp;i(!1,"Unexpected server value: "+e)},Es=function(e,t,n){e.hasOwnProperty("increment")||i(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const s=e.increment;"number"!=typeof s&&i(!1,"Unexpected increment value: "+s);const r=t.node();if(i(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return"number"!=typeof o?s:o+s},Ss=function(e,t,n,i){return Ns(t,new bs(n,e),i)},ks=function(e,t,n){return Ns(e,new ws(t),n)};function Ns(e,t,n){const i=e.getPriority().val(),s=Ts(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Ts(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new on(r,mn(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new on(s))),i.forEachChild(an,((e,i)=>{const s=Ns(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function xs(e,t){let n=t instanceof It?t:new It(t),i=e,s=St(n);for(;null!==s;){const e=T(i.node.children,s)||{children:{},childCount:0};i=new Ps(s,i,e),n=Nt(n),s=St(n)}return i}function Rs(e){return e.node.value}function Ds(e,t){e.node.value=t,Fs(e)}function As(e){return e.node.childCount>0}function Ms(e,t){Je(e.node.children,((n,i)=>{t(new Ps(n,e,i))}))}function Os(e,t,n,i){n&&!i&&t(e),Ms(e,(e=>{Os(e,t,!0,i)})),n&&i&&t(e)}function Ls(e){return new It(null===e.parent?e.name:Ls(e.parent)+"/"+e.name)}function Fs(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Rs(e)&&!As(e)}(n),s=b(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Fs(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Fs(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const qs=/[\[\].#$\/\u0000-\u001F\u007F]/,Ws=/[\[\].#$\u0000-\u001F\u007F]/,Us=function(e){return"string"==typeof e&&0!==e.length&&!qs.test(e)},js=function(e){return"string"==typeof e&&0!==e.length&&!Ws.test(e)},Hs=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!$e(e)||e&&"object"==typeof e&&b(e,".sv")},Bs=function(e,t,n,i){i&&void 0===t||zs(P(e,"value"),t,n)},zs=function(e,t,n){const i=n instanceof It?new qt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ut(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ut(i)+" with contents = "+t.toString());if($e(t))throw new Error(e+"contains "+t.toString()+" "+Ut(i));if("string"==typeof t&&t.length>10485760/3&&x(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Ut(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(Je(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Us(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ut(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=x(t),Wt(e)}(i,t),zs(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=x(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Ut(i)+" in addition to actual children.")}},Vs=function(e,t,n,i){if(i&&void 0===t)return;const s=P(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const r=[];Je(t,((e,t)=>{const i=new It(e);if(zs(s,t,Dt(n,i)),".priority"===Pt(i)&&!Hs(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=xt(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!Us(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ot);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&Ft(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}}(s,r)},$s=function(e,t,n,i){if(!(i&&void 0===n||js(n)))throw new Error(P(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ys=function(e,t){if(".info"===St(t))throw new Error(e+" failed = Can't modify data under /.info/")},Gs=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Us(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),js(e)}(n))throw new Error(P(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qs(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Lt(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Xs(e,t,n){Qs(e,n),Zs(e,(e=>Lt(e,t)))}function Js(e,t,n){Qs(e,n),Zs(e,(e=>Ft(e,t)||Ft(t,e)))}function Zs(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(er(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function er(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();qe&&je("event: "+n.toString()),nt(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ks,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mn(),this.transactionQueueTree_=new Ps,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nr(e,t,n){if(e.stats_=pt(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Dn(e.repoInfo_,((t,n,i,s)=>{rr(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>or(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{C(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ht(e.repoInfo_,t,((t,n,i,s)=>{rr(e,t,n,i,s)}),(t=>{or(e,t)}),(t=>{!function(e,t){Je(t,((t,n)=>{ar(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return dt[n]||(dt[n]=t()),dt[n]}(e.repoInfo_,(()=>new qn(e.stats_,e.server_))),e.infoData_=new An,e.infoSyncTree_=new is({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=as(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ar(e,"connected",!1),e.serverSyncTree_=new is({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Js(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ir(e){const t=e.infoData_.getNode(new It(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function sr(e){return(t=(t={timestamp:ir(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function rr(e,t,n,i,s){e.dataUpdateCount++;const r=new It(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=E(n,(e=>mn(e)));o=function(e,t,n,i){const s=ms(e,i);if(s){const i=ys(s),r=i.path,o=i.queryId,a=Mt(r,t),h=ti.fromObject(n);return vs(e,r,new Vn(jn(o),a,h))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=mn(n);o=function(e,t,n,i){const s=ms(e,i);if(null!=s){const i=ys(s),r=i.path,o=i.queryId,a=Mt(r,t);return vs(e,r,new zn(jn(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=E(n,(e=>mn(e)));o=function(e,t,n){const i=ti.fromObject(n);return us(e,new Vn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=mn(n);o=as(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=gr(e,r)),Js(e.eventQueue_,a,o)}function or(e,t){ar(e,"connected",t),!1===t&&function(e){dr(e,"onDisconnectEvents");const t=sr(e),n=Mn();Ln(e.onDisconnect_,Et(),((i,s)=>{const r=Ss(i,s,e.serverSyncTree_,t);On(n,i,r)}));let i=[];Ln(n,Et(),((t,n)=>{i=i.concat(as(e.serverSyncTree_,t,n));const s=wr(e,t);gr(e,s)})),e.onDisconnect_=Mn(),Js(e.eventQueue_,Et(),i)}(e)}function ar(e,t,n){const i=new It("/.info/"+t),s=mn(n);e.infoData_.updateSnapshot(i,s);const r=as(e.infoSyncTree_,i,s);Js(e.eventQueue_,i,r)}function hr(e){return e.nextWriteId_++}function lr(e,t,n,i,s){dr(e,"set",{path:t.toString(),value:n,priority:i});const r=sr(e),o=mn(n,i),a=cs(e.serverSyncTree_,t),h=ks(o,a,r),l=hr(e),c=ss(e.serverSyncTree_,t,h,l,!0);Qs(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||Ve("set at "+t+" failed: "+n);const o=os(e.serverSyncTree_,l,!r);Js(e.eventQueue_,t,o),pr(e,s,n,i)}));const u=wr(e,t);gr(e,u),Js(e.eventQueue_,u,[])}function cr(e,t,n){let i;i=".info"===St(t._path)?hs(e.infoSyncTree_,t,n):hs(e.serverSyncTree_,t,n),Xs(e.eventQueue_,t._path,i)}function ur(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function dr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),je(n,...t)}function pr(e,t,n,i){t&&nt((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function _r(e,t,n){return cs(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function fr(e,t=e.transactionQueueTree_){if(t||Cr(e,t),Rs(t)){const n=yr(e,t);i(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const s=n.map((e=>e.currentWriteId)),r=_r(e,t,s);let o=r;const a=r.hash();for(let e=0;e<n.length;e++){const s=n[e];i(0===s.status,"tryToSendTransactionQueue_: items in queue should all be run."),s.status=1,s.retryCount++;const r=Mt(t,s.path);o=o.updateChild(r,s.currentOutputSnapshotRaw)}const h=o.val(!0),l=t;e.server_.put(l.toString(),h,(i=>{dr(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(os(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Cr(e,xs(e.transactionQueueTree_,t)),fr(e,e.transactionQueueTree_),Js(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)nt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ve("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}gr(e,t)}}),a)}(e,Ls(t),n)}else As(t)&&Ms(t,(t=>{fr(e,t)}))}function gr(e,t){const n=mr(e,t),s=Ls(n);return function(e,t,n){if(0===t.length)return;const s=[];let r=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let h=0;h<t.length;h++){const l=t[h],c=Mt(n,l.path);let u,d=!1;if(i(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,r=r.concat(os(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,u="maxretry",r=r.concat(os(e.serverSyncTree_,l.currentWriteId,!0));else{const n=_r(e,l.path,o);l.currentInputSnapshot=n;const i=t[h].update(n.val());if(void 0!==i){zs("transaction failed: Data returned ",i,l.path);let t=mn(i);"object"==typeof i&&null!=i&&b(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=sr(e),h=ks(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=h,l.currentWriteId=hr(e),o.splice(o.indexOf(s),1),r=r.concat(ss(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),r=r.concat(os(e.serverSyncTree_,s,!0))}else d=!0,u="nodata",r=r.concat(os(e.serverSyncTree_,l.currentWriteId,!0))}Js(e.eventQueue_,n,r),r=[],d&&(t[h].status=2,a=t[h].unwatcher,setTimeout(a,Math.floor(0)),t[h].onComplete&&("nodata"===u?s.push((()=>t[h].onComplete(null,!1,t[h].currentInputSnapshot))):s.push((()=>t[h].onComplete(new Error(u),!1,null)))))}var a;Cr(e,e.transactionQueueTree_);for(let e=0;e<s.length;e++)nt(s[e]);fr(e,e.transactionQueueTree_)}(e,yr(e,n),s),s}function mr(e,t){let n,i=e.transactionQueueTree_;for(n=St(t);null!==n&&void 0===Rs(i);)i=xs(i,n),n=St(t=Nt(t));return i}function yr(e,t){const n=[];return vr(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function vr(e,t,n){const i=Rs(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ms(t,(t=>{vr(e,t,n)}))}function Cr(e,t){const n=Rs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ds(t,n.length>0?n:void 0)}Ms(t,(t=>{Cr(e,t)}))}function wr(e,t){const n=Ls(mr(e,t)),i=xs(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{br(e,t)})),br(e,i),Os(i,(t=>{br(e,t)})),n}function br(e,t){const n=Rs(t);if(n){const s=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(i(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(i(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(os(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&s.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ds(t,void 0):n.length=o+1,Js(e.eventQueue_,Ls(t),r);for(let e=0;e<s.length;e++)nt(s[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=function(e,t){const n=Ir(e),i=n.namespace;"firebase.com"===n.domain&&ze(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ze("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ht(n.host,n.secure,i,t,s,"",i!==n.subdomain),path:new It(n.pathString)}},Ir=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",h=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ve(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,h=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:h,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+C(this.snapshot.exportVal())}}class Sr{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return i(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return At(this._path)?null:Pt(this._path)}get ref(){return new Pr(this._repo,this._path)}get _queryIdentifier(){const e=Rn(this._queryParams),t=Qe(e);return"{}"===t?"default":t}get _queryObject(){return Rn(this._queryParams)}isEqual(e){if(!((e=R(e))instanceof Nr))return!1;const t=this._repo===e._repo,n=Lt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Pr extends Nr{constructor(e,t){super(e,t,new Pn,!1)}get parent(){const e=Rt(this._path);return null===e?null:new Pr(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class xr{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new It(e),n=Dr(this.ref,e);return new xr(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new xr(n,Dr(this.ref,t),an))))}hasChild(e){const t=new It(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rr(e,t){return(e=R(e))._checkNotDeleted("ref"),void 0!==t?Dr(e._root,t):e._root}function Dr(e,t){var n,i,s,r;return null===St((e=R(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),$s(n,i,s,r)):$s("child","path",t,!1),new Pr(e._repo,Dt(e._path,t))}function Ar(e){return Ys("remove",e._path),Mr(e,null)}function Mr(e,t){e=R(e),Ys("set",e._path),Bs("set",t,e._path,!1);const n=new d;return lr(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Or(e,t){Vs("update",t,e._path,!1);const n=new d;return function(e,t,n,i){dr(e,"update",{path:t.toString(),value:n});let s=!0;const r=sr(e),o={};if(Je(n,((n,i)=>{s=!1,o[n]=Ss(Dt(t,n),mn(i),e.serverSyncTree_,r)})),s)je("update() called with empty data.  Don't do anything."),pr(0,i,"ok",void 0);else{const s=hr(e),r=rs(e.serverSyncTree_,t,o,s);Qs(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const o="ok"===n;o||Ve("update at "+t+" failed: "+n);const a=os(e.serverSyncTree_,s,!o),h=a.length>0?gr(e,t):t;Js(e.eventQueue_,h,a),pr(0,i,n,r)})),Je(n,(n=>{const i=wr(e,Dt(t,n));gr(e,i)})),Js(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Lr{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Er("value",this,new xr(e.snapshotNode,new Pr(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Sr(this,e,t):null}matches(e){return e instanceof Lr&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Fr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Sr(this,e,t):null}createEvent(e,t){i(null!=e.childName,"Child events should have a childName.");const n=Dr(new Pr(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Er(e.type,this,new xr(e.snapshotNode,n,s),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fr&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function qr(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{cr(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new kr(n,r||void 0),a="value"===t?new Lr(o):new Fr(t,o);return function(e,t,n){let i;i=".info"===St(t._path)?ls(e.infoSyncTree_,t,n):ls(e.serverSyncTree_,t,n),Xs(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>cr(e._repo,e,a)}function Wr(e,t,n,i){return qr(e,"value",t,n,i)}!function(e){i(!Bi,"__referenceConstructor has already been defined"),Bi=e}(Pr),function(e){i(!zi,"__referenceConstructor has already been defined"),zi=e}(Pr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ur={};let jr=!1;function Hr(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||ze("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,h=Tr(r,s),l=h.repoInfo;void 0!==pe&&(a=pe.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,h=Tr(r,s),l=h.repoInfo):o=!h.repoInfo.secure;const c=s&&o?new ot(ot.OWNER):new rt(e.name,e.options,t);Gs("Invalid Firebase Database URL",h),At(h.path)||ze("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=Ur[t.name];s||(s={},Ur[t.name]=s);let r=s[e.toURLString()];r&&ze("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new tr(e,jr,n,i),s[e.toURLString()]=r,r}(l,e,c,new st(e.name,n));return new Br(u,e)}class Br{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pr(this._repo,Et())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ur[t];n&&n[e.key]===e||ze(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ur(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ze("Cannot call "+e+" on a deleted database.")}}Ht.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ht.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ne="9.6.9",Z(new F("database",((e,{instanceIdentifier:t})=>Hr(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ie("@firebase/database","0.12.6",e),ie("@firebase/database","0.12.6","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ie("firebase","9.6.9","app");const zr=function(e=function(e="[DEFAULT]"){const t=Q.get(e);if(!t)throw te.create("no-app",{appName:e});return t}(),t){return ee(e,"database").getImmediate({identifier:t})}(function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw te.create("bad-app-name",{appName:String(i)});const s=Q.get(i);if(s){if(S(e,s.options)&&S(n,s.config))return s;throw te.create("duplicate-app",{appName:i})}const r=new W(i);for(const e of X.values())r.addComponent(e);const o=new ne(e,n,r);return Q.set(i,o),o}({apiKey:"AIzaSyCiMKO-BR2l0bWZ-GuBnzIWO3m9kAbHXOs",authDomain:"chatt-a75fe.firebaseapp.com",databaseURL:"https://chatt-a75fe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chatt-a75fe",storageBucket:"chatt-a75fe.appspot.com",messagingSenderId:"1051874606572",appId:"1:1051874606572:web:5b366f4582fd120b6054c9"}));class Vr{constructor(e,t,n){this.id=e,this.name=t,this.message=n,this.displayMsg()}displayMsg(){const e=document.querySelector("div"),t=document.createElement("section");e.append(t),t.id=this.id;const n=document.createElement("h4");n.innerText=this.name,t.append(n);const i=document.createElement("p");i.innerText=this.message,t.append(i);const s=document.createElement("button");s.innerText="X",t.append(s),s.addEventListener("click",(()=>{const e=document.querySelector("#userName");if(console.log("this name",this.name,"this name value",e.value),this.name==e.value){Ar(Rr(zr,"/chatt/"+this.id))}}))}clearDOM(){document.querySelector(`#${this.id}`).remove()}}console.log(zr);const $r=Rr(zr,"/chatt");let Yr=[];Wr($r,(e=>{const t=e.val();console.log(t);for(const e of Yr)e.clearDOM();Yr=[];for(const e in t)Yr.push(new Vr(e,t[e].name,t[e].message));!function(){const e=document.getElementById("test");e.scrollTop=e.scrollHeight}(),function(){const e=Object.values(t),n=Object.keys(t)[0];console.log(e);for(let t=0;t<e.length;t++);if(e.length>25){console.log("över 25",e.length);Ar(Rr(zr,"/chatt/"+n))}else console.log(e.length)}()})),document.querySelector("#send").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#userName"),n=document.querySelector("#userMessage");console.log(t.value,n.value);const i={name:t.value,message:n.value},s=function(e,t){e=R(e),Ys("push",e._path),Bs("push",t,e._path,!0);const n=ir(e._repo),i=wn(n),s=Dr(e,i),r=Dr(e,i);let o;return o=null!=t?Mr(r,t).then((()=>r)):Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}($r).key,r={};r[s]=i,Or($r,r)}));
//# sourceMappingURL=index.8071cf37.js.map
