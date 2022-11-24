import styled from 'styled-components';
import { iconStar } from 'assets/icons';

interface ProductProps {
  productId: number;
  productName: string;
  productImage: string;
  discount: number;
  originalPrice: number;
  discountedPrice: number;
  reviewCount: number;
}

const addComma = (data: string) => {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function Product(item: ProductProps) {
  return (
    <StProductContainer>
      <StProductImage src={item.productImage} alt='productImage' />
      <StProductInfo>
        <StCoupon>즉시할인 쿠폰</StCoupon>
        <StProductName>{item.productName}</StProductName>
        <StDiscount>
          <span>{item.discount}% </span>
          <span>{addComma(String(item.originalPrice))}원</span>
        </StDiscount>
        <StPrice>
          <span>{addComma(String(item.discountedPrice))}원</span>
        </StPrice>
        <StDelivery>내일(일) 11/6 도착 보장</StDelivery>
        <StReview>
          <img src={iconStar} />
          <img src={iconStar} />
          <img src={iconStar} />
          <img src={iconStar} />
          <img src={iconStar} />
          <span>({item.reviewCount})</span>
        </StReview>
      </StProductInfo>
    </StProductContainer>
  );
}

export default Product;

const StProductContainer = styled.div`
  display: flex;
  height: 17.6rem;
  padding: 1.2rem 1.4rem 1.2rem 0;
  gap: 1rem;

  line-height: 1.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.color.gray300};
`;

const StProductImage = styled.img`
  width: 10.4rem;
  height: 15.2rem;

  background-color: #d9d9d9;
  border-radius: 0.4rem;
`;

const StProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StCoupon = styled.p`
  color: ${(props) => props.theme.color.red02};
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

const StProductName = styled.p`
  color: ${(props) => props.theme.color.black};
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  line-height: 1.6rem;
  letter-spacing: 0.03em;
`;

const StDiscount = styled.p`
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  & > span:first-of-type {
    color: ${(props) => props.theme.color.black};
  }

  & > span:nth-of-type(2) {
    color: ${(props) => props.theme.color.gray800};
    text-decoration: line-through;
  }
`;

const StPrice = styled.p`
  color: ${(props) => props.theme.color.red02};
  font-size: 1.4rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};

  & > span {
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }
`;

const StDelivery = styled.p`
  color: ${(props) => props.theme.color.green};
  font-size: 1.4rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

const StReview = styled.p`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.color.gray700};
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: 1.2rem;

  & > img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
