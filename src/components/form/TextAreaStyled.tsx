'use client';

import styled from 'styled-components';

import { CommonTextArea } from '../common/CommonTextArea';

interface ITextArea {
  error?: string;
}

export const TextAreaStyled = styled(CommonTextArea)<ITextArea>`
  background-color: transparent;
  border: 1px solid ${({ error }) => setBorderColor(error)};
  outline-color: ${({ error }) => setOutlineColor(error)};
  caret-color: ${({ error }) => setCaretColor(error)};

  &::placeholder {
    font-size: 1.4rem;
    color: ${({ error }) => setPlaceholderColor(error)};
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
