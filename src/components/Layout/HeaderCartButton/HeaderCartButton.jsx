import { CartIcon } from 'components/Cart/CartIcon';
import { useContext } from 'react';
import { CartContext } from 'store/cart-context';
import {
  BadgeWrapper,
  CartButton,
  IconWrapper,
} from './HeaderCartButton.styled';

export const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <CartButton onClick={onClick}>
      <IconWrapper>
        <CartIcon />
      </IconWrapper>
      <span>Корзина</span>
      <BadgeWrapper className={'badge'}>{cartItemsNumber}</BadgeWrapper>
    </CartButton>
  );
};
