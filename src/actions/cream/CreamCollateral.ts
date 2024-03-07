import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, bytes, uint256 } from "../../types";

/**
 * CreamCollateral - Collateral Token to Lending Pool
 *
 * @category Cream
 */
export class CreamCollateral extends Action {
    constructor(
        cTokens: bytes,
        enableAsColl: bytes,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('CreamCollateral') : contractAddress;

        super(
            "CreamCollateral",
            _contractAddress, //getAddr("CreamCollateral"),
            ["address[]", "bool[]"],
            [cTokens, enableAsColl]
        );

        this.mappableArgs = [cTokens , enableAsColl].flat();


    }
}
