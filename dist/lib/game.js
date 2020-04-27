(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define("typescript_intro", ["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["typescript_intro"] = factory(require("PIXI"));
	else
		root["typescript_intro"] = factory(root["PIXI"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __importStar(__webpack_require__(2));
var GameManager = /** @class */ (function () {
    /**
     * code entry point, it is triggered by the window.onload event found at the bottom of this class
     */
    function GameManager() {
        this.app = new PIXI.Application({ width: 400, height: 400, backgroundColor: 0xFFFFFF });
        document.body.appendChild(this.app.view);
        PIXI.Loader.shared.add('gecko', 'assets/gecko.png');
        PIXI.Loader.shared.once('complete', this.onLoadComplete.bind(this));
        PIXI.Loader.shared.load();
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }
    /**
     *
     * @param loader loader provided by the PIXI load event, useful for cleaning up any events attached to loader
     * @param resources resources provided by the PIXI load event, we use this to extract loaded items
     */
    GameManager.prototype.onLoadComplete = function (loader, resources) {
        var _this = this;
        //create a sprite from a 'gecko.png' image
        this.gecko = new PIXI.Sprite(resources["gecko"].texture);
        //position the gecko in the center of the screen
        this.gecko.x = this.app.renderer.width / 2;
        this.gecko.y = this.app.renderer.height / 2;
        //add an anchor so the rotate pivots the center of the image
        this.gecko.anchor.x = 0.5;
        this.gecko.anchor.y = 0.5;
        //add the gecko to the screen
        this.app.stage.addChild(this.gecko);
        //listen for frame updates
        this.app.ticker.add(function () {
            //each frame spin the gecko around a tiny bit
            _this.gecko.rotation -= 0.01;
        });
    };
    // Resize function window
    GameManager.prototype.resize = function () {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        this.gecko.x = this.app.renderer.width / 2;
        this.gecko.y = this.app.renderer.height / 2;
    };
    return GameManager;
}());
exports.GameManager = GameManager;
/**
 * on the window event create the GameManager class
 * some people like to add this into a seperate .js file
 */
window.onload = function () {
    new GameManager();
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })
/******/ ]);
});