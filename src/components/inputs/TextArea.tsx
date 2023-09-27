'use client';

import { ChangeEvent } from 'react';

import { Label } from '../form/Label';
import { TextAreaStyled } from '../form/TextAreaStyled';
import { FormGroup } from '../form/FormGroup';
import { StyledTextArea } from '../form/StyledTextArea';

interface TextAreaProps {
  name: string;
  label: string;
  value?: string;
  placeholder: string;
  style?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  value,
  placeholder,
  style,
  onChange,
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
      <Label htmlFor={name}>{label}</Label>
      <TextAreaStyled
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </FormGroup>
  );
};

export default TextArea;
