import {
    Adapter,
    MessageSignerWalletAdapterProps,
    WalletNotSelectedError,
    WalletError,
    WalletName,
    WalletNotConnectedError,
    WalletNotReadyError,
    WalletReadyState,
    DecryptPermission,
    WalletAdapterNetwork,
    AleoTransaction,
    AleoDeployment,
} from '@demox-labs/aleo-wallet-adapter-base';
import type { FC, ReactNode } from 'react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { Wallet } from './useWallet';
import { WalletContext } from './useWallet';

export interface WalletProviderProps {
    children: ReactNode;
    wallets: Adapter[];
    decryptPermission?: DecryptPermission;
    programs?: string[];
    network?: WalletAdapterNetwork;
    autoConnect?: boolean;
    onError?: (error: WalletError) => void;
    localStorageKey?: string;
}

const initialState: {
    wallet: Wallet | null;
    adapter: Adapter | null;
    publicKey: string | null;
    connected: boolean;
} = {
    wallet: null,
    adapter: null,
    publicKey: null,
    connected: false,
};

export const WalletProvider: FC<WalletProviderProps> = ({
    children,
    wallets: adapters,
    autoConnect = false,
    decryptPermission = DecryptPermission.NoDecrypt,
    network = WalletAdapterNetwork.Testnet,
    onError,
    localStorageKey = 'walletName',
    programs = []
}) => {
    const [name, setName] = useLocalStorage<WalletName | null>(localStorageKey, null);
    const [{ wallet, adapter, publicKey, connected }, setState] = useState(initialState);
    const readyState = adapter?.readyState || WalletReadyState.Unsupported;
    const [connecting, setConnecting] = useState(false);
    const [disconnecting, setDisconnecting] = useState(false);
    const isConnecting = useRef(false);
    const isDisconnecting = useRef(false);
    const isUnloading = useRef(false);

    // Wrap adapters to conform to the `Wallet` interface
    const [wallets, setWallets] = useState(() =>
        adapters.map((adapter) => ({
            adapter,
            readyState: adapter.readyState,
        }))
    );

    // When the adapters change, start to listen for changes to their `readyState`
    useEffect(() => {
        // When the adapters change, wrap them to conform to the `Wallet` interface
        setWallets((wallets) =>
            adapters.map((adapter, index) => {
                const wallet = wallets[index];
                // If the wallet hasn't changed, return the same instance
                return wallet && wallet.adapter === adapter && wallet.readyState === adapter.readyState
                    ? wallet
                    : {
                          adapter: adapter,
                          readyState: adapter.readyState,
                      };
            })
        );

        function handleReadyStateChange(this: Adapter, readyState: WalletReadyState) {
            setWallets((prevWallets) => {
                const index = prevWallets.findIndex(({ adapter }) => adapter === this);
                if (index === -1) return prevWallets;

                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const { adapter } = prevWallets[index]!;
                return [...prevWallets.slice(0, index), { adapter, readyState }, ...prevWallets.slice(index + 1)];
            });
        }

        adapters.forEach((adapter) => adapter.on('readyStateChange', handleReadyStateChange, adapter));
        return () => adapters.forEach((adapter) => adapter.off('readyStateChange', handleReadyStateChange, adapter));
    }, [adapters]);

    // When the selected wallet changes, initialize the state
    useEffect(() => {
        const wallet = name && wallets.find(({ adapter }) => adapter.name === name);
        if (wallet) {
            setState({
                wallet,
                adapter: wallet.adapter,
                connected: wallet.adapter.connected,
                publicKey: wallet.adapter.publicKey
            });
        } else {
            setState(initialState);
        }
    }, [name, wallets]);

    // If the window is closing or reloading, ignore disconnect and error events from the adapter
    useEffect(() => {
        function listener() {
            isUnloading.current = true;
        }

        window.addEventListener('beforeunload', listener);
        return () => window.removeEventListener('beforeunload', listener);
    }, [isUnloading]);

    // Handle the adapter's connect event
    const handleConnect = useCallback(() => {
        if (!adapter) return;
        setState((state) => ({ ...state, connected: adapter.connected, publicKey: adapter.publicKey }));
    }, [adapter]);

    // Handle the adapter's disconnect event
    const handleDisconnect = useCallback(() => {
        // Clear the selected wallet unless the window is unloading
        if (!isUnloading.current) setName(null);
    }, [isUnloading, setName]);

    // Handle the adapter's error event, and local errors
    const handleError = useCallback(
        (error: WalletError) => {
            // Call onError unless the window is unloading
            if (!isUnloading.current) (onError || console.error)(error);
            return error;
        },
        [isUnloading, onError]
    );

    // Setup and teardown event listeners when the adapter changes
    useEffect(() => {
        if (adapter) {
            adapter.on('connect', handleConnect);
            adapter.on('disconnect', handleDisconnect);
            adapter.on('error', handleError);
            return () => {
                adapter.off('connect', handleConnect);
                adapter.off('disconnect', handleDisconnect);
                adapter.off('error', handleError);
            };
        }
    }, [adapter, handleConnect, handleDisconnect, handleError]);

    // When the adapter changes, disconnect the old one
    useEffect(() => {
        return () => {
            adapter?.disconnect();
        };
    }, [adapter]);

    // If autoConnect is enabled, try to connect when the adapter changes and is ready
    useEffect(() => {
        if (
            isConnecting.current ||
            connected ||
            !autoConnect ||
            !adapter ||
            !(readyState === WalletReadyState.Installed || readyState === WalletReadyState.Loadable)
        )
            return;

        (async function () {
            isConnecting.current = true;
            setConnecting(true);
            try {
                await adapter.connect(decryptPermission, network, programs);
            } catch (error: any) {
                // Clear the selected wallet
                setName(null);
                // Don't throw error, but handleError will still be called
            } finally {
                setConnecting(false);
                isConnecting.current = false;
            }
        })();
    }, [isConnecting, connected, autoConnect, adapter, readyState, setName]);

    // Connect the adapter to the wallet
    const connect = useCallback(async () => {
        if (isConnecting.current || isDisconnecting.current || connected) return;
        if (!adapter) throw handleError(new WalletNotSelectedError());

        if (!(readyState === WalletReadyState.Installed || readyState === WalletReadyState.Loadable)) {
            // Clear the selected wallet
            setName(null);

            if (typeof window !== 'undefined') {
                window.open(adapter.url, '_blank');
            }

            throw handleError(new WalletNotReadyError());
        }

        isConnecting.current = true;
        setConnecting(true);
        try {
            await adapter.connect(decryptPermission, network, programs);
        } catch (error: any) {
            // Clear the selected wallet
            setName(null);
            // Rethrow the error, and handleError will also be called
            throw error;
        } finally {
            setConnecting(false);
            isConnecting.current = false;
        }
    }, [isConnecting, isDisconnecting, connected, adapter, readyState, handleError, setName]);

    // Disconnect the adapter from the wallet
    const disconnect = useCallback(async () => {
        if (isDisconnecting.current) return;
        if (!adapter) return setName(null);

        isDisconnecting.current = true;
        setDisconnecting(true);
        try {
            await adapter.disconnect();
        } catch (error: any) {
            // Clear the selected wallet
            setName(null);
            // Rethrow the error, and handleError will also be called
            throw error;
        } finally {
            setDisconnecting(false);
            isDisconnecting.current = false;
        }
    }, [isDisconnecting, adapter, setName]);

    // Sign an arbitrary message if the wallet supports it
    const signMessage: MessageSignerWalletAdapterProps['signMessage'] | undefined = useMemo(
        () =>
            adapter && 'signMessage' in adapter
                ? async (message) => {
                      if (!connected) throw handleError(new WalletNotConnectedError());
                      return await adapter.signMessage(message);
                  }
                : undefined,
        [adapter, handleError, connected]
    );

    // Decrypt a ciphertext using the wallet
    const decrypt: MessageSignerWalletAdapterProps['decrypt'] | undefined = useMemo(
        () => 
            adapter && 'decrypt' in adapter
                ? async (cipherText, tpk?: string, programId?: string, functionName?: string, index?: number) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                        return await adapter.decrypt(cipherText, tpk, programId, functionName, index);
                    }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request records for a specific program
    const requestRecords: MessageSignerWalletAdapterProps['requestRecords'] | undefined = useMemo(
        () => 
            adapter && 'requestRecords' in adapter
                ? async (program) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                        return await adapter.requestRecords(program);
                    }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request transaction
    const requestTransaction: MessageSignerWalletAdapterProps['requestTransaction'] | undefined = useMemo(
        () => 
            adapter && 'requestTransaction' in adapter
                ? async (transaction: AleoTransaction) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                    return await adapter.requestTransaction(transaction);
                }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request execution
    const requestExecution: MessageSignerWalletAdapterProps['requestExecution'] | undefined = useMemo(
        () => 
            adapter && 'requestExecution' in adapter
                ? async (transaction: AleoTransaction) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                    return await adapter.requestExecution(transaction);
                }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request bulk transactions
    const requestBulkTransactions: MessageSignerWalletAdapterProps['requestBulkTransactions'] | undefined = useMemo(
        () =>
            adapter && 'requestBulkTransactions' in adapter
                ? async (transactions: AleoTransaction[]) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                    return await adapter.requestBulkTransactions(transactions);
                }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request deploy
    const requestDeploy: MessageSignerWalletAdapterProps['requestDeploy'] | undefined = useMemo(
        () =>
            adapter && 'requestDeploy' in adapter
                ? async (deployment: AleoDeployment) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                    return await adapter.requestDeploy(deployment);
                }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request transaction status
    const transactionStatus: MessageSignerWalletAdapterProps['transactionStatus'] | undefined = useMemo(
        () =>
            adapter && 'transactionStatus' in adapter
                ? async (transactionId) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                    return await adapter.transactionStatus(transactionId);
                }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request Execution
    const getExecution: MessageSignerWalletAdapterProps['getExecution'] | undefined = useMemo(
        () =>
            adapter && 'getExecution' in adapter
                ? async (transactionId) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                    return await adapter.getExecution(transactionId);
                }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request the on-chain records plaintexts for a specific program
    const requestRecordPlaintexts: MessageSignerWalletAdapterProps['requestRecordPlaintexts'] | undefined = useMemo(
        () => 
            adapter && 'requestRecordPlaintexts' in adapter
                ? async (program) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                        return await adapter.requestRecordPlaintexts(program);
                    }
                : undefined,
        [adapter, handleError, connected]
    );

    // Request on-chain transaction history for a specific program
    const requestTransactionHistory: MessageSignerWalletAdapterProps['requestTransactionHistory'] | undefined = useMemo(
        () => 
            adapter && 'requestTransactionHistory' in adapter
                ? async (program) => {
                    if (!connected) throw handleError(new WalletNotConnectedError());
                        return await adapter.requestTransactionHistory(program);
                    }
                : undefined,
        [adapter, handleError, connected]
    );

    return (
        <WalletContext.Provider
            value={{
                autoConnect,
                decryptPermission,
                wallets,
                wallet,
                publicKey,
                connected,
                connecting,
                disconnecting,
                select: setName,
                connect,
                disconnect,
                signMessage,
                decrypt,
                requestRecords,
                requestTransaction,
                requestExecution,
                requestBulkTransactions,
                requestDeploy,
                transactionStatus,
                getExecution,
                requestRecordPlaintexts,
                requestTransactionHistory
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};
