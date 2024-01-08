import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, bytes, uint256 } from "../../../types";

/**
 * LiquidityCampaignStake - Stake to Action Vault 
 *
 * @category Trava
 */
export class LiquidityCampaignStake extends Action {
    constructor(
        stakingPool: EthAddress,
        onBehalfOf: EthAddress,
        amount: uint256,
        from: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('LiquidityCampaignStake') : contractAddress;

        super(
            "LiquidityCampaignStake",
            _contractAddress, //getAddr("LiquidityCampaignStake"),
            ["address", "address", "uint256", "address"],
            [stakingPool, onBehalfOf, amount, from]
        );


    }
}
