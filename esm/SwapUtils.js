"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapUtil = exports.PairContract = exports.FactoryContract = exports.RouterContract = exports.PancakeSwapV2Address = void 0;
const PancakeSwapRouter_json_1 = __importDefault(require("./abis/Swap/PancakeSwapRouter.json"));
const PancakeSwapFactory_json_1 = __importDefault(require("./abis/Swap/PancakeSwapFactory.json"));
const PancakeSwapPair_json_1 = __importDefault(require("./abis/Swap/PancakeSwapPair.json"));
const decimal_js_1 = __importDefault(require("decimal.js"));
const ethers_1 = require("ethers");
const addresses_1 = require("./addresses");
exports.PancakeSwapV2Address = {
    RouterAddress: (0, addresses_1.getAddr)("RouterAddress"),
    FactoryAddress: (0, addresses_1.getAddr)("FactoryAddress"),
    WBNBAdress: (0, addresses_1.getAddr)("WBNBAdress")
};
const BscMainnetTokens = {
    "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3": {
        symbol: "DAI",
        decimal: 18,
        oracle: { address: "0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA", oracle: "chainlink" },
    },
    "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
        symbol: "USDC",
        decimal: 6,
        oracle: { address: "0x51597f405303C4377E36123cBc172b13269EA163", oracle: "chainlink" },
    },
    "0x55d398326f99059ff775485246999027b3197955": {
        symbol: "USDT",
        decimal: 18,
        oracle: { address: "0xB97Ad0E74fa7d920791E90258A6E2085088b4320", oracle: "chainlink" },
    },
    "0x2170ed0880ac9a755fd29b2688956bd959f933f8": {
        symbol: "ETH",
        decimal: 18,
        oracle: { address: "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e", oracle: "chainlink" },
    },
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
        symbol: "BNB",
        decimal: 18,
        oracle: { address: "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE", oracle: "chainlink" },
    },
    "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c": {
        symbol: "BTCB",
        decimal: 18,
        oracle: { address: "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf", oracle: "chainlink" },
    },
    "0xe9e7cea3dedca5984780bafc599bd69add087d56": {
        symbol: "BUSD",
        decimal: 18,
        oracle: { address: "0xcBb98864Ef56E9042e7d2efef76141f15731B82f", oracle: "chainlink" },
    },
    "0xfb6115445bff7b52feb98650c87f44907e58f802": {
        symbol: "AAVE",
        oracle: { address: "0xA8357BF572460fC40f4B0aCacbB2a6A61c89f475", oracle: "chainlink" },
    },
    "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": {
        symbol: "ADA",
        decimal: 18,
        oracle: { address: "0xa767f745331D267c7751297D982b050c93985627", oracle: "chainlink" },
    },
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": {
        symbol: "CAKE",
        decimal: 18,
        oracle: { address: "0xB6064eD41d4f67e353768aA239cA86f4F73665a1", oracle: "chainlink" },
    },
    "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": {
        symbol: "XRP",
        decimal: 18,
        oracle: { address: "0x93A67D414896A280bF8FFB3b389fE3686E014fda", oracle: "chainlink" },
    },
    "0xba2ae424d960c26247dd6c32edc70b295c744c43": {
        symbol: "DOGE",
        decimal: 18,
        oracle: { address: "0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8", oracle: "chainlink" },
    },
    "0x7083609fce4d1d8dc0c979aab8c869ea2c873402": {
        symbol: "DOT",
        decimal: 18,
        oracle: { address: "0xC333eb0086309a16aa7c8308DfD32c8BBA0a2592", oracle: "chainlink" },
    },
    "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63": {
        symbol: "XVS",
        decimal: 18,
        oracle: { address: "0xBF63F430A79D4036A5900C19818aFf1fa710f206", oracle: "chainlink" },
    },
};
const RouterAbiItem = PancakeSwapRouter_json_1.default;
const FactoryAbiItem = PancakeSwapFactory_json_1.default;
const PairAbiItem = PancakeSwapPair_json_1.default;
class RouterContract {
    constructor(web3, address) {
        this.contractUtil = new ethers_1.Contract(address, RouterAbiItem, web3);
    }
    getAmountOut(amount, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getAmountsOut(amount, path);
            return res.map((el) => BigInt(el).toString());
        });
    }
    getAmountIn(amount, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getAmountsIn(amount, path);
            return res.map((el) => BigInt(el).toString());
        });
    }
}
exports.RouterContract = RouterContract;
class FactoryContract {
    constructor(web3, address) {
        this.contractUtil = new ethers_1.Contract(address, FactoryAbiItem, web3);
    }
    getPair(addr1, addr2) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getPair(addr1, addr2);
            return res;
        });
    }
}
exports.FactoryContract = FactoryContract;
class PairContract {
    constructor(web3, address) {
        this.contractUtil = new ethers_1.Contract(address, PairAbiItem, web3);
    }
    getReserves() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getReserves();
            return res.map((el) => new decimal_js_1.default(String(el)).toFixed());
        });
    }
}
exports.PairContract = PairContract;
class SwapUtil {
    constructor(_url) {
        this.web3 = new ethers_1.JsonRpcProvider(_url);
        this.FactoryContract = new FactoryContract(this.web3, exports.PancakeSwapV2Address.FactoryAddress);
        this.RouterContract = new RouterContract(this.web3, exports.PancakeSwapV2Address.RouterAddress);
    }
    isZeroAddress(address) {
        return address.toLowerCase() === ethers_1.ZeroAddress;
    }
    getInformationFromInput(_fromToken, _toToken, slippage, amountFrom) {
        return __awaiter(this, void 0, void 0, function* () {
            let fromToken = (0, addresses_1.convertHexStringToAddress)(_fromToken);
            let toToken = (0, addresses_1.convertHexStringToAddress)(_toToken);
            let path = [];
            let amountOut;
            let impact = 0;
            let minimumReceive;
            let pairAddr = yield this.FactoryContract.getPair(fromToken, toToken);
            let needUseMultihop = false;
            if (!this.isZeroAddress(pairAddr)) {
                console.log("pairAddr", pairAddr, !this.isZeroAddress(pairAddr));
                let fromR;
                let toR;
                path = [fromToken, toToken];
                let pairContract = new PairContract(this.web3, pairAddr);
                const reserve = yield pairContract.getReserves();
                let amountOutFromContract = yield this.RouterContract.getAmountOut(amountFrom, path);
                if (Number(fromToken) < Number(toToken)) {
                    fromR = String(reserve[0]);
                    toR = String(reserve[1]);
                }
                else {
                    fromR = String(reserve[1]);
                    toR = String(reserve[0]);
                }
                console.log("fromR", fromR);
                let tmpImpact = new decimal_js_1.default(amountFrom).div(new decimal_js_1.default(amountFrom).add(new decimal_js_1.default(fromR)));
                // console.log("amountOutFromContract", amountOutFromContract)
                // console.log("tmpImpact is",tmpImpact)
                //impact =new Dec(amountOut).div(new Dec(toR).sub(new Dec(amountOut)))
                if (Number(tmpImpact) > 5 / 100)
                    needUseMultihop = true;
                else {
                    amountOut = String(amountOutFromContract[1]);
                    minimumReceive = (new decimal_js_1.default(amountOutFromContract[1]).mul(1 - slippage).floor());
                    impact = Number(tmpImpact);
                    console.log("amountOut", amountOut);
                }
            }
            if ((this.isZeroAddress(pairAddr) || needUseMultihop) && (fromToken != exports.PancakeSwapV2Address.WBNBAdress && toToken != exports.PancakeSwapV2Address.WBNBAdress)) {
                path = [fromToken, exports.PancakeSwapV2Address.WBNBAdress, toToken];
                let amountOutFromContract = yield this.RouterContract.getAmountOut(amountFrom, path);
                // console.log("amountOutFromContract", amountOutFromContract)
                let pair1Addr = yield this.FactoryContract.getPair(fromToken, exports.PancakeSwapV2Address.WBNBAdress);
                let pair1Contract = new PairContract(this.web3, pair1Addr);
                const reserve = yield pair1Contract.getReserves();
                let fromR;
                if (Number(fromToken) < Number(exports.PancakeSwapV2Address.WBNBAdress)) {
                    fromR = reserve[0];
                }
                else {
                    fromR = reserve[1];
                }
                amountOut = amountOutFromContract[2];
                minimumReceive = (new decimal_js_1.default(amountOutFromContract[2]).mul(1 - slippage).floor());
                impact = Number(new decimal_js_1.default(amountFrom).div(new decimal_js_1.default(amountFrom).add(new decimal_js_1.default(fromR))));
            }
            // console.log(
            //   {
            //     amountIn: amountFrom,
            //     amountOut: amountOut,
            //     minimumReceive: String(minimumReceive),
            //     priceImpact: impact,
            //     path: path
            //   }
            // )
            return {
                amountIn: amountFrom,
                amountOut: amountOut,
                minimumReceive: String(minimumReceive),
                priceImpact: impact,
                path: path
            };
        });
    }
    getInformationFromOutput(_fromToken, _toToken, slippage, amountTo) {
        return __awaiter(this, void 0, void 0, function* () {
            let fromToken = (0, addresses_1.convertHexStringToAddress)(_fromToken);
            let toToken = (0, addresses_1.convertHexStringToAddress)(_toToken);
            let path = [];
            let amountIn = "";
            let impact = 0;
            let maximumSold;
            let pairAddr = yield this.FactoryContract.getPair(fromToken, toToken);
            let needUseMultihop = false;
            if (!this.isZeroAddress(pairAddr)) {
                let fromR;
                let toR;
                path = [fromToken, toToken];
                let amountInFromContract = yield this.RouterContract.getAmountIn(amountTo, path);
                let pairAddr = yield this.FactoryContract.getPair(fromToken, toToken);
                let pairContract = new PairContract(this.web3, pairAddr);
                const reserve = yield pairContract.getReserves();
                if (Number(fromToken) < Number(toToken)) {
                    fromR = reserve[0];
                    toR = reserve[1];
                }
                else {
                    fromR = reserve[1];
                    toR = reserve[0];
                }
                //let tmpImpact = new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR)));
                let tmpImpact = new decimal_js_1.default(amountTo).div(new decimal_js_1.default(toR).sub(new decimal_js_1.default(amountTo)));
                // console.log("tmpImpact is",tmpImpact)
                if (Number(tmpImpact) > 5 / 100)
                    needUseMultihop = true;
                else {
                    amountIn = amountInFromContract[0];
                    maximumSold = new decimal_js_1.default(amountInFromContract[0]).mul(1 + slippage).floor().toFixed();
                    impact = Number(tmpImpact);
                }
            }
            if ((this.isZeroAddress(pairAddr) || needUseMultihop) && (fromToken != exports.PancakeSwapV2Address.WBNBAdress && toToken != exports.PancakeSwapV2Address.WBNBAdress)) {
                path = [fromToken, exports.PancakeSwapV2Address.WBNBAdress, toToken];
                let amountInFromContract = yield this.RouterContract.getAmountIn(amountTo, path);
                let pair1Addr = yield this.FactoryContract.getPair(exports.PancakeSwapV2Address.WBNBAdress, toToken);
                let pair1Contract = new PairContract(this.web3, pair1Addr);
                const reserve = yield pair1Contract.getReserves();
                let fromR;
                let toR;
                if (Number(fromToken) < Number(exports.PancakeSwapV2Address.WBNBAdress)) {
                    fromR = reserve[0];
                    toR = reserve[1];
                }
                else {
                    fromR = reserve[1];
                    toR = reserve[0];
                }
                amountIn = amountInFromContract[0];
                maximumSold = (new decimal_js_1.default(amountInFromContract[0]).mul(1 + slippage).floor().toFixed());
                impact = Number(new decimal_js_1.default(amountTo).div(new decimal_js_1.default(toR).sub(new decimal_js_1.default(amountTo))));
            }
            // console.log(
            //   {
            //     amountIn : amountIn,
            //     amountOut :amountTo,
            //     maximumSold: String(maximumSold),
            //     priceImpact: impact,
            //     path : path
            // }
            // )
            return {
                amountIn: amountIn,
                amountOut: amountTo,
                maximumSold: String(maximumSold),
                priceImpact: impact,
                path: path
            };
        });
    }
}
exports.SwapUtil = SwapUtil;
