export interface TodayItemData {
  status: number;
  data: {
    todayProductList: {
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
