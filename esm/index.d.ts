import type { EthAddress, Config, Network, Networks, bytes32, bytes, uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24 } from './types';
import { Action } from './Action';
import { Recipe } from './Recipe';
import { DfsWeb3 } from './DfsWeb3';
import * as actions from './actions';
import { SwapUtil } from './SwapUtils';
import { configure, getNetworkData, CONFIG, NETWORKS as networks } from './config';
import { getAddr } from './addresses';
export type { EthAddress, Config, Network, Networks, bytes32, bytes, uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24, };
declare const listAddressesAllChains: {
    [x: number]: {
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
declare const listAddresses: (chainId?: null) => {
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
export { Action, Recipe, DfsWeb3, actions, SwapUtil, configure, getNetworkData, CONFIG, networks, listAddresses, listAddressesAllChains, getAddr, };
declare const _default: {
    Action: typeof Action;
    Recipe: typeof Recipe;
    DfsWeb3: typeof DfsWeb3;
    actions: typeof actions;
    configure: (config: Config) => void;
    getNetworkData: (chainId: number) => Network;
    CONFIG: Config;
    networks: Networks;
    listAddresses: (chainId?: null) => {
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
    listAddressesAllChains: {
        [x: number]: {
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
    getAddr: (name: string, chainId?: number) => string;
    SwapUtil: typeof SwapUtil;
};
export default _default;
