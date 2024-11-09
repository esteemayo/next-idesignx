'use client';

import styled from 'styled-components';

import { CommonInput } from '../common/CommonInput';

interface IInput {
  error?: string;
}

export const InputStyled = styled(CommonInput)<IInput>`
  background-color: transparent;
  border: 1px solid ${({ error }) => setBorderColor(error)};
  outline-color: ${({ error }) => setOutlineColor(error)};
  caret-color: ${({ error }) => setCaretColor(error)};

  &::placeholder {
    font-size: 1.4rem;
    color: ${({ error }) => setPlaceholderColor(error)};

    @media only screen and (max-width: 56.25em) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 50em) {
      font-size: var(--default-font-size);
    }

    @media only screen and (min-width: 106.25em) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: var(--default-font-size);
    }

    @media only screen and (min-width: 125em) {
      font-size: 1.8rem;
    }
  }
`;

const setBorderColor = (error?: string) => {
  return error ? 'var(--clr-red)' : '#aaa';
};

const setOutlineColor = (error?: string) => {
  return error ? 'var(--clr-red)' : '#979797';
};

const setCaretColor = (error?: string) => {
  return error ? 'var(--clr-red)' : 'var(--clr-purple-light-3)';
};

const setPlaceholderColor = (error?: string) => {
  return error ? 'var(--clr-red)' : '#bbb';
};
