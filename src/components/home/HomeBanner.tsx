import styled from 'styled-components';
import { imgHomeBannerFirst } from 'assets/images';

function HomeBanner() {
  // const homeBannerImgList: string[] = [

  // ];
  return (
    <StHomebannerWrapper>
      <StHomeBannerImg src={imgHomeBannerFirst} />
    </StHomebannerWrapper>
  );
}

export default HomeBanner;

const StHomebannerWrapper = styled.div``;

const StHomeBannerImg = styled.img``;
