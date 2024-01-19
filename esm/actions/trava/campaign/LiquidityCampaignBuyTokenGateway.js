import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * LiquidityCampaignBuyTokenGateway - Buy Token from Action Vault and referre address
 *
 * @category Trava
 */
export class LiquidityCampaignBuyTokenGateway extends Action {
    constructor(campainAction, amountIn, amountOutIn, path, to, deadline, referred, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignBuyTokenGateway') : contractAddress;
        super("LiquidityCampaignBuyTokenGateway", _contractAddress, //getAddr("LiquidityCampaignBuyTokenGateway"),
        ["address", "uint256", "uint256", "address[]", "address", "uint256", "address", "address"], [campainAction, amountIn, amountOutIn, path, to, deadline, referred, from]);
        this.mappableArgs = [campainAction, amountIn, amountOutIn, path, to, deadline, referred, from].flat();
    }
}
