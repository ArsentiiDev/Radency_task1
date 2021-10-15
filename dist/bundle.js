/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://task1/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://task1/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://task1/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://task1/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://task1/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\nconst submitBtn = document.getElementById(\"submit-btn\");\r\nconst form = document.forms[0];\r\nconst tableBody = document.getElementById(\"tbody\");\r\nconst sumList = document.querySelector(\".sumList\");\r\nconst todos = document.querySelector(\".todos\");\r\n\r\n\r\n\r\nconst categories = {\r\n  1: \"Task\",\r\n  2: \"Random Thought\",\r\n  3: \"Idea\",\r\n  4: \"Qoute\",\r\n};\r\nconst icons = {\r\n  Task: `<i class=\"fas fa-tasks\"></i>`,\r\n  \"Random Thought\": `<i class=\"fas fa-brain\"></i>`,\r\n  Idea: `<i class=\"fas fa-lightbulb\"></i>`,\r\n  Qoute: `<i class=\"fas fa-quote-right\"></i>`,\r\n};\r\nconst sumListItems = {};\r\n\r\nsubmitBtn.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  const categoryName = categories.hasOwnProperty(form.elements.category.value)\r\n    ? categories[form.elements.category.value]\r\n    : \"none\";\r\n  const icon = icons.hasOwnProperty(categoryName)\r\n    ? icons[categoryName]\r\n    : `<i class=\"fas fa-times\"></i>`;\r\n  addNote(\r\n    form.elements.name.value,\r\n    categoryName,\r\n    icon,\r\n    form.elements.content.value\r\n  );\r\n  addToSumList(categoryName);\r\n  clearFields();\r\n});\r\n\r\nfunction addNote(name, category, icon, content) {\r\n  const now = new Date().toLocaleDateString().split(\".\").join(\"/\");\r\n  let dates = content.match(/([\\d]+)([\\-\\./])([\\d]+)([\\-\\./])([\\d]+)/gm);\r\n  if (!dates) dates = \"no dates\";\r\n  const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  console.log(id)\r\n  tableBody.innerHTML += `<tr class=\"d-flex ${category}\" id=\"item\">\r\n    <td class=\"col-2 name\">${icon}${name}</td>\r\n    <td class=\"col-2\">${now}</td>\r\n    <td class=\"col-2 category\">${category}</td>\r\n    <td class=\"col-3 content\">${content}</td>\r\n    <td class=\"col-2\">${dates}</td>\r\n    <td class=\"ml-auto icons\">\r\n            <i class=\"fas fa-edit\"></i>\r\n            <i class=\"fas fa-trash\"></i>\r\n            <i class=\"fas fa-archive\"></i>\r\n          </td>\r\n    </tr>`;\r\n}\r\nfunction clearFields() {\r\n  form.elements.name.value = \"\";\r\n  form.elements.category.options[0].selected = true;\r\n  form.elements.content.value = \"\";\r\n}\r\n\r\ntableBody.addEventListener(\"click\", (e) => {\r\n  const item = e.target;\r\n  if (item.classList[1] == \"fa-archive\") {\r\n    archiveBtnHandler(e)\r\n  } else if (item.classList[1] == \"fa-trash\") {\r\n    console.log(\"trash\");\r\n  } else if (item.classList[1] == \"fa-edit\") {\r\n    editBtnHandler(e);\r\n  } else if (item.classList[1] == \"fa-check\") {\r\n    checkBtnHandler(e);\r\n  }\r\n});\r\n\r\nfunction editBtnHandler(e) {\r\n  let item = e.target.parentElement.parentElement;\r\n  let arr = [].concat(...item.children).map((el, index) => {\r\n    if (el.classList.contains(\"name\"))\r\n      return `<td class=\"col-2 name\">\r\n        <input class=\"col-4\" type=\"text\" value=\"${el.innerText}\"/></td>`;\r\n    else if (el.classList.contains(\"category\"))\r\n      return `<td class=\"col-2 category\">\r\n            <select  name=\"category\" class=\"form-select\" aria-label=\"category-task\">\r\n            <option selected>Choose category</option>\r\n            <option value=\"1\">Task</option>\r\n            <option value=\"2\">Random Thought</option>\r\n            <option value=\"3\">Idea</option>\r\n            <option value=\"4\">Quote</option>\r\n          </select>\r\n            </td>`;\r\n    else if (el.classList.contains(\"content\")) {\r\n      return `<td class=\"col-3 content\" >\r\n                <textarea type=\"text\" >${el.innerText}</textarea>\r\n            </td>`;\r\n    } else if (el.classList.contains(\"icons\"))\r\n      return `<td class=\"ml-auto\">\r\n                <i class=\"fas fa-check\"></i>\r\n                <i class=\"fas fa-trash\"></i>\r\n                <i class=\"fas fa-archive\"></i>\r\n              </td>`;\r\n    else return `<td class=\"col-2\"></td>`;\r\n  });\r\n  item.innerHTML = arr.join(\"\");\r\n}\r\n\r\nfunction checkBtnHandler(e) {\r\n  const now = new Date().toLocaleDateString().split(\".\").join(\"/\");\r\n  let item = e.target.parentElement.parentElement;\r\n  const categoryName = categories.hasOwnProperty(\r\n    item.children[2].firstElementChild.value\r\n  )\r\n    ? categories[item.children[2].firstElementChild.value]\r\n    : \"none\";\r\n  let dates = item.children[3].firstElementChild.value.match(\r\n    /([\\d]+)([\\-\\./])([\\d]+)([\\-\\./])([\\d]+)/gm\r\n  );\r\n  let arr = [].concat(...item.children).map((el, index) => {\r\n    if (el.classList.contains(\"name\")) {\r\n      const icon = icons.hasOwnProperty(categoryName)\r\n        ? icons[categoryName]\r\n        : `<i class=\"fas fa-times\"></i>`;\r\n      return `<td class=\"col-2 name\">${icon + el.firstElementChild.value}</td>`;\r\n    } else if (index == 1) {\r\n      return `\r\n            <td class=\"col-2\">${now}</td>\r\n            `;\r\n    } else if (el.classList.contains(\"category\")) {\r\n      return `\r\n            <td class=\"col-2 category\">${categoryName}</td>\r\n            `;\r\n    } else if (el.classList.contains(\"content\")) {\r\n      return `\r\n            <td class=\"col-3 content\">${el.firstElementChild.value}</td>\r\n            `;\r\n    } else if (index == 4) {\r\n      return `\r\n            <td class=\"col-2\">${dates}</td>\r\n            `;\r\n    } else {\r\n      return `\r\n            <td class=\"ml-auto icons\">\r\n            <i class=\"fas fa-edit\"></i>\r\n            <i class=\"fas fa-trash\"></i>\r\n            <i class=\"fas fa-archive\"></i>\r\n          </td>\r\n          `;\r\n    }\r\n  });\r\n  item.innerHTML = arr.join(\"\");\r\n}\r\n\r\nfunction archiveBtnHandler(e){\r\n    let item = e.target.parentElement.parentElement;\r\n    item.classList.add('Archived')\r\n    addToSumList(item.childNodes[5].innerText)\r\n}\r\n\r\nfunction addToSumList(category) {\r\n  let count = 0;\r\n\r\n  if (sumListItems.hasOwnProperty(category)) {\r\n    let active = sumList\r\n      .getElementsByClassName(category)[0];\r\n    active.getElementsByClassName(\"active\")[0].innerText = +active.innerText + 1;\r\n    sumListItems[category] += 1;\r\n    active.getElementsByClassName(\"archive\")[0].innerText = +active.innerText + 1;\r\n  } else {\r\n    sumListItems[category] = ++count;\r\n    const icon = icons.hasOwnProperty(category)\r\n      ? icons[category]\r\n      : `<i class=\"fas fa-times\"></i>`;\r\n    sumList.innerHTML += `\r\n        <tr class=\"d-flex ${category} px-3\">\r\n        <td class=\"col-1\">${icon}</td>\r\n        <td class=\"col-4\">${category}</td>\r\n        <td class=\"col-2 active\">${1}</td>\r\n        <td class=\"col-2 archive\">${0}</td>\r\n        <td class=\"col-3\"></td>\r\n      </tr>`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;