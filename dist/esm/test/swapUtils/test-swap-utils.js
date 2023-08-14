var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Web3 from "web3";
import { SwapUtil } from "../../SwapUtils";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = new Web3("https://bsc-rpc.gateway.pokt.network");
        const swapUtil = new SwapUtil(web3);
        // console.log("=======TEST FACTORY======");
        // const cakeBNBpair =await swapUtil.FactoryContract.getPair("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");
        // console.log("CAKE-WBNB pair address is",cakeBNBpair)
        // const cakeTravaPair = await swapUtil.FactoryContract.getPair("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82");
        // console.log("CAKE-TRAVA address is",cakeTravaPair)
        // console.log("Is cake-trava zero address",swapUtil.isZeroAddress(cakeTravaPair))
        // console.log("=====Fin======")
        console.log("Test GetInformation");
        //await swapUtil.getInformationFromInput("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef","0x55d398326f99059fF775485246999027B3197955",0.5/100,"1000000000000000000000");
        yield swapUtil.getInformationFromOutput("0x0391bE54E72F7e001f6BBc331777710b4f2999Ef", "0x55d398326f99059fF775485246999027B3197955", 0.5 / 100, "10000000000000000000");
    });
}
test();
//# sourceMappingURL=test-swap-utils.js.map