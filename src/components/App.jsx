import { Cart } from './Cart/Cart';
import { Header } from './Layout/Header/Header';
import { Meals } from './Meals/Meals';

export const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <Meals />
    </>
  );
};
