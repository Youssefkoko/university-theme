import $ from 'jquery'

class Notes {
  constructor() {
    this.deleteBtn = document.querySelectorAll(".delete-note");
    this.editBtn = document.querySelectorAll(".edit-note");
    // console.log(this.deleteBtn);
    this.events();
  }
  
  events() {
    
    // const deleteBtn =  Array.from(this.deleteNote);
    this.deleteBtn.forEach( (btn) => {
      btn.addEventListener('click', (e) =>{
        this.deleteNote(e)
      })
    })
    this.editBtn.forEach( (btn) => {
      btn.addEventListener('click', (e) =>{
        this.editNote(e)
      })
    })
    // deleteBtn.map( btn => {
    //   btn.addEventListener("click", deleteNote);
    // })
  }


  // Methods
  editNote(e){
    let thisNote = $(e.target).parent('li');
    thisNote.find('.note-title-field, .note-body-field').removeAttr('readonly').addClass('note-active-field');
    thisNote.find('.update-note').addClass('update-note--visible');

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
 }

 export default Notes;