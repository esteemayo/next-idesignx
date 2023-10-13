'use client';

import { FC, InputHTMLAttributes } from 'react';

import { FormGroup } from '../form/FormGroup';
import { Label } from '../form/Label';
import { StyledTextArea } from '../form/StyledTextArea';

interface FormTextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FormTextArea: FC<FormTextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <FormGroup>
      <StyledTextArea {...rest} id={name} name={name} required />
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
};

export default FormTextArea;
