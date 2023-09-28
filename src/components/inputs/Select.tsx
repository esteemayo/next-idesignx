'use client';

import { ChangeEvent } from 'react';

import { FormGroup } from '../form/FormGroup';
import { Option, StyledSelect } from '../form/StyledSelect';
import { SelectStyled } from '../form/SelectStyled';

type OptionTypes = {
  id: number;
  text: string;
};

interface SelectProps {
  name: string;
  value?: string;
  label: string;
  options: Array<OptionTypes>;
  style?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  label,
  options,
  style,
  onChange,
}) => {
  if (style === 'true') {
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
  }

  return (
    <FormGroup>
      <SelectStyled id={name} name={name} value={value} onChange={onChange}>
        <Option value=''>{label}</Option>
        {options.map((option) => {
          const { id, text } = option;
          return (
            <Option key={id} value={text}>
              {text}
            </Option>
          );
        })}
      </SelectStyled>
    </FormGroup>
  );
};

export default Select;
