import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ApeswapCollateral - Collateral Token to Lending Pool
 * @category Apeswap
 */
export class ApeswapCollateral extends Action {
    constructor(
        cTokenAddress: Array<EthAddress>,
        enableAsColl: Array<boolean>,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ApeswapCollateral') : contractAddress;

        super(
            "ApeswapCollateral",
            _contractAddress, //getAddr("ApeswapCollateral"),
            ["address[]", "bool[]"],
            [cTokenAddress, enableAsColl]
        );
        this.mappableArgs = [cTokenAddress, enableAsColl].flat();
    }
}
