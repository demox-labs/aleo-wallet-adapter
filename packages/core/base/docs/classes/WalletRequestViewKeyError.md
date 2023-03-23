[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletRequestViewKeyError

# Class: WalletRequestViewKeyError

## Hierarchy

- [`WalletError`](WalletError.md)

  ↳ **`WalletRequestViewKeyError`**

## Table of contents

### Constructors

- [constructor](WalletRequestViewKeyError.md#constructor)

### Properties

- [cause](WalletRequestViewKeyError.md#cause)
- [error](WalletRequestViewKeyError.md#error)
- [message](WalletRequestViewKeyError.md#message)
- [name](WalletRequestViewKeyError.md#name)
- [stack](WalletRequestViewKeyError.md#stack)

## Constructors

### constructor

• **new WalletRequestViewKeyError**(`message?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `error?` | `any` |

#### Inherited from

[WalletError](WalletError.md).[constructor](WalletError.md#constructor)

#### Defined in

[errors.ts:5](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/base/errors.ts#L5)

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

[errors.ts:2](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/base/errors.ts#L2)

___

### message

• **message**: `string`

#### Inherited from

[WalletError](WalletError.md).[message](WalletError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string` = `'WalletRequestViewKeyError'`

#### Overrides

[WalletError](WalletError.md).[name](WalletError.md#name)

#### Defined in

[errors.ts:68](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/base/errors.ts#L68)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[WalletError](WalletError.md).[stack](WalletError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042
