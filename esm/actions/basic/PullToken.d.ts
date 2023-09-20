import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
/**
 * Transfers specified token from a specified address to DSProxy (recipe)
 *
 * @category BasicActions
 */
export declare class PullTokenAction extends Action {
    /**
     * @param token Token address
     * @param from Transfer sender
     * @param amount Transfer amount (-1 for whole sender balance)
     */
    constructor(token: EthAddress, from: EthAddress, amount: uint256, contractAddress?: string);
}
