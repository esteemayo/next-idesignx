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

  @media only screen and (min-width: 112.5em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }
`;
