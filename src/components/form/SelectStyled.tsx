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
  background-color: transparent;
  color: ${({ error }) => setColor(error)};
  border: 2px solid ${({ error }) => setBorderColor(error)};
  border-radius: 2px;
  outline-color: #979797;
`;

export const StyledOption = styled.option`
  font-size: 1.4rem;
  color: var(--clr-gray-dark-2);
  letter-spacing: 0.5rem;
`;

const setColor = (error: string | undefined) => {
  return error === 'true' ? 'rgba(244, 63, 94, 1)' : 'var(--clr-gray-dark-2)';
};

const setBorderColor = (error: string | undefined) => {
  return error === 'true' ? 'rgba(244, 63, 94, 1)' : '#aaa';
};
