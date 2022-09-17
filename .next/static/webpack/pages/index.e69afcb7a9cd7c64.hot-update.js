"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var common_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/header/header */ \"./common/header/header.tsx\");\n/* harmony import */ var common_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/footer/footer */ \"./common/footer/footer.tsx\");\n/* harmony import */ var common_card_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/card/card */ \"./common/card/card.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _common_colours__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/colours */ \"./common/colours.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\nvar _jsxFileName = \"/Users/ankit/tactable-blog/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var posts = [],\n      pageCount = 1;\n\n  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery)(['posts', {\n    page: page\n  }], getPosts),\n      postStatus = _useQuery.status,\n      postData = _useQuery.data;\n\n  var _useQuery2 = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery)(['count', {}], getCount),\n      countStatus = _useQuery2.status,\n      countData = _useQuery2.data;\n\n  if (postStatus === 'success') {\n    posts = postData;\n  }\n\n  if (countStatus === 'success') {\n    var totalCount = countData;\n    pageCount = Math.ceil(totalCount / 5);\n  }\n\n  var handlePagination = function handlePagination(flag) {\n    if (flag === 'next') {\n      setPage(page + 1);\n    } else {\n      setPage(page - 1);\n    }\n\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"title\", {\n        children: \"Tactable Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(common_header_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), postStatus === 'loading' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(LoadingState, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"img\", {\n        src: \"../public/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(ContentWrapper, {\n      children: [postStatus === 'success' && posts.length > 0 && posts.map(function (post) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(common_card_card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          id: post.id,\n          title: post.title,\n          description: post.description,\n          createdAt: post.createdAt,\n          authors: post.authors,\n          comments: post.comments\n        }, post.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(PaginationWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(StyledButton, {\n          onClick: function onClick() {\n            return handlePagination('prev');\n          },\n          disabled: page === 1,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faAngleLeft\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 88\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"span\", {\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 125\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(StyledButton, {\n          onClick: function onClick() {\n            return handlePagination('next');\n          },\n          disabled: countStatus === 'success' && page === pageCount,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"span\", {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 125\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faAngleRight\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 142\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(common_footer_footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"KSwCTetBCHDuITPJUYHcR0yK5Mc=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery, react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery];\n});\n\n_c = Home;\n\nvar getPosts = /*#__PURE__*/function () {\n  var _ref = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(params) {\n    var _params$queryKey, page, response;\n\n    return _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _params$queryKey = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.queryKey, 2), page = _params$queryKey[1].page;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(\"https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?page=\".concat(page, \"&limit=5&sortBy=createdAt&order=desc\"));\n\n          case 3:\n            response = _context.sent;\n\n            if (response.statusText === 'OK') {\n              _context.next = 6;\n              break;\n            }\n\n            throw new Error(\"Problem fetching data\");\n\n          case 6:\n            return _context.abrupt(\"return\", response.data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getPosts(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getCount = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(params) {\n    var _params$queryKey2, response;\n\n    return _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _params$queryKey2 = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.queryKey, 2);\n\n            (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_params$queryKey2[1]);\n\n            _context2.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(\"https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?sortBy=createdAt&order=desc\");\n\n          case 4:\n            response = _context2.sent;\n\n            if (response.statusText === 'OK') {\n              _context2.next = 7;\n              break;\n            }\n\n            throw new Error(\"Problem fetching data\");\n\n          case 7:\n            return _context2.abrupt(\"return\", response.data.length);\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getCount(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-uprdg-0\"\n})([\"font-family:myriad-pro,sans-serif;font-weight:300;font-style:normal;width:100%;\"]);\n_c2 = Wrapper;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__ContentWrapper\",\n  componentId: \"sc-uprdg-1\"\n})([\"padding:80px;width:80%;margin:auto;\"]);\n_c3 = ContentWrapper;\nvar PaginationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__PaginationWrapper\",\n  componentId: \"sc-uprdg-2\"\n})([\"padding:10px;float:right;\"]);\n_c4 = PaginationWrapper;\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].button.withConfig({\n  displayName: \"pages__StyledButton\",\n  componentId: \"sc-uprdg-3\"\n})([\"background:\", \";border:none;cursor:pointer;color:\", \";font-size:24px;opacity:0.75;transition:transform 0.2s;margin-right:2px;span{margin:0 10px;}&:hover{transform:scale(1.05);}\", \"\"], _common_colours__WEBPACK_IMPORTED_MODULE_12__.colours.white, _common_colours__WEBPACK_IMPORTED_MODULE_12__.colours.primaryBlue, function (_ref3) {\n  var disabled = _ref3.disabled;\n  return disabled && \"\\n    opacity: 0.5;\\n    cursor: initial;\\n    \\n    &:hover {\\n    transform: none;\\n  \";\n});\n_c5 = StyledButton;\nvar LoadingState = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__LoadingState\",\n  componentId: \"sc-uprdg-4\"\n})([\"display:flex;justify-content:center;align-items:center;padding:25%;\"]);\n_c6 = LoadingState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"ContentWrapper\");\n$RefreshReg$(_c4, \"PaginationWrapper\");\n$RefreshReg$(_c5, \"StyledButton\");\n$RefreshReg$(_c6, \"LoadingState\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkEsUUFBUSw4RkFBeEI7QUFBQSxDQWxCYyxDQUFsQjtNQUFNSjtBQTJCTixJQUFNSyxZQUFZLEdBQUdyRCx5RUFBSDtFQUFBO0VBQUE7QUFBQSwyRUFBbEI7TUFBTXFEO0FBT04sK0RBQWU5QyxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21tb24vaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbW1vbi9mb290ZXIvZm9vdGVyJztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbW1vbi9jYXJkL2NhcmQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFBbmdsZUxlZnQsIGZhQW5nbGVSaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3VycyB9IGZyb20gJy4uL2NvbW1vbi9jb2xvdXJzJztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBsZXQgcG9zdHM6IEFycmF5PFBvc3Q+ID0gW10sIHBhZ2VDb3VudDogbnVtYmVyID0gMTtcblxuICBjb25zdCB7c3RhdHVzOiBwb3N0U3RhdHVzLCBkYXRhOiBwb3N0RGF0YX0gPSB1c2VRdWVyeTxhbnksIEVycm9yPihcbiAgICBbJ3Bvc3RzJywgeyBwYWdlIH1dLFxuICAgIGdldFBvc3RzXG4gICk7XG5cbiAgY29uc3Qge3N0YXR1czogY291bnRTdGF0dXMsIGRhdGE6IGNvdW50RGF0YX0gPSB1c2VRdWVyeTxhbnksIEVycm9yPihcbiAgICBbJ2NvdW50Jywge31dLFxuICAgIGdldENvdW50XG4gICk7XG5cbiAgaWYgKHBvc3RTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgIHBvc3RzID0gcG9zdERhdGE7XG4gIH1cblxuICBpZihjb3VudFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgY29uc3QgdG90YWxDb3VudDogbnVtYmVyID0gY291bnREYXRhO1xuICAgIHBhZ2VDb3VudCA9IE1hdGguY2VpbCh0b3RhbENvdW50LzUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUGFnaW5hdGlvbiA9IChmbGFnOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoZmxhZyA9PT0gJ25leHQnKSB7XG4gICAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UGFnZShwYWdlIC0gMSk7XG4gICAgfVxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRhY3RhYmxlIEJsb2c8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7cG9zdFN0YXR1cyA9PT0gJ2xvYWRpbmcnICYmIChcbiAgICAgICAgPExvYWRpbmdTdGF0ZT5cbiAgICAgICAgICA8aW1nIHNyYz0nLi4vcHVibGljL2Zhdmljb24uaWNvJyAvPlxuICAgICAgICA8L0xvYWRpbmdTdGF0ZT5cbiAgICAgICl9XG4gICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgIHtwb3N0U3RhdHVzID09PSAnc3VjY2VzcycgJiYgcG9zdHMubGVuZ3RoID4gMCAmJiBwb3N0cy5tYXAoKHBvc3Q6IFBvc3QpID0+IChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgaWQ9e3Bvc3QuaWR9XG4gICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgY3JlYXRlZEF0PXtwb3N0LmNyZWF0ZWRBdH1cbiAgICAgICAgICAgIGF1dGhvcnM9e3Bvc3QuYXV0aG9yc31cbiAgICAgICAgICAgIGNvbW1lbnRzPXtwb3N0LmNvbW1lbnRzfVxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8UGFnaW5hdGlvbldyYXBwZXI+XG4gICAgICAgICAgPFN0eWxlZEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmF0aW9uKCdwcmV2Jyl9IGRpc2FibGVkPXtwYWdlID09PSAxfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQW5nbGVMZWZ0fS8+PHNwYW4+UHJldjwvc3Bhbj48L1N0eWxlZEJ1dHRvbj5cbiAgICAgICAgICA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYXRpb24oJ25leHQnKX0gZGlzYWJsZWQ9e2NvdW50U3RhdHVzID09PSAnc3VjY2VzcycgJiYgcGFnZSA9PT0gcGFnZUNvdW50fT48c3Bhbj5OZXh0PC9zcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFBbmdsZVJpZ2h0fS8+PC9TdHlsZWRCdXR0b24+XG4gICAgICAgIDwvUGFnaW5hdGlvbldyYXBwZXI+XG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG50eXBlIFBhcmFtcyA9IHtcbiAgcXVlcnlLZXk6IFtzdHJpbmcsIHsgcGFnZTogbnVtYmVyIH1dO1xufTtcblxuY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgY29uc3QgWywgeyBwYWdlIH1dID0gcGFyYW1zLnF1ZXJ5S2V5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly82MTQ0ZTg0MzQxMWM4NjAwMTdkMjU2ZjAubW9ja2FwaS5pby9hcGkvdjEvcG9zdHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTUmc29ydEJ5PWNyZWF0ZWRBdCZvcmRlcj1kZXNjYCk7XG5cbiAgaWYgKCEocmVzcG9uc2Uuc3RhdHVzVGV4dCA9PT0gJ09LJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9ibGVtIGZldGNoaW5nIGRhdGFcIik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn1cblxuY29uc3QgZ2V0Q291bnQgPSBhc3luYyAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgY29uc3QgWywge31dID0gcGFyYW1zLnF1ZXJ5S2V5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly82MTQ0ZTg0MzQxMWM4NjAwMTdkMjU2ZjAubW9ja2FwaS5pby9hcGkvdjEvcG9zdHM/c29ydEJ5PWNyZWF0ZWRBdCZvcmRlcj1kZXNjYCk7XG5cbiAgaWYgKCEocmVzcG9uc2Uuc3RhdHVzVGV4dCA9PT0gJ09LJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9ibGVtIGZldGNoaW5nIGRhdGFcIik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YS5sZW5ndGg7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogbXlyaWFkLXBybywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogODBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgUGFnaW5hdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG5gO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiAke2NvbG91cnMud2hpdGV9O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICR7Y29sb3Vycy5wcmltYXJ5Qmx1ZX07XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgb3BhY2l0eTogMC43NTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBcbiAgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICBcbiAgJHsoe2Rpc2FibGVkfSkgPT4gZGlzYWJsZWQgJiYgYFxuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IGluaXRpYWw7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICBgfVxuYDtcblxuY29uc3QgTG9hZGluZ1N0YXRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1JTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsIkNhcmQiLCJzdHlsZWQiLCJheGlvcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQW5nbGVMZWZ0IiwiZmFBbmdsZVJpZ2h0IiwidXNlUXVlcnkiLCJjb2xvdXJzIiwiSG9tZSIsInBhZ2UiLCJzZXRQYWdlIiwicG9zdHMiLCJwYWdlQ291bnQiLCJnZXRQb3N0cyIsInBvc3RTdGF0dXMiLCJzdGF0dXMiLCJwb3N0RGF0YSIsImRhdGEiLCJnZXRDb3VudCIsImNvdW50U3RhdHVzIiwiY291bnREYXRhIiwidG90YWxDb3VudCIsIk1hdGgiLCJjZWlsIiwiaGFuZGxlUGFnaW5hdGlvbiIsImZsYWciLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZWRBdCIsImF1dGhvcnMiLCJjb21tZW50cyIsInBhcmFtcyIsInF1ZXJ5S2V5IiwiZ2V0IiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJXcmFwcGVyIiwiZGl2IiwiQ29udGVudFdyYXBwZXIiLCJQYWdpbmF0aW9uV3JhcHBlciIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsIndoaXRlIiwicHJpbWFyeUJsdWUiLCJkaXNhYmxlZCIsIkxvYWRpbmdTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});