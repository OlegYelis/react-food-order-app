import styled from '@emotion/styled';

export const CartButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #47035d;
  color: white;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2b0239;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #6d0d8d;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const IconWrapper = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

export const BadgeWrapper = styled.span`
  background-color: #a715d7;
  padding: 0.2rem 1rem;
  border-radius: 20px;
  margin-left: 1.5rem;
  font-weight: bold;
`;
