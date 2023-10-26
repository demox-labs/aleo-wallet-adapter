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

### Methods

- [addListener](LeoWalletAdapter.md#addlistener)
- [connect](LeoWalletAdapter.md#connect)
- [decrypt](LeoWalletAdapter.md#decrypt)
- [disconnect](LeoWalletAdapter.md#disconnect)
- [emit](LeoWalletAdapter.md#emit)
- [eventNames](LeoWalletAdapter.md#eventnames)
- [getExecution](LeoWalletAdapter.md#getexecution)
- [listenerCount](LeoWalletAdapter.md#listenercount)
- [listeners](LeoWalletAdapter.md#listeners)
- [off](LeoWalletAdapter.md#off)
- [on](LeoWalletAdapter.md#on)
- [once](LeoWalletAdapter.md#once)
- [removeAllListeners](LeoWalletAdapter.md#removealllisteners)
- [removeListener](LeoWalletAdapter.md#removelistener)
- [requestBulkTransactions](LeoWalletAdapter.md#requestbulktransactions)
- [requestDeploy](LeoWalletAdapter.md#requestdeploy)
- [requestExecution](LeoWalletAdapter.md#requestexecution)
- [requestRecordPlaintexts](LeoWalletAdapter.md#requestrecordplaintexts)
- [requestRecords](LeoWalletAdapter.md#requestrecords)
- [requestTransaction](LeoWalletAdapter.md#requesttransaction)
- [requestTransactionHistory](LeoWalletAdapter.md#requesttransactionhistory)
- [signMessage](LeoWalletAdapter.md#signmessage)
- [transactionStatus](LeoWalletAdapter.md#transactionstatus)

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

[adapter.ts:73](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L73)

## Properties

### \_connecting

• `Private` **\_connecting**: `boolean`

#### Defined in

[adapter.ts:64](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L64)

___

### \_decryptPermission

• `Private` **\_decryptPermission**: `string`

#### Defined in

[adapter.ts:67](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L67)

___

### \_publicKey

• `Private` **\_publicKey**: `string`

#### Defined in

[adapter.ts:66](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L66)

___

### \_readyState

• `Private` **\_readyState**: `WalletReadyState`

#### Defined in

[adapter.ts:68](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L68)

___

### \_wallet

• `Private` **\_wallet**: [`LeoWallet`](../interfaces/LeoWallet.md)

#### Defined in

[adapter.ts:65](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L65)

___

### icon

• **icon**: `string` = `'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII='`

#### Overrides

BaseMessageSignerWalletAdapter.icon

#### Defined in

[adapter.ts:60](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L60)

___

### name

• **name**: `WalletName`<``"Leo Wallet"``\> = `LeoWalletName`

#### Overrides

BaseMessageSignerWalletAdapter.name

#### Defined in

[adapter.ts:58](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L58)

___

### supportedTransactionVersions

• `Readonly` **supportedTransactionVersions**: `any` = `null`

#### Overrides

BaseMessageSignerWalletAdapter.supportedTransactionVersions

#### Defined in

[adapter.ts:62](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L62)

___

### url

• **url**: `string` = `'https://leo.app/download'`

#### Overrides

BaseMessageSignerWalletAdapter.url

#### Defined in

[adapter.ts:59](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L59)

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

node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.d.ts:63

___

### connecting

• `get` **connecting**(): `boolean`

#### Returns

`boolean`

#### Overrides

BaseMessageSignerWalletAdapter.connecting

#### Defined in

[adapter.ts:100](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L100)

___

### decryptPermission

• `get` **decryptPermission**(): `string`

#### Returns

`string`

#### Defined in

[adapter.ts:96](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L96)

___

### publicKey

• `get` **publicKey**(): `string`

#### Returns

`string`

#### Overrides

BaseMessageSignerWalletAdapter.publicKey

#### Defined in

[adapter.ts:92](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L92)

___

### readyState

• `get` **readyState**(): `WalletReadyState`

#### Returns

`WalletReadyState`

#### Overrides

BaseMessageSignerWalletAdapter.readyState

#### Defined in

[adapter.ts:104](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L104)

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

[adapter.ts:108](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L108)

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

▸ **connect**(`decryptPermission`, `network`, `programs?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | `DecryptPermission` |
| `network` | `Testnet` |
| `programs?` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseMessageSignerWalletAdapter.connect

#### Defined in

[adapter.ts:287](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L287)

___

### decrypt

▸ **decrypt**(`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cipherText` | `string` |
| `tpk?` | `string` |
| `programId?` | `string` |
| `functionName?` | `string` |
| `index?` | `number` |

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.decrypt

#### Defined in

[adapter.ts:112](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L112)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

BaseMessageSignerWalletAdapter.disconnect

#### Defined in

[adapter.ts:319](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L319)

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

### getExecution

▸ **getExecution**(`transactionId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.getExecution

#### Defined in

[adapter.ts:237](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L237)

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

### requestBulkTransactions

▸ **requestBulkTransactions**(`transactions`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | `AleoTransaction`[] |

#### Returns

`Promise`<`string`[]\>

#### Overrides

BaseMessageSignerWalletAdapter.requestBulkTransactions

#### Defined in

[adapter.ts:189](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L189)

___

### requestDeploy

▸ **requestDeploy**(`deployment`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployment` | `AleoDeployment` |

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.requestDeploy

#### Defined in

[adapter.ts:205](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L205)

___

### requestExecution

▸ **requestExecution**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `AleoTransaction` |

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.requestExecution

#### Defined in

[adapter.ts:173](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L173)

___

### requestRecordPlaintexts

▸ **requestRecordPlaintexts**(`program`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Overrides

BaseMessageSignerWalletAdapter.requestRecordPlaintexts

#### Defined in

[adapter.ts:253](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L253)

___

### requestRecords

▸ **requestRecords**(`program`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Overrides

BaseMessageSignerWalletAdapter.requestRecords

#### Defined in

[adapter.ts:140](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L140)

___

### requestTransaction

▸ **requestTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `AleoTransaction` |

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.requestTransaction

#### Defined in

[adapter.ts:157](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L157)

___

### requestTransactionHistory

▸ **requestTransactionHistory**(`program`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Overrides

BaseMessageSignerWalletAdapter.requestTransactionHistory

#### Defined in

[adapter.ts:270](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L270)

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

[adapter.ts:337](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L337)

___

### transactionStatus

▸ **transactionStatus**(`transactionId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

#### Returns

`Promise`<`string`\>

#### Overrides

BaseMessageSignerWalletAdapter.transactionStatus

#### Defined in

[adapter.ts:221](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/wallets/leo/adapter.ts#L221)
