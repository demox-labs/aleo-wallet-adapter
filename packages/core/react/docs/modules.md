[@demox-labs/aleo-wallet-adapter-react](README.md) / Exports

# @demox-labs/aleo-wallet-adapter-react

## Table of contents

### Interfaces

- [Wallet](interfaces/Wallet.md)
- [WalletContextState](interfaces/WalletContextState.md)
- [WalletProviderProps](interfaces/WalletProviderProps.md)

### Variables

- [WalletContext](modules.md#walletcontext)
- [WalletProvider](modules.md#walletprovider)

### Functions

- [useLocalStorage](modules.md#uselocalstorage)
- [useWallet](modules.md#usewallet)

## Variables

### WalletContext

• `Const` **WalletContext**: `any`

#### Defined in

[useWallet.ts:124](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L124)

___

### WalletProvider

• `Const` **WalletProvider**: `FC`<[`WalletProviderProps`](interfaces/WalletProviderProps.md)\>

#### Defined in

[WalletProvider.tsx:44](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/WalletProvider.tsx#L44)

## Functions

### useLocalStorage

▸ **useLocalStorage**<`T`\>(`key`, `defaultState`): [`T`, `Dispatch`<`SetStateAction`<`T`\>\>]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultState` | `T` |

#### Returns

[`T`, `Dispatch`<`SetStateAction`<`T`\>\>]

#### Defined in

[useLocalStorage.ts:4](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useLocalStorage.ts#L4)

___

### useWallet

▸ **useWallet**(): [`WalletContextState`](interfaces/WalletContextState.md)

#### Returns

[`WalletContextState`](interfaces/WalletContextState.md)

#### Defined in

[useWallet.ts:126](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L126)
