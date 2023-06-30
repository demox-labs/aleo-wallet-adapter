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
- [transitions](Transaction.md#transitions)

### Methods

- [createTransaction](Transaction.md#createtransaction)

## Constructors

### constructor

• **new Transaction**(`address`, `chainId`, `transitions`, `fee`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `string` |
| `transitions` | [`AleoTransition`](../interfaces/AleoTransition.md)[] |
| `fee` | `number` |

#### Defined in

[transaction.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/transaction.ts#L33)

## Properties

### address

• **address**: `string`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[address](../interfaces/AleoTransaction.md#address)

#### Defined in

[transaction.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/transaction.ts#L28)

___

### chainId

• **chainId**: `string`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[chainId](../interfaces/AleoTransaction.md#chainid)

#### Defined in

[transaction.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/transaction.ts#L29)

___

### fee

• **fee**: `number`

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[fee](../interfaces/AleoTransaction.md#fee)

#### Defined in

[transaction.ts:31](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/transaction.ts#L31)

___

### transitions

• **transitions**: [`AleoTransition`](../interfaces/AleoTransition.md)[]

#### Implementation of

[AleoTransaction](../interfaces/AleoTransaction.md).[transitions](../interfaces/AleoTransaction.md#transitions)

#### Defined in

[transaction.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/transaction.ts#L30)

## Methods

### createTransaction

▸ `Static` **createTransaction**(`address`, `chainId`, `program`, `functionName`, `inputs`, `fee`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `chainId` | `string` |
| `program` | `string` |
| `functionName` | `string` |
| `inputs` | `any`[] |
| `fee` | `number` |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[transaction.ts:40](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/transaction.ts#L40)
