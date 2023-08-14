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

[useWallet.ts:127](https://github.com/demox-labs/leo-wallet-adapter/blob/21dd6ca/packages/core/react/useWallet.ts#L127)

___

### WalletProvider

• `Const` **WalletProvider**: `FC`<[`WalletProviderProps`](interfaces/WalletProviderProps.md)\>

#### Defined in

[WalletProvider.tsx:45](https://github.com/demox-labs/leo-wallet-adapter/blob/21dd6ca/packages/core/react/WalletProvider.tsx#L45)

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

[useLocalStorage.ts:4](https://github.com/demox-labs/leo-wallet-adapter/blob/21dd6ca/packages/core/react/useLocalStorage.ts#L4)

___

### useWallet

▸ **useWallet**(): [`WalletContextState`](interfaces/WalletContextState.md)

#### Returns

[`WalletContextState`](interfaces/WalletContextState.md)

#### Defined in

[useWallet.ts:129](https://github.com/demox-labs/leo-wallet-adapter/blob/21dd6ca/packages/core/react/useWallet.ts#L129)
