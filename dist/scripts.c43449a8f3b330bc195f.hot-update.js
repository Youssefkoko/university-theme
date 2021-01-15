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
    this.ul = document.querySelector("#my-notes");
    this.editBtn = document.querySelectorAll(".edit-note");
    this.updateBtn = document.querySelector('.update-note');
    this.submitBtn = document.querySelector('.submit-note');
    console.log(this.submitBtn);
    this.events();
  }

  events() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.ul).on('click', '.delete-note', this.deleteNote);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.ul).on('click', '.edit-note', this.editNote.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.ul).on('click', '.update-note', this.updateNote.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.ul).on('click', this.createNote());
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

  createNote(e) {
    let newNoteTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.new-note-title').val();
    let newNoteBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.new-note-body').val(); // if(!newNoteTitle && !newNoteBody){
    //   return;
    // }

    let newPost = {
      'title': newNoteTitle,
      'content': newNoteBody,
      'status': 'publish'
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', themeData.nonce);
      },
      url: themeData.root_url + '/wp-json/wp/v2/note/',
      type: 'POST',
      data: newPost,
      success: res => {
        console.log(res);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.new-note-title, .new-note-body').val('');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`
          <li data-id="${res.id}">
          <input readonly class="note-title-field" type="text" value="${res.title.rendered}" />
          <span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</span>
          <span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span>
          <textarea readonly class="note-body-field" name="" id="" cols="30"
            rows="10">
            ${res.content.rendered}
          </textarea>
            
          <span class="update-note btn btn--blue btn--small"><i class="fa fa-arrow-right" aria-hidden="true"></i> Save</span>
        </li>
          `).prependTo('#my-notes').hide().slideDown();
        console.log('success YEEEY');
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
//# sourceMappingURL=scripts.c43449a8f3b330bc195f.hot-update.js.map