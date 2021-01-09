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
    this.addSearchHTML();
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

        this.typingTimer = setTimeout(this.getResults.bind(this), 750);
      } else {
        this.resultsDiv.html('');
        this.isSpinnerVisibale = false;
      } // end if 

    }

    this.previousValue = this.searchField.val();
  }

  getResults() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON(themeData.root_url + '/wp-json/university/v1/search?term=' + this.searchField.val(), results => {
      this.resultsDiv.html(`
      <div class="row">
        <div class="one-third">
          <h2 class="search-overlay__section-title">General Info:</h2>
          ${results.generalInfo.length ? `<ul class="link-list min-list" >` : `<p>No Search Found.</p>`}

          ${results.generalInfo.map(item => `
            <li> 
              <a href="${item.link}">${item.title}</a>
              ${item.postType == 'post' ? `By: ${item.authorName}` : ''}
            </li>`).join('')}
        
        ${results.generalInfo.length ? `</ul>` : ''}
        </div>  
        <div class="one-third">
          <h2 class="search-overlay__section-title">Programs</h2>
          <h2 class="search-overlay__section-title">Professors</h2>
        </div>  
        <div class="one-third">
          <h2 class="search-overlay__section-title">Campuses</h2>
          <h2 class="search-overlay__section-title">Events</h2>
        </div>  
      </div>
      `);
      isSpinnerVisibale = false;
    }); // Old way to request API 
    // $.when(
    //   $.getJSON(themeData.root_url + '/wp-json/wp/v2/posts?search='+ this.searchField.val()), 
    //   $.getJSON(themeData.root_url + '/wp-json/wp/v2/pages?search='+ this.searchField.val())
    // ).then((posts, pages) => {
    //   var compinedResults = posts[0].concat(pages[0]);
    //   this.resultsDiv.html(`
    //   <h2>General Information: </h2>
    //     ${compinedResults.length ? `<ul class="link-list min-list" >` : `<p>No Search Found.</p>`}
    //       ${compinedResults.map(item => `
    //         <li> 
    //           <a href="${item.link}">${item.title.rendered}</a>
    //           ${item.type == 'post' ? `By: ${item.authorName}` : ''}
    //         </li>` 
    //       ).join('')}
    //     ${compinedResults.length ? `</ul>` : ''}
    //   `);
    // }, () => {
    //   this.resultsDiv.html('Unexpected error, Please Try Again.');
    // })
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
    setTimeout(() => this.searchField.focus(), 301);
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.searchOverlay.removeClass('search-overlay--active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('body-no-scroll');
    this.searchField.val('');
    this.isOverlayOpen = false;
  }

  addSearchHTML() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append(`
    <div class="search-overlay">
    <div class="search-overlay__top">
      <div class="container">
        <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
        <input type="text" name="" class="search-term" id="search-term" placeholder="Search...">
        <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
      </div>
    </div>
    <div class="container">
      <div id="search-overlay__results">
      hello
      </div>
    </div>
  </div>
    `);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=scripts.816d332fa36fff8100f5.hot-update.js.map