import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ApeswapSupply - Supply Token to Lending Pool
 *
 * @category Apeswap
 * need to approve token first
 */
export class ApeswapSupply extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ApeswapSupply') : contractAddress;

        super(
            "ApeswapSupply",
            _contractAddress, //getAddr("ApeswapSupply"),
            ["address", "uint256", "address" , "bool"],
            [vTokenAddress, amount, from, enableAsColl]
        );
    }
}
