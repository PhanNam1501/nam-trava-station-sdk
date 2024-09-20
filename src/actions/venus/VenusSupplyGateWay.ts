import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * VenusSupplyGateWay - Supply Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export class VenusSupplyGateWay extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusSupplyGateWay') : contractAddress;

        super(
            "VenusSupplyGateWay",
            _contractAddress, //getAddr("VenusSupplyGateWay"),
            ["address", "uint256", "address" , "bool"],
            [vTokenAddress, amount, from, enableAsColl]
        );
    }
}
