import { Input } from 'components/UI/Input/Input';
import { useRef } from 'react';
import { ItemFormWrapper } from './MealItemForm.styled';

export const MealItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();

  const submitHandler = evt => {
    evt.preventDefault();

    const inputAmount = amountInputRef.current.value;

    if (inputAmount.trim().length === 0 || Number(inputAmount) < 1) {
      return;
    }

    onAddToCart(Number(inputAmount));
  };

  return (
    <ItemFormWrapper onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Кількість"
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">Додати</button>
    </ItemFormWrapper>
  );
};
