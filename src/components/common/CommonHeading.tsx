'use client';

import styled from 'styled-components';

export const CommonHeading = styled.h1`
  font-family: var(--font-display);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 1;

  @media only screen and (min-width: 112.5em) {
    font-size: 4.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 5rem;
  }
`;
