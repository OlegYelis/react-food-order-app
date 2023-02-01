import {
  CartItemWrapper,
  ItemActions,
  ItemSummary,
  SummaryAmount,
  SummaryPrice,
} from './CartItem.styled';

export const CartItem = ({ price, name, amount, onRemove, onAdd }) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <CartItemWrapper>
      <div>
        <h2>{name}</h2>
        <ItemSummary>
          <SummaryPrice>{fixedPrice}</SummaryPrice>
          <SummaryAmount>x {amount}</SummaryAmount>
        </ItemSummary>
      </div>
      <ItemActions>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </ItemActions>
    </CartItemWrapper>
  );
};
