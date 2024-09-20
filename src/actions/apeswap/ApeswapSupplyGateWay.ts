import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * ApeswapSupplyGateWay - Supply Token to Lending Pool
 *
 * @category Apeswap
 * need to approve token first
 */
export class ApeswapSupplyGateWay extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        from: EthAddress,
        enableAsColl: boolean,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('ApeswapSupplyGateWay') : contractAddress;

        super(
            "ApeswapSupplyGateWay",
            _contractAddress, //getAddr("ApeswapSupplyGateWay"),
            ["address", "uint256", "address" , "bool"],
            [vTokenAddress, amount, from, enableAsColl]
        );
    }
}
