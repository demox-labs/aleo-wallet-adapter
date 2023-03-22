[@demox-labs/aleo-wallet-adapter-leo](../README.md) / [Exports](../modules.md) / LeoWallet

# Interface: LeoWallet

## Hierarchy

- `EventEmitter`<[`LeoWalletEvents`](LeoWalletEvents.md)\>

  ↳ **`LeoWallet`**

## Table of contents

### Properties

- [publicKey](LeoWallet.md#publickey)
- [viewKey](LeoWallet.md#viewkey)

### Methods

- [addListener](LeoWallet.md#addlistener)
- [connect](LeoWallet.md#connect)
- [decrypt](LeoWallet.md#decrypt)
- [disconnect](LeoWallet.md#disconnect)
- [emit](LeoWallet.md#emit)
- [eventNames](LeoWallet.md#eventnames)
- [listenerCount](LeoWallet.md#listenercount)
- [listeners](LeoWallet.md#listeners)
- [off](LeoWallet.md#off)
- [on](LeoWallet.md#on)
- [once](LeoWallet.md#once)
- [removeAllListeners](LeoWallet.md#removealllisteners)
- [removeListener](LeoWallet.md#removelistener)
- [requestRecords](LeoWallet.md#requestrecords)
- [requestTransaction](LeoWallet.md#requesttransaction)
- [requestViewKey](LeoWallet.md#requestviewkey)
- [signMessage](LeoWallet.md#signmessage)

## Properties

### publicKey

• `Optional` **publicKey**: `string`

#### Defined in

[adapter.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L29)

___

### viewKey

• `Optional` **viewKey**: `string`

#### Defined in

[adapter.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L30)

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`LeoWallet`](LeoWallet.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### connect

▸ **connect**(`decryptPermission`, `network`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | `DecryptPermission` |
| `network` | `Testnet` |

#### Returns

`Promise`<`void`\>

#### Defined in

[adapter.ts:36](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L36)

___

### decrypt

▸ **decrypt**(`cipherText`): `Promise`<{ `text`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cipherText` | `string` |

#### Returns

`Promise`<{ `text`: `string`  }\>

#### Defined in

[adapter.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L33)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[adapter.ts:37](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L37)

___

### emit

▸ **emit**<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof [`LeoWalletEvents`](LeoWalletEvents.md)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`LeoWalletEvents`](LeoWalletEvents.md)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void`[]

Return the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

(...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWallet`](LeoWallet.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`LeoWallet`](LeoWallet.md)

Add a listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`LeoWallet`](LeoWallet.md)

Add a one-time listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`LeoWallet`](LeoWallet.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWallet`](LeoWallet.md)

Remove the listeners of a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LeoWalletEvents`](LeoWalletEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `ArgumentMap`<[`LeoWalletEvents`](LeoWalletEvents.md)\>[`Extract`<`T`, keyof [`LeoWalletEvents`](LeoWalletEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`LeoWallet`](LeoWallet.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/eventemitter3/index.d.ts:63

___

### requestRecords

▸ **requestRecords**(`program`): `Promise`<{ `records`: `any`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<{ `records`: `any`[]  }\>

#### Defined in

[adapter.ts:34](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L34)

___

### requestTransaction

▸ **requestTransaction**(`transaction`): `Promise`<{ `transactionId?`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `AleoTransaction` |

#### Returns

`Promise`<{ `transactionId?`: `string`  }\>

#### Defined in

[adapter.ts:35](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L35)

___

### requestViewKey

▸ **requestViewKey**(): `Promise`<{ `viewKey`: `string`  }\>

#### Returns

`Promise`<{ `viewKey`: `string`  }\>

#### Defined in

[adapter.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L32)

___

### signMessage

▸ **signMessage**(`message`): `Promise`<{ `signature`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<{ `signature`: `Uint8Array`  }\>

#### Defined in

[adapter.ts:31](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/wallets/leo/adapter.ts#L31)
