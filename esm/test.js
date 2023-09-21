var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dfs from ".";
import Dec from "decimal.js";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        // const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
        // web3.eth.getAccounts = async () => ['0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43'];
        // const privateKey = "";
        // const accountAddr = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";
        // const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        // web3.eth.accounts.wallet.add(account);
        // web3.eth.defaultAccount = accountAddr;
        // let dfsWeb3;
        // dfsWeb3 = new dfs.DfsWeb3(web3);
        // await dfsWeb3.prepareAccount();
        // console.log(dfsWeb3.proxy,dfsWeb3.accountReady,dfsWeb3.account)
        // dfsWeb3.account = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43"
        // dfsWeb3.proxy = "0x826D824BE55A403859A6Db67D5EeC5aC386307fE"
        // dfsWeb3.accountReady=true
        // const a = new dfs.actions.trava.TravaAuctionCreateAuction(
        //   "85",
        //   new Dec("1000")
        //     .mul(10 ** 18)
        //     .floor()
        //     .toString(),
        //   "172800",
        //   "0",
        //   "0",
        //   "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43"
        // )
        // // const exec : any = await dfsWeb3.executeAction(a);
        // console.log(encodeForRecipe(a));
        const r = new dfs.Recipe("Auction Recipe", 56, [
            new dfs.actions.trava.TravaAuctionCreateAuction("86", new Dec("1000")
                .mul(Math.pow(10, 18))
                .floor()
                .toString(), "172800", "0", "0", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43"),
            // new dfs.actions.trava.TravaAuctionMakeBid(
            //   "53",
            //   new Dec("3000")
            //     .mul(10 ** 18)
            //     .floor()
            //     .toString(),
            //   "0x826D824BE55A403859A6Db67D5EeC5aC386307fE"
            // ),
        ]);
        // console.log(encodeForDsProxyCall(r));
        r._validateParamMappings();
        // // console.log(r.recipeExecutorAddress)
        //   const exec :any= await dfsWeb3.executeRecipe(r);
        //  await exec.send({
        //       from: dfsWeb3.account,
        //       gasPrice: 1000000000,
        //       gasLimit: 20000000,
        //     });
    });
}
test();
