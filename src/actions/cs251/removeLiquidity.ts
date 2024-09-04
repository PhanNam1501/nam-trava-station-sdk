import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class removeLiquidity extends Action {
  constructor(
    exchange: EthAddress,
    token: EthAddress,
    to: EthAddress,
    amount : string,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('RMVLIAddress') : contractAddress;

    super(
      "removeLiquidity",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address",  "address", "uint256"],
      [exchange, token, to, amount]
    );
  }
}