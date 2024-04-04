import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * CreamCollateral - Collateral Token to Lending Pool
 * @category Cream
 */
export class CreamCollateral extends Action {
    constructor(cTokenAddress, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('CreamCollateral') : contractAddress;
        super("CreamCollateral", _contractAddress, //getAddr("CreamCollateral"),
        ["address[]", "bool[]"], [cTokenAddress, enableAsColl]);
        this.mappableArgs = [cTokenAddress, enableAsColl].flat();
    }
}
