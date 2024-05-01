# Errors

This document details the various errors defined in the `errors.ts` file, which can be thrown during wallet interactions.

## WalletError

Base class for all wallet-related errors.

### WalletNotConnectedError

Thrown when attempting an operation requiring a wallet connection, while the wallet is not connected.

### WalletPublicKeyError

Thrown when there is an issue related to the public key operations.

## Usage

Errors are typically used in try-catch blocks to handle exceptions related to wallet operations.

```typescript
try {
    // wallet operation
} catch (error) {
    if (error instanceof WalletNotConnectedError) {
        // handle not connected error
    }
}
```
