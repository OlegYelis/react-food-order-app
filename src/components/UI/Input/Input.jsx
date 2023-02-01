import { forwardRef } from 'react';
import { InputWrapper } from './Input.styled';

export const Input = forwardRef(({ label, input }, ref) => {
  return (
    <InputWrapper>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </InputWrapper>
  );
});
