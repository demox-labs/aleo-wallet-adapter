import {
    BaseMessageSignerWalletAdapter,
    EventEmitter,
    scopePollingDetectionStrategy,
    WalletAccountError,
    WalletConnectionError,
    WalletRequestViewKeyError,
    WalletDisconnectionError,
    WalletName,
    WalletNotConnectedError,
    WalletNotReadyError,
    WalletReadyState,
    WalletSignTransactionError,
    WalletDecryptionNotAllowedError,
    WalletDecryptionError,
    DecryptPermission,
    WalletAdapterNetwork,
} from '@demox-labs/aleo-wallet-adapter-base';

export interface LeoWalletEvents {
    connect(...args: unknown[]): unknown;
    disconnect(...args: unknown[]): unknown;
}

export interface LeoWallet extends EventEmitter<LeoWalletEvents> {
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
    connect(decryptPermission: DecryptPermission, network: WalletAdapterNetwork): Promise<void>;
    disconnect(): Promise<void>;
}

export interface LeoWindow extends Window {
    leo?: LeoWallet;
}

declare const window: LeoWindow;

export interface LeoWalletAdapterConfig {
    appName?: string,
    decryptPermission?: DecryptPermission
}

export const LeoWalletName = 'Leo Wallet' as WalletName<'Leo Wallet'>;

export class LeoWalletAdapter extends BaseMessageSignerWalletAdapter {
    name = LeoWalletName;
    url = 'https://leo.app/download';
    icon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyNjJERkNENUFERjExRURCNzU3Q0NENDQwRjA3NURGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyNjJERkNFNUFERjExRURCNzU3Q0NENDQwRjA3NURGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjI2MkRGQ0I1QURGMTFFREI3NTdDQ0Q0NDBGMDc1REYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjI2MkRGQ0M1QURGMTFFREI3NTdDQ0Q0NDBGMDc1REYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B11wYAAADhUlEQVR42uzdz0sUUQDA8Tczuy6r67KriNmvgwal1LolWIEQSAjRpUOX/A8i6FJ/gJc9eoiuEXTu1KW6iBEl9BOKlI4i7mFVkMpfu8681zwItAh9+OMxs/v9wN5kd+a978zOLMzTGR1WSqBhuQwBAYAAQAAgABAACACNJGFcSpiKY3njpBLC5FcKN9wwx2Ey/xo7GY7dQQWglO//WivPm03HwUklO9qTiZbsTp+q5329tljxg9U1pn1LuqnrqOemUmq/AXjhkf9zrTz34n2xGMiNms2duNT7ePzUsVt3Nv0ddsAT4vPMvdtzC0+fM+1brl54NdmZv3jZDw7kKyA8B4RHmFSbgc2d0Gcek78LZLUaxlll2rePnTSaK+OLQMfxPPu7YfbN7jguF7P//3bkLgAEAAIAAYAAQAAgABAACAAEAAIAARAACAAEAAIAAYAAQAAgABAACAAEAAIAAYAAIiyQ66tM5d4k4j/5QvSeuH/3ZMfN68L+E+w7H13h4bW88v3r9GzpCQEcEr2GwJG2oRuuOxS9wfWEKC99ekkAFs4C+hU1el0DP1iN9NcTF4FcBIIAQAAgABAAGk1d3Abqlcxcyz8B6eXX/IAAIjH5M3MPS0s/pj7Y/Nxs8+meQvfYeNz/3UbsA9BHfmV5YnJ+8dmEzc/NZ4q9/T3xD6AurgE8N522fuR4Lc1cBIIAQAAgABAACAAEAAIAAYAAQAAgABAACAAEAAIAAYAAQAAgABAACAAEAAIAAYAA9kPKas32ZwZyo1oPYxf7ZwP1s3m5TOHMRm2hIuwtE6dymXN9BBABvhSi0D32oL9nzHJ5+sxDAJE5C8T9KV2uAUAAIAAQAAgABABuA4XnplJ6yfUo3uLpbQr4HeBwLa98+Vhe6uzyAxG1BFQykc23tRavsEzcIfo2W3qkX1HctvbsYN+1wXfTLBPXqBdPTiJdF/vBVO6VIwgABAACAAGAAEAAIAAQAAgABAACAAGAAEAAIAAQAAgABAACAAGAAEAAIAAQAGISAKvw1ON4mAagpPI3mfTt0x/4pkMX5UB3fThUhm+Tbuo6PjLw9o1SkrPAn9FNJlpbdxti/fh4PnN+eGRg6rWw/CxZLnO2YPL4ujM6vHspess9j1n/9/gyGmBHr3Ngf/v0tpmcA4weD9fv4wdM+l5DifLYcRfAXQAIAAQAAgABgADQUH4LMABPfvaNW6wz3QAAAABJRU5ErkJggg==';
    readonly supportedTransactionVersions = null;

    private _connecting: boolean;
    private _wallet: LeoWallet | null;
    private _publicKey: string | null;
    private _decryptPermission: string;
    private _viewKey: string | null;
    private _readyState: WalletReadyState =
        typeof window === 'undefined' || typeof document === 'undefined'
            ? WalletReadyState.Unsupported
            : WalletReadyState.NotDetected;

    constructor({ appName = 'sample', decryptPermission = DecryptPermission.NoDecrypt } : LeoWalletAdapterConfig = {}) {
        super();
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        this._decryptPermission = decryptPermission;
        this._viewKey = null;

        if (this._readyState !== WalletReadyState.Unsupported) {
            scopePollingDetectionStrategy(() => {
                if (window?.leo) {
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
            if (!wallet || !this.publicKey) throw new WalletNotConnectedError();
            switch (this._decryptPermission) {
                case DecryptPermission.NoDecrypt:
                    throw new WalletDecryptionNotAllowedError();

                case DecryptPermission.UponRequest:
                case DecryptPermission.AutoDecrypt:
                case DecryptPermission.ViewKeyAccess:
                {
                    try {
                        const text = await wallet.decrypt(cipherText);
                        return text.text;
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

    async connect(decryptPermission: DecryptPermission, network: WalletAdapterNetwork): Promise<void> {
        try {
            if (this.connected || this.connecting) return;
            if (this._readyState !== WalletReadyState.Installed) throw new WalletNotReadyError();

            this._connecting = true;

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const wallet = window.leo!;

            try {
                await wallet.connect(decryptPermission, network);
                if (!wallet?.publicKey) {
                    throw new WalletConnectionError();
                }
                this._publicKey = wallet.publicKey!;
            } catch (error: any) {
                throw new WalletConnectionError(error?.message, error);
            }

            this._wallet = wallet;
            this._decryptPermission = decryptPermission;
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
                await wallet.disconnect();
            } catch (error: any) {
                this.emit('error', new WalletDisconnectionError(error?.message, error));
            }
        }

        this.emit('disconnect');
    }

    async signMessage(message: Uint8Array): Promise<Uint8Array> {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey) throw new WalletNotConnectedError();

            try {
                const signature = await wallet.signMessage(message);
                return signature.signature;
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
            if (!wallet || !this.publicKey) throw new WalletNotConnectedError();

            try {
                const viewKey = await wallet.requestViewKey();
                return viewKey.viewKey;
            } catch (error: any) {
                throw new WalletRequestViewKeyError(error?.message, error);
            }
        } catch (error: any) {
            this.emit('error', error);
            throw error;
        }
    }
}