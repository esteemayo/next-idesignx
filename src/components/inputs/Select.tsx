'use client';

import { ChangeEvent } from 'react';

import { FormGroup } from '../form/FormGroup';
import { SelectStyled, StyledOption } from '../form/SelectStyled';
import { Option, StyledSelect } from '../form/StyledSelect';

import { useActiveMode } from '@/hooks/useActiveMode';

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
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  label,
  options,
  style,
  onChange,
  error,
}) => {
  const { activeMode } = useActiveMode();

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
      <SelectStyled
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      >
        <StyledOption value='' mode={activeMode}>
          {label}
        </StyledOption>
        {options.map((option) => {
          const { id, text } = option;
          return (
            <StyledOption key={id} value={text}>
              {text}
            </StyledOption>
          );
        })}
      </SelectStyled>
    </FormGroup>
  );
};

export default Select;
