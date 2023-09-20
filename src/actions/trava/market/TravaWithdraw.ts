import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 */
export class TravaWithdraw extends Action {
  constructor(
    market: EthAddress,
    token: EthAddress,
    amount: string,
    to: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaWithdraw') : contractAddress;

    super(
      "TravaWithdraw",
      _contractAddress, //getAddr("TravaWithdraw"),
      ["address", "address", "uint256", "address"],
      [market, token, amount, to]
    );
  }
}
