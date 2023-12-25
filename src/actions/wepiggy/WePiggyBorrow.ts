import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * WePiggyBorrow - Borrow Token to Lending Pool
 * @category WePiggy
 */
export class WePiggyBorrow extends Action {
    constructor(
        pTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('WePiggyBorrow') : contractAddress;

        super(
            "WePiggyBorrow",
            _contractAddress, //getAddr("WePiggyBorrow"),
            ["address", "uint256", "address"],
            [pTokenAddress, amount, to]
        );
    }
}
