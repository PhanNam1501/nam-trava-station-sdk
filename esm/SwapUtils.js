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
import { JsonRpcProvider, Contract, ZeroAddress } from "ethers";
import { convertHexStringToAddress, getAddr } from "./addresses";
import BigNumber from "bignumber.js";
const RouterAbiItem = RouterAbi;
const FactoryAbiItem = FactoryAbi;
const PairAbiItem = PairAbi;
export class RouterContract {
    constructor(web3, address) {
        this.contractUtil = new Contract(address, RouterAbiItem, web3);
    }
    getAmountOut(amount, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getAmountsOut(amount, path);
            return res.map((el) => BigNumber(el).toFixed());
        });
    }
    getAmountIn(amount, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getAmountsIn(amount, path);
            return res.map((el) => BigNumber(el).toFixed());
        });
    }
}
export class FactoryContract {
    constructor(web3, address) {
        this.contractUtil = new Contract(address, FactoryAbiItem, web3);
    }
    getPair(addr1, addr2) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getPair(addr1, addr2);
            return res;
        });
    }
}
export class PairContract {
    constructor(web3, address) {
        this.contractUtil = new Contract(address, PairAbiItem, web3);
    }
    getReserves() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.contractUtil.getReserves();
            return res.map((el) => new Dec(String(el)).toFixed());
        });
    }
}
export class SwapUtil {
    constructor(_rpc, _chainId) {
        this.web3 = new JsonRpcProvider(_rpc);
        this.chainId = _chainId;
        this.FactoryContract = new FactoryContract(this.web3, getAddr("FactoryAddress", this.chainId));
        this.RouterContract = new RouterContract(this.web3, getAddr("RouterAddress", this.chainId));
    }
    isZeroAddress(address) {
        return address.toLowerCase() === ZeroAddress;
    }
    isTodToken(_tokenAddress) {
        return _tokenAddress.toLowerCase() == getAddr("TODAddress", this.chainId).toLowerCase();
    }
    isBusdToken(_tokenAddress) {
        return _tokenAddress.toLowerCase() == getAddr("BUSDAddress", this.chainId).toLowerCase();
    }
    isWbnbToken(_tokenAddress) {
        return _tokenAddress.toLowerCase() == getAddr("WBNBAddress", this.chainId).toLowerCase();
    }
    getFromReserve(fromToken, toToken) {
        return __awaiter(this, void 0, void 0, function* () {
            let fromR;
            let pair1Addr = yield this.FactoryContract.getPair(fromToken, toToken);
            let pair1Contract = new PairContract(this.web3, pair1Addr);
            const reserve = yield pair1Contract.getReserves();
            if (BigNumber(fromToken).isLessThan(toToken)) {
                fromR = reserve[0];
            }
            else {
                fromR = reserve[1];
            }
            return String(fromR);
        });
    }
    getInformationFromInput(_fromToken, _toToken, slippage, amountFrom) {
        return __awaiter(this, void 0, void 0, function* () {
            let fromToken = convertHexStringToAddress(_fromToken);
            let toToken = convertHexStringToAddress(_toToken);
            let path = [];
            let amountOut = "0";
            let impact = BigNumber(0);
            let minimumReceive = BigNumber(0);
            let pairAddr = yield this.FactoryContract.getPair(fromToken, toToken);
            let needUseMultihop = false;
            let WBNBAddress = getAddr("WBNBAddress", this.chainId);
            if (!this.isZeroAddress(pairAddr)) {
                // let toR;
                path = [fromToken, toToken];
                let amountOutFromContract = yield this.RouterContract.getAmountOut(amountFrom, path);
                let fromR = yield this.getFromReserve(fromToken, toToken);
                let tmpImpact = BigNumber(amountFrom).div(BigNumber(amountFrom).plus(fromR));
                if (Number(tmpImpact) > 5 / 100) {
                    needUseMultihop = true;
                }
                amountOut = String(amountOutFromContract[1]);
                minimumReceive = (BigNumber(amountOutFromContract[1]).multipliedBy(1 - slippage));
                impact = tmpImpact;
            }
            else {
                let BUSDAddress = getAddr("BUSDAddress", this.chainId);
                let fromR = "0";
                if (this.isTodToken(toToken)) {
                    if (this.isWbnbToken(fromToken)) {
                        path = [fromToken, BUSDAddress, toToken];
                        fromR = yield this.getFromReserve(fromToken, BUSDAddress);
                    }
                    else {
                        path = [fromToken, WBNBAddress, BUSDAddress, toToken];
                        fromR = yield this.getFromReserve(fromToken, WBNBAddress);
                    }
                }
                else if (this.isTodToken(fromToken)) {
                    if (this.isWbnbToken(toToken)) {
                        path = [fromToken, BUSDAddress, toToken];
                    }
                    else {
                        path = [fromToken, BUSDAddress, WBNBAddress, toToken];
                    }
                    fromR = yield this.getFromReserve(fromToken, BUSDAddress);
                }
                else {
                    path = [fromToken, WBNBAddress, toToken];
                    fromR = yield this.getFromReserve(fromToken, WBNBAddress);
                }
                let amountOutFromContract = yield this.RouterContract.getAmountOut(amountFrom, path);
                amountOut = amountOutFromContract[path.length - 1];
                minimumReceive = (BigNumber(amountOutFromContract[path.length - 1]).multipliedBy(1 - slippage));
                impact = (BigNumber(amountFrom).div(BigNumber(amountFrom).plus(fromR)));
            }
            return {
                amountIn: amountFrom,
                amountOut: amountOut,
                minimumReceive: minimumReceive.toFixed(0),
                priceImpact: impact.toNumber(),
                path: path
            };
        });
    }
    getInformationFromOutput(_fromToken, _toToken, slippage, amountTo) {
        return __awaiter(this, void 0, void 0, function* () {
            let fromToken = convertHexStringToAddress(_fromToken);
            let toToken = convertHexStringToAddress(_toToken);
            let path = [];
            let amountIn = "0";
            let impact = BigNumber(0);
            let maximumSold = BigNumber(0);
            let pairAddr = yield this.FactoryContract.getPair(fromToken, toToken);
            let needUseMultihop = false;
            let WBNBAddress = getAddr("WBNBAddress", this.chainId);
            if (!this.isZeroAddress(pairAddr)) {
                let fromR;
                let toR;
                path = [fromToken, toToken];
                let amountInFromContract = yield this.RouterContract.getAmountIn(amountTo, path);
                let pairAddr = yield this.FactoryContract.getPair(fromToken, toToken);
                let pairContract = new PairContract(this.web3, pairAddr);
                const reserve = yield pairContract.getReserves();
                if (BigNumber(fromToken).isLessThan(toToken)) {
                    fromR = reserve[0];
                    toR = reserve[1];
                }
                else {
                    fromR = reserve[1];
                    toR = reserve[0];
                }
                let tmpImpact = BigNumber(amountTo).div(BigNumber(toR).minus(amountTo));
                if (Number(tmpImpact) > 5 / 100)
                    needUseMultihop = true;
                amountIn = amountInFromContract[0];
                maximumSold = BigNumber(amountInFromContract[0]).multipliedBy(1 + slippage);
                impact = tmpImpact;
            }
            if ((this.isZeroAddress(pairAddr) || needUseMultihop) && (fromToken.toLowerCase() != WBNBAddress.toLowerCase() && toToken.toLowerCase() != WBNBAddress.toLowerCase())) {
                path = [fromToken, WBNBAddress, toToken];
                let amountInFromContract = yield this.RouterContract.getAmountIn(amountTo, path);
                let pair1Addr = yield this.FactoryContract.getPair(WBNBAddress, toToken);
                let pair1Contract = new PairContract(this.web3, pair1Addr);
                const reserve = yield pair1Contract.getReserves();
                let fromR;
                let toR;
                if (BigNumber(fromToken).isLessThan(WBNBAddress)) {
                    fromR = reserve[0];
                    toR = reserve[1];
                }
                else {
                    fromR = reserve[1];
                    toR = reserve[0];
                }
                amountIn = amountInFromContract[0];
                maximumSold = BigNumber(amountInFromContract[0]).multipliedBy(1 + slippage);
                impact = (BigNumber(amountTo).div(BigNumber(toR).minus(amountTo)));
            }
            return {
                amountIn: amountIn,
                amountOut: amountTo,
                maximumSold: maximumSold.toFixed(0),
                priceImpact: impact.toNumber(),
                path: path
            };
        });
    }
}
