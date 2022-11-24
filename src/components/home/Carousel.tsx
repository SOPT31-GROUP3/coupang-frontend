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
    </>
  );
}

export default Carousel;

const StSlider = styled(Slider)`
  .slick-list {
    width: 37.45rem;
  }
`;
