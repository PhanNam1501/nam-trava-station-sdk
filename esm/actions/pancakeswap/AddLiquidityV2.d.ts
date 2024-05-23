import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
    * PancakeAddLiquidityV2 - add liquidity to PancakeSwap
    *
    * @category PancakeSwap
    * @param tokenA - address of token A
    * @param tokenB - address of token B
    * @param amountADesired - amount of token A desired
    * @param amountBDesired - amount of token B desired
    * @param amountAMin - minimum amount of token A
    * @param amountBMin - minimum amount of token B
    * @param to - address to send LP tokens to
    * @param deadline - deadline for the transaction
    * @param from - address to send tokens from
    * @param contractAddress - address of the PancakeAddLiquidityV2 contract
 */
export declare class PancakeAddLiquidityV2 extends Action {
    constructor(tokenA: EthAddress, tokenB: EthAddress, amountADesired: uint256, amountBDesired: uint256, amountAMin: uint256, amountBMin: uint256, to: EthAddress, deadline: uint256, from: EthAddress, contractAddress?: string);
}
