# Table of contents
- [Table of contents](#table-of-contents)
- [TRAVA STATION SDK](#trava-station-sdk)
  - [Utilities](#utilities)
    - [Pull token](#pull-token)
    - [Send token](#send-token)
    - [Wrap token](#wrap-token)
    - [Unwrap token](#unwrap-token)
    - [Swap](#swap)
  - [Trava Pools](#trava-pools)
    - [Deposit](#deposit)
    - [Borrow](#borrow)
    - [Repay](#repay)
    - [Withdraw](#withdraw)
    - [claimRewards](#claimrewards)
    - [convertRewards](#convertrewards)
  - [Trava Staking](#trava-staking)
    - [Stake](#stake)
    - [Redeem (Withdraw)](#redeem-withdraw)
    - [Claim](#claim)
  - [Trava NFT Marketplace / VeTrava](#trava-nft-marketplace--vetrava)
    - [Buy](#buy)
    - [Create Sale](#create-sale)
    - [Cancel Sale](#cancel-sale)
  - [Trava NFT Marketplace / Sell](#trava-nft-marketplace--sell)
    - [Buy](#buy)
    - [Create Sale](#create-sale)
    - [Cancel sale](#cancel-sale)
  - [Trava NFT Marketplace / Auction](#trava-nft-marketplace--auction)
    - [Create Auction](#create-auction)
    - [Cancel Auction](#cancel-auction)
    - [Make bid Auction](#make-bid-auction)
    - [Edit Auction Price](#edit-auction-price)
    - [Finalize Auction](#finalize-auction)
  - [Trava NFT Mission / Expedition](#trava-nft-mission--expedition)
    - [Trava Expedition abandon](#trava-expedition-abandon)
    - [Trava Expedition deploy](#trava-expedition-deploy)
    - [Trava Expedition withdraw](#trava-expedition-withdraw)
  - [Trava NFT Utilites](#trava-nft-utilites)
    - [Transfer armoury](#transfer-armoury)
    - [Transfer Collection](#transfer-collection)
  - [Execute actions](#execute-actions)
  - [ABI IDSProxy Contract](#abi-idsproxy-contract)
- [TRAVA SIMULATION ROUTE](#trava-simulation-route)
  - [Initialize state](#initialize-state)
    - [Các action liên quan đến token](#các-action-liên-quan-đến-token)
- [Approve token](#approve-token)
  - [Approve ERCE20 token](#approve-erce20-token)
    - [ABI contract ERC20 token](#abi-contract-erc20-token)
    - [Cách approve token](#cách-approve-token)
  - [Approve Armory Contract](#approve-armory-contract)
    - [ABI contract Armoury](#abi-contract-armoury)
    - [Approve armoury](#approve-armoury)
  - [Approve Knight Contract](#approve-knight-contract)
    - [ABI Knight Contract](#abi-knight-contract)
    - [Approve Knight](#approve-knight)
  - [Approve token trong các Action](#approve-token-trong-các-action)
    - [Cách approve](#cách-approve)
    - [Các actions cần approve](#các-actions-cần-approve)
# TRAVA STATION SDK
```
import {actions} from "trava-station-sdk"
```
Với các actions:
## Utilities
### Pull token
```
const pull_token_action = new actions.basic.PullTokenAction(
    token: String,
    from: String,
    amount: uint256
)
```
### Send token
```
const send_token_action = new actions.basic.SendTokenAction(
    token: String,
    to: String,
    amount: uint256
)
```
### Wrap token
```
const pull_token_action = new actions.basic.PullTokenAction()
const wrap_token_action = new actions.basic.WrapBnbAction(
    amount: uint256
)
```
### Unwrap token
```
const unwrap_token_action = new actions.basic.UnwrapBnbAction(
    amount: uin256,
    to: String
)
```
### Swap
```
const swapUtil = new SwapUtil(web3);
const info = new await swapUtil.getInformationFromInput(tokenAddr1, tokenAddr2, slipparage, amount);
const minimumReceive = info.minimumReceive
const priceImpact = info.priceImpact;
const path = info.path;
```
```
const swap_token_action = new actions.pancakeswap.PancakeSwapV2(
    amountIn: uint256,
    amountOutMin: 0,
    path: path,
    to: _to address,
    deadline: timestamp + 30 * 60 * 1000
    from: _from address
)
```
## Trava Pools
### Deposit
```
const trava_supply_action = new actions.trava.TravaSupply(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    to: _from address,
    onBehalfOf: address of proxy,
    enableAsColl: true
)
```
### Borrow
```
const trava_borrow_action = new actions.trava.TravaBorrow(
    market,
    token,
    amount,
    to: _to_ address,
    onBehalfOf: proxy
)
```
### Repay
```
const trava_repay_action = new actions.trava.TravaRepay(
    market,
    token,
    amount,
    from,
    onBehalfOf: proxy
)
```
### Withdraw
```
const trava_withdraw_action = new actions.trava.TravaWithdraw(
    market,
    token,
    amount,
    to
)
```
### claimRewards
```
asset = await getListTDTokenRewardsAddress(appState);
amount = MAX_UINT256;
```

```
const trava_withdraw_action = new actions.trava.TravaClaimRewards(
    asset,
    amount,
    to,
    contractAddress
)
```
### convertRewards
```
amount = MAX_UINT256;
```
```
const trava_withdraw_action = new actions.trava.TravaConvertRewards(
    from,
    amount,
    to,
    contractAddress
)

```
## Trava Staking
### Stake
```
const trava_staking_stake_action = new actions.trava.TravaStakingStake(
  stakingPoolAddress,
  smartWalletAddress,
  amount,
  contractAddress
)
```
### Redeem (Withdraw)
```
const trava_staking_redeem_action = new actions.trava.TravaStakingRedeem(
  stakingPoolAddress,
  to,
  amount,
  contractAddress
)
```
### Claim
```
const trava_staking_claim_action = new actions.trava.TravaStakingClaimRewards(
  stakingPoolAddress,
  to,
  MAX_UINT256,
  contractAddress
)
```
## Trava NFT Marketplace / veTrava
### Buy
```
const trava_nft_ve_trava_buy = new actions.trava.TravaNFTVeTravaBuy(
    tokenId,
    price,
    option,
    from,
    to,
    contractAddress
)
```
### Create Sale
```
const trava_nft_ve_trava_create_sale = new actions.trava.TravaNFTVeTravaCreateSale(
    tokenId,
    price,
    option,
    from,
    contractAddress
  )
```
### Cancel Sale
```
const trava_nft_ve_trava_cancel_sale = new actions.trava.TravaNFTVeTravaCancelSale(
    tokenId,
    to,
    contractAddress
  )
```
## Trava NFT Marketplace / Sell
### Buy
```
const trava_nft_buy_action = new actions.trava.TravaNFTBuy(
    tokenId,
    price,
    from, 
    to
)
```
### Create Sale
```
const trava_nft_create_sale_action = new actions.trava.TravaNFTCreateSale(
    tokenId,
    to
)
```
### Cancel sale
```
const trava_nft_cancel_sale_action = new actions.trava.TravaNFTCancelSale(
    tokenId,
    to
)
```

## Trava NFT Marketplace / Auction
### Create Auction
```
const trava_nft_auction_create_action = new actions.trava.TravaNFTAuctionCreateAuction(
    tokenId,
    startingBid,
    duration (s), 
    ceilingPrice,
    method
)
```
### Cancel Auction
```
const trava_nft_auction_cancel_action = new actions.trava.TravaNFTAuctionCancelAuction(
    tokenId,
    to
)
```
### Make bid Auction
```
const trava_nft_auction_make_bid = new actions.trava.TravaNFTAuctionMakeBid(
    tokenId,
    bidPrice, 
    from
)
```
### Edit Auction Price
```
const trava_nft_auction_eidt_action_price = new actions.trava.TravaNFTAuctionEditAuctionPrice(
    tokenId,
    startingBid
)
```
### Finalize Auction
```
const trava_nft_auction_finalize_action = new actions.trava.TravaNFTAuctionFinalizeAuction(
    tokenId,
    to
)
```

## Trava NFT Mission / Heuristic Farming
### Trava heuristic farming stake
```
const trava_nft_heuristic_farming_stake = new actions.trava.TravaNFTHeuristicFarmingStake(
    heuristic farming address,
    array<collection_id>,
    level,
    fromAddress,
    contractAddress
)
```
### Trava heuristic farming withdraw
```
const trava_nft_heuristic_farming_withdraw = new actions.trava.TravaNFTheuristicFarmingWithdraw(
    heuristic farming address,
    array<collection_id>,
    level,
    to address
)
```
### Trava heuristic farming claim reward
```
const trava_nft_heuristic_farming_claimRewards = new actions.trava.TravaNFTHeuristicFarmingClaimReward(
    heuristic farming address,
    array<collection_id>,
    level,
    contractAddress
)
```
## Trava NFT Mission / Expedition
### Trava Expedition abandon
```
const trava_nft_expedition_abandon = new actions.trava.TravaNFTExpeditionAbandon(
    expedition address,
    tokenId,
    toAddress,
    contractAddress
)
```
### Trava heuristic farming polish
```
const trava_nft_heuristic_farming_polish = new actions.trava.TravaNFTheuristicFarmingPolish(
    heuristic farming address,
    array<collection_id>,
    level
)
```
### Trava Expedition deploy
```
const trava_nft_expedition_deploy = new actions.trava.TravaNFTExpeditionDeploy(
    expedition address,
    tokenId,
    array<buffWinRateTickets>,
    array<buffExpTickets>,
    fromKnightAddress,
    fromTokenAddress,
    contractAddress
)
```
### Trava expedition withdraw
```
const trava_nft_expedtion_withdraw = new actions.trava.TravaNFTExpeditionWithdraw(
    expedition address,
    tokenId,
    toKnight,
    toToken,
    contractAddress
)
```
## Trava NFT Utilites
### Transfer armoury
```
const trava_nft_transfer_armoury_action = new actions.trava.TravaNFTTransfer(
    from,
    to, 
    tokenId,
    nftCore: address of TravaNFTCore
)
```
### Transfer Collection
```
const trava_nft_transfer_Collection_action = new actions.trava.TravaNFTTransfer(
    from,
    to, 
    tokenId,
    nftCore: address of TravaNFT Collection
)
```

## Trava Liquidity Campaign
### Trava Liquidity Campaign Buy Token 
const swapUtil = new SwapUtil(web3);
const info = new await swapUtil.getInformationFromInput(tokenAddr1, tokenAddr2, slipparage, amount);
const minimumReceive = info.minimumReceive
const priceImpact = info.priceImpact;
const path = info.path;
```
const trava_liquidity_campaign_buy_token = new actions.trava.LiquidityCampaignBuyToken(
  buy_token_with_reference address,
  amountIn,
  amountOutIn,
  path,
  to, 
  deadline,
  referred,
  from,
  liquidity campaign buy token address
)
```
### Trava Liquidity Campaign Buy Token Gateway
const swapUtil = new SwapUtil(web3);
const info = new await swapUtil.getInformationFromInput(tokenAddr1, tokenAddr2, slipparage, amount);
const minimumReceive = info.minimumReceive
const priceImpact = info.priceImpact;
const path = info.path;
```
const trava_liquidity_campaign_buy_token_gateway = new actions.trava.LiquidityCampaignBuyTokenGateway(
  buy_token_with_reference address,
  amountIn,
  amountOutIn,
  path,
  to, 
  deadline,
  referred,
  from,
  liquidity campaign buy token gateway action address
)
```
### Trava Liquidity Campaign Stake
```
const trava_liquidity_campaign_stake = new actions.trava.LiquidityCampaignStake(
  vault address,
  address smart wallet,
  amount,
  from address,
  liquidity campaign stake action address
)
```
### Trava Liquidity Campaign Claim rewards
```
const trava_liquidity_campaign_claim_rewards = new actions.trava.LiquidityCampaignClaimRewards(
  vault address,
  to address,
  amount,
  liquidity campaign claim rewards action address
)
```
### Trava Liquidity Campaign Redeem
```
const trava_liquidity_campaign_redeem = new actions.trava.LiquidityCampaignRedeem(
  vault address,
  to address,
  amount,
  liquidity campaign redeem action address
)
```

## Forked Aave Lending Pool
### Granary Lending Pool
#### Granary Supply
```
const granary_supply_action = new actions.granary.GranarySupply(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    from: _from address,
    onBehalfOf: address of proxy,
    enableAsColl: false,
    action granary supply address
)
```
#### Granary Withdraw
```
const granary_withdraw_action = new actions.granary.GranaryWithdraw(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    to: _from address,
    action granary withdraw address
)
```
#### Granary Borrow
```
const granary_borrow_action = new actions.granary.GranaryBorrow(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    rateMode = 2,
    to: _from address,
    onBehalfOf: address of proxy,
    action granary borrow address
)
```
#### Granary Repay
```
const granary_repay_action = new actions.granary.GranaryRepay(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    rateMode = 2,
    from: _from address,
    onBehalfOf: address of proxy,
    action granary repay address
)
```
### Radiant Lending Pool
#### Radiant Supply
```
const radiant_supply_action = new actions.radiant.RadiantSupply(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    from: _from address,
    onBehalfOf: address of proxy,
    enableAsColl: false,
    action radiant supply address
)
```
#### Radiant Withdraw
```
const radiant_withdraw_action = new actions.radiant.RadiantWithdraw(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    to: _from address,
    action radiant withdraw address
)
```
#### Radiant Borrow
```
const radiant_borrow_action = new actions.radiant.RadiantBorrow(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    rateMode = 2,
    to: _from address,
    onBehalfOf: address of proxy,
    action radiant borrow address
)
```
#### Radiant Repay
```
const radiant_repay_action = new actions.radiant.RadiantRepay(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    rateMode = 2,
    from: _from address,
    onBehalfOf: address of proxy,
    action radiant repay address
)
```
## Forked Compound Lending Pool
### Venus Lending Pool
#### Venus Collateral
```
const venus_collateral_action = new actions.venus.VenusSupply(
    list cTokenAddress,
    list EnableAsCol,
    action venus collateral address
)
```
#### Venus Supply
```
const venus_supply_action = new actions.venus.VenusSupply(
    cTokenAddress,
    from,
    amount,
    enableAsColl: false,
    action venus supply address
)
```
#### Venus Withdraw
```
const venus_withdraw_action = new actions.venus.VenusWithdraw(
    cTokenAddress,
    amount,
    to,
    action venus withdraw address
)
```
#### Venus Borrow
```
const venus_borrow_action = new actions.venus.VenusBorrow(
    cTokenAddress,
    amount,
    to,
    action venus borrow address
)
```
#### Venus Repay
```
const venus_repay_action = new actions.venus.VenusRepay(
    cTokenAddress,
    amount,
    from,
    smart wallet address
    action venus repay address
)
```
### Cream Lending Pool
#### Cream Collateral
```
const cream_collateral_action = new actions.cream.VenusSupply(
    list cTokenAddress,
    list EnableAsCol,
    action cream collateral address
)
```
#### Cream Supply
```
const cream_supply_action = new actions.cream.CreamSupply(
    cTokenAddress,
    from,
    amount,
    enableAsColl: false,
    action cream supply address
)
```
#### Cream Withdraw
```
const cream_withdraw_action = new actions.cream.CreamWithdraw(
    cTokenAddress,
    amount,
    to,
    action cream withdraw address
)
```
#### Cream Borrow
```
const cream_borrow_action = new actions.cream.CreamBorrow(
    cTokenAddress,
    amount,
    to,
    action cream borrow address
)
```
#### Cream Repay
```
const cream_repay_action = new actions.cream.CreamRepay(
    cTokenAddress,
    amount,
    from,
    smart wallet address
    action cream repay address
)
```
### Liqee Lending Pool
#### Liqee Supply
```
const liqee_supply_action = new actions.liqee.LiqeeSupply(
    cTokenAddress,
    from,
    amount,
    enableAsColl: false,
    action liqee supply address
)
```
#### Liqee Withdraw
```
const liqee_withdraw_action = new actions.liqee.LiqeeWithdraw(
    cTokenAddress,
    amount,
    to,
    action liqee withdraw address
)
```
#### Liqee Borrow
```
const liqee_borrow_action = new actions.liqee.LiqeeBorrow(
    cTokenAddress,
    amount,
    to,
    action liqee borrow address
)
```
#### Liqee Repay
```
const liqee_repay_action = new actions.liqee.LiqeeRepay(
    cTokenAddress,
    amount,
    from,
    smart wallet address
    action liqee repay address
)
```
### Wepiggy Lending Pool
#### WePiggy Collateral
```
const wepiggy_collateral_action = new actions.wepiggy.VenusSupply(
    list cTokenAddress,
    list EnableAsCol,
    action wepiggy collateral address
)
```
#### Wepiggy Supply
```
const wepiggy_supply_action = new actions.wepiggy.WepiggySupply(
    cTokenAddress,
    from,
    amount,
    enableAsColl: false,
    action wepiggy supply address
)
```
#### Wepiggy Withdraw
```
const wepiggy_withdraw_action = new actions.wepiggy.WepiggyWithdraw(
    cTokenAddress,
    amount,
    to,
    action wepiggy withdraw address
)
```
#### Wepiggy Borrow
```
const wepiggy_borrow_action = new actions.wepiggy.WepiggyBorrow(
    cTokenAddress,
    amount,
    to,
    action wepiggy borrow address
)
```
#### Wepiggy Repay
```
const wepiggy_repay_action = new actions.wepiggy.WepiggyRepay(
    cTokenAddress,
    amount,
    from,
    smart wallet address
    action wepiggy repay address
)
```
## Execute actions
Sau khi có được các action xong, để execute Freight
giả sử kết hợp action supply và borrow, repay và withdraw
```
import {Recipe} from "trava-station-sdk";

const recipe = new Recipe(
    "ten action = address user + timestamp",
    [
        trava_supply_action,
        trava_borrow_action,
        trava_repay_action,
        trava_withdraw_action
    ]
)

const encoded = recipe.encodeForDsProxyCall();

sau đó dùng contract Proxy để execute (abi e để dưới), address của contract này là proxy của người dùng

await proxyContract.execute(encoded[0], encoded[1])
```

## ABI IDSProxy Contract
```
[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_cacheAddr",
          "type": "address"
        }
      ],
      "name": "setCache",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    }
  ]
```