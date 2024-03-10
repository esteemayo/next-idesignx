'use client';

import { FormGroup } from '../form/FormGroup';
import { Label } from '../form/Label';
import { StyledTextArea } from '../form/StyledTextArea';

import { FormTextAreaProps } from '@/types';

const FormTextArea = ({ name, label, path, ...rest }: FormTextAreaProps) => {
  return (
    <FormGroup>
      <StyledTextArea {...rest} id={name} name={name} path={path} required />
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
};

export default FormTextArea;
