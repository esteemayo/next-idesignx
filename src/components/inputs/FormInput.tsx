'use client';

import { FC, InputHTMLAttributes } from 'react';

import { FormGroup } from '../form/FormGroup';
import { Label } from '../form/Label';
import { StyledInput } from '../form/StyleInput';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FormInput: FC<FormInputProps> = ({ name, label, ...rest }) => {
  return (
    <FormGroup>
      <StyledInput {...rest} id={name} name={name} required />
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
};

export default FormInput;
