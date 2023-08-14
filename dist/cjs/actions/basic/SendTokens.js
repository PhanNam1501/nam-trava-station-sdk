"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTokensAction = void 0;
const Action_1 = require("../../Action");
const addresses_1 = require("../../addresses");
/**
 * Transfers specified tokens from recipe (DsProxy) to specified addresses
 *
 * @category BasicActions
 */
class SendTokensAction extends Action_1.Action {
    /**
     * @param tokens Token addressess
     * @param receivers Transfer recipients
     * @param amounts Transfer amounts (-1 for whole Recipe (DsProxy) balance)
     */
    constructor(tokens, receivers, amounts) {
        super('SendTokens', (0, addresses_1.getAddr)('SendTokens'), [
            'address[]',
            'address[]',
            'uint256[]',
        ], [tokens, receivers, amounts]);
        this.mappableArgs = [];
        for (let i = 0; i < this.args[0].length; i++) {
            this.mappableArgs.push(this.args[0][i]);
        }
        for (let i = 0; i < this.args[1].length; i++) {
            this.mappableArgs.push(this.args[1][i]);
        }
        for (let i = 0; i < this.args[2].length; i++) {
            this.mappableArgs.push(this.args[2][i]);
        }
    }
}
exports.SendTokensAction = SendTokensAction;
//# sourceMappingURL=SendTokens.js.map