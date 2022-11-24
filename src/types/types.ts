export interface PageNumber {
  page: number;
  limit: number;
}

export interface CategoryItemList {
  status: number;
  message: string;
  data: {
    categoryProductList: CategoryItem[];
  };
}

export interface CategoryItem {
  productId: number;
  productName: string;
  productImage: string;
  discount: number;
  originalPrice: number;
  discountedPrice: number;
  reviewCount: number;
}

export interface TodayItemData {
  status: number;
  data: {
    todayProductList: TodayItemDataprops[];
  };
}

export interface TodayItemDataprops {
  productId: number;
  productName: string;
  productImage: string;
  discount: number;
  originalPrice: number;
  discountedPrice: number;
  reviewCount: number;
}

export interface UserData {
  status: number;
  getMyCoupangUser: UserDataprops;
}

export interface UserDataprops {
  userId: number;
  profileImage: string;
  userName: string;
  payMoney: number;
  cash: number;
  reviewCount: number;
  likeCount: number;
  recentSeeCount: number;
}

export interface BestItemData {
  status: number;
  data: {
    bestProductList: ProductList[];
  };
}

export interface ProductList {
  productId: number;
  productName: string;
  productImage: string;
  discount: number;
  originalPrice: number;
  discountedPrice: number;
  reviewCount: number;
}
