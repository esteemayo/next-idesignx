'use client';

import styled from 'styled-components';

export const CommonSelect = styled.select`
  width: 100%;
  height: 5.8rem;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  border-radius: 2px;

  @media only screen and (max-width: 56.25em) {
    height: 6rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 50em) {
    height: 6.2rem;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 34.375em) {
    height: 6.4rem;
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 25em) {
    height: 6rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 106.25em) {
    height: 6rem;
    font-size: var(--default-font-size);
    padding: 1.7rem 2rem;
  }

  @media only screen and (min-width: 112.5em) {
    height: 6.7rem;
    font-size: 1.7rem;
    padding: 2rem;
  }

  @media only screen and (min-width: 125em) {
    height: 7.5rem;
    font-size: 2rem;
    padding: 2.25rem 2rem;
  }
`;
