[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletPublicKeyError

# Class: WalletPublicKeyError

## Hierarchy

- [`WalletError`](WalletError.md)

  ↳ **`WalletPublicKeyError`**

## Table of contents

### Constructors

- [constructor](WalletPublicKeyError.md#constructor)

### Properties

- [cause](WalletPublicKeyError.md#cause)
- [error](WalletPublicKeyError.md#error)
- [message](WalletPublicKeyError.md#message)
- [name](WalletPublicKeyError.md#name)
- [stack](WalletPublicKeyError.md#stack)
- [prepareStackTrace](WalletPublicKeyError.md#preparestacktrace)
- [stackTraceLimit](WalletPublicKeyError.md#stacktracelimit)

### Methods

- [captureStackTrace](WalletPublicKeyError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletPublicKeyError**(`message?`, `error?`)

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

• **name**: `string` = `'WalletPublicKeyError'`

#### Overrides

[WalletError](WalletError.md).[name](WalletError.md#name)

#### Defined in

[aleo-wallet-adapter/packages/core/base/errors.ts:44](https://github.com/demox-labs/aleo-wallet-adapter/blob/fc6b47e/packages/core/base/errors.ts#L44)

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
