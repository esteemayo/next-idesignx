import styled from 'styled-components';
import { CommonInput } from '../common/CommonInput';

interface IInput {
  error?: string | undefined;
}

export const InputStyled = styled(CommonInput)<IInput>`
  background-color: transparent;
  border: 1px solid ${({ error }) => setBorderColor(error)};
  outline-color: ${({ error }) => setOutlineColor(error)};
  caret-color: ${({ error }) => setCaretColor(error)};

  &::placeholder {
    font-size: 1.4rem;
    color: ${({ error }) => setPlaceholderColor(error)};
  }
`;

const setBorderColor = (error: string | undefined) => {
  return error ? 'var(--clr-red)' : '#aaa';
};

const setOutlineColor = (error: string | undefined) => {
  return error ? 'var(--clr-red)' : '#979797';
};

const setCaretColor = (error: string | undefined) => {
  return error ? 'var(--clr-red)' : 'var(--clr-purple-light-3)';
};

const setPlaceholderColor = (error: string | undefined) => {
  return error ? 'var(--clr-red)' : '#bbb';
};
