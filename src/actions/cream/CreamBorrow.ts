import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * CreamBorrow - Borrow Token to Lending Pool
 * @category Cream
 */
export class CreamBorrow extends Action {
    constructor(
        cTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('CreamBorrow') : contractAddress;

        super(
            "CreamBorrow",
            _contractAddress, //getAddr("CreamBorrow"),
            ["address", "uint256", "address"],
            [cTokenAddress, amount, to]
        );
    }
}
