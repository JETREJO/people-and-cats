(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{8424:(t,e,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return s(7998)}])},7998:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var i=s(4848);s(885);var r=s(4880),n=s(9757),a=s(6261),o=s(6500),u=class extends o.Q{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,a=e.queryHash??(0,r.F$)(i,e),o=this.get(a);return o||(o=new n.X({cache:this,queryKey:i,queryHash:a,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(o)),o}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){a.j.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,r.MK)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,r.MK)(t,e)):e}notify(t){a.j.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){a.j.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){a.j.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},h=s(1692),c=s(8904),l=class extends h.k{#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){this.#i=(0,c.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let e="pending"===this.state.status,s=!this.#i.canStart();try{if(!e){this.#r({type:"pending",variables:t,isPaused:s}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#r({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#i.start();return await this.#s.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#r({type:"success",data:i}),i}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#r({type:"error",error:e})}}finally{this.#s.runNext(this)}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),a.j.batch(()=>{this.#e.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}},d=class extends o.Q{constructor(t={}){super(),this.config=t,this.#n=new Map,this.#a=Date.now()}#n;#a;build(t,e,s){let i=new l({mutationCache:this,mutationId:++this.#a,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){let e=f(t),s=this.#n.get(e)??[];s.push(t),this.#n.set(e,s),this.notify({type:"added",mutation:t})}remove(t){let e=f(t);if(this.#n.has(e)){let s=this.#n.get(e)?.filter(e=>e!==t);s&&(0===s.length?this.#n.delete(e):this.#n.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#n.get(f(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#n.get(f(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){a.j.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#n.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,r.nJ)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,r.nJ)(t,e))}notify(t){a.j.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return a.j.batch(()=>Promise.all(t.map(t=>t.continue().catch(r.lQ))))}};function f(t){return t.options.scope?.id??String(t.mutationId)}var p=s(9658),y=s(6035),m=s(8959),v=class{#o;#s;#u;#h;#c;#l;#d;#f;constructor(t={}){this.#o=t.queryCache||new u,this.#s=t.mutationCache||new d,this.#u=t.defaultOptions||{},this.#h=new Map,this.#c=new Map,this.#l=0}mount(){this.#l++,1===this.#l&&(this.#d=p.m.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#f=y.t.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#l--,0===this.#l&&(this.#d?.(),this.#d=void 0,this.#f?.(),this.#f=void 0)}isFetching(t){return this.#o.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#s.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),s=this.#o.build(this,e),i=s.state.data;return void 0===i?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime((0,r.d2)(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return this.#o.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),n=this.#o.get(i.queryHash),a=n?.state.data,o=(0,r.Zw)(e,a);if(void 0!==o)return this.#o.build(this,i).setData(o,{...s,manual:!0})}setQueriesData(t,e,s){return a.j.batch(()=>this.#o.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state}removeQueries(t){let e=this.#o;a.j.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#o,i={type:"active",...t};return a.j.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t,e={}){let s={revert:!0,...e};return Promise.all(a.j.batch(()=>this.#o.findAll(t).map(t=>t.cancel(s)))).then(r.lQ).catch(r.lQ)}invalidateQueries(t,e={}){return a.j.batch(()=>{if(this.#o.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")return Promise.resolve();let s={...t,type:t?.refetchType??t?.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t,e={}){let s={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(a.j.batch(()=>this.#o.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(r.lQ)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(r.lQ)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#o.build(this,e);return s.isStaleByTime((0,r.d2)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(r.lQ).catch(r.lQ)}fetchInfiniteQuery(t){return t.behavior=(0,m.PL)(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(r.lQ).catch(r.lQ)}ensureInfiniteQueryData(t){return t.behavior=(0,m.PL)(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return y.t.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#s}getDefaultOptions(){return this.#u}setDefaultOptions(t){this.#u=t}setQueryDefaults(t,e){this.#h.set((0,r.EN)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#h.values()],s={};return e.forEach(e=>{(0,r.Cp)(t,e.queryKey)&&Object.assign(s,e.defaultOptions)}),s}setMutationDefaults(t,e){this.#c.set((0,r.EN)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#c.values()],s={};return e.forEach(e=>{(0,r.Cp)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#u.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,r.F$)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===r.hT&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#u.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#o.clear(),this.#s.clear()}},b=s(7665);let g=new v;function C(t){let{Component:e,pageProps:s}=t;return(0,i.jsx)(b.Ht,{client:g,children:(0,i.jsx)(e,{...s})})}},885:()=>{},9658:(t,e,s)=>{"use strict";s.d(e,{m:()=>n});var i=s(6500),r=s(4880),n=new class extends i.Q{#p;#y;#m;constructor(){super(),this.#m=t=>{if(!r.S$&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#y||this.setEventListener(this.#m)}onUnsubscribe(){this.hasListeners()||(this.#y?.(),this.#y=void 0)}setEventListener(t){this.#m=t,this.#y?.(),this.#y=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#p!==t&&(this.#p=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#p?this.#p:globalThis.document?.visibilityState!=="hidden"}}},8959:(t,e,s)=>{"use strict";s.d(e,{PL:()=>r,RQ:()=>u,rB:()=>o});var i=s(4880);function r(t){return{onFetch:(e,s)=>{let r=e.options,o=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],h=e.state.data?.pageParams||[],c={pages:[],pageParams:[]},l=0,d=async()=>{let s=!1,d=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},f=(0,i.ZM)(e.options,e.fetchOptions),p=async(t,r,n)=>{if(s)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:r,direction:n?"backward":"forward",meta:e.options.meta};d(a);let o=await f(a),{maxPages:u}=e.options,h=n?i.ZZ:i.y9;return{pages:h(t.pages,o,u),pageParams:h(t.pageParams,r,u)}};if(o&&u.length){let t="backward"===o,e={pages:u,pageParams:h},s=(t?a:n)(r,e);c=await p(e,s,t)}else{let e=t??u.length;do{let t=0===l?h[0]??r.initialPageParam:n(r,c);if(l>0&&null==t)break;c=await p(c,t),l++}while(l<e)}return c};e.options.persister?e.fetchFn=()=>e.options.persister?.(d,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=d}}}function n(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}function a(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}function o(t,e){return!!e&&null!=n(t,e)}function u(t,e){return!!e&&!!t.getPreviousPageParam&&null!=a(t,e)}},6261:(t,e,s)=>{"use strict";s.d(e,{j:()=>i});var i=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}()},6035:(t,e,s)=>{"use strict";s.d(e,{t:()=>n});var i=s(6500),r=s(4880),n=new class extends i.Q{#v=!0;#y;#m;constructor(){super(),this.#m=t=>{if(!r.S$&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#y||this.setEventListener(this.#m)}onUnsubscribe(){this.hasListeners()||(this.#y?.(),this.#y=void 0)}setEventListener(t){this.#m=t,this.#y?.(),this.#y=t(this.setOnline.bind(this))}setOnline(t){this.#v!==t&&(this.#v=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#v}}},9757:(t,e,s)=>{"use strict";s.d(e,{X:()=>o,k:()=>u});var i=s(4880),r=s(6261),n=s(8904),a=s(1692),o=class extends a.k{#b;#g;#C;#i;#u;#w;constructor(t){super(),this.#w=!1,this.#u=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#C=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#b=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#b,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(t){this.options={...this.#u,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#C.remove(this)}setData(t,e){let s=(0,i.pl)(this.state.data,t,this.options);return this.#r({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#r({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#i?.promise;return this.#i?.cancel(t),e?e.then(i.lQ).catch(i.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#b)}isActive(){return this.observers.some(t=>!1!==(0,i.Eh)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===i.hT||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.j3)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#C.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#i&&(this.#w?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#C.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#r({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,r=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#w=!0,s.signal)})},a={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,i.ZM)(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return(r(s),this.#w=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};r(a),this.options.behavior?.onFetch(a,this),this.#g=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#r({type:"fetch",meta:a.fetchOptions?.meta});let o=t=>{(0,n.wm)(t)&&t.silent||this.#r({type:"error",error:t}),(0,n.wm)(t)||(this.#C.config.onError?.(t,this),this.#C.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#i=(0,n.II)({initialPromise:e?.initialPromise,fn:a.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){o(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){o(t);return}this.#C.config.onSuccess?.(t,this),this.#C.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:o,onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}),this.#i.start()}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,n.wm)(s)&&s.revert&&this.#g)return{...this.#g,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),r.j.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#C.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,n.v_)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},1692:(t,e,s)=>{"use strict";s.d(e,{k:()=>r});var i=s(4880),r=class{#O;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.gn)(this.gcTime)&&(this.#O=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.S$?1/0:3e5))}clearGcTimeout(){this.#O&&(clearTimeout(this.#O),this.#O=void 0)}}},8904:(t,e,s)=>{"use strict";s.d(e,{II:()=>l,v_:()=>u,wm:()=>c});var i=s(9658),r=s(6035),n=s(4658),a=s(4880);function o(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||r.t.isOnline()}var h=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function c(t){return t instanceof h}function l(t){let e,s=!1,c=0,l=!1,d=(0,n.T)(),f=()=>i.m.isFocused()&&("always"===t.networkMode||r.t.isOnline())&&t.canRun(),p=()=>u(t.networkMode)&&t.canRun(),y=s=>{l||(l=!0,t.onSuccess?.(s),e?.(),d.resolve(s))},m=s=>{l||(l=!0,t.onError?.(s),e?.(),d.reject(s))},v=()=>new Promise(s=>{e=t=>{(l||f())&&s(t)},t.onPause?.()}).then(()=>{e=void 0,l||t.onContinue?.()}),b=()=>{let e;if(l)return;let i=0===c?t.initialPromise:void 0;try{e=i??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(l)return;let i=t.retry??(a.S$?0:3),r=t.retryDelay??o,n="function"==typeof r?r(c,e):r,u=!0===i||"number"==typeof i&&c<i||"function"==typeof i&&i(c,e);if(s||!u){m(e);return}c++,t.onFail?.(c,e),(0,a.yy)(n).then(()=>f()?void 0:v()).then(()=>{s?m(e):b()})})};return{promise:d,cancel:e=>{l||(m(new h(e)),t.abort?.())},continue:()=>(e?.(),d),cancelRetry:()=>{s=!0},continueRetry:()=>{s=!1},canStart:p,start:()=>(p()?b():v().then(b),d)}}},6500:(t,e,s)=>{"use strict";s.d(e,{Q:()=>i});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},4658:(t,e,s)=>{"use strict";function i(){let t,e;let s=new Promise((s,i)=>{t=s,e=i});function i(t){Object.assign(s,t),delete s.resolve,delete s.reject}return s.status="pending",s.catch(()=>{}),s.resolve=e=>{i({status:"fulfilled",value:e}),t(e)},s.reject=t=>{i({status:"rejected",reason:t}),e(t)},s}s.d(e,{T:()=>i})},4880:(t,e,s)=>{"use strict";s.d(e,{Cp:()=>p,EN:()=>f,Eh:()=>h,F$:()=>d,MK:()=>c,S$:()=>i,ZM:()=>P,ZZ:()=>O,Zw:()=>n,d2:()=>u,f8:()=>y,gn:()=>a,hT:()=>q,j3:()=>o,lQ:()=>r,nJ:()=>l,pl:()=>C,y9:()=>w,yy:()=>g});var i="undefined"==typeof window||"Deno"in globalThis;function r(){}function n(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){return"function"==typeof t?t(e):t}function h(t,e){return"function"==typeof t?t(e):t}function c(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==d(a,e.options))return!1}else if(!p(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function l(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(f(e.options.mutationKey)!==f(n))return!1}else if(!p(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function d(t,e){return(e?.queryKeyHashFn||f)(t)}function f(t){return JSON.stringify(t,(t,e)=>v(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!p(t[s],e[s]))}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function m(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function v(t){if(!b(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(b(s)&&s.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return new Promise(e=>{setTimeout(e,t)})}function C(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?function t(e,s){if(e===s)return e;let i=m(e)&&m(s);if(i||v(e)&&v(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),o=a.length,u=i?[]:{},h=0;for(let n=0;n<o;n++){let o=i?n:a[n];(!i&&r.includes(o)||i)&&void 0===e[o]&&void 0===s[o]?(u[o]=void 0,h++):(u[o]=t(e[o],s[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return n===o&&h===n?e:u}return s}(t,e):e}function w(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function O(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var q=Symbol();function P(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==q?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}},7665:(t,e,s)=>{"use strict";s.d(e,{Ht:()=>o,jE:()=>a});var i=s(6540),r=s(4848),n=i.createContext(void 0),a=t=>{let e=i.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},o=({client:t,children:e})=>(i.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,r.jsx)(n.Provider,{value:t,children:e}))}},t=>{var e=e=>t(t.s=e);t.O(0,[593,792],()=>(e(8424),e(8440))),_N_E=t.O()}]);