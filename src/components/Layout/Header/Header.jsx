import { HeaderWrapper, MainImage } from './Header.styled';
import bgImage from '../../../assets/sushi.jpg';
import { HeaderCartButton } from '../HeaderCartButton/HeaderCartButton';

export const Header = ({ onShowCart }) => {
  return (
    <>
      <HeaderWrapper>
        <h1>Японська кухня</h1>
        <HeaderCartButton onClick={onShowCart} />
      </HeaderWrapper>
      <MainImage>
        <img src={bgImage} alt="sushi" />
      </MainImage>
    </>
  );
};
