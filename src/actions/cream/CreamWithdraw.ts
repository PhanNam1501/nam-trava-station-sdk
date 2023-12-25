import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * CreamWithdraw - Withdraw Token to Lending Pool
 *
 * @category Cream
 * need to approve token first
 */
export class CreamWithdraw extends Action {
    constructor(
        cTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('CreamWithdraw') : contractAddress;

        super(
            "CreamWithdraw",
            _contractAddress, //getAddr("CreamWithdraw"),
            ["address", "uint256", "address"],
            [cTokenAddress, amount, to]
        );
    }
}
