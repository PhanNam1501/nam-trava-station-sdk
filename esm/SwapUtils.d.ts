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
    constructor(_web3: JsonRpcProvider);
    isZeroAddress(address: EthAddress): boolean;
    getInformationFromInput(fromToken: EthAddress, toToken: EthAddress, slippage: number, amountFrom: uint256): Promise<SwapInfoIfInput>;
    getInformationFromOutput(fromToken: EthAddress, toToken: EthAddress, slippage: number, amountTo: uint256): Promise<SwapInfoIfOutput>;
}
