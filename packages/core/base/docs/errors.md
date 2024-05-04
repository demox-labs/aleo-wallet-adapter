# Wallet Errors

## Exhaustive List

Here's the list of errors wallet operations can throw:

- **`WalletNotReadyError`**
Wallet is not ready yet.
- **`WalletLoadError`**
Error loading wallet.
- **`WalletConfigError`**
Configuration error in wallet.
- **`WalletConnectionError`**
Unable to connect to wallet.
- **`WalletNotSelectedError`**
No wallet selected.
- **`WalletDisconnectedError`**
Wallet disconnected unexpectedly.
- **`WalletDisconnectionError`**
Error during disconnection from wallet.
- **`WalletAccountError`**
Account-related error in wallet.
- **`WalletPublicKeyError`**
Public key error in wallet.
- **`WalletKeypairError`**
Keypair error in wallet.
- **`WalletNotConnectedError`**
Wallet is not connected.
- **`WalletSendTransactionError`**
Error sending transaction from wallet.
- **`WalletSignMessageError`**
Error signing message with wallet.
- **`WalletSignTransactionError`**
Error signing transaction with wallet.
- **`WalletTimeoutError`**
Operation timed out in wallet.
- **`WalletWindowBlockedError`**
Wallet window blocked or inaccessible.
- **`WalletWindowClosedError`**
Wallet window closed unexpectedly.
- **`WalletDecryptionNotAllowedError`**
Decryption not allowed in wallet.
- **`WalletDecryptionError`**
Error decrypting data in wallet.
- **`WalletRecordsError`**
Error accessing or managing records in wallet.
- **`WalletTransactionError`**
General transaction error in wallet.

## Error Handling

The following example shows how you can catch a specific error using the different types defined above:

```tsx
import { 
    WalletNotConnectedError,
    WalletDecryptionNotAllowedError,
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const DecryptMessage: FC = () => {
  const { publicKey, decrypt } = useWallet();

  const onClick = async () => {
    const cipherText = "record....";
    if (!publicKey) throw new WalletNotConnectedError();
    if (decrypt) {
      try {
          const decryptedPayload = await decrypt(cipherText);
          alert("Decrypted payload: " + decryptedPayload);
      } catch(error: any){
        if(error instanceof WalletDecryptionNotAllowedError){
            console.log("Cannot decrypt record ciphertext when 'NoDecrypt' permission is set.")
        }
      }
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Decrypt message
    </button>
  );
};
```
