import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * WePiggyBorrow - Borrow Token to Lending Pool
 * @category WePiggy
 */
export class WePiggyBorrow extends Action {
    constructor(pTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('WePiggyBorrow') : contractAddress;
        super("WePiggyBorrow", _contractAddress, //getAddr("WePiggyBorrow"),
        ["address", "uint256", "address"], [pTokenAddress, amount, to]);
    }
}
