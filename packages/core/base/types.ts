export const WalletAdapterNetwork = {
    Mainnet: 'mainnet-beta',
    Testnet: 'testnet3',
    Devnet: 'devnet',
};

export type SupportedTransactionVersions = ReadonlySet<any> | null;

export type TransactionOrVersionedTransaction<S extends SupportedTransactionVersions> = S extends null
    ? any
    : any | any;
