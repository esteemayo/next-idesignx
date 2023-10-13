'use client';

import { FC, InputHTMLAttributes } from 'react';

import { InputStyled } from '../form/InputStyled';
import Error from '../form/Error';
import { StyledLabel } from '../form/StyledLabel';
import { FormGroup } from '../form/FormGroup';

import { useActiveMode } from '@/hooks/useActiveMode';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const Input: FC<InputProps> = ({
  name,
  label,
  error,
  ...rest
}) => {
  const { activeMode } = useActiveMode();

  return (
    <FormGroup>
      <StyledLabel htmlFor={name} error={error} mode={activeMode}>
        {label}
      </StyledLabel>
      <InputStyled
        {...rest}
        id={name}
        name={name}
        error={error}
      />
      {error && <Error message={error} />}
    </FormGroup>
  );
};

export default Input;
