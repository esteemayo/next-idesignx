'use client';

import { ChangeEvent } from 'react';

import { StyledInput } from '../form/StyleInput';
import { Label } from '../form/Label';
import { FormGroup } from '../form/FormGroup';
import { InputStyled } from '../InputStyled';

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder: string;
  style?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  value,
  placeholder,
  style,
  onChange,
}) => {
  if (style === 'true') {
    return (
      <FormGroup>
        <StyledInput
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
        <Label htmlFor={name}>{label}</Label>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputStyled
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </FormGroup>
  );
};

export default Input;
