import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * GasFeeTaker
 */
export class GasFeeTaker extends Action {
    constructor(gasUsed, feeToken, availableAmount, dfsFeeDivider, path, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('GasFeeTaker') : contractAddress;
        super("GasFeeTaker", _contractAddress, ["uint256", "address", "uint256", "uint256", "address[]"], [gasUsed, feeToken, availableAmount, dfsFeeDivider, path]);
        this.mappableArgs = [gasUsed, feeToken, availableAmount, dfsFeeDivider, path].flat();
    }
}
