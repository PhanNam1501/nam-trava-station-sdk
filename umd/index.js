(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("web3-eth-abi"), require("web3-utils"), require("@zennomi/tokens"), require("decimal.js"), require("ethers"));
	else if(typeof define === 'function' && define.amd)
		define(["web3-eth-abi", "web3-utils", "@zennomi/tokens", "decimal.js", "ethers"], factory);
	else if(typeof exports === 'object')
		exports["trava-station-sdk"] = factory(require("web3-eth-abi"), require("web3-utils"), require("@zennomi/tokens"), require("decimal.js"), require("ethers"));
	else
		root["trava-station-sdk"] = factory(root["web3-eth-abi"], root["web3-utils"], root["@zennomi/tokens"], root["decimal.js"], root["ethers"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__16__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var web3_eth_abi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var web3_eth_abi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_eth_abi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abis_Action_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _getArgumentMappingWithSlots = /*#__PURE__*/new WeakSet();
var _getPlaceholderForType = /*#__PURE__*/new WeakSet();
/**
 * Single action that can be executed directly, or combined into a set (ie. supply a vault)
 *
 * @category Base Classes
 */
class Action {
  /**
   * @param name
   * @param contractAddress
   * @param paramTypes
   * @param args
   */
  constructor(name, contractAddress, paramTypes, args) {
    /**
     * @param type
     *
     */
    _classPrivateMethodInitSpec(this, _getPlaceholderForType);
    /**
     *
     */
    _classPrivateMethodInitSpec(this, _getArgumentMappingWithSlots);
    _defineProperty(this, "contractAddress", void 0);
    _defineProperty(this, "paramTypes", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "args", void 0);
    _defineProperty(this, "mappableArgs", void 0);
    // if (new.target === Action) throw new TypeError("Actions are instantiated using derived classes");

    if (paramTypes.length !== args.length) throw new Error('Parameters/arguments length mismatch');
    this.contractAddress = contractAddress;
    this.paramTypes = paramTypes;
    this.name = name;
    this.args = args;
    this.mappableArgs = args; // TODO change to class method
  }

  /**
   *
   */
  getId() {
    return (0,web3_utils__WEBPACK_IMPORTED_MODULE_1__.keccak256)(this.name).substr(0, 10);
  }
  /**
   *
   */
  _getArgumentMapping() {
    return this.mappableArgs.map(arg => {
      if (new RegExp(/\$\d+/).test(arg)) {
        if (Array.isArray(arg)) throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
        // eslint-disable-next-line
        return parseInt(arg.substr(1));
      }
      return 0;
    });
  }
  _parseParamType(paramType, arg) {
    if (typeof paramType === 'string') {
      if (paramType.startsWith('(')) {
        var _paramType = paramType.replace('(', '');
        _paramType = _paramType.replace(')', '');
        return _paramType.split(',');
      }
      if (paramType.endsWith('[]')) {
        return Array.from(Array(arg.length).fill(paramType.replace('[]', '')));
      }
    }
    return paramType;
  }

  /**
   *
   */
  _replaceWithPlaceholders(arg, paramType) {
    var paramTypeParsed = this._parseParamType(paramType, arg);
    if (Array.isArray(arg)) return arg.map((_arg, i) => this._replaceWithPlaceholders(_arg, paramTypeParsed[i]));
    if (typeof paramType === 'string') {
      if (new RegExp(/\$\d+/).test(arg)) return _classPrivateMethodGet(this, _getPlaceholderForType, _getPlaceholderForType2).call(this, paramType);
      if (new RegExp(/&\w+/).test(arg)) return _classPrivateMethodGet(this, _getPlaceholderForType, _getPlaceholderForType2).call(this, paramType);
    }
    return arg;
  }

  /**
   *
   */
  _formatType(paramType) {
    if (Array.isArray(paramType)) return "(".concat(paramType.map(_paramType => this._formatType(_paramType)), ")");
    return paramType;
  }

  /**
   * Encode arguments for calling the action directly
   * @returns bytes-encoded args
   *
   */
  _encodeForCall() {
    var _arg = this._replaceWithPlaceholders(this.args, this.paramTypes);
    var _paramType = this._formatType(this.paramTypes);
    return [web3_eth_abi__WEBPACK_IMPORTED_MODULE_0___default().encodeParameter(_paramType, _arg)];
  }
  encodeForL2DsProxyCall() {
    var executeActionDirectAbi = _abis_Action_json__WEBPACK_IMPORTED_MODULE_2__.find(_ref => {
      var {
        name
      } = _ref;
      return name === 'executeActionDirect';
    });
    return web3_eth_abi__WEBPACK_IMPORTED_MODULE_0___default().encodeFunctionCall(executeActionDirectAbi, this._encodeForCall());
  }
  encodeForL2Recipe() {
    return this._encodeForCall()[0];
  }

  /**
   * Encode arguments for calling the action via DsProxy
   * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() {
    var executeActionDirectAbi = _abis_Action_json__WEBPACK_IMPORTED_MODULE_2__.find(_ref2 => {
      var {
        name
      } = _ref2;
      return name === 'executeActionDirect';
    });
    return [this.contractAddress, web3_eth_abi__WEBPACK_IMPORTED_MODULE_0___default().encodeFunctionCall(executeActionDirectAbi, this._encodeForCall())];
  }

  /**
   * Encodes action for Recipe call
   */
  encodeForRecipe() {
    return [this._encodeForCall()[0],
    // actionCallData
    '0x0000000000000000000000000000000000000000000000000000000000000000',
    // subData
    this.getId(),
    // actionIds
    this._getArgumentMapping() // paramMappings
    ];
  }

  encodeForStrategy(subSlots) {
    return [this.getId(), _classPrivateMethodGet(this, _getArgumentMappingWithSlots, _getArgumentMappingWithSlots2).call(this, subSlots) // paramMappings
    ];
  }

  /**
   * Assets requiring approval to be used by DsProxy
   * Approval is done from owner to DsProxy
   */
  getAssetsToApprove() {
    return _asyncToGenerator(function* () {
      return [];
    })();
  }

  /**
   * ETH value to be sent with transaction
   * @returns ETH value in wei
   */
  getEthValue() {
    return _asyncToGenerator(function* () {
      return '0';
    })();
  }

  /**
   * Access list for single action
   */
}
function _getArgumentMappingWithSlots2(subSlots) {
  return this.mappableArgs.map(arg => {
    if (new RegExp(/\$\d+/).test(arg)) {
      if (Array.isArray(arg)) throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
      // eslint-disable-next-line
      return parseInt(arg.substr(1));
    }

    // Handle SubSlots placeholder values in strategies
    if (new RegExp(/&\w+/).test(arg)) {
      if (arg === '&proxy') return 254;
      if (arg === '&eoa') return 255;
      // eslint-disable-next-line
      return parseInt(subSlots[arg].index);
    }
    return 0;
  });
}
function _getPlaceholderForType2(type) {
  // TODO handle arrays?
  // eslint-disable-next-line
  if (type.startsWith('bytes')) return "0x".concat('0'.repeat(parseInt(type.substr(5)) * 2));
  if (type === 'address') return "0x".concat('0'.repeat(40));
  if (type === 'string') return '';
  return '0';
}

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"name":"NonContractCall","type":"error"},{"inputs":[],"name":"ReturnIndexValueError","type":"error"},{"inputs":[],"name":"SenderNotAdmin","type":"error"},{"inputs":[],"name":"SenderNotOwner","type":"error"},{"inputs":[],"name":"SubIndexValueError","type":"error"},{"inputs":[],"name":"ADMIN_VAULT_ADDR","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NO_PARAM_MAPPING","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REGISTRY_ADDR","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RETURN_MAX_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RETURN_MIN_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUB_MAX_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUB_MIN_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"actionType","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"adminVault","outputs":[{"internalType":"contract AdminVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_callData","type":"bytes"},{"internalType":"bytes32[]","name":"_subData","type":"bytes32[]"},{"internalType":"uint8[]","name":"_paramMapping","type":"uint8[]"},{"internalType":"bytes32[]","name":"_returnValues","type":"bytes32[]"}],"name":"executeAction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_callData","type":"bytes"}],"name":"executeActionDirect","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"logger","outputs":[{"internalType":"contract DefisaverLogger","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registry","outputs":[{"internalType":"contract DFSRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawStuckFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Recipe: () => (/* binding */ Recipe)
/* harmony export */ });
/* harmony import */ var web3_eth_abi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var web3_eth_abi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_eth_abi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zennomi_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _zennomi_tokens__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zennomi_tokens__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _abis_Recipe_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }








/**
 * Set of Actions to be performed sequentially in a single transaction
 *
 * @category Base Classes
 */
var _encodeForCall = /*#__PURE__*/new WeakSet();
class Recipe {
  /**
   * @param name
   * @param actions
   */
  constructor(name) {
    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    /**
     * Encode arguments for calling the action set directly
     *
     */
    _classPrivateMethodInitSpec(this, _encodeForCall);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "actions", void 0);
    _defineProperty(this, "recipeExecutorAddress", void 0);
    _defineProperty(this, "extraGas", void 0);
    actions.forEach(action => {
      if (!(action instanceof _Action__WEBPACK_IMPORTED_MODULE_3__.Action)) throw new TypeError('Supplied action does not inherit Action');
    });
    this.name = name;
    this.actions = actions;
    this.extraGas = 0;
    this.recipeExecutorAddress = (0,_addresses__WEBPACK_IMPORTED_MODULE_4__.getAddr)('RecipeExecutor', _config__WEBPACK_IMPORTED_MODULE_6__.CONFIG.chainId);
  }

  /**
   * @param action
   */
  addAction(action) {
    if (!(action instanceof _Action__WEBPACK_IMPORTED_MODULE_3__.Action)) throw new TypeError('Supplied action does not inherit Action');
    this.actions.push(action);
    return this;
  }
  /**
   * Encode arguments for calling the action set via DsProxy
   * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() {
    var executeTaskAbi = _abis_Recipe_json__WEBPACK_IMPORTED_MODULE_5__.find(_ref => {
      var {
        name
      } = _ref;
      return name === 'executeRecipe';
    });
    var encoded = _classPrivateMethodGet(this, _encodeForCall, _encodeForCall2).call(this);
    return [this.recipeExecutorAddress,
    // @ts-expect-error Interface of AbiCoder is wrong :(
    web3_eth_abi__WEBPACK_IMPORTED_MODULE_0___default().encodeFunctionCall(executeTaskAbi, encoded)];
  }

  /**
   * Logs parameter mapping in verbose format for validation. Used for testing in development.
   */
  _validateParamMappings() {
    this.actions.forEach((action, i) => {
      action._getArgumentMapping().forEach((source, j) => {
        if (source) console.log("".concat(this.actions[i].name, " takes argument #").concat(j + 1, " from ").concat(this.actions[source - 1].name, " (action #").concat(source, ")"));
      });
    });
  }

  /**
   * Assets requiring approval to be used by DsProxy
   * Approval is done from owner to DsProxy
   */
  getAssetsToApprove() {
    var _this = this;
    return _asyncToGenerator(function* () {
      var uniqueAssetOwnerPairs = [];
      var assetOwnerPairs = yield Promise.all(_this.actions.map(a => a.getAssetsToApprove()));
      for (var pairsPerAction of assetOwnerPairs) {
        var _loop = function* _loop(pair) {
          var isNft = !pair.asset;
          if (!uniqueAssetOwnerPairs.find(_pair => _pair.owner === pair.owner && (isNft ? _pair.tokenId === pair.tokenId : _pair.asset === pair.asset))) {
            if (isNft) {
              uniqueAssetOwnerPairs.push({
                owner: pair.owner,
                nft: pair.nft,
                tokenId: pair.tokenId,
                specialApproveLabel: pair.specialApproveLabel
              });
            } else {
              uniqueAssetOwnerPairs.push({
                owner: pair.owner,
                asset: pair.asset,
                specialApproveLabel: pair.specialApproveLabel
              });
            }
          }
        };
        for (var pair of pairsPerAction) {
          yield* _loop(pair);
        }
      }
      return uniqueAssetOwnerPairs.filter(_ref2 => {
        var {
          address
        } = _ref2;
        return !_zennomi_tokens__WEBPACK_IMPORTED_MODULE_2__.utils.compare(address, (0,_zennomi_tokens__WEBPACK_IMPORTED_MODULE_2__.getAssetInfo)('ETH').address);
      });
    })();
  }

  /**
   * ETH value to be sent with transaction
   * @returns ETH value in wei
   */
  getEthValue() {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      return (yield Promise.all(_this2.actions.map(a => a.getEthValue()))).reduce((acc, val) => acc.add((0,web3_utils__WEBPACK_IMPORTED_MODULE_1__.toBN)(val)), (0,web3_utils__WEBPACK_IMPORTED_MODULE_1__.toBN)(0)).toString();
    })();
  }

  /**
   * Generates an access list for the recipe
   */
}
function _encodeForCall2() {
  var encoded = this.actions.map(action => action.encodeForRecipe());
  var transposed = encoded[0].map((_, colIndex) => encoded.map(row => row[colIndex]));
  var taskStruct = [this.name, ...transposed];
  return [taskStruct];
}

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionAddresses: () => (/* binding */ actionAddresses),
/* harmony export */   getAddr: () => (/* binding */ getAddr)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var actionAddresses = {
  [_config__WEBPACK_IMPORTED_MODULE_0__.NETWORKS.bsc.chainId]: {
    TravaAuctionCreateAuction: "0xadD3754309A7bC4c74E58A9AAb8463a591047123",
    TravaAuctionMakeBid: "0xD291b6b7658a016de5a95240F36eea4fb481d228",
    RecipeExecutor: "0xc3A1B8ec1F11A02410e0e1Ef0b34BCD2fBeDC54a",
    DFSProxyRegistry: "0xddAe0A61D662711EC279686dE17EfB1F57253ab5",
    TravaNFTTransfer: "0x7D2AA60a1741a52F66f81EA2acb30e5BF3761A55",
    TravaNFTBuy: "0x735da379efd7Fd1A5AA8D464B0184b6160D44360",
    TravaNFTCreateSale: "0xe1109AeC64861a6E47C899b395dD9C1edec60Fac",
    PancakeSwapV2: "0x4503A6D439349B09043d6B33f269005eC9BC065d",
    PullToken: "0x6b0FF321C1B4C27174443E06dfAAdBf5783d74d0",
    WrapBnb: "0xd20B3B10521410bF2C9F165638aC30660C426e3F",
    UnwrapBnb: "0x90B18827C0Ca6e0B2F6b7F1A84d3Cb6BD9baeeAD",
    SendToken: "0x3eaeD39715A10e4B7D47BBe676FA6c9553A2575d",
    SendTokenAndUnwrap: "0x1f144f084B6e9FC4A377D483086FA88fF3AD094d",
    SendTokens: "0x3eaeD39715A10e4B7D47BBe676FA6c9553A2575d",
    TravaSupply: "0x355B322761FEEFde4Fb041aa31ad544B26B6F64d",
    TravaBorrow: "0x31Da583b0F55E988790F6602Cb88aeE62AbACd5A",
    TravaRepay: "0x4e3c45BA8838b33F6eD7345Bd2DB824b589C4CEf",
    TravaWithdraw: "0x92f93da4C46c66ea8C154a93c49663Cf83990244",
    TravaStakingStake: "0x3937F711DB4ec9A0E3E416054cbBc98184127ebF",
    TravaNFTCancelSale: "0xfe9Fc8EDeD36BEe1965b800c5728979fD80eB993"
  }
};

/**
 *
 * @param name
 * @param chainId
 */
var getAddr = function getAddr(name) {
  var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.chainId;
  var _chainId = typeof chainId === "undefined" ? _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.chainId : chainId;
  var actions = actionAddresses[_chainId];

  // skip this check if we're in testing mode
  if (!_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.testingMode) {
    if (!actions) throw new Error("Cannot find address for chainId: ".concat(_chainId, "."));
    if (!actions[name]) throw new Error("Cannot find address for name: ".concat(name, " (chainId: ").concat(_chainId, ")."));
  }
  return actions[name];
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG: () => (/* binding */ CONFIG),
/* harmony export */   NETWORKS: () => (/* binding */ NETWORKS),
/* harmony export */   configure: () => (/* binding */ configure),
/* harmony export */   getNetworkData: () => (/* binding */ getNetworkData)
/* harmony export */ });
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _zennomi_tokens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__);


decimal_js__WEBPACK_IMPORTED_MODULE_0___default().set({
  rounding: (decimal_js__WEBPACK_IMPORTED_MODULE_0___default().ROUND_DOWN),
  toExpPos: 9e15,
  toExpNeg: -9e15,
  precision: 100
});

/**
 *
 * @type {Networks}
 */
var NETWORKS = {
  bsc: {
    chainId: 97,
    chainName: 'Binance Smart Chain Testnet',
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
    iconUrls: [],
    rpcUrls: [],
    nativeCurrency: {
      name: 'BNB',
      decimals: 18,
      symbol: 'BNB'
    }
  }
};

/**
 *
 */
var CONFIG = {
  chainId: NETWORKS.bsc.chainId,
  testingMode: false
};

/**
 *
 * @param chainId
 */
var getNetworkData = chainId => {
  var networkData = Object.values(NETWORKS).find(network => network.chainId === +chainId);
  if (!networkData) throw new Error("Cannot find network data for chainId: ".concat(chainId));
  return networkData;
};

/**
 *
 * @param config
 */
var configure = config => {
  if (!config || typeof config !== 'object') throw new Error('Object expected');
  var newKeys = Object.keys(config);
  newKeys.forEach(key => {
    CONFIG[key] = config[key];
    if (key === 'chainId') (0,_zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__.set)('network', config[key]);
  });
};

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"name":"NonContractCall","type":"error"},{"inputs":[],"name":"SenderNotAdmin","type":"error"},{"inputs":[],"name":"SenderNotOwner","type":"error"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TriggerNotActiveError","type":"error"},{"inputs":[],"name":"EXECUTE_SELECTOR","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes[]","name":"callData","type":"bytes[]"},{"internalType":"bytes32[]","name":"subData","type":"bytes32[]"},{"internalType":"bytes4[]","name":"actionIds","type":"bytes4[]"},{"internalType":"uint8[][]","name":"paramMapping","type":"uint8[][]"}],"internalType":"struct StrategyModel.Recipe","name":"_currRecipe","type":"tuple"},{"internalType":"bytes32","name":"_flAmount","type":"bytes32"}],"name":"_executeActionsFromFL","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"adminVault","outputs":[{"internalType":"contract AdminVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes[]","name":"callData","type":"bytes[]"},{"internalType":"bytes32[]","name":"subData","type":"bytes32[]"},{"internalType":"bytes4[]","name":"actionIds","type":"bytes4[]"},{"internalType":"uint8[][]","name":"paramMapping","type":"uint8[][]"}],"internalType":"struct StrategyModel.Recipe","name":"_currRecipe","type":"tuple"}],"name":"executeRecipe","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_subId","type":"uint256"},{"internalType":"bytes[]","name":"_actionCallData","type":"bytes[]"},{"internalType":"bytes[]","name":"_triggerCallData","type":"bytes[]"},{"internalType":"uint256","name":"_strategyIndex","type":"uint256"},{"components":[{"internalType":"uint64","name":"strategyOrBundleId","type":"uint64"},{"internalType":"bool","name":"isBundle","type":"bool"},{"internalType":"bytes[]","name":"triggerData","type":"bytes[]"},{"internalType":"bytes32[]","name":"subData","type":"bytes32[]"}],"internalType":"struct StrategyModel.StrategySub","name":"_sub","type":"tuple"}],"name":"executeRecipeFromStrategy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddr","type":"address"}],"name":"givePermission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registry","outputs":[{"internalType":"contract DFSRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddr","type":"address"}],"name":"removePermission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawStuckFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfsWeb3: () => (/* binding */ DfsWeb3)
/* harmony export */ });
/* harmony import */ var _abis_DFSProxyRegistry_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _abis_ProxyRegistry_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _abis_DsProxy_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _abis_Erc20_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







// reports error but it works ?????

/**
 *
 * @category Base Classes
 */
class DfsWeb3 {
  constructor(web3) {
    _defineProperty(this, "web3", void 0);
    _defineProperty(this, "accountReady", void 0);
    _defineProperty(this, "account", void 0);
    _defineProperty(this, "proxy", void 0);
    this.web3 = web3;
    this.accountReady = false;
    this.prepareAccount();
  }
  prepareAccount() {
    var _this = this;
    return _asyncToGenerator(function* () {
      // const accounts = await this.web3.getAddress()
      // console.log(accounts);
      // if (!accounts || !accounts.length) throw new Error('Supplied web3 has no account');
      _this.account = yield _this.web3.getAddress();
      var DFSPRoxyRegistyAbiItems = _abis_DFSProxyRegistry_json__WEBPACK_IMPORTED_MODULE_0__;
      var dfsRegistryContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract((0,_addresses__WEBPACK_IMPORTED_MODULE_4__.getAddr)('DFSProxyRegistry', _config__WEBPACK_IMPORTED_MODULE_5__.CONFIG.chainId), DFSPRoxyRegistyAbiItems, _this.web3);
      var proxies = yield dfsRegistryContract.proxies(_this.account);
      if (proxies) {
        _this.proxy = proxies;
      }
      _this.accountReady = true;
    })();
  }
  createSmartWallet() {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (!_this2.accountReady) yield _this2.prepareAccount();
      if (!_this2.account) throw new Error('DfsWeb3 has not been instantiated properly');
      if (_this2.proxy) throw new Error('Account already has DsProxy');
      var ProxyRegistryAbiItems = _abis_ProxyRegistry_json__WEBPACK_IMPORTED_MODULE_1__;
      var registryContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract((0,_addresses__WEBPACK_IMPORTED_MODULE_4__.getAddr)('ProxyRegistry', _config__WEBPACK_IMPORTED_MODULE_5__.CONFIG.chainId), ProxyRegistryAbiItems, _this2.web3);
      return yield registryContract.build();
    })();
  }

  /**
   * @param action
   */
  prepareBeforeExecute(action) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      if (!_this3.accountReady) yield _this3.prepareAccount();
      if (!_this3.proxy) throw new Error('Account does not have a Smart Wallet');
      var transactions = [];
      var approvals = yield action.getAssetsToApprove();
      yield Promise.all(approvals.map( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(function* (a) {
          if (a.owner.toLowerCase() === _this3.proxy.toLowerCase()) {
            var Erc20AbiItems = _abis_Erc20_json__WEBPACK_IMPORTED_MODULE_3__;
            var tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(a.assetErc20Abi, Erc20AbiItems, _this3.web3);
            var allowance = yield tokenContract.allowance(_this3.account, _this3.proxy);
            if (parseFloat(allowance.toString()) === 0) {
              transactions.push(tokenContract.approve(_this3.proxy, '-1'));
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      return transactions;
    })();
  }
  execute(address, params) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      if (!_this4.accountReady) yield _this4.prepareAccount();
      if (!_this4.proxy) throw new Error('Account does not have a Smart Wallet. Run createSmartWallet first');
      var DsProxyAbiItems = _abis_DsProxy_json__WEBPACK_IMPORTED_MODULE_2__;
      var proxyContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(_this4.proxy, DsProxyAbiItems, _this4.web3);
      return proxyContract.execute(address, params);
    })();
  }

  /**
   * @param action
   */
  executeAction(action) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      var encoded = action.encodeForDsProxyCall();
      return _this5.execute(encoded[0], encoded[1]);
    })();
  }

  /**
   * @param recipe
   */
  executeRecipe(recipe) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      var encoded = recipe.encodeForDsProxyCall();
      return _this6.execute(encoded[0], encoded[1]);
    })();
  }
}

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"build","outputs":[{"internalType":"address payable","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buildProxy","outputs":[{"internalType":"address payable","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"factory_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"proxies","outputs":[{"internalType":"contract DSProxy","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":false,"inputs":[],"name":"build","outputs":[{"name":"proxy","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"proxies","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"build","outputs":[{"name":"proxy","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"factory_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cache","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_cacheAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[{"name":"_target","type":"address"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"response","type":"bytes32"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"bytes"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"target","type":"address"},{"name":"response","type":"bytes32"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_cacheAddr","type":"address"}],"name":"setCache","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"}]');

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basic: () => (/* reexport module object */ _basic__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   pancake: () => (/* reexport module object */ _pancakeswap__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   trava: () => (/* reexport module object */ _trava__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _trava__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _pancakeswap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);





/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaAuctionCreateAuction: () => (/* reexport safe */ _TravaAuctionCreateAuction__WEBPACK_IMPORTED_MODULE_0__.TravaAuctionCreateAuction),
/* harmony export */   TravaAuctionMakeBid: () => (/* reexport safe */ _TravaAuctionMakeBid__WEBPACK_IMPORTED_MODULE_1__.TravaAuctionMakeBid),
/* harmony export */   TravaBorrow: () => (/* reexport safe */ _market_TravaBorrow__WEBPACK_IMPORTED_MODULE_5__.TravaBorrow),
/* harmony export */   TravaNFTBuy: () => (/* reexport safe */ _nft_marketplace_TravaNFTBuy__WEBPACK_IMPORTED_MODULE_2__.TravaNFTBuy),
/* harmony export */   TravaNFTCancelSale: () => (/* reexport safe */ _nft_marketplace_TravaNFTCancelSale__WEBPACK_IMPORTED_MODULE_10__.TravaNFTCancelSale),
/* harmony export */   TravaNFTCreateSale: () => (/* reexport safe */ _nft_marketplace_TravaNFTCreateSale__WEBPACK_IMPORTED_MODULE_4__.TravaNFTCreateSale),
/* harmony export */   TravaNFTTransfer: () => (/* reexport safe */ _nft_TravaNFTTransfer__WEBPACK_IMPORTED_MODULE_3__.TravaNFTTransfer),
/* harmony export */   TravaRepay: () => (/* reexport safe */ _market_TravaRepay__WEBPACK_IMPORTED_MODULE_6__.TravaRepay),
/* harmony export */   TravaStakingStake: () => (/* reexport safe */ _staking_TravaStakingStake__WEBPACK_IMPORTED_MODULE_9__.TravaStakingStake),
/* harmony export */   TravaSupply: () => (/* reexport safe */ _market_TravaSupply__WEBPACK_IMPORTED_MODULE_7__.TravaSupply),
/* harmony export */   TravaWithdraw: () => (/* reexport safe */ _market_TravaWithdraw__WEBPACK_IMPORTED_MODULE_8__.TravaWithdraw)
/* harmony export */ });
/* harmony import */ var _TravaAuctionCreateAuction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _TravaAuctionMakeBid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _nft_marketplace_TravaNFTBuy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _nft_TravaNFTTransfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _nft_marketplace_TravaNFTCreateSale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _market_TravaBorrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _market_TravaRepay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _market_TravaSupply__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _market_TravaWithdraw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _staking_TravaStakingStake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28);
/* harmony import */ var _nft_marketplace_TravaNFTCancelSale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);












/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaAuctionCreateAuction: () => (/* binding */ TravaAuctionCreateAuction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaAuctionCreateAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
class TravaAuctionCreateAuction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(tokenId, startingBid, duration, ceilingPrice, method) {
    var from = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('Empty');
    super('TravaNFTAuctionCreateAuction', (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('TravaAuctionCreateAuction'), ["uint256", "uint256", "uint256", "uint256", "uint256", "address"], [tokenId, startingBid, duration, ceilingPrice, method, from]);
  }
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaAuctionMakeBid: () => (/* binding */ TravaAuctionMakeBid)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaAuctionMakeBid
 *
 * @category Trava
 */
class TravaAuctionMakeBid extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(tokenId, bidPrice) {
    var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('Empty');
    super('TravaNFTAuctionMakeBid', (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('TravaAuctionMakeBid'), ["uint256", "uint256", "address"], [tokenId, bidPrice, from]);
  }
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaNFTBuy: () => (/* binding */ TravaNFTBuy)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaNFTBuy - Buy NFT in Trava
 *
 * @category Trava
 */
class TravaNFTBuy extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(tokenId, from, to) {
    super("TravaNFTBuy", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('TravaNFTBuy'), ["uint256", "address", "address"], [tokenId, from, to]);
  }
}

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaNFTTransfer: () => (/* binding */ TravaNFTTransfer)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaNFTTransfer - Transfer Trava NFT
 *
 * @category Trava
 */
class TravaNFTTransfer extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(from, to, tokenId, nftCore) {
    super("TravaNFTTransfer", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('TravaNFTTransfer'), ["address", "address", "uint256", "address"], [from, to, tokenId, nftCore]);
  }
}

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaNFTCreateSale: () => (/* binding */ TravaNFTCreateSale)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
class TravaNFTCreateSale extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(tokenId, price, from) {
    super("TravaNFTCreateSale", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('TravaNFTCreateSale'), ["uint256", "uint256", "address"], [tokenId, price, from]);
  }
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaBorrow: () => (/* binding */ TravaBorrow)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaBorrow - Borrow Token in Lending Pool
 *
 * @category Trava
 */

class TravaBorrow extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(market, token, amount, to, onBehalfOf) {
    super("TravaBorrow", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)("TravaBorrow"), ["address", "address", "uint256", "address", "address"], [market, token, amount, to, onBehalfOf]);
  }
}

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaRepay: () => (/* binding */ TravaRepay)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaRepay - Repay Token in Lending Pool
 *
 * @category Trava
 */

class TravaRepay extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(market, token, amount, from, onBehalfOf) {
    super("TravaRepay", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)("TravaRepay"), ["address", "address", "uint256", "address", "address"], [market, token, amount, from, onBehalfOf]);
  }
}

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaSupply: () => (/* binding */ TravaSupply)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
class TravaSupply extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(market, token, amount, from, onBehalfOf, enableAsColl) {
    super("TravaSupply", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)("TravaSupply"), ["address", "address", "uint256", "address", "address", "bool"], [market, token, amount, from, onBehalfOf, enableAsColl]);
  }
}

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaWithdraw: () => (/* binding */ TravaWithdraw)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 */
class TravaWithdraw extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(market, token, amount, to) {
    super("TravaWithdraw", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)("TravaWithdraw"), ["address", "address", "uint256", "address"], [market, token, amount, to]);
  }
}

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaStakingStake: () => (/* binding */ TravaStakingStake)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaStaking - Staking token to receive rewards
 *
 * @category Trava
 */
class TravaStakingStake extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(token, onBehalfOf, amount) {
    super("TravaStakingStake", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)("TravaStakingStake"), ["address", "address", "uint256"], [token, onBehalfOf, amount]);
  }
}

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravaNFTCancelSale: () => (/* binding */ TravaNFTCancelSale)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
class TravaNFTCancelSale extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(tokenId, to) {
    super("TravaNFTCancelSale", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('TravaNFTCancelSale'), ["uint256", "address"], [tokenId, to]);
  }
}

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PancakeSwapV2: () => (/* reexport safe */ _PancakeSwapV2__WEBPACK_IMPORTED_MODULE_0__.PancakeSwapV2)
/* harmony export */ });
/* harmony import */ var _PancakeSwapV2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PancakeSwapV2: () => (/* binding */ PancakeSwapV2)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * PancakeSwapV2 - swap token in PancakeSwap
 *
 * @category PancakeSwap
 */
class PancakeSwapV2 extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(amountIn, amountOutMin, path, to, deadline, from) {
    super("PancakeSwapV2", (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('PancakeSwapV2'), ["uint256", "uint256", "address[]", "address", "uint256", "address"], [amountIn, amountOutMin, path, to, deadline, from]);
    this.mappableArgs = [amountIn, amountOutMin, path, to, deadline, from].flat();
  }
}

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PullTokenAction: () => (/* reexport safe */ _PullToken__WEBPACK_IMPORTED_MODULE_0__.PullTokenAction),
/* harmony export */   SendTokenAction: () => (/* reexport safe */ _SendToken__WEBPACK_IMPORTED_MODULE_1__.SendTokenAction),
/* harmony export */   SendTokenAndUnwrapAction: () => (/* reexport safe */ _SendTokenAndUnwrap__WEBPACK_IMPORTED_MODULE_2__.SendTokenAndUnwrapAction),
/* harmony export */   SendTokensAction: () => (/* reexport safe */ _SendTokens__WEBPACK_IMPORTED_MODULE_5__.SendTokensAction),
/* harmony export */   UnwrapBnbAction: () => (/* reexport safe */ _UnwrapBNB__WEBPACK_IMPORTED_MODULE_4__.UnwrapBnbAction),
/* harmony export */   WrapBnbAction: () => (/* reexport safe */ _WrapBNB__WEBPACK_IMPORTED_MODULE_3__.WrapBnbAction)
/* harmony export */ });
/* harmony import */ var _PullToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _SendToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _SendTokenAndUnwrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _WrapBNB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _UnwrapBNB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _SendTokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);







/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PullTokenAction: () => (/* binding */ PullTokenAction)
/* harmony export */ });
/* harmony import */ var _utils_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/**
 * Transfers specified token from a specified address to DSProxy (recipe)
 *
 * @category BasicActions
 */
class PullTokenAction extends _Action__WEBPACK_IMPORTED_MODULE_1__.Action {
  /**
   * @param token Token address
   * @param from Transfer sender
   * @param amount Transfer amount (-1 for whole sender balance)
   */
  constructor(token, from, amount) {
    (0,_utils_general__WEBPACK_IMPORTED_MODULE_0__.requireAddress)(from);
    super('PullToken', (0,_addresses__WEBPACK_IMPORTED_MODULE_2__.getAddr)('PullToken'), ['address', 'address', 'uint'], [token, from, amount]);
  }

  //   async getAssetsToApprove() {
  //     const asset = getAssetInfoByAddress(this.args[0]);
  //     if (asset.symbol !== 'ETH') return [{ asset: this.args[0], owner: this.args[1] }];
  //     return [];
  //   }
}

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPriceForContract: () => (/* binding */ formatPriceForContract),
/* harmony export */   parsePriceFromContract: () => (/* binding */ parsePriceFromContract),
/* harmony export */   requireAddress: () => (/* binding */ requireAddress)
/* harmony export */ });
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _zennomi_tokens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__);


var requireAddress = address => {
  if (address.startsWith('%') || address.startsWith('&')) return;
  if (typeof address !== 'string') throw new Error('Address is not a string');
  if (address === '') throw new Error('Address is empty string');
  if (address.length < 42) throw new Error("Address too short (".concat(address.length, " instead of 42)"));
  if (new RegExp(/^0x0+$/).test(address)) throw new Error('Address is empty bytes');
  if (!new RegExp(/^0x[0-9a-fA-F]{40}$/).test(address)) throw new Error('Address invalid');
};

/**
 * @param price Price returned by contract or getOffchainPrice
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price in expected format (11000.00 for WBTC->USDT, 0.98 for USDc->DAI, etc)
 *
 */
var parsePriceFromContract = (price, from, to) => new (decimal_js__WEBPACK_IMPORTED_MODULE_0___default())(price).div(10 ** (0,_zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__.getAssetInfo)(to).decimals).div(10 ** (18 - (0,_zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__.getAssetInfo)(from).decimals)).toString();

/**
 * @param price Price returned by parsePriceFromContract
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price formatted like contract output (can be used for contract input for exchange v2)
 *
 */
var formatPriceForContract = (price, from, to) => new (decimal_js__WEBPACK_IMPORTED_MODULE_0___default())(price).mul(10 ** (0,_zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__.getAssetInfo)(to).decimals).mul(10 ** (18 - (0,_zennomi_tokens__WEBPACK_IMPORTED_MODULE_1__.getAssetInfo)(from).decimals)).floor().toString();

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendTokenAction: () => (/* binding */ SendTokenAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/**
 * Transfers specified token from recipe (DsProxy) to specified address
 *
 * @category BasicActions
 */
class SendTokenAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  /**
   * @param token Token address
   * @param to Transfer recipient
   * @param amount Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token, to, amount) {
    (0,_utils_general__WEBPACK_IMPORTED_MODULE_1__.requireAddress)(to);
    super('SendToken', (0,_addresses__WEBPACK_IMPORTED_MODULE_2__.getAddr)('SendToken'), ['address', 'address', 'uint'], [token, to, amount]);
  }
}

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendTokenAndUnwrapAction: () => (/* binding */ SendTokenAndUnwrapAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/**
 * Transfers specified token from recipe (DsProxy) to specified address unwraps if Weth address
 *
 * @category BasicActions
 */
class SendTokenAndUnwrapAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  /**
   * @param token Token address
   * @param to Transfer recipient
   * @param amount Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token, to, amount) {
    (0,_utils_general__WEBPACK_IMPORTED_MODULE_1__.requireAddress)(to);
    super('SendTokenAndUnwrap', (0,_addresses__WEBPACK_IMPORTED_MODULE_2__.getAddr)('SendTokenAndUnwrap'), ['address', 'address', 'uint'], [token, to, amount]);
  }
}

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WrapBnbAction: () => (/* binding */ WrapBnbAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 *
 * @category BasicActions
 */
class WrapBnbAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  /**
   * @param amount Wrap amount
   */
  constructor(amount) {
    super('WrapBnb', (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('WrapBnb'), ['uint256'], [amount]);
  }
  getEthValue() {
    var _this = this;
    return _asyncToGenerator(function* () {
      return _this.args[0];
    })();
  }
}

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnwrapBnbAction: () => (/* binding */ UnwrapBnbAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/**
 * Unwraps a specified amount of WETH from the proxy
 *
 * @category BasicActions
 */
class UnwrapBnbAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  /**
   * @param amount Amount to unwrap
   * @param to Transfer recipient
   */
  constructor(amount, to) {
    (0,_utils_general__WEBPACK_IMPORTED_MODULE_1__.requireAddress)(to);
    super('UnwrapBnb', (0,_addresses__WEBPACK_IMPORTED_MODULE_2__.getAddr)('UnwrapBnb'), ['uint256', 'address'], [amount, to]);
  }
}

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendTokensAction: () => (/* binding */ SendTokensAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * Transfers specified tokens from recipe (DsProxy) to specified addresses
 *
 * @category BasicActions
 */
class SendTokensAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  /**
   * @param tokens Token addressess
   * @param receivers Transfer recipients
   * @param amounts Transfer amounts (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(tokens, receivers, amounts) {
    super('SendTokens', (0,_addresses__WEBPACK_IMPORTED_MODULE_1__.getAddr)('SendTokens'), ['address[]', 'address[]', 'uint256[]'], [tokens, receivers, amounts]);
    this.mappableArgs = [];
    for (var i = 0; i < this.args[0].length; i++) {
      this.mappableArgs.push(this.args[0][i]);
    }
    for (var _i = 0; _i < this.args[1].length; _i++) {
      this.mappableArgs.push(this.args[1][_i]);
    }
    for (var _i2 = 0; _i2 < this.args[2].length; _i2++) {
      this.mappableArgs.push(this.args[2][_i2]);
    }
  }
}

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactoryContract: () => (/* binding */ FactoryContract),
/* harmony export */   PairContract: () => (/* binding */ PairContract),
/* harmony export */   PancakeSwapV2Address: () => (/* binding */ PancakeSwapV2Address),
/* harmony export */   RouterContract: () => (/* binding */ RouterContract),
/* harmony export */   SwapUtil: () => (/* binding */ SwapUtil)
/* harmony export */ });
/* harmony import */ var _abis_Swap_PancakeSwapRouter_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _abis_Swap_PancakeSwapFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _abis_Swap_PancakeSwapPair_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var PancakeSwapV2Address = {
  RouterAddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  FactoryAddress: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
  WBNBAdress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
};
var BscMainnetTokens = {
  "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3": {
    symbol: "DAI",
    decimal: 18,
    oracle: {
      address: "0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA",
      oracle: "chainlink"
    }
  },
  "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
    symbol: "USDC",
    decimal: 6,
    oracle: {
      address: "0x51597f405303C4377E36123cBc172b13269EA163",
      oracle: "chainlink"
    }
  },
  "0x55d398326f99059ff775485246999027b3197955": {
    symbol: "USDT",
    decimal: 18,
    oracle: {
      address: "0xB97Ad0E74fa7d920791E90258A6E2085088b4320",
      oracle: "chainlink"
    }
  },
  "0x2170ed0880ac9a755fd29b2688956bd959f933f8": {
    symbol: "ETH",
    decimal: 18,
    oracle: {
      address: "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e",
      oracle: "chainlink"
    }
  },
  "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
    symbol: "BNB",
    decimal: 18,
    oracle: {
      address: "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE",
      oracle: "chainlink"
    }
  },
  "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c": {
    symbol: "BTCB",
    decimal: 18,
    oracle: {
      address: "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf",
      oracle: "chainlink"
    }
  },
  "0xe9e7cea3dedca5984780bafc599bd69add087d56": {
    symbol: "BUSD",
    decimal: 18,
    oracle: {
      address: "0xcBb98864Ef56E9042e7d2efef76141f15731B82f",
      oracle: "chainlink"
    }
  },
  "0xfb6115445bff7b52feb98650c87f44907e58f802": {
    symbol: "AAVE",
    oracle: {
      address: "0xA8357BF572460fC40f4B0aCacbB2a6A61c89f475",
      oracle: "chainlink"
    }
  },
  "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": {
    symbol: "ADA",
    decimal: 18,
    oracle: {
      address: "0xa767f745331D267c7751297D982b050c93985627",
      oracle: "chainlink"
    }
  },
  "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": {
    symbol: "CAKE",
    decimal: 18,
    oracle: {
      address: "0xB6064eD41d4f67e353768aA239cA86f4F73665a1",
      oracle: "chainlink"
    }
  },
  "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": {
    symbol: "XRP",
    decimal: 18,
    oracle: {
      address: "0x93A67D414896A280bF8FFB3b389fE3686E014fda",
      oracle: "chainlink"
    }
  },
  "0xba2ae424d960c26247dd6c32edc70b295c744c43": {
    symbol: "DOGE",
    decimal: 18,
    oracle: {
      address: "0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8",
      oracle: "chainlink"
    }
  },
  "0x7083609fce4d1d8dc0c979aab8c869ea2c873402": {
    symbol: "DOT",
    decimal: 18,
    oracle: {
      address: "0xC333eb0086309a16aa7c8308DfD32c8BBA0a2592",
      oracle: "chainlink"
    }
  },
  "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63": {
    symbol: "XVS",
    decimal: 18,
    oracle: {
      address: "0xBF63F430A79D4036A5900C19818aFf1fa710f206",
      oracle: "chainlink"
    }
  }
};
var RouterAbiItem = _abis_Swap_PancakeSwapRouter_json__WEBPACK_IMPORTED_MODULE_0__;
var FactoryAbiItem = _abis_Swap_PancakeSwapFactory_json__WEBPACK_IMPORTED_MODULE_1__;
var PairAbiItem = _abis_Swap_PancakeSwapPair_json__WEBPACK_IMPORTED_MODULE_2__;
class RouterContract {
  constructor(web3, address) {
    _defineProperty(this, "contractUtil", void 0);
    this.contractUtil = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(address, RouterAbiItem, web3);
  }
  getAmountOut(amount, path) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var res = yield _this.contractUtil.getAmountsOut(amount, path);
      return res.map(el => BigInt(el).toString());
    })();
  }
  getAmountIn(amount, path) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      var res = yield _this2.contractUtil.getAmountsIn(amount, path);
      return res.map(el => BigInt(el).toString());
    })();
  }
}
class FactoryContract {
  constructor(web3, address) {
    _defineProperty(this, "contractUtil", void 0);
    this.contractUtil = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(address, FactoryAbiItem, web3);
  }
  getPair(addr1, addr2) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      var res = yield _this3.contractUtil.getPair(addr1, addr2);
      return res;
    })();
  }
}
class PairContract {
  constructor(web3, address) {
    _defineProperty(this, "contractUtil", void 0);
    this.contractUtil = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(address, PairAbiItem, web3);
  }
  getReserves() {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      var res = yield _this4.contractUtil.getReserves();
      return res.map(el => new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(String(el)).toFixed());
    })();
  }
}
class SwapUtil {
  constructor(_web3) {
    _defineProperty(this, "web3", void 0);
    _defineProperty(this, "FactoryContract", void 0);
    _defineProperty(this, "RouterContract", void 0);
    this.web3 = _web3;
    this.FactoryContract = new FactoryContract(_web3, PancakeSwapV2Address.FactoryAddress);
    this.RouterContract = new RouterContract(_web3, PancakeSwapV2Address.RouterAddress);
  }
  isZeroAddress(address) {
    return address.toLowerCase() === ethers__WEBPACK_IMPORTED_MODULE_4__.ZeroAddress;
  }
  getInformationFromInput(fromToken, toToken, slippage, amountFrom) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      var path = [];
      var amountOut;
      var impact = 0;
      var minimumReceive;
      var pairAddr = yield _this5.FactoryContract.getPair(fromToken, toToken);
      var needUseMultihop = false;
      if (!_this5.isZeroAddress(pairAddr)) {
        var fromR;
        var toR;
        path = [fromToken, toToken];
        var amountOutFromContract = yield _this5.RouterContract.getAmountOut(amountFrom, path);
        var _pairAddr = yield _this5.FactoryContract.getPair(fromToken, toToken);
        var pairContract = new PairContract(_this5.web3, _pairAddr);
        var reserve = yield pairContract.getReserves();
        if (Number(fromToken) < Number(toToken)) {
          fromR = String(reserve[0]);
          toR = String(reserve[1]);
        } else {
          fromR = String(reserve[1]);
          toR = String(reserve[0]);
        }
        var tmpImpact = new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountFrom).div(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountFrom).add(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(fromR)));
        console.log("tmpImpact is", tmpImpact);
        //impact =new Dec(amountOut).div(new Dec(toR).sub(new Dec(amountOut)))
        if (Number(tmpImpact) > 5 / 100) needUseMultihop = true;else {
          amountOut = String(amountOutFromContract[1]);
          minimumReceive = new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountOutFromContract[1]).mul(1 - slippage).floor();
          impact = Number(tmpImpact);
        }
      }
      if ((_this5.isZeroAddress(pairAddr) || needUseMultihop) && fromToken != PancakeSwapV2Address.WBNBAdress && toToken != PancakeSwapV2Address.WBNBAdress) {
        path = [fromToken, PancakeSwapV2Address.WBNBAdress, toToken];
        var _amountOutFromContract = yield _this5.RouterContract.getAmountOut(amountFrom, path);
        var pair1Addr = yield _this5.FactoryContract.getPair(fromToken, PancakeSwapV2Address.WBNBAdress);
        var pair1Contract = new PairContract(_this5.web3, pair1Addr);
        var _reserve = yield pair1Contract.getReserves();
        var _fromR;
        if (Number(fromToken) < Number(PancakeSwapV2Address.WBNBAdress)) {
          _fromR = _reserve[0];
        } else {
          _fromR = _reserve[1];
        }
        amountOut = _amountOutFromContract[2];
        minimumReceive = new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(_amountOutFromContract[2]).mul(1 - slippage).floor();
        impact = Number(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountFrom).div(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountFrom).add(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(_fromR))));
      }
      console.log({
        amountIn: amountFrom,
        amountOut: amountOut,
        minimumReceive: String(minimumReceive),
        priceImpact: impact,
        path: path
      });
      return {
        amountIn: amountFrom,
        amountOut: amountOut,
        minimumReceive: String(minimumReceive),
        priceImpact: impact,
        path: path
      };
    })();
  }
  getInformationFromOutput(fromToken, toToken, slippage, amountTo) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      var path = [];
      var amountIn = "";
      var impact = 0;
      var maximumSold;
      var pairAddr = yield _this6.FactoryContract.getPair(fromToken, toToken);
      var needUseMultihop = false;
      if (!_this6.isZeroAddress(pairAddr)) {
        var fromR;
        var toR;
        path = [fromToken, toToken];
        var amountInFromContract = yield _this6.RouterContract.getAmountIn(amountTo, path);
        var _pairAddr2 = yield _this6.FactoryContract.getPair(fromToken, toToken);
        var pairContract = new PairContract(_this6.web3, _pairAddr2);
        var reserve = yield pairContract.getReserves();
        if (Number(fromToken) < Number(toToken)) {
          fromR = reserve[0];
          toR = reserve[1];
        } else {
          fromR = reserve[1];
          toR = reserve[0];
        }
        //let tmpImpact = new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR)));

        var tmpImpact = new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountTo).div(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(toR).sub(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountTo)));
        console.log("tmpImpact is", tmpImpact);
        if (Number(tmpImpact) > 5 / 100) needUseMultihop = true;else {
          amountIn = amountInFromContract[0];
          maximumSold = new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountInFromContract[0]).mul(1 + slippage).floor().toFixed();
          impact = Number(tmpImpact);
        }
      }
      if ((_this6.isZeroAddress(pairAddr) || needUseMultihop) && fromToken != PancakeSwapV2Address.WBNBAdress && toToken != PancakeSwapV2Address.WBNBAdress) {
        path = [fromToken, PancakeSwapV2Address.WBNBAdress, toToken];
        var _amountInFromContract = yield _this6.RouterContract.getAmountIn(amountTo, path);
        var pair1Addr = yield _this6.FactoryContract.getPair(PancakeSwapV2Address.WBNBAdress, toToken);
        var pair1Contract = new PairContract(_this6.web3, pair1Addr);
        var _reserve2 = yield pair1Contract.getReserves();
        var _fromR2;
        var _toR;
        if (Number(fromToken) < Number(PancakeSwapV2Address.WBNBAdress)) {
          _fromR2 = _reserve2[0];
          _toR = _reserve2[1];
        } else {
          _fromR2 = _reserve2[1];
          _toR = _reserve2[0];
        }
        amountIn = _amountInFromContract[0];
        maximumSold = new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(_amountInFromContract[0]).mul(1 + slippage).floor().toFixed();
        impact = Number(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountTo).div(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(_toR).sub(new (decimal_js__WEBPACK_IMPORTED_MODULE_3___default())(amountTo))));
      }
      console.log({
        amountIn: amountIn,
        amountOut: amountTo,
        maximumSold: String(maximumSold),
        priceImpact: impact,
        path: path
      });
      return {
        amountIn: amountIn,
        amountOut: amountTo,
        maximumSold: String(maximumSold),
        priceImpact: impact,
        path: path
      };
    })();
  }
}

/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"INIT_CODE_PAIR_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');

/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* reexport safe */ _Action__WEBPACK_IMPORTED_MODULE_0__.Action),
/* harmony export */   CONFIG: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__.CONFIG),
/* harmony export */   DfsWeb3: () => (/* reexport safe */ _DfsWeb3__WEBPACK_IMPORTED_MODULE_2__.DfsWeb3),
/* harmony export */   Recipe: () => (/* reexport safe */ _Recipe__WEBPACK_IMPORTED_MODULE_1__.Recipe),
/* harmony export */   SwapUtil: () => (/* reexport safe */ _SwapUtils__WEBPACK_IMPORTED_MODULE_4__.SwapUtil),
/* harmony export */   actionAddresses: () => (/* binding */ actionAddresses),
/* harmony export */   actionAddressesAllChains: () => (/* binding */ actionAddressesAllChains),
/* harmony export */   actions: () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   configure: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__.configure),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAddr: () => (/* reexport safe */ _addresses__WEBPACK_IMPORTED_MODULE_6__.getAddr),
/* harmony export */   getNetworkData: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__.getNetworkData),
/* harmony export */   networks: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__.NETWORKS)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _DfsWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _SwapUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* Export types here */

/* Export methods, classes and other here */




//   import * as triggers from './triggers';
//   import * as utils from './utils';



var actionAddressesAllChains = _addresses__WEBPACK_IMPORTED_MODULE_6__.actionAddresses;
var actionAddresses = function actionAddresses() {
  var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return _addresses__WEBPACK_IMPORTED_MODULE_6__.actionAddresses[chainId || _config__WEBPACK_IMPORTED_MODULE_5__.CONFIG.chainId];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Action: _Action__WEBPACK_IMPORTED_MODULE_0__.Action,
  Recipe: _Recipe__WEBPACK_IMPORTED_MODULE_1__.Recipe,
  DfsWeb3: _DfsWeb3__WEBPACK_IMPORTED_MODULE_2__.DfsWeb3,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  // triggers,
  // utils,
  configure: _config__WEBPACK_IMPORTED_MODULE_5__.configure,
  getNetworkData: _config__WEBPACK_IMPORTED_MODULE_5__.getNetworkData,
  CONFIG: _config__WEBPACK_IMPORTED_MODULE_5__.CONFIG,
  networks: _config__WEBPACK_IMPORTED_MODULE_5__.NETWORKS,
  actionAddresses,
  actionAddressesAllChains,
  getAddr: _addresses__WEBPACK_IMPORTED_MODULE_6__.getAddr,
  SwapUtil: _SwapUtils__WEBPACK_IMPORTED_MODULE_4__.SwapUtil
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});