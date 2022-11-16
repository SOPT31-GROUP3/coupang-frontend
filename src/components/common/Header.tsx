import React from 'react';
import { iconBasketBtn, iconCategoryBtn, iconSearchBtn } from 'assets/icons';
import { imgLogo } from 'assets/images';
import styled from 'styled-components';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  // 페이지별 바뀌는 헤더 어떻게 구현할까?????
  // 1. 현재 route 위치 알아내기
  // 2. route 위치에 따라서 헤더 내 버튼, 로고 보여주기 (->옵셔널 체이닝??)

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  {
    location.pathname === '/category';
  }

  return (
    <>
      <StHeaderWrapper>
        <StHeaderBtn>
          <Link to={'/category'}>
            <StHeaderIcon src={iconCategoryBtn} />
          </Link>
        </StHeaderBtn>
        <Link to={'/'}>
          <StImgLogo src={imgLogo} />
        </Link>
        <StHeaderBtn>
          <StHeaderIcon src={iconSearchBtn} />
        </StHeaderBtn>
        <StHeaderBtn>
          <Link to={'/cart'}>
            <StHeaderIcon src={iconBasketBtn} />
          </Link>
        </StHeaderBtn>
      </StHeaderWrapper>
    </>
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
  padding-right: 12.4rem;
`;
