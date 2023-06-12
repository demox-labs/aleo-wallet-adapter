
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
}

export class Transaction implements AleoTransaction {
  address: string;
  chainId: string;
  transitions: AleoTransition[];
  fee: number;

  constructor(address: string, chainId: string, transitions: AleoTransition[], fee: number) {
    this.address = address;
    this.chainId = chainId;
    this.transitions = transitions;
    this.fee = fee;
  }

  static createTransaction(address: string, chainId: string, program: string, functionName: string, inputs: any[], fee: number) {
    const transition = new Transition(program, functionName, inputs);
    return new Transaction(address, chainId, [transition], fee);
  }
}

