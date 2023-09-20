"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_UINT256 = exports.configure = exports.getNetworkData = exports.CONFIG = exports.NETWORKS = void 0;
const decimal_js_1 = __importDefault(require("decimal.js"));
const tokens_1 = require("@zennomi/tokens");
decimal_js_1.default.set({
    rounding: decimal_js_1.default.ROUND_DOWN,
    toExpPos: 9e15,
    toExpNeg: -9e15,
    precision: 100,
});
/**
 *
 * @type {Networks}
 */
exports.NETWORKS = {
    bscTestnet: {
        chainId: 97,
        chainName: 'Binance Smart Chain Testnet',
        blockExplorerUrls: ['https://testnet.bscscan.com/'],
        iconUrls: [],
        rpcUrls: [],
        nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
    },
};
/**
 *
 */
exports.CONFIG = {
    chainId: exports.NETWORKS.bscTestnet.chainId,
    testingMode: false,
};
/**
 *
 * @param chainId
 */
const getNetworkData = (chainId) => {
    const networkData = Object.values(exports.NETWORKS).find((network) => network.chainId === +chainId);
    if (!networkData)
        throw new Error(`Cannot find network data for chainId: ${chainId}`);
    return networkData;
};
exports.getNetworkData = getNetworkData;
/**
 *
 * @param config
 */
const configure = (config) => {
    if (!config || typeof config !== 'object')
        throw new Error('Object expected');
    const newKeys = Object.keys(config);
    newKeys.forEach((key) => {
        exports.CONFIG[key] = config[key];
        if (key === 'chainId')
            (0, tokens_1.set)('network', config[key]);
    });
};
exports.configure = configure;
exports.MAX_UINT256 = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
