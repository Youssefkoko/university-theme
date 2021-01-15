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
      btn.addEventListener("click", deleteNote);
    });
  } // Methods


  deleteNote(e) {
    console.log(e);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ })

})
//# sourceMappingURL=scripts.1e182092e66c45276ad8.hot-update.js.map