import styled from 'styled-components';

interface ISelect {
  path?: string;
}

export const StyledSelect = styled.select<ISelect>`
  width: 100%;
  display: inline-block;
  border: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${({ path, theme }) =>
    path === 'design' ? theme.bgDesignInput : theme.bgInput};
  color: var(--clr-gray-dark-2);
  border: 3px solid transparent;
  border-radius: 2px;

  &:focus {
    outline: none;
    border-bottom: 3px solid var(--clr-green);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
  }
`;

export const Option = styled.option`
  font-size: 1.4rem;
  color: #bbb;
  letter-spacing: 0.5rem;
`;
