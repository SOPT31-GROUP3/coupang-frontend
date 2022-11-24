import axios from 'axios';
import { BestItemData } from 'types/types';

const BASE_URL = 'http://3.37.241.186:3000';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBestItemData = async () => {
  const { data } = await client.get<BestItemData>(BASE_URL + '/home/best');
  if (data.status === 200) {
    return data.data.bestProductList;
  }
};
