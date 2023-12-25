import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * WePiggySupply - Supply Token to Lending Pool
 *
 * @category WePiggy
 * need to approve token first
 */
export class WePiggySupply extends Action {
    constructor(
        pTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('WePiggySupply') : contractAddress;

        super(
            "WePiggySupply",
            _contractAddress, //getAddr("WePiggySupply"),
            ["address", "uint256", "address" , "bool"],
            [pTokenAddress, amount, from, enableAsColl]
        );
    }
}
