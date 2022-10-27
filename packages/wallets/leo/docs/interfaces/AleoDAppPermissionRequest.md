[@demox-labs/aleo-wallet-adapter-leo](../README.md) / [Exports](../modules.md) / AleoDAppPermissionRequest

# Interface: AleoDAppPermissionRequest

## Hierarchy

- [`AleoDAppMessageBase`](AleoDAppMessageBase.md)

  ↳ **`AleoDAppPermissionRequest`**

## Table of contents

### Properties

- [appMeta](AleoDAppPermissionRequest.md#appmeta)
- [decryptPermission](AleoDAppPermissionRequest.md#decryptpermission)
- [force](AleoDAppPermissionRequest.md#force)
- [network](AleoDAppPermissionRequest.md#network)
- [type](AleoDAppPermissionRequest.md#type)

## Properties

### appMeta

• **appMeta**: [`AleoDAppMetadata`](AleoDAppMetadata.md)

#### Defined in

[types.ts:60](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L60)

___

### decryptPermission

• `Optional` **decryptPermission**: `string`

#### Defined in

[types.ts:62](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L62)

___

### force

• `Optional` **force**: `boolean`

#### Defined in

[types.ts:61](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L61)

___

### network

• **network**: [`AleoDAppNetwork`](../modules.md#aleodappnetwork)

#### Defined in

[types.ts:59](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L59)

___

### type

• **type**: [`PermissionRequest`](../enums/AleoDAppMessageType.md#permissionrequest)

#### Overrides

[AleoDAppMessageBase](AleoDAppMessageBase.md).[type](AleoDAppMessageBase.md#type)

#### Defined in

[types.ts:58](https://github.com/demox-labs/aleo-wallet-adapter/blob/77a8a54/packages/wallets/leo/types.ts#L58)
