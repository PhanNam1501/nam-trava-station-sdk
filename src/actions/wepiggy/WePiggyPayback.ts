import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * WePiggyPayback - Payback Token to Lending Pool
 * @category WePiggy
 */
export class WePiggyPayback extends Action {
    constructor(
        pTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('WePiggyPayback') : contractAddress;

        super(
            "WePiggyPayback",
            _contractAddress, //getAddr("WePiggyPayback"),
            ["address", "uint256", "address", "address"],
            [pTokenAddress, amount, from, onBehalf]
        );
    }
}
