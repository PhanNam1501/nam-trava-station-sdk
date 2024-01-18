import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * GranarySupply - Supply Token to Lending Pool
 * @category Granary
 */
export class GranarySupply extends Action {
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
            typeof contractAddress === "undefined" ? getAddr('GranarySupply') : contractAddress;

        super(
            "GranarySupply",
            _contractAddress, //getAddr("GranarySupply"),
            ["address", "address", "uint256", "address", "address", "bool"],
            [market, tokenAddr, amount, from, onBehalf, enableAsColl]
        );
    }
}
