export interface AleoDeployment {
  address: string;
  chainId: string;
  program: string;
  fee: number;
  feePrivate: boolean;
}

export class Deployment implements AleoDeployment {
  address: string;
  chainId: string;
  program: string;
  fee: number;
  feePrivate: boolean;

  constructor(address: string, chainId: string, program: string, fee: number, feePrivate: boolean = true) {
    this.address = address;
    this.chainId = chainId;
    this.program = program;
    this.fee = fee;
    this.feePrivate = feePrivate;
  }
}

