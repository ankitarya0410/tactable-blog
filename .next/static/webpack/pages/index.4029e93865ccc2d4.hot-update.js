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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var common_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/header/header */ \"./common/header/header.tsx\");\n/* harmony import */ var common_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/footer/footer */ \"./common/footer/footer.tsx\");\n/* harmony import */ var common_card_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/card/card */ \"./common/card/card.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/ankit/tactable-blog/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst HomePage = () => {\n  _s();\n\n  const {\n    0: page,\n    1: setPage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  let response = [];\n  const {\n    status,\n    error,\n    data\n  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)(['posts', {\n    page\n  }], getPosts);\n\n  const useMultipleQuery = () => {};\n\n  if (status === 'success') {\n    response = {\n      totalCount: !!data && data.length > 0 && data.length,\n      pageCount: !!data && data.length > 0 && Math.ceil(data.length / 5),\n      perPage: 5,\n      posts: !!data && data.length > 0 && data,\n      status,\n      error\n    };\n  }\n\n  const handlePagination = flag => {\n    if (flag === 'next') {\n      setPage(page + 1);\n    } else {\n      setPage(page - 1);\n    }\n\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Tactable Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(common_header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, undefined), status === 'loading' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(LoadingState, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n        src: \"../public/circles.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(ContentWrapper, {\n      children: [status === 'success' && !!response && !!response.posts && response.posts.length > 0 && response.posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(common_card_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        id: post.id,\n        title: post.title,\n        description: post.description,\n        createdAt: post.createdAt,\n        updatedAt: post.updatedAt,\n        authors: post.authors,\n        comments: post.comments\n      }, post.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PaginationWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(StyledButton, {\n          onClick: () => handlePagination('prev'),\n          disabled: page === 1,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleLeft\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 88\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 125\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(StyledButton, {\n          onClick: () => handlePagination('next'),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 67\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleRight\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 84\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(common_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(HomePage, \"h3mHiqgs/f/u+z6s7EcOf7pdjrc=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery];\n});\n\n_c = HomePage;\n\nasync function getPosts(params) {\n  const [, {\n    page\n  }] = params.queryKey;\n  const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?page=${page}&limit=5&sortBy=createdAt&order=desc`);\n\n  if (!(response.statusText === 'OK')) {\n    throw new Error(\"Problem fetching data\");\n  }\n\n  return response.data;\n}\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-uprdg-0\"\n})([\"font-family:myriad-pro,sans-serif;font-weight:300;font-style:normal;width:100%;\"]);\n_c2 = Wrapper;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"pages__ContentWrapper\",\n  componentId: \"sc-uprdg-1\"\n})([\"padding:80px;width:80%;margin:auto;\"]);\n_c3 = ContentWrapper;\nconst PaginationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"pages__PaginationWrapper\",\n  componentId: \"sc-uprdg-2\"\n})([\"padding:10px;float:right;\"]);\n_c4 = PaginationWrapper;\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].button.withConfig({\n  displayName: \"pages__StyledButton\",\n  componentId: \"sc-uprdg-3\"\n})([\"background:#fff;border:none;cursor:pointer;color:#0E3B5A;font-size:24px;opacity:0.75;transition:transform 0.2s;margin-right:2px;span{margin:0 10px;}&:hover{transform:scale(1.05);}\", \"\"], _ref => {\n  let {\n    disabled\n  } = _ref;\n  return disabled && `\n    opacity: 0.5;\n    cursor: initial;\n    \n    &:hover {\n    transform: none;\n  `;\n});\n_c5 = StyledButton;\nconst LoadingState = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"pages__LoadingState\",\n  componentId: \"sc-uprdg-4\"\n})([\"display:flex;justify-content:center;align-items:center;padding:25%;\"]);\n_c6 = LoadingState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"ContentWrapper\");\n$RefreshReg$(_c4, \"PaginationWrapper\");\n$RefreshReg$(_c5, \"StyledButton\");\n$RefreshReg$(_c6, \"LoadingState\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUVBQWdFTSxJQUFLLHNDQUFoRixDQUF2Qjs7RUFFQSxJQUFJLEVBQUVFLFFBQVEsQ0FBQytCLFVBQVQsS0FBd0IsSUFBMUIsQ0FBSixFQUFxQztJQUNuQyxNQUFNLElBQUlDLEtBQUosQ0FBVSx1QkFBVixDQUFOO0VBQ0Q7O0VBRUQsT0FBT2hDLFFBQVEsQ0FBQ0csSUFBaEI7QUFDRDs7QUFFRCxNQUFNOEIsT0FBTyxHQUFHMUMseUVBQUg7RUFBQTtFQUFBO0FBQUEsdUZBQWI7TUFBTTBDO0FBT04sTUFBTUUsY0FBYyxHQUFHNUMseUVBQUg7RUFBQTtFQUFBO0FBQUEsMkNBQXBCO01BQU00QztBQU1OLE1BQU1DLGlCQUFpQixHQUFHN0MseUVBQUg7RUFBQTtFQUFBO0FBQUEsaUNBQXZCO01BQU02QztBQUtOLE1BQU1DLFlBQVksR0FBRzlDLDRFQUFIO0VBQUE7RUFBQTtBQUFBLGdNQWtCZDtFQUFBLElBQUM7SUFBQ2dEO0VBQUQsQ0FBRDtFQUFBLE9BQWdCQSxRQUFRLElBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBTkk7QUFBQSxDQWxCYyxDQUFsQjtNQUFNRjtBQTJCTixNQUFNRyxZQUFZLEdBQUdqRCx5RUFBSDtFQUFBO0VBQUE7QUFBQSwyRUFBbEI7TUFBTWlEO0FBT04sK0RBQWUzQyxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tbW9uL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21tb24vZm9vdGVyL2Zvb3Rlcic7XG5pbXBvcnQgQ2FyZCBmcm9tICdjb21tb24vY2FyZC9jYXJkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhQW5nbGVMZWZ0LCBmYUFuZ2xlUmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbnR5cGUgQXV0aG9yID0ge1xuICBwb3N0SWQ6IG51bWJlcixcbiAgaWQ6IG51bWJlcixcbiAgdXBkYXRlZEF0OiBzdHJpbmcsXG4gIGNyZWF0ZWRBdDogc3RyaW5nLFxuICBhdmF0YXI6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nXG59O1xuXG50eXBlIENvbW1lbnQgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGNyZWF0ZWRBdDogc3RyaW5nLFxuICB1cGRhdGVkQXQ6IHN0cmluZyxcbiAgcG9zdElkOiBudW1iZXIsXG4gIGlkOiBudW1iZXJcbn07XG5cbnR5cGUgUG9zdCA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgY3JlYXRlZEF0OiBzdHJpbmcsXG4gIHVwZGF0ZWRBdDogc3RyaW5nLFxuICBpZDogbnVtYmVyLFxuICBBdXRob3JzOiBBdXRob3JbXSxcbiAgQ29tbWVudHM6IENvbW1lbnRbXVxufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBsZXQgcmVzcG9uc2UgPSBbXTtcblxuICBjb25zdCB7IHN0YXR1cywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5PFBvc3RbXSwgRXJyb3I+KFxuICAgIFsncG9zdHMnLCB7IHBhZ2UgfV0sXG4gICAgZ2V0UG9zdHNcbiAgKTtcblxuICBjb25zdCB1c2VNdWx0aXBsZVF1ZXJ5ID0gKCkgPT4ge1xuICAgIFxuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgcmVzcG9uc2UgPSB7XG4gICAgICB0b3RhbENvdW50OiAhIWRhdGEgJiYgZGF0YS5sZW5ndGggPiAwICYmIGRhdGEubGVuZ3RoLFxuICAgICAgcGFnZUNvdW50OiAhIWRhdGEgJiYgZGF0YS5sZW5ndGggPiAwICYmIE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIDUpLFxuICAgICAgcGVyUGFnZTogNSxcbiAgICAgIHBvc3RzOiAhIWRhdGEgJiYgZGF0YS5sZW5ndGggPiAwICYmIGRhdGEsXG4gICAgICBzdGF0dXMsXG4gICAgICBlcnJvclxuICAgIH07XG4gIH1cblxuICBjb25zdCBoYW5kbGVQYWdpbmF0aW9uID0gKGZsYWc6IHN0cmluZykgPT4ge1xuICAgIGlmIChmbGFnID09PSAnbmV4dCcpIHtcbiAgICAgIHNldFBhZ2UocGFnZSArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQYWdlKHBhZ2UgLSAxKTtcbiAgICB9XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGFjdGFibGUgQmxvZzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHtzdGF0dXMgPT09ICdsb2FkaW5nJyAmJiAoXG4gICAgICAgIDxMb2FkaW5nU3RhdGU+XG4gICAgICAgICAgPGltZyBzcmM9Jy4uL3B1YmxpYy9jaXJjbGVzLnN2ZycgLz5cbiAgICAgICAgPC9Mb2FkaW5nU3RhdGU+XG4gICAgICApfVxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICB7c3RhdHVzID09PSAnc3VjY2VzcycgJiYgISFyZXNwb25zZSAmJiAhIXJlc3BvbnNlLnBvc3RzICYmIHJlc3BvbnNlLnBvc3RzLmxlbmd0aCA+IDAgJiYgcmVzcG9uc2UucG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGlkPXtwb3N0LmlkfVxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGNyZWF0ZWRBdD17cG9zdC5jcmVhdGVkQXR9XG4gICAgICAgICAgICB1cGRhdGVkQXQ9e3Bvc3QudXBkYXRlZEF0fVxuICAgICAgICAgICAgYXV0aG9ycz17cG9zdC5hdXRob3JzfVxuICAgICAgICAgICAgY29tbWVudHM9e3Bvc3QuY29tbWVudHN9XG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxQYWdpbmF0aW9uV3JhcHBlcj5cbiAgICAgICAgICA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYXRpb24oJ3ByZXYnKX0gZGlzYWJsZWQ9e3BhZ2UgPT09IDF9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFBbmdsZUxlZnR9Lz48c3Bhbj5QcmV2PC9zcGFuPjwvU3R5bGVkQnV0dG9uPlxuICAgICAgICAgIDxTdHlsZWRCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hdGlvbignbmV4dCcpfSA+PHNwYW4+TmV4dDwvc3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQW5nbGVSaWdodH0vPjwvU3R5bGVkQnV0dG9uPlxuICAgICAgICA8L1BhZ2luYXRpb25XcmFwcGVyPlxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cblxudHlwZSBQYXJhbXMgPSB7XG4gIHF1ZXJ5S2V5OiBbc3RyaW5nLCB7IHBhZ2U6IG51bWJlciB9XTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKHBhcmFtczogUGFyYW1zKSB7XG4gIGNvbnN0IFssIHsgcGFnZSB9XSA9IHBhcmFtcy5xdWVyeUtleTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vNjE0NGU4NDM0MTFjODYwMDE3ZDI1NmYwLm1vY2thcGkuaW8vYXBpL3YxL3Bvc3RzP3BhZ2U9JHtwYWdlfSZsaW1pdD01JnNvcnRCeT1jcmVhdGVkQXQmb3JkZXI9ZGVzY2ApO1xuXG4gIGlmICghKHJlc3BvbnNlLnN0YXR1c1RleHQgPT09ICdPSycpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvYmxlbSBmZXRjaGluZyBkYXRhXCIpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogbXlyaWFkLXBybywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogODBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgUGFnaW5hdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG5gO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwRTNCNUE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgb3BhY2l0eTogMC43NTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBcbiAgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICBcbiAgJHsoe2Rpc2FibGVkfSkgPT4gZGlzYWJsZWQgJiYgYFxuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IGluaXRpYWw7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICBgfVxuYDtcblxuY29uc3QgTG9hZGluZ1N0YXRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1JTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsIkNhcmQiLCJzdHlsZWQiLCJheGlvcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQW5nbGVMZWZ0IiwiZmFBbmdsZVJpZ2h0IiwidXNlUXVlcnkiLCJIb21lUGFnZSIsInBhZ2UiLCJzZXRQYWdlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJnZXRQb3N0cyIsInVzZU11bHRpcGxlUXVlcnkiLCJ0b3RhbENvdW50IiwibGVuZ3RoIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJwZXJQYWdlIiwicG9zdHMiLCJoYW5kbGVQYWdpbmF0aW9uIiwiZmxhZyIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiYXV0aG9ycyIsImNvbW1lbnRzIiwicGFyYW1zIiwicXVlcnlLZXkiLCJnZXQiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJXcmFwcGVyIiwiZGl2IiwiQ29udGVudFdyYXBwZXIiLCJQYWdpbmF0aW9uV3JhcHBlciIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsImRpc2FibGVkIiwiTG9hZGluZ1N0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});