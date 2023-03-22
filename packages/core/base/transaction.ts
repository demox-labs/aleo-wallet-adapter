
export interface AleoTransition {
  program: string;
  functionName: string;
  inputs: any[];
  provingKey?: Array<any>;
}

export class Transition implements AleoTransition {
  program: string;
  functionName: string;
  inputs: any[];
  provingKey?: Array<any>;

  constructor(program: string, functionName: string, inputs: any[], provingKey?: Array<any>) {
    this.program = program;
    this.functionName = functionName;
    this.inputs = inputs;
    this.provingKey = provingKey;
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

  static createTransaction(address: string, chainId: string, program: string, functionName: string, inputs: any[], provingKey?: Array<any>) {
    const transition = new Transition(program, functionName, inputs, provingKey);
    return new Transaction(address, chainId, [transition]);
  }
}

