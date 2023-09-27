import styled from 'styled-components';

export const TextAreaStyled = styled.textarea`
  width: 100%;
  display: inline-block;
  resize: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 2rem;
  background-color: var(--clr-white);
  color: var(--clr-gray-dark-2);
  border: 2px solid #aaa;
  outline-color: #979797;
  caret-color: var(--clr-purple-light-3);
  transition: all 0.3s;

  &::placeholder {
    font-size: 1.4rem;
    color: #bbb;
  }
`;
