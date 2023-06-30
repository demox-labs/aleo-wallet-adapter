[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletTransactionError

# Class: WalletTransactionError

## Hierarchy

- [`WalletError`](WalletError.md)

  ↳ **`WalletTransactionError`**

## Table of contents

### Constructors

- [constructor](WalletTransactionError.md#constructor)

### Properties

- [cause](WalletTransactionError.md#cause)
- [error](WalletTransactionError.md#error)
- [message](WalletTransactionError.md#message)
- [name](WalletTransactionError.md#name)
- [stack](WalletTransactionError.md#stack)

## Constructors

### constructor

• **new WalletTransactionError**(`message?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `error?` | `any` |

#### Inherited from

[WalletError](WalletError.md).[constructor](WalletError.md#constructor)

#### Defined in

[errors.ts:5](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/errors.ts#L5)

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

[errors.ts:2](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/errors.ts#L2)

___

### message

• **message**: `string`

#### Inherited from

[WalletError](WalletError.md).[message](WalletError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string` = `'WalletTransactionError'`

#### Overrides

[WalletError](WalletError.md).[name](WalletError.md#name)

#### Defined in

[errors.ts:96](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/errors.ts#L96)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[WalletError](WalletError.md).[stack](WalletError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042
