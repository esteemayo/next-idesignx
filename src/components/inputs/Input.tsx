'use client';

import { ChangeEvent } from 'react';

import { StyledInput } from '../form/StyleInput';
import { Label } from '../form/Label';
import { InputStyled } from '../form/InputStyled';
import { FormGroup } from '../form/FormGroup';
import { StyledLabel } from '../form/StyledLabel';

import { useActiveMode } from '@/hooks/useActiveMode';

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder: string;
  style?: string;
  path?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  value,
  placeholder,
  style,
  path,
  onChange,
  error,
}) => {
  const { activeMode } = useActiveMode();

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
          path={path}
          required
        />
        <Label htmlFor={name}>{label}</Label>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      {label && (
        <StyledLabel htmlFor={name} error={error} mode={activeMode}>
          {label}
        </StyledLabel>
      )}
      <InputStyled
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

export default Input;
