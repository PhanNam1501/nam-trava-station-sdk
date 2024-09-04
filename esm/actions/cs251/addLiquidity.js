import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class addLiquidity extends Action {
    constructor(exchange, token, maxSlippage, from, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('ADDLIAddress') : contractAddress;
        super("addLiquidity", _contractAddress, //getAddr("TravaSupply"),
        ["address", "address", "uint256", "address", "uint256"], [exchange, token, maxSlippage, from, amount]);
    }
}
