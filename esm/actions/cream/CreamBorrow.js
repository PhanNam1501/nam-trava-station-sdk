import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * CreamBorrow - Borrow Token to Lending Pool
 * @category Cream
 */
export class CreamBorrow extends Action {
    constructor(cTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('CreamBorrow') : contractAddress;
        super("CreamBorrow", _contractAddress, //getAddr("CreamBorrow"),
        ["address", "uint256", "address"], [cTokenAddress, amount, to]);
    }
}
