import { iconPageArrowLeft, iconPageArrowRight } from 'assets/icons';
import ProductWithProps from 'components/common/ProductWithProps';
import { getCategoryItemList } from 'libs/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CategoryItem } from 'types/types';

function ProductItem() {
  const [categoryItemList, setCategoryItemList] = useState<CategoryItem[]>();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getCategoryItemData();
  }, []);

  const getCategoryItemData = async () => {
    const data = await getCategoryItemList({ page: 2, limit: 4 });
    setCategoryItemList(data);
  };

  return (
    <>
      <div>
        {categoryItemList?.map((item) => (
          <ProductWithProps
            key={item.productId}
            productName={item.productName}
            productImage={item.productImage}
            discount={item.discount}
            originalPrice={item.originalPrice}
            discountedPrice={item.discountedPrice}
            reviewCount={item.reviewCount}
          />
        ))}
      </div>
      <Pagination>
        <button
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage(currentPage - 1);
          }}
        >
          <img src={iconPageArrowLeft} alt='왼쪽 페이지' />
        </button>
        <button
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setCurrentPage(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setCurrentPage(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            if (currentPage === 3) return;
            setCurrentPage(currentPage + 1);
          }}
        >
          <img src={iconPageArrowRight} alt='오른쪽 페이지' />
        </button>
      </Pagination>
    </>
  );
}

export default ProductItem;

const Pagination = styled.div`
  height: 6.6rem;
  width: 37.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  & > button {
    width: 3rem;
    height: 3rem;
    border-radius: 0.2rem;
    border: 0.1rem solid ${(props) => props.theme.color.gray300};
    background-color: white;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: 1.4rem;
  }
`;
