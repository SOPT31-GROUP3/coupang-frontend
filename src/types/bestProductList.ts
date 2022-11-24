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
