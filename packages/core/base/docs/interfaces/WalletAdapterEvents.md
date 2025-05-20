[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / WalletAdapterEvents

# Interface: WalletAdapterEvents

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:7](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L7)

## Methods

### connect()

> **connect**(`publicKey`, `programs?`): `void`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:8](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L8)

#### Parameters

##### publicKey

`string`

##### programs?

`string`[]

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:9](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L9)

#### Returns

`void`

***

### error()

> **error**(`error`): `void`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:10](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L10)

#### Parameters

##### error

[`WalletError`](../classes/WalletError.md)

#### Returns

`void`

***

### readyStateChange()

> **readyStateChange**(`readyState`): `void`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:11](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L11)

#### Parameters

##### readyState

[`WalletReadyState`](../enumerations/WalletReadyState.md)

#### Returns

`void`
