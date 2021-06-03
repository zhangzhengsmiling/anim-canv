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

/***/ "./src/application/Application.ts":
/*!****************************************!*\
  !*** ./src/application/Application.ts ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../event/CanvasMouseEvent */ \"./src/event/CanvasMouseEvent.ts\"), __webpack_require__(/*! ../event/CavasKeyBoardEvent */ \"./src/event/CavasKeyBoardEvent.ts\"), __webpack_require__(/*! ../utils/Vec2 */ \"./src/utils/Vec2.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, CanvasMouseEvent_1, CavasKeyBoardEvent_1, Vec2_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    CanvasMouseEvent_1 = __importDefault(CanvasMouseEvent_1);\n    CavasKeyBoardEvent_1 = __importDefault(CavasKeyBoardEvent_1);\n    Vec2_1 = __importDefault(Vec2_1);\n    var CanvasApplication = /** @class */ (function () {\n        function CanvasApplication(canvas) {\n            this.isRunning = false;\n            this.requestId = -1;\n            this.elapsedMsec = 0;\n            this.diffMsec = 0;\n            this.startTime = 0;\n            this.canvas = canvas;\n            window.addEventListener('mousedown', this, false);\n            window.addEventListener('mousemove', this, false);\n            window.addEventListener('mouseup', this, false);\n            window.addEventListener('keydown', this, false);\n            window.addEventListener('keypress', this, false);\n            window.addEventListener('keyup', this, false);\n        }\n        CanvasApplication.prototype.start = function () {\n            if (!this.isRunning) {\n                // 如果当前应用未启用循环绘制\n                this.isRunning = true;\n                this.startTime = new Date().valueOf();\n                // 启用循环绘制\n                this.step(this.elapsedMsec, this.diffMsec);\n            }\n        };\n        ;\n        CanvasApplication.prototype.stop = function () {\n            if (this.isRunning) {\n                this.isRunning = false;\n                this.startTime = 0;\n                cancelAnimationFrame(this.requestId);\n            }\n        };\n        ;\n        CanvasApplication.prototype.step = function (elapsedMsec, diffMsec) {\n            var _this = this;\n            this.elapsedMsec = new Date().valueOf() - this.startTime;\n            this.diffMsec = this.elapsedMsec - elapsedMsec;\n            this.update(this.elapsedMsec, this.diffMsec);\n            this.render();\n            this.requestId = requestAnimationFrame(function () {\n                _this.step(_this.elapsedMsec, _this.diffMsec);\n            });\n        };\n        CanvasApplication.prototype.update = function (elapsedMsec, diffMsec) {\n            console.log('update ...');\n        };\n        ;\n        CanvasApplication.prototype.render = function () { };\n        ;\n        CanvasApplication.prototype.showFPS = function (show) { };\n        ;\n        CanvasApplication.prototype._viewportPos2CanvasPos = function (evt) {\n            if (!this.canvas)\n                throw new Error('canvas is not an element');\n            var bounds = this.canvas.getBoundingClientRect();\n            if (evt.type === 'mousedown') {\n                console.log(evt.clientX, evt.clientY);\n                console.log(bounds);\n            }\n            var x = evt.clientX - bounds.left;\n            var y = evt.clientY - bounds.top;\n            return Vec2_1.default.create(x, y);\n        };\n        CanvasApplication.prototype._event2CanvasMouseEvent = function (evt) {\n            var event = evt;\n            var bounds = this._viewportPos2CanvasPos(event);\n            var canvasEvt = new CanvasMouseEvent_1.default(bounds, event.button, event.altKey, event.shiftKey, event.ctrlKey);\n            return canvasEvt;\n        };\n        CanvasApplication.prototype._event2CanvasKeyBoardEvent = function (evt) {\n            var event = evt;\n            var canvasEvt = new CavasKeyBoardEvent_1.default(event.key, event.code, event.altKey, event.shiftKey, event.ctrlKey);\n            return canvasEvt;\n        };\n        CanvasApplication.prototype.handleEvent = function (evt) {\n            switch (evt.type) {\n                case 'mousedown':\n                    this.dispatchMouseDown(this._event2CanvasMouseEvent(evt));\n                    break;\n                case 'mouseup':\n                    this.dispatchMouseUp(this._event2CanvasMouseEvent(evt));\n                    break;\n                case 'mousemove':\n                    this.dispatchMouseUp(this._event2CanvasMouseEvent(evt));\n                    break;\n                // case 'mousesdrag'\n                case 'keydown':\n                    this.dispatchKeyDown(this._event2CanvasKeyBoardEvent(evt));\n                    break;\n                case 'keyup':\n                    this.dispatchKeyUp(this._event2CanvasKeyBoardEvent(evt));\n                    break;\n                case 'keypress':\n                    this.dispatchKeyPress(this._event2CanvasKeyBoardEvent(evt));\n                    break;\n            }\n        };\n        CanvasApplication.prototype.dispatchMouseDown = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchMouseUp = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchMouseMove = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchMouseDrag = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchKeyDown = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchKeyUp = function (evt) { };\n        ;\n        CanvasApplication.prototype.dispatchKeyPress = function (evt) { };\n        ;\n        return CanvasApplication;\n    }());\n    exports.default = CanvasApplication;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/application/Application.ts?");

/***/ }),

/***/ "./src/event/CanvasInputEvent.ts":
/*!***************************************!*\
  !*** ./src/event/CanvasInputEvent.ts ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.EInputEventType = void 0;\n    var EInputEventType;\n    (function (EInputEventType) {\n        EInputEventType[EInputEventType[\"MOUSEEVENT\"] = 0] = \"MOUSEEVENT\";\n        EInputEventType[EInputEventType[\"MOUSEDOWN\"] = 1] = \"MOUSEDOWN\";\n        EInputEventType[EInputEventType[\"MOUSEUP\"] = 2] = \"MOUSEUP\";\n        EInputEventType[EInputEventType[\"MOUSEMOVE\"] = 3] = \"MOUSEMOVE\";\n        EInputEventType[EInputEventType[\"MOUSEDRAG\"] = 4] = \"MOUSEDRAG\";\n        EInputEventType[EInputEventType[\"KEYBOARDEVENT\"] = 5] = \"KEYBOARDEVENT\";\n        EInputEventType[EInputEventType[\"KEYUP\"] = 6] = \"KEYUP\";\n        EInputEventType[EInputEventType[\"KEYDOWN\"] = 7] = \"KEYDOWN\";\n        EInputEventType[EInputEventType[\"KEYPRESS\"] = 8] = \"KEYPRESS\";\n    })(EInputEventType = exports.EInputEventType || (exports.EInputEventType = {}));\n    var CanvasInputEvent = /** @class */ (function () {\n        function CanvasInputEvent(altKey, shiftKey, ctrlKey, type) {\n            this.altKey = altKey;\n            this.shiftKey = shiftKey;\n            this.ctrlKey = ctrlKey;\n            this.type = type;\n        }\n        return CanvasInputEvent;\n    }());\n    exports.default = CanvasInputEvent;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/event/CanvasInputEvent.ts?");

/***/ }),

/***/ "./src/event/CanvasMouseEvent.ts":
/*!***************************************!*\
  !*** ./src/event/CanvasMouseEvent.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./CanvasInputEvent */ \"./src/event/CanvasInputEvent.ts\"), __webpack_require__(/*! ../utils/Vec2 */ \"./src/utils/Vec2.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, CanvasInputEvent_1, Vec2_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    CanvasInputEvent_1 = __importStar(CanvasInputEvent_1);\n    Vec2_1 = __importDefault(Vec2_1);\n    var CanvasMouseEvent = /** @class */ (function (_super) {\n        __extends(CanvasMouseEvent, _super);\n        function CanvasMouseEvent(canvasPosition, button, altKey, shiftKey, ctrlKey) {\n            if (altKey === void 0) { altKey = false; }\n            if (shiftKey === void 0) { shiftKey = false; }\n            if (ctrlKey === void 0) { ctrlKey = false; }\n            var _this = _super.call(this, altKey, shiftKey, ctrlKey, CanvasInputEvent_1.EInputEventType.MOUSEEVENT) || this;\n            _this.canvasPosition = canvasPosition;\n            _this.button = button;\n            _this.localPosition = Vec2_1.default.create(0, 0);\n            return _this;\n        }\n        return CanvasMouseEvent;\n    }(CanvasInputEvent_1.default));\n    exports.default = CanvasMouseEvent;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/event/CanvasMouseEvent.ts?");

/***/ }),

/***/ "./src/event/CavasKeyBoardEvent.ts":
/*!*****************************************!*\
  !*** ./src/event/CavasKeyBoardEvent.ts ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./CanvasInputEvent */ \"./src/event/CanvasInputEvent.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, CanvasInputEvent_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    CanvasInputEvent_1 = __importStar(CanvasInputEvent_1);\n    var CanvasKeyBoardEvent = /** @class */ (function (_super) {\n        __extends(CanvasKeyBoardEvent, _super);\n        function CanvasKeyBoardEvent(key, code, altKey, shiftKey, ctrlKey) {\n            if (altKey === void 0) { altKey = false; }\n            if (shiftKey === void 0) { shiftKey = false; }\n            if (ctrlKey === void 0) { ctrlKey = false; }\n            var _this = _super.call(this, altKey, shiftKey, ctrlKey, CanvasInputEvent_1.EInputEventType.KEYBOARDEVENT) || this;\n            _this.key = key;\n            _this.code = code;\n            return _this;\n        }\n        return CanvasKeyBoardEvent;\n    }(CanvasInputEvent_1.default));\n    exports.default = CanvasKeyBoardEvent;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/event/CavasKeyBoardEvent.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./application/Application */ \"./src/application/Application.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Application_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    Application_1 = __importDefault(Application_1);\n    var canvas = document.getElementById('canvas');\n    var app = new Application_1.default(canvas);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://canvas2d/./src/main.ts?");

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