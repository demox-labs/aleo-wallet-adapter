export enum WalletAdapterNetwork {
    Mainnet = 'mainnet',
    Testnet = 'testnet3',
    Localnet = 'localnet',
};

export type SupportedTransactionVersions = ReadonlySet<any> | null;

export type TransactionOrVersionedTransaction<S extends SupportedTransactionVersions> = S extends null
    ? any
    : any | any;

export enum DecryptPermission {
    NoDecrypt = 'NO_DECRYPT', // The App cannot decrypt any records
    UponRequest = 'DECRYPT_UPON_REQUEST',
    AutoDecrypt = 'AUTO_DECRYPT', // The App can decrypt any requested records
    ViewKeyAccess = 'VIEW_KEY_ACCESS' // The App gets the View Key of the connected wallet
}