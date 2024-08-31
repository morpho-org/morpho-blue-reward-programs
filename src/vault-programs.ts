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
  // Moonwell Flagship USDC 12,500,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("12500000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH 12,500,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    amount: parseUnits("12500000", 18),
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
  // LlamaRisk crvUSD Vault (Epoch 3) - 14,600 CRV over 2 weeks
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
];
