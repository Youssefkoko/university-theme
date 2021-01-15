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
    this.deleteBtn = document.querySelectorAll(".delete-note");
    this.editBtn = document.querySelectorAll(".edit-note"); // console.log(this.deleteBtn);

    this.updateBtn = document.querySelector('.update-note');
    this.events();
  }

  events() {
    // const deleteBtn =  Array.from(this.deleteNote);
    this.deleteBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        this.deleteNote(e);
      });
    }); // End

    this.editBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        this.editNote(e);
      });
    }); // End 

    this.updateBtn.addEventListener('click', e => {
      this.updateNote(e);
    });
  } // Methods


  editNote(e) {
    let thisNote = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('li');

    if (thisNote.data('state') == 'editable') {
      // make read only
      this.makeNoteReadOnly(thisNote);
    } else {
      // make editable
      this.makeNoteEditable(thisNote);
    }
  }

  makeNoteEditable(thisNote) {
    thisNote.find('.edit-note').html('<i class="fa fa-times" aria-hidden="true"></i> Cancel');
    thisNote.find('.note-title-field, .note-body-field').removeAttr('readonly').addClass('note-active-field');
    thisNote.find('.update-note').addClass('update-note--visible');
    thisNote.data('state', 'editable');
  }

  makeNoteReadOnly(thisNote) {
    thisNote.find('.edit-note').html('<i class="fa fa-pencil" aria-hidden="true"></i> Edit');
    thisNote.find('.note-title-field, .note-body-field').attr('readonly', 'readonly').removeClass('note-active-field');
    thisNote.find('.update-note').removeClass('update-note--visible');
    thisNote.data('state', 'cancel');
  }

  deleteNote(e) {
    let thisNote = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('li');
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', themeData.nonce);
      },
      url: themeData.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
      type: 'DELETE',
      success: response => {
        thisNote.slideUp();
        console.log('success');
        console.log(response);
      },
      error: response => {
        console.log('error');
        console.log(response);
      }
    });
  }

  updateNote(e) {
    let thisNote = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('li');
    let updatePost = {
      'title': thisNote.find('.note-title-field').val(),
      'content': thisNote.find('.note-body-field').val()
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', themeData.nonce);
      },
      url: themeData.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
      type: 'POST',
      data: updatePost,
      success: response => {
        this.makeNoteReadOnly(thisNote);
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
//# sourceMappingURL=scripts.81ef76557d4e0394cdd4.hot-update.js.map