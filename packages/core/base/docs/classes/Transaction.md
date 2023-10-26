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
- [fee](Transaction.md#fee)
- [feePrivate](Transaction.md#feeprivate)
- [transitions](Transaction.md#transitions)

### Methods

- [createTransaction](Transaction.md#createtransaction)

## Constructors

### constructor

• **new Transaction**(`address`, `chainId`, `transitions`, `fee`, `feePrivate?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `chainId` | `string` | `undefined` |
| `transitions` | [`AleoTransition`](../interfaces/AleoTransition.md)[] | `undefined` |
| `fee` | `number` | `undefined` |
| `feePrivate` | `boolean` | `true` |

#### Defined in

[transaction.ts:35](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/transaction.ts#L35)

## Properties

### address

• **address**: `string`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[address](../interfaces/AleoTransaction.md#address)

#### Defined in

[transaction.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/transaction.ts#L29)

___

### chainId

• **chainId**: `string`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[chainId](../interfaces/AleoTransaction.md#chainid)

#### Defined in

[transaction.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/transaction.ts#L30)

___

### fee

• **fee**: `number`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[fee](../interfaces/AleoTransaction.md#fee)

#### Defined in

[transaction.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/transaction.ts#L32)

___

### feePrivate

• **feePrivate**: `boolean`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[feePrivate](../interfaces/AleoTransaction.md#feeprivate)

#### Defined in

[transaction.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/transaction.ts#L33)

___

### transitions

• **transitions**: [`AleoTransition`](../interfaces/AleoTransition.md)[]

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[transitions](../interfaces/AleoTransaction.md#transitions)

#### Defined in

[transaction.ts:31](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/transaction.ts#L31)

## Methods

### createTransaction

▸ `Static` **createTransaction**(`address`, `chainId`, `program`, `functionName`, `inputs`, `fee`, `feePrivate?`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `chainId` | `string` | `undefined` |
| `program` | `string` | `undefined` |
| `functionName` | `string` | `undefined` |
| `inputs` | `any`[] | `undefined` |
| `fee` | `number` | `undefined` |
| `feePrivate` | `boolean` | `true` |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[transaction.ts:43](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/transaction.ts#L43)
