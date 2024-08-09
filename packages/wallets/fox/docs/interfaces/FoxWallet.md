[**@foxwallet/aleo-wallet-adapter-fox**](../README.md) • **Docs**

***

[@foxwallet/aleo-wallet-adapter-fox](../globals.md) / FoxWallet

# Interface: FoxWallet

## Extends

- `EventEmitter`\<[`FoxEvents`](FoxEvents.md)\>

## Properties

### publicKey?

> `optional` **publicKey**: `string`

#### Defined in

[adapter.ts:29](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L29)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* keyof [`FoxEvents`](FoxEvents.md)

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.addListener`

#### Defined in

node\_modules/eventemitter3/index.d.ts:45

***

### connect()

> **connect**(`decryptPermission`, `network`, `programs`?): `Promise`\<`void`\>

#### Parameters

• **decryptPermission**: `DecryptPermission`

• **network**: `WalletAdapterNetwork`

• **programs?**: `string`[]

#### Returns

`Promise`\<`void`\>

#### Defined in

[adapter.ts:42](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L42)

***

### decrypt()

> **decrypt**(`cipherText`, `tpk`?, `programId`?, `functionName`?, `index`?): `Promise`\<`object`\>

#### Parameters

• **cipherText**: `string`

• **tpk?**: `string`

• **programId?**: `string`

• **functionName?**: `string`

• **index?**: `number`

#### Returns

`Promise`\<`object`\>

##### text

> **text**: `string`

#### Defined in

[adapter.ts:32](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L32)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[adapter.ts:43](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L43)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`FoxEvents`](FoxEvents.md)

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<[`FoxEvents`](FoxEvents.md)\>\[`Extract`\<`T`, keyof [`FoxEvents`](FoxEvents.md)\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

#### Defined in

node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): keyof [`FoxEvents`](FoxEvents.md)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`FoxEvents`](FoxEvents.md)[]

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node\_modules/eventemitter3/index.d.ts:15

***

### getExecution()

> **getExecution**(`transactionId`): `Promise`\<`object`\>

#### Parameters

• **transactionId**: `string`

#### Returns

`Promise`\<`object`\>

##### execution

> **execution**: `string`

#### Defined in

[adapter.ts:39](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L39)

***

### isAvailable()

> **isAvailable**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[adapter.ts:30](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L30)

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: keyof [`FoxEvents`](FoxEvents.md)

#### Returns

`number`

#### Inherited from

`EventEmitter.listenerCount`

#### Defined in

node\_modules/eventemitter3/index.d.ts:27

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`FoxEvents`](FoxEvents.md)

#### Parameters

• **event**: `T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`EventEmitter.listeners`

#### Defined in

node\_modules/eventemitter3/index.d.ts:20

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* keyof [`FoxEvents`](FoxEvents.md)

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`EventEmitter.off`

#### Defined in

node\_modules/eventemitter3/index.d.ts:69

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`FoxEvents`](FoxEvents.md)

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.on`

#### Defined in

node\_modules/eventemitter3/index.d.ts:40

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`FoxEvents`](FoxEvents.md)

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.once`

#### Defined in

node\_modules/eventemitter3/index.d.ts:54

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: keyof [`FoxEvents`](FoxEvents.md)

#### Returns

`this`

#### Inherited from

`EventEmitter.removeAllListeners`

#### Defined in

node\_modules/eventemitter3/index.d.ts:79

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* keyof [`FoxEvents`](FoxEvents.md)

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`EventEmitter.removeListener`

#### Defined in

node\_modules/eventemitter3/index.d.ts:63

***

### requestBulkTransactions()

> **requestBulkTransactions**(`transactions`): `Promise`\<`object`\>

#### Parameters

• **transactions**: `AleoTransaction`[]

#### Returns

`Promise`\<`object`\>

##### transactionIds?

> `optional` **transactionIds**: `string`[]

#### Defined in

[adapter.ts:36](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L36)

***

### requestDeploy()

> **requestDeploy**(`deployment`): `Promise`\<`object`\>

#### Parameters

• **deployment**: `AleoDeployment`

#### Returns

`Promise`\<`object`\>

##### transactionId?

> `optional` **transactionId**: `string`

#### Defined in

[adapter.ts:37](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L37)

***

### requestExecution()

> **requestExecution**(`transaction`): `Promise`\<`object`\>

#### Parameters

• **transaction**: `AleoTransaction`

#### Returns

`Promise`\<`object`\>

##### transactionId?

> `optional` **transactionId**: `string`

#### Defined in

[adapter.ts:35](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L35)

***

### requestRecordPlaintexts()

> **requestRecordPlaintexts**(`program`): `Promise`\<`object`\>

#### Parameters

• **program**: `string`

#### Returns

`Promise`\<`object`\>

##### records

> **records**: `any`[]

#### Defined in

[adapter.ts:40](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L40)

***

### requestRecords()

> **requestRecords**(`program`): `Promise`\<`object`\>

#### Parameters

• **program**: `string`

#### Returns

`Promise`\<`object`\>

##### records

> **records**: `any`[]

#### Defined in

[adapter.ts:33](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L33)

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<`object`\>

#### Parameters

• **transaction**: `AleoTransaction`

#### Returns

`Promise`\<`object`\>

##### transactionId?

> `optional` **transactionId**: `string`

#### Defined in

[adapter.ts:34](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L34)

***

### requestTransactionHistory()

> **requestTransactionHistory**(`program`): `Promise`\<`object`\>

#### Parameters

• **program**: `string`

#### Returns

`Promise`\<`object`\>

##### transactions

> **transactions**: `any`[]

#### Defined in

[adapter.ts:41](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L41)

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`object`\>

#### Parameters

• **message**: `Uint8Array`

#### Returns

`Promise`\<`object`\>

##### signature

> **signature**: `Uint8Array`

#### Defined in

[adapter.ts:31](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L31)

***

### transactionStatus()

> **transactionStatus**(`transactionId`): `Promise`\<`object`\>

#### Parameters

• **transactionId**: `string`

#### Returns

`Promise`\<`object`\>

##### status

> **status**: `string`

#### Defined in

[adapter.ts:38](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L38)
