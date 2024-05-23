import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * CreamSupply - Supply Token to Lending Pool
 *
 * @category Cream
 * need to approve token first
 */
export class CreamSupply extends Action {
    constructor(cTokenAddress, amount, from, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('CreamSupply') : contractAddress;
        super("CreamSupply", _contractAddress, //getAddr("CreamSupply"),
        ["address", "uint256", "address", "bool"], [cTokenAddress, amount, from, enableAsColl]);
    }
}
