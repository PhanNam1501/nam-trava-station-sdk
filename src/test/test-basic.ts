// import dfs from "..";
// import Web3 from "web3";
// import Dec from "decimal.js";
// import ERC20ABi from "../abis/Erc20.json";
// import { AbiItem,StateMutabilityType,AbiType } from "web3-utils";
// import { JsonRpcProvider } from "ethers";
// async function test() {
//   const web3 = new JsonRpcProvider("https://bsc-testnet.publicnode.com");
//   web3.eth.getAccounts =async () => ['0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43'];
//   const privateKey = "a0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6";
//   const accountAddr = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";
//   const account = web3.eth.accounts.privateKeyToAccount(privateKey);
//   web3.eth.accounts.wallet.add(account);
//   web3.eth.defaultAccount = accountAddr;
//   let dfsWeb3;
//   dfsWeb3 = new dfs.DfsWeb3(web3);
//   await dfsWeb3.prepareAccount();
//   const Erc20AbiItems : AbiItem[] = ERC20ABi.map(item => ({ ...item, stateMutability: item.stateMutability as StateMutabilityType, type: item.type as AbiType }));
//   const tokenContract = new web3.eth.Contract(Erc20AbiItems,"0x4ABEf176F22B9a71B45ddc6c4A115095d8761b37");
//   tokenContract.methods.approve(dfsWeb3.proxy,"100000000000000000000")

//   const r = new dfs.Recipe("Basic", [
//     new dfs.actions.basic.PullTokenAction("0x4ABEf176F22B9a71B45ddc6c4A115095d8761b37","0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43","100000000000000000000"),
//     //Wrap 0.02 BNB
//     new dfs.actions.basic.WrapBnbAction("20000000000000000"),
//     //Send 0.02 WBNB to owner
//     new dfs.actions.basic.SendTokenAction("0x910CB19698Eac48a6AB7Ccc9542B756f2Bdd67C6","0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43","20000000000000000"),
//     //Unwrap
//     new dfs.actions.basic.UnwrapBnbAction("20000000000000000","0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43")
//   ]);
//   const exec: any = await dfsWeb3.executeRecipe(r);

//   await exec.send({
//     from: dfsWeb3.account,
//     value :"20000000000000000",
//     gasPrice: 1000000000,
//     gasLimit: 20000000,
//   }).then(function(receipt: any){
//     console.log('Transaction Hash:', receipt.transactionHash);
//   }).catch(console.log); 
// }
// test()
