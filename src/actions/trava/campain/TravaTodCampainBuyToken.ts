import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, bytes, uint256 } from "../../../types";

/**
 * LiquidityCampainBuyToken - Buy Token from Action Vault and referre address 
 *
 * @category Trava
 */
export class LiquidityCampainBuyToken extends Action {
  constructor(
    campainAction: EthAddress,
    amountIn: uint256,
    amountOutIn: uint256,
    path: bytes,
    to: EthAddress,
    deadline: uint256,
    referred: EthAddress,
    from: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('LiquidityCampainBuyToken') : contractAddress;

    super(
      "LiquidityCampainBuyToken",
      _contractAddress, //getAddr("LiquidityCampainBuyToken"),
      ["address", "uint256", "uint256", "address[]", "address", "uint256", "address", "from"],
      [campainAction, amountIn, amountOutIn, path, to, deadline, referred, from]
    );

    this.mappableArgs = [campainAction, amountIn, amountOutIn, path, to, deadline, referred, from].flat()
  }
}
