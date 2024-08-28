import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ApeswapBorrow - Borrow Token to Lending Pool
 * @category Apeswap
 */
export class ApeswapBorrow extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ApeswapBorrow') : contractAddress;

        super(
            "ApeswapBorrow",
            _contractAddress, //getAddr("ApeswapBorrow"),
            ["address", "uint256", "address"],
            [vTokenAddress, amount, to]
        );
    }
}
