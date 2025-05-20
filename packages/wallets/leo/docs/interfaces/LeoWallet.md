[**@demox-labs/aleo-wallet-adapter-leo**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-leo](../README.md) / LeoWallet

# Interface: LeoWallet

Defined in: [adapter.ts:28](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L28)

## Extends

- `EventEmitter`\<[`LeoWalletEvents`](LeoWalletEvents.md)\>

## Properties

### publicKey?

> `optional` **publicKey**: `string`

Defined in: [adapter.ts:29](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L29)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

##### T

`T` *extends* keyof [`LeoWalletEvents`](LeoWalletEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`EventEmitter.addListener`

***

### connect()

> **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

Defined in: [adapter.ts:43](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L43)

#### Parameters

##### decryptPermission

`DecryptPermission`

##### network

`WalletAdapterNetwork`

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### decrypt()

> **decrypt**(`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`\<\{ `text`: `string`; \}\>

Defined in: [adapter.ts:32](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L32)

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

`Promise`\<\{ `text`: `string`; \}\>

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [adapter.ts:44](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L44)

#### Returns

`Promise`\<`void`\>

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`LeoWalletEvents`](LeoWalletEvents.md)

#### Parameters

##### event

`T`

##### args

...`ArgumentMap`\<[`LeoWalletEvents`](LeoWalletEvents.md)\>\[`Extract`\<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

***

### eventNames()

> **eventNames**(): keyof [`LeoWalletEvents`](LeoWalletEvents.md)[]

Defined in: node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`LeoWalletEvents`](LeoWalletEvents.md)[]

#### Inherited from

`EventEmitter.eventNames`

***

### getExecution()

> **getExecution**(`transactionId`): `Promise`\<\{ `execution`: `string`; \}\>

Defined in: [adapter.ts:40](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L40)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<\{ `execution`: `string`; \}\>

***

### isAvailable()

> **isAvailable**(): `Promise`\<`boolean`\>

Defined in: [adapter.ts:30](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L30)

#### Returns

`Promise`\<`boolean`\>

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

keyof [`LeoWalletEvents`](LeoWalletEvents.md)

#### Returns

`number`

#### Inherited from

`EventEmitter.listenerCount`

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Defined in: node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`LeoWalletEvents`](LeoWalletEvents.md)

#### Parameters

##### event

`T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`EventEmitter.listeners`

***

### off()

> **off**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

##### T

`T` *extends* keyof [`LeoWalletEvents`](LeoWalletEvents.md)

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

#### Inherited from

`EventEmitter.off`

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`LeoWalletEvents`](LeoWalletEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`EventEmitter.on`

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`LeoWalletEvents`](LeoWalletEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`EventEmitter.once`

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

keyof [`LeoWalletEvents`](LeoWalletEvents.md)

#### Returns

`this`

#### Inherited from

`EventEmitter.removeAllListeners`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

##### T

`T` *extends* keyof [`LeoWalletEvents`](LeoWalletEvents.md)

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

#### Inherited from

`EventEmitter.removeListener`

***

### requestBulkTransactions()

> **requestBulkTransactions**(`transactions`): `Promise`\<\{ `transactionIds?`: `string`[]; \}\>

Defined in: [adapter.ts:36](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L36)

#### Parameters

##### transactions

`AleoTransaction`[]

#### Returns

`Promise`\<\{ `transactionIds?`: `string`[]; \}\>

***

### requestDeploy()

> **requestDeploy**(`deployment`): `Promise`\<\{ `transactionId?`: `string`; \}\>

Defined in: [adapter.ts:37](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L37)

#### Parameters

##### deployment

`AleoDeployment`

#### Returns

`Promise`\<\{ `transactionId?`: `string`; \}\>

***

### requestExecution()

> **requestExecution**(`transaction`): `Promise`\<\{ `transactionId?`: `string`; \}\>

Defined in: [adapter.ts:35](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L35)

#### Parameters

##### transaction

`AleoTransaction`

#### Returns

`Promise`\<\{ `transactionId?`: `string`; \}\>

***

### requestRecordPlaintexts()

> **requestRecordPlaintexts**(`program`): `Promise`\<\{ `records`: `any`[]; \}\>

Defined in: [adapter.ts:41](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L41)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<\{ `records`: `any`[]; \}\>

***

### requestRecords()

> **requestRecords**(`program`): `Promise`\<\{ `records`: `any`[]; \}\>

Defined in: [adapter.ts:33](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L33)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<\{ `records`: `any`[]; \}\>

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<\{ `transactionId?`: `string`; \}\>

Defined in: [adapter.ts:34](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L34)

#### Parameters

##### transaction

`AleoTransaction`

#### Returns

`Promise`\<\{ `transactionId?`: `string`; \}\>

***

### requestTransactionHistory()

> **requestTransactionHistory**(`program`): `Promise`\<\{ `transactions`: `any`[]; \}\>

Defined in: [adapter.ts:42](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L42)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<\{ `transactions`: `any`[]; \}\>

***

### signMessage()

> **signMessage**(`message`): `Promise`\<\{ `signature`: `Uint8Array`; \}\>

Defined in: [adapter.ts:31](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L31)

#### Parameters

##### message

`Uint8Array`

#### Returns

`Promise`\<\{ `signature`: `Uint8Array`; \}\>

***

### transactionStatus()

> **transactionStatus**(`transactionId`): `Promise`\<\{ `status`: `string`; \}\>

Defined in: [adapter.ts:38](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L38)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<\{ `status`: `string`; \}\>

***

### transitionViewKeys()

> **transitionViewKeys**(`transactionId`): `Promise`\<\{ `viewKeys?`: `string`[]; \}\>

Defined in: [adapter.ts:39](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L39)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<\{ `viewKeys?`: `string`[]; \}\>
