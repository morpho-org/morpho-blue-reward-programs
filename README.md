## Morpho Blue reward programs

This repository allows you to create your own reward program by submitting a pull request.

<div style="text-align: center; color: red"> <h3> ⚠️ Warning ⚠️ </h3> </div>

<div style="border: 1px solid; padding: 10px; justify-content: center; align-items: center; height: 110px;">

**- The pull request must be submitted at least one week before the start of the program.**

**- The funds must be sent to the URD before the pull request is submitted. Please share the transaction link in the pull request template**

</div>

### Create a Market program

Market Programs can be added in `src/market-programs.ts` at the end of the `marketPrograms` array. You should send funds to the URD with the funds sender before the start date of the program to validate it.

You can see an example below:

```typescript
export const marketPrograms = [
  {
    start: 1717149233n,
    end: 1718149235n,
    fundsSender: "0x061060a65146b3265C62fC8f3AE977c9B27260fF",
    urdAddress: "0xURD_MAINNET_TO_MODIFY",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
    rewardAmount: {
      supply: parseUnits("300000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
];
```

### Create a Vault program

Vault Programs can be added in `src/vault-programs.ts` at the end of the `vaultPrograms` array. You should send funds to the URD with the funds sender before the start date of the program to validate it.

You can see an example below:

```typescript
export const vaultPrograms = [
  {
    start: 1718719200n,
    end: 1723903200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0xURD_BASE_TO_MODIFY",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("4165000", 18),
    chainId: ChainId.BASE,
  },
];
```

### Frequently Asked Questions

1. Where should we get the `urdAddress`?

The URDs are not tied to a specific type of program. The incentive provider must ensure that Morpho Association is the updater of the tree to prevent incorrect tree roots from being published on the URD, which could lead to loss of funds. It is recommended to use the following URDs:

- For Mainnet: [0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb](https://etherscan.io/address/0x330eefa8a787552dc5cad3c3ca644844b1e61ddb)
- For Base: [0x5400dbb270c956e8985184335a1c62aca6ce1333](https://basescan.org/address/0x5400dbb270c956e8985184335a1c62aca6ce1333)

2. Do the borrow and collateral parameters affect anything? Should we set them to 0?

Yes, they can affect the reward distribution. If your program does not intend to provide rewards for borrowing or collateral, you should set these parameters to 0. Otherwise, you can specify the amount accordingly.

3. What happens if the funds are not sent to the URD before the start date?

If funds arrive after the start date, the program won't start immediately, but the funds are not lost. They can be used to reschedule the program or initiate a new one later on.

Note that a reward program pull request will not be merged if the funds have not been sent to the URD.

4. In case of multiple rewards programs, should I send all funds?

It is up to the incentives provider. If multiple programs are created, it's essential that the URD receives the rewards dedicated to each program before their respective start dates. Even if a program starts in one month, as long as its dedicated rewards are received before its start date, it will be considered valid.
