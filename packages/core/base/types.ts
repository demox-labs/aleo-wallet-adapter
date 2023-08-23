export enum WalletAdapterNetwork {
    Testnet = 'testnet3'
};

export type SupportedTransactionVersions = ReadonlySet<any> | null;

export type TransactionOrVersionedTransaction<S extends SupportedTransactionVersions> = S extends null
    ? any
    : any | any;

export enum DecryptPermission {
    NoDecrypt = 'NO_DECRYPT', // The App cannot decrypt any records
    UponRequest = 'DECRYPT_UPON_REQUEST',
    AutoDecrypt = 'AUTO_DECRYPT', // The App can decrypt any requested records
    OnChainHistory = 'ON_CHAIN_HISTORY' // The App can request on-chain record plaintexts and transaction ids
}