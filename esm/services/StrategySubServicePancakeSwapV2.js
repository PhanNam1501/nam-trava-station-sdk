import { SubDataServicePancakeSwapV2, TriggerDataServicePancakeSwapV2 } from ".";
export const AutoSwapStrategySub = {
    encodeForStartgySubWithGas(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path, pair, tokenIn, triggerPrice, state, startegyIdOrBundle, isBundle) {
        const subData = SubDataServicePancakeSwapV2.AutoSwapSubData.encodeForSubDataWithGas(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path);
        const triggerData = TriggerDataServicePancakeSwapV2.OnchainPriceTriggerService.encode(pair, tokenIn, triggerPrice, state);
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    },
    encodeForStrategySub(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from, pair, tokenIn, triggerPrice, state, startegyIdOrBundle) {
        const subData = SubDataServicePancakeSwapV2.AutoSwapSubData.encodeForSubData(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from);
        const triggerData = TriggerDataServicePancakeSwapV2.OnchainPriceTriggerService.encode(pair, tokenIn, triggerPrice, state);
        const isBundle = false;
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    }
};
