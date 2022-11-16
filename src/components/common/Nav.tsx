import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  icCategoryBar,
  icHomeBar,
  icMycoupangBar,
  icSearchBar,
} from 'assets/icons';

function Nav() {
  return (
    <StNavWrapper>
      <Link to={'/'}>
        <StNavItem>
          <StNavIcon src={icHomeBar} />
          쿠팡홈
        </StNavItem>
      </Link>
      <Link to={'/category'}>
        <StNavItem>
          <StNavIcon src={icCategoryBar} />
          카테고리
        </StNavItem>
      </Link>
      <StNavItem>
        <StNavIcon src={icSearchBar} />
        검색
      </StNavItem>
      <Link to={'/mypage'}>
        <StNavItem>
          <StNavIcon src={icMycoupangBar} />
          마이쿠팡
        </StNavItem>
      </Link>
    </StNavWrapper>
  );
}

export default Nav;

const StNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0rem;

  height: 5.5rem;

  border-top: 0.1rem solid #cccccc;
  background-color: ${(props) => props.theme.color.white};
`;

const StNavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  width: 9.375rem;

  background-color: ${(props) => props.theme.color.white};
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  a {
    color: ${(props) => props.theme.color.black};
  }
`;

const StNavIcon = styled.img`
  width: 2.4rem;
`;
