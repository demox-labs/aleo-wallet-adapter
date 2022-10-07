import {
  isAvailable,
  onAvailabilityChange,
  getCurrentPermission,
  onPermissionChange,
  requestPermission,
  requestOperation,
  requestSign,
  requestBroadcast,
  AleoWalletError,
  requestViewKey,
} from "./client";

import { AleoDAppDecryptPermission, AleoDAppNetwork, AleoDAppPermission } from "./types";

export class AleoWallet {
  static isAvailable = isAvailable;
  static onAvailabilityChange = onAvailabilityChange;
  static getCurrentPermission = getCurrentPermission;
  static onPermissionChange = onPermissionChange;

  permission: AleoDAppPermission = null;

  constructor(
    private appName: string,
    existingPermission?: AleoDAppPermission
  ) {
    if (existingPermission) {
      this.permission = existingPermission;
    }
  }

  get connected() {
    return Boolean(this.permission);
  }

  async connect(network: AleoDAppNetwork, opts = { forcePermission: false, decryptPermission: AleoDAppDecryptPermission.NoDecrypt }) {
    const perm = await requestPermission(
      network,
      { name: this.appName },
      opts.forcePermission,
      opts.decryptPermission,
    );
    this.permission = perm;
  }

  reconnect(network: AleoDAppNetwork, decryptPermission = AleoDAppDecryptPermission.NoDecrypt) {
    return this.connect(network, { forcePermission: true, decryptPermission });
  }

  async sendOperations(opParams: any[]) {
    assertConnected(this.permission);
    return requestOperation(this.permission.publicKey, opParams.map(formatOpParams));
  }

  async sign(payload: string) {
    assertConnected(this.permission);
    return requestSign(this.permission.publicKey, payload);
  }

  async requestViewKey() {
    assertConnected(this.permission);
    return requestViewKey(this.permission.publicKey);
  }

  async broadcast(signedOpBytes: string) {
    assertConnected(this.permission);
    return requestBroadcast(signedOpBytes);
  }
}

export class NotConnectedAleoWalletError extends AleoWalletError {
  name = "AleoWalletNotConnected";
  message =
    "You need to connect AleoWallet by calling aleoWallet.connect() first";
}

function assertConnected(perm: AleoDAppPermission): asserts perm {
  if (!perm) {
    throw new NotConnectedAleoWalletError();
  }
}

function formatOpParams(op: any) {
  const { fee, gas_limit, storage_limit, ...rest } = op;

  switch (op.kind) {
    case "origination":
      return {
        ...rest,
        mutez: true, // The balance was already converted from Tez (ꜩ) to Mutez (uꜩ)
        fee,
        gasLimit: gas_limit,
        storageLimit: storage_limit,
      };

    case "transaction":
      const { destination, amount, parameters, ...txRest } = rest;
      return {
        ...txRest,
        to: destination,
        amount: +amount,
        mutez: true,
        parameter: parameters,
        fee,
        gasLimit: gas_limit,
        storageLimit: storage_limit,
      };

    default:
      return {
        ...rest,
        fee,
        gasLimit: gas_limit,
        storageLimit: storage_limit,
      };
  }
}
