'use client';

import { StyledLabel } from '../form/StyledLabel';
import { FormGroup } from '../form/FormGroup';
import { TextAreaStyled } from '../form/TextAreaStyled';
import ErrorMessage from '../form/ErrorMessage';

import { TextAreaProps } from '@/types';
import { useActiveMode } from '@/hooks/useActiveMode';

const TextArea = ({ name, label, error, ...rest }: TextAreaProps) => {
  const { activeMode } = useActiveMode();

  return (
    <FormGroup>
      <StyledLabel htmlFor={name} error={error} mode={activeMode}>
        {label}
      </StyledLabel>
      <TextAreaStyled {...rest} id={name} name={name} error={error} />
      {error && <ErrorMessage message={error} />}
    </FormGroup>
  );
};

export default TextArea;
