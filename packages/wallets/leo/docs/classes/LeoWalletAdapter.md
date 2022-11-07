[@demox-labs/aleo-wallet-adapter-leo](../README.md) / [Exports](../modules.md) / LeoWalletAdapter

# Class: LeoWalletAdapter

## Hierarchy

- `BaseMessageSignerWalletAdapter`

  ↳ **`LeoWalletAdapter`**

## Table of contents

### Constructors

- [constructor](LeoWalletAdapter.md#constructor)

### Properties

- [\_connecting](LeoWalletAdapter.md#_connecting)
- [\_decryptPermission](LeoWalletAdapter.md#_decryptpermission)
- [\_publicKey](LeoWalletAdapter.md#_publickey)
- [\_readyState](LeoWalletAdapter.md#_readystate)
- [\_viewKey](LeoWalletAdapter.md#_viewkey)
- [\_wallet](LeoWalletAdapter.md#_wallet)
- [icon](LeoWalletAdapter.md#icon)
- [name](LeoWalletAdapter.md#name)
- [supportedTransactionVersions](LeoWalletAdapter.md#supportedtransactionversions)
- [url](LeoWalletAdapter.md#url)
- [prefixed](LeoWalletAdapter.md#prefixed)

### Accessors

- [connected](LeoWalletAdapter.md#connected)
- [connecting](LeoWalletAdapter.md#connecting)
- [decryptPermission](LeoWalletAdapter.md#decryptpermission)
- [publicKey](LeoWalletAdapter.md#publickey)
- [readyState](LeoWalletAdapter.md#readystate)
- [viewKey](LeoWalletAdapter.md#viewkey)

### Methods

- [addListener](LeoWalletAdapter.md#addlistener)
- [connect](LeoWalletAdapter.md#connect)
- [decrypt](LeoWalletAdapter.md#decrypt)
- [disconnect](LeoWalletAdapter.md#disconnect)
- [emit](LeoWalletAdapter.md#emit)
- [eventNames](LeoWalletAdapter.md#eventnames)
- [listenerCount](LeoWalletAdapter.md#listenercount)
- [listeners](LeoWalletAdapter.md#listeners)
- [off](LeoWalletAdapter.md#off)
- [on](LeoWalletAdapter.md#on)
- [once](LeoWalletAdapter.md#once)
- [removeAllListeners](LeoWalletAdapter.md#removealllisteners)
- [removeListener](LeoWalletAdapter.md#removelistener)
- [requestViewKey](LeoWalletAdapter.md#requestviewkey)
- [signAllTransactions](LeoWalletAdapter.md#signalltransactions)
- [signMessage](LeoWalletAdapter.md#signmessage)
- [signTransaction](LeoWalletAdapter.md#signtransaction)

## Constructors

### constructor

• **new LeoWalletAdapter**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LeoWalletAdapterConfig`](../interfaces/LeoWalletAdapterConfig.md) |

#### Overrides

BaseMessageSignerWalletAdapter.constructor

#### Defined in

[adapter.ts:70](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L70)

## Properties

### \_connecting

• `Private` **\_connecting**: `boolean`

#### Defined in

[adapter.ts:60](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L60)

___

### \_decryptPermission

• `Private` **\_decryptPermission**: `string`

#### Defined in

[adapter.ts:63](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L63)

___

### \_publicKey

• `Private` **\_publicKey**: `string`

#### Defined in

[adapter.ts:62](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L62)

___

### \_readyState

• `Private` **\_readyState**: `WalletReadyState`

#### Defined in

[adapter.ts:65](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L65)

___

### \_viewKey

• `Private` **\_viewKey**: `string`

#### Defined in

[adapter.ts:64](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L64)

___

### \_wallet

• `Private` **\_wallet**: [`LeoWallet`](../interfaces/LeoWallet.md)

#### Defined in

[adapter.ts:61](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L61)

___

### icon

• **icon**: `string` = `'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII='`

#### Overrides

BaseMessageSignerWalletAdapter.icon

#### Defined in

[adapter.ts:56](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L56)

___

### name

• **name**: `WalletName`<``"Leo Wallet"``\> = `LeoWalletName`

#### Overrides

BaseMessageSignerWalletAdapter.name

#### Defined in

[adapter.ts:54](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L54)

___

### supportedTransactionVersions

• `Readonly` **supportedTransactionVersions**: `any` = `null`

#### Overrides

BaseMessageSignerWalletAdapter.supportedTransactionVersions

#### Defined in

[adapter.ts:58](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L58)

___

### url

• **url**: `string` = `'https://leo.app/download'`

#### Overrides

BaseMessageSignerWalletAdapter.url

#### Defined in

[adapter.ts:55](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L55)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

BaseMessageSignerWalletAdapter.prefixed

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Accessors

### connected

• `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseMessageSignerWalletAdapter.connected

#### Defined in

node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.d.ts:65

___

### connecting

• `get` **connecting**(): `boolean`

#### Returns

`boolean`

#### Overrides

BaseMessageSignerWalletAdapter.connecting

#### Defined in

[adapter.ts:102](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L102)

___

### decryptPermission

• `get` **decryptPermission**(): `string`

#### Returns

`string`

#### Defined in

[adapter.ts:98](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L98)

___

### publicKey

• `get` **publicKey**(): `string`

#### Returns

`string`

#### Overrides

BaseMessageSignerWalletAdapter.publicKey

#### Defined in

[adapter.ts:90](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L90)

___

### readyState

• `get` **readyState**(): `WalletReadyState`

#### Returns

`WalletReadyState`

#### Overrides

BaseMessageSignerWalletAdapter.readyState

#### Defined in

[adapter.ts:106](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L106)

• `set` **readyState**(`readyState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `readyState` | `WalletReadyState` |

#### Returns

`void`

#### Overrides

BaseMessageSignerWalletAdapter.readyState

#### Defined in

[adapter.ts:110](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L110)

___

### viewKey

• `get` **viewKey**(): `string`

#### Returns

`string`

#### Overrides

BaseMessageSignerWalletAdapter.viewKey

#### Defined in

[adapter.ts:94](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L94)

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `WalletAdapterEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

BaseMessageSignerWalletAdapter.addListener

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### connect

▸ **connect**(`decryptPermission`, `network`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | `DecryptPermission` |
| `network` | `WalletAdapterNetwork` |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseMessageSignerWalletAdapter.connect

#### Defined in

[adapter.ts:142](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L142)

___

### decrypt

▸ **decrypt**(`cipherText`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cipherText` | `string` |

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.decrypt

#### Defined in

[adapter.ts:114](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L114)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

BaseMessageSignerWalletAdapter.disconnect

#### Defined in

[adapter.ts:175](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L175)

___

### emit

▸ **emit**<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `WalletAdapterEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>] |

#### Returns

`boolean`

#### Inherited from

BaseMessageSignerWalletAdapter.emit

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof `WalletAdapterEvents`[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof `WalletAdapterEvents`[]

#### Inherited from

BaseMessageSignerWalletAdapter.eventNames

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof `WalletAdapterEvents` |

#### Returns

`number`

#### Inherited from

BaseMessageSignerWalletAdapter.listenerCount

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): (...`args`: `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>]) => `void`[]

Return the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `WalletAdapterEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

(...`args`: `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>]) => `void`[]

#### Inherited from

BaseMessageSignerWalletAdapter.listeners

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `WalletAdapterEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

BaseMessageSignerWalletAdapter.off

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

Add a listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `WalletAdapterEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

BaseMessageSignerWalletAdapter.on

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

Add a one-time listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `WalletAdapterEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>]) => `void` |
| `context?` | `any` |

#### Returns

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

BaseMessageSignerWalletAdapter.once

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof `WalletAdapterEvents` |

#### Returns

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

BaseMessageSignerWalletAdapter.removeAllListeners

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

Remove the listeners of a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `WalletAdapterEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `ArgumentMap`<`WalletAdapterEvents`\>[`Extract`<`T`, keyof `WalletAdapterEvents`\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

BaseMessageSignerWalletAdapter.removeListener

#### Defined in

node_modules/eventemitter3/index.d.ts:63

___

### requestViewKey

▸ **requestViewKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.requestViewKey

#### Defined in

[adapter.ts:210](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L210)

___

### signAllTransactions

▸ **signAllTransactions**<`T`\>(`transactions`): `Promise`<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | `T`[] |

#### Returns

`Promise`<`T`[]\>

#### Inherited from

BaseMessageSignerWalletAdapter.signAllTransactions

#### Defined in

node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.d.ts:12

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Overrides

BaseMessageSignerWalletAdapter.signMessage

#### Defined in

[adapter.ts:193](https://github.com/demox-labs/aleo-wallet-adapter/blob/eb32ab9/packages/wallets/leo/adapter.ts#L193)

___

### signTransaction

▸ **signTransaction**<`T`\>(`transaction`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `T` |

#### Returns

`Promise`<`T`\>

#### Inherited from

BaseMessageSignerWalletAdapter.signTransaction

#### Defined in

node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.d.ts:11
