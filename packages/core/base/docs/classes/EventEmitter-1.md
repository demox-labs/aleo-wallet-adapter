[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / EventEmitter

# Class: EventEmitter<EventTypes, Context\>

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventTypes` | extends [`ValidEventTypes`](../modules/EventEmitter.md#valideventtypes) = `string` \| `symbol` |
| `Context` | extends `any` = `any` |

## Hierarchy

- **`EventEmitter`**

  ↳ [`BaseWalletAdapter`](BaseWalletAdapter.md)

## Table of contents

### Constructors

- [constructor](EventEmitter-1.md#constructor)

### Properties

- [prefixed](EventEmitter-1.md#prefixed)

### Methods

- [addListener](EventEmitter-1.md#addlistener)
- [emit](EventEmitter-1.md#emit)
- [eventNames](EventEmitter-1.md#eventnames)
- [listenerCount](EventEmitter-1.md#listenercount)
- [listeners](EventEmitter-1.md#listeners)
- [off](EventEmitter-1.md#off)
- [on](EventEmitter-1.md#on)
- [once](EventEmitter-1.md#once)
- [removeAllListeners](EventEmitter-1.md#removealllisteners)
- [removeListener](EventEmitter-1.md#removelistener)

## Constructors

### constructor

• **new EventEmitter**<`EventTypes`, `Context`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventTypes` | extends [`ValidEventTypes`](../modules/EventEmitter.md#valideventtypes) = `string` \| `symbol` |
| `Context` | extends `unknown` = `any` |

## Properties

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | [`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |

#### Returns

[`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### emit

▸ **emit**<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | `Parameters`<[`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\>\> |

#### Returns

`boolean`

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): [`EventNames`](../modules/EventEmitter.md#eventnames)<`EventTypes`\>[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

[`EventNames`](../modules/EventEmitter.md#eventnames)<`EventTypes`\>[]

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventNames`](../modules/EventEmitter.md#eventnames)<`EventTypes`\> |

#### Returns

`number`

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): [`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\>[]

Return the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

[`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\>[]

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | [`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |
| `once?` | `boolean` |

#### Returns

[`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

Add a listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | [`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |

#### Returns

[`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

Add a one-time listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | [`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |

#### Returns

[`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | [`EventNames`](../modules/EventEmitter.md#eventnames)<`EventTypes`\> |

#### Returns

[`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

Remove the listeners of a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | [`EventListener`](../modules/EventEmitter.md#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |
| `once?` | `boolean` |

#### Returns

[`EventEmitter`](EventEmitter-1.md)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:63
