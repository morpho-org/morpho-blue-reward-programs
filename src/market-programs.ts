import { parseUnits } from "viem";

import { Address, ChainId, Hex } from "@morpho-org/blue-rewards-core-sdk";

export type MarketRewardProgramArgs = {
  marketId: Hex;
  start: bigint;
  end?: bigint;
  fundsSender: Address;
  urdAddress: Address;
  tokenAddress: Address;
  rewardAmount: {
    supply: bigint;
    borrow: bigint;
    collateral: bigint;
  };
  chainId: ChainId;
};

/**
 * List of Market programs
 * @example
 * [
 *   {
 *    start: 1717149233n,
 *    end: 1717149235n,
 *    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
 *    urdAddress: "0x5aC6F9F696b06538A8A0253ab495dC4c638da3be",
 *    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
 *    marketId: "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
 *    rewardAmount: {
 *      supply: parseUnits("1000000", 18),
 *      borrow: 0n,
 *      collateral: 0n,
 *    },
 *    chainId: ChainId.BASE
 *   }
 * ]
 */
export const marketPrograms: MarketRewardProgramArgs[] = [
  // ezETH/WETH 15,000 USDC
  {
    start: 1717218000n,
    end: 1719810000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x7815CAb40D9b83021f55418a013cceC3813646FB",
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    marketId: "0x49bb2d114be9041a787432952927f6f144f05ad3e83196a7d062f374ee11d0ee",
    rewardAmount: {
      supply: parseUnits("15000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // ezETH/WETH 20,000 MORPHO
  {
    start: 1717218000n,
    end: 1719810000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x678dDC1d07eaa166521325394cDEb1E4c086DF43",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x49bb2d114be9041a787432952927f6f144f05ad3e83196a7d062f374ee11d0ee",
    rewardAmount: {
      supply: parseUnits("20000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // WOETH/WETH 6,667 MORPHO
  {
    start: 1717632000n,
    end: 1720224000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0xea023e57814fb9a814a5a9ee9f3e7ece5b771dd8cc703e50b911e9cde064a12d",
    rewardAmount: {
      supply: parseUnits("6667", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // CURVE
  // stkcvxcrvUSDCWBTCWETH-morpho/crvUSD 36,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x74ef8d7022b0ef0c0e6dc001fbda3c8bd9a3e706f03bb559c833e1dce7302d3a",
    rewardAmount: {
      supply: parseUnits("36000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDCWBTCWETH-morpho/crvUSD 49,950 MORPHO
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x74ef8d7022b0ef0c0e6dc001fbda3c8bd9a3e706f03bb559c833e1dce7302d3a",
    rewardAmount: {
      supply: parseUnits("49950", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDTWBTCWETH-morpho/crvUSD 36,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x1C4B9CE834604969D33DC277BD8473D8AEE856E5A577C08427B6DEEB97CC72D6",
    rewardAmount: {
      supply: parseUnits("36000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDTWBTCWETH-morpho/crvUSD 49,950 MORPHO
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x1C4B9CE834604969D33DC277BD8473D8AEE856E5A577C08427B6DEEB97CC72D6",
    rewardAmount: {
      supply: parseUnits("49950", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvCRVUSDTBTCWSTETH-morpho/crvUSD 18,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x0cd36e6ecd9d846cffd921d011d2507bc4c2c421929cec65205b3cd72925367c",
    rewardAmount: {
      supply: parseUnits("18000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvCRVUSDTBTCWSTETH-morpho/crvUSD 24,975 MORPHO
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x0cd36e6ecd9d846cffd921d011d2507bc4c2c421929cec65205b3cd72925367c",
    rewardAmount: {
      supply: parseUnits("24975", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxTryLSD-morpho/crvUSD 12,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x42e157d3739f9ae3f418f5dd0977b7d51c3a677502afd9f3f594f46cc07dec6a",
    rewardAmount: {
      supply: parseUnits("12000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxTryLSD-morpho/crvUSD 16,650 MORPHO
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x42e157d3739f9ae3f418f5dd0977b7d51c3a677502afd9f3f594f46cc07dec6a",
    rewardAmount: {
      supply: parseUnits("16650", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDETHCRV-morpho/crvUSD 18,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0xbd2a27358bdaf3fb902a0ad17f86d4633f9ac5377941298720b37a4d90deab96",
    rewardAmount: {
      supply: parseUnits("18000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDETHCRV-morpho/crvUSD 24,975 MORPHO
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0xbd2a27358bdaf3fb902a0ad17f86d4633f9ac5377941298720b37a4d90deab96",
    rewardAmount: {
      supply: parseUnits("24975", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // GAUNTLET
  // Aero/USDC 16,000 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xdaa04f6819210b11fe4e3b65300c725c32e55755e3598671559b9ae3bac453d7",
    rewardAmount: {
      supply: parseUnits("16000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/USDC 16,000 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
    rewardAmount: {
      supply: parseUnits("16000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // WETH/USDC 16,000 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x8793cf302b8ffd655ab97bd1c695dbd967807e8367a65cb2f4edaf1380ba1bda",
    rewardAmount: {
      supply: parseUnits("16000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/USDC 6,400 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xa066f3893b780833699043f824e5bb88b8df039886f524f62b9a1ac83cb7f1f0",
    rewardAmount: {
      supply: parseUnits("6400", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ezETH/USDC 6,400 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xf24417ee06adc0b0836cf0dbec3ba56c1059f62f53a55990a38356d42fa75fa2",
    rewardAmount: {
      supply: parseUnits("6400", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // weETH/USDC 3,200 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x6a331b22b56c9c0ee32a1a7d6f852d2c682ea8b27a1b0f99a9c484a37a951eb7",
    rewardAmount: {
      supply: parseUnits("3200", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wUSD+/USDC 51k OVN 07/04/2024 10/10/2024 12am every thursday UTC+0
  {
    start: 1720083600n,
    end: 1720688400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2560", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1720688400n,
    end: 1721293200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2700", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1721293200n,
    end: 1721898000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2840", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1721898000n,
    end: 1722502800n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2990", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1722502800n,
    end: 1723107600n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3150", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1723107600n,
    end: 1723712400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3310", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1723712400n,
    end: 1724317200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3490", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1724317200n,
    end: 1724922000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3670", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1724922000n,
    end: 1725526800n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3860", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1725526800n,
    end: 1726131600n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("4070", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1726131600n,
    end: 1726736400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("4280", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1726736400n,
    end: 1727341200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("4510", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1727341200n,
    end: 1727946000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("4750", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1727946000n,
    end: 1728550800n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("4990", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
];
