import { Modal } from 'components/UI/Modal/Modal';
import { useContext } from 'react';
import { CartContext } from 'store/cart-context';
import { Actions, CartItems, Total } from './Cart.styled';
import { CartItem } from './CartItem/CartItem';

export const Cart = ({ onHideCart }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.amount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = id => {};
  const addCartItemHandler = item => {};

  const cartItems = (
    <CartItems>
      {cartContext.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </CartItems>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <Total>
        <span>Всього</span>
        <span>{totalAmount}</span>
      </Total>
      <Actions>
        <button className="button--alt" onClick={onHideCart}>
          Закрити
        </button>
        {hasItems && <button className="button">Замовити</button>}
      </Actions>
    </Modal>
  );
};
console.log();
