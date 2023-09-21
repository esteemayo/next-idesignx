'use client';

import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';
import { Option, StyledSelect } from '../form/StyledSelect';

type OptionTypes = {
  id: number;
  text: string;
};

interface SelectProps {
  name: string;
  label: string;
  options: Array<OptionTypes>;
  onChange(e: React.MouseEvent<HTMLFormControlsCollection>): void;
}

const Select: React.FC<SelectProps> = ({ name, label, options, onChange }) => {
  return (
    <FormGroup>
      <StyledSelect id={name} name={name} onChange={onChange} required>
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

// const Option = styled.option`
//   font-size: 1.4rem;
//   color: #bbb;
//   letter-spacing: 0.5rem;
// `;

export default Select;
