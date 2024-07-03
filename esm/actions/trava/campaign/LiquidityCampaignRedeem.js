import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * LiquidityCampaignRedeem - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export class LiquidityCampaignRedeem extends Action {
    constructor(stakingPool, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignRedeem') : contractAddress;
        super("LiquidityCampaignRedeem", _contractAddress, //getAddr("LiquidityCampaignRedeem"),
        ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
