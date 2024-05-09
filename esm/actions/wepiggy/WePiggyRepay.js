import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * WePiggyRepay - Repay Token to Lending Pool
 * @category WePiggy
 */
export class WePiggyRepay extends Action {
    constructor(pTokenAddress, amount, from, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('WePiggyRepay') : contractAddress;
        super("WePiggyRepay", _contractAddress, //getAddr("WePiggyRepay"),
        ["address", "uint256", "address", "address"], [pTokenAddress, amount, from, onBehalf]);
    }
}
