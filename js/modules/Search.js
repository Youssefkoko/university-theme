import $ from 'jquery';
class Search {
  // Descripe or Initiate or Create the Object
  constructor(){
    this.resultsDiv = $('#search-overlay__results');
    this.openButton = $('.js-search-trigger');
    this.closeButton = $('.search-overlay__close');
    this.searchOverlay = $('.search-overlay');
    this.searchField = $('#search-term');
    this.typingTimer;
    this.isSpinnerVisibale = false;
    this.previousValue;
    this.events();
    this.isOverlayOpen = false;
  }
  // 2. Events
  events(){
    this.openButton.on('click', this.openOverlay.bind(this));
    this.closeButton.on('click', this.closeOverlay.bind(this));
    $(document).on('keydown', this.keyPressToggle.bind(this));
    this.searchField.on('keyup', this.typingLogic.bind(this));
  }
  // 3. Methods (Functions, Action .. )
  typingLogic(){
    // check if field does not change its value if so then the Spinner can work
    if(this.searchField.val() !== this.previousValue){
      clearTimeout(this.typingTimer);
      if(this.searchField.val()){
        if(!this.isSpinnerVisibale){
          this.resultsDiv.html('<div class="spinner-loader"></div>')
          this.isSpinnerVisibale = true;
        }    
        this.typingTimer = setTimeout(this.getResults.bind(this), 1500);
      }else{
        this.resultsDiv.html('');
        this.isSpinnerVisibale = false;
      }
      // end if 
    }
    this.previousValue = this.searchField.val();
  }
  getResults(){
    $.getJSON('http://localhost/projects/wordpress//wp-json/wp/v2/posts?search='+ this.searchField.val(), data => {
    
    this.resultsDiv.html(`
    <h2>General Information: </h2>
    <ul class="link-list min-list" >
      ${data.map(item => `
        <li> 
          <a href="${item.link}">${item.title.rendered}</a>
        </li>` 
      ).join('')}
      
    </ul>
    `);

    });
  }
  keyPressToggle(e){
// check the key code and OverLay is not Open and if the input fields are NOT focus
    if(e.keyCode == 83 && !this.isOverlayOpen && !$('input, textarea').is(':focus')){
      this.openOverlay();
    }
    if(e.keyCode == 27 &&  this.isOverlayOpen){
      this.closeOverlay();
    }
  }
  openOverlay(){
    this.searchOverlay.addClass('search-overlay--active');
    $('body').addClass('body-no-scroll');
    
    this.isOverlayOpen = true;
  }
  closeOverlay(){
  this.searchOverlay.removeClass('search-overlay--active');
  $('body').removeClass('body-no-scroll');
  this.isOverlayOpen = false;
}
} export default Search;