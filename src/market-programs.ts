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
    end: 1721142000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
    rewardAmount: {
      supply: parseUnits("14280", 6),
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
  // wUSD+/USDC 51k OVN 07/05/2024 10/11/2024 12am every friday UTC+0
  {
    start: 1720180800n,
    end: 1720785600n,
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
    start: 1720785600n,
    end: 1721390400n,
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
    start: 1721390400n,
    end: 1721995200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1400", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1721995200n,
    end: 1722600000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1722600000n,
    end: 1723204800n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1723204800n,
    end: 1723809600n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1723809600n,
    end: 1724414400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1724414400n,
    end: 1725019200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1725019200n,
    end: 1725624000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1725624000n,
    end: 1726228800n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1726228800n,
    end: 1726833600n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1726833600n,
    end: 1727438400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1727438400n,
    end: 1728043200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1728043200n,
    end: 1728648000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/ETH 2,000,000 RSR 07/18/2024 08/18/2024 6pm GMT
  {
    start: 1721325600n,
    end: 1724004000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xdf6aa0df4eb647966018f324db97aea09d2a7dde0d3c0a72115e8b20d58ea81f",
    rewardAmount: {
      supply: parseUnits("2000000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // new cbETH/USDC 16,000 USDC 07/16/2024 07/20/2024 11am EST
  {
    start: 1721142000n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x1c21c59df9db44bf6f645d854ee710a8ca17b479451447e9f56758aee10a2fad",
    rewardAmount: {
      supply: parseUnits("1720", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/eUSD Base 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/eUSD Base 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xce89aeb081d719cd35cb1aafb31239c4dfd9c017b2fec26fc2e9a443461e9aea",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/eUSD Base 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xb5d424e4af49244b074790f1f2dc9c20df948ce291fc6bcc6b59149ecf91196d",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 250,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // WBTC/eUSD Mainnet 1,100,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x461da96754b33fec844fc5e5718bf24298a2c832d8216c5ffd17a5230548f01f",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1100000", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // wstETH/eUSD Mainnet 1,100,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x6029eea874791e01e2f3ce361f2e08839cd18b1e26eea6243fa3e43fe8f6fa23",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1100000", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // apxETH/WETH 67000 DINERO
  {
    start: 1722556800n,
    end: 1723766400n,
    fundsSender: "0x7f6494D4fBEA1c06daC2250A3FCa81003bF8D20C",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x6DF0E641FC9847c0c6Fde39bE6253045440c14d3",
    marketId: "0x8bbd1763671eb82a75d5f7ca33a0023ffabdd9d1a3d4316f34753685ae988e80",
    rewardAmount: {
      supply: parseUnits("67000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // bsdETH/ETH Base 600,000 RSR 07/25/2024 08/25/2024 1pm GMT
  {
    start: 1721912410n,
    end: 1724590810n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xdf6aa0df4eb647966018f324db97aea09d2a7dde0d3c0a72115e8b20d58ea81f",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("600000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/ETH Mainnet 2,800,000 RSR 07/29/2024 08/29/2024 1pm GMT
  {
    start: 1722258000n,
    end: 1724936400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x9ec52d7195bafeba7137fa4d707a0f674a04a6d658c9066bcdbebc6d81eb0011",
    rewardAmount: {
      supply: parseUnits("2800000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // UNI/USDC Mainnet 200k PYTH 07/31/2024-10/01/2024 12pm EST
  {
    start: 1723046400n,
    end: 1728316800n,
    fundsSender: "0xE64fD4d6f8128A27365Bee615eC9eD33979c782C",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xeFc0CED4B3D536103e76a1c4c74F0385C8F4Bdd3",
    marketId: "0x718af3af39b183758849486340b69466e3e89b84b7884188323416621ee91cb7",
    rewardAmount: {
      supply: parseUnits("200000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // wstETH / USDT Mainnet 0.62 WETH 08/09/2024 09/07/2024 1pm GMT
  {
    start: 1723208400n,
    end: 1725714000n,
    fundsSender: "0x9Cc5b1bc0E1970D44B5Adc7ba51d76a5DD375434",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    marketId: "0x6a6c8e41a6a7ccbea68e1e6a19ece1fdd863b2b6c9e0f71bbcd4dcbe8b1062e8",
    rewardAmount: {
      supply: 623424419249185042n,
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // pufETH / USDC Mainnet 0.094 WETH 08/09/2024 09/07/2024 1pm GMT
  {
    start: 1723208400n,
    end: 1725714000n,
    fundsSender: "0x9Cc5b1bc0E1970D44B5Adc7ba51d76a5DD375434",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    marketId: "0x7e9c708876fa3816c46aeb08937b51aa0461c2af3865ecb306433db8a80b1d1b",
    rewardAmount: {
      supply: 94597806657332024n,
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // apxETH/WETH 250000 DINERO
  {
    start: 1724410800n,
    end: 1726830000n,
    fundsSender: "0x7f6494D4fBEA1c06daC2250A3FCa81003bF8D20C",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x6DF0E641FC9847c0c6Fde39bE6253045440c14d3",
    marketId: "0x8bbd1763671eb82a75d5f7ca33a0023ffabdd9d1a3d4316f34753685ae988e80",
    rewardAmount: {
      supply: parseUnits("250000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // bsdETH/eUSD Base 1,250 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 1,250 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 1,250 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // verUSDC 60'000 CFG
  {
    start: 1724749200n,
    end: 1729933200n,
    fundsSender: "0x8D566ADACe57ee5DD2BF98953B804991D634211A",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x2b51E2Ec9551F9B87B321f63b805871f1c81ba97",
    marketId: "0x83262d91702f90d9edf6c737ceb46e59a2bcfc7ba856e1e8448b7824f83a07e3",
    rewardAmount: {
      supply: parseUnits("60000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
];
