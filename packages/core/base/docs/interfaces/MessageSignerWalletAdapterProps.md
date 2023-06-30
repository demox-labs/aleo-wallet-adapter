[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / MessageSignerWalletAdapterProps

# Interface: MessageSignerWalletAdapterProps<Name\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`WalletAdapterProps`](WalletAdapterProps.md)<`Name`\>

  ↳ **`MessageSignerWalletAdapterProps`**

## Table of contents

### Properties

- [connected](MessageSignerWalletAdapterProps.md#connected)
- [connecting](MessageSignerWalletAdapterProps.md#connecting)
- [icon](MessageSignerWalletAdapterProps.md#icon)
- [name](MessageSignerWalletAdapterProps.md#name)
- [publicKey](MessageSignerWalletAdapterProps.md#publickey)
- [readyState](MessageSignerWalletAdapterProps.md#readystate)
- [supportedTransactionVersions](MessageSignerWalletAdapterProps.md#supportedtransactionversions)
- [url](MessageSignerWalletAdapterProps.md#url)
- [viewKey](MessageSignerWalletAdapterProps.md#viewkey)

### Methods

- [connect](MessageSignerWalletAdapterProps.md#connect)
- [decrypt](MessageSignerWalletAdapterProps.md#decrypt)
- [disconnect](MessageSignerWalletAdapterProps.md#disconnect)
- [requestBulkTransactions](MessageSignerWalletAdapterProps.md#requestbulktransactions)
- [requestDeploy](MessageSignerWalletAdapterProps.md#requestdeploy)
- [requestRecords](MessageSignerWalletAdapterProps.md#requestrecords)
- [requestTransaction](MessageSignerWalletAdapterProps.md#requesttransaction)
- [requestViewKey](MessageSignerWalletAdapterProps.md#requestviewkey)
- [signMessage](MessageSignerWalletAdapterProps.md#signmessage)
- [transactionStatus](MessageSignerWalletAdapterProps.md#transactionstatus)

## Properties

### connected

• **connected**: `boolean`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connected](WalletAdapterProps.md#connected)

#### Defined in

[adapter.ts:26](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L26)

___

### connecting

• **connecting**: `boolean`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connecting](WalletAdapterProps.md#connecting)

#### Defined in

[adapter.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L25)

___

### icon

• **icon**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[icon](WalletAdapterProps.md#icon)

#### Defined in

[adapter.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L21)

___

### name

• **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[name](WalletAdapterProps.md#name)

#### Defined in

[adapter.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L19)

___

### publicKey

• **publicKey**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[publicKey](WalletAdapterProps.md#publickey)

#### Defined in

[adapter.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L23)

___

### readyState

• **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[readyState](WalletAdapterProps.md#readystate)

#### Defined in

[adapter.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L22)

___

### supportedTransactionVersions

• **supportedTransactionVersions**: `ReadonlySet`<`any`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[supportedTransactionVersions](WalletAdapterProps.md#supportedtransactionversions)

#### Defined in

[adapter.ts:27](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L27)

___

### url

• **url**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[url](WalletAdapterProps.md#url)

#### Defined in

[adapter.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L20)

___

### viewKey

• **viewKey**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[viewKey](WalletAdapterProps.md#viewkey)

#### Defined in

[adapter.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L24)

## Methods

### connect

▸ **connect**(`decryptPermission`, `network`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | [`DecryptPermission`](../enums/DecryptPermission.md) |
| `network` | [`Testnet`](../enums/WalletAdapterNetwork.md#testnet) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connect](WalletAdapterProps.md#connect)

#### Defined in

[adapter.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L29)

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

#### Defined in

[signer.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L22)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[disconnect](WalletAdapterProps.md#disconnect)

#### Defined in

[adapter.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/adapter.ts#L30)

___

### requestBulkTransactions

▸ **requestBulkTransactions**(`transactions`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | [`AleoTransaction`](AleoTransaction.md)[] |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[signer.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L28)

___

### requestDeploy

▸ **requestDeploy**(`deployment`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployment` | [`AleoDeployment`](AleoDeployment.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[signer.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L30)

___

### requestRecords

▸ **requestRecords**(`program`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[signer.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L24)

___

### requestTransaction

▸ **requestTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`AleoTransaction`](AleoTransaction.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[signer.ts:26](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L26)

___

### requestViewKey

▸ **requestViewKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[signer.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L20)

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[signer.ts:18](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L18)

___

### transactionStatus

▸ **transactionStatus**(`transactionId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[signer.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/8b34447/packages/core/base/signer.ts#L32)
