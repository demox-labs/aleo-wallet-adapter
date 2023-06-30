import { createContext, useContext } from 'react';
import {
  Adapter,
  AleoTransaction,
  AleoDeployment,
  DecryptPermission,
  MessageSignerWalletAdapterProps,
  WalletAdapterNetwork,
  WalletName,
  WalletReadyState
} from '@demox-labs/aleo-wallet-adapter-base';

export interface Wallet {
  adapter: Adapter;
  readyState: WalletReadyState;
}

export interface WalletContextState {
  autoConnect: boolean;
  wallets: Wallet[];
  wallet: Wallet | null;
  publicKey: string | null;
  viewKey: string | null;
  connecting: boolean;
  connected: boolean;
  disconnecting: boolean;

  select(walletName: WalletName): void;
  connect(decryptPermission: DecryptPermission, network: WalletAdapterNetwork): Promise<void>;
  disconnect(): Promise<void>;

  signMessage: MessageSignerWalletAdapterProps['signMessage'] | undefined;
  decrypt: MessageSignerWalletAdapterProps['decrypt'] | undefined;
  requestViewKey: MessageSignerWalletAdapterProps['requestViewKey'] | undefined;
  requestRecords: MessageSignerWalletAdapterProps['requestRecords'] | undefined;
  requestTransaction: MessageSignerWalletAdapterProps['requestTransaction'] | undefined;
  requestBulkTransactions: MessageSignerWalletAdapterProps['requestBulkTransactions'] | undefined;
  requestDeploy: MessageSignerWalletAdapterProps['requestDeploy'] | undefined;
  transactionStatus: MessageSignerWalletAdapterProps['transactionStatus'] | undefined;
}

const EMPTY_ARRAY: never[] = [];

const DEFAULT_CONTEXT = {
  autoConnect: false,
  connecting: false,
  connected: false,
  disconnecting: false,
  select(_name: WalletName) {
    console.error(constructMissingProviderErrorMessage('get', 'select'));
  },
  connect(decryptPermission: DecryptPermission, network: WalletAdapterNetwork) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'connect')));
  },
  disconnect() {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'disconnect')));
  },
  signMessage(_message: Uint8Array) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'signMessage')));
  },
  decrypt(_cipherText: string, _tpk?: string, _programId?: string, _functionName?: string, _index?: number) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'decrypt')));
  },
  requestViewKey() {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestViewKey')));
  },
  requestRecords(_program: string) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestRecords')));
  },
  requestTransaction(_transaction: AleoTransaction) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestTransaction')));
  },
  requestBulkTransactions(_transactions: AleoTransaction[]) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestBulkTransactions')));
  },
  requestDeploy(_deployment: AleoDeployment) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestDeploy')));
  },
  transactionStatus(_transactionId: string) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'transactionStatus')));
  },
} as WalletContextState;
Object.defineProperty(DEFAULT_CONTEXT, 'wallets', {
  get() {
    console.error(constructMissingProviderErrorMessage('read', 'wallets'));
    return EMPTY_ARRAY;
  },
});
Object.defineProperty(DEFAULT_CONTEXT, 'wallet', {
  get() {
    console.error(constructMissingProviderErrorMessage('read', 'wallet'));
    return null;
  },
});
Object.defineProperty(DEFAULT_CONTEXT, 'publicKey', {
  get() {
    console.error(constructMissingProviderErrorMessage('read', 'publicKey'));
    return null;
  },
});
Object.defineProperty(DEFAULT_CONTEXT, 'viewKey', {
  get() {
    console.error(constructMissingProviderErrorMessage('read', 'viewKey'));
    return null;
  },
});

function constructMissingProviderErrorMessage(action: string, valueName: string) {
  return (
    'You have tried to ' +
    ` ${action} "${valueName}"` +
    ' on a WalletContext without providing one.' +
    ' Make sure to render a WalletProvider' +
    ' as an ancestor of the component that uses ' +
    'WalletContext'
  );
}

export const WalletContext = createContext<WalletContextState>(DEFAULT_CONTEXT as WalletContextState);

export function useWallet(): WalletContextState {
  return useContext(WalletContext);
}
