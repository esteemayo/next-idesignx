'use client';

import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface UploadInputProps {
  id: string;
  label: string;
  onChange(): ChangeEvent<HTMLInputElement>;
}

const UploadInput: React.FC<UploadInputProps> = ({ id, label, onChange }) => {
  return (
    <Container>
      <Input id={id} onChange={onChange} />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label``;

const Input = styled.input.attrs({
  type: 'file',
})`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${Label} {
    outline: 3px solid var(--clr-purple-light-2);
    outline-offset: 3px;
  }

  & + ${Label} {
    display: inline-block;
    text-decoration: none;
    padding: 3px;
    color: var(--clr-purple-light-2);
    border-bottom: 1px solid currentColor;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--clr-purple-light-2);
      color: var(--clr-white);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
      transform: translateY(-2px);
    }
  }
`;

export default UploadInput;
