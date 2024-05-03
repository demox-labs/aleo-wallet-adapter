# Context

## WalletProvider

The **`WalletProvider`** component wraps a DApp and provides wallet-related functionality across the entire application through the `WalletContext`.

### Props

- **`wallets`**: An array of wallet adapter instances to be used in the application.
- **`autoConnect`** *(optional)*: A boolean indicating if the wallet should automatically connect if previously connected (default: **`false`**).
- **`decryptPermission`** *(optional)*: Permission for decryption (**`DecryptPermission`**) (default: `DecryptPermission.NoDecrypt`).
- **`network`** *(optional)*: The Aleo network to connect to (**`WalletAdapterNetwork`**) (default: `WalletAdapterNetwork.Testnet`).
- **`onError`** *(optional)*: A callback for handling wallet errors.
- **`localStorageKey`** *(optional)*: The localStorage key to persist the selected wallet name (default: **`'walletName'`**).

### **Usage Example**

```tsx
import React from 'react';
import { WalletProvider } from '@demox-labs/aleo-wallet-adapter-react';
import { WalletModalProvider } from '@demox-labs/aleo-wallet-adapter-reactui';
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo';
import { WalletAdapterNetwork, DecryptPermission } from '@demox-labs/aleo-wallet-adapter-base';

export const WalletApp = () => {
    const wallets = [
        new LeoWalletAdapter({
            appName: 'My Aleo DApp'
        })
    ];

    return (
        <WalletProvider
            wallets={wallets}
            autoConnect
            decryptPermission={DecryptPermission.UponRequest}
            network={WalletAdapterNetwork.Testnet}
        >
            <WalletModalProvider>
                {/* Your application components */}
            </WalletModalProvider>
        </WalletProvider>
    );
};

```
