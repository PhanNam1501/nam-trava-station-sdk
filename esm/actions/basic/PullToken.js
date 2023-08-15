import { requireAddress } from '../../utils/general';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
/**
 * Transfers specified token from a specified address to DSProxy (recipe)
 *
 * @category BasicActions
 */
export class PullTokenAction extends Action {
    /**
     * @param token Token address
     * @param from Transfer sender
     * @param amount Transfer amount (-1 for whole sender balance)
     */
    constructor(token, from, amount) {
        requireAddress(from);
        super('PullToken', getAddr('PullToken'), [
            'address',
            'address',
            'uint',
        ], [token, from, amount]);
    }
}
