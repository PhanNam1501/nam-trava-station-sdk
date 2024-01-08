import { Action } from "../../../Action";
import { EthAddress, bytes, uint256 } from "../../../types";
/**
 * LiquidityCampaignBuyToken - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export declare class LiquidityCampaignBuyToken extends Action {
    constructor(campainAction: EthAddress, amountIn: uint256, amountOutIn: uint256, path: bytes, to: EthAddress, deadline: uint256, referred: EthAddress, from: EthAddress, contractAddress?: string);
}
