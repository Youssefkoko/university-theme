import $ from 'jquery'

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
    $(this.ul).on('click', '.delete-note', this.deleteNote)
    
    $(this.ul).on('click', '.edit-note', this.editNote.bind(this))
    
    $(this.ul).on('click', '.update-note', this.updateNote.bind(this))
    
    $('.submit-note').on('click', this.createNote.bind(this));
    
  }


  // Methods
  editNote(e){
    let thisNote = $(e.target).parent('li');
    if(thisNote.data('state') == 'editable'){
      // make read only
      this.makeNoteReadOnly(thisNote);
    }else{
      // make editable
      this.makeNoteEditable(thisNote);
    }

  }
  makeNoteEditable(thisNote){
    thisNote.find('.edit-note').html('<i class="fa fa-times" aria-hidden="true"></i> Cancel')
    thisNote.find('.note-title-field, .note-body-field').removeAttr('readonly').addClass('note-active-field');
    thisNote.find('.update-note').addClass('update-note--visible');
    thisNote.data('state', 'editable');
  }

  makeNoteReadOnly(thisNote){
    thisNote.find('.edit-note').html('<i class="fa fa-pencil" aria-hidden="true"></i> Edit')
    thisNote.find('.note-title-field, .note-body-field').attr('readonly', 'readonly').removeClass('note-active-field');
    thisNote.find('.update-note').removeClass('update-note--visible');
    thisNote.data('state', 'cancel');
  }


  deleteNote(e) {
    let thisNote = $(e.target).parent('li');
      $.ajax({
        beforeSend: (xhr) => {
          xhr.setRequestHeader('X-WP-Nonce', themeData.nonce);
        },
        url: themeData.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
        type: 'DELETE',
        success: (response) => {
          thisNote.slideUp();
          console.log('success');
          console.log(response);
        },
        error: (response) => {
          console.log('error');
          console.log(response);
        },
      })
  }
  updateNote(e) {
    let thisNote = $(e.target).parent('li');
    let updatePost = {
      'title': thisNote.find('.note-title-field').val(),
      'content': thisNote.find('.note-body-field').val(),
    }
      $.ajax({
        beforeSend: (xhr) => {
          xhr.setRequestHeader('X-WP-Nonce', themeData.nonce);
        },
        url: themeData.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
        type: 'POST',
        data: updatePost,
        success: (response) => {
          this.makeNoteReadOnly(thisNote)
          console.log('success');
          console.log(response);
        },
        error: (response) => {
          console.log('error');
          console.log(response);
        },
      })
  }

  createNote(e) {
    let newNoteTitle = $('.new-note-title').val();
    let newNoteBody = $('.new-note-body').val();
    if(newNoteTitle !== '' && newNoteBody !== ''){
      let newPost = {
        'title': newNoteTitle,
        'content': newNoteBody,
        'status': 'private',
      }
        $.ajax({
          beforeSend: (xhr) => {
            xhr.setRequestHeader('X-WP-Nonce', themeData.nonce);
          },
          url: themeData.root_url + '/wp-json/wp/v2/note/',
          type: 'POST',
          data: newPost,
          success: (res) => {
            console.log(res)
            $('.new-note-title, .new-note-body').val('');
            $(`
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
          error: (response) => {
            console.log('error');
            console.log(response);
          },
        })

      // end if
    }
    
  }

 }

 export default Notes;