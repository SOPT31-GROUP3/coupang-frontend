import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  iconCategoryBar,
  iconHomeBar,
  iconMycoupangBar,
  iconSearchBar,
} from 'assets/icons';

function NavBar() {
  const userId = 1;
  return (
    <StNavWrapper>
      <StNavItem>
        <Link to={'/'}>
          <StNavIcon src={iconHomeBar} />
          <p>쿠팡홈</p>
        </Link>
      </StNavItem>
      <StNavItem>
        <Link to={'/category'}>
          <StNavIcon src={iconCategoryBar} />
          <p>카테고리</p>
        </Link>
      </StNavItem>
      <StNavItem>
        <StNavIcon src={iconSearchBar} />
        <p>검색</p>
      </StNavItem>
      <StNavItem>
        <Link to={`/mypage/${userId}`}>
          <StNavIcon src={iconMycoupangBar} />
          <p>마이쿠팡</p>
        </Link>
      </StNavItem>
    </StNavWrapper>
  );
}

export default NavBar;

const StNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;

  height: 5.5rem;

  border-top: 0.1rem solid #cccccc;
  background-color: ${(props) => props.theme.color.white};
`;

const StNavItem = styled.button`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 0.2rem;

  background-color: ${(props) => props.theme.color.white};
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

const StNavIcon = styled.img`
  width: 2.4rem;
`;
