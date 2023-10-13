'use client';

import { FC, InputHTMLAttributes } from 'react';

import { FormGroup } from '../form/FormGroup';
import { Label } from '../form/Label';
import { StyledInput } from '../form/StyleInput';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  path?: string;
}

const FormInput: FC<FormInputProps> = ({ name, label, path, ...rest }) => {
  return (
    <FormGroup>
      <StyledInput {...rest} id={name} name={name} path={path} required />
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
};

export default FormInput;
