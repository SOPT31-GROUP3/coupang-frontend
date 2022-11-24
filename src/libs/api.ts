import axios from 'axios';
import { TodayItemData } from 'types/types';

const BASE_URL = 'http://3.37.241.186:3000/';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getTodayItemData = async () => {
  const { data } = await client.get<TodayItemData>('/home/today');
  if (data.status === 200) {
    return data.data.todayProductList;
  }
};

export { getTodayItemData };
