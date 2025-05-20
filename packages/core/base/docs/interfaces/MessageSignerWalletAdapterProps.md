[**@demox-labs/aleo-wallet-adapter-base**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-base](../README.md) / MessageSignerWalletAdapterProps

# Interface: MessageSignerWalletAdapterProps\<Name\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:17](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L17)

## Extends

- [`WalletAdapterProps`](WalletAdapterProps.md)\<`Name`\>

## Type Parameters

### Name

`Name` *extends* `string` = `string`

## Properties

### connected

> **connected**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:25](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L25)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connected`](WalletAdapterProps.md#connected)

***

### connecting

> **connecting**: `boolean`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:24](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L24)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connecting`](WalletAdapterProps.md#connecting)

***

### icon

> **icon**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:21](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L21)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`icon`](WalletAdapterProps.md#icon)

***

### name

> **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:19](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L19)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`name`](WalletAdapterProps.md#name-1)

***

### publicKey

> **publicKey**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:23](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L23)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`publicKey`](WalletAdapterProps.md#publickey)

***

### readyState

> **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L22)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`readyState`](WalletAdapterProps.md#readystate)

***

### supportedTransactionVersions

> **supportedTransactionVersions**: `ReadonlySet`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:26](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L26)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`supportedTransactionVersions`](WalletAdapterProps.md#supportedtransactionversions)

***

### url

> **url**: `string`

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:20](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L20)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`url`](WalletAdapterProps.md#url)

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:28](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L28)

#### Parameters

##### decryptPermission

[`DecryptPermission`](../enumerations/DecryptPermission.md)

##### network

[`WalletAdapterNetwork`](../enumerations/WalletAdapterNetwork.md)

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connect`](WalletAdapterProps.md#connect)

***

### decrypt()

> **decrypt**(`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:20](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L20)

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

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [aleo-wallet-adapter/packages/core/base/adapter.ts:29](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/adapter.ts#L29)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`disconnect`](WalletAdapterProps.md#disconnect)

***

### getExecution()

> **getExecution**(`transactionId`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:36](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L36)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

***

### requestBulkTransactions()

> **requestBulkTransactions**(`transactions`): `Promise`\<`string`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:28](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L28)

#### Parameters

##### transactions

[`AleoTransaction`](AleoTransaction.md)[]

#### Returns

`Promise`\<`string`[]\>

***

### requestDeploy()

> **requestDeploy**(`deployment`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:30](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L30)

#### Parameters

##### deployment

[`AleoDeployment`](AleoDeployment.md)

#### Returns

`Promise`\<`string`\>

***

### requestExecution()

> **requestExecution**(`transaction`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:26](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L26)

#### Parameters

##### transaction

[`AleoTransaction`](AleoTransaction.md)

#### Returns

`Promise`\<`string`\>

***

### requestRecordPlaintexts()

> **requestRecordPlaintexts**(`program`): `Promise`\<`any`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:38](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L38)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

***

### requestRecords()

> **requestRecords**(`program`): `Promise`\<`any`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L22)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:24](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L24)

#### Parameters

##### transaction

[`AleoTransaction`](AleoTransaction.md)

#### Returns

`Promise`\<`string`\>

***

### requestTransactionHistory()

> **requestTransactionHistory**(`program`): `Promise`\<`any`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:40](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L40)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`Uint8Array`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:18](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L18)

#### Parameters

##### message

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>

***

### transactionStatus()

> **transactionStatus**(`transactionId`): `Promise`\<`string`\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:32](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L32)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

***

### transitionViewKeys()

> **transitionViewKeys**(`transactionId`): `Promise`\<`string`[]\>

Defined in: [aleo-wallet-adapter/packages/core/base/signer.ts:34](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/base/signer.ts#L34)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`[]\>
