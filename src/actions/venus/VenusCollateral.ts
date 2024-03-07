import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, bytes, uint256 } from "../../types";

/**
 * VenusCollateral - Collateral Token to Lending Pool
 *
 * @category Venus
 */
export class VenusCollateral extends Action {
    constructor(
        cTokens: bytes,
        enableAsColl: bytes,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusCollateral') : contractAddress;

        super(
            "VenusCollateral",
            _contractAddress, //getAddr("VenusCollateral"),
            ["address[]", "bool[]"],
            [cTokens, enableAsColl]
        );

        this.mappableArgs = [cTokens , enableAsColl].flat();


    }
}
