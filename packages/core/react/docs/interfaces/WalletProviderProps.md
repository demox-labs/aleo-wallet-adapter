[@demox-labs/aleo-wallet-adapter-react](../README.md) / [Exports](../modules.md) / WalletProviderProps

# Interface: WalletProviderProps

## Table of contents

### Properties

- [autoConnect](WalletProviderProps.md#autoconnect)
- [children](WalletProviderProps.md#children)
- [decryptPermission](WalletProviderProps.md#decryptpermission)
- [localStorageKey](WalletProviderProps.md#localstoragekey)
- [network](WalletProviderProps.md#network)
- [onError](WalletProviderProps.md#onerror)
- [wallets](WalletProviderProps.md#wallets)

## Properties

### autoConnect

• `Optional` **autoConnect**: `boolean`

#### Defined in

[WalletProvider.tsx:25](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/WalletProvider.tsx#L25)

___

### children

• **children**: `ReactNode`

#### Defined in

[WalletProvider.tsx:21](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/WalletProvider.tsx#L21)

___

### decryptPermission

• `Optional` **decryptPermission**: `DecryptPermission`

#### Defined in

[WalletProvider.tsx:23](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/WalletProvider.tsx#L23)

___

### localStorageKey

• `Optional` **localStorageKey**: `string`

#### Defined in

[WalletProvider.tsx:27](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/WalletProvider.tsx#L27)

___

### network

• `Optional` **network**: `WalletAdapterNetwork`

#### Defined in

[WalletProvider.tsx:24](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/WalletProvider.tsx#L24)

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

[WalletProvider.tsx:26](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/WalletProvider.tsx#L26)

___

### wallets

• **wallets**: `Adapter`[]

#### Defined in

[WalletProvider.tsx:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/WalletProvider.tsx#L22)
