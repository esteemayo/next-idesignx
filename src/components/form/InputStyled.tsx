import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: transparent;
  color: var(--clr-gray-dark-2);
  border: 2px solid #aaa;
  border-radius: 2px;
  outline-color: #979797;
  caret-color: var(--clr-purple-light-3);
  transition: all 0.3s;

  &::placeholder {
    font-size: 1.4rem;
    color: #bbb;
  }
`;
