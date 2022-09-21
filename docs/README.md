[@temple-wallet/dapp](README.md)

# @temple-wallet/dapp

## Index

### Enumerations

* [TempleDAppErrorType](enums/templedapperrortype.md)
* [TempleDAppMessageType](enums/templedappmessagetype.md)
* [TemplePageMessageType](enums/templepagemessagetype.md)

### Classes

* [InvalidParamsTempleWalletError](classes/invalidparamstemplewalleterror.md)
* [NotConnectedTempleWalletError](classes/notconnectedtemplewalleterror.md)
* [NotFoundTempleWalletError](classes/notfoundtemplewalleterror.md)
* [NotGrantedTempleWalletError](classes/notgrantedtemplewalleterror.md)
* [TempleWallet](classes/templewallet.md)
* [TempleWalletError](classes/templewalleterror.md)

### Interfaces

* [TempleDAppBroadcastRequest](interfaces/templedappbroadcastrequest.md)
* [TempleDAppBroadcastResponse](interfaces/templedappbroadcastresponse.md)
* [TempleDAppGetCurrentPermissionRequest](interfaces/templedappgetcurrentpermissionrequest.md)
* [TempleDAppGetCurrentPermissionResponse](interfaces/templedappgetcurrentpermissionresponse.md)
* [TempleDAppMessageBase](interfaces/templedappmessagebase.md)
* [TempleDAppMetadata](interfaces/templedappmetadata.md)
* [TempleDAppOperationRequest](interfaces/templedappoperationrequest.md)
* [TempleDAppOperationResponse](interfaces/templedappoperationresponse.md)
* [TempleDAppPermissionRequest](interfaces/templedapppermissionrequest.md)
* [TempleDAppPermissionResponse](interfaces/templedapppermissionresponse.md)
* [TempleDAppSignRequest](interfaces/templedappsignrequest.md)
* [TempleDAppSignResponse](interfaces/templedappsignresponse.md)
* [TemplePageMessage](interfaces/templepagemessage.md)

### Type aliases

* [TempleDAppMessage](README.md#templedappmessage)
* [TempleDAppNetwork](README.md#templedappnetwork)
* [TempleDAppPermission](README.md#templedapppermission)
* [TempleDAppRequest](README.md#templedapprequest)
* [TempleDAppResponse](README.md#templedappresponse)

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

###  TempleDAppMessage

Ƭ **TempleDAppMessage**: *[TempleDAppRequest](README.md#templedapprequest) | [TempleDAppResponse](README.md#templedappresponse)*

*Defined in [types.ts:1](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/types.ts#L1)*

___

###  TempleDAppNetwork

Ƭ **TempleDAppNetwork**: *"mainnet" | "ithacanet" | "hangzhounet" | "idiazabalnet" | "granadanet" | "edo2net" | "florencenet" | "sandbox" | object*

*Defined in [types.ts:115](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/types.ts#L115)*

___

###  TempleDAppPermission

Ƭ **TempleDAppPermission**: *object | null*

*Defined in [types.ts:109](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/types.ts#L109)*

Misc

___

###  TempleDAppRequest

Ƭ **TempleDAppRequest**: *[TempleDAppGetCurrentPermissionRequest](interfaces/templedappgetcurrentpermissionrequest.md) | [TempleDAppPermissionRequest](interfaces/templedapppermissionrequest.md) | [TempleDAppOperationRequest](interfaces/templedappoperationrequest.md) | [TempleDAppSignRequest](interfaces/templedappsignrequest.md) | [TempleDAppBroadcastRequest](interfaces/templedappbroadcastrequest.md)*

*Defined in [types.ts:3](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/types.ts#L3)*

___

###  TempleDAppResponse

Ƭ **TempleDAppResponse**: *[TempleDAppGetCurrentPermissionResponse](interfaces/templedappgetcurrentpermissionresponse.md) | [TempleDAppPermissionResponse](interfaces/templedapppermissionresponse.md) | [TempleDAppOperationResponse](interfaces/templedappoperationresponse.md) | [TempleDAppSignResponse](interfaces/templedappsignresponse.md) | [TempleDAppBroadcastResponse](interfaces/templedappbroadcastresponse.md)*

*Defined in [types.ts:10](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/types.ts#L10)*

## Functions

###  assertConnected

▸ **assertConnected**(`perm`: [TempleDAppPermission](README.md#templedapppermission)): *asserts perm*

*Defined in [taquito-wallet.ts:156](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`perm` | [TempleDAppPermission](README.md#templedapppermission) |

**Returns:** *asserts perm*

___

###  assertResponse

▸ **assertResponse**(`condition`: any): *asserts condition*

*Defined in [client.ts:204](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | any |

**Returns:** *asserts condition*

___

###  createError

▸ **createError**(`payload`: any): *[TempleWalletError](classes/templewalleterror.md)‹›*

*Defined in [client.ts:179](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *[TempleWalletError](classes/templewalleterror.md)‹›*

___

###  formatOpParams

▸ **formatOpParams**(`op`: any): *any*

*Defined in [taquito-wallet.ts:162](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`op` | any |

**Returns:** *any*

___

###  getCurrentPermission

▸ **getCurrentPermission**(): *Promise‹null | object›*

*Defined in [client.ts:82](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L82)*

**Returns:** *Promise‹null | object›*

___

###  isAvailable

▸ **isAvailable**(): *Promise‹boolean›*

*Defined in [client.ts:15](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L15)*

**Returns:** *Promise‹boolean›*

___

###  onAvailabilityChange

▸ **onAvailabilityChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:42](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L42)*

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

*Defined in [client.ts:62](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L62)*

**Parameters:**

▪ **callback**: *function*

▸ (`permission`: [TempleDAppPermission](README.md#templedapppermission)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`permission` | [TempleDAppPermission](README.md#templedapppermission) |

**Returns:** *(Anonymous function)*

___

###  permissionsAreEqual

▸ **permissionsAreEqual**(`aPerm`: [TempleDAppPermission](README.md#templedapppermission), `bPerm`: [TempleDAppPermission](README.md#templedapppermission)): *boolean*

*Defined in [client.ts:171](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`aPerm` | [TempleDAppPermission](README.md#templedapppermission) |
`bPerm` | [TempleDAppPermission](README.md#templedapppermission) |

**Returns:** *boolean*

___

###  request

▸ **request**(`payload`: [TempleDAppRequest](README.md#templedapprequest)): *Promise‹[TempleDAppGetCurrentPermissionResponse](interfaces/templedappgetcurrentpermissionresponse.md) | [TempleDAppPermissionResponse](interfaces/templedapppermissionresponse.md) | [TempleDAppOperationResponse](interfaces/templedappoperationresponse.md) | [TempleDAppSignResponse](interfaces/templedappsignresponse.md) | [TempleDAppBroadcastResponse](interfaces/templedappbroadcastresponse.md)›*

*Defined in [client.ts:140](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [TempleDAppRequest](README.md#templedapprequest) |

**Returns:** *Promise‹[TempleDAppGetCurrentPermissionResponse](interfaces/templedappgetcurrentpermissionresponse.md) | [TempleDAppPermissionResponse](interfaces/templedapppermissionresponse.md) | [TempleDAppOperationResponse](interfaces/templedappoperationresponse.md) | [TempleDAppSignResponse](interfaces/templedappsignresponse.md) | [TempleDAppBroadcastResponse](interfaces/templedappbroadcastresponse.md)›*

___

###  requestBroadcast

▸ **requestBroadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [client.ts:131](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  requestOperation

▸ **requestOperation**(`sourcePkh`: string, `opParams`: any): *Promise‹string›*

*Defined in [client.ts:111](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`opParams` | any |

**Returns:** *Promise‹string›*

___

###  requestPermission

▸ **requestPermission**(`network`: [TempleDAppNetwork](README.md#templedappnetwork), `appMeta`: [TempleDAppMetadata](interfaces/templedappmetadata.md), `force`: boolean): *Promise‹object›*

*Defined in [client.ts:92](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [TempleDAppNetwork](README.md#templedappnetwork) |
`appMeta` | [TempleDAppMetadata](interfaces/templedappmetadata.md) |
`force` | boolean |

**Returns:** *Promise‹object›*

___

###  requestSign

▸ **requestSign**(`sourcePkh`: string, `payload`: string): *Promise‹string›*

*Defined in [client.ts:121](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  send

▸ **send**(`msg`: [TemplePageMessage](interfaces/templepagemessage.md)): *void*

*Defined in [client.ts:210](https://github.com/madfish-solutions/templewallet-dapp/blob/0871fa5/src/client.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [TemplePageMessage](interfaces/templepagemessage.md) |

**Returns:** *void*
