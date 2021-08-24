import { stringifyUrl } from 'query-string';

const MOCK_DATA = [
  {
    address: 'asdawdawva',
    data: [
      {
        id: '5b7650458ebb8306365624a2',
        txid: '7a6ca109c7c651f9b70a7d4dc8fa77de322e420119c5d2470bce7f08ba0cd1d6',
        explorer_url:
          'http://coin-explorer-url/exp/7a6ca109c7c651f9b70a7d4dc8fa7...',
        merchant_id: '5bc46fb28ebb8363d2657347',
        type: 'receive',
        coin_short_name: 'BTC',
        wallet_id: '5c42ea0ab846fe751421cfb2',
        wallet_name: 'my-wallet',
        address: 'MP78UQoDpkehY7mMy2Cn9HSfysz4wbCeN1',
        amount: '2',
        confirmations: 3,
        date: '2018-08-17 10:04:13',
      },
      {
        id: '23sdew232158ebb8306365624a2',
        txid: '7a6ca109c7c651f9b70fdgfg44er34re7de322e420119c5d2470bce7f08ba0cd1d6',
        explorer_url:
          'http://coin-explorer-url/exp/2322ereer344c7c651f9b70a7d4dc8fa7...',
        merchant_id: '3434df4w28ebb8363d2657347',
        type: 'receive',
        coin_short_name: 'BTC',
        wallet_id: '5c42ea0ab846fe751421cfb2',
        wallet_name: 'my-wallet',
        address: 'MP78UQoDpkehY7mMy2Cn9HSfysz4wbCeN1',
        amount: '1',
        confirmations: 2,
        date: '2018-08-17 10:05:13',
      },
    ],
  },
  {
    address: 'vsdevsefsf',
    data: [
      {
        id: '5b7650458ebb8306365624a2',
        txid: '7a6ca109c7c651f9b70a7d4dc8fa77de322e420119c5d2470bce7f08ba0cd1d6',
        explorer_url:
          'http://coin-explorer-url/exp/7a6ca109c7c651f9b70a7d4dc8fa7...',
        merchant_id: '5bc46fb28ebb8363d2657347',
        type: 'receive',
        coin_short_name: 'BTC',
        wallet_id: '5c42ea0ab846fe751421cfb2',
        wallet_name: 'my-wallet',
        address: 'MP78UQoDpkehY7mMy2Cn9HSfysz4wbCeN1',
        amount: '2',
        confirmations: 3,
        date: '2018-08-17 10:04:13',
      },
      {
        id: '23sdew232158ebb8306365624a2',
        txid: '7a6ca109c7c651f9b70fdgfg44er34re7de322e420119c5d2470bce7f08ba0cd1d6',
        explorer_url:
          'http://coin-explorer-url/exp/2322ereer344c7c651f9b70a7d4dc8fa7...',
        merchant_id: '3434df4w28ebb8363d2657347',
        type: 'receive',
        coin_short_name: 'BTC',
        wallet_id: '5c42ea0ab846fe751421cfb2',
        wallet_name: 'my-wallet',
        address: 'MP78UQoDpkehY7mMy2Cn9HSfysz4wbCeN1',
        amount: '1',
        confirmations: 2,
        date: '2018-08-17 10:05:13',
      },
    ],
  },
];

export interface ITransactionData {
  id: string;
  txid: string;
  explorer_url: string;
  merchant_id: string;
  type: string;
  coin_short_name: string;
  wallet_id: string;
  wallet_name: string;
  address: string;
  amount: string;
  confirmations: number;
  date: string;
}

export default function handler(req, res) {
  return res.json({
    flag: 1,
    msg: 'success',
    action: 'get-transaction-by-address',
    data: MOCK_DATA,
  });
}
