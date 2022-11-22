# Vanilla Javascript Example for Aleo DApps

A small example demonstrating connecting to a wallet without frontend frameworks or build systems.

## Set Up for a Given Wallet

Download the `aleo wallet adapter repo`:
```bash
git clone https://github.com/demox-labs/aleo-wallet-adapter.git
```

Navigate to the particular wallet adapter you want to integrate with your DApp:
```bash
cd packages/wallets/leo
```

Install node-modules:
```bash
yarn install
```

Bundle the wallet adapter and its dependencies:
```bash
yarn bundle
```

Copy the output bundle file into your project, and import it to use its functionality.
