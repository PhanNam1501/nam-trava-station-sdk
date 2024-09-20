import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256, bytes } from "../../../types";

/**
    * PancakeSwapV2UnstakeLP - add liquidity to PancakeSwap
    *   
    * @category PancakeSwap
 */
export class PancakeSwapV2UnstakeLP extends Action {
    constructor(
        v2Wrapper: EthAddress,
        amount: uint256,
        to: EthAddress,
        noHarvest: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined"
                ? getAddr("PancakeSwapV2UnstakeLP")
                : contractAddress;

        super(
            "PancakeSwapV2UnstakeLP",
            _contractAddress, //getAddr('PancakeSwapV2UnstakeLP'),
            ["address", "uint256", "address", "bool"],
            [v2Wrapper, amount, to, noHarvest]
        );
        this.mappableArgs = [
            v2Wrapper,
            amount,
            to,
            noHarvest
        ].flat();
    }
}
