'use client';

import styled from 'styled-components';

export const CommonButton = styled.button`
  text-transform: none;
  height: 3.7rem;
  font-weight: 400;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    height: 3.85rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 50em) {
    height: 4rem;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 20.625em) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 106.25em) {
    height: 4rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 112.5em) {
    height: 4.5rem;
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    height: 5rem;
    font-size: 2rem;
  }
`;
