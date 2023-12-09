import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * LiqeeWithdraw - Withdraw Token to Lending Pool
 * @category Liqee
 */
export class LiqeeWithdraw extends Action {
    constructor(
        iTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('LiqeeWithdraw') : contractAddress;

        super(
            "LiqeeWithdraw",
            _contractAddress, //getAddr("LiqeeWithdraw"),
            ["address", "uint256", "address"],
            [iTokenAddress, amount, to]
        );
    }
}
