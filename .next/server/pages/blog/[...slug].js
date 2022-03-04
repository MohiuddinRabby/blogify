(function() {
var exports = {};
exports.id = "pages/blog/[...slug]";
exports.ids = ["pages/blog/[...slug]"];
exports.modules = {

/***/ "./data/siteMetadata.json":
/*!********************************!*\
  !*** ./data/siteMetadata.json ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"title":"Bloogify","author":"Golam Mohiuddin","headerTitle":"Bloogify","description":"","language":"en-us","siteUrl":"https://bloogify.tech/","siteRepo":"https://github.com/MohiuddinRabby/blogify","image":"/static/images/avatar.png","socialBanner":"/static/images/twitter-card.png","email":"rabby.mohiuddin@gmail.com","github":"https://github.com/MohiuddinRabby","twitter":"https://twitter.com/Twitter","facebook":"https://facebook.com","youtube":"https://youtube.com","linkedin":"https://www.linkedin.com/in/mohiuddin-rabby-b49797123/","locale":"en-US"}');

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./components/Image.js":
/*!*****************************!*\
  !*** ./components/Image.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\blogify\\components\\Image.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-next-line jsx-a11y/alt-text

const Image = (_ref) => {
  let rest = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({}, rest), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 32
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\blogify\\components\\Link.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/anchor-has-content */


const CustomLink = (_ref) => {
  let {
    href
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["href"]);

  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: href,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", _objectSpread({}, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined);
  }

  if (isAnchorLink) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", _objectSpread({
      href: href
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", _objectSpread({
    target: "_blank",
    rel: "noopener noreferrer",
    href: href
  }, rest), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomLink);

/***/ }),

/***/ "./components/MDXComponents.js":
/*!*************************************!*\
  !*** ./components/MDXComponents.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./components/Image.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");


const MDXComponents = {
  Image: _Image__WEBPACK_IMPORTED_MODULE_0__.default,
  a: _Link__WEBPACK_IMPORTED_MODULE_1__.default
};
/* harmony default export */ __webpack_exports__["default"] = (MDXComponents);

/***/ }),

/***/ "./components/PageTitle.js":
/*!*********************************!*\
  !*** ./components/PageTitle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\blogify\\components\\PageTitle.js";
function PageTitle({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SEO.js":
/*!***************************!*\
  !*** ./components/SEO.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEO": function() { return /* binding */ SEO; },
/* harmony export */   "PageSeo": function() { return /* binding */ PageSeo; },
/* harmony export */   "BlogSeo": function() { return /* binding */ BlogSeo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/siteMetadata */ "./data/siteMetadata.json");


var _jsxFileName = "E:\\blogify\\components\\SEO.js";


const SEO = {
  title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.title,
  description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.description,
  openGraph: {
    type: 'website',
    locale: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.language,
    url: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.siteUrl,
    title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.title,
    description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.description,
    images: [{
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.siteUrl}${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.socialBanner}`,
      alt: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.title,
      width: 1200,
      height: 600
    }]
  },
  twitter: {
    handle: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.twitter,
    site: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.twitter,
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [{
    name: 'author',
    content: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.author
  }]
};
const PageSeo = ({
  title,
  description,
  url
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: `${title} – ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.title}`,
    description: description,
    canonical: url,
    openGraph: {
      url,
      title,
      description
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};
const BlogSeo = ({
  title,
  summary,
  date,
  lastmod,
  url,
  tags,
  images = []
}) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  let imagesArr = images.length === 0 ? [_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.socialBanner] : typeof images === 'string' ? [images] : images;
  const featuredImages = imagesArr.map(img => {
    return {
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.siteUrl}${img}`,
      alt: title
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
      title: `${title} – ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.title}`,
      description: summary,
      canonical: url,
      openGraph: {
        type: 'article',
        article: {
          publishedTime: publishedAt,
          modifiedTime: modifiedAt,
          authors: [`${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.siteUrl}/about`],
          tags
        },
        url,
        title,
        description: summary,
        images: featuredImages
      },
      additionalMetaTags: [{
        name: 'twitter:image',
        content: featuredImages[0].url
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.ArticleJsonLd, {
      authorName: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.author,
      dateModified: modifiedAt,
      datePublished: publishedAt,
      description: summary,
      images: featuredImages,
      publisherName: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.author,
      title: title,
      url: url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./components/SectionContainer.js":
/*!****************************************!*\
  !*** ./components/SectionContainer.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SectionContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\blogify\\components\\SectionContainer.js";
function SectionContainer({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/Tag.js":
/*!***************************!*\
  !*** ./components/Tag.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils/kebabCase */ "./lib/utils/kebabCase.js");

var _jsxFileName = "E:\\blogify\\components\\Tag.js";



const Tag = ({
  text
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/tags/${(0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__.default)(text)}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400",
      children: text.split(' ').join('-')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./layouts/PostLayout.js":
/*!*******************************!*\
  !*** ./layouts/PostLayout.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Link */ "./components/Link.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SectionContainer */ "./components/SectionContainer.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SEO */ "./components/SEO.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Image */ "./components/Image.js");
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Tag */ "./components/Tag.js");
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data/siteMetadata */ "./data/siteMetadata.json");


var _jsxFileName = "E:\\blogify\\layouts\\PostLayout.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const editUrl = fileName => `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.siteRepo}/blob/master/data/blog/${fileName}`;

const discussUrl = slug => `https://mobile.twitter.com/search?q=${encodeURIComponent(`${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.siteUrl}/blog/${slug}`)}`;

const postDateTemplate = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
function PostLayout({
  children,
  frontMatter,
  next,
  prev
}) {
  const {
    slug,
    fileName,
    date,
    title,
    tags
  } = frontMatter;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_4__.BlogSeo, _objectSpread({
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.siteUrl}/blog/${slug}`
    }, frontMatter), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
          className: "pt-6 xl:pb-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "space-y-1 text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dl", {
              className: "space-y-10",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dt", {
                  className: "sr-only",
                  children: "Published on"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
                  className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
                    dateTime: date,
                    children: new Date(date).toLocaleDateString(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.locale, postDateTemplate)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",
          style: {
            gridTemplateRows: 'auto 1fr'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dl", {
            className: "pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dt", {
              className: "sr-only",
              children: "Authors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Image__WEBPACK_IMPORTED_MODULE_5__.default, {
                    src: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.image,
                    width: "38px",
                    height: "38px",
                    alt: "avatar",
                    className: "w-10 h-10 rounded-full"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dl", {
                    className: "text-sm font-medium leading-5 whitespace-nowrap",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dt", {
                      className: "sr-only",
                      children: "Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
                      className: "text-gray-900 dark:text-gray-100",
                      children: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.author
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 23
                    }, this), typeof _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.twitter === 'string' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dt", {
                        className: "sr-only",
                        children: "Twitter"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__.default, {
                          href: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.twitter,
                          className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                          children: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__.twitter.replace('https://twitter.com/', '@')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pt-10 pb-8 prose dark:prose-dark max-w-none",
              children: children
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-sm text-gray-700 dark:text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",
              children: [tags && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-4 xl:py-8",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                  children: "Tags"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "flex flex-wrap",
                  children: tags.map(tag => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tag__WEBPACK_IMPORTED_MODULE_6__.default, {
                    text: tag
                  }, tag, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 25
                  }, this))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, this), (next || prev) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                children: [prev && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                    children: "Previous Article"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 25
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__.default, {
                      href: `/blog/${prev.slug}`,
                      children: prev.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 23
                }, this), next && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                    children: "Next Article"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 25
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__.default, {
                      href: `/blog/${next.slug}`,
                      children: next.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pt-4 xl:pt-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "/blog",
                className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                children: "\u2190 Back to the blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/generate-rss.js":
/*!*****************************!*\
  !*** ./lib/generate-rss.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils_htmlEscaper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/utils/htmlEscaper */ "./lib/utils/htmlEscaper.js");
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/siteMetadata */ "./data/siteMetadata.json");



const generateRssItem = post => `
  <item>
    <guid>${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.siteUrl}/blog/${post.slug}</guid>
    <title>${(0,_lib_utils_htmlEscaper__WEBPACK_IMPORTED_MODULE_0__.escape)(post.title)}</title>
    <link>${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.siteUrl}/blog/${post.slug}</link>
    <description>${(0,_lib_utils_htmlEscaper__WEBPACK_IMPORTED_MODULE_0__.escape)(post.summary)}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.email} (${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.author})</author>
    ${post.tags.map(t => `<category>${t}</category>`).join('')}
  </item>
`;

const generateRss = (posts, page = 'index.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${(0,_lib_utils_htmlEscaper__WEBPACK_IMPORTED_MODULE_0__.escape)(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.title)}</title>
      <link>${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.siteUrl}/blog</link>
      <description>${(0,_lib_utils_htmlEscaper__WEBPACK_IMPORTED_MODULE_0__.escape)(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.description)}</description>
      <language>${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.language}</language>
      <managingEditor>${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.email} (${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.author})</managingEditor>
      <webMaster>${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.email} (${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

/* harmony default export */ __webpack_exports__["default"] = (generateRss);

/***/ }),

/***/ "./lib/img-to-jsx.js":
/*!***************************!*\
  !*** ./lib/img-to-jsx.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const visit = __webpack_require__(/*! unist-util-visit */ "unist-util-visit");

const sizeOf = __webpack_require__(/*! image-size */ "image-size");

const fs = __webpack_require__(/*! fs */ "fs");

module.exports = options => tree => {
  visit(tree, // only visit p tags that contain an img element
  node => node.type === 'paragraph' && node.children.some(n => n.type === 'image'), node => {
    const imageNode = node.children.find(n => n.type === 'image'); // only local files

    if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
      const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`); // Convert original node to next/image

      imageNode.type = 'jsx';
      imageNode.value = `<Image
          alt={\`${imageNode.alt}\`} 
          src={\`${imageNode.url}\`}
          width={${dimensions.width}}
          height={${dimensions.height}}
      />`; // Change node type from p to div to avoid nesting error

      node.type = 'div';
      node.children = [imageNode];
    }
  });
};

/***/ }),

/***/ "./lib/mdx.js":
/*!********************!*\
  !*** ./lib/mdx.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFiles": function() { return /* binding */ getFiles; },
/* harmony export */   "formatSlug": function() { return /* binding */ formatSlug; },
/* harmony export */   "dateSortDesc": function() { return /* binding */ dateSortDesc; },
/* harmony export */   "getFileBySlug": function() { return /* binding */ getFileBySlug; },
/* harmony export */   "getAllFilesFrontMatter": function() { return /* binding */ getAllFilesFrontMatter; }
/* harmony export */ });
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/MDXComponents */ "./components/MDXComponents.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-mdx-remote/serialize */ "next-mdx-remote/serialize");
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reading-time */ "reading-time");
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unist-util-visit */ "unist-util-visit");
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(unist_util_visit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_to_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img-to-jsx */ "./lib/img-to-jsx.js");
/* harmony import */ var _img_to_jsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_to_jsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/files */ "./lib/utils/files.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const root = process.cwd();
const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic'
};
function getFiles(type) {
  const prefixPaths = path__WEBPACK_IMPORTED_MODULE_4___default().join(root, 'data', type);
  const files = (0,_utils_files__WEBPACK_IMPORTED_MODULE_8__.default)(prefixPaths); // Only want to return blog/path and ignore root, replace is needed to work on Windows

  return files.map(file => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'));
}
function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '');
}
function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
async function getFileBySlug(type, slug) {
  const mdxPath = path__WEBPACK_IMPORTED_MODULE_4___default().join(root, 'data', type, `${slug}.mdx`);
  const mdPath = path__WEBPACK_IMPORTED_MODULE_4___default().join(root, 'data', type, `${slug}.md`);
  const source = fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(mdxPath) ? fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(mdxPath, 'utf8') : fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(mdPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
  const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(content, {
    components: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_0__.default,
    mdxOptions: {
      remarkPlugins: [__webpack_require__(/*! remark-slug */ "remark-slug"), __webpack_require__(/*! remark-autolink-headings */ "remark-autolink-headings"), __webpack_require__(/*! remark-code-titles */ "remark-code-titles"), __webpack_require__(/*! remark-math */ "remark-math"), (_img_to_jsx__WEBPACK_IMPORTED_MODULE_7___default())],
      inlineNotes: true,
      rehypePlugins: [__webpack_require__(/*! rehype-katex */ "rehype-katex"), __webpack_require__(/*! @mapbox/rehype-prism */ "@mapbox/rehype-prism"), () => {
        return tree => {
          unist_util_visit__WEBPACK_IMPORTED_MODULE_6___default()(tree, 'element', (node, index, parent) => {
            let [token, type] = node.properties.className || [];

            if (token === 'token') {
              node.properties.className = [tokenClassNames[type]];
            }
          });
        };
      }]
    }
  });
  return {
    mdxSource,
    frontMatter: _objectSpread({
      readingTime: reading_time__WEBPACK_IMPORTED_MODULE_5___default()(content),
      slug: slug || null,
      fileName: fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`
    }, data)
  };
}
async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path__WEBPACK_IMPORTED_MODULE_4___default().join(root, 'data', folder);
  const files = (0,_utils_files__WEBPACK_IMPORTED_MODULE_8__.default)(prefixPaths);
  const allFrontMatter = [];
  files.forEach(file => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/'); // Remove Unexpected File

    if (path__WEBPACK_IMPORTED_MODULE_4___default().extname(fileName) !== '.md' && path__WEBPACK_IMPORTED_MODULE_4___default().extname(fileName) !== '.mdx') {
      return;
    }

    const source = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(file, 'utf8');
    const {
      data
    } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (data.draft !== true) {
      allFrontMatter.push(_objectSpread(_objectSpread({}, data), {}, {
        slug: formatSlug(fileName)
      }));
    }
  });
  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}

/***/ }),

/***/ "./lib/utils/files.js":
/*!****************************!*\
  !*** ./lib/utils/files.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);



const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const flattenArray = input => input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], []);

const map = fn => input => input.map(fn);

const walkDir = fullPath => {
  return fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = prefix => extraPath => path__WEBPACK_IMPORTED_MODULE_1___default().join(prefix, extraPath);

const getAllFilesRecursively = folder => pipe((fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync), map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder);

/* harmony default export */ __webpack_exports__["default"] = (getAllFilesRecursively);

/***/ }),

/***/ "./lib/utils/htmlEscaper.js":
/*!**********************************!*\
  !*** ./lib/utils/htmlEscaper.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escape": function() { return /* binding */ escape; }
/* harmony export */ });
const {
  replace
} = ''; // escape

const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
const ca = /[&<>'"]/g;
const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
};

const pe = m => esca[m];
/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */


const escape = es => replace.call(es, ca, pe);

/***/ }),

/***/ "./lib/utils/kebabCase.js":
/*!********************************!*\
  !*** ./lib/utils/kebabCase.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const kebabCase = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');

/* harmony default export */ __webpack_exports__["default"] = (kebabCase);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !true);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if ( true && as.startsWith('/')) {
        const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(cleanedAs, this.locale)), pages, rewrites, query, p => resolveDynamicRoute(p, pages), this.locales);
        resolvedAs = rewritesResult.asPath;

        if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
          // if this directly matches a page we need to update the href to
          // allow the correct page chunk to be loaded
          pathname = rewritesResult.resolvedHref;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      } else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if ( true && asPath.startsWith('/')) {
      let rewrites;
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
      const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, p => resolveDynamicRoute(p, pages), this.locales);
      resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

      if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
        // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        pathname = rewritesResult.resolvedHref;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    } else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // ensure only a-zA-Z are used for param names for proper interpolating
// with path-to-regexp


const getSafeParamName = paramName => {
  let newParamName = '';

  for (let i = 0; i < paramName.length; i++) {
    const charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || // A-Z
    charCode > 96 && charCode < 123 // a-z
    ) {
        newParamName += paramName[i];
      }
  }

  return newParamName;
};

exports.getSafeParamName = getSafeParamName;

function matchHas(req, has, query) {
  const params = {};
  let initialQueryValues = [];

  if (true) {
    initialQueryValues = Object.values(req.__NEXT_INIT_QUERY);
  }

  if (false) {}

  const allMatch = has.every(hasItem => {
    let value;
    let key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          // preserve initial encoding of query values
          value = query[key];

          if (initialQueryValues.includes(value || '')) {
            value = encodeURIComponent(value);
          }

          break;
        }

      case 'host':
        {
          const {
            host
          } = (req == null ? void 0 : req.headers) || {}; // remove port from host if present

          const hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      const matcher = new RegExp(`^${hasItem.value}$`);
      const matches = value.match(matcher);

      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach(groupKey => {
            params[groupKey] = matches.groups[groupKey];
          });
        } else if (hasItem.type === 'host' && matches[0]) {
          params.host = matches[0];
        }

        return true;
      }
    }

    return false;
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireWildcard(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _router = __webpack_require__(/*! ../router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  let matchedPage = false;
  let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
  let fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(parsedAs.pathname), locales).pathname);
  let resolvedHref;

  const handleRewrite = rewrite => {
    const matcher = customRouteMatcher(rewrite.source);
    let params = matcher(parsedAs.pathname);

    if (rewrite.has && params) {
      const hasParams = (0, _prepareDestination.matchHas)({
        headers: {
          host: document.location.hostname
        },
        cookies: document.cookie.split('; ').reduce((acc, item) => {
          const [key, ...value] = item.split('=');
          acc[key] = value.join('=');
          return acc;
        }, {})
      }, rewrite.has, parsedAs.query);

      if (hasParams) {
        Object.assign(params, hasParams);
      } else {
        params = false;
      }
    }

    if (params) {
      if (!rewrite.destination) {
        // this is a proxied rewrite which isn't handled on the client
        return true;
      }

      const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
      parsedAs = destRes.parsedDestination;
      asPath = destRes.newUrl;
      Object.assign(query, destRes.parsedDestination.query);
      fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(asPath), locales).pathname);

      if (pages.includes(fsPathname)) {
        // check if we now match a page as this means we are done
        // resolving the rewrites
        matchedPage = true;
        resolvedHref = fsPathname;
        return true;
      } // check if we match a dynamic-route, if so we break the rewrites chain


      resolvedHref = resolveHref(fsPathname);

      if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
        matchedPage = true;
        return true;
      }
    }
  };

  let finished = false;

  for (let i = 0; i < rewrites.beforeFiles.length; i++) {
    // we don't end after match in beforeFiles to allow
    // continuing through all beforeFiles rewrites
    handleRewrite(rewrites.beforeFiles[i]);
  }

  matchedPage = pages.includes(fsPathname);

  if (!matchedPage) {
    if (!finished) {
      for (let i = 0; i < rewrites.afterFiles.length; i++) {
        if (handleRewrite(rewrites.afterFiles[i])) {
          finished = true;
          break;
        }
      }
    } // check dynamic route before processing fallback rewrites


    if (!finished) {
      resolvedHref = resolveHref(fsPathname);
      matchedPage = pages.includes(resolvedHref);
      finished = matchedPage;
    }

    if (!finished) {
      for (let i = 0; i < rewrites.fallback.length; i++) {
        if (handleRewrite(rewrites.fallback[i])) {
          finished = true;
          break;
        }
      }
    }
  }

  return {
    asPath,
    parsedAs,
    matchedPage,
    resolvedHref
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/blog/[...slug].js":
/*!*********************************!*\
  !*** ./pages/blog/[...slug].js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Blog; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote */ "next-mdx-remote");
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MDXComponents */ "./components/MDXComponents.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _layouts_PostLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/PostLayout */ "./layouts/PostLayout.js");
/* harmony import */ var _lib_generate_rss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/generate-rss */ "./lib/generate-rss.js");
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/mdx */ "./lib/mdx.js");


var _jsxFileName = "E:\\blogify\\pages\\blog\\[...slug].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








async function getStaticPaths() {
  const posts = (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_7__.getFiles)('blog');
  return {
    paths: posts.map(p => ({
      params: {
        slug: (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_7__.formatSlug)(p).split('/')
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const allPosts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_7__.getAllFilesFrontMatter)('blog');
  const postIndex = allPosts.findIndex(post => (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_7__.formatSlug)(post.slug) === params.slug.join('/'));
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_7__.getFileBySlug)('blog', params.slug.join('/')); // rss

  const rss = (0,_lib_generate_rss__WEBPACK_IMPORTED_MODULE_6__.default)(allPosts);
  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync('./public/index.xml', rss);
  return {
    props: {
      post,
      prev,
      next
    }
  };
}
function Blog({
  post,
  prev,
  next
}) {
  const {
    mdxSource,
    frontMatter
  } = post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: frontMatter.draft !== true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_PostLayout__WEBPACK_IMPORTED_MODULE_5__.default, {
      frontMatter: frontMatter,
      prev: prev,
      next: next,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, _objectSpread(_objectSpread({}, mdxSource), {}, {
        components: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_3__.default
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mt-24 text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: ["Under Construction", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          role: "img",
          "aria-label": "roadwork sign",
          children: "\uD83D\uDEA7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@mapbox/rehype-prism":
/*!***************************************!*\
  !*** external "@mapbox/rehype-prism" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mapbox/rehype-prism");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "image-size":
/*!*****************************!*\
  !*** external "image-size" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("image-size");;

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-mdx-remote");;

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-mdx-remote/serialize");;

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "reading-time":
/*!*******************************!*\
  !*** external "reading-time" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("reading-time");;

/***/ }),

/***/ "rehype-katex":
/*!*******************************!*\
  !*** external "rehype-katex" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("rehype-katex");;

/***/ }),

/***/ "remark-autolink-headings":
/*!*******************************************!*\
  !*** external "remark-autolink-headings" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-autolink-headings");;

/***/ }),

/***/ "remark-code-titles":
/*!*************************************!*\
  !*** external "remark-code-titles" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-code-titles");;

/***/ }),

/***/ "remark-math":
/*!******************************!*\
  !*** external "remark-math" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-math");;

/***/ }),

/***/ "remark-slug":
/*!******************************!*\
  !*** external "remark-slug" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-slug");;

/***/ }),

/***/ "unist-util-visit":
/*!***********************************!*\
  !*** external "unist-util-visit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("unist-util-visit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[...slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvTGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9jb21wb25lbnRzL1BhZ2VUaXRsZS5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vY29tcG9uZW50cy9TRU8uanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vY29tcG9uZW50cy9UYWcuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2xheW91dHMvUG9zdExheW91dC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL2dlbmVyYXRlLXJzcy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL2ltZy10by1qc3guanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2xpYi9tZHguanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2xpYi91dGlscy9maWxlcy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL3V0aWxzL2h0bWxFc2NhcGVyLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9saWIvdXRpbHMva2ViYWJDYXNlLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2guanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vcGFnZXMvYmxvZy9bLi4uc2x1Z10uanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIkBtYXBib3gvcmVoeXBlLXByaXNtXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcImltYWdlLXNpemVcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwibmV4dC1tZHgtcmVtb3RlXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVhZGluZy10aW1lXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInJlaHlwZS1rYXRleFwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZW1hcmstYXV0b2xpbmstaGVhZGluZ3NcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVtYXJrLWNvZGUtdGl0bGVzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInJlbWFyay1tYXRoXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInJlbWFyay1zbHVnXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInVuaXN0LXV0aWwtdmlzaXRcIiJdLCJuYW1lcyI6WyJJbWFnZSIsInJlc3QiLCJDdXN0b21MaW5rIiwiaHJlZiIsImlzSW50ZXJuYWxMaW5rIiwic3RhcnRzV2l0aCIsImlzQW5jaG9yTGluayIsIk1EWENvbXBvbmVudHMiLCJhIiwiUGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJTRU8iLCJ0aXRsZSIsInNpdGVNZXRhZGF0YSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwidHlwZSIsImxvY2FsZSIsInVybCIsImltYWdlcyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlciIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsImFkZGl0aW9uYWxNZXRhVGFncyIsIm5hbWUiLCJjb250ZW50IiwiYXV0aG9yIiwiUGFnZVNlbyIsIkJsb2dTZW8iLCJzdW1tYXJ5IiwiZGF0ZSIsImxhc3Rtb2QiLCJ0YWdzIiwicHVibGlzaGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJtb2RpZmllZEF0IiwiaW1hZ2VzQXJyIiwibGVuZ3RoIiwiZmVhdHVyZWRJbWFnZXMiLCJtYXAiLCJpbWciLCJhcnRpY2xlIiwicHVibGlzaGVkVGltZSIsIm1vZGlmaWVkVGltZSIsImF1dGhvcnMiLCJTZWN0aW9uQ29udGFpbmVyIiwiVGFnIiwidGV4dCIsImtlYmFiQ2FzZSIsInNwbGl0Iiwiam9pbiIsImVkaXRVcmwiLCJmaWxlTmFtZSIsImRpc2N1c3NVcmwiLCJzbHVnIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicG9zdERhdGVUZW1wbGF0ZSIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJQb3N0TGF5b3V0IiwiZnJvbnRNYXR0ZXIiLCJuZXh0IiwicHJldiIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJ0YWciLCJnZW5lcmF0ZVJzc0l0ZW0iLCJwb3N0IiwiZXNjYXBlIiwidG9VVENTdHJpbmciLCJ0IiwiZ2VuZXJhdGVSc3MiLCJwb3N0cyIsInBhZ2UiLCJ2aXNpdCIsInJlcXVpcmUiLCJzaXplT2YiLCJmcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwidHJlZSIsIm5vZGUiLCJzb21lIiwibiIsImltYWdlTm9kZSIsImZpbmQiLCJleGlzdHNTeW5jIiwicHJvY2VzcyIsImN3ZCIsImRpbWVuc2lvbnMiLCJ2YWx1ZSIsInJvb3QiLCJ0b2tlbkNsYXNzTmFtZXMiLCJkZWxldGVkIiwiaW5zZXJ0ZWQiLCJwdW5jdHVhdGlvbiIsImtleXdvcmQiLCJzdHJpbmciLCJmdW5jdGlvbiIsImJvb2xlYW4iLCJjb21tZW50IiwiZ2V0RmlsZXMiLCJwcmVmaXhQYXRocyIsInBhdGgiLCJmaWxlcyIsImdldEFsbEZpbGVzUmVjdXJzaXZlbHkiLCJmaWxlIiwic2xpY2UiLCJyZXBsYWNlIiwiZm9ybWF0U2x1ZyIsImRhdGVTb3J0RGVzYyIsImIiLCJnZXRGaWxlQnlTbHVnIiwibWR4UGF0aCIsIm1kUGF0aCIsInNvdXJjZSIsImRhdGEiLCJtYXR0ZXIiLCJtZHhTb3VyY2UiLCJzZXJpYWxpemUiLCJjb21wb25lbnRzIiwibWR4T3B0aW9ucyIsInJlbWFya1BsdWdpbnMiLCJpbWdUb0pzeCIsImlubGluZU5vdGVzIiwicmVoeXBlUGx1Z2lucyIsImluZGV4IiwicGFyZW50IiwidG9rZW4iLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicmVhZGluZ1RpbWUiLCJnZXRBbGxGaWxlc0Zyb250TWF0dGVyIiwiZm9sZGVyIiwiYWxsRnJvbnRNYXR0ZXIiLCJmb3JFYWNoIiwiZHJhZnQiLCJwdXNoIiwic29ydCIsInBpcGUiLCJmbnMiLCJ4IiwicmVkdWNlIiwidiIsImYiLCJmbGF0dGVuQXJyYXkiLCJpbnB1dCIsImFjYyIsIml0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJmbiIsIndhbGtEaXIiLCJmdWxsUGF0aCIsImlzRmlsZSIsInBhdGhKb2luUHJlZml4IiwicHJlZml4IiwiZXh0cmFQYXRoIiwiZXMiLCJjYSIsImVzY2EiLCJwZSIsIm0iLCJjYWxsIiwic3RyIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJleGVjIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwidyIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJnZXRJbnQiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsImNvbnNvbGUiLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpY2UiLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsIm1hdGNoSGFzIiwiY29tcGlsZU5vblBhdGgiLCJwcmVwYXJlRGVzdGluYXRpb24iLCJnZXRTYWZlUGFyYW1OYW1lIiwicGFyYW1OYW1lIiwibmV3UGFyYW1OYW1lIiwiY2hhckNvZGUiLCJjaGFyQ29kZUF0IiwicmVxIiwiaW5pdGlhbFF1ZXJ5VmFsdWVzIiwidmFsdWVzIiwiX19ORVhUX0lOSVRfUVVFUlkiLCJhbGxNYXRjaCIsImhhc0l0ZW0iLCJoZWFkZXJzIiwiY29va2llcyIsIlJlZ0V4cCIsIm1hdGNoZXMiLCJncm91cEtleSIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImhhZExvY2FsZSIsIl9fbmV4dExvY2FsZSIsIl9fbmV4dERlZmF1bHRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsInBhcmFtS2V5cyIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwicmVzb2x2ZVJld3JpdGVzIiwiX3BhdGhNYXRjaCIsIl9wcmVwYXJlRGVzdGluYXRpb24iLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJmc1BhdGhuYW1lIiwiaGFuZGxlUmV3cml0ZSIsInJld3JpdGUiLCJoYXNQYXJhbXMiLCJjb29raWUiLCJkZXN0UmVzIiwiZmluaXNoZWQiLCJiZWZvcmVGaWxlcyIsImFmdGVyRmlsZXMiLCJmYWxsYmFjayIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJwb3MiLCJlc2NhcGVSZWdleCIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJnZXRTdGF0aWNQcm9wcyIsImFsbFBvc3RzIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwicnNzIiwiQmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJB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QUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7QUNEQSwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLGtEOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2Jsb2cvWy4uLnNsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBOZXh0SW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbHQtdGV4dFxyXG5jb25zdCBJbWFnZSA9ICh7IC4uLnJlc3QgfSkgPT4gPE5leHRJbWFnZSB7Li4ucmVzdH0gLz5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudCAqL1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBDdXN0b21MaW5rID0gKHsgaHJlZiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgY29uc3QgaXNJbnRlcm5hbExpbmsgPSBocmVmICYmIGhyZWYuc3RhcnRzV2l0aCgnLycpXHJcbiAgY29uc3QgaXNBbmNob3JMaW5rID0gaHJlZiAmJiBocmVmLnN0YXJ0c1dpdGgoJyMnKVxyXG5cclxuICBpZiAoaXNJbnRlcm5hbExpbmspIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgIDxhIHsuLi5yZXN0fSAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBbmNob3JMaW5rKSB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj17aHJlZn0gey4uLnJlc3R9IC8+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9e2hyZWZ9IHsuLi5yZXN0fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21MaW5rXHJcbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJ1xyXG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tICcuL0xpbmsnXHJcblxyXG5jb25zdCBNRFhDb21wb25lbnRzID0ge1xyXG4gIEltYWdlLFxyXG4gIGE6IEN1c3RvbUxpbmssXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1EWENvbXBvbmVudHNcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVRpdGxlKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1leHRyYWJvbGQgbGVhZGluZy05IHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMTAwIHNtOnRleHQtNHhsIHNtOmxlYWRpbmctMTAgbWQ6dGV4dC01eGwgbWQ6bGVhZGluZy0xNFwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2gxPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBOZXh0U2VvLCBBcnRpY2xlSnNvbkxkIH0gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCBzaXRlTWV0YWRhdGEgZnJvbSAnQC9kYXRhL3NpdGVNZXRhZGF0YSdcclxuXHJcbmV4cG9ydCBjb25zdCBTRU8gPSB7XHJcbiAgdGl0bGU6IHNpdGVNZXRhZGF0YS50aXRsZSxcclxuICBkZXNjcmlwdGlvbjogc2l0ZU1ldGFkYXRhLmRlc2NyaXB0aW9uLFxyXG4gIG9wZW5HcmFwaDoge1xyXG4gICAgdHlwZTogJ3dlYnNpdGUnLFxyXG4gICAgbG9jYWxlOiBzaXRlTWV0YWRhdGEubGFuZ3VhZ2UsXHJcbiAgICB1cmw6IHNpdGVNZXRhZGF0YS5zaXRlVXJsLFxyXG4gICAgdGl0bGU6IHNpdGVNZXRhZGF0YS50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBzaXRlTWV0YWRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICBpbWFnZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHVybDogYCR7c2l0ZU1ldGFkYXRhLnNpdGVVcmx9JHtzaXRlTWV0YWRhdGEuc29jaWFsQmFubmVyfWAsXHJcbiAgICAgICAgYWx0OiBzaXRlTWV0YWRhdGEudGl0bGUsXHJcbiAgICAgICAgd2lkdGg6IDEyMDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgdHdpdHRlcjoge1xyXG4gICAgaGFuZGxlOiBzaXRlTWV0YWRhdGEudHdpdHRlcixcclxuICAgIHNpdGU6IHNpdGVNZXRhZGF0YS50d2l0dGVyLFxyXG4gICAgY2FyZFR5cGU6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcclxuICB9LFxyXG4gIGFkZGl0aW9uYWxNZXRhVGFnczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYXV0aG9yJyxcclxuICAgICAgY29udGVudDogc2l0ZU1ldGFkYXRhLmF1dGhvcixcclxuICAgIH0sXHJcbiAgXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VTZW8gPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHVybCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0U2VvXHJcbiAgICAgIHRpdGxlPXtgJHt0aXRsZX0g4oCTICR7c2l0ZU1ldGFkYXRhLnRpdGxlfWB9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgY2Fub25pY2FsPXt1cmx9XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ1NlbyA9ICh7IHRpdGxlLCBzdW1tYXJ5LCBkYXRlLCBsYXN0bW9kLCB1cmwsIHRhZ3MsIGltYWdlcyA9IFtdIH0pID0+IHtcclxuICBjb25zdCBwdWJsaXNoZWRBdCA9IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKClcclxuICBjb25zdCBtb2RpZmllZEF0ID0gbmV3IERhdGUobGFzdG1vZCB8fCBkYXRlKS50b0lTT1N0cmluZygpXHJcbiAgbGV0IGltYWdlc0FyciA9XHJcbiAgICBpbWFnZXMubGVuZ3RoID09PSAwXHJcbiAgICAgID8gW3NpdGVNZXRhZGF0YS5zb2NpYWxCYW5uZXJdXHJcbiAgICAgIDogdHlwZW9mIGltYWdlcyA9PT0gJ3N0cmluZydcclxuICAgICAgPyBbaW1hZ2VzXVxyXG4gICAgICA6IGltYWdlc1xyXG5cclxuICBjb25zdCBmZWF0dXJlZEltYWdlcyA9IGltYWdlc0Fyci5tYXAoKGltZykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXJsOiBgJHtzaXRlTWV0YWRhdGEuc2l0ZVVybH0ke2ltZ31gLFxyXG4gICAgICBhbHQ6IHRpdGxlLFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPXtgJHt0aXRsZX0g4oCTICR7c2l0ZU1ldGFkYXRhLnRpdGxlfWB9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3N1bW1hcnl9XHJcbiAgICAgICAgY2Fub25pY2FsPXt1cmx9XHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICB0eXBlOiAnYXJ0aWNsZScsXHJcbiAgICAgICAgICBhcnRpY2xlOiB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2hlZFRpbWU6IHB1Ymxpc2hlZEF0LFxyXG4gICAgICAgICAgICBtb2RpZmllZFRpbWU6IG1vZGlmaWVkQXQsXHJcbiAgICAgICAgICAgIGF1dGhvcnM6IFtgJHtzaXRlTWV0YWRhdGEuc2l0ZVVybH0vYWJvdXRgXSxcclxuICAgICAgICAgICAgdGFncyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdW1tYXJ5LFxyXG4gICAgICAgICAgaW1hZ2VzOiBmZWF0dXJlZEltYWdlcyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFkZGl0aW9uYWxNZXRhVGFncz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAndHdpdHRlcjppbWFnZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGZlYXR1cmVkSW1hZ2VzWzBdLnVybCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgICAgPEFydGljbGVKc29uTGRcclxuICAgICAgICBhdXRob3JOYW1lPXtzaXRlTWV0YWRhdGEuYXV0aG9yfVxyXG4gICAgICAgIGRhdGVNb2RpZmllZD17bW9kaWZpZWRBdH1cclxuICAgICAgICBkYXRlUHVibGlzaGVkPXtwdWJsaXNoZWRBdH1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c3VtbWFyeX1cclxuICAgICAgICBpbWFnZXM9e2ZlYXR1cmVkSW1hZ2VzfVxyXG4gICAgICAgIHB1Ymxpc2hlck5hbWU9e3NpdGVNZXRhZGF0YS5hdXRob3J9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIHVybD17dXJsfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25Db250YWluZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIHB4LTQgbXgtYXV0byBzbTpweC02IHhsOm1heC13LTV4bCB4bDpweC0wXCI+e2NoaWxkcmVufTwvZGl2PlxyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGtlYmFiQ2FzZSBmcm9tICdAL2xpYi91dGlscy9rZWJhYkNhc2UnXHJcblxyXG5jb25zdCBUYWcgPSAoeyB0ZXh0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC90YWdzLyR7a2ViYWJDYXNlKHRleHQpfWB9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJtci0zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgaG92ZXI6dGV4dC1ibHVlLTYwMCBkYXJrOmhvdmVyOnRleHQtYmx1ZS00MDBcIj5cclxuICAgICAgICB7dGV4dC5zcGxpdCgnICcpLmpvaW4oJy0nKX1cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFnXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ0AvY29tcG9uZW50cy9MaW5rJ1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJ0AvY29tcG9uZW50cy9QYWdlVGl0bGUnXHJcbmltcG9ydCBTZWN0aW9uQ29udGFpbmVyIGZyb20gJ0AvY29tcG9uZW50cy9TZWN0aW9uQ29udGFpbmVyJ1xyXG5pbXBvcnQgeyBCbG9nU2VvIH0gZnJvbSAnQC9jb21wb25lbnRzL1NFTydcclxuaW1wb3J0IEltYWdlIGZyb20gJ0AvY29tcG9uZW50cy9JbWFnZSdcclxuaW1wb3J0IFRhZyBmcm9tICdAL2NvbXBvbmVudHMvVGFnJ1xyXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXHJcblxyXG5jb25zdCBlZGl0VXJsID0gKGZpbGVOYW1lKSA9PiBgJHtzaXRlTWV0YWRhdGEuc2l0ZVJlcG99L2Jsb2IvbWFzdGVyL2RhdGEvYmxvZy8ke2ZpbGVOYW1lfWBcclxuY29uc3QgZGlzY3Vzc1VybCA9IChzbHVnKSA9PlxyXG4gIGBodHRwczovL21vYmlsZS50d2l0dGVyLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgIGAke3NpdGVNZXRhZGF0YS5zaXRlVXJsfS9ibG9nLyR7c2x1Z31gXHJcbiAgKX1gXHJcblxyXG5jb25zdCBwb3N0RGF0ZVRlbXBsYXRlID0geyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdExheW91dCh7IGNoaWxkcmVuLCBmcm9udE1hdHRlciwgbmV4dCwgcHJldiB9KSB7XHJcbiAgY29uc3QgeyBzbHVnLCBmaWxlTmFtZSwgZGF0ZSwgdGl0bGUsIHRhZ3MgfSA9IGZyb250TWF0dGVyXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbkNvbnRhaW5lcj5cclxuICAgICAgPEJsb2dTZW8gdXJsPXtgJHtzaXRlTWV0YWRhdGEuc2l0ZVVybH0vYmxvZy8ke3NsdWd9YH0gey4uLmZyb250TWF0dGVyfSAvPlxyXG4gICAgICA8YXJ0aWNsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOmRpdmlkZS15IHhsOmRpdmlkZS1ncmF5LTIwMCB4bDpkYXJrOmRpdmlkZS1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwdC02IHhsOnBiLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwic3BhY2UteS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QdWJsaXNoZWQgb248L2R0PlxyXG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtkYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoc2l0ZU1ldGFkYXRhLmxvY2FsZSwgcG9zdERhdGVUZW1wbGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZT57dGl0bGV9PC9QYWdlVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBiLTggZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIHhsOmRpdmlkZS15LTAgZGFyazpkaXZpZGUtZ3JheS03MDAgeGw6Z3JpZCB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC02XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gMWZyJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwicHQtNiBwYi0xMCB4bDpwdC0xMSB4bDpib3JkZXItYiB4bDpib3JkZXItZ3JheS0yMDAgeGw6ZGFyazpib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPkF1dGhvcnM8L2R0PlxyXG4gICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtOCB4bDpibG9jayBzbTpzcGFjZS14LTEyIHhsOnNwYWNlLXgtMCB4bDpzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtzaXRlTWV0YWRhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTUgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmFtZTwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj57c2l0ZU1ldGFkYXRhLmF1dGhvcn08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBzaXRlTWV0YWRhdGEudHdpdHRlciA9PT0gJ3N0cmluZycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJzci1vbmx5XCI+VHdpdHRlcjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c2l0ZU1ldGFkYXRhLnR3aXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBkYXJrOmhvdmVyOnRleHQtYmx1ZS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2l0ZU1ldGFkYXRhLnR3aXR0ZXIucmVwbGFjZSgnaHR0cHM6Ly90d2l0dGVyLmNvbS8nLCAnQCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBkYXJrOmRpdmlkZS1ncmF5LTcwMCB4bDpwYi0wIHhsOmNvbC1zcGFuLTMgeGw6cm93LXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgcGItOCBwcm9zZSBkYXJrOnByb3NlLWRhcmsgbWF4LXctbm9uZVwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiB3cml0ZSB0ZXh0IGFmdGVyIHBvc3QgYW5kIGJlZm9yZSBmb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTUgZGl2aWRlLWdyYXktMjAwIHhsOmRpdmlkZS15IGRhcms6ZGl2aWRlLWdyYXktNzAwIHhsOmNvbC1zdGFydC0xIHhsOnJvdy1zdGFydC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7dGFncyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCB4bDpweS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteHMgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9IHRleHQ9e3RhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7KG5leHQgfHwgcHJldikgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTQgeGw6YmxvY2sgeGw6c3BhY2UteS04IHhsOnB5LThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJldiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14cyB0cmFja2luZy13aWRlIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpb3VzIEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS02MDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cHJldi5zbHVnfWB9PntwcmV2LnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXh0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dCBBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke25leHQuc2x1Z31gfT57bmV4dC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCB4bDpwdC04XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2Jsb2dcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS02MDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgJmxhcnI7IEJhY2sgdG8gdGhlIGJsb2dcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9TZWN0aW9uQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBlc2NhcGUgfSBmcm9tICdAL2xpYi91dGlscy9odG1sRXNjYXBlcidcclxuXHJcbmltcG9ydCBzaXRlTWV0YWRhdGEgZnJvbSAnQC9kYXRhL3NpdGVNZXRhZGF0YSdcclxuXHJcbmNvbnN0IGdlbmVyYXRlUnNzSXRlbSA9IChwb3N0KSA9PiBgXHJcbiAgPGl0ZW0+XHJcbiAgICA8Z3VpZD4ke3NpdGVNZXRhZGF0YS5zaXRlVXJsfS9ibG9nLyR7cG9zdC5zbHVnfTwvZ3VpZD5cclxuICAgIDx0aXRsZT4ke2VzY2FwZShwb3N0LnRpdGxlKX08L3RpdGxlPlxyXG4gICAgPGxpbms+JHtzaXRlTWV0YWRhdGEuc2l0ZVVybH0vYmxvZy8ke3Bvc3Quc2x1Z308L2xpbms+XHJcbiAgICA8ZGVzY3JpcHRpb24+JHtlc2NhcGUocG9zdC5zdW1tYXJ5KX08L2Rlc2NyaXB0aW9uPlxyXG4gICAgPHB1YkRhdGU+JHtuZXcgRGF0ZShwb3N0LmRhdGUpLnRvVVRDU3RyaW5nKCl9PC9wdWJEYXRlPlxyXG4gICAgPGF1dGhvcj4ke3NpdGVNZXRhZGF0YS5lbWFpbH0gKCR7c2l0ZU1ldGFkYXRhLmF1dGhvcn0pPC9hdXRob3I+XHJcbiAgICAke3Bvc3QudGFncy5tYXAoKHQpID0+IGA8Y2F0ZWdvcnk+JHt0fTwvY2F0ZWdvcnk+YCkuam9pbignJyl9XHJcbiAgPC9pdGVtPlxyXG5gXHJcblxyXG5jb25zdCBnZW5lcmF0ZVJzcyA9IChwb3N0cywgcGFnZSA9ICdpbmRleC54bWwnKSA9PiBgXHJcbiAgPHJzcyB2ZXJzaW9uPVwiMi4wXCIgeG1sbnM6YXRvbT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDUvQXRvbVwiPlxyXG4gICAgPGNoYW5uZWw+XHJcbiAgICAgIDx0aXRsZT4ke2VzY2FwZShzaXRlTWV0YWRhdGEudGl0bGUpfTwvdGl0bGU+XHJcbiAgICAgIDxsaW5rPiR7c2l0ZU1ldGFkYXRhLnNpdGVVcmx9L2Jsb2c8L2xpbms+XHJcbiAgICAgIDxkZXNjcmlwdGlvbj4ke2VzY2FwZShzaXRlTWV0YWRhdGEuZGVzY3JpcHRpb24pfTwvZGVzY3JpcHRpb24+XHJcbiAgICAgIDxsYW5ndWFnZT4ke3NpdGVNZXRhZGF0YS5sYW5ndWFnZX08L2xhbmd1YWdlPlxyXG4gICAgICA8bWFuYWdpbmdFZGl0b3I+JHtzaXRlTWV0YWRhdGEuZW1haWx9ICgke3NpdGVNZXRhZGF0YS5hdXRob3J9KTwvbWFuYWdpbmdFZGl0b3I+XHJcbiAgICAgIDx3ZWJNYXN0ZXI+JHtzaXRlTWV0YWRhdGEuZW1haWx9ICgke3NpdGVNZXRhZGF0YS5hdXRob3J9KTwvd2ViTWFzdGVyPlxyXG4gICAgICA8bGFzdEJ1aWxkRGF0ZT4ke25ldyBEYXRlKHBvc3RzWzBdLmRhdGUpLnRvVVRDU3RyaW5nKCl9PC9sYXN0QnVpbGREYXRlPlxyXG4gICAgICA8YXRvbTpsaW5rIGhyZWY9XCIke3NpdGVNZXRhZGF0YS5zaXRlVXJsfS8ke3BhZ2V9XCIgcmVsPVwic2VsZlwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIvPlxyXG4gICAgICAke3Bvc3RzLm1hcChnZW5lcmF0ZVJzc0l0ZW0pLmpvaW4oJycpfVxyXG4gICAgPC9jaGFubmVsPlxyXG4gIDwvcnNzPlxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUnNzXHJcbiIsImNvbnN0IHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXHJcbmNvbnN0IHNpemVPZiA9IHJlcXVpcmUoJ2ltYWdlLXNpemUnKVxyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKG9wdGlvbnMpID0+ICh0cmVlKSA9PiB7XHJcbiAgdmlzaXQoXHJcbiAgICB0cmVlLFxyXG4gICAgLy8gb25seSB2aXNpdCBwIHRhZ3MgdGhhdCBjb250YWluIGFuIGltZyBlbGVtZW50XHJcbiAgICAobm9kZSkgPT4gbm9kZS50eXBlID09PSAncGFyYWdyYXBoJyAmJiBub2RlLmNoaWxkcmVuLnNvbWUoKG4pID0+IG4udHlwZSA9PT0gJ2ltYWdlJyksXHJcbiAgICAobm9kZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZU5vZGUgPSBub2RlLmNoaWxkcmVuLmZpbmQoKG4pID0+IG4udHlwZSA9PT0gJ2ltYWdlJylcclxuXHJcbiAgICAgIC8vIG9ubHkgbG9jYWwgZmlsZXNcclxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYCR7cHJvY2Vzcy5jd2QoKX0vcHVibGljJHtpbWFnZU5vZGUudXJsfWApKSB7XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHNpemVPZihgJHtwcm9jZXNzLmN3ZCgpfS9wdWJsaWMke2ltYWdlTm9kZS51cmx9YClcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBvcmlnaW5hbCBub2RlIHRvIG5leHQvaW1hZ2VcclxuICAgICAgICBpbWFnZU5vZGUudHlwZSA9ICdqc3gnXHJcbiAgICAgICAgaW1hZ2VOb2RlLnZhbHVlID0gYDxJbWFnZVxyXG4gICAgICAgICAgYWx0PXtcXGAke2ltYWdlTm9kZS5hbHR9XFxgfSBcclxuICAgICAgICAgIHNyYz17XFxgJHtpbWFnZU5vZGUudXJsfVxcYH1cclxuICAgICAgICAgIHdpZHRoPXske2RpbWVuc2lvbnMud2lkdGh9fVxyXG4gICAgICAgICAgaGVpZ2h0PXske2RpbWVuc2lvbnMuaGVpZ2h0fX1cclxuICAgICAgLz5gXHJcblxyXG4gICAgICAgIC8vIENoYW5nZSBub2RlIHR5cGUgZnJvbSBwIHRvIGRpdiB0byBhdm9pZCBuZXN0aW5nIGVycm9yXHJcbiAgICAgICAgbm9kZS50eXBlID0gJ2RpdidcclxuICAgICAgICBub2RlLmNoaWxkcmVuID0gW2ltYWdlTm9kZV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgTURYQ29tcG9uZW50cyBmcm9tICdAL2NvbXBvbmVudHMvTURYQ29tcG9uZW50cydcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICduZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgcmVhZGluZ1RpbWUgZnJvbSAncmVhZGluZy10aW1lJ1xyXG5pbXBvcnQgdmlzaXQgZnJvbSAndW5pc3QtdXRpbC12aXNpdCdcclxuaW1wb3J0IGltZ1RvSnN4IGZyb20gJy4vaW1nLXRvLWpzeCdcclxuaW1wb3J0IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkgZnJvbSAnLi91dGlscy9maWxlcydcclxuXHJcbmNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXHJcblxyXG5jb25zdCB0b2tlbkNsYXNzTmFtZXMgPSB7XHJcbiAgdGFnOiAndGV4dC1jb2RlLXJlZCcsXHJcbiAgJ2F0dHItbmFtZSc6ICd0ZXh0LWNvZGUteWVsbG93JyxcclxuICAnYXR0ci12YWx1ZSc6ICd0ZXh0LWNvZGUtZ3JlZW4nLFxyXG4gIGRlbGV0ZWQ6ICd0ZXh0LWNvZGUtcmVkJyxcclxuICBpbnNlcnRlZDogJ3RleHQtY29kZS1ncmVlbicsXHJcbiAgcHVuY3R1YXRpb246ICd0ZXh0LWNvZGUtd2hpdGUnLFxyXG4gIGtleXdvcmQ6ICd0ZXh0LWNvZGUtcHVycGxlJyxcclxuICBzdHJpbmc6ICd0ZXh0LWNvZGUtZ3JlZW4nLFxyXG4gIGZ1bmN0aW9uOiAndGV4dC1jb2RlLWJsdWUnLFxyXG4gIGJvb2xlYW46ICd0ZXh0LWNvZGUtcmVkJyxcclxuICBjb21tZW50OiAndGV4dC1ncmF5LTQwMCBpdGFsaWMnLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZXModHlwZSkge1xyXG4gIGNvbnN0IHByZWZpeFBhdGhzID0gcGF0aC5qb2luKHJvb3QsICdkYXRhJywgdHlwZSlcclxuICBjb25zdCBmaWxlcyA9IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkocHJlZml4UGF0aHMpXHJcbiAgLy8gT25seSB3YW50IHRvIHJldHVybiBibG9nL3BhdGggYW5kIGlnbm9yZSByb290LCByZXBsYWNlIGlzIG5lZWRlZCB0byB3b3JrIG9uIFdpbmRvd3NcclxuICByZXR1cm4gZmlsZXMubWFwKChmaWxlKSA9PiBmaWxlLnNsaWNlKHByZWZpeFBhdGhzLmxlbmd0aCArIDEpLnJlcGxhY2UoL1xcXFwvZywgJy8nKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNsdWcoc2x1Zykge1xyXG4gIHJldHVybiBzbHVnLnJlcGxhY2UoL1xcLihtZHh8bWQpLywgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRlU29ydERlc2MoYSwgYikge1xyXG4gIGlmIChhID4gYikgcmV0dXJuIC0xXHJcbiAgaWYgKGEgPCBiKSByZXR1cm4gMVxyXG4gIHJldHVybiAwXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlQnlTbHVnKHR5cGUsIHNsdWcpIHtcclxuICBjb25zdCBtZHhQYXRoID0gcGF0aC5qb2luKHJvb3QsICdkYXRhJywgdHlwZSwgYCR7c2x1Z30ubWR4YClcclxuICBjb25zdCBtZFBhdGggPSBwYXRoLmpvaW4ocm9vdCwgJ2RhdGEnLCB0eXBlLCBgJHtzbHVnfS5tZGApXHJcbiAgY29uc3Qgc291cmNlID0gZnMuZXhpc3RzU3luYyhtZHhQYXRoKVxyXG4gICAgPyBmcy5yZWFkRmlsZVN5bmMobWR4UGF0aCwgJ3V0ZjgnKVxyXG4gICAgOiBmcy5yZWFkRmlsZVN5bmMobWRQYXRoLCAndXRmOCcpXHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKHNvdXJjZSlcclxuICBjb25zdCBtZHhTb3VyY2UgPSBhd2FpdCBzZXJpYWxpemUoY29udGVudCwge1xyXG4gICAgY29tcG9uZW50czogTURYQ29tcG9uZW50cyxcclxuICAgIG1keE9wdGlvbnM6IHtcclxuICAgICAgcmVtYXJrUGx1Z2luczogW1xyXG4gICAgICAgIHJlcXVpcmUoJ3JlbWFyay1zbHVnJyksXHJcbiAgICAgICAgcmVxdWlyZSgncmVtYXJrLWF1dG9saW5rLWhlYWRpbmdzJyksXHJcbiAgICAgICAgcmVxdWlyZSgncmVtYXJrLWNvZGUtdGl0bGVzJyksXHJcbiAgICAgICAgcmVxdWlyZSgncmVtYXJrLW1hdGgnKSxcclxuICAgICAgICBpbWdUb0pzeCxcclxuICAgICAgXSxcclxuICAgICAgaW5saW5lTm90ZXM6IHRydWUsXHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcclxuICAgICAgICByZXF1aXJlKCdyZWh5cGUta2F0ZXgnKSxcclxuICAgICAgICByZXF1aXJlKCdAbWFwYm94L3JlaHlwZS1wcmlzbScpLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAodHJlZSkgPT4ge1xyXG4gICAgICAgICAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlLCBpbmRleCwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IFt0b2tlbiwgdHlwZV0gPSBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lIHx8IFtdXHJcbiAgICAgICAgICAgICAgaWYgKHRva2VuID09PSAndG9rZW4nKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lID0gW3Rva2VuQ2xhc3NOYW1lc1t0eXBlXV1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1keFNvdXJjZSxcclxuICAgIGZyb250TWF0dGVyOiB7XHJcbiAgICAgIHJlYWRpbmdUaW1lOiByZWFkaW5nVGltZShjb250ZW50KSxcclxuICAgICAgc2x1Zzogc2x1ZyB8fCBudWxsLFxyXG4gICAgICBmaWxlTmFtZTogZnMuZXhpc3RzU3luYyhtZHhQYXRoKSA/IGAke3NsdWd9Lm1keGAgOiBgJHtzbHVnfS5tZGAsXHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZpbGVzRnJvbnRNYXR0ZXIoZm9sZGVyKSB7XHJcbiAgY29uc3QgcHJlZml4UGF0aHMgPSBwYXRoLmpvaW4ocm9vdCwgJ2RhdGEnLCBmb2xkZXIpXHJcblxyXG4gIGNvbnN0IGZpbGVzID0gZ2V0QWxsRmlsZXNSZWN1cnNpdmVseShwcmVmaXhQYXRocylcclxuXHJcbiAgY29uc3QgYWxsRnJvbnRNYXR0ZXIgPSBbXVxyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAvLyBSZXBsYWNlIGlzIG5lZWRlZCB0byB3b3JrIG9uIFdpbmRvd3NcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZS5zbGljZShwcmVmaXhQYXRocy5sZW5ndGggKyAxKS5yZXBsYWNlKC9cXFxcL2csICcvJylcclxuICAgIC8vIFJlbW92ZSBVbmV4cGVjdGVkIEZpbGVcclxuICAgIGlmIChwYXRoLmV4dG5hbWUoZmlsZU5hbWUpICE9PSAnLm1kJyAmJiBwYXRoLmV4dG5hbWUoZmlsZU5hbWUpICE9PSAnLm1keCcpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSwgJ3V0ZjgnKVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKVxyXG4gICAgaWYgKGRhdGEuZHJhZnQgIT09IHRydWUpIHtcclxuICAgICAgYWxsRnJvbnRNYXR0ZXIucHVzaCh7IC4uLmRhdGEsIHNsdWc6IGZvcm1hdFNsdWcoZmlsZU5hbWUpIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGFsbEZyb250TWF0dGVyLnNvcnQoKGEsIGIpID0+IGRhdGVTb3J0RGVzYyhhLmRhdGUsIGIuZGF0ZSkpXHJcbn1cclxuIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgcGlwZSA9ICguLi5mbnMpID0+ICh4KSA9PiBmbnMucmVkdWNlKCh2LCBmKSA9PiBmKHYpLCB4KVxyXG5cclxuY29uc3QgZmxhdHRlbkFycmF5ID0gKGlucHV0KSA9PlxyXG4gIGlucHV0LnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBbLi4uYWNjLCAuLi4oQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW0gOiBbaXRlbV0pXSwgW10pXHJcblxyXG5jb25zdCBtYXAgPSAoZm4pID0+IChpbnB1dCkgPT4gaW5wdXQubWFwKGZuKVxyXG5cclxuY29uc3Qgd2Fsa0RpciA9IChmdWxsUGF0aCkgPT4ge1xyXG4gIHJldHVybiBmcy5zdGF0U3luYyhmdWxsUGF0aCkuaXNGaWxlKCkgPyBmdWxsUGF0aCA6IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkoZnVsbFBhdGgpXHJcbn1cclxuXHJcbmNvbnN0IHBhdGhKb2luUHJlZml4ID0gKHByZWZpeCkgPT4gKGV4dHJhUGF0aCkgPT4gcGF0aC5qb2luKHByZWZpeCwgZXh0cmFQYXRoKVxyXG5cclxuY29uc3QgZ2V0QWxsRmlsZXNSZWN1cnNpdmVseSA9IChmb2xkZXIpID0+XHJcbiAgcGlwZShmcy5yZWFkZGlyU3luYywgbWFwKHBpcGUocGF0aEpvaW5QcmVmaXgoZm9sZGVyKSwgd2Fsa0RpcikpLCBmbGF0dGVuQXJyYXkpKGZvbGRlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbEZpbGVzUmVjdXJzaXZlbHlcclxuIiwiY29uc3QgeyByZXBsYWNlIH0gPSAnJ1xyXG5cclxuLy8gZXNjYXBlXHJcbmNvbnN0IGVzID0gLyYoPzphbXB8IzM4fGx0fCM2MHxndHwjNjJ8YXBvc3wjMzl8cXVvdHwjMzQpOy9nXHJcbmNvbnN0IGNhID0gL1smPD4nXCJdL2dcclxuXHJcbmNvbnN0IGVzY2EgPSB7XHJcbiAgJyYnOiAnJmFtcDsnLFxyXG4gICc8JzogJyZsdDsnLFxyXG4gICc+JzogJyZndDsnLFxyXG4gIFwiJ1wiOiAnJiMzOTsnLFxyXG4gICdcIic6ICcmcXVvdDsnLFxyXG59XHJcbmNvbnN0IHBlID0gKG0pID0+IGVzY2FbbV1cclxuXHJcbi8qKlxyXG4gKiBTYWZlbHkgZXNjYXBlIEhUTUwgZW50aXRpZXMgc3VjaCBhcyBgJmAsIGA8YCwgYD5gLCBgXCJgLCBhbmQgYCdgLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZXMgdGhlIGlucHV0IHRvIHNhZmVseSBlc2NhcGVcclxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGVzY2FwZWQgaW5wdXQsIGFuZCBpdCAqKnRocm93cyoqIGFuIGVycm9yIGlmXHJcbiAqICB0aGUgaW5wdXQgdHlwZSBpcyB1bmV4cGVjdGVkLCBleGNlcHQgZm9yIGJvb2xlYW4gYW5kIG51bWJlcnMsXHJcbiAqICBjb252ZXJ0ZWQgYXMgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVzY2FwZSA9IChlcykgPT4gcmVwbGFjZS5jYWxsKGVzLCBjYSwgcGUpXHJcbiIsImNvbnN0IGtlYmFiQ2FzZSA9IChzdHIpID0+XHJcbiAgc3RyICYmXHJcbiAgc3RyXHJcbiAgICAubWF0Y2goL1tBLVpdezIsfSg/PVtBLVpdW2Etel0rWzAtOV0qfFxcYil8W0EtWl0/W2Etel0rWzAtOV0qfFtBLVpdfFswLTldKy9nKVxyXG4gICAgLm1hcCgoeCkgPT4geC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmpvaW4oJy0nKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQga2ViYWJDYXNlXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKHdpZHRoSW50KXx8dHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZpc05hTihoZWlnaHRJbnQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYobGF5b3V0IT09J2ZpbGwnJiYod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtkZWNvZGluZzpcImFzeW5jXCIsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXRoVG9SZWdleHA9ZXhwb3J0cy5kZWZhdWx0PWV4cG9ydHMuY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucz1leHBvcnRzLm1hdGNoZXJPcHRpb25zPXZvaWQgMDt2YXIgcGF0aFRvUmVnZXhwPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHBcIikpO2V4cG9ydHMucGF0aFRvUmVnZXhwPXBhdGhUb1JlZ2V4cDtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWNvbnN0IG1hdGNoZXJPcHRpb25zPXtzZW5zaXRpdmU6ZmFsc2UsZGVsaW1pdGVyOicvJ307ZXhwb3J0cy5tYXRjaGVyT3B0aW9ucz1tYXRjaGVyT3B0aW9ucztjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPXsuLi5tYXRjaGVyT3B0aW9ucyxzdHJpY3Q6dHJ1ZX07ZXhwb3J0cy5jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPWN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM7dmFyIF9kZWZhdWx0PShjdXN0b21Sb3V0ZT1mYWxzZSk9PntyZXR1cm4gcGF0aD0+e2NvbnN0IGtleXM9W107Y29uc3QgbWF0Y2hlclJlZ2V4PXBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAocGF0aCxrZXlzLGN1c3RvbVJvdXRlP2N1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6bWF0Y2hlck9wdGlvbnMpO2NvbnN0IG1hdGNoZXI9cGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LGtleXMpO3JldHVybihwYXRobmFtZSxwYXJhbXMpPT57Y29uc3QgcmVzPXBhdGhuYW1lPT1udWxsP2ZhbHNlOm1hdGNoZXIocGF0aG5hbWUpO2lmKCFyZXMpe3JldHVybiBmYWxzZTt9aWYoY3VzdG9tUm91dGUpe2Zvcihjb25zdCBrZXkgb2Yga2V5cyl7Ly8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG5pZih0eXBlb2Yga2V5Lm5hbWU9PT0nbnVtYmVyJyl7ZGVsZXRlIHJlcy5wYXJhbXNba2V5Lm5hbWVdO319fXJldHVybnsuLi5wYXJhbXMsLi4ucmVzLnBhcmFtc307fTt9O307ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC1tYXRjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hdGNoSGFzPW1hdGNoSGFzO2V4cG9ydHMuY29tcGlsZU5vblBhdGg9Y29tcGlsZU5vblBhdGg7ZXhwb3J0cy5kZWZhdWx0PXByZXBhcmVEZXN0aW5hdGlvbjtleHBvcnRzLmdldFNhZmVQYXJhbU5hbWU9dm9pZCAwO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgcGF0aFRvUmVnZXhwPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHBcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gZW5zdXJlIG9ubHkgYS16QS1aIGFyZSB1c2VkIGZvciBwYXJhbSBuYW1lcyBmb3IgcHJvcGVyIGludGVycG9sYXRpbmdcbi8vIHdpdGggcGF0aC10by1yZWdleHBcbmNvbnN0IGdldFNhZmVQYXJhbU5hbWU9cGFyYW1OYW1lPT57bGV0IG5ld1BhcmFtTmFtZT0nJztmb3IobGV0IGk9MDtpPHBhcmFtTmFtZS5sZW5ndGg7aSsrKXtjb25zdCBjaGFyQ29kZT1wYXJhbU5hbWUuY2hhckNvZGVBdChpKTtpZihjaGFyQ29kZT42NCYmY2hhckNvZGU8OTF8fC8vIEEtWlxuY2hhckNvZGU+OTYmJmNoYXJDb2RlPDEyMy8vIGEtelxuKXtuZXdQYXJhbU5hbWUrPXBhcmFtTmFtZVtpXTt9fXJldHVybiBuZXdQYXJhbU5hbWU7fTtleHBvcnRzLmdldFNhZmVQYXJhbU5hbWU9Z2V0U2FmZVBhcmFtTmFtZTtmdW5jdGlvbiBtYXRjaEhhcyhyZXEsaGFzLHF1ZXJ5KXtjb25zdCBwYXJhbXM9e307bGV0IGluaXRpYWxRdWVyeVZhbHVlcz1bXTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2luaXRpYWxRdWVyeVZhbHVlcz1PYmplY3QudmFsdWVzKHJlcS5fX05FWFRfSU5JVF9RVUVSWSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7aW5pdGlhbFF1ZXJ5VmFsdWVzPUFycmF5LmZyb20obmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLnZhbHVlcygpKTt9Y29uc3QgYWxsTWF0Y2g9aGFzLmV2ZXJ5KGhhc0l0ZW09PntsZXQgdmFsdWU7bGV0IGtleT1oYXNJdGVtLmtleTtzd2l0Y2goaGFzSXRlbS50eXBlKXtjYXNlJ2hlYWRlcic6e2tleT1rZXkudG9Mb3dlckNhc2UoKTt2YWx1ZT1yZXEuaGVhZGVyc1trZXldO2JyZWFrO31jYXNlJ2Nvb2tpZSc6e3ZhbHVlPXJlcS5jb29raWVzW2hhc0l0ZW0ua2V5XTticmVhazt9Y2FzZSdxdWVyeSc6ey8vIHByZXNlcnZlIGluaXRpYWwgZW5jb2Rpbmcgb2YgcXVlcnkgdmFsdWVzXG52YWx1ZT1xdWVyeVtrZXldO2lmKGluaXRpYWxRdWVyeVZhbHVlcy5pbmNsdWRlcyh2YWx1ZXx8JycpKXt2YWx1ZT1lbmNvZGVVUklDb21wb25lbnQodmFsdWUpO31icmVhazt9Y2FzZSdob3N0Jzp7Y29uc3R7aG9zdH09KHJlcT09bnVsbD92b2lkIDA6cmVxLmhlYWRlcnMpfHx7fTsvLyByZW1vdmUgcG9ydCBmcm9tIGhvc3QgaWYgcHJlc2VudFxuY29uc3QgaG9zdG5hbWU9aG9zdD09bnVsbD92b2lkIDA6aG9zdC5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7dmFsdWU9aG9zdG5hbWU7YnJlYWs7fWRlZmF1bHQ6e2JyZWFrO319aWYoIWhhc0l0ZW0udmFsdWUmJnZhbHVlKXtwYXJhbXNbZ2V0U2FmZVBhcmFtTmFtZShrZXkpXT12YWx1ZTtyZXR1cm4gdHJ1ZTt9ZWxzZSBpZih2YWx1ZSl7Y29uc3QgbWF0Y2hlcj1uZXcgUmVnRXhwKGBeJHtoYXNJdGVtLnZhbHVlfSRgKTtjb25zdCBtYXRjaGVzPXZhbHVlLm1hdGNoKG1hdGNoZXIpO2lmKG1hdGNoZXMpe2lmKG1hdGNoZXMuZ3JvdXBzKXtPYmplY3Qua2V5cyhtYXRjaGVzLmdyb3VwcykuZm9yRWFjaChncm91cEtleT0+e3BhcmFtc1tncm91cEtleV09bWF0Y2hlcy5ncm91cHNbZ3JvdXBLZXldO30pO31lbHNlIGlmKGhhc0l0ZW0udHlwZT09PSdob3N0JyYmbWF0Y2hlc1swXSl7cGFyYW1zLmhvc3Q9bWF0Y2hlc1swXTt9cmV0dXJuIHRydWU7fX1yZXR1cm4gZmFsc2U7fSk7aWYoYWxsTWF0Y2gpe3JldHVybiBwYXJhbXM7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWUscGFyYW1zKXtpZighdmFsdWUuaW5jbHVkZXMoJzonKSl7cmV0dXJuIHZhbHVlO31mb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpe2lmKHZhbHVlLmluY2x1ZGVzKGA6JHtrZXl9YCkpe3ZhbHVlPXZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwqYCwnZycpLGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2ApLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFw/YCwnZycpLGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCtgLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fSg/IVxcXFx3KWAsJ2cnKSxgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YCk7fX12YWx1ZT12YWx1ZS5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csJ1xcXFwkMScpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9QTFVTL2csJysnKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywnOicpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCc/JykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLUy9nLCcqJyk7Ly8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4vLyBjb3JyZWN0bHlcbnJldHVybiBwYXRoVG9SZWdleHAuY29tcGlsZShgLyR7dmFsdWV9YCx7dmFsaWRhdGU6ZmFsc2V9KShwYXJhbXMpLnN1YnN0cigxKTt9ZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKGRlc3RpbmF0aW9uLHBhcmFtcyxxdWVyeSxhcHBlbmRQYXJhbXNUb1F1ZXJ5KXtsZXQgcGFyc2VkRGVzdGluYXRpb249e307Ly8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxucXVlcnk9T2JqZWN0LmFzc2lnbih7fSxxdWVyeSk7Y29uc3QgaGFkTG9jYWxlPXF1ZXJ5Ll9fbmV4dExvY2FsZTtkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlO2RlbGV0ZSBxdWVyeS5fX25leHREZWZhdWx0TG9jYWxlO2lmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7cGFyc2VkRGVzdGluYXRpb249KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO31lbHNle2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxoYXNoLGhvc3RuYW1lLHBvcnQscHJvdG9jb2wsc2VhcmNoLGhyZWZ9PW5ldyBVUkwoZGVzdGluYXRpb24pO3BhcnNlZERlc3RpbmF0aW9uPXtwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxoYXNoLHByb3RvY29sLGhvc3RuYW1lLHBvcnQsc2VhcmNoLGhyZWZ9O31jb25zdCBkZXN0UXVlcnk9cGFyc2VkRGVzdGluYXRpb24ucXVlcnk7Y29uc3QgZGVzdFBhdGg9YCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWV9JHtwYXJzZWREZXN0aW5hdGlvbi5oYXNofHwnJ31gO2NvbnN0IGRlc3RQYXRoUGFyYW1LZXlzPVtdO3BhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsZGVzdFBhdGhQYXJhbUtleXMpO2NvbnN0IGRlc3RQYXRoUGFyYW1zPWRlc3RQYXRoUGFyYW1LZXlzLm1hcChrZXk9PmtleS5uYW1lKTtsZXQgZGVzdGluYXRpb25Db21waWxlcj1wYXRoVG9SZWdleHAuY29tcGlsZShkZXN0UGF0aCwvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbi8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4vLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4vLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbi8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbnt2YWxpZGF0ZTpmYWxzZX0pO2xldCBuZXdVcmw7Ly8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG5mb3IoY29uc3Rba2V5LHN0ck9yQXJyYXldb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSl7bGV0IHZhbHVlPUFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSk/c3RyT3JBcnJheVswXTpzdHJPckFycmF5O2lmKHZhbHVlKXsvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbi8vIGNvcnJlY3RseVxudmFsdWU9Y29tcGlsZU5vblBhdGgodmFsdWUscGFyYW1zKTt9ZGVzdFF1ZXJ5W2tleV09dmFsdWU7fS8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3Rcbi8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG5sZXQgcGFyYW1LZXlzPU9iamVjdC5rZXlzKHBhcmFtcyk7Ly8gcmVtb3ZlIGludGVybmFsIHBhcmFtIGZvciBpMThuXG5pZihoYWRMb2NhbGUpe3BhcmFtS2V5cz1wYXJhbUtleXMuZmlsdGVyKG5hbWU9Pm5hbWUhPT0nbmV4dEludGVybmFsTG9jYWxlJyk7fWlmKGFwcGVuZFBhcmFtc1RvUXVlcnkmJiFwYXJhbUtleXMuc29tZShrZXk9PmRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpKXtmb3IoY29uc3Qga2V5IG9mIHBhcmFtS2V5cyl7aWYoIShrZXkgaW4gZGVzdFF1ZXJ5KSl7ZGVzdFF1ZXJ5W2tleV09cGFyYW1zW2tleV07fX19dHJ5e25ld1VybD1kZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcyk7Y29uc3RbcGF0aG5hbWUsaGFzaF09bmV3VXJsLnNwbGl0KCcjJyk7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWU9cGF0aG5hbWU7cGFyc2VkRGVzdGluYXRpb24uaGFzaD1gJHtoYXNoPycjJzonJ30ke2hhc2h8fCcnfWA7ZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaDt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSl7dGhyb3cgbmV3IEVycm9yKGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtbXVsdGktbWF0Y2hgKTt9dGhyb3cgZXJyO30vLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4vLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4vLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeT17Li4ucXVlcnksLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnl9O3JldHVybntuZXdVcmwscGFyc2VkRGVzdGluYXRpb259O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZXBhcmUtZGVzdGluYXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1yZXNvbHZlUmV3cml0ZXM7dmFyIF9wYXRoTWF0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXRoLW1hdGNoXCIpKTt2YXIgX3ByZXBhcmVEZXN0aW5hdGlvbj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9wcmVwYXJlLWRlc3RpbmF0aW9uXCIpKTt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi8uLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9yb3V0ZXJcIik7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlcj0oMCxfcGF0aE1hdGNoLmRlZmF1bHQpKHRydWUpO2Z1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhhc1BhdGgscGFnZXMscmV3cml0ZXMscXVlcnkscmVzb2x2ZUhyZWYsbG9jYWxlcyl7bGV0IG1hdGNoZWRQYWdlPWZhbHNlO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2xldCBmc1BhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKSgoMCxfcm91dGVyLmRlbEJhc2VQYXRoKShwYXJzZWRBcy5wYXRobmFtZSksbG9jYWxlcykucGF0aG5hbWUpO2xldCByZXNvbHZlZEhyZWY7Y29uc3QgaGFuZGxlUmV3cml0ZT1yZXdyaXRlPT57Y29uc3QgbWF0Y2hlcj1jdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpO2xldCBwYXJhbXM9bWF0Y2hlcihwYXJzZWRBcy5wYXRobmFtZSk7aWYocmV3cml0ZS5oYXMmJnBhcmFtcyl7Y29uc3QgaGFzUGFyYW1zPSgwLF9wcmVwYXJlRGVzdGluYXRpb24ubWF0Y2hIYXMpKHtoZWFkZXJzOntob3N0OmRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lfSxjb29raWVzOmRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5yZWR1Y2UoKGFjYyxpdGVtKT0+e2NvbnN0W2tleSwuLi52YWx1ZV09aXRlbS5zcGxpdCgnPScpO2FjY1trZXldPXZhbHVlLmpvaW4oJz0nKTtyZXR1cm4gYWNjO30se30pfSxyZXdyaXRlLmhhcyxwYXJzZWRBcy5xdWVyeSk7aWYoaGFzUGFyYW1zKXtPYmplY3QuYXNzaWduKHBhcmFtcyxoYXNQYXJhbXMpO31lbHNle3BhcmFtcz1mYWxzZTt9fWlmKHBhcmFtcyl7aWYoIXJld3JpdGUuZGVzdGluYXRpb24pey8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG5yZXR1cm4gdHJ1ZTt9Y29uc3QgZGVzdFJlcz0oMCxfcHJlcGFyZURlc3RpbmF0aW9uLmRlZmF1bHQpKHJld3JpdGUuZGVzdGluYXRpb24scGFyYW1zLHF1ZXJ5LHRydWUpO3BhcnNlZEFzPWRlc3RSZXMucGFyc2VkRGVzdGluYXRpb247YXNQYXRoPWRlc3RSZXMubmV3VXJsO09iamVjdC5hc3NpZ24ocXVlcnksZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSk7ZnNQYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoKDAsX3JvdXRlci5kZWxCYXNlUGF0aCkoYXNQYXRoKSxsb2NhbGVzKS5wYXRobmFtZSk7aWYocGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpey8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xubWF0Y2hlZFBhZ2U9dHJ1ZTtyZXNvbHZlZEhyZWY9ZnNQYXRobmFtZTtyZXR1cm4gdHJ1ZTt9Ly8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbnJlc29sdmVkSHJlZj1yZXNvbHZlSHJlZihmc1BhdGhuYW1lKTtpZihyZXNvbHZlZEhyZWYhPT1hc1BhdGgmJnBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpe21hdGNoZWRQYWdlPXRydWU7cmV0dXJuIHRydWU7fX19O2xldCBmaW5pc2hlZD1mYWxzZTtmb3IobGV0IGk9MDtpPHJld3JpdGVzLmJlZm9yZUZpbGVzLmxlbmd0aDtpKyspey8vIHdlIGRvbid0IGVuZCBhZnRlciBtYXRjaCBpbiBiZWZvcmVGaWxlcyB0byBhbGxvd1xuLy8gY29udGludWluZyB0aHJvdWdoIGFsbCBiZWZvcmVGaWxlcyByZXdyaXRlc1xuaGFuZGxlUmV3cml0ZShyZXdyaXRlcy5iZWZvcmVGaWxlc1tpXSk7fW1hdGNoZWRQYWdlPXBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpO2lmKCFtYXRjaGVkUGFnZSl7aWYoIWZpbmlzaGVkKXtmb3IobGV0IGk9MDtpPHJld3JpdGVzLmFmdGVyRmlsZXMubGVuZ3RoO2krKyl7aWYoaGFuZGxlUmV3cml0ZShyZXdyaXRlcy5hZnRlckZpbGVzW2ldKSl7ZmluaXNoZWQ9dHJ1ZTticmVhazt9fX0vLyBjaGVjayBkeW5hbWljIHJvdXRlIGJlZm9yZSBwcm9jZXNzaW5nIGZhbGxiYWNrIHJld3JpdGVzXG5pZighZmluaXNoZWQpe3Jlc29sdmVkSHJlZj1yZXNvbHZlSHJlZihmc1BhdGhuYW1lKTttYXRjaGVkUGFnZT1wYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpO2ZpbmlzaGVkPW1hdGNoZWRQYWdlO31pZighZmluaXNoZWQpe2ZvcihsZXQgaT0wO2k8cmV3cml0ZXMuZmFsbGJhY2subGVuZ3RoO2krKyl7aWYoaGFuZGxlUmV3cml0ZShyZXdyaXRlcy5mYWxsYmFja1tpXSkpe2ZpbmlzaGVkPXRydWU7YnJlYWs7fX19fXJldHVybnthc1BhdGgscGFyc2VkQXMsbWF0Y2hlZFBhZ2UscmVzb2x2ZWRIcmVmfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNvbHZlLXJld3JpdGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlJ1xyXG5pbXBvcnQgTURYQ29tcG9uZW50cyBmcm9tICdAL2NvbXBvbmVudHMvTURYQ29tcG9uZW50cydcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICdAL2NvbXBvbmVudHMvUGFnZVRpdGxlJ1xyXG5pbXBvcnQgUG9zdExheW91dCBmcm9tICdAL2xheW91dHMvUG9zdExheW91dCdcclxuaW1wb3J0IGdlbmVyYXRlUnNzIGZyb20gJ0AvbGliL2dlbmVyYXRlLXJzcydcclxuaW1wb3J0IHsgZm9ybWF0U2x1ZywgZ2V0QWxsRmlsZXNGcm9udE1hdHRlciwgZ2V0RmlsZUJ5U2x1ZywgZ2V0RmlsZXMgfSBmcm9tICdAL2xpYi9tZHgnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSBnZXRGaWxlcygnYmxvZycpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHApID0+ICh7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHNsdWc6IGZvcm1hdFNsdWcocCkuc3BsaXQoJy8nKSxcclxuICAgICAgfSxcclxuICAgIH0pKSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxGaWxlc0Zyb250TWF0dGVyKCdibG9nJylcclxuICBjb25zdCBwb3N0SW5kZXggPSBhbGxQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IGZvcm1hdFNsdWcocG9zdC5zbHVnKSA9PT0gcGFyYW1zLnNsdWcuam9pbignLycpKVxyXG4gIGNvbnN0IHByZXYgPSBhbGxQb3N0c1twb3N0SW5kZXggKyAxXSB8fCBudWxsXHJcbiAgY29uc3QgbmV4dCA9IGFsbFBvc3RzW3Bvc3RJbmRleCAtIDFdIHx8IG51bGxcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0RmlsZUJ5U2x1ZygnYmxvZycsIHBhcmFtcy5zbHVnLmpvaW4oJy8nKSlcclxuXHJcbiAgLy8gcnNzXHJcbiAgY29uc3QgcnNzID0gZ2VuZXJhdGVSc3MoYWxsUG9zdHMpXHJcbiAgZnMud3JpdGVGaWxlU3luYygnLi9wdWJsaWMvaW5kZXgueG1sJywgcnNzKVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBwb3N0LCBwcmV2LCBuZXh0IH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHsgcG9zdCwgcHJldiwgbmV4dCB9KSB7XHJcbiAgY29uc3QgeyBtZHhTb3VyY2UsIGZyb250TWF0dGVyIH0gPSBwb3N0XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZnJvbnRNYXR0ZXIuZHJhZnQgIT09IHRydWUgPyAoXHJcbiAgICAgICAgPFBvc3RMYXlvdXQgZnJvbnRNYXR0ZXI9e2Zyb250TWF0dGVyfSBwcmV2PXtwcmV2fSBuZXh0PXtuZXh0fT5cclxuICAgICAgICAgIDxNRFhSZW1vdGUgey4uLm1keFNvdXJjZX0gY29tcG9uZW50cz17TURYQ29tcG9uZW50c30gLz5cclxuICAgICAgICA8L1Bvc3RMYXlvdXQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPFBhZ2VUaXRsZT5cclxuICAgICAgICAgICAgVW5kZXIgQ29uc3RydWN0aW9ueycgJ31cclxuICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJyb2Fkd29yayBzaWduXCI+XHJcbiAgICAgICAgICAgICAg8J+ap1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1BhZ2VUaXRsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXBib3gvcmVoeXBlLXByaXNtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltYWdlLXNpemVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtbWR4LXJlbW90ZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRpbmctdGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVoeXBlLWthdGV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstYXV0b2xpbmstaGVhZGluZ3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1jb2RlLXRpdGxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLW1hdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1zbHVnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmlzdC11dGlsLXZpc2l0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9