"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPriceForContract = exports.parsePriceFromContract = exports.requireAddress = void 0;
const decimal_js_1 = __importDefault(require("decimal.js"));
const tokens_1 = require("@zennomi/tokens");
const requireAddress = (address) => {
    if (address.startsWith('%') || address.startsWith('&'))
        return;
    if (typeof address !== 'string')
        throw new Error('Address is not a string');
    if (address === '')
        throw new Error('Address is empty string');
    if (address.length < 42)
        throw new Error(`Address too short (${address.length} instead of 42)`);
    if (new RegExp(/^0x0+$/).test(address))
        throw new Error('Address is empty bytes');
    if (!(new RegExp(/^0x[0-9a-fA-F]{40}$/).test(address)))
        throw new Error('Address invalid');
};
exports.requireAddress = requireAddress;
/**
 * @param price Price returned by contract or getOffchainPrice
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price in expected format (11000.00 for WBTC->USDT, 0.98 for USDc->DAI, etc)
 *
 */
const parsePriceFromContract = (price, from, to) => new decimal_js_1.default(price)
    .div(Math.pow(10, (0, tokens_1.getAssetInfo)(to).decimals))
    .div(Math.pow(10, (18 - (0, tokens_1.getAssetInfo)(from).decimals)))
    .toString();
exports.parsePriceFromContract = parsePriceFromContract;
/**
 * @param price Price returned by parsePriceFromContract
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price formatted like contract output (can be used for contract input for exchange v2)
 *
 */
const formatPriceForContract = (price, from, to) => new decimal_js_1.default(price)
    .mul(Math.pow(10, (0, tokens_1.getAssetInfo)(to).decimals))
    .mul(Math.pow(10, (18 - (0, tokens_1.getAssetInfo)(from).decimals)))
    .floor()
    .toString();
exports.formatPriceForContract = formatPriceForContract;
//# sourceMappingURL=general.js.map