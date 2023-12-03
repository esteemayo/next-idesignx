'use client';

import { StyledLabel } from '../form/StyledLabel';
import Error from '../form/ErrorMessage';
import { TextAreaStyled } from '../form/TextAreaStyled';
import { FormGroup } from '../form/FormGroup';

import { useActiveMode } from '@/hooks/useActiveMode';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string;
}

const TextArea = ({ name, label, error, ...rest }: TextAreaProps) => {
  const { activeMode } = useActiveMode();

  return (
    <FormGroup>
      <StyledLabel htmlFor={name} error={error} mode={activeMode}>
        {label}
      </StyledLabel>
      <TextAreaStyled {...rest} id={name} name={name} error={error} />
      {error && <Error message={error} />}
    </FormGroup>
  );
};

export default TextArea;
