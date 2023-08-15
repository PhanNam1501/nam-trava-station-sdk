import { EthAddress } from "./types";
export declare const actionAddresses: {
    [x: number]: {
        TravaAuctionCreateAuction: string;
        TravaAuctionMakeBid: string;
        RecipeExecutor: string;
        DFSProxyRegistry: string;
        TravaNFTTransfer: string;
        TravaNFTBuy: string;
        TravaNFTCreateSale: string;
        PancakeSwapV2: string;
        PullToken: string;
        WrapBnb: string;
        UnwrapBnb: string;
        SendToken: string;
        SendTokenAndUnwrap: string;
        SendTokens: string;
        TravaSupply: string;
        TravaBorrow: string;
        TravaRepay: string;
        TravaWithdraw: string;
        TravaStakingStake: string;
        TravaNFTCancelSale: string;
    };
};
/**
 *
 * @param name
 * @param chainId
 */
export declare const getAddr: (name: string, chainId?: number) => EthAddress;
