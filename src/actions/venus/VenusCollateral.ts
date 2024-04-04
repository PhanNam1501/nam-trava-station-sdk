import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * VenusCollateral - Collateral Token to Lending Pool
 * @category Venus
 */
export class VenusCollateral extends Action {
    constructor(
        cTokenAddress: Array<EthAddress>,
        enableAsColl: Array<boolean>,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusCollateral') : contractAddress;

        super(
            "VenusCollateral",
            _contractAddress, //getAddr("VenusCollateral"),
            ["address[]", "bool[]"],
            [cTokenAddress, enableAsColl]
        );
        this.mappableArgs = [cTokenAddress, enableAsColl].flat();
    }
}
