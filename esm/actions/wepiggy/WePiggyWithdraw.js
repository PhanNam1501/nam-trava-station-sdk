import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * WePiggyWithdraw - Withdraw Token to Lending Pool
 *
 * @category WePiggy
 * need to approve token first
 */
export class WePiggyWithdraw extends Action {
    constructor(pTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('WePiggyWithdraw') : contractAddress;
        super("WePiggyWithdraw", _contractAddress, //getAddr("WePiggyWithdraw"),
        ["address", "uint256", "address"], [pTokenAddress, amount, to]);
    }
}
