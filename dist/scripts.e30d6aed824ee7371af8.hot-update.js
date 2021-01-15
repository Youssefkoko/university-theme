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
    const deleteBtn = document.querySelector(".delete-note");
    console.log(deleteBtn);
    this.events();
  }

  events() {
    // const deleteBtn =  Array.from(this.deleteNote);
    // console.log(deleteNote);
    this.deleteBtn.addEventListener('click', this.deleteNote); // deleteBtn.map( btn => {
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
//# sourceMappingURL=scripts.e30d6aed824ee7371af8.hot-update.js.map