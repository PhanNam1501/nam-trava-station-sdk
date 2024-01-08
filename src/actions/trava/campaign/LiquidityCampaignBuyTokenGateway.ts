import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, bytes, uint256 } from "../../../types";

/**
 * LiquidityCampaignBuyTokenGateway - Buy Token from Action Vault and referre address 
 *
 * @category Trava
 */
export class LiquidityCampaignBuyTokenGateway extends Action {
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
      typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignBuyTokenGateway') : contractAddress;

    super(
      "LiquidityCampaignBuyTokenGateway",
      _contractAddress, //getAddr("LiquidityCampaignBuyTokenGateway"),
      ["address", "uint256", "uint256", "address[]", "address", "uint256", "address", "address"],
      [campainAction, amountIn, amountOutIn, path, to, deadline, referred, from]
    );

    this.mappableArgs = [campainAction, amountIn, amountOutIn, path, to, deadline, referred, from].flat()
  }
}
