# AleoWallet DApp Module

This module is required to provide communication between DApps and Aleo Wallet, it exposes unified interface for this interaction.

## 🚀 Quick Start

### Install

```bash
yarn add @demox-labs/leo-wallet-adapter
```

### Usage

```typescript
import { AleoWallet } from "@demox-labs/leo-wallet-adapter";

(async () => {
  try {
    const available = await AleoWallet.isAvailable();
    if (!available) {
      throw new Error("Aleo Wallet not installed");
    }

    // Note:

    // use `AleoWallet.isAvailable` method only after web application fully loaded.

    // Alternatively, you can use the method `AleoWallet.onAvailabilityChange`
    // that tracks availability in real-time .

    const wallet = new AleoWallet("My Super DApp");
    await wallet.connect("carthagenet");
  } catch (err) {
    console.error(err);
  }
})();
```

#### Check permissions

```typescript
import { AleoWallet } from "@demox-labs/leo-wallet-adapter";

(async () => {
  try {
    const available = await AleoWallet.isAvailable();
    if (!available) {
      throw new Error("Aleo Wallet not installed");
    }

    const permission = await AleoWallet.getCurrentPermission();
    // Alternatively, you can use the method `AleoWallet.onPermissionChange`
    // that tracks current permission in real-time.

    console.info(permission);
    // prints "{ rpc: string, pkh: string, publicKey: string }" if permission exists, "null" - if not.

    const wallet = new AleoWallet("My Super DApp", permission);

    console.info(wallet.connected);
    // prints "true" if permission exists, "false" - if not.

    if (!wallet.connected) {
      await wallet.connect("carthagenet");
    }

    // ...
  } catch (err) {
    console.error(err);
  }
})();
```

#### Sign

```typescript
import { AleoWallet } from "@demox-labs/leo-wallet-adapter";

(async () => {
  try {
    const wallet = new AleoWallet("My Super DApp");
    // ...

    // Only hex strings
    const signature = await wallet.sign(
      Buffer.from("Hello world").toString("hex")
    );
  } catch (err) {
    console.error(err);
  }
})();
```

### Demo

You can find the example of Counter DApp in [this repo](https://github.com/madfish-solutions/counter-dapp).

## API

You can explore auto generated [full API Docs here](docs/README.md).

Probably you would be most interested in the [AleoWallet class](docs/classes/aleowallet.md) methods.

## Local Development

Below is a list of commands you will probably find useful.

### npm run dev or yarn dev

Runs the project in development/watch mode. Your project will be rebuilt upon changes.

Your library will be rebuilt if you make edits.

### npm run build or yarn build

Bundles the package to the dist folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).
