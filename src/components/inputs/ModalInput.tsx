'use client';

import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';
import { StyledLabel } from '../form/StyledLabel';

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder: string;
  style?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  error?: string;
}

interface IInput {
  error?: string | undefined;
}

const ModalInput: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  value,
  placeholder,
  style,
  onChange,
  error,
}) => {
  return (
    <FormGroup>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
    </FormGroup>
  );
};

const Input = styled.input<IInput>`
  width: 100%;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: transparent;
  color: var(--clr-gray-dark-2);
  border: 2px solid ${({ error }) => setBorderColor(error)};
  border-radius: 2px;
  outline-color: #979797;
  caret-color: var(--clr-purple-light-3);
  transition: all 0.3s;

  &::placeholder {
    font-size: 1.4rem;
    color: #bbb;
  }
`;

const setBorderColor = (error: string | undefined) => {
  return error === 'true' ? '#f00' : '#aaa';
};

export default ModalInput;
