import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * LiqeePayback - Payback Token to Lending Pool
 * @category Liqee
 */
export class LiqeePayback extends Action {
    constructor(
        iTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('LiqeePayback') : contractAddress;

        super(
            "LiqeePayback",
            _contractAddress, //getAddr("LiqeePayback"),
            ["address", "uint256", "address", "address"],
            [iTokenAddress, amount, from, onBehalf]
        );
    }
}
