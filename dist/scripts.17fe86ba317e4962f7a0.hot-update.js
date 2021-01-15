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
    this.deleteBtn = document.querySelector(".delete-note"); // console.log(this.deleteBtn);

    this.events();
  }

  events() {
    // const deleteBtn =  Array.from(this.deleteNote);
    this.deleteBtn.addEventListener("click", e => {
      console.log(this.deleteBtn); // e.preventDefault()

      this.deleteNote();
    }); // deleteBtn.map( btn => {
    //   btn.addEventListener("click", deleteNote);
    // })
  } // Methods


  deleteNote() {
    alert('hello');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ })

})
//# sourceMappingURL=scripts.17fe86ba317e4962f7a0.hot-update.js.map