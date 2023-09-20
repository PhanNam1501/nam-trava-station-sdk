// import Web3 from "web3";
import { SwapUtil } from "../../src/SwapUtils";
import { JsonRpcProvider } from "ethers";
// import Decimal from "decimal.js";

const listToken = [
  // {
  //   name: "WBNB",
  //   address: "0x910CB19698Eac48a6AB7Ccc9542B756f2Bdd67C6"
  // },
  {
    name: "USDC",
    address: "0x345dCB7B8F17D342A3639d1D9bD649189f2D0162"
  },
  // {
  //   name: "USDT",
  //   address: "0x780397E17dBF97259F3b697Ca3a394fa483A1419"
  // },
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
  // {
  //   name: "AAVE",
  //   address: "0x3cb48b8e2Ef30a8aD5130ad49b8A6044eA80d1f2"
  // },
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

const BscMainnetTokens = {
  "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3": {
    symbol: "DAI",
    decimal: 18,
    oracle: { address: "0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA", oracle: "chainlink" },
  },
  "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
    symbol: "USDC",
    decimal: 6,
    oracle: { address: "0x51597f405303C4377E36123cBc172b13269EA163", oracle: "chainlink" },
  },
  "0x55d398326f99059ff775485246999027b3197955": {
    symbol: "USDT",
    decimal: 18,
    oracle: { address: "0xB97Ad0E74fa7d920791E90258A6E2085088b4320", oracle: "chainlink" },
  },
  "0x2170ed0880ac9a755fd29b2688956bd959f933f8": {
    symbol: "ETH",
    decimal: 18,
    oracle: { address: "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e", oracle: "chainlink" },
  },
  "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
    symbol: "BNB",
    decimal: 18,
    oracle: { address: "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE", oracle: "chainlink" },
  },
  "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c": {
    symbol: "BTCB",
    decimal: 18,
    oracle: { address: "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf", oracle: "chainlink" },
  },
  "0xe9e7cea3dedca5984780bafc599bd69add087d56": {
    symbol: "BUSD",
    decimal: 18,
    oracle: { address: "0xcBb98864Ef56E9042e7d2efef76141f15731B82f", oracle: "chainlink" },
  },
  "0xfb6115445bff7b52feb98650c87f44907e58f802": {
    symbol: "AAVE",
    oracle: { address: "0xA8357BF572460fC40f4B0aCacbB2a6A61c89f475", oracle: "chainlink" },
  },
  "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": {
    symbol: "ADA",
    decimal: 18,
    oracle: { address: "0xa767f745331D267c7751297D982b050c93985627", oracle: "chainlink" },
  },
  "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": {
    symbol: "CAKE",
    decimal: 18,
    oracle: { address: "0xB6064eD41d4f67e353768aA239cA86f4F73665a1", oracle: "chainlink" },
  },
  "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": {
    symbol: "XRP",
    decimal: 18,
    oracle: { address: "0x93A67D414896A280bF8FFB3b389fE3686E014fda", oracle: "chainlink" },
  },
  "0xba2ae424d960c26247dd6c32edc70b295c744c43": {
    symbol: "DOGE",
    decimal: 18,
    oracle: { address: "0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8", oracle: "chainlink" },
  },
  "0x7083609fce4d1d8dc0c979aab8c869ea2c873402": {
    symbol: "DOT",
    decimal: 18,
    oracle: { address: "0xC333eb0086309a16aa7c8308DfD32c8BBA0a2592", oracle: "chainlink" },
  },
  "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63": {
    symbol: "XVS",
    decimal: 18,
    oracle: { address: "0xBF63F430A79D4036A5900C19818aFf1fa710f206", oracle: "chainlink" },
  },
};
async function test() {
  const web3 = new JsonRpcProvider("https://bsc-testnet.publicnode.com");
  let chainId = (await web3.getNetwork()).chainId
  const swapUtil = new SwapUtil("https://bsc-testnet.publicnode.com", Number(chainId.toString()));
  console.log("=======TEST FACTORY======");

  let pair;
  let info;
  for(let i = 0; i < 1; i++) {
    for(let j = 1; j < listToken.length; j++) {
      pair = await swapUtil.FactoryContract.getPair(listToken[i].address, listToken[j].address);
      console.log(listToken[i].name + "-" + listToken[j].name + " pair address is", pair)
      // console.log("Is " + listToken[i].name + "-" + listToken[j].name + " zero ", swapUtil.isZeroAddress(pair))
      // if(!swapUtil.isZeroAddress(pair)) {
        console.log("Test GetInformation")
        info = await swapUtil.getInformationFromInput(listToken[j].address.toLowerCase(), listToken[i].address.toLowerCase(), 0.5 / 100, BigInt(5 * 1e23).toString());
        info = await swapUtil.getInformationFromInput(listToken[j].address.toLowerCase(), listToken[i].address.toLowerCase(), 0.5 / 100, BigInt(5 * 1e22).toString());
        console.log(info)
      // }
    }
  }
  // const cakeTravaPair = await swapUtil.FactoryContract.getPair("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");
  // console.log("CAKE-TRAVA address is",cakeTravaPair)
  // console.log("=====Fin======")
  //await swapUtil.getInformationFromOutput("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0x55d398326f99059fF775485246999027B3197955",0.5/100,"10000000000000000000");


}

test();
