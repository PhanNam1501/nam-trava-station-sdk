import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * WePiggySupply - Supply Token to Lending Pool
 *
 * @category WePiggy
 * need to approve token first
 */
export declare class WePiggySupply extends Action {
    constructor(pTokenAddress: EthAddress, amount: uint256, from: EthAddress, enableAsColl: boolean, contractAddress?: string);
}
