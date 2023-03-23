export class WalletError extends Error {
    error: any;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(message?: string, error?: any) {
        super(message);
        this.error = error;
    }
}

export class WalletNotReadyError extends WalletError {
    name = 'WalletNotReadyError';
}

export class WalletLoadError extends WalletError {
    name = 'WalletLoadError';
}

export class WalletConfigError extends WalletError {
    name = 'WalletConfigError';
}

export class WalletConnectionError extends WalletError {
    name = 'WalletConnectionError';
}

export class WalletNotSelectedError extends WalletError {
    name = 'WalletNotSelectedError';
}

export class WalletDisconnectedError extends WalletError {
    name = 'WalletDisconnectedError';
}

export class WalletDisconnectionError extends WalletError {
    name = 'WalletDisconnectionError';
}

export class WalletAccountError extends WalletError {
    name = 'WalletAccountError';
}

export class WalletPublicKeyError extends WalletError {
    name = 'WalletPublicKeyError';
}

export class WalletKeypairError extends WalletError {
    name = 'WalletKeypairError';
}

export class WalletNotConnectedError extends WalletError {
    name = 'WalletNotConnectedError';
}

export class WalletSendTransactionError extends WalletError {
    name = 'WalletSendTransactionError';
}

export class WalletSignMessageError extends WalletError {
    name = 'WalletSignMessageError';
}

export class WalletSignTransactionError extends WalletError {
    name = 'WalletSignTransactionError';
}

export class WalletRequestViewKeyError extends WalletError {
    name = 'WalletRequestViewKeyError';
}

export class WalletTimeoutError extends WalletError {
    name = 'WalletTimeoutError';
}

export class WalletWindowBlockedError extends WalletError {
    name = 'WalletWindowBlockedError';
}

export class WalletWindowClosedError extends WalletError {
    name = 'WalletWindowClosedError';
}

export class WalletDecryptionNotAllowedError extends WalletError {
    name = 'WalletDecryptionNotAllowedError';
}

export class WalletDecryptionError extends WalletError {
    name = 'WalletDecryptionError';
}

export class WalletRecordsError extends WalletError {
    name = 'WalletRecordsError';
}

export class WalletTransactionError extends WalletError {
    name = 'WalletTransactionError';
}
