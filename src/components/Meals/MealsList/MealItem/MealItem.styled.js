import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }
`;

export const MealDescription = styled.p`
  font-style: italic;
`;

export const MealPrice = styled.p`
  margin-bottom: 5px;
  margin-top: 0.25rem;
  font-weight: bold;
  color: #6b068a;
  font-size: 1.3rem;
`;
