[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / EventEmitter

# Namespace: EventEmitter

## Table of contents

### Interfaces

- [EventEmitterStatic](../interfaces/EventEmitter.EventEmitterStatic.md)
- [ListenerFn](../interfaces/EventEmitter.ListenerFn.md)

### Type Aliases

- [ArgumentMap](EventEmitter.md#argumentmap)
- [EventArgs](EventEmitter.md#eventargs)
- [EventListener](EventEmitter.md#eventlistener)
- [EventNames](EventEmitter.md#eventnames)
- [ValidEventTypes](EventEmitter.md#valideventtypes)

### Variables

- [EventEmitter](EventEmitter.md#eventemitter)

## Type Aliases

### ArgumentMap

Ƭ **ArgumentMap**<`T`\>: { [K in keyof T]: T[K] extends Function ? Parameters<T[K]\> : T[K] extends any[] ? T[K] : any[] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

node_modules/eventemitter3/index.d.ts:109

___

### EventArgs

Ƭ **EventArgs**<`T`, `K`\>: `Parameters`<[`EventListener`](EventEmitter.md#eventlistener)<`T`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ValidEventTypes`](EventEmitter.md#valideventtypes) |
| `K` | extends [`EventNames`](EventEmitter.md#eventnames)<`T`\> |

#### Defined in

node_modules/eventemitter3/index.d.ts:126

___

### EventListener

Ƭ **EventListener**<`T`, `K`\>: `T` extends `string` \| `symbol` ? (...`args`: `any`[]) => `void` : (...`args`: [`ArgumentMap`](EventEmitter.md#argumentmap)<`Exclude`<`T`, `string` \| `symbol`\>\>[`Extract`<`K`, keyof `T`\>]) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ValidEventTypes`](EventEmitter.md#valideventtypes) |
| `K` | extends [`EventNames`](EventEmitter.md#eventnames)<`T`\> |

#### Defined in

node_modules/eventemitter3/index.d.ts:117

___

### EventNames

Ƭ **EventNames**<`T`\>: `T` extends `string` \| `symbol` ? `T` : keyof `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ValidEventTypes`](EventEmitter.md#valideventtypes) |

#### Defined in

node_modules/eventemitter3/index.d.ts:105

___

### ValidEventTypes

Ƭ **ValidEventTypes**: `string` \| `symbol` \| `object`

`object` should be in either of the following forms:
```
interface EventTypes {
  'event-with-parameters': any[]
  'event-with-example-handler': (...args: any[]) => void
}
```

#### Defined in

node_modules/eventemitter3/index.d.ts:103

## Variables

### EventEmitter

• `Const` **EventEmitter**: [`EventEmitterStatic`](../interfaces/EventEmitter.EventEmitterStatic.md)

#### Defined in

node_modules/eventemitter3/index.d.ts:131
