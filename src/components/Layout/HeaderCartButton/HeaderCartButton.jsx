import { CartIcon } from 'components/Cart/CartIcon';
import {
  BadgeWrapper,
  CartButton,
  IconWrapper,
} from './HeaderCartButton.styled';

export const HeaderCartButton = () => {
  return (
    <CartButton>
      <IconWrapper>
        <CartIcon />
      </IconWrapper>
      <span>Корзина</span>
      <BadgeWrapper className={'badge'}>0</BadgeWrapper>
    </CartButton>
  );
};
