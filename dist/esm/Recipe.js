var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Recipe_instances, _Recipe__encodeForCall;
import AbiCoder from 'web3-eth-abi';
import { toBN } from 'web3-utils';
import { getAssetInfo, utils } from '@zennomi/tokens';
import { Action } from './Action';
import { getAddr } from './addresses';
import RecipeAbi from './abis/Recipe.json';
import { CONFIG } from './config';
/**
 * Set of Actions to be performed sequentially in a single transaction
 *
 * @category Base Classes
 */
export class Recipe {
    /**
     * @param name
     * @param actions
     */
    constructor(name, actions = []) {
        _Recipe_instances.add(this);
        actions.forEach((action) => {
            if (!(action instanceof Action))
                throw new TypeError('Supplied action does not inherit Action');
        });
        this.name = name;
        this.actions = actions;
        this.extraGas = 0;
        this.recipeExecutorAddress = getAddr('RecipeExecutor', CONFIG.chainId);
    }
    /**
     * @param action
     */
    addAction(action) {
        if (!(action instanceof Action))
            throw new TypeError('Supplied action does not inherit Action');
        this.actions.push(action);
        return this;
    }
    /**
     * Encode arguments for calling the action set via DsProxy
     * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
     */
    encodeForDsProxyCall() {
        const executeTaskAbi = RecipeAbi.find(({ name }) => name === 'executeRecipe');
        const encoded = __classPrivateFieldGet(this, _Recipe_instances, "m", _Recipe__encodeForCall).call(this);
        return [
            this.recipeExecutorAddress,
            // @ts-expect-error Interface of AbiCoder is wrong :(
            AbiCoder.encodeFunctionCall(executeTaskAbi, encoded),
        ];
    }
    /**
     * Logs parameter mapping in verbose format for validation. Used for testing in development.
     */
    _validateParamMappings() {
        this.actions.forEach((action, i) => {
            action._getArgumentMapping().forEach((source, j) => {
                if (source)
                    console.log(`${this.actions[i].name} takes argument #${j + 1} from ${this.actions[source - 1].name} (action #${source})`);
            });
        });
    }
    /**
     * Assets requiring approval to be used by DsProxy
     * Approval is done from owner to DsProxy
     */
    getAssetsToApprove() {
        return __awaiter(this, void 0, void 0, function* () {
            const uniqueAssetOwnerPairs = [];
            const assetOwnerPairs = yield Promise.all(this.actions.map(a => a.getAssetsToApprove()));
            for (const pairsPerAction of assetOwnerPairs) {
                for (const pair of pairsPerAction) {
                    const isNft = !pair.asset;
                    if (!uniqueAssetOwnerPairs.find(_pair => _pair.owner === pair.owner && (isNft ? _pair.tokenId === pair.tokenId : _pair.asset === pair.asset))) {
                        if (isNft) {
                            uniqueAssetOwnerPairs.push({
                                owner: pair.owner,
                                nft: pair.nft,
                                tokenId: pair.tokenId,
                                specialApproveLabel: pair.specialApproveLabel,
                            });
                        }
                        else {
                            uniqueAssetOwnerPairs.push({ owner: pair.owner, asset: pair.asset, specialApproveLabel: pair.specialApproveLabel });
                        }
                    }
                }
            }
            return uniqueAssetOwnerPairs.filter(({ address }) => !utils.compare(address, getAssetInfo('ETH').address));
        });
    }
    /**
     * ETH value to be sent with transaction
     * @returns ETH value in wei
     */
    getEthValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield Promise.all(this.actions.map(a => a.getEthValue())))
                .reduce((acc, val) => acc.add(toBN(val)), toBN(0))
                .toString();
        });
    }
}
_Recipe_instances = new WeakSet(), _Recipe__encodeForCall = function _Recipe__encodeForCall() {
    const encoded = this.actions.map(action => action.encodeForRecipe());
    const transposed = encoded[0].map((_, colIndex) => encoded.map(row => row[colIndex]));
    const taskStruct = [
        this.name,
        ...transposed,
    ];
    return [taskStruct];
};
//# sourceMappingURL=Recipe.js.map