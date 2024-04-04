import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * WePiggyCollateral - Collateral Token to Lending Pool
 * @category WePiggy
 */
export class WePiggyCollateral extends Action {
    constructor(
        cTokenAddress: Array<EthAddress>,
        enableAsColl: Array<boolean>,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('WePiggyCollateral') : contractAddress;

        super(
            "WePiggyCollateral",
            _contractAddress, //getAddr("WePiggyCollateral"),
            ["address[]", "bool[]"],
            [cTokenAddress, enableAsColl]
        );
        this.mappableArgs = [cTokenAddress, enableAsColl].flat();
    }
}
