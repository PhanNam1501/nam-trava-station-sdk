import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * LiqeeBorrow - Borrow Token to Lending Pool
 * @category Liqee
 */
export class LiqeeBorrow extends Action {
    constructor(iTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('LiqeeBorrow') : contractAddress;
        super("LiqeeBorrow", _contractAddress, //getAddr("LiqeeBorrow"),
        ["address", "uint256", "address"], [iTokenAddress, amount, to]);
    }
}
