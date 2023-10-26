[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletDisconnectionError

# Class: WalletDisconnectionError

## Hierarchy

- [`WalletError`](WalletError.md)

  ↳ **`WalletDisconnectionError`**

## Table of contents

### Constructors

- [constructor](WalletDisconnectionError.md#constructor)

### Properties

- [cause](WalletDisconnectionError.md#cause)
- [error](WalletDisconnectionError.md#error)
- [message](WalletDisconnectionError.md#message)
- [name](WalletDisconnectionError.md#name)
- [stack](WalletDisconnectionError.md#stack)

## Constructors

### constructor

• **new WalletDisconnectionError**(`message?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `error?` | `any` |

#### Inherited from

[WalletError](WalletError.md).[constructor](WalletError.md#constructor)

#### Defined in

[errors.ts:5](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/errors.ts#L5)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[WalletError](WalletError.md).[cause](WalletError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### error

• **error**: `any`

#### Inherited from

[WalletError](WalletError.md).[error](WalletError.md#error)

#### Defined in

[errors.ts:2](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/errors.ts#L2)

___

### message

• **message**: `string`

#### Inherited from

[WalletError](WalletError.md).[message](WalletError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string` = `'WalletDisconnectionError'`

#### Overrides

[WalletError](WalletError.md).[name](WalletError.md#name)

#### Defined in

[errors.ts:36](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/errors.ts#L36)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[WalletError](WalletError.md).[stack](WalletError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042
