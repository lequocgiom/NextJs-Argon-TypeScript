// auth.service.ts
import { api } from '../api';
import { AllTxsResponse } from './type';

// Get all txs
export const getAllTxs = async (address: string): Promise<AllTxsResponse> => {
  const { data } = await api.get<AllTxsResponse>(`/api/transaction/${address}`);
  return data;
};
