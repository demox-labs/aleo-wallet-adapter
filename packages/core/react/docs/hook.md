# Hook

## **useWallet**

The **`useWallet`** hook allows you to interact with the wallet functionality exposed through the **`WalletProvider`**. It returns the wallet state and functions to perform wallet operations.

### **Returned Values**

- **`autoConnect`**: If the wallet should auto-connect.
- **`wallets`**: The list of available wallets.
- **`wallet`**: The currently selected wallet or **`null`**.
- **`publicKey`**: The public key of the connected wallet or **`null`**.
- **`connecting`**: If a wallet is being connected.
- **`connected`**: If a wallet is connected.
- **`disconnecting`**: If a wallet is being disconnected.
- **`select`**: Function to select a wallet by name.
- **`connect`**: Function to connect the wallet.
- **`disconnect`**: Function to disconnect the wallet.
- **`signMessage`**: Function to sign a message.
- **`decrypt`**: Function to decrypt ciphertext.
- **`requestRecords`**: Function to request records.
- **`requestTransaction`**: Function to request a transaction.
- **`requestExecution`**: Function to request an execution.
- **`requestBulkTransactions`**: Function to request multiple transactions.
- **`requestDeploy`**: Function to request a program deployment.
- **`transactionStatus`**: Function to check a transaction's status.
- **`getExecution`**: Function to get an execution.
- **`requestRecordPlaintexts`**: Function to request record plaintexts.
- **`requestTransactionHistory`**: Function to request transaction history.

### **Usage Example**

Here is an example of how to use functions and state returned by useWallet hook:

```tsx
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import React, { useCallback } from 'react';

export const WalletOperations = () => {
    const { publicKey, signMessage, connect, disconnect } = useWallet();

    const handleConnect = useCallback(async () => {
        try {
            await connect();
            alert('Connected!');
        } catch (error) {
            alert(`Failed to connect: ${error.message}`);
        }
    }, [connect]);

    const handleDisconnect = useCallback(async () => {
        try {
            await disconnect();
            alert('Disconnected!');
        } catch (error) {
            alert(`Failed to disconnect: ${error.message}`);
        }
    }, [disconnect]);

    const handleSignMessage = useCallback(async () => {
        if (!publicKey) return alert('Wallet not connected');

        try {
            const message = new TextEncoder().encode('Hello, Aleo!');
            const signature = await signMessage?.(message);
            alert(`Signed message: ${signature}`);
        } catch (error) {
            alert(`Failed to sign message: ${error.message}`);
        }
    }, [signMessage, publicKey]);

    return (
        <div>
            <button onClick={handleConnect}>Connect Wallet</button>
            <button onClick={handleDisconnect}>Disconnect Wallet</button>
            <button onClick={handleSignMessage} disabled={!publicKey}>
                Sign Message
            </button>
        </div>
    );
};

```
