'use client';

import styled from 'styled-components';

export const CommonHeading = styled.h1`
  font-family: var(--font-display);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 1;

  @media only screen and (max-width: 56.25em) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 3.8rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 2.6rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 4.6rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 4.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 5rem;
  }
`;
