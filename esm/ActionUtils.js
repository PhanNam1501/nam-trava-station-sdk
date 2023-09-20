"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeForRecipe = exports.encodeForDsProxyCall = void 0;
const web3_eth_abi_1 = __importDefault(require("web3-eth-abi"));
const DsProxy_json_1 = __importDefault(require("./abis/DsProxy.json"));
const encodeForDsProxyCall = (action) => {
    const executeAbi = DsProxy_json_1.default.find(({ name }) => name === 'execute');
    return web3_eth_abi_1.default.encodeFunctionCall(executeAbi, action.encodeForDsProxyCall());
};
exports.encodeForDsProxyCall = encodeForDsProxyCall;
const encodeForRecipe = (action) => {
    return action.encodeForRecipe();
};
exports.encodeForRecipe = encodeForRecipe;
