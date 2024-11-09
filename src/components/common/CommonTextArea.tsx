'use client';

import styled from 'styled-components';

export const CommonTextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  display: inline-block;
  resize: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 2rem;
  color: var(--clr-gray-dark-2);
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    height: 10.5rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 50em) {
    height: 11rem;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 34.375em) {
    height: 11.5rem;
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 25em) {
    height: 10.5rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 106.25em) {
    height: 10.5rem;
    font-size: 1.7rem;
    padding: 1.75rem 2rem;
  }

  @media only screen and (min-width: 112.5em) {
    height: 11rem;
    font-size: 1.7rem;
    padding: 2rem;
  }

  @media only screen and (min-width: 125em) {
    height: 12rem;
    font-size: 2rem;
    padding: 2.25rem 2rem;
  }
`;
