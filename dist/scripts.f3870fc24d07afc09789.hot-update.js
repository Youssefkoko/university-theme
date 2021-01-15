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
    this.deleteBtn = document.querySelectorAll(".delete-note"); // console.log(this.deleteBtn);

    this.events();
  }

  events() {
    // const deleteBtn =  Array.from(this.deleteNote);
    this.deleteBtn.forEach(btn => {
      btn.addEventListener("click", e => {
        console.log(this.deleteBtn); // e.preventDefault()

        this.deleteNote();
      });
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
//# sourceMappingURL=scripts.f3870fc24d07afc09789.hot-update.js.map