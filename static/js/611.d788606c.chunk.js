"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[611],{7247:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),a=r(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},1286:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),a=r(184),i=(0,o.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i},4708:function(e,t,r){var n=r(9439),o=r(7462),a=r(2791),i=r(1402),c=r(6199),l=r(184),u=function(e,t){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},s=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),r=t.children,f=t.enableColorScheme,d=void 0!==f&&f;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(c.Z,{styles:function(e){return function(e){var t,r,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};a&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var r,o=(0,n.Z)(t,2),a=o[0],c=o[1];i[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(r=c.palette)?void 0:r.mode}}));var c=(0,o.Z)({html:u(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},s(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),l=null==(t=e.components)||null==(r=t.MuiCssBaseline)?void 0:r.styleOverrides;return l&&(c=[c,l]),c}(e,d)}}),r]})}},5193:function(e,t,r){var n;r.d(t,{Z:function(){return d}});var o=r(9439),a=r(2791),i=r(9120),c=r(3073),l=r(162);function u(e,t,r,n,i){var c=a.useState((function(){return i&&r?r(e).matches:n?n(e).matches:t})),u=(0,o.Z)(c,2),s=u[0],f=u[1];return(0,l.Z)((function(){var t=!0;if(r){var n=r(e),o=function(){t&&f(n.matches)};return o(),n.addListener(o),function(){t=!1,n.removeListener(o)}}}),[e,r]),s}var s=(n||(n=r.t(a,2))).useSyncExternalStore;function f(e,t,r,n,i){var c=a.useCallback((function(){return t}),[t]),l=a.useMemo((function(){if(i&&r)return function(){return r(e).matches};if(null!==n){var t=n(e).matches;return function(){return t}}return c}),[c,e,n,i,r]),u=a.useMemo((function(){if(null===r)return[c,function(){return function(){}}];var t=r(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[c,r,e]),f=(0,o.Z)(u,2),d=f[0],v=f[1];return s(v,d,l)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,i.Z)(),n="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,o=(0,c.Z)({name:"MuiUseMediaQuery",props:t,theme:r}),a=o.defaultMatches,l=void 0!==a&&a,d=o.matchMedia,v=void 0===d?n?window.matchMedia:null:d,h=o.ssrMatchMedia,m=void 0===h?null:h,p=o.noSsr,g=void 0!==p&&p;var y="function"===typeof e?e(r):e;y=y.replace(/^@media( ?)/m,"");var b=void 0!==s?f:u,C=b(y,l,v,m,g);return C}},5899:function(e,t,r){r.d(t,{frZ:function(){return f}});var n=r(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,l=e.title,u=c(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"}}]})(e)}},5462:function(){}}]);
//# sourceMappingURL=611.d788606c.chunk.js.map