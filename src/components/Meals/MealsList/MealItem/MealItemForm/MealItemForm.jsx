import { Input } from 'components/UI/Input/Input';
import { useRef, useState } from 'react';
import { ItemFormWrapper } from './MealItemForm.styled';

export const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = evt => {
    evt.preventDefault();

    const inputAmount = amountInputRef.current.value;

    if (
      inputAmount.trim().length === 0 ||
      Number(inputAmount) < 1 ||
      Number(inputAmount) > 10
    ) {
      setIsAmountValid(false);
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
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">Додати</button>
      {!isAmountValid && (
        <p>Будь-ласка введіть коректну кількість товару (від 1 до 10)</p>
      )}
    </ItemFormWrapper>
  );
};
