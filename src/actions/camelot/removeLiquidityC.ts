import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class removeLiquidityC extends Action {
  constructor(
    router: EthAddress,
    tokenA: EthAddress,
    tokenB: EthAddress,
    tokenpair: EthAddress,
    liquidity: uint256,
    amountAMin: uint256,
    amountBMin: uint256,
    deadline: uint256,
    from: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('CamelotRemoveC') : contractAddress;

    super(
      "removeLiquidityC",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address", "address", "address", "uint256", "uint256", "uint256", "uint256", "address"],
      [router, tokenA, tokenB, tokenpair, liquidity, amountAMin, amountBMin, deadline, from]
    );
  }
}