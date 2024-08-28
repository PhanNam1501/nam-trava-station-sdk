import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ValasBorrow - Borrow Token to Lending Pool
 * @category Valas
 */
export class ValasBorrow extends Action {
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
            typeof contractAddress === "undefined" ? getAddr('ValasBorrow') : contractAddress;

        super(
            "ValasBorrow",
            _contractAddress, //getAddr("ValasBorrow"),
            ["address", "address", "uint256", "uint256", "address", "address"],
            [market, tokenAddr, amount, ratemode, to, onBehalf]
        );
    }
}
