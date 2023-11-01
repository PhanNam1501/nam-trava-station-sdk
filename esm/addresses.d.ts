import { EthAddress } from "./types";
export declare const listAddr: {
    [x: number]: {
        TravaGovernanceIncreaseUnlockTime: string;
        TravaGovernanceIncreaseLock: string;
        TravaGovernanceCreateLock: string;
        TravaAuctionFinalizeAuction: string;
        TravaAuctionEditAuctionPrice: string;
        TravaAuctionCancelAuction: string;
        TravaAuctionCreateAuction: string;
        TravaAuctionMakeBid: string;
        RecipeExecutor: string;
        DFSProxyRegistry: string;
        TravaNFTTransfer: string;
        TravaNFTBuy: string;
        TravaNFTCreateSale: string;
        TravaNFTCancelSale: string;
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
        TravaClaimRewards: string;
        TravaConvertRewards: string;
        TravaStakingStake: string;
        TravaStakingRedeem: string;
        TravaStakingClaimRewards: string;
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
    } | {
        DFSProxyRegistry: string;
        RecipeExecutor: string;
        TravaAuctionCreateAuction: string;
        TravaAuctionMakeBid: string;
        TravaNFTTransfer: string;
        TravaNFTBuy: string;
        TravaNFTCreateSale: string;
        TravaNFTCancelSale: string;
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
        TravaClaimRewards: string;
        TravaConvertRewards: string;
        TravaStakingStake: string;
        TravaStakingRedeem: string;
        TravaStakingClaimRewards: string;
        RouterAddress: string;
        FactoryAddress: string;
        WBNBAdress: string;
        TravaGovernanceIncreaseUnlockTime?: undefined;
        TravaGovernanceIncreaseLock?: undefined;
        TravaGovernanceCreateLock?: undefined;
        TravaAuctionFinalizeAuction?: undefined;
        TravaAuctionEditAuctionPrice?: undefined;
        TravaAuctionCancelAuction?: undefined;
        USDCAddress?: undefined;
        USDTAddress?: undefined;
        DAIAddress?: undefined;
        ETHAddress?: undefined;
        BUSDAddress?: undefined;
        XVSAddress?: undefined;
        DOTAddress?: undefined;
        AAVEAddress?: undefined;
        ADAAddress?: undefined;
        CAKEAddress?: undefined;
        XRPAddress?: undefined;
        DOGEAddress?: undefined;
        TRAVAAddress?: undefined;
        TODAddress?: undefined;
    };
};
/**
 *
 * @param name
 * @param chainId
 */
export declare const getAddr: (name: string, chainId?: number) => EthAddress;
export declare const convertHexStringToAddress: (hexString: EthAddress) => EthAddress;
