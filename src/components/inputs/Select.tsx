'use client';

import { FC, InputHTMLAttributes } from 'react';

import { FormGroup } from '../form/FormGroup';
import Error from '../form/Error';
import { SelectStyled, StyledOption } from '../form/SelectStyled';

type OptionTypes = {
  id: number;
  text: string;
};

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<OptionTypes>;
  error?: string;
}

const Select: FC<SelectProps> = ({ name, label, options, error, ...rest }) => {
  return (
    <FormGroup>
      <SelectStyled {...rest} id={name} name={name} error={error}>
        <StyledOption value=''>{label}</StyledOption>
        {options.map((option) => {
          const { id, text } = option;
          return (
            <StyledOption key={id} value={text}>
              {text}
            </StyledOption>
          );
        })}
      </SelectStyled>
      {error && <Error message={error} />}
    </FormGroup>
  );
};

export default Select;
