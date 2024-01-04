import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * GranarySupply - Supply Token to Lending Pool
 * @category Granary
 */
export class GranarySupply extends Action {
    constructor(market, tokenAddr, amount, from, onBehalf, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('GranarySupply') : contractAddress;
        super("GranarySupply", _contractAddress, //getAddr("GranarySupply"),
        ["address", "address", "uint256", "uint256", "address", "bool"], [market, tokenAddr, amount, from, onBehalf, enableAsColl]);
    }
}
