exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 2767:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 8496:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2763))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 2763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(5214);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(8360);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/header.js


function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-sky-100 h-14 fixed w-full flex justify-center z-10 shadow-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "xl:w-[1280px] px-4 bg-transparent w-full h-full mt-0 flex justify-between items-center text-sky-950",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "text-2xl font-bold sm:block hidden drop-shadow-xl p-1 rounded",
                    children: "Man PT"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center items-center text-sm rounded shadow-lg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "p-2 rounded-l w-auto focus:w-auto focus:ring-inset focus:ring-1 focus:ring-sky-500 outline-none caret-rose-500",
                            placeholder: "Nhập từ kh\xf3a"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "p-2 rounded-r bg-sky-500 text-sky-50",
                            children: "\uD83D\uDD0D"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/user",
                    className: "text-center p-2 h-10 w-10 rounded-full bg-sky-900 text-sky-50 shadow-lg",
                    children: "N"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./src/app/navbar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Navbar({ navLinks }) {
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-14 fixed sm:flex flex-wrap justify-center hidden h-10 w-full bg-sky-700 z-10 shadow-lg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "w-[1280px] flex h-full justify-start items-center text-sky-50 bg-transparent divide-x",
            children: navLinks.map((link, i)=>{
                const isActive = pathname.startsWith(link.href) && pathname.endsWith(link.href);
                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "flex items-center px-4 h-full text-center" + " " + (isActive && "bg-white text-sky-950"),
                    href: link.href,
                    children: link.name
                }, i);
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/app/main.js

function Main({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center bg-gray-50 sm:pt-24 pt-14",
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "w-[1280px] p-4 xl:my-4 rounded min-h-screen",
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./src/app/footer.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Footer() {
    const dataNavbar = [
        {
            name: "Trang chủ",
            href: "/"
        },
        {
            name: "Sự kiện",
            href: "/events"
        },
        {
            name: "B\xe0i đăng gần đ\xe2y",
            href: "/posts"
        },
        {
            name: "Giới thiệu",
            href: "/about"
        },
        {
            name: "Li\xean hệ",
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full h-96 flex justify-center items-center bg-sky-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "grid grid-cols-2 gap-2 pt-10 w-[1280px] px-4 h-full text-sky-50",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col",
                    children: dataNavbar.map((link, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "py-1 my-1 text-sky-50 w-fit",
                            href: link.href,
                            children: link.name
                        }, i);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "py-1 my-1 text-sky-50 w-fit",
                            href: "https://www.youtube.com/@1701manpt",
                            target: "_blank",
                            children: "Youtube"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "py-1 my-1 text-sky-50 w-fit",
                            href: "https://github.com/1701manpt",
                            target: "_blank",
                            children: "Github"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "py-1 my-1 text-sky-50 w-fit",
                            href: "https://www.facebook.com/thaiphuongnam1071",
                            target: "_blank",
                            children: "Facebook"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/layout.js
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 







const metadata = {
    title: "Man PT - Th\xe1i Phương Nam",
    description: "Đ\xe2y l\xe0 trang web của Th\xe1i Phương Nam. Với t\xean đại diện l\xe0 Man PT."
};
function RootLayout({ children }) {
    const dataNavbar = [
        {
            name: "Trang chủ",
            href: "/"
        },
        {
            name: "Sự kiện",
            href: "/events"
        },
        {
            name: "B\xe0i đăng gần đ\xe2y",
            href: "/posts"
        },
        {
            name: "Giới thiệu",
            href: "/about"
        },
        {
            name: "Li\xean hệ",
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-sky-950 sm:static relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                        navLinks: dataNavbar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "#",
                        className: "animate-bounce shadow-lg flex justify-center items-center text-sky-50 rounded-full bg-sky-950 p-2 fixed xl:right-10 xl:bottom-10 right-1 bottom-1 xl:w-10 xl:h-10 w-6 h-6",
                        children: "↑"
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 8227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Source_Code\my_website\src\app\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ icon_next_metadata_)
});

// NAMESPACE OBJECT: ./src/app/icon.js
var icon_namespaceObject = {};
__webpack_require__.r(icon_namespaceObject);
__webpack_require__.d(icon_namespaceObject, {
  contentType: () => (contentType),
  "default": () => (Icon),
  runtime: () => (runtime),
  size: () => (size)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/image-response.js
var image_response = __webpack_require__(5216);
;// CONCATENATED MODULE: ./src/app/icon.js


// Route segment config
const runtime = "edge";
// Image metadata
const size = {
    width: 32,
    height: 32
};
const contentType = "image/png";
// Image generation
function Icon() {
    return new image_response/* default */.Z(// ImageResponse JSX element
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            fontSize: 24,
            background: "transparent",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0284c7",
            borderRadius: "50%",
            border: "2px solid #075985"
        },
        children: "M"
    }), // ImageResponse options
    {
        // For convenience, we can re-use the exported icons size metadata
        // config to also set the ImageResponse's width and height.
        ...size
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/lib/metadata/get-metadata-route.js
var get_metadata_route = __webpack_require__(3180);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=icon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/icon.js?__next_metadata__
    
    

    const imageModule = { ...icon_namespaceObject }
    /* harmony default export */ async function icon_next_metadata_(props) {
      const { __metadata_id__: _, ...params } = props.params
      const imageUrl = (0,get_metadata_route.fillMetadataSegment)(".", params, "icon")

      const { generateImageMetadata } = imageModule

      function getImageMetadata(imageMetadata, idParam) {
        const data = {
          alt: imageMetadata.alt,
          type: imageMetadata.contentType || 'image/png',
          url: imageUrl + (idParam ? ('/' + idParam) : '') + "?54f57e01da09989d",
        }
        const { size } = imageMetadata
        if (size) {
          data.sizes = size.width + "x" + size.height;
        }
        return data
      }

      if (generateImageMetadata) {
        const imageMetadataArray = await generateImageMetadata({ params })
        return imageMetadataArray.map((imageMetadata, index) => {
          const idParam = (imageMetadata.id || index) + ''
          return getImageMetadata(imageMetadata, idParam)
        })
      } else {
        return [getImageMetadata(imageModule, '')]
      }
    }

/***/ }),

/***/ 8360:
/***/ (() => {



/***/ })

};
;