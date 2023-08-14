import Web3 from 'web3';
import { Action } from './Action';
import { Recipe } from './Recipe';
import { EthAddress } from './types';
/**
 *
 * @category Base Classes
 */
export declare class DfsWeb3 {
    web3: Web3;
    accountReady: boolean;
    account?: EthAddress;
    proxy?: EthAddress;
    constructor(web3: Web3);
    onAccountsChanged(_arg0: string, _onAccountsChanged: any): void;
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
