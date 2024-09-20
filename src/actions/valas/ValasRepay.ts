import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ValasRepay - Repay Token to Lending Pool
 * @category Valas
 */
export class ValasRepay extends Action {
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
            typeof contractAddress === "undefined" ? getAddr('ValasRepay') : contractAddress;

        super(
            "ValasRepay",
            _contractAddress, //getAddr("ValasRepay"),
            ["address", "address", "uint256", "uint256", "address", "address"],
            [market, tokenAddr, amount, ratemode, from, onBehalf]
        );
    }
}
