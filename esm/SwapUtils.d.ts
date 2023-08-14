import { EthAddress, SwapInfoIfInput, SwapInfoIfOutput, uint256 } from "./types";
import Web3 from "web3";
export declare const PancakeSwapV2Address: {
    RouterAddress: string;
    FactoryAddress: string;
    WBNBAdress: string;
};
export declare class RouterContract {
    contractUtil: any;
    constructor(web3: Web3, address: EthAddress);
    getAmountOut(amount: uint256, path: EthAddress[]): Promise<any>;
    getAmountIn(amount: uint256, path: EthAddress[]): Promise<any>;
}
export declare class FactoryContract {
    contractUtil: any;
    constructor(web3: Web3, address: EthAddress);
    getPair(addr1: EthAddress, addr2: EthAddress): Promise<any>;
}
export declare class PairContract {
    contractUtil: any;
    constructor(web3: Web3, address: EthAddress);
    getReserves(): Promise<any>;
}
export declare class SwapUtil {
    web3: Web3;
    FactoryContract: FactoryContract;
    RouterContract: RouterContract;
    constructor(_web3: Web3);
    isZeroAddress(address: EthAddress): boolean;
    getInformationFromInput(fromToken: EthAddress, toToken: EthAddress, slippage: number, amountFrom: uint256): Promise<SwapInfoIfInput>;
    getInformationFromOutput(fromToken: EthAddress, toToken: EthAddress, slippage: number, amountTo: uint256): Promise<SwapInfoIfOutput>;
}
