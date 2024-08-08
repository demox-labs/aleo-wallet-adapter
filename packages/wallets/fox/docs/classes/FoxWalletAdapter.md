[**@foxwallet/aleo-wallet-adapter-fox**](../README.md) • **Docs**

***

[@foxwallet/aleo-wallet-adapter-fox](../globals.md) / FoxWalletAdapter

# Class: FoxWalletAdapter

## Extends

- `BaseMessageSignerWalletAdapter`

## Constructors

### new FoxWalletAdapter()

> **new FoxWalletAdapter**(`__namedParameters`): [`FoxWalletAdapter`](FoxWalletAdapter.md)

#### Parameters

• **\_\_namedParameters**: [`FoxWalletAdapterConfig`](../interfaces/FoxWalletAdapterConfig.md) = `{}`

#### Returns

[`FoxWalletAdapter`](FoxWalletAdapter.md)

#### Overrides

`BaseMessageSignerWalletAdapter.constructor`

#### Defined in

[adapter.ts:76](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L76)

## Properties

### icon

> **icon**: `string` = `'data:image/png;base64,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'`

#### Overrides

`BaseMessageSignerWalletAdapter.icon`

#### Defined in

[adapter.ts:62](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L62)

***

### name

> **name**: `WalletName`\<`"FoxWallet"`\> = `FoxWalletName`

#### Overrides

`BaseMessageSignerWalletAdapter.name`

#### Defined in

[adapter.ts:61](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L61)

***

### supportedTransactionVersions

> `readonly` **supportedTransactionVersions**: `any` = `null`

#### Overrides

`BaseMessageSignerWalletAdapter.supportedTransactionVersions`

#### Defined in

[adapter.ts:66](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L66)

***

### url

> **url**: `string`

#### Overrides

`BaseMessageSignerWalletAdapter.url`

#### Defined in

[adapter.ts:64](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L64)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.prefixed`

#### Defined in

node\_modules/eventemitter3/index.d.ts:9

## Accessors

### connected

> `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.connected`

#### Defined in

node\_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.d.ts:63

***

### connecting

> `get` **connecting**(): `boolean`

#### Returns

`boolean`

#### Overrides

`BaseMessageSignerWalletAdapter.connecting`

#### Defined in

[adapter.ts:104](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L104)

***

### decryptPermission

> `get` **decryptPermission**(): `string`

#### Returns

`string`

#### Defined in

[adapter.ts:100](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L100)

***

### publicKey

> `get` **publicKey**(): `string`

#### Returns

`string`

#### Overrides

`BaseMessageSignerWalletAdapter.publicKey`

#### Defined in

[adapter.ts:96](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L96)

***

### readyState

> `get` **readyState**(): `WalletReadyState`

> `set` **readyState**(`readyState`): `void`

#### Parameters

• **readyState**: `WalletReadyState`

#### Returns

`WalletReadyState`

#### Overrides

`BaseMessageSignerWalletAdapter.readyState`

#### Defined in

[adapter.ts:108](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L108)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.addListener`

#### Defined in

node\_modules/eventemitter3/index.d.ts:45

***

### connect()

> **connect**(`decryptPermission`, `network`, `programs`?): `Promise`\<`void`\>

#### Parameters

• **decryptPermission**: `DecryptPermission`

• **network**: `WalletAdapterNetwork`

• **programs?**: `string`[]

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseMessageSignerWalletAdapter.connect`

#### Defined in

[adapter.ts:291](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L291)

***

### decrypt()

> **decrypt**(`cipherText`, `tpk`?, `programId`?, `functionName`?, `index`?): `Promise`\<`string`\>

#### Parameters

• **cipherText**: `string`

• **tpk?**: `string`

• **programId?**: `string`

• **functionName?**: `string`

• **index?**: `number`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.decrypt`

#### Defined in

[adapter.ts:116](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L116)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseMessageSignerWalletAdapter.disconnect`

#### Defined in

[adapter.ts:321](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L321)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<`WalletAdapterEvents`\>\[`Extract`\<`T`, keyof `WalletAdapterEvents`\>\]

#### Returns

`boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.emit`

#### Defined in

node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): keyof `WalletAdapterEvents`[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof `WalletAdapterEvents`[]

#### Inherited from

`BaseMessageSignerWalletAdapter.eventNames`

#### Defined in

node\_modules/eventemitter3/index.d.ts:15

***

### getExecution()

> **getExecution**(`transactionId`): `Promise`\<`string`\>

#### Parameters

• **transactionId**: `string`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.getExecution`

#### Defined in

[adapter.ts:241](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L241)

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: keyof `WalletAdapterEvents`

#### Returns

`number`

#### Inherited from

`BaseMessageSignerWalletAdapter.listenerCount`

#### Defined in

node\_modules/eventemitter3/index.d.ts:27

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

• **event**: `T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`BaseMessageSignerWalletAdapter.listeners`

#### Defined in

node\_modules/eventemitter3/index.d.ts:20

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.off`

#### Defined in

node\_modules/eventemitter3/index.d.ts:69

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.on`

#### Defined in

node\_modules/eventemitter3/index.d.ts:40

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.once`

#### Defined in

node\_modules/eventemitter3/index.d.ts:54

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: keyof `WalletAdapterEvents`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.removeAllListeners`

#### Defined in

node\_modules/eventemitter3/index.d.ts:79

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.removeListener`

#### Defined in

node\_modules/eventemitter3/index.d.ts:63

***

### requestBulkTransactions()

> **requestBulkTransactions**(`transactions`): `Promise`\<`string`[]\>

#### Parameters

• **transactions**: `AleoTransaction`[]

#### Returns

`Promise`\<`string`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestBulkTransactions`

#### Defined in

[adapter.ts:193](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L193)

***

### requestDeploy()

> **requestDeploy**(`deployment`): `Promise`\<`string`\>

#### Parameters

• **deployment**: `AleoDeployment`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestDeploy`

#### Defined in

[adapter.ts:209](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L209)

***

### requestExecution()

> **requestExecution**(`transaction`): `Promise`\<`string`\>

#### Parameters

• **transaction**: `AleoTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestExecution`

#### Defined in

[adapter.ts:177](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L177)

***

### requestRecordPlaintexts()

> **requestRecordPlaintexts**(`program`): `Promise`\<`any`[]\>

#### Parameters

• **program**: `string`

#### Returns

`Promise`\<`any`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestRecordPlaintexts`

#### Defined in

[adapter.ts:257](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L257)

***

### requestRecords()

> **requestRecords**(`program`): `Promise`\<`any`[]\>

#### Parameters

• **program**: `string`

#### Returns

`Promise`\<`any`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestRecords`

#### Defined in

[adapter.ts:144](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L144)

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<`string`\>

#### Parameters

• **transaction**: `AleoTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestTransaction`

#### Defined in

[adapter.ts:161](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L161)

***

### requestTransactionHistory()

> **requestTransactionHistory**(`program`): `Promise`\<`any`[]\>

#### Parameters

• **program**: `string`

#### Returns

`Promise`\<`any`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestTransactionHistory`

#### Defined in

[adapter.ts:274](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L274)

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`Uint8Array`\>

#### Parameters

• **message**: `Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>

#### Overrides

`BaseMessageSignerWalletAdapter.signMessage`

#### Defined in

[adapter.ts:339](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L339)

***

### transactionStatus()

> **transactionStatus**(`transactionId`): `Promise`\<`string`\>

#### Parameters

• **transactionId**: `string`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.transactionStatus`

#### Defined in

[adapter.ts:225](https://github.com/foxwallet/aleo-wallet-adapter/blob/b4f21b8dbe591c275fb19d0f268be3b5e39280d2/packages/wallets/fox/adapter.ts#L225)
