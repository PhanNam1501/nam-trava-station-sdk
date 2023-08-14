import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
/**
 * Unwraps a specified amount of WETH from the proxy
 *
 * @category BasicActions
 */
export declare class UnwrapBnbAction extends Action {
    /**
     * @param amount Amount to unwrap
     * @param to Transfer recipient
     */
    constructor(amount: uint256, to: EthAddress);
}
