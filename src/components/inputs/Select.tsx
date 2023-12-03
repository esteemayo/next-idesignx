'use client';

import { FormGroup } from '../form/FormGroup';
import Error from '../form/ErrorMessage';
import { SelectStyled, StyledOption } from '../form/SelectStyled';

import { GenderList } from '@/types';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: GenderList;
  error?: string;
}

const Select = ({ name, label, options, error, ...rest }: SelectProps) => {
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
