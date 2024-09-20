import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ApeswapWithdraw - Withdraw Token to Lending Pool
 *
 * @category Apeswap
 * need to approve token first
 */
export class ApeswapWithdraw extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ApeswapWithdraw') : contractAddress;

        super(
            "ApeswapWithdraw",
            _contractAddress, //getAddr("ApeswapWithdraw"),
            ["address", "uint256", "address"],
            [vTokenAddress, amount, to]
        );
    }
}
