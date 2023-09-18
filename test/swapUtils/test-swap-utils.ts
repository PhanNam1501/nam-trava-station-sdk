// import Web3 from "web3";
import { SwapUtil } from "../../src/SwapUtils";
import { JsonRpcProvider } from "ethers";
// import Decimal from "decimal.js";

const listToken = [
  {
    name: "WBNB",
    address: "0x910CB19698Eac48a6AB7Ccc9542B756f2Bdd67C6"
  },
  {
    name: "USDC",
    address: "0x345dCB7B8F17D342A3639d1D9bD649189f2D0162"
  },
  {
    name: "USDT",
    address: "0x780397E17dBF97259F3b697Ca3a394fa483A1419"
  },
  // {
  //   name: "DAI",
  //   address: "0xFCcB260C9074faBB69702C1972aa747aAC6e654F"
  // },
  // {
  //   name: "ETH",
  //   address: "0xBE2a3B225aDA4142C42A36CfbD5b04F28D261CA8"
  // },
  // {
  //   name: "BUSD",
  //   address: "0x2CEC38C779d6b962bc877777b6f70937d21c9c38"
  // },
  // {
  //   name: "XVS",
  //   address: "0x45A80229E1FeAb61E360EfA9005B5AB46821Cee7"
  // },
  // {
  //   name: "DOT",
  //   address: "0x0642E40c9a12fc3C7a3BFfA47e9E41391cC49Dbe"
  // },
  {
    name: "AAVE",
    address: "0x3cb48b8e2Ef30a8aD5130ad49b8A6044eA80d1f2"
  },
  // {
  //   name: "ADA",
  //   address: "0x5303A4c5c5D79d086C77E05338fDf6548A1EE09C"
  // },
  // {
  //   name: "CAKE",
  //   address: "0x97f04BF5FcFF000e2bF72884E6C33a261F8E8ba9"
  // },
  // {
  //   name: "XRP",
  //   address: "0xb868DC5a295489088d3373Ee8d365CeF45c38684"
  // },
  // {
  //   name: "DOGE",
  //   address: "0xe4C7E2f0D19335f9B85e4732eb05eFced2f8f2fb"
  // },
  {
    name: "TRAVA",
    address: "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435"
  },
  // {
  //   name: "TOD",
  //   address: "0xFca3Cf5E82F595D4f20C24D007ae5E2e94fab2f0"
  // }
]
async function test() {
  const web3 = new JsonRpcProvider("https://bsc-testnet.publicnode.com");
  const swapUtil = new SwapUtil(web3);
  console.log("=======TEST FACTORY======");

  let pair;
  let info;
  for(let i = 0; i < 1; i++) {
    for(let j = 1; j < listToken.length; j++) {
      pair = await swapUtil.FactoryContract.getPair(listToken[i].address, listToken[j].address);
      console.log(listToken[i].name + "-" + listToken[j].name + " pair address is", pair)
      // console.log("Is " + listToken[i].name + "-" + listToken[j].name + " zero ", swapUtil.isZeroAddress(pair))
      if(!swapUtil.isZeroAddress(pair)) {
        console.log("Test GetInformation")
        info = await swapUtil.getInformationFromInput(listToken[i].address, listToken[j].address, 0.5 / 100, "100000000000");
        console.log(info)
      }
    }
  }
  // const cakeTravaPair = await swapUtil.FactoryContract.getPair("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");
  // console.log("CAKE-TRAVA address is",cakeTravaPair)
  // console.log("=====Fin======")
  //await swapUtil.getInformationFromOutput("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0x55d398326f99059fF775485246999027B3197955",0.5/100,"10000000000000000000");


}

test();
