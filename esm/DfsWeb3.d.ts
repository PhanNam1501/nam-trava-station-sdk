import { Action } from './Action';
import { Recipe } from './Recipe';
import { EthAddress } from './types';
import { JsonRpcProvider } from 'ethers';
/**
 *
 * @category Base Classes
 */
export declare class DfsWeb3 {
    web3: JsonRpcProvider;
    accountReady: boolean;
    account?: EthAddress;
    proxy?: EthAddress;
    constructor(web3: JsonRpcProvider);
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
