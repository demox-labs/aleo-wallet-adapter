import {
    BaseMessageSignerWalletAdapter,
    EventEmitter,
    scopePollingDetectionStrategy,
    WalletAccountError,
    WalletConnectionError,
    WalletRequestViewKeyError,
    WalletDisconnectedError,
    WalletDisconnectionError,
    WalletError,
    WalletName,
    WalletNotConnectedError,
    WalletNotReadyError,
    WalletPublicKeyError,
    WalletReadyState,
    WalletSendTransactionError,
    WalletSignTransactionError,
    WalletDecryptionNotAllowedError,
    WalletDecryptionError,
} from '@demox-labs/aleo-wallet-adapter-base';
import { requestViewKey, requestPermission, requestSign, requestDecrypt } from './client.js';
import { AleoDAppDecryptPermission, AleoDAppNetwork, AleoDAppPermission } from './types.js';

interface LeoWalletEvents {
    connect(...args: unknown[]): unknown;
    disconnect(...args: unknown[]): unknown;
}

interface LeoWallet extends EventEmitter<LeoWalletEvents> {
    publicKey?: string;
    viewKey?: string;
    signTransaction(transaction: any): Promise<any>;
    signAllTransactions(transactions: any[]): Promise<any[]>;
    signAndSendTransaction(
        transaction: any,
        options?: any
    ): Promise<{ signature: any }>;
    signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>;
    requestViewKey(): Promise<{ viewKey: string }>;
    decrypt(cipherText: string): Promise<{ text: string }>, 
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

interface LeoWindow extends Window {
    leoAleo?: LeoWallet;
}

declare const window: LeoWindow;

export interface LeoWalletAdapterConfig {
    network?: AleoDAppNetwork,
    appName?: string,
    decryptPermission?: AleoDAppDecryptPermission
}

export const LeoWalletName = 'Leo Wallet' as WalletName<'Leo Wallet'>;

export class LeoWalletAdapter extends BaseMessageSignerWalletAdapter {
    name = LeoWalletName;
    url = 'https://leo.app/download';
    icon =
        'data:image/png;base64,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';
    readonly supportedTransactionVersions = null;

    private _network: AleoDAppNetwork;
    private _appName: string;
    private _permission: AleoDAppPermission = null;
    private _connecting: boolean;
    private _wallet: LeoWallet | null;
    private _publicKey: string | null;
    private _decryptPermission: AleoDAppDecryptPermission;
    private _viewKey: string | null;
    private _readyState: WalletReadyState =
        typeof window === 'undefined' || typeof document === 'undefined'
            ? WalletReadyState.Unsupported
            : WalletReadyState.NotDetected;

    constructor({ network = 'sandbox', appName = 'sample', decryptPermission = AleoDAppDecryptPermission.NoDecrypt } : LeoWalletAdapterConfig = {}) {
        super();
        this._connecting = false;
        this._network = network;
        this._appName = appName;
        this._wallet = null;
        this._publicKey = null;
        this._decryptPermission = decryptPermission;
        this._viewKey = null;

        if (this._readyState !== WalletReadyState.Unsupported) {
            scopePollingDetectionStrategy(() => {
                if (window?.leoAleo) {
                    this._readyState = WalletReadyState.Installed;
                    this.emit('readyStateChange', this._readyState);
                    return true;
                }
                return false;
            });
        }
    }

    get publicKey() {
        return this._publicKey;
    }

    get viewKey() {
        return this._viewKey;
    }

    get decryptPermission() {
        return this._decryptPermission;
    }

    get connecting() {
        return this._connecting;
    }

    get readyState() {
        return this._readyState;
    }

    set readyState(readyState) {
        this._readyState = readyState;
    }

    async decrypt(cipherText: string) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this._permission?.publicKey) throw new WalletNotConnectedError();
            switch (this._decryptPermission) {
                case AleoDAppDecryptPermission.NoDecrypt:
                    throw new WalletDecryptionNotAllowedError();

                case AleoDAppDecryptPermission.UponRequest:
                case AleoDAppDecryptPermission.AutoDecrypt:
                case AleoDAppDecryptPermission.ViewKeyAccess:
                {
                    try {
                        const text = await requestDecrypt(this._permission?.publicKey!, cipherText);
                        return text;
                    } catch (error: any) {
                        throw new WalletDecryptionError(error?.message, error);
                    }
                }
                default:
                    throw new WalletDecryptionError();
            }
        } catch (error: any) {
            this.emit('error', error);
            throw error;
        }
    }

    async connect(): Promise<void> {
        try {
            if (this.connected || this.connecting) return;
            if (this._readyState !== WalletReadyState.Installed) throw new WalletNotReadyError();

            this._connecting = true;

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const wallet = window.leoAleo!;

            try {
                const perm = await requestPermission(
                    this._network,
                    { name: this._appName },
                    false,
                    this._decryptPermission
                  );
                  if (!perm?.publicKey) {
                    throw new Error("No Public Key");
                  }
                  this._permission = perm;
            } catch (error: any) {
                throw new WalletConnectionError(error?.message, error);
            }

            if (!this._permission.publicKey) throw new WalletAccountError();

            // let publicKey: string;
            // try {
            //     publicKey = new PublicKey(wallet.publicKey.toBytes());
            // } catch (error: any) {
            //     throw new WalletPublicKeyError(error?.message, error);
            // }

            // wallet.on('disconnect', this._disconnected);

            this._wallet = wallet;
            this._publicKey = this._permission.publicKey;
            this._decryptPermission = this._permission.decryptPermission;
            this._viewKey = this._viewKey;

            this.emit('connect', this._publicKey);
        } catch (error: any) {
            this.emit('error', error);
            throw error;
        } finally {
            this._connecting = false;
        }
    }

    async disconnect(): Promise<void> {
        const wallet = this._wallet;
        if (wallet) {
            // wallet.off('disconnect', this._disconnected);

            this._wallet = null;
            this._publicKey = null;

            try {
                // await wallet.disconnect();
            } catch (error: any) {
                this.emit('error', new WalletDisconnectionError(error?.message, error));
            }
        }

        this.emit('disconnect');
    }

    async signMessage(message: Uint8Array): Promise<Uint8Array> {
        try {
            const wallet = this._wallet;
            const messageString = new TextDecoder().decode(message);
            if (!wallet || !this._permission?.publicKey) throw new WalletNotConnectedError();

            try {
                const signature = await requestSign(this._permission?.publicKey!, messageString);
                return new TextEncoder().encode(signature);
            } catch (error: any) {
                throw new WalletSignTransactionError(error?.message, error);
            }
        } catch (error: any) {
            this.emit('error', error);
            throw error;
        }
    }

    async requestViewKey(): Promise<string> {
        try {
            const wallet = this._wallet;
            if (!wallet || !this._permission?.publicKey) throw new WalletNotConnectedError();

            try {
                const viewKey = await requestViewKey(this._permission?.publicKey!);
                this._viewKey = viewKey;
                return viewKey;
            } catch (error: any) {
                throw new WalletRequestViewKeyError(error?.message, error);
            }
        } catch (error: any) {
            this.emit('error', error);
            throw error;
        }
    }
}