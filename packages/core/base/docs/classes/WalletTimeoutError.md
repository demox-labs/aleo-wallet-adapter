[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletTimeoutError

# Class: WalletTimeoutError

## Hierarchy

- [`WalletError`](WalletError.md)

  ↳ **`WalletTimeoutError`**

## Table of contents

### Constructors

- [constructor](WalletTimeoutError.md#constructor)

### Properties

- [cause](WalletTimeoutError.md#cause)
- [error](WalletTimeoutError.md#error)
- [message](WalletTimeoutError.md#message)
- [name](WalletTimeoutError.md#name)
- [stack](WalletTimeoutError.md#stack)
- [prepareStackTrace](WalletTimeoutError.md#preparestacktrace)
- [stackTraceLimit](WalletTimeoutError.md#stacktracelimit)

### Methods

- [captureStackTrace](WalletTimeoutError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletTimeoutError**(`message?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `error?` | `any` |

#### Inherited from

[WalletError](WalletError.md).[constructor](WalletError.md#constructor)

#### Defined in

[aleo-wallet-adapter/packages/core/base/errors.ts:5](https://github.com/demox-labs/aleo-wallet-adapter/blob/fc6b47e/packages/core/base/errors.ts#L5)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[WalletError](WalletError.md).[cause](WalletError.md#cause)

#### Defined in

aleo-wallet-adapter/packages/core/base/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### error

• **error**: `any`

#### Inherited from

[WalletError](WalletError.md).[error](WalletError.md#error)

#### Defined in

[aleo-wallet-adapter/packages/core/base/errors.ts:2](https://github.com/demox-labs/aleo-wallet-adapter/blob/fc6b47e/packages/core/base/errors.ts#L2)

___

### message

• **message**: `string`

#### Inherited from

[WalletError](WalletError.md).[message](WalletError.md#message)

#### Defined in

aleo-wallet-adapter/packages/core/base/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string` = `'WalletTimeoutError'`

#### Overrides

[WalletError](WalletError.md).[name](WalletError.md#name)

#### Defined in

[aleo-wallet-adapter/packages/core/base/errors.ts:68](https://github.com/demox-labs/aleo-wallet-adapter/blob/fc6b47e/packages/core/base/errors.ts#L68)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[WalletError](WalletError.md).[stack](WalletError.md#stack)

#### Defined in

aleo-wallet-adapter/packages/core/base/node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[WalletError](WalletError.md).[prepareStackTrace](WalletError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:98

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[WalletError](WalletError.md).[stackTraceLimit](WalletError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:100

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[WalletError](WalletError.md).[captureStackTrace](WalletError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:91
