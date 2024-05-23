export declare const requireAddress: (address: string) => void;
/**
 * @param price Price returned by contract or getOffchainPrice
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price in expected format (11000.00 for WBTC->USDT, 0.98 for USDc->DAI, etc)
 *
 */
export declare const parsePriceFromContract: (price: string, from: string, to: string) => string;
/**
 * @param price Price returned by parsePriceFromContract
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price formatted like contract output (can be used for contract input for exchange v2)
 *
 */
export declare const formatPriceForContract: (price: string, from: string, to: string) => string;
