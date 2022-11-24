import { iconArrowSmall } from 'assets/icons';
import { imgMenuTopItem } from 'assets/images';
import styled from 'styled-components';

function Menu() {
  const menuCategoryList = [
    '전체',
    '기초/기능성케어',
    '메이크업/클렌징',
    '헤어/바디',
    '향수/미용',
    '남성화장품',
    '네일케어',
    '',
    '',
  ];
  return (
    <>
      <MenuTopWrapper>
        <img src={imgMenuTopItem} alt='카테고리 메뉴' />
      </MenuTopWrapper>
      <MenuCategoryWrapper>
        {menuCategoryList.map((menuCategory) => (
          <MenuCategory key={menuCategory}>
            <p>{menuCategory}</p>
            <img src={iconArrowSmall} alt='이동하기' />
          </MenuCategory>
        ))}
      </MenuCategoryWrapper>
    </>
  );
}

export default Menu;

const MenuTopWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.4rem;
`;

const MenuCategoryWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  border-left: 0.1rem solid ${(props) => props.theme.color.gray300};
  border-top: 0.1rem solid ${(props) => props.theme.color.gray300};
`;

const MenuCategory = styled.div`
  display: flex;
  position: relative;

  width: 12.46rem;
  height: 3.8rem;

  border-right: 0.1rem solid ${(props) => props.theme.color.gray300};
  border-bottom: 0.1rem solid ${(props) => props.theme.color.gray300};
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  & > p {
    margin: 1.2rem 0 0 0.8rem;
  }

  & > img {
    position: absolute;
    top: 1.425rem;
    right: 0.8rem;

    width: 0.5rem;
    height: 0.95rem;
  }
`;
