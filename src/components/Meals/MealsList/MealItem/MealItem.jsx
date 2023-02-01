import { useContext } from 'react';
import { CartContext } from 'store/cart-context';
import { MealDescription, ItemWrapper, MealPrice } from './MealItem.styled';
import { MealItemForm } from './MealItemForm/MealItemForm';

export const MealItem = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <ItemWrapper>
      <div>
        <h3>{name}</h3>
        <MealDescription>{description}</MealDescription>
        <MealPrice>{formattedPrice}</MealPrice>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </ItemWrapper>
  );
};
