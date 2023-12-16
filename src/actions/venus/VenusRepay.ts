import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * VenusRepay - Repay Token to Lending Pool
 * @category Venus
 */
export class VenusRepay extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusRepay') : contractAddress;

        super(
            "VenusRepay",
            _contractAddress, //getAddr("VenusRepay"),
            ["address", "uint256", "address", "address"],
            [vTokenAddress, amount, from, onBehalf]
        );
    }
}
