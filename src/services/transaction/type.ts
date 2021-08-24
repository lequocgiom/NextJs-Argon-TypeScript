import { ITransactionData } from 'src/pages/api/transaction';

export type AllTxsResponse = {
  msg: string;
  flag: number;
  action: string;
  data: ITransactionData[];
};
