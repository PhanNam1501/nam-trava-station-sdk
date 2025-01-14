import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * PancakeRemoveLiquidityV2 - remove liquidity from PancakeSwap
 * 
 * @category PancakeSwap
 * @param tokenA - address of token A
 * @param tokenB - address of token B
 * @param tokenPair - address of the token pair
 * @param liquidity - amount of LP tokens to remove
 * @param amountAMin - minimum amount of token A
 * @param amountBMin - minimum amount of token B
 * @param to - address to send tokens to
 * @param deadline - deadline for the transaction
 * @param contractAddress - address of the PancakeRemoveLiquidityV2 contract
 * 
 */
export class PancakeRemoveLiquidityV2 extends Action {
  constructor(
    tokenA: EthAddress,
    tokenB: EthAddress,
    tokenPair: EthAddress,
    liquidity: uint256,
    amountAMin: uint256,
    amountBMin: uint256,
    to: EthAddress,
    deadline: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined"
        ? getAddr("PancakeRemoveLiquidityV2")
        : contractAddress;

    super(
        "PancakeRemoveLiquidityV2",
        _contractAddress, //getAddr('PancakeRemoveLiquidityV2'),
        ["address", "address" ,"address" , "uint256", "uint256", "uint256", "address", "uint256"],
        [tokenA, tokenB, tokenPair, liquidity, amountAMin, amountBMin, to, deadline]
    );
    this.mappableArgs = [
        tokenA,
        tokenB,
        tokenPair,
        liquidity,
        amountAMin,
        amountBMin,
        to,
        deadline,
    ].flat();
  }
}
