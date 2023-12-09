import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * RadiantPayback - Payback Token to Lending Pool
 * @category Radiant
 */
export class RadiantPayback extends Action {
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
            typeof contractAddress === "undefined" ? getAddr('RadiantPayback') : contractAddress;

        super(
            "RadiantPayback",
            _contractAddress, //getAddr("RadiantPayback"),
            ["address", "address", "uint256", "uint256", "address", "address"],
            [market, tokenAddr, amount, ratemode, from, onBehalf]
        );
    }
}
