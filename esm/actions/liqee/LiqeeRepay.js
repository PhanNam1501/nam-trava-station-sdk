import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * LiqeeRepay - Repay Token to Lending Pool
 * @category Liqee
 */
export class LiqeeRepay extends Action {
    constructor(iTokenAddress, amount, from, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiqeeRepay') : contractAddress;
        super("LiqeeRepay", _contractAddress, //getAddr("LiqeeRepay"),
        ["address", "uint256", "address", "address"], [iTokenAddress, amount, from, onBehalf]);
    }
}
