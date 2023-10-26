[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletError

# Class: WalletError

## Hierarchy

- `Error`

  ↳ **`WalletError`**

  ↳↳ [`WalletNotReadyError`](WalletNotReadyError.md)

  ↳↳ [`WalletLoadError`](WalletLoadError.md)

  ↳↳ [`WalletConfigError`](WalletConfigError.md)

  ↳↳ [`WalletConnectionError`](WalletConnectionError.md)

  ↳↳ [`WalletNotSelectedError`](WalletNotSelectedError.md)

  ↳↳ [`WalletDisconnectedError`](WalletDisconnectedError.md)

  ↳↳ [`WalletDisconnectionError`](WalletDisconnectionError.md)

  ↳↳ [`WalletAccountError`](WalletAccountError.md)

  ↳↳ [`WalletPublicKeyError`](WalletPublicKeyError.md)

  ↳↳ [`WalletKeypairError`](WalletKeypairError.md)

  ↳↳ [`WalletNotConnectedError`](WalletNotConnectedError.md)

  ↳↳ [`WalletSendTransactionError`](WalletSendTransactionError.md)

  ↳↳ [`WalletSignMessageError`](WalletSignMessageError.md)

  ↳↳ [`WalletSignTransactionError`](WalletSignTransactionError.md)

  ↳↳ [`WalletTimeoutError`](WalletTimeoutError.md)

  ↳↳ [`WalletWindowBlockedError`](WalletWindowBlockedError.md)

  ↳↳ [`WalletWindowClosedError`](WalletWindowClosedError.md)

  ↳↳ [`WalletDecryptionNotAllowedError`](WalletDecryptionNotAllowedError.md)

  ↳↳ [`WalletDecryptionError`](WalletDecryptionError.md)

  ↳↳ [`WalletRecordsError`](WalletRecordsError.md)

  ↳↳ [`WalletTransactionError`](WalletTransactionError.md)

## Table of contents

### Constructors

- [constructor](WalletError.md#constructor)

### Properties

- [cause](WalletError.md#cause)
- [error](WalletError.md#error)
- [message](WalletError.md#message)
- [name](WalletError.md#name)
- [stack](WalletError.md#stack)

## Constructors

### constructor

• **new WalletError**(`message?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `error?` | `any` |

#### Overrides

Error.constructor

#### Defined in

[errors.ts:5](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/errors.ts#L5)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### error

• **error**: `any`

#### Defined in

[errors.ts:2](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/errors.ts#L2)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042
