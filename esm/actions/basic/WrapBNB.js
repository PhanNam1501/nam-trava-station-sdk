var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 *
 * @category BasicActions
 */
export class WrapBnbAction extends Action {
    /**
     * @param amount Wrap amount
     */
    constructor(amount) {
        super('WrapBnb', getAddr('WrapBnb'), ['uint256'], [amount]);
    }
    getEthValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.args[0];
        });
    }
}
