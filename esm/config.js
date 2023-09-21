import Dec from 'decimal.js';
import { set as dfsTokensSetConfig } from '@zennomi/tokens';
Dec.set({
    rounding: Dec.ROUND_DOWN,
    toExpPos: 9e15,
    toExpNeg: -9e15,
    precision: 100,
});
/**
 *
 * @type {Networks}
 */
export const NETWORKS = {
    bscTestnet: {
        chainId: 97,
        chainName: 'Binance Smart Chain Testnet',
        blockExplorerUrls: ['https://testnet.bscscan.com/'],
        iconUrls: [],
        rpcUrls: [],
        nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
    },
    bscMainnet: {
        chainId: 56,
        chainName: 'Binance Smart Chain Mainnet',
        blockExplorerUrls: ['https://bscscan.com/'],
        iconUrls: [],
        rpcUrls: [],
        nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
    },
};
/**
 *
 */
export const CONFIG = {
    chainId: NETWORKS.bscMainnet.chainId,
    testingMode: false,
};
/**
 *
 * @param chainId
 */
export const getNetworkData = (chainId) => {
    const networkData = Object.values(NETWORKS).find((network) => network.chainId === +chainId);
    if (!networkData)
        throw new Error(`Cannot find network data for chainId: ${chainId}`);
    return networkData;
};
/**
 *
 * @param config
 */
export const configure = (config) => {
    if (!config || typeof config !== 'object')
        throw new Error('Object expected');
    const newKeys = Object.keys(config);
    newKeys.forEach((key) => {
        CONFIG[key] = config[key];
        if (key === 'chainId')
            dfsTokensSetConfig('network', config[key]);
    });
};
export const MAX_UINT256 = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
