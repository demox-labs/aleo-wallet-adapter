[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / EventEmitter

# Class: EventEmitter\<EventTypes, Context\>

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:5

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Extended by

- [`BaseWalletAdapter`](BaseWalletAdapter.md)

## Type Parameters

### EventTypes

`EventTypes` *extends* [`ValidEventTypes`](../@demox-labs/namespaces/EventEmitter/type-aliases/ValidEventTypes.md) = `string` \| `symbol`

### Context

`Context` *extends* `any` = `any`

## Constructors

### Constructor

> **new EventEmitter**\<`EventTypes`, `Context`\>(): `EventEmitter`\<`EventTypes`, `Context`\>

#### Returns

`EventEmitter`\<`EventTypes`, `Context`\>

## Properties

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:9

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

[`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`this`

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### args

...`Parameters`\<[`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>\>

#### Returns

`boolean`

***

### eventNames()

> **eventNames**(): [`EventNames`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>[]

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

[`EventNames`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>[]

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

[`EventNames`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`number`

***

### listeners()

> **listeners**\<`T`\>(`event`): [`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>[]

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

#### Returns

[`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>[]

***

### off()

> **off**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn?

[`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

##### once?

`boolean`

#### Returns

`this`

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

[`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`this`

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

[`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`this`

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

[`EventNames`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`this`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: aleo-wallet-adapter/packages/core/base/node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn?

[`EventListener`](../@demox-labs/namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

##### once?

`boolean`

#### Returns

`this`
