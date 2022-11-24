import styled from 'styled-components';
import {
  imgRoketDelivery,
  imgRegularDelivery,
  imgRoketShipping,
  imgEvent,
} from 'assets/images';

function HomeServiceMenu() {
  const imageList: string[] = [
    imgRoketDelivery,
    imgRegularDelivery,
    imgRoketShipping,
    imgEvent,
  ];

  return (
    <StServiceMenuContainer>
      {imageList.map((image: string, idx: number) => (
        <StServiceMenu key={idx} src={image} alt='배너 이미지' />
      ))}
    </StServiceMenuContainer>
  );
}

export default HomeServiceMenu;

const StServiceMenuContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  width: 100%;
  height: 9.4rem;

  border-bottom: 0.4rem solid ${(props) => props.theme.color.gray200};
`;

const StServiceMenu = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.2rem;
  height: 6.2rem;

  cursor: pointer;
`;
