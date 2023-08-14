"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTokenAction = void 0;
const Action_1 = require("../../Action");
const general_1 = require("../../utils/general");
const addresses_1 = require("../../addresses");
/**
 * Transfers specified token from recipe (DsProxy) to specified address
 *
 * @category BasicActions
 */
class SendTokenAction extends Action_1.Action {
    /**
     * @param token Token address
     * @param to Transfer recipient
     * @param amount Transfer amount (-1 for whole Recipe (DsProxy) balance)
     */
    constructor(token, to, amount) {
        (0, general_1.requireAddress)(to);
        super('SendToken', (0, addresses_1.getAddr)('SendToken'), [
            'address',
            'address',
            'uint',
        ], [token, to, amount]);
    }
}
exports.SendTokenAction = SendTokenAction;
//# sourceMappingURL=SendToken.js.map