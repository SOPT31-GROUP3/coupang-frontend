import styled from 'styled-components';
import HomeBanner from 'components/home/HomeBanner';

function Home() {
  return (
    <StHomeContainer>
      <HomeBanner />
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
