import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * LiqeeSupply - Supply Token to Lending Pool
 * @category Liqee
 */
export class LiqeeSupply extends Action {
    constructor(
        iTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('LiqeeSupply') : contractAddress;

        super(
            "LiqeeSupply",
            _contractAddress, //getAddr("LiqeeSupply"),
            ["address", "uint256", "address" , "bool"],
            [iTokenAddress, amount, from, enableAsColl]
        );
    }
}
