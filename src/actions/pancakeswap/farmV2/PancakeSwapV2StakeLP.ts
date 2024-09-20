import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256, bytes } from "../../../types";

/**
    * PancakeSwapV2StakeLP - add liquidity to PancakeSwap
    *   
    * @category PancakeSwap
 */
export class PancakeSwapV2StakeLP extends Action {
    constructor(
        v2Wrapper: EthAddress,
        amount: uint256,
        from: EthAddress,
        noHarvest: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined"
                ? getAddr("PancakeSwapV2StakeLP")
                : contractAddress;

        super(
            "PancakeSwapV2StakeLP",
            _contractAddress, //getAddr('PancakeSwapV2StakeLP'),
            ["address", "uint256", "address", "bool"],
            [v2Wrapper, amount, from, noHarvest]
        );
        this.mappableArgs = [
            v2Wrapper,
            amount,
            from,
            noHarvest
        ].flat();
    }
}
