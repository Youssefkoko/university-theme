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
    this.resultsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay__results');
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

      if (this.searchField.val()) {
        if (!this.isSpinnerVisibale) {
          this.resultsDiv.html('<div class="spinner-loader"></div>');
          this.isSpinnerVisibale = true;
        }

        this.typingTimer = setTimeout(this.getResults.bind(this), 1500);
      } else {
        this.resultsDiv.html('');
        this.isSpinnerVisibale = false;
      } // end if 

    }

    this.previousValue = this.searchField.val();
  }

  getResults() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON('http://localhost/projects/wordpress//wp-json/wp/v2/posts?search=' + this.searchField.val(), data => {
      this.resultsDiv.html(`
    <h2>General Information: </h2>
    <ul class="link-list min-list" >
      <li> <a href="#">${data[0].title.rendered}</a> </li>
    </ul>
    `);
    });
  }

  keyPressToggle(e) {
    // check the key code and OverLay is not Open and if the input fields are NOT focus
    if (e.keyCode == 83 && !this.isOverlayOpen && !jquery__WEBPACK_IMPORTED_MODULE_0___default()('input, textarea').is(':focus')) {
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
//# sourceMappingURL=scripts.32c9bff38b8491992104.hot-update.js.map