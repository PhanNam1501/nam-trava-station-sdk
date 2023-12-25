import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * WePiggyRepay - Repay Token to Lending Pool
 * @category WePiggy
 */
export class WePiggyRepay extends Action {
    constructor(
        pTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('WePiggyRepay') : contractAddress;

        super(
            "WePiggyRepay",
            _contractAddress, //getAddr("WePiggyRepay"),
            ["address", "uint256", "address", "address"],
            [pTokenAddress, amount, from, onBehalf]
        );
    }
}
