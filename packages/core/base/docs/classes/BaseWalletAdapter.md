[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / BaseWalletAdapter

# Class: BaseWalletAdapter<Name\>

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`EventEmitter`](EventEmitter-1.md)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>

  ↳ **`BaseWalletAdapter`**

  ↳↳ [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)

## Implements

- [`WalletAdapter`](../modules.md#walletadapter)<`Name`\>

## Table of contents

### Constructors

- [constructor](BaseWalletAdapter.md#constructor)

### Properties

- [connecting](BaseWalletAdapter.md#connecting)
- [icon](BaseWalletAdapter.md#icon)
- [name](BaseWalletAdapter.md#name)
- [publicKey](BaseWalletAdapter.md#publickey)
- [readyState](BaseWalletAdapter.md#readystate)
- [supportedTransactionVersions](BaseWalletAdapter.md#supportedtransactionversions)
- [url](BaseWalletAdapter.md#url)
- [prefixed](BaseWalletAdapter.md#prefixed)

### Accessors

- [connected](BaseWalletAdapter.md#connected)

### Methods

- [addListener](BaseWalletAdapter.md#addlistener)
- [connect](BaseWalletAdapter.md#connect)
- [disconnect](BaseWalletAdapter.md#disconnect)
- [emit](BaseWalletAdapter.md#emit)
- [eventNames](BaseWalletAdapter.md#eventnames)
- [listenerCount](BaseWalletAdapter.md#listenercount)
- [listeners](BaseWalletAdapter.md#listeners)
- [off](BaseWalletAdapter.md#off)
- [on](BaseWalletAdapter.md#on)
- [once](BaseWalletAdapter.md#once)
- [removeAllListeners](BaseWalletAdapter.md#removealllisteners)
- [removeListener](BaseWalletAdapter.md#removelistener)

## Constructors

### constructor

• **new BaseWalletAdapter**<`Name`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Inherited from

[EventEmitter](EventEmitter-1.md).[constructor](EventEmitter-1.md#constructor)

## Properties

### connecting

• `Abstract` **connecting**: `boolean`

#### Implementation of

WalletAdapter.connecting

#### Defined in

[adapter.ts:72](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L72)

___

### icon

• `Abstract` **icon**: `string`

#### Implementation of

WalletAdapter.icon

#### Defined in

[adapter.ts:69](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L69)

___

### name

• `Abstract` **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Implementation of

WalletAdapter.name

#### Defined in

[adapter.ts:67](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L67)

___

### publicKey

• `Abstract` **publicKey**: `string`

#### Implementation of

WalletAdapter.publicKey

#### Defined in

[adapter.ts:71](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L71)

___

### readyState

• `Abstract` **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Implementation of

WalletAdapter.readyState

#### Defined in

[adapter.ts:70](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L70)

___

### supportedTransactionVersions

• `Abstract` **supportedTransactionVersions**: `ReadonlySet`<`any`\>

#### Implementation of

WalletAdapter.supportedTransactionVersions

#### Defined in

[adapter.ts:73](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L73)

___

### url

• `Abstract` **url**: `string`

#### Implementation of

WalletAdapter.url

#### Defined in

[adapter.ts:68](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L68)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[EventEmitter](EventEmitter-1.md).[prefixed](EventEmitter-1.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Accessors

### connected

• `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

WalletAdapter.connected

#### Defined in

[adapter.ts:75](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L75)

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

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

[`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

#### Implementation of

WalletAdapter.addListener

#### Inherited from

[EventEmitter](EventEmitter-1.md).[addListener](EventEmitter-1.md#addlistener)

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

WalletAdapter.connect

#### Defined in

[adapter.ts:79](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L79)

___

### disconnect

▸ `Abstract` **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

WalletAdapter.disconnect

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

WalletAdapter.emit

#### Inherited from

[EventEmitter](EventEmitter-1.md).[emit](EventEmitter-1.md#emit)

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

WalletAdapter.eventNames

#### Inherited from

[EventEmitter](EventEmitter-1.md).[eventNames](EventEmitter-1.md#eventnames)

#### Defined in

node_modules/eventemitter3/index.d.ts:15

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

WalletAdapter.listenerCount

#### Inherited from

[EventEmitter](EventEmitter-1.md).[listenerCount](EventEmitter-1.md#listenercount)

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

WalletAdapter.listeners

#### Inherited from

[EventEmitter](EventEmitter-1.md).[listeners](EventEmitter-1.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

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

[`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

#### Implementation of

WalletAdapter.off

#### Inherited from

[EventEmitter](EventEmitter-1.md).[off](EventEmitter-1.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

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

[`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

#### Implementation of

WalletAdapter.on

#### Inherited from

[EventEmitter](EventEmitter-1.md).[on](EventEmitter-1.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

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

[`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

#### Implementation of

WalletAdapter.once

#### Inherited from

[EventEmitter](EventEmitter-1.md).[once](EventEmitter-1.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Returns

[`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

#### Implementation of

WalletAdapter.removeAllListeners

#### Inherited from

[EventEmitter](EventEmitter-1.md).[removeAllListeners](EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

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

[`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

#### Implementation of

WalletAdapter.removeListener

#### Inherited from

[EventEmitter](EventEmitter-1.md).[removeListener](EventEmitter-1.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:63
