import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * VenusBorrow - Borrow Token to Lending Pool
 * @category Venus
 */
export class VenusBorrow extends Action {
    constructor(
        vTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('VenusBorrow') : contractAddress;

        super(
            "VenusBorrow",
            _contractAddress, //getAddr("VenusBorrow"),
            ["address", "uint256", "address"],
            [vTokenAddress, amount, to]
        );
    }
}
