[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletSignTransactionError

# Class: WalletSignTransactionError

## Hierarchy

- [`WalletError`](WalletError.md)

  ↳ **`WalletSignTransactionError`**

## Table of contents

### Constructors

- [constructor](WalletSignTransactionError.md#constructor)

### Properties

- [cause](WalletSignTransactionError.md#cause)
- [error](WalletSignTransactionError.md#error)
- [message](WalletSignTransactionError.md#message)
- [name](WalletSignTransactionError.md#name)
- [stack](WalletSignTransactionError.md#stack)

## Constructors

### constructor

• **new WalletSignTransactionError**(`message?`, `error?`)

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

• **name**: `string` = `'WalletSignTransactionError'`

#### Overrides

[WalletError](WalletError.md).[name](WalletError.md#name)

#### Defined in

[errors.ts:64](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/errors.ts#L64)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[WalletError](WalletError.md).[stack](WalletError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042
