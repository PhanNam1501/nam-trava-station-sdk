import { EthAddress } from "./types";
export declare const listAddr: {
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
        RouterAddress: string;
        FactoryAddress: string;
        WBNBAdress: string;
        USDCAddress: string;
        USDTAddress: string;
        DAIAddress: string;
        ETHAddress: string;
        BUSDAddress: string;
        XVSAddress: string;
        DOTAddress: string;
        AAVEAddress: string;
        ADAAddress: string;
        CAKEAddress: string;
        XRPAddress: string;
        DOGEAddress: string;
        TRAVAAddress: string;
        TODAddress: string;
    };
};
/**
 *
 * @param name
 * @param chainId
 */
export declare const getAddr: (name: string, chainId?: number) => EthAddress;
