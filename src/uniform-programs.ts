import { parseUnits } from "viem";

import { Address, ChainId, ConfigEvent, SubsetStrategy } from "@morpho-org/blue-rewards-core-sdk";

export type UniformRewardProgramArgs = {
  fundsSender: Address;
  start: bigint;
  config: ConfigEvent[];
  urdAddress: Address;
  tokenAddress: Address;
  chainId: ChainId;
};

/**
 * List of Uniform programs
 * @example
 * [
 *   {
 *    start: 1717149233n,
 *    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
 *    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
 *    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
 *    config: [
 *         timestamp: 1718272800n,
 *          rateParams: {
 *              sLim: 500_000_000,
 *              r0: parseUnits('0.000145', // 1.45E-4 MORPHO per dollar supplied per day)
 *          },
 *          market: {
 *              supply: {
 *                  subset: SubsetStrategy.CuratedMarket
 *              }
 *          }
 *     ],
 *    chainId: ChainId.MAINNET
 *   }
 * ]
 */
export const uniformPrograms: UniformRewardProgramArgs[] = [
  {
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    start: 1718272800n,
    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    chainId: ChainId.MAINNET,
    config: [
      {
        // Thursday, June 13, 2024 10:00:00 AM
        timestamp: 1718272800n,
        rateParams: {
          sLim: 500_000_000n,
          r0: parseUnits(
            "0.000145", // 1.45E-4 MORPHO per dollar supplied per day
            18
          ),
        },
        market: {
          supply: {
            subset: SubsetStrategy.CuratedMarket,
          },
          borrow: {
            subset: SubsetStrategy.CuratedMarket,
            whitelistedTokens: [
              "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
              "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
              "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8", // PYUSD
            ],
            rateDivisorByToken: {
              "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": 10n, // WETH
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": 10n, // USDC
              "0xdAC17F958D2ee523a2206206994597C13D831ec7": 10n, // USDT
              "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8": 10n, // PYUSD
            },
          },
        },
      },
      {
        // Monday, July 8, 2024 2:00:00 PM GMT
        // additional borrow tokens (USDA, USDM, wUSDM)
        timestamp: 1720447200n,
        rateParams: {
          sLim: 500_000_000n,
          r0: parseUnits(
            "0.000145", // 1.45E-4 MORPHO per dollar supplied per day
            18
          ),
        },
        market: {
          supply: {
            subset: SubsetStrategy.CuratedMarket,
          },
          borrow: {
            subset: SubsetStrategy.CuratedMarket,
            whitelistedTokens: [
              "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
              "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
              "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8", // PYUSD
              "0x0000206329b97DB379d5E1Bf586BbDB969C63274", // USDA
              "0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C", // USDM
              "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812", // wUSDM
            ],
            rateDivisorByToken: {
              "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": 10n, // WETH
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": 10n, // USDC
              "0xdAC17F958D2ee523a2206206994597C13D831ec7": 10n, // USDT
              "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8": 10n, // PYUSD
              "0x0000206329b97DB379d5E1Bf586BbDB969C63274": 10n, // USDA
              "0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C": 10n, // USDM
              "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812": 10n, // wUSDM
            },
          },
        },
      },
    ],
  },
  {
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    start: 1718719200n,
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    // Update MORPHO token address on BASE
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    chainId: ChainId.BASE,
    config: [
      {
        // Tuesday, June 18, 2024 2:00:00 PM GMT
        timestamp: 1718719200n,
        rateParams: {
          sLim: 10_000_000n,
          r0: parseUnits(
            "0.000545", // 5.45E-4 MORPHO per dollar supplied per day
            18
          ),
        },
        market: {
          supply: {
            subset: SubsetStrategy.CuratedMarket,
          },
        },
      },
      {
        // Thursday, July 4, 2024 2:00:00 PM GMT
        timestamp: 1720101600n,
        rateParams: {
          sLim: 50_000_000n,
          r0: parseUnits(
            "0.000220", // 2.20E-4 MORPHO per dollar supplied per day
            18
          ),
        },
        market: {
          supply: {
            subset: SubsetStrategy.CuratedMarket,
          },
          borrow: {
            subset: SubsetStrategy.CuratedMarket,
            whitelistedTokens: [
              "0x4200000000000000000000000000000000000006", // WETH
              "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC
            ],
            rateDivisorByToken: {
              "0x4200000000000000000000000000000000000006": 3n, // WETH
              "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": 3n, // USDC
            },
          },
        },
      },
      {
        // Monday, July 8, 2024 2:00:00 PM GMT
        // additional borrow tokens (USDA, USDM, wUSDM)
        timestamp: 1720447200n,
        rateParams: {
          sLim: 50_000_000n,
          r0: parseUnits(
            "0.000220", // 2.20E-4 MORPHO per dollar supplied per day
            18
          ),
        },
        market: {
          supply: {
            subset: SubsetStrategy.CuratedMarket,
          },
          borrow: {
            subset: SubsetStrategy.CuratedMarket,
            whitelistedTokens: [
              "0x4200000000000000000000000000000000000006", // WETH
              "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC
              "0x0000206329b97DB379d5E1Bf586BbDB969C63274", // USDA
              "0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C", // USDM
              "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812", // wUSDM
            ],
            rateDivisorByToken: {
              "0x4200000000000000000000000000000000000006": 3n, // WETH
              "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": 3n, // USDC
              "0x0000206329b97DB379d5E1Bf586BbDB969C63274": 3n, // USDA
              "0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C": 3n, // USDM
              "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812": 3n, // wUSDM
            },
          },
        },
      },
      {
        // Thursday, August 1, 2024 2:00:00 PM GMT
        // lower weth borrow rate
        timestamp: 1722520800n,
        rateParams: {
          sLim: 50_000_000n,
          r0: parseUnits(
            "0.000220", // 2.20E-4 MORPHO per dollar supplied per day
            18
          ),
        },
        market: {
          supply: {
            subset: SubsetStrategy.CuratedMarket,
          },
          borrow: {
            subset: SubsetStrategy.CuratedMarket,
            whitelistedTokens: [
              "0x4200000000000000000000000000000000000006", // WETH
              "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC
              "0x0000206329b97DB379d5E1Bf586BbDB969C63274", // USDA
              "0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C", // USDM
              "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812", // wUSDM
            ],
            rateDivisorByToken: {
              "0x4200000000000000000000000000000000000006": 10n, // WETH
              "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": 3n, // USDC
              "0x0000206329b97DB379d5E1Bf586BbDB969C63274": 3n, // USDA
              "0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C": 3n, // USDM
              "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812": 3n, // wUSDM
            },
          },
        },
      },
    ],
  },
];
