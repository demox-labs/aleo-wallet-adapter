# **Aleo Wallet Adapter UI**

The **`aleo-wallet-adapter-reactui`** sub-package provides a collection of React components and hooks to integrate wallet functionality into your React Aleo DApps. This package simplifies the process of creating wallet modals, connection buttons, and other user interface elements.

## **Features**

- Wallet modal management.
- Pre-built buttons for wallet connection and disconnection.
- Hooks for wallet modal state management.
- Icon display for connected wallets.

## **Installation**

To get started, simply install the following dependency, using npm:

```shell
npm install --save @demox-labs/aleo-wallet-adapter-reactui
```

Or using yarn:

```shell
yarn add @demox-labs/aleo-wallet-adapter-reactui
```

## **Components**

### **`WalletModalProvider`**

The **`WalletModalProvider`** component wraps the entire application to provide wallet modal functionality.

#### **Usage**

Wrap your app with **`WalletModalProvider`**:

```tsx
import React from 'react';
import { WalletModalProvider } from '@demox-labs/aleo-wallet-adapter-reactui';

const App = () => (
  <WalletModalProvider>
    {/* Other components */}
  </WalletModalProvider>
);

export default App;

```

### **`WalletModalButton`**

A button that opens the wallet selection modal.

#### **Usage**

```tsx
import React from 'react';
import { WalletModalButton } from '@demox-labs/aleo-wallet-adapter-reactui';

const MyComponent = () => (
  <div>
    <WalletModalButton>Select Wallet</WalletModalButton>
  </div>
);

export default MyComponent;

```

### **`WalletDisconnectButton`**

A button that disconnects the currently connected wallet.

#### **Usage**

```tsx
import React from 'react';
import { WalletDisconnectButton } from '@demox-labs/aleo-wallet-adapter-reactui';

const MyComponent = () => (
  <div>
    <WalletDisconnectButton>Disconnect Wallet</WalletDisconnectButton>
  </div>
);

export default MyComponent;

```

### **`WalletMultiButton`**

A button that shows wallet connection status and opens a wallet modal if clicked.

#### **Usage**

```tsx
import React from 'react';
import { WalletMultiButton } from '@demox-labs/aleo-wallet-adapter-reactui';

const MyComponent = () => (
  <div>
    <WalletMultiButton>Connect Wallet</WalletMultiButton>
  </div>
);

export default MyComponent;

```

### **`WalletConnectButton`**

A button to connect to a wallet directly, and includes decrypt permissions and network options.

#### **Usage**

```tsx
import React from 'react';
import { WalletConnectButton } from '@demox-labs/aleo-wallet-adapter-reactui';
import { WalletAdapterNetwork, DecryptPermission } from '@demox-labs/aleo-wallet-adapter-base';

const MyComponent = () => (
  <div>
    <WalletConnectButton
      network={WalletAdapterNetwork.Testnet}
      decryptPermission={DecryptPermission.UponRequest}
      programs={['myProgram.aleo']}
    >
      Connect Wallet
    </WalletConnectButton>
  </div>
);

export default MyComponent;

```

## Hooks

### **`useWalletModal`**

A hook for accessing wallet modal state.

#### **Usage**

```tsx
import React from 'react';
import { useWalletModal } from '@demox-labs/aleo-wallet-adapter-reactui';

const MyComponent = () => {
  const { visible, setVisible } = useWalletModal();

  return (
    <button onClick={() => setVisible(!visible)}>
      Toggle Wallet Modal
    </button>
  );
};

export default MyComponent;
```
