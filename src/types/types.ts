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
