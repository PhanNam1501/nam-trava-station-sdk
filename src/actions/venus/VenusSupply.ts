import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * VenusSupply - Supply Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export class VenusSupply extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusSupply') : contractAddress;

        super(
            "VenusSupply",
            _contractAddress, //getAddr("VenusSupply"),
            ["address", "uint256", "address" , "bool"],
            [vTokenAddress, amount, from, enableAsColl]
        );
    }
}
