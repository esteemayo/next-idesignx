import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  border: none;
  height: 4rem;
  text-decoration: none;
  text-transform: capitalize;
  padding: 0.8rem 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.7rem;
  }

  /* @media only screen and (max-width: 34.375em) {
    font-size: 1.8rem;
  } */

  @media only screen and (max-width: 30em) {
    font-size: var(--default-font-size);
    padding: 0.8rem 2rem;
  }

  @media only screen and (max-width: 27.5em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 26.875em) {
    padding: 0.6rem 1.5rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.45rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.4rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.35rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  @media only screen and (max-width: 18.125em) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 106.25em) {
    height: 4.3rem;
    font-size: var(--default-font-size);
    padding: 1rem 3rem;
  }

  @media only screen and (min-width: 112.5em) {
    height: 4.8rem;
    padding: 1rem 3.2rem;
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    height: 5.5rem;
    padding: 1.2rem 3.5rem;
    font-size: 2rem;
  }

  &:active {
    color: currentColor;
  }

  &:hover {
    opacity: 0.9;
  }
`;
