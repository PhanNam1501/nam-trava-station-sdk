import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * GranaryWithdraw - Withdraw Token to Lending Pool
 * @category Granary
 */
export class GranaryWithdraw extends Action {
    constructor(
        market: EthAddress,
        tokenAddr: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('GranaryWithdraw') : contractAddress;

        super(
            "GranaryWithdraw",
            _contractAddress, //getAddr("GranaryWithdraw"),
            ["address", "address", "uint256", "address"],
            [market, tokenAddr, amount, to]
        );
    }
}
