import styled from 'styled-components';

export const SelectStyled = styled.select`
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
`;

export const Option = styled.option`
  font-size: 1.4rem;
  color: var(--clr-gray-dark-2);
  letter-spacing: 0.5rem;
`;
