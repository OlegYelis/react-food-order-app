import { Modal } from 'components/UI/Modal/Modal';
import { Actions, CartItems, Total } from './Cart.styled';

export const Cart = () => {
  const cartItems = (
    <CartItems>
      {[].map(item => (
        <li>{item}</li>
      ))}
    </CartItems>
  );
  return (
    <Modal>
      {cartItems}
      <Total>
        <span>Всього</span>
        <span>49.99</span>
      </Total>
      <Actions>
        <button className="button--alt">Закрити</button>
        <button className="button">Замовити</button>
      </Actions>
    </Modal>
  );
};