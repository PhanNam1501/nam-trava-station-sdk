import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ValasWithdraw - Withdraw Token to Lending Pool
 * @category Valas
 */
export class ValasWithdraw extends Action {
    constructor(
        market: EthAddress,
        tokenAddr: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ValasWithdraw') : contractAddress;

        super(
            "ValasWithdraw",
            _contractAddress, //getAddr("ValasWithdraw"),
            ["address", "address", "uint256", "address"],
            [market, tokenAddr, amount, to]
        );
    }
}
