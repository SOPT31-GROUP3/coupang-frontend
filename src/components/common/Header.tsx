import { Link, useLocation } from 'react-router-dom';
import { iconBasketBtn, iconCategoryBtn, iconSearchBtn } from 'assets/icons';
import { imgLogo } from 'assets/images';
import styled from 'styled-components';

function Header() {
  const location = useLocation();

  return (
    <StHeaderWrapper>
      {location.pathname === '/cart' ? ( // 장바구니 페이지 헤더
        <>
          <StLeftSection>
            <StHeaderBtn>
              <Link to={'/category'}>
                <StHeaderIcon src={iconCategoryBtn} />
              </Link>
            </StHeaderBtn>
            <StHeaderTitle>장바구니</StHeaderTitle>
          </StLeftSection>
          <StRightSection>
            <StHeaderBtn>
              <StHeaderIcon src={iconSearchBtn} />
            </StHeaderBtn>
          </StRightSection>
        </>
      ) : location.pathname === '/category' ? ( // 카테고리 페이지 헤더
        <>
          <StLeftSection>
            <StHeaderBtn>
              <Link to={'/category'}>
                <StHeaderIcon src={iconCategoryBtn} />
              </Link>
            </StHeaderBtn>
            <StHeaderTitle>
              쇼핑
              <span> | </span>
              <span>뷰티</span>
            </StHeaderTitle>
          </StLeftSection>
          <StRightSection>
            <StHeaderBtn>
              <StHeaderIcon src={iconSearchBtn} />
            </StHeaderBtn>
            <StHeaderBtn>
              <Link to={'/cart'}>
                <StHeaderIcon src={iconBasketBtn} />
              </Link>
            </StHeaderBtn>
          </StRightSection>
        </>
      ) : (
        // 홈, 마이쿠팡 페이지 헤더
        <>
          <StLeftSection>
            <StHeaderBtn>
              <Link to={'/category'}>
                <StHeaderIcon src={iconCategoryBtn} />
              </Link>
            </StHeaderBtn>
            <Link to={'/'}>
              <StImgLogo src={imgLogo} />
            </Link>
          </StLeftSection>
          <StRightSection>
            <StHeaderBtn>
              <StHeaderIcon src={iconSearchBtn} />
            </StHeaderBtn>
            <StHeaderBtn>
              <Link to={'/cart'}>
                <StHeaderIcon src={iconBasketBtn} />
              </Link>
            </StHeaderBtn>
          </StRightSection>
        </>
      )}
    </StHeaderWrapper>
  );
}

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0rem;
  gap: 0.8rem;

  height: 4.6rem;
  padding: 0.8rem 1.3rem;

  background-color: ${(props) => props.theme.color.white};
  border-bottom: 0.1rem solid #e4e6e3;
`;

const StLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const StRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const StHeaderBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.6rem;
  height: 3rem;

  background-color: ${(props) => props.theme.color.white};
  border: 0.05rem solid #bbbbbb;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.55));
  border-radius: 0.4rem;
`;

const StHeaderIcon = styled.img`
  padding: 0.3rem 0.6rem;
`;

const StImgLogo = styled.img`
  height: 2rem;
`;

const StHeaderTitle = styled.h1`
  color: ${(props) => props.theme.color.gray800};
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};

  & > span {
    font-size: 1.4rem;
    font-weight: ${(props) => props.theme.fontWeight.semibold};
  }
`;
