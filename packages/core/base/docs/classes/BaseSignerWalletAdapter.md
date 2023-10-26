[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / BaseSignerWalletAdapter

# Class: BaseSignerWalletAdapter<Name\>

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`BaseWalletAdapter`](BaseWalletAdapter.md)<`Name`\>

  ↳ **`BaseSignerWalletAdapter`**

  ↳↳ [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)

## Implements

- [`SignerWalletAdapter`](../modules.md#signerwalletadapter)<`Name`\>

## Table of contents

### Constructors

- [constructor](BaseSignerWalletAdapter.md#constructor)

### Properties

- [connecting](BaseSignerWalletAdapter.md#connecting)
- [icon](BaseSignerWalletAdapter.md#icon)
- [name](BaseSignerWalletAdapter.md#name)
- [publicKey](BaseSignerWalletAdapter.md#publickey)
- [readyState](BaseSignerWalletAdapter.md#readystate)
- [supportedTransactionVersions](BaseSignerWalletAdapter.md#supportedtransactionversions)
- [url](BaseSignerWalletAdapter.md#url)
- [prefixed](BaseSignerWalletAdapter.md#prefixed)

### Accessors

- [connected](BaseSignerWalletAdapter.md#connected)

### Methods

- [addListener](BaseSignerWalletAdapter.md#addlistener)
- [connect](BaseSignerWalletAdapter.md#connect)
- [disconnect](BaseSignerWalletAdapter.md#disconnect)
- [emit](BaseSignerWalletAdapter.md#emit)
- [eventNames](BaseSignerWalletAdapter.md#eventnames)
- [listenerCount](BaseSignerWalletAdapter.md#listenercount)
- [listeners](BaseSignerWalletAdapter.md#listeners)
- [off](BaseSignerWalletAdapter.md#off)
- [on](BaseSignerWalletAdapter.md#on)
- [once](BaseSignerWalletAdapter.md#once)
- [removeAllListeners](BaseSignerWalletAdapter.md#removealllisteners)
- [removeListener](BaseSignerWalletAdapter.md#removelistener)

## Constructors

### constructor

• **new BaseSignerWalletAdapter**<`Name`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[constructor](BaseWalletAdapter.md#constructor)

## Properties

### connecting

• `Abstract` **connecting**: `boolean`

#### Implementation of

SignerWalletAdapter.connecting

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[connecting](BaseWalletAdapter.md#connecting)

#### Defined in

[adapter.ts:72](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L72)

___

### icon

• `Abstract` **icon**: `string`

#### Implementation of

SignerWalletAdapter.icon

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[icon](BaseWalletAdapter.md#icon)

#### Defined in

[adapter.ts:69](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L69)

___

### name

• `Abstract` **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Implementation of

SignerWalletAdapter.name

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[name](BaseWalletAdapter.md#name)

#### Defined in

[adapter.ts:67](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L67)

___

### publicKey

• `Abstract` **publicKey**: `string`

#### Implementation of

SignerWalletAdapter.publicKey

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[publicKey](BaseWalletAdapter.md#publickey)

#### Defined in

[adapter.ts:71](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L71)

___

### readyState

• `Abstract` **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Implementation of

SignerWalletAdapter.readyState

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[readyState](BaseWalletAdapter.md#readystate)

#### Defined in

[adapter.ts:70](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L70)

___

### supportedTransactionVersions

• `Abstract` **supportedTransactionVersions**: `ReadonlySet`<`any`\>

#### Implementation of

SignerWalletAdapter.supportedTransactionVersions

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[supportedTransactionVersions](BaseWalletAdapter.md#supportedtransactionversions)

#### Defined in

[adapter.ts:73](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L73)

___

### url

• `Abstract` **url**: `string`

#### Implementation of

SignerWalletAdapter.url

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[url](BaseWalletAdapter.md#url)

#### Defined in

[adapter.ts:68](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L68)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[prefixed](BaseWalletAdapter.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Accessors

### connected

• `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

SignerWalletAdapter.connected

#### Inherited from

BaseWalletAdapter.connected

#### Defined in

[adapter.ts:75](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L75)

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

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

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

#### Implementation of

SignerWalletAdapter.addListener

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[addListener](BaseWalletAdapter.md#addlistener)

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

SignerWalletAdapter.connect

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[connect](BaseWalletAdapter.md#connect)

#### Defined in

[adapter.ts:79](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L79)

___

### disconnect

▸ `Abstract` **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

SignerWalletAdapter.disconnect

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[disconnect](BaseWalletAdapter.md#disconnect)

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

SignerWalletAdapter.emit

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[emit](BaseWalletAdapter.md#emit)

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

SignerWalletAdapter.eventNames

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[eventNames](BaseWalletAdapter.md#eventnames)

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

SignerWalletAdapter.listenerCount

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[listenerCount](BaseWalletAdapter.md#listenercount)

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

SignerWalletAdapter.listeners

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[listeners](BaseWalletAdapter.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

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

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

#### Implementation of

SignerWalletAdapter.off

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[off](BaseWalletAdapter.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

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

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

#### Implementation of

SignerWalletAdapter.on

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[on](BaseWalletAdapter.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

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

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

#### Implementation of

SignerWalletAdapter.once

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[once](BaseWalletAdapter.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Returns

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

#### Implementation of

SignerWalletAdapter.removeAllListeners

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[removeAllListeners](BaseWalletAdapter.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

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

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

#### Implementation of

SignerWalletAdapter.removeListener

#### Inherited from

[BaseWalletAdapter](BaseWalletAdapter.md).[removeListener](BaseWalletAdapter.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:63
