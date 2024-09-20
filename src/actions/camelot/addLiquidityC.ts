import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class addLiquidityC extends Action {
  constructor(
    router: EthAddress,
    tokenA: EthAddress,
    tokenB: EthAddress,
    amountA: uint256,
    amountB: uint256,
    amountAMin: uint256,
    amountBMin: uint256,
    deadline: uint256,
    from: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('CamelotAddC') : contractAddress;

    super(
      "addLiquidityC",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address", "address", "uint256", "uint256", "uint256", "uint256", "uint256", "address"],
      [router, tokenA, tokenB, amountA, amountB, amountAMin, amountBMin, deadline, from]
    );
  }
}