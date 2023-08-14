var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dfs from "../..";
import Web3 from "web3";
import ERC20ABi from "../../abis/Erc20.json";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = new Web3("https://data-seed-prebsc-2-s1.bnbchain.org:8545");
        web3.eth.getAccounts = () => __awaiter(this, void 0, void 0, function* () {
            return [
                "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
            ];
        });
        const privateKey = "a0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6";
        const accountAddr = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        web3.eth.accounts.wallet.add(account);
        web3.eth.defaultAccount = accountAddr;
        let dfsWeb3;
        dfsWeb3 = new dfs.DfsWeb3(web3);
        yield dfsWeb3.prepareAccount();
        const Erc20AbiItems = ERC20ABi.map((item) => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
        const tokenContract = new web3.eth.Contract(Erc20AbiItems, "0x41ad43ae987f7be3b5024e7b167f81772f097d5b");
        // approve token
        let approveToken = tokenContract.methods.approve(dfsWeb3.proxy, "100000000000000000000");
        let approveTokenData = approveToken.encodeABI();
        let approveTokenTx = {
            from: accountAddr,
            to: "0x41ad43ae987f7be3b5024e7b167f81772f097d5b",
            data: approveTokenData,
            gas: 1000000,
            gasPrice: 10000000000,
        };
        let approveTokenTxHash = yield web3.eth.sendTransaction(approveTokenTx);
        console.log("approveTokenTxHash", approveTokenTxHash);
        // check balance of token
        const balance = yield tokenContract.methods.balanceOf(accountAddr).call();
        console.log("balance of admin", balance);
        const r = new dfs.Recipe("Basic", [
            new dfs.actions.trava.TravaStakingStake("0x41ad43ae987f7be3b5024e7b167f81772f097d5b", dfsWeb3.proxy, "10000000000000000000"),
        ]);
        // console.log("r", r);
        const exec = yield dfsWeb3.executeRecipe(r);
        yield exec
            .send({ from: dfsWeb3.account, gasPrice: 20e9, gasLimit: 2e6 })
            .then(function (receipt) {
            console.log("Transaction Hash:", receipt.transactionHash);
        })
            .catch(console.log);
    });
}
test();
//# sourceMappingURL=trava-staking-stake.test.js.map