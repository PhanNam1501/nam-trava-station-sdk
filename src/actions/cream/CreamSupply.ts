import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * CreamSupply - Supply Token to Lending Pool
 *
 * @category Cream
 * need to approve token first
 */
export class CreamSupply extends Action {
    constructor(
        cTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('CreamSupply') : contractAddress;

        super(
            "CreamSupply",
            _contractAddress, //getAddr("CreamSupply"),
            ["address", "uint256", "address" , "bool"],
            [cTokenAddress, amount, from, enableAsColl]
        );
    }
}
