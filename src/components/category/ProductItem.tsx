import { iconPageArrowLeft, iconPageArrowRight } from 'assets/icons';
import ProductWithProps from 'components/common/ProductWithProps';
import { getCategoryItemList } from 'libs/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CategoryItem } from 'types/types';

function ProductItem() {
  const [categoryItemList, setCategoryItemList] = useState<CategoryItem[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [1, 2, 3, 4, 5];

  useEffect(() => {
    getCategoryItemData();
  }, [currentPage]);

  const getCategoryItemData = async () => {
    const data = await getCategoryItemList({ page: currentPage, limit: 4 });
    setCategoryItemList(data);
  };

  return (
    <>
      <div>
        {categoryItemList?.map(
          ({
            productId,
            productName,
            productImage,
            discount,
            originalPrice,
            discountedPrice,
            reviewCount,
          }) => (
            <ProductWithProps
              key={productId}
              productName={productName}
              productImage={productImage}
              discount={discount}
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
              reviewCount={reviewCount}
            />
          ),
        )}
      </div>
      <Pagination>
        <PaginationButton
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage(currentPage - 1);
          }}
          isActive={false}
        >
          <img src={iconPageArrowLeft} alt='왼쪽 페이지' />
        </PaginationButton>
        {pageNumber.map((page) => (
          <PaginationButton
            onClick={() => setCurrentPage(page)}
            key={page}
            isActive={currentPage === page}
          >
            {page}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => {
            if (currentPage === 5) return;
            setCurrentPage(currentPage + 1);
          }}
          isActive={false}
        >
          <img src={iconPageArrowRight} alt='오른쪽 페이지' />
        </PaginationButton>
      </Pagination>
    </>
  );
}

export default ProductItem;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  height: 6.6rem;
  width: 37.5rem;

  border-bottom: 0.1rem solid #dedede;
  background-color: ${(props) => props.theme.color.gray100};
`;

const PaginationButton = styled.button<{ isActive: boolean }>`
  width: 3rem;
  height: 3rem;

  background-color: ${({ isActive }) => (isActive ? '#356BFF' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  border-radius: 0.2rem;
  border: 0.1rem solid ${(props) => props.theme.color.gray300};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: 1.4rem;
`;
