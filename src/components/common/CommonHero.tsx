'use client';

import styled from 'styled-components';

export const CommonHero = styled.header`
  background-color: ${({ theme }) => theme.bgImg};
  color: var(--clr-white);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media only screen and (max-width: 64em) {
    background-attachment: scroll;
  }
`;
