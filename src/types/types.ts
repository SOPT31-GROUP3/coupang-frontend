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

export interface UserData {
  status: number;
  getMyCoupangUser: {
    userId: number;
    profileImage: string;
    userName: string;
    payMoney: number;
    cash: number;
    reviewCount: number;
    likeCount: number;
    recentSeeCount: number;
  };
}
