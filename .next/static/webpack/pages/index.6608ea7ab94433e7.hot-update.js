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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var common_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/header/header */ \"./common/header/header.tsx\");\n/* harmony import */ var common_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/footer/footer */ \"./common/footer/footer.tsx\");\n/* harmony import */ var common_card_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/card/card */ \"./common/card/card.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _common_colours__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/colours */ \"./common/colours.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\nvar _jsxFileName = \"/Users/ankit/tactable-blog/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var posts = [],\n      pageCount = 1;\n\n  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery)(['posts', {\n    page: page\n  }], getPosts),\n      postStatus = _useQuery.status,\n      postData = _useQuery.data;\n\n  var _useQuery2 = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery)(['count', {}], getCount),\n      countStatus = _useQuery2.status,\n      countData = _useQuery2.data;\n\n  if (postStatus === 'success') {\n    posts = postData;\n  }\n\n  if (countStatus === 'success') {\n    pageCount = Math.ceil(countData / 5);\n    console.log(pageCount);\n  }\n\n  var handlePagination = function handlePagination(flag) {\n    if (flag === 'next') {\n      setPage(page + 1);\n    } else {\n      setPage(page - 1);\n    }\n\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"title\", {\n        children: \"Tactable Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(common_header_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), postStatus === 'loading' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(LoadingState, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"img\", {\n        src: \"../public/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(ContentWrapper, {\n      children: [postStatus === 'success' && posts.length > 0 && posts.map(function (post) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(common_card_card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          id: post.id,\n          title: post.title,\n          description: post.description,\n          createdAt: post.createdAt,\n          authors: post.authors,\n          comments: post.comments\n        }, post.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(PaginationWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(StyledButton, {\n          onClick: function onClick() {\n            return handlePagination('prev');\n          },\n          disabled: page === 1,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faAngleLeft\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 88\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"span\", {\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 125\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(StyledButton, {\n          onClick: function onClick() {\n            return handlePagination('next');\n          },\n          disabled: countStatus === 'success' && page === pageCount,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"span\", {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 125\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faAngleRight\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 142\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(common_footer_footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"KSwCTetBCHDuITPJUYHcR0yK5Mc=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery, react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery];\n});\n\n_c = Home;\n\nvar getPosts = /*#__PURE__*/function () {\n  var _ref = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(params) {\n    var _params$queryKey, page, response;\n\n    return _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _params$queryKey = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.queryKey, 2), page = _params$queryKey[1].page;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(\"https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?page=\".concat(page, \"&limit=5&sortBy=createdAt&order=desc\"));\n\n          case 3:\n            response = _context.sent;\n\n            if (response.statusText === 'OK') {\n              _context.next = 6;\n              break;\n            }\n\n            throw new Error(\"Problem fetching data\");\n\n          case 6:\n            return _context.abrupt(\"return\", response.data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getPosts(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getCount = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(params) {\n    var _params$queryKey2, response;\n\n    return _Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _params$queryKey2 = (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.queryKey, 2);\n\n            (0,_Users_ankit_tactable_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_params$queryKey2[1]);\n\n            _context2.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(\"https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?sortBy=createdAt&order=desc\");\n\n          case 4:\n            response = _context2.sent;\n\n            if (response.statusText === 'OK') {\n              _context2.next = 7;\n              break;\n            }\n\n            throw new Error(\"Problem fetching data\");\n\n          case 7:\n            return _context2.abrupt(\"return\", response.data.length);\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getCount(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-uprdg-0\"\n})([\"font-family:myriad-pro,sans-serif;font-weight:300;font-style:normal;width:100%;\"]);\n_c2 = Wrapper;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__ContentWrapper\",\n  componentId: \"sc-uprdg-1\"\n})([\"padding:80px;width:80%;margin:auto;\"]);\n_c3 = ContentWrapper;\nvar PaginationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__PaginationWrapper\",\n  componentId: \"sc-uprdg-2\"\n})([\"padding:10px;float:right;\"]);\n_c4 = PaginationWrapper;\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].button.withConfig({\n  displayName: \"pages__StyledButton\",\n  componentId: \"sc-uprdg-3\"\n})([\"background:\", \";border:none;cursor:pointer;color:\", \";font-size:24px;opacity:0.75;transition:transform 0.2s;margin-right:2px;span{margin:0 10px;}&:hover{transform:scale(1.05);}\", \"\"], _common_colours__WEBPACK_IMPORTED_MODULE_12__.colours.white, _common_colours__WEBPACK_IMPORTED_MODULE_12__.colours.primaryBlue, function (_ref3) {\n  var disabled = _ref3.disabled;\n  return disabled && \"\\n    opacity: 0.5;\\n    cursor: initial;\\n    \\n    &:hover {\\n    transform: none;\\n  \";\n});\n_c5 = StyledButton;\nvar LoadingState = styled_components__WEBPACK_IMPORTED_MODULE_15__[\"default\"].div.withConfig({\n  displayName: \"pages__LoadingState\",\n  componentId: \"sc-uprdg-4\"\n})([\"display:flex;justify-content:center;align-items:center;padding:25%;\"]);\n_c6 = LoadingState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"ContentWrapper\");\n$RefreshReg$(_c4, \"PaginationWrapper\");\n$RefreshReg$(_c5, \"StyledButton\");\n$RefreshReg$(_c6, \"LoadingState\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FBZ0JBLFFBQVEsOEZBQXhCO0FBQUEsQ0FsQmMsQ0FBbEI7TUFBTUo7QUEyQk4sSUFBTUssWUFBWSxHQUFHdEQseUVBQUg7RUFBQTtFQUFBO0FBQUEsMkVBQWxCO01BQU1zRDtBQU9OLCtEQUFlL0MsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tbW9uL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21tb24vZm9vdGVyL2Zvb3Rlcic7XG5pbXBvcnQgQ2FyZCBmcm9tICdjb21tb24vY2FyZC9jYXJkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhQW5nbGVMZWZ0LCBmYUFuZ2xlUmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG91cnMgfSBmcm9tICcuLi9jb21tb24vY29sb3Vycyc7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgbGV0IHBvc3RzOiBBcnJheTxQb3N0PiA9IFtdLCBwYWdlQ291bnQ6IG51bWJlciA9IDE7XG5cbiAgY29uc3Qge3N0YXR1czogcG9zdFN0YXR1cywgZGF0YTogcG9zdERhdGF9ID0gdXNlUXVlcnk8YW55LCBFcnJvcj4oXG4gICAgWydwb3N0cycsIHsgcGFnZSB9XSxcbiAgICBnZXRQb3N0c1xuICApO1xuXG4gIGNvbnN0IHtzdGF0dXM6IGNvdW50U3RhdHVzLCBkYXRhOiBjb3VudERhdGF9ID0gdXNlUXVlcnk8YW55LCBFcnJvcj4oXG4gICAgWydjb3VudCcsIHt9XSxcbiAgICBnZXRDb3VudFxuICApO1xuXG4gIGlmIChwb3N0U3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBwb3N0cyA9IHBvc3REYXRhO1xuICB9XG5cbiAgaWYoY291bnRTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgIHBhZ2VDb3VudCA9IE1hdGguY2VpbChjb3VudERhdGEvNSk7XG4gICAgY29uc29sZS5sb2cocGFnZUNvdW50KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSAoZmxhZzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGZsYWcgPT09ICduZXh0Jykge1xuICAgICAgc2V0UGFnZShwYWdlICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFBhZ2UocGFnZSAtIDEpO1xuICAgIH1cbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UYWN0YWJsZSBCbG9nPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Bvc3RTdGF0dXMgPT09ICdsb2FkaW5nJyAmJiAoXG4gICAgICAgIDxMb2FkaW5nU3RhdGU+XG4gICAgICAgICAgPGltZyBzcmM9Jy4uL3B1YmxpYy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgPC9Mb2FkaW5nU3RhdGU+XG4gICAgICApfVxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICB7cG9zdFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICYmIHBvc3RzLmxlbmd0aCA+IDAgJiYgcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGlkPXtwb3N0LmlkfVxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGNyZWF0ZWRBdD17cG9zdC5jcmVhdGVkQXR9XG4gICAgICAgICAgICBhdXRob3JzPXtwb3N0LmF1dGhvcnN9XG4gICAgICAgICAgICBjb21tZW50cz17cG9zdC5jb21tZW50c31cbiAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPFBhZ2luYXRpb25XcmFwcGVyPlxuICAgICAgICAgIDxTdHlsZWRCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hdGlvbigncHJldicpfSBkaXNhYmxlZD17cGFnZSA9PT0gMX0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFuZ2xlTGVmdH0vPjxzcGFuPlByZXY8L3NwYW4+PC9TdHlsZWRCdXR0b24+XG4gICAgICAgICAgPFN0eWxlZEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmF0aW9uKCduZXh0Jyl9IGRpc2FibGVkPXtjb3VudFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICYmIHBhZ2UgPT09IHBhZ2VDb3VudH0+PHNwYW4+TmV4dDwvc3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQW5nbGVSaWdodH0vPjwvU3R5bGVkQnV0dG9uPlxuICAgICAgICA8L1BhZ2luYXRpb25XcmFwcGVyPlxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cblxudHlwZSBQYXJhbXMgPSB7XG4gIHF1ZXJ5S2V5OiBbc3RyaW5nLCB7IHBhZ2U6IG51bWJlciB9XTtcbn07XG5cbmNvbnN0IGdldFBvc3RzID0gYXN5bmMgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gIGNvbnN0IFssIHsgcGFnZSB9XSA9IHBhcmFtcy5xdWVyeUtleTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vNjE0NGU4NDM0MTFjODYwMDE3ZDI1NmYwLm1vY2thcGkuaW8vYXBpL3YxL3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD01JnNvcnRCeT1jcmVhdGVkQXQmb3JkZXI9ZGVzY2ApO1xuXG4gIGlmICghKHJlc3BvbnNlLnN0YXR1c1RleHQgPT09ICdPSycpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvYmxlbSBmZXRjaGluZyBkYXRhXCIpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59XG5cbmNvbnN0IGdldENvdW50ID0gYXN5bmMgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gIGNvbnN0IFssIHt9XSA9IHBhcmFtcy5xdWVyeUtleTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vNjE0NGU4NDM0MTFjODYwMDE3ZDI1NmYwLm1vY2thcGkuaW8vYXBpL3YxL3Bvc3RzP3NvcnRCeT1jcmVhdGVkQXQmb3JkZXI9ZGVzY2ApO1xuXG4gIGlmICghKHJlc3BvbnNlLnN0YXR1c1RleHQgPT09ICdPSycpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvYmxlbSBmZXRjaGluZyBkYXRhXCIpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubGVuZ3RoO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6IG15cmlhZC1wcm8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDgwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IFBhZ2luYXRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuYDtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogJHtjb2xvdXJzLndoaXRlfTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAke2NvbG91cnMucHJpbWFyeUJsdWV9O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgXG4gIHNwYW4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbiAgXG4gICR7KHtkaXNhYmxlZH0pID0+IGRpc2FibGVkICYmIGBcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBpbml0aWFsO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgYH1cbmA7XG5cbmNvbnN0IExvYWRpbmdTdGF0ZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNSU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWQiLCJIZWFkZXIiLCJGb290ZXIiLCJDYXJkIiwic3R5bGVkIiwiYXhpb3MiLCJGb250QXdlc29tZUljb24iLCJmYUFuZ2xlTGVmdCIsImZhQW5nbGVSaWdodCIsInVzZVF1ZXJ5IiwiY29sb3VycyIsIkhvbWUiLCJwYWdlIiwic2V0UGFnZSIsInBvc3RzIiwicGFnZUNvdW50IiwiZ2V0UG9zdHMiLCJwb3N0U3RhdHVzIiwic3RhdHVzIiwicG9zdERhdGEiLCJkYXRhIiwiZ2V0Q291bnQiLCJjb3VudFN0YXR1cyIsImNvdW50RGF0YSIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBhZ2luYXRpb24iLCJmbGFnIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkQXQiLCJhdXRob3JzIiwiY29tbWVudHMiLCJwYXJhbXMiLCJxdWVyeUtleSIsImdldCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIkVycm9yIiwiV3JhcHBlciIsImRpdiIsIkNvbnRlbnRXcmFwcGVyIiwiUGFnaW5hdGlvbldyYXBwZXIiLCJTdHlsZWRCdXR0b24iLCJidXR0b24iLCJ3aGl0ZSIsInByaW1hcnlCbHVlIiwiZGlzYWJsZWQiLCJMb2FkaW5nU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});