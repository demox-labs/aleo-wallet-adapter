[@demox-labs/aleo-wallet-adapter-react](../README.md) / [Exports](../modules.md) / WalletContextState

# Interface: WalletContextState

## Table of contents

### Properties

- [autoConnect](WalletContextState.md#autoconnect)
- [connected](WalletContextState.md#connected)
- [connecting](WalletContextState.md#connecting)
- [decrypt](WalletContextState.md#decrypt)
- [disconnecting](WalletContextState.md#disconnecting)
- [getExecution](WalletContextState.md#getexecution)
- [publicKey](WalletContextState.md#publickey)
- [requestBulkTransactions](WalletContextState.md#requestbulktransactions)
- [requestDeploy](WalletContextState.md#requestdeploy)
- [requestExecution](WalletContextState.md#requestexecution)
- [requestRecordPlaintexts](WalletContextState.md#requestrecordplaintexts)
- [requestRecords](WalletContextState.md#requestrecords)
- [requestTransaction](WalletContextState.md#requesttransaction)
- [requestTransactionHistory](WalletContextState.md#requesttransactionhistory)
- [signMessage](WalletContextState.md#signmessage)
- [transactionStatus](WalletContextState.md#transactionstatus)
- [wallet](WalletContextState.md#wallet)
- [wallets](WalletContextState.md#wallets)

### Methods

- [connect](WalletContextState.md#connect)
- [disconnect](WalletContextState.md#disconnect)
- [select](WalletContextState.md#select)

## Properties

### autoConnect

• **autoConnect**: `boolean`

#### Defined in

[useWallet.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L19)

___

### connected

• **connected**: `boolean`

#### Defined in

[useWallet.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L24)

___

### connecting

• **connecting**: `boolean`

#### Defined in

[useWallet.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L23)

___

### decrypt

• **decrypt**: (`cipherText`: `string`, `tpk?`: `string`, `programId?`: `string`, `functionName?`: `string`, `index?`: `number`) => `Promise`<`string`\>

#### Type declaration

▸ (`cipherText`, `tpk?`, `programId?`, `functionName?`, `index?`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `cipherText` | `string` |
| `tpk?` | `string` |
| `programId?` | `string` |
| `functionName?` | `string` |
| `index?` | `number` |

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L32)

___

### disconnecting

• **disconnecting**: `boolean`

#### Defined in

[useWallet.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L25)

___

### getExecution

• **getExecution**: (`transactionId`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`transactionId`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:39](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L39)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[useWallet.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L22)

___

### requestBulkTransactions

• **requestBulkTransactions**: (`transactions`: `AleoTransaction`[]) => `Promise`<`string`[]\>

#### Type declaration

▸ (`transactions`): `Promise`<`string`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | `AleoTransaction`[] |

##### Returns

`Promise`<`string`[]\>

#### Defined in

[useWallet.ts:36](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L36)

___

### requestDeploy

• **requestDeploy**: (`deployment`: `AleoDeployment`) => `Promise`<`string`\>

#### Type declaration

▸ (`deployment`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `deployment` | `AleoDeployment` |

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:37](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L37)

___

### requestExecution

• **requestExecution**: (`transaction`: `AleoTransaction`) => `Promise`<`string`\>

#### Type declaration

▸ (`transaction`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `AleoTransaction` |

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:35](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L35)

___

### requestRecordPlaintexts

• **requestRecordPlaintexts**: (`program`: `string`) => `Promise`<`any`[]\>

#### Type declaration

▸ (`program`): `Promise`<`any`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

##### Returns

`Promise`<`any`[]\>

#### Defined in

[useWallet.ts:40](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L40)

___

### requestRecords

• **requestRecords**: (`program`: `string`) => `Promise`<`any`[]\>

#### Type declaration

▸ (`program`): `Promise`<`any`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

##### Returns

`Promise`<`any`[]\>

#### Defined in

[useWallet.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L33)

___

### requestTransaction

• **requestTransaction**: (`transaction`: `AleoTransaction`) => `Promise`<`string`\>

#### Type declaration

▸ (`transaction`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `AleoTransaction` |

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:34](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L34)

___

### requestTransactionHistory

• **requestTransactionHistory**: (`program`: `string`) => `Promise`<`any`[]\>

#### Type declaration

▸ (`program`): `Promise`<`any`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

##### Returns

`Promise`<`any`[]\>

#### Defined in

[useWallet.ts:41](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L41)

___

### signMessage

• **signMessage**: (`message`: `Uint8Array`) => `Promise`<`Uint8Array`\>

#### Type declaration

▸ (`message`): `Promise`<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

##### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[useWallet.ts:31](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L31)

___

### transactionStatus

• **transactionStatus**: (`transactionId`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`transactionId`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:38](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L38)

___

### wallet

• **wallet**: [`Wallet`](Wallet.md)

#### Defined in

[useWallet.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L21)

___

### wallets

• **wallets**: [`Wallet`](Wallet.md)[]

#### Defined in

[useWallet.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L20)

## Methods

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

#### Defined in

[useWallet.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L28)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[useWallet.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L29)

___

### select

▸ **select**(`walletName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletName` | `WalletName`<`string`\> |

#### Returns

`void`

#### Defined in

[useWallet.ts:27](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/react/useWallet.ts#L27)
