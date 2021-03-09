(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tests/soak.test.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helper/http.service.ts":
/*!************************************!*\
  !*** ./src/helper/http.service.ts ***!
  \************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var k6_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! k6/http */ "k6/http");
/* harmony import */ var k6_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(k6_http__WEBPACK_IMPORTED_MODULE_0__);

class HttpService {
  constructor() {}

  get(url, headers) {
    return k6_http__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
      headers
    });
  }

  post(url, payload, headers) {
    return k6_http__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, payload, {
      headers
    });
  }

}

/***/ }),

/***/ "./src/tests/dashboard.ts":
/*!********************************!*\
  !*** ./src/tests/dashboard.ts ***!
  \********************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var k6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! k6 */ "k6");
/* harmony import */ var k6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(k6__WEBPACK_IMPORTED_MODULE_0__);

class Dashboard {
  constructor(http) {
    this.http = http;
  }
  /**
   * Run All test for dashboard
   */


  runAll(headers) {
    const urls = [];
    urls.forEach(url => {
      const resp = this.http.get(url, headers);
      Object(k6__WEBPACK_IMPORTED_MODULE_0__["check"])(resp, {
        'Dashboard': r => r.status == 200
      });
    });
    const postUrls = "";
    const resp = this.http.post(postUrls, '{ }', headers);
    Object(k6__WEBPACK_IMPORTED_MODULE_0__["check"])(resp, {
      'Dashboard': r => r.status == 200
    });
  }

}

/***/ }),

/***/ "./src/tests/soak.test.ts":
/*!********************************!*\
  !*** ./src/tests/soak.test.ts ***!
  \********************************/
/*! exports provided: options, dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboard", function() { return dashboard; });
/* harmony import */ var _helper_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/http.service */ "./src/helper/http.service.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ "./src/tests/dashboard.ts");


const bearerToken = ``;
const requestHeaders = {};
const httpService = new _helper_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]();
let options = {
  discardResponseBodies: true,
  scenarios: {
    dashboard: {
      executor: 'constant-arrival-rate',
      rate: 3,
      duration: '1m',
      preAllocatedVUs: 20,
      maxVUs: 20,
      exec: 'dashboard'
    }
  }
};
function dashboard() {
  const db = new _dashboard__WEBPACK_IMPORTED_MODULE_1__["Dashboard"](httpService);
  db.runAll(requestHeaders);
}

/***/ }),

/***/ "k6":
/*!*********************!*\
  !*** external "k6" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("k6");

/***/ }),

/***/ "k6/http":
/*!**************************!*\
  !*** external "k6/http" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("k6/http");

/***/ })

/******/ })));
//# sourceMappingURL=soakTest.bundle.js.map