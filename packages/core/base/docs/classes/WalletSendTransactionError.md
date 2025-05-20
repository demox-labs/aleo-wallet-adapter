[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / WalletSendTransactionError

# Class: WalletSendTransactionError

Defined in: [aleo-wallet-adapter/packages/core/base/errors.ts:55](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/errors.ts#L55)

## Extends

- [`WalletError`](WalletError.md)

## Constructors

### Constructor

> **new WalletSendTransactionError**(`message?`, `error?`): `WalletSendTransactionError`

Defined in: [aleo-wallet-adapter/packages/core/base/errors.ts:5](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/errors.ts#L5)

#### Parameters

##### message?

`string`

##### error?

`any`

#### Returns

`WalletSendTransactionError`

#### Inherited from

[`WalletError`](WalletError.md).[`constructor`](WalletError.md#constructor)

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`WalletError`](WalletError.md).[`cause`](WalletError.md#cause)

***

### error

> **error**: `any`

Defined in: [aleo-wallet-adapter/packages/core/base/errors.ts:2](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/errors.ts#L2)

#### Inherited from

[`WalletError`](WalletError.md).[`error`](WalletError.md#error)

***

### message

> **message**: `string`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/typescript/lib/lib.es5.d.ts:1054

#### Inherited from

[`WalletError`](WalletError.md).[`message`](WalletError.md#message)

***

### name

> **name**: `string` = `'WalletSendTransactionError'`

Defined in: [aleo-wallet-adapter/packages/core/base/errors.ts:56](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/errors.ts#L56)

#### Overrides

[`WalletError`](WalletError.md).[`name`](WalletError.md#name)

***

### stack?

> `optional` **stack**: `string`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/typescript/lib/lib.es5.d.ts:1055

#### Inherited from

[`WalletError`](WalletError.md).[`stack`](WalletError.md#stack)

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

[`WalletError`](WalletError.md).[`prepareStackTrace`](WalletError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:100

#### Inherited from

[`WalletError`](WalletError.md).[`stackTraceLimit`](WalletError.md#stacktracelimit)

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

[`WalletError`](WalletError.md).[`captureStackTrace`](WalletError.md#capturestacktrace)
