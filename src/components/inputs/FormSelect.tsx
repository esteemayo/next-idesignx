'use client';

import { FC, InputHTMLAttributes } from 'react';

import { FormGroup } from '../form/FormGroup';
import { Option, StyledSelect } from '../form/StyledSelect';

type OptionTypes = {
  id: number;
  text: string;
};

interface FormSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: Array<OptionTypes>;
}

const FormSelect: FC<FormSelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <FormGroup>
      <StyledSelect id={name} name={name} required>
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
