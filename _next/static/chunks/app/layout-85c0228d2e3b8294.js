(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3750:function(n,t,e){Promise.resolve().then(e.t.bind(e,2489,23)),Promise.resolve().then(e.bind(e,22))},22:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return F}});var i=e(230),o=e(7437),r=e(802),c=e(1396),s=e.n(c),l=e(2265),d=e(7241),f=e(4033);function u(){let n=(0,i._)(["\n  position: ",";\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  z-index: 99000;\n  height: 170px;\n  margin-bottom: -172px;\n"]);return u=function(){return n},n}function a(){let n=(0,i._)(["\n  align-items: center;\n"]);return a=function(){return n},n}function x(){let n=(0,i._)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1;\n"]);return x=function(){return n},n}function p(){let n=(0,i._)(["\n  height: ",";\n"]);return p=function(){return n},n}function h(){let n=(0,i._)(["\n  color: #00ff47;\n  font-size: 60px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: normal;\n  letter-spacing: -0.9px;\n  @media screen and (max-width: 720px) {\n    font-size: 32px;\n    letter-spacing: -0.48px;\n  }\n"]);return h=function(){return n},n}function g(){let n=(0,i._)(["\n  width: 100px;\n  height: 100px;\n  justify-self: flex-end;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1100;\n  @media screen and (max-width: 720px) {\n    width: 48px;\n    height: 48px;\n  }\n"]);return g=function(){return n},n}function m(){let n=(0,i._)(["\n  position: fixed;\n  right: ",";\n  top: 0;\n  background-color: #ffffff;\n  width: 500px;\n  max-width: 80vw;\n  height: 100%;\n  z-index: 1000;\n  transition: right 0.3s ease-in-out;\n  padding: 100px 40px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  @media screen and (max-width: 720px) {\n    padding: 48px 28px;\n  }\n"]);return m=function(){return n},n}function v(){let n=(0,i._)(["\n  position: fixed;\n  right: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 990;\n  user-select: none;\n  pointer-events: none;\n  opacity: ",";\n  transition: opacity 0.3s ease-in-out;\n"]);return v=function(){return n},n}function w(){let n=(0,i._)(["\n  color: #000;\n  font-size: 60px;\n  font-weight: 900;\n  @media screen and (max-width: 720px) {\n    font-size: 36px;\n  }\n"]);return w=function(){return n},n}let b=r.ZP.div.withConfig({componentId:"sc-3d0f24b2-0"})(u(),n=>{let{fixed:t}=n;return t?"fixed":"absolute"}),j=(0,r.ZP)(d.Z).withConfig({componentId:"sc-3d0f24b2-1"})(a()),_=r.ZP.div.withConfig({componentId:"sc-3d0f24b2-2"})(x()),y=r.ZP.img.withConfig({componentId:"sc-3d0f24b2-3"})(p(),n=>{let{height:t}=n;return null!=t?t:"100px"}),P=r.ZP.div.withConfig({componentId:"sc-3d0f24b2-4"})(h()),C=r.ZP.img.withConfig({componentId:"sc-3d0f24b2-5"})(g()),I=r.ZP.div.withConfig({componentId:"sc-3d0f24b2-6"})(m(),n=>{let{active:t}=n;return t?0:"-500px"}),Z=r.ZP.div.withConfig({componentId:"sc-3d0f24b2-7"})(v(),n=>{let{active:t}=n;return t?1:0}),k=r.ZP.div.withConfig({componentId:"sc-3d0f24b2-8"})(w());var z=()=>{let[n,t]=(0,l.useState)(""),e=(0,f.usePathname)();(0,l.useEffect)(()=>{let n=async()=>fetch("https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?serviceKey=17j6Te576gevvN%2F1%2BqPWiz9Ym%2Bsqgrb7m8Se6KYLuATyNOU4RrqVwt%2BKYz%2FJ93GviCmoNc6worU6F2xMMxGesg%3D%3D&locdate=20150101&location=".concat(encodeURI("서울"),"&_type=json")).then(n=>n.json());n().then(n=>{var e,i,o;let r=null==n?void 0:null===(o=n.response)||void 0===o?void 0:null===(i=o.body)||void 0===i?void 0:null===(e=i.items)||void 0===e?void 0:e.item.sunset.trim(),c=r.slice(0,2),s=r.slice(2,4);t("".concat(c,":").concat(s))})},[]),(0,l.useEffect)(()=>{console.log(e)},[e]);let[i,r]=(0,l.useState)(!1);return(0,o.jsxs)(b,{fixed:"/"===e,children:[(0,o.jsxs)(j,{children:[(0,o.jsxs)(_,{children:[(0,o.jsxs)(s(),{href:"/",children:[(0,o.jsx)(y,{className:"pc-only",src:"/logo-full.svg"}),(0,o.jsx)(y,{className:"mobile-only",height:"48px",src:"/logo-short.svg"})]}),(0,o.jsxs)(P,{children:["오늘 일몰 시간 ",n]})]}),(0,o.jsx)(C,{src:"/menu.svg",onClick:()=>r(n=>!n)})]}),(0,o.jsxs)(I,{active:i,children:[(0,o.jsx)(k,{children:"HOME"}),(0,o.jsx)(k,{children:"LOGIN"}),(0,o.jsx)(k,{children:"SHOP"})]}),(0,o.jsx)(Z,{active:i})]})};function N(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 6px;\n  width: 100%;\n  padding: 28px;\n  background-color: #fff;\n  color: #000;\n  font-family: Pretendard;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 135%; /* 16.2px */\n  letter-spacing: -0.18px;\n"]);return N=function(){return n},n}function S(){let n=(0,i._)(["\n  height: 20px;\n"]);return S=function(){return n},n}let E=r.ZP.div.withConfig({componentId:"sc-d9242dc6-0"})(N()),O=r.ZP.img.withConfig({componentId:"sc-d9242dc6-1"})(S());var B=()=>(0,o.jsxs)(E,{children:[(0,o.jsx)(O,{src:"/logo-black.svg"}),(0,o.jsx)("div",{children:"\xa9 NightWorker 나이트워커"})]});function R(){let n=(0,i._)(["\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  min-height: 100vh;\n"]);return R=function(){return n},n}let q=r.ZP.div.withConfig({componentId:"sc-4761228d-0"})(R());var F=n=>{let{children:t}=n;return(0,o.jsxs)(q,{children:[(0,o.jsx)(z,{}),t,(0,o.jsx)(B,{})]})}},7241:function(n,t,e){"use strict";var i=e(230),o=e(802);function r(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  overflow: hidden;\n  flex-wrap: wrap;\n  @media screen and (max-width: 720px) {\n    flex-direction: column;\n  }\n"]);return r=function(){return n},n}let c=o.ZP.div.withConfig({componentId:"sc-c4ae599d-0"})(r());t.Z=c},2489:function(){}},function(n){n.O(0,[576,251,971,472,744],function(){return n(n.s=3750)}),_N_E=n.O()}]);