import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * VenusBorrow - Borrow Token to Lending Pool
 * @category Venus
 */
export class VenusBorrow extends Action {
    constructor(vTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('VenusBorrow') : contractAddress;
        super("VenusBorrow", _contractAddress, //getAddr("VenusBorrow"),
        ["address", "uint256", "address"], [vTokenAddress, amount, to]);
    }
}
