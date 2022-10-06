import type { WalletAdapter, WalletAdapterProps } from './adapter.js';
import { BaseWalletAdapter } from './adapter.js';
import { WalletSendTransactionError, WalletSignTransactionError } from './errors.js';
import type { TransactionOrVersionedTransaction } from './types.js';

export interface SignerWalletAdapterProps<Name extends string = string> extends WalletAdapterProps<Name> {
    signTransaction<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(
        transaction: T
    ): Promise<T>;
    signAllTransactions<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(
        transactions: T[]
    ): Promise<T[]>;
}

export type SignerWalletAdapter<Name extends string = string> = WalletAdapter<Name> & SignerWalletAdapterProps<Name>;

export abstract class BaseSignerWalletAdapter<Name extends string = string>
    extends BaseWalletAdapter<Name>
    implements SignerWalletAdapter<Name>
{
    signTransaction<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transaction: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    signAllTransactions<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transactions: T[]): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
}

export interface MessageSignerWalletAdapterProps<Name extends string = string> extends WalletAdapterProps<Name> {
    signMessage(message: Uint8Array): Promise<Uint8Array>;
}

export type MessageSignerWalletAdapter<Name extends string = string> = WalletAdapter<Name> &
    MessageSignerWalletAdapterProps<Name>;

export abstract class BaseMessageSignerWalletAdapter<Name extends string = string>
    extends BaseSignerWalletAdapter<Name>
    implements MessageSignerWalletAdapter<Name>
{
    abstract signMessage(message: Uint8Array): Promise<Uint8Array>;
}
