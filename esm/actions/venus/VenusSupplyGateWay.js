import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * VenusSupplyGateWay - Supply Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export class VenusSupplyGateWay extends Action {
    constructor(vTokenAddress, amount, from, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('VenusSupplyGateWay') : contractAddress;
        super("VenusSupplyGateWay", _contractAddress, //getAddr("VenusSupplyGateWay"),
        ["address", "uint256", "address", "bool"], [vTokenAddress, amount, from, enableAsColl]);
    }
}
