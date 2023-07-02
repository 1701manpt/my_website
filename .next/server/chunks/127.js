exports.id = 127;
exports.ids = [127];
exports.modules = {

/***/ 4025:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7602))

/***/ }),

/***/ 7602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Sidebar({ navLinks }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col w-full divide-y bg-sky-50 rounded shadow",
        children: navLinks.map((link, i)=>{
            const isActive = pathname.startsWith(link.href) && pathname.endsWith(link.href);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "rounded px-4 py-2" + " " + (isActive && "text-sky-50 bg-sky-400"),
                href: link.href,
                children: link.name
            }, i);
        })
    });
}


/***/ }),

/***/ 1324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UserLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/app/user/sidebar.js

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Source_Code\my_website\src\app\user\sidebar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const sidebar = (__default__);
;// CONCATENATED MODULE: ./src/app/user/layout.js


function UserLayout({ children }) {
    const dataSidebar = [
        {
            name: "Th\xf4ng tin c\xe1 nh\xe2n",
            href: "/user"
        },
        {
            name: "B\xe0i đăng của t\xf4i",
            href: "/user/posts"
        },
        {
            name: "Lịch sử tương t\xe1c",
            href: "/user/history"
        },
        {
            name: "C\xe0i đặt t\xe0i khoản",
            href: "/user/account"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex sm:flex-row flex-col w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:w-80 w-full text-center sm:text-start",
                children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar, {
                    navLinks: dataSidebar
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-4 py-2 w-full",
                children: children
            })
        ]
    });
}


/***/ })

};
;