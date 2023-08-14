import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
/**
 * Transfers specified token from recipe (DsProxy) to specified address unwraps if Weth address
 *
 * @category BasicActions
 */
export declare class SendTokenAndUnwrapAction extends Action {
    /**
     * @param token Token address
     * @param to Transfer recipient
     * @param amount Transfer amount (-1 for whole Recipe (DsProxy) balance)
     */
    constructor(token: EthAddress, to: EthAddress, amount: uint256);
}
//# sourceMappingURL=SendTokenAndUnwrap.d.ts.map