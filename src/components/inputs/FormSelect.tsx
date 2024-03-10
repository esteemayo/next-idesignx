'use client';

import { FormGroup } from '../form/FormGroup';
import { Option, StyledSelect } from '../form/StyledSelect';

import { FormSelectProps } from '@/types';

const FormSelect = ({
  name,
  label,
  path,
  options,
  ...rest
}: FormSelectProps) => {
  return (
    <FormGroup>
      <StyledSelect {...rest} id={name} name={name} path={path} required>
        <Option value=''>{label}</Option>
        {options.map((option) => {
          const { id, text } = option;
          return (
            <Option key={id} value={text}>
              {text}
            </Option>
          );
        })}
      </StyledSelect>
    </FormGroup>
  );
};

export default FormSelect;
