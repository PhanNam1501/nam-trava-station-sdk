var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DFSPRoxyRegistyAbi from './abis/DFSProxyRegistry.json';
import ProxyRegistryAbi from './abis/ProxyRegistry.json';
import DsProxyAbi from './abis/DsProxy.json';
import Erc20Abi from './abis/Erc20.json';
import { getAddr } from './addresses';
import { CONFIG } from './config';
// reports error but it works ?????
/**
 *
 * @category Base Classes
 */
export class DfsWeb3 {
    constructor(web3) {
        // const networkId = await web3.eth.net.getId();
        // if (networkId !== 1) throw new Error('Supplied web3 is not on Mainnet');
        this.web3 = web3;
        this.accountReady = false;
        //this.prepareAccount();
        /* if (this.web3.currentProvider!.on) {
          this.web3.currentProvider!.on('accountsChanged', this.onAccountsChanged);
        } */
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onAccountsChanged(_arg0, _onAccountsChanged) {
        throw new Error('Method not implemented.');
    }
    prepareAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.web3.eth.getAccounts();
            if (!accounts || !accounts.length)
                throw new Error('Supplied web3 has no account');
            this.account = accounts[0];
            const DFSPRoxyRegistyAbiItems = DFSPRoxyRegistyAbi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
            const dfsRegistry = new this.web3.eth.Contract(DFSPRoxyRegistyAbiItems, getAddr('DFSProxyRegistry', CONFIG.chainId));
            const proxies = yield dfsRegistry.methods.proxies(this.account).call();
            if (proxies) {
                this.proxy = proxies;
            }
            this.accountReady = true;
        });
    }
    createSmartWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountReady)
                yield this.prepareAccount();
            if (!this.account)
                throw new Error('DfsWeb3 has not been instantiated properly');
            if (this.proxy)
                throw new Error('Account already has DsProxy');
            const ProxyRegistryAbiItems = ProxyRegistryAbi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
            const makerRegistry = new this.web3.eth.Contract(ProxyRegistryAbiItems, getAddr('ProxyRegistry', CONFIG.chainId));
            return makerRegistry.methods.build();
        });
    }
    /**
     * @param action
     */
    prepareBeforeExecute(action) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountReady)
                yield this.prepareAccount();
            if (!this.proxy)
                throw new Error('Account does not have a Smart Wallet');
            const transactions = [];
            const approvals = yield action.getAssetsToApprove();
            yield Promise.all(approvals.map((a) => __awaiter(this, void 0, void 0, function* () {
                if (a.owner.toLowerCase() === this.proxy.toLowerCase()) {
                    const Erc20AbiItems = Erc20Abi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
                    const tokenContract = new this.web3.eth.Contract(Erc20AbiItems, a.asset);
                    const allowance = yield tokenContract.methods.allowance(this.account, this.proxy).call();
                    if (parseFloat(allowance.toString()) === 0) {
                        transactions.push(tokenContract.methods.approve(this.proxy, '-1'));
                    }
                }
            })));
            return transactions;
        });
    }
    execute(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountReady)
                yield this.prepareAccount();
            if (!this.proxy)
                throw new Error('Account does not have a Smart Wallet. Run createSmartWallet first');
            const DsProxyAbiItems = DsProxyAbi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
            const proxyContract = new this.web3.eth.Contract(DsProxyAbiItems, this.proxy);
            return proxyContract.methods['execute(address,bytes)'](address, params);
        });
    }
    /**
     * @param action
     */
    executeAction(action) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = action.encodeForDsProxyCall();
            return this.execute(encoded[0], encoded[1]);
        });
    }
    /**
     * @param recipe
     */
    executeRecipe(recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = recipe.encodeForDsProxyCall();
            return this.execute(encoded[0], encoded[1]);
        });
    }
}
