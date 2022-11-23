# Vanilla Javascript Example 2 for Aleo DApps

Another small example demonstrating connecting to a wallet without frontend frameworks or build systems.
In this example, we put the AleoWalletAdapter and LeoWalletAdapter objects on the window object to use them in other scripts without importing them.

## How to use

1. Copy the output bundle file in `./public/main.js` into your project.

2. Use by referencing the window.AleoWalletAdapter & window.LeoWalletAdapter objects.

For example, you can connect to a DApp & request a signature (taken from `./public/index.html`):
```bash
document.addEventListener("DOMContentLoaded", function(event) {
  var wallet = new window.LeoWallet.LeoWalletAdapter({ appName: 'Vanilla JS Example'});
  wallet.connect(window.AleoWalletBase.DecryptPermission.AutoDecrypt, window.AleoWalletBase.WalletAdapterNetwork.Mainnet).then(() => {
    let utf8Encode = new TextEncoder();
    let bytes = utf8Encode.encode("Leo is awesome");
    wallet.signMessage(bytes);
    console.log('Signature: ', bytes);
  });
});
```

## Build bundle from source

1. Download the `aleo wallet adapter repo`:
```bash
git clone https://github.com/demox-labs/aleo-wallet-adapter.git
```

2. Navigate to the particular wallet adapter you want to integrate with your DApp:
```bash
cd packages/examples/vanillajs-2
```

3. Install node-modules:
```bash
yarn
```

4. Bundle the wallet adapter and its dependencies:
```bash
yarn build
```

5. Run the Dev Sever:
```bash
yarn dev
```

And open `localhost:9000`
