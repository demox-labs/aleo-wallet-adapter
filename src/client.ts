import { nanoid } from "nanoid";
import { TezosOperationError } from "@taquito/taquito";
import {
  TemplePageMessageType,
  TemplePageMessage,
  TempleDAppMessageType,
  TempleDAppRequest,
  TempleDAppResponse,
  TempleDAppErrorType,
  TempleDAppNetwork,
  TempleDAppMetadata,
  TempleDAppPermission,
} from "./types";

export function isAvailable() {
  return new Promise<boolean>((resolve) => {
    const handleMessage = (evt: MessageEvent) => {
      if (
        evt.source === window &&
        evt.data?.type === TemplePageMessageType.Response &&
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
      type: TemplePageMessageType.Request,
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
  callback: (permission: TempleDAppPermission) => void
) {
  let t: any;
  let currentPerm: TempleDAppPermission = null;
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
    type: TempleDAppMessageType.GetCurrentPermissionRequest,
  });
  assertResponse(
    res.type === TempleDAppMessageType.GetCurrentPermissionResponse
  );
  return res.permission;
}

export async function requestPermission(
  network: TempleDAppNetwork,
  appMeta: TempleDAppMetadata,
  force: boolean
) {
  const res = await request({
    type: TempleDAppMessageType.PermissionRequest,
    network,
    appMeta,
    force,
  });
  assertResponse(res.type === TempleDAppMessageType.PermissionResponse);
  return {
    rpc: res.rpc,
    pkh: res.pkh,
    publicKey: res.publicKey,
  };
}

export async function requestOperation(sourcePkh: string, opParams: any) {
  const res = await request({
    type: TempleDAppMessageType.OperationRequest,
    sourcePkh,
    opParams,
  });
  assertResponse(res.type === TempleDAppMessageType.OperationResponse);
  return res.opHash;
}

export async function requestSign(sourcePkh: string, payload: string) {
  const res = await request({
    type: TempleDAppMessageType.SignRequest,
    sourcePkh,
    payload,
  });
  assertResponse(res.type === TempleDAppMessageType.SignResponse);
  return res.signature;
}

export async function requestBroadcast(signedOpBytes: string) {
  const res = await request({
    type: TempleDAppMessageType.BroadcastRequest,
    signedOpBytes,
  });
  assertResponse(res.type === TempleDAppMessageType.BroadcastResponse);
  return res.opHash;
}

function request(payload: TempleDAppRequest) {
  return new Promise<TempleDAppResponse>((resolve, reject) => {
    const reqId = nanoid();
    const handleMessage = (evt: MessageEvent) => {
      const res = evt.data as TemplePageMessage;
      switch (true) {
        case evt.source !== window || res?.reqId !== reqId:
          return;

        case res?.type === TemplePageMessageType.Response:
          resolve(res.payload);
          window.removeEventListener("message", handleMessage);
          break;

        case res?.type === TemplePageMessageType.ErrorResponse:
          reject(createError(res.payload));
          window.removeEventListener("message", handleMessage);
          break;
      }
    };

    send({
      type: TemplePageMessageType.Request,
      payload,
      reqId,
    });

    window.addEventListener("message", handleMessage);
  });
}

function permissionsAreEqual(
  aPerm: TempleDAppPermission,
  bPerm: TempleDAppPermission
) {
  if (aPerm === null) return bPerm === null;
  return aPerm.pkh === bPerm?.pkh && aPerm.rpc === bPerm?.rpc;
}

function createError(payload: any) {
  switch (true) {
    case payload === TempleDAppErrorType.NotGranted:
      return new NotGrantedTempleWalletError();

    case payload === TempleDAppErrorType.NotFound:
      return new NotFoundTempleWalletError();

    case payload === TempleDAppErrorType.InvalidParams:
      return new InvalidParamsTempleWalletError();

    case Array.isArray(payload) &&
      payload[0] === TempleDAppErrorType.TezosOperation &&
      Array.isArray(payload[1]) &&
      payload[1].length > 0:
      return new TezosOperationError(payload[1]);

    case typeof payload === "string" && payload.startsWith("__tezos__"):
      return new Error(payload.replace("__tezos__", ""));

    default:
      return new TempleWalletError();
  }
}

function assertResponse(condition: any): asserts condition {
  if (!condition) {
    throw new Error("Invalid response recieved");
  }
}

function send(msg: TemplePageMessage) {
  window.postMessage(msg, "*");
}

export class TempleWalletError implements Error {
  name = "TempleWalletError";
  message = "An unknown error occured. Please try again or report it";
}

export class NotGrantedTempleWalletError extends TempleWalletError {
  name = "NotGrantedTempleWalletError";
  message = "Permission Not Granted";
}

export class NotFoundTempleWalletError extends TempleWalletError {
  name = "NotFoundTempleWalletError";
  message = "Account Not Found. Try connect again";
}

export class InvalidParamsTempleWalletError extends TempleWalletError {
  name = "InvalidParamsTempleWalletError";
  message = "Some of the parameters you provided are invalid";
}
