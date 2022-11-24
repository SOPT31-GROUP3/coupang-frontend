import styled from 'styled-components';
import HomeServiceMenu from 'components/home/HomeServiceMenu';
import Carousel from 'components/home/Carousel';
import HomeTodaysHot from 'components/home/HomeTodaysHot';
import HomeBestItem from 'components/home/HomeBestItem';

function Home() {
  return (
    <StHomeContainer>
      <Carousel />
      <HomeServiceMenu />
      <HomeTodaysHot />
      <HomeBestItem />
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
