import axios from 'axios';

const BASE_URL = 'http://3.37.241.186:3000';

export default interface BestItemData {
  status: number;
  data: {
    bestProductList: {
      productId: number;
      productName: string;
      productImage: string;
      discount: number;
      originalPrice: number;
      discountedPrice: number;
      reviewCount: number;
    };
  };
}

export const getBestItem = async () => {
  const res = await axios.get<BestItemData>(BASE_URL + '/home/best');
  return res.data;
};
