[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / BaseWalletAdapter

# Class: `abstract` BaseWalletAdapter\<Name\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:63](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L63)

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Extends

- [`EventEmitter`](EventEmitter.md)\<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>

## Extended by

- [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)

## Type Parameters

### Name

`Name` *extends* `string` = `string`

## Implements

- [`WalletAdapter`](../type-aliases/WalletAdapter.md)\<`Name`\>

## Constructors

### Constructor

> **new BaseWalletAdapter**\<`Name`\>(): `BaseWalletAdapter`\<`Name`\>

#### Returns

`BaseWalletAdapter`\<`Name`\>

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`constructor`](EventEmitter.md#constructor)

## Properties

### connecting

> `abstract` **connecting**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:72](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L72)

#### Implementation of

`WalletAdapter.connecting`

***

### icon

> `abstract` **icon**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:69](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L69)

#### Implementation of

`WalletAdapter.icon`

***

### name

> `abstract` **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:67](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L67)

#### Implementation of

`WalletAdapter.name`

***

### publicKey

> `abstract` **publicKey**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:71](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L71)

#### Implementation of

`WalletAdapter.publicKey`

***

### readyState

> `abstract` **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:70](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L70)

#### Implementation of

`WalletAdapter.readyState`

***

### supportedTransactionVersions

> `abstract` **supportedTransactionVersions**: `ReadonlySet`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:73](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L73)

#### Implementation of

`WalletAdapter.supportedTransactionVersions`

***

### url

> `abstract` **url**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:68](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L68)

#### Implementation of

`WalletAdapter.url`

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:9

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`prefixed`](EventEmitter.md#prefixed)

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:75](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L75)

##### Returns

`boolean`

#### Implementation of

`WalletAdapter.connected`

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

`WalletAdapter.addListener`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`addListener`](EventEmitter.md#addlistener)

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

`WalletAdapter.connect`

***

### disconnect()

> `abstract` **disconnect**(): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:80](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L80)

#### Returns

`Promise`\<`void`\>

#### Implementation of

`WalletAdapter.disconnect`

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

`WalletAdapter.emit`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

***

### eventNames()

> **eventNames**(): keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

#### Implementation of

`WalletAdapter.eventNames`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`eventNames`](EventEmitter.md#eventnames)

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

`WalletAdapter.listenerCount`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`listenerCount`](EventEmitter.md#listenercount)

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

`WalletAdapter.listeners`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`listeners`](EventEmitter.md#listeners)

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

`WalletAdapter.off`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

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

`WalletAdapter.on`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

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

`WalletAdapter.once`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`once`](EventEmitter.md#once)

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

`WalletAdapter.removeAllListeners`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`removeAllListeners`](EventEmitter.md#removealllisteners)

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

`WalletAdapter.removeListener`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`removeListener`](EventEmitter.md#removelistener)
