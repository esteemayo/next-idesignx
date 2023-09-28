'use client';

import { ChangeEvent } from 'react';

import { Label } from '../form/Label';
import { TextAreaStyled } from '../form/TextAreaStyled';
import { FormGroup } from '../form/FormGroup';
import { StyledTextArea } from '../form/StyledTextArea';
import { StyledLabel } from '../form/StyledLabel';

interface TextAreaProps {
  name: string;
  label: string;
  value?: string;
  placeholder: string;
  style?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  value,
  placeholder,
  style,
  onChange,
  error,
}) => {
  if (style === 'true') {
    return (
      <FormGroup>
        <StyledTextArea
          id={name}
          name={name}
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
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <TextAreaStyled
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
    </FormGroup>
  );
};

export default TextArea;
