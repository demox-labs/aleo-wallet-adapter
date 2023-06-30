[@demox-labs/aleo-wallet-adapter-react](../README.md) / [Exports](../modules.md) / WalletContextState

# Interface: WalletContextState

## Table of contents

### Properties

- [autoConnect](WalletContextState.md#autoconnect)
- [connected](WalletContextState.md#connected)
- [connecting](WalletContextState.md#connecting)
- [decrypt](WalletContextState.md#decrypt)
- [disconnecting](WalletContextState.md#disconnecting)
- [publicKey](WalletContextState.md#publickey)
- [requestBulkTransactions](WalletContextState.md#requestbulktransactions)
- [requestDeploy](WalletContextState.md#requestdeploy)
- [requestRecords](WalletContextState.md#requestrecords)
- [requestTransaction](WalletContextState.md#requesttransaction)
- [requestViewKey](WalletContextState.md#requestviewkey)
- [signMessage](WalletContextState.md#signmessage)
- [transactionStatus](WalletContextState.md#transactionstatus)
- [viewKey](WalletContextState.md#viewkey)
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

[useWallet.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L19)

___

### connected

• **connected**: `boolean`

#### Defined in

[useWallet.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L25)

___

### connecting

• **connecting**: `boolean`

#### Defined in

[useWallet.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L24)

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

[useWallet.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L33)

___

### disconnecting

• **disconnecting**: `boolean`

#### Defined in

[useWallet.ts:26](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L26)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[useWallet.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L22)

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

[useWallet.ts:37](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L37)

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

[useWallet.ts:38](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L38)

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

[useWallet.ts:35](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L35)

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

[useWallet.ts:36](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L36)

___

### requestViewKey

• **requestViewKey**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:34](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L34)

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

[useWallet.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L32)

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

[useWallet.ts:39](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L39)

___

### viewKey

• **viewKey**: `string`

#### Defined in

[useWallet.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L23)

___

### wallet

• **wallet**: [`Wallet`](Wallet.md)

#### Defined in

[useWallet.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L21)

___

### wallets

• **wallets**: [`Wallet`](Wallet.md)[]

#### Defined in

[useWallet.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L20)

## Methods

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

[useWallet.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L29)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[useWallet.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L30)

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

[useWallet.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/react/useWallet.ts#L28)
