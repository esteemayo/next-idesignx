import styled from 'styled-components';

interface ISelect {
  error?: string | undefined;
}

export const SelectStyled = styled.select<ISelect>`
  width: 100%;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: ${({ error }) => setColor(error)};
  border: 1px solid ${({ error }) => setBorderColor(error)};
  border-radius: 2px;
  outline-color: #979797;
`;

export const StyledOption = styled.option`
  font-size: 1.4rem;
  color: var(--clr-gray-dark-2);
  letter-spacing: 0.5rem;
`;

const setColor = (error: string | undefined) => {
  return error ? 'var(--clr-red)' : 'var(--clr-gray-dark-2)';
};

const setBorderColor = (error: string | undefined) => {
  return error ? 'var(--clr-red)' : '#aaa';
};
