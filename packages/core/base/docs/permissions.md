# Permissions

## Available Permissions

Here are the four available decryption permission level you can give a wallet using the adapter:

**No Decrypt:** The App cannot access any of your private assets.

**Decrypt upon request:** User will be asked every time wether the app can access some asset.

**Auto Decrypt:** The App can decrypt any requested asset data without asking the user.

**On Chain History:** The App has access to full pass private assets data and transaction ids.

Those are all defined in [../types.ts.](../types.ts) and given to the wallet uppon setup.

## Usage

Permission level can be provided the desired level using `decryptPermission` prop of `WalletProvider`:

```tsx
import React, { FC, useMemo } from "react";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";

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
      decryptPermission={DecryptPermission.NoDecrypt}
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
