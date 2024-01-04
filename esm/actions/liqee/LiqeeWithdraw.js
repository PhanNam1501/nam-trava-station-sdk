import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * LiqeeWithdraw - Withdraw Token to Lending Pool
 * @category Liqee
 */
export class LiqeeWithdraw extends Action {
    constructor(iTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiqeeWithdraw') : contractAddress;
        super("LiqeeWithdraw", _contractAddress, //getAddr("LiqeeWithdraw"),
        ["address", "uint256", "address"], [iTokenAddress, amount, to]);
    }
}
