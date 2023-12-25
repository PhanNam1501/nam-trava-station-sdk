import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * LiqeeBorrow - Borrow Token to Lending Pool
 * @category Liqee
 */
export class LiqeeBorrow extends Action {
    constructor(
        iTokenAddress: EthAddress,
        amount: uint256,
        to: EthAddress,
        contractAddress?: string
    ) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('LiqeeBorrow') : contractAddress;

        super(
            "LiqeeBorrow",
            _contractAddress, //getAddr("LiqeeBorrow"),
            ["address", "uint256", "address"],
            [iTokenAddress, amount, to]
        );
    }
}
