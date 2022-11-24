import { iconButtonTop } from 'assets/icons';
import styled from 'styled-components';

function ButtonTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ButtonTopImage src={iconButtonTop} alt='위로가기' onClick={scrollToTop} />
  );
}

export default ButtonTop;

const ButtonTopImage = styled.img`
  position: absolute;
  right: 1.6rem;
  bottom: 8.1rem;

  width: 4rem;
  height: 4rem;

  cursor: pointer;
`;
