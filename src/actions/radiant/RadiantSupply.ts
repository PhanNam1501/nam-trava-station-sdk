import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * RadiantSupply - Supply Token to Lending Pool
 * @category Radiant
 */
export class RadiantSupply extends Action {
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
            typeof contractAddress === "undefined" ? getAddr('RadiantSupply') : contractAddress;

        super(
            "RadiantSupply",
            _contractAddress, //getAddr("RadiantSupply"),
            ["address", "address", "uint256", "address", "address", "bool"],
            [market, tokenAddr, amount, from, onBehalf, enableAsColl]
        );
    }
}
