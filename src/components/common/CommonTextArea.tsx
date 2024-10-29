'use client';

import styled from 'styled-components';

export const CommonTextArea = styled.textarea`
  width: 100%;
  display: inline-block;
  resize: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 2rem;
  color: var(--clr-gray-dark-2);
  transition: all 0.2s;

  @media only screen and (min-width: 112.5em) {
    font-size: 1.7rem;
    padding: 2rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
    padding: 2.25rem 2rem;
  }
`;
