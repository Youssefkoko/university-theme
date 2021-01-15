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
    const deleteNote = document.querySelectorAll(".delete-note"); // console.log(deleteNote);

    this.events();
  }

  events() {
    deleteBtn = Array.from(this.deleteNote);
    deleteBtn.map(btn => {
      btn.addEventListener("click", e => {
        console.log(e);
      });
    });
  } // Methods


}

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ })

})
//# sourceMappingURL=scripts.681da2398db73b2329a4.hot-update.js.map