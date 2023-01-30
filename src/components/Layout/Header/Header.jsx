import { HeaderWrapper, MainImage } from './Header.styled';
import bgImage from '../../../assets/sushi.jpg';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <h1>Японська кухня</h1>
        <button>Корзина</button>
      </HeaderWrapper>
      <MainImage>
        <img src={bgImage} alt="sushi" />
      </MainImage>
    </>
  );
};
