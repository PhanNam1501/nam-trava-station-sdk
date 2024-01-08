import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * LiquidityCampaignClaimRewards - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export class LiquidityCampaignClaimRewards extends Action {
    constructor(stakingPool, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignClaimRewards') : contractAddress;
        super("LiquidityCampaignClaimRewards", _contractAddress, //getAddr("LiquidityCampaignClaimRewards"),
        ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
