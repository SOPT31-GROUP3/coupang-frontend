import ButtonTop from 'components/category/ButtonTop';
import Menu from 'components/category/Menu';
import ProductItem from 'components/category/ProductItem';
import styled from 'styled-components';

function Category() {
  return (
    <StCategoryContainer>
      <Menu />
      <ProductItem />
      <ButtonTop />
    </StCategoryContainer>
  );
}

export default Category;

const StCategoryContainer = styled.div`
  position: relative;
`;
