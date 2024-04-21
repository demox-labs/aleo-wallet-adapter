<h1 align="center">
    <picture>
        <img alt="Aleo Wallet Adapter" src="https://assets-global.website-files.com/6559a97a91ac8fe073763dc8/656f59844279a74a7ac47d6b_logo-symbol.svg" style="filter: invert(75%) sepia(90%) saturate(2945%) hue-rotate(240deg) brightness(100%) contrast(94%);" width="22"/>
    </picture>
    Aleo Wallet Adapter
</h1>

<p align="center">
    <a href="https://docs.leo.app/aleo-wallet-adapter"> <img alt="Website" src="https://img.shields.io/badge/docs-online-blue"></a>
    <a href="https://demo.leo.app"><img src="https://img.shields.io/badge/live_demo-▶️-green"/></a>
    <a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-base"><img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-base"/></a>
    <a href="https://discord.com/invite/aleo"><img src="https://img.shields.io/discord/913160862670397510?logo=discord"/></a>
</p>

<p align="center">
    A package for integrating wallet features into your React Aleo decentralised applications.
</p>

## Table of Content

- [🚀 Getting Started](#-getting-started)
  - [📲 Install](#-install)
  - [🛠️ Setup](#-setup)
- [🧪 Usage examples](#-usage-examples)
  - [✍🏻 Signing](#-signing)
  - [🔓 Decrypting](#-decrypting)
  - [🗂️ Requesting Records](#%EF%B8%8F-requesting-records)
  - [📡 Broadcasting Transactions](#-broadcasting-transactions)
  - [💻 Deploying Programs](#-deploying-programs)
  - [🗂️ Requesting Record Plaintexts](#%EF%B8%8F-requesting-record-plaintexts)
  - [📜 Requesting Transaction History](#-requesting-transaction-history)
  - [🔔 Subscribing to Events](#-subscribing-to-events)

## Introduction

A node package for integrating wallet features into your React Aleo decentralised applications (DApp). It includes adapters and components tailored for use with the Aleo blockchain, supporting React-based applications.

<p align="center">
    <a href="https://demo.leo.app"><img src="https://img.shields.io/badge/live_demo-▶️-green"/></a>
</p>

It includes 4 sub-packages:

- `aleo-wallet-adapter-base`
Generic features such as Aleo related Classes, Errors, Permissions...

    <a href="./packages/core/base/docs/modules.md">
        <img alt="Website" src="https://img.shields.io/badge/docs-online-blue">
    </a>
    <a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-base">
        <img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-base"/>
    </a>

- `aleo-wallet-adapter-react`
React Context Povider and Hooks.

    <a href="./packages/core/react/docs/modules.md">
        <img alt="Website" src="https://img.shields.io/badge/docs-online-blue">
    </a>
    <a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-react">
        <img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-react"/>
    </a>

- `aleo-wallet-adapter-reactui`
React components ready to be used in a DApp.

    <a href="./packages/ui/docs/modules.md">
        <img alt="Website" src="https://img.shields.io/badge/docs-online-blue">
    </a>
    <a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-reactui">
        <img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-reactui"/>
    </a>

- `aleo-wallet-adapter-leo`
Leo Wallet specific implementation of the adapter.

    <a href="./packages/wallets/leo/docs/modules.md">
        <img alt="Website" src="https://img.shields.io/badge/docs-online-blue">
    </a>
    <a href="https://www.npmjs.com/package/@demox-labs/aleo-wallet-adapter-leo">
        <img src="https://img.shields.io/npm/v/@demox-labs/aleo-wallet-adapter-leo"/>
    </a>

Top package `aleo-wallet-adapter` exports all of these sub-packages exports.

## 🚀 Getting Started

Here is a quick setup guide on how to add Wallet Adapter to a React-based Aleo app along with **useful examples**.
To get further details about any specific feature, checkout corresponding sub-package documentation.

### 📲 Install

To get started, simply install the following dependencies, using npm:

```shell
npm install --save \
    @demox-labs/aleo-wallet-adapter-base \
    @demox-labs/aleo-wallet-adapter-react \
    @demox-labs/aleo-wallet-adapter-reactui \
    @demox-labs/aleo-wallet-adapter-leo \
    react
```

Or using yarn:

```shell
yarn add \
    @demox-labs/aleo-wallet-adapter-base \
    @demox-labs/aleo-wallet-adapter-react \
    @demox-labs/aleo-wallet-adapter-reactui \
    @demox-labs/aleo-wallet-adapter-leo \
    react
```

### 🛠️ Setup

Set up Aleo Wallet Adapter in your React application by creating a wallet context with a provider, modal provider, and specifying the wallets (e.g., LeoWalletAdapter) you want to use.

```tsx
import React, { FC, useMemo } from "react";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";

// Default styles that can be overridden by your app
require("@demox-labs/aleo-wallet-adapter-reactui/styles.css");

export const Wallet: FC = () => {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Leo Demo App",
      }),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.UponRequest}
      network={WalletAdapterNetwork.Localnet}
      autoConnect
    >
      <WalletModalProvider>
        // Your app's components go here
      </WalletModalProvider>
    </WalletProvider>
  );
};
```

## 🧪 Usage examples

### ✍🏻 Signing

You can use Aleo Wallet Adapter to sign messages with the user's wallet. This snippet demonstrates how to create a button that, upon clicking, signs a predefined message.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import React, { FC, useCallback } from "react";

export const SignMessage: FC = () => {
  const { wallet, publicKey } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const message = "a message to sign";

    const bytes = new TextEncoder().encode(message);
    const signatureBytes = await (
      wallet?.adapter as LeoWalletAdapter
    ).signMessage(bytes);
    const signature = new TextDecoder().decode(signatureBytes);
    alert("Signed message: " + signature);
  }, [wallet, publicKey]);

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Sign message
    </button>
  );
};
```

### 🔓 Decrypting

The following example shows how you can use the package to decrypt any encrypted record ciphertext:

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const DecryptMessage: FC = () => {
  const { publicKey, decrypt } = useWallet();

  const onClick = async () => {
    const cipherText = "record....";
    if (!publicKey) throw new WalletNotConnectedError();
    if (decrypt) {
      const decryptedPayload = await decrypt(cipherText);
      alert("Decrypted payload: " + decryptedPayload);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Decrypt message
    </button>
  );
};
```

### 🗂️ Requesting Records

You can request all records of a program the wallet has saved locally by syncing with the chain. Just use the `requestRecords` function returned by `useWallet` hook. The program id must be provdied as an argument.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestRecords: FC = () => {
  const { publicKey, requestRecords } = useWallet();

  const onClick = async () => {
    const program = "credits.aleo";
    if (!publicKey) throw new WalletNotConnectedError();
    if (requestRecords) {
      const records = await requestRecords(program);
      console.log("Records: " + records);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Records
    </button>
  );
};
```

See more in dedicated documentation.

### 📡 Broadcasting Transactions

To initiate a transaction and broadcast it to the network, you can use the `requestTransaction` function returned by `useWallet` hook.

```tsx
import {
  Transaction,
  WalletAdapterNetwork,
  WalletNotConnectedError
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestTransaction: FC = () => {
  const { publicKey, requestTransaction } = useWallet();

  const onClick = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    // The record here is an output from the Requesting Records above
    const record = `'{"id":"0f27d86a-1026-4980-9816-bcdce7569aa4","program_id":"credits.aleo","microcredits":"200000","spent":false,"data":{}}'`
    // Note that the inputs must be formatted in the same order as the Aleo program function expects, otherwise it will fail
    const inputs = [JSON.parse(record), "aleo1kf3dgrz9...", `${amount}u64`];
    const fee = 35_000; // This will fail if fee is not set high enough

    const aleoTransaction = Transaction.createTransaction(
      publicKey,
      WalletAdapterNetwork.Testnet,
      'credits.aleo',
      'transfer',
      inputs,
      fee
    );

    if (requestTransaction) {
      // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
      await requestTransaction(aleoTransaction);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Transaction
    </button>
  );
};
```

See more in dedicated documentation.

### 💻 Deploying Programs

A program deployement transaction can be initated as well, with just the program source code, using `requestDeploy` returned by `useWallet` hook.

```tsx
import {
  Deployment,
  WalletAdapterNetwork,
  WalletNotConnectedError
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const DeployProgram: FC = () => {
  const { publicKey, requestDeploy } = useWallet();

  const onClick = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const program = `
      program hello.aleo;
      function main:
        input r0 as u32.public;
        input r1 as u32.private;
        add r0 r1 into r2;
        output r2 as u32.private;
    `;
    const fee = 4_835_000; // This will fail if fee is not set high enough

    const aleoDeployment = new Deployment(
      publicKey,
      WalletAdapterNetwork.Testnet,
      program,
      fee
    );

    if (requestTransaction) {
      // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
      await requestDeploy(aleoDeployment);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Deploy Program
    </button>
  );
};
```

### 🗂️ Requesting Record Plaintexts

You can requests as well all records associated with a specific program, as decrypted plaintext. This requires the `OnChainHistory` permission.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestRecordPlaintexts: FC = () => {
  const { publicKey, requestRecordPlaintexts } = useWallet();

  const onClick = async () => {
    const program = "credits.aleo";
    if (!publicKey) throw new WalletNotConnectedError();
    if (requestRecordPlaintexts) {
      const records = await requestRecordPlaintexts(program);
      console.log("Records: " + records);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Records Plaintexts
    </button>
  );
};
```

### 📜 Requesting Transaction History

All trasnction history associated with a program can be recovered as well. This requires the `OnChainHistory` permission.

```tsx
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestRecords: FC = () => {
  const { publicKey, requestTransactionHistory } = useWallet();

  const onClick = async () => {
    const program = "credits.aleo";
    if (!publicKey) throw new WalletNotConnectedError();
    if (requestTransactionHistory) {
      const transactions = await requestTransactionHistory(program);
      console.log("Transactions: " + transactions);
    }
  };

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Request Records Transaction History
    </button>
  );
};
```

### 🔔 Subscribing to Events

Events, like change of the active account can trigger dedicated callback options as the following:

```tsx
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import React, { FC, useEffect } from "react";

export const SubscribeToEvent: FC = () => {
  const { wallet } = useWallet();

  const handleAccountChange = useCallback(() => {
    // Handle account change, reconnect
  }, [wallet]);

  useEffect(() => {
    (wallet?.adapter as LeoWalletAdapter).on('accountChange', handleAccountChange);
    // Removes event listener during component teardown
    return () => {
      (wallet?.adapter as LeoWalletAdapter).off('accountChange', handleAccountChange);
    }
  }, [wallet, publicKey]);

  return (
    // Component
  );
};
```
