"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullTokenAction = void 0;
const general_1 = require("../../utils/general");
const Action_1 = require("../../Action");
const addresses_1 = require("../../addresses");
/**
 * Transfers specified token from a specified address to DSProxy (recipe)
 *
 * @category BasicActions
 */
class PullTokenAction extends Action_1.Action {
    /**
     * @param token Token address
     * @param from Transfer sender
     * @param amount Transfer amount (-1 for whole sender balance)
     */
    constructor(token, from, amount) {
        (0, general_1.requireAddress)(from);
        super('PullToken', (0, addresses_1.getAddr)('PullToken'), [
            'address',
            'address',
            'uint',
        ], [token, from, amount]);
    }
}
exports.PullTokenAction = PullTokenAction;
//# sourceMappingURL=PullToken.js.map