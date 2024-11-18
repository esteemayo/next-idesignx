import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 13.5rem;
  height: 4rem;
  text-decoration: none;
  text-transform: capitalize;
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
    width: 14rem;
    height: 4.35rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 50em) {
    width: 15rem;
    height: 4.5rem;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 14rem;
    height: 4.25rem;
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 30em) {
    width: 13rem;
    height: 4rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 27.5em) {
    width: 12.8rem;
    height: 3.8rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 26em) {
    width: 12rem;
  }

  @media only screen and (max-width: 25em) {
    width: 11rem;
    font-size: 1.45rem;
  }

  @media only screen and (max-width: 24.375em) {
    width: 10rem;
  }

  @media only screen and (max-width: 23.125em) {
    height: 3.65rem;
  }

  @media only screen and (max-width: 22.5em) {
    width: 10rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 9rem;
    font-size: 1.35rem;
  }

  @media only screen and (max-width: 18.125em) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 17.5em) {
    width: 8rem;
    height: 3.25rem;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 15rem;
    height: 4.3rem;
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 112.5em) {
    width: 17rem;
    height: 4.8rem;
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    width: 20rem;
    height: 5.5rem;
    font-size: 2rem;
  }

  &:active {
    color: currentColor;
  }

  &:hover {
    opacity: 0.9;
  }
`;
