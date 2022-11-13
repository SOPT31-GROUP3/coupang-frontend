import styled from 'styled-components';

function Home() {
  const homeBannerImgList: string[] = [];

  return (
    <StHomeContainer>
      <StHomebannerWrapper>
        {homeBannerImgList.map((img, idx) => (
          <StHomeBannerImg key={idx} />
        ))}
      </StHomebannerWrapper>
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.section``;

const StHomebannerWrapper = styled.div``;

const StHomeBannerImg = styled.img``;
