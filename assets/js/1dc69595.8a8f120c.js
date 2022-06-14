"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5612],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||l[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1866:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i={},c=void 0,u={unversionedId:"nodes/debug",id:"version-1.x.x/nodes/debug",isDocsHomePage:!1,title:"debug",description:"debug",source:"@site/versioned_docs/version-1.x.x/nodes/debug.md",sourceDirName:"nodes",slug:"/nodes/debug",permalink:"/react-native-reanimated/docs/1.x.x/nodes/debug",version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"cond",permalink:"/react-native-reanimated/docs/1.x.x/nodes/cond"},next:{title:"defined",permalink:"/react-native-reanimated/docs/1.x.x/nodes/defined"}},d=[{value:"<code>debug</code>",id:"debug",children:[]}],s={toc:d};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"debug"},(0,a.kt)("inlineCode",{parentName:"h2"},"debug")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"debug(messageString, valueNode);\n")),(0,a.kt)("p",null,"When the node is evaluated, it prints a string that contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"messageString")," concatenated with the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"valueNode"),". This then returns the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"valueNode"),". Logs are printed in the JS debugger if it's attached, in console if Expo client is being used, or else in the native console. Logs are visible only in ",(0,a.kt)("inlineCode",{parentName:"p"},"DEV")," mode and have no effect on production builds. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"messageString")," should be a normal string, not an animated node."))}l.isMDXComponent=!0}}]);