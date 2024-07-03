import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * LiqeeSupply - Supply Token to Lending Pool
 * @category Liqee
 */
export class LiqeeSupply extends Action {
    constructor(iTokenAddress, amount, from, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiqeeSupply') : contractAddress;
        super("LiqeeSupply", _contractAddress, //getAddr("LiqeeSupply"),
        ["address", "uint256", "address", "bool"], [iTokenAddress, amount, from, enableAsColl]);
    }
}
