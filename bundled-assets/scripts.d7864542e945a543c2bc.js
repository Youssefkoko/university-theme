!function(e){function t(t){for(var i,a,l=t[0],o=t[1],c=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(h&&h(t);d.length;)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,l=1;l<s.length;l++){var o=s[l];0!==r[o]&&(i=!1)}i&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},r={0:0},n=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var h=o;n.push([3,1]),s()}([,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(2);var i=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},r=s(1);var n=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let s=0;s<e;s++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${s}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new r.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}},a=s(0),l=s.n(a);var o=class{constructor(){this.addSearchHTML(),this.resultsDiv=l()("#search-overlay__results"),this.openButton=l()(".js-search-trigger"),this.closeButton=l()(".search-overlay__close"),this.searchOverlay=l()(".search-overlay"),this.searchField=l()("#search-term"),this.typingTimer,this.isSpinnerVisibale=!1,this.previousValue,this.events(),this.isOverlayOpen=!1}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),l()(document).on("keydown",this.keyPressToggle.bind(this)),this.searchField.on("keyup",this.typingLogic.bind(this))}typingLogic(){this.searchField.val()!==this.previousValue&&(clearTimeout(this.typingTimer),this.searchField.val()?(this.isSpinnerVisibale||(this.resultsDiv.html('<div class="spinner-loader"></div>'),this.isSpinnerVisibale=!0),this.typingTimer=setTimeout(this.getResults.bind(this),750)):(this.resultsDiv.html(""),this.isSpinnerVisibale=!1)),this.previousValue=this.searchField.val()}getResults(){l.a.when(l.a.getJSON(themeData.root_url+"/wp-json/wp/v2/posts?search="+this.searchField.val()),l.a.getJSON(themeData.root_url+"/wp-json/wp/v2/pages?search="+this.searchField.val())).then((e,t)=>{var s=e[0].concat(t[0]);this.resultsDiv.html(`\n      <h2>General Information: </h2>\n        ${s.length?'<ul class="link-list min-list" >':"<p>No Search Found.</p>"}\n\n          ${s.map(e=>`\n            <li> \n              <a href="${e.link}">${e.title.rendered}</a>\n              ${"post"==e.type?"By: "+e.authorName:""}\n            </li>`).join("")}\n        \n        ${s.length?"</ul>":""}\n      `)},()=>{this.resultsDiv.html("Unexpected error, Please Try Again.")}),isSpinnerVisibale=!1}keyPressToggle(e){83!=e.keyCode||this.isOverlayOpen||l()("input, textarea").is(":focus")||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){this.searchOverlay.addClass("search-overlay--active"),l()("body").addClass("body-no-scroll"),setTimeout(()=>this.searchField.focus(),301),this.isOverlayOpen=!0}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),l()("body").removeClass("body-no-scroll"),this.searchField.val(""),this.isOverlayOpen=!1}addSearchHTML(){l()("body").append('\n    <div class="search-overlay">\n    <div class="search-overlay__top">\n      <div class="container">\n        <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>\n        <input type="text" name="" class="search-term" id="search-term" placeholder="Search...">\n        <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>\n      </div>\n    </div>\n    <div class="container">\n      <div id="search-overlay__results">\n      hello\n      </div>\n    </div>\n  </div>\n    ')}};new i,new n,new o}]);