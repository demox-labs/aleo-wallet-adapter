[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / WalletAdapterProps

# Interface: WalletAdapterProps\<Name\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:18](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L18)

## Extended by

- [`SignerWalletAdapterProps`](SignerWalletAdapterProps.md)
- [`MessageSignerWalletAdapterProps`](MessageSignerWalletAdapterProps.md)

## Type Parameters

### Name

`Name` *extends* `string` = `string`

## Properties

### connected

> **connected**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:25](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L25)

***

### connecting

> **connecting**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:24](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L24)

***

### icon

> **icon**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:21](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L21)

***

### name

> **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:19](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L19)

***

### publicKey

> **publicKey**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:23](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L23)

***

### readyState

> **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L22)

***

### supportedTransactionVersions

> **supportedTransactionVersions**: `ReadonlySet`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:26](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L26)

***

### url

> **url**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:20](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L20)

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:28](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L28)

#### Parameters

##### decryptPermission

[`DecryptPermission`](../enumerations/DecryptPermission.md)

##### network

[`WalletAdapterNetwork`](../enumerations/WalletAdapterNetwork.md)

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:29](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L29)

#### Returns

`Promise`\<`void`\>
