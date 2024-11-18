'use client';

import styled from 'styled-components';

export const CommonButton = styled.button`
  text-transform: none;
  font-weight: 400;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 20.625em) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }
`;
