[**@demox-labs/aleo-wallet-adapter-leo**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-leo](../README.md) / LeoWalletAdapter

# Class: LeoWalletAdapter

Defined in: [adapter.ts:62](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L62)

## Extends

- `BaseMessageSignerWalletAdapter`

## Constructors

### Constructor

> **new LeoWalletAdapter**(`__namedParameters`): `LeoWalletAdapter`

Defined in: [adapter.ts:78](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L78)

#### Parameters

##### \_\_namedParameters

[`LeoWalletAdapterConfig`](../interfaces/LeoWalletAdapterConfig.md) = `{}`

#### Returns

`LeoWalletAdapter`

#### Overrides

`BaseMessageSignerWalletAdapter.constructor`

## Properties

### icon

> **icon**: `string` = `'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII='`

Defined in: [adapter.ts:64](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L64)

#### Overrides

`BaseMessageSignerWalletAdapter.icon`

***

### name

> **name**: `WalletName`\<`"Leo Wallet"`\> = `LeoWalletName`

Defined in: [adapter.ts:63](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L63)

#### Overrides

`BaseMessageSignerWalletAdapter.name`

***

### supportedTransactionVersions

> `readonly` **supportedTransactionVersions**: `any` = `null`

Defined in: [adapter.ts:67](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L67)

#### Overrides

`BaseMessageSignerWalletAdapter.supportedTransactionVersions`

***

### url

> **url**: `string`

Defined in: [adapter.ts:66](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L66)

#### Overrides

`BaseMessageSignerWalletAdapter.url`

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:9

#### Inherited from

`BaseMessageSignerWalletAdapter.prefixed`

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Defined in: node\_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.d.ts:63

##### Returns

`boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.connected`

***

### connecting

#### Get Signature

> **get** **connecting**(): `boolean`

Defined in: [adapter.ts:111](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L111)

##### Returns

`boolean`

#### Overrides

`BaseMessageSignerWalletAdapter.connecting`

***

### decryptPermission

#### Get Signature

> **get** **decryptPermission**(): `string`

Defined in: [adapter.ts:107](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L107)

##### Returns

`string`

***

### publicKey

#### Get Signature

> **get** **publicKey**(): `string`

Defined in: [adapter.ts:103](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L103)

##### Returns

`string`

#### Overrides

`BaseMessageSignerWalletAdapter.publicKey`

***

### readyState

#### Get Signature

> **get** **readyState**(): `WalletReadyState`

Defined in: [adapter.ts:115](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L115)

##### Returns

`WalletReadyState`

#### Set Signature

> **set** **readyState**(`readyState`): `void`

Defined in: [adapter.ts:119](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L119)

##### Parameters

###### readyState

`WalletReadyState`

##### Returns

`void`

#### Overrides

`BaseMessageSignerWalletAdapter.readyState`

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

##### T

`T` *extends* keyof `WalletAdapterEvents`

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.addListener`

***

### connect()

> **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

Defined in: [adapter.ts:314](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L314)

#### Parameters

##### decryptPermission

`DecryptPermission`

##### network

`WalletAdapterNetwork`

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseMessageSignerWalletAdapter.connect`

***

### decrypt()

> **decrypt**(`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`\<`string`\>

Defined in: [adapter.ts:123](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L123)

#### Parameters

##### cipherText

`string`

##### tpk?

`string`

##### programId?

`string`

##### functionName?

`string`

##### index?

`number`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.decrypt`

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [adapter.ts:347](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L347)

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseMessageSignerWalletAdapter.disconnect`

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* keyof `WalletAdapterEvents`

#### Parameters

##### event

`T`

##### args

...`ArgumentMap`\<`WalletAdapterEvents`\>\[`Extract`\<`T`, keyof `WalletAdapterEvents`\>\]

#### Returns

`boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.emit`

***

### eventNames()

> **eventNames**(): keyof `WalletAdapterEvents`[]

Defined in: node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof `WalletAdapterEvents`[]

#### Inherited from

`BaseMessageSignerWalletAdapter.eventNames`

***

### getExecution()

> **getExecution**(`transactionId`): `Promise`\<`string`\>

Defined in: [adapter.ts:264](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L264)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.getExecution`

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

keyof `WalletAdapterEvents`

#### Returns

`number`

#### Inherited from

`BaseMessageSignerWalletAdapter.listenerCount`

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Defined in: node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

##### T

`T` *extends* keyof `WalletAdapterEvents`

#### Parameters

##### event

`T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`BaseMessageSignerWalletAdapter.listeners`

***

### off()

> **off**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

##### T

`T` *extends* keyof `WalletAdapterEvents`

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

#### Inherited from

`BaseMessageSignerWalletAdapter.off`

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

##### T

`T` *extends* keyof `WalletAdapterEvents`

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.on`

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

##### T

`T` *extends* keyof `WalletAdapterEvents`

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.once`

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

keyof `WalletAdapterEvents`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.removeAllListeners`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn?`, `context?`, `once?`): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

##### T

`T` *extends* keyof `WalletAdapterEvents`

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

#### Inherited from

`BaseMessageSignerWalletAdapter.removeListener`

***

### requestBulkTransactions()

> **requestBulkTransactions**(`transactions`): `Promise`\<`string`[]\>

Defined in: [adapter.ts:200](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L200)

#### Parameters

##### transactions

`AleoTransaction`[]

#### Returns

`Promise`\<`string`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestBulkTransactions`

***

### requestDeploy()

> **requestDeploy**(`deployment`): `Promise`\<`string`\>

Defined in: [adapter.ts:216](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L216)

#### Parameters

##### deployment

`AleoDeployment`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestDeploy`

***

### requestExecution()

> **requestExecution**(`transaction`): `Promise`\<`string`\>

Defined in: [adapter.ts:184](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L184)

#### Parameters

##### transaction

`AleoTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestExecution`

***

### requestRecordPlaintexts()

> **requestRecordPlaintexts**(`program`): `Promise`\<`any`[]\>

Defined in: [adapter.ts:280](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L280)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestRecordPlaintexts`

***

### requestRecords()

> **requestRecords**(`program`): `Promise`\<`any`[]\>

Defined in: [adapter.ts:151](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L151)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestRecords`

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<`string`\>

Defined in: [adapter.ts:168](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L168)

#### Parameters

##### transaction

`AleoTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestTransaction`

***

### requestTransactionHistory()

> **requestTransactionHistory**(`program`): `Promise`\<`any`[]\>

Defined in: [adapter.ts:297](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L297)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestTransactionHistory`

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`Uint8Array`\>

Defined in: [adapter.ts:365](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L365)

#### Parameters

##### message

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>

#### Overrides

`BaseMessageSignerWalletAdapter.signMessage`

***

### transactionStatus()

> **transactionStatus**(`transactionId`): `Promise`\<`string`\>

Defined in: [adapter.ts:232](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L232)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.transactionStatus`

***

### transitionViewKeys()

> **transitionViewKeys**(`transactionId`): `Promise`\<`string`[]\>

Defined in: [adapter.ts:248](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/wallets/leo/adapter.ts#L248)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.transitionViewKeys`
