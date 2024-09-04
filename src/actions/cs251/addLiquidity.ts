import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class addLiquidity extends Action {
  constructor(
    exchange: EthAddress,
    token: EthAddress,
    maxSlippage: string,
    from: EthAddress,
    amount : string,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('ADDLIAddress') : contractAddress;

    super(
      "addLiquidity",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address", "uint256", "address", "uint256"],
      [exchange, token, maxSlippage, from, amount]
    );
  }
}