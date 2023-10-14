import styled from 'styled-components';
import { CommonSelect } from '../common/CommonSelect';

interface ISelect {
  error?: string | undefined;
}

export const SelectStyled = styled(CommonSelect)<ISelect>`
  background-color: ${({ theme }) => theme.bgInput};
  color: ${({ error }) => setColor(error)};
  border: 1px solid ${({ error }) => setBorderColor(error)};
  outline-color: ${({ error }) => setOulineColor(error)};
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

const setOulineColor = (error: string | undefined) => {
  return error ? 'var(--clr-red)' : '#979797';
};
