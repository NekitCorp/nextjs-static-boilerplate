(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{94:function(e,n,r){"use strict";var t=r(5893),a=(r(7294),r(9605)),o=r.n(a);n.Z=function(e){var n=e.children;return(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsx)("header",{className:o().header,children:"Header"}),(0,t.jsx)("main",{className:o().main,children:n}),(0,t.jsx)("footer",{className:o().footer,children:"Footer"})]})}},6071:function(e,n,r){"use strict";var t=r(3848),a=r(9448);n.default=void 0;var o=a(r(7294)),c=r(1689),i=r(2441),u=r(5749),s={};function l(e,n,r,t){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,r=(0,i.useRouter)(),a=r&&r.pathname||"/",f=o.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),r=t(n,2),o=r[0],i=r[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var x=o.Children.only(v),L=x&&"object"===typeof x&&x.ref,N=(0,u.useIntersection)({rootMargin:"200px"}),b=t(N,2),E=b[0],g=b[1],j=o.default.useCallback((function(e){E(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[L,E]);(0,o.useEffect)((function(){var e=g&&n&&(0,c.isLocalURL)(d),t="undefined"!==typeof y?y:r&&r.locale,a=s[d+"%"+p+(t?"%"+t:"")];e&&!a&&l(r,d,p,{locale:t})}),[p,d,g,y,n,r]);var w={ref:j,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=t.indexOf("#")<0),n[a?"replace":"push"](r,t,{shallow:o,locale:u,scroll:i}))}(e,r,d,p,h,_,m,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l(r,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var M="undefined"!==typeof y?y:r&&r.locale,k=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,M,r&&r.locales,r&&r.domainLocales);w.href=k||(0,c.addBasePath)((0,c.addLocale)(p,M,r&&r.defaultLocale))}return o.default.cloneElement(x,w)};n.default=f},5749:function(e,n,r){"use strict";var t=r(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,u=(0,a.useRef)(),s=(0,a.useState)(!1),l=t(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,c=t.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r(7294),o=r(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},7929:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return s},default:function(){return l}});var t=r(5893),a=(r(7294),r(1664)),o=r(7830),c=r.n(o),i=function(e){var n=e.articleNames;return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Articles"}),(0,t.jsx)("ul",{className:c().list,children:n.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"article/".concat(e),children:(0,t.jsx)("a",{children:e})})},e)}))})]})},u=r(94),s=!0,l=function(e){var n=e.articleNames;return(0,t.jsx)(u.Z,{children:(0,t.jsx)(i,{articleNames:n})})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7929)}])},7830:function(e){e.exports={list:"Home_list__3RaSt"}},9605:function(e){e.exports={container:"Layout_container__uuzoA",header:"Layout_header__2iJam",footer:"Layout_footer__1amKy",main:"Layout_main__2Mwq5"}},1664:function(e,n,r){e.exports=r(6071)}},function(e){e.O(0,[774,351],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);