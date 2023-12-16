import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * LiqeeRepay - Repay Token to Lending Pool
 * @category Liqee
 */
export class LiqeeRepay extends Action {
    constructor(
        iTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('LiqeeRepay') : contractAddress;

        super(
            "LiqeeRepay",
            _contractAddress, //getAddr("LiqeeRepay"),
            ["address", "uint256", "address", "address"],
            [iTokenAddress, amount, from, onBehalf]
        );
    }
}
