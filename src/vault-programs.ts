import { parseUnits } from "viem";

import { Address, ChainId } from "@morpho-org/blue-rewards-core-sdk";

export type VaultRewardProgramArgs = {
  vault: Address;
  start: bigint;
  end: bigint;
  fundsSender: Address;
  urdAddress: Address;
  tokenAddress: Address;
  amount: bigint;
  chainId: ChainId;
};

/**
 * List of Vault programs
 * @example
 * [
 *  {
 *    start: 1717149233n,
 *    end: 1717149235n,
 *    fundsSender: "0x5Eb982bb1E620cC3927E5CF8A5D207e667643297",
 *    urdAddress: "0x5aC6F9F696b06538A8A0253ab495dC4c638da3be",
 *    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
 *    vault: "0xED0A7A49f2228E01a3169C4A5a72a2EbFE8756Dc",
 *    amount: parseUnits("100000", 18),
 *    blacklist: [],
 *  }
 * ]
 */
export const vaultPrograms: VaultRewardProgramArgs[] = [
  // MOONWELL
  // Moonwell Flagship USDC 4,165,000 WELL
  {
    start: 1718719200n,
    end: 1723903200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("4165000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH 4,165,000 WELL
  {
    start: 1718719200n,
    end: 1723903200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    amount: parseUnits("4165000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC 8,330,000 WELL
  {
    start: 1723903200n,
    end: 1729087200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("8330000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH 8,330,000 WELL
  {
    start: 1723903200n,
    end: 1729087200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    amount: parseUnits("8330000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC 1,500,000 WELL
  {
    start: 1726758000n,
    end: 1729087200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    amount: parseUnits("1500000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC 10,000,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("10000000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH 10,000,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    amount: parseUnits("10000000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC 3,500,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    amount: parseUnits("3500000", 18),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault - 47,777 CRV over 1 month
  {
    start: 1720544708n, // Tue Jul 09 2024 17:05:08 GMT+0000
    end: 1723223108n, // Fri Aug 09 2024 17:05:08 GMT+0000
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("47777", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 8,000,000 RSR 07/22-08/22 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("8000000", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 11,000,000 RSR 07/22-08/22 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("11000000", 18),
    chainId: ChainId.MAINNET,
  },
  // pythUSDC Vault - 25,000 PYTH 08/07-09/06 2pm UTC
  {
    start: 1723039200n,
    end: 1725631200n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    vault: "0x0FaBfEAcedf47e890c50C8120177fff69C6a1d9B",
    amount: parseUnits("25000", 6),
    chainId: ChainId.BASE,
  },
  // pythETH Vault - 25,000 PYTH 08/07-09/06 2pm UTC
  {
    start: 1723039200n,
    end: 1725631200n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    vault: "0x80D9964fEb4A507dD697b4437Fc5b25b618CE446",
    amount: parseUnits("25000", 6),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault (Epoch 2) - 30,450 CRV over 2 weeks
  {
    start: 1723223108n, // Fri Aug 09 2024 17:05:08 GMT+0000
    end: 1724432708n, // Fri Aug 23 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // llamarisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("30450", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 3) - 18,270 CRV over 2 weeks
  {
    start: 1724432708n, // Fri Aug 23 2024 17:05:08 GMT+0000
    end: 1725642308n, // Fri Sep 06 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // llamarisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("18270", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 21,875 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("21875", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 30,000 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("30000", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 4) - 14,600 CRV over 2 weeks
  {
    start: 1725642308n, // Fri Sep 06 2024 17:05:08 GMT+0000
    end: 1726851908n, // Fri Sep 20 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // llamarisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("14600", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 21,875 eUSD 09/05-09/20 6pm GMT
  {
    start: 1725559200n,
    end: 1726855200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("21875", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 30,000 eUSD 09/05-09/20 6pm GMT
  {
    start: 1725559200n,
    end: 1726855200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("30000", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 5) - 29,000 CRV over 4 weeks
  {
    start: 1726851908n, // Fri Sep 20 2024 17:05:08 GMT+0000
    end: 1729271108n, // Fri Oct 18 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("29000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 43,750 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 60,000 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 Universal USDC Vault - 17.5 uSOL 10/10-10/24 3pm GMT
  {
    start: 1728572400n,
    end: 1729782000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("17.5", 18),
    chainId: ChainId.BASE,
  },
  // Re7 eUSD Vault - 43,750 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 6) - 7500 CRV over 2 weeks
  {
    start: 1729271108n, // Fri Oct 18 2024 17:05:08 GMT+0000
    end: 1730480708n, // Fri Nov 01 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("7500", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 WETH Vault (Base) - 20,000 eUSD 10/24-11/24 6pm GMT
  {
    start: 1729792800n,
    end: 1732471200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xA2Cac0023a4797b4729Db94783405189a4203AFc",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet WETH Core Vault (Base) - 20,000 eUSD 10/24-11/24 6pm GMT
  {
    start: 1729792800n,
    end: 1732471200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0x6b13c060F13Af1fdB319F52315BbbF3fb1D88844",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault (Epoch 7) - 15_000 CRV over 4 weeks
  {
    start: 1730480708n, // Fri Nov 01 2024 17:05:08 GMT+0000
    end: 1732899908n, // Fri Nov 29 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("15000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 Universal USDC Vault - 6.52 uSOL 10/30-11/13 3pm GMT
  {
    start: 1730300400n,
    end: 1731510000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("6.5223053386", 18),
    chainId: ChainId.BASE,
  },
  // Re7 Universal USDC Vault - 525.97 uSUI 10/30-11/13 3pm GMT
  {
    start: 1730300400n,
    end: 1731510000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("525.9721846763", 18),
    chainId: ChainId.BASE,
  },
  // Pendle WBTC Vault - 1000 Pendle 11/14-11/28 6pm GMT
  {
    start: 1731607200n,
    end: 1732816800n,
    fundsSender: "0x650741eB4f6AB0776B9bF98A3280E3Cd6A2F1BF1", // mev capital ms 2
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0x808507121B80c02388fAd14726482e061B8da827", // Pendle token
    vault: "0x2f1aBb81ed86Be95bcf8178bA62C8e72D6834775", // Pendle WBTC vault
    amount: parseUnits("2000", 18),
    chainId: ChainId.MAINNET,
  },
];
