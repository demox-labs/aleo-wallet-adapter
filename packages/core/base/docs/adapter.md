# Adapter

The `adapter.ts` module provides the WalletAdapter interface and the BaseWalletAdapter class, which are essential for wallet interactions in Aleo applications.

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

```typescript
import { BaseWalletAdapter, WalletAdapterEvents } from './adapter';

class MyWalletAdapter extends BaseWalletAdapter {
    // Implementation of the required abstract methods and properties.
}
```
