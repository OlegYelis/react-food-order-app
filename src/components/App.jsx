import { useState } from 'react';
import { CartContextProvider } from 'store/CartContextProvider';
import { Cart } from './Cart/Cart';
import { Header } from './Layout/Header/Header';
import { Meals } from './Meals/Meals';

export const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <Meals />
    </CartContextProvider>
  );
};
