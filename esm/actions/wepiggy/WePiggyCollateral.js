import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * WePiggyCollateral - Collateral Token to Lending Pool
 * @category WePiggy
 */
export class WePiggyCollateral extends Action {
    constructor(cTokenAddress, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('WePiggyCollateral') : contractAddress;
        super("WePiggyCollateral", _contractAddress, //getAddr("WePiggyCollateral"),
        ["address[]", "bool[]"], [cTokenAddress, enableAsColl]);
        this.mappableArgs = [cTokenAddress, enableAsColl].flat();
    }
}
