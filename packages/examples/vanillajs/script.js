import { LeoWalletAdapter } from './leo-wallet-bundle.js';

document.getElementById("buttonToClick").onclick = () => buttonClick().then();

export async function buttonClick() {
  var leoWallet = new LeoWalletAdapter();

  await leoWallet.connect("NO_DECRYPT", "localnet");
  alert('clicked');
}