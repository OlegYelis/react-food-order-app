import styled from '@emotion/styled';

export const CartItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #6b068a;
  padding: 1rem 0;
  margin: 1rem 0;

  h2 {
    margin: 0 0 1rem 1rem;
    color: #363636;
  }

  button {
    font: inherit;
    font-weight: bold;
    font-size: 1.5rem;
    color: #6b068a;
    border: 1px solid #6b068a;
    width: 3rem;
    text-align: center;
    border-radius: 7px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  button:hover,
  button:active {
    background-color: #47035d;
    color: white;
  }
`;

export const ItemSummary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryPrice = styled.span`
  font-weight: bold;
  margin: 0 1rem;
  color: #6b068a;
`;

export const SummaryAmount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 7px;
`;

export const ItemActions = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
