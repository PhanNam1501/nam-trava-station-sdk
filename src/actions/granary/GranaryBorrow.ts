import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * GranaryBorrow - Borrow Token to Lending Pool
 * @category Granary
 */
export class GranaryBorrow extends Action {
    constructor(
        market: EthAddress,
        tokenAddr: EthAddress,
        amount: uint256,
        ratemode: uint256,
        to: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('GranaryBorrow') : contractAddress;

        super(
            "GranaryBorrow",
            _contractAddress, //getAddr("GranaryBorrow"),
            ["address", "address", "uint256", "uint256", "address", "address"],
            [market, tokenAddr, amount, ratemode, to, onBehalf]
        );
    }
}
