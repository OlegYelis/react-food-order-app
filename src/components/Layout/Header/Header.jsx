import { HeaderWrapper, MainImage } from './Header.styled';
import bgImage from '../../../assets/sushi.jpg';
import { HeaderCartButton } from '../HeaderCartButton/HeaderCartButton';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <h1>Японська кухня</h1>
        <HeaderCartButton />
      </HeaderWrapper>
      <MainImage>
        <img src={bgImage} alt="sushi" />
      </MainImage>
    </>
  );
};
