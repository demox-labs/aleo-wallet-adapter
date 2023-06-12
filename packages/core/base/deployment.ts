export interface AleoDeployment {
  address: string;
  chainId: string;
  program: string;
  fee: number;
}

export class Deployment implements AleoDeployment {
  address: string;
  chainId: string;
  program: string;
  fee: number;

  constructor(address: string, chainId: string, program: string, fee: number) {
    this.address = address;
    this.chainId = chainId;
    this.program = program;
    this.fee = fee;
  }
}

