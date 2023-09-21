import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  border: none;
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

  &:active {
    color: currentColor;
  }

  &:hover {
    opacity: 0.9;
  }
`;
