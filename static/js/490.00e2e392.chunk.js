"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[490],{7247:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},1286:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i},4708:function(e,t,n){var r=n(9439),o=n(7462),a=n(2791),i=n(1402),c=n(6199),u=n(184),l=function(e,t){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},s=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,f=t.enableColorScheme,d=void 0!==f&&f;return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(c.Z,{styles:function(e){return function(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};a&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var n,o=(0,r.Z)(t,2),a=o[0],c=o[1];i[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(n=c.palette)?void 0:n.mode}}));var c=(0,o.Z)({html:l(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},s(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),u=null==(t=e.components)||null==(n=t.MuiCssBaseline)?void 0:n.styleOverrides;return u&&(c=[c,u]),c}(e,d)}}),n]})}},5193:function(e,t,n){var r;n.d(t,{Z:function(){return d}});var o=n(9439),a=n(2791),i=n(9120),c=n(3073),u=n(162);function l(e,t,n,r,i){var c=a.useState((function(){return i&&n?n(e).matches:r?r(e).matches:t})),l=(0,o.Z)(c,2),s=l[0],f=l[1];return(0,u.Z)((function(){var t=!0;if(n){var r=n(e),o=function(){t&&f(r.matches)};return o(),r.addListener(o),function(){t=!1,r.removeListener(o)}}}),[e,n]),s}var s=(r||(r=n.t(a,2))).useSyncExternalStore;function f(e,t,n,r,i){var c=a.useCallback((function(){return t}),[t]),u=a.useMemo((function(){if(i&&n)return function(){return n(e).matches};if(null!==r){var t=r(e).matches;return function(){return t}}return c}),[c,e,r,i,n]),l=a.useMemo((function(){if(null===n)return[c,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[c,n,e]),f=(0,o.Z)(l,2),d=f[0],v=f[1];return s(v,d,u)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,i.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,o=(0,c.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),a=o.defaultMatches,u=void 0!==a&&a,d=o.matchMedia,v=void 0===d?r?window.matchMedia:null:d,h=o.ssrMatchMedia,m=void 0===h?null:h,p=o.noSsr,y=void 0!==p&&p;var g="function"===typeof e?e(n):e;g=g.replace(/^@media( ?)/m,"");var b=void 0!==s?f:l,C=b(g,u,v,m,y);return C}},5899:function(e,t,n){n.d(t,{frZ:function(){return f}});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),u(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,u=e.title,l=c(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}function f(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"}}]})(e)}},5861:function(e,t,n){function r(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=490.00e2e392.chunk.js.map