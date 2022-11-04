import { createContext, useContext } from 'react';
import {
  Adapter,
  DecryptPermission,
  MessageSignerWalletAdapterProps,
  SignerWalletAdapterProps,
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

  sendTransaction: undefined;
  signTransaction: SignerWalletAdapterProps['signTransaction'] | undefined;
  signAllTransactions: SignerWalletAdapterProps['signAllTransactions'] | undefined;
  signMessage: MessageSignerWalletAdapterProps['signMessage'] | undefined;
  decrypt: MessageSignerWalletAdapterProps['decrypt'] | undefined;
  requestViewKey: MessageSignerWalletAdapterProps['requestViewKey'] | undefined;
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
  signTransaction(_transaction: any) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'signTransaction')));
  },
  signAllTransactions(_transaction: any[]) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'signAllTransactions')));
  },
  signMessage(_message: Uint8Array) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'signMessage')));
  },
  decrypt(_cipherText: string) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'decrypt')));
  },
  requestViewKey() {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestViewKey')));
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
