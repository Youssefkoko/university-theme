webpackHotUpdate("scripts",{

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js?url=false!../node_modules/postcss-loader/src??ref--4-2!./style.css */ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js?url=false!../node_modules/postcss-loader/src??ref--4-2!./style.css */ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./css/style.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js?url=false!../node_modules/postcss-loader/src??ref--4-2!./style.css */ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./css/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./js/modules/HeroSlider.js":
/*!**********************************!*\
  !*** ./js/modules/HeroSlider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");


class HeroSlider {
  constructor() {
    if (document.querySelector(".hero-slider")) {
      // count how many slides there are
      const dotCount = document.querySelectorAll(".hero-slider__slide").length; // Generate the HTML for the navigation dots

      let dotHTML = "";

      for (let i = 0; i < dotCount; i++) {
        dotHTML += `<button class="slider__bullet glide__bullet" data-glide-dir="=${i}"></button>`;
      } // Add the dots HTML to the DOM


      document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend", dotHTML); // Actually initialize the glide / slider script

      var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](".hero-slider", {
        type: "carousel",
        perView: 1,
        autoplay: 3000
      });
      glide.mount();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeroSlider);

/***/ }),

/***/ "./js/modules/MobileMenu.js":
/*!**********************************!*\
  !*** ./js/modules/MobileMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".site-header__menu");
    this.openButton = document.querySelector(".site-header__menu-trigger");
    this.events();
  }

  events() {
    this.openButton.addEventListener("click", () => this.openMenu());
  }

  openMenu() {
    this.openButton.classList.toggle("fa-bars");
    this.openButton.classList.toggle("fa-window-close");
    this.menu.classList.toggle("site-header__menu--active");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./js/modules/MyNotes.js":
/*!*******************************!*\
  !*** ./js/modules/MyNotes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./js/modules/Search.js":
/*!******************************!*\
  !*** ./js/modules/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class Search {
  // 1. describe and create / initiate our object
  constructor() {
    this.addSearchHTML();
    this.resultsDiv = document.querySelector("#search-overlay__results");
    this.openButton = document.querySelectorAll(".js-search-trigger");
    this.closeButton = document.querySelector(".search-overlay__close");
    this.searchOverlay = document.querySelector(".search-overlay");
    this.searchField = document.querySelector("#search-term");
    this.isOverlayOpen = false;
    this.isSpinnerVisible = false;
    this.previousValue;
    this.typingTimer;
    this.events();
  } // 2. events


  events() {
    this.openButton.forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        this.openOverlay();
      });
    });
    this.closeButton.addEventListener("click", () => this.closeOverlay());
    document.addEventListener("keydown", e => this.keyPressDispatcher(e));
    this.searchField.addEventListener("keyup", () => this.typingLogic());
  } // 3. methods (function, action...)


  typingLogic() {
    if (this.searchField.value != this.previousValue) {
      clearTimeout(this.typingTimer);

      if (this.searchField.value) {
        if (!this.isSpinnerVisible) {
          this.resultsDiv.innerHTML = '<div class="spinner-loader"></div>';
          this.isSpinnerVisible = true;
        }

        this.typingTimer = setTimeout(this.getResults.bind(this), 750);
      } else {
        this.resultsDiv.innerHTML = "";
        this.isSpinnerVisible = false;
      }
    }

    this.previousValue = this.searchField.value;
  }

  async getResults() {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(universityData.root_url + "/wp-json/university/v1/search?term=" + this.searchField.value);
      const results = response.data;
      this.resultsDiv.innerHTML = `
        <div class="row">
          <div class="one-third">
            <h2 class="search-overlay__section-title">General Information</h2>
            ${results.generalInfo.length ? '<ul class="link-list min-list">' : "<p>No general information matches that search.</p>"}
              ${results.generalInfo.map(item => `<li><a href="${item.permalink}">${item.title}</a> ${item.postType == "post" ? `by ${item.authorName}` : ""}</li>`).join("")}
            ${results.generalInfo.length ? "</ul>" : ""}
          </div>
          <div class="one-third">
            <h2 class="search-overlay__section-title">Programs</h2>
            ${results.programs.length ? '<ul class="link-list min-list">' : `<p>No programs match that search. <a href="${universityData.root_url}/programs">View all programs</a></p>`}
              ${results.programs.map(item => `<li><a href="${item.permalink}">${item.title}</a></li>`).join("")}
            ${results.programs.length ? "</ul>" : ""}

            <h2 class="search-overlay__section-title">Professors</h2>
            ${results.professors.length ? '<ul class="professor-cards">' : `<p>No professors match that search.</p>`}
              ${results.professors.map(item => `
                <li class="professor-card__list-item">
                  <a class="professor-card" href="${item.permalink}">
                    <img class="professor-card__image" src="${item.image}">
                    <span class="professor-card__name">${item.title}</span>
                  </a>
                </li>
              `).join("")}
            ${results.professors.length ? "</ul>" : ""}

          </div>
          <div class="one-third">
            <h2 class="search-overlay__section-title">Campuses</h2>
            ${results.campuses.length ? '<ul class="link-list min-list">' : `<p>No campuses match that search. <a href="${universityData.root_url}/campuses">View all campuses</a></p>`}
              ${results.campuses.map(item => `<li><a href="${item.permalink}">${item.title}</a></li>`).join("")}
            ${results.campuses.length ? "</ul>" : ""}

            <h2 class="search-overlay__section-title">Events</h2>
            ${results.events.length ? "" : `<p>No events match that search. <a href="${universityData.root_url}/events">View all events</a></p>`}
              ${results.events.map(item => `
                <div class="event-summary">
                  <a class="event-summary__date t-center" href="${item.permalink}">
                    <span class="event-summary__month">${item.month}</span>
                    <span class="event-summary__day">${item.day}</span>  
                  </a>
                  <div class="event-summary__content">
                    <h5 class="event-summary__title headline headline--tiny"><a href="${item.permalink}">${item.title}</a></h5>
                    <p>${item.description} <a href="${item.permalink}" class="nu gray">Learn more</a></p>
                  </div>
                </div>
              `).join("")}

          </div>
        </div>
      `;
      this.isSpinnerVisible = false;
    } catch (e) {
      console.log(e);
    }
  }

  keyPressDispatcher(e) {
    if (e.keyCode == 83 && !this.isOverlayOpen && document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "TEXTAREA") {
      this.openOverlay();
    }

    if (e.keyCode == 27 && this.isOverlayOpen) {
      this.closeOverlay();
    }
  }

  openOverlay() {
    this.searchOverlay.classList.add("search-overlay--active");
    document.body.classList.add("body-no-scroll");
    this.searchField.value = "";
    setTimeout(() => this.searchField.focus(), 301);
    this.isOverlayOpen = true;
    return false;
  }

  closeOverlay() {
    this.searchOverlay.classList.remove("search-overlay--active");
    document.body.classList.remove("body-no-scroll");
    this.isOverlayOpen = false;
  }

  addSearchHTML() {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="search-overlay">
        <div class="search-overlay__top">
          <div class="container">
            <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
            <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">
            <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
          </div>
        </div>
        
        <div class="container">
          <div id="search-overlay__results"></div>
        </div>

      </div>
    `);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ "./js/modules/MobileMenu.js");
/* harmony import */ var _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/HeroSlider */ "./js/modules/HeroSlider.js");
/* harmony import */ var _modules_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Search */ "./js/modules/Search.js");
/* harmony import */ var _modules_MyNotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MyNotes */ "./js/modules/MyNotes.js");
/* harmony import */ var _modules_MyNotes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_MyNotes__WEBPACK_IMPORTED_MODULE_4__);
 // Our modules / classes




 // Instantiate a new object using our modules/classes

const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
const heroSlider = new _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__["default"]();
const search = new _modules_Search__WEBPACK_IMPORTED_MODULE_3__["default"]();
const notes = new _modules_MyNotes__WEBPACK_IMPORTED_MODULE_4___default.a(); // Allow new JS and CSS to load in browser without a traditional page refresh

if (true) {
  module.hot.accept();
}

/***/ }),

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat(value) {
  return parseFloat(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];

    return r[k], r;
  }, {});
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide = function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();

    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: 'mutate',
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;

        default:
          warn('Invalid direction pattern [' + direction + steps + '] has been used');
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);

      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = this.slideWidth + 'px';
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);
      var width = Components.Sizes.slideWidth + 'px';

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? { passive: true } : false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();

        var swipe = this.touches(event);

        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);

        this.bindSwipeMove();
        this.bindSwipeEnd();

        Events.emit('swipe.start');
      }
    },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;


        var swipe = this.touches(event);

        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();

          Components.Move.make(subExSx * toFloat(touchRatio));

          Components.Html.root.classList.add(classes.dragging);

          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);
        var threshold = this.threshold(event);

        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

        this.enable();

        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
          // While swipe is positive and greater than threshold move backward.
          if (settings.perTouch) {
            steps = Math.min(steps, toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('<' + steps));
        } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
          // While swipe is negative and lower than negative threshold move forward.
          if (settings.perTouch) {
            steps = Math.max(steps, -toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('>' + steps));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(settings.classes.dragging);

        this.unbindSwipeMove();
        this.unbindSwipeEnd();

        Events.emit('swipe.end');
      }
    },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;

      Components.Transition.disable();

      return this;
    }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });

  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },


    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },


    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });

  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');

      this.bind();
    },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var capture = supportsPassive$1 ? { passive: true } : false;

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

      this.addBindings();
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (item) {
        item.classList.add(settings.classes.activeNav);

        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.activeNav);
        });
      }
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.activeNav);
      }
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });

  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'));
      }
    }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();
          }, this.time);
        }
      }
    },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        _this2.stop();
      });

      Binder.on('mouseout', Components.Html.root, function () {
        _this2.start();
      });
    },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn('Breakpoints option must be an object');
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  var points = sortBreakpoints(settings.breakpoints);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', function () {
    points = sortBreakpoints(points);

    defaults = _extends({}, settings);
  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Binder.off('resize', window);
  });

  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide$1 = function (_Core) {
  inherits(Glide$$1, _Core);

  function Glide$$1() {
    classCallCheck(this, Glide$$1);
    return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
  }

  createClass(Glide$$1, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide$$1;
}(Glide);

/* harmony default export */ __webpack_exports__["default"] = (Glide$1);


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./css/style.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src??ref--4-2!./css/style.css ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* 3rd party packages */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n.glide{position:relative;width:100%;box-sizing:border-box}\n.glide *{box-sizing:inherit}\n.glide__track{overflow:hidden}\n.glide__slides{position:relative;width:100%;list-style:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}\n.glide__slides--dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}\n.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}\n.glide__arrows{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.glide--rtl{direction:rtl}\n/* SASS and Global'ish Stuff */\nbody {\n  color: #333;\n  font-family: 'Roboto', sans-serif;\n  overflow-x: hidden;\n  position: relative;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\na {\n  color: #0D3B66;\n}\na:hover {\n  text-decoration: none;\n}\np, ul, ol {\n  margin: 0 0 1.65em 0;\n}\np, li {\n  line-height: 1.65;\n}\n.container {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 16px;\n  position: relative;\n}\n.container--narrow {\n  max-width: 960px;\n}\n.section-break {\n  border: none;\n  border-top: 1px solid #DDD;\n  margin: 2.5rem 0;\n}\n.min-list {\n  padding: 0;\n  margin: 0;\n}\n.min-list li {\n  list-style: none;\n}\n.p-top-small {padding-top: 1rem}\n.p-top-large {padding-top: 1.6rem}\n.p-bottom-large {padding-bottom: 1.6rem}\n@media (min-width: 530px) {\n  .p-top-large {padding-top: 3.5rem}\n  .p-bottom-large {padding-bottom: 3.5rem}\n  }\n.no-margin {margin: 0}\n.nu {text-decoration: none}\n.nu:hover {text-decoration: underline}\n.t-left {text-align: left}\n.t-right {text-align: right}\n.t-center {text-align: center}\n.t-small {font-size: .85rem}\n.float-left {float: left}\n.float-right {float: right}\n.push-right {margin-right: 20px}\n.container:before,\n.container:after,\n.group:before,\n.group:after {\n  content: \" \";\n  display: table;\n}\n.container:after,\n.group:after {\n  clear: both;\n}\n.hide {\n  display: none;\n}\n/* BEM Blocks */\n.remove-favorite {\n  display: inline-block;\n  transition: all .3s;\n  color: #999;\n  font-size: .9rem;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 3px;\n}\n.remove-favorite:hover {\n  background-color: #DEDEDE;\n}\n.page-section {\n  padding-top: 1.6rem;\n  padding-bottom: 1.6rem;\n}\n@media (min-width: 530px) {\n.page-section {\n    padding-top: 3.5rem;\n    padding-bottom: 3.5rem\n}\n  }\n.page-section--white {\n    background-color: #FFF;\n  }\n.page-section--beige {\n    background-color: #FAF0CA;\n  }\n.page-section p:last-of-type {\n    margin-bottom: 0;\n  }\n.school-logo-text {\n  position: relative;\n  z-index: 20;\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 100;\n}\n.school-logo-text strong {\n  font-weight: 400;\n}\n.school-logo-text a {\n  color: #FFF;\n  text-decoration: none;\n}\n.school-logo-text--alt-color a {\n  color: #666;\n}\n.school-logo-text--alt-color a:hover {\n    color: #0D3B66;\n    text-decoration: underline;\n  }\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.spinner-loader {\n  margin-top: 45px;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  border: 0.25rem solid rgba(0, 0, 0, 0.2);\n  border-top-color: black;\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear;\n}\n.c-orange {color: #F95738}\n.c-blue {color: #0D3B66}\n.c-white {color: #FFF}\n.c-dark {color: #333}\n.gray {color: #999999}\n.search-trigger {\n  display: none;\n  color: #FFF;\n  position: relative;\n  cursor: pointer;\n  top: 1px;\n  margin-left: 20px;\n}\n@media (min-width: 960px) {\n.search-trigger {\n    display: inline-block;\n    top: 6px\n}\n  }\n.search-trigger:hover {\n  opacity: .65;\n}\n.social-icons-list {\n  display: flex;\n  margin: 0 -8px;\n}\n.social-icons-list li {\n  flex: 1;\n  margin: 0 8px;\n}\n.social-icons-list li a {\n  display: block;\n  text-align: center;\n  color: #FFF;\n  font-size: 1.25rem;\n}\n.social-icons-list li a:hover {\n  opacity: .75;\n}\n.social-color-facebook {background-color: #4862a3}\n.social-color-twitter {background-color: #55acee}\n.social-color-youtube {background-color: #cc1e1f}\n.social-color-linkedin {background-color: #0077b5}\n.social-color-instagram {background-color: #d8226b}\n.nav-list ul {\n  padding: 0;\n  margin: 0;\n}\n.nav-list li {\n  list-style: none;\n}\n.nav-list a {\n  font-size: .9rem;\n  color: #999;\n  text-decoration: none;\n}\n.nav-list a:hover {\n  color: #0D3B66;\n  text-decoration: underline;\n}\n.one-half,\n.one-third,\n.one-fourth,\n.one-fifth,\n.one-sixth {\n  padding-bottom: 1.6rem;\n}\n@media (min-width: 960px) {\n  .row {\n    margin-right: -50px;\n  }\n\n  .one-half,\n  .one-third,\n  .two-thirds,\n  .one-fourth,\n  .one-fifth,\n  .one-sixth {\n    padding-bottom: 0;\n    float: left;\n    box-sizing: border-box;\n    padding-right: 50px;\n  }\n\n  .two-thirds {width: 66.66%;}\n  .one-half {width: 50%}\n  .one-third {width: 33.33%}\n  .one-quarter {width: 25%}\n  .one-fifth {width: 20%}\n  .one-sixth {width: 16.66%}\n  }\n/* Make Top WP Admin Bar Fixed on Mobile */\n@media screen and (max-width: 600px) {\n  #wpadminbar {\n    position: fixed;\n  }\n}\n/* Seach Form */\n.search-form {\n  background-color: #DEDEDE;\n  padding: 20px;\n  text-align: center;\n}\n.search-form label {\n  display: block;\n}\n.search-form-row {\n  display: flex;\n}\n.search-form .s {\n  min-width: 20px;\n  flex-basis: auto;\n  flex-grow: 1;\n  border: none;\n  font-family: 'Roboto', sans-serif;\n  padding: 10px;\n}\n@media (min-width: 530px) {\n.search-form .s {\n    font-size: 1.4rem\n}\n  }\n.search-submit {\n  color: #FFF;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n  background-color: #0D3B66;\n  font-family: 'Roboto', sans-serif;\n  padding: 0 20px;\n  margin-left: 10px;\n}\n.note-limit-message {\n  visibility: hidden;\n  opacity: 0;\n  transition: all .3s ease-out;\n  color: #c32929;\n  font-weight: bold;\n}\n.note-limit-message.active {\n  visibility: visible;\n  opacity: 1;\n}\n/* Like Box */\n.generic-content .like-box {\n  float: right;\n  font-size: 1rem;\n  background-color: #EDEDED;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, .25);\n  color: red;\n  padding: 10px 10px 10px 25px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin: 0 0 30px 30px;\n  position: relative;\n}\n.generic-content .like-box:hover {\n  background-color: #DEDEDE;\n}\n.like-count {\n  padding-left: 10px;\n}\n.like-box .fa-heart-o {\n  transition: all .35s ease-out;\n  position: absolute;\n  left: 10px;\n}\n.like-box .fa-heart {\n  left: 10px;\n  transition: all .4s ease-out;\n  position: absolute;\n  visibility: hidden;\n  transform: scale(.2);\n  opacity: 0;\n}\n.like-box[data-exists=\"yes\"] .fa-heart {\n  transform: scale(1);\n  visibility: visible;\n  opacity: 1;\n}\n.like-box[data-exists=\"yes\"] .fa-heart-o {\n  visibility: hidden;\n  opacity: 0;\n}\n/* Customize Login Screen */\nbody.login .button-primary {\n  background-color: #F95738;\n  border-color: rgb(224, 84, 56);\n  text-shadow: 0 -1px 1px rgb(212, 82, 56),1px 0 1px rgb(212, 82, 56),0 1px 1px rgb(212, 82, 56),-1px 0 1px rgb(212, 82, 56);\n  box-shadow: 0 1px 0 rgb(199, 80, 56);\n}\nbody.login .button-primary:hover,\nbody.login .button-primary:active,\nbody.login .button-primary:focus {\n  background-color: rgb(232, 85, 56);\n  border-color: rgb(212, 82, 56);\n  text-shadow: 0 -1px 1px rgb(199, 80, 56),1px 0 1px rgb(199, 80, 56),0 1px 1px rgb(199, 80, 56),-1px 0 1px rgb(199, 80, 56);\n  box-shadow: 0 1px 0 rgb(186, 78, 56);\n}\nbody.login {\n  background-color: #FAF0CA;\n}\n.login h1 a {\n  color: #0D3B66;\n  font-size: 30px;\n  font-weight: 300;\n  background-image: none;\n  width: auto;\n  height: auto;\n  text-indent: 0;\n}\n.btn {\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 4px;\n  overflow: hidden;\n  text-decoration: none;\n  color: #FFF;\n  font-size: 1.19rem;\n  padding: 12px 24px;\n  border: none;\n  outline: none;\n}\n.btn--small {\n    font-size: .88rem;\n    padding: 7px 13px;\n    font-weight: 300;\n  }\n.btn--with-photo {\n    padding-left: 40px;\n    position: relative;\n  }\n.btn--orange {\n    background-color: #EE964B;\n  }\n.btn--orange:hover {\n    background: linear-gradient(#EE964B, rgb(235, 109, 0));\n  }\n.btn--dark-orange {\n    background-color: #F95738;\n  }\n.btn--dark-orange:hover {\n    background: linear-gradient(#F95738, rgb(204, 34, 0));\n  }\n.btn--blue {\n    background-color: #0D3B66;\n  }\n.btn--blue:hover {\n    background: linear-gradient(rgb(13, 80, 143), #0D3B66);\n  }\n.btn--yellow {\n    background-color: #F4D35E;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, .22);\n  }\n.btn--yellow:hover {\n    background: linear-gradient(#F4D35E, rgb(240, 188, 0));\n  }\n.btn--beige {\n    background-color: #FAF0CA;\n    color: #173f58;\n  }\n.btn--beige:hover {\n    background-color: #F4D35E;\n  }\n.btn--gray {\n    background-color: #222;\n  }\n.btn--white {\n    background-color: #FFF;\n    color: #173f58;\n  }\n.btn--white:hover {\n    background-color: #DDD;\n  }\n.btn--large {\n    font-size: 1.3rem;\n    padding: 16px 34px;\n    border-radius: 7px;\n  }\n@media (min-width: 530px) {\n.btn--large {\n      font-size: 1.9rem\n  }\n  }\n.btn--inactive {\n    background-color: transparent;\n    cursor: default;\n    color: #333;\n  }\n/* My Notes */\n.edit-note,\n.delete-note,\n.submit-note {\n  font-size: 0.9rem;\n  background-color: #eee;\n  padding: 8px 16px;\n  display: inline-block;\n  margin-right: 7px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.submit-note {\n  color: #fff;\n  border: none;\n  background-color: #F95738;\n  line-height: 1.65;\n}\n.submit-note:hover {\n  background-color: rgb(235, 77, 45);\n}\n@media (min-width: 635px) {\n.edit-note,\n.delete-note {\n    position: relative;\n    top: -12px\n}\n  }\n.edit-note:hover,\n.delete-note:hover {\n  background-color: #ddd;\n}\n.delete-note {\n  color: red;\n}\n.update-note {\n  visibility: hidden;\n}\n.update-note--visible {\n  visibility: visible;\n}\n.note-title-field {\n  width: 40%;\n  font-size: 1.85rem;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 300;\n  color: #0D3B66;\n  border: 1px solid transparent;\n  padding: 7px;\n  outline: none;\n  position: relative;\n  top: 1px;\n}\n@media (max-width: 400px) {\n.note-title-field {\n    width: 100%\n}\n  }\n@media (min-width: 635px) {\n.note-title-field {\n    width: 65%;\n    font-size: 3.125rem\n}\n  }\n.note-body-field {\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  resize: none;\n  display: block;\n  width: 100%;\n  line-height: 1.65;\n  font-size: 1.15rem;\n  padding: 7px;\n  border: 1px solid transparent;\n  height: 175px;\n  outline: none;\n}\n.note-active-field {\n  border: 1px solid #ddd;\n  -webkit-animation: pulseBorder 0.75s alternate infinite;\n          animation: pulseBorder 0.75s alternate infinite;\n}\n@-webkit-keyframes pulseBorder {\n  0% {\n    border: 1px solid #fff;\n  }\n\n  100% {\n    border: 1px solid #ccc;\n  }\n}\n@keyframes pulseBorder {\n  0% {\n    border: 1px solid #fff;\n  }\n\n  100% {\n    border: 1px solid #ccc;\n  }\n}\n/* Create Note */\n.create-note {\n  background-color: #ddd;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.new-note-title {\n  width: 100%;\n  padding: 10px;\n  font-family: \"Roboto\", sans-serif;\n  border: none;\n  margin-bottom: 10px;\n  font-size: 1.15rem;\n  box-sizing: border-box;\n}\n.new-note-body {\n  width: 100%;\n  box-sizing: border-box;\n  resize: none;\n  padding: 10px;\n  font-family: \"Roboto\", sans-serif;\n  border: none;\n  margin-bottom: 10px;\n  height: 170px;\n  font-size: 1.15rem;\n  line-height: 1.65;\n}\n/* Reveal and Hide Fade Transitions */\n#my-notes {\n  position: relative;\n}\n#my-notes li {\n  transition: all 0.4s ease-out;\n  opacity: 1;\n}\n#my-notes li.fade-out {\n  height: 0px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  opacity: 0.5;\n}\n#my-notes li.fade-in-calc {\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  position: absolute;\n  left: 0;\n  right: 0;\n  opacity: 0;\n}\n.site-header {\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 20px 0;\n}\n.site-header__avatar {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n.site-header__avatar img {\n    display: block;\n    width: 30px;\n    height: 30px;\n  }\n.site-header__menu {\n    visibility: hidden;\n    position: absolute;\n    background-color: rgba(13, 55, 94, 0.89);\n    left: 0;\n    right: 0;\n    top: -20px;\n    padding-top: 58px;\n    opacity: 0;\n    transform: translateY(-20%);\n    transition: opacity .3s ease-out, visibility .3s ease-out, transform .3s ease-out;\n    padding-bottom: 20px;\n  }\n.site-header__menu--active {\n      opacity: 1;\n      transform: translateY(0);\n      visibility: visible;\n    }\n@media (min-width: 960px) {\n.site-header__menu {\n      visibility: visible;\n      opacity: 1;\n      transform: translateY(0) scale(1);\n      position: static;\n      background-color: transparent;\n      float: right;\n      padding-top: 0;\n      padding-bottom: 0;\n      top: 0\n  }\n  }\n.site-header__search-trigger {\n    cursor: pointer;\n    color: #FFF;\n    font-size: 1.2rem;\n    position: absolute;\n    top: 6px;\n    right: 16px;\n  }\n@media (min-width: 530px) {\n.site-header__search-trigger {\n      top: 4px;\n      font-size: 1.4rem\n  }\n  }\n@media (min-width: 960px) {\n.site-header__search-trigger {\n      display: none\n  }\n  }\n.site-header__menu-trigger {\n    color: #FFF;\n    cursor: pointer;\n    font-size: 1.2rem;\n    position: absolute;\n    z-index: 10;\n    top: 7px;\n    right: 46px;\n  }\n@media (min-width: 530px) {\n.site-header__menu-trigger {\n      top: 5px;\n      font-size: 1.4rem\n  }\n  }\n@media (min-width: 960px) {\n.site-header__menu-trigger {\n      display: none\n  }\n  }\n.site-header__util {\n    padding: 0 0 0 20px;\n  }\n@media (min-width: 960px) {\n.site-header__util {\n      padding: 0;\n      float: right\n  }\n  }\n.site-header__btn {\n    margin-right: 20px;\n  }\n@media (min-width: 960px) {\n.site-header__btn {\n      float: left\n  }\n  }\n.site-header .btn--with-photo {\n    margin-right: 0;\n  }\n.site-footer {\n  padding: 2rem 0 3.5rem 0;\n  background-image: linear-gradient(#FFF, #ECECEC);\n}\n.site-footer p {\n    font-size: 0.9rem;\n  }\n.site-footer .headline {\n    color: #666;\n    margin-bottom: .33rem;\n  }\n.site-footer__link {\n    color: #999;\n    text-decoration: none;\n  }\n.site-footer__link:hover {\n    color: #0D3B66;\n    text-decoration: underline;\n  }\n.site-footer__inner {\n    border-top: 1px dotted #DEDEDE;\n    padding-top: 3.5rem;\n  }\n.site-footer__col-one {\n    text-align: center;\n  }\n@media (min-width: 960px) {\n.site-footer__col-one {\n      text-align: left;\n      width: 33%;\n      float: left\n  }\n  }\n.site-footer__col-two-three-group {\n    text-align: center;\n    width: 85%;\n    margin: 0 auto;\n  }\n@media (min-width: 960px) {\n.site-footer__col-two-three-group {\n      text-align: left;\n      float: left;\n      width: 42%;\n      margin: 0\n  }\n  }\n.site-footer__col-two {\n    width: 50%;\n    float: left;\n  }\n.site-footer__col-three {\n    width: 50%;\n    float: left;\n  }\n.site-footer__col-four {\n    padding-top: 20px;\n    width: 85%;\n    margin: 0 auto;\n    clear: both;\n    text-align: center;\n  }\n@media (min-width: 960px) {\n.site-footer__col-four {\n      padding-top: 0;\n      margin: 0;\n      clear: none;\n      text-align: left;\n      width: 25%;\n      float: right\n  }\n  }\n.main-navigation {\n  padding-top: 2px;\n}\n.main-navigation ul {\n    padding: 0;\n    margin: 0;\n  }\n.main-navigation ul:before,\n  .main-navigation ul:after {\n    content: \" \";\n    display: table;\n  }\n.main-navigation ul:after {\n    clear: both;\n  }\n@media (min-width: 960px) {\n.main-navigation {\n    float: left;\n    margin-right: 20px\n}\n  }\n.main-navigation li {\n  list-style: none;\n}\n@media (min-width: 960px) {\n.main-navigation li {\n    float: left;\n    padding-left: 20px\n}\n  }\n.main-navigation a {\n  display: block;\n  padding: 10px 20px;\n  color: #FFF;\n  text-decoration: none;\n  font-weight: 300;\n}\n@media (min-width: 960px) {\n.main-navigation a {\n    display: inline-block;\n    padding: 0\n}\n  }\n.main-navigation .current-menu-item a,\n.main-navigation a:hover {\n  color: #FAF0CA;\n}\n.page-banner {\n  background-color: #000;\n  padding: 80px 0 40px 0;\n  position: relative;\n}\n@media (min-width: 530px) {\n.page-banner {\n    padding: 130px 0 60px 0\n}\n  }\n.page-banner__content {\n    position: relative;\n    z-index: 2;\n  }\n.page-banner__title {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 300;\n    font-size: 3.6rem;\n    margin: 0 0 1rem 0;\n    color: #FFF;\n  }\n@media (min-width: 530px) {\n.page-banner__title {\n      font-size: 5rem\n  }\n  }\n.page-banner__bg-image {\n    opacity: .33;\n    background-size: cover;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n.page-banner__intro {\n    font-weight: 300;\n    font-size: 1.2rem;\n    line-height: 1.3;\n    color: #EDEDED;\n  }\n@media (min-width: 530px) {\n.page-banner__intro {\n      font-size: 1.65rem\n  }\n  }\n.page-banner__intro p {\n    margin: 0;\n  }\n.hero-slider {\n  position: relative;\n}\n.hero-slider div {\n    outline: none;\n  }\n.hero-slider__interior {\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n@media (min-width: 960px) {\n.hero-slider__interior {\n      padding-top: 130px;\n      padding-bottom: 130px\n  }\n  }\n.hero-slider__slide {\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n.hero-slider__overlay {\n    margin: 0 auto;\n    background-color: rgba(0, 0, 0, 0.68);\n    padding: 40px;\n    color: #fff;\n  }\n@media (min-width: 960px) {\n.hero-slider__overlay {\n      width: 50%\n  }\n  }\n.slick-dots {\n  z-index: 100;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  top: 15px;\n}\n@media (min-width: 960px) {\n.slick-dots {\n    top: 50px\n}\n  }\n.slick-dots li {\n    list-style: none;\n    display: inline;\n  }\n.slick-dots li button {\n    display: inline-block;\n    text-indent: -9999px;\n    font-size: 0;\n    line-height: 0;\n    width: 10px;\n    height: 10px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n    border: none;\n    margin: 0 4px;\n    padding: 0;\n    outline: none;\n    transition: background-color 0.3s ease-out;\n    cursor: pointer;\n  }\n.slick-dots .slick-active button {\n    background-color: #fff;\n  }\n/* GlideJS */\n.glide__bullets {\n  z-index: 100;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  top: 15px;\n}\n@media (min-width: 960px) {\n.glide__bullets {\n    top: 50px\n}\n  }\n.glide__bullets button {\n    display: inline-block;\n    text-indent: -9999px;\n    font-size: 0;\n    line-height: 0;\n    width: 10px;\n    height: 10px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n    border: none;\n    margin: 0 3px;\n    padding: 0;\n    outline: none;\n    transition: background-color 0.3s ease-out;\n    cursor: pointer;\n  }\n.glide__bullets button.glide__bullet--active {\n    background-color: #fff;\n  }\n.search-overlay {\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 110;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, .96);\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(1.09);\n  transition: opacity .3s, transform .3s, visibility .3s;\n  box-sizing: border-box;\n}\n.search-overlay p {\n    padding-top: 15px;\n  }\n.search-overlay .event-summary p {\n    padding-top: 0;\n  }\n.search-overlay .event-summary {\n    margin-bottom: 0;\n    margin-top: 20px;\n  }\nbody.admin-bar .search-overlay {\n    top: 32px;\n  }\n.search-overlay__top {\n    background-color: rgba(0, 0, 0, .12);\n  }\n.search-overlay__icon {\n    margin-right: 10px;\n    font-size: 1.8rem;\n    color: #F95738;\n  }\n@media (min-width: 960px) {\n.search-overlay__icon {\n      font-size: 2.5rem\n  }\n  }\n.search-overlay--active {\n    visibility: visible;\n    opacity: 1;\n    transform: scale(1);\n  }\n.search-overlay__section-title {\n    margin: 30px 0 1px 0;\n    font-weight: 400;\n    color: #0D3B66;\n    font-size: 2rem;\n    padding: 15px 0;\n    border-bottom: 1px solid #CCC;\n  }\n.search-overlay__close {\n    position: absolute;\n    top: 13px;\n    right: 16px;\n    font-size: 2.1rem;\n    cursor: pointer;\n    transition: all .3s;\n    background-color: #FFF;\n    color: #F95738;\n    line-height: .7;\n  }\n@media (min-width: 530px) {\n.search-overlay__close {\n      top: 18px;\n      font-size: 2.1rem\n  }\n  }\n@media (min-width: 960px) {\n.search-overlay__close {\n      top: 26px;\n      font-size: 2.8rem\n  }\n  }\n.search-overlay__close:hover {\n    opacity: 1;\n  }\n.search-overlay .one-half {\n    padding-bottom: 0;\n  }\n.search-term {\n  width: 75%;\n  box-sizing: border-box;\n  border: none;\n  padding: 15px 0;\n  margin: 0;\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 300;\n  outline: none;\n  color: #F95738;\n\n}\n@media (min-width: 530px) {\n.search-term {\n    font-size: 1.5rem\n\n}\n  }\n@media (min-width: 960px) {\n.search-term {\n    width: 80%;\n    font-size: 3rem\n\n}\n  }\n.body-no-scroll {\n  overflow: hidden;\n}\n.professor-cards {\n  margin: 0;\n  padding: 0;\n}\n.search-overlay .professor-cards {\n    padding-top: 21px;\n  }\n.professor-card {\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  margin-right: 15px;\n  background-color: #F95738;\n  overflow: hidden;\n}\n.search-overlay .professor-card {\n    width: 180px;\n  }\n.professor-card__image {\n    display: block;\n    transition: opacity .3s ease-out, transform .3s ease-out;\n  }\n.professor-card:hover .professor-card__image {\n    opacity: .80;\n    transform: scale(1.1) rotate(4deg);\n  }\n.professor-card__name {\n    font-weight: 300;\n    font-size: .9rem;\n    position: absolute;\n    bottom: 0;\n    color: #FFF;\n    left: 0;\n    right: 0;\n    padding: 3px 10px;\n    background-color: rgba(236, 68, 34, 0.85);\n  }\n.professor-card:hover .professor-card__name {\n    background-color: rgba(213, 62, 32, 0.85);\n  }\n.professor-card__list-item {\n    display: inline-block;\n    list-style: none;\n  }\n.headline {\n  margin: 0;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 300;\n}\n.headline--large {\n    font-size: 3.6rem;\n  }\n@media (min-width: 530px) {\n.headline--large {\n      font-size: 6.25rem\n  }\n  }\n.headline--large-medium {\n    font-size: 5rem;\n    margin: 0 0 1rem 0;\n  }\n.headline--medium {\n    font-size: 1.9rem;\n    margin-bottom: 0.75rem;\n  }\n@media (min-width: 530px) {\n.headline--medium {\n      font-size: 3.125rem\n  }\n  }\n.headline--small-plus {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 1.6875rem;\n    font-weight: 400;\n    margin-bottom: 1.9rem;\n  }\n.headline--small {\n    font-size: 1.2rem;\n    margin-bottom: 1.9rem;\n  }\n@media (min-width: 530px) {\n.headline--small {\n      font-size: 1.6875rem\n  }\n  }\n.headline--smaller {\n    font-size: 1.5rem;\n  }\n.headline--tiny {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 1.3875rem;\n    margin-bottom: 0.25rem;\n  }\n.headline--post-title a {\n    color: #0D3B66;\n    text-decoration: none;\n  }\n.headline--post-title a:hover {\n    text-decoration: underline;\n  }\n.generic-content p, .generic-content li {\n    font-size: 1.15rem;\n  }\n.generic-content blockquote, .generic-content blockquote p {\n    font-size: 1.5rem;\n    font-style: italic;\n  }\n.generic-content h1, .generic-content h2, .generic-content h3, .generic-content h4, .generic-content h5, .generic-content h6 {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 300;\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n.generic-content h1 {font-size: 3.6rem}\n.generic-content h2 {font-size: 3.1rem}\n.generic-content h3 {font-size: 2.6rem}\n.generic-content h4 {font-size: 2.1rem}\n.generic-content h5 {font-size: 1.6rem}\n.generic-content h6 {font-size: 1.15rem}\n@media (min-width: 530px) {\n    .generic-content h1 {font-size: 6.25rem}\n    .generic-content h2 {font-size: 5rem}\n    .generic-content h3 {font-size: 3.125rem}\n    .generic-content h4 {font-size: 2.4rem}\n    .generic-content h5 {font-size: 1.9rem}\n    .generic-content h6 {font-size: 1.15rem}\n  }\n@media (min-width: 960px) {\n.full-width-split {\n    display: flex\n}\n  }\n.full-width-split__one {\n    flex: 1;\n    padding: 1.6rem 16px;\n  }\n@media (min-width: 960px) {\n.full-width-split__one {\n      padding: 40px\n  }\n  }\n@media (min-width: 960px) {\n.full-width-split__one .full-width-split__inner {\n        float: right\n    }\n  }\n.full-width-split__two {\n    flex: 1;\n    background-color: #FAF0CA;\n    padding: 1.6rem 16px;\n  }\n@media (min-width: 960px) {\n.full-width-split__two {\n      padding: 40px\n  }\n  }\n@media (min-width: 1350px) {\n.full-width-split__inner {\n      width: 610px\n  }\n    }\n.event-summary {\n  position: relative;\n  padding-left: 107px;\n  min-height: 77px;\n  padding-bottom: 1px;\n  margin-bottom: 20px;\n}\n.event-summary__title a {\n    color: #173f58;\n  }\n.event-summary__date {\n    text-decoration: none;\n    display: block;\n    top: 0;\n    left: 0;\n    position: absolute;\n    padding: 14px 0 11px 0;\n    color: #FFF;\n    border-radius: 50%;\n    background-color: #0D3B66;\n    width: 80px;\n    line-height: 1;\n    transition: opacity .33s;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, .22);\n  }\n.event-summary__date:hover {\n    opacity: .75;\n  }\n.event-summary__date--beige {\n    background-color: #F4D35E;\n  }\n.event-summary__month {\n    display: block;\n    font-size: 1.5rem;\n    font-weight: 300;\n    text-transform: uppercase;\n  }\n.event-summary__day {\n    display: block;\n    font-size: 2.02rem;\n    font-weight: 700;\n  }\n.page-links {\n  position: relative;\n  z-index: 1;\n  background-color: #FAF0CA;\n  margin: 0 0 40px 0;\n}\n@media (min-width: 767px) {\n.page-links {\n    margin: 0 0 40px 20px;\n    width: 300px;\n    float: right\n}\n  }\n.page-links__title {\n    margin: 0;\n    font-weight: normal;\n    text-align: center;\n    padding: 20px 0;\n    background-color: #0D3B66;\n    color: #FFF;\n\n  }\n.page-links__title a {\n        color: #FFF;\n        text-decoration: none;\n        background-color: #0D3B66;\n      }\n.page-links li {\n    border-top: 1px solid rgb(244, 223, 138);\n  }\n.page-links li:first-child {\n    border-top: none;\n  }\n.page-links__active,\n  .page-links .current_page_item {\n    text-align: center;\n    background-color: rgb(244, 231, 180);\n    color: #0D3B66;\n    font-weight: bold;\n  }\n.page-links li a {\n    display: block;\n    text-align: center;\n    padding: 17px 10px;\n    text-decoration: none;\n    color: #0D3B66;\n    transition: all .3s;\n  }\n.page-links li a:hover {\n    color: rgb(13, 51, 87);\n    background-color: rgb(238, 225, 170);\n  }\n.acf-map {\nwidth: 100%;\nheight: 400px;\nborder: #ccc solid 1px;\nmargin: 20px 0;\n}\n/* fixes potential theme css conflict */\n.acf-map img {\n max-width: inherit !important;\n}\n.link-list li {\n    padding: 1rem 0;\n    font-size: 1.5rem;\n    border-bottom: 1px dotted #DEDEDE;\n  }\n.search-overlay .link-list li {\n      font-size: 1.3rem;\n    }\n.link-list li:last-child {\n    border-bottom: none;\n  }\n.link-list a {\n    color: #F95738;\n  }\n.metabox {\n  background-color: #FAF0CA;\n  border-radius: 3px;\n  padding: 10px 15px;\n  display: inline-block;\n  margin-bottom: 30px;\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, .07);\n\n}\n.metabox--position-up {\n    position: absolute;\n    top: 0;\n    transform: translateY(-50%);\n  }\n.metabox--with-home-link {\n    padding: 0;\n  }\n.metabox__main {\n    padding: 10px 15px 10px 11px;\n  }\n.metabox p {\n    margin: 0;\n    font-size: .9rem;\n    color: rgb(168, 146, 56);\n  }\n.metabox a {\n    color: rgb(168, 146, 56);\n    text-decoration: none;\n    font-weight: bold;\n  }\n.metabox a:hover {\n    text-decoration: underline;\n  }\n.metabox .metabox__blog-home-link {\n    background-color: #0D3B66;\n    color: #FFF;\n    display: inline-block;\n    padding: 10px 15px;\n    border-radius: 3px 0 0 3px;\n    font-weight: normal;\n  }\n.metabox .metabox__blog-home-link:hover {\n    text-decoration: none;\n    background-color: rgb(11, 47, 81);\n  }\n.post-item {\n  border-bottom: 1px dotted #DEDEDE;\n  padding-bottom: 1.7rem;\n  margin-bottom: 1.7rem;\n}\n.post-item:last-of-type {\n    border-bottom: none;\n    margin-bottom: 0;\n  }\n", "",{"version":3,"sources":["webpack://css/style.css","webpack://node_modules/normalize.css/normalize.css","webpack://node_modules/@glidejs/glide/dist/css/glide.core.min.css","webpack://css/base/baseline.css","webpack://css/base/utility-classes.css","webpack://css/modules/shame.css","webpack://css/modules/login.css","webpack://css/modules/btn.css","webpack://css/modules/my-notes.css","webpack://css/modules/site-header.css","webpack://css/modules/site-footer.css","webpack://css/modules/main-navigation.css","webpack://css/modules/page-banner.css","webpack://css/modules/hero-slider.css","webpack://css/modules/search-overlay.css","webpack://css/modules/professor-card.css","webpack://css/modules/headline.css","webpack://css/modules/generic-content.css","webpack://css/modules/full-width-split.css","webpack://css/modules/event-summary.css","webpack://css/modules/page-links.css","webpack://css/modules/acf-map.css","webpack://css/modules/link-list.css","webpack://css/modules/metabox.css","webpack://css/modules/post-item.css"],"names":[],"mappings":"AAAA,uBAAuB;ACAvB,2EAA2E;AAE3E;+EAC+E;AAE/E;;;EAGE;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;AAEA;+EAC+E;AAE/E;;EAEE;AAEF;EACE,SAAS;AACX;AAEA;;EAEE;AAEF;EACE,cAAc;AAChB;AAEA;;;EAGE;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;AAEA;+EAC+E;AAE/E;;;EAGE;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;AAEA;;;EAGE;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;AAEA;+EAC+E;AAE/E;;EAEE;AAEF;EACE,6BAA6B;AAC/B;AAEA;;;EAGE;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,yCAAiC;UAAjC,iCAAiC,EAAE,MAAM;AAC3C;AAEA;;EAEE;AAEF;;EAEE,mBAAmB;AACrB;AAEA;;;EAGE;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;AAEA;;EAEE;AAEF;EACE,cAAc;AAChB;AAEA;;;EAGE;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;AAEA;EACE,eAAe;AACjB;AAEA;EACE,WAAW;AACb;AAEA;+EAC+E;AAE/E;;EAEE;AAEF;EACE,kBAAkB;AACpB;AAEA;+EAC+E;AAE/E;;;EAGE;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;AAEA;;;EAGE;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;AAEA;;;EAGE;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;AAEA;;EAEE;AAEF;;;;EAIE,0BAA0B;AAC5B;AAEA;;EAEE;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;AAEA;;EAEE;AAEF;;;;EAIE,8BAA8B;AAChC;AAEA;;EAEE;AAEF;EACE,8BAA8B;AAChC;AAEA;;;;;EAKE;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;AAEA;;EAEE;AAEF;EACE,wBAAwB;AAC1B;AAEA;;EAEE;AAEF;EACE,cAAc;AAChB;AAEA;;;EAGE;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;AAEA;;EAEE;AAEF;;EAEE,YAAY;AACd;AAEA;;;EAGE;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;AAEA;;EAEE;AAEF;EACE,wBAAwB;AAC1B;AAEA;;;EAGE;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;AAEA;+EAC+E;AAE/E;;EAEE;AAEF;EACE,cAAc;AAChB;AAEA;;EAEE;AAEF;EACE,kBAAkB;AACpB;AAEA;+EAC+E;AAE/E;;EAEE;AAEF;EACE,aAAa;AACf;AAEA;;EAEE;AAEF;EACE,aAAa;AACf;AC5VA,OAAO,iBAAiB,CAAC,UAAU,CAAC,qBAAqB;AAAC,SAAS,kBAAkB;AAAC,cAAc,eAAe;AAAC,eAAe,iBAAiB,CAAC,UAAU,CAAC,eAAe,CAAC,kCAA0B,CAA1B,0BAA0B,CAAC,2BAA2B,CAAC,kBAAkB,CAAC,eAAe,CAAC,SAAS,CAAC,kBAAkB,CAAC,YAAY,CAAC,gBAAgB,CAAC,qBAAqB;AAAC,yBAAyB,wBAAe,CAAf,qBAAe,CAAf,oBAAe,CAAf,gBAAgB;AAAC,cAAc,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,kBAAkB,CAAC,wBAAgB,CAAhB,qBAAgB,CAAhB,oBAAgB,CAAhB,gBAAgB,CAAC,0BAA0B,CAAC,uCAAuC;AAAC,gBAAgB,wBAAgB,CAAhB,gBAAgB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,oBAAoB;AAAC,eAAe,0BAA0B,CAAC,wBAAe,CAAf,qBAAe,CAAf,oBAAe,CAAf,gBAAgB;AAAC,gBAAgB,0BAA0B,CAAC,wBAAe,CAAf,qBAAe,CAAf,oBAAe,CAAf,gBAAgB;AAAC,YAAY,aAAa;AFIlxB,8BAA8B;AGc9B;EACE,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,kBAAkB;AACpB;AAEA;EACE,eAAe;EACf,YAAY;AACd;AAEA;EACE,cAAgB;AAClB;AAEA;EACE,qBAAqB;AACvB;AAEA;EACE,oBAAoB;AACtB;AAEA;EACE,iBAAiB;AACnB;AC5CA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,gBAAgB;AAClB;AAEA;EACE,UAAU;EACV,SAAS;AACX;AAEA;EACE,gBAAgB;AAClB;AAEA,cAAc,iBAAiB;AAC/B,cAAc,mBAAmB;AACjC,iBAAiB,sBAAsB;AD3BrC;EC8BA,cAAc,mBAAmB;EACjC,iBAAiB,sBAAsB;ED7BvC;ACgCF,YAAY,SAAS;AACrB,KAAK,qBAAqB;AAC1B,WAAW,0BAA0B;AAErC,SAAS,gBAAgB;AACzB,UAAU,iBAAiB;AAC3B,WAAW,kBAAkB;AAG7B,UAAU,iBAAiB;AAE3B,aAAa,WAAW;AACxB,cAAc,YAAY;AAC1B,aAAa,kBAAkB;AAE/B;;;;EAIE,YAAY;EACZ,cAAc;AAChB;AAEA;;EAEE,WAAW;AACb;AAEA;EACE,aAAa;AACf;AJxDA,eAAe;AKTf;EACE,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,mBAAmB;EACnB,sBAAsB;AAiBxB;AFhCE;AEaF;IAII,mBAAmB;IACnB;AAcJ;EF9BE;AEmBA;IACE,sBAAsB;EACxB;AAEA;IACE,yBAAwB;EAC1B;AAEA;IACE,gBAAgB;EAClB;AAGF;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;AAEA;EACE,WAAW;AAMb;AAJE;IACE,cAAgB;IAChB,0BAA0B;EAC5B;AAGF;EACE;IAEU,uBAAuB;EACjC;EACA;IAEU,yBAAyB;EACnC;AACF;AATA;EACE;IAEU,uBAAuB;EACjC;EACA;IAEU,yBAAyB;EACnC;AACF;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,uBAAuB;EACvB,0CAA0C;UAClC,kCAAkC;AAC5C;AAEA,WAAW,cAAkB;AAC7B,SAAS,cAAgB;AACzB,UAAU,WAAW;AACrB,SAAS,WAAW;AACpB,OAAO,cAAc;AAErB;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,QAAQ;EACR,iBAAiB;AAKnB;AFvFE;AE4EF;IAQI,qBAAqB;IACrB;AAEJ;EFrFE;AEuFF;EACE,YAAY;AACd;AAEA;EACE,aAAa;EACb,cAAc;AAChB;AAEA;EACE,OAAO;EACP,aAAa;AACf;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;AAEA;EACE,YAAY;AACd;AAEA,wBAAwB,yBAAyB;AACjD,uBAAuB,yBAAyB;AAChD,uBAAuB,yBAAyB;AAChD,wBAAwB,yBAAyB;AACjD,yBAAyB,yBAAyB;AAElD;EACE,UAAU;EACV,SAAS;AACX;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,qBAAqB;AACvB;AAEA;EACE,cAAgB;EAChB,0BAA0B;AAC5B;AAEA;;;;;EAKE,sBAAsB;AACxB;AFlJE;EEqJA;IACE,mBAAmB;EACrB;;EAEA;;;;;;IAME,iBAAiB;IACjB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA,aAAa,aAAa,CAAC;EAC3B,WAAW,UAAU;EACrB,YAAY,aAAa;EACzB,cAAc,UAAU;EACxB,YAAY,UAAU;EACtB,YAAY,aAAa;EFxKzB;AE2KF,0CAA0C;AAC1C;EACE;IACE,eAAe;EACjB;AACF;AAEA,eAAe;AACf;EACE,yBAAyB;EACzB,aAAa;EACb,kBAAkB;AACpB;AAEA;EACE,cAAc;AAChB;AAEA;EACE,aAAa;AACf;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,aAAa;AAIf;AFzNE;AE+MF;IAQI;AAEJ;EFvNE;AEyNF;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,yBAA2B;EAC3B,iCAAiC;EACjC,eAAe;EACf,iBAAiB;AACnB;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,4BAA4B;EAC5B,cAAc;EACd,iBAAiB;AACnB;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;AAEA,aAAa;AACb;EACE,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,0CAA0C;EAC1C,UAAU;EACV,4BAA4B;EAC5B,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,kBAAkB;AACpB;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,UAAU;AACZ;AAEA;EACE,UAAU;EACV,4BAA4B;EAC5B,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,UAAU;AACZ;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;AACZ;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;AClSA,2BAA2B;AAC3B;EACE,yBAA6B;EAC7B,8BAAwC;EACxC,0HAAkK;EAClK,oCAA8C;AAChD;AAEA;;;EAGE,kCAA2C;EAC3C,8BAAwC;EACxC,0HAAkK;EAClK,oCAA8C;AAChD;AAEA;EACE,yBAAwB;AAC1B;AAEA;EACE,cAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AC7BA;EACE,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AAkFf;AAhFE;IACE,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;EAClB;AAEA;IACE,kBAAkB;IAClB,kBAAkB;EACpB;AAEA;IACE,yBAA8B;EAChC;AAEA;IACE,sDAA8E;EAChF;AAEA;IACE,yBAA6B;EAC/B;AAEA;IACE,qDAA4E;EAC9E;AAEA;IACE,yBAA2B;EAC7B;AAEA;IACE,sDAAgE;EAClE;AAEA;IACE,yBAA6B;IAC7B,2CAA2C;EAC7C;AAEA;IACE,sDAA4E;EAC9E;AAEA;IACE,yBAAwB;IACxB,cAAc;EAChB;AAEA;IACE,yBAA6B;EAC/B;AAEA;IACE,sBAAsB;EACxB;AAEA;IACE,sBAAsB;IACtB,cAAc;EAChB;AAEA;IACE,sBAAsB;EACxB;AAEA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;EAIpB;AJpFA;AI6EA;MAKI;EAEJ;EJlFA;AIoFA;IACE,6BAA6B;IAC7B,eAAe;IACf,WAAW;EACb;AC3FF,aAAa;AACb;;;EAGE,iBAAiB;EACjB,sBAAsB;EACtB,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAA6B;EAC7B,iBAAiB;AACnB;AAEA;EACE,kCAAoD;AACtD;AAIE;AAFF;;IAGI,kBAAkB;IAClB;AAEJ;EADE;AAGF;;EAEE,sBAAsB;AACxB;AAEA;EACE,UAAU;AACZ;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,2CAA2C;EAC3C,gBAAgB;EAChB,cAAgB;EAChB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,QAAQ;AAUV;AARE;AAZF;IAaI;AAOJ;EANE;AAEA;AAhBF;IAiBI,UAAU;IACV;AAEJ;EADE;AAGF;EACE,WAAW;EACX,iCAAiC;EACjC,YAAY;EACZ,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,aAAa;AACf;AAEA;EACE,sBAAsB;EACtB,uDAA+C;UAA/C,+CAA+C;AACjD;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;EACxB;AACF;AARA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;EACxB;AACF;AAEA,gBAAgB;AAChB;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;AAEA;EACE,WAAW;EACX,aAAa;EACb,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;AAEA,qCAAqC;AACrC;EACE,kBAAkB;AACpB;AAEA;EACE,6BAA6B;EAC7B,UAAU;AACZ;AAEA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,qBAAqB;EACrB,oBAAoB;EACpB,YAAY;AACd;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;EACvB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,UAAU;AACZ;AC5JA;EACE,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,eAAe;AAsGjB;AApGE;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;EACT;AAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;EACd;AAEA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,wCAAgD;IAChD,OAAO;IACP,QAAQ;IACR,UAAU;IACV,iBAAiB;IACjB,UAAU;IACV,2BAA2B;IAC3B,iFAAiF;IACjF,oBAAoB;EAmBtB;AAjBE;MACE,UAAU;MACV,wBAAwB;MACxB,mBAAmB;IACrB;ANxBF;AMOA;MAoBI,mBAAmB;MACnB,UAAU;MACV,iCAAiC;MACjC,gBAAgB;MAChB,6BAA6B;MAC7B,YAAY;MACZ,cAAc;MACd,iBAAiB;MACjB;EAEJ;ENnCA;AMqCA;IACE,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,WAAW;EAUb;ANnEA;AMmDA;MASI,QAAQ;MACR;EAMJ;ENjEA;AAUA;AMuCA;MAcI;EAEJ;ENrDA;AMuDA;IACE,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,WAAW;EAUb;ANtFA;AMqEA;MAUI,QAAQ;MACR;EAMJ;ENpFA;AAUA;AMyDA;MAeI;EAEJ;ENxEA;AM0EA;IACE,mBAAmB;EAMrB;ANnFA;AM4EA;MAII,UAAU;MACV;EAEJ;ENjFA;AMmFA;IACE,kBAAkB;EAIpB;AN1FA;AMqFA;MAGI;EAEJ;ENxFA;AM0FA;IACE,eAAe;EACjB;AC3GF;EACE,wBAAwB;EACxB,gDAAgD;AAsElD;AApEE;IACE,iBAAiB;EACnB;AAEA;IACE,WAAW;IACX,qBAAqB;EACvB;AAEA;IACE,WAAW;IACX,qBAAqB;EACvB;AAEA;IACE,cAAgB;IAChB,0BAA0B;EAC5B;AAEA;IACE,8BAA8B;IAC9B,mBAAmB;EACrB;AAEA;IACE,kBAAkB;EAMpB;APtBA;AOeA;MAGI,gBAAgB;MAChB,UAAU;MACV;EAEJ;EPpBA;AOsBA;IACE,kBAAkB;IAClB,UAAU;IACV,cAAc;EAOhB;APlCA;AOwBA;MAKI,gBAAgB;MAChB,WAAW;MACX,UAAU;MACV;EAEJ;EPhCA;AOkCA;IACE,UAAU;IACV,WAAW;EACb;AACA;IACE,UAAU;IACV,WAAW;EACb;AACA;IACE,iBAAiB;IACjB,UAAU;IACV,cAAc;IACd,WAAW;IACX,kBAAkB;EASpB;AP1DA;AO4CA;MAOI,cAAc;MACd,SAAS;MACT,WAAW;MACX,gBAAgB;MAChB,UAAU;MACV;EAEJ;EPxDA;AQfF;EACE,gBAAgB;AAqBlB;AAnBE;IACE,UAAU;IACV,SAAS;EACX;AAEA;;IAEE,YAAY;IACZ,cAAc;EAChB;AAEA;IACE,WAAW;EACb;ARHA;AQbF;IAmBI,WAAW;IACX;AAEJ;ERPE;AQSF;EACE,gBAAgB;AAMlB;ARlBE;AQWF;IAII,WAAW;IACX;AAEJ;ERhBE;AQkBF;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,gBAAgB;AAKlB;AR9BE;AQoBF;IAOI,qBAAqB;IACrB;AAEJ;ER5BE;AQ8BF;;EAEE,cAAa;AACf;AChDA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AA4CpB;AT9CE;ASDF;IAKI;AA0CJ;ET5CE;ASKA;IACE,kBAAkB;IAClB,UAAU;EACZ;AAEA;IACE,2CAA2C;IAC3C,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;EAIb;ATrBA;ASYA;MAOI;EAEJ;ETnBA;ASqBA;IACE,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;EACV;AAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;EAIhB;ATzCA;ASiCA;MAMI;EAEJ;ETvCA;ASyCA;IACE,SAAS;EACX;AC9CF;EACE,kBAAkB;AA8BpB;AA5BE;IACE,aAAa;EACf;AAEA;IACE,iBAAiB;IACjB,oBAAoB;EAMtB;AVFA;AUNA;MAKI,kBAAkB;MAClB;EAEJ;EVAA;AUEA;IACE,sBAAsB;IACtB,4BAA4B;EAC9B;AAEA;IACE,cAAc;IACd,qCAAqC;IACrC,aAAa;IACb,WAAW;EAIb;AVjBA;AUSA;MAMI;EAEJ;EVfA;AUkBF;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,SAAS;AAIX;AVhCE;AUoBF;IAUI;AAEJ;EV9BE;AUiCA;IACE,gBAAgB;IAChB,eAAe;EACjB;AAEA;IACE,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;IACZ,cAAc;IACd,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,2CAA2C;IAC3C,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,UAAU;IACV,aAAa;IACb,0CAA0C;IAC1C,eAAe;EACjB;AAEA;IACE,sBAAsB;EACxB;AAGF,YAAY;AACZ;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,SAAS;AA0BX;AVlGE;AUgEF;IAUI;AAwBJ;EVhGE;AU2EA;IACE,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;IACZ,cAAc;IACd,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,2CAA2C;IAC3C,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,UAAU;IACV,aAAa;IACb,0CAA0C;IAC1C,eAAe;EACjB;AAEA;IACE,sBAAsB;EACxB;AC9GF;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,0CAA0C;EAC1C,kBAAkB;EAClB,UAAU;EACV,sBAAsB;EACtB,sDAAsD;EACtD,sBAAsB;AA0ExB;AAxEE;IACE,iBAAiB;EACnB;AAEA;IACE,cAAc;EAChB;AAEA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;AAEA;IACE,SAAS;EACX;AAEA;IACE,oCAAoC;EACtC;AAEA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,cAAkB;EAIpB;AX/BA;AWwBA;MAKI;EAEJ;EX7BA;AW+BA;IACE,mBAAmB;IACnB,UAAU;IACV,mBAAmB;EACrB;AAEA;IACE,oBAAoB;IACpB,gBAAgB;IAChB,cAAgB;IAChB,eAAe;IACf,eAAe;IACf,6BAA6B;EAC/B;AAEA;IACE,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,cAAkB;IAClB,eAAe;EASjB;AX9EA;AW4DA;MAWI,SAAS;MACT;EAMJ;EX5EA;AAUA;AWgDA;MAeI,SAAS;MACT;EAEJ;EXhEA;AWkEA;IACE,UAAU;EACZ;AAEA;IACE,iBAAiB;EACnB;AAGF;EACE,UAAU;EACV,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,SAAS;EACT,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,cAAkB;;AASpB;AX5GE;AWyFF;IAYI;;AAOJ;EX1GE;AAUA;AW6EF;IAeI,UAAU;IACV;;AAGJ;EX9FE;AWgGF;EACE,gBAAgB;AAClB;ACjHA;EACE,SAAS;EACT,UAAU;AAKZ;AAHE;IACE,iBAAiB;EACnB;AAGF;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,yBAA6B;EAC7B,gBAAgB;AAoClB;AAlCE;IACE,YAAY;EACd;AAEA;IACE,cAAc;IACd,wDAAwD;EAC1D;AAEA;IACE,YAAY;IACZ,kCAAkC;EACpC;AAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,yCAA2D;EAC7D;AAEA;IACE,yCAA2D;EAC7D;AAEA;IACE,qBAAqB;IACrB,gBAAgB;EAClB;AClDF;EACE,SAAS;EACT,2CAA2C;EAC3C,gBAAgB;AAuDlB;AArDE;IACE,iBAAiB;EAInB;AbTA;AaIA;MAGI;EAEJ;EbPA;AaSA;IACE,eAAe;IACf,kBAAkB;EACpB;AAEA;IACE,iBAAiB;IACjB,sBAAsB;EAIxB;AbtBA;AagBA;MAII;EAEJ;EbpBA;AasBA;IACE,iCAAiC;IACjC,oBAAoB;IACpB,gBAAgB;IAChB,qBAAqB;EACvB;AAEA;IACE,iBAAiB;IACjB,qBAAqB;EAIvB;AbrCA;Aa+BA;MAII;EAEJ;EbnCA;AaqCA;IACE,iBAAiB;EACnB;AAEA;IACE,iCAAiC;IACjC,oBAAoB;IACpB,sBAAsB;EACxB;AAEA;IACE,cAAgB;IAChB,qBAAqB;EACvB;AAEA;IACE,0BAA0B;EAC5B;ACxDA;IACE,kBAAkB;EACpB;AAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;AAEA;IACE,2CAA2C;IAC3C,gBAAgB;IAChB,aAAa;IACb,mBAAmB;EACrB;AAEA,qBAAI,iBAAiB;AACrB,qBAAI,iBAAiB;AACrB,qBAAI,iBAAiB;AACrB,qBAAI,iBAAiB;AACrB,qBAAI,iBAAiB;AACrB,qBAAI,kBAAkB;AdrBtB;IcwBE,qBAAI,kBAAkB;IACtB,qBAAI,eAAe;IACnB,qBAAI,mBAAmB;IACvB,qBAAI,iBAAiB;IACrB,qBAAI,iBAAiB;IACrB,qBAAI,kBAAkB;Ed3BxB;AAUA;AebF;IAEI;AAgCJ;EfnBE;AeVA;IACE,OAAO;IACP,oBAAoB;EAUtB;AfJA;AeRA;MAII;EAQJ;EfFA;AAFA;AeDE;QAEI;IAEJ;EfDF;AeIA;IACE,OAAO;IACP,yBAAwB;IACxB,oBAAoB;EAItB;AfbA;AeMA;MAKI;EAEJ;EfXA;AeeE;AAFF;MAGI;EAEJ;IADE;AChCJ;EACE,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;AA0CrB;AAxCE;IACE,cAAc;EAChB;AAEA;IACE,qBAAqB;IACrB,cAAc;IACd,MAAM;IACN,OAAO;IACP,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,yBAA2B;IAC3B,WAAW;IACX,cAAc;IACd,wBAAwB;IACxB,2CAA2C;EAC7C;AAEA;IACE,YAAY;EACd;AAEA;IACE,yBAA6B;EAC/B;AAEA;IACE,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;EAC3B;AAEA;IACE,cAAc;IACd,kBAAkB;IAClB,gBAAgB;EAClB;AC9CF;EACE,kBAAkB;EAClB,UAAU;EACV,yBAAwB;EACxB,kBAAkB;AAoDpB;AjBjDE;AiBPF;IAMI,qBAAqB;IACrB,YAAY;IACZ;AAgDJ;EjB/CE;AiBEA;IACE,SAAS;IACT,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,yBAA2B;IAC3B,WAAW;;EAQb;AANI;QACE,WAAW;QACX,qBAAqB;QACrB,yBAA2B;MAC7B;AAIJ;IACE,wCAA2C;EAC7C;AAEA;IACE,gBAAgB;EAClB;AAEA;;IAEE,kBAAkB;IAClB,oCAAuD;IACvD,cAAgB;IAChB,iBAAiB;EACnB;AAEA;IACE,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,cAAgB;IAChB,mBAAmB;EACrB;AAEA;IACE,sBAA8B;IAC9B,oCAAuD;EACzD;ACvDF;AACA,WAAW;AACX,aAAa;AACb,sBAAsB;AACtB,cAAc;AACd;AAEA,uCAAuC;AACvC;CACC,6BAA6B;AAC9B;ACTE;IACE,eAAe;IACf,iBAAiB;IACjB,iCAAiC;EAKnC;AAHE;MACE,iBAAiB;IACnB;AAGF;IACE,mBAAmB;EACrB;AAEA;IACE,cAAkB;EACpB;ACjBF;EACE,yBAAwB;EACxB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,0CAA0C;;AA8C5C;AA5CE;IACE,kBAAkB;IAClB,MAAM;IACN,2BAA2B;EAC7B;AAEA;IACE,UAAU;EACZ;AAEA;IACE,4BAA4B;EAC9B;AAEA;IACE,SAAS;IACT,gBAAgB;IAChB,wBAAoC;EACtC;AAEA;IACE,wBAAoC;IACpC,qBAAqB;IACrB,iBAAiB;EACnB;AAEA;IACE,0BAA0B;EAC5B;AAEA;IACE,yBAA2B;IAC3B,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,0BAA0B;IAC1B,mBAAmB;EACrB;AAEA;IACE,qBAAqB;IACrB,iCAAyC;EAC3C;AClDF;EACE,iCAAiC;EACjC,sBAAsB;EACtB,qBAAqB;AAMvB;AAJE;IACE,mBAAmB;IACnB,gBAAgB;EAClB","sourcesContent":["/* 3rd party packages */\n@import \"normalize.css\";\n@import \"../node_modules/@glidejs/glide/dist/css/glide.core.min.css\";\n\n/* SASS and Global'ish Stuff */\n@import \"base/variables\";\n@import \"base/baseline\";\n@import \"base/utility-classes\";\n\n/* BEM Blocks */\n@import \"modules/shame\";\n@import \"modules/login\";\n@import \"modules/btn\";\n@import \"modules/my-notes\";\n@import \"modules/site-header\";\n@import \"modules/site-footer\";\n@import \"modules/main-navigation\";\n@import \"modules/page-banner\";\n@import \"modules/hero-slider\";\n@import \"modules/search-overlay\";\n@import \"modules/professor-card\";\n@import \"modules/headline\";\n@import \"modules/generic-content\";\n@import \"modules/full-width-split\";\n@import \"modules/event-summary\";\n@import \"modules/page-links\";\n@import \"modules/acf-map\";\n@import \"modules/link-list\";\n@import \"modules/metabox\";\n@import \"modules/post-item\";\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n",".glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows{-webkit-touch-callout:none;user-select:none}.glide__bullets{-webkit-touch-callout:none;user-select:none}.glide--rtl{direction:rtl}\n","@define-mixin atSmall {\n  @media (min-width: 530px) {\n    @mixin-content;\n  }\n}\n\n@define-mixin atSmallMedium {\n  @media (min-width: 767px) {\n    @mixin-content;\n  }\n}\n\n@define-mixin atMedium {\n  @media (min-width: 960px) {\n    @mixin-content;\n  }\n}\n\nbody {\n  color: #333;\n  font-family: 'Roboto', sans-serif;\n  overflow-x: hidden;\n  position: relative;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na {\n  color: $mainBlue;\n}\n\na:hover {\n  text-decoration: none;\n}\n\np, ul, ol {\n  margin: 0 0 1.65em 0;\n}\n\np, li {\n  line-height: 1.65;\n}",".container {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 16px;\n  position: relative;\n}\n\n.container--narrow {\n  max-width: 960px;\n}\n\n.section-break {\n  border: none;\n  border-top: 1px solid #DDD;\n  margin: 2.5rem 0;\n}\n\n.min-list {\n  padding: 0;\n  margin: 0;\n}\n\n.min-list li {\n  list-style: none;\n}\n\n.p-top-small {padding-top: 1rem}\n.p-top-large {padding-top: 1.6rem}\n.p-bottom-large {padding-bottom: 1.6rem}\n\n@mixin atSmall {\n  .p-top-large {padding-top: 3.5rem}\n  .p-bottom-large {padding-bottom: 3.5rem}\n}\n\n.no-margin {margin: 0}\n.nu {text-decoration: none}\n.nu:hover {text-decoration: underline}\n\n.t-left {text-align: left}\n.t-right {text-align: right}\n.t-center {text-align: center}\n\n\n.t-small {font-size: .85rem}\n\n.float-left {float: left}\n.float-right {float: right}\n.push-right {margin-right: 20px}\n\n.container:before,\n.container:after,\n.group:before,\n.group:after {\n  content: \" \";\n  display: table;\n}\n\n.container:after,\n.group:after {\n  clear: both;\n}\n\n.hide {\n  display: none;\n}",".remove-favorite {\n  display: inline-block;\n  transition: all .3s;\n  color: #999;\n  font-size: .9rem;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 3px;\n}\n\n.remove-favorite:hover {\n  background-color: #DEDEDE;\n}\n\n.page-section {\n  padding-top: 1.6rem;\n  padding-bottom: 1.6rem;\n  @mixin atSmall {\n    padding-top: 3.5rem;\n    padding-bottom: 3.5rem;\n  }\n\n  &--white {\n    background-color: #FFF;\n  }\n\n  &--beige {\n    background-color: $beige;\n  }\n\n  p:last-of-type {\n    margin-bottom: 0;\n  }\n}\n\n.school-logo-text {\n  position: relative;\n  z-index: 20;\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 100;\n}\n\n.school-logo-text strong {\n  font-weight: 400;\n}\n\n.school-logo-text a {\n  color: #FFF;\n  text-decoration: none;\n}\n\n.school-logo-text--alt-color a {\n  color: #666;\n\n  &:hover {\n    color: $mainBlue;\n    text-decoration: underline;\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.spinner-loader {\n  margin-top: 45px;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  border: 0.25rem solid rgba(0, 0, 0, 0.2);\n  border-top-color: black;\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear;\n}\n\n.c-orange {color: $darkOrange}\n.c-blue {color: $mainBlue}\n.c-white {color: #FFF}\n.c-dark {color: #333}\n.gray {color: #999999}\n\n.search-trigger {\n  display: none;\n  color: #FFF;\n  position: relative;\n  cursor: pointer;\n  top: 1px;\n  margin-left: 20px;\n  @mixin atMedium {\n    display: inline-block;\n    top: 6px;\n  }\n}\n\n.search-trigger:hover {\n  opacity: .65;\n}\n\n.social-icons-list {\n  display: flex;\n  margin: 0 -8px;\n}\n\n.social-icons-list li {\n  flex: 1;\n  margin: 0 8px;\n}\n\n.social-icons-list li a {\n  display: block;\n  text-align: center;\n  color: #FFF;\n  font-size: 1.25rem;\n}\n\n.social-icons-list li a:hover {\n  opacity: .75;\n}\n\n.social-color-facebook {background-color: #4862a3}\n.social-color-twitter {background-color: #55acee}\n.social-color-youtube {background-color: #cc1e1f}\n.social-color-linkedin {background-color: #0077b5}\n.social-color-instagram {background-color: #d8226b}\n\n.nav-list ul {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-list li {\n  list-style: none;\n}\n\n.nav-list a {\n  font-size: .9rem;\n  color: #999;\n  text-decoration: none;\n}\n\n.nav-list a:hover {\n  color: $mainBlue;\n  text-decoration: underline;\n}\n\n.one-half,\n.one-third,\n.one-fourth,\n.one-fifth,\n.one-sixth {\n  padding-bottom: 1.6rem;\n}\n\n@mixin atMedium {\n  .row {\n    margin-right: -50px;\n  }\n\n  .one-half,\n  .one-third,\n  .two-thirds,\n  .one-fourth,\n  .one-fifth,\n  .one-sixth {\n    padding-bottom: 0;\n    float: left;\n    box-sizing: border-box;\n    padding-right: 50px;\n  }\n\n  .two-thirds {width: 66.66%;}\n  .one-half {width: 50%}\n  .one-third {width: 33.33%}\n  .one-quarter {width: 25%}\n  .one-fifth {width: 20%}\n  .one-sixth {width: 16.66%}\n}\n\n/* Make Top WP Admin Bar Fixed on Mobile */\n@media screen and (max-width: 600px) {\n  #wpadminbar {\n    position: fixed;\n  }\n}\n\n/* Seach Form */\n.search-form {\n  background-color: #DEDEDE;\n  padding: 20px;\n  text-align: center;\n}\n\n.search-form label {\n  display: block;\n}\n\n.search-form-row {\n  display: flex;\n}\n\n.search-form .s {\n  min-width: 20px;\n  flex-basis: auto;\n  flex-grow: 1;\n  border: none;\n  font-family: 'Roboto', sans-serif;\n  padding: 10px;\n  @mixin atSmall {\n    font-size: 1.4rem;\n  }\n}\n\n.search-submit {\n  color: #FFF;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n  background-color: $mainBlue;\n  font-family: 'Roboto', sans-serif;\n  padding: 0 20px;\n  margin-left: 10px;\n}\n\n.note-limit-message {\n  visibility: hidden;\n  opacity: 0;\n  transition: all .3s ease-out;\n  color: #c32929;\n  font-weight: bold;\n}\n\n.note-limit-message.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* Like Box */\n.generic-content .like-box {\n  float: right;\n  font-size: 1rem;\n  background-color: #EDEDED;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, .25);\n  color: red;\n  padding: 10px 10px 10px 25px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin: 0 0 30px 30px;\n  position: relative;\n}\n\n.generic-content .like-box:hover {\n  background-color: #DEDEDE;\n}\n\n.like-count {\n  padding-left: 10px;\n}\n\n.like-box .fa-heart-o {\n  transition: all .35s ease-out;\n  position: absolute;\n  left: 10px;\n}\n\n.like-box .fa-heart {\n  left: 10px;\n  transition: all .4s ease-out;\n  position: absolute;\n  visibility: hidden;\n  transform: scale(.2);\n  opacity: 0;\n}\n\n.like-box[data-exists=\"yes\"] .fa-heart {\n  transform: scale(1);\n  visibility: visible;\n  opacity: 1;\n}\n\n.like-box[data-exists=\"yes\"] .fa-heart-o {\n  visibility: hidden;\n  opacity: 0;\n}","/* Customize Login Screen */\nbody.login .button-primary {\n  background-color: $darkOrange;\n  border-color: color($darkOrange b(+10%));\n  text-shadow: 0 -1px 1px color($darkOrange b(+15%)),1px 0 1px color($darkOrange b(+15%)),0 1px 1px color($darkOrange b(+15%)),-1px 0 1px color($darkOrange b(+15%));\n  box-shadow: 0 1px 0 color($darkOrange b(+20%));\n}\n\nbody.login .button-primary:hover,\nbody.login .button-primary:active,\nbody.login .button-primary:focus {\n  background-color: color($darkOrange b(+7%));\n  border-color: color($darkOrange b(+15%));\n  text-shadow: 0 -1px 1px color($darkOrange b(+20%)),1px 0 1px color($darkOrange b(+20%)),0 1px 1px color($darkOrange b(+20%)),-1px 0 1px color($darkOrange b(+20%));\n  box-shadow: 0 1px 0 color($darkOrange b(+25%));\n}\n\nbody.login {\n  background-color: $beige;\n}\n\n.login h1 a {\n  color: $mainBlue;\n  font-size: 30px;\n  font-weight: 300;\n  background-image: none;\n  width: auto;\n  height: auto;\n  text-indent: 0;\n}",".btn {\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 4px;\n  overflow: hidden;\n  text-decoration: none;\n  color: #FFF;\n  font-size: 1.19rem;\n  padding: 12px 24px;\n  border: none;\n  outline: none;\n\n  &--small {\n    font-size: .88rem;\n    padding: 7px 13px;\n    font-weight: 300;\n  }\n\n  &--with-photo {\n    padding-left: 40px;\n    position: relative;\n  }\n\n  &--orange {\n    background-color: $lightOrange;\n  }\n\n  &--orange:hover {\n    background: linear-gradient($lightOrange, color($lightOrange b(+30%) s(+80%)));\n  }\n\n  &--dark-orange {\n    background-color: $darkOrange;\n  }\n\n  &--dark-orange:hover {\n    background: linear-gradient($darkOrange, color($darkOrange b(+40%) s(+80%)));\n  }\n\n  &--blue {\n    background-color: $mainBlue;\n  }\n\n  &--blue:hover {\n    background: linear-gradient(color($mainBlue b(-16%)), $mainBlue);\n  }\n\n  &--yellow {\n    background-color: $mainYellow;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, .22);\n  }\n\n  &--yellow:hover {\n    background: linear-gradient($mainYellow, color($mainYellow b(+40%) s(+80%)));\n  }\n\n  &--beige {\n    background-color: $beige;\n    color: #173f58;\n  }\n\n  &--beige:hover {\n    background-color: $mainYellow;\n  }\n\n  &--gray {\n    background-color: #222;\n  }\n\n  &--white {\n    background-color: #FFF;\n    color: #173f58;\n  }\n\n  &--white:hover {\n    background-color: #DDD;\n  }\n\n  &--large {\n    font-size: 1.3rem;\n    padding: 16px 34px;\n    border-radius: 7px;\n    @mixin atSmall {\n      font-size: 1.9rem;\n    }\n  }\n\n  &--inactive {\n    background-color: transparent;\n    cursor: default;\n    color: #333;\n  }\n}","/* My Notes */\n.edit-note,\n.delete-note,\n.submit-note {\n  font-size: 0.9rem;\n  background-color: #eee;\n  padding: 8px 16px;\n  display: inline-block;\n  margin-right: 7px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.submit-note {\n  color: #fff;\n  border: none;\n  background-color: $darkOrange;\n  line-height: 1.65;\n}\n\n.submit-note:hover {\n  background-color: color($darkOrange b(+10%) s(+10%));\n}\n\n.edit-note,\n.delete-note {\n  @media (min-width: 635px) {\n    position: relative;\n    top: -12px;\n  }\n}\n\n.edit-note:hover,\n.delete-note:hover {\n  background-color: #ddd;\n}\n\n.delete-note {\n  color: red;\n}\n\n.update-note {\n  visibility: hidden;\n}\n\n.update-note--visible {\n  visibility: visible;\n}\n\n.note-title-field {\n  width: 40%;\n  font-size: 1.85rem;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 300;\n  color: $mainBlue;\n  border: 1px solid transparent;\n  padding: 7px;\n  outline: none;\n  position: relative;\n  top: 1px;\n\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n\n  @media (min-width: 635px) {\n    width: 65%;\n    font-size: 3.125rem;\n  }\n}\n\n.note-body-field {\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  resize: none;\n  display: block;\n  width: 100%;\n  line-height: 1.65;\n  font-size: 1.15rem;\n  padding: 7px;\n  border: 1px solid transparent;\n  height: 175px;\n  outline: none;\n}\n\n.note-active-field {\n  border: 1px solid #ddd;\n  animation: pulseBorder 0.75s alternate infinite;\n}\n\n@keyframes pulseBorder {\n  0% {\n    border: 1px solid #fff;\n  }\n\n  100% {\n    border: 1px solid #ccc;\n  }\n}\n\n/* Create Note */\n.create-note {\n  background-color: #ddd;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n\n.new-note-title {\n  width: 100%;\n  padding: 10px;\n  font-family: \"Roboto\", sans-serif;\n  border: none;\n  margin-bottom: 10px;\n  font-size: 1.15rem;\n  box-sizing: border-box;\n}\n\n.new-note-body {\n  width: 100%;\n  box-sizing: border-box;\n  resize: none;\n  padding: 10px;\n  font-family: \"Roboto\", sans-serif;\n  border: none;\n  margin-bottom: 10px;\n  height: 170px;\n  font-size: 1.15rem;\n  line-height: 1.65;\n}\n\n/* Reveal and Hide Fade Transitions */\n#my-notes {\n  position: relative;\n}\n\n#my-notes li {\n  transition: all 0.4s ease-out;\n  opacity: 1;\n}\n\n#my-notes li.fade-out {\n  height: 0px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  opacity: 0.5;\n}\n\n#my-notes li.fade-in-calc {\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  position: absolute;\n  left: 0;\n  right: 0;\n  opacity: 0;\n}\n",".site-header {\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 20px 0;\n\n  &__avatar {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  &__avatar img {\n    display: block;\n    width: 30px;\n    height: 30px;\n  }\n\n  &__menu {\n    visibility: hidden;\n    position: absolute;\n    background-color: color($mainBlue a(89%) b(+3%));\n    left: 0;\n    right: 0;\n    top: -20px;\n    padding-top: 58px;\n    opacity: 0;\n    transform: translateY(-20%);\n    transition: opacity .3s ease-out, visibility .3s ease-out, transform .3s ease-out;\n    padding-bottom: 20px;\n\n    &--active {\n      opacity: 1;\n      transform: translateY(0);\n      visibility: visible;\n    }\n\n    @mixin atMedium {\n      visibility: visible;\n      opacity: 1;\n      transform: translateY(0) scale(1);\n      position: static;\n      background-color: transparent;\n      float: right;\n      padding-top: 0;\n      padding-bottom: 0;\n      top: 0;\n    }\n  }\n\n  &__search-trigger {\n    cursor: pointer;\n    color: #FFF;\n    font-size: 1.2rem;\n    position: absolute;\n    top: 6px;\n    right: 16px;\n\n    @mixin atSmall {\n      top: 4px;\n      font-size: 1.4rem;\n    }\n\n    @mixin atMedium {\n      display: none;\n    }\n  }\n\n  &__menu-trigger {\n    color: #FFF;\n    cursor: pointer;\n    font-size: 1.2rem;\n    position: absolute;\n    z-index: 10;\n    top: 7px;\n    right: 46px;\n\n    @mixin atSmall {\n      top: 5px;\n      font-size: 1.4rem;\n    }\n\n    @mixin atMedium {\n      display: none;\n    }\n  }\n\n  &__util {\n    padding: 0 0 0 20px;\n\n    @mixin atMedium {\n      padding: 0;\n      float: right;\n    }\n  }\n\n  &__btn {\n    margin-right: 20px;\n    @mixin atMedium {\n      float: left;\n    }\n  }\n\n  .btn--with-photo {\n    margin-right: 0;\n  }\n}\n",".site-footer {\n  padding: 2rem 0 3.5rem 0;\n  background-image: linear-gradient(#FFF, #ECECEC);\n\n  p {\n    font-size: 0.9rem;\n  }\n\n  .headline {\n    color: #666;\n    margin-bottom: .33rem;\n  }\n\n  &__link {\n    color: #999;\n    text-decoration: none;\n  }\n\n  &__link:hover {\n    color: $mainBlue;\n    text-decoration: underline;\n  }\n\n  &__inner {\n    border-top: 1px dotted #DEDEDE;\n    padding-top: 3.5rem;\n  }\n\n  &__col-one {\n    text-align: center;\n    @mixin atMedium {\n      text-align: left;\n      width: 33%;\n      float: left;\n    }\n  }\n\n  &__col-two-three-group {\n    text-align: center;\n    width: 85%;\n    margin: 0 auto;\n    @mixin atMedium {\n      text-align: left;\n      float: left;\n      width: 42%;\n      margin: 0;\n    }\n  }\n\n  &__col-two {\n    width: 50%;\n    float: left;\n  }\n  &__col-three {\n    width: 50%;\n    float: left;\n  }\n  &__col-four {\n    padding-top: 20px;\n    width: 85%;\n    margin: 0 auto;\n    clear: both;\n    text-align: center;\n    @mixin atMedium {\n      padding-top: 0;\n      margin: 0;\n      clear: none;\n      text-align: left;\n      width: 25%;\n      float: right;\n    }\n  }\n}",".main-navigation {\n  padding-top: 2px;\n\n  ul {\n    padding: 0;\n    margin: 0;\n  }\n\n  ul:before,\n  ul:after {\n    content: \" \";\n    display: table;\n  }\n\n  ul:after {\n    clear: both;\n  }\n\n  @mixin atMedium {\n    float: left;\n    margin-right: 20px;\n  }\n}\n\n.main-navigation li {\n  list-style: none;\n\n  @mixin atMedium {\n    float: left;\n    padding-left: 20px;\n  }\n}\n\n.main-navigation a {\n  display: block;\n  padding: 10px 20px;\n  color: #FFF;\n  text-decoration: none;\n  font-weight: 300;\n  @mixin atMedium {\n    display: inline-block;\n    padding: 0;\n  }\n}\n\n.main-navigation .current-menu-item a,\n.main-navigation a:hover {\n  color: $beige;\n}",".page-banner {\n  background-color: #000;\n  padding: 80px 0 40px 0;\n  position: relative;\n  @mixin atSmall {\n    padding: 130px 0 60px 0;\n  }\n\n  &__content {\n    position: relative;\n    z-index: 2;\n  }\n\n  &__title {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 300;\n    font-size: 3.6rem;\n    margin: 0 0 1rem 0;\n    color: #FFF;\n    @mixin atSmall {\n      font-size: 5rem;\n    }\n  }\n\n  &__bg-image {\n    opacity: .33;\n    background-size: cover;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  &__intro {\n    font-weight: 300;\n    font-size: 1.2rem;\n    line-height: 1.3;\n    color: #EDEDED;\n    @mixin atSmall {\n      font-size: 1.65rem;\n    }\n  }\n\n  &__intro p {\n    margin: 0;\n  }\n}",".hero-slider {\n  position: relative;\n\n  div {\n    outline: none;\n  }\n\n  &__interior {\n    padding-top: 60px;\n    padding-bottom: 60px;\n\n    @mixin atMedium {\n      padding-top: 130px;\n      padding-bottom: 130px;\n    }\n  }\n\n  &__slide {\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  &__overlay {\n    margin: 0 auto;\n    background-color: rgba(0, 0, 0, 0.68);\n    padding: 40px;\n    color: #fff;\n    @mixin atMedium {\n      width: 50%;\n    }\n  }\n}\n\n.slick-dots {\n  z-index: 100;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  top: 15px;\n  @mixin atMedium {\n    top: 50px;\n  }\n}\n\n.slick-dots {\n  li {\n    list-style: none;\n    display: inline;\n  }\n\n  li button {\n    display: inline-block;\n    text-indent: -9999px;\n    font-size: 0;\n    line-height: 0;\n    width: 10px;\n    height: 10px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n    border: none;\n    margin: 0 4px;\n    padding: 0;\n    outline: none;\n    transition: background-color 0.3s ease-out;\n    cursor: pointer;\n  }\n\n  .slick-active button {\n    background-color: #fff;\n  }\n}\n\n/* GlideJS */\n.glide__bullets {\n  z-index: 100;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  top: 15px;\n  @mixin atMedium {\n    top: 50px;\n  }\n\n  button {\n    display: inline-block;\n    text-indent: -9999px;\n    font-size: 0;\n    line-height: 0;\n    width: 10px;\n    height: 10px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n    border: none;\n    margin: 0 3px;\n    padding: 0;\n    outline: none;\n    transition: background-color 0.3s ease-out;\n    cursor: pointer;\n  }\n\n  button.glide__bullet--active {\n    background-color: #fff;\n  }\n}\n",".search-overlay {\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 110;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, .96);\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(1.09);\n  transition: opacity .3s, transform .3s, visibility .3s;\n  box-sizing: border-box;\n\n  p {\n    padding-top: 15px;\n  }\n\n  .event-summary p {\n    padding-top: 0;\n  }\n\n  .event-summary {\n    margin-bottom: 0;\n    margin-top: 20px;\n  }\n\n  body.admin-bar & {\n    top: 32px;\n  }\n\n  &__top {\n    background-color: rgba(0, 0, 0, .12);\n  }\n\n  &__icon {\n    margin-right: 10px;\n    font-size: 1.8rem;\n    color: $darkOrange;\n    @mixin atMedium {\n      font-size: 2.5rem;\n    }\n  }\n\n  &--active {\n    visibility: visible;\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &__section-title {\n    margin: 30px 0 1px 0;\n    font-weight: 400;\n    color: $mainBlue;\n    font-size: 2rem;\n    padding: 15px 0;\n    border-bottom: 1px solid #CCC;\n  }\n\n  &__close {\n    position: absolute;\n    top: 13px;\n    right: 16px;\n    font-size: 2.1rem;\n    cursor: pointer;\n    transition: all .3s;\n    background-color: #FFF;\n    color: $darkOrange;\n    line-height: .7;\n    @mixin atSmall {\n      top: 18px;\n      font-size: 2.1rem;\n    }\n    @mixin atMedium {\n      top: 26px;\n      font-size: 2.8rem;\n    }\n  }\n\n  &__close:hover {\n    opacity: 1;\n  }\n\n  .one-half {\n    padding-bottom: 0;\n  }\n}\n\n.search-term {\n  width: 75%;\n  box-sizing: border-box;\n  border: none;\n  padding: 15px 0;\n  margin: 0;\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 300;\n  outline: none;\n  color: $darkOrange;\n  @mixin atSmall {\n    font-size: 1.5rem\n  }\n  @mixin atMedium {\n    width: 80%;\n    font-size: 3rem;\n  }\n\n}\n\n.body-no-scroll {\n  overflow: hidden;\n}",".professor-cards {\n  margin: 0;\n  padding: 0;\n\n  .search-overlay & {\n    padding-top: 21px;\n  }\n}\n\n.professor-card {\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  margin-right: 15px;\n  background-color: $darkOrange;\n  overflow: hidden;\n\n  .search-overlay & {\n    width: 180px;\n  }\n\n  &__image {\n    display: block;\n    transition: opacity .3s ease-out, transform .3s ease-out;\n  }\n\n  &:hover &__image {\n    opacity: .80;\n    transform: scale(1.1) rotate(4deg);\n  }\n\n  &__name {\n    font-weight: 300;\n    font-size: .9rem;\n    position: absolute;\n    bottom: 0;\n    color: #FFF;\n    left: 0;\n    right: 0;\n    padding: 3px 10px;\n    background-color: color($darkOrange a(85%) b(+15%) s(+20%));\n  }\n\n  &:hover &__name {\n    background-color: color($darkOrange a(85%) b(+25%) s(+20%));\n  }\n\n  &__list-item {\n    display: inline-block;\n    list-style: none;\n  }\n}",".headline {\n  margin: 0;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 300;\n\n  &--large {\n    font-size: 3.6rem;\n    @mixin atSmall {\n      font-size: 6.25rem;\n    }\n  }\n\n  &--large-medium {\n    font-size: 5rem;\n    margin: 0 0 1rem 0;\n  }\n\n  &--medium {\n    font-size: 1.9rem;\n    margin-bottom: 0.75rem;\n    @mixin atSmall {\n      font-size: 3.125rem;\n    }\n  }\n\n  &--small-plus {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 1.6875rem;\n    font-weight: 400;\n    margin-bottom: 1.9rem;\n  }\n\n  &--small {\n    font-size: 1.2rem;\n    margin-bottom: 1.9rem;\n    @mixin atSmall {\n      font-size: 1.6875rem;\n    }\n  }\n\n  &--smaller {\n    font-size: 1.5rem;\n  }\n\n  &--tiny {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 1.3875rem;\n    margin-bottom: 0.25rem;\n  }\n\n  &--post-title a {\n    color: $mainBlue;\n    text-decoration: none;\n  }\n\n  &--post-title a:hover {\n    text-decoration: underline;\n  }\n}\n",".generic-content {\n  p, li {\n    font-size: 1.15rem;\n  }\n\n  blockquote, blockquote p {\n    font-size: 1.5rem;\n    font-style: italic;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 300;\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  h1 {font-size: 3.6rem}\n  h2 {font-size: 3.1rem}\n  h3 {font-size: 2.6rem}\n  h4 {font-size: 2.1rem}\n  h5 {font-size: 1.6rem}\n  h6 {font-size: 1.15rem}\n\n  @mixin atSmall {\n    h1 {font-size: 6.25rem}\n    h2 {font-size: 5rem}\n    h3 {font-size: 3.125rem}\n    h4 {font-size: 2.4rem}\n    h5 {font-size: 1.9rem}\n    h6 {font-size: 1.15rem}\n  }\n\n}",".full-width-split {\n  @mixin atMedium {\n    display: flex;\n  }\n\n  &__one {\n    flex: 1;\n    padding: 1.6rem 16px;\n    @mixin atMedium {\n      padding: 40px;\n    }\n\n    .full-width-split__inner {\n      @mixin atMedium {\n        float: right;\n      }\n    }\n  }\n\n  &__two {\n    flex: 1;\n    background-color: $beige;\n    padding: 1.6rem 16px;\n    @mixin atMedium {\n      padding: 40px;\n    }\n  }\n\n  &__inner {\n    \n    @media (min-width: 1350px) {\n      width: 610px;\n    }\n  }\n}",".event-summary {\n  position: relative;\n  padding-left: 107px;\n  min-height: 77px;\n  padding-bottom: 1px;\n  margin-bottom: 20px;\n\n  &__title a {\n    color: #173f58;\n  }\n\n  &__date {\n    text-decoration: none;\n    display: block;\n    top: 0;\n    left: 0;\n    position: absolute;\n    padding: 14px 0 11px 0;\n    color: #FFF;\n    border-radius: 50%;\n    background-color: $mainBlue;\n    width: 80px;\n    line-height: 1;\n    transition: opacity .33s;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, .22);\n  }\n\n  &__date:hover {\n    opacity: .75;\n  }\n\n  &__date--beige {\n    background-color: $mainYellow;\n  }\n\n  &__month {\n    display: block;\n    font-size: 1.5rem;\n    font-weight: 300;\n    text-transform: uppercase;\n  }\n\n  &__day {\n    display: block;\n    font-size: 2.02rem;\n    font-weight: 700;\n  }\n}",".page-links {\n  position: relative;\n  z-index: 1;\n  background-color: $beige;\n  margin: 0 0 40px 0;\n  @mixin atSmallMedium {\n    margin: 0 0 40px 20px;\n    width: 300px;\n    float: right;\n  }\n\n  &__title {\n    margin: 0;\n    font-weight: normal;\n    text-align: center;\n    padding: 20px 0;\n    background-color: $mainBlue;\n    color: #FFF;\n\n      a {\n        color: #FFF;\n        text-decoration: none;\n        background-color: $mainBlue;\n      }\n\n  }\n\n  li {\n    border-top: 1px solid color($beige l(-14%));\n  }\n\n  li:first-child {\n    border-top: none;\n  }\n\n  &__active,\n  & .current_page_item {\n    text-align: center;\n    background-color: color($beige blackness(+11%) s(+50%));\n    color: $mainBlue;\n    font-weight: bold;\n  }\n\n  li a {\n    display: block;\n    text-align: center;\n    padding: 17px 10px;\n    text-decoration: none;\n    color: $mainBlue;\n    transition: all .3s;\n  }\n\n  li a:hover {\n    color: color($mainBlue b(+6%));\n    background-color: color($beige blackness(+18%) s(+65%));\n  }\n}",".acf-map {\nwidth: 100%;\nheight: 400px;\nborder: #ccc solid 1px;\nmargin: 20px 0;\n}\n\n/* fixes potential theme css conflict */\n.acf-map img {\n max-width: inherit !important;\n}",".link-list {\n  li {\n    padding: 1rem 0;\n    font-size: 1.5rem;\n    border-bottom: 1px dotted #DEDEDE;\n\n    .search-overlay & {\n      font-size: 1.3rem;\n    }\n  }\n\n  li:last-child {\n    border-bottom: none;\n  }\n\n  a {\n    color: $darkOrange;\n  }\n}",".metabox {\n  background-color: $beige;\n  border-radius: 3px;\n  padding: 10px 15px;\n  display: inline-block;\n  margin-bottom: 30px;\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, .07);\n\n  &--position-up {\n    position: absolute;\n    top: 0;\n    transform: translateY(-50%);\n  }\n\n  &--with-home-link {\n    padding: 0;\n  }\n\n  &__main {\n    padding: 10px 15px 10px 11px;\n  }\n\n  p {\n    margin: 0;\n    font-size: .9rem;\n    color: color($beige l(-45%) s(-33%));\n  }\n\n  a {\n    color: color($beige l(-45%) s(-33%));\n    text-decoration: none;\n    font-weight: bold;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  & &__blog-home-link {\n    background-color: $mainBlue;\n    color: #FFF;\n    display: inline-block;\n    padding: 10px 15px;\n    border-radius: 3px 0 0 3px;\n    font-weight: normal;\n  }\n\n  & &__blog-home-link:hover {\n    text-decoration: none;\n    background-color: color($mainBlue l(-5%));\n  }\n\n}",".post-item {\n  border-bottom: 1px dotted #DEDEDE;\n  padding-bottom: 1.7rem;\n  margin-bottom: 1.7rem;\n\n  &:last-of-type {\n    border-bottom: none;\n    margin-bottom: 0;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

})
//# sourceMappingURL=scripts.8e2572353220e605ef2e.hot-update.js.map