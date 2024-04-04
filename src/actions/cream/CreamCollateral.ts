import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * CreamCollateral - Collateral Token to Lending Pool
 * @category Cream
 */
export class CreamCollateral extends Action {
    constructor(
        cTokenAddress: Array<EthAddress>,
        enableAsColl: Array<boolean>,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('CreamCollateral') : contractAddress;

        super(
            "CreamCollateral",
            _contractAddress, //getAddr("CreamCollateral"),
            ["address[]", "bool[]"],
            [cTokenAddress, enableAsColl]
        );
        this.mappableArgs = [cTokenAddress, enableAsColl].flat();
    }
}
