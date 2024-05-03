# Adapter abstractions

The `adapter.ts` and `signer.ts` modules provide the adapter interfaces which should be implemented by wallets to allow interactions with Aleo applications.

Let's break down each adapter class and their relationships:

**`WalletAdapter`**: This is the base interface for all wallet adapters. It defines the common properties and methods that any wallet adapter should have, such as connecting to a wallet, getting the account balance, and sending transactions.

**`BaseWalletAdapter`**: This is an abstract class that implements the `WalletAdapter` interface. It provides a basic implementation of the wallet adapter functionality, which can be extended by other classes. Think of it as a partial implementation of the `WalletAdapter` interface.

**`SignerWalletAdapter`**: This interface extends `WalletAdapter` and adds additional methods related to signing transactions and messages. A signer wallet adapter is responsible for signing transactions and messages using the user's private key.

**`BaseSignerWalletAdapter`**: This abstract class implements the `SignerWalletAdapter` interface and provides a basic implementation of the signer wallet adapter functionality. It extends `BaseWalletAdapter`, so it inherits the common wallet adapter functionality.

**`MessageSignerWalletAdapter`**: This interface extends `SignerWalletAdapter` and adds additional methods related to decrypting ciphertexts, requesting records, and executing transactions. A message signer wallet adapter is a specialized signer wallet adapter that can also handle decryption and execution of transactions.

**`BaseMessageSignerWalletAdapter`**: This abstract class implements the `MessageSignerWalletAdapter` interface and provides a basic implementation of the message signer wallet adapter functionality. It extends `BaseSignerWalletAdapter`, so it inherits the signer wallet adapter functionality.

## WalletAdapter

`WalletAdapter` is an interface that defines the basic methods and properties that any wallet adapter should implement to interact with Aleo blockchain wallets.

### Properties

- `name`: Unique name of the wallet.
- `url`: URL of the wallet's homepage or download page.
- `icon`: URL to the wallet's icon image.
- `readyState`: Current readiness state of the wallet.
- `publicKey`: The public key of the currently connected wallet, if any.

### Methods

- `connect()`: Connects to the wallet.
- `disconnect()`: Disconnects the wallet.

## BaseWalletAdapter

`BaseWalletAdapter` is an abstract class that implements the `WalletAdapter` interface. It uses the EventEmitter pattern to handle events such as `connect`, `disconnect`, and `error`.

### Usage

See Leo Wallet implementation : [../../../wallets/leo/adapter.ts](../../../wallets/leo/adapter.ts)
