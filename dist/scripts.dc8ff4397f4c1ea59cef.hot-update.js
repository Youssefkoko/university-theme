webpackHotUpdate("scripts",{

/***/ "./js/modules/Search.js":
/*!******************************!*\
  !*** ./js/modules/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class Search {
  // Descripe or Initiate or Create the Object
  constructor() {
    this.resultsDev = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay__results');
    this.openButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-trigger');
    this.closeButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-overlay__close');
    this.searchOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-overlay');
    this.searchField = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-term');
    this.typingTimer;
    this.isSpinnerVisibale = false;
    this.previousValue;
    this.events();
    this.isOverlayOpen = false;
  } // 2. Events


  events() {
    this.openButton.on('click', this.openOverlay.bind(this));
    this.closeButton.on('click', this.closeOverlay.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keydown', this.keyPressToggle.bind(this));
    this.searchField.on('keyup', this.typingLogic.bind(this));
  } // 3. Methods (Functions, Action .. )


  typingLogic() {
    // check if field does not change its value if so then the Spinner can work
    if (this.searchField.val() !== this.previousValue) {
      clearTimeout(this.typingTimer);

      if (!this.isSpinnerVisibale) {
        this.resultsDev.html('<div class="spinner-loader"></div>');
        this.isSpinnerVisibale = true;
      }

      this.typingTimer = setTimeout(this.getResults.bind(this), 2000); // end if 
    }

    this.previousValue = this.searchField.val();
  }

  getResults() {
    this.resultsDev.html('imagine reuslts here');
    this.isSpinnerVisibale = false;
  }

  keyPressToggle(e) {
    if (e.keyCode == 83 && !this.isOverlayOpen) {
      this.openOverlay();
    }

    if (e.keyCode == 27 && this.isOverlayOpen) {
      this.closeOverlay();
    }
  }

  openOverlay() {
    this.searchOverlay.addClass('search-overlay--active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('body-no-scroll');
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.searchOverlay.removeClass('search-overlay--active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('body-no-scroll');
    this.isOverlayOpen = false;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=scripts.dc8ff4397f4c1ea59cef.hot-update.js.map