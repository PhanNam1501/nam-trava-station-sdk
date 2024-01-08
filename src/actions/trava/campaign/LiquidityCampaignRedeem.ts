import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, bytes, uint256 } from "../../../types";

/**
 * LiquidityCampaignRedeem - Buy Token from Action Vault and referre address 
 *
 * @category Trava
 */
export class LiquidityCampaignRedeem extends Action {
  constructor(
    stakingPool: EthAddress,
    to: EthAddress,
    amount: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignRedeem') : contractAddress;

    super(
      "LiquidityCampaignRedeem",
      _contractAddress, //getAddr("LiquidityCampaignRedeem"),
      ["address", "address", "uint256"],
      [stakingPool, to, amount]
    );

  }
}
