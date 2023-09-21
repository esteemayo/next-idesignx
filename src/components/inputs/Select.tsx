'use client';

import styled from 'styled-components';

interface SelectProps {
  name: string;
  label: string;
  options: Array<object>;
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

const FormGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  display: inline-block;
  border: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: var(--clr-white);
  color: var(--clr-gray-dark-2);
  border: 3px solid transparent;
  border-radius: 2px;
  outline-color: var(--clr-purple-light-3);

  &:focus {
    outline: none;
    border-bottom: 3px solid var(--clr-green);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
  }
`;

const Option = styled.option`
  font-size: 1.4rem;
  color: #bbb;
  letter-spacing: 0.5rem;
`;

export default Select;
