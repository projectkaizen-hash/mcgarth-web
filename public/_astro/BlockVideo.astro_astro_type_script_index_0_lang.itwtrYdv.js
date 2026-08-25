const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/BlockVideo.DH9yE1O5.js","_astro/componentManager.NVvah-7B.js","_astro/index.BSdFiPHn.js"])))=>i.map(i=>d[i]);
import{_ as zc}from"./preload-helper.CLcXU_4U.js";import{f as Xc,T as le,g as F,w as Jc,o as E,P as oe,Z as ga,a as Un,F as al,j as Ka,r as jc,b as eh,H as dd,x as ud,R as P,I as th,O as rl}from"./index.io_hk0AA.js";const b={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},L={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},cd={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},hd=Object.entries(cd),s=hd.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),ih={USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Ft=hd.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...ih});Object.entries(Ft).reduce((t,[e,i])=>{const a=s[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const ah=Object.entries(s).reduce((t,[e,i])=>{const a=Ft[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),Ye={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},fi={DISABLED:"disabled",SHOWING:"showing"},nl={MOUSE:"mouse",TOUCH:"touch"},be={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},tt={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},rh={FULLSCREEN:"fullscreen"};function nh(t){return t?.map(oh).join(" ")}function sh(t){return t?.split(/\s+/).map(lh)}function oh(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function lh(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function dh(t){return t?.map(ch).join(" ")}function uh(t){return t?.split(/\s+/).map(hh)}function ch(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function hh(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function mh(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Js(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function md(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const pd=t=>new Promise(e=>setTimeout(e,t)),sl=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ph=(t,e)=>{const i=t===1?sl[e].singular:sl[e].plural;return`${t} ${i}`},_a=t=>{if(!Js(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((l,u)=>l&&ph(l,u)).filter(l=>l).join(", ")}${i?" remaining":""}`};function Pt(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const o=Math.floor(e/60%60),l=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||l>0?n+":":"",r=((n||o>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}const vd={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."},vh={en:vd},Eh=()=>{var t;return((t=globalThis.navigator)==null?void 0:t.language.split("-")[0])||"en"},g=(t,e={})=>{var i;return(((i=vh[Eh()])==null?void 0:i[t])||vd[t]).replace(/\{(\w+)\}/g,(r,n)=>e[n]!==void 0?String(e[n]):`{${n}}`)};class Ed{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class bd extends Ed{}let ol=class extends bd{constructor(){super(...arguments),this.role=null}};class bh{observe(){}unobserve(){}disconnect(){}}const fd={createElement:function(){return new Ca.HTMLElement},createElementNS:function(){return new Ca.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Ca={ResizeObserver:bh,document:fd,Node:bd,Element:ol,HTMLElement:class extends ol{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Ca.DocumentFragment}},DocumentFragment:class extends Ed{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}}},gd=typeof window>"u"||typeof window.customElements>"u",_d=Object.keys(Ca).every(t=>t in globalThis),d=gd&&!_d?Ca:globalThis,A=gd&&!_d?fd:globalThis.document,ll=new WeakMap,js=t=>{let e=ll.get(t);return e||ll.set(t,e=new Set),e},Ad=new d.ResizeObserver(t=>{for(const e of t)for(const i of js(e.target))i(e)});function Ii(t,e){js(t).add(e),Ad.observe(t)}function Si(t,e){const i=js(t);i.delete(e),i.size||Ad.unobserve(t)}function fh(t){const e={};for(const i of t)e[i.name]=i.value;return e}function Ae(t){var e;return(e=Xn(t))!=null?e:Li(t,"media-controller")}function Xn(t){var e;const{MEDIA_CONTROLLER:i}=L,a=t.getAttribute(i);if(a)return(e=kn(t))==null?void 0:e.getElementById(a)}const yd=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},gh=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Td=(t,e)=>gh(t,e)[0],rt=(t,e)=>!t||!e?!1:t?.contains(e)?!0:rt(t,e.getRootNode().host),Li=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Li(t.getRootNode().host,e)};function eo(t=document){var e;const i=t?.activeElement;return i?(e=eo(i.shadowRoot))!=null?e:i:null}function kn(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function kd(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function _h(t,e,i,a){const r=$n(i,a),n=$n(i,{x:t,y:e}),o=$n(a,{x:t,y:e});return n>r||o>r?n>o?1:0:n/r}function $n(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Q(t,e){const i=Ah(t,a=>a===e);return i||Id(t,e)}function Ah(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of n??[])if(e(o.selectorText))return o}}function Id(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function $(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function G(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}$(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function w(t,e){return t.hasAttribute(e)}function M(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}w(t,e)!=i&&t.toggleAttribute(e,i)}function B(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function W(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;B(t,e,void 0)!==a&&t.setAttribute(e,a)}var Sd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ot=(t,e,i)=>(Sd(t,e,"read from private field"),i?i.call(t):e.get(t)),yh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Va=(t,e,i,a)=>(Sd(t,e,"write to private field"),e.set(t,i),i),ne;const Cd=A.createElement("template");Cd.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class Th extends d.HTMLElement{constructor(e={}){if(super(),yh(this,ne,void 0),!this.shadowRoot){const i=this.attachShadow({mode:"open"}),a=Cd.content.cloneNode(!0);this.nativeEl=a;let r=e.slotTemplate;r||(r=A.createElement("template"),r.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(r.content.cloneNode(!0)),i.appendChild(a)}}static get observedAttributes(){return[L.MEDIA_CONTROLLER,s.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,o,l,u;e===L.MEDIA_CONTROLLER&&(i&&((n=(r=ot(this,ne))==null?void 0:r.unassociateElement)==null||n.call(r,this),Va(this,ne,null)),a&&this.isConnected&&(Va(this,ne,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=ot(this,ne))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Va(this,ne,kh(this)),this.getAttribute(L.MEDIA_CONTROLLER)&&((i=(e=ot(this,ne))==null?void 0:e.associateElement)==null||i.call(e,this)),(a=ot(this,ne))==null||a.addEventListener("pointerdown",this),(r=ot(this,ne))==null||r.addEventListener("click",this)}disconnectedCallback(){var e,i,a,r;this.getAttribute(L.MEDIA_CONTROLLER)&&((i=(e=ot(this,ne))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=ot(this,ne))==null||a.removeEventListener("pointerdown",this),(r=ot(this,ne))==null||r.removeEventListener("click",this),Va(this,ne,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:o}=e,{left:l,top:u,width:c,height:f}=this.getBoundingClientRect(),v=n-l,m=o-u;if(v<0||m<0||v>c||m>f||c===0&&f===0)return;const{pointerType:p=this._pointerType}=e;if(this._pointerType=void 0,p===nl.TOUCH){this.handleTap(e);return}else if(p===nl.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return w(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?b.MEDIA_PLAY_REQUEST:b.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(i,{composed:!0,bubbles:!0}))}}ne=new WeakMap;function kh(t){var e;const i=t.getAttribute(L.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Li(t,"media-controller")}d.customElements.get("media-gesture-receiver")||d.customElements.define("media-gesture-receiver",Th);var to=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ve=(t,e,i)=>(to(t,e,"read from private field"),i?i.call(t):e.get(t)),he=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Tt=(t,e,i,a)=>(to(t,e,"write to private field"),e.set(t,i),i),_e=(t,e,i)=>(to(t,e,"access private method"),i),rn,zt,wa,vi,dr,Jn,wd,aa,ur,jn,Md,es,Rd,Ma,In,Sn,io,Ci,Ra;const y={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},Ld=A.createElement("template");Ld.innerHTML=`
  <style>
    
    :host([${s.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${y.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${y.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${y.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${y.AUDIO}])[${y.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${y.AUDIO}])[${y.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${y.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${y.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${y.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${y.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${y.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: var(--media-control-transition-in, opacity 0.25s);
    }

    
    :host([${y.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_AIRPLAYING}]):not([${s.MEDIA_IS_CASTING}]):not([${y.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${y.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: var(--media-control-transition-out, opacity 1s);
    }

    :host([${y.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${y.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${y.AUDIO}])[${s.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;const Ih=Object.values(s),Sh="sm:384 md:576 lg:768 xl:960";function Ch(t){Dd(t.target,t.contentRect.width)}function Dd(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(y.BREAKPOINTS))!=null?i:Sh,r=wh(a),n=Mh(r,e);let o=!1;if(Object.keys(r).forEach(l=>{if(n.includes(l)){t.hasAttribute(`breakpoint${l}`)||(t.setAttribute(`breakpoint${l}`,""),o=!0);return}t.hasAttribute(`breakpoint${l}`)&&(t.removeAttribute(`breakpoint${l}`),o=!0)}),o){const l=new CustomEvent(Ft.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(l)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(Ft.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function wh(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function Mh(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class xd extends d.HTMLElement{constructor(){super(),he(this,Jn),he(this,jn),he(this,es),he(this,Ma),he(this,Sn),he(this,Ci),he(this,rn,0),he(this,zt,null),he(this,wa,null),he(this,vi,void 0),this.breakpointsComputed=!1,he(this,dr,new MutationObserver(_e(this,Jn,wd).bind(this))),he(this,aa,!1),he(this,ur,i=>{ve(this,aa)||(setTimeout(()=>{Ch(i),Tt(this,aa,!1)},0),Tt(this,aa,!0))}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ld.content.cloneNode(!0)));const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){ve(this,zt)&&this.mediaUnsetCallback(ve(this,zt));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[y.AUTOHIDE,y.GESTURES_DISABLED].concat(Ih).filter(e=>![s.MEDIA_RENDITION_LIST,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_CHAPTERS_CUES,s.MEDIA_WIDTH,s.MEDIA_HEIGHT,s.MEDIA_ERROR,s.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==y.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Tt(this,zt,e),e.localName.includes("-")&&await d.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ve(this,dr).observe(this,{childList:!0,subtree:!0}),Ii(this,ve(this,ur));const i=this.getAttribute(y.AUDIO)!=null,a=g(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(y.USER_INACTIVE,""),Dd(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=d.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;ve(this,dr).disconnect(),Si(this,ve(this,ur)),this.media&&this.mediaUnsetCallback(this.media),(e=d.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){Tt(this,zt,null)}handleEvent(e){switch(e.type){case"pointerdown":Tt(this,rn,e.timeStamp);break;case"pointermove":_e(this,jn,Md).call(this,e);break;case"pointerup":_e(this,es,Rd).call(this,e);break;case"mouseleave":_e(this,Ma,In).call(this);break;case"mouseup":this.removeAttribute(y.KEYBOARD_CONTROL);break;case"keyup":_e(this,Ci,Ra).call(this),this.setAttribute(y.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Tt(this,vi,isNaN(i)?0:i)}get autohide(){return(ve(this,vi)===void 0?2:ve(this,vi)).toString()}get breakpoints(){return B(this,y.BREAKPOINTS)}set breakpoints(e){W(this,y.BREAKPOINTS,e)}get audio(){return w(this,y.AUDIO)}set audio(e){M(this,y.AUDIO,e)}get gesturesDisabled(){return w(this,y.GESTURES_DISABLED)}set gesturesDisabled(e){M(this,y.GESTURES_DISABLED,e)}get keyboardControl(){return w(this,y.KEYBOARD_CONTROL)}set keyboardControl(e){M(this,y.KEYBOARD_CONTROL,e)}get noAutohide(){return w(this,y.NO_AUTOHIDE)}set noAutohide(e){M(this,y.NO_AUTOHIDE,e)}get userInteractive(){return w(this,y.USER_INACTIVE)}set userInteractive(e){M(this,y.USER_INACTIVE,e)}}rn=new WeakMap;zt=new WeakMap;wa=new WeakMap;vi=new WeakMap;dr=new WeakMap;Jn=new WeakSet;wd=function(t){const e=this.media;for(const i of t){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!e)this.mediaUnsetCallback(r);else{let o=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(r)}}if(e)for(const r of i.addedNodes)r===e&&this.handleMediaUpdated(e)}};aa=new WeakMap;ur=new WeakMap;jn=new WeakSet;Md=function(t){t.pointerType!=="mouse"&&t.timeStamp-ve(this,rn)<250||(_e(this,Sn,io).call(this),clearTimeout(ve(this,wa)),[this,this.media].includes(t.target)&&_e(this,Ci,Ra).call(this))};es=new WeakSet;Rd=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(y.USER_INACTIVE);[this,this.media].includes(t.target)&&e?_e(this,Ma,In).call(this):_e(this,Ci,Ra).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&_e(this,Ci,Ra).call(this)};Ma=new WeakSet;In=function(){if(ve(this,vi)<0||this.hasAttribute(y.USER_INACTIVE))return;this.setAttribute(y.USER_INACTIVE,"");const t=new d.CustomEvent(Ft.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Sn=new WeakSet;io=function(){if(!this.hasAttribute(y.USER_INACTIVE))return;this.removeAttribute(y.USER_INACTIVE);const t=new d.CustomEvent(Ft.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Ci=new WeakSet;Ra=function(){_e(this,Sn,io).call(this),clearTimeout(ve(this,wa));const t=parseInt(this.autohide);t<0||Tt(this,wa,setTimeout(()=>{_e(this,Ma,In).call(this)},t*1e3))};d.customElements.get("media-container")||d.customElements.define("media-container",xd);var Od=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ee=(t,e,i)=>(Od(t,e,"read from private field"),i?i.call(t):e.get(t)),Yi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ga=(t,e,i,a)=>(Od(t,e,"write to private field"),e.set(t,i),i),Xt,Jt,nn,Lt,je,ut;class Cn{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Yi(this,je),Yi(this,Xt,void 0),Yi(this,Jt,void 0),Yi(this,nn,void 0),Yi(this,Lt,new Set),Ga(this,Xt,e),Ga(this,Jt,i),Ga(this,nn,new Set(a))}[Symbol.iterator](){return ee(this,je,ut).values()}get length(){return ee(this,je,ut).size}get value(){var e;return(e=[...ee(this,je,ut)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Ga(this,Lt,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...ee(this,je,ut)][e]}values(){return ee(this,je,ut).values()}forEach(e,i){ee(this,je,ut).forEach(e,i)}add(...e){var i,a;e.forEach(r=>ee(this,Lt).add(r)),!(this.value===""&&!((i=ee(this,Xt))!=null&&i.hasAttribute(`${ee(this,Jt)}`)))&&((a=ee(this,Xt))==null||a.setAttribute(`${ee(this,Jt)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>ee(this,Lt).delete(a)),(i=ee(this,Xt))==null||i.setAttribute(`${ee(this,Jt)}`,`${this.value}`)}contains(e){return ee(this,je,ut).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Xt=new WeakMap;Jt=new WeakMap;nn=new WeakMap;Lt=new WeakMap;je=new WeakSet;ut=function(){return ee(this,Lt).size?ee(this,Lt):ee(this,nn)};const Rh=(t="")=>t.split(/\s+/),Nd=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?Ye.CAPTIONS:Ye.SUBTITLES,language:i,label:r}},wn=(t="",e={})=>Rh(t).map(i=>{const a=Nd(i);return{...e,...a}}),Pd=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Nd(e):e):typeof t=="string"?wn(t):[t]:[],ts=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,La=(t=[])=>Array.prototype.map.call(t,ts).join(" "),Lh=(t,e)=>i=>i[t]===e,Ud=t=>{const e=Object.entries(t).map(([i,a])=>Lh(i,a));return i=>e.every(a=>a(i))},Aa=(t,e=[],i=[])=>{const a=Pd(i).map(Ud),r=n=>a.some(o=>o(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},Mn=(t,e=()=>!0)=>{if(!t?.textTracks)return[];const i=typeof e=="function"?e:Ud(e);return Array.from(t.textTracks).filter(i)},$d=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(s.MEDIA_SUBTITLES_SHOWING)},Dh=t=>{var e;const{media:i,fullscreenElement:a}=t,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()},dl="exitFullscreen"in A?"exitFullscreen":"webkitExitFullscreen"in A?"webkitExitFullscreen":"webkitCancelFullScreen"in A?"webkitCancelFullScreen":void 0,xh=t=>{var e;const{documentElement:i}=t;if(dl){const a=(e=i?.[dl])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},ra="fullscreenElement"in A?"fullscreenElement":"webkitFullscreenElement"in A?"webkitFullscreenElement":void 0,Oh=t=>{const{documentElement:e,media:i}=t,a=e?.[ra];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===rh.FULLSCREEN?i:a},Nh=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=Oh(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let o=n.shadowRoot;if(!(ra in o))return rt(n,r);for(;o?.[ra];){if(o[ra]===r)return!0;o=(e=o[ra])==null?void 0:e.shadowRoot}}return!1},Ph="fullscreenEnabled"in A?"fullscreenEnabled":"webkitFullscreenEnabled"in A?"webkitFullscreenEnabled":void 0,Uh=t=>{const{documentElement:e,media:i}=t;return!!e?.[Ph]||i&&"webkitSupportsFullscreen"in i};let Ya;const ao=()=>{var t,e;return Ya||(Ya=(e=(t=A)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Ya)},$h=async(t=ao())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([Bh(t,i.signal),Wh(t,e)]);return i.abort(),a},Bh=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),Wh=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await pd(10)}return t.volume!==e},Hh=/.*Version\/.*Safari\/.*/.test(d.navigator.userAgent),Bd=(t=ao())=>d.matchMedia("(display-mode: standalone)").matches&&Hh?!1:typeof t?.requestPictureInPicture=="function",Wd=(t=ao())=>Uh({documentElement:A,media:t}),Fh=Wd(),Kh=Bd(),Vh=!!d.WebKitPlaybackTargetAvailabilityEvent,Gh=!!d.chrome,sn=t=>Mn(t.media,e=>[Ye.SUBTITLES,Ye.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Hd=t=>Mn(t.media,e=>e.mode===fi.SHOWING&&[Ye.SUBTITLES,Ye.CAPTIONS].includes(e.kind)),Fd=(t,e)=>{const i=sn(t),a=Hd(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)Aa(fi.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:o}=t;if(!o?.noSubtitlesLangPref){const f=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),v=f?[f,...globalThis.navigator.languages]:globalThis.navigator.languages,m=i.filter(p=>v.some(C=>p.language.toLowerCase().startsWith(C.split("-")[0]))).sort((p,C)=>{const k=v.findIndex(D=>p.language.toLowerCase().startsWith(D.split("-")[0])),T=v.findIndex(D=>C.language.toLowerCase().startsWith(D.split("-")[0]));return k-T});m[0]&&(n=m[0])}const{language:l,label:u,kind:c}=n;Aa(fi.DISABLED,i,a),Aa(fi.SHOWING,i,[{language:l,label:u,kind:c}])}}},ro=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Yh(t,e):Object.entries(t).every(([i,a])=>i in e&&ro(a,e[i])),Yh=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>ro(r,e[n])):!0},qh=Object.values(tt);let on;const Zh=$h().then(t=>(on=t,on)),Qh=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof d.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=d.customElements.get(i);a&&e instanceof a||(await d.customElements.whenDefined(i),d.customElements.upgrade(e))}))},na={mediaError:{get(t,e){const{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if(e?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){const{media:i}=e;if(i){try{d.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}i.muted=t}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=d.localStorage.getItem("media-chrome-pref-muted")==="true";na.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){const{media:i}=e;if(i){try{t==null?d.localStorage.removeItem("media-chrome-pref-volume"):d.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=d.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;na.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Js(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[tt.LIVE,tt.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(qh.includes(r))return r===tt.UNKNOWN?a:r;const n=e.duration;return n===1/0?tt.LIVE:Number.isFinite(n)?tt.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=na.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===tt.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(na.mediaStreamType.get(t)===tt.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return sn(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Hd(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const o=l=>{var u;!n.defaultSubtitles||l&&![Ye.CAPTIONS,Ye.SUBTITLES].includes((u=l?.track)==null?void 0:u.kind)||Fd(e,!0)};return(i=r.textTracks)==null||i.addEventListener("addtrack",o),(a=r.textTracks)==null||a.addEventListener("removetrack",o),o(),()=>{var l,u;(l=r.textTracks)==null||l.removeEventListener("addtrack",o),(u=r.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Mn(i,{kind:Ye.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:o})=>({text:r,startTime:n,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",t),n?.addEventListener("load",t),()=>{r?.removeEventListener("load",t),n?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?rt(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!A.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else A.pictureInPictureElement&&A.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r?.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Nh(t)},set(t,e){t?Dh(e):xh(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&d.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Fh||!Wd(e))return be.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!Kh||!Bd(e))return be.UNSUPPORTED}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(on===!1||e?.volume==null)return be.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{on==null&&Zh.then(e=>t(e?void 0:be.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!Gh||!((i=a?.remote)!=null&&i.state))return be.UNSUPPORTED;if(!(e==null||e==="available"))return be.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!Vh)return be.UNSUPPORTED;if(e?.availability==="not-available")return be.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!i?.videoRenditions)return be.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return be.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!a?.audioTracks)return be.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return be.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},zh={[b.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:o}=e,l=i??void 0;let u,c;if(o&&l!=null){const[p]=Mn(o,{kind:Ye.METADATA,label:"thumbnails"}),C=Array.prototype.find.call((a=p?.cues)!=null?a:[],(k,T,D)=>T===0?k.endTime>l:T===D.length-1?k.startTime<=l:k.startTime<=l&&k.endTime>l);if(C){const k=/'^(?:[a-z]+:)?\/\//i.test(C.text)||(r=o?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,T=new URL(C.text,k);c=new URLSearchParams(T.hash).get("#xywh").split(",").map(ie=>+ie),u=T.href}}const f=t.mediaDuration.get(e);let m=(n=t.mediaChaptersCues.get(e).find((p,C,k)=>C===k.length-1&&f===p.endTime?p.startTime<=l&&p.endTime>=l:p.startTime<=l&&p.endTime>l))==null?void 0:n.text;return i!=null&&m==null&&(m=""),{mediaPreviewTime:l,mediaPreviewImage:u,mediaPreviewCoords:c,mediaPreviewChapter:m}},[b.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[b.MEDIA_PLAY_REQUEST](t,e){var i;const a="mediaPaused";if(t.mediaStreamType.get(e)===tt.LIVE){const o=!(t.mediaTargetLiveWindow.get(e)>0),l=(i=t.mediaSeekable.get(e))==null?void 0:i[1];o&&l&&t.mediaCurrentTime.set(l,e)}t[a].set(!1,e)},[b.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[b.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[b.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[b.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[b.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[b.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i;const a="mediaCurrentTime",r=(i=t.mediaSeekable.get(e))==null?void 0:i[1];Number.isNaN(Number(r))||t[a].set(r,e)},[b.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=sn(e),o=Pd(i),l=(a=o[0])==null?void 0:a.language;l&&!r.noSubtitlesLangPref&&d.localStorage.setItem("media-chrome-pref-subtitles-lang",l),Aa(fi.SHOWING,n,o)},[b.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=sn(e),r=i??[];Aa(fi.DISABLED,a,r)},[b.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Fd(e,i)},[b.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[b.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[b.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[b.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[b.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e){const i="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[i].set(!0,e)},[b.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[b.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[b.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[b.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},Xh=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=na,requestMap:r=zh,options:n={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const l=[],u={options:{...n}};let c=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const f=k=>{k!=null&&(ro(k,c)||(c=Object.freeze({...c,...k}),l.forEach(T=>T(c))))},v=()=>{const k=Object.entries(a).reduce((T,[D,{get:ie}])=>(T[D]=ie(u),T),{});f(k)},m={};let p;const C=async(k,T)=>{var D,ie,de,st,Ze,Oi,Ni,Pi,Ui,$i,Bi,Wi,Hi,Fi,Ki,Vi;const Fa=!!p;if(p={...u,...p??{},...k},Fa)return;await Qh(...Object.values(k));const Qe=l.length>0&&T===0&&o,Po=u.media!==p.media,Uo=((D=u.media)==null?void 0:D.textTracks)!==((ie=p.media)==null?void 0:ie.textTracks),$o=((de=u.media)==null?void 0:de.videoRenditions)!==((st=p.media)==null?void 0:st.videoRenditions),Bo=((Ze=u.media)==null?void 0:Ze.audioTracks)!==((Oi=p.media)==null?void 0:Oi.audioTracks),Wo=((Ni=u.media)==null?void 0:Ni.remote)!==((Pi=p.media)==null?void 0:Pi.remote),Ho=u.documentElement!==p.documentElement,Fo=!!u.media&&(Po||Qe),Ko=!!((Ui=u.media)!=null&&Ui.textTracks)&&(Uo||Qe),Vo=!!(($i=u.media)!=null&&$i.videoRenditions)&&($o||Qe),Go=!!((Bi=u.media)!=null&&Bi.audioTracks)&&(Bo||Qe),Yo=!!((Wi=u.media)!=null&&Wi.remote)&&(Wo||Qe),qo=!!u.documentElement&&(Ho||Qe),Zo=Fo||Ko||Vo||Go||Yo||qo,Vt=l.length===0&&T===1&&o,Qo=!!p.media&&(Po||Vt),zo=!!((Hi=p.media)!=null&&Hi.textTracks)&&(Uo||Vt),Xo=!!((Fi=p.media)!=null&&Fi.videoRenditions)&&($o||Vt),Jo=!!((Ki=p.media)!=null&&Ki.audioTracks)&&(Bo||Vt),jo=!!((Vi=p.media)!=null&&Vi.remote)&&(Wo||Vt),el=!!p.documentElement&&(Ho||Vt),tl=Qo||zo||Xo||Jo||jo||el;if(!(Zo||tl)){Object.entries(p).forEach(([O,Gi])=>{u[O]=Gi}),v(),p=void 0;return}Object.entries(a).forEach(([O,{get:Gi,mediaEvents:Kc=[],textTracksEvents:Vc=[],videoRenditionsEvents:Gc=[],audioTracksEvents:Yc=[],remoteEvents:qc=[],rootEvents:Zc=[],stateOwnersUpdateHandlers:Qc=[]}])=>{m[O]||(m[O]={});const ue=Y=>{const ce=Gi(u,Y);f({[O]:ce})};let X;X=m[O].mediaEvents,Kc.forEach(Y=>{X&&Fo&&(u.media.removeEventListener(Y,X),m[O].mediaEvents=void 0),Qo&&(p.media.addEventListener(Y,ue),m[O].mediaEvents=ue)}),X=m[O].textTracksEvents,Vc.forEach(Y=>{var ce,ye;X&&Ko&&((ce=u.media.textTracks)==null||ce.removeEventListener(Y,X),m[O].textTracksEvents=void 0),zo&&((ye=p.media.textTracks)==null||ye.addEventListener(Y,ue),m[O].textTracksEvents=ue)}),X=m[O].videoRenditionsEvents,Gc.forEach(Y=>{var ce,ye;X&&Vo&&((ce=u.media.videoRenditions)==null||ce.removeEventListener(Y,X),m[O].videoRenditionsEvents=void 0),Xo&&((ye=p.media.videoRenditions)==null||ye.addEventListener(Y,ue),m[O].videoRenditionsEvents=ue)}),X=m[O].audioTracksEvents,Yc.forEach(Y=>{var ce,ye;X&&Go&&((ce=u.media.audioTracks)==null||ce.removeEventListener(Y,X),m[O].audioTracksEvents=void 0),Jo&&((ye=p.media.audioTracks)==null||ye.addEventListener(Y,ue),m[O].audioTracksEvents=ue)}),X=m[O].remoteEvents,qc.forEach(Y=>{var ce,ye;X&&Yo&&((ce=u.media.remote)==null||ce.removeEventListener(Y,X),m[O].remoteEvents=void 0),jo&&((ye=p.media.remote)==null||ye.addEventListener(Y,ue),m[O].remoteEvents=ue)}),X=m[O].rootEvents,Zc.forEach(Y=>{X&&qo&&(u.documentElement.removeEventListener(Y,X),m[O].rootEvents=void 0),el&&(p.documentElement.addEventListener(Y,ue),m[O].rootEvents=ue)});const il=m[O].stateOwnersUpdateHandlers;Qc.forEach(Y=>{il&&Zo&&il(),tl&&(m[O].stateOwnersUpdateHandlers=Y(ue,p))})}),Object.entries(p).forEach(([O,Gi])=>{u[O]=Gi}),v(),p=void 0};return C({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(k){const{type:T,detail:D}=k;if(r[T]&&c.mediaErrorCode==null){f(r[T](a,u,k));return}T==="mediaelementchangerequest"?C({media:D}):T==="fullscreenelementchangerequest"?C({fullscreenElement:D}):T==="documentelementchangerequest"?C({documentElement:D}):T==="optionschangerequest"&&Object.entries(D??{}).forEach(([ie,de])=>{u.options[ie]=de})},getState(){return c},subscribe(k){return C({},l.length+1),l.push(k),k(c),()=>{const T=l.indexOf(k);T>=0&&(C({},l.length-1),l.splice(T,1))}}}};var no=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},S=(t,e,i)=>(no(t,e,"read from private field"),i?i.call(t):e.get(t)),ze=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},lt=(t,e,i,a)=>(no(t,e,"write to private field"),e.set(t,i),i),Et=(t,e,i)=>(no(t,e,"access private method"),i),Dt,sa,H,oa,De,cr,hr,is,wi,Da,mr,as;const Kd=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],ul=10,_={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class Vd extends xd{constructor(){super(),ze(this,hr),ze(this,wi),ze(this,mr),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ze(this,Dt,new Cn(this,_.HOTKEYS)),ze(this,sa,void 0),ze(this,H,void 0),ze(this,oa,void 0),ze(this,De,void 0),ze(this,cr,i=>{var a;(a=S(this,H))==null||a.dispatch(i)}),this.associateElement(this);let e={};lt(this,oa,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),o=new d.CustomEvent(ah[n],{composed:!0,detail:r});this.dispatchEvent(o)}),e=i}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(_.NO_HOTKEYS,_.HOTKEYS,_.DEFAULT_STREAM_TYPE,_.DEFAULT_SUBTITLES,_.DEFAULT_DURATION)}get mediaStore(){return S(this,H)}set mediaStore(e){var i,a;if(S(this,H)&&((i=S(this,De))==null||i.call(this),lt(this,De,void 0)),lt(this,H,e),!S(this,H)&&!this.hasAttribute(_.NO_DEFAULT_STORE)){Et(this,hr,is).call(this);return}lt(this,De,(a=S(this,H))==null?void 0:a.subscribe(S(this,oa)))}get fullscreenElement(){var e;return(e=S(this,sa))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(_.FULLSCREEN_ELEMENT)&&this.removeAttribute(_.FULLSCREEN_ELEMENT),lt(this,sa,e),(i=S(this,H))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return w(this,_.DEFAULT_SUBTITLES)}set defaultSubtitles(e){M(this,_.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return B(this,_.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){W(this,_.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return $(this,_.DEFAULT_DURATION)}set defaultDuration(e){G(this,_.DEFAULT_DURATION,e)}get noHotkeys(){return w(this,_.NO_HOTKEYS)}set noHotkeys(e){M(this,_.NO_HOTKEYS,e)}get keysUsed(){return B(this,_.KEYS_USED)}set keysUsed(e){W(this,_.KEYS_USED,e)}get liveEdgeOffset(){return $(this,_.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){G(this,_.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return w(this,_.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){M(this,_.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return w(this,_.NO_VOLUME_PREF)}set noVolumePref(e){M(this,_.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return w(this,_.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){M(this,_.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return w(this,_.NO_DEFAULT_STORE)}set noDefaultStore(e){M(this,_.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,i,a){var r,n,o,l,u,c;if(super.attributeChangedCallback(e,i,a),e===_.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(_.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===_.HOTKEYS)S(this,Dt).value=a;else if(e===_.DEFAULT_SUBTITLES&&a!==i)(r=S(this,H))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(_.DEFAULT_SUBTITLES)}});else if(e===_.DEFAULT_STREAM_TYPE)(o=S(this,H))==null||o.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(_.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===_.LIVE_EDGE_OFFSET)(l=S(this,H))==null||l.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(_.LIVE_EDGE_OFFSET)?+this.getAttribute(_.LIVE_EDGE_OFFSET):void 0}});else if(e===_.FULLSCREEN_ELEMENT){const f=a?(u=this.getRootNode())==null?void 0:u.getElementById(a):void 0;lt(this,sa,f),(c=S(this,H))==null||c.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,i;!S(this,H)&&!this.hasAttribute(_.NO_DEFAULT_STORE)&&Et(this,hr,is).call(this),(e=S(this,H))==null||e.dispatch({type:"documentelementchangerequest",detail:A}),super.connectedCallback(),S(this,H)&&!S(this,De)&&lt(this,De,(i=S(this,H))==null?void 0:i.subscribe(S(this,oa))),this.enableHotkeys()}disconnectedCallback(){var e,i,a,r;(e=super.disconnectedCallback)==null||e.call(this),S(this,H)&&((i=S(this,H))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=S(this,H))==null||a.dispatch({type:b.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),S(this,De)&&((r=S(this,De))==null||r.call(this),lt(this,De,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=S(this,H))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=S(this,H))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){ml(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=am(e,a,r);Object.values(b).forEach(o=>{e.addEventListener(o,S(this,cr))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(b).forEach(r=>{e.removeEventListener(r,S(this,cr))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),S(this,H)&&Object.entries(S(this,H).getState()).forEach(([r,n])=>{ml([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Et(this,mr,as))}disableHotkeys(){this.removeEventListener("keydown",Et(this,mr,as)),this.removeEventListener("keyup",Et(this,wi,Da))}get hotkeys(){return B(this,_.HOTKEYS)}set hotkeys(e){W(this,_.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,o;const l=e.target;if(((r=(a=(i=l.getAttribute(_.KEYS_USED))==null?void 0:i.split(" "))!=null?a:l?.keysUsed)!=null?r:[]).map(m=>m==="Space"?" ":m).filter(Boolean).includes(e.key))return;let c,f,v;if(!S(this,Dt).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&S(this,Dt).contains("nospace")))switch(e.key){case" ":case"k":c=S(this,H).getState().mediaPaused?b.MEDIA_PLAY_REQUEST:b.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new d.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"m":c=this.mediaStore.getState().mediaVolumeLevel==="off"?b.MEDIA_UNMUTE_REQUEST:b.MEDIA_MUTE_REQUEST,this.dispatchEvent(new d.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"f":c=this.mediaStore.getState().mediaIsFullscreen?b.MEDIA_EXIT_FULLSCREEN_REQUEST:b.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new d.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new d.CustomEvent(b.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const m=this.hasAttribute(_.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(_.KEYBOARD_BACKWARD_SEEK_OFFSET):ul;f=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-m,0),v=new d.CustomEvent(b.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(v);break}case"ArrowRight":{const m=this.hasAttribute(_.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(_.KEYBOARD_FORWARD_SEEK_OFFSET):ul;f=Math.max(((o=this.mediaStore.getState().mediaCurrentTime)!=null?o:0)+m,0),v=new d.CustomEvent(b.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(v);break}}}}Dt=new WeakMap;sa=new WeakMap;H=new WeakMap;oa=new WeakMap;De=new WeakMap;cr=new WeakMap;hr=new WeakSet;is=function(){var t;this.mediaStore=Xh({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(_.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(_.DEFAULT_DURATION)?+this.getAttribute(_.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(_.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(_.LIVE_EDGE_OFFSET)?+this.getAttribute(_.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(_.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(_.NO_SUBTITLES_LANG_PREF)}})};wi=new WeakSet;Da=function(t){const{key:e}=t;if(!Kd.includes(e)){this.removeEventListener("keyup",Et(this,wi,Da));return}this.keyboardShortcutHandler(t)};mr=new WeakSet;as=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!Kd.includes(a)){this.removeEventListener("keyup",Et(this,wi,Da));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(S(this,Dt).contains(`no${a.toLowerCase()}`)||a===" "&&S(this,Dt).contains("nospace"))&&t.preventDefault(),this.addEventListener("keyup",Et(this,wi,Da),{once:!0})};const Jh=Object.values(s),jh=Object.values(cd),Gd=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(d.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const o=(r=(a=(i=t?.getAttribute)==null?void 0:i.call(t,L.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(l=>Jh.includes(l)):[]},em=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&d.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof d.customElements.get(t.nodeName.toLowerCase()))&&d.customElements.upgrade(t),jh.some(a=>a in t)},rs=t=>em(t)||!!Gd(t).length,cl=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},hl={[s.MEDIA_SUBTITLES_LIST]:La,[s.MEDIA_SUBTITLES_SHOWING]:La,[s.MEDIA_SEEKABLE]:cl,[s.MEDIA_BUFFERED]:t=>t?.map(cl).join(" "),[s.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[s.MEDIA_RENDITION_LIST]:nh,[s.MEDIA_AUDIO_TRACK_LIST]:dh},tm=async(t,e,i)=>{var a,r;if(t.isConnected||await pd(0),typeof i=="boolean"||i==null)return M(t,e,i);if(typeof i=="number")return G(t,e,i);if(typeof i=="string")return W(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=hl[e])==null?void 0:a.call(hl,i))!=null?r:i;return t.setAttribute(e,n)},im=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},kt=(t,e)=>{if(im(t))return;const i=(r,n)=>{var o,l;rs(r)&&n(r);const{children:u=[]}=r??{},c=(l=(o=r?.shadowRoot)==null?void 0:o.children)!=null?l:[];[...u,...c].forEach(v=>kt(v,n))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!rs(t)){d.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},ml=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=Gd(a),n=e.toLowerCase();r.includes(n)&&tm(a,n,i)})},am=(t,e,i)=>{kt(t,e);const a=f=>{var v;const m=(v=f?.composedPath()[0])!=null?v:f.target;e(m)},r=f=>{var v;const m=(v=f?.composedPath()[0])!=null?v:f.target;i(m)};t.addEventListener(b.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(b.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=f=>{f.forEach(v=>{const{addedNodes:m=[],removedNodes:p=[],type:C,target:k,attributeName:T}=v;C==="childList"?(Array.prototype.forEach.call(m,D=>kt(D,e)),Array.prototype.forEach.call(p,D=>kt(D,i))):C==="attributes"&&T===L.MEDIA_CHROME_ATTRIBUTES&&(rs(k)?e(k):i(k))})};let o=[];const l=f=>{const v=f.target;v.name!=="media"&&(o.forEach(m=>kt(m,i)),o=[...v.assignedElements({flatten:!0})],o.forEach(m=>kt(m,e)))};t.addEventListener("slotchange",l);const u=new MutationObserver(n);return u.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{kt(t,i),t.removeEventListener("slotchange",l),u.disconnect(),t.removeEventListener(b.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(b.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};d.customElements.get("media-controller")||d.customElements.define("media-controller",Vd);var rm=Vd,so=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},q=(t,e,i)=>(so(t,e,"read from private field"),i?i.call(t):e.get(t)),Gt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qa=(t,e,i,a)=>(so(t,e,"write to private field"),e.set(t,i),i),nm=(t,e,i)=>(so(t,e,"access private method"),i),xe,Ei,bt,jt,pr,ns,Yd;const dt={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"},qd=A.createElement("template");qd.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class Ee extends d.HTMLElement{constructor(e={}){var i;if(super(),Gt(this,ns),Gt(this,xe,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",Gt(this,Ei,a=>{this.preventClick||this.handleClick(a),setTimeout(q(this,bt),0)}),Gt(this,bt,()=>{var a,r;(r=(a=this.tooltipEl)==null?void 0:a.updateXOffset)==null||r.call(a)}),Gt(this,jt,a=>{const{key:r}=a;if(!this.keysUsed.includes(r)){this.removeEventListener("keyup",q(this,jt));return}this.preventClick||this.handleClick(a)}),Gt(this,pr,a=>{const{metaKey:r,altKey:n,key:o}=a;if(r||n||!this.keysUsed.includes(o)){this.removeEventListener("keyup",q(this,jt));return}this.addEventListener("keyup",q(this,jt),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});const a=qd.content.cloneNode(!0);this.nativeEl=a;let r=e.slotTemplate;r||(r=A.createElement("template"),r.innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(a.querySelector('slot[name="tooltip-content"]').innerHTML=(i=e.tooltipContent)!=null?i:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(r.content.cloneNode(!0)),this.shadowRoot.appendChild(a)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",dt.TOOLTIP_PLACEMENT,L.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",q(this,Ei)),this.addEventListener("keydown",q(this,pr)),this.tabIndex=0}disable(){this.removeEventListener("click",q(this,Ei)),this.removeEventListener("keydown",q(this,pr)),this.removeEventListener("keyup",q(this,jt)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,o,l,u;e===L.MEDIA_CONTROLLER?(i&&((n=(r=q(this,xe))==null?void 0:r.unassociateElement)==null||n.call(r,this),qa(this,xe,null)),a&&this.isConnected&&(qa(this,xe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=q(this,xe))==null?void 0:l.associateElement)==null||u.call(l,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===dt.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i&&(this.tooltipEl.placement=a),q(this,bt).call(this)}connectedCallback(){var e,i,a;const{style:r}=Q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(L.MEDIA_CONTROLLER);n&&(qa(this,xe,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=q(this,xe))==null?void 0:i.associateElement)==null||a.call(i,this)),d.customElements.whenDefined("media-tooltip").then(()=>nm(this,ns,Yd).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=q(this,xe))==null?void 0:e.unassociateElement)==null||i.call(e,this),qa(this,xe,null),this.removeEventListener("mouseenter",q(this,bt)),this.removeEventListener("focus",q(this,bt)),this.removeEventListener("click",q(this,Ei))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return B(this,dt.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){W(this,dt.TOOLTIP_PLACEMENT,e)}get mediaController(){return B(this,L.MEDIA_CONTROLLER)}set mediaController(e){W(this,L.MEDIA_CONTROLLER,e)}get disabled(){return w(this,dt.DISABLED)}set disabled(e){M(this,dt.DISABLED,e)}get noTooltip(){return w(this,dt.NO_TOOLTIP)}set noTooltip(e){M(this,dt.NO_TOOLTIP,e)}handleClick(e){}}xe=new WeakMap;Ei=new WeakMap;bt=new WeakMap;jt=new WeakMap;pr=new WeakMap;ns=new WeakSet;Yd=function(){this.addEventListener("mouseenter",q(this,bt)),this.addEventListener("focus",q(this,bt)),this.addEventListener("click",q(this,Ei));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",Ee);const pl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,Zd=A.createElement("template");Zd.innerHTML=`
  <style>
    :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${pl}</slot>
    <slot name="exit">${pl}</slot>
  </slot>
`;const sm=`
  <slot name="tooltip-enter">${g("start airplay")}</slot>
  <slot name="tooltip-exit">${g("stop airplay")}</slot>
`,vl=t=>{const e=t.mediaIsAirplaying?g("stop airplay"):g("start airplay");t.setAttribute("aria-label",e)};class om extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_AIRPLAYING,s.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Zd,tooltipContent:sm,...e})}connectedCallback(){super.connectedCallback(),vl(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_IS_AIRPLAYING&&vl(this)}get mediaIsAirplaying(){return w(this,s.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){M(this,s.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return B(this,s.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){W(this,s.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new d.CustomEvent(b.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}d.customElements.get("media-airplay-button")||d.customElements.define("media-airplay-button",om);const lm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,Qd=A.createElement("template");Qd.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${lm}</slot>
    <slot name="off">${dm}</slot>
  </slot>
`;const um=`
  <slot name="tooltip-enable">${g("Enable captions")}</slot>
  <slot name="tooltip-disable">${g("Disable captions")}</slot>
`,El=t=>{t.setAttribute("aria-checked",$d(t).toString())};class cm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:Qd,tooltipContent:um,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",g("closed captions")),El(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_SUBTITLES_SHOWING&&El(this)}get mediaSubtitlesList(){return bl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){fl(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return bl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){fl(this,s.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new d.CustomEvent(b.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}const bl=(t,e)=>{const i=t.getAttribute(e);return i?wn(i):[]},fl=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=La(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-button")||d.customElements.define("media-captions-button",cm);const hm='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',mm='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',zd=A.createElement("template");zd.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${s.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${hm}</slot>
    <slot name="exit">${mm}</slot>
  </slot>
`;const pm=`
  <slot name="tooltip-enter">${g("Start casting")}</slot>
  <slot name="tooltip-exit">${g("Stop casting")}</slot>
`,gl=t=>{const e=t.mediaIsCasting?g("stop casting"):g("start casting");t.setAttribute("aria-label",e)};class vm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_CASTING,s.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:zd,tooltipContent:pm,...e})}connectedCallback(){super.connectedCallback(),gl(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_IS_CASTING&&gl(this)}get mediaIsCasting(){return w(this,s.MEDIA_IS_CASTING)}set mediaIsCasting(e){M(this,s.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return B(this,s.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){W(this,s.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?b.MEDIA_EXIT_CAST_REQUEST:b.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}d.customElements.get("media-cast-button")||d.customElements.define("media-cast-button",vm);var oo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ut=(t,e,i)=>(oo(t,e,"read from private field"),e.get(t)),Xe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},lo=(t,e,i,a)=>(oo(t,e,"write to private field"),e.set(t,i),i),gt=(t,e,i)=>(oo(t,e,"access private method"),i),ln,xa,Kt,vr,ss,os,Xd,ls,Jd,ds,jd,us,eu,cs,tu;function Em(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function bm(t){return`
    <slot id="content"></slot>
  `}const qi={OPEN:"open",ANCHOR:"anchor"};class Rn extends d.HTMLElement{constructor(){super(),Xe(this,vr),Xe(this,os),Xe(this,ls),Xe(this,ds),Xe(this,us),Xe(this,cs),Xe(this,ln,!1),Xe(this,xa,null),Xe(this,Kt,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[qi.OPEN,qi.ANCHOR]}get open(){return w(this,qi.OPEN)}set open(e){M(this,qi.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":gt(this,ds,jd).call(this,e);break;case"focusout":gt(this,us,eu).call(this,e);break;case"keydown":gt(this,cs,tu).call(this,e);break}}connectedCallback(){gt(this,vr,ss).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,i,a){gt(this,vr,ss).call(this),e===qi.OPEN&&a!==i&&(this.open?gt(this,os,Xd).call(this):gt(this,ls,Jd).call(this))}focus(){lo(this,xa,eo());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}ln=new WeakMap;xa=new WeakMap;Kt=new WeakMap;vr=new WeakSet;ss=function(){if(!Ut(this,ln)&&(lo(this,ln,!0),!this.shadowRoot)){this.attachShadow({mode:"open"});const t=fh(this.attributes);this.shadowRoot.innerHTML=`
        ${this.constructor.getTemplateHTML(t)}
      `,queueMicrotask(()=>{const{style:e}=Q(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};os=new WeakSet;Xd=function(){var t;(t=Ut(this,Kt))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};ls=new WeakSet;Jd=function(){var t;(t=Ut(this,Kt))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};ds=new WeakSet;jd=function(t){lo(this,Kt,t.relatedTarget),rt(this,t.relatedTarget)||(this.open=!this.open)};us=new WeakSet;eu=function(t){var e;rt(this,t.relatedTarget)||((e=Ut(this,xa))==null||e.focus(),Ut(this,Kt)&&Ut(this,Kt)!==t.relatedTarget&&this.open&&(this.open=!1))};cs=new WeakSet;tu=function(t){var e,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:c}=t;l||u||c||this.keysUsed.includes(o)&&(t.preventDefault(),t.stopPropagation(),o==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):o==="Escape"&&((n=Ut(this,xa))==null||n.focus(),this.open=!1))};Rn.getTemplateHTML=Em;Rn.getSlotTemplateHTML=bm;d.customElements.get("media-chrome-dialog")||d.customElements.define("media-chrome-dialog",Rn);var uo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},K=(t,e,i)=>(uo(t,e,"read from private field"),i?i.call(t):e.get(t)),te=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ct=(t,e,i,a)=>(uo(t,e,"write to private field"),e.set(t,i),i),ke=(t,e,i)=>(uo(t,e,"access private method"),i),Oe,Ln,Er,br,Ie,dn,fr,gr,_r,co,iu,Ar,hs,yr,ms,un,ho,ps,au,vs,ru,Es,nu,bs,su;const ou=A.createElement("template");ou.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb,
    ::slotted([slot=thumb]) {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      translate: -50%;
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    #thumb {
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      border: var(--media-range-thumb-border, none);
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <slot name="thumb">
        <div id="thumb" part="thumb"></div>
      </slot>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class mo extends d.HTMLElement{constructor(){super(),te(this,co),te(this,Ar),te(this,yr),te(this,un),te(this,ps),te(this,vs),te(this,Es),te(this,bs),te(this,Oe,void 0),te(this,Ln,void 0),te(this,Er,void 0),te(this,br,void 0),te(this,Ie,{}),te(this,dn,[]),te(this,fr,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Q(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),te(this,gr,()=>{const{style:e}=Q(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),te(this,_r,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ou.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),ct(this,Er,this.shadowRoot.querySelector("#startpoint")),ct(this,br,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",L.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,o,l,u;e===L.MEDIA_CONTROLLER?(i&&((n=(r=K(this,Oe))==null?void 0:r.unassociateElement)==null||n.call(r,this),ct(this,Oe,null)),a&&this.isConnected&&(ct(this,Oe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=K(this,Oe))==null?void 0:l.associateElement)==null||u.call(l,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),ke(this,Ar,hs).call(this)):(this.range.setAttribute(e,a),ke(this,yr,ms).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),K(this,Ie).pointer=Q(this.shadowRoot,"#pointer"),K(this,Ie).progress=Q(this.shadowRoot,"#progress"),K(this,Ie).thumb=Q(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),K(this,Ie).activeSegment=Q(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(L.MEDIA_CONTROLLER);n&&(ct(this,Oe,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=K(this,Oe))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",K(this,fr)),this.shadowRoot.addEventListener("focusout",K(this,gr)),ke(this,Ar,hs).call(this),Ii(this.container,K(this,_r))}disconnectedCallback(){var e,i;ke(this,yr,ms).call(this),(i=(e=K(this,Oe))==null?void 0:e.unassociateElement)==null||i.call(e,this),ct(this,Oe,null),this.shadowRoot.removeEventListener("focusin",K(this,fr)),this.shadowRoot.removeEventListener("focusout",K(this,gr)),Si(this.container,K(this,_r))}updatePointerBar(e){var i;(i=K(this,Ie).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=K(this,Ie).progress)==null||e.style.setProperty("width",`${a}%`),(i=K(this,Ie).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];ct(this,dn,[...a]);const r=a.pop();for(const[n,o]of a.entries()){const[l,u]=[n===0,n===a.length-1],c=l?"calc(var(--segments-gap) / -1)":`${o*100}%`,v=`calc(${((u?r:a[n+1])-o)*100}%${l||u?"":" - var(--segments-gap)"})`,m=A.createElementNS("http://www.w3.org/2000/svg","rect"),p=Q(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);p.style.setProperty("x",c),p.style.setProperty("width",v),i.append(m)}}getPointerRatio(e){const i=_h(e.clientX,e.clientY,K(this,Er).getBoundingClientRect(),K(this,br).getBoundingClientRect());return Math.max(0,Math.min(1,i))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":ke(this,bs,su).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":ke(this,ps,au).call(this,e);break;case"pointerdown":ke(this,un,ho).call(this,e);break;case"pointerup":ke(this,vs,ru).call(this);break;case"pointerleave":ke(this,Es,nu).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Oe=new WeakMap;Ln=new WeakMap;Er=new WeakMap;br=new WeakMap;Ie=new WeakMap;dn=new WeakMap;fr=new WeakMap;gr=new WeakMap;_r=new WeakMap;co=new WeakSet;iu=function(t){const e=K(this,Ie).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${K(this,dn).findIndex((n,o,l)=>{const u=l[o+1];return u!=null&&i>=n&&i<=u})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Ar=new WeakSet;hs=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};yr=new WeakSet;ms=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=d.window)==null||t.removeEventListener("pointerup",this),(e=d.window)==null||e.removeEventListener("pointermove",this)};un=new WeakSet;ho=function(t){var e;ct(this,Ln,t.composedPath().includes(this.range)),(e=d.window)==null||e.addEventListener("pointerup",this)};ps=new WeakSet;au=function(t){var e;t.pointerType!=="mouse"&&ke(this,un,ho).call(this,t),this.addEventListener("pointerleave",this),(e=d.window)==null||e.addEventListener("pointermove",this)};vs=new WeakSet;ru=function(){var t;(t=d.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Es=new WeakSet;nu=function(){var t,e;this.removeEventListener("pointerleave",this),(t=d.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=K(this,Ie).activeSegment)==null||e.style.removeProperty("transform")};bs=new WeakSet;su=function(t){this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),ke(this,co,iu).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!K(this,Ln))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};d.customElements.get("media-chrome-range")||d.customElements.define("media-chrome-range",mo);var lu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Za=(t,e,i)=>(lu(t,e,"read from private field"),i?i.call(t):e.get(t)),fm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Qa=(t,e,i,a)=>(lu(t,e,"write to private field"),e.set(t,i),i),Ne;const du=A.createElement("template");du.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class gm extends d.HTMLElement{constructor(){super(),fm(this,Ne,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(du.content.cloneNode(!0)))}static get observedAttributes(){return[L.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,o,l,u;e===L.MEDIA_CONTROLLER&&(i&&((n=(r=Za(this,Ne))==null?void 0:r.unassociateElement)==null||n.call(r,this),Qa(this,Ne,null)),a&&this.isConnected&&(Qa(this,Ne,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=Za(this,Ne))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(L.MEDIA_CONTROLLER);r&&(Qa(this,Ne,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Za(this,Ne))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Za(this,Ne))==null?void 0:e.unassociateElement)==null||i.call(e,this),Qa(this,Ne,null)}}Ne=new WeakMap;d.customElements.get("media-control-bar")||d.customElements.define("media-control-bar",gm);var uu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},za=(t,e,i)=>(uu(t,e,"read from private field"),i?i.call(t):e.get(t)),_m=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Xa=(t,e,i,a)=>(uu(t,e,"write to private field"),e.set(t,i),i),Pe;const cu=A.createElement("template");cu.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class Ha extends d.HTMLElement{constructor(){super(),_m(this,Pe,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(cu.content.cloneNode(!0)))}static get observedAttributes(){return[L.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,o,l,u;e===L.MEDIA_CONTROLLER&&(i&&((n=(r=za(this,Pe))==null?void 0:r.unassociateElement)==null||n.call(r,this),Xa(this,Pe,null)),a&&this.isConnected&&(Xa(this,Pe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=za(this,Pe))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a;const{style:r}=Q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(L.MEDIA_CONTROLLER);n&&(Xa(this,Pe,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=za(this,Pe))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=za(this,Pe))==null?void 0:e.unassociateElement)==null||i.call(e,this),Xa(this,Pe,null)}}Pe=new WeakMap;d.customElements.get("media-text-display")||d.customElements.define("media-text-display",Ha);var hu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_l=(t,e,i)=>(hu(t,e,"read from private field"),i?i.call(t):e.get(t)),Am=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ym=(t,e,i,a)=>(hu(t,e,"write to private field"),e.set(t,i),i),la;class Tm extends Ha{constructor(){super(),Am(this,la,void 0),ym(this,la,this.shadowRoot.querySelector("slot")),_l(this,la).textContent=Pt(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===s.MEDIA_DURATION&&(_l(this,la).textContent=Pt(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return $(this,s.MEDIA_DURATION)}set mediaDuration(e){G(this,s.MEDIA_DURATION,e)}}la=new WeakMap;d.customElements.get("media-duration-display")||d.customElements.define("media-duration-display",Tm);const km={2:g("Network Error"),3:g("Decode Error"),4:g("Source Not Supported"),5:g("Encryption Error")},Im={2:g("A network error caused the media download to fail."),3:g("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:g("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:g("The media is encrypted and there are no keys to decrypt it.")},mu=t=>{var e,i;return t.code===1?null:{title:(e=km[t.code])!=null?e:`Error ${t.code}`,message:(i=Im[t.code])!=null?i:t.message}};var pu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sm=(t,e,i)=>(pu(t,e,"read from private field"),i?i.call(t):e.get(t)),Cm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},wm=(t,e,i,a)=>(pu(t,e,"write to private field"),e.set(t,i),i),Tr;function Mm(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${vu({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function Rm(t){return t.code&&mu(t)!==null}function vu(t){var e;const{title:i,message:a}=(e=mu(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const Al=[s.MEDIA_ERROR_CODE,s.MEDIA_ERROR_MESSAGE];class Dn extends Rn{constructor(){super(...arguments),Cm(this,Tr,null)}static get observedAttributes(){return[...super.observedAttributes,...Al]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!Al.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=Rm(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return Sm(this,Tr)}set mediaError(e){wm(this,Tr,e)}get mediaErrorCode(){return $(this,"mediaerrorcode")}set mediaErrorCode(e){G(this,"mediaerrorcode",e)}get mediaErrorMessage(){return B(this,"mediaerrormessage")}set mediaErrorMessage(e){W(this,"mediaerrormessage",e)}}Tr=new WeakMap;Dn.getSlotTemplateHTML=Mm;Dn.formatErrorMessage=vu;d.customElements.get("media-error-dialog")||d.customElements.define("media-error-dialog",Dn);var Eu=Dn;const Lm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Dm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,bu=A.createElement("template");bu.innerHTML=`
  <style>
    :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${Lm}</slot>
    <slot name="exit">${Dm}</slot>
  </slot>
`;const xm=`
  <slot name="tooltip-enter">${g("Enter fullscreen mode")}</slot>
  <slot name="tooltip-exit">${g("Exit fullscreen mode")}</slot>
`,yl=t=>{const e=t.mediaIsFullscreen?g("exit fullscreen mode"):g("enter fullscreen mode");t.setAttribute("aria-label",e)};class Om extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_FULLSCREEN,s.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:bu,tooltipContent:xm,...e})}connectedCallback(){super.connectedCallback(),yl(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_IS_FULLSCREEN&&yl(this)}get mediaFullscreenUnavailable(){return B(this,s.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){W(this,s.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return w(this,s.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){M(this,s.MEDIA_IS_FULLSCREEN,e)}handleClick(){const e=this.mediaIsFullscreen?b.MEDIA_EXIT_FULLSCREEN_REQUEST:b.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}d.customElements.get("media-fullscreen-button")||d.customElements.define("media-fullscreen-button",Om);const{MEDIA_TIME_IS_LIVE:kr,MEDIA_PAUSED:ya}=s,{MEDIA_SEEK_TO_LIVE_REQUEST:Nm,MEDIA_PLAY_REQUEST:Pm}=b,Um='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>',fu=A.createElement("template");fu.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${kr}]:not([${ya}])) slot[name=indicator] > *,
  :host([${kr}]:not([${ya}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${kr}]:not([${ya}])) {
    cursor: not-allowed;
  }

  slot[name=text]{
    text-transform: uppercase;
  }

  </style>

  <slot name="indicator">${Um}</slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">${g("live")}</slot>
`;const Tl=t=>{const e=t.mediaPaused||!t.mediaTimeIsLive,i=g(e?"seek to live":"playing live");t.setAttribute("aria-label",i),e?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class $m extends Ee{static get observedAttributes(){return[...super.observedAttributes,ya,kr]}constructor(e={}){super({slotTemplate:fu,...e})}connectedCallback(){Tl(this),super.connectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Tl(this)}get mediaPaused(){return w(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return w(this,s.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){M(this,s.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new d.CustomEvent(Nm,{composed:!0,bubbles:!0})),this.hasAttribute(ya)&&this.dispatchEvent(new d.CustomEvent(Pm,{composed:!0,bubbles:!0})))}}d.customElements.get("media-live-button")||d.customElements.define("media-live-button",$m);var gu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Zi=(t,e,i)=>(gu(t,e,"read from private field"),i?i.call(t):e.get(t)),kl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Qi=(t,e,i,a)=>(gu(t,e,"write to private field"),e.set(t,i),i),Ue,Ir;const Ja={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},_u=500,Au=A.createElement("template"),Bm=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;Au.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${_u}ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${Bm}</slot>
<div id="status" role="status" aria-live="polite">${g("media loading")}</div>
`;class Wm extends d.HTMLElement{constructor(){if(super(),kl(this,Ue,void 0),kl(this,Ir,_u),!this.shadowRoot){const e=this.attachShadow({mode:"open"}),i=Au.content.cloneNode(!0);e.appendChild(i)}}static get observedAttributes(){return[L.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,Ja.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,o,l,u;e===Ja.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===L.MEDIA_CONTROLLER&&(i&&((n=(r=Zi(this,Ue))==null?void 0:r.unassociateElement)==null||n.call(r,this),Qi(this,Ue,null)),a&&this.isConnected&&(Qi(this,Ue,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=Zi(this,Ue))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(L.MEDIA_CONTROLLER);r&&(Qi(this,Ue,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Zi(this,Ue))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Zi(this,Ue))==null?void 0:e.unassociateElement)==null||i.call(e,this),Qi(this,Ue,null)}get loadingDelay(){return Zi(this,Ir)}set loadingDelay(e){Qi(this,Ir,e);const{style:i}=Q(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return w(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return w(this,s.MEDIA_LOADING)}set mediaLoading(e){M(this,s.MEDIA_LOADING,e)}get mediaController(){return B(this,L.MEDIA_CONTROLLER)}set mediaController(e){W(this,L.MEDIA_CONTROLLER,e)}get noAutohide(){return w(this,Ja.NO_AUTOHIDE)}set noAutohide(e){M(this,Ja.NO_AUTOHIDE,e)}}Ue=new WeakMap;Ir=new WeakMap;d.customElements.get("media-loading-indicator")||d.customElements.define("media-loading-indicator",Wm);const{MEDIA_VOLUME_LEVEL:_t}=s,Hm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Il=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Fm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,yu=A.createElement("template");yu.innerHTML=`
  <style>
  
  :host(:not([${_t}])) slot[name=icon] slot:not([name=high]), 
  :host([${_t}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${_t}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${_t}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${_t}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${_t}=off])) slot[name=tooltip-unmute],
  :host([${_t}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${Hm}</slot>
    <slot name="low">${Il}</slot>
    <slot name="medium">${Il}</slot>
    <slot name="high">${Fm}</slot>
  </slot>
`;const Km=`
  <slot name="tooltip-mute">${g("Mute")}</slot>
  <slot name="tooltip-unmute">${g("Unmute")}</slot>
`,Sl=t=>{const e=t.mediaVolumeLevel==="off",i=g(e?"unmute":"mute");t.setAttribute("aria-label",i)};class Vm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:yu,tooltipContent:Km,...e})}connectedCallback(){Sl(this),super.connectedCallback()}attributeChangedCallback(e,i,a){e===s.MEDIA_VOLUME_LEVEL&&Sl(this),super.attributeChangedCallback(e,i,a)}get mediaVolumeLevel(){return B(this,s.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){W(this,s.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?b.MEDIA_UNMUTE_REQUEST:b.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}d.customElements.get("media-mute-button")||d.customElements.define("media-mute-button",Vm);const Cl=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,Tu=A.createElement("template");Tu.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${s.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${s.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${Cl}</slot>
    <slot name="exit">${Cl}</slot>
  </slot>
`;const Gm=`
  <slot name="tooltip-enter">${g("Enter picture in picture mode")}</slot>
  <slot name="tooltip-exit">${g("Exit picture in picture mode")}</slot>
`,wl=t=>{const e=t.mediaIsPip?g("exit picture in picture mode"):g("enter picture in picture mode");t.setAttribute("aria-label",e)};class Ym extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_PIP,s.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Tu,tooltipContent:Gm,...e})}connectedCallback(){wl(this),super.connectedCallback()}attributeChangedCallback(e,i,a){e===s.MEDIA_IS_PIP&&wl(this),super.attributeChangedCallback(e,i,a)}get mediaPipUnavailable(){return B(this,s.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){W(this,s.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return w(this,s.MEDIA_IS_PIP)}set mediaIsPip(e){M(this,s.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?b.MEDIA_EXIT_PIP_REQUEST:b.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}d.customElements.get("media-pip-button")||d.customElements.define("media-pip-button",Ym);var qm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ja=(t,e,i)=>(qm(t,e,"read from private field"),i?i.call(t):e.get(t)),Zm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ei;const Bn={RATES:"rates"},ku=[1,1.2,1.5,1.7,2],da=1,Iu=A.createElement("template");Iu.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class Qm extends Ee{constructor(e={}){super({slotTemplate:Iu,tooltipContent:g("Playback rate"),...e}),Zm(this,ei,new Cn(this,Bn.RATES,{defaultValue:ku})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${da}x`}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Bn.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Bn.RATES&&(ja(this,ei).value=a),e===s.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?da:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",g("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return ja(this,ei)}set rates(e){e?Array.isArray(e)&&(ja(this,ei).value=e.join(" ")):ja(this,ei).value=""}get mediaPlaybackRate(){return $(this,s.MEDIA_PLAYBACK_RATE,da)}set mediaPlaybackRate(e){G(this,s.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(this.rates.values(),o=>+o).sort((o,l)=>o-l),r=(i=(e=a.find(o=>o>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:da,n=new d.CustomEvent(b.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}ei=new WeakMap;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",Qm);const zm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Xm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,Su=A.createElement("template");Su.innerHTML=`
  <style>
    :host([${s.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${s.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${s.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${s.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${zm}</slot>
    <slot name="pause">${Xm}</slot>
  </slot>
`;const Jm=`
  <slot name="tooltip-play">${g("Play")}</slot>
  <slot name="tooltip-pause">${g("Pause")}</slot>
`,Ml=t=>{const e=t.mediaPaused?g("play"):g("pause");t.setAttribute("aria-label",e)};class jm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:Su,tooltipContent:Jm,...e})}connectedCallback(){Ml(this),super.connectedCallback()}attributeChangedCallback(e,i,a){e===s.MEDIA_PAUSED&&Ml(this),super.attributeChangedCallback(e,i,a)}get mediaPaused(){return w(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?b.MEDIA_PLAY_REQUEST:b.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}d.customElements.get("media-play-button")||d.customElements.define("media-play-button",jm);const Re={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},Cu=A.createElement("template");Cu.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;const ep=t=>{t.style.removeProperty("background-image")},tp=(t,e)=>{t.style["background-image"]=`url('${e}')`};class ip extends d.HTMLElement{static get observedAttributes(){return[Re.PLACEHOLDER_SRC,Re.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Cu.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Re.SRC&&(a==null?this.image.removeAttribute(Re.SRC):this.image.setAttribute(Re.SRC,a)),e===Re.PLACEHOLDER_SRC&&(a==null?ep(this.image):tp(this.image,a))}get placeholderSrc(){return B(this,Re.PLACEHOLDER_SRC)}set placeholderSrc(e){W(this,Re.SRC,e)}get src(){return B(this,Re.SRC)}set src(e){W(this,Re.SRC,e)}}d.customElements.get("media-poster-image")||d.customElements.define("media-poster-image",ip);var wu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ap=(t,e,i)=>(wu(t,e,"read from private field"),i?i.call(t):e.get(t)),rp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},np=(t,e,i,a)=>(wu(t,e,"write to private field"),e.set(t,i),i),Sr;class sp extends Ha{constructor(){super(),rp(this,Sr,void 0),np(this,Sr,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_PREVIEW_CHAPTER&&a!==i&&a!=null&&(ap(this,Sr).textContent=a,a!==""?this.setAttribute("aria-valuetext",`chapter: ${a}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return B(this,s.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){W(this,s.MEDIA_PREVIEW_CHAPTER,e)}}Sr=new WeakMap;d.customElements.get("media-preview-chapter-display")||d.customElements.define("media-preview-chapter-display",sp);var Mu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},er=(t,e,i)=>(Mu(t,e,"read from private field"),i?i.call(t):e.get(t)),op=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},tr=(t,e,i,a)=>(Mu(t,e,"write to private field"),e.set(t,i),i),$e;const Ru=A.createElement("template");Ru.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class lp extends d.HTMLElement{constructor(){super(),op(this,$e,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ru.content.cloneNode(!0)))}static get observedAttributes(){return[L.MEDIA_CONTROLLER,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(L.MEDIA_CONTROLLER);r&&(tr(this,$e,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=er(this,$e))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=er(this,$e))==null?void 0:e.unassociateElement)==null||i.call(e,this),tr(this,$e,null)}attributeChangedCallback(e,i,a){var r,n,o,l,u;[s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===L.MEDIA_CONTROLLER&&(i&&((n=(r=er(this,$e))==null?void 0:r.unassociateElement)==null||n.call(r,this),tr(this,$e,null)),a&&this.isConnected&&(tr(this,$e,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=er(this,$e))==null?void 0:l.associateElement)==null||u.call(l,this)))}get mediaPreviewImage(){return B(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){W(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(s.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(s.MEDIA_PREVIEW_COORDS);return}this.setAttribute(s.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,o]=e,l=i.split("#")[0],u=getComputedStyle(this),{maxWidth:c,maxHeight:f,minWidth:v,minHeight:m}=u,p=Math.min(parseInt(c)/n,parseInt(f)/o),C=Math.max(parseInt(v)/n,parseInt(m)/o),k=p<1,T=k?p:C>1?C:1,{style:D}=Q(this.shadowRoot,":host"),ie=Q(this.shadowRoot,"img").style,de=this.shadowRoot.querySelector("img"),st=k?"min":"max";D.setProperty(`${st}-width`,"initial","important"),D.setProperty(`${st}-height`,"initial","important"),D.width=`${n*T}px`,D.height=`${o*T}px`;const Ze=()=>{ie.width=`${this.imgWidth*T}px`,ie.height=`${this.imgHeight*T}px`,ie.display="block"};de.src!==l&&(de.onload=()=>{this.imgWidth=de.naturalWidth,this.imgHeight=de.naturalHeight,Ze()},de.src=l,Ze()),Ze(),ie.transform=`translate(-${a*T}px, -${r*T}px)`}}$e=new WeakMap;d.customElements.get("media-preview-thumbnail")||d.customElements.define("media-preview-thumbnail",lp);var Lu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Rl=(t,e,i)=>(Lu(t,e,"read from private field"),i?i.call(t):e.get(t)),dp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},up=(t,e,i,a)=>(Lu(t,e,"write to private field"),e.set(t,i),i),ua;class cp extends Ha{constructor(){super(),dp(this,ua,void 0),up(this,ua,this.shadowRoot.querySelector("slot")),Rl(this,ua).textContent=Pt(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_PREVIEW_TIME&&a!=null&&(Rl(this,ua).textContent=Pt(parseFloat(a)))}get mediaPreviewTime(){return $(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){G(this,s.MEDIA_PREVIEW_TIME,e)}}ua=new WeakMap;d.customElements.get("media-preview-time-display")||d.customElements.define("media-preview-time-display",cp);const Yt={SEEK_OFFSET:"seekoffset"},Cr=30,hp=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${Cr}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,Du=A.createElement("template");Du.innerHTML=`
  <slot name="icon">${hp}</slot>
`;const mp=0;class pp extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Yt.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:Du,tooltipContent:g("Seek backward"),...e})}connectedCallback(){this.seekOffset=$(this,Yt.SEEK_OFFSET,Cr),super.connectedCallback()}attributeChangedCallback(e,i,a){e===Yt.SEEK_OFFSET&&(this.seekOffset=$(this,Yt.SEEK_OFFSET,Cr)),super.attributeChangedCallback(e,i,a)}get seekOffset(){return $(this,Yt.SEEK_OFFSET,Cr)}set seekOffset(e){G(this,Yt.SEEK_OFFSET,e),this.setAttribute("aria-label",g("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),yd(Td(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return $(this,s.MEDIA_CURRENT_TIME,mp)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new d.CustomEvent(b.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}d.customElements.get("media-seek-backward-button")||d.customElements.define("media-seek-backward-button",pp);const qt={SEEK_OFFSET:"seekoffset"},wr=30,vp=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${wr}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,xu=A.createElement("template");xu.innerHTML=`
  <slot name="icon">${vp}</slot>
`;const Ep=0;class bp extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,qt.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:xu,tooltipContent:g("Seek forward"),...e})}connectedCallback(){this.seekOffset=$(this,qt.SEEK_OFFSET,wr),super.connectedCallback()}attributeChangedCallback(e,i,a){e===qt.SEEK_OFFSET&&(this.seekOffset=$(this,qt.SEEK_OFFSET,wr)),super.attributeChangedCallback(e,i,a)}get seekOffset(){return $(this,qt.SEEK_OFFSET,wr)}set seekOffset(e){G(this,qt.SEEK_OFFSET,e),this.setAttribute("aria-label",g("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),yd(Td(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return $(this,s.MEDIA_CURRENT_TIME,Ep)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new d.CustomEvent(b.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}d.customElements.get("media-seek-forward-button")||d.customElements.define("media-seek-forward-button",bp);var Ou=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Wn=(t,e,i)=>(Ou(t,e,"read from private field"),i?i.call(t):e.get(t)),fp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gp=(t,e,i,a)=>(Ou(t,e,"write to private field"),e.set(t,i),i),ti;const Ce={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Ll=[...Object.values(Ce),s.MEDIA_CURRENT_TIME,s.MEDIA_DURATION,s.MEDIA_SEEKABLE],Dl=["Enter"," "],_p="&nbsp;/&nbsp;",xl=(t,{timesSep:e=_p}={})=>{var i,a;const r=t.hasAttribute(Ce.REMAINING),n=t.hasAttribute(Ce.SHOW_DURATION),o=(i=t.mediaCurrentTime)!=null?i:0,[,l]=(a=t.mediaSeekable)!=null?a:[];let u=0;Number.isFinite(t.mediaDuration)?u=t.mediaDuration:Number.isFinite(l)&&(u=l);const c=Pt(r?0-(u-o):o);return n?`${c}${e}${Pt(u)}`:c},Ap="video not loaded, unknown time.",yp=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-valuetext",Ap);return}const n=t.hasAttribute(Ce.REMAINING),o=t.hasAttribute(Ce.SHOW_DURATION),l=_a(n?0-(r-i):i);if(!o){t.setAttribute("aria-valuetext",l);return}const u=_a(r),c=`${l} of ${u}`;t.setAttribute("aria-valuetext",c)};class Tp extends Ha{constructor(){super(),fp(this,ti,void 0),gp(this,ti,this.shadowRoot.querySelector("slot")),Wn(this,ti).innerHTML=`${xl(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Ll,"disabled"]}connectedCallback(){const{style:e}=Q(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",g("playback time"));const i=a=>{const{key:r}=a;if(!Dl.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:n,key:o}=a;if(r||n||!Dl.includes(o)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,a){Ll.includes(e)?this.update():e==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return w(this,Ce.REMAINING)}set remaining(e){M(this,Ce.REMAINING,e)}get showDuration(){return w(this,Ce.SHOW_DURATION)}set showDuration(e){M(this,Ce.SHOW_DURATION,e)}get noToggle(){return w(this,Ce.NO_TOGGLE)}set noToggle(e){M(this,Ce.NO_TOGGLE,e)}get mediaDuration(){return $(this,s.MEDIA_DURATION)}set mediaDuration(e){G(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return $(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}update(){const e=xl(this);yp(this),e!==Wn(this,ti).innerHTML&&(Wn(this,ti).innerHTML=e)}}ti=new WeakMap;d.customElements.get("media-time-display")||d.customElements.define("media-time-display",Tp);var Nu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},j=(t,e,i)=>(Nu(t,e,"read from private field"),e.get(t)),Le=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},me=(t,e,i,a)=>(Nu(t,e,"write to private field"),e.set(t,i),i),kp=(t,e,i,a)=>({set _(r){me(t,e,r)},get _(){return j(t,e)}}),ii,Mr,ai,ca,Rr,Lr,Dr,ri,It,xr;class Ip{constructor(e,i,a){Le(this,ii,void 0),Le(this,Mr,void 0),Le(this,ai,void 0),Le(this,ca,void 0),Le(this,Rr,void 0),Le(this,Lr,void 0),Le(this,Dr,void 0),Le(this,ri,void 0),Le(this,It,0),Le(this,xr,(r=performance.now())=>{me(this,It,requestAnimationFrame(j(this,xr))),me(this,ca,performance.now()-j(this,ai));const n=1e3/this.fps;if(j(this,ca)>n){me(this,ai,r-j(this,ca)%n);const o=1e3/((r-j(this,Mr))/++kp(this,Rr)._),l=(r-j(this,Lr))/1e3/this.duration;let u=j(this,Dr)+l*this.playbackRate;u-j(this,ii).valueAsNumber>0?me(this,ri,this.playbackRate/this.duration/o):(me(this,ri,.995*j(this,ri)),u=j(this,ii).valueAsNumber+j(this,ri)),this.callback(u)}}),me(this,ii,e),this.callback=i,this.fps=a}start(){j(this,It)===0&&(me(this,ai,performance.now()),me(this,Mr,j(this,ai)),me(this,Rr,0),j(this,xr).call(this))}stop(){j(this,It)!==0&&(cancelAnimationFrame(j(this,It)),me(this,It,0))}update({start:e,duration:i,playbackRate:a}){const r=e-j(this,ii).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(e),me(this,Dr,e),me(this,Lr,performance.now()),this.duration=i,this.playbackRate=a}}ii=new WeakMap;Mr=new WeakMap;ai=new WeakMap;ca=new WeakMap;Rr=new WeakMap;Lr=new WeakMap;Dr=new WeakMap;ri=new WeakMap;It=new WeakMap;xr=new WeakMap;var po=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},z=(t,e,i)=>(po(t,e,"read from private field"),i?i.call(t):e.get(t)),J=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Be=(t,e,i,a)=>(po(t,e,"write to private field"),e.set(t,i),i),re=(t,e,i)=>(po(t,e,"access private method"),i),ni,$t,cn,Ta,hn,Or,Oa,Na,si,oi,ha,vo,Pu,fs,mn,Eo,pn,bo,vn,fo,gs,Uu,Pa,En,_s,$u;const Sp="video not loaded, unknown time.",Cp=t=>{const e=t.range,i=_a(+Wu(t)),a=_a(+t.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:Sp;e.setAttribute("aria-valuetext",r)},Bu=A.createElement("template");Bu.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;const ir=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Wu=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class wp extends mo{constructor(){super(),J(this,oi),J(this,vo),J(this,mn),J(this,pn),J(this,vn),J(this,gs),J(this,Pa),J(this,_s),J(this,ni,void 0),J(this,$t,void 0),J(this,cn,void 0),J(this,Ta,void 0),J(this,hn,void 0),J(this,Or,void 0),J(this,Oa,void 0),J(this,Na,void 0),J(this,si,void 0),J(this,fs,a=>{this.dragging||(Js(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.container.appendChild(Bu.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),Be(this,cn,this.shadowRoot.querySelectorAll('[part~="box"]')),Be(this,hn,this.shadowRoot.querySelector('[part~="preview-box"]')),Be(this,Or,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);Be(this,Oa,parseInt(i.getPropertyValue("--media-box-padding-left"))),Be(this,Na,parseInt(i.getPropertyValue("--media-box-padding-right"))),Be(this,$t,new Ip(this.range,z(this,fs),60))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_DURATION,s.MEDIA_SEEKABLE,s.MEDIA_CURRENT_TIME,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_TIME,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_BUFFERED,s.MEDIA_PLAYBACK_RATE,s.MEDIA_LOADING,s.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",g("seek")),re(this,oi,ha).call(this),Be(this,ni,this.getRootNode()),(e=z(this,ni))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),re(this,oi,ha).call(this),(e=z(this,ni))==null||e.removeEventListener("transitionstart",this),Be(this,ni,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===s.MEDIA_CURRENT_TIME||e===s.MEDIA_PAUSED||e===s.MEDIA_ENDED||e===s.MEDIA_LOADING||e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE?(z(this,$t).update({start:ir(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),re(this,oi,ha).call(this),Cp(this)):e===s.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=z(this,si),this.updateBar()))}get mediaChaptersCues(){return z(this,si)}set mediaChaptersCues(e){var i;Be(this,si,e),this.updateSegments((i=z(this,si))==null?void 0:i.map(a=>({start:ir(this,a.startTime),end:ir(this,a.endTime)})))}get mediaPaused(){return w(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return w(this,s.MEDIA_LOADING)}set mediaLoading(e){M(this,s.MEDIA_LOADING,e)}get mediaDuration(){return $(this,s.MEDIA_DURATION)}set mediaDuration(e){G(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return $(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return $(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){G(this,s.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(s.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(s.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(s.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return B(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){W(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return $(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){G(this,s.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return w(this,s.MEDIA_ENDED)}set mediaEnded(e){M(this,s.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,o=this.mediaSeekableStart]=(e=i.find(([l,u])=>l<=n&&n<=u))!=null?e:[];a=ir(this,o)}const{style:r}=Q(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Q(this.shadowRoot,"#current-rail"),a=Q(this.shadowRoot,'[part~="current-box"]'),r=re(this,mn,Eo).call(this,z(this,Or)),n=re(this,pn,bo).call(this,r,this.range.valueAsNumber),o=re(this,vn,fo).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${o}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":re(this,_s,$u).call(this);break;case"pointermove":re(this,gs,Uu).call(this,e);break;case"pointerup":case"pointerleave":re(this,Pa,En).call(this,null);break;case"transitionstart":rt(e.target,this)&&setTimeout(()=>re(this,oi,ha).call(this),0);break}}}ni=new WeakMap;$t=new WeakMap;cn=new WeakMap;Ta=new WeakMap;hn=new WeakMap;Or=new WeakMap;Oa=new WeakMap;Na=new WeakMap;si=new WeakMap;oi=new WeakSet;ha=function(){re(this,vo,Pu).call(this)?z(this,$t).start():z(this,$t).stop()};vo=new WeakSet;Pu=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&kd(this)};fs=new WeakMap;mn=new WeakSet;Eo=function(t){var e;const a=((e=this.getAttribute("bounds")?Li(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,o=-(r.left-a.left-n/2),l=a.right-r.left-n/2;return{box:{width:n,min:o,max:l},bounds:a,range:r}};pn=new WeakSet;bo=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const l=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${l})`}return i};vn=new WeakSet;fo=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+z(this,Oa)){const o=t.range.left-t.bounds.left-z(this,Oa);return`${n-i/2+o}px`}if(n>r-z(this,Na)){const o=t.bounds.right-t.range.right-z(this,Na);return`${n+i/2-o-t.range.width}px`}return 0};gs=new WeakSet;Uu=function(t){const e=[...z(this,cn)].some(f=>t.composedPath().includes(f));if(!this.dragging&&(e||!t.composedPath().includes(this))){re(this,Pa,En).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Q(this.shadowRoot,"#preview-rail"),r=Q(this.shadowRoot,'[part~="preview-box"]'),n=re(this,mn,Eo).call(this,z(this,hn));let o=(t.clientX-n.range.left)/n.range.width;o=Math.max(0,Math.min(1,o));const l=re(this,pn,bo).call(this,n,o),u=re(this,vn,fo).call(this,n,o);a.style.transform=`translateX(${l})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${u}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const c=Math.round(z(this,Ta))-Math.round(o*i);Math.abs(c)<1&&o>.01&&o<.99||(Be(this,Ta,o*i),re(this,Pa,En).call(this,z(this,Ta)))};Pa=new WeakSet;En=function(t){this.dispatchEvent(new d.CustomEvent(b.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};_s=new WeakSet;$u=function(){z(this,$t).stop();const t=Wu(this);this.dispatchEvent(new d.CustomEvent(b.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};d.customElements.get("media-time-range")||d.customElements.define("media-time-range",wp);const Zt={PLACEMENT:"placement",BOUNDS:"bounds"},Hu=A.createElement("template");Hu.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class Mp extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!kd(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=Li(this,"#"+this.bounds))!=null?e:Ae(this);if(!r)return;const{x:n,width:o}=r.getBoundingClientRect(),{x:l,width:u}=this.getBoundingClientRect(),c=l+u,f=n+o,v=a.getPropertyValue("--media-tooltip-offset-x"),m=v?parseFloat(v.replace("px","")):0,p=a.getPropertyValue("--media-tooltip-container-margin"),C=p?parseFloat(p.replace("px","")):0,k=l-n+m-C,T=c-f+m+C;if(k<0){this.style.setProperty("--media-tooltip-offset-x",`${k}px`);return}if(T>0){this.style.setProperty("--media-tooltip-offset-x",`${T}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Hu.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Zt.PLACEMENT,Zt.BOUNDS]}get placement(){return B(this,Zt.PLACEMENT)}set placement(e){W(this,Zt.PLACEMENT,e)}get bounds(){return B(this,Zt.BOUNDS)}set bounds(e){W(this,Zt.BOUNDS,e)}}d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",Mp);const Rp=1,Lp=t=>t.mediaMuted?0:t.mediaVolume,Dp=t=>`${Math.round(t*100)}%`;class xp extends mo{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME,s.MEDIA_MUTED,s.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new d.CustomEvent(b.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",g("volume"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===s.MEDIA_VOLUME||e===s.MEDIA_MUTED)&&(this.range.valueAsNumber=Lp(this),this.range.setAttribute("aria-valuetext",Dp(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return $(this,s.MEDIA_VOLUME,Rp)}set mediaVolume(e){G(this,s.MEDIA_VOLUME,e)}get mediaMuted(){return w(this,s.MEDIA_MUTED)}set mediaMuted(e){M(this,s.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return B(this,s.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){W(this,s.MEDIA_VOLUME_UNAVAILABLE,e)}}d.customElements.get("media-volume-range")||d.customElements.define("media-volume-range",xp);var Fu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},I=(t,e,i)=>(Fu(t,e,"read from private field"),i?i.call(t):e.get(t)),Fe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},at=(t,e,i,a)=>(Fu(t,e,"write to private field"),e.set(t,i),i),li,Nr,St,ma,ht,mt,pt,Ct,di,Pr,Te;const Ol=1,Nl=0,Op=1,Np={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof we&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof we?r.element[r.attributeName]=n:r.value=n}}}};class xn extends d.DocumentFragment{constructor(e,i,a=Np){var r;super(),Fe(this,li,void 0),Fe(this,Nr,void 0),this.append(e.content.cloneNode(!0)),at(this,li,Ku(this)),at(this,Nr,a),(r=a.createCallback)==null||r.call(a,this,I(this,li),i),a.processCallback(this,I(this,li),i)}update(e){I(this,Nr).processCallback(this,I(this,li),e)}}li=new WeakMap;Nr=new WeakMap;const Ku=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new Up;for([i,a]of Ul(r.value))if(!i)n.append(a);else{const o=new we(t,r.name,r.namespaceURI);n.append(o),e.push([a,o])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===Ol&&!(r instanceof HTMLTemplateElement))Ku(r,e);else{const n=r.data;if(r.nodeType===Ol||n.includes("{{")){const o=[];if(n)for([i,a]of Ul(n))if(!i)o.push(new Text(a));else{const l=new Di(t);o.push(l),e.push([a,l])}else if(r instanceof HTMLTemplateElement){const l=new Yu(t,r);o.push(l),e.push([l.expression,l])}r.replaceWith(...o.flatMap(l=>l.replacementNodes||[l]))}}return e},Pl={},Ul=t=>{let e="",i=0,a=Pl[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([Nl,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([Op,e.trim()]),e="",r++):e+=n||"";return e&&a.push([Nl,(i>0?"{{":"")+e]),Pl[t]=a},Pp=11;class Vu{get value(){return""}set value(e){}toString(){return this.value}}const Gu=new WeakMap;class Up{constructor(){Fe(this,St,[])}[Symbol.iterator](){return I(this,St).values()}get length(){return I(this,St).length}item(e){return I(this,St)[e]}append(...e){for(const i of e)i instanceof we&&Gu.set(i,this),I(this,St).push(i)}toString(){return I(this,St).join("")}}St=new WeakMap;class we extends Vu{constructor(e,i,a){super(),Fe(this,Ct),Fe(this,ma,""),Fe(this,ht,void 0),Fe(this,mt,void 0),Fe(this,pt,void 0),at(this,ht,e),at(this,mt,i),at(this,pt,a)}get attributeName(){return I(this,mt)}get attributeNamespace(){return I(this,pt)}get element(){return I(this,ht)}get value(){return I(this,ma)}set value(e){I(this,ma)!==e&&(at(this,ma,e),!I(this,Ct,di)||I(this,Ct,di).length===1?e==null?I(this,ht).removeAttributeNS(I(this,pt),I(this,mt)):I(this,ht).setAttributeNS(I(this,pt),I(this,mt),e):I(this,ht).setAttributeNS(I(this,pt),I(this,mt),I(this,Ct,di).toString()))}get booleanValue(){return I(this,ht).hasAttributeNS(I(this,pt),I(this,mt))}set booleanValue(e){if(!I(this,Ct,di)||I(this,Ct,di).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}ma=new WeakMap;ht=new WeakMap;mt=new WeakMap;pt=new WeakMap;Ct=new WeakSet;di=function(){return Gu.get(this)};class Di extends Vu{constructor(e,i){super(),Fe(this,Pr,void 0),Fe(this,Te,void 0),at(this,Pr,e),at(this,Te,i?[...i]:[new Text])}get replacementNodes(){return I(this,Te)}get parentNode(){return I(this,Pr)}get nextSibling(){return I(this,Te)[I(this,Te).length-1].nextSibling}get previousSibling(){return I(this,Te)[0].previousSibling}get value(){return I(this,Te).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===Pp?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),at(this,Te,$p(I(this,Te)[0].parentNode,I(this,Te),i,this.nextSibling))}}Pr=new WeakMap;Te=new WeakMap;class Yu extends Di{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function $p(t,e,i,a=null){let r=0,n,o,l,u=i.length,c=e.length;for(;r<u&&r<c&&e[r]==i[r];)r++;for(;r<u&&r<c&&i[u-1]==e[c-1];)a=i[--c,--u];if(r==c)for(;r<u;)t.insertBefore(i[r++],a);if(r==u)for(;r<c;)t.removeChild(e[r++]);else{for(n=e[r];r<u;)l=i[r++],o=n?n.nextSibling:a,n==l?n=o:r<u&&i[r]==o?(t.replaceChild(l,n),n=o):t.insertBefore(l,n);for(;n!=a;)o=n.nextSibling,t.removeChild(n),n=o}return i}const $l={string:t=>String(t)};class qu{constructor(e){this.template=e,this.state=void 0}}const xt=new WeakMap,Ot=new WeakMap,As={partial:(t,e)=>{e[t.expression]=new qu(t.template)},if:(t,e)=>{var i;if(Zu(t.expression,e))if(xt.get(t)!==t.template){xt.set(t,t.template);const a=new xn(t.template,e,go);t.replace(a),Ot.set(t,a)}else(i=Ot.get(t))==null||i.update(e);else t.replace(""),xt.delete(t),Ot.delete(t)}},Bp=Object.keys(As),go={processCallback(t,e,i){var a,r;if(i)for(const[n,o]of e){if(o instanceof Yu){if(!o.directive){const u=Bp.find(c=>o.template.hasAttribute(c));u&&(o.directive=u,o.expression=o.template.getAttribute(u))}(a=As[o.directive])==null||a.call(As,o,i);continue}let l=Zu(n,i);if(l instanceof qu){xt.get(o)!==l.template?(xt.set(o,l.template),l=new xn(l.template,l.state,go),o.value=l,Ot.set(o,l)):(r=Ot.get(o))==null||r.update(l.state);continue}l?(o instanceof we&&o.attributeName.startsWith("aria-")&&(l=String(l)),o instanceof we?typeof l=="boolean"?o.booleanValue=l:typeof l=="function"?o.element[o.attributeName]=l:o.value=l:(o.value=l,xt.delete(o),Ot.delete(o))):o instanceof we?o.value=void 0:(o.value=void 0,xt.delete(o),Ot.delete(o))}}},Bl={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=$l[e])==null?void 0:i.call($l,t)}};function Wp(t){return Hp(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function Zu(t,e={}){var i,a,r,n,o,l,u;const c=Wp(t);if(c.length===0||c.some(({type:f})=>!f))return zi(t);if(((i=c[0])==null?void 0:i.token)===">"){const f=e[(a=c[1])==null?void 0:a.token];if(!f)return zi(t);const v={...e};f.state=v;const m=c.slice(2);for(let p=0;p<m.length;p+=3){const C=(r=m[p])==null?void 0:r.token,k=(n=m[p+1])==null?void 0:n.token,T=(o=m[p+2])==null?void 0:o.token;C&&k==="="&&(v[C]=Xi(T,e))}return f}if(c.length===1)return ar(c[0])?Xi(c[0].token,e):zi(t);if(c.length===2){const f=(l=c[0])==null?void 0:l.token,v=Bl[f];if(!v||!ar(c[1]))return zi(t);const m=Xi(c[1].token,e);return v(m)}if(c.length===3){const f=(u=c[1])==null?void 0:u.token,v=Bl[f];if(!v||!ar(c[0])||!ar(c[2]))return zi(t);const m=Xi(c[0].token,e);if(f==="|")return v(m,c[2].token);const p=Xi(c[2].token,e);return v(m,p)}}function zi(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function ar({type:t}){return["number","boolean","string","param"].includes(t)}function Xi(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):md(t)?parseFloat(t):e[t]}function Hp(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const o in e)a=e[o].exec(t),a&&a.index<i&&(r={token:a[0],type:o,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var _o=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ys=(t,e,i)=>(_o(t,e,"read from private field"),i?i.call(t):e.get(t)),Ji=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Nt=(t,e,i,a)=>(_o(t,e,"write to private field"),e.set(t,i),i),Hn=(t,e,i)=>(_o(t,e,"access private method"),i),gi,Ur,_i,Ts,Qu,$r,ks;const Fn={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},zu=A.createElement("template");zu.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class On extends d.HTMLElement{constructor(){super(),Ji(this,Ts),Ji(this,$r),Ji(this,gi,void 0),Ji(this,Ur,void 0),Ji(this,_i,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(i=>{var a;this.mediaController&&!((a=this.mediaController)!=null&&a.breakpointsComputed)||i.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(Fn[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(Ft.BREAKPOINTS_COMPUTED,this.render),Hn(this,Ts,Qu).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=ys(this,gi))!=null?e:this.constructor.template}set template(e){Nt(this,_i,null),Nt(this,gi,e),this.createRenderer()}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:o})=>Fn[o]||o.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const o of r){const l=(a=Fn[o.name])!=null?a:mh(o.name);let{value:u}=o;u!=null?(md(u)&&(u=parseFloat(u)),n[l]=u===""?!0:u):n[l]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&Hn(this,$r,ks).call(this)}connectedCallback(){Hn(this,$r,ks).call(this)}createRenderer(){this.template&&this.template!==ys(this,Ur)&&(Nt(this,Ur,this.template),this.renderer=new xn(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(zu.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}gi=new WeakMap;Ur=new WeakMap;_i=new WeakMap;Ts=new WeakSet;Qu=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};$r=new WeakSet;ks=function(){var t;const e=this.getAttribute("template");if(!e||e===ys(this,_i))return;const i=this.getRootNode(),a=(t=i?.getElementById)==null?void 0:t.call(i,e);if(a){Nt(this,_i,e),Nt(this,gi,a),this.createRenderer();return}Fp(e)&&(Nt(this,_i,e),Kp(e).then(r=>{const n=A.createElement("template");n.innerHTML=r,Nt(this,gi,n),this.createRenderer()}).catch(console.error))};On.observedAttributes=["template"];On.processor=go;function Fp(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function Kp(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",On);function Vp({anchor:t,floating:e,placement:i}){const a=Gp({anchor:t,floating:e}),{x:r,y:n}=qp(a,i);return{x:r,y:n}}function Gp({anchor:t,floating:e}){return{anchor:Yp(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function Yp(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function qp({anchor:t,floating:e},i){const a=Zp(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Xu(i),o=t.x+t.width/2-e.width/2,l=t.y+t.height/2-e.height/2,u=t[r]/2-e[r]/2;let c;switch(n){case"top":c={x:o,y:t.y-e.height};break;case"bottom":c={x:o,y:t.y+t.height};break;case"right":c={x:t.x+t.width,y:l};break;case"left":c={x:t.x-e.width,y:l};break;default:c={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":c[a]-=u;break;case"end":c[a]+=u;break}return c}function Xu(t){return t.split("-")[0]}function Zp(t){return["top","bottom"].includes(Xu(t))?"y":"x"}class Ao extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class Qp extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var yo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},R=(t,e,i)=>(yo(t,e,"read from private field"),i?i.call(t):e.get(t)),N=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},We=(t,e,i,a)=>(yo(t,e,"write to private field"),e.set(t,i),i),U=(t,e,i)=>(yo(t,e,"access private method"),i),He,Bt,ft,Br,Wr,Wt,Ua,Is,Ju,bn,Hr,Ss,Cs,ju,ws,ec,Ms,tc,Ai,yi,Ti,$a,fn,To,Rs,ic,ko,ac,Ls,rc,Io,nc,Ds,sc,xs,oc,ka,gn,Os,lc,Ia,_n,Fr,Ns;function Mi({type:t,text:e,value:i,checked:a}){const r=A.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=A.createElement("span");return n.textContent=e,r.append(n),r}function Ht(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}const dc=A.createElement("template");dc.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    } 

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;const At={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class nt extends d.HTMLElement{constructor(){super(),N(this,Is),N(this,Hr),N(this,Cs),N(this,ws),N(this,Ms),N(this,Ti),N(this,fn),N(this,Rs),N(this,ko),N(this,Ls),N(this,Io),N(this,Ds),N(this,xs),N(this,ka),N(this,Os),N(this,Ia),N(this,Fr),N(this,He,null),N(this,Bt,null),N(this,ft,null),N(this,Br,new Set),N(this,Wr,void 0),N(this,Wt,!1),N(this,Ua,null),N(this,bn,()=>{const e=R(this,Br),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));We(this,Br,i)}),N(this,Ai,()=>{U(this,Ti,$a).call(this),U(this,fn,To).call(this,!1)}),N(this,yi,()=>{U(this,Ti,$a).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),We(this,Wr,new MutationObserver(R(this,bn))),R(this,Wr).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[At.DISABLED,At.HIDDEN,At.STYLE,At.ANCHOR,L.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":U(this,Is,Ju).call(this,e);break;case"invoke":U(this,Cs,ju).call(this,e);break;case"click":U(this,Rs,ic).call(this,e);break;case"toggle":U(this,Ls,rc).call(this,e);break;case"focusout":U(this,Ds,sc).call(this,e);break;case"keydown":U(this,xs,oc).call(this,e);break}}connectedCallback(){var e,i;We(this,Ua,Id(this.shadowRoot,":host")),U(this,Hr,Ss).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),We(this,He,Xn(this)),(i=(e=R(this,He))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(Ii(Ba(this),R(this,Ai)),Ii(this,R(this,yi)))}disconnectedCallback(){var e,i;Si(Ba(this),R(this,Ai)),Si(this,R(this,yi)),this.disable(),(i=(e=R(this,He))==null?void 0:e.unassociateElement)==null||i.call(e,this),We(this,He,null)}attributeChangedCallback(e,i,a){var r,n,o,l;e===At.HIDDEN&&a!==i?(R(this,Wt)||We(this,Wt,!0),this.hidden?U(this,Ms,tc).call(this):U(this,ws,ec).call(this),this.dispatchEvent(new Qp({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===L.MEDIA_CONTROLLER?(i&&((n=(r=R(this,He))==null?void 0:r.unassociateElement)==null||n.call(r,this),We(this,He,null)),a&&this.isConnected&&(We(this,He,Xn(this)),(l=(o=R(this,He))==null?void 0:o.associateElement)==null||l.call(o,this))):e===At.DISABLED&&a!==i?a==null?this.enable():this.disable():e===At.STYLE&&a!==i&&U(this,Hr,Ss).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=kn(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(zp)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&U(this,Fr,Ns).call(this,i)}focus(){if(We(this,Bt,eo()),this.items.length){U(this,Ia,_n).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var i;const a=U(this,ka,gn).call(this,e);a&&(U(this,Fr,Ns).call(this,a,a.type==="checkbox"),R(this,ft)&&!this.hidden&&((i=R(this,Bt))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,o=(a=(i=U(this,ka,gn).call(this,e))!=null?i:U(this,Os,lc).call(this))!=null?a:n[0],l=n.indexOf(o);let u=Math.max(0,l);r==="ArrowDown"?u++:r==="ArrowUp"?u--:e.key==="Home"?u=0:e.key==="End"&&(u=n.length-1),u<0&&(u=n.length-1),u>n.length-1&&(u=0),U(this,Ia,_n).call(this,n[u]),n[u].focus()}}He=new WeakMap;Bt=new WeakMap;ft=new WeakMap;Br=new WeakMap;Wr=new WeakMap;Wt=new WeakMap;Ua=new WeakMap;Is=new WeakSet;Ju=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();if(["header","title"].includes(e.name)){const i=this.shadowRoot.querySelector('slot[name="header"]');i.hidden=e.assignedNodes().length===0}e.name||R(this,bn).call(this)};bn=new WeakMap;Hr=new WeakSet;Ss=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};Cs=new WeakSet;ju=function(t){We(this,ft,t.relatedTarget),rt(this,t.relatedTarget)||(this.hidden=!this.hidden)};ws=new WeakSet;ec=function(){var t;(t=R(this,ft))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Ii(Ba(this),R(this,Ai)),Ii(this,R(this,yi))};Ms=new WeakSet;tc=function(){var t;(t=R(this,ft))==null||t.setAttribute("aria-expanded","false"),Si(Ba(this),R(this,Ai)),Si(this,R(this,yi))};Ai=new WeakMap;yi=new WeakMap;Ti=new WeakSet;$a=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=Vp({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Ba(this).getBoundingClientRect(),n=r.width-e-t,o=r.height-i-this.offsetHeight,{style:l}=R(this,Ua);l.setProperty("position","absolute"),l.setProperty("right",`${Math.max(0,n)}px`),l.setProperty("--_menu-bottom",`${o}px`);const u=getComputedStyle(this),f=l.getPropertyValue("--_menu-bottom")===u.bottom?o:parseFloat(u.bottom),v=r.height-f-parseFloat(u.marginBottom);this.style.setProperty("--_menu-max-height",`${v}px`)};fn=new WeakSet;To=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e?.querySelector('[role="menu"]'),{style:a}=R(this,Ua);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),U(this,Ti,$a).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),U(this,Ti,$a).call(this);a.removeProperty("--media-menu-transition-in")};Rs=new WeakSet;ic=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(R(this,ko,ac))){(e=R(this,Bt))==null||e.focus(),this.hidden=!0;return}const i=U(this,ka,gn).call(this,t);!i||i.hasAttribute("disabled")||(U(this,Ia,_n).call(this,i),this.handleSelect(t))};ko=new WeakSet;ac=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};Ls=new WeakSet;rc=function(t){if(t.target===this)return;U(this,Io,nc).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Ao({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);U(this,fn,To).call(this,!0)};Io=new WeakSet;nc=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};Ds=new WeakSet;sc=function(t){var e;rt(this,t.relatedTarget)||(R(this,Wt)&&((e=R(this,Bt))==null||e.focus()),R(this,ft)&&R(this,ft)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};xs=new WeakSet;oc=function(t){var e,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:c}=t;if(!(l||u||c)&&this.keysUsed.includes(o))if(t.preventDefault(),t.stopPropagation(),o==="Tab"){if(R(this,Wt)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else o==="Escape"?((n=R(this,Bt))==null||n.focus(),R(this,Wt)&&(this.hidden=!0)):o==="Enter"||o===" "?this.handleSelect(t):this.handleMove(t)};ka=new WeakSet;gn=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};Os=new WeakSet;lc=function(){return this.items.find(t=>t.tabIndex===0)};Ia=new WeakSet;_n=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};Fr=new WeakSet;Ns=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};nt.template=dc;function zp(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t?.role)}function Ba(t){var e;return(e=t.getAttribute("bounds")?Li(t,`#${t.getAttribute("bounds")}`):Ae(t)||t.parentElement)!=null?e:t}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",nt);var So=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ve=(t,e,i)=>(So(t,e,"read from private field"),i?i.call(t):e.get(t)),Je=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Kn=(t,e,i,a)=>(So(t,e,"write to private field"),e.set(t,i),i),Ke=(t,e,i)=>(So(t,e,"access private method"),i),Kr,Sa,Ps,uc,Co,cc,wo,hc,Ge,Ri,Wa,Us,mc,Vr,$s;const pc=A.createElement("template");pc.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;const fe={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class Nn extends d.HTMLElement{constructor(){super(),Je(this,Ps),Je(this,Co),Je(this,wo),Je(this,Ri),Je(this,Us),Je(this,Vr),Je(this,Kr,!1),Je(this,Sa,void 0),Je(this,Ge,()=>{var e,i;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r?.dataset.description)!=null?i:r?.text,o=A.createElement("span");o.textContent=n??"",a.replaceChildren(o)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[fe.TYPE,fe.DISABLED,fe.CHECKED,fe.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),ji(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":Ke(this,Ps,uc).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Ke(this,Us,mc).call(this,e);break;case"keyup":Ke(this,Ri,Wa).call(this,e);break}}attributeChangedCallback(e,i,a){e===fe.CHECKED&&ji(this)&&!Ve(this,Kr)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===fe.TYPE&&a!==i?this.role="menuitem"+a:e===fe.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(fe.DISABLED)||this.enable(),this.role="menuitem"+this.type,Kn(this,Sa,Bs(this,this.parentNode)),Ke(this,Vr,$s).call(this)}disconnectedCallback(){this.disable(),Ke(this,Vr,$s).call(this),Kn(this,Sa,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=kn(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(fe.TYPE))!=null?e:""}set type(e){this.setAttribute(fe.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(fe.VALUE))!=null?e:this.text}set value(e){this.setAttribute(fe.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(ji(this))return this.getAttribute("aria-checked")==="true"}set checked(e){ji(this)&&(Kn(this,Kr,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){ji(this)||this.invokeTargetElement&&rt(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Ao({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}Kr=new WeakMap;Sa=new WeakMap;Ps=new WeakSet;uc=function(t){const e=t.target;if(!e?.name)for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?Ke(this,Co,cc).call(this):Ke(this,wo,hc).call(this))};Co=new WeakSet;cc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Ve(this,Ge)),this.submenuElement.addEventListener("addmenuitem",Ve(this,Ge)),this.submenuElement.addEventListener("removemenuitem",Ve(this,Ge)),Ve(this,Ge).call(this)};wo=new WeakSet;hc=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Ve(this,Ge)),this.submenuElement.removeEventListener("addmenuitem",Ve(this,Ge)),this.submenuElement.removeEventListener("removemenuitem",Ve(this,Ge)),Ve(this,Ge).call(this)};Ge=new WeakMap;Ri=new WeakSet;Wa=function(t){const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",Ke(this,Ri,Wa));return}this.handleClick(t)};Us=new WeakSet;mc=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",Ke(this,Ri,Wa));return}this.addEventListener("keyup",Ke(this,Ri,Wa),{once:!0})};Vr=new WeakSet;$s=function(){var t;const e=(t=Ve(this,Sa))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};Nn.template=pc;function ji(t){return t.type==="radio"||t.type==="checkbox"}function Bs(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Bs(t,i):e?.items?e:Bs(e,e?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",Nn);const vc=A.createElement("template");vc.innerHTML=nt.template.innerHTML+`
  <style>
    :host {
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-settings-menu-background,
          var(--media-menu-background,
            var(--media-control-background,
              var(--media-secondary-color, var(--_menu-bg)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class Ec extends nt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ae(this).querySelector("media-settings-menu-button")}}Ec.template=vc;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",Ec);var Wl;const An=A.createElement("template");An.innerHTML=Nn.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`;(Wl=An.content)!=null&&Wl.querySelector&&(An.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class bc extends Nn{}bc.template=An;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",bc);class xi extends Ee{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=kn(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Ao({relatedTarget:this}))}}d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",xi);const fc=A.createElement("template");fc.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class Xp extends xi{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:fc,tooltipContent:g("Settings")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ae(this).querySelector("media-settings-menu")}}d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",Xp);var Mo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gc=(t,e,i)=>(Mo(t,e,"read from private field"),i?i.call(t):e.get(t)),rr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ws=(t,e,i,a)=>(Mo(t,e,"write to private field"),e.set(t,i),i),nr=(t,e,i)=>(Mo(t,e,"access private method"),i),pa,yn,Gr,Hs,Yr,Fs;class Jp extends nt{constructor(){super(...arguments),rr(this,Gr),rr(this,Yr),rr(this,pa,[]),rr(this,yn,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===s.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(Ws(this,pa,uh(a??"")),nr(this,Gr,Hs).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nr(this,Yr,Fs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nr(this,Yr,Fs))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=Ae(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return gc(this,pa)}set mediaAudioTrackList(e){Ws(this,pa,e),nr(this,Gr,Hs).call(this)}get mediaAudioTrackEnabled(){var e;return(e=B(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){W(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}}pa=new WeakMap;yn=new WeakMap;Gr=new WeakSet;Hs=function(){if(gc(this,yn)===JSON.stringify(this.mediaAudioTrackList))return;Ws(this,yn,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Mi({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(a)}};Yr=new WeakSet;Fs=function(){if(this.value==null)return;const t=new d.CustomEvent(b.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",Jp);const jp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,_c=A.createElement("template");_c.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${jp}</slot>
`;class ev extends xi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:_c,tooltipContent:g("Audio")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("Audio"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ae(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=B(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){W(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}}d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",ev);var Ro=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},tv=(t,e,i)=>(Ro(t,e,"read from private field"),e.get(t)),Vn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},iv=(t,e,i,a)=>(Ro(t,e,"write to private field"),e.set(t,i),i),Gn=(t,e,i)=>(Ro(t,e,"access private method"),i),Tn,Ks,Ac,qr,Vs;const av=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,yc=A.createElement("template");yc.innerHTML=nt.template.innerHTML+`
  <slot name="captions-indicator" hidden>${av}</slot>`;class Tc extends nt{constructor(){super(...arguments),Vn(this,Ks),Vn(this,qr),Vn(this,Tn,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_SUBTITLES_LIST&&i!==a?Gn(this,Ks,Ac).call(this):e===s.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Gn(this,qr,Vs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Gn(this,qr,Vs))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ae(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Hl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Fl(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Hl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Fl(this,s.MEDIA_SUBTITLES_SHOWING,e)}}Tn=new WeakMap;Ks=new WeakSet;Ac=function(){var t;if(tv(this,Tn)===JSON.stringify(this.mediaSubtitlesList))return;iv(this,Tn,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const e=!this.value,i=Mi({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:e});i.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(i);const a=this.mediaSubtitlesList;for(const r of a){const n=Mi({type:"radio",text:this.formatMenuItemText(r.label,r),value:ts(r),checked:this.value==ts(r)});n.prepend(Ht(this,"checked-indicator")),((t=r.kind)!=null?t:"subs")==="captions"&&n.append(Ht(this,"captions-indicator")),this.defaultSlot.append(n)}};qr=new WeakSet;Vs=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(s.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t?.length&&i&&this.dispatchEvent(new d.CustomEvent(b.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new d.CustomEvent(b.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Tc.template=yc;const Hl=(t,e)=>{const i=t.getAttribute(e);return i?wn(i):[]},Fl=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=La(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",Tc);var rv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},nv=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},sv=(t,e,i,a)=>(rv(t,e,"write to private field"),e.set(t,i),i),Gs;const ov=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,lv=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,kc=A.createElement("template");kc.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${ov}</slot>
    <slot name="off">${lv}</slot>
  </slot>
`;const Kl=t=>{t.setAttribute("aria-checked",$d(t).toString())};class dv extends xi{constructor(e={}){super({slotTemplate:kc,tooltipContent:g("Captions"),...e}),nv(this,Gs,void 0),sv(this,Gs,!1)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("closed captions")),Kl(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_SUBTITLES_SHOWING&&Kl(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ae(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Vl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Gl(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Vl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Gl(this,s.MEDIA_SUBTITLES_SHOWING,e)}}Gs=new WeakMap;const Vl=(t,e)=>{const i=t.getAttribute(e);return i?wn(i):[]},Gl=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=La(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",dv);var Ic=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},sr=(t,e,i)=>(Ic(t,e,"read from private field"),i?i.call(t):e.get(t)),Yn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ea=(t,e,i)=>(Ic(t,e,"access private method"),i),ui,va,Zr,Qr,Ys;const qn={RATES:"rates"};class uv extends nt{constructor(){super(),Yn(this,va),Yn(this,Qr),Yn(this,ui,new Cn(this,qn.RATES,{defaultValue:ku})),ea(this,va,Zr).call(this)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,qn.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_PLAYBACK_RATE&&i!=a?this.value=a:e===qn.RATES&&i!=a&&(sr(this,ui).value=a,ea(this,va,Zr).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ea(this,Qr,Ys))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ea(this,Qr,Ys))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ae(this).querySelector("media-playback-rate-menu-button")}get rates(){return sr(this,ui)}set rates(e){e?Array.isArray(e)&&(sr(this,ui).value=e.join(" ")):sr(this,ui).value="",ea(this,va,Zr).call(this)}get mediaPlaybackRate(){return $(this,s.MEDIA_PLAYBACK_RATE,da)}set mediaPlaybackRate(e){G(this,s.MEDIA_PLAYBACK_RATE,e)}}ui=new WeakMap;va=new WeakSet;Zr=function(){this.defaultSlot.textContent="";for(const t of this.rates){const e=Mi({type:"radio",text:this.formatMenuItemText(`${t}x`,t),value:t,checked:this.mediaPlaybackRate==t});e.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(e)}};Qr=new WeakSet;Ys=function(){if(!this.value)return;const t=new d.CustomEvent(b.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",uv);var cv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},or=(t,e,i)=>(cv(t,e,"read from private field"),i?i.call(t):e.get(t)),hv=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ci;const Zn={RATES:"rates"},mv=[1,1.2,1.5,1.7,2],Qn=1,Sc=A.createElement("template");Sc.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;class pv extends xi{constructor(e={}){super({slotTemplate:Sc,tooltipContent:g("Playback rate"),...e}),hv(this,ci,new Cn(this,Zn.RATES,{defaultValue:mv})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Qn}x`}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Zn.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Zn.RATES&&(or(this,ci).value=a),e===s.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?Qn:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",g("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ae(this).querySelector("media-playback-rate-menu")}get rates(){return or(this,ci)}set rates(e){e?Array.isArray(e)&&(or(this,ci).value=e.join(" ")):or(this,ci).value=""}get mediaPlaybackRate(){return $(this,s.MEDIA_PLAYBACK_RATE,Qn)}set mediaPlaybackRate(e){G(this,s.MEDIA_PLAYBACK_RATE,e)}}ci=new WeakMap;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",pv);var Lo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ea=(t,e,i)=>(Lo(t,e,"read from private field"),i?i.call(t):e.get(t)),lr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Yl=(t,e,i,a)=>(Lo(t,e,"write to private field"),e.set(t,i),i),Qt=(t,e,i)=>(Lo(t,e,"access private method"),i),ba,bi,hi,fa,zr,qs;class vv extends nt{constructor(){super(...arguments),lr(this,hi),lr(this,zr),lr(this,ba,[]),lr(this,bi,{})}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_LIST,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===s.MEDIA_RENDITION_SELECTED&&i!==a?(this.value=a??"auto",Qt(this,hi,fa).call(this)):e===s.MEDIA_RENDITION_LIST&&i!==a?(Yl(this,ba,sh(a)),Qt(this,hi,fa).call(this)):e===s.MEDIA_HEIGHT&&i!==a&&Qt(this,hi,fa).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Qt(this,zr,qs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Qt(this,zr,qs))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ae(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Ea(this,ba)}set mediaRenditionList(e){Yl(this,ba,e),Qt(this,hi,fa).call(this)}get mediaRenditionSelected(){return B(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){W(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return $(this,s.MEDIA_HEIGHT)}set mediaHeight(e){G(this,s.MEDIA_HEIGHT,e)}}ba=new WeakMap;bi=new WeakMap;hi=new WeakSet;fa=function(){if(Ea(this,bi).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Ea(this,bi).mediaHeight===this.mediaHeight)return;Ea(this,bi).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Ea(this,bi).mediaHeight=this.mediaHeight;const t=this.mediaRenditionList.sort((n,o)=>o.height-n.height);for(const n of t)n.selected=n.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";const e=!this.mediaRenditionSelected;for(const n of t){const o=this.formatMenuItemText(`${Math.min(n.width,n.height)}p`,n),l=Mi({type:"radio",text:o,value:`${n.id}`,checked:n.selected&&!e});l.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(l)}const i=e?this.formatMenuItemText(`Auto (${this.mediaHeight}p)`):this.formatMenuItemText("Auto"),a=Mi({type:"radio",text:i,value:"auto",checked:e}),r=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";a.dataset.description=r,a.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(a)};zr=new WeakSet;qs=function(){if(this.value==null)return;const t=new d.CustomEvent(b.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",vv);const Ev=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,Cc=A.createElement("template");Cc.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${Ev}</slot>
`;class bv extends xi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}constructor(){super({slotTemplate:Cc,tooltipContent:g("Quality")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ae(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return B(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){W(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return $(this,s.MEDIA_HEIGHT)}set mediaHeight(e){G(this,s.MEDIA_HEIGHT,e)}}d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",bv);var wc=t=>{throw TypeError(t)},Do=(t,e,i)=>e.has(t)||wc("Cannot "+i),x=(t,e,i)=>(Do(t,e,"read from private field"),i?i.call(t):e.get(t)),Se=(t,e,i)=>e.has(t)?wc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),qe=(t,e,i,a)=>(Do(t,e,"write to private field"),e.set(t,i),i),Z=(t,e,i)=>(Do(t,e,"access private method"),i),Pn=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Pn{}globalThis.DocumentFragment=t}var xo=class extends Pn{},fv=class extends Pn{},gv={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(xo)}},Xr,_v=class{constructor(t,e={}){Se(this,Xr),qe(this,Xr,e?.detail)}get detail(){return x(this,Xr)}initCustomEvent(){}};Xr=new WeakMap;function Av(t,e){return new xo}var Mc={document:{createElement:Av},DocumentFragment,customElements:gv,CustomEvent:_v,EventTarget:Pn,HTMLElement:xo,HTMLVideoElement:fv},Rc=typeof window>"u"||typeof globalThis.customElements>"u",Me=Rc?Mc:globalThis,Oo=Rc?Mc.document:globalThis.document;function yv(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${Zs(i)}: ${a}; `)}),e?e.trim():void 0}function Zs(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Lc(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function pe(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function Dc(t){let e=Tv(t).toString();return e?"?"+e:""}function Tv(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var xc=(t,e)=>!t||!e?!1:t.contains(e)?!0:xc(t,e.getRootNode().host),Oc="mux.com",kv=()=>{try{return"3.3.1"}catch{}return"UNKNOWN"},Iv=kv(),Nc=()=>Iv,Sv=(t,{token:e,customDomain:i=Oc,thumbnailTime:a,programTime:r}={})=>{var n;let o=e==null?a:void 0,{aud:l}=(n=ga(e))!=null?n:{};if(!(e&&l!=="t"))return`https://image.${i}/${t}/thumbnail.webp${Dc({token:e,time:o,program_time:r})}`},Cv=(t,{token:e,customDomain:i=Oc,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:o}=(n=ga(e))!=null?n:{};if(!(e&&o!=="s"))return`https://image.${i}/${t}/storyboard.vtt${Dc({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},No=t=>{if(t){if([oe.LIVE,oe.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return oe.LIVE}},wv={crossorigin:"crossOrigin",playsinline:"playsInline"};function Mv(t){var e;return(e=wv[t])!=null?e:Lc(t)}var mi,pi,se,Rv=class{constructor(t,e){Se(this,mi),Se(this,pi),Se(this,se,[]),qe(this,mi,t),qe(this,pi,e)}[Symbol.iterator](){return x(this,se).values()}get length(){return x(this,se).length}get value(){var t;return(t=x(this,se).join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(qe(this,se,[]),this.add(...(e=t?.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return x(this,se)[t]}values(){return x(this,se).values()}keys(){return x(this,se).keys()}forEach(t){x(this,se).forEach(t)}add(...t){var e,i;t.forEach(a=>{this.contains(a)||x(this,se).push(a)}),!(this.value===""&&!((e=x(this,mi))!=null&&e.hasAttribute(`${x(this,pi)}`)))&&((i=x(this,mi))==null||i.setAttribute(`${x(this,pi)}`,`${this.value}`))}remove(...t){var e;t.forEach(i=>{x(this,se).splice(x(this,se).indexOf(i),1)}),(e=x(this,mi))==null||e.setAttribute(`${x(this,pi)}`,`${this.value}`)}contains(t){return x(this,se).includes(t)}toggle(t,e){return typeof e<"u"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){this.remove(t),this.add(e)}};mi=new WeakMap,pi=new WeakMap,se=new WeakMap;var Pc=`[mux-player ${Nc()}]`;function it(...t){console.warn(Pc,...t)}function ge(...t){console.error(Pc,...t)}function Uc(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${F("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),it(i)}var ae={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},wt={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},ql=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),Lv=Xc.filter(t=>t!=="error"),Dv=Object.values(ae).filter(t=>![ae.PLAYSINLINE].includes(t)),xv=Object.values(wt),Ov=class extends Me.HTMLElement{static get observedAttributes(){return[...Dv,...xv]}constructor(){super()}init(){Lv.forEach(t=>{var e;(e=this.media)==null||e.addEventListener(t,i=>{this.dispatchEvent(new Event(i.type))})})}attributeChangedCallback(t,e,i){var a,r;switch(t){case wt.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case wt.VOLUME:{let n=(a=pe(i))!=null?a:1;this.media&&(this.media.volume=n);return}case wt.PLAYBACKRATE:{let n=(r=pe(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}requestCast(t){var e;return(e=this.media)==null?void 0:e.requestCast(t)}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:ql}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:ql}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=pe(this.getAttribute(wt.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(wt.PLAYBACKRATE,`${t}`):this.removeAttribute(wt.PLAYBACKRATE)}get crossOrigin(){return ta(this,ae.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(ae.CROSSORIGIN,`${t}`)}get autoplay(){return ta(this,ae.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(ae.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(ae.AUTOPLAY)}get loop(){return ta(this,ae.LOOP)!=null}set loop(t){t?this.setAttribute(ae.LOOP,""):this.removeAttribute(ae.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return ta(this,ae.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(ae.MUTED,""):this.removeAttribute(ae.MUTED)}get playsInline(){return ta(this,ae.PLAYSINLINE)!=null}set playsInline(t){ge("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(ae.PRELOAD,t):this.removeAttribute(ae.PRELOAD)}};function ta(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Zl=Ov,Nv=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,ia=new WeakMap,Pv=class $c{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=ia.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=ia.get(this.element);i&&i.delete(this.type)}}static for(e){ia.has(e.element)||ia.set(e.element,new Map);let i=e.attributeName.slice(2),a=ia.get(e.element);return a&&a.has(i)?a.get(i):new $c(e.element,i)}};function Uv(t,e){return t instanceof we&&t.attributeName.startsWith("on")?(Pv.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function $v(t,e){return e instanceof Bc&&t instanceof Di?(e.renderInto(t),!0):!1}function Bv(t,e){return e instanceof DocumentFragment&&t instanceof Di?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function Wv(t,e){if(t instanceof we){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function Hv(t,e){if(t instanceof we&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function Fv(t,e){if(typeof e=="boolean"&&t instanceof we){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function Kv(t,e){return e===!1&&t instanceof Di?(t.replace(""),!0):!1}function Vv(t,e){Hv(t,e)||Fv(t,e)||Uv(t,e)||Kv(t,e)||$v(t,e)||Bv(t,e)||Wv(t,e)}var zn=new Map,Ql=new WeakMap,zl=new WeakMap,Bc=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(zn.has(this.stringsKey))return zn.get(this.stringsKey);{let t=Oo.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),zn.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(Ql.get(t)!==i){Ql.set(t,i);let r=new xn(i,this.values,this.processor);zl.set(t,r),t instanceof Di?t.replace(...r.children):t.appendChild(r);return}let a=zl.get(t);(e=a?.update)==null||e.call(a,this.values)}},Gv={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let o=(a=i[r])!=null?a:"";Vv(n,o)}}}};function Jr(t,...e){return new Bc(t,e,Gv)}function Yv(t,e){t.renderInto(e)}var qv=t=>{let{tokens:e}=t;return e.drm?":host { --_cast-button-drm-display: none; }":""},Zv=t=>Jr`
  <style>
    ${qv(t)}
    ${Nv}
  </style>
  ${Jv(t)}
`,Qv=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return No(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},zv={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},Xv=Object.values(zv).join(", "),Jv=t=>{var e,i,a,r,n,o,l,u,c,f,v,m,p,C,k,T,D,ie,de,st,Ze,Oi,Ni,Pi,Ui,$i,Bi,Wi,Hi,Fi,Ki,Vi,Fa,Qe;return Jr`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${Qv(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(oe.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=yv({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(o=t.backwardSeekOffset)!=null?o:!1}"
    playbackrates="${(l=t.playbackRates)!=null?l:!1}"
    defaultshowremainingtime="${(u=t.defaultShowRemainingTime)!=null?u:!1}"
    defaultduration="${(c=t.defaultDuration)!=null?c:!1}"
    hideduration="${(f=t.hideDuration)!=null?f:!1}"
    title="${(v=t.title)!=null?v:!1}"
    proudlydisplaymuxbadge="${(m=t.proudlyDisplayMuxBadge)!=null?m:!1}"
    exportparts="${Xv}"
    onclose="${t.onCloseErrorDialog}"
    onfocusin="${t.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${(p=t.targetLiveWindow)!=null?p:!1}"
      stream-type="${(C=No(t.streamType))!=null?C:!1}"
      crossorigin="${(k=t.crossOrigin)!=null?k:""}"
      playsinline
      autoplay="${(T=t.autoplay)!=null?T:!1}"
      muted="${(D=t.muted)!=null?D:!1}"
      loop="${(ie=t.loop)!=null?ie:!1}"
      preload="${(de=t.preload)!=null?de:!1}"
      debug="${(st=t.debug)!=null?st:!1}"
      prefer-cmcd="${(Ze=t.preferCmcd)!=null?Ze:!1}"
      disable-tracking="${(Oi=t.disableTracking)!=null?Oi:!1}"
      disable-cookies="${(Ni=t.disableCookies)!=null?Ni:!1}"
      prefer-playback="${(Pi=t.preferPlayback)!=null?Pi:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      beacon-collection-domain="${(Ui=t.beaconCollectionDomain)!=null?Ui:!1}"
      player-init-time="${($i=t.playerInitTime)!=null?$i:!1}"
      player-software-name="${(Bi=t.playerSoftwareName)!=null?Bi:!1}"
      player-software-version="${(Wi=t.playerSoftwareVersion)!=null?Wi:!1}"
      env-key="${(Hi=t.envKey)!=null?Hi:!1}"
      custom-domain="${(Fi=t.customDomain)!=null?Fi:!1}"
      src="${t.src?t.src:t.playbackId?rl(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?rl(t):!1}"
      cast-receiver="${(Ki=t.castReceiver)!=null?Ki:!1}"
      drm-token="${(Fa=(Vi=t.tokens)==null?void 0:Vi.drm)!=null?Fa:!1}"
      exportparts="video"
    >
      ${t.storyboard?Jr`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:Jr``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${(Qe=t.placeholder)!=null?Qe:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Wc=t=>t.charAt(0).toUpperCase()+t.slice(1),jv=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Wc((i=t.errorCategory)!=null?i:"video"),n=dd((a=t.errorCategory)!=null?a:ud.VIDEO);if(t.muxCode===P.NETWORK_OFFLINE)return F("Your device appears to be offline",e);if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return F("{category} URL has expired",e).format({category:r});if([P.NETWORK_TOKEN_SUB_MISMATCH,P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING,P.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return F("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===P.NETWORK_TOKEN_MISSING)return F("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===P.NETWORK_NOT_FOUND)return F("{category} does not exist",e).format({category:r});if(t.muxCode===P.NETWORK_NOT_READY)return F("{category} is not currently available",e).format({category:r})}if(t.code){if(t.code===le.MEDIA_ERR_NETWORK)return F("Network Error",e);if(t.code===le.MEDIA_ERR_DECODE)return F("Media Error",e);if(t.code===le.MEDIA_ERR_SRC_NOT_SUPPORTED)return F("Source Not Supported",e)}return F("Error",e)},e0=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Wc((i=t.errorCategory)!=null?i:"video"),n=dd((a=t.errorCategory)!=null?a:ud.VIDEO);return t.muxCode===P.NETWORK_OFFLINE?F("Check your internet connection and try reloading this video.",e):t.muxCode===P.NETWORK_TOKEN_EXPIRED?F("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH?F("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_MALFORMED?F("{category} URL is formatted incorrectly",e).format({category:r}):[P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?F("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[P.NETWORK_TOKEN_MISSING,P.NETWORK_INVALID_URL].includes(t.muxCode)?F("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_NOT_FOUND?"":t.muxCode===P.NETWORK_NOT_READY?F("The live stream or video file are not yet ready.",e):t.message}return t.code&&(t.code===le.MEDIA_ERR_NETWORK||t.code===le.MEDIA_ERR_DECODE||(t.code,le.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},t0=(t,e=!1)=>{let i=jv(t,e),a=e0(t,e);return{title:i,message:a}},i0=t=>{if(t.muxCode){if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===P.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===P.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===P.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===P.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===le.MEDIA_ERR_NETWORK)return"";if(t.code===le.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===le.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Xl=(t,e)=>{let i=i0(t);return{message:t.message,context:t.context,file:i}},a0=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Qs=Oo.createElement("template");"innerHTML"in Qs&&(Qs.innerHTML=a0);var Jl,jl,Hc=class extends On{};Hc.template=(jl=(Jl=Qs.content)==null?void 0:Jl.children)==null?void 0:jl[0];Me.customElements.get("media-theme-gerwig")||Me.customElements.define("media-theme-gerwig",Hc);var r0="gerwig",et={SRC:"src",POSTER:"poster"},h={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge"},zs=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref","proudlydisplaymuxbadge"];function n0(t,e){var i;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:t.storyboard,storyboardSrc:t.getAttribute(h.STORYBOARD_SRC),placeholder:t.getAttribute("placeholder"),themeTemplate:o0(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(h.NOHOTKEYS),hotKeys:t.getAttribute(h.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(E.TARGET_LIVE_WINDOW),streamType:No(t.getAttribute(E.STREAM_TYPE)),primaryColor:t.getAttribute(h.PRIMARY_COLOR),secondaryColor:t.getAttribute(h.SECONDARY_COLOR),accentColor:t.getAttribute(h.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:l0(t),playbackRates:t.getAttribute(h.PLAYBACK_RATES),customDomain:(i=t.getAttribute(E.CUSTOM_DOMAIN))!=null?i:void 0,title:t.getAttribute(h.TITLE),novolumepref:t.hasAttribute(h.NO_VOLUME_PREF),castReceiver:t.castReceiver,proudlyDisplayMuxBadge:t.hasAttribute(h.PROUDLY_DISPLAY_MUX_BADGE),...e,extraSourceParams:t.extraSourceParams}}var s0=Eu.formatErrorMessage;Eu.formatErrorMessage=t=>{var e,i;if(t instanceof le){let a=t0(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a?.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${F("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return s0(t)};function o0(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Me.customElements.get(a);if(n!=null&&n.template)return n.template}}function l0(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function ed(t){let e=t.hasAttribute(h.TITLE)?{video_title:t.getAttribute(h.TITLE)}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var d0=Object.values(E),u0=Object.values(et),c0=Object.values(h),td=Nc(),id="mux-player",ad={isDialogOpen:!1},h0={redundant_streams:!0},jr,en,tn,Mt,an,ki,V,vt,Fc,Xs,Rt,rd,nd,sd,od,ld=class extends Zl{constructor(){super(),Se(this,V),Se(this,jr),Se(this,en,!1),Se(this,tn,{}),Se(this,Mt,!0),Se(this,an,new Rv(this,"hotkeys")),Se(this,ki,{...ad,onCloseErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&Z(this,V,Xs).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(xc(this,Oo.activeElement)||t.preventDefault())}}),qe(this,jr,Jc()),this.attachShadow({mode:"open"}),Z(this,V,Fc).call(this),this.isConnected&&Z(this,V,vt).call(this)}static get NAME(){return id}static get VERSION(){return td}static get observedAttributes(){var t;return[...(t=Zl.observedAttributes)!=null?t:[],...u0,...d0,...c0]}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){var t;let e=(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video");e&&(e.metadata=ed(this))}attributeChangedCallback(t,e,i){switch(Z(this,V,vt).call(this),super.attributeChangedCallback(t,e,i),t){case h.HOTKEYS:x(this,an).value=i;break;case h.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&it(F("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time."));break}case h.THUMBNAIL_TOKEN:{if(i){let a=ga(i);if(a){let{aud:r}=a,n=Un.THUMBNAIL;r!==n&&it(F("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case h.STORYBOARD_TOKEN:{if(i){let a=ga(i);if(a){let{aud:r}=a,n=Un.STORYBOARD;r!==n&&it(F("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case h.DRM_TOKEN:{if(i){let a=ga(i);if(a){let{aud:r}=a,n=Un.DRM;r!==n&&it(F("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case E.PLAYBACK_ID:{i!=null&&i.includes("?token")&&ge(F("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case E.STREAM_TYPE:i&&![oe.LIVE,oe.ON_DEMAND,oe.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Uc({file:"invalid-stream-type.md",message:F("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===oe.LIVE?this.getAttribute(h.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[E.PLAYBACK_ID,et.SRC,h.PLAYBACK_TOKEN].includes(t)&&e!==i&&qe(this,ki,{...x(this,ki),...ad}),Z(this,V,Rt).call(this,{[Mv(t)]:i})}get preferCmcd(){var t;return(t=this.getAttribute(E.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?al.includes(t)?this.setAttribute(E.PREFER_CMCD,t):it(`Invalid value for preferCmcd. Must be one of ${al.join()}`):this.removeAttribute(E.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(s.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(s.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(h.THEME))!=null?t:r0}set theme(t){this.setAttribute(h.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(zs.includes(i))continue;let a=t.getAttribute(i);e[Lc(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;Z(this,V,vt).call(this);let a={...this.themeProps,...t};for(let r in a){if(zs.includes(r))continue;let n=t?.[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(Zs(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(Zs(r),n)}}get playbackId(){var t;return(t=this.getAttribute(E.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(E.PLAYBACK_ID,t):this.removeAttribute(E.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=yt(this,et.SRC))!=null?t:void 0:(e=this.getAttribute(et.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(et.SRC,t):this.removeAttribute(et.SRC)}get poster(){var t;let e=this.getAttribute(et.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){it("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return Sv(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(et.POSTER,t):this.removeAttribute(et.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(h.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(h.STORYBOARD_SRC,t):this.removeAttribute(h.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[oe.LIVE,oe.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return Cv(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(h.AUDIO)}set audio(t){if(!t){this.removeAttribute(h.AUDIO);return}this.setAttribute(h.AUDIO,"")}get hotkeys(){return x(this,an)}get nohotkeys(){return this.hasAttribute(h.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(h.NOHOTKEYS);return}this.setAttribute(h.NOHOTKEYS,"")}get thumbnailTime(){return pe(this.getAttribute(h.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(h.THUMBNAIL_TIME,`${t}`)}get title(){var t;return(t=this.getAttribute(h.TITLE))!=null?t:""}set title(t){t!==this.title&&(t?this.setAttribute(h.TITLE,t):this.removeAttribute("title"),super.title=t)}get placeholder(){var t;return(t=yt(this,h.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(h.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(h.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Me.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(h.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(h.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Me.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(h.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(h.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Me.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(h.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(h.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(h.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(h.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(h.PLAYBACK_RATES))return this.getAttribute(h.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(h.PLAYBACK_RATES);return}this.setAttribute(h.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=pe(this.getAttribute(h.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(h.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=pe(this.getAttribute(h.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(h.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(h.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(h.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(h.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return pe(this.getAttribute(h.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(h.DEFAULT_DURATION):this.setAttribute(h.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(E.PLAYER_INIT_TIME)?pe(this.getAttribute(E.PLAYER_INIT_TIME)):x(this,jr)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(E.PLAYER_INIT_TIME):this.setAttribute(E.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(E.PLAYER_SOFTWARE_NAME))!=null?t:id}get playerSoftwareVersion(){var t;return(t=this.getAttribute(E.PLAYER_SOFTWARE_VERSION))!=null?t:td}get beaconCollectionDomain(){var t;return(t=this.getAttribute(E.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(E.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(E.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(E.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(E.MAX_RESOLUTION,t):this.removeAttribute(E.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(E.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(E.MIN_RESOLUTION,t):this.removeAttribute(E.MIN_RESOLUTION))}get renditionOrder(){var t;return(t=this.getAttribute(E.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(E.RENDITION_ORDER,t):this.removeAttribute(E.RENDITION_ORDER))}get programStartTime(){return pe(this.getAttribute(E.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(E.PROGRAM_START_TIME):this.setAttribute(E.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return pe(this.getAttribute(E.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(E.PROGRAM_END_TIME):this.setAttribute(E.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return pe(this.getAttribute(E.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(E.ASSET_START_TIME):this.setAttribute(E.ASSET_START_TIME,`${t}`)}get assetEndTime(){return pe(this.getAttribute(E.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(E.ASSET_END_TIME):this.setAttribute(E.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(h.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(h.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):h0}set extraSourceParams(t){t==null?this.removeAttribute(h.EXTRA_SOURCE_PARAMS):this.setAttribute(h.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(E.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(E.CUSTOM_DOMAIN,t):this.removeAttribute(E.CUSTOM_DOMAIN))}get envKey(){var t;return(t=yt(this,E.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(E.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(h.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(h.NO_VOLUME_PREF,""):this.removeAttribute(h.NO_VOLUME_PREF)}get debug(){return yt(this,E.DEBUG)!=null}set debug(t){t?this.setAttribute(E.DEBUG,""):this.removeAttribute(E.DEBUG)}get disableTracking(){return yt(this,E.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(E.DISABLE_TRACKING,!!t)}get disableCookies(){return yt(this,E.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(E.DISABLE_COOKIES,""):this.removeAttribute(E.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(E.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:oe.UNKNOWN}set streamType(t){this.setAttribute(E.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(h.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(h.DEFAULT_STREAM_TYPE))!=null?i:oe.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(h.DEFAULT_STREAM_TYPE,t):this.removeAttribute(h.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(h.TARGET_LIVE_WINDOW)?+this.getAttribute(h.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(h.TARGET_LIVE_WINDOW):this.setAttribute(h.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return pe(yt(this,E.START_TIME))}set startTime(t){this.setAttribute(E.START_TIME,`${t}`)}get preferPlayback(){let t=this.getAttribute(E.PREFER_PLAYBACK);if(t===Ka.MSE||t===Ka.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===Ka.MSE||t===Ka.NATIVE?this.setAttribute(E.PREFER_PLAYBACK,t):this.removeAttribute(E.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(Z(this,V,vt).call(this),!this.media){ge("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...ed(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(Z(this,V,vt).call(this),!this.media){ge("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(Z(this,V,vt).call(this),!this.media){ge("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(Z(this,V,vt).call(this),!this.media){ge("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(h.PLAYBACK_TOKEN),e=this.getAttribute(h.DRM_TOKEN),i=this.getAttribute(h.THUMBNAIL_TOKEN),a=this.getAttribute(h.STORYBOARD_TOKEN);return{...x(this,tn),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){qe(this,tn,t??{})}get playbackToken(){var t;return(t=this.getAttribute(h.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(h.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(h.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(h.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(h.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(h.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(h.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(h.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return jc(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return eh(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(h.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(h.CAST_RECEIVER,t):this.removeAttribute(h.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){ge("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(h.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(h.NO_TOOLTIPS);return}this.setAttribute(h.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(h.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(h.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(h.PROUDLY_DISPLAY_MUX_BADGE)}};jr=new WeakMap,en=new WeakMap,tn=new WeakMap,Mt=new WeakMap,an=new WeakMap,ki=new WeakMap,V=new WeakSet,vt=function(){var t,e,i,a;if(!x(this,en)){qe(this,en,!0),Z(this,V,Rt).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Me.HTMLElement))throw""}catch{ge("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof th))throw""}catch{ge("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof rm))throw""}catch{ge("<media-controller> failed to upgrade!")}this.init(),Z(this,V,rd).call(this),Z(this,V,nd).call(this),Z(this,V,sd).call(this),qe(this,Mt,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(y.USER_INACTIVE))!=null?e:!0),Z(this,V,od).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>Z(this,V,Rt).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>Z(this,V,Rt).call(this))}},Fc=function(){var t,e;try{(t=window?.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window?.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Xs=function(t){Object.assign(x(this,ki),t),Z(this,V,Rt).call(this)},Rt=function(t={}){Yv(Zv(n0(this,{...x(this,ki),...t})),this.shadowRoot)},rd=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(zs.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},nd=function(){var t;let e=i=>{let{detail:a}=i;if(a instanceof le||(a=new le(a.message,a.code,a.fatal)),!(a!=null&&a.fatal)){it(a),a.data&&it(`${a.name} data:`,a.data);return}let r=Xl(a);r.message&&Uc(r),ge(a),a.data&&ge(`${a.name} data:`,a.data),Z(this,V,Xs).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof le))return i;let o=Xl((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:o.message?String(o.message):i.player_error_message,player_error_context:o.context?String(o.context):i.player_error_context}}),(t=this.media)==null||t.addEventListener("error",i=>{var a,r;let{detail:n}=i;if(!n){let{message:o,code:l}=(r=(a=this.media)==null?void 0:a.error)!=null?r:{};n=new le(o,l)}n!=null&&n.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:n}))})},sd=function(){var t,e,i,a;let r=()=>Z(this,V,Rt).call(this);(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},od=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===oe.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(u,c,f=!1)=>{r()||Array.from(u&&u.activeCues||[]).forEach(v=>{if(!(!v.snapToLines||v.line<-5||v.line>=0&&v.line<10))if(!c||this.paused){let m=v.text.split(`
`).length,p=-3;this.streamType===oe.LIVE&&(p=-2);let C=p-m;if(v.line===C&&!f)return;a.has(v)||a.set(v,v.line),v.line=C}else setTimeout(()=>{v.line=a.get(v)||"auto"},500)})},o=()=>{var u,c;n(i,(c=(u=this.mediaController)==null?void 0:u.hasAttribute(y.USER_INACTIVE))!=null?c:!1)},l=()=>{var u,c;let f=Array.from(((c=(u=this.mediaController)==null?void 0:u.media)==null?void 0:c.textTracks)||[]).filter(v=>["subtitles","captions"].includes(v.kind)&&v.mode==="showing")[0];f!==i&&i?.removeEventListener("cuechange",o),i=f,i?.addEventListener("cuechange",o),n(i,x(this,Mt))};l(),(t=this.textTracks)==null||t.addEventListener("change",l),(e=this.textTracks)==null||e.addEventListener("addtrack",l),this.addEventListener("userinactivechange",()=>{var u,c;let f=(c=(u=this.mediaController)==null?void 0:u.hasAttribute(y.USER_INACTIVE))!=null?c:!0;x(this,Mt)!==f&&(qe(this,Mt,f),n(i,x(this,Mt)))})};function yt(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}Me.customElements.get("mux-player")||(Me.customElements.define("mux-player",ld),Me.MuxPlayerElement=ld);zc(()=>import("./BlockVideo.DH9yE1O5.js"),__vite__mapDeps([0,1,2]));
