import { Action } from './Action';
import { Recipe } from './Recipe';
import { EthAddress } from './types';
import { JsonRpcSigner } from 'ethers';
/**
 *
 * @category Base Classes
 */
export declare class DfsWeb3 {
    web3: JsonRpcSigner;
    accountReady: boolean;
    account?: EthAddress;
    proxy?: EthAddress;
    constructor(web3: JsonRpcSigner);
    prepareAccount(): Promise<void>;
    createSmartWallet(): Promise<any>;
    /**
     * @param action
     */
    prepareBeforeExecute(action: Action): Promise<any>;
    execute(address: EthAddress, params: Array<any>): Promise<any>;
    /**
     * @param action
     */
    executeAction(action: Action): Promise<Action>;
    /**
     * @param recipe
     */
    executeRecipe(recipe: Recipe): Promise<Recipe>;
}
