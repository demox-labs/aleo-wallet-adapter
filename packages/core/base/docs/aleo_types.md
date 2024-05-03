# Aleo Specific Types

## Transition

Represents a single transition in a transaction.

### Properties

* `program`: `string` - The name of the program associated with the transition.
* `functionName`: `string` - The function name within the program to be executed.
* `inputs`: `any[]` - An array of snarkvm object input values for the function execution.

### Usage

Use constructor to creates a new `Transition` instance with the provided program, function name, and input values:

```tsx
const program = "hello.aleo";
const program = "main";
const inputs = ["1u32", "2u32"]

const transition = new Transition(program, functionName, inputs);
```

## Transaction

Represents a transaction consisting of one or more transitions.

### Properties

* `address`: `string` - The address at the origin of the transaction.
* `chainId`: `string` - The network the transaction should be broadcasted to.
* `transitions`: `AleoTransition[]` - An array of transition objects.
* `fee`: `number` - The fee associated with the transaction.
* `feePrivate`: `boolean` - Indicates whether the fee is private (default: `true`).

### Methods

* `constructor(address: string, chainId: string, transitions: AleoTransition[], fee: number, feePrivate = true)`
Creates a new `Transaction` instance with the provided address, chain ID, transitions, fee, and fee privacy flag.

* `createTransaction(address: string, chainId: string, program: string, functionName: string, inputs: any[], fee: number, feePrivate = true)`
Creates a new `Transaction` instance with a single transition.

### Usage

```tsx
import {
  Transaction,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";

const program = "hello.aleo";
const functionName = "main";
const inputs = ["1u32", "2u32"]

const aleoTransaction = Transaction.createTransaction(
    publicKey,
    WalletAdapterNetwork.Testnet,
    program,
    functionName,
    inputs,
    fee
);
```

Transaction can then be transmitted to the wallet using the adapter `requestTransaction` or `requestExecution` functions returned by `useWallet` react hook.

## Deployment

Represents a deployment request of a program on the Aleo network.

### Properties

* `address`: `string` - The address at the origin of deployment.
* `chainId`: `string` - The network where the program should be deployed the deployment.
* `program`: `string` - The name of the program being deployed.
* `fee`: `number` - The fee associated with the deployment.
* `feePrivate`: `boolean` - Indicates whether the fee is private (default: `true`).

### Usage

Use the constructor to create a new `Deployment` instance with the provided address, chain ID, program, fee, and fee privacy flag:

```tsx
import {
  Deployment,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";

const program = `
    program hello.aleo;
    function main:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
`;
const fee = 4_835_000;

const aleoDeployment = new Deployment(
    publicKey,
    WalletAdapterNetwork.Testnet,
    program,
    fee,
);
```

Deployment can then be transmitted to the wallet using the adapter `requestDeploy` function returned by `useWallet` react hook.
