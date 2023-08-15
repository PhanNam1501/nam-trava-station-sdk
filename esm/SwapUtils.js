var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RouterAbi from "./abis/Swap/PancakeSwapRouter.json";
import FactoryAbi from "./abis/Swap/PancakeSwapFactory.json";
import PairAbi from "./abis/Swap/PancakeSwapPair.json";
import Dec from "decimal.js";
export const PancakeSwapV2Address = {
    RouterAddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    FactoryAddress: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    WBNBAdress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
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
const RouterAbiItem = RouterAbi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
const FactoryAbiItem = FactoryAbi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
const PairAbiItem = PairAbi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
export class RouterContract {
    constructor(web3, address) {
        this.contractUtil = new web3.eth.Contract(RouterAbiItem, address);
    }
    getAmountOut(amount, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.methods.getAmountsOut(amount, path).call();
            return res;
        });
    }
    getAmountIn(amount, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.methods.getAmountsIn(amount, path).call();
            return res;
        });
    }
}
export class FactoryContract {
    constructor(web3, address) {
        this.contractUtil = new web3.eth.Contract(FactoryAbiItem, address);
    }
    getPair(addr1, addr2) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.methods.getPair(addr1, addr2).call();
            return res;
        });
    }
}
export class PairContract {
    constructor(web3, address) {
        this.contractUtil = new web3.eth.Contract(PairAbiItem, address);
    }
    getReserves() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.methods.getReserves().call();
            return res;
        });
    }
}
export class SwapUtil {
    constructor(_web3) {
        this.web3 = _web3;
        this.FactoryContract = new FactoryContract(_web3, PancakeSwapV2Address.FactoryAddress);
        this.RouterContract = new RouterContract(_web3, PancakeSwapV2Address.RouterAddress);
    }
    isZeroAddress(address) {
        return address.toLowerCase() === this.web3.utils.toChecksumAddress('0x0000000000000000000000000000000000000000');
    }
    getInformationFromInput(fromToken, toToken, slippage, amountFrom) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = [];
            let amountOut;
            let impact = 0;
            let minimumReceive;
            let pairAddr = yield this.FactoryContract.getPair(fromToken, toToken);
            let needUseMultihop = false;
            if (!this.isZeroAddress(pairAddr)) {
                let fromR;
                let toR;
                path = [fromToken, toToken];
                let amountOutFromContract = yield this.RouterContract.getAmountOut(amountFrom, path);
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
                let tmpImpact = new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR)));
                console.log("tmpImpact is", tmpImpact);
                //impact =new Dec(amountOut).div(new Dec(toR).sub(new Dec(amountOut)))
                if (Number(tmpImpact) > 5 / 100)
                    needUseMultihop = true;
                else {
                    amountOut = amountOutFromContract[1];
                    minimumReceive = (new Dec(amountOutFromContract[1]).mul(1 - slippage).floor());
                    impact = Number(tmpImpact);
                }
            }
            if ((this.isZeroAddress(pairAddr) || needUseMultihop) && (fromToken != PancakeSwapV2Address.WBNBAdress && toToken != PancakeSwapV2Address.WBNBAdress)) {
                path = [fromToken, PancakeSwapV2Address.WBNBAdress, toToken];
                let amountOutFromContract = yield this.RouterContract.getAmountOut(amountFrom, path);
                let pair1Addr = yield this.FactoryContract.getPair(fromToken, PancakeSwapV2Address.WBNBAdress);
                let pair1Contract = new PairContract(this.web3, pair1Addr);
                const reserve = yield pair1Contract.getReserves();
                let fromR;
                if (Number(fromToken) < Number(PancakeSwapV2Address.WBNBAdress)) {
                    fromR = reserve[0];
                }
                else {
                    fromR = reserve[1];
                }
                amountOut = amountOutFromContract[2];
                minimumReceive = (new Dec(amountOutFromContract[2]).mul(1 - slippage).floor());
                impact = Number(new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR))));
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
        });
    }
    getInformationFromOutput(fromToken, toToken, slippage, amountTo) {
        return __awaiter(this, void 0, void 0, function* () {
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
                let tmpImpact = new Dec(amountTo).div(new Dec(toR).sub(new Dec(amountTo)));
                console.log("tmpImpact is", tmpImpact);
                if (Number(tmpImpact) > 5 / 100)
                    needUseMultihop = true;
                else {
                    amountIn = amountInFromContract[0];
                    maximumSold = new Dec(amountInFromContract[0]).mul(1 + slippage).floor().toFixed();
                    impact = Number(tmpImpact);
                }
            }
            if ((this.isZeroAddress(pairAddr) || needUseMultihop) && (fromToken != PancakeSwapV2Address.WBNBAdress && toToken != PancakeSwapV2Address.WBNBAdress)) {
                path = [fromToken, PancakeSwapV2Address.WBNBAdress, toToken];
                let amountInFromContract = yield this.RouterContract.getAmountIn(amountTo, path);
                let pair1Addr = yield this.FactoryContract.getPair(PancakeSwapV2Address.WBNBAdress, toToken);
                let pair1Contract = new PairContract(this.web3, pair1Addr);
                const reserve = yield pair1Contract.getReserves();
                let fromR;
                let toR;
                if (Number(fromToken) < Number(PancakeSwapV2Address.WBNBAdress)) {
                    fromR = reserve[0];
                    toR = reserve[1];
                }
                else {
                    fromR = reserve[1];
                    toR = reserve[0];
                }
                amountIn = amountInFromContract[0];
                maximumSold = (new Dec(amountInFromContract[0]).mul(1 + slippage).floor().toFixed());
                impact = Number(new Dec(amountTo).div(new Dec(toR).sub(new Dec(amountTo))));
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
        });
    }
}
