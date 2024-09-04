import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class swapLiquidity extends Action {
    constructor(exchange, token, from, maxSlippage, amount, checkETH, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('SWAPLIAddress') : contractAddress;
        super("addLiquidity", _contractAddress, //getAddr("TravaSupply"),
        ["address", "address", "address", "uint256", "uint256", "bool"], [exchange, token, from, maxSlippage, amount, checkETH]);
    }
}
