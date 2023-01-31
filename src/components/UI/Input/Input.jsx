import { InputWrapper } from './Input.styled';

export const Input = ({ label, input }) => {
  return (
    <InputWrapper>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </InputWrapper>
  );
};
