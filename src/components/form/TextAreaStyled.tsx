import styled from 'styled-components';

interface ITextArea {
  error?: string | undefined;
}

export const TextAreaStyled = styled.textarea<ITextArea>`
  width: 100%;
  display: inline-block;
  resize: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 2rem;
  background-color: var(--clr-white);
  color: var(--clr-gray-dark-2);
  border: 2px solid ${({ error }) => setBorderColor(error)};
  outline-color: ${({ error }) => setOutlineColor(error)};
  caret-color: ${({ error }) => setCaretColor(error)};
  transition: all 0.3s;

  &::placeholder {
    font-size: 1.4rem;
    color: ${({ error }) => setPlaceholderColor(error)};
  }
`;

const setBorderColor = (error: string | undefined) => {
  return error === 'true' ? '#f00' : '#aaa';
};

const setOutlineColor = (error: string | undefined) => {
  return error === 'true' ? '#f00' : '#979797';
};

const setCaretColor = (error: string | undefined) => {
  return error === 'true' ? '#f00' : 'var(--clr-purple-light-3)';
};

const setPlaceholderColor = (error: string | undefined) => {
  return error === 'true' ? '#f00' : '#bbb';
};
