import { useState, useEffect } from 'react';
import { getBestItem } from 'libs/api';
import styled from 'styled-components';
// import BestItemData from 'libs/api';

function HomeBestItem() {
  // const [props, setProps] = useState();

  useEffect(() => {
    handleBestItem();
  }, []);

  const handleBestItem = async () => {
    const bestItemData = await getBestItem();
    console.log(bestItemData.data.bestProductList);
  };

  return (
    <>
      <StBestItemTitle>
        <h1>BEST</h1>
        <h2>요즘 가장 잘 팔리는 상품이에요!</h2>
      </StBestItemTitle>
    </>
  );
}

export default HomeBestItem;

const StBestItemTitle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 2.8rem;
  margin-left: 1.4rem;

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
