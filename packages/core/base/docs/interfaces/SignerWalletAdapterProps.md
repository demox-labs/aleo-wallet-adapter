[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / SignerWalletAdapterProps

# Interface: SignerWalletAdapterProps<Name\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`WalletAdapterProps`](WalletAdapterProps.md)<`Name`\>

  ↳ **`SignerWalletAdapterProps`**

## Table of contents

### Properties

- [connected](SignerWalletAdapterProps.md#connected)
- [connecting](SignerWalletAdapterProps.md#connecting)
- [icon](SignerWalletAdapterProps.md#icon)
- [name](SignerWalletAdapterProps.md#name)
- [publicKey](SignerWalletAdapterProps.md#publickey)
- [readyState](SignerWalletAdapterProps.md#readystate)
- [supportedTransactionVersions](SignerWalletAdapterProps.md#supportedtransactionversions)
- [url](SignerWalletAdapterProps.md#url)
- [viewKey](SignerWalletAdapterProps.md#viewkey)

### Methods

- [connect](SignerWalletAdapterProps.md#connect)
- [disconnect](SignerWalletAdapterProps.md#disconnect)
- [signAllTransactions](SignerWalletAdapterProps.md#signalltransactions)
- [signTransaction](SignerWalletAdapterProps.md#signtransaction)

## Properties

### connected

• **connected**: `boolean`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connected](WalletAdapterProps.md#connected)

#### Defined in

[adapter.ts:26](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L26)

___

### connecting

• **connecting**: `boolean`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connecting](WalletAdapterProps.md#connecting)

#### Defined in

[adapter.ts:25](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L25)

___

### icon

• **icon**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[icon](WalletAdapterProps.md#icon)

#### Defined in

[adapter.ts:21](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L21)

___

### name

• **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[name](WalletAdapterProps.md#name)

#### Defined in

[adapter.ts:19](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L19)

___

### publicKey

• **publicKey**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[publicKey](WalletAdapterProps.md#publickey)

#### Defined in

[adapter.ts:23](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L23)

___

### readyState

• **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[readyState](WalletAdapterProps.md#readystate)

#### Defined in

[adapter.ts:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L22)

___

### supportedTransactionVersions

• **supportedTransactionVersions**: `ReadonlySet`<`any`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[supportedTransactionVersions](WalletAdapterProps.md#supportedtransactionversions)

#### Defined in

[adapter.ts:27](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L27)

___

### url

• **url**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[url](WalletAdapterProps.md#url)

#### Defined in

[adapter.ts:20](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L20)

___

### viewKey

• **viewKey**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[viewKey](WalletAdapterProps.md#viewkey)

#### Defined in

[adapter.ts:24](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L24)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connect](WalletAdapterProps.md#connect)

#### Defined in

[adapter.ts:29](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L29)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[disconnect](WalletAdapterProps.md#disconnect)

#### Defined in

[adapter.ts:30](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/adapter.ts#L30)

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

#### Defined in

[signer.ts:11](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/signer.ts#L11)

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

#### Defined in

[signer.ts:8](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/core/base/signer.ts#L8)
