'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import { MenuLinkProps } from '@/types';

interface ILink {
  mode: string;
}

const MenuLink = ({ url, label, mode }: MenuLinkProps) => {
  return (
    <Container>
      <StyledLink href={url} mode={mode}>
        {label}
      </StyledLink>
    </Container>
  );
};

const Container = styled.li`
  color: currentColor;
`;

const StyledLink = styled(Link)<ILink>`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 100%;
  padding: 1.5rem;
  color: inherit;
  border-radius: 2px;
  outline-color: ${({ theme }) => theme.outline};
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
    word-spacing: 1px;
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 1.2rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.8rem;
    padding: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
    padding: 2rem;
  }

  &:hover,
  &:active {
    background-color: ${({ mode }) => mode === 'true' && '#141a1f'};
    background-image: ${({ mode }) =>
      mode === 'false' &&
      css`
    linear-gradient(
      to right bottom,
      var(--clr-purple-dark-1),
      var(--clr-purple-light-1),
      var(--clr-purple-light-2),
      var(--clr-purple-light-3)
    )
    `};
    transform: translateY(-3px) scale(1.1);
  }
`;

export default MenuLink;
