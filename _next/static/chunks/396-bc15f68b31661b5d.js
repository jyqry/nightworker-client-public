(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{4018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(8254);var n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1711:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8254),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5046:function(e,t,r){"use strict";var n=r(9182),o=r(9018),a=r(7740),u=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});var s=r(1024)._(r(2265)),l=r(7906),f=r(748),p=r(2881),d=r(4319),h=r(4018),v=r(7654),m=r(8867),y=r(6106),g=r(1711),b=r(67),O=r(234),P=new Set;function j(e,t,r,n,o,a){if(a||(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(P.has(u))return;P.add(u)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function R(e){return"string"==typeof e?e:(0,p.formatUrl)(e)}var _=s.default.forwardRef(function(e,t){var r,n,i=e.href,p=e.as,P=e.children,_=e.prefetch,w=void 0===_?null:_,E=e.passHref,S=e.replace,k=e.shallow,x=e.scroll,M=e.locale,N=e.onClick,C=e.onMouseEnter,I=e.onTouchStart,T=e.legacyBehavior,L=void 0!==T&&T,U=a(e,u);r=P,L&&("string"==typeof r||"number"==typeof r)&&(r=s.default.createElement("a",null,r));var A=s.default.useContext(v.RouterContext),D=s.default.useContext(m.AppRouterContext),W=null!=A?A:D,K=!A,z=!1!==w,B=null===w?O.PrefetchKind.AUTO:O.PrefetchKind.FULL,q=s.default.useMemo(function(){if(!A){var e=R(i);return{href:e,as:p?R(p):e}}var t=o((0,l.resolveHref)(A,i,!0),2),r=t[0],n=t[1];return{href:r,as:p?(0,l.resolveHref)(A,p):n||r}},[A,i,p]),F=q.href,$=q.as,Y=s.default.useRef(F),H=s.default.useRef($);L&&(n=s.default.Children.only(r));var Q=L?n&&"object"==typeof n&&n.ref:t,V=o((0,y.useIntersection)({rootMargin:"200px"}),3),Z=V[0],G=V[1],J=V[2],X=s.default.useCallback(function(e){(H.current!==$||Y.current!==F)&&(J(),H.current=$,Y.current=F),Z(e),Q&&("function"==typeof Q?Q(e):"object"==typeof Q&&(Q.current=e))},[$,Q,F,J,Z]);s.default.useEffect(function(){W&&G&&z&&j(W,F,$,{locale:M},{kind:B},K)},[$,F,G,M,z,null==A?void 0:A.locale,W,K,B]);var ee={ref:X,onClick:function(e){L||"function"!=typeof N||N(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),W&&!e.defaultPrevented&&function(e,t,r,n,o,a,u,i,c){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((l=e.currentTarget.getAttribute("target"))&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!c&&!(0,f.isLocalURL)(r)))){e.preventDefault();var l,p=function(){var e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?s.default.startTransition(p):p()}}(e,W,F,$,S,k,x,M,K)},onMouseEnter:function(e){L||"function"!=typeof C||C(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),W&&(z||!K)&&j(W,F,$,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:B},K)},onTouchStart:function(e){L||"function"!=typeof I||I(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),W&&(z||!K)&&j(W,F,$,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:B},K)}};if((0,d.isAbsoluteUrl)($))ee.href=$;else if(!L||E||"a"===n.type&&!("href"in n.props)){var et=void 0!==M?M:null==A?void 0:A.locale,er=(null==A?void 0:A.isLocaleDomain)&&(0,g.getDomainLocale)($,et,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);ee.href=er||(0,b.addBasePath)((0,h.addLocale)($,et,null==A?void 0:A.defaultLocale))}return L?s.default.cloneElement(n,ee):s.default.createElement("a",c(c({},U),ee),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1075:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});var r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){var t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7906:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});var n=r(6954),o=r(2881),a=r(5156),u=r(4319),i=r(8254),c=r(748),s=r(2250),l=r(1965);function f(e,t,r){var f,p="string"==typeof t?t:(0,o.formatWithValidation)(t),d=p.match(/^[a-zA-Z]{1,}:\/\//),h=d?p.slice(d[0].length):p;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+p+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");var v=(0,u.normalizeRepeatedSlashes)(h);p=(d?d[0]:"")+v}if(!(0,c.isLocalURL)(p))return r?[p]:p;try{f=new URL(p.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{var m=new URL(p,f);m.pathname=(0,i.normalizePathTrailingSlash)(m.pathname);var y="";if((0,s.isDynamicRoute)(m.pathname)&&m.searchParams&&r){var g=(0,n.searchParamsToUrlQuery)(m.searchParams),b=(0,l.interpolateAs)(m.pathname,m.pathname,g),O=b.result,P=b.params;O&&(y=(0,o.formatWithValidation)({pathname:O,hash:m.hash,query:(0,a.omit)(g,P)}))}var j=m.origin===f.origin?m.href.slice(m.origin.length):m.href;return r?[j,y||j]:j}catch(e){return r?[p]:p}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6106:function(e,t,r){"use strict";var n=r(9018);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});var o=r(2265),a=r(1075),u="function"==typeof IntersectionObserver,i=new Map,c=[];function s(e){var t=e.rootRef,r=e.rootMargin,s=e.disabled||!u,l=n((0,o.useState)(!1),2),f=l[0],p=l[1],d=(0,o.useRef)(null),h=(0,o.useCallback)(function(e){d.current=e},[]);return(0,o.useEffect)(function(){if(u){if(!s&&!f){var e,n,o,l,h=d.current;if(h&&h.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=i.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),i.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(l=e.elements).set(h,function(e){return e&&p(e)}),o.observe(h),function(){if(l.delete(h),o.unobserve(h),0===l.size){o.disconnect(),i.delete(n);var e=c.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var v=(0,a.requestIdleCallback)(function(){return p(!0)});return function(){return(0,a.cancelIdleCallback)(v)}}},[s,r,t,f,d.current]),[h,f,(0,o.useCallback)(function(){p(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8773:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});var r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},7654:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});var n=r(1024)._(r(2265)).default.createContext(null)},2881:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},urlObjectKeys:function(){return u},formatWithValidation:function(){return i}});var n=r(8533)._(r(6954)),o=/https?|ftp|gopher|file/;function a(e){var t=e.auth,r=e.hostname,a=e.protocol||"",u=e.pathname||"",i=e.hash||"",c=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),c&&"object"==typeof c&&(c=String(n.urlQueryToSearchParams(c)));var l=e.search||c&&"?"+c||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),u&&"/"!==u[0]&&(u="/"+u)):s||(s=""),i&&"#"!==i[0]&&(i="#"+i),l&&"?"!==l[0]&&(l="?"+l),""+a+s+(u=u.replace(/[?#]/g,encodeURIComponent))+(l=l.replace("#","%23"))+i}var u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return a(e)}},2250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});var n=r(7183),o=r(3318)},1965:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});var n=r(8229),o=r(9603);function a(e,t,r){var a="",u=(0,o.getRouteRegex)(e),i=u.groups,c=(t!==e?(0,n.getRouteMatcher)(u)(t):"")||r;a=e;var s=Object.keys(i);return s.every(function(e){var t=c[e]||"",r=i[e],n=r.repeat,o=r.optional,u="["+(n?"...":"")+e+"]";return o&&(u=(t?"":"/")+"["+u+"]"),n&&!Array.isArray(t)&&(t=[t]),(o||e in c)&&(a=a.replace(u,n?t.map(function(e){return encodeURIComponent(e)}).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},3318:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});var n=r(4507),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},748:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});var n=r(4319),o=r(3908);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{var t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},5156:function(e,t){"use strict";function r(e,t){var r={};return Object.keys(e).forEach(function(n){t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},6954:function(e,t,r){"use strict";var n=r(9018);function o(e){var t={};return e.forEach(function(e,r){void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function a(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function u(e){var t=new URLSearchParams;return Object.entries(e).forEach(function(e){var r=n(e,2),o=r[0],u=r[1];Array.isArray(u)?u.forEach(function(e){return t.append(o,a(e))}):t.set(o,a(u))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(function(t){Array.from(t.keys()).forEach(function(t){return e.delete(t)}),t.forEach(function(t,r){return e.append(r,t)})}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return u},assign:function(){return i}})},8229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});var n=r(4319);function o(e){var t=e.re,r=e.groups;return function(e){var o=t.exec(e);if(!o)return!1;var a=function(e){try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},u={};return Object.keys(r).forEach(function(e){var t=r[e],n=o[t.pos];void 0!==n&&(u[e]=~n.indexOf("/")?n.split("/").map(function(e){return a(e)}):t.repeat?[a(n)]:a(n))}),u}}},9603:function(e,t,r){"use strict";var n=r(9182);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return f},getNamedRouteRegex:function(){return h},getNamedMiddlewareRegex:function(){return v}});var u=r(4507),i=r(8773),c=r(5937);function s(e){var t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));var r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){var t=(0,c.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(function(e){var t=u.INTERCEPTION_ROUTE_MARKERS.find(function(t){return e.startsWith(t)}),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){var a=s(o[1]),c=a.key,l=a.optional,f=a.repeat;return r[c]={pos:n++,repeat:f,optional:l},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,i.escapeStringRegexp)(e);var p=s(o[1]),d=p.key,h=p.repeat,v=p.optional;return r[d]={pos:n++,repeat:h,optional:v},h?v?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}).join(""),groups:r}}function f(e){var t=l(e),r=t.parameterizedRoute,n=t.groups;return{re:RegExp("^"+r+"(?:/)?$"),groups:n}}function p(e){var t=e.getSafeRouteKey,r=e.segment,n=e.routeKeys,o=e.keyPrefix,a=s(r),u=a.key,i=a.optional,c=a.repeat,l=u.replace(/\W/g,"");o&&(l=""+o+l);var f=!1;return(0===l.length||l.length>30)&&(f=!0),isNaN(parseInt(l.slice(0,1)))||(f=!0),f&&(l=t()),o?n[l]=""+o+u:n[l]=""+u,c?i?"(?:/(?<"+l+">.+?))?":"/(?<"+l+">.+?)":"/(?<"+l+">[^/]+?)"}function d(e,t){var r,n=(0,c.removeTrailingSlash)(e).slice(1).split("/"),o=(r=0,function(){for(var e="",t=++r;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),a={};return{namedParameterizedRoute:n.map(function(e){var r=u.INTERCEPTION_ROUTE_MARKERS.some(function(t){return e.startsWith(t)}),n=e.match(/\[((?:\[.*\])|.+)\]/);return r&&n?p({getSafeRouteKey:o,segment:n[1],routeKeys:a,keyPrefix:t?"nxtI":void 0}):n?p({getSafeRouteKey:o,segment:n[1],routeKeys:a,keyPrefix:t?"nxtP":void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:a}}function h(e,t){var r=d(e,t);return a(a({},f(e)),{},{namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys})}function v(e,t){var r=l(e).parameterizedRoute,n=t.catchAll,o=void 0===n||n;return"/"===r?{namedRegex:"^/"+(o?".*":"")+"$"}:{namedRegex:"^"+d(e,!1).namedParameterizedRoute+(o?"(?:(/.*)?)":"")+"$"}}},7183:function(e,t,r){"use strict";var n=r(2159),o=r(9428),a=r(3189);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return i}});var u=function(){function e(){o(this,e),this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}return a(e,[{key:"insert",value:function(e){this._insert(e.split("/").filter(Boolean),[],!1)}},{key:"smoosh",value:function(){return this._smoosh()}},{key:"_smoosh",value:function(e){var t=this;void 0===e&&(e="/");var r=n(this.children.keys()).sort();null!==this.slugName&&r.splice(r.indexOf("[]"),1),null!==this.restSlugName&&r.splice(r.indexOf("[...]"),1),null!==this.optionalRestSlugName&&r.splice(r.indexOf("[[...]]"),1);var o=r.map(function(r){return t.children.get(r)._smoosh(""+e+r+"/")}).reduce(function(e,t){return[].concat(n(e),n(t))},[]);if(null!==this.slugName&&o.push.apply(o,n(this.children.get("[]")._smoosh(e+"["+this.slugName+"]/"))),!this.placeholder){var a="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+a+'" and "'+a+"[[..."+this.optionalRestSlugName+']]").');o.unshift(a)}return null!==this.restSlugName&&o.push.apply(o,n(this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/"))),null!==this.optionalRestSlugName&&o.push.apply(o,n(this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/"))),o}},{key:"_insert",value:function(t,r,n){if(0===t.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");var o=t[0];if(o.startsWith("[")&&o.endsWith("]")){var a=function(e,t){if(null!==e&&e!==t)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+t+"').");r.forEach(function(e){if(e===t)throw Error('You cannot have the same slug name "'+t+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+t+'" differ only by non-word symbols within a single dynamic path')}),r.push(t)},u=o.slice(1,-1),i=!1;if(u.startsWith("[")&&u.endsWith("]")&&(u=u.slice(1,-1),i=!0),u.startsWith("...")&&(u=u.substring(3),n=!0),u.startsWith("[")||u.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+u+"').");if(u.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+u+"').");if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+t[0]+'" ).');a(this.optionalRestSlugName,u),this.optionalRestSlugName=u,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+t[0]+'").');a(this.restSlugName,u),this.restSlugName=u,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+t[0]+'").');a(this.slugName,u),this.slugName=u,o="[]"}}this.children.has(o)||this.children.set(o,new e),this.children.get(o)._insert(t.slice(1),r,n)}}]),e}();function i(e){var t=new u;return e.forEach(function(e){return t.insert(e)}),t.smoosh()}},4319:function(e,t,r){"use strict";var n=r(4001),o=r(3189),a=r(9428),u=r(2424),i=r(5766),c=r(5819),s=r(9090),l=r(9588);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return p},execOnce:function(){return d},isAbsoluteUrl:function(){return v},getLocationOrigin:function(){return m},getURL:function(){return y},getDisplayName:function(){return g},isResSent:function(){return b},normalizeRepeatedSlashes:function(){return O},loadGetInitialProps:function(){return P},SP:function(){return R},ST:function(){return _},DecodeError:function(){return w},NormalizeError:function(){return E},PageNotFoundError:function(){return S},MissingStaticPage:function(){return k},MiddlewareNotFoundError:function(){return x},stringifyError:function(){return M}});var p=["CLS","FCP","FID","INP","LCP","TTFB"];function d(e){var t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e.apply(void 0,o)),t}}var h=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,v=function(e){return h.test(e)};function m(){var e=window.location,t=e.protocol,r=e.hostname,n=e.port;return t+"//"+r+(n?":"+n:"")}function y(){var e=window.location.href,t=m();return e.substring(t.length)}function g(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function b(e){return e.finished||e.headersSent}function O(e){var t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}function P(e,t){return j.apply(this,arguments)}function j(){return(j=l(n.mark(function e(t,r){var o,a;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 4:if(o=r.res||r.ctx&&r.ctx.res,t.getInitialProps){e.next=12;break}if(!(r.ctx&&r.Component)){e.next=11;break}return e.next=9,P(r.Component,r.ctx);case 9:return e.t0=e.sent,e.abrupt("return",{pageProps:e.t0});case 11:return e.abrupt("return",{});case 12:return e.next=14,t.getInitialProps(r);case 14:if(a=e.sent,!(o&&b(o))){e.next=17;break}return e.abrupt("return",a);case 17:if(a){e.next=20;break}throw Error('"'+g(t)+'.getInitialProps()" should resolve to an object. But found "'+a+'" instead.');case 20:return e.abrupt("return",a);case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}var R="undefined"!=typeof performance,_=R&&["mark","measure","getEntriesByName"].every(function(e){return"function"==typeof performance[e]}),w=function(e){u(r,e);var t=f(r);function r(){return a(this,r),t.apply(this,arguments)}return o(r)}(s(Error)),E=function(e){u(r,e);var t=f(r);function r(){return a(this,r),t.apply(this,arguments)}return o(r)}(s(Error)),S=function(e){u(r,e);var t=f(r);function r(e){var n;return a(this,r),(n=t.call(this)).code="ENOENT",n.name="PageNotFoundError",n.message="Cannot find module for page: "+e,n}return o(r)}(s(Error)),k=function(e){u(r,e);var t=f(r);function r(e,n){var o;return a(this,r),(o=t.call(this)).message="Failed to load static file for page: "+e+" "+n,o}return o(r)}(s(Error)),x=function(e){u(r,e);var t=f(r);function r(){var e;return a(this,r),(e=t.call(this)).code="ENOENT",e.message="Cannot find the middleware module",e}return o(r)}(s(Error));function M(e){return JSON.stringify({message:e.message,stack:e.stack})}},1396:function(e,t,r){e.exports=r(5046)}}]);