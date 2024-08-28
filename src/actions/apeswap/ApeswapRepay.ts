import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ApeswapRepay - Repay Token to Lending Pool
 * @category Apeswap
 */
export class ApeswapRepay extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ApeswapRepay') : contractAddress;

        super(
            "ApeswapRepay",
            _contractAddress, //getAddr("ApeswapRepay"),
            ["address", "uint256", "address", "address"],
            [vTokenAddress, amount, from, onBehalf]
        );
    }
}
