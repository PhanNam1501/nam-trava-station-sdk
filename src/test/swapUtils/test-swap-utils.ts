import Web3 from "web3";
import { SwapUtil } from "../../SwapUtils";
import { JsonRpcProvider } from "ethers";
import Decimal from "decimal.js";

async function test() {
  const web3 = new JsonRpcProvider("https://bsc-rpc.gateway.pokt.network");
  const swapUtil = new SwapUtil(web3);
  console.log("=======TEST FACTORY======");
  const cakeBNBpair =await swapUtil.FactoryContract.getPair("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");
  console.log("CAKE-WBNB pair address is",cakeBNBpair)
  const cakeTravaPair = await swapUtil.FactoryContract.getPair("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");
  console.log("CAKE-TRAVA address is",cakeTravaPair)
  console.log("Is cake-trava zero address",swapUtil.isZeroAddress(cakeTravaPair))
  console.log("=====Fin======")

  console.log("Test GetInformation")
  console.log(BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935").toString())
  await swapUtil.getInformationFromInput("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82","0x55d398326f99059fF775485246999027B3197955",0.5/100,"1000000000000000000");
  //await swapUtil.getInformationFromOutput("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0x55d398326f99059fF775485246999027B3197955",0.5/100,"10000000000000000000");
  
  
}

test();
