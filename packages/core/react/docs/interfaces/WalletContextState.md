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
- [requestViewKey](WalletContextState.md#requestviewkey)
- [sendTransaction](WalletContextState.md#sendtransaction)
- [signAllTransactions](WalletContextState.md#signalltransactions)
- [signMessage](WalletContextState.md#signmessage)
- [signTransaction](WalletContextState.md#signtransaction)
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

[useWallet.ts:18](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L18)

___

### connected

• **connected**: `boolean`

#### Defined in

[useWallet.ts:24](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L24)

___

### connecting

• **connecting**: `boolean`

#### Defined in

[useWallet.ts:23](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L23)

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

[useWallet.ts:35](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L35)

___

### disconnecting

• **disconnecting**: `boolean`

#### Defined in

[useWallet.ts:25](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L25)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[useWallet.ts:21](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L21)

___

### requestViewKey

• **requestViewKey**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

##### Returns

`Promise`<`string`\>

#### Defined in

[useWallet.ts:36](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L36)

___

### sendTransaction

• **sendTransaction**: `undefined`

#### Defined in

[useWallet.ts:31](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L31)

___

### signAllTransactions

• **signAllTransactions**: <T\>(`transactions`: `T`[]) => `Promise`<`T`[]\>

#### Type declaration

▸ <`T`\>(`transactions`): `Promise`<`T`[]\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | `T`[] |

##### Returns

`Promise`<`T`[]\>

#### Defined in

[useWallet.ts:33](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L33)

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

[useWallet.ts:34](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L34)

___

### signTransaction

• **signTransaction**: <T\>(`transaction`: `T`) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`transaction`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `T` |

##### Returns

`Promise`<`T`\>

#### Defined in

[useWallet.ts:32](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L32)

___

### viewKey

• **viewKey**: `string`

#### Defined in

[useWallet.ts:22](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L22)

___

### wallet

• **wallet**: [`Wallet`](Wallet.md)

#### Defined in

[useWallet.ts:20](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L20)

___

### wallets

• **wallets**: [`Wallet`](Wallet.md)[]

#### Defined in

[useWallet.ts:19](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L19)

## Methods

### connect

▸ **connect**(`decryptPermission`, `network`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decryptPermission` | `DecryptPermission` |
| `network` | `WalletAdapterNetwork` |

#### Returns

`Promise`<`void`\>

#### Defined in

[useWallet.ts:28](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L28)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[useWallet.ts:29](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L29)

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

[useWallet.ts:27](https://github.com/demox-labs/aleo-wallet-adapter/blob/f19bfe5/packages/core/react/useWallet.ts#L27)
