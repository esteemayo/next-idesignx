'use client';

import { ChangeEvent } from 'react';

import { FormGroup } from '../form/FormGroup';
import { Option, StyledSelect } from '../form/StyledSelect';

type OptionTypes = {
  id: number;
  text: string;
};

interface SelectProps {
  name: string;
  value?: string;
  label: string;
  options: Array<OptionTypes>;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  label,
  options,
  onChange,
}) => {
  return (
    <FormGroup>
      <StyledSelect
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      >
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

export default Select;
