import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * WePiggyWithdraw - Withdraw Token to Lending Pool
 *
 * @category WePiggy
 * need to approve token first
 */
export class WePiggyWithdraw extends Action {
    constructor(
        pTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('WePiggyWithdraw') : contractAddress;

        super(
            "WePiggyWithdraw",
            _contractAddress, //getAddr("WePiggyWithdraw"),
            ["address", "uint256", "address"],
            [pTokenAddress, amount, to]
        );
    }
}
