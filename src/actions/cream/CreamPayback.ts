import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * CreamPayback - Payback Token to Lending Pool
 * @category Cream
 */
export class CreamPayback extends Action {
    constructor(
        cTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('CreamPayback') : contractAddress;

        super(
            "CreamPayback",
            _contractAddress, //getAddr("CreamPayback"),
            ["address", "uint256", "address", "address"],
            [cTokenAddress, amount, from, onBehalf]
        );
    }
}
