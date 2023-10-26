[@demox-labs/aleo-wallet-adapter-leo](../README.md) / [Exports](../modules.md) / LeoWallet

# Interface: LeoWallet

## Hierarchy

- `EventEmitter`<[`LeoWalletEvents`](LeoWalletEvents.md)\>

  ↳ **`LeoWallet`**

## Table of contents

### Properties

- [publicKey](LeoWallet.md#publickey)

### Methods

- [addListener](LeoWallet.md#addlistener)
- [connect](LeoWallet.md#connect)
- [decrypt](LeoWallet.md#decrypt)
- [disconnect](LeoWallet.md#disconnect)
- [emit](LeoWallet.md#emit)
- [eventNames](LeoWallet.md#eventnames)
- [getExecution](LeoWallet.md#getexecution)
- [listenerCount](LeoWallet.md#listenercount)
- [listeners](LeoWallet.md#listeners)
- [off](LeoWallet.md#off)
- [on](LeoWallet.md#on)
- [once](LeoWallet.md#once)
- [removeAllListeners](LeoWallet.md#removealllisteners)
- [removeListener](LeoWallet.md#removelistener)
- [requestBulkTransactions](LeoWallet.md#requestbulktransactions)
- [requestDeploy](LeoWallet.md#requestdeploy)
- [requestExecution](LeoWallet.md#requestexecution)
- [requestRecordPlaintexts](LeoWallet.md#requestrecordplaintexts)
- [requestRecords](LeoWallet.md#requestrecords)
- [requestTransaction](LeoWallet.md#requesttransaction)
- [requestTransactionHistory](LeoWallet.md#requesttransactionhistory)
- [signMessage](LeoWallet.md#signmessage)
- [transactionStatus](LeoWallet.md#transactionstatus)

## Properties

### publicKey

• `Optional` **publicKey**: `string`

#### Defined in

[adapter.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L28)

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`LeoWallet`](LeoWallet.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### connect

▸ **connect**(`decryptPermission`, `network`, `programs?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | `DecryptPermission` |
| `network` | `Testnet` |
| `programs?` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[adapter.ts:40](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L40)

___

### decrypt

▸ **decrypt**(`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`<{ `text`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cipherText` | `string` |
| `tpk?` | `string` |
| `programId?` | `string` |
| `functionName?` | `string` |
| `index?` | `number` |

#### Returns

`Promise`<{ `text`: `string`  }\>

#### Defined in

[adapter.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L30)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[adapter.ts:41](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L41)

___

### emit

▸ **emit**<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof [`LeoWalletEvents`](LeoWalletEvents.md)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`LeoWalletEvents`](LeoWalletEvents.md)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### getExecution

▸ **getExecution**(`transactionId`): `Promise`<{ `execution`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

#### Returns

`Promise`<{ `execution`: `string`  }\>

#### Defined in

[adapter.ts:37](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L37)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void`[]

Return the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

(...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWallet`](LeoWallet.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`LeoWallet`](LeoWallet.md)

Add a listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`LeoWallet`](LeoWallet.md)

Add a one-time listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`LeoWallet`](LeoWallet.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWallet`](LeoWallet.md)

Remove the listeners of a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/eventemitter3/index.d.ts:63

___

### requestBulkTransactions

▸ **requestBulkTransactions**(`transactions`): `Promise`<{ `transactionIds?`: `string`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | `AleoTransaction`[] |

#### Returns

`Promise`<{ `transactionIds?`: `string`[]  }\>

#### Defined in

[adapter.ts:34](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L34)

___

### requestDeploy

▸ **requestDeploy**(`deployment`): `Promise`<{ `transactionId?`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployment` | `AleoDeployment` |

#### Returns

`Promise`<{ `transactionId?`: `string`  }\>

#### Defined in

[adapter.ts:35](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L35)

___

### requestExecution

▸ **requestExecution**(`transaction`): `Promise`<{ `transactionId?`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `AleoTransaction` |

#### Returns

`Promise`<{ `transactionId?`: `string`  }\>

#### Defined in

[adapter.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L33)

___

### requestRecordPlaintexts

▸ **requestRecordPlaintexts**(`program`): `Promise`<{ `records`: `any`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<{ `records`: `any`[]  }\>

#### Defined in

[adapter.ts:38](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L38)

___

### requestRecords

▸ **requestRecords**(`program`): `Promise`<{ `records`: `any`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<{ `records`: `any`[]  }\>

#### Defined in

[adapter.ts:31](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L31)

___

### requestTransaction

▸ **requestTransaction**(`transaction`): `Promise`<{ `transactionId?`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `AleoTransaction` |

#### Returns

`Promise`<{ `transactionId?`: `string`  }\>

#### Defined in

[adapter.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L32)

___

### requestTransactionHistory

▸ **requestTransactionHistory**(`program`): `Promise`<{ `transactions`: `any`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<{ `transactions`: `any`[]  }\>

#### Defined in

[adapter.ts:39](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L39)

___

### signMessage

▸ **signMessage**(`message`): `Promise`<{ `signature`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<{ `signature`: `Uint8Array`  }\>

#### Defined in

[adapter.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L29)

___

### transactionStatus

▸ **transactionStatus**(`transactionId`): `Promise`<{ `status`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

#### Returns

`Promise`<{ `status`: `string`  }\>

#### Defined in

[adapter.ts:36](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L36)
