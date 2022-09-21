# TempleWallet DApp Module

This module is required to provide communication between DApps and Temple Wallet, it exposes unified interface for this interaction.

## 🚀 Quick Start

### Install

```bash
yarn add @taquito/taquito @temple-wallet/dapp
```

### Usage

```typescript
import { TempleWallet } from "@temple-wallet/dapp";

(async () => {
  try {
    const available = await TempleWallet.isAvailable();
    if (!available) {
      throw new Error("Temple Wallet not installed");
    }

    // Note:

    // use `TempleWallet.isAvailable` method only after web application fully loaded.

    // Alternatively, you can use the method `TempleWallet.onAvailabilityChange`
    // that tracks availability in real-time .

    const wallet = new TempleWallet("My Super DApp");
    await wallet.connect("carthagenet");
    const tezos = wallet.toTezos();

    const accountPkh = await tezos.wallet.pkh();
    const accountBalance = await tezos.tz.getBalance(accountPkh);
    console.info(`address: ${accountPkh}, balance: ${accountBalance}`);

    const counter = await tezos.wallet.at(
      "KT1DjYkruvfujfKw6nLYafArqKufcwHuKXvT"
    );

    const operation = await counter.methods.increment(1).send();
    await operation.confirmation();

    const counterValue = await counter.storage();
    console.info(`count: ${counterValue}`);
  } catch (err) {
    console.error(err);
  }
})();
```

#### Check permissions

```typescript
import { TempleWallet } from "@temple-wallet/dapp";

(async () => {
  try {
    const available = await TempleWallet.isAvailable();
    if (!available) {
      throw new Error("Temple Wallet not installed");
    }

    const permission = await TempleWallet.getCurrentPermission();
    // Alternatively, you can use the method `TempleWallet.onPermissionChange`
    // that tracks current permission in real-time.

    console.info(permission);
    // prints "{ rpc: string, pkh: string, publicKey: string }" if permission exists, "null" - if not.

    const wallet = new TempleWallet("My Super DApp", permission);

    console.info(wallet.connected);
    // prints "true" if permission exists, "false" - if not.

    if (!wallet.connected) {
      await wallet.connect("carthagenet");
    }

    const tezos = wallet.toTezos();

    // ...
  } catch (err) {
    console.error(err);
  }
})();
```

#### Sign

```typescript
import { TempleWallet } from "@temple-wallet/dapp";

(async () => {
  try {
    const wallet = new TempleWallet("My Super DApp");
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

Probably you would be most interested in the [TempleWallet class](docs/classes/templewallet.md) methods.

## Local Development

Below is a list of commands you will probably find useful.

### npm run dev or yarn dev

Runs the project in development/watch mode. Your project will be rebuilt upon changes.

Your library will be rebuilt if you make edits.

### npm run build or yarn build

Bundles the package to the dist folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).
