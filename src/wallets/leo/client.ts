import { nanoid } from "nanoid";
import {
  AleoPageMessageType,
  AleoPageMessage,
  AleoDAppMessageType,
  AleoDAppRequest,
  AleoDAppResponse,
  AleoDAppErrorType,
  AleoDAppNetwork,
  AleoDAppMetadata,
  AleoDAppPermission,
} from "./types";

export function isAvailable() {
  return new Promise<boolean>((resolve) => {
    const handleMessage = (evt: MessageEvent) => {
      if (
        evt.source === window &&
        evt.data?.type === AleoPageMessageType.Response &&
        evt.data?.payload === "PONG"
      ) {
        done(true);
      }
    };

    const done = (result: boolean) => {
      resolve(result);
      window.removeEventListener("message", handleMessage);
      clearTimeout(t);
    };

    send({
      type: AleoPageMessageType.Request,
      payload: "PING",
    });
    window.addEventListener("message", handleMessage);
    const t = setTimeout(() => done(false), 500);
  });
}

export function onAvailabilityChange(callback: (available: boolean) => void) {
  let t: any;
  let currentStatus = false;
  const check = async (attempt = 0) => {
    const initial = attempt < 5;
    const available = await isAvailable();
    if (currentStatus !== available) {
      callback(available);
      currentStatus = available;
    }
    t = setTimeout(
      check,
      available ? 10_000 : !initial ? 5_000 : 0,
      initial ? attempt + 1 : attempt
    );
  };
  check();
  return () => clearTimeout(t);
}

export function onPermissionChange(
  callback: (permission: AleoDAppPermission) => void
) {
  let t: any;
  let currentPerm: AleoDAppPermission = null;
  const check = async () => {
    try {
      const perm = await getCurrentPermission();
      if (!permissionsAreEqual(perm, currentPerm)) {
        callback(perm);
        currentPerm = perm;
      }
    } catch {}

    t = setTimeout(check, 10_000);
  };
  check();
  return () => clearTimeout(t);
}

export async function getCurrentPermission() {
  const res = await request({
    type: AleoDAppMessageType.GetCurrentPermissionRequest,
  });
  assertResponse(
    res.type === AleoDAppMessageType.GetCurrentPermissionResponse
  );
  return res.permission;
}

export async function requestPermission(
  network: AleoDAppNetwork,
  appMeta: AleoDAppMetadata,
  force: boolean
) {
  console.log('permission request');
  console.log(network);
  console.log(appMeta);
  console.log(force);
  const res = await request({
    type: AleoDAppMessageType.PermissionRequest,
    network,
    appMeta,
    force,
  });
  console.log(res);
  assertResponse(res.type === AleoDAppMessageType.PermissionResponse);
  return {
    rpc: res.rpc,
    publicKey: res.publicKey,
  };
}

export async function requestOperation(sourcePublicKey: string, opParams: any) {
  const res = await request({
    type: AleoDAppMessageType.OperationRequest,
    sourcePublicKey,
    opParams,
  });
  assertResponse(res.type === AleoDAppMessageType.OperationResponse);
  return res.opHash;
}

export async function requestSign(sourcePublicKey: string, payload: string) {
  const res = await request({
    type: AleoDAppMessageType.SignRequest,
    sourcePublicKey,
    payload,
  });
  assertResponse(res.type === AleoDAppMessageType.SignResponse);
  return res.signature;
}

export async function requestBroadcast(signedOpBytes: string) {
  const res = await request({
    type: AleoDAppMessageType.BroadcastRequest,
    signedOpBytes,
  });
  assertResponse(res.type === AleoDAppMessageType.BroadcastResponse);
  return res.opHash;
}

function request(payload: AleoDAppRequest) {
  return new Promise<AleoDAppResponse>((resolve, reject) => {
    console.log(payload);
    const reqId = nanoid();
    const handleMessage = (evt: MessageEvent) => {
      console.log(evt);
      const res = evt.data as AleoPageMessage;
      switch (true) {
        case evt.source !== window || res?.reqId !== reqId:
          return;

        case res?.type === AleoPageMessageType.Response:
          resolve(res.payload);
          window.removeEventListener("message", handleMessage);
          break;

        case res?.type === AleoPageMessageType.ErrorResponse:
          reject(createError(res.payload));
          window.removeEventListener("message", handleMessage);
          break;
      }
    };

    send({
      type: AleoPageMessageType.Request,
      payload,
      reqId,
    });

    window.addEventListener("message", handleMessage);
  });
}

function permissionsAreEqual(
  aPerm: AleoDAppPermission,
  bPerm: AleoDAppPermission
) {
  if (aPerm === null) return bPerm === null;
  return aPerm.publicKey === bPerm?.publicKey && aPerm.rpc === bPerm?.rpc;
}

function createError(payload: any) {
  console.log('createError');
  console.log(payload);
  switch (true) {
    case payload === AleoDAppErrorType.NotGranted:
      return new NotGrantedAleoWalletError();

    case payload === AleoDAppErrorType.NotFound:
      return new NotFoundAleoWalletError();

    case payload === AleoDAppErrorType.InvalidParams:
      return new InvalidParamsAleoWalletError();

    default:
      return new AleoWalletError();
  }
}

function assertResponse(condition: any): asserts condition {
  if (!condition) {
    throw new Error("Invalid response recieved");
  }
}

function send(msg: AleoPageMessage) {
  console.log('send');
  console.log(msg);
  window.postMessage(msg, "*");
}

export class AleoWalletError implements Error {
  name = "AleoWalletError";
  message = "An unknown error occured. Please try again or report it";
}

export class NotGrantedAleoWalletError extends AleoWalletError {
  name = "NotGrantedAleoWalletError";
  message = "Permission Not Granted";
}

export class NotFoundAleoWalletError extends AleoWalletError {
  name = "NotFoundAleoWalletError";
  message = "Account Not Found. Try connect again";
}

export class InvalidParamsAleoWalletError extends AleoWalletError {
  name = "InvalidParamsAleoWalletError";
  message = "Some of the parameters you provided are invalid";
}
