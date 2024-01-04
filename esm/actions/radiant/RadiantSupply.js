import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * RadiantSupply - Supply Token to Lending Pool
 * @category Radiant
 */
export class RadiantSupply extends Action {
    constructor(market, tokenAddr, amount, from, onBehalf, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('RadiantSupply') : contractAddress;
        super("RadiantSupply", _contractAddress, //getAddr("RadiantSupply"),
        ["address", "address", "uint256", "uint256", "address", "bool"], [market, tokenAddr, amount, from, onBehalf, enableAsColl]);
    }
}
