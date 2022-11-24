import ProductWithProps from 'components/common/ProductWithProps';

function ProductItem() {
  return (
    <div>
      <ProductWithProps
        productName='이름'
        productImage='이미지'
        discount={34}
        originalPrice={20000}
        discountedPrice={15000}
        reviewCount={320}
      />
    </div>
  );
}

export default ProductItem;
