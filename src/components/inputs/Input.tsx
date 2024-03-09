'use client';

import { InputStyled } from '../form/InputStyled';
import { FormGroup } from '../form/FormGroup';
import { StyledLabel } from '../form/StyledLabel';
import ErrorMessage from '../form/ErrorMessage';

import { InputProps } from '@/types';
import { useActiveMode } from '@/hooks/useActiveMode';

const Input = ({ name, label, error, ...rest }: InputProps) => {
  const { activeMode } = useActiveMode();

  return (
    <FormGroup>
      <StyledLabel htmlFor={name} error={error} mode={activeMode}>
        {label}
      </StyledLabel>
      <InputStyled {...rest} id={name} name={name} error={error} />
      {error && <ErrorMessage message={error} />}
    </FormGroup>
  );
};

export default Input;
