[@demox-labs/leo-wallet-adapter](README.md)

# @demox-labs/leo-wallet-adapter

## Index

### Enumerations

* [AleoDAppErrorType](enums/aleodapperrortype.md)
* [AleoDAppMessageType](enums/aleodappmessagetype.md)
* [AleoPageMessageType](enums/aleopagemessagetype.md)

### Classes

* [InvalidParamsAleoWalletError](classes/invalidparamsaleowalleterror.md)
* [NotConnectedAleoWalletError](classes/notconnectedaleowalleterror.md)
* [NotFoundAleoWalletError](classes/notfoundaleowalleterror.md)
* [NotGrantedAleoWalletError](classes/notgrantedaleowalleterror.md)
* [AleoWallet](classes/aleowallet.md)
* [AleoWalletError](classes/aleowalleterror.md)

### Interfaces

* [AleoDAppBroadcastRequest](interfaces/aleodappbroadcastrequest.md)
* [AleoDAppBroadcastResponse](interfaces/aleodappbroadcastresponse.md)
* [AleoDAppGetCurrentPermissionRequest](interfaces/aleodappgetcurrentpermissionrequest.md)
* [AleoDAppGetCurrentPermissionResponse](interfaces/aleodappgetcurrentpermissionresponse.md)
* [AleoDAppMessageBase](interfaces/aleodappmessagebase.md)
* [AleoDAppMetadata](interfaces/aleodappmetadata.md)
* [AleoDAppOperationRequest](interfaces/aleodappoperationrequest.md)
* [AleoDAppOperationResponse](interfaces/aleodappoperationresponse.md)
* [AleoDAppPermissionRequest](interfaces/aleodapppermissionrequest.md)
* [AleoDAppPermissionResponse](interfaces/aleodapppermissionresponse.md)
* [AleoDAppSignRequest](interfaces/aleodappsignrequest.md)
* [AleoDAppSignResponse](interfaces/aleodappsignresponse.md)
* [AleoPageMessage](interfaces/aleopagemessage.md)

### Type aliases

* [AleoDAppMessage](README.md#aleodappmessage)
* [AleoDAppNetwork](README.md#aleodappnetwork)
* [AleoDAppPermission](README.md#aleodapppermission)
* [AleoDAppRequest](README.md#aleodapprequest)
* [AleoDAppResponse](README.md#aleodappresponse)

### Functions

* [assertConnected](README.md#assertconnected)
* [assertResponse](README.md#assertresponse)
* [createError](README.md#createerror)
* [formatOpParams](README.md#formatopparams)
* [getCurrentPermission](README.md#getcurrentpermission)
* [isAvailable](README.md#isavailable)
* [onAvailabilityChange](README.md#onavailabilitychange)
* [onPermissionChange](README.md#onpermissionchange)
* [permissionsAreEqual](README.md#permissionsareequal)
* [request](README.md#request)
* [requestBroadcast](README.md#requestbroadcast)
* [requestOperation](README.md#requestoperation)
* [requestPermission](README.md#requestpermission)
* [requestSign](README.md#requestsign)
* [send](README.md#send)

## Type aliases

###  AleoDAppMessage

Ƭ **AleoDAppMessage**: *[AleoDAppRequest](README.md#aleodapprequest) | [AleoDAppResponse](README.md#aleodappresponse)*

*Defined in [types.ts:1](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/types.ts#L1)*

___

###  AleoDAppNetwork

Ƭ **AleoDAppNetwork**: *"mainnet" | "ithacanet" | "hangzhounet" | "idiazabalnet" | "granadanet" | "edo2net" | "florencenet" | "sandbox" | object*

*Defined in [types.ts:115](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/types.ts#L115)*

___

###  AleoDAppPermission

Ƭ **AleoDAppPermission**: *object | null*

*Defined in [types.ts:109](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/types.ts#L109)*

Misc

___

###  AleoDAppRequest

Ƭ **AleoDAppRequest**: *[AleoDAppGetCurrentPermissionRequest](interfaces/aleodappgetcurrentpermissionrequest.md) | [AleoDAppPermissionRequest](interfaces/aleodapppermissionrequest.md) | [AleoDAppOperationRequest](interfaces/aleodappoperationrequest.md) | [AleoDAppSignRequest](interfaces/aleodappsignrequest.md) | [AleoDAppBroadcastRequest](interfaces/aleodappbroadcastrequest.md)*

*Defined in [types.ts:3](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/types.ts#L3)*

___

###  AleoDAppResponse

Ƭ **AleoDAppResponse**: *[AleoDAppGetCurrentPermissionResponse](interfaces/aleodappgetcurrentpermissionresponse.md) | [AleoDAppPermissionResponse](interfaces/aleodapppermissionresponse.md) | [AleoDAppOperationResponse](interfaces/aleodappoperationresponse.md) | [AleoDAppSignResponse](interfaces/aleodappsignresponse.md) | [AleoDAppBroadcastResponse](interfaces/aleodappbroadcastresponse.md)*

*Defined in [types.ts:10](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/types.ts#L10)*

## Functions

###  assertConnected

▸ **assertConnected**(`perm`: [AleoDAppPermission](README.md#aleodapppermission)): *asserts perm*

*Defined in [taquito-wallet.ts:156](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`perm` | [AleoDAppPermission](README.md#aleodapppermission) |

**Returns:** *asserts perm*

___

###  assertResponse

▸ **assertResponse**(`condition`: any): *asserts condition*

*Defined in [client.ts:204](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | any |

**Returns:** *asserts condition*

___

###  createError

▸ **createError**(`payload`: any): *[AleoWalletError](classes/aleowalleterror.md)‹›*

*Defined in [client.ts:179](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *[AleoWalletError](classes/aleowalleterror.md)‹›*

___

###  formatOpParams

▸ **formatOpParams**(`op`: any): *any*

*Defined in [taquito-wallet.ts:162](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`op` | any |

**Returns:** *any*

___

###  getCurrentPermission

▸ **getCurrentPermission**(): *Promise‹null | object›*

*Defined in [client.ts:82](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L82)*

**Returns:** *Promise‹null | object›*

___

###  isAvailable

▸ **isAvailable**(): *Promise‹boolean›*

*Defined in [client.ts:15](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L15)*

**Returns:** *Promise‹boolean›*

___

###  onAvailabilityChange

▸ **onAvailabilityChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:42](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L42)*

**Parameters:**

▪ **callback**: *function*

▸ (`available`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`available` | boolean |

**Returns:** *(Anonymous function)*

___

###  onPermissionChange

▸ **onPermissionChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:62](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L62)*

**Parameters:**

▪ **callback**: *function*

▸ (`permission`: [AleoDAppPermission](README.md#aleodapppermission)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`permission` | [AleoDAppPermission](README.md#aleodapppermission) |

**Returns:** *(Anonymous function)*

___

###  permissionsAreEqual

▸ **permissionsAreEqual**(`aPerm`: [AleoDAppPermission](README.md#aleodapppermission), `bPerm`: [AleoDAppPermission](README.md#aleodapppermission)): *boolean*

*Defined in [client.ts:171](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`aPerm` | [AleoDAppPermission](README.md#aleodapppermission) |
`bPerm` | [AleoDAppPermission](README.md#aleodapppermission) |

**Returns:** *boolean*

___

###  request

▸ **request**(`payload`: [AleoDAppRequest](README.md#aleodapprequest)): *Promise‹[AleoDAppGetCurrentPermissionResponse](interfaces/aleodappgetcurrentpermissionresponse.md) | [AleoDAppPermissionResponse](interfaces/aleodapppermissionresponse.md) | [AleoDAppOperationResponse](interfaces/aleodappoperationresponse.md) | [AleoDAppSignResponse](interfaces/aleodappsignresponse.md) | [AleoDAppBroadcastResponse](interfaces/aleodappbroadcastresponse.md)›*

*Defined in [client.ts:140](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [AleoDAppRequest](README.md#aleodapprequest) |

**Returns:** *Promise‹[AleoDAppGetCurrentPermissionResponse](interfaces/aleodappgetcurrentpermissionresponse.md) | [AleoDAppPermissionResponse](interfaces/aleodapppermissionresponse.md) | [AleoDAppOperationResponse](interfaces/aleodappoperationresponse.md) | [AleoDAppSignResponse](interfaces/aleodappsignresponse.md) | [AleoDAppBroadcastResponse](interfaces/aleodappbroadcastresponse.md)›*

___

###  requestBroadcast

▸ **requestBroadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [client.ts:131](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  requestOperation

▸ **requestOperation**(`sourcePkh`: string, `opParams`: any): *Promise‹string›*

*Defined in [client.ts:111](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`opParams` | any |

**Returns:** *Promise‹string›*

___

###  requestPermission

▸ **requestPermission**(`network`: [AleoDAppNetwork](README.md#aleodappnetwork), `appMeta`: [AleoDAppMetadata](interfaces/aleodappmetadata.md), `force`: boolean): *Promise‹object›*

*Defined in [client.ts:92](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [AleoDAppNetwork](README.md#aleodappnetwork) |
`appMeta` | [AleoDAppMetadata](interfaces/aleodappmetadata.md) |
`force` | boolean |

**Returns:** *Promise‹object›*

___

###  requestSign

▸ **requestSign**(`sourcePkh`: string, `payload`: string): *Promise‹string›*

*Defined in [client.ts:121](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  send

▸ **send**(`msg`: [AleoPageMessage](interfaces/aleopagemessage.md)): *void*

*Defined in [client.ts:210](https://github.com/madfish-solutions/aleowallet-dapp/blob/0871fa5/src/client.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [AleoPageMessage](interfaces/aleopagemessage.md) |

**Returns:** *void*
