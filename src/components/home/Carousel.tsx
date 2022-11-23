import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  imgHomeBannerFirst,
  imgHomeBannerSecond,
  imgHomeBannerThird,
} from '../../assets/images/index';
import styled from 'styled-components';

function Carousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
  };

  const homeBannerImgList: string[] = [
    imgHomeBannerFirst,
    imgHomeBannerSecond,
    imgHomeBannerThird,
  ];

  return (
    <>
      <StSlider {...settings}>
        {homeBannerImgList.map((img: string, idx: number) => (
          <img key={idx} src={img} alt='배너이미지' />
        ))}
      </StSlider>
      <StSliderCount>1 / 3</StSliderCount>
    </>
  );
}

export default Carousel;

const StSlider = styled(Slider)`
  .slick-list {
    width: 37.45rem;
  }
`;

const StSliderCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.9rem;
  height: 1.8rem;
  left: 32.2rem;
  top: 17.4rem;

  // background 에만 opacity 적용을 위해 다음과 같이 설정 했습니다.
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.9rem;

  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: -0.02em;

  color: ${(props) => props.theme.color.white};
`;
