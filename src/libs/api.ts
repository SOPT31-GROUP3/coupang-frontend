import axios from 'axios';
import { CategoryItemList, PageNumber } from 'types/types';

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
