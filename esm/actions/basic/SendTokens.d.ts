import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
/**
 * Transfers specified tokens from recipe (DsProxy) to specified addresses
 *
 * @category BasicActions
 */
export declare class SendTokensAction extends Action {
    /**
     * @param tokens Token addressess
     * @param receivers Transfer recipients
     * @param amounts Transfer amounts (-1 for whole Recipe (DsProxy) balance)
     */
    constructor(tokens: Array<EthAddress>, receivers: Array<EthAddress>, amounts: Array<uint256>, contractAddress?: string);
}
