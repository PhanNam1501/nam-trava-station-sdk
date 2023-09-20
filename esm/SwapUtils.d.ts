import { EthAddress, SwapInfoIfInput, SwapInfoIfOutput, uint256 } from "./types";
import { JsonRpcProvider, Contract } from "ethers";
export declare const PancakeSwapV2Address: {
    RouterAddress: string;
    FactoryAddress: string;
    WBNBAdress: string;
};
export declare class RouterContract {
    contractUtil: Contract;
    constructor(web3: JsonRpcProvider, address: EthAddress);
    getAmountOut(amount: uint256, path: EthAddress[]): Promise<any>;
    getAmountIn(amount: uint256, path: EthAddress[]): Promise<any>;
}
export declare class FactoryContract {
    contractUtil: Contract;
    constructor(web3: JsonRpcProvider, address: EthAddress);
    getPair(addr1: EthAddress, addr2: EthAddress): Promise<any>;
}
export declare class PairContract {
    contractUtil: Contract;
    constructor(web3: JsonRpcProvider, address: EthAddress);
    getReserves(): Promise<any>;
}
export declare class SwapUtil {
    web3: JsonRpcProvider;
    FactoryContract: FactoryContract;
    RouterContract: RouterContract;
    constructor(_url: string);
    isZeroAddress(address: EthAddress): boolean;
    getInformationFromInput(_fromToken: EthAddress, _toToken: EthAddress, slippage: number, amountFrom: uint256): Promise<SwapInfoIfInput>;
    getInformationFromOutput(_fromToken: EthAddress, _toToken: EthAddress, slippage: number, amountTo: uint256): Promise<SwapInfoIfOutput>;
}
