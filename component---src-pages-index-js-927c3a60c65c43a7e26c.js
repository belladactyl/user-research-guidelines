webpackJsonp([35783957827783],{76:function(e,t){"use strict";function r(e,t,f){if("string"!=typeof t){if(u){var d=s(t);d&&d!==u&&r(e,d,f)}var m=o(t);c&&(m=m.concat(c(t)));for(var p=0;p<m.length;++p){var y=m[p];if(!(a[y]||n[y]||f&&f[y])){var v=i(t,y);try{l(e,y,v)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,o=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=r},45:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}var n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,c,i=r(e),s=1;s<arguments.length;s++){a=Object(arguments[s]);for(var u in a)l.call(a,u)&&(i[u]=a[u]);if(n){c=n(a);for(var f=0;f<c.length;f++)o.call(a,c[f])&&(i[c[f]]=a[c[f]])}}return i}},48:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}t.__esModule=!0;var l=r(1),o=a(l),c=r(29),i=a(c);t.default=function(e){var t=n(e,[]),r=t.navItems.sort(function(e,t){return e.title<t.title?-1:e.title>t.title?1:0});return o.default.createElement("nav",{className:"willow-secondary-nav",role:"navigation","aria-label":"secondary"},o.default.createElement("h1",{className:"willow-secondary-nav__heading"},"Methods"),o.default.createElement("ul",{className:"willow-secondary-nav__list"},r.map(function(e,r){if(e.url)return o.default.createElement("li",{className:"willow-secondary-nav__item",key:r},o.default.createElement(i.default,{to:e.url,className:t.page===e.url?"willow-secondary-nav__link willow-secondary-nav__link--active":"willow-secondary-nav__link"},e.title))})))},e.exports=t.default},131:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(1),l=a(n),o=r(48),c=a(o);t.default=function(e){var t=e.data,r=t.markdownRemark,a=t.markdownRemark.fields.slug,n=t.allMarkdownRemark.edges,o=Object.keys(n),i=[];return o.map(function(e){return i.push(n[e].node.frontmatter),i}),l.default.createElement("main",{className:"willow-page-content flex-grow",id:"mainContent"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-3"},l.default.createElement(c.default,{navItems:i,page:a})),l.default.createElement("div",{className:"col-md-9"},l.default.createElement("h1",null,r.frontmatter.title),l.default.createElement("section",{dangerouslySetInnerHTML:{__html:r.html}})))))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-927c3a60c65c43a7e26c.js.map