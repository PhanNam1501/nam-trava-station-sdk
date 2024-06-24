import { SubDataServicePancakeSwapV2, TriggerDataServicePancakeSwapV2 } from ".";
import { EthAddress, uint256 } from "../types";

export const AutoSwapStrategySub = {
    encodeForStartgySubWithGas(
        pancakeSwapV2: EthAddress,
        amountIn: uint256,
        amountOutMin: uint256,
        pathSwap: Array<EthAddress>,
        to: EthAddress,
        deadline: uint256,
        from: EthAddress,

        gasUsed: uint256,
        feeToken: EthAddress,
        availableAmount: uint256,
        dfsFeeDivider: uint256,
        path: Array<EthAddress>,

        pair: EthAddress,
        tokenIn: EthAddress,
        triggerPrice: uint256,
        state: string,

        startegyIdOrBundle: uint256,
        isBundle: boolean,
    ) {
        const subData = SubDataServicePancakeSwapV2.AutoSwapSubData.encodeForSubDataWithGas(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path);
        const triggerData = TriggerDataServicePancakeSwapV2.OnchainPriceTriggerService.encode(pair, tokenIn, triggerPrice, state);
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    },

    encodeForStrategySub(
        pancakeSwapV2: EthAddress,
        amountIn: uint256,
        amountOutMin: uint256,
        pathSwap: Array<EthAddress>,
        to: EthAddress,
        deadline: uint256,

        from: EthAddress,
        pair: EthAddress,
        tokenIn: EthAddress,
        triggerPrice: uint256,
        state: string,

        startegyIdOrBundle: uint256,
    ){
        const subData = SubDataServicePancakeSwapV2.AutoSwapSubData.encodeForSubData(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from);
        const triggerData = TriggerDataServicePancakeSwapV2.OnchainPriceTriggerService.encode(pair, tokenIn, triggerPrice, state);
        const isBundle = false;
        
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    }
}
