import type { WalletAdapter, WalletAdapterProps } from './adapter';
import { BaseWalletAdapter } from './adapter';
import { AleoDeployment } from './deployment';
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

    decrypt(cipherText: string, tpk?: string, programId?: string, functionName?: string, index?: number): Promise<string>;

    requestRecords(program: string): Promise<any[]>;

    requestTransaction(transaction: AleoTransaction): Promise<string>;

    requestExecution(transaction: AleoTransaction): Promise<string>;

    requestBulkTransactions(transactions: AleoTransaction[]): Promise<string[]>;

    requestDeploy(deployment: AleoDeployment): Promise<string>;

    transactionStatus(transactionId: string): Promise<string>;

    getExecution(transactionId: string): Promise<string>;

    requestRecordPlaintexts(program: string): Promise<any[]>;

    requestTransactionHistory(program: string): Promise<any[]>;
}

export type MessageSignerWalletAdapter<Name extends string = string> = WalletAdapter<Name> &
    MessageSignerWalletAdapterProps<Name>;

export abstract class BaseMessageSignerWalletAdapter<Name extends string = string>
    extends BaseSignerWalletAdapter<Name>
    implements MessageSignerWalletAdapter<Name>
{
    abstract signMessage(message: Uint8Array): Promise<Uint8Array>;

    abstract decrypt(cipherText: string, tpk?: string, programId?: string, functionName?: string, index?: number): Promise<string>;

    abstract requestRecords(program: string): Promise<any[]>;

    abstract requestTransaction(transaction: AleoTransaction): Promise<string>;

    abstract requestExecution(transaction: AleoTransaction): Promise<string>;

    abstract requestBulkTransactions(transactions: AleoTransaction[]): Promise<string[]>;

    abstract requestDeploy(deployment: AleoDeployment): Promise<string>;

    abstract transactionStatus(transactionId: string): Promise<string>;

    abstract getExecution(transactionId: string): Promise<string>;

    abstract requestRecordPlaintexts(program: string): Promise<any[]>;

    abstract requestTransactionHistory(program: string): Promise<any[]>;
}
