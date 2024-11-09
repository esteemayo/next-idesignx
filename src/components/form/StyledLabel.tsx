'use client';

import styled from 'styled-components';

interface ILabel {
  error?: string;
  mode: string;
}

interface IColor {
  (mode: string, error?: string): string;
}

export const StyledLabel = styled.label<ILabel>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 30%;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ mode, error }) => setColor(mode, error)};
  margin-bottom: 1rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 25em) {
    width: 40%;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 125em) {
    font-size: 1.8rem;
  }

  &::after {
    content: '*';
    display: inline-block;
    font-size: inherit;
    color: ${({ mode, error }) => setColor(mode, error)};
  }
`;

const setColor: IColor = (mode: string, error?: string): string => {
  return error
    ? 'var(--clr-red)'
    : mode === 'true'
    ? 'var(--clr-gray-light-2)'
    : 'var(--clr-gray-dark-2)';
};
