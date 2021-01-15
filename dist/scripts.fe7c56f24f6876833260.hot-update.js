webpackHotUpdate("scripts",{

/***/ "./js/modules/MyNotes.js":
/*!*******************************!*\
  !*** ./js/modules/MyNotes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


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
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.json({
      url: themeData.root_url + 'wp-json/wp/v2/note/104',
      type: 'DELETE',
      success: response => {
        console.log('success');
        console.log(response);
      },
      error: response => {
        console.log('error');
        console.log(response);
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ })

})
//# sourceMappingURL=scripts.fe7c56f24f6876833260.hot-update.js.map