# Wallet Adapter for Aleo Apps

Modular TypeScript wallet adapters and components for Aleo applications.

- [Demo](https://demo.leo.app)
- [Base Docs](https://github.com/demox-labs/aleo-wallet-adapter/blob/main/packages/core/base/docs/modules.md)
- [React Docs](https://github.com/demox-labs/aleo-wallet-adapter/blob/main/packages/core/react/docs/modules.md)
- [React UI Docs](https://github.com/demox-labs/aleo-wallet-adapter/blob/main/packages/ui/docs/modules.md)
- [Leo Adapter Docs](https://github.com/demox-labs/aleo-wallet-adapter/blob/main/packages/wallets/leo/docs/modules.md)

This is a quick setup guide with examples of how to add Wallet Adapter to a React-based Aleo app.

## Quick Setup (using React UI)

### Install

Install these dependencies:

```shell
npm install --save \
    @demox-labs/aleo-wallet-adapter-base \
    @demox-labs/aleo-wallet-adapter-react \
    @demox-labs/aleo-wallet-adapter-react-ui \
    @demox-labs/aleo-wallet-adapter-leo \
    react
```

### Setup

```tsx
import React, { FC, useMemo } from 'react';
import { WalletProvider } from '@demox-labs/aleo-wallet-adapter-react';
import { WalletModalProvider } from '@demox-labs/aleo-wallet-adapter-reactui';
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo';
import { DecryptPermission, WalletAdapterBase } from '@demox-labs/aleo-wallet-adapter-base';

// Default styles that can be overridden by your app
require('@demox-labs/aleo-wallet-adapter-react-ui/styles.css');

export const Wallet: FC = () => {
    const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: 'Leo Demo App',
      }),
    ],
    []
  );

    return (
        <WalletProvider
            wallets={wallets}
            decryptPermission={DecryptPermission.UponRequest}
            network={WalletAdapterNetwork.LocalNet}
            autoConnect
          >
          <WalletModalProvider>
            // Your app's components go here
          </WalletModalProvider>
        </WalletProvider>
    );
};
```

### Signing

```tsx
import { WalletNotConnectedError } from '@demox-labs/aleo-wallet-adapter-base';
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import React, { FC, useCallback } from 'react';

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
    }

    return (
        <button onClick={onClick} disabled={!publicKey}>
            Sign message
        </button>
    );
};
```

### Decrypting
```tsx
import { WalletNotConnectedError } from '@demox-labs/aleo-wallet-adapter-base';
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import React, { FC, useCallback } from 'react';

export const DecryptMessage: FC = () => {
    const { wallet, publicKey } = useWallet();
    
    const onClick = async () => {
        const cipherText = 'record....';
        if (!publicKey) throw new WalletNotConnectedError();
        const decryptedPayload = await wallet?.adapter).decrypt(cipherText);
        alert("Decrypted payload: " + decryptedPayload);
    }
    
    return (
        <button onClick={onClick} disabled={!publicKey}>
            Decrypt message
        </button>
    );
}

```
