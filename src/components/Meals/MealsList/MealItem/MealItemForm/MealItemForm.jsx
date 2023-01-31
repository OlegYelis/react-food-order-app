import { Input } from 'components/UI/Input/Input';
import { ItemFormWrapper } from './MealItemForm.styled';

export const MealItemForm = () => {
  return (
    <ItemFormWrapper>
      <Input
        label="Кількість"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Додати</button>
    </ItemFormWrapper>
  );
};
