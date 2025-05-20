[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / BaseMessageSignerWalletAdapter

# Class: `abstract` BaseMessageSignerWalletAdapter\<Name\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:46](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L46)

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Extends

- [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)\<`Name`\>

## Type Parameters

### Name

`Name` *extends* `string` = `string`

## Implements

- [`MessageSignerWalletAdapter`](../type-aliases/MessageSignerWalletAdapter.md)\<`Name`\>

## Constructors

### Constructor

> **new BaseMessageSignerWalletAdapter**\<`Name`\>(): `BaseMessageSignerWalletAdapter`\<`Name`\>

#### Returns

`BaseMessageSignerWalletAdapter`\<`Name`\>

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`constructor`](BaseSignerWalletAdapter.md#constructor)

## Properties

### connecting

> `abstract` **connecting**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:72](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L72)

#### Implementation of

`MessageSignerWalletAdapter.connecting`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connecting`](BaseSignerWalletAdapter.md#connecting)

***

### icon

> `abstract` **icon**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:69](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L69)

#### Implementation of

`MessageSignerWalletAdapter.icon`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`icon`](BaseSignerWalletAdapter.md#icon)

***

### name

> `abstract` **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:67](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L67)

#### Implementation of

`MessageSignerWalletAdapter.name`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`name`](BaseSignerWalletAdapter.md#name-1)

***

### publicKey

> `abstract` **publicKey**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:71](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L71)

#### Implementation of

`MessageSignerWalletAdapter.publicKey`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`publicKey`](BaseSignerWalletAdapter.md#publickey)

***

### readyState

> `abstract` **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:70](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L70)

#### Implementation of

`MessageSignerWalletAdapter.readyState`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`readyState`](BaseSignerWalletAdapter.md#readystate)

***

### supportedTransactionVersions

> `abstract` **supportedTransactionVersions**: `ReadonlySet`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:73](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L73)

#### Implementation of

`MessageSignerWalletAdapter.supportedTransactionVersions`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`supportedTransactionVersions`](BaseSignerWalletAdapter.md#supportedtransactionversions)

***

### url

> `abstract` **url**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:68](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L68)

#### Implementation of

`MessageSignerWalletAdapter.url`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`url`](BaseSignerWalletAdapter.md#url)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:9

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`prefixed`](BaseSignerWalletAdapter.md#prefixed)

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:75](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L75)

##### Returns

`boolean`

#### Implementation of

`MessageSignerWalletAdapter.connected`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connected`](BaseSignerWalletAdapter.md#connected)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

##### T

`T` *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.addListener`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`addListener`](BaseSignerWalletAdapter.md#addlistener)

***

### connect()

> `abstract` **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:79](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L79)

#### Parameters

##### decryptPermission

[`DecryptPermission`](../enumerations/DecryptPermission.md)

##### network

[`WalletAdapterNetwork`](../enumerations/WalletAdapterNetwork.md)

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

`MessageSignerWalletAdapter.connect`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connect`](BaseSignerWalletAdapter.md#connect)

***

### decrypt()

> `abstract` **decrypt**(`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:52](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L52)

#### Parameters

##### cipherText

`string`

##### tpk?

`string`

##### programId?

`string`

##### functionName?

`string`

##### index?

`number`

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.decrypt`

***

### disconnect()

> `abstract` **disconnect**(): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:80](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L80)

#### Returns

`Promise`\<`void`\>

#### Implementation of

`MessageSignerWalletAdapter.disconnect`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`disconnect`](BaseSignerWalletAdapter.md#disconnect)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### args

...[`ArgumentMap`](../@demox-labs/namespaces/EventEmitter/type-aliases/ArgumentMap.md)\<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>\[`Extract`\<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>\]

#### Returns

`boolean`

#### Implementation of

`MessageSignerWalletAdapter.emit`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`emit`](BaseSignerWalletAdapter.md#emit)

***

### eventNames()

> **eventNames**(): keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

#### Implementation of

`MessageSignerWalletAdapter.eventNames`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`eventNames`](BaseSignerWalletAdapter.md#eventnames)

***

### getExecution()

> `abstract` **getExecution**(`transactionId`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:68](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L68)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.getExecution`

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Returns

`number`

#### Implementation of

`MessageSignerWalletAdapter.listenerCount`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`listenerCount`](BaseSignerWalletAdapter.md#listenercount)

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

#### Returns

(...`args`) => `void`[]

#### Implementation of

`MessageSignerWalletAdapter.listeners`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`listeners`](BaseSignerWalletAdapter.md#listeners)

***

### off()

> **off**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

##### T

`T` *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn?

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.off`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`off`](BaseSignerWalletAdapter.md#off)

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.on`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`on`](BaseSignerWalletAdapter.md#on)

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.once`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`once`](BaseSignerWalletAdapter.md#once)

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.removeAllListeners`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`removeAllListeners`](BaseSignerWalletAdapter.md#removealllisteners)

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn?

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.removeListener`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`removeListener`](BaseSignerWalletAdapter.md#removelistener)

***

### requestBulkTransactions()

> `abstract` **requestBulkTransactions**(`transactions`): `Promise`\<`string`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:60](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L60)

#### Parameters

##### transactions

[`AleoTransaction`](../interfaces/AleoTransaction.md)[]

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

`MessageSignerWalletAdapter.requestBulkTransactions`

***

### requestDeploy()

> `abstract` **requestDeploy**(`deployment`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:62](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L62)

#### Parameters

##### deployment

[`AleoDeployment`](../interfaces/AleoDeployment.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.requestDeploy`

***

### requestExecution()

> `abstract` **requestExecution**(`transaction`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:58](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L58)

#### Parameters

##### transaction

[`AleoTransaction`](../interfaces/AleoTransaction.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.requestExecution`

***

### requestRecordPlaintexts()

> `abstract` **requestRecordPlaintexts**(`program`): `Promise`\<`any`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:70](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L70)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

`MessageSignerWalletAdapter.requestRecordPlaintexts`

***

### requestRecords()

> `abstract` **requestRecords**(`program`): `Promise`\<`any`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:54](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L54)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

`MessageSignerWalletAdapter.requestRecords`

***

### requestTransaction()

> `abstract` **requestTransaction**(`transaction`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:56](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L56)

#### Parameters

##### transaction

[`AleoTransaction`](../interfaces/AleoTransaction.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.requestTransaction`

***

### requestTransactionHistory()

> `abstract` **requestTransactionHistory**(`program`): `Promise`\<`any`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:72](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L72)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

`MessageSignerWalletAdapter.requestTransactionHistory`

***

### signMessage()

> `abstract` **signMessage**(`message`): `Promise`\<`Uint8Array`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:50](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L50)

#### Parameters

##### message

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>

#### Implementation of

`MessageSignerWalletAdapter.signMessage`

***

### transactionStatus()

> `abstract` **transactionStatus**(`transactionId`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:64](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L64)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.transactionStatus`

***

### transitionViewKeys()

> `abstract` **transitionViewKeys**(`transactionId`): `Promise`\<`string`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:66](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L66)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

`MessageSignerWalletAdapter.transitionViewKeys`
