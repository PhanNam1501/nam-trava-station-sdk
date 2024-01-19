import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, bytes, uint256 } from "../../../types";

/**
 * LiquidityCampaignClaimRewards - Buy Token from Action Vault and referre address 
 *
 * @category Trava
 */
export class LiquidityCampaignClaimRewards extends Action {
  constructor(
    stakingPool: EthAddress,
    to: EthAddress,
    amount: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignClaimRewards') : contractAddress;

    super(
      "LiquidityCampaignClaimRewards",
      _contractAddress, //getAddr("LiquidityCampaignClaimRewards"),
      ["address", "address", "uint256"],
      [stakingPool, to, amount]
    );

  }
}
