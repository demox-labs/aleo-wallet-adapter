[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletAdapterProps

# Interface: WalletAdapterProps<Name\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- **`WalletAdapterProps`**

  ↳ [`SignerWalletAdapterProps`](SignerWalletAdapterProps.md)

  ↳ [`MessageSignerWalletAdapterProps`](MessageSignerWalletAdapterProps.md)

## Table of contents

### Properties

- [connected](WalletAdapterProps.md#connected)
- [connecting](WalletAdapterProps.md#connecting)
- [icon](WalletAdapterProps.md#icon)
- [name](WalletAdapterProps.md#name)
- [publicKey](WalletAdapterProps.md#publickey)
- [readyState](WalletAdapterProps.md#readystate)
- [supportedTransactionVersions](WalletAdapterProps.md#supportedtransactionversions)
- [url](WalletAdapterProps.md#url)

### Methods

- [connect](WalletAdapterProps.md#connect)
- [disconnect](WalletAdapterProps.md#disconnect)

## Properties

### connected

• **connected**: `boolean`

#### Defined in

[adapter.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L25)

___

### connecting

• **connecting**: `boolean`

#### Defined in

[adapter.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L24)

___

### icon

• **icon**: `string`

#### Defined in

[adapter.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L21)

___

### name

• **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Defined in

[adapter.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L19)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[adapter.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L23)

___

### readyState

• **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Defined in

[adapter.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L22)

___

### supportedTransactionVersions

• **supportedTransactionVersions**: `ReadonlySet`<`any`\>

#### Defined in

[adapter.ts:26](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L26)

___

### url

• **url**: `string`

#### Defined in

[adapter.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L20)

## Methods

### connect

▸ **connect**(`decryptPermission`, `network`, `programs?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | [`DecryptPermission`](../enums/DecryptPermission.md) |
| `network` | [`Testnet`](../enums/WalletAdapterNetwork.md#testnet) |
| `programs?` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[adapter.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L28)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[adapter.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L29)
