import type { WalletAdapter } from './adapter.js';
import type { MessageSignerWalletAdapter, SignerWalletAdapter } from './signer.js';

export type Adapter = WalletAdapter | SignerWalletAdapter | MessageSignerWalletAdapter;

export enum WalletAdapterNetwork {
    Mainnet = 'mainnet-beta',
    Testnet = 'testnet3',
    Devnet = 'devnet',
}

export type SupportedTransactionVersions = ReadonlySet<any> | null;

export type TransactionOrVersionedTransaction<S extends SupportedTransactionVersions> = S extends null
    ? any
    : any | any;
