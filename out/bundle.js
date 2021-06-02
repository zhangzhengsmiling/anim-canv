/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application.ts":
/*!****************************!*\
  !*** ./src/application.ts ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./utils/Vec2 */ \"./src/utils/Vec2.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Vec2_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    Vec2_1 = __importDefault(Vec2_1);\n    var CanvasApplication = /** @class */ (function () {\n        function CanvasApplication() {\n            this.isRunning = false;\n            this.requestId = -1;\n            this.elapsedMsec = 0;\n            this.diffMsec = 0;\n            this.startTime = 0;\n        }\n        CanvasApplication.prototype.start = function () {\n            if (!this.isRunning) {\n                // 如果当前应用未启用循环绘制\n                this.isRunning = true;\n                this.startTime = new Date().valueOf();\n                // 启用循环绘制\n                this.step(this.elapsedMsec, this.diffMsec);\n            }\n        };\n        ;\n        CanvasApplication.prototype.stop = function () {\n            if (this.isRunning) {\n                this.isRunning = false;\n                this.startTime = 0;\n                cancelAnimationFrame(this.requestId);\n            }\n        };\n        ;\n        CanvasApplication.prototype.step = function (elapsedMsec, diffMsec) {\n            var _this = this;\n            this.elapsedMsec = new Date().valueOf() - this.startTime;\n            this.diffMsec = this.elapsedMsec - elapsedMsec;\n            this.update(this.elapsedMsec, this.diffMsec);\n            this.render();\n            this.requestId = requestAnimationFrame(function () {\n                _this.step(_this.elapsedMsec, _this.diffMsec);\n            });\n        };\n        CanvasApplication.prototype.update = function (elapsedMsec, diffMsec) {\n            console.log('update ...');\n        };\n        ;\n        CanvasApplication.prototype.render = function () { };\n        ;\n        CanvasApplication.prototype.showFPS = function (show) { };\n        ;\n        CanvasApplication.prototype._viewportPos2CanvasPos = function (evt) {\n            if (!this.canvas)\n                throw new Error('canvas is not an element');\n            var bounds = this.canvas.getBoundingClientRect();\n            if (evt.type === 'mousedown') {\n                console.log(evt.clientX, evt.clientY);\n                console.log(bounds);\n            }\n            var x = evt.clientX - bounds.left;\n            var y = evt.clientY - bounds.top;\n            return Vec2_1.default.create(x, y);\n        };\n        CanvasApplication.prototype.dispatchMouseDown = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchMouseUp = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchMouseNove = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchMouseDrag = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchKeyDown = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchKeyUIp = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchKeyPress = function (evt) { };\n        ;\n        return CanvasApplication;\n    }());\n    exports.default = CanvasApplication;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/application.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./application */ \"./src/application.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, application_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    application_1 = __importDefault(application_1);\n    var app = new application_1.default();\n    app.start();\n    setTimeout(function () {\n        app.stop();\n    }, 3000);\n    console.log('hello, this is test');\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/main.ts?");

/***/ }),

/***/ "./src/utils/Vec2.ts":
/*!***************************!*\
  !*** ./src/utils/Vec2.ts ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    var Vec2 = /** @class */ (function () {\n        function Vec2(x, y) {\n            this.x = x;\n            this.y = y;\n        }\n        Vec2.create = function (x, y) {\n            return new Vec2(x, y);\n        };\n        return Vec2;\n    }());\n    exports.default = Vec2;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/utils/Vec2.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;