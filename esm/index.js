"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddr = exports.listAddressesAllChains = exports.listAddresses = exports.networks = exports.CONFIG = exports.getNetworkData = exports.configure = exports.SwapUtil = exports.actions = exports.DfsWeb3 = exports.Recipe = exports.Action = void 0;
/* Export methods, classes and other here */
const Action_1 = require("./Action");
Object.defineProperty(exports, "Action", { enumerable: true, get: function () { return Action_1.Action; } });
const Recipe_1 = require("./Recipe");
Object.defineProperty(exports, "Recipe", { enumerable: true, get: function () { return Recipe_1.Recipe; } });
const DfsWeb3_1 = require("./DfsWeb3");
Object.defineProperty(exports, "DfsWeb3", { enumerable: true, get: function () { return DfsWeb3_1.DfsWeb3; } });
const actions = __importStar(require("./actions"));
exports.actions = actions;
//   import * as triggers from './triggers';
//   import * as utils from './utils';
const SwapUtils_1 = require("./SwapUtils");
Object.defineProperty(exports, "SwapUtil", { enumerable: true, get: function () { return SwapUtils_1.SwapUtil; } });
const config_1 = require("./config");
Object.defineProperty(exports, "configure", { enumerable: true, get: function () { return config_1.configure; } });
Object.defineProperty(exports, "getNetworkData", { enumerable: true, get: function () { return config_1.getNetworkData; } });
Object.defineProperty(exports, "CONFIG", { enumerable: true, get: function () { return config_1.CONFIG; } });
Object.defineProperty(exports, "networks", { enumerable: true, get: function () { return config_1.NETWORKS; } });
const addresses_1 = require("./addresses");
Object.defineProperty(exports, "getAddr", { enumerable: true, get: function () { return addresses_1.getAddr; } });
const listAddressesAllChains = addresses_1.listAddr;
exports.listAddressesAllChains = listAddressesAllChains;
const listAddresses = (chainId = null) => addresses_1.listAddr[chainId || config_1.CONFIG.chainId];
exports.listAddresses = listAddresses;
exports.default = {
    Action: Action_1.Action,
    Recipe: Recipe_1.Recipe,
    DfsWeb3: DfsWeb3_1.DfsWeb3,
    actions,
    // triggers,
    // utils,
    configure: config_1.configure,
    getNetworkData: config_1.getNetworkData,
    CONFIG: config_1.CONFIG,
    networks: config_1.NETWORKS,
    listAddresses,
    listAddressesAllChains,
    getAddr: addresses_1.getAddr,
    SwapUtil: SwapUtils_1.SwapUtil
};
