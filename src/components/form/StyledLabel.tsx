import styled from 'styled-components';

interface ILabel {
  error?: string | undefined;
  mode: string;
}

interface IColor {
  (error: string | undefined, mode: string): string;
}

export const StyledLabel = styled.label<ILabel>`
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ error, mode }) => setColor(error, mode)};
  margin-bottom: 1rem;

  &::after {
    content: '*';
    display: inline-block;
    color: ${({ error, mode }) => setColor(error, mode)};
  }
`;

const setColor: IColor = (error: string | undefined, mode: string): string => {
  return error
    ? 'var(--clr-red)'
    : mode === 'true'
    ? 'var(--clr-gray-light-2)'
    : 'var(--clr-gray-dark-2)';
};
