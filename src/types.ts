export type AleoDAppMessage = AleoDAppRequest | AleoDAppResponse;

export type AleoDAppRequest =
  | AleoDAppGetCurrentPermissionRequest
  | AleoDAppPermissionRequest
  | AleoDAppOperationRequest
  | AleoDAppSignRequest
  | AleoDAppBroadcastRequest;

export type AleoDAppResponse =
  | AleoDAppGetCurrentPermissionResponse
  | AleoDAppPermissionResponse
  | AleoDAppOperationResponse
  | AleoDAppSignResponse
  | AleoDAppBroadcastResponse;

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
  BroadcastRequest = "BROADCAST_REQUEST",
  BroadcastResponse = "BROADCAST_RESPONSE",
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
}

export interface AleoDAppPermissionResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.PermissionResponse;
  pkh: string;
  publicKey: string;
  rpc: string;
}

export interface AleoDAppOperationRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.OperationRequest;
  sourcePkh: string;
  opParams: any[];
}

export interface AleoDAppOperationResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.OperationResponse;
  opHash: string;
}

export interface AleoDAppSignRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.SignRequest;
  sourcePkh: string;
  payload: string;
}

export interface AleoDAppSignResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.SignResponse;
  signature: string;
}

export interface AleoDAppBroadcastRequest extends AleoDAppMessageBase {
  type: AleoDAppMessageType.BroadcastRequest;
  signedOpBytes: string;
}

export interface AleoDAppBroadcastResponse extends AleoDAppMessageBase {
  type: AleoDAppMessageType.BroadcastResponse;
  opHash: string;
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

export type AleoDAppPermission = {
  rpc: string;
  pkh: string;
  publicKey: string;
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
  Request = "TEMPLE_PAGE_REQUEST",
  Response = "TEMPLE_PAGE_RESPONSE",
  ErrorResponse = "TEMPLE_PAGE_ERROR_RESPONSE",
}
