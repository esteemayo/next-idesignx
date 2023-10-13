'use client';

import { FC, InputHTMLAttributes } from 'react';

import { FormGroup } from '../form/FormGroup';
import { Label } from '../form/Label';
import { StyledTextArea } from '../form/StyledTextArea';

interface FormTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  path?: string;
}

const FormTextArea: FC<FormTextAreaProps> = ({
  name,
  label,
  path,
  ...rest
}) => {
  return (
    <FormGroup>
      <StyledTextArea {...rest} id={name} name={name} path={path} required />
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
};

export default FormTextArea;
