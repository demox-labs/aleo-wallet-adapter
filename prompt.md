ChatGPT, here is a Readme for a npm package codebase.

<h1 align="center">
    <picture>
        <img alt="Aleo Wallet Adapter" src="https://assets-global.website-files.com/6559a97a91ac8fe073763dc8/656f59844279a74a7ac47d6b_logo-symbol.svg" style="filter: invert(75%) sepia(90%) saturate(2945%) hue-rotate(240deg) brightness(100%) contrast(94%);" width="22"/>
    </picture>
    Aleo Wallet Adapter
</h1>

<p align="center">
    <a href="https://docs.leo.app/aleo-wallet-adapter"> <img alt="Website" src="https://img.shields.io/badge/docs-online-blue"></a>
    <a href="https://demo.leo.app"><img src="https://img.shields.io/badge/live_demo-▶️-green"/></a>
    <a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-base"><img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-base"/></a>
    <a href="https://discord.com/invite/aleo"><img src="https://img.shields.io/discord/913160862670397510?logo=discord"/></a>
</p>

<p align="center">
    A package for integrating wallet features into your React Aleo decentralised applications.
</p>

## Table of Content

- [👋 Introduction](#-introduction)
- [🚀 Getting Started](#-getting-started)
  - [📲 Install](#-install)
  - [🛠️ Setup](#%EF%B8%8F-setup)
- [🧪 Usage examples](#-usage-examples)
  - [✍🏻 Signing](#-signing)
  - [🔓 Decrypting](#-decrypting)
  - [🗂️ Requesting Records](#%EF%B8%8F-requesting-records)
  - [📡 Broadcasting Transactions](#-broadcasting-transactions)
  - [💻 Deploying Programs](#-deploying-programs)
  - [🗂️ Requesting Record Plaintexts](#%EF%B8%8F-requesting-record-plaintexts)
  - [📜 Requesting Transaction History](#-requesting-transaction-history)
  - [🔔 Subscribing to Events](#-subscribing-to-events)

## 👋 Introduction

A node package for integrating wallet features into your React Aleo decentralised applications (DApp). It includes adapters and components tailored for use with the Aleo blockchain, supporting React-based applications.

<p align="center">
    <a href="https://demo.leo.app"><img src="https://img.shields.io/badge/live_demo-▶️-green"/></a>
</p>

It includes 4 sub-packages:

- `aleo-wallet-adapter-base`
Generic features such as Aleo related Classes, Errors, Permissions...

    <a href="./packages/core/base/docs/modules.md"><img alt="Website" src="https://img.shields.io/badge/docs-online-blue"></a>&nbsp;<a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-base"><img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-base"/></a>

- `aleo-wallet-adapter-react`
React Context Povider and Hooks.

    <a href="./packages/core/react/docs/modules.md"><img alt="Website" src="https://img.shields.io/badge/docs-online-blue"></a>&nbsp;<a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-react"><img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-react"/></a>

- `aleo-wallet-adapter-reactui`
React components ready to be used in a DApp.

    <a href="./packages/ui/docs/modules.md"><img alt="Website" src="https://img.shields.io/badge/docs-online-blue"/></a>&nbsp;<a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-reactui"><img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-reactui"/></a>

- `aleo-wallet-adapter-leo`
Leo Wallet specific implementation of the adapter.

    <a href="./packages/wallets/leo/docs/modules.md"><img alt="Website" src="https://img.shields.io/badge/docs-online-blue"></a>&nbsp;<a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-leo"><img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-leo"/></a>

Top package `aleo-wallet-adapter` exports all of these sub-packages exports.

## 🚀 Getting Started

Here is a quick setup guide on how to add Wallet Adapter to a React-based Aleo app along with **useful examples**.
To get further details about any specific feature, checkout corresponding sub-package documentation.

### 📲 Install

To get started, simply install the following dependencies, using npm:

```shell
npm install --save \
    @demox-labs/aleo-wallet-adapter-base \
    @demox-labs/aleo-wallet-adapter-react \
    @demox-labs/aleo-wallet-adapter-reactui \
    @demox-labs/aleo-wallet-adapter-leo \
    react
```

Or using yarn:

```shell
yarn add \
    @demox-labs/aleo-wallet-adapter-base \
    @demox-labs/aleo-wallet-adapter-react \
    @demox-labs/aleo-wallet-adapter-reactui \
    @demox-labs/aleo-wallet-adapter-leo \
    react
```

### 🛠️ Setup

Set up Aleo Wallet Adapter in your React application by creating a wallet context with a provider, modal provider, and specifying the wallets (e.g., LeoWalletAdapter) you want to use.

```tsx
import React, { FC, useMemo } from "react";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";

// Default styles that can be overridden by your app
require("@demox-labs/aleo-wallet-adapter-reactui/styles.css");

export const Wallet: FC = () => {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Leo Demo App",
      }),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.UponRequest}
      network={WalletAdapterNetwork.Localnet}
      autoConnect
    >
      <WalletModalProvider>
        // Your app's components go here
      </WalletModalProvider>
    </WalletProvider>
  );
};
```

## 🧪 Usage examples

### ✍🏻 Signing

You can use Aleo Wallet Adapter to sign messages with the user's wallet. This snippet demonstrates how to create a button that, upon clicking, signs a predefined message.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import React, { FC, useCallback } from "react";

export const SignMessage: FC = () => {
  const { wallet, publicKey } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const message = "a message to sign";

    const bytes = new TextEncoder().encode(message);
    const signatureBytes = await (
      wallet?.adapter as LeoWalletAdapter
    ).signMessage(bytes);
    const signature = new TextDecoder().decode(signatureBytes);
    alert("Signed message: " + signature);
  }, [wallet, publicKey]);

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Sign message
    </button>
  );
};
```

### 🔓 Decrypting

The following example shows how you can use the package to decrypt any encrypted record ciphertext:

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const DecryptMessage: FC = () => {
  const { publicKey, decrypt } = useWallet();

  const onClick = async () => {
    const cipherText = "record....";
    if (!publicKey) throw new WalletNotConnectedError();
    if (decrypt) {
      const decryptedPayload = await decrypt(cipherText);
      alert("Decrypted payload: " + decryptedPayload);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Decrypt message
    </button>
  );
};
```

### 🗂️ Requesting Records

You can request all records of a program the wallet has saved locally by syncing with the chain. Just use the `requestRecords` function returned by `useWallet` hook. The program id must be provdied as an argument.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestRecords: FC = () => {
  const { publicKey, requestRecords } = useWallet();

  const onClick = async () => {
    const program = "credits.aleo";
    if (!publicKey) throw new WalletNotConnectedError();
    if (requestRecords) {
      const records = await requestRecords(program);
      console.log("Records: " + records);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Records
    </button>
  );
};
```

See more in dedicated documentation.

### 📡 Broadcasting Transactions

To initiate a transaction and broadcast it to the network, you can use the `requestTransaction` function returned by `useWallet` hook.

```tsx
import {
  Transaction,
  WalletAdapterNetwork,
  WalletNotConnectedError
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestTransaction: FC = () => {
  const { publicKey, requestTransaction } = useWallet();

  const onClick = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    // The record here is an output from the Requesting Records above
    const record = `'{"id":"0f27d86a-1026-4980-9816-bcdce7569aa4","program_id":"credits.aleo","microcredits":"200000","spent":false,"data":{}}'`
    // Note that the inputs must be formatted in the same order as the Aleo program function expects, otherwise it will fail
    const inputs = [JSON.parse(record), "aleo1kf3dgrz9...", `${amount}u64`];
    const fee = 35_000; // This will fail if fee is not set high enough

    const aleoTransaction = Transaction.createTransaction(
      publicKey,
      WalletAdapterNetwork.Testnet,
      'credits.aleo',
      'transfer',
      inputs,
      fee
    );

    if (requestTransaction) {
      // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
      await requestTransaction(aleoTransaction);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Transaction
    </button>
  );
};
```

See more in dedicated documentation.

### 💻 Deploying Programs

A program deployement transaction can be initated as well, with just the program source code, using `requestDeploy` returned by `useWallet` hook.

```tsx
import {
  Deployment,
  WalletAdapterNetwork,
  WalletNotConnectedError
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const DeployProgram: FC = () => {
  const { publicKey, requestDeploy } = useWallet();

  const onClick = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const program = `
      program hello.aleo;
      function main:
        input r0 as u32.public;
        input r1 as u32.private;
        add r0 r1 into r2;
        output r2 as u32.private;
    `;
    const fee = 4_835_000; // This will fail if fee is not set high enough

    const aleoDeployment = new Deployment(
      publicKey,
      WalletAdapterNetwork.Testnet,
      program,
      fee
    );

    if (requestTransaction) {
      // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
      await requestDeploy(aleoDeployment);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Deploy Program
    </button>
  );
};
```

### 🗂️ Requesting Record Plaintexts

You can requests as well all records associated with a specific program, as decrypted plaintext. This requires the `OnChainHistory` permission.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestRecordPlaintexts: FC = () => {
  const { publicKey, requestRecordPlaintexts } = useWallet();

  const onClick = async () => {
    const program = "credits.aleo";
    if (!publicKey) throw new WalletNotConnectedError();
    if (requestRecordPlaintexts) {
      const records = await requestRecordPlaintexts(program);
      console.log("Records: " + records);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Records Plaintexts
    </button>
  );
};
```

### 📜 Requesting Transaction History

All trasnction history associated with a program can be recovered as well. This requires the `OnChainHistory` permission.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestRecords: FC = () => {
  const { publicKey, requestTransactionHistory } = useWallet();

  const onClick = async () => {
    const program = "credits.aleo";
    if (!publicKey) throw new WalletNotConnectedError();
    if (requestTransactionHistory) {
      const transactions = await requestTransactionHistory(program);
      console.log("Transactions: " + transactions);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Records Transaction History
    </button>
  );
};
```

### 🔔 Subscribing to Events

Events, like change of the active account can trigger dedicated callback options as the following:

```tsx
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import React, { FC, useEffect } from "react";

export const SubscribeToEvent: FC = () => {
  const { wallet } = useWallet();

  const handleAccountChange = useCallback(() => {
    // Handle account change, reconnect
  }, [wallet]);

  useEffect(() => {
    (wallet?.adapter as LeoWalletAdapter).on('accountChange', handleAccountChange);
    // Removes event listener during component teardown
    return () => {
      (wallet?.adapter as LeoWalletAdapter).off('accountChange', handleAccountChange);
    }
  }, [wallet, publicKey]);

  return (
    // Component
  );
};
```

ChatGPT, aleo-wallet-adapter-react subpackage is constituted of the following files :

- useWallet.ts
- WalletProvider.ts
- useLocalStorage.ts

ChatGPT, here is the code for useWallet.ts file:

"""

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
  connecting: boolean;
  connected: boolean;
  disconnecting: boolean;

  select(walletName: WalletName): void;
  connect(decryptPermission: DecryptPermission, network: WalletAdapterNetwork, programs?: string[]): Promise<void>;
  disconnect(): Promise<void>;

  signMessage: MessageSignerWalletAdapterProps['signMessage'] | undefined;
  decrypt: MessageSignerWalletAdapterProps['decrypt'] | undefined;
  requestRecords: MessageSignerWalletAdapterProps['requestRecords'] | undefined;
  requestTransaction: MessageSignerWalletAdapterProps['requestTransaction'] | undefined;
  requestExecution: MessageSignerWalletAdapterProps['requestExecution'] | undefined;
  requestBulkTransactions: MessageSignerWalletAdapterProps['requestBulkTransactions'] | undefined;
  requestDeploy: MessageSignerWalletAdapterProps['requestDeploy'] | undefined;
  transactionStatus: MessageSignerWalletAdapterProps['transactionStatus'] | undefined;
  getExecution: MessageSignerWalletAdapterProps['getExecution'] | undefined;
  requestRecordPlaintexts: MessageSignerWalletAdapterProps['requestRecordPlaintexts'] | undefined;
  requestTransactionHistory: MessageSignerWalletAdapterProps['requestTransactionHistory'] | undefined;
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
  connect(_decryptPermission: DecryptPermission,_network: WalletAdapterNetwork, _programs?: string[]) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'connect')));
  },
  disconnect() {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'disconnect')));
  },
  signMessage(_message: Uint8Array) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'signMessage')));
  },
  decrypt(_cipherText: string,_tpk?: string, _programId?: string,_functionName?: string, _index?: number) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'decrypt')));
  },
  requestRecords(_program: string) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestRecords')));
  },
  requestTransaction(_transaction: AleoTransaction) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestTransaction')));
  },
  requestExecution(_execution: AleoTransaction) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestExecution')));
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
  getExecution(_transactionId: string) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'getExecution')));
  },
  requestRecordPlaintexts(_program: string) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestRecordPlaintexts')));
  },
  requestTransactionHistory(_program: string) {
    return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'requestTransactionHistory')));
  }
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

function constructMissingProviderErrorMessage(action: string, valueName: string) {
  return (
    'You have tried to ' +
    `${action} "${valueName}"` +
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
"""

ChatGPT here is the WalletProvider.ts file:

"""

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

"""

ChatGPT, write the README.md file in markdown for aleo-wallet-adapter-react subpackage. It should have a "context" section focused on WalletProvider docs and a "hook" section focused on useWallet. It should include usage examples for each sections and be user friendly.
