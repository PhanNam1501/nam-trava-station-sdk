import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * RadiantWithdraw - Withdraw Token to Lending Pool
 * @category Radiant
 */
export class RadiantWithdraw extends Action {
    constructor(
        market: EthAddress,
        tokenAddr: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('RadiantWithdraw') : contractAddress;

        super(
            "RadiantWithdraw",
            _contractAddress, //getAddr("RadiantWithdraw"),
            ["address", "address", "uint256", "address"],
            [market, tokenAddr, amount, to]
        );
    }
}
