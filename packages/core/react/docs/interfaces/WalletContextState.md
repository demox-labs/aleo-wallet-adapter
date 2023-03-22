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
- [requestRecords](WalletContextState.md#requestrecords)
- [requestTransaction](WalletContextState.md#requesttransaction)
- [requestViewKey](WalletContextState.md#requestviewkey)
- [signMessage](WalletContextState.md#signmessage)
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

[useWallet.ts:18](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L18)

___

### connected

• **connected**: `boolean`

#### Defined in

[useWallet.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L24)

___

### connecting

• **connecting**: `boolean`

#### Defined in

[useWallet.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L23)

___

### decrypt

• **decrypt**: (`cipherText`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`cipherText`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `cipherText` | `string` |

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L32)

___

### disconnecting

• **disconnecting**: `boolean`

#### Defined in

[useWallet.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L25)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[useWallet.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L21)

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

[useWallet.ts:34](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L34)

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

[useWallet.ts:35](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L35)

___

### requestViewKey

• **requestViewKey**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L33)

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

[useWallet.ts:31](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L31)

___

### viewKey

• **viewKey**: `string`

#### Defined in

[useWallet.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L22)

___

### wallet

• **wallet**: [`Wallet`](Wallet.md)

#### Defined in

[useWallet.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L20)

___

### wallets

• **wallets**: [`Wallet`](Wallet.md)[]

#### Defined in

[useWallet.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L19)

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

[useWallet.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L28)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[useWallet.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L29)

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

[useWallet.ts:27](https://github.com/demox-labs/leo-wallet-adapter/blob/a4e012e/packages/core/react/useWallet.ts#L27)
