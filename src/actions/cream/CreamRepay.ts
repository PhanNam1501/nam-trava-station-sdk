import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * CreamRepay - Repay Token to Lending Pool
 * @category Cream
 */
export class CreamRepay extends Action {
    constructor(
        cTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('CreamRepay') : contractAddress;

        super(
            "CreamRepay",
            _contractAddress, //getAddr("CreamRepay"),
            ["address", "uint256", "address", "address"],
            [cTokenAddress, amount, from, onBehalf]
        );
    }
}
