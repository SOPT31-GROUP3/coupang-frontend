import axios from 'axios';
import {
  CategoryItemList,
  PageNumber,
  TodayItemData,
  UserData,
} from 'types/types';

const BASE_URL = 'http://3.37.241.186:3000/';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getCategoryItemList = async ({ page, limit }: PageNumber) => {
  const { data } = await client.get<CategoryItemList>(
    `category?page=${page}&limit=${limit}`,
  );
  if (data.status === 200) {
    return data.data.categoryProductList;
  }
};

export { getCategoryItemList };
export { getTodayItemData, getUserData };
const getTodayItemData = async () => {
  const { data } = await client.get<TodayItemData>('/home/today');
  if (data.status === 200) {
    return data.data.todayProductList;
  }
};

const getUserData = async (userId: string | undefined) => {
  const { data } = await client.get<UserData>(`mycoupang/${userId}`);
  if (data.status === 200) {
    return data.getMyCoupangUser;
  }
};
