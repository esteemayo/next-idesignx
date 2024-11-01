'use client';

import styled from 'styled-components';

import { UploadInputProps } from '@/types';

const UploadInput = ({ id, label, onChange }: UploadInputProps) => {
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
    font-size: 100%;
    padding: 3px;
    color: var(--clr-purple-light-2);
    border-bottom: 1px solid currentColor;
    transition: all 0.2s;
    cursor: pointer;

    @media only screen and (max-width: 56.25em) {
      font-size: 1.7rem;
    }

    @media only screen and (max-width: 50em) {
      font-size: 1.8rem;
    }

    @media only screen and (max-width: 34.375em) {
      font-size: 1.9rem;
    }

    @media only screen and (max-width: 25em) {
      font-size: 1.7rem;
    }

    @media only screen and (min-width: 106.25em) {
      font-size: 1.7rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 1.9rem;
    }

    @media only screen and (min-width: 125em) {
      font-size: 2.1rem;
    }

    &:hover {
      background-color: var(--clr-purple-light-2);
      color: var(--clr-white);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
      transform: translateY(-2px);
    }
  }
`;

export default UploadInput;
