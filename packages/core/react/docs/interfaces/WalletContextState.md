[**@demox-labs/aleo-wallet-adapter-react**](../README.md)

***

[@demox-labs/aleo-wallet-adapter-react](../README.md) / WalletContextState

# Interface: WalletContextState

Defined in: [useWallet.ts:18](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L18)

## Properties

### autoConnect

> **autoConnect**: `boolean`

Defined in: [useWallet.ts:19](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L19)

***

### connected

> **connected**: `boolean`

Defined in: [useWallet.ts:24](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L24)

***

### connecting

> **connecting**: `boolean`

Defined in: [useWallet.ts:23](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L23)

***

### decrypt()

> **decrypt**: (`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`) => `Promise`\<`string`\>

Defined in: [useWallet.ts:32](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L32)

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

### disconnecting

> **disconnecting**: `boolean`

Defined in: [useWallet.ts:25](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L25)

***

### getExecution()

> **getExecution**: (`transactionId`) => `Promise`\<`string`\>

Defined in: [useWallet.ts:40](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L40)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

***

### publicKey

> **publicKey**: `string`

Defined in: [useWallet.ts:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L22)

***

### requestBulkTransactions()

> **requestBulkTransactions**: (`transactions`) => `Promise`\<`string`[]\>

Defined in: [useWallet.ts:36](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L36)

#### Parameters

##### transactions

`AleoTransaction`[]

#### Returns

`Promise`\<`string`[]\>

***

### requestDeploy()

> **requestDeploy**: (`deployment`) => `Promise`\<`string`\>

Defined in: [useWallet.ts:37](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L37)

#### Parameters

##### deployment

`AleoDeployment`

#### Returns

`Promise`\<`string`\>

***

### requestExecution()

> **requestExecution**: (`transaction`) => `Promise`\<`string`\>

Defined in: [useWallet.ts:35](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L35)

#### Parameters

##### transaction

`AleoTransaction`

#### Returns

`Promise`\<`string`\>

***

### requestRecordPlaintexts()

> **requestRecordPlaintexts**: (`program`) => `Promise`\<`any`[]\>

Defined in: [useWallet.ts:41](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L41)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

***

### requestRecords()

> **requestRecords**: (`program`) => `Promise`\<`any`[]\>

Defined in: [useWallet.ts:33](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L33)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

***

### requestTransaction()

> **requestTransaction**: (`transaction`) => `Promise`\<`string`\>

Defined in: [useWallet.ts:34](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L34)

#### Parameters

##### transaction

`AleoTransaction`

#### Returns

`Promise`\<`string`\>

***

### requestTransactionHistory()

> **requestTransactionHistory**: (`program`) => `Promise`\<`any`[]\>

Defined in: [useWallet.ts:42](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L42)

#### Parameters

##### program

`string`

#### Returns

`Promise`\<`any`[]\>

***

### signMessage()

> **signMessage**: (`message`) => `Promise`\<`Uint8Array`\>

Defined in: [useWallet.ts:31](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L31)

#### Parameters

##### message

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>

***

### transactionStatus()

> **transactionStatus**: (`transactionId`) => `Promise`\<`string`\>

Defined in: [useWallet.ts:38](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L38)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`\>

***

### transitionViewKeys()

> **transitionViewKeys**: (`transactionId`) => `Promise`\<`string`[]\>

Defined in: [useWallet.ts:39](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L39)

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<`string`[]\>

***

### wallet

> **wallet**: [`Wallet`](Wallet.md)

Defined in: [useWallet.ts:21](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L21)

***

### wallets

> **wallets**: [`Wallet`](Wallet.md)[]

Defined in: [useWallet.ts:20](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L20)

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

Defined in: [useWallet.ts:28](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L28)

#### Parameters

##### decryptPermission

`DecryptPermission`

##### network

`WalletAdapterNetwork`

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [useWallet.ts:29](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L29)

#### Returns

`Promise`\<`void`\>

***

### select()

> **select**(`walletName`): `void`

Defined in: [useWallet.ts:27](https://github.com/demox-labs/aleo-wallet-adapter/blob/818636b4a87a5b81f15303d0099057a3563c844a/packages/core/react/useWallet.ts#L27)

#### Parameters

##### walletName

`WalletName`

#### Returns

`void`
