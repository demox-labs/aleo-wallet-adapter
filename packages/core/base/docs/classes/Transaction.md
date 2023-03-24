[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / Transaction

# Class: Transaction

## Implements

- [`AleoTransaction`](../interfaces/AleoTransaction.md)

## Table of contents

### Constructors

- [constructor](Transaction.md#constructor)

### Properties

- [address](Transaction.md#address)
- [chainId](Transaction.md#chainid)
- [transitions](Transaction.md#transitions)

### Methods

- [createTransaction](Transaction.md#createtransaction)

## Constructors

### constructor

• **new Transaction**(`address`, `chainId`, `transitions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `string` |
| `transitions` | [`AleoTransition`](../interfaces/AleoTransition.md)[] |

#### Defined in

[transaction.ts:34](https://github.com/demox-labs/leo-wallet-adapter/blob/d6f035f/packages/core/base/transaction.ts#L34)

## Properties

### address

• **address**: `string`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[address](../interfaces/AleoTransaction.md#address)

#### Defined in

[transaction.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/d6f035f/packages/core/base/transaction.ts#L30)

___

### chainId

• **chainId**: `string`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[chainId](../interfaces/AleoTransaction.md#chainid)

#### Defined in

[transaction.ts:31](https://github.com/demox-labs/leo-wallet-adapter/blob/d6f035f/packages/core/base/transaction.ts#L31)

___

### transitions

• **transitions**: [`AleoTransition`](../interfaces/AleoTransition.md)[]

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[transitions](../interfaces/AleoTransaction.md#transitions)

#### Defined in

[transaction.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/d6f035f/packages/core/base/transaction.ts#L32)

## Methods

### createTransaction

▸ `Static` **createTransaction**(`address`, `chainId`, `program`, `functionName`, `inputs`, `provingKeyUrl?`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `string` |
| `program` | `string` |
| `functionName` | `string` |
| `inputs` | `any`[] |
| `provingKeyUrl?` | `string` |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[transaction.ts:40](https://github.com/demox-labs/leo-wallet-adapter/blob/d6f035f/packages/core/base/transaction.ts#L40)
