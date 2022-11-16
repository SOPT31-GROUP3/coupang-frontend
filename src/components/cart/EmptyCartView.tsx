import { basketMainIcon } from 'assets/images';
import styled from 'styled-components';

function EmptyCartView() {
  return (
    <>
      <StCartTab>
        <CartTabItem>일반구매(0)</CartTabItem>
        <CartTabItem>정기배송(0)</CartTabItem>
      </StCartTab>
      <StEmptyCart>
        <StBasketMainIcon src={basketMainIcon} />
        <h1>
          장바구니에
          <br />
          담긴 상품이 없습니다.
        </h1>
        <h2>
          로그인을 하시면, 장바구니에 보관된 상품을
          <br />
          확인하실 수 있습니다.
        </h2>
        <StLoginButton>로그인</StLoginButton>
      </StEmptyCart>
    </>
  );
}

export default EmptyCartView;

const StCartTab = styled.nav`
  display: flex;

  height: 4.4rem;

  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: 1.4rem;

  & > div:first-of-type {
    color: ${(props) => props.theme.color.blue01};
    border-bottom: 0.2rem solid ${(props) => props.theme.color.blue01};
  }

  & > div:nth-of-type(2) {
    color: ${(props) => props.theme.color.black};
    border-bottom: 0.05rem solid #e4e6e3;
  }
`;

const CartTabItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StEmptyCart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 47rem;
  padding: 9rem 6rem 10rem 6rem;

  border-top: 0.05rem solid #e4e6e3;
  border-bottom: 0.1rem solid #e4e6e3;

  & > h1 {
    margin-bottom: 3rem;

    color: ${(props) => props.theme.color.gray400};
    font-size: 1.8rem;
    letter-spacing: 0.01rem;
    line-height: 2.1rem;

    text-align: center;
  }

  & > h2 {
    margin-bottom: 1.6rem;

    color: ${(props) => props.theme.color.gray500};
    font-size: 1.6rem;
    letter-spacing: -0.04em;
    line-height: 1.9rem;

    text-align: center;
  }
`;

const StBasketMainIcon = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 0.8rem;
`;

const StLoginButton = styled.button`
  width: 24.5rem;
  height: 4.4rem;

  border: 0.1rem solid ${(props) => props.theme.color.blue01};
  border-radius: 0.4rem;
  background-color: transparent;
  color: ${(props) => props.theme.color.blue01};
  font-size: 1.7rem;
`;
