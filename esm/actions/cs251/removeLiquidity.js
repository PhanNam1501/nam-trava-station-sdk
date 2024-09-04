import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class removeLiquidity extends Action {
    constructor(exchange, token, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('RMVLIAddress') : contractAddress;
        super("addLiquidity", _contractAddress, //getAddr("TravaSupply"),
        ["address", "address", "address", "uint256"], [exchange, token, to, amount]);
    }
}
