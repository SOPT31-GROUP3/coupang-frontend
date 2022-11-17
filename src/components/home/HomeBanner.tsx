import styled from 'styled-components';
import { imgHomeBannerFirst } from 'assets/images';

function HomeBanner() {
  const homeBannerImgList: string[] = [imgHomeBannerFirst];
  return (
    <StHomebannerWrapper>
      {homeBannerImgList.map((image: string, idx: number) => (
        <StHomeBannerImg key={idx} src={image} />
      ))}
    </StHomebannerWrapper>
  );
}

export default HomeBanner;

const StHomebannerWrapper = styled.div``;

const StHomeBannerImg = styled.img``;
