(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1263:function(t,e,n){"use strict";n.r(e);var r=n(76),o=n(606),i=n(33);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,t);var e=u(n);function n(t,r){var c,a,u,f;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),c=e.call(this),a=s(c),f=function(t){var e=new o.a(c.addNote),n=0,r="";if(t)for(var a=function(t){if(t&&Object(i.endsWith)(t.name.toLowerCase(),".txt")&&!(t.size>1e6)){var o=new FileReader;o.onload=function(o){var a=o.target.result,u=t.name.slice(0,-4);if(Object(i.startsWith)(a,u)||(a=u+"\n\n"+a),a){var f=t.lastModified/1e3;e.importNote({content:a,modificationDate:f,creationDate:f},c.options),n++,t.name===r?c.emit("status","complete",n):c.emit("status","progress",n)}},o.readAsText(t)}},u=0;u<t.length;u++){var f=t[u];u+1===t.length&&(r=f.name),a(f)}else c.emit("status","error","No text files to import.")},(u="importNotes")in a?Object.defineProperty(a,u,{value:f,enumerable:!0,configurable:!0,writable:!0}):a[u]=f,c.addNote=t,c.options=r,c}return n}(r.EventEmitter);e.default=l},606:function(t,e,n){"use strict";var r=n(76),o=n(33);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=["content","creationDate","deleted","markdown","modificationDate","pinned","tags"],m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,t);var e=f(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),y(p(r=e.call(this)),"importNote",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isTrashed,i=void 0!==n&&n,c=e.isMarkdown,a=void 0!==c&&c,u=Object(o.pick)(t,b);u.publishURL="",u.shareURL="",u.deleted=i,u.tags=Object(o.get)(u,"tags",[]),u.systemTags=Object(o.get)(u,"systemTags",[]),u.pinned&&(u.systemTags.push("pinned"),delete u.pinned),(u.markdown||a)&&(u.systemTags.push("markdown"),delete u.markdown),u.creationDate&&isNaN(u.creationDate)&&(u.creationDate=new Date(u.creationDate).getTime()/1e3),u.creationDate=u.creationDate||u.modificationDate||Date.now(),u.modificationDate=u.modificationDate||u.creationDate||Date.now(),Object.prototype.hasOwnProperty.call(u,"content")||(u.content=""),u.tags&&u.tags.map((function(t){Object(o.isEmpty)(t)})),r.addNote(u)})),y(p(r),"importNotes",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if(Object(o.isEmpty)(t))r.emit("status","error","No notes to import.");else{if(t.activeNotes||t.trashedNotes){var n=Object(o.get)(t,"activeNotes",[]).map((function(t){return r.importNote(t,e)})),i=Object(o.get)(t,"trashedNotes",[]).map((function(t){return r.importNote(t,a(a({},e),{},{isTrashed:!0}))}));return Promise.all(n.concat(i))}r.emit("status","error","Invalid import format: No active or trashed notes found.")}})),r.addNote=t,r}return n}(r.EventEmitter);e.a=m}}]);