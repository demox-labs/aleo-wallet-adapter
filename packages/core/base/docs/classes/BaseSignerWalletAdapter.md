[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / BaseSignerWalletAdapter

# Class: `abstract` BaseSignerWalletAdapter\<Name\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:12](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L12)

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Extends

- [`BaseWalletAdapter`](BaseWalletAdapter.md)\<`Name`\>

## Extended by

- [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)

## Type Parameters

### Name

`Name` *extends* `string` = `string`

## Implements

- [`SignerWalletAdapter`](../type-aliases/SignerWalletAdapter.md)\<`Name`\>

## Constructors

### Constructor

> **new BaseSignerWalletAdapter**\<`Name`\>(): `BaseSignerWalletAdapter`\<`Name`\>

#### Returns

`BaseSignerWalletAdapter`\<`Name`\>

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`constructor`](BaseWalletAdapter.md#constructor)

## Properties

### connecting

> `abstract` **connecting**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:72](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L72)

#### Implementation of

`SignerWalletAdapter.connecting`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`connecting`](BaseWalletAdapter.md#connecting)

***

### icon

> `abstract` **icon**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:69](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L69)

#### Implementation of

`SignerWalletAdapter.icon`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`icon`](BaseWalletAdapter.md#icon)

***

### name

> `abstract` **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:67](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L67)

#### Implementation of

`SignerWalletAdapter.name`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`name`](BaseWalletAdapter.md#name-1)

***

### publicKey

> `abstract` **publicKey**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:71](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L71)

#### Implementation of

`SignerWalletAdapter.publicKey`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`publicKey`](BaseWalletAdapter.md#publickey)

***

### readyState

> `abstract` **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:70](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L70)

#### Implementation of

`SignerWalletAdapter.readyState`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`readyState`](BaseWalletAdapter.md#readystate)

***

### supportedTransactionVersions

> `abstract` **supportedTransactionVersions**: `ReadonlySet`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:73](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L73)

#### Implementation of

`SignerWalletAdapter.supportedTransactionVersions`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`supportedTransactionVersions`](BaseWalletAdapter.md#supportedtransactionversions)

***

### url

> `abstract` **url**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:68](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L68)

#### Implementation of

`SignerWalletAdapter.url`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`url`](BaseWalletAdapter.md#url)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:9

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`prefixed`](BaseWalletAdapter.md#prefixed)

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:75](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L75)

##### Returns

`boolean`

#### Implementation of

`SignerWalletAdapter.connected`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`connected`](BaseWalletAdapter.md#connected)

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

`SignerWalletAdapter.addListener`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`addListener`](BaseWalletAdapter.md#addlistener)

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

`SignerWalletAdapter.connect`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`connect`](BaseWalletAdapter.md#connect)

***

### disconnect()

> `abstract` **disconnect**(): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:80](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L80)

#### Returns

`Promise`\<`void`\>

#### Implementation of

`SignerWalletAdapter.disconnect`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`disconnect`](BaseWalletAdapter.md#disconnect)

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

`SignerWalletAdapter.emit`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`emit`](BaseWalletAdapter.md#emit)

***

### eventNames()

> **eventNames**(): keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

#### Implementation of

`SignerWalletAdapter.eventNames`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`eventNames`](BaseWalletAdapter.md#eventnames)

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

`SignerWalletAdapter.listenerCount`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`listenerCount`](BaseWalletAdapter.md#listenercount)

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

`SignerWalletAdapter.listeners`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`listeners`](BaseWalletAdapter.md#listeners)

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

`SignerWalletAdapter.off`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`off`](BaseWalletAdapter.md#off)

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

`SignerWalletAdapter.on`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`on`](BaseWalletAdapter.md#on)

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

`SignerWalletAdapter.once`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`once`](BaseWalletAdapter.md#once)

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

`SignerWalletAdapter.removeAllListeners`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`removeAllListeners`](BaseWalletAdapter.md#removealllisteners)

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

`SignerWalletAdapter.removeListener`

#### Inherited from

[`BaseWalletAdapter`](BaseWalletAdapter.md).[`removeListener`](BaseWalletAdapter.md#removelistener)
