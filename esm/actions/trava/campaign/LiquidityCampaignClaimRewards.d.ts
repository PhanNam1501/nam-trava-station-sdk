import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * LiquidityCampaignClaimRewards - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export declare class LiquidityCampaignClaimRewards extends Action {
    constructor(stakingPool: EthAddress, to: EthAddress, amount: uint256, contractAddress?: string);
}
