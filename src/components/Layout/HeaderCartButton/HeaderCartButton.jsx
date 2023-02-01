import { CartIcon } from 'components/Cart/CartIcon';
import {
  BadgeWrapper,
  CartButton,
  IconWrapper,
} from './HeaderCartButton.styled';

export const HeaderCartButton = ({ onClick }) => {
  return (
    <CartButton onClick={onClick}>
      <IconWrapper>
        <CartIcon />
      </IconWrapper>
      <span>Корзина</span>
      <BadgeWrapper className={'badge'}>0</BadgeWrapper>
    </CartButton>
  );
};
