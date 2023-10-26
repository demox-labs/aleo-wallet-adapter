[@demox-labs/aleo-wallet-adapter-base](../README.md) / [Exports](../modules.md) / WalletReadyState

# Enumeration: WalletReadyState

A wallet's readiness describes a series of states that the wallet can be in,
depending on what kind of wallet it is. An installable wallet (eg. a browser
extension like Phantom) might be `Installed` if we've found the Phantom API
in the global scope, or `NotDetected` otherwise. A loadable, zero-install
runtime (eg. Torus Wallet) might simply signal that it's `Loadable`. Use this
metadata to personalize the wallet list for each user (eg. to show their
installed wallets first).

## Table of contents

### Enumeration Members

- [Installed](WalletReadyState.md#installed)
- [Loadable](WalletReadyState.md#loadable)
- [NotDetected](WalletReadyState.md#notdetected)
- [Unsupported](WalletReadyState.md#unsupported)

## Enumeration Members

### Installed

• **Installed** = ``"Installed"``

User-installable wallets can typically be detected by scanning for an API
that they've injected into the global context. If such an API is present,
we consider the wallet to have been installed.

#### Defined in

[adapter.ts:49](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L49)

___

### Loadable

• **Loadable** = ``"Loadable"``

Loadable wallets are always available to you. Since you can load them at
any time, it's meaningless to say that they have been detected.

#### Defined in

[adapter.ts:55](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L55)

___

### NotDetected

• **NotDetected** = ``"NotDetected"``

#### Defined in

[adapter.ts:50](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L50)

___

### Unsupported

• **Unsupported** = ``"Unsupported"``

If a wallet is not supported on a given platform (eg. server-rendering, or
mobile) then it will stay in the `Unsupported` state.

#### Defined in

[adapter.ts:60](https://github.com/demox-labs/leo-wallet-adapter/blob/10fbe90/packages/core/base/adapter.ts#L60)
