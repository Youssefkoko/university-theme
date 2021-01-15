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

    const deleteBtn = Array.from(deleteNote);
    this.events();
  }

  events() {
    this.deleteBtn.map(btn => {
      btn.addEventListener("click", deleteNote);
    });
  } // Methods


  deleteNote() {
    console.log('e');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ })

})
//# sourceMappingURL=scripts.23998e5cf171af89574d.hot-update.js.map