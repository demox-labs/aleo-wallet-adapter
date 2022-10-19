export type AleoDAppMessage = AleoDAppRequest | AleoDAppResponse;

export type AleoDAppRequest =
  | AleoDAppGetCurrentPermissionRequest
  | AleoDAppPermissionRequest
  | AleoDAppOperationRequest
  | AleoDAppSignRequest
  | AleoDAppViewKeyRequest
  | AleoDAppBroadcastRequest
  | AleoDAppDecryptRequest;

export type AleoDAppResponse =
  | AleoDAppGetCurrentPermissionResponse
  | AleoDAppPermissionResponse
  | AleoDAppOperationResponse
  | AleoDAppSignResponse
  | AleoDAppViewKeyResponse
  | AleoDAppBroadcastResponse
  | AleoDAppDecryptResponse;

export interface AleoDAppMessageBase {
  type: AleoDAppMessageType;
}

export enum AleoDAppMessageType {
  GetCurrentPermissionRequest = "GET_CURRENT_PERMISSION_REQUEST",
  GetCurrentPermissionResponse = "GET_CURRENT_PERMISSION_RESPONSE",
  PermissionRequest = "PERMISSION_REQUEST",
  PermissionResponse = "PERMISSION_RESPONSE",
  OperationRequest = "OPERATION_REQUEST",
  OperationResponse = "OPERATION_RESPONSE",
  SignRequest = "SIGN_REQUEST",
  SignResponse = "SIGN_RESPONSE",
  ViewKeyRequest = "VIEWKEY_REQUEST",
  ViewKeyResponse = "VIEWKEY_RESPONSE",
  BroadcastRequest = "BROADCAST_REQUEST",
  BroadcastResponse = "BROADCAST_RESPONSE",
  DecryptRequest = "DECRYPT_REQUEST",
  DecryptResponse = "DECRYPT_RESPONSE"
}

/**
 * Messages
 */

export interface AleoDAppGetCurrentPermissionRequest
  extends AleoDAppMessageBase {
  type: AleoDAppMessageType.GetCurrentPermissionRequest;
}

export interface AleoDAppGetCurrentPermissionResponse
  extends AleoDAppMessageBase {
  type: AleoDAppMessageType.GetCurrentPermissionResponse;
  permission: AleoDAppPermission;
}

export interface AleoDAppPermissionRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.PermissionRequest;
  network: AleoDAppNetwork;
  appMeta: AleoDAppMetadata;
  force?: boolean;
  decryptPermission?: AleoDAppDecryptPermission;
}

export interface AleoDAppPermissionResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.PermissionResponse;
  publicKey: string;
  rpc: string;
  decryptPermission: AleoDAppDecryptPermission;
  viewKey?: string;
}

export interface AleoDAppOperationRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.OperationRequest;
  sourcePublicKey: string;
  opParams: any[];
}

export interface AleoDAppOperationResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.OperationResponse;
  opHash: string;
}

export interface AleoDAppSignRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.SignRequest;
  sourcePublicKey: string;
  payload: string;
}

export interface AleoDAppSignResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.SignResponse;
  signature: string;
}

export interface AleoDAppViewKeyRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.ViewKeyRequest;
  sourcePublicKey: string;
}

export interface AleoDAppViewKeyResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.ViewKeyResponse;
  viewKey: string;
}

export interface AleoDAppBroadcastRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.BroadcastRequest;
  signedOpBytes: string;
}

export interface AleoDAppBroadcastResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.BroadcastResponse;
  opHash: string;
}

export interface AleoDAppDecryptRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.DecryptRequest;
  sourcePublicKey: string;
  cipherText: string;
}

export interface AleoDAppDecryptResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.DecryptResponse;
  text: string;
}

/**
 * Errors
 */
export enum AleoDAppErrorType {
  NotGranted = "NOT_GRANTED",
  NotFound = "NOT_FOUND",
  InvalidParams = "INVALID_PARAMS",
}

/**
 * Misc
 */

export const AleoDAppDecryptPermission = {
  NoDecrypt: 'NO_DECRYPT', // The App cannot decrypt any records
  UponRequest: 'DECRYPT_UPON_REQUEST',
  AutoDecrypt: 'AUTO_DECRYPT', // The App can decrypt any requested records
  ViewKeyAccess: 'VIEW_KEY_ACCESS' // The App gets the View Key of the connected wallet
};

export type AleoDAppDecryptPermission = typeof AleoDAppDecryptPermission[keyof typeof AleoDAppDecryptPermission];

export type AleoDAppPermission = {
  rpc: string;
  publicKey: string;
  decryptPermission: AleoDAppDecryptPermission;
  viewKey?: string;
} | null;

export type AleoDAppNetwork =
  | "testnet3"
  | "mainnet"
  | "sandbox"
  | { name: string; rpc: string };

export interface AleoDAppMetadata {
  name: string;
}

export interface AleoPageMessage {
  type: AleoPageMessageType;
  payload: any;
  reqId?: string | number;
}

export enum AleoPageMessageType {
  Request = "ALEO_PAGE_REQUEST",
  Response = "ALEO_PAGE_RESPONSE",
  ErrorResponse = "ALEO_PAGE_ERROR_RESPONSE",
}
