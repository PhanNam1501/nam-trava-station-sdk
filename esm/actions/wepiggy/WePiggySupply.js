import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * WePiggySupply - Supply Token to Lending Pool
 *
 * @category WePiggy
 * need to approve token first
 */
export class WePiggySupply extends Action {
    constructor(pTokenAddress, amount, from, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('WePiggySupply') : contractAddress;
        super("WePiggySupply", _contractAddress, //getAddr("WePiggySupply"),
        ["address", "uint256", "address", "bool"], [pTokenAddress, amount, from, enableAsColl]);
    }
}
