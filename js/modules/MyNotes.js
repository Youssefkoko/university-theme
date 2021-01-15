import $ from 'jquery'

class Notes {
  constructor() {
    this.deleteBtn = document.querySelectorAll(".delete-note");
    this.editBtn = document.querySelectorAll(".edit-note");
    this.updateBtn = document.querySelector('.update-note');
    console.log(this.updateBtn);
    this.events();
    
  }
  events() {
    
    // const deleteBtn =  Array.from(this.deleteNote);
    this.deleteBtn.forEach( (btn) => {
      btn.addEventListener('click', (e) =>{
        this.deleteNote(e)
      })
    })
    // End
    this.editBtn.forEach( (btn) => {
      btn.addEventListener('click', (e) =>{
        this.editNote(e)
      })
    })
    // End 
    this.updateBtn.addEventListener('click', (e) =>{
        this.updateNote(e)
      })
    
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
 }

 export default Notes;