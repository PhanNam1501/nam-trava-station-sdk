import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, bytes, uint256 } from "../../types";

/**
 * WePiggyCollateral - Enable Collateral Token to Lending Pool
 *
 * @category WePiggy
 */
export class WePiggyCollateral extends Action {
    constructor(
        cTokens: bytes,
        enableAsColl: bytes,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('WePiggyCollateral') : contractAddress;

        super(
            "WePiggyCollateral",
            _contractAddress, //getAddr("WePiggyCollateral"),
            ["address[]", "bool[]"],
            [cTokens, enableAsColl]
        );

        this.mappableArgs = [cTokens , enableAsColl].flat();


    }
}
