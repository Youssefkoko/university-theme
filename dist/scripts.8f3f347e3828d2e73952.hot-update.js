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
    const deleteNote = document.querySelectorAll(".delete-note");
    console.log(deleteNote);
    this.events();
  }

  events() {
    const deleteBtn = Array.from(this.deleteNote);
    console.log(deleteBtn);
    deleteBtn.addEventListener('click', this.deleteNote); // deleteBtn.map( btn => {
    //   btn.addEventListener("click", deleteNote);
    // })
  } // Methods


  deleteNote() {
    console.log('TEST');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ })

})
//# sourceMappingURL=scripts.8f3f347e3828d2e73952.hot-update.js.map