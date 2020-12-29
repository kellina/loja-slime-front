/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/lojaSlime.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/lojaSlime.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --y-in-mn-blue: #355070;\\n    --chinese-violet: #6d597a;\\n    --rose-dust: #b56576;\\n    --candy-pink: #e56b6f;\\n    --tumbleweed: #eaac8b;\\n    --special-black: #0c0f0a;\\n    --white: #fff;\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    background-color: var(--candy-pink);\\n    font-family: \\\"Alegreya\\\", sans-serif;\\n}\\n\\na {\\n    text-decoration: none;\\n    color: var(--special-black);\\n}\\n\\np {\\n    margin-block-start: 1em;\\n    margin-block-end: 1em;\\n}\\n\\n\\n/* HEADER - MENU - PESQUISA */\\n\\n#header {\\n    position: relative;\\n    top: 0;\\n    width: 100%;\\n    min-height: auto;\\n    padding: 0px 20px;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    background-color: var(--rose-dust);\\n}\\n\\n.logo img {\\n    width: 116px;\\n    display: flex;\\n}\\n\\n#nav-bar {\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    padding: 0 50px;\\n    height: 50px;\\n    font-weight: 400;\\n    background-color: var(--rose-dust);\\n}\\n\\n#nav-bar ul {\\n    width: 500px;\\n    display: flex;\\n    justify-content: space-around;\\n}\\n\\n#nav-bar li {\\n    display: flex;\\n    align-items: center;\\n    list-style: none;\\n}\\n\\n#nav-bar li a {\\n    display: flex;\\n    align-items: center;\\n    padding: 0px 10px;\\n    border-bottom: 3px solid var(--rose-dust);\\n    color: var(--black);\\n    height: 100%;\\n}\\n\\n#nav-bar li a:hover {\\n    background-color: var(--chinese-violet);\\n    border-bottom: 3px solid var(--candy-pink);\\n    color: var(--white);\\n}\\n\\n#nav-bar li a.active {\\n    background-color: var(--y-in-mn-blue);\\n    color: var(--white);\\n}\\n\\n.cart {\\n    font-size: 30px;\\n}\\n\\n#header .hamburguer-menu {\\n    display: none;\\n    font-size: 22pt;\\n    cursor: pointer;\\n}\\n\\n\\n/* PESQUISAR NA PÁGINA  */\\n\\n\\n/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_search_menu */\\n\\n.search {\\n    float: right;\\n    min-width: 285px;\\n}\\n\\n.search input[type=\\\"text\\\"] {\\n    padding: 6px;\\n    font-size: 17px;\\n    border: none;\\n    outline: none;\\n    border-top-left-radius: 10px;\\n}\\n\\n.search button {\\n    float: right;\\n    padding: 6px 10px;\\n    margin-right: 16px;\\n    background: #ddd;\\n    font-size: 17px;\\n    border: none;\\n    cursor: pointer;\\n    border-bottom-right-radius: 10px;\\n}\\n\\n.search button:hover {\\n    background-color: #ccc;\\n}\\n\\n\\n/* TITULO DA LOJA */\\n\\n.sub-title {\\n    color: var(--white);\\n    margin: 20px 0;\\n    padding: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    border-radius: 3px;\\n}\\n\\n.sub-title h1 {\\n    font-size: 40px;\\n    text-shadow: 4px 4px 4px #aaa;\\n}\\n\\n.sub-title p {\\n    font-size: 30px;\\n    font-style: italic;\\n}\\n\\n.welcome-message {\\n    display: block;\\n    text-align: center;\\n    line-height: 100px;\\n    width: 100%;\\n    background: var(--rose-dust);\\n    color: var(--white);\\n    padding: 30px;\\n    margin-bottom: 40px;\\n}\\n\\n.p-relative {\\n    position: relative;\\n}\\n\\n.welcome-message h2 {\\n    font-size: 20px;\\n}\\n\\n\\n/* MEUS PRODUTOS */\\n\\n#products {\\n    display: flex;\\n    flex-wrap: wrap;\\n    max-width: 800px;\\n    margin: 0 auto;\\n}\\n\\n.item-span {\\n    margin: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    flex: 1 1 190px;\\n}\\n\\n.item-span img {\\n    max-width: 80%;\\n    display: block;\\n    height: 250px;\\n    transition: transform 0.2s;\\n    border-radius: 3px;\\n}\\n\\n.item-span img:hover {\\n    transform: scale(1.2) translateY(-40px);\\n}\\n\\n.descricao {\\n    width: 100%;\\n    text-align: center;\\n    margin-top: 10px;\\n    padding-bottom: 30px;\\n}\\n\\n.item-span button {\\n    cursor: pointer;\\n    width: 70%;\\n    height: 30px;\\n    font-weight: bold;\\n}\\n\\n.item-span button:hover {\\n    border: solid 2px var(--y-in-mn-blue);\\n    color: var(--white);\\n    background-color: var(--chinese-violet);\\n}\\n\\n.item-span button i {\\n    font-size: 20px;\\n    vertical-align: middle;\\n}\\n\\n\\n/* FORMULARIO NEWSLATTER */\\n\\n.container-news-contact {\\n    display: flex;\\n    flex-wrap: wrap;\\n    padding: 15px;\\n    background-color: var(--rose-dust);\\n}\\n\\n#form-newslatter {\\n    border-radius: 5px;\\n    width: calc(50% - 30px);\\n    min-height: 60px;\\n}\\n\\n.newslatter-title {\\n    font-size: 20px;\\n    font-weight: bold;\\n    font-style: italic;\\n    border-bottom: 2px solid var(--white);\\n    margin-bottom: 20px;\\n    padding: 4px;\\n}\\n\\n#form-newslatter input[type=\\\"text\\\"] {\\n    width: 50%;\\n    margin-bottom: 10px;\\n    padding: 12px;\\n    border: 1px solid #c2c2c2;\\n    box-shadow: 1px 1px 2px #ebebeb;\\n    border-radius: 4px;\\n}\\n\\n#form-newslatter input[type=\\\"submit\\\"] {\\n    background-color: var(--y-in-mn-blue);\\n    color: var(--white);\\n    padding: 10px 20px;\\n    box-shadow: 1px 1px 3px var(--white);\\n    border: none;\\n    border-radius: 4px;\\n    float: inline-end;\\n    cursor: pointer;\\n}\\n\\n#contact {\\n    width: calc(50% - 30px);\\n    min-height: 60px;\\n    border-radius: 5px;\\n    text-align: left;\\n    padding-left: 30px;\\n}\\n\\n.contact-title {\\n    font-size: 20px;\\n    font-weight: bold;\\n    font-style: italic;\\n    border-bottom: 2px solid var(--white);\\n    margin-bottom: 20px;\\n    padding: 4px;\\n}\\n\\nfooter {\\n    font-size: 0.9em;\\n    margin: 10px;\\n    color: var(--special-black);\\n}\\n\\n\\n/* MEDIA QUERY */\\n\\n@media (max-width: 650px) {\\n    #header {\\n        padding: 0;\\n    }\\n    .logo {\\n        display: none;\\n    }\\n    #header .hamburguer-menu {\\n        display: flex;\\n    }\\n    #header .search {\\n        min-width: unset;\\n    }\\n    #nav-bar {\\n        padding: 0;\\n        height: auto;\\n        position: absolute;\\n        display: none;\\n    }\\n    #nav-bar ul {\\n        width: unset;\\n        flex-direction: column;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://loja-slime-frontend/./src/assets/lojaSlime.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://loja-slime-frontend/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/lojaSlime.css":
/*!**********************************!*\
  !*** ./src/assets/lojaSlime.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_lojaSlime_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./lojaSlime.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/lojaSlime.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_lojaSlime_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_lojaSlime_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://loja-slime-frontend/./src/assets/lojaSlime.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://loja-slime-frontend/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _produto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produto-service */ \"./src/produto-service.js\");\n/* harmony import */ var _assets_lojaSlime_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/lojaSlime.css */ \"./src/assets/lojaSlime.css\");\n\n\n\nfunction showMenu() {\n  const x = document.getElementById(\"nav-bar\");\n  if (x.style.display === \"flex\") {\n    x.style.display = \"none\";\n  } else {\n    x.style.display = \"flex\";\n  }\n}\n\nfunction listProdutos() {\n  const nome = document.getElementById(\"search\").value;\n  (0,_produto_service__WEBPACK_IMPORTED_MODULE_0__.getProdutos)(nome).then((produtos) => {\n    const htmls = produtos.map(\n      (produto) => `<div class=\"item-span\">\n    <img src=\"${produto.image}\" alt=\"${produto.name}\">\n    <div class=\"descricao\">\n        <h3>${produto.name}</h3>\n        <p class=\"price\">R$ ${produto.price}</p>\n        <label for=\"quantity\" > Quantidade: </label> \n        <input type=\"number\" id=\"quantity\"  name=\"products[quantity]\" min=\"0\" value=\"1\" >\n        <button type=\"submit\" class=\"SubmitButton AddToCart\"><span>Adicionar ao carrinho</span>\n            <i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i>\n        </button>\n    </div>\n</div>`,\n    );\n\n    const produtosDiv = document.getElementById(\"products\");\n    if (htmls.length === 0) {\n      produtosDiv.innerHTML = \"<div class=\\\"not-found\\\">Produto não encontrado.</div>\";\n    } else {\n      produtosDiv.innerHTML = htmls.join(\"\\n\");\n    }\n  });\n}\nlistProdutos();\n\nfunction searchKeypressed(event) {\n  if (event.charCode === 13) listProdutos();\n}\n\n\n//# sourceURL=webpack://loja-slime-frontend/./src/index.js?");

/***/ }),

/***/ "./src/produto-service.js":
/*!********************************!*\
  !*** ./src/produto-service.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProdutos\": () => /* binding */ getProdutos\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\nasync function getProdutos(nome) {\n  let url = \"https://loja-slime-backend.herokuapp.com/produtos\";\n\n  if (nome) {\n    url += `?nome=${nome}`;\n  }\n  const httpresp = await window.fetch(url);\n  const produtos = httpresp.json();\n  return produtos;\n}\n\n\n//# sourceURL=webpack://loja-slime-frontend/./src/produto-service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;