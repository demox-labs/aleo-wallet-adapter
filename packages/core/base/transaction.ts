
export interface AleoTransition {
  program: string;
  functionName: string;
  inputs: any[];
  provingKeyUrl?: string;
}

export class Transition implements AleoTransition {
  program: string;
  functionName: string;
  inputs: any[];
  provingKeyUrl?: string;

  constructor(program: string, functionName: string, inputs: any[], provingKeyUrl?: string) {
    this.program = program;
    this.functionName = functionName;
    this.inputs = inputs;
    this.provingKeyUrl = provingKeyUrl;
  }
}

export interface AleoTransaction {
  address: string;
  chainId: string;
  transitions: AleoTransition[];
}

export class Transaction implements AleoTransaction {
  address: string;
  chainId: string;
  transitions: AleoTransition[];

  constructor(address: string, chainId: string, transitions: AleoTransition[]) {
    this.address = address;
    this.chainId = chainId;
    this.transitions = transitions;
  }

  static createTransaction(address: string, chainId: string, program: string, functionName: string, inputs: any[], provingKeyUrl?: string) {
    const transition = new Transition(program, functionName, inputs, provingKeyUrl);
    return new Transaction(address, chainId, [transition]);
  }
}

