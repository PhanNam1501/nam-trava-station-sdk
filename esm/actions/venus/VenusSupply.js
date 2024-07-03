import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * VenusSupply - Supply Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export class VenusSupply extends Action {
    constructor(vTokenAddress, amount, from, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('VenusSupply') : contractAddress;
        super("VenusSupply", _contractAddress, //getAddr("VenusSupply"),
        ["address", "uint256", "address", "bool"], [vTokenAddress, amount, from, enableAsColl]);
    }
}
