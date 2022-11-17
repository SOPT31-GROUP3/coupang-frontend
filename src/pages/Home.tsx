import styled from 'styled-components';
import HomeBanner from 'components/home/HomeBanner';
import HomeServiceMenu from 'components/home/HomeServiceMenu';

function Home() {
  return (
    <StHomeContainer>
      <HomeBanner />
      <HomeServiceMenu />
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
