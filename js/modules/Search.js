import $ from 'jquery';
class Search {
  // Descripe or Initiate or Create the Object
  constructor(){
    this.resultsDev = $('#search-overlay__results');
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
          this.resultsDev.html('<div class="spinner-loader"></div>')
          this.isSpinnerVisibale = true;
        }    
        this.typingTimer = setTimeout(this.getResults.bind(this), 2000);
      }else{
        this.resultsDev.html('');
        this.isSpinnerVisibale = false;
      }
      // end if 
    }
    this.previousValue = this.searchField.val();
  }
  getResults(){
    this.resultsDev.html('imagine reuslts here');
    this.isSpinnerVisibale = false;
  }
  keyPressToggle(e){
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