import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * RadiantBorrow - Borrow Token to Lending Pool
 * @category Radiant
 */
export class RadiantBorrow extends Action {
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
            typeof contractAddress === "undefined" ? getAddr('RadiantBorrow') : contractAddress;

        super(
            "RadiantBorrow",
            _contractAddress, //getAddr("RadiantBorrow"),
            ["address", "address", "uint256", "uint256", "address", "address"],
            [market, tokenAddr, amount, ratemode, to, onBehalf]
        );
    }
}
