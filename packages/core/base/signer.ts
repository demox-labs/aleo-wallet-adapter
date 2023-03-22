import type { WalletAdapter, WalletAdapterProps } from './adapter';
import { BaseWalletAdapter } from './adapter';
import { AleoTransaction } from './transaction';

export type Adapter = WalletAdapter | SignerWalletAdapter | MessageSignerWalletAdapter;

export interface SignerWalletAdapterProps<Name extends string = string> extends WalletAdapterProps<Name> { }

export type SignerWalletAdapter<Name extends string = string> = WalletAdapter<Name> & SignerWalletAdapterProps<Name>;

export abstract class BaseSignerWalletAdapter<Name extends string = string>
    extends BaseWalletAdapter<Name>
    implements SignerWalletAdapter<Name>
{ }

export interface MessageSignerWalletAdapterProps<Name extends string = string> extends WalletAdapterProps<Name> {
    signMessage(message: Uint8Array): Promise<Uint8Array>;

    requestViewKey(): Promise<string>;

    decrypt(cipherText: string): Promise<string>;

    requestRecords(program: string): Promise<any[]>;

    requestTransaction(transaction: AleoTransaction): Promise<string>;
}

export type MessageSignerWalletAdapter<Name extends string = string> = WalletAdapter<Name> &
    MessageSignerWalletAdapterProps<Name>;

export abstract class BaseMessageSignerWalletAdapter<Name extends string = string>
    extends BaseSignerWalletAdapter<Name>
    implements MessageSignerWalletAdapter<Name>
{
    abstract signMessage(message: Uint8Array): Promise<Uint8Array>;

    abstract requestViewKey(): Promise<string>;

    abstract decrypt(cipherText: string): Promise<string>;

    abstract requestRecords(program: string): Promise<any[]>;

    abstract requestTransaction(transaction: AleoTransaction): Promise<string>;
}
