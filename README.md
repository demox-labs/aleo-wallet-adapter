# `@demox-labs/leo-wallet-adapter`

Modular TypeScript wallet adapters and components for Aleo applications.

![Wallets](wallets.png)

## Quick Links

- [Demo](https://leo-wallet-demo.vercel.app/)
- [Quick Setup]
    + [Install](#install)
    + [Setup](#setup)
    + [Usage](#usage)

## Quick Setup

### Install

Install these dependencies:

```shell
yarn add leo-wallet-adapter && yarn add react
```

### Setup

```tsx
import React, { FC, useMemo } from 'react';
import { WalletProvider, LeoWalletAdapter } from '@demox-labs/leo-wallet-adapter';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

export const Wallet: FC = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Select the wallets you wish to support, by instantiating wallet adapters here.
             *
             * Common adapters can be found in the npm package `@demox-labs/leo-wallet-adapter`.
             */
            new LeoWalletAdapter(),
        ],
        []
    );

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <WalletMultiButton />
                { /* Your app's components go here, nested within the context providers. */ }
            </WalletModalProvider>
        </WalletProvider>
    );
};
```

### Usage

```tsx
import { useWallet, WalletNotConnectedError, LeoWalletAdapter } from '@demox-labs/leo-wallet-adapter';
import React, { FC, useCallback } from 'react';

export const SignMessageForAleo: FC = () => {
    const { publicKey, wallet } = useWallet();

    const onClick = async () => {
        if (!publicKey) throw new WalletNotConnectedError();
        
        const message = "I'm a message!";
        const messageBytes = new TextEncoder().encode(message);

        const signatureBytes = await (wallet?.adapter as LeoWalletAdapter).signMessage(messageBytes);
        const signature = new TextDecoder().decode(signatureBytes);

        console.log(signature);
    };

    return (
        <button onClick={onClick} disabled={!publicKey}>
            Sign a message!
        </button>
    );
};
```
