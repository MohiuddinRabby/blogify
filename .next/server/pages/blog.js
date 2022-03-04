(function() {
var exports = {};
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
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

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Link */ "./components/Link.js");

var _jsxFileName = "E:\\blogify\\components\\Pagination.js";

function Pagination({
  totalPages,
  currentPage
}) {
  const prevPage = parseInt(currentPage) - 1 > 0;
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pt-6 pb-8 space-y-2 md:space-y-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "flex justify-between",
      children: [!prevPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        rel: "previous",
        className: "cursor-auto disabled:opacity-50",
        disabled: !prevPage,
        children: "Previous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this), prevPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__.default, {
        href: currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          rel: "previous",
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [currentPage, " of ", totalPages]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), !nextPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        rel: "next",
        className: "cursor-auto disabled:opacity-50",
        disabled: !nextPage,
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), nextPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__.default, {
        href: `/blog/page/${currentPage + 1}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          rel: "next",
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
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

/***/ "./layouts/ListLayout.js":
/*!*******************************!*\
  !*** ./layouts/ListLayout.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Link */ "./components/Link.js");
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Tag */ "./components/Tag.js");
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/siteMetadata */ "./data/siteMetadata.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Pagination */ "./components/Pagination.js");


var _jsxFileName = "E:\\blogify\\layouts\\ListLayout.js";





const postDateTemplate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination
}) {
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const filteredBlogPosts = posts.filter(frontMatter => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  }); // If initialDisplayPosts exist, display it if no searchValue is specified

  const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "divide-y",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pt-6 pb-8 space-y-2 md:space-y-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative max-w-lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            "aria-label": "Search articles",
            type: "text",
            onChange: e => setSearchValue(e.target.value),
            placeholder: "Search articles",
            className: "block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            className: "absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [!filteredBlogPosts.length && 'No posts found.', displayPosts.map(frontMatter => {
          const {
            slug,
            date,
            title,
            summary,
            tags
          } = frontMatter;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "py-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
              className: "space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dl", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dt", {
                  className: "sr-only",
                  children: "Published on"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dd", {
                  className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
                    dateTime: date,
                    children: new Date(date).toLocaleDateString(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__.locale, postDateTemplate)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "space-y-3 xl:col-span-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    className: "text-2xl font-bold leading-8 tracking-tight",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__.default, {
                      href: `/blog/${slug}`,
                      className: "text-gray-900 dark:text-gray-100",
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-wrap",
                    children: tags.map(tag => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tag__WEBPACK_IMPORTED_MODULE_2__.default, {
                      text: tag
                    }, tag, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 27
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "prose text-gray-500 max-w-none dark:text-gray-400",
                  children: summary
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this)
          }, slug, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), pagination && pagination.totalPages > 1 && !searchValue && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__.default, {
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

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

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSTS_PER_PAGE": function() { return /* binding */ POSTS_PER_PAGE; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Blog; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mdx */ "./lib/mdx.js");
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/siteMetadata */ "./data/siteMetadata.json");
/* harmony import */ var _layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/ListLayout */ "./layouts/ListLayout.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SEO */ "./components/SEO.js");


var _jsxFileName = "E:\\blogify\\pages\\blog.js";




const POSTS_PER_PAGE = 10;
async function getStaticProps() {
  const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__.getAllFilesFrontMatter)('blog');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  };
  return {
    props: {
      initialDisplayPosts,
      posts,
      pagination
    }
  };
}
function Blog({
  posts,
  initialDisplayPosts,
  pagination
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_4__.PageSeo, {
      title: `Blog - ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.author}`,
      description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.description,
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.siteUrl}/blog`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
      posts: posts,
      initialDisplayPosts: initialDisplayPosts,
      pagination: pagination,
      title: "All Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/blog.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvTGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvU0VPLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9jb21wb25lbnRzL1RhZy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGF5b3V0cy9MaXN0TGF5b3V0LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9saWIvaW1nLXRvLWpzeC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL21keC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL3V0aWxzL2ZpbGVzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9saWIvdXRpbHMva2ViYWJDYXNlLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2guanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vcGFnZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiQG1hcGJveC9yZWh5cGUtcHJpc21cIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiaW1hZ2Utc2l6ZVwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInJlYWRpbmctdGltZVwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZWh5cGUta2F0ZXhcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVtYXJrLWF1dG9saW5rLWhlYWRpbmdzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInJlbWFyay1jb2RlLXRpdGxlc1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZW1hcmstbWF0aFwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZW1hcmstc2x1Z1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJ1bmlzdC11dGlsLXZpc2l0XCIiXSwibmFtZXMiOlsiSW1hZ2UiLCJyZXN0IiwiQ3VzdG9tTGluayIsImhyZWYiLCJpc0ludGVybmFsTGluayIsInN0YXJ0c1dpdGgiLCJpc0FuY2hvckxpbmsiLCJNRFhDb21wb25lbnRzIiwiYSIsIlBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwiY3VycmVudFBhZ2UiLCJwcmV2UGFnZSIsInBhcnNlSW50IiwibmV4dFBhZ2UiLCJTRU8iLCJ0aXRsZSIsInNpdGVNZXRhZGF0YSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwidHlwZSIsImxvY2FsZSIsInVybCIsImltYWdlcyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlciIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsImFkZGl0aW9uYWxNZXRhVGFncyIsIm5hbWUiLCJjb250ZW50IiwiYXV0aG9yIiwiUGFnZVNlbyIsIkJsb2dTZW8iLCJzdW1tYXJ5IiwiZGF0ZSIsImxhc3Rtb2QiLCJ0YWdzIiwicHVibGlzaGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJtb2RpZmllZEF0IiwiaW1hZ2VzQXJyIiwibGVuZ3RoIiwiZmVhdHVyZWRJbWFnZXMiLCJtYXAiLCJpbWciLCJhcnRpY2xlIiwicHVibGlzaGVkVGltZSIsIm1vZGlmaWVkVGltZSIsImF1dGhvcnMiLCJUYWciLCJ0ZXh0Iiwia2ViYWJDYXNlIiwic3BsaXQiLCJqb2luIiwicG9zdERhdGVUZW1wbGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsIkxpc3RMYXlvdXQiLCJwb3N0cyIsImluaXRpYWxEaXNwbGF5UG9zdHMiLCJwYWdpbmF0aW9uIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInVzZVN0YXRlIiwiZmlsdGVyZWRCbG9nUG9zdHMiLCJmaWx0ZXIiLCJmcm9udE1hdHRlciIsInNlYXJjaENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGlzcGxheVBvc3RzIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2x1ZyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRhZyIsInZpc2l0IiwicmVxdWlyZSIsInNpemVPZiIsImZzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9wdGlvbnMiLCJ0cmVlIiwibm9kZSIsImNoaWxkcmVuIiwic29tZSIsIm4iLCJpbWFnZU5vZGUiLCJmaW5kIiwiZXhpc3RzU3luYyIsInByb2Nlc3MiLCJjd2QiLCJkaW1lbnNpb25zIiwicm9vdCIsInRva2VuQ2xhc3NOYW1lcyIsImRlbGV0ZWQiLCJpbnNlcnRlZCIsInB1bmN0dWF0aW9uIiwia2V5d29yZCIsInN0cmluZyIsImZ1bmN0aW9uIiwiYm9vbGVhbiIsImNvbW1lbnQiLCJnZXRGaWxlcyIsInByZWZpeFBhdGhzIiwicGF0aCIsImZpbGVzIiwiZ2V0QWxsRmlsZXNSZWN1cnNpdmVseSIsImZpbGUiLCJzbGljZSIsInJlcGxhY2UiLCJmb3JtYXRTbHVnIiwiZGF0ZVNvcnREZXNjIiwiYiIsImdldEZpbGVCeVNsdWciLCJtZHhQYXRoIiwibWRQYXRoIiwic291cmNlIiwiZGF0YSIsIm1hdHRlciIsIm1keFNvdXJjZSIsInNlcmlhbGl6ZSIsImNvbXBvbmVudHMiLCJtZHhPcHRpb25zIiwicmVtYXJrUGx1Z2lucyIsImltZ1RvSnN4IiwiaW5saW5lTm90ZXMiLCJyZWh5cGVQbHVnaW5zIiwiaW5kZXgiLCJwYXJlbnQiLCJ0b2tlbiIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJyZWFkaW5nVGltZSIsImZpbGVOYW1lIiwiZ2V0QWxsRmlsZXNGcm9udE1hdHRlciIsImZvbGRlciIsImFsbEZyb250TWF0dGVyIiwiZm9yRWFjaCIsImRyYWZ0IiwicHVzaCIsInNvcnQiLCJwaXBlIiwiZm5zIiwieCIsInJlZHVjZSIsInYiLCJmIiwiZmxhdHRlbkFycmF5IiwiaW5wdXQiLCJhY2MiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwiZm4iLCJ3YWxrRGlyIiwiZnVsbFBhdGgiLCJpc0ZpbGUiLCJwYXRoSm9pblByZWZpeCIsInByZWZpeCIsImV4dHJhUGF0aCIsInN0ciIsIm1hdGNoIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsImV4ZWMiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwiU2V0IiwidyIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJnZXRJbnQiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiU3RyaW5nIiwiaXNOYU4iLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaWNlIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJtYXRjaEhhcyIsImNvbXBpbGVOb25QYXRoIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiZ2V0U2FmZVBhcmFtTmFtZSIsInBhcmFtTmFtZSIsIm5ld1BhcmFtTmFtZSIsImNoYXJDb2RlIiwiY2hhckNvZGVBdCIsInJlcSIsImluaXRpYWxRdWVyeVZhbHVlcyIsInZhbHVlcyIsIl9fTkVYVF9JTklUX1FVRVJZIiwiYWxsTWF0Y2giLCJoYXNJdGVtIiwiaGVhZGVycyIsImNvb2tpZXMiLCJSZWdFeHAiLCJtYXRjaGVzIiwiZ3JvdXBLZXkiLCJjb21waWxlIiwidmFsaWRhdGUiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyc2VkRGVzdGluYXRpb24iLCJoYWRMb2NhbGUiLCJfX25leHRMb2NhbGUiLCJfX25leHREZWZhdWx0TG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJwYXJhbUtleXMiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsInJlc29sdmVSZXdyaXRlcyIsIl9wYXRoTWF0Y2giLCJfcHJlcGFyZURlc3RpbmF0aW9uIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwiZnNQYXRobmFtZSIsImhhbmRsZVJld3JpdGUiLCJyZXdyaXRlIiwiaGFzUGFyYW1zIiwiY29va2llIiwiZGVzdFJlcyIsImZpbmlzaGVkIiwiYmVmb3JlRmlsZXMiLCJhZnRlckZpbGVzIiwiZmFsbGJhY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4IiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiUE9TVFNfUEVSX1BBR0UiLCJnZXRTdGF0aWNQcm9wcyIsImNlaWwiLCJCbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2RBOztBQUNBLE1BQU1BLEtBQUssR0FBRztBQUFBLE1BQU1DLElBQU47QUFBQSxzQkFBaUIsOERBQUMsbURBQUQsb0JBQWVBLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFqQjtBQUFBLENBQWQ7O0FBRUEsK0RBQWVELEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNM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K0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLGtEOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IE5leHRJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FsdC10ZXh0XHJcbmNvbnN0IEltYWdlID0gKHsgLi4ucmVzdCB9KSA9PiA8TmV4dEltYWdlIHsuLi5yZXN0fSAvPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50ICovXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IEN1c3RvbUxpbmsgPSAoeyBocmVmLCAuLi5yZXN0IH0pID0+IHtcclxuICBjb25zdCBpc0ludGVybmFsTGluayA9IGhyZWYgJiYgaHJlZi5zdGFydHNXaXRoKCcvJylcclxuICBjb25zdCBpc0FuY2hvckxpbmsgPSBocmVmICYmIGhyZWYuc3RhcnRzV2l0aCgnIycpXHJcblxyXG4gIGlmIChpc0ludGVybmFsTGluaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgPGEgey4uLnJlc3R9IC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGlmIChpc0FuY2hvckxpbmspIHtcclxuICAgIHJldHVybiA8YSBocmVmPXtocmVmfSB7Li4ucmVzdH0gLz5cclxuICB9XHJcblxyXG4gIHJldHVybiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17aHJlZn0gey4uLnJlc3R9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUxpbmtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnXHJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gJy4vTGluaydcclxuXHJcbmNvbnN0IE1EWENvbXBvbmVudHMgPSB7XHJcbiAgSW1hZ2UsXHJcbiAgYTogQ3VzdG9tTGluayxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTURYQ29tcG9uZW50c1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICdAL2NvbXBvbmVudHMvTGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSB9KSB7XHJcbiAgY29uc3QgcHJldlBhZ2UgPSBwYXJzZUludChjdXJyZW50UGFnZSkgLSAxID4gMFxyXG4gIGNvbnN0IG5leHRQYWdlID0gcGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSA8PSBwYXJzZUludCh0b3RhbFBhZ2VzKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTggc3BhY2UteS0yIG1kOnNwYWNlLXktNVwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgeyFwcmV2UGFnZSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIHJlbD1cInByZXZpb3VzXCIgY2xhc3NOYW1lPVwiY3Vyc29yLWF1dG8gZGlzYWJsZWQ6b3BhY2l0eS01MFwiIGRpc2FibGVkPXshcHJldlBhZ2V9PlxyXG4gICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJldlBhZ2UgJiYgKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17Y3VycmVudFBhZ2UgLSAxID09PSAxID8gYC9ibG9nL2AgOiBgL2Jsb2cvcGFnZS8ke2N1cnJlbnRQYWdlIC0gMX1gfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiByZWw9XCJwcmV2aW91c1wiPlByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHtjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHshbmV4dFBhZ2UgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiByZWw9XCJuZXh0XCIgY2xhc3NOYW1lPVwiY3Vyc29yLWF1dG8gZGlzYWJsZWQ6b3BhY2l0eS01MFwiIGRpc2FibGVkPXshbmV4dFBhZ2V9PlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtuZXh0UGFnZSAmJiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvcGFnZS8ke2N1cnJlbnRQYWdlICsgMX1gfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiByZWw9XCJuZXh0XCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IE5leHRTZW8sIEFydGljbGVKc29uTGQgfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IHNpdGVNZXRhZGF0YSBmcm9tICdAL2RhdGEvc2l0ZU1ldGFkYXRhJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTyA9IHtcclxuICB0aXRsZTogc2l0ZU1ldGFkYXRhLnRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uOiBzaXRlTWV0YWRhdGEuZGVzY3JpcHRpb24sXHJcbiAgb3BlbkdyYXBoOiB7XHJcbiAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICBsb2NhbGU6IHNpdGVNZXRhZGF0YS5sYW5ndWFnZSxcclxuICAgIHVybDogc2l0ZU1ldGFkYXRhLnNpdGVVcmwsXHJcbiAgICB0aXRsZTogc2l0ZU1ldGFkYXRhLnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IHNpdGVNZXRhZGF0YS5kZXNjcmlwdGlvbixcclxuICAgIGltYWdlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiBgJHtzaXRlTWV0YWRhdGEuc2l0ZVVybH0ke3NpdGVNZXRhZGF0YS5zb2NpYWxCYW5uZXJ9YCxcclxuICAgICAgICBhbHQ6IHNpdGVNZXRhZGF0YS50aXRsZSxcclxuICAgICAgICB3aWR0aDogMTIwMCxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB0d2l0dGVyOiB7XHJcbiAgICBoYW5kbGU6IHNpdGVNZXRhZGF0YS50d2l0dGVyLFxyXG4gICAgc2l0ZTogc2l0ZU1ldGFkYXRhLnR3aXR0ZXIsXHJcbiAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxyXG4gIH0sXHJcbiAgYWRkaXRpb25hbE1ldGFUYWdzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdhdXRob3InLFxyXG4gICAgICBjb250ZW50OiBzaXRlTWV0YWRhdGEuYXV0aG9yLFxyXG4gICAgfSxcclxuICBdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVNlbyA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRTZW9cclxuICAgICAgdGl0bGU9e2Ake3RpdGxlfSDigJMgJHtzaXRlTWV0YWRhdGEudGl0bGV9YH1cclxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICBjYW5vbmljYWw9e3VybH1cclxuICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nU2VvID0gKHsgdGl0bGUsIHN1bW1hcnksIGRhdGUsIGxhc3Rtb2QsIHVybCwgdGFncywgaW1hZ2VzID0gW10gfSkgPT4ge1xyXG4gIGNvbnN0IHB1Ymxpc2hlZEF0ID0gbmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKVxyXG4gIGNvbnN0IG1vZGlmaWVkQXQgPSBuZXcgRGF0ZShsYXN0bW9kIHx8IGRhdGUpLnRvSVNPU3RyaW5nKClcclxuICBsZXQgaW1hZ2VzQXJyID1cclxuICAgIGltYWdlcy5sZW5ndGggPT09IDBcclxuICAgICAgPyBbc2l0ZU1ldGFkYXRhLnNvY2lhbEJhbm5lcl1cclxuICAgICAgOiB0eXBlb2YgaW1hZ2VzID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IFtpbWFnZXNdXHJcbiAgICAgIDogaW1hZ2VzXHJcblxyXG4gIGNvbnN0IGZlYXR1cmVkSW1hZ2VzID0gaW1hZ2VzQXJyLm1hcCgoaW1nKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cmw6IGAke3NpdGVNZXRhZGF0YS5zaXRlVXJsfSR7aW1nfWAsXHJcbiAgICAgIGFsdDogdGl0bGUsXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9e2Ake3RpdGxlfSDigJMgJHtzaXRlTWV0YWRhdGEudGl0bGV9YH1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c3VtbWFyeX1cclxuICAgICAgICBjYW5vbmljYWw9e3VybH1cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHR5cGU6ICdhcnRpY2xlJyxcclxuICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgcHVibGlzaGVkVGltZTogcHVibGlzaGVkQXQsXHJcbiAgICAgICAgICAgIG1vZGlmaWVkVGltZTogbW9kaWZpZWRBdCxcclxuICAgICAgICAgICAgYXV0aG9yczogW2Ake3NpdGVNZXRhZGF0YS5zaXRlVXJsfS9hYm91dGBdLFxyXG4gICAgICAgICAgICB0YWdzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVybCxcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHN1bW1hcnksXHJcbiAgICAgICAgICBpbWFnZXM6IGZlYXR1cmVkSW1hZ2VzLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYWRkaXRpb25hbE1ldGFUYWdzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0d2l0dGVyOmltYWdlJyxcclxuICAgICAgICAgICAgY29udGVudDogZmVhdHVyZWRJbWFnZXNbMF0udXJsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8QXJ0aWNsZUpzb25MZFxyXG4gICAgICAgIGF1dGhvck5hbWU9e3NpdGVNZXRhZGF0YS5hdXRob3J9XHJcbiAgICAgICAgZGF0ZU1vZGlmaWVkPXttb2RpZmllZEF0fVxyXG4gICAgICAgIGRhdGVQdWJsaXNoZWQ9e3B1Ymxpc2hlZEF0fVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtzdW1tYXJ5fVxyXG4gICAgICAgIGltYWdlcz17ZmVhdHVyZWRJbWFnZXN9XHJcbiAgICAgICAgcHVibGlzaGVyTmFtZT17c2l0ZU1ldGFkYXRhLmF1dGhvcn1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgdXJsPXt1cmx9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQga2ViYWJDYXNlIGZyb20gJ0AvbGliL3V0aWxzL2tlYmFiQ2FzZSdcclxuXHJcbmNvbnN0IFRhZyA9ICh7IHRleHQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgL3RhZ3MvJHtrZWJhYkNhc2UodGV4dCl9YH0+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsdWUtNTAwIHVwcGVyY2FzZSBob3Zlcjp0ZXh0LWJsdWUtNjAwIGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMFwiPlxyXG4gICAgICAgIHt0ZXh0LnNwbGl0KCcgJykuam9pbignLScpfVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnQC9jb21wb25lbnRzL0xpbmsnXHJcbmltcG9ydCBUYWcgZnJvbSAnQC9jb21wb25lbnRzL1RhZydcclxuaW1wb3J0IHNpdGVNZXRhZGF0YSBmcm9tICdAL2RhdGEvc2l0ZU1ldGFkYXRhJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvUGFnaW5hdGlvbidcclxuXHJcbmNvbnN0IHBvc3REYXRlVGVtcGxhdGUgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdExheW91dCh7IHBvc3RzLCB0aXRsZSwgaW5pdGlhbERpc3BsYXlQb3N0cyA9IFtdLCBwYWdpbmF0aW9uIH0pIHtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGZpbHRlcmVkQmxvZ1Bvc3RzID0gcG9zdHMuZmlsdGVyKChmcm9udE1hdHRlcikgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoQ29udGVudCA9IGZyb250TWF0dGVyLnRpdGxlICsgZnJvbnRNYXR0ZXIuc3VtbWFyeSArIGZyb250TWF0dGVyLnRhZ3Muam9pbignICcpXHJcbiAgICByZXR1cm4gc2VhcmNoQ29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgfSlcclxuXHJcbiAgLy8gSWYgaW5pdGlhbERpc3BsYXlQb3N0cyBleGlzdCwgZGlzcGxheSBpdCBpZiBubyBzZWFyY2hWYWx1ZSBpcyBzcGVjaWZpZWRcclxuICBjb25zdCBkaXNwbGF5UG9zdHMgPVxyXG4gICAgaW5pdGlhbERpc3BsYXlQb3N0cy5sZW5ndGggPiAwICYmICFzZWFyY2hWYWx1ZSA/IGluaXRpYWxEaXNwbGF5UG9zdHMgOiBmaWx0ZXJlZEJsb2dQb3N0c1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGUteVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi04IHNwYWNlLXktMiBtZDpzcGFjZS15LTVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLTkgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgc206dGV4dC00eGwgc206bGVhZGluZy0xMCBtZDp0ZXh0LTZ4bCBtZDpsZWFkaW5nLTE0XCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LWxnXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggYXJ0aWNsZXNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB4LTQgcHktMiB0ZXh0LWdyYXktOTAwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBkYXJrOmJvcmRlci1ncmF5LTkwMCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTEwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTUgaC01IHRleHQtZ3JheS00MDAgcmlnaHQtMyB0b3AtMyBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgeyFmaWx0ZXJlZEJsb2dQb3N0cy5sZW5ndGggJiYgJ05vIHBvc3RzIGZvdW5kLid9XHJcbiAgICAgICAgICB7ZGlzcGxheVBvc3RzLm1hcCgoZnJvbnRNYXR0ZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBzbHVnLCBkYXRlLCB0aXRsZSwgc3VtbWFyeSwgdGFncyB9ID0gZnJvbnRNYXR0ZXJcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtzbHVnfSBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJzcGFjZS15LTIgeGw6Z3JpZCB4bDpncmlkLWNvbHMtNCB4bDpzcGFjZS15LTAgeGw6aXRlbXMtYmFzZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHVibGlzaGVkIG9uPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e2RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHNpdGVNZXRhZGF0YS5sb2NhbGUsIHBvc3REYXRlVGVtcGxhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIHhsOmNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBsZWFkaW5nLTggdHJhY2tpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7c2x1Z31gfSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGtleT17dGFnfSB0ZXh0PXt0YWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSB0ZXh0LWdyYXktNTAwIG1heC13LW5vbmUgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwYWdpbmF0aW9uICYmIHBhZ2luYXRpb24udG90YWxQYWdlcyA+IDEgJiYgIXNlYXJjaFZhbHVlICYmIChcclxuICAgICAgICA8UGFnaW5hdGlvbiBjdXJyZW50UGFnZT17cGFnaW5hdGlvbi5jdXJyZW50UGFnZX0gdG90YWxQYWdlcz17cGFnaW5hdGlvbi50b3RhbFBhZ2VzfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImNvbnN0IHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXHJcbmNvbnN0IHNpemVPZiA9IHJlcXVpcmUoJ2ltYWdlLXNpemUnKVxyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKG9wdGlvbnMpID0+ICh0cmVlKSA9PiB7XHJcbiAgdmlzaXQoXHJcbiAgICB0cmVlLFxyXG4gICAgLy8gb25seSB2aXNpdCBwIHRhZ3MgdGhhdCBjb250YWluIGFuIGltZyBlbGVtZW50XHJcbiAgICAobm9kZSkgPT4gbm9kZS50eXBlID09PSAncGFyYWdyYXBoJyAmJiBub2RlLmNoaWxkcmVuLnNvbWUoKG4pID0+IG4udHlwZSA9PT0gJ2ltYWdlJyksXHJcbiAgICAobm9kZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZU5vZGUgPSBub2RlLmNoaWxkcmVuLmZpbmQoKG4pID0+IG4udHlwZSA9PT0gJ2ltYWdlJylcclxuXHJcbiAgICAgIC8vIG9ubHkgbG9jYWwgZmlsZXNcclxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYCR7cHJvY2Vzcy5jd2QoKX0vcHVibGljJHtpbWFnZU5vZGUudXJsfWApKSB7XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHNpemVPZihgJHtwcm9jZXNzLmN3ZCgpfS9wdWJsaWMke2ltYWdlTm9kZS51cmx9YClcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBvcmlnaW5hbCBub2RlIHRvIG5leHQvaW1hZ2VcclxuICAgICAgICBpbWFnZU5vZGUudHlwZSA9ICdqc3gnXHJcbiAgICAgICAgaW1hZ2VOb2RlLnZhbHVlID0gYDxJbWFnZVxyXG4gICAgICAgICAgYWx0PXtcXGAke2ltYWdlTm9kZS5hbHR9XFxgfSBcclxuICAgICAgICAgIHNyYz17XFxgJHtpbWFnZU5vZGUudXJsfVxcYH1cclxuICAgICAgICAgIHdpZHRoPXske2RpbWVuc2lvbnMud2lkdGh9fVxyXG4gICAgICAgICAgaGVpZ2h0PXske2RpbWVuc2lvbnMuaGVpZ2h0fX1cclxuICAgICAgLz5gXHJcblxyXG4gICAgICAgIC8vIENoYW5nZSBub2RlIHR5cGUgZnJvbSBwIHRvIGRpdiB0byBhdm9pZCBuZXN0aW5nIGVycm9yXHJcbiAgICAgICAgbm9kZS50eXBlID0gJ2RpdidcclxuICAgICAgICBub2RlLmNoaWxkcmVuID0gW2ltYWdlTm9kZV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgTURYQ29tcG9uZW50cyBmcm9tICdAL2NvbXBvbmVudHMvTURYQ29tcG9uZW50cydcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICduZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgcmVhZGluZ1RpbWUgZnJvbSAncmVhZGluZy10aW1lJ1xyXG5pbXBvcnQgdmlzaXQgZnJvbSAndW5pc3QtdXRpbC12aXNpdCdcclxuaW1wb3J0IGltZ1RvSnN4IGZyb20gJy4vaW1nLXRvLWpzeCdcclxuaW1wb3J0IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkgZnJvbSAnLi91dGlscy9maWxlcydcclxuXHJcbmNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXHJcblxyXG5jb25zdCB0b2tlbkNsYXNzTmFtZXMgPSB7XHJcbiAgdGFnOiAndGV4dC1jb2RlLXJlZCcsXHJcbiAgJ2F0dHItbmFtZSc6ICd0ZXh0LWNvZGUteWVsbG93JyxcclxuICAnYXR0ci12YWx1ZSc6ICd0ZXh0LWNvZGUtZ3JlZW4nLFxyXG4gIGRlbGV0ZWQ6ICd0ZXh0LWNvZGUtcmVkJyxcclxuICBpbnNlcnRlZDogJ3RleHQtY29kZS1ncmVlbicsXHJcbiAgcHVuY3R1YXRpb246ICd0ZXh0LWNvZGUtd2hpdGUnLFxyXG4gIGtleXdvcmQ6ICd0ZXh0LWNvZGUtcHVycGxlJyxcclxuICBzdHJpbmc6ICd0ZXh0LWNvZGUtZ3JlZW4nLFxyXG4gIGZ1bmN0aW9uOiAndGV4dC1jb2RlLWJsdWUnLFxyXG4gIGJvb2xlYW46ICd0ZXh0LWNvZGUtcmVkJyxcclxuICBjb21tZW50OiAndGV4dC1ncmF5LTQwMCBpdGFsaWMnLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZXModHlwZSkge1xyXG4gIGNvbnN0IHByZWZpeFBhdGhzID0gcGF0aC5qb2luKHJvb3QsICdkYXRhJywgdHlwZSlcclxuICBjb25zdCBmaWxlcyA9IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkocHJlZml4UGF0aHMpXHJcbiAgLy8gT25seSB3YW50IHRvIHJldHVybiBibG9nL3BhdGggYW5kIGlnbm9yZSByb290LCByZXBsYWNlIGlzIG5lZWRlZCB0byB3b3JrIG9uIFdpbmRvd3NcclxuICByZXR1cm4gZmlsZXMubWFwKChmaWxlKSA9PiBmaWxlLnNsaWNlKHByZWZpeFBhdGhzLmxlbmd0aCArIDEpLnJlcGxhY2UoL1xcXFwvZywgJy8nKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNsdWcoc2x1Zykge1xyXG4gIHJldHVybiBzbHVnLnJlcGxhY2UoL1xcLihtZHh8bWQpLywgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRlU29ydERlc2MoYSwgYikge1xyXG4gIGlmIChhID4gYikgcmV0dXJuIC0xXHJcbiAgaWYgKGEgPCBiKSByZXR1cm4gMVxyXG4gIHJldHVybiAwXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlQnlTbHVnKHR5cGUsIHNsdWcpIHtcclxuICBjb25zdCBtZHhQYXRoID0gcGF0aC5qb2luKHJvb3QsICdkYXRhJywgdHlwZSwgYCR7c2x1Z30ubWR4YClcclxuICBjb25zdCBtZFBhdGggPSBwYXRoLmpvaW4ocm9vdCwgJ2RhdGEnLCB0eXBlLCBgJHtzbHVnfS5tZGApXHJcbiAgY29uc3Qgc291cmNlID0gZnMuZXhpc3RzU3luYyhtZHhQYXRoKVxyXG4gICAgPyBmcy5yZWFkRmlsZVN5bmMobWR4UGF0aCwgJ3V0ZjgnKVxyXG4gICAgOiBmcy5yZWFkRmlsZVN5bmMobWRQYXRoLCAndXRmOCcpXHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKHNvdXJjZSlcclxuICBjb25zdCBtZHhTb3VyY2UgPSBhd2FpdCBzZXJpYWxpemUoY29udGVudCwge1xyXG4gICAgY29tcG9uZW50czogTURYQ29tcG9uZW50cyxcclxuICAgIG1keE9wdGlvbnM6IHtcclxuICAgICAgcmVtYXJrUGx1Z2luczogW1xyXG4gICAgICAgIHJlcXVpcmUoJ3JlbWFyay1zbHVnJyksXHJcbiAgICAgICAgcmVxdWlyZSgncmVtYXJrLWF1dG9saW5rLWhlYWRpbmdzJyksXHJcbiAgICAgICAgcmVxdWlyZSgncmVtYXJrLWNvZGUtdGl0bGVzJyksXHJcbiAgICAgICAgcmVxdWlyZSgncmVtYXJrLW1hdGgnKSxcclxuICAgICAgICBpbWdUb0pzeCxcclxuICAgICAgXSxcclxuICAgICAgaW5saW5lTm90ZXM6IHRydWUsXHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcclxuICAgICAgICByZXF1aXJlKCdyZWh5cGUta2F0ZXgnKSxcclxuICAgICAgICByZXF1aXJlKCdAbWFwYm94L3JlaHlwZS1wcmlzbScpLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAodHJlZSkgPT4ge1xyXG4gICAgICAgICAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlLCBpbmRleCwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IFt0b2tlbiwgdHlwZV0gPSBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lIHx8IFtdXHJcbiAgICAgICAgICAgICAgaWYgKHRva2VuID09PSAndG9rZW4nKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lID0gW3Rva2VuQ2xhc3NOYW1lc1t0eXBlXV1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1keFNvdXJjZSxcclxuICAgIGZyb250TWF0dGVyOiB7XHJcbiAgICAgIHJlYWRpbmdUaW1lOiByZWFkaW5nVGltZShjb250ZW50KSxcclxuICAgICAgc2x1Zzogc2x1ZyB8fCBudWxsLFxyXG4gICAgICBmaWxlTmFtZTogZnMuZXhpc3RzU3luYyhtZHhQYXRoKSA/IGAke3NsdWd9Lm1keGAgOiBgJHtzbHVnfS5tZGAsXHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZpbGVzRnJvbnRNYXR0ZXIoZm9sZGVyKSB7XHJcbiAgY29uc3QgcHJlZml4UGF0aHMgPSBwYXRoLmpvaW4ocm9vdCwgJ2RhdGEnLCBmb2xkZXIpXHJcblxyXG4gIGNvbnN0IGZpbGVzID0gZ2V0QWxsRmlsZXNSZWN1cnNpdmVseShwcmVmaXhQYXRocylcclxuXHJcbiAgY29uc3QgYWxsRnJvbnRNYXR0ZXIgPSBbXVxyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAvLyBSZXBsYWNlIGlzIG5lZWRlZCB0byB3b3JrIG9uIFdpbmRvd3NcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZS5zbGljZShwcmVmaXhQYXRocy5sZW5ndGggKyAxKS5yZXBsYWNlKC9cXFxcL2csICcvJylcclxuICAgIC8vIFJlbW92ZSBVbmV4cGVjdGVkIEZpbGVcclxuICAgIGlmIChwYXRoLmV4dG5hbWUoZmlsZU5hbWUpICE9PSAnLm1kJyAmJiBwYXRoLmV4dG5hbWUoZmlsZU5hbWUpICE9PSAnLm1keCcpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSwgJ3V0ZjgnKVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKVxyXG4gICAgaWYgKGRhdGEuZHJhZnQgIT09IHRydWUpIHtcclxuICAgICAgYWxsRnJvbnRNYXR0ZXIucHVzaCh7IC4uLmRhdGEsIHNsdWc6IGZvcm1hdFNsdWcoZmlsZU5hbWUpIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGFsbEZyb250TWF0dGVyLnNvcnQoKGEsIGIpID0+IGRhdGVTb3J0RGVzYyhhLmRhdGUsIGIuZGF0ZSkpXHJcbn1cclxuIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgcGlwZSA9ICguLi5mbnMpID0+ICh4KSA9PiBmbnMucmVkdWNlKCh2LCBmKSA9PiBmKHYpLCB4KVxyXG5cclxuY29uc3QgZmxhdHRlbkFycmF5ID0gKGlucHV0KSA9PlxyXG4gIGlucHV0LnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBbLi4uYWNjLCAuLi4oQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW0gOiBbaXRlbV0pXSwgW10pXHJcblxyXG5jb25zdCBtYXAgPSAoZm4pID0+IChpbnB1dCkgPT4gaW5wdXQubWFwKGZuKVxyXG5cclxuY29uc3Qgd2Fsa0RpciA9IChmdWxsUGF0aCkgPT4ge1xyXG4gIHJldHVybiBmcy5zdGF0U3luYyhmdWxsUGF0aCkuaXNGaWxlKCkgPyBmdWxsUGF0aCA6IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkoZnVsbFBhdGgpXHJcbn1cclxuXHJcbmNvbnN0IHBhdGhKb2luUHJlZml4ID0gKHByZWZpeCkgPT4gKGV4dHJhUGF0aCkgPT4gcGF0aC5qb2luKHByZWZpeCwgZXh0cmFQYXRoKVxyXG5cclxuY29uc3QgZ2V0QWxsRmlsZXNSZWN1cnNpdmVseSA9IChmb2xkZXIpID0+XHJcbiAgcGlwZShmcy5yZWFkZGlyU3luYywgbWFwKHBpcGUocGF0aEpvaW5QcmVmaXgoZm9sZGVyKSwgd2Fsa0RpcikpLCBmbGF0dGVuQXJyYXkpKGZvbGRlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbEZpbGVzUmVjdXJzaXZlbHlcclxuIiwiY29uc3Qga2ViYWJDYXNlID0gKHN0cikgPT5cclxuICBzdHIgJiZcclxuICBzdHJcclxuICAgIC5tYXRjaCgvW0EtWl17Mix9KD89W0EtWl1bYS16XStbMC05XSp8XFxiKXxbQS1aXT9bYS16XStbMC05XSp8W0EtWl18WzAtOV0rL2cpXHJcbiAgICAubWFwKCh4KSA9PiB4LnRvTG93ZXJDYXNlKCkpXHJcbiAgICAuam9pbignLScpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBrZWJhYkNhc2VcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhdGhUb1JlZ2V4cD1leHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPWV4cG9ydHMubWF0Y2hlck9wdGlvbnM9dm9pZCAwO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZXhwb3J0cy5wYXRoVG9SZWdleHA9cGF0aFRvUmVnZXhwO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Y29uc3QgbWF0Y2hlck9wdGlvbnM9e3NlbnNpdGl2ZTpmYWxzZSxkZWxpbWl0ZXI6Jy8nfTtleHBvcnRzLm1hdGNoZXJPcHRpb25zPW1hdGNoZXJPcHRpb25zO2NvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9ey4uLm1hdGNoZXJPcHRpb25zLHN0cmljdDp0cnVlfTtleHBvcnRzLmN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczt2YXIgX2RlZmF1bHQ9KGN1c3RvbVJvdXRlPWZhbHNlKT0+e3JldHVybiBwYXRoPT57Y29uc3Qga2V5cz1bXTtjb25zdCBtYXRjaGVyUmVnZXg9cGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChwYXRoLGtleXMsY3VzdG9tUm91dGU/Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczptYXRjaGVyT3B0aW9ucyk7Y29uc3QgbWF0Y2hlcj1wYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsa2V5cyk7cmV0dXJuKHBhdGhuYW1lLHBhcmFtcyk9Pntjb25zdCByZXM9cGF0aG5hbWU9PW51bGw/ZmFsc2U6bWF0Y2hlcihwYXRobmFtZSk7aWYoIXJlcyl7cmV0dXJuIGZhbHNlO31pZihjdXN0b21Sb3V0ZSl7Zm9yKGNvbnN0IGtleSBvZiBrZXlzKXsvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4vLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbmlmKHR5cGVvZiBrZXkubmFtZT09PSdudW1iZXInKXtkZWxldGUgcmVzLnBhcmFtc1trZXkubmFtZV07fX19cmV0dXJuey4uLnBhcmFtcywuLi5yZXMucGFyYW1zfTt9O307fTtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLW1hdGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWF0Y2hIYXM9bWF0Y2hIYXM7ZXhwb3J0cy5jb21waWxlTm9uUGF0aD1jb21waWxlTm9uUGF0aDtleHBvcnRzLmRlZmF1bHQ9cHJlcGFyZURlc3RpbmF0aW9uO2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT12b2lkIDA7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBlbnN1cmUgb25seSBhLXpBLVogYXJlIHVzZWQgZm9yIHBhcmFtIG5hbWVzIGZvciBwcm9wZXIgaW50ZXJwb2xhdGluZ1xuLy8gd2l0aCBwYXRoLXRvLXJlZ2V4cFxuY29uc3QgZ2V0U2FmZVBhcmFtTmFtZT1wYXJhbU5hbWU9PntsZXQgbmV3UGFyYW1OYW1lPScnO2ZvcihsZXQgaT0wO2k8cGFyYW1OYW1lLmxlbmd0aDtpKyspe2NvbnN0IGNoYXJDb2RlPXBhcmFtTmFtZS5jaGFyQ29kZUF0KGkpO2lmKGNoYXJDb2RlPjY0JiZjaGFyQ29kZTw5MXx8Ly8gQS1aXG5jaGFyQ29kZT45NiYmY2hhckNvZGU8MTIzLy8gYS16XG4pe25ld1BhcmFtTmFtZSs9cGFyYW1OYW1lW2ldO319cmV0dXJuIG5ld1BhcmFtTmFtZTt9O2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT1nZXRTYWZlUGFyYW1OYW1lO2Z1bmN0aW9uIG1hdGNoSGFzKHJlcSxoYXMscXVlcnkpe2NvbnN0IHBhcmFtcz17fTtsZXQgaW5pdGlhbFF1ZXJ5VmFsdWVzPVtdO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7aW5pdGlhbFF1ZXJ5VmFsdWVzPU9iamVjdC52YWx1ZXMocmVxLl9fTkVYVF9JTklUX1FVRVJZKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXtpbml0aWFsUXVlcnlWYWx1ZXM9QXJyYXkuZnJvbShuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkudmFsdWVzKCkpO31jb25zdCBhbGxNYXRjaD1oYXMuZXZlcnkoaGFzSXRlbT0+e2xldCB2YWx1ZTtsZXQga2V5PWhhc0l0ZW0ua2V5O3N3aXRjaChoYXNJdGVtLnR5cGUpe2Nhc2UnaGVhZGVyJzp7a2V5PWtleS50b0xvd2VyQ2FzZSgpO3ZhbHVlPXJlcS5oZWFkZXJzW2tleV07YnJlYWs7fWNhc2UnY29va2llJzp7dmFsdWU9cmVxLmNvb2tpZXNbaGFzSXRlbS5rZXldO2JyZWFrO31jYXNlJ3F1ZXJ5Jzp7Ly8gcHJlc2VydmUgaW5pdGlhbCBlbmNvZGluZyBvZiBxdWVyeSB2YWx1ZXNcbnZhbHVlPXF1ZXJ5W2tleV07aWYoaW5pdGlhbFF1ZXJ5VmFsdWVzLmluY2x1ZGVzKHZhbHVlfHwnJykpe3ZhbHVlPWVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7fWJyZWFrO31jYXNlJ2hvc3QnOntjb25zdHtob3N0fT0ocmVxPT1udWxsP3ZvaWQgMDpyZXEuaGVhZGVycyl8fHt9Oy8vIHJlbW92ZSBwb3J0IGZyb20gaG9zdCBpZiBwcmVzZW50XG5jb25zdCBob3N0bmFtZT1ob3N0PT1udWxsP3ZvaWQgMDpob3N0LnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTt2YWx1ZT1ob3N0bmFtZTticmVhazt9ZGVmYXVsdDp7YnJlYWs7fX1pZighaGFzSXRlbS52YWx1ZSYmdmFsdWUpe3BhcmFtc1tnZXRTYWZlUGFyYW1OYW1lKGtleSldPXZhbHVlO3JldHVybiB0cnVlO31lbHNlIGlmKHZhbHVlKXtjb25zdCBtYXRjaGVyPW5ldyBSZWdFeHAoYF4ke2hhc0l0ZW0udmFsdWV9JGApO2NvbnN0IG1hdGNoZXM9dmFsdWUubWF0Y2gobWF0Y2hlcik7aWYobWF0Y2hlcyl7aWYobWF0Y2hlcy5ncm91cHMpe09iamVjdC5rZXlzKG1hdGNoZXMuZ3JvdXBzKS5mb3JFYWNoKGdyb3VwS2V5PT57cGFyYW1zW2dyb3VwS2V5XT1tYXRjaGVzLmdyb3Vwc1tncm91cEtleV07fSk7fWVsc2UgaWYoaGFzSXRlbS50eXBlPT09J2hvc3QnJiZtYXRjaGVzWzBdKXtwYXJhbXMuaG9zdD1tYXRjaGVzWzBdO31yZXR1cm4gdHJ1ZTt9fXJldHVybiBmYWxzZTt9KTtpZihhbGxNYXRjaCl7cmV0dXJuIHBhcmFtczt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZSxwYXJhbXMpe2lmKCF2YWx1ZS5pbmNsdWRlcygnOicpKXtyZXR1cm4gdmFsdWU7fWZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSl7aWYodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSl7dmFsdWU9dmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9QTFVTYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwnZycpLGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gKTt9fXZhbHVlPXZhbHVlLnJlcGxhY2UoLyg6fFxcKnxcXD98XFwrfFxcKHxcXCl8XFx7fFxcfSkvZywnXFxcXCQxJykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywnKycpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCc6JykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OL2csJz8nKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csJyonKTsvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbi8vIGNvcnJlY3RseVxucmV0dXJuIHBhdGhUb1JlZ2V4cC5jb21waWxlKGAvJHt2YWx1ZX1gLHt2YWxpZGF0ZTpmYWxzZX0pKHBhcmFtcykuc3Vic3RyKDEpO31mdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oZGVzdGluYXRpb24scGFyYW1zLHF1ZXJ5LGFwcGVuZFBhcmFtc1RvUXVlcnkpe2xldCBwYXJzZWREZXN0aW5hdGlvbj17fTsvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG5xdWVyeT1PYmplY3QuYXNzaWduKHt9LHF1ZXJ5KTtjb25zdCBoYWRMb2NhbGU9cXVlcnkuX19uZXh0TG9jYWxlO2RlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGU7ZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGU7aWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtwYXJzZWREZXN0aW5hdGlvbj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7fWVsc2V7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLGhhc2gsaG9zdG5hbWUscG9ydCxwcm90b2NvbCxzZWFyY2gsaHJlZn09bmV3IFVSTChkZXN0aW5hdGlvbik7cGFyc2VkRGVzdGluYXRpb249e3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLGhhc2gscHJvdG9jb2wsaG9zdG5hbWUscG9ydCxzZWFyY2gsaHJlZn07fWNvbnN0IGRlc3RRdWVyeT1wYXJzZWREZXN0aW5hdGlvbi5xdWVyeTtjb25zdCBkZXN0UGF0aD1gJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZX0ke3BhcnNlZERlc3RpbmF0aW9uLmhhc2h8fCcnfWA7Y29uc3QgZGVzdFBhdGhQYXJhbUtleXM9W107cGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCxkZXN0UGF0aFBhcmFtS2V5cyk7Y29uc3QgZGVzdFBhdGhQYXJhbXM9ZGVzdFBhdGhQYXJhbUtleXMubWFwKGtleT0+a2V5Lm5hbWUpO2xldCBkZXN0aW5hdGlvbkNvbXBpbGVyPXBhdGhUb1JlZ2V4cC5jb21waWxlKGRlc3RQYXRoLC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4vLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2Vcbi8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbi8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxue3ZhbGlkYXRlOmZhbHNlfSk7bGV0IG5ld1VybDsvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbmZvcihjb25zdFtrZXksc3RyT3JBcnJheV1vZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKXtsZXQgdmFsdWU9QXJyYXkuaXNBcnJheShzdHJPckFycmF5KT9zdHJPckFycmF5WzBdOnN0ck9yQXJyYXk7aWYodmFsdWUpey8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuLy8gY29ycmVjdGx5XG52YWx1ZT1jb21waWxlTm9uUGF0aCh2YWx1ZSxwYXJhbXMpO31kZXN0UXVlcnlba2V5XT12YWx1ZTt9Ly8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbmxldCBwYXJhbUtleXM9T2JqZWN0LmtleXMocGFyYW1zKTsvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbmlmKGhhZExvY2FsZSl7cGFyYW1LZXlzPXBhcmFtS2V5cy5maWx0ZXIobmFtZT0+bmFtZSE9PSduZXh0SW50ZXJuYWxMb2NhbGUnKTt9aWYoYXBwZW5kUGFyYW1zVG9RdWVyeSYmIXBhcmFtS2V5cy5zb21lKGtleT0+ZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSkpe2Zvcihjb25zdCBrZXkgb2YgcGFyYW1LZXlzKXtpZighKGtleSBpbiBkZXN0UXVlcnkpKXtkZXN0UXVlcnlba2V5XT1wYXJhbXNba2V5XTt9fX10cnl7bmV3VXJsPWRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKTtjb25zdFtwYXRobmFtZSxoYXNoXT1uZXdVcmwuc3BsaXQoJyMnKTtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZT1wYXRobmFtZTtwYXJzZWREZXN0aW5hdGlvbi5oYXNoPWAke2hhc2g/JyMnOicnfSR7aGFzaHx8Jyd9YDtkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKXt0aHJvdyBuZXcgRXJyb3IoYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1tdWx0aS1tYXRjaGApO310aHJvdyBlcnI7fS8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4vLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbi8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbi8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5PXsuLi5xdWVyeSwuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeX07cmV0dXJue25ld1VybCxwYXJzZWREZXN0aW5hdGlvbn07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlcGFyZS1kZXN0aW5hdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXJlc29sdmVSZXdyaXRlczt2YXIgX3BhdGhNYXRjaD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhdGgtbWF0Y2hcIikpO3ZhciBfcHJlcGFyZURlc3RpbmF0aW9uPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3ByZXBhcmUtZGVzdGluYXRpb25cIikpO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uLy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL3JvdXRlclwiKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3QgY3VzdG9tUm91dGVNYXRjaGVyPSgwLF9wYXRoTWF0Y2guZGVmYXVsdCkodHJ1ZSk7ZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKGFzUGF0aCxwYWdlcyxyZXdyaXRlcyxxdWVyeSxyZXNvbHZlSHJlZixsb2NhbGVzKXtsZXQgbWF0Y2hlZFBhZ2U9ZmFsc2U7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7bGV0IGZzUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKCgwLF9yb3V0ZXIuZGVsQmFzZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lKSxsb2NhbGVzKS5wYXRobmFtZSk7bGV0IHJlc29sdmVkSHJlZjtjb25zdCBoYW5kbGVSZXdyaXRlPXJld3JpdGU9Pntjb25zdCBtYXRjaGVyPWN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSk7bGV0IHBhcmFtcz1tYXRjaGVyKHBhcnNlZEFzLnBhdGhuYW1lKTtpZihyZXdyaXRlLmhhcyYmcGFyYW1zKXtjb25zdCBoYXNQYXJhbXM9KDAsX3ByZXBhcmVEZXN0aW5hdGlvbi5tYXRjaEhhcykoe2hlYWRlcnM6e2hvc3Q6ZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWV9LGNvb2tpZXM6ZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpLnJlZHVjZSgoYWNjLGl0ZW0pPT57Y29uc3Rba2V5LC4uLnZhbHVlXT1pdGVtLnNwbGl0KCc9Jyk7YWNjW2tleV09dmFsdWUuam9pbignPScpO3JldHVybiBhY2M7fSx7fSl9LHJld3JpdGUuaGFzLHBhcnNlZEFzLnF1ZXJ5KTtpZihoYXNQYXJhbXMpe09iamVjdC5hc3NpZ24ocGFyYW1zLGhhc1BhcmFtcyk7fWVsc2V7cGFyYW1zPWZhbHNlO319aWYocGFyYW1zKXtpZighcmV3cml0ZS5kZXN0aW5hdGlvbil7Ly8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbnJldHVybiB0cnVlO31jb25zdCBkZXN0UmVzPSgwLF9wcmVwYXJlRGVzdGluYXRpb24uZGVmYXVsdCkocmV3cml0ZS5kZXN0aW5hdGlvbixwYXJhbXMscXVlcnksdHJ1ZSk7cGFyc2VkQXM9ZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbjthc1BhdGg9ZGVzdFJlcy5uZXdVcmw7T2JqZWN0LmFzc2lnbihxdWVyeSxkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KTtmc1BhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKSgoMCxfcm91dGVyLmRlbEJhc2VQYXRoKShhc1BhdGgpLGxvY2FsZXMpLnBhdGhuYW1lKTtpZihwYWdlcy5pbmNsdWRlcyhmc1BhdGhuYW1lKSl7Ly8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4vLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG5tYXRjaGVkUGFnZT10cnVlO3Jlc29sdmVkSHJlZj1mc1BhdGhuYW1lO3JldHVybiB0cnVlO30vLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxucmVzb2x2ZWRIcmVmPXJlc29sdmVIcmVmKGZzUGF0aG5hbWUpO2lmKHJlc29sdmVkSHJlZiE9PWFzUGF0aCYmcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSl7bWF0Y2hlZFBhZ2U9dHJ1ZTtyZXR1cm4gdHJ1ZTt9fX07bGV0IGZpbmlzaGVkPWZhbHNlO2ZvcihsZXQgaT0wO2k8cmV3cml0ZXMuYmVmb3JlRmlsZXMubGVuZ3RoO2krKyl7Ly8gd2UgZG9uJ3QgZW5kIGFmdGVyIG1hdGNoIGluIGJlZm9yZUZpbGVzIHRvIGFsbG93XG4vLyBjb250aW51aW5nIHRocm91Z2ggYWxsIGJlZm9yZUZpbGVzIHJld3JpdGVzXG5oYW5kbGVSZXdyaXRlKHJld3JpdGVzLmJlZm9yZUZpbGVzW2ldKTt9bWF0Y2hlZFBhZ2U9cGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSk7aWYoIW1hdGNoZWRQYWdlKXtpZighZmluaXNoZWQpe2ZvcihsZXQgaT0wO2k8cmV3cml0ZXMuYWZ0ZXJGaWxlcy5sZW5ndGg7aSsrKXtpZihoYW5kbGVSZXdyaXRlKHJld3JpdGVzLmFmdGVyRmlsZXNbaV0pKXtmaW5pc2hlZD10cnVlO2JyZWFrO319fS8vIGNoZWNrIGR5bmFtaWMgcm91dGUgYmVmb3JlIHByb2Nlc3NpbmcgZmFsbGJhY2sgcmV3cml0ZXNcbmlmKCFmaW5pc2hlZCl7cmVzb2x2ZWRIcmVmPXJlc29sdmVIcmVmKGZzUGF0aG5hbWUpO21hdGNoZWRQYWdlPXBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZik7ZmluaXNoZWQ9bWF0Y2hlZFBhZ2U7fWlmKCFmaW5pc2hlZCl7Zm9yKGxldCBpPTA7aTxyZXdyaXRlcy5mYWxsYmFjay5sZW5ndGg7aSsrKXtpZihoYW5kbGVSZXdyaXRlKHJld3JpdGVzLmZhbGxiYWNrW2ldKSl7ZmluaXNoZWQ9dHJ1ZTticmVhazt9fX19cmV0dXJue2FzUGF0aCxwYXJzZWRBcyxtYXRjaGVkUGFnZSxyZXNvbHZlZEhyZWZ9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc29sdmUtcmV3cml0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IHsgZ2V0QWxsRmlsZXNGcm9udE1hdHRlciB9IGZyb20gJ0AvbGliL21keCdcclxuaW1wb3J0IHNpdGVNZXRhZGF0YSBmcm9tICdAL2RhdGEvc2l0ZU1ldGFkYXRhJ1xyXG5pbXBvcnQgTGlzdExheW91dCBmcm9tICdAL2xheW91dHMvTGlzdExheW91dCdcclxuaW1wb3J0IHsgUGFnZVNlbyB9IGZyb20gJ0AvY29tcG9uZW50cy9TRU8nXHJcblxyXG5leHBvcnQgY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsRmlsZXNGcm9udE1hdHRlcignYmxvZycpXHJcbiAgY29uc3QgaW5pdGlhbERpc3BsYXlQb3N0cyA9IHBvc3RzLnNsaWNlKDAsIFBPU1RTX1BFUl9QQUdFKVxyXG4gIGNvbnN0IHBhZ2luYXRpb24gPSB7XHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbChwb3N0cy5sZW5ndGggLyBQT1NUU19QRVJfUEFHRSksXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBpbml0aWFsRGlzcGxheVBvc3RzLCBwb3N0cywgcGFnaW5hdGlvbiB9IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IHBvc3RzLCBpbml0aWFsRGlzcGxheVBvc3RzLCBwYWdpbmF0aW9uIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VTZW9cclxuICAgICAgICB0aXRsZT17YEJsb2cgLSAke3NpdGVNZXRhZGF0YS5hdXRob3J9YH1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c2l0ZU1ldGFkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIHVybD17YCR7c2l0ZU1ldGFkYXRhLnNpdGVVcmx9L2Jsb2dgfVxyXG4gICAgICAvPlxyXG4gICAgICA8TGlzdExheW91dFxyXG4gICAgICAgIHBvc3RzPXtwb3N0c31cclxuICAgICAgICBpbml0aWFsRGlzcGxheVBvc3RzPXtpbml0aWFsRGlzcGxheVBvc3RzfVxyXG4gICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcbiAgICAgICAgdGl0bGU9XCJBbGwgUG9zdHNcIlxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hcGJveC9yZWh5cGUtcHJpc21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1hZ2Utc2l6ZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRpbmctdGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVoeXBlLWthdGV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstYXV0b2xpbmstaGVhZGluZ3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1jb2RlLXRpdGxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLW1hdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1zbHVnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmlzdC11dGlsLXZpc2l0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9