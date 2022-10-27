[@demox-labs/aleo-wallet-adapter-leo](README.md) / Exports

# @demox-labs/aleo-wallet-adapter-leo

## Table of contents

### Enumerations

- [AleoDAppErrorType](enums/AleoDAppErrorType.md)
- [AleoDAppMessageType](enums/AleoDAppMessageType.md)
- [AleoPageMessageType](enums/AleoPageMessageType.md)

### Classes

- [LeoWalletAdapter](classes/LeoWalletAdapter.md)

### Interfaces

- [AleoDAppBroadcastRequest](interfaces/AleoDAppBroadcastRequest.md)
- [AleoDAppBroadcastResponse](interfaces/AleoDAppBroadcastResponse.md)
- [AleoDAppDecryptRequest](interfaces/AleoDAppDecryptRequest.md)
- [AleoDAppDecryptResponse](interfaces/AleoDAppDecryptResponse.md)
- [AleoDAppGetCurrentPermissionRequest](interfaces/AleoDAppGetCurrentPermissionRequest.md)
- [AleoDAppGetCurrentPermissionResponse](interfaces/AleoDAppGetCurrentPermissionResponse.md)
- [AleoDAppMessageBase](interfaces/AleoDAppMessageBase.md)
- [AleoDAppMetadata](interfaces/AleoDAppMetadata.md)
- [AleoDAppOperationRequest](interfaces/AleoDAppOperationRequest.md)
- [AleoDAppOperationResponse](interfaces/AleoDAppOperationResponse.md)
- [AleoDAppPermissionRequest](interfaces/AleoDAppPermissionRequest.md)
- [AleoDAppPermissionResponse](interfaces/AleoDAppPermissionResponse.md)
- [AleoDAppSignRequest](interfaces/AleoDAppSignRequest.md)
- [AleoDAppSignResponse](interfaces/AleoDAppSignResponse.md)
- [AleoDAppViewKeyRequest](interfaces/AleoDAppViewKeyRequest.md)
- [AleoDAppViewKeyResponse](interfaces/AleoDAppViewKeyResponse.md)
- [AleoPageMessage](interfaces/AleoPageMessage.md)
- [LeoWalletAdapterConfig](interfaces/LeoWalletAdapterConfig.md)

### Type Aliases

- [AleoDAppDecryptPermission](modules.md#aleodappdecryptpermission)
- [AleoDAppMessage](modules.md#aleodappmessage)
- [AleoDAppNetwork](modules.md#aleodappnetwork)
- [AleoDAppPermission](modules.md#aleodapppermission)
- [AleoDAppRequest](modules.md#aleodapprequest)
- [AleoDAppResponse](modules.md#aleodappresponse)

### Variables

- [AleoDAppDecryptPermission](modules.md#aleodappdecryptpermission-1)
- [LeoWalletName](modules.md#leowalletname)

## Type Aliases

### AleoDAppDecryptPermission

Ƭ **AleoDAppDecryptPermission**: typeof [`AleoDAppDecryptPermission`](modules.md#aleodappdecryptpermission-1)[keyof typeof [`AleoDAppDecryptPermission`](modules.md#aleodappdecryptpermission-1)]

#### Defined in

[types.ts:139](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L139)

[types.ts:146](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L146)

___

### AleoDAppMessage

Ƭ **AleoDAppMessage**: [`AleoDAppRequest`](modules.md#aleodapprequest) \| [`AleoDAppResponse`](modules.md#aleodappresponse)

#### Defined in

[types.ts:1](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L1)

___

### AleoDAppNetwork

Ƭ **AleoDAppNetwork**: ``"testnet3"`` \| ``"mainnet"`` \| ``"sandbox"`` \| { `name`: `string` ; `rpc`: `string`  }

#### Defined in

[types.ts:155](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L155)

___

### AleoDAppPermission

Ƭ **AleoDAppPermission**: { `decryptPermission`: [`AleoDAppDecryptPermission`](modules.md#aleodappdecryptpermission-1) ; `publicKey`: `string` ; `rpc`: `string` ; `viewKey?`: `string`  } \| ``null``

#### Defined in

[types.ts:148](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L148)

___

### AleoDAppRequest

Ƭ **AleoDAppRequest**: [`AleoDAppGetCurrentPermissionRequest`](interfaces/AleoDAppGetCurrentPermissionRequest.md) \| [`AleoDAppPermissionRequest`](interfaces/AleoDAppPermissionRequest.md) \| [`AleoDAppOperationRequest`](interfaces/AleoDAppOperationRequest.md) \| [`AleoDAppSignRequest`](interfaces/AleoDAppSignRequest.md) \| [`AleoDAppViewKeyRequest`](interfaces/AleoDAppViewKeyRequest.md) \| [`AleoDAppBroadcastRequest`](interfaces/AleoDAppBroadcastRequest.md) \| [`AleoDAppDecryptRequest`](interfaces/AleoDAppDecryptRequest.md)

#### Defined in

[types.ts:3](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L3)

___

### AleoDAppResponse

Ƭ **AleoDAppResponse**: [`AleoDAppGetCurrentPermissionResponse`](interfaces/AleoDAppGetCurrentPermissionResponse.md) \| [`AleoDAppPermissionResponse`](interfaces/AleoDAppPermissionResponse.md) \| [`AleoDAppOperationResponse`](interfaces/AleoDAppOperationResponse.md) \| [`AleoDAppSignResponse`](interfaces/AleoDAppSignResponse.md) \| [`AleoDAppViewKeyResponse`](interfaces/AleoDAppViewKeyResponse.md) \| [`AleoDAppBroadcastResponse`](interfaces/AleoDAppBroadcastResponse.md) \| [`AleoDAppDecryptResponse`](interfaces/AleoDAppDecryptResponse.md)

#### Defined in

[types.ts:12](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L12)

## Variables

### AleoDAppDecryptPermission

• `Const` **AleoDAppDecryptPermission**: `Object`

Misc

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AutoDecrypt` | `string` |
| `NoDecrypt` | `string` |
| `UponRequest` | `string` |
| `ViewKeyAccess` | `string` |

#### Defined in

[types.ts:139](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L139)

[types.ts:146](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L146)

___

### LeoWalletName

• `Const` **LeoWalletName**: `WalletName`<``"Leo Wallet"``\>

#### Defined in

[adapter.ts:57](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/adapter.ts#L57)
