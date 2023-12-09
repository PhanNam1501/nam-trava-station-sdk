import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * VenusPayback - Payback Token to Lending Pool
 * @category Venus
 */
export class VenusPayback extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        onBehalf: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusPayback') : contractAddress;

        super(
            "VenusPayback",
            _contractAddress, //getAddr("VenusPayback"),
            ["address", "uint256", "address", "address"],
            [vTokenAddress, amount, from, onBehalf]
        );
    }
}
