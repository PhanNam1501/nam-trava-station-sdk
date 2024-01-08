import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * LiquidityCampaignStake - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export declare class LiquidityCampaignStake extends Action {
    constructor(stakingPool: EthAddress, onBehalfOf: EthAddress, amount: uint256, from: EthAddress, contractAddress?: string);
}
