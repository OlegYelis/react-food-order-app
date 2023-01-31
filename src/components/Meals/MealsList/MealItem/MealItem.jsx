import { MealDescription, ItemWrapper, MealPrice } from './MealItem.styled';

export const MealItem = ({ name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <ItemWrapper>
      <div>
        <h3>{name}</h3>
        <MealDescription>{description}</MealDescription>
        <MealPrice>{formattedPrice}</MealPrice>
      </div>
      <div></div>
    </ItemWrapper>
  );
};