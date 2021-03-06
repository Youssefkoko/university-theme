webpackHotUpdate("scripts",{

/***/ "./js/modules/MobileMenu.js":
/*!**********************************!*\
  !*** ./js/modules/MobileMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".site-header__menu");
    this.openButton = document.querySelector(".site-header__menu-trigger");
    this.events();
  }

  events() {
    this.openButton.addEventListener("click", () => this.openMenu());
  }

  openMenu() {
    this.openButton.classList.toggle("fa-bars");
    this.openButton.classList.toggle("fa-window-close");
    this.menu.classList.toggle("site-header__menu--active");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ })

})
//# sourceMappingURL=scripts.b01fe7de294abe956ff3.hot-update.js.map