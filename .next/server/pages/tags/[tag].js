(function() {
var exports = {};
exports.id = "pages/tags/[tag]";
exports.ids = ["pages/tags/[tag]"];
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

/***/ "./lib/tags.js":
/*!*********************!*\
  !*** ./lib/tags.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllTags": function() { return /* binding */ getAllTags; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdx */ "./lib/mdx.js");
/* harmony import */ var _utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/kebabCase */ "./lib/utils/kebabCase.js");





const root = process.cwd();
async function getAllTags(type) {
  const files = await (0,_mdx__WEBPACK_IMPORTED_MODULE_3__.getFiles)(type);
  let tagCount = {}; // Iterate through each post, putting all found tags into `tags`

  files.forEach(file => {
    const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(root, 'data', type, file), 'utf8');
    const {
      data
    } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);

    if (data.tags && data.draft !== true) {
      data.tags.forEach(tag => {
        const formattedTag = (0,_utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__.default)(tag);

        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  return tagCount;
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

/***/ "./pages/tags/[tag].js":
/*!*****************************!*\
  !*** ./pages/tags/[tag].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SEO */ "./components/SEO.js");
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/siteMetadata */ "./data/siteMetadata.json");
/* harmony import */ var _layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/ListLayout */ "./layouts/ListLayout.js");
/* harmony import */ var _lib_generate_rss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/generate-rss */ "./lib/generate-rss.js");
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/mdx */ "./lib/mdx.js");
/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/tags */ "./lib/tags.js");
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/utils/kebabCase */ "./lib/utils/kebabCase.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "E:\\blogify\\pages\\tags\\[tag].js";









const root = process.cwd();
async function getStaticPaths() {
  const tags = await (0,_lib_tags__WEBPACK_IMPORTED_MODULE_6__.getAllTags)('blog');
  return {
    paths: Object.keys(tags).map(tag => ({
      params: {
        tag
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const allPosts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__.getAllFilesFrontMatter)('blog');
  const filteredPosts = allPosts.filter(post => post.draft !== true && post.tags.map(t => (0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_7__.default)(t)).includes(params.tag)); // rss

  const rss = (0,_lib_generate_rss__WEBPACK_IMPORTED_MODULE_4__.default)(filteredPosts, `tags/${params.tag}/index.xml`);
  const rssPath = path__WEBPACK_IMPORTED_MODULE_9___default().join(root, 'public', 'tags', params.tag);
  fs__WEBPACK_IMPORTED_MODULE_8___default().mkdirSync(rssPath, {
    recursive: true
  });
  fs__WEBPACK_IMPORTED_MODULE_8___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_9___default().join(rssPath, 'index.xml'), rss);
  return {
    props: {
      posts: filteredPosts,
      tag: params.tag
    }
  };
}
function Tag({
  posts,
  tag
}) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__.PageSeo, {
      title: `${tag} - ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.title}`,
      description: `${tag} tags - ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.title}`,
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__.siteUrl}/tags/${tag}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
      posts: posts,
      title: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/tags/[tag].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvTGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvU0VPLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9jb21wb25lbnRzL1RhZy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGF5b3V0cy9MaXN0TGF5b3V0LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9saWIvZ2VuZXJhdGUtcnNzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9saWIvaW1nLXRvLWpzeC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL21keC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL2xpYi91dGlscy9maWxlcy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbGliL3V0aWxzL2h0bWxFc2NhcGVyLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9saWIvdXRpbHMva2ViYWJDYXNlLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2guanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vcGFnZXMvdGFncy9bdGFnXS5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiQG1hcGJveC9yZWh5cGUtcHJpc21cIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwiaW1hZ2Utc2l6ZVwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInJlYWRpbmctdGltZVwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZWh5cGUta2F0ZXhcIiIsIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nL2V4dGVybmFsIFwicmVtYXJrLWF1dG9saW5rLWhlYWRpbmdzXCIiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZy9leHRlcm5hbCBcInJlbWFyay1jb2RlLXRpdGxlc1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZW1hcmstbWF0aFwiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJyZW1hcmstc2x1Z1wiIiwid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvZXh0ZXJuYWwgXCJ1bmlzdC11dGlsLXZpc2l0XCIiXSwibmFtZXMiOlsiSW1hZ2UiLCJyZXN0IiwiQ3VzdG9tTGluayIsImhyZWYiLCJpc0ludGVybmFsTGluayIsInN0YXJ0c1dpdGgiLCJpc0FuY2hvckxpbmsiLCJNRFhDb21wb25lbnRzIiwiYSIsIlBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwiY3VycmVudFBhZ2UiLCJwcmV2UGFnZSIsInBhcnNlSW50IiwibmV4dFBhZ2UiLCJTRU8iLCJ0aXRsZSIsInNpdGVNZXRhZGF0YSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwidHlwZSIsImxvY2FsZSIsInVybCIsImltYWdlcyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlciIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsImFkZGl0aW9uYWxNZXRhVGFncyIsIm5hbWUiLCJjb250ZW50IiwiYXV0aG9yIiwiUGFnZVNlbyIsIkJsb2dTZW8iLCJzdW1tYXJ5IiwiZGF0ZSIsImxhc3Rtb2QiLCJ0YWdzIiwicHVibGlzaGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJtb2RpZmllZEF0IiwiaW1hZ2VzQXJyIiwibGVuZ3RoIiwiZmVhdHVyZWRJbWFnZXMiLCJtYXAiLCJpbWciLCJhcnRpY2xlIiwicHVibGlzaGVkVGltZSIsIm1vZGlmaWVkVGltZSIsImF1dGhvcnMiLCJUYWciLCJ0ZXh0Iiwia2ViYWJDYXNlIiwic3BsaXQiLCJqb2luIiwicG9zdERhdGVUZW1wbGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsIkxpc3RMYXlvdXQiLCJwb3N0cyIsImluaXRpYWxEaXNwbGF5UG9zdHMiLCJwYWdpbmF0aW9uIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInVzZVN0YXRlIiwiZmlsdGVyZWRCbG9nUG9zdHMiLCJmaWx0ZXIiLCJmcm9udE1hdHRlciIsInNlYXJjaENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGlzcGxheVBvc3RzIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2x1ZyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRhZyIsImdlbmVyYXRlUnNzSXRlbSIsInBvc3QiLCJlc2NhcGUiLCJ0b1VUQ1N0cmluZyIsInQiLCJnZW5lcmF0ZVJzcyIsInBhZ2UiLCJ2aXNpdCIsInJlcXVpcmUiLCJzaXplT2YiLCJmcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwidHJlZSIsIm5vZGUiLCJjaGlsZHJlbiIsInNvbWUiLCJuIiwiaW1hZ2VOb2RlIiwiZmluZCIsImV4aXN0c1N5bmMiLCJwcm9jZXNzIiwiY3dkIiwiZGltZW5zaW9ucyIsInJvb3QiLCJ0b2tlbkNsYXNzTmFtZXMiLCJkZWxldGVkIiwiaW5zZXJ0ZWQiLCJwdW5jdHVhdGlvbiIsImtleXdvcmQiLCJzdHJpbmciLCJmdW5jdGlvbiIsImJvb2xlYW4iLCJjb21tZW50IiwiZ2V0RmlsZXMiLCJwcmVmaXhQYXRocyIsInBhdGgiLCJmaWxlcyIsImdldEFsbEZpbGVzUmVjdXJzaXZlbHkiLCJmaWxlIiwic2xpY2UiLCJyZXBsYWNlIiwiZm9ybWF0U2x1ZyIsImRhdGVTb3J0RGVzYyIsImIiLCJnZXRGaWxlQnlTbHVnIiwibWR4UGF0aCIsIm1kUGF0aCIsInNvdXJjZSIsImRhdGEiLCJtYXR0ZXIiLCJtZHhTb3VyY2UiLCJzZXJpYWxpemUiLCJjb21wb25lbnRzIiwibWR4T3B0aW9ucyIsInJlbWFya1BsdWdpbnMiLCJpbWdUb0pzeCIsImlubGluZU5vdGVzIiwicmVoeXBlUGx1Z2lucyIsImluZGV4IiwicGFyZW50IiwidG9rZW4iLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicmVhZGluZ1RpbWUiLCJmaWxlTmFtZSIsImdldEFsbEZpbGVzRnJvbnRNYXR0ZXIiLCJmb2xkZXIiLCJhbGxGcm9udE1hdHRlciIsImZvckVhY2giLCJkcmFmdCIsInB1c2giLCJzb3J0IiwiZ2V0QWxsVGFncyIsInRhZ0NvdW50IiwiZm9ybWF0dGVkVGFnIiwicGlwZSIsImZucyIsIngiLCJyZWR1Y2UiLCJ2IiwiZiIsImZsYXR0ZW5BcnJheSIsImlucHV0IiwiYWNjIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImZuIiwid2Fsa0RpciIsImZ1bGxQYXRoIiwiaXNGaWxlIiwicGF0aEpvaW5QcmVmaXgiLCJwcmVmaXgiLCJleHRyYVBhdGgiLCJlcyIsImNhIiwiZXNjYSIsInBlIiwibSIsImNhbGwiLCJzdHIiLCJtYXRjaCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJleGVjIiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsIlNldCIsInciLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGljZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsIm1hdGNoSGFzIiwiY29tcGlsZU5vblBhdGgiLCJwcmVwYXJlRGVzdGluYXRpb24iLCJnZXRTYWZlUGFyYW1OYW1lIiwicGFyYW1OYW1lIiwibmV3UGFyYW1OYW1lIiwiY2hhckNvZGUiLCJjaGFyQ29kZUF0IiwicmVxIiwiaW5pdGlhbFF1ZXJ5VmFsdWVzIiwidmFsdWVzIiwiX19ORVhUX0lOSVRfUVVFUlkiLCJhbGxNYXRjaCIsImhhc0l0ZW0iLCJoZWFkZXJzIiwiY29va2llcyIsIlJlZ0V4cCIsIm1hdGNoZXMiLCJncm91cEtleSIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImhhZExvY2FsZSIsIl9fbmV4dExvY2FsZSIsIl9fbmV4dERlZmF1bHRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsInBhcmFtS2V5cyIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwicmVzb2x2ZVJld3JpdGVzIiwiX3BhdGhNYXRjaCIsIl9wcmVwYXJlRGVzdGluYXRpb24iLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJmc1BhdGhuYW1lIiwiaGFuZGxlUmV3cml0ZSIsInJld3JpdGUiLCJoYXNQYXJhbXMiLCJjb29raWUiLCJkZXN0UmVzIiwiZmluaXNoZWQiLCJiZWZvcmVGaWxlcyIsImFmdGVyRmlsZXMiLCJmYWxsYmFjayIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJwb3MiLCJlc2NhcGVSZWdleCIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJnZXRTdGF0aWNQcm9wcyIsImFsbFBvc3RzIiwiZmlsdGVyZWRQb3N0cyIsInJzcyIsInJzc1BhdGgiLCJyZWN1cnNpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7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Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvdGFncy9bdGFnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYWx0LXRleHRcclxuY29uc3QgSW1hZ2UgPSAoeyAuLi5yZXN0IH0pID0+IDxOZXh0SW1hZ2Ugey4uLnJlc3R9IC8+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnQgKi9cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgQ3VzdG9tTGluayA9ICh7IGhyZWYsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlzSW50ZXJuYWxMaW5rID0gaHJlZiAmJiBocmVmLnN0YXJ0c1dpdGgoJy8nKVxyXG4gIGNvbnN0IGlzQW5jaG9yTGluayA9IGhyZWYgJiYgaHJlZi5zdGFydHNXaXRoKCcjJylcclxuXHJcbiAgaWYgKGlzSW50ZXJuYWxMaW5rKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICA8YSB7Li4ucmVzdH0gLz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQW5jaG9yTGluaykge1xyXG4gICAgcmV0dXJuIDxhIGhyZWY9e2hyZWZ9IHsuLi5yZXN0fSAvPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtocmVmfSB7Li4ucmVzdH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tTGlua1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSdcclxuaW1wb3J0IEN1c3RvbUxpbmsgZnJvbSAnLi9MaW5rJ1xyXG5cclxuY29uc3QgTURYQ29tcG9uZW50cyA9IHtcclxuICBJbWFnZSxcclxuICBhOiBDdXN0b21MaW5rLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNRFhDb21wb25lbnRzXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ0AvY29tcG9uZW50cy9MaW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlIH0pIHtcclxuICBjb25zdCBwcmV2UGFnZSA9IHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEgPiAwXHJcbiAgY29uc3QgbmV4dFBhZ2UgPSBwYXJzZUludChjdXJyZW50UGFnZSkgKyAxIDw9IHBhcnNlSW50KHRvdGFsUGFnZXMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcGItOCBzcGFjZS15LTIgbWQ6c3BhY2UteS01XCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICB7IXByZXZQYWdlICYmIChcclxuICAgICAgICAgIDxidXR0b24gcmVsPVwicHJldmlvdXNcIiBjbGFzc05hbWU9XCJjdXJzb3ItYXV0byBkaXNhYmxlZDpvcGFjaXR5LTUwXCIgZGlzYWJsZWQ9eyFwcmV2UGFnZX0+XHJcbiAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcmV2UGFnZSAmJiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtjdXJyZW50UGFnZSAtIDEgPT09IDEgPyBgL2Jsb2cvYCA6IGAvYmxvZy9wYWdlLyR7Y3VycmVudFBhZ2UgLSAxfWB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHJlbD1cInByZXZpb3VzXCI+UHJldmlvdXM8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge2N1cnJlbnRQYWdlfSBvZiB7dG90YWxQYWdlc31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgeyFuZXh0UGFnZSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIHJlbD1cIm5leHRcIiBjbGFzc05hbWU9XCJjdXJzb3ItYXV0byBkaXNhYmxlZDpvcGFjaXR5LTUwXCIgZGlzYWJsZWQ9eyFuZXh0UGFnZX0+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge25leHRQYWdlICYmIChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy9wYWdlLyR7Y3VycmVudFBhZ2UgKyAxfWB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHJlbD1cIm5leHRcIj5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgTmV4dFNlbywgQXJ0aWNsZUpzb25MZCB9IGZyb20gJ25leHQtc2VvJ1xyXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXHJcblxyXG5leHBvcnQgY29uc3QgU0VPID0ge1xyXG4gIHRpdGxlOiBzaXRlTWV0YWRhdGEudGl0bGUsXHJcbiAgZGVzY3JpcHRpb246IHNpdGVNZXRhZGF0YS5kZXNjcmlwdGlvbixcclxuICBvcGVuR3JhcGg6IHtcclxuICAgIHR5cGU6ICd3ZWJzaXRlJyxcclxuICAgIGxvY2FsZTogc2l0ZU1ldGFkYXRhLmxhbmd1YWdlLFxyXG4gICAgdXJsOiBzaXRlTWV0YWRhdGEuc2l0ZVVybCxcclxuICAgIHRpdGxlOiBzaXRlTWV0YWRhdGEudGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogc2l0ZU1ldGFkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgaW1hZ2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IGAke3NpdGVNZXRhZGF0YS5zaXRlVXJsfSR7c2l0ZU1ldGFkYXRhLnNvY2lhbEJhbm5lcn1gLFxyXG4gICAgICAgIGFsdDogc2l0ZU1ldGFkYXRhLnRpdGxlLFxyXG4gICAgICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHR3aXR0ZXI6IHtcclxuICAgIGhhbmRsZTogc2l0ZU1ldGFkYXRhLnR3aXR0ZXIsXHJcbiAgICBzaXRlOiBzaXRlTWV0YWRhdGEudHdpdHRlcixcclxuICAgIGNhcmRUeXBlOiAnc3VtbWFyeV9sYXJnZV9pbWFnZScsXHJcbiAgfSxcclxuICBhZGRpdGlvbmFsTWV0YVRhZ3M6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2F1dGhvcicsXHJcbiAgICAgIGNvbnRlbnQ6IHNpdGVNZXRhZGF0YS5hdXRob3IsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlU2VvID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1cmwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT17YCR7dGl0bGV9IOKAkyAke3NpdGVNZXRhZGF0YS50aXRsZX1gfVxyXG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgIGNhbm9uaWNhbD17dXJsfVxyXG4gICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dTZW8gPSAoeyB0aXRsZSwgc3VtbWFyeSwgZGF0ZSwgbGFzdG1vZCwgdXJsLCB0YWdzLCBpbWFnZXMgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgcHVibGlzaGVkQXQgPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpXHJcbiAgY29uc3QgbW9kaWZpZWRBdCA9IG5ldyBEYXRlKGxhc3Rtb2QgfHwgZGF0ZSkudG9JU09TdHJpbmcoKVxyXG4gIGxldCBpbWFnZXNBcnIgPVxyXG4gICAgaW1hZ2VzLmxlbmd0aCA9PT0gMFxyXG4gICAgICA/IFtzaXRlTWV0YWRhdGEuc29jaWFsQmFubmVyXVxyXG4gICAgICA6IHR5cGVvZiBpbWFnZXMgPT09ICdzdHJpbmcnXHJcbiAgICAgID8gW2ltYWdlc11cclxuICAgICAgOiBpbWFnZXNcclxuXHJcbiAgY29uc3QgZmVhdHVyZWRJbWFnZXMgPSBpbWFnZXNBcnIubWFwKChpbWcpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVybDogYCR7c2l0ZU1ldGFkYXRhLnNpdGVVcmx9JHtpbWd9YCxcclxuICAgICAgYWx0OiB0aXRsZSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT17YCR7dGl0bGV9IOKAkyAke3NpdGVNZXRhZGF0YS50aXRsZX1gfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtzdW1tYXJ5fVxyXG4gICAgICAgIGNhbm9uaWNhbD17dXJsfVxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdHlwZTogJ2FydGljbGUnLFxyXG4gICAgICAgICAgYXJ0aWNsZToge1xyXG4gICAgICAgICAgICBwdWJsaXNoZWRUaW1lOiBwdWJsaXNoZWRBdCxcclxuICAgICAgICAgICAgbW9kaWZpZWRUaW1lOiBtb2RpZmllZEF0LFxyXG4gICAgICAgICAgICBhdXRob3JzOiBbYCR7c2l0ZU1ldGFkYXRhLnNpdGVVcmx9L2Fib3V0YF0sXHJcbiAgICAgICAgICAgIHRhZ3MsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogc3VtbWFyeSxcclxuICAgICAgICAgIGltYWdlczogZmVhdHVyZWRJbWFnZXMsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhZGRpdGlvbmFsTWV0YVRhZ3M9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3R3aXR0ZXI6aW1hZ2UnLFxyXG4gICAgICAgICAgICBjb250ZW50OiBmZWF0dXJlZEltYWdlc1swXS51cmwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxBcnRpY2xlSnNvbkxkXHJcbiAgICAgICAgYXV0aG9yTmFtZT17c2l0ZU1ldGFkYXRhLmF1dGhvcn1cclxuICAgICAgICBkYXRlTW9kaWZpZWQ9e21vZGlmaWVkQXR9XHJcbiAgICAgICAgZGF0ZVB1Ymxpc2hlZD17cHVibGlzaGVkQXR9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3N1bW1hcnl9XHJcbiAgICAgICAgaW1hZ2VzPXtmZWF0dXJlZEltYWdlc31cclxuICAgICAgICBwdWJsaXNoZXJOYW1lPXtzaXRlTWV0YWRhdGEuYXV0aG9yfVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICB1cmw9e3VybH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBrZWJhYkNhc2UgZnJvbSAnQC9saWIvdXRpbHMva2ViYWJDYXNlJ1xyXG5cclxuY29uc3QgVGFnID0gKHsgdGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvdGFncy8ke2tlYmFiQ2FzZSh0ZXh0KX1gfT5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibXItMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIGhvdmVyOnRleHQtYmx1ZS02MDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNDAwXCI+XHJcbiAgICAgICAge3RleHQuc3BsaXQoJyAnKS5qb2luKCctJyl9XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICdAL2NvbXBvbmVudHMvTGluaydcclxuaW1wb3J0IFRhZyBmcm9tICdAL2NvbXBvbmVudHMvVGFnJ1xyXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9QYWdpbmF0aW9uJ1xyXG5cclxuY29uc3QgcG9zdERhdGVUZW1wbGF0ZSA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0TGF5b3V0KHsgcG9zdHMsIHRpdGxlLCBpbml0aWFsRGlzcGxheVBvc3RzID0gW10sIHBhZ2luYXRpb24gfSkge1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgZmlsdGVyZWRCbG9nUG9zdHMgPSBwb3N0cy5maWx0ZXIoKGZyb250TWF0dGVyKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hDb250ZW50ID0gZnJvbnRNYXR0ZXIudGl0bGUgKyBmcm9udE1hdHRlci5zdW1tYXJ5ICsgZnJvbnRNYXR0ZXIudGFncy5qb2luKCcgJylcclxuICAgIHJldHVybiBzZWFyY2hDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICB9KVxyXG5cclxuICAvLyBJZiBpbml0aWFsRGlzcGxheVBvc3RzIGV4aXN0LCBkaXNwbGF5IGl0IGlmIG5vIHNlYXJjaFZhbHVlIGlzIHNwZWNpZmllZFxyXG4gIGNvbnN0IGRpc3BsYXlQb3N0cyA9XHJcbiAgICBpbml0aWFsRGlzcGxheVBvc3RzLmxlbmd0aCA+IDAgJiYgIXNlYXJjaFZhbHVlID8gaW5pdGlhbERpc3BsYXlQb3N0cyA6IGZpbHRlcmVkQmxvZ1Bvc3RzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTggc3BhY2UteS0yIG1kOnNwYWNlLXktNVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctOSB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMCBzbTp0ZXh0LTR4bCBzbTpsZWFkaW5nLTEwIG1kOnRleHQtNnhsIG1kOmxlYWRpbmctMTRcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctbGdcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBhcnRpY2xlc1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFydGljbGVzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHgtNCBweS0yIHRleHQtZ3JheS05MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGRhcms6Ym9yZGVyLWdyYXktOTAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMTAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctNSBoLTUgdGV4dC1ncmF5LTQwMCByaWdodC0zIHRvcC0zIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7IWZpbHRlcmVkQmxvZ1Bvc3RzLmxlbmd0aCAmJiAnTm8gcG9zdHMgZm91bmQuJ31cclxuICAgICAgICAgIHtkaXNwbGF5UG9zdHMubWFwKChmcm9udE1hdHRlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHNsdWcsIGRhdGUsIHRpdGxlLCBzdW1tYXJ5LCB0YWdzIH0gPSBmcm9udE1hdHRlclxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3NsdWd9IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInNwYWNlLXktMiB4bDpncmlkIHhsOmdyaWQtY29scy00IHhsOnNwYWNlLXktMCB4bDppdGVtcy1iYXNlbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QdWJsaXNoZWQgb248L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZT17ZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoc2l0ZU1ldGFkYXRhLmxvY2FsZSwgcG9zdERhdGVUZW1wbGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgeGw6Y29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGxlYWRpbmctOCB0cmFja2luZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtzbHVnfWB9IGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9IHRleHQ9e3RhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIHRleHQtZ3JheS01MDAgbWF4LXctbm9uZSBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3BhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi50b3RhbFBhZ2VzID4gMSAmJiAhc2VhcmNoVmFsdWUgJiYgKFxyXG4gICAgICAgIDxQYWdpbmF0aW9uIGN1cnJlbnRQYWdlPXtwYWdpbmF0aW9uLmN1cnJlbnRQYWdlfSB0b3RhbFBhZ2VzPXtwYWdpbmF0aW9uLnRvdGFsUGFnZXN9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgZXNjYXBlIH0gZnJvbSAnQC9saWIvdXRpbHMvaHRtbEVzY2FwZXInXHJcblxyXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXHJcblxyXG5jb25zdCBnZW5lcmF0ZVJzc0l0ZW0gPSAocG9zdCkgPT4gYFxyXG4gIDxpdGVtPlxyXG4gICAgPGd1aWQ+JHtzaXRlTWV0YWRhdGEuc2l0ZVVybH0vYmxvZy8ke3Bvc3Quc2x1Z308L2d1aWQ+XHJcbiAgICA8dGl0bGU+JHtlc2NhcGUocG9zdC50aXRsZSl9PC90aXRsZT5cclxuICAgIDxsaW5rPiR7c2l0ZU1ldGFkYXRhLnNpdGVVcmx9L2Jsb2cvJHtwb3N0LnNsdWd9PC9saW5rPlxyXG4gICAgPGRlc2NyaXB0aW9uPiR7ZXNjYXBlKHBvc3Quc3VtbWFyeSl9PC9kZXNjcmlwdGlvbj5cclxuICAgIDxwdWJEYXRlPiR7bmV3IERhdGUocG9zdC5kYXRlKS50b1VUQ1N0cmluZygpfTwvcHViRGF0ZT5cclxuICAgIDxhdXRob3I+JHtzaXRlTWV0YWRhdGEuZW1haWx9ICgke3NpdGVNZXRhZGF0YS5hdXRob3J9KTwvYXV0aG9yPlxyXG4gICAgJHtwb3N0LnRhZ3MubWFwKCh0KSA9PiBgPGNhdGVnb3J5PiR7dH08L2NhdGVnb3J5PmApLmpvaW4oJycpfVxyXG4gIDwvaXRlbT5cclxuYFxyXG5cclxuY29uc3QgZ2VuZXJhdGVSc3MgPSAocG9zdHMsIHBhZ2UgPSAnaW5kZXgueG1sJykgPT4gYFxyXG4gIDxyc3MgdmVyc2lvbj1cIjIuMFwiIHhtbG5zOmF0b209XCJodHRwOi8vd3d3LnczLm9yZy8yMDA1L0F0b21cIj5cclxuICAgIDxjaGFubmVsPlxyXG4gICAgICA8dGl0bGU+JHtlc2NhcGUoc2l0ZU1ldGFkYXRhLnRpdGxlKX08L3RpdGxlPlxyXG4gICAgICA8bGluaz4ke3NpdGVNZXRhZGF0YS5zaXRlVXJsfS9ibG9nPC9saW5rPlxyXG4gICAgICA8ZGVzY3JpcHRpb24+JHtlc2NhcGUoc2l0ZU1ldGFkYXRhLmRlc2NyaXB0aW9uKX08L2Rlc2NyaXB0aW9uPlxyXG4gICAgICA8bGFuZ3VhZ2U+JHtzaXRlTWV0YWRhdGEubGFuZ3VhZ2V9PC9sYW5ndWFnZT5cclxuICAgICAgPG1hbmFnaW5nRWRpdG9yPiR7c2l0ZU1ldGFkYXRhLmVtYWlsfSAoJHtzaXRlTWV0YWRhdGEuYXV0aG9yfSk8L21hbmFnaW5nRWRpdG9yPlxyXG4gICAgICA8d2ViTWFzdGVyPiR7c2l0ZU1ldGFkYXRhLmVtYWlsfSAoJHtzaXRlTWV0YWRhdGEuYXV0aG9yfSk8L3dlYk1hc3Rlcj5cclxuICAgICAgPGxhc3RCdWlsZERhdGU+JHtuZXcgRGF0ZShwb3N0c1swXS5kYXRlKS50b1VUQ1N0cmluZygpfTwvbGFzdEJ1aWxkRGF0ZT5cclxuICAgICAgPGF0b206bGluayBocmVmPVwiJHtzaXRlTWV0YWRhdGEuc2l0ZVVybH0vJHtwYWdlfVwiIHJlbD1cInNlbGZcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiLz5cclxuICAgICAgJHtwb3N0cy5tYXAoZ2VuZXJhdGVSc3NJdGVtKS5qb2luKCcnKX1cclxuICAgIDwvY2hhbm5lbD5cclxuICA8L3Jzcz5cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVJzc1xyXG4iLCJjb25zdCB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxyXG5jb25zdCBzaXplT2YgPSByZXF1aXJlKCdpbWFnZS1zaXplJylcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChvcHRpb25zKSA9PiAodHJlZSkgPT4ge1xyXG4gIHZpc2l0KFxyXG4gICAgdHJlZSxcclxuICAgIC8vIG9ubHkgdmlzaXQgcCB0YWdzIHRoYXQgY29udGFpbiBhbiBpbWcgZWxlbWVudFxyXG4gICAgKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gJ3BhcmFncmFwaCcgJiYgbm9kZS5jaGlsZHJlbi5zb21lKChuKSA9PiBuLnR5cGUgPT09ICdpbWFnZScpLFxyXG4gICAgKG5vZGUpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2VOb2RlID0gbm9kZS5jaGlsZHJlbi5maW5kKChuKSA9PiBuLnR5cGUgPT09ICdpbWFnZScpXHJcblxyXG4gICAgICAvLyBvbmx5IGxvY2FsIGZpbGVzXHJcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L3B1YmxpYyR7aW1hZ2VOb2RlLnVybH1gKSkge1xyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBzaXplT2YoYCR7cHJvY2Vzcy5jd2QoKX0vcHVibGljJHtpbWFnZU5vZGUudXJsfWApXHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgb3JpZ2luYWwgbm9kZSB0byBuZXh0L2ltYWdlXHJcbiAgICAgICAgaW1hZ2VOb2RlLnR5cGUgPSAnanN4J1xyXG4gICAgICAgIGltYWdlTm9kZS52YWx1ZSA9IGA8SW1hZ2VcclxuICAgICAgICAgIGFsdD17XFxgJHtpbWFnZU5vZGUuYWx0fVxcYH0gXHJcbiAgICAgICAgICBzcmM9e1xcYCR7aW1hZ2VOb2RlLnVybH1cXGB9XHJcbiAgICAgICAgICB3aWR0aD17JHtkaW1lbnNpb25zLndpZHRofX1cclxuICAgICAgICAgIGhlaWdodD17JHtkaW1lbnNpb25zLmhlaWdodH19XHJcbiAgICAgIC8+YFxyXG5cclxuICAgICAgICAvLyBDaGFuZ2Ugbm9kZSB0eXBlIGZyb20gcCB0byBkaXYgdG8gYXZvaWQgbmVzdGluZyBlcnJvclxyXG4gICAgICAgIG5vZGUudHlwZSA9ICdkaXYnXHJcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtpbWFnZU5vZGVdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IE1EWENvbXBvbmVudHMgZnJvbSAnQC9jb21wb25lbnRzL01EWENvbXBvbmVudHMnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHJlYWRpbmdUaW1lIGZyb20gJ3JlYWRpbmctdGltZSdcclxuaW1wb3J0IHZpc2l0IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXHJcbmltcG9ydCBpbWdUb0pzeCBmcm9tICcuL2ltZy10by1qc3gnXHJcbmltcG9ydCBnZXRBbGxGaWxlc1JlY3Vyc2l2ZWx5IGZyb20gJy4vdXRpbHMvZmlsZXMnXHJcblxyXG5jb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxyXG5cclxuY29uc3QgdG9rZW5DbGFzc05hbWVzID0ge1xyXG4gIHRhZzogJ3RleHQtY29kZS1yZWQnLFxyXG4gICdhdHRyLW5hbWUnOiAndGV4dC1jb2RlLXllbGxvdycsXHJcbiAgJ2F0dHItdmFsdWUnOiAndGV4dC1jb2RlLWdyZWVuJyxcclxuICBkZWxldGVkOiAndGV4dC1jb2RlLXJlZCcsXHJcbiAgaW5zZXJ0ZWQ6ICd0ZXh0LWNvZGUtZ3JlZW4nLFxyXG4gIHB1bmN0dWF0aW9uOiAndGV4dC1jb2RlLXdoaXRlJyxcclxuICBrZXl3b3JkOiAndGV4dC1jb2RlLXB1cnBsZScsXHJcbiAgc3RyaW5nOiAndGV4dC1jb2RlLWdyZWVuJyxcclxuICBmdW5jdGlvbjogJ3RleHQtY29kZS1ibHVlJyxcclxuICBib29sZWFuOiAndGV4dC1jb2RlLXJlZCcsXHJcbiAgY29tbWVudDogJ3RleHQtZ3JheS00MDAgaXRhbGljJyxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVzKHR5cGUpIHtcclxuICBjb25zdCBwcmVmaXhQYXRocyA9IHBhdGguam9pbihyb290LCAnZGF0YScsIHR5cGUpXHJcbiAgY29uc3QgZmlsZXMgPSBnZXRBbGxGaWxlc1JlY3Vyc2l2ZWx5KHByZWZpeFBhdGhzKVxyXG4gIC8vIE9ubHkgd2FudCB0byByZXR1cm4gYmxvZy9wYXRoIGFuZCBpZ25vcmUgcm9vdCwgcmVwbGFjZSBpcyBuZWVkZWQgdG8gd29yayBvbiBXaW5kb3dzXHJcbiAgcmV0dXJuIGZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5zbGljZShwcmVmaXhQYXRocy5sZW5ndGggKyAxKS5yZXBsYWNlKC9cXFxcL2csICcvJykpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTbHVnKHNsdWcpIHtcclxuICByZXR1cm4gc2x1Zy5yZXBsYWNlKC9cXC4obWR4fG1kKS8sICcnKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVNvcnREZXNjKGEsIGIpIHtcclxuICBpZiAoYSA+IGIpIHJldHVybiAtMVxyXG4gIGlmIChhIDwgYikgcmV0dXJuIDFcclxuICByZXR1cm4gMFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZUJ5U2x1Zyh0eXBlLCBzbHVnKSB7XHJcbiAgY29uc3QgbWR4UGF0aCA9IHBhdGguam9pbihyb290LCAnZGF0YScsIHR5cGUsIGAke3NsdWd9Lm1keGApXHJcbiAgY29uc3QgbWRQYXRoID0gcGF0aC5qb2luKHJvb3QsICdkYXRhJywgdHlwZSwgYCR7c2x1Z30ubWRgKVxyXG4gIGNvbnN0IHNvdXJjZSA9IGZzLmV4aXN0c1N5bmMobWR4UGF0aClcclxuICAgID8gZnMucmVhZEZpbGVTeW5jKG1keFBhdGgsICd1dGY4JylcclxuICAgIDogZnMucmVhZEZpbGVTeW5jKG1kUGF0aCwgJ3V0ZjgnKVxyXG5cclxuICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihzb3VyY2UpXHJcbiAgY29uc3QgbWR4U291cmNlID0gYXdhaXQgc2VyaWFsaXplKGNvbnRlbnQsIHtcclxuICAgIGNvbXBvbmVudHM6IE1EWENvbXBvbmVudHMsXHJcbiAgICBtZHhPcHRpb25zOiB7XHJcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtcclxuICAgICAgICByZXF1aXJlKCdyZW1hcmstc2x1ZycpLFxyXG4gICAgICAgIHJlcXVpcmUoJ3JlbWFyay1hdXRvbGluay1oZWFkaW5ncycpLFxyXG4gICAgICAgIHJlcXVpcmUoJ3JlbWFyay1jb2RlLXRpdGxlcycpLFxyXG4gICAgICAgIHJlcXVpcmUoJ3JlbWFyay1tYXRoJyksXHJcbiAgICAgICAgaW1nVG9Kc3gsXHJcbiAgICAgIF0sXHJcbiAgICAgIGlubGluZU5vdGVzOiB0cnVlLFxyXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXHJcbiAgICAgICAgcmVxdWlyZSgncmVoeXBlLWthdGV4JyksXHJcbiAgICAgICAgcmVxdWlyZSgnQG1hcGJveC9yZWh5cGUtcHJpc20nKSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKHRyZWUpID0+IHtcclxuICAgICAgICAgICAgdmlzaXQodHJlZSwgJ2VsZW1lbnQnLCAobm9kZSwgaW5kZXgsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBbdG9rZW4sIHR5cGVdID0gbm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZSB8fCBbXVxyXG4gICAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gJ3Rva2VuJykge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZSA9IFt0b2tlbkNsYXNzTmFtZXNbdHlwZV1dXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtZHhTb3VyY2UsXHJcbiAgICBmcm9udE1hdHRlcjoge1xyXG4gICAgICByZWFkaW5nVGltZTogcmVhZGluZ1RpbWUoY29udGVudCksXHJcbiAgICAgIHNsdWc6IHNsdWcgfHwgbnVsbCxcclxuICAgICAgZmlsZU5hbWU6IGZzLmV4aXN0c1N5bmMobWR4UGF0aCkgPyBgJHtzbHVnfS5tZHhgIDogYCR7c2x1Z30ubWRgLFxyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxGaWxlc0Zyb250TWF0dGVyKGZvbGRlcikge1xyXG4gIGNvbnN0IHByZWZpeFBhdGhzID0gcGF0aC5qb2luKHJvb3QsICdkYXRhJywgZm9sZGVyKVxyXG5cclxuICBjb25zdCBmaWxlcyA9IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkocHJlZml4UGF0aHMpXHJcblxyXG4gIGNvbnN0IGFsbEZyb250TWF0dGVyID0gW11cclxuXHJcbiAgZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG4gICAgLy8gUmVwbGFjZSBpcyBuZWVkZWQgdG8gd29yayBvbiBXaW5kb3dzXHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGUuc2xpY2UocHJlZml4UGF0aHMubGVuZ3RoICsgMSkucmVwbGFjZSgvXFxcXC9nLCAnLycpXHJcbiAgICAvLyBSZW1vdmUgVW5leHBlY3RlZCBGaWxlXHJcbiAgICBpZiAocGF0aC5leHRuYW1lKGZpbGVOYW1lKSAhPT0gJy5tZCcgJiYgcGF0aC5leHRuYW1lKGZpbGVOYW1lKSAhPT0gJy5tZHgnKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGZpbGUsICd1dGY4JylcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSlcclxuICAgIGlmIChkYXRhLmRyYWZ0ICE9PSB0cnVlKSB7XHJcbiAgICAgIGFsbEZyb250TWF0dGVyLnB1c2goeyAuLi5kYXRhLCBzbHVnOiBmb3JtYXRTbHVnKGZpbGVOYW1lKSB9KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBhbGxGcm9udE1hdHRlci5zb3J0KChhLCBiKSA9PiBkYXRlU29ydERlc2MoYS5kYXRlLCBiLmRhdGUpKVxyXG59XHJcbiIsImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZ2V0RmlsZXMgfSBmcm9tICcuL21keCdcclxuaW1wb3J0IGtlYmFiQ2FzZSBmcm9tICcuL3V0aWxzL2tlYmFiQ2FzZSdcclxuXHJcbmNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVGFncyh0eXBlKSB7XHJcbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBnZXRGaWxlcyh0eXBlKVxyXG5cclxuICBsZXQgdGFnQ291bnQgPSB7fVxyXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIHBvc3QsIHB1dHRpbmcgYWxsIGZvdW5kIHRhZ3MgaW50byBgdGFnc2BcclxuICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKHJvb3QsICdkYXRhJywgdHlwZSwgZmlsZSksICd1dGY4JylcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSlcclxuICAgIGlmIChkYXRhLnRhZ3MgJiYgZGF0YS5kcmFmdCAhPT0gdHJ1ZSkge1xyXG4gICAgICBkYXRhLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVGFnID0ga2ViYWJDYXNlKHRhZylcclxuICAgICAgICBpZiAoZm9ybWF0dGVkVGFnIGluIHRhZ0NvdW50KSB7XHJcbiAgICAgICAgICB0YWdDb3VudFtmb3JtYXR0ZWRUYWddICs9IDFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFnQ291bnRbZm9ybWF0dGVkVGFnXSA9IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHRhZ0NvdW50XHJcbn1cclxuIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgcGlwZSA9ICguLi5mbnMpID0+ICh4KSA9PiBmbnMucmVkdWNlKCh2LCBmKSA9PiBmKHYpLCB4KVxyXG5cclxuY29uc3QgZmxhdHRlbkFycmF5ID0gKGlucHV0KSA9PlxyXG4gIGlucHV0LnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBbLi4uYWNjLCAuLi4oQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW0gOiBbaXRlbV0pXSwgW10pXHJcblxyXG5jb25zdCBtYXAgPSAoZm4pID0+IChpbnB1dCkgPT4gaW5wdXQubWFwKGZuKVxyXG5cclxuY29uc3Qgd2Fsa0RpciA9IChmdWxsUGF0aCkgPT4ge1xyXG4gIHJldHVybiBmcy5zdGF0U3luYyhmdWxsUGF0aCkuaXNGaWxlKCkgPyBmdWxsUGF0aCA6IGdldEFsbEZpbGVzUmVjdXJzaXZlbHkoZnVsbFBhdGgpXHJcbn1cclxuXHJcbmNvbnN0IHBhdGhKb2luUHJlZml4ID0gKHByZWZpeCkgPT4gKGV4dHJhUGF0aCkgPT4gcGF0aC5qb2luKHByZWZpeCwgZXh0cmFQYXRoKVxyXG5cclxuY29uc3QgZ2V0QWxsRmlsZXNSZWN1cnNpdmVseSA9IChmb2xkZXIpID0+XHJcbiAgcGlwZShmcy5yZWFkZGlyU3luYywgbWFwKHBpcGUocGF0aEpvaW5QcmVmaXgoZm9sZGVyKSwgd2Fsa0RpcikpLCBmbGF0dGVuQXJyYXkpKGZvbGRlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbEZpbGVzUmVjdXJzaXZlbHlcclxuIiwiY29uc3QgeyByZXBsYWNlIH0gPSAnJ1xyXG5cclxuLy8gZXNjYXBlXHJcbmNvbnN0IGVzID0gLyYoPzphbXB8IzM4fGx0fCM2MHxndHwjNjJ8YXBvc3wjMzl8cXVvdHwjMzQpOy9nXHJcbmNvbnN0IGNhID0gL1smPD4nXCJdL2dcclxuXHJcbmNvbnN0IGVzY2EgPSB7XHJcbiAgJyYnOiAnJmFtcDsnLFxyXG4gICc8JzogJyZsdDsnLFxyXG4gICc+JzogJyZndDsnLFxyXG4gIFwiJ1wiOiAnJiMzOTsnLFxyXG4gICdcIic6ICcmcXVvdDsnLFxyXG59XHJcbmNvbnN0IHBlID0gKG0pID0+IGVzY2FbbV1cclxuXHJcbi8qKlxyXG4gKiBTYWZlbHkgZXNjYXBlIEhUTUwgZW50aXRpZXMgc3VjaCBhcyBgJmAsIGA8YCwgYD5gLCBgXCJgLCBhbmQgYCdgLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZXMgdGhlIGlucHV0IHRvIHNhZmVseSBlc2NhcGVcclxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGVzY2FwZWQgaW5wdXQsIGFuZCBpdCAqKnRocm93cyoqIGFuIGVycm9yIGlmXHJcbiAqICB0aGUgaW5wdXQgdHlwZSBpcyB1bmV4cGVjdGVkLCBleGNlcHQgZm9yIGJvb2xlYW4gYW5kIG51bWJlcnMsXHJcbiAqICBjb252ZXJ0ZWQgYXMgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVzY2FwZSA9IChlcykgPT4gcmVwbGFjZS5jYWxsKGVzLCBjYSwgcGUpXHJcbiIsImNvbnN0IGtlYmFiQ2FzZSA9IChzdHIpID0+XHJcbiAgc3RyICYmXHJcbiAgc3RyXHJcbiAgICAubWF0Y2goL1tBLVpdezIsfSg/PVtBLVpdW2Etel0rWzAtOV0qfFxcYil8W0EtWl0/W2Etel0rWzAtOV0qfFtBLVpdfFswLTldKy9nKVxyXG4gICAgLm1hcCgoeCkgPT4geC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmpvaW4oJy0nKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQga2ViYWJDYXNlXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKHdpZHRoSW50KXx8dHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZpc05hTihoZWlnaHRJbnQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYobGF5b3V0IT09J2ZpbGwnJiYod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtkZWNvZGluZzpcImFzeW5jXCIsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXRoVG9SZWdleHA9ZXhwb3J0cy5kZWZhdWx0PWV4cG9ydHMuY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucz1leHBvcnRzLm1hdGNoZXJPcHRpb25zPXZvaWQgMDt2YXIgcGF0aFRvUmVnZXhwPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHBcIikpO2V4cG9ydHMucGF0aFRvUmVnZXhwPXBhdGhUb1JlZ2V4cDtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWNvbnN0IG1hdGNoZXJPcHRpb25zPXtzZW5zaXRpdmU6ZmFsc2UsZGVsaW1pdGVyOicvJ307ZXhwb3J0cy5tYXRjaGVyT3B0aW9ucz1tYXRjaGVyT3B0aW9ucztjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPXsuLi5tYXRjaGVyT3B0aW9ucyxzdHJpY3Q6dHJ1ZX07ZXhwb3J0cy5jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPWN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM7dmFyIF9kZWZhdWx0PShjdXN0b21Sb3V0ZT1mYWxzZSk9PntyZXR1cm4gcGF0aD0+e2NvbnN0IGtleXM9W107Y29uc3QgbWF0Y2hlclJlZ2V4PXBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAocGF0aCxrZXlzLGN1c3RvbVJvdXRlP2N1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6bWF0Y2hlck9wdGlvbnMpO2NvbnN0IG1hdGNoZXI9cGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LGtleXMpO3JldHVybihwYXRobmFtZSxwYXJhbXMpPT57Y29uc3QgcmVzPXBhdGhuYW1lPT1udWxsP2ZhbHNlOm1hdGNoZXIocGF0aG5hbWUpO2lmKCFyZXMpe3JldHVybiBmYWxzZTt9aWYoY3VzdG9tUm91dGUpe2Zvcihjb25zdCBrZXkgb2Yga2V5cyl7Ly8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG5pZih0eXBlb2Yga2V5Lm5hbWU9PT0nbnVtYmVyJyl7ZGVsZXRlIHJlcy5wYXJhbXNba2V5Lm5hbWVdO319fXJldHVybnsuLi5wYXJhbXMsLi4ucmVzLnBhcmFtc307fTt9O307ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC1tYXRjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hdGNoSGFzPW1hdGNoSGFzO2V4cG9ydHMuY29tcGlsZU5vblBhdGg9Y29tcGlsZU5vblBhdGg7ZXhwb3J0cy5kZWZhdWx0PXByZXBhcmVEZXN0aW5hdGlvbjtleHBvcnRzLmdldFNhZmVQYXJhbU5hbWU9dm9pZCAwO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgcGF0aFRvUmVnZXhwPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHBcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gZW5zdXJlIG9ubHkgYS16QS1aIGFyZSB1c2VkIGZvciBwYXJhbSBuYW1lcyBmb3IgcHJvcGVyIGludGVycG9sYXRpbmdcbi8vIHdpdGggcGF0aC10by1yZWdleHBcbmNvbnN0IGdldFNhZmVQYXJhbU5hbWU9cGFyYW1OYW1lPT57bGV0IG5ld1BhcmFtTmFtZT0nJztmb3IobGV0IGk9MDtpPHBhcmFtTmFtZS5sZW5ndGg7aSsrKXtjb25zdCBjaGFyQ29kZT1wYXJhbU5hbWUuY2hhckNvZGVBdChpKTtpZihjaGFyQ29kZT42NCYmY2hhckNvZGU8OTF8fC8vIEEtWlxuY2hhckNvZGU+OTYmJmNoYXJDb2RlPDEyMy8vIGEtelxuKXtuZXdQYXJhbU5hbWUrPXBhcmFtTmFtZVtpXTt9fXJldHVybiBuZXdQYXJhbU5hbWU7fTtleHBvcnRzLmdldFNhZmVQYXJhbU5hbWU9Z2V0U2FmZVBhcmFtTmFtZTtmdW5jdGlvbiBtYXRjaEhhcyhyZXEsaGFzLHF1ZXJ5KXtjb25zdCBwYXJhbXM9e307bGV0IGluaXRpYWxRdWVyeVZhbHVlcz1bXTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2luaXRpYWxRdWVyeVZhbHVlcz1PYmplY3QudmFsdWVzKHJlcS5fX05FWFRfSU5JVF9RVUVSWSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7aW5pdGlhbFF1ZXJ5VmFsdWVzPUFycmF5LmZyb20obmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLnZhbHVlcygpKTt9Y29uc3QgYWxsTWF0Y2g9aGFzLmV2ZXJ5KGhhc0l0ZW09PntsZXQgdmFsdWU7bGV0IGtleT1oYXNJdGVtLmtleTtzd2l0Y2goaGFzSXRlbS50eXBlKXtjYXNlJ2hlYWRlcic6e2tleT1rZXkudG9Mb3dlckNhc2UoKTt2YWx1ZT1yZXEuaGVhZGVyc1trZXldO2JyZWFrO31jYXNlJ2Nvb2tpZSc6e3ZhbHVlPXJlcS5jb29raWVzW2hhc0l0ZW0ua2V5XTticmVhazt9Y2FzZSdxdWVyeSc6ey8vIHByZXNlcnZlIGluaXRpYWwgZW5jb2Rpbmcgb2YgcXVlcnkgdmFsdWVzXG52YWx1ZT1xdWVyeVtrZXldO2lmKGluaXRpYWxRdWVyeVZhbHVlcy5pbmNsdWRlcyh2YWx1ZXx8JycpKXt2YWx1ZT1lbmNvZGVVUklDb21wb25lbnQodmFsdWUpO31icmVhazt9Y2FzZSdob3N0Jzp7Y29uc3R7aG9zdH09KHJlcT09bnVsbD92b2lkIDA6cmVxLmhlYWRlcnMpfHx7fTsvLyByZW1vdmUgcG9ydCBmcm9tIGhvc3QgaWYgcHJlc2VudFxuY29uc3QgaG9zdG5hbWU9aG9zdD09bnVsbD92b2lkIDA6aG9zdC5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7dmFsdWU9aG9zdG5hbWU7YnJlYWs7fWRlZmF1bHQ6e2JyZWFrO319aWYoIWhhc0l0ZW0udmFsdWUmJnZhbHVlKXtwYXJhbXNbZ2V0U2FmZVBhcmFtTmFtZShrZXkpXT12YWx1ZTtyZXR1cm4gdHJ1ZTt9ZWxzZSBpZih2YWx1ZSl7Y29uc3QgbWF0Y2hlcj1uZXcgUmVnRXhwKGBeJHtoYXNJdGVtLnZhbHVlfSRgKTtjb25zdCBtYXRjaGVzPXZhbHVlLm1hdGNoKG1hdGNoZXIpO2lmKG1hdGNoZXMpe2lmKG1hdGNoZXMuZ3JvdXBzKXtPYmplY3Qua2V5cyhtYXRjaGVzLmdyb3VwcykuZm9yRWFjaChncm91cEtleT0+e3BhcmFtc1tncm91cEtleV09bWF0Y2hlcy5ncm91cHNbZ3JvdXBLZXldO30pO31lbHNlIGlmKGhhc0l0ZW0udHlwZT09PSdob3N0JyYmbWF0Y2hlc1swXSl7cGFyYW1zLmhvc3Q9bWF0Y2hlc1swXTt9cmV0dXJuIHRydWU7fX1yZXR1cm4gZmFsc2U7fSk7aWYoYWxsTWF0Y2gpe3JldHVybiBwYXJhbXM7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWUscGFyYW1zKXtpZighdmFsdWUuaW5jbHVkZXMoJzonKSl7cmV0dXJuIHZhbHVlO31mb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpe2lmKHZhbHVlLmluY2x1ZGVzKGA6JHtrZXl9YCkpe3ZhbHVlPXZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwqYCwnZycpLGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2ApLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFw/YCwnZycpLGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCtgLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fSg/IVxcXFx3KWAsJ2cnKSxgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YCk7fX12YWx1ZT12YWx1ZS5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csJ1xcXFwkMScpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9QTFVTL2csJysnKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywnOicpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCc/JykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLUy9nLCcqJyk7Ly8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4vLyBjb3JyZWN0bHlcbnJldHVybiBwYXRoVG9SZWdleHAuY29tcGlsZShgLyR7dmFsdWV9YCx7dmFsaWRhdGU6ZmFsc2V9KShwYXJhbXMpLnN1YnN0cigxKTt9ZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKGRlc3RpbmF0aW9uLHBhcmFtcyxxdWVyeSxhcHBlbmRQYXJhbXNUb1F1ZXJ5KXtsZXQgcGFyc2VkRGVzdGluYXRpb249e307Ly8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxucXVlcnk9T2JqZWN0LmFzc2lnbih7fSxxdWVyeSk7Y29uc3QgaGFkTG9jYWxlPXF1ZXJ5Ll9fbmV4dExvY2FsZTtkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlO2RlbGV0ZSBxdWVyeS5fX25leHREZWZhdWx0TG9jYWxlO2lmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7cGFyc2VkRGVzdGluYXRpb249KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO31lbHNle2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxoYXNoLGhvc3RuYW1lLHBvcnQscHJvdG9jb2wsc2VhcmNoLGhyZWZ9PW5ldyBVUkwoZGVzdGluYXRpb24pO3BhcnNlZERlc3RpbmF0aW9uPXtwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxoYXNoLHByb3RvY29sLGhvc3RuYW1lLHBvcnQsc2VhcmNoLGhyZWZ9O31jb25zdCBkZXN0UXVlcnk9cGFyc2VkRGVzdGluYXRpb24ucXVlcnk7Y29uc3QgZGVzdFBhdGg9YCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWV9JHtwYXJzZWREZXN0aW5hdGlvbi5oYXNofHwnJ31gO2NvbnN0IGRlc3RQYXRoUGFyYW1LZXlzPVtdO3BhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsZGVzdFBhdGhQYXJhbUtleXMpO2NvbnN0IGRlc3RQYXRoUGFyYW1zPWRlc3RQYXRoUGFyYW1LZXlzLm1hcChrZXk9PmtleS5uYW1lKTtsZXQgZGVzdGluYXRpb25Db21waWxlcj1wYXRoVG9SZWdleHAuY29tcGlsZShkZXN0UGF0aCwvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbi8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4vLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4vLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbi8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbnt2YWxpZGF0ZTpmYWxzZX0pO2xldCBuZXdVcmw7Ly8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG5mb3IoY29uc3Rba2V5LHN0ck9yQXJyYXldb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSl7bGV0IHZhbHVlPUFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSk/c3RyT3JBcnJheVswXTpzdHJPckFycmF5O2lmKHZhbHVlKXsvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbi8vIGNvcnJlY3RseVxudmFsdWU9Y29tcGlsZU5vblBhdGgodmFsdWUscGFyYW1zKTt9ZGVzdFF1ZXJ5W2tleV09dmFsdWU7fS8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3Rcbi8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG5sZXQgcGFyYW1LZXlzPU9iamVjdC5rZXlzKHBhcmFtcyk7Ly8gcmVtb3ZlIGludGVybmFsIHBhcmFtIGZvciBpMThuXG5pZihoYWRMb2NhbGUpe3BhcmFtS2V5cz1wYXJhbUtleXMuZmlsdGVyKG5hbWU9Pm5hbWUhPT0nbmV4dEludGVybmFsTG9jYWxlJyk7fWlmKGFwcGVuZFBhcmFtc1RvUXVlcnkmJiFwYXJhbUtleXMuc29tZShrZXk9PmRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpKXtmb3IoY29uc3Qga2V5IG9mIHBhcmFtS2V5cyl7aWYoIShrZXkgaW4gZGVzdFF1ZXJ5KSl7ZGVzdFF1ZXJ5W2tleV09cGFyYW1zW2tleV07fX19dHJ5e25ld1VybD1kZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcyk7Y29uc3RbcGF0aG5hbWUsaGFzaF09bmV3VXJsLnNwbGl0KCcjJyk7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWU9cGF0aG5hbWU7cGFyc2VkRGVzdGluYXRpb24uaGFzaD1gJHtoYXNoPycjJzonJ30ke2hhc2h8fCcnfWA7ZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaDt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSl7dGhyb3cgbmV3IEVycm9yKGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtbXVsdGktbWF0Y2hgKTt9dGhyb3cgZXJyO30vLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4vLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4vLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeT17Li4ucXVlcnksLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnl9O3JldHVybntuZXdVcmwscGFyc2VkRGVzdGluYXRpb259O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZXBhcmUtZGVzdGluYXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1yZXNvbHZlUmV3cml0ZXM7dmFyIF9wYXRoTWF0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXRoLW1hdGNoXCIpKTt2YXIgX3ByZXBhcmVEZXN0aW5hdGlvbj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9wcmVwYXJlLWRlc3RpbmF0aW9uXCIpKTt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi8uLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9yb3V0ZXJcIik7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlcj0oMCxfcGF0aE1hdGNoLmRlZmF1bHQpKHRydWUpO2Z1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhhc1BhdGgscGFnZXMscmV3cml0ZXMscXVlcnkscmVzb2x2ZUhyZWYsbG9jYWxlcyl7bGV0IG1hdGNoZWRQYWdlPWZhbHNlO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2xldCBmc1BhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKSgoMCxfcm91dGVyLmRlbEJhc2VQYXRoKShwYXJzZWRBcy5wYXRobmFtZSksbG9jYWxlcykucGF0aG5hbWUpO2xldCByZXNvbHZlZEhyZWY7Y29uc3QgaGFuZGxlUmV3cml0ZT1yZXdyaXRlPT57Y29uc3QgbWF0Y2hlcj1jdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpO2xldCBwYXJhbXM9bWF0Y2hlcihwYXJzZWRBcy5wYXRobmFtZSk7aWYocmV3cml0ZS5oYXMmJnBhcmFtcyl7Y29uc3QgaGFzUGFyYW1zPSgwLF9wcmVwYXJlRGVzdGluYXRpb24ubWF0Y2hIYXMpKHtoZWFkZXJzOntob3N0OmRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lfSxjb29raWVzOmRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5yZWR1Y2UoKGFjYyxpdGVtKT0+e2NvbnN0W2tleSwuLi52YWx1ZV09aXRlbS5zcGxpdCgnPScpO2FjY1trZXldPXZhbHVlLmpvaW4oJz0nKTtyZXR1cm4gYWNjO30se30pfSxyZXdyaXRlLmhhcyxwYXJzZWRBcy5xdWVyeSk7aWYoaGFzUGFyYW1zKXtPYmplY3QuYXNzaWduKHBhcmFtcyxoYXNQYXJhbXMpO31lbHNle3BhcmFtcz1mYWxzZTt9fWlmKHBhcmFtcyl7aWYoIXJld3JpdGUuZGVzdGluYXRpb24pey8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG5yZXR1cm4gdHJ1ZTt9Y29uc3QgZGVzdFJlcz0oMCxfcHJlcGFyZURlc3RpbmF0aW9uLmRlZmF1bHQpKHJld3JpdGUuZGVzdGluYXRpb24scGFyYW1zLHF1ZXJ5LHRydWUpO3BhcnNlZEFzPWRlc3RSZXMucGFyc2VkRGVzdGluYXRpb247YXNQYXRoPWRlc3RSZXMubmV3VXJsO09iamVjdC5hc3NpZ24ocXVlcnksZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSk7ZnNQYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoKDAsX3JvdXRlci5kZWxCYXNlUGF0aCkoYXNQYXRoKSxsb2NhbGVzKS5wYXRobmFtZSk7aWYocGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpey8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xubWF0Y2hlZFBhZ2U9dHJ1ZTtyZXNvbHZlZEhyZWY9ZnNQYXRobmFtZTtyZXR1cm4gdHJ1ZTt9Ly8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbnJlc29sdmVkSHJlZj1yZXNvbHZlSHJlZihmc1BhdGhuYW1lKTtpZihyZXNvbHZlZEhyZWYhPT1hc1BhdGgmJnBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpe21hdGNoZWRQYWdlPXRydWU7cmV0dXJuIHRydWU7fX19O2xldCBmaW5pc2hlZD1mYWxzZTtmb3IobGV0IGk9MDtpPHJld3JpdGVzLmJlZm9yZUZpbGVzLmxlbmd0aDtpKyspey8vIHdlIGRvbid0IGVuZCBhZnRlciBtYXRjaCBpbiBiZWZvcmVGaWxlcyB0byBhbGxvd1xuLy8gY29udGludWluZyB0aHJvdWdoIGFsbCBiZWZvcmVGaWxlcyByZXdyaXRlc1xuaGFuZGxlUmV3cml0ZShyZXdyaXRlcy5iZWZvcmVGaWxlc1tpXSk7fW1hdGNoZWRQYWdlPXBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpO2lmKCFtYXRjaGVkUGFnZSl7aWYoIWZpbmlzaGVkKXtmb3IobGV0IGk9MDtpPHJld3JpdGVzLmFmdGVyRmlsZXMubGVuZ3RoO2krKyl7aWYoaGFuZGxlUmV3cml0ZShyZXdyaXRlcy5hZnRlckZpbGVzW2ldKSl7ZmluaXNoZWQ9dHJ1ZTticmVhazt9fX0vLyBjaGVjayBkeW5hbWljIHJvdXRlIGJlZm9yZSBwcm9jZXNzaW5nIGZhbGxiYWNrIHJld3JpdGVzXG5pZighZmluaXNoZWQpe3Jlc29sdmVkSHJlZj1yZXNvbHZlSHJlZihmc1BhdGhuYW1lKTttYXRjaGVkUGFnZT1wYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpO2ZpbmlzaGVkPW1hdGNoZWRQYWdlO31pZighZmluaXNoZWQpe2ZvcihsZXQgaT0wO2k8cmV3cml0ZXMuZmFsbGJhY2subGVuZ3RoO2krKyl7aWYoaGFuZGxlUmV3cml0ZShyZXdyaXRlcy5mYWxsYmFja1tpXSkpe2ZpbmlzaGVkPXRydWU7YnJlYWs7fX19fXJldHVybnthc1BhdGgscGFyc2VkQXMsbWF0Y2hlZFBhZ2UscmVzb2x2ZWRIcmVmfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNvbHZlLXJld3JpdGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCB7IFBhZ2VTZW8gfSBmcm9tICdAL2NvbXBvbmVudHMvU0VPJ1xyXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXHJcbmltcG9ydCBMaXN0TGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9MaXN0TGF5b3V0J1xyXG5pbXBvcnQgZ2VuZXJhdGVSc3MgZnJvbSAnQC9saWIvZ2VuZXJhdGUtcnNzJ1xyXG5pbXBvcnQgeyBnZXRBbGxGaWxlc0Zyb250TWF0dGVyIH0gZnJvbSAnQC9saWIvbWR4J1xyXG5pbXBvcnQgeyBnZXRBbGxUYWdzIH0gZnJvbSAnQC9saWIvdGFncydcclxuaW1wb3J0IGtlYmFiQ2FzZSBmcm9tICdAL2xpYi91dGlscy9rZWJhYkNhc2UnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgdGFncyA9IGF3YWl0IGdldEFsbFRhZ3MoJ2Jsb2cnKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IE9iamVjdC5rZXlzKHRhZ3MpLm1hcCgodGFnKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICB0YWcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsRmlsZXNGcm9udE1hdHRlcignYmxvZycpXHJcbiAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IGFsbFBvc3RzLmZpbHRlcihcclxuICAgIChwb3N0KSA9PiBwb3N0LmRyYWZ0ICE9PSB0cnVlICYmIHBvc3QudGFncy5tYXAoKHQpID0+IGtlYmFiQ2FzZSh0KSkuaW5jbHVkZXMocGFyYW1zLnRhZylcclxuICApXHJcblxyXG4gIC8vIHJzc1xyXG4gIGNvbnN0IHJzcyA9IGdlbmVyYXRlUnNzKGZpbHRlcmVkUG9zdHMsIGB0YWdzLyR7cGFyYW1zLnRhZ30vaW5kZXgueG1sYClcclxuICBjb25zdCByc3NQYXRoID0gcGF0aC5qb2luKHJvb3QsICdwdWJsaWMnLCAndGFncycsIHBhcmFtcy50YWcpXHJcbiAgZnMubWtkaXJTeW5jKHJzc1BhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXHJcbiAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ocnNzUGF0aCwgJ2luZGV4LnhtbCcpLCByc3MpXHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IHBvc3RzOiBmaWx0ZXJlZFBvc3RzLCB0YWc6IHBhcmFtcy50YWcgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhZyh7IHBvc3RzLCB0YWcgfSkge1xyXG4gIC8vIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyIGFuZCBjb252ZXJ0IHNwYWNlIHRvIGRhc2hcclxuICBjb25zdCB0aXRsZSA9IHRhZ1swXS50b1VwcGVyQ2FzZSgpICsgdGFnLnNwbGl0KCcgJykuam9pbignLScpLnNsaWNlKDEpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYWdlU2VvXHJcbiAgICAgICAgdGl0bGU9e2Ake3RhZ30gLSAke3NpdGVNZXRhZGF0YS50aXRsZX1gfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtgJHt0YWd9IHRhZ3MgLSAke3NpdGVNZXRhZGF0YS50aXRsZX1gfVxyXG4gICAgICAgIHVybD17YCR7c2l0ZU1ldGFkYXRhLnNpdGVVcmx9L3RhZ3MvJHt0YWd9YH1cclxuICAgICAgLz5cclxuICAgICAgPExpc3RMYXlvdXQgcG9zdHM9e3Bvc3RzfSB0aXRsZT17dGl0bGV9IC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWFwYm94L3JlaHlwZS1wcmlzbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbWFnZS1zaXplXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGluZy10aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWh5cGUta2F0ZXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1hdXRvbGluay1oZWFkaW5nc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLWNvZGUtdGl0bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstbWF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLXNsdWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXN0LXV0aWwtdmlzaXRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=