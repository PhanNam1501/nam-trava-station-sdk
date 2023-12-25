import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * RadiantRepay - Repay Token to Lending Pool
 * @category Radiant
 */
export class RadiantRepay extends Action {
    constructor(
        market: EthAddress,
        tokenAddr: EthAddress,
        amount: uint256,
        ratemode: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('RadiantRepay') : contractAddress;

        super(
            "RadiantRepay",
            _contractAddress, //getAddr("RadiantRepay"),
            ["address", "address", "uint256", "uint256", "address", "address"],
            [market, tokenAddr, amount, ratemode, from, onBehalf]
        );
    }
}
