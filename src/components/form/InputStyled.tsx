import styled from 'styled-components';

interface IInput {
  error?: string | undefined;
}

export const InputStyled = styled.input<IInput>`
  width: 100%;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: transparent;
  color: var(--clr-gray-dark-2);
  border: 2px solid ${({ error }) => setBorderColor(error)};
  border-radius: 2px;
  outline-color: ${({ error }) => setOutlineColor(error)};
  caret-color: ${({ error }) => setCaretColor(error)};
  transition: all 0.3s;

  &::placeholder {
    font-size: 1.4rem;
    color: ${({ error }) => setPlaceholderColor(error)};
  }
`;

const setBorderColor = (error: string | undefined) => {
  return error === 'true' ? 'rgba(244, 63, 94, 1)' : '#aaa';
};

const setOutlineColor = (error: string | undefined) => {
  return error === 'true' ? 'rgba(244, 63, 94, 1)' : '#979797';
};

const setCaretColor = (error: string | undefined) => {
  return error === 'true'
    ? 'rgba(244, 63, 94, 1)'
    : 'var(--clr-purple-light-3)';
};

const setPlaceholderColor = (error: string | undefined) => {
  return error === 'true' ? 'rgba(244, 63, 94, 1)' : '#bbb';
};
