(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n};function u(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function s(t){var e=function(e){var n,i=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var o=t.attr,u=t.title,s=c(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}},eEK3:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=n("tKSW"),c=n("33Fu"),u=n("ZMKu"),s=(n("cJND"),n("DXdq"));var l=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0);var n=t-e;return n<0?-1:n>0?1:0},f=(e.a=function(t){var e,n,o=t.open,d=void 0!==o&&o,m=t.setOpen,p=t.slides,b=void 0===p?[]:p,g=t.currentSlide,h=void 0===g?0:g,v=t.setSlide,x=(e=h,n=Object(r.useRef)(),Object(r.useEffect)((function(){n.current=e})),n.current),y=Object(r.useState)(0),w=y[0],O=y[1],j=function(t){void 0===t&&(t=1),v((function(e){var n=e+t,r=Object(a.b)(0,b.length,n);return O((function(t){return n})),r}))};Object(r.useEffect)((function(){var t=window.addEventListener("keyup",(function(t){"Escape"==t.key&&m(!1),"ArrowRight"==t.key&&j(1),"ArrowLeft"==t.key&&j(-1)}));return function(){window.removeEventListener("keypress",t)}}),[]);return i.a.createElement(u.a,null,d&&i.a.createElement(f,null,i.a.createElement(u.b.div,{initial:{y:"100vh"},animate:{y:0},exit:{y:"100vh"},transition:{type:"spring",damping:20,stiffness:200},className:"overlay"},i.a.createElement("button",{className:"close-button",onClick:function(){return m(!1)}},"×"),i.a.createElement("div",{className:"modal-content"},i.a.createElement("button",{className:"control prev",onClick:function(){return j(-1)}},i.a.createElement(c.a,null)),i.a.createElement("div",{className:"image"},i.a.createElement("div",{className:"info"},h+1," / ",b.length),i.a.createElement(s.a,{maxWidth:1920,node:b[h],className:"img-container",initial:{x:1e3*l(w,x)},animate:{x:0},exit:{x:-1e3*l(w,x)},transition:{type:"spring",duration:1},key:"slide-"+h})),i.a.createElement("button",{className:"control next",onClick:function(){return j(1)}},i.a.createElement(c.b,null))))))},o.b.div.withConfig({displayName:"slideshow-modal__SlideshowContainer",componentId:"dodrtf-0"})(["button{background:none;color:white;font-size:3rem;border:none;cursor:pointer;font-family:sans-serif;font-weight:100;&.close-button{position:absolute;top:1rem;left:1rem;}&.control{height:100%;&.prev{padding-right:1.5rem;}&.next{padding-left:1.5rem;}}&:focus{outline:none;color:#15ff6d;}}.overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;max-width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;background:#000000ab;z-index:100;&:after{content:' ';height:30vh;background:#000000ab;position:absolute;bottom:-30vh;left:0;width:100vw;}}.modal-content{background:#050505;border:1px solid #444;color:#dedede;padding:1rem;border-radius:1rem;display:flex;justify-content:center;align-items:center;flex-direction:row;text-align:center;width:80vw;max-width:100%;position:relative;height:75vh;z-index:110;overflow:hidden;.image{flex:1;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;position:relative;.info{background:#111c;border:1px solid #565656;color:white;padding:0.5rem;font-size:1rem;border-radius:0.25rem;position:absolute;right:0;top:1rem;z-index:111;}.caption{position:absolute;bottom:1rem;z-index:115;left:50%;border:1px solid #23ac78;border-left:3px solid #23ac78;border-right:3px solid #23ac78;padding:1rem;box-sizing:border-box;border-radius:1rem;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;}figure,picture,img,.gatsby-image-wrapper{width:100%;max-height:100%;margin:0;padding:0;object-fit:contain !important;image-rendering:pixelated;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;flex:1;}}}"]))},tKSW:function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return E}));n("E9XD");var r=n("mrSG"),i=function(t,e){return function(n){return Math.max(Math.min(n,e),t)}},o=function(t){return t%1?Number(t.toFixed(5)):t},a=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,c={test:function(t){return"number"==typeof t},parse:parseFloat,transform:function(t){return t}},u=Object(r.a)(Object(r.a)({},c),{transform:i(0,1)}),s=(Object(r.a)(Object(r.a)({},c),{default:1}),function(t){return{test:function(e){return"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length},parse:parseFloat,transform:function(e){return""+e+t}}}),l=(s("deg"),s("%")),f=(s("px"),s("vh"),s("vw"),Object(r.a)(Object(r.a)({},l),{parse:function(t){return l.parse(t)/100},transform:function(t){return l.transform(100*t)}}),i(0,255)),d=function(t){return void 0!==t.red},m=function(t){return void 0!==t.hue};var p=function(t){return function(e){if("string"!=typeof e)return e;for(var n={},r=function(t){return t.substring(t.indexOf("(")+1,t.lastIndexOf(")"))}(e).replace(/(,|\/)/g," ").split(/ \s*/),i=0;i<4;i++)n[t[i]]=void 0!==r[i]?parseFloat(r[i]):1;return n}},b=Object(r.a)(Object(r.a)({},c),{transform:function(t){return Math.round(f(t))}});function g(t,e){return t.startsWith(e)&&a.test(t)}var h={test:function(t){return"string"==typeof t?g(t,"rgb"):d(t)},parse:p(["red","green","blue","alpha"]),transform:function(t){var e=t.red,n=t.green,r=t.blue,i=t.alpha,a=void 0===i?1:i;return function(t){var e=t.red,n=t.green,r=t.blue,i=t.alpha;return"rgba("+e+", "+n+", "+r+", "+(void 0===i?1:i)+")"}({red:b.transform(e),green:b.transform(n),blue:b.transform(r),alpha:o(u.transform(a))})}},v=(p(["hue","saturation","lightness","alpha"]),Object(r.a)(Object(r.a)({},h),{test:function(t){return"string"==typeof t&&g(t,"#")},parse:function(t){var e="",n="",r="";return t.length>4?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),e+=e,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:1}}}),n("82gj"),0);"undefined"!=typeof window&&window.requestAnimationFrame;var x=function(t){return function(e,n,r){return void 0!==r?t(e,n,r):function(r){return t(e,n,r)}}},y=x((function(t,e,n){return Math.min(Math.max(n,t),e)}));var w=function(t){if("number"==typeof t)return function(e){return Math.round(e/t)*t};var e=0,n=t.length;return function(r){var i=Math.abs(t[0]-r);for(e=1;e<n;e++){var o=t[e],a=Math.abs(o-r);if(0===a)return o;if(a>i)return t[e-1];if(e===n-1)return o;i=a}}},O=function(t){return t},j=function(t){return void 0===t&&(t=O),x((function(e,n,r){var i=n-r,o=-(0-e+1)*(0-t(Math.abs(i)));return i<=0?n+o:n-o}))},E=(j(),j(Math.sqrt),x((function(t,e,n){var r=e-t;return((n-t)%r+r)%r+t})));y(0,1)}}]);
//# sourceMappingURL=6e89e9d32daabb14dc926bac8e401c2451f40e9e-6b03e649b1db93d294f5.js.map