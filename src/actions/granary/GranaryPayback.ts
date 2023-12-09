import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * GranaryPayback - Payback Token to Lending Pool
 * @category Granary
 */
export class GranaryPayback extends Action {
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
            typeof contractAddress === "undefined" ? getAddr('GranaryPayback') : contractAddress;

        super(
            "GranaryPayback",
            _contractAddress, //getAddr("GranaryPayback"),
            ["address", "address", "uint256", "uint256", "address", "address"],
            [market, tokenAddr, amount, ratemode, from, onBehalf]
        );
    }
}
