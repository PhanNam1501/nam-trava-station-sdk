import { Action } from "../../Action";
import { getAddr } from "../../addresses";
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
export class PancakeAddLiquidityV2 extends Action {
    constructor(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined"
            ? getAddr("PancakeAddLiquidityV2")
            : contractAddress;
        super("PancakeAddLiquidityV2", _contractAddress, //getAddr('PancakeAddLiquidityV2'),
        ["address", "address", "uint256", "uint256", "uint256", "uint256", "address", "uint256", "address"], [tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline, from]);
        this.mappableArgs = [
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            deadline,
            from,
        ].flat();
    }
}
