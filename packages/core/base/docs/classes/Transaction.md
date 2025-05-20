[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / Transaction

# Class: Transaction

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:28](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L28)

## Implements

- [`AleoTransaction`](../interfaces/AleoTransaction.md)

## Constructors

### Constructor

> **new Transaction**(`address`, `chainId`, `transitions`, `fee`, `feePrivate`): `Transaction`

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:35](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L35)

#### Parameters

##### address

`string`

##### chainId

`string`

##### transitions

[`AleoTransition`](../interfaces/AleoTransition.md)[]

##### fee

`number`

##### feePrivate

`boolean` = `true`

#### Returns

`Transaction`

## Properties

### address

> **address**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:29](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L29)

#### Implementation of

[`AleoTransaction`](../interfaces/AleoTransaction.md).[`address`](../interfaces/AleoTransaction.md#address)

***

### chainId

> **chainId**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:30](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L30)

#### Implementation of

[`AleoTransaction`](../interfaces/AleoTransaction.md).[`chainId`](../interfaces/AleoTransaction.md#chainid)

***

### fee

> **fee**: `number`

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:32](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L32)

#### Implementation of

[`AleoTransaction`](../interfaces/AleoTransaction.md).[`fee`](../interfaces/AleoTransaction.md#fee)

***

### feePrivate

> **feePrivate**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:33](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L33)

#### Implementation of

[`AleoTransaction`](../interfaces/AleoTransaction.md).[`feePrivate`](../interfaces/AleoTransaction.md#feeprivate)

***

### transitions

> **transitions**: [`AleoTransition`](../interfaces/AleoTransition.md)[]

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:31](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L31)

#### Implementation of

[`AleoTransaction`](../interfaces/AleoTransaction.md).[`transitions`](../interfaces/AleoTransaction.md#transitions)

## Methods

### createTransaction()

> `static` **createTransaction**(`address`, `chainId`, `program`, `functionName`, `inputs`, `fee`, `feePrivate`): `Transaction`

Defined in: [aleo-wallet-adapter/packages/core/base/transaction.ts:43](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/transaction.ts#L43)

#### Parameters

##### address

`string`

##### chainId

`string`

##### program

`string`

##### functionName

`string`

##### inputs

`any`[]

##### fee

`number`

##### feePrivate

`boolean` = `true`

#### Returns

`Transaction`
