[@demox-labs/aleo-wallet-adapter-react](../README.md) / [Exports](../modules.md) / WalletProviderProps

# Interface: WalletProviderProps

## Table of contents

### Properties

- [autoConnect](WalletProviderProps.md#autoconnect)
- [children](WalletProviderProps.md#children)
- [localStorageKey](WalletProviderProps.md#localstoragekey)
- [onError](WalletProviderProps.md#onerror)
- [wallets](WalletProviderProps.md#wallets)

## Properties

### autoConnect

• `Optional` **autoConnect**: `boolean`

#### Defined in

[WalletProvider.tsx:21](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/react/WalletProvider.tsx#L21)

___

### children

• **children**: `ReactNode`

#### Defined in

[WalletProvider.tsx:19](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/react/WalletProvider.tsx#L19)

___

### localStorageKey

• `Optional` **localStorageKey**: `string`

#### Defined in

[WalletProvider.tsx:23](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/react/WalletProvider.tsx#L23)

___

### onError

• `Optional` **onError**: (`error`: `WalletError`) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `WalletError` |

##### Returns

`void`

#### Defined in

[WalletProvider.tsx:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/react/WalletProvider.tsx#L22)

___

### wallets

• **wallets**: `Adapter`[]

#### Defined in

[WalletProvider.tsx:20](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/react/WalletProvider.tsx#L20)
