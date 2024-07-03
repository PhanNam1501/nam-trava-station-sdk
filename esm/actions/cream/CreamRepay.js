import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * CreamRepay - Repay Token to Lending Pool
 * @category Cream
 */
export class CreamRepay extends Action {
    constructor(cTokenAddress, amount, from, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('CreamRepay') : contractAddress;
        super("CreamRepay", _contractAddress, //getAddr("CreamRepay"),
        ["address", "uint256", "address", "address"], [cTokenAddress, amount, from, onBehalf]);
    }
}
