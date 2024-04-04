import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * VenusCollateral - Collateral Token to Lending Pool
 * @category Venus
 */
export class VenusCollateral extends Action {
    constructor(cTokenAddress, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('VenusCollateral') : contractAddress;
        super("VenusCollateral", _contractAddress, //getAddr("VenusCollateral"),
        ["address[]", "bool[]"], [cTokenAddress, enableAsColl]);
        this.mappableArgs = [cTokenAddress, enableAsColl].flat();
    }
}
