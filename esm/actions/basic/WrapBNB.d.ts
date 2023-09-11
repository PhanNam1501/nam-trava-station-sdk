import { Action } from '../../Action';
import { uint256 } from '../../types';
/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 *
 * @category BasicActions
 */
export declare class WrapBnbAction extends Action {
    /**
     * @param amount Wrap amount
     */
    constructor(amount: uint256);
    getEthValue(): Promise<any>;
}
