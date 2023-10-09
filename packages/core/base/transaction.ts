
export interface AleoTransition {
  program: string;
  functionName: string;
  inputs: any[];
}

export class Transition implements AleoTransition {
  program: string;
  functionName: string;
  inputs: any[];

  constructor(program: string, functionName: string, inputs: any[]) {
    this.program = program;
    this.functionName = functionName;
    this.inputs = inputs;
  }
}

export interface AleoTransaction {
  address: string;
  chainId: string;
  transitions: AleoTransition[];
  fee: number;
  feePrivate: boolean;
}

export class Transaction implements AleoTransaction {
  address: string;
  chainId: string;
  transitions: AleoTransition[];
  fee: number;
  feePrivate: boolean;

  constructor(address: string, chainId: string, transitions: AleoTransition[], fee: number, feePrivate = true) {
    this.address = address;
    this.chainId = chainId;
    this.transitions = transitions;
    this.fee = fee;
    this.feePrivate = feePrivate;
  }

  static createTransaction(address: string, chainId: string, program: string, functionName: string, inputs: any[], fee: number, feePrivate = true) {
    const transition = new Transition(program, functionName, inputs);
    return new Transaction(address, chainId, [transition], fee, feePrivate);
  }
}
