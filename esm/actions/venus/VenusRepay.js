import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * VenusRepay - Repay Token to Lending Pool
 * @category Venus
 */
export class VenusRepay extends Action {
    constructor(vTokenAddress, amount, from, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('VenusRepay') : contractAddress;
        super("VenusRepay", _contractAddress, //getAddr("VenusRepay"),
        ["address", "uint256", "address", "address"], [vTokenAddress, amount, from, onBehalf]);
    }
}
