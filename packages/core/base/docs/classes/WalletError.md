[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / WalletError

# Class: WalletError

Defined in: [aleo-wallet-adapter/packages/core/base/errors.ts:1](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/errors.ts#L1)

## Extends

- `Error`

## Extended by

- [`WalletNotReadyError`](WalletNotReadyError.md)
- [`WalletLoadError`](WalletLoadError.md)
- [`WalletConfigError`](WalletConfigError.md)
- [`WalletConnectionError`](WalletConnectionError.md)
- [`WalletNotSelectedError`](WalletNotSelectedError.md)
- [`WalletDisconnectedError`](WalletDisconnectedError.md)
- [`WalletDisconnectionError`](WalletDisconnectionError.md)
- [`WalletAccountError`](WalletAccountError.md)
- [`WalletPublicKeyError`](WalletPublicKeyError.md)
- [`WalletKeypairError`](WalletKeypairError.md)
- [`WalletNotConnectedError`](WalletNotConnectedError.md)
- [`WalletSendTransactionError`](WalletSendTransactionError.md)
- [`WalletSignMessageError`](WalletSignMessageError.md)
- [`WalletSignTransactionError`](WalletSignTransactionError.md)
- [`WalletTimeoutError`](WalletTimeoutError.md)
- [`WalletWindowBlockedError`](WalletWindowBlockedError.md)
- [`WalletWindowClosedError`](WalletWindowClosedError.md)
- [`WalletDecryptionNotAllowedError`](WalletDecryptionNotAllowedError.md)
- [`WalletDecryptionError`](WalletDecryptionError.md)
- [`WalletRecordsError`](WalletRecordsError.md)
- [`WalletTransactionError`](WalletTransactionError.md)

## Constructors

### Constructor

> **new WalletError**(`message?`, `error?`): `WalletError`

Defined in: [aleo-wallet-adapter/packages/core/base/errors.ts:5](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/errors.ts#L5)

#### Parameters

##### message?

`string`

##### error?

`any`

#### Returns

`WalletError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### error

> **error**: `any`

Defined in: [aleo-wallet-adapter/packages/core/base/errors.ts:2](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/errors.ts#L2)

***

### message

> **message**: `string`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/typescript/lib/lib.es5.d.ts:1054

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/typescript/lib/lib.es5.d.ts:1053

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/typescript/lib/lib.es5.d.ts:1055

#### Inherited from

`Error.stack`

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:98

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:100

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:91

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
