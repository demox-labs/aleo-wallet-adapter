[@demox-labs/aleo-wallet-adapter-base](README.md) / Exports

# @demox-labs/aleo-wallet-adapter-base

## Table of contents

### Namespaces

- [EventEmitter](modules/EventEmitter.md)

### Enumerations

- [DecryptPermission](enums/DecryptPermission.md)
- [WalletAdapterNetwork](enums/WalletAdapterNetwork.md)
- [WalletReadyState](enums/WalletReadyState.md)

### Classes

- [BaseMessageSignerWalletAdapter](classes/BaseMessageSignerWalletAdapter.md)
- [BaseSignerWalletAdapter](classes/BaseSignerWalletAdapter.md)
- [BaseWalletAdapter](classes/BaseWalletAdapter.md)
- [Deployment](classes/Deployment.md)
- [EventEmitter](classes/EventEmitter-1.md)
- [Transaction](classes/Transaction.md)
- [Transition](classes/Transition.md)
- [WalletAccountError](classes/WalletAccountError.md)
- [WalletConfigError](classes/WalletConfigError.md)
- [WalletConnectionError](classes/WalletConnectionError.md)
- [WalletDecryptionError](classes/WalletDecryptionError.md)
- [WalletDecryptionNotAllowedError](classes/WalletDecryptionNotAllowedError.md)
- [WalletDisconnectedError](classes/WalletDisconnectedError.md)
- [WalletDisconnectionError](classes/WalletDisconnectionError.md)
- [WalletError](classes/WalletError.md)
- [WalletKeypairError](classes/WalletKeypairError.md)
- [WalletLoadError](classes/WalletLoadError.md)
- [WalletNotConnectedError](classes/WalletNotConnectedError.md)
- [WalletNotReadyError](classes/WalletNotReadyError.md)
- [WalletNotSelectedError](classes/WalletNotSelectedError.md)
- [WalletPublicKeyError](classes/WalletPublicKeyError.md)
- [WalletRecordsError](classes/WalletRecordsError.md)
- [WalletSendTransactionError](classes/WalletSendTransactionError.md)
- [WalletSignMessageError](classes/WalletSignMessageError.md)
- [WalletSignTransactionError](classes/WalletSignTransactionError.md)
- [WalletTimeoutError](classes/WalletTimeoutError.md)
- [WalletTransactionError](classes/WalletTransactionError.md)
- [WalletWindowBlockedError](classes/WalletWindowBlockedError.md)
- [WalletWindowClosedError](classes/WalletWindowClosedError.md)

### Interfaces

- [AleoDeployment](interfaces/AleoDeployment.md)
- [AleoTransaction](interfaces/AleoTransaction.md)
- [AleoTransition](interfaces/AleoTransition.md)
- [MessageSignerWalletAdapterProps](interfaces/MessageSignerWalletAdapterProps.md)
- [SignerWalletAdapterProps](interfaces/SignerWalletAdapterProps.md)
- [WalletAdapterEvents](interfaces/WalletAdapterEvents.md)
- [WalletAdapterProps](interfaces/WalletAdapterProps.md)

### Type Aliases

- [Adapter](modules.md#adapter)
- [MessageSignerWalletAdapter](modules.md#messagesignerwalletadapter)
- [SignerWalletAdapter](modules.md#signerwalletadapter)
- [SupportedTransactionVersions](modules.md#supportedtransactionversions)
- [TransactionOrVersionedTransaction](modules.md#transactionorversionedtransaction)
- [WalletAdapter](modules.md#walletadapter)
- [WalletName](modules.md#walletname)

### Functions

- [scopePollingDetectionStrategy](modules.md#scopepollingdetectionstrategy)

## Type Aliases

### Adapter

Ƭ **Adapter**: [`WalletAdapter`](modules.md#walletadapter) \| [`SignerWalletAdapter`](modules.md#signerwalletadapter) \| [`MessageSignerWalletAdapter`](modules.md#messagesignerwalletadapter)

#### Defined in

[signer.ts:6](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L6)

___

### MessageSignerWalletAdapter

Ƭ **MessageSignerWalletAdapter**<`Name`\>: [`WalletAdapter`](modules.md#walletadapter)<`Name`\> & [`MessageSignerWalletAdapterProps`](interfaces/MessageSignerWalletAdapterProps.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Defined in

[signer.ts:41](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L41)

___

### SignerWalletAdapter

Ƭ **SignerWalletAdapter**<`Name`\>: [`WalletAdapter`](modules.md#walletadapter)<`Name`\> & [`SignerWalletAdapterProps`](interfaces/SignerWalletAdapterProps.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Defined in

[signer.ts:10](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/signer.ts#L10)

___

### SupportedTransactionVersions

Ƭ **SupportedTransactionVersions**: `ReadonlySet`<`any`\> \| ``null``

#### Defined in

[types.ts:5](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/types.ts#L5)

___

### TransactionOrVersionedTransaction

Ƭ **TransactionOrVersionedTransaction**<`S`\>: `S` extends ``null`` ? `any` : `any` \| `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`SupportedTransactionVersions`](modules.md#supportedtransactionversions) |

#### Defined in

[types.ts:7](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/types.ts#L7)

___

### WalletAdapter

Ƭ **WalletAdapter**<`Name`\>: [`WalletAdapterProps`](interfaces/WalletAdapterProps.md)<`Name`\> & [`EventEmitter`](classes/EventEmitter-1.md)<[`WalletAdapterEvents`](interfaces/WalletAdapterEvents.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Defined in

[adapter.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L32)

___

### WalletName

Ƭ **WalletName**<`T`\>: `T` & { `__brand__`: ``"WalletName"``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

#### Defined in

[adapter.ts:16](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L16)

## Functions

### scopePollingDetectionStrategy

▸ **scopePollingDetectionStrategy**(`detect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `detect` | () => `boolean` |

#### Returns

`void`

#### Defined in

[adapter.ts:83](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L83)
