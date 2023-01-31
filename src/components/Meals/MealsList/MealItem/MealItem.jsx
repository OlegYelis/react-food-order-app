import { MealDescription, ItemWrapper, MealPrice } from './MealItem.styled';
import { MealItemForm } from './MealItemForm/MealItemForm';

export const MealItem = ({ id, name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <ItemWrapper>
      <div>
        <h3>{name}</h3>
        <MealDescription>{description}</MealDescription>
        <MealPrice>{formattedPrice}</MealPrice>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </ItemWrapper>
  );
};
