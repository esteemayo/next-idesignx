'use client';

import { ChangeEvent } from 'react';

import { Label } from '../form/Label';
import { TextAreaStyled } from '../form/TextAreaStyled';
import { FormGroup } from '../form/FormGroup';
import { StyledTextArea } from '../form/StyledTextArea';
import Error from '../form/Error';
import { StyledLabel } from '../form/StyledLabel';

import { useActiveMode } from '@/hooks/useActiveMode';

interface TextAreaProps {
  name: string;
  label: string;
  value?: string;
  placeholder: string;
  style?: string;
  path?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
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
        <StyledTextArea
          id={name}
          name={name}
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
      <TextAreaStyled
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
      {error && <Error message={error} />}
    </FormGroup>
  );
};

export default TextArea;
