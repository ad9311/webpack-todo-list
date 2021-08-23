/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/manager.js":
/*!************************!*\
  !*** ./src/manager.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Manager {\n  getIndex = (event) => {\n    this.currentIndex = event.target.id.replace(/^\\D+/g, '');\n    return this.currentIndex;\n  };\n\n  updateLocalStorage = (list) => {\n    localStorage.setItem('list', JSON.stringify(list.list));\n  };\n\n  renderStorage = (list, element) => {\n    if (localStorage.getItem('list')) {\n      list.list = JSON.parse(localStorage.getItem('list'));\n      for (let i = 0; i < list.list.length; i += 1) {\n        const ul = document.getElementById('task-list');\n        ul.appendChild(element.createListTask(list.list[i]));\n      }\n    }\n  };\n\n  renderNewTask = (list, element) => {\n    const ul = document.getElementById('task-list');\n    ul.appendChild(element.createListTask(list.list[list.lastIndex]));\n    this.updateLocalStorage(list);\n  };\n\n  updateTask = (event, list, element) => {\n    const index = event.target.id.replace(/^\\D+/g, '');\n    const completed = event.target.checked;\n    list.setCompleted(index, completed);\n    element.crossOutDescription(`desc${index}`, completed);\n    this.updateLocalStorage(list);\n  };\n\n  updateTaskDescription = (event, list) => {\n    const index = event.target.id.replace(/^\\D+/g, '');\n    list.editDescription(index, event.target.value);\n    this.updateLocalStorage(list);\n  };\n\n  focusOnList = (event, element) => {\n    const index = event.target.id.replace(/^\\D+/g, '');\n    element.changeListBackground(index);\n  }\n\n  unfocusOnList = (event, element) => {\n    const index = event.target.id.replace(/^\\D+/g, '');\n    window.setTimeout(() => { element.defaultListBackground(index); }, 200);\n  }\n}\n\nconst manager = new Manager();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manager);\n\n\n//# sourceURL=webpack://webpack-demo/./src/manager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/manager.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;