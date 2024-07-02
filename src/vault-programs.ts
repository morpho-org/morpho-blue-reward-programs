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
];
