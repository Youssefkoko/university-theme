webpackHotUpdate("scripts",{

/***/ "./js/modules/MyNotes.js":
/*!*******************************!*\
  !*** ./js/modules/MyNotes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Notes {
  constructor() {
    alert('hello');
  }

  events() {} // Methods


}

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ "./js/modules/MobileMenu.js");
/* harmony import */ var _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/HeroSlider */ "./js/modules/HeroSlider.js");
/* harmony import */ var _modules_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Search */ "./js/modules/Search.js");
/* harmony import */ var _modules_MyNotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MyNotes */ "./js/modules/MyNotes.js");
 // Our modules / classes




 // Instantiate a new object using our modules/classes

const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
const heroSlider = new _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__["default"]();
const search = new _modules_Search__WEBPACK_IMPORTED_MODULE_3__["default"]();
const notes = new _modules_MyNotes__WEBPACK_IMPORTED_MODULE_4__["default"](); // Allow new JS and CSS to load in browser without a traditional page refresh

if (true) {
  module.hot.accept();
}

/***/ })

})
//# sourceMappingURL=scripts.07078ebe12e337421966.hot-update.js.map