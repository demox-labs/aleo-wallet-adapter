[@demox-labs/aleo-wallet-adapter-leo](../README.md) / [Exports](../modules.md) / AleoDAppGetCurrentPermissionResponse

# Interface: AleoDAppGetCurrentPermissionResponse

## Hierarchy

- [`AleoDAppMessageBase`](AleoDAppMessageBase.md)

  ↳ **`AleoDAppGetCurrentPermissionResponse`**

## Table of contents

### Properties

- [permission](AleoDAppGetCurrentPermissionResponse.md#permission)
- [type](AleoDAppGetCurrentPermissionResponse.md#type)

## Properties

### permission

• **permission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decryptPermission` | `string` |
| `publicKey` | `string` |
| `rpc` | `string` |
| `viewKey?` | `string` |

#### Defined in

[types.ts:54](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L54)

___

### type

• **type**: [`GetCurrentPermissionResponse`](../enums/AleoDAppMessageType.md#getcurrentpermissionresponse)

#### Overrides

[AleoDAppMessageBase](AleoDAppMessageBase.md).[type](AleoDAppMessageBase.md#type)

#### Defined in

[types.ts:53](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L53)
