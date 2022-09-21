export type TempleDAppMessage = TempleDAppRequest | TempleDAppResponse;

export type TempleDAppRequest =
  | TempleDAppGetCurrentPermissionRequest
  | TempleDAppPermissionRequest
  | TempleDAppOperationRequest
  | TempleDAppSignRequest
  | TempleDAppBroadcastRequest;

export type TempleDAppResponse =
  | TempleDAppGetCurrentPermissionResponse
  | TempleDAppPermissionResponse
  | TempleDAppOperationResponse
  | TempleDAppSignResponse
  | TempleDAppBroadcastResponse;

export interface TempleDAppMessageBase {
  type: TempleDAppMessageType;
}

export enum TempleDAppMessageType {
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

export interface TempleDAppGetCurrentPermissionRequest
  extends TempleDAppMessageBase {
  type: TempleDAppMessageType.GetCurrentPermissionRequest;
}

export interface TempleDAppGetCurrentPermissionResponse
  extends TempleDAppMessageBase {
  type: TempleDAppMessageType.GetCurrentPermissionResponse;
  permission: TempleDAppPermission;
}

export interface TempleDAppPermissionRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.PermissionRequest;
  network: TempleDAppNetwork;
  appMeta: TempleDAppMetadata;
  force?: boolean;
}

export interface TempleDAppPermissionResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.PermissionResponse;
  pkh: string;
  publicKey: string;
  rpc: string;
}

export interface TempleDAppOperationRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.OperationRequest;
  sourcePkh: string;
  opParams: any[];
}

export interface TempleDAppOperationResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.OperationResponse;
  opHash: string;
}

export interface TempleDAppSignRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.SignRequest;
  sourcePkh: string;
  payload: string;
}

export interface TempleDAppSignResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.SignResponse;
  signature: string;
}

export interface TempleDAppBroadcastRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.BroadcastRequest;
  signedOpBytes: string;
}

export interface TempleDAppBroadcastResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.BroadcastResponse;
  opHash: string;
}

/**
 * Errors
 */
export enum TempleDAppErrorType {
  NotGranted = "NOT_GRANTED",
  NotFound = "NOT_FOUND",
  InvalidParams = "INVALID_PARAMS",
  TezosOperation = "TEZOS_OPERATION",
}

/**
 * Misc
 */

export type TempleDAppPermission = {
  rpc: string;
  pkh: string;
  publicKey: string;
} | null;

export type TempleDAppNetwork =
  | "mainnet"
  | "ithacanet"
  | "hangzhounet"
  | "idiazabalnet"
  | "granadanet"
  | "edo2net"
  | "florencenet"
  | "sandbox"
  | { name: string; rpc: string };

export interface TempleDAppMetadata {
  name: string;
}

export interface TemplePageMessage {
  type: TemplePageMessageType;
  payload: any;
  reqId?: string | number;
}

export enum TemplePageMessageType {
  Request = "TEMPLE_PAGE_REQUEST",
  Response = "TEMPLE_PAGE_RESPONSE",
  ErrorResponse = "TEMPLE_PAGE_ERROR_RESPONSE",
}
