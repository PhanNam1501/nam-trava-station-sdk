import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * VenusWithdraw - Withdraw Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export class VenusWithdraw extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusWithdraw') : contractAddress;

        super(
            "VenusWithdraw",
            _contractAddress, //getAddr("VenusWithdraw"),
            ["address", "uint256", "address"],
            [vTokenAddress, amount, to]
        );
    }
}
