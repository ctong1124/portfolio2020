module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ctong/Documents/portfolio2020/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst useMousePosition = () => {\n  const {\n    0: mousePosition,\n    1: setMousePosition\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    x: null,\n    y: null\n  });\n\n  const updateMousePosition = ev => {\n    setMousePosition({\n      x: ev.clientX,\n      y: ev.clientY\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.addEventListener(\"mousemove\", updateMousePosition);\n    return () => window.removeEventListener(\"mousemove\", updateMousePosition);\n  }, []);\n  return mousePosition;\n};\n\nfunction Home() {\n  const {\n    0: isPlaying,\n    1: setIsPlaying\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  function toggleVideo(x) {\n    if (x === 'play') {\n      videoRef.current.play();\n    } else {\n      videoRef.current.pause();\n    }\n  }\n\n  const {\n    x,\n    y\n  } = useMousePosition(); // console.log(`x: ${x}, y: ${y}`);\n\n  const degree = (x + y) / 8 % 360;\n  const color1 = '#eaee44';\n  const color2 = '#33d0ff';\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"Portfolio of Carisa Tong\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })), __jsx(\"video\", {\n    autoPlay: true,\n    muted: true,\n    loop: true,\n    ref: videoRef,\n    className: \"backgroundVideo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"source\", {\n    src: \"/vid.mp4\",\n    type: \"video/mp4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"overlay\",\n    style: {\n      \"backgroundImage\": `linear-gradient(${degree}deg, ${color1}, ${color2})`\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"contentContainer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"WORK IN PROGRESS\"), __jsx(\"h2\", {\n    className: \"description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Let's connect on \", __jsx(\"a\", {\n    href: \"https://www.linkedin.com/in/carisatong\",\n    target: \"blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 34\n    }\n  }, \"LinkedIn\")))), __jsx(\"div\", {\n    className: \"top\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"Video by \", __jsx(\"a\", {\n    href: \"http://www.mariobaltodano.com\",\n    target: \"blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 22\n    }\n  }, \"Mario Baltodano\")), __jsx(\"div\", {\n    className: \"button\",\n    onClick: () => {\n      toggleVideo(isPlaying ? 'pause' : 'play');\n      setIsPlaying(!isPlaying);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, isPlaying ? 'PAUSE' : 'PLAY')));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZU1vdXNlUG9zaXRpb24iLCJtb3VzZVBvc2l0aW9uIiwic2V0TW91c2VQb3NpdGlvbiIsInVzZVN0YXRlIiwieCIsInkiLCJ1cGRhdGVNb3VzZVBvc2l0aW9uIiwiZXYiLCJjbGllbnRYIiwiY2xpZW50WSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSG9tZSIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInZpZGVvUmVmIiwidXNlUmVmIiwidG9nZ2xlVmlkZW8iLCJjdXJyZW50IiwicGxheSIsInBhdXNlIiwiZGVncmVlIiwiY29sb3IxIiwiY29sb3IyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLENBQUM7QUFBRUMsS0FBQyxFQUFFLElBQUw7QUFBV0MsS0FBQyxFQUFFO0FBQWQsR0FBRCxDQUFsRDs7QUFFQSxRQUFNQyxtQkFBbUIsR0FBR0MsRUFBRSxJQUFJO0FBQ2hDTCxvQkFBZ0IsQ0FBQztBQUFFRSxPQUFDLEVBQUVHLEVBQUUsQ0FBQ0MsT0FBUjtBQUFpQkgsT0FBQyxFQUFFRSxFQUFFLENBQUNFO0FBQXZCLEtBQUQsQ0FBaEI7QUFDRCxHQUZEOztBQUlBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ04sbUJBQXJDO0FBRUEsV0FBTyxNQUFNSyxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFdBQTNCLEVBQXdDUCxtQkFBeEMsQ0FBYjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUFPTCxhQUFQO0FBQ0QsQ0FkRDs7QUFpQmUsU0FBU2EsSUFBVCxHQUFn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QUFBQTtBQUFBO0FBQUEsS0FJR0EsU0FBUyxHQUFHLE9BQUgsR0FBYSxNQUp6QixDQUZGLENBckJGLENBREY7QUFpQ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCB1c2VNb3VzZVBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IG51bGwsIHk6IG51bGwgfSk7XG5cbiAgY29uc3QgdXBkYXRlTW91c2VQb3NpdGlvbiA9IGV2ID0+IHtcbiAgICBzZXRNb3VzZVBvc2l0aW9uKHsgeDogZXYuY2xpZW50WCwgeTogZXYuY2xpZW50WSB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHVwZGF0ZU1vdXNlUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHVwZGF0ZU1vdXNlUG9zaXRpb24pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG1vdXNlUG9zaXRpb247XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVmlkZW8oeCkge1xuICAgIGlmICh4ID09PSAncGxheScpIHtcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0IHsgeCwgeSB9ID0gdXNlTW91c2VQb3NpdGlvbigpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGB4OiAke3h9LCB5OiAke3l9YCk7XG4gIGNvbnN0IGRlZ3JlZSA9ICgoeCArIHkpLzgpICUgMzYwO1xuICBjb25zdCBjb2xvcjEgPSAnI2VhZWU0NCc7XG4gIGNvbnN0IGNvbG9yMiA9ICcjMzNkMGZmJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcnRmb2xpbyBvZiBDYXJpc2EgVG9uZzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHZpZGVvIGF1dG9QbGF5IG11dGVkIGxvb3AgcmVmPXt2aWRlb1JlZn0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZFZpZGVvXCI+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL3ZpZC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgIDwvdmlkZW8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBzdHlsZT17e1wiYmFja2dyb3VuZEltYWdlXCI6IGBsaW5lYXItZ3JhZGllbnQoJHtkZWdyZWV9ZGVnLCAke2NvbG9yMX0sICR7Y29sb3IyfSlgfX0vPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICBXT1JLIElOIFBST0dSRVNTXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIExldCYjMzk7cyBjb25uZWN0IG9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2FyaXNhdG9uZ1wiIHRhcmdldD1cImJsYW5rXCI+TGlua2VkSW48L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgIDxoMz5WaWRlbyBieSA8YSBocmVmPVwiaHR0cDovL3d3dy5tYXJpb2JhbHRvZGFuby5jb21cIiB0YXJnZXQ9XCJibGFua1wiPk1hcmlvIEJhbHRvZGFubzwvYT48L2gzPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlVmlkZW8oaXNQbGF5aW5nID8gJ3BhdXNlJyA6ICdwbGF5Jyk7IHNldElzUGxheWluZyghaXNQbGF5aW5nKTt9fVxuICAgICAgICA+XG4gICAgICAgICAge2lzUGxheWluZyA/ICdQQVVTRScgOiAnUExBWSd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ctong/Documents/portfolio2020/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });