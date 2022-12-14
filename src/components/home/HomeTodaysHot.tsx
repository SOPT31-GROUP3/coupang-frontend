import Product from 'components/common/Product';
import { getTodayItemData } from 'libs/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TodayItemDataprops } from 'types/types';

function HomeTodaysHot() {
  const [todayItems, setTodayItems] = useState<TodayItemDataprops[]>();
  const todaysHotItems = todayItems?.slice(0, 3);

  const getTodayItems = async () => {
    const data = await getTodayItemData();
    setTodayItems(data);
  };

  useEffect(() => {
    getTodayItems();
  }, []);

  return (
    <>
      <StDivider />
      <StTodayItemTitle>
        <h1>TODAYS HOT</h1>
        <h2>오늘 가장 잘 나간 상품들을 모아봤어요!</h2>
      </StTodayItemTitle>
      {todaysHotItems?.map(
        ({
          productId,
          productName,
          productImage,
          discount,
          originalPrice,
          discountedPrice,
          reviewCount,
        }) => (
          <Product
            key={productId}
            productId={productId}
            productName={productName}
            productImage={productImage}
            discount={discount}
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            reviewCount={reviewCount}
          />
        ),
      )}
    </>
  );
}

export default HomeTodaysHot;

const StDivider = styled.div`
  border-top: 0.4rem solid ${(props) => props.theme.color.gray200};
`;

const StTodayItemTitle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.4rem;

  width: 37.5rem;

  padding: 3.2rem 1.4rem 0.4rem 1.4rem;
  color: ${(props) => props.theme.color.black};

  & > h1 {
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  & > h2 {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: -0.02em;
  }
`;
