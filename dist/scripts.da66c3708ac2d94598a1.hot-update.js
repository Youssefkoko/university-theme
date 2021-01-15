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
    this.deleteBtn = document.querySelector(".delete-note");
    console.log(this.deleteBtn);
    this.events();
  }

  events() {
    // const deleteBtn =  Array.from(this.deleteNote);
    console.log(this.deleteBtn);
    this.deleteBtn.addEventListener("click", e => {
      e.preventDefault();
      this.deleteNote;
    }); // deleteBtn.map( btn => {
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
//# sourceMappingURL=scripts.da66c3708ac2d94598a1.hot-update.js.map