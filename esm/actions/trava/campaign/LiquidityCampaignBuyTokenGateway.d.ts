import { Action } from "../../../Action";
import { EthAddress, bytes, uint256 } from "../../../types";
/**
 * LiquidityCampaignBuyTokenGateway - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export declare class LiquidityCampaignBuyTokenGateway extends Action {
    constructor(campainAction: EthAddress, amountIn: uint256, amountOutIn: uint256, path: bytes, to: EthAddress, deadline: uint256, referred: EthAddress, from: EthAddress, contractAddress?: string);
}
