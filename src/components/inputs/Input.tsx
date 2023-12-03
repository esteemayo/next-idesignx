'use client';

import { InputStyled } from '../form/InputStyled';
import Error from '../form/ErrorMessage';
import { StyledLabel } from '../form/StyledLabel';
import { FormGroup } from '../form/FormGroup';

import { useActiveMode } from '@/hooks/useActiveMode';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const Input = ({ name, label, error, ...rest }: InputProps) => {
  const { activeMode } = useActiveMode();

  return (
    <FormGroup>
      <StyledLabel htmlFor={name} error={error} mode={activeMode}>
        {label}
      </StyledLabel>
      <InputStyled {...rest} id={name} name={name} error={error} />
      {error && <Error message={error} />}
    </FormGroup>
  );
};

export default Input;
