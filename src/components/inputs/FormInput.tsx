'use client';

import { FormGroup } from '../form/FormGroup';
import { Label } from '../form/Label';
import { StyledInput } from '../form/StyleInput';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  path?: string;
}

const FormInput = ({ name, label, path, ...rest }: FormInputProps) => {
  return (
    <FormGroup>
      <StyledInput {...rest} id={name} name={name} path={path} required />
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
};

export default FormInput;
