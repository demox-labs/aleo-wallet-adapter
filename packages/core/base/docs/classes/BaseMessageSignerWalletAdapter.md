[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / BaseMessageSignerWalletAdapter

# Class: BaseMessageSignerWalletAdapter<Name\>

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

  ↳ **`BaseMessageSignerWalletAdapter`**

## Implements

- [`MessageSignerWalletAdapter`](../modules.md#messagesignerwalletadapter)<`Name`\>

## Table of contents

### Constructors

- [constructor](BaseMessageSignerWalletAdapter.md#constructor)

### Properties

- [connecting](BaseMessageSignerWalletAdapter.md#connecting)
- [icon](BaseMessageSignerWalletAdapter.md#icon)
- [name](BaseMessageSignerWalletAdapter.md#name)
- [publicKey](BaseMessageSignerWalletAdapter.md#publickey)
- [readyState](BaseMessageSignerWalletAdapter.md#readystate)
- [supportedTransactionVersions](BaseMessageSignerWalletAdapter.md#supportedtransactionversions)
- [url](BaseMessageSignerWalletAdapter.md#url)
- [prefixed](BaseMessageSignerWalletAdapter.md#prefixed)

### Accessors

- [connected](BaseMessageSignerWalletAdapter.md#connected)

### Methods

- [addListener](BaseMessageSignerWalletAdapter.md#addlistener)
- [connect](BaseMessageSignerWalletAdapter.md#connect)
- [decrypt](BaseMessageSignerWalletAdapter.md#decrypt)
- [disconnect](BaseMessageSignerWalletAdapter.md#disconnect)
- [emit](BaseMessageSignerWalletAdapter.md#emit)
- [eventNames](BaseMessageSignerWalletAdapter.md#eventnames)
- [getExecution](BaseMessageSignerWalletAdapter.md#getexecution)
- [listenerCount](BaseMessageSignerWalletAdapter.md#listenercount)
- [listeners](BaseMessageSignerWalletAdapter.md#listeners)
- [off](BaseMessageSignerWalletAdapter.md#off)
- [on](BaseMessageSignerWalletAdapter.md#on)
- [once](BaseMessageSignerWalletAdapter.md#once)
- [removeAllListeners](BaseMessageSignerWalletAdapter.md#removealllisteners)
- [removeListener](BaseMessageSignerWalletAdapter.md#removelistener)
- [requestBulkTransactions](BaseMessageSignerWalletAdapter.md#requestbulktransactions)
- [requestDeploy](BaseMessageSignerWalletAdapter.md#requestdeploy)
- [requestExecution](BaseMessageSignerWalletAdapter.md#requestexecution)
- [requestRecordPlaintexts](BaseMessageSignerWalletAdapter.md#requestrecordplaintexts)
- [requestRecords](BaseMessageSignerWalletAdapter.md#requestrecords)
- [requestTransaction](BaseMessageSignerWalletAdapter.md#requesttransaction)
- [requestTransactionHistory](BaseMessageSignerWalletAdapter.md#requesttransactionhistory)
- [signMessage](BaseMessageSignerWalletAdapter.md#signmessage)
- [transactionStatus](BaseMessageSignerWalletAdapter.md#transactionstatus)

## Constructors

### constructor

• **new BaseMessageSignerWalletAdapter**<`Name`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[constructor](BaseSignerWalletAdapter.md#constructor)

## Properties

### connecting

• `Abstract` **connecting**: `boolean`

#### Implementation of

MessageSignerWalletAdapter.connecting

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[connecting](BaseSignerWalletAdapter.md#connecting)

#### Defined in

[adapter.ts:72](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L72)

___

### icon

• `Abstract` **icon**: `string`

#### Implementation of

MessageSignerWalletAdapter.icon

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[icon](BaseSignerWalletAdapter.md#icon)

#### Defined in

[adapter.ts:69](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L69)

___

### name

• `Abstract` **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.name

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[name](BaseSignerWalletAdapter.md#name)

#### Defined in

[adapter.ts:67](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L67)

___

### publicKey

• `Abstract` **publicKey**: `string`

#### Implementation of

MessageSignerWalletAdapter.publicKey

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[publicKey](BaseSignerWalletAdapter.md#publickey)

#### Defined in

[adapter.ts:71](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L71)

___

### readyState

• `Abstract` **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Implementation of

MessageSignerWalletAdapter.readyState

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[readyState](BaseSignerWalletAdapter.md#readystate)

#### Defined in

[adapter.ts:70](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L70)

___

### supportedTransactionVersions

• `Abstract` **supportedTransactionVersions**: `ReadonlySet`<`any`\>

#### Implementation of

MessageSignerWalletAdapter.supportedTransactionVersions

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[supportedTransactionVersions](BaseSignerWalletAdapter.md#supportedtransactionversions)

#### Defined in

[adapter.ts:73](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L73)

___

### url

• `Abstract` **url**: `string`

#### Implementation of

MessageSignerWalletAdapter.url

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[url](BaseSignerWalletAdapter.md#url)

#### Defined in

[adapter.ts:68](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L68)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[prefixed](BaseSignerWalletAdapter.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Accessors

### connected

• `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

MessageSignerWalletAdapter.connected

#### Inherited from

BaseSignerWalletAdapter.connected

#### Defined in

[adapter.ts:75](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L75)

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.addListener

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[addListener](BaseSignerWalletAdapter.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### connect

▸ `Abstract` **connect**(`decryptPermission`, `network`, `programs?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | [`DecryptPermission`](../enums/DecryptPermission.md) |
| `network` | [`Testnet`](../enums/WalletAdapterNetwork.md#testnet) |
| `programs?` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

MessageSignerWalletAdapter.connect

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[connect](BaseSignerWalletAdapter.md#connect)

#### Defined in

[adapter.ts:79](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L79)

___

### decrypt

▸ `Abstract` **decrypt**(`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cipherText` | `string` |
| `tpk?` | `string` |
| `programId?` | `string` |
| `functionName?` | `string` |
| `index?` | `number` |

#### Returns

`Promise`<`string`\>

#### Implementation of

MessageSignerWalletAdapter.decrypt

#### Defined in

[signer.ts:50](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L50)

___

### disconnect

▸ `Abstract` **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

MessageSignerWalletAdapter.disconnect

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[disconnect](BaseSignerWalletAdapter.md#disconnect)

#### Defined in

[adapter.ts:80](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L80)

___

### emit

▸ **emit**<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>] |

#### Returns

`boolean`

#### Implementation of

MessageSignerWalletAdapter.emit

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[emit](BaseSignerWalletAdapter.md#emit)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

#### Implementation of

MessageSignerWalletAdapter.eventNames

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[eventNames](BaseSignerWalletAdapter.md#eventnames)

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### getExecution

▸ `Abstract` **getExecution**(`transactionId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

MessageSignerWalletAdapter.getExecution

#### Defined in

[signer.ts:64](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L64)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Returns

`number`

#### Implementation of

MessageSignerWalletAdapter.listenerCount

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[listenerCount](BaseSignerWalletAdapter.md#listenercount)

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void`[]

Return the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

(...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void`[]

#### Implementation of

MessageSignerWalletAdapter.listeners

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[listeners](BaseSignerWalletAdapter.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.off

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[off](BaseSignerWalletAdapter.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Add a listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.on

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[on](BaseSignerWalletAdapter.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Add a one-time listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.once

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[once](BaseSignerWalletAdapter.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.removeAllListeners

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[removeAllListeners](BaseSignerWalletAdapter.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Remove the listeners of a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.removeListener

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[removeListener](BaseSignerWalletAdapter.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:63

___

### requestBulkTransactions

▸ `Abstract` **requestBulkTransactions**(`transactions`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | [`AleoTransaction`](../interfaces/AleoTransaction.md)[] |

#### Returns

`Promise`<`string`[]\>

#### Implementation of

MessageSignerWalletAdapter.requestBulkTransactions

#### Defined in

[signer.ts:58](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L58)

___

### requestDeploy

▸ `Abstract` **requestDeploy**(`deployment`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployment` | [`AleoDeployment`](../interfaces/AleoDeployment.md) |

#### Returns

`Promise`<`string`\>

#### Implementation of

MessageSignerWalletAdapter.requestDeploy

#### Defined in

[signer.ts:60](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L60)

___

### requestExecution

▸ `Abstract` **requestExecution**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`AleoTransaction`](../interfaces/AleoTransaction.md) |

#### Returns

`Promise`<`string`\>

#### Implementation of

MessageSignerWalletAdapter.requestExecution

#### Defined in

[signer.ts:56](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L56)

___

### requestRecordPlaintexts

▸ `Abstract` **requestRecordPlaintexts**(`program`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Implementation of

MessageSignerWalletAdapter.requestRecordPlaintexts

#### Defined in

[signer.ts:66](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L66)

___

### requestRecords

▸ `Abstract` **requestRecords**(`program`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Implementation of

MessageSignerWalletAdapter.requestRecords

#### Defined in

[signer.ts:52](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L52)

___

### requestTransaction

▸ `Abstract` **requestTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`AleoTransaction`](../interfaces/AleoTransaction.md) |

#### Returns

`Promise`<`string`\>

#### Implementation of

MessageSignerWalletAdapter.requestTransaction

#### Defined in

[signer.ts:54](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L54)

___

### requestTransactionHistory

▸ `Abstract` **requestTransactionHistory**(`program`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Implementation of

MessageSignerWalletAdapter.requestTransactionHistory

#### Defined in

[signer.ts:68](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L68)

___

### signMessage

▸ `Abstract` **signMessage**(`message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

MessageSignerWalletAdapter.signMessage

#### Defined in

[signer.ts:48](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L48)

___

### transactionStatus

▸ `Abstract` **transactionStatus**(`transactionId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

MessageSignerWalletAdapter.transactionStatus

#### Defined in

[signer.ts:62](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L62)
