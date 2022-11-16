import { iconArrowBig, iconArrowBigLast, iconHomeCategory } from 'assets/icons';
import styled from 'styled-components';

function Menu() {
  return (
    <>
      <MenuTopWrapper>
        <MenuTop>
          <MenuTopItem>
            <StIconHomeCategory src={iconHomeCategory} />
          </MenuTopItem>
          <StIconArrowBig src={iconArrowBig} />
          <MenuTopItem>쇼핑</MenuTopItem>
          <StIconArrowBig src={iconArrowBigLast} />
          <MenuTopItem>뷰티</MenuTopItem>
        </MenuTop>
      </MenuTopWrapper>
      <MenuCategory></MenuCategory>
    </>
  );
}

export default Menu;

const MenuTopWrapper = styled.section`
  height: 4.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuTop = styled.div`
  display: flex;
  align-items: center;
  width: 35.5rem;
  height: 2.8rem;
  border: 0.1rem solid ${(props) => props.theme.color.gray500};
  border-radius: 0.3rem;
  overflow: hidden;
`;

const MenuTopItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.6rem 0 0.8rem;
  font-size: 1.1rem;

  &:nth-of-type(2) {
    width: 3.3rem;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.color.gray700};
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  &:last-of-type {
    padding-right: 0;
    width: 26rem;
    color: ${(props) => props.theme.color.gray800};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    background-color: ${(props) => props.theme.color.gray200};
  }
`;

const StIconHomeCategory = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const StIconArrowBig = styled.img`
  width: 1.4rem;
  height: 2.8rem;
`;

const MenuCategory = styled.section``;
