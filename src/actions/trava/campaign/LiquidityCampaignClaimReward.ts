import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, bytes, uint256 } from "../../../types";

/**
 * LiquidityCampaignClaimReward - ClaimReward to Action Vault 
 *
 * @category Trava
 */
export class LiquidityCampaignClaimReward extends Action {
    constructor(
        stakingPool: EthAddress,
        to: EthAddress,
        amount: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignClaimReward') : contractAddress;

        super(
            "LiquidityCampaignClaimReward",
            _contractAddress, //getAddr("LiquidityCampaignClaimReward"),
            ["address", "address", "uint256"],
            [stakingPool, to, amount]
        );


    }
}
