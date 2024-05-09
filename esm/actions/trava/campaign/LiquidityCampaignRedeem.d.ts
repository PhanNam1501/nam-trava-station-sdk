import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * LiquidityCampaignRedeem - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export declare class LiquidityCampaignRedeem extends Action {
    constructor(stakingPool: EthAddress, to: EthAddress, amount: uint256, contractAddress?: string);
}
