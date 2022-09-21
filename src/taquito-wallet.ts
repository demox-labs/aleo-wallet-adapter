import {
  TezosToolkit,
  WalletProvider,
  createOriginationOperation,
  createSetDelegateOperation,
  createTransferOperation,
  WalletDelegateParams,
  WalletTransferParams,
  WalletOriginateParams,
} from "@taquito/taquito";

import {
  isAvailable,
  onAvailabilityChange,
  getCurrentPermission,
  onPermissionChange,
  requestPermission,
  requestOperation,
  requestSign,
  requestBroadcast,
  TempleWalletError,
} from "./client";

import { TempleDAppNetwork, TempleDAppPermission } from "./types";

export class TempleWallet implements WalletProvider {
  static isAvailable = isAvailable;
  static onAvailabilityChange = onAvailabilityChange;
  static getCurrentPermission = getCurrentPermission;
  static onPermissionChange = onPermissionChange;

  permission: TempleDAppPermission = null;

  constructor(
    private appName: string,
    existingPermission?: TempleDAppPermission
  ) {
    if (existingPermission) {
      this.permission = existingPermission;
    }
  }

  get connected() {
    return Boolean(this.permission);
  }

  toTezos() {
    assertConnected(this.permission);
    const tezos = new TezosToolkit(this.permission.rpc);
    tezos.setProvider({ wallet: this });
    return tezos;
  }

  async connect(network: TempleDAppNetwork, opts = { forcePermission: false }) {
    const perm = await requestPermission(
      network,
      { name: this.appName },
      opts.forcePermission
    );
    this.permission = perm;
  }

  reconnect(network: TempleDAppNetwork) {
    return this.connect(network, { forcePermission: true });
  }

  async getPKH() {
    assertConnected(this.permission);
    return this.permission.pkh;
  }

  async mapTransferParamsToWalletParams(
    params: () => Promise<WalletTransferParams>
  ) {
    const walletParams = await params();
    return this.removeDefaultParams(
      walletParams,
      await createTransferOperation(this.formatParameters(walletParams))
    );
  }

  async mapOriginateParamsToWalletParams(
    params: () => Promise<WalletOriginateParams>
  ) {
    const walletParams = await params();
    return this.removeDefaultParams(
      walletParams,
      await createOriginationOperation(this.formatParameters(walletParams))
    );
  }

  async mapDelegateParamsToWalletParams(
    params: () => Promise<WalletDelegateParams>
  ) {
    const walletParams = await params();
    return this.removeDefaultParams(
      walletParams,
      await createSetDelegateOperation(this.formatParameters(walletParams))
    );
  }

  async sendOperations(opParams: any[]) {
    assertConnected(this.permission);
    return requestOperation(this.permission.pkh, opParams.map(formatOpParams));
  }

  async sign(payload: string) {
    assertConnected(this.permission);
    return requestSign(this.permission.pkh, payload);
  }

  async broadcast(signedOpBytes: string) {
    assertConnected(this.permission);
    return requestBroadcast(signedOpBytes);
  }

  private formatParameters(params: any) {
    if (params.fee) {
      params.fee = params.fee.toString();
    }
    if (params.storageLimit) {
      params.storageLimit = params.storageLimit.toString();
    }
    if (params.gasLimit) {
      params.gasLimit = params.gasLimit.toString();
    }
    return params;
  }

  private removeDefaultParams(
    params: WalletTransferParams | WalletOriginateParams | WalletDelegateParams,
    operatedParams: any
  ) {
    // If fee, storageLimit or gasLimit is undefined by user
    // in case of beacon wallet, dont override it by
    // defaults.
    if (!params.fee) {
      delete operatedParams.fee;
    }
    if (!params.storageLimit) {
      delete operatedParams.storage_limit;
    }
    if (!params.gasLimit) {
      delete operatedParams.gas_limit;
    }
    return operatedParams;
  }
}

export class NotConnectedTempleWalletError extends TempleWalletError {
  name = "TempleWalletNotConnected";
  message =
    "You need to connect TempleWallet by calling templeWallet.connect() first";
}

function assertConnected(perm: TempleDAppPermission): asserts perm {
  if (!perm) {
    throw new NotConnectedTempleWalletError();
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
