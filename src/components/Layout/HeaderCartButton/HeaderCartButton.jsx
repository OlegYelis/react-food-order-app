import { useContext, useEffect, useState } from 'react';
import { CartIcon } from 'components/Cart/CartIcon';
import { CartContext } from 'store/cart-context';
import {
  BadgeWrapper,
  CartButton,
  IconWrapper,
} from './HeaderCartButton.styled';

export const HeaderCartButton = ({ onClick }) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonClasses = isButtonAnimated ? 'bump' : '';
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <CartButton className={buttonClasses} onClick={onClick}>
      <IconWrapper>
        <CartIcon />
      </IconWrapper>
      <span>Корзина</span>
      <BadgeWrapper className="badge">{cartItemsNumber}</BadgeWrapper>
    </CartButton>
  );
};
