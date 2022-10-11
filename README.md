# `@demox-labs/leo-wallet-adapter`

Modular TypeScript wallet adapters and components for Aleo applications.

### Install

Install these dependencies:

```shell
yarn add leo-wallet-adapter && yarn add react
```

### Usage

```tsx
import { useWallet, WalletNotConnectedError, LeoWalletAdapter } from '@demox-labs/leo-wallet-adapter';
import React, { FC, useCallback } from 'react';

export const SignMessageForAleo: FC = () => {
    const { publicKey, wallet } = useWallet();

    const onClick = async () => {
        if (!publicKey) throw new WalletNotConnectedError();
        
        const message = "I'm a message!";
        const messageBytes = new TextEncoder().encode(message);

        const signatureBytes = await (wallet?.adapter as LeoWalletAdapter).signMessage(messageBytes);
        const signature = new TextDecoder().decode(signatureBytes);

        console.log(signature);
    };

    return (
        <button onClick={onClick} disabled={!publicKey}>
            Sign a message!
        </button>
    );
};
```
