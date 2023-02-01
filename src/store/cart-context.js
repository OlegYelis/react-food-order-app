import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  amount: 0,
  addItem: item => {},
  removeItem: id => {},
});
