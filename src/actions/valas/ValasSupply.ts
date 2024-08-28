import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ValasSupply - Supply Token to Lending Pool
 * @category Valas
 */
export class ValasSupply extends Action {
    constructor(
        market: EthAddress,
        tokenAddr: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ValasSupply') : contractAddress;

        super(
            "ValasSupply",
            _contractAddress, //getAddr("ValasSupply"),
            ["address", "address", "uint256", "address", "address", "bool"],
            [market, tokenAddr, amount, from, onBehalf, enableAsColl]
        );
    }
}
