import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256, bytes } from "../../../types";

/**
    * PancakeSwapV2Harvest - add liquidity to PancakeSwap
    *   
    * @category PancakeSwap
 */
export class PancakeSwapV2Harvest extends Action {
    constructor(
        v2Wrapper: EthAddress,
        to: EthAddress,
        noHarvest: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined"
                ? getAddr("PancakeSwapV2Harvest")
                : contractAddress;

        super(
            "PancakeSwapV2Harvest",
            _contractAddress, //getAddr('PancakeSwapV2Harvest'),
            ["address", "address", "bool"],
            [v2Wrapper, to, noHarvest]
        );
        this.mappableArgs = [
            v2Wrapper,
            to,
            noHarvest
        ].flat();
    }
}
