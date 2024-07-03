import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * LiquidityCampaignStake - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export class LiquidityCampaignStake extends Action {
    constructor(stakingPool, onBehalfOf, amount, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignStake') : contractAddress;
        super("LiquidityCampaignStake", _contractAddress, //getAddr("LiquidityCampaignStake"),
        ["address", "address", "uint256", "address"], [stakingPool, onBehalfOf, amount, from]);
    }
}
