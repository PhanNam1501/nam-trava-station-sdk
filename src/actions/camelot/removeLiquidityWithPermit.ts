import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { bytes32, EthAddress, uint256, uint8 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class removeLiquidityWithPermit extends Action {
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
    approveMax: boolean,
    v: uint8,
    r: bytes32,
    s: bytes32,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('CamelotRemoveWithPermit') : contractAddress;

    super(
      "removeLiquidityWitPermit",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address", "address", "address", "uint256", "uint256", "uint256", "uint256", "address", "bool", "uint8", "bytes32", "bytes32"],
      [router, tokenA, tokenB, tokenpair, liquidity, amountAMin, amountBMin, deadline, from, approveMax, v, r, s]
    );
  }
}